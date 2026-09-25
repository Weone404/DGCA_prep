"use client";
 function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
// Push-to-talk recorder. Captures microphone audio in any modern browser (Safari included),
// converts it to 16 kHz mono and sends it to the local Whisper route for transcription.

let stream = null;
let ctx = null;
let proc = null;
let src = null;
let chunks = [];
let rate = 48000;
let recognition = null;
let recognitionDone = null;
let recognitionText = '';
let recognitionError = null;

async function cleanupRecorder() {
  if (proc) proc.disconnect();
  if (src) src.disconnect();
  proc = null;
  src = null;
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = null;
  }
  if (ctx) {
    await ctx.close().catch(() => {});
    ctx = null;
  }
}

function getSpeechRecognition() {
  if (typeof window === 'undefined') return null;
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) return null;
  const next = new Recognition();
  next.continuous = true;
  next.interimResults = false;
  next.lang = 'en-IN';
  return next;
}

export async function startRecording() {
  if (!_optionalChain([navigator, 'access', _ => _.mediaDevices, 'optionalAccess', _2 => _2.getUserMedia])) throw new Error("unsupported");
  try {
    stream ??= await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
    const AC = window.AudioContext || (window ).webkitAudioContext;
    ctx ??= new AC();
    if (ctx.state === "suspended") await ctx.resume();
    rate = ctx.sampleRate;
    chunks = [];
    src = ctx.createMediaStreamSource(stream);
    proc = ctx.createScriptProcessor(4096, 1, 1);
    proc.onaudioprocess = (e) => chunks.push(new Float32Array(e.inputBuffer.getChannelData(0)));
    const mute = ctx.createGain();
    mute.gain.value = 0;
    src.connect(proc);
    proc.connect(mute).connect(ctx.destination);

    recognitionText = '';
    recognitionError = null;
    recognition = getSpeechRecognition();
    if (recognition) {
      recognitionDone = new Promise((resolve) => {
        recognition.onresult = (event) => {
          for (let i = event.resultIndex; i < event.results.length; i += 1) {
            if (event.results[i].isFinal) recognitionText += ` ${event.results[i][0].transcript}`;
          }
        };
        recognition.onerror = (event) => {
          recognitionError = new Error(event.error || 'Speech recognition failed');
        };
        recognition.onend = resolve;
      });
      recognition.start();
      status('Listening… speak your transmission');
    } else {
      status('Browser speech recognition is unavailable; recording fallback is active');
    }
  } catch (error) {
    await cleanupRecorder();
    throw error;
  }
}

/** Resample to 16 kHz in plain JS (Safari's OfflineAudioContext rejects 16 kHz). Averages samples to avoid aliasing. */
function to16k(data, from) {
  if (from === 16000) return data;
  const ratio = from / 16000;
  const out = new Float32Array(Math.floor(data.length / ratio));
  for (let i = 0; i < out.length; i++) {
    const start = Math.floor(i * ratio), end = Math.min(data.length, Math.floor((i + 1) * ratio));
    let sum = 0;
    for (let j = start; j < end; j++) sum += data[j];
    out[i] = end > start ? sum / (end - start) : _nullishCoalesce(data[start], () => ( 0));
  }
  return out;
}

/** Stops recording and returns the transcript ("" if nothing was said). */
export async function stopRecording() {
  if (recognition) {
    try { recognition.stop(); } catch (error) { /* already stopped */ }
    await Promise.race([recognitionDone, new Promise((resolve) => setTimeout(resolve, 1500))]);
    recognition = null;
    recognitionDone = null;
    if (recognitionText.trim()) {
      await cleanupRecorder();
      status('Transmission transcribed');
      const result = cleanTranscript(recognitionText);
      recognitionText = '';
      return result;
    }
  }
  const total = chunks.reduce((n, c) => n + c.length, 0);
  try {
    if (total < rate * 0.3) return "";
    const all = new Float32Array(total);
    let o = 0;
    for (const c of chunks) { all.set(c, o); o += c.length; }
    chunks = [];
    const pcm = to16k(all, rate);
    return cleanTranscript(await transcribe(pcm));
  } finally {
    await cleanupRecorder();
    recognitionError = null;
  }
}

/* ---------- speech engine: server (local Whisper) or in-browser (for hosted sites) ---------- */


const CONFIGURED = (process.env.NEXT_PUBLIC_SPEECH_MODE || "auto") ;
let mode = CONFIGURED === "auto" ? null : CONFIGURED;
const listeners = new Set();
const status = (s) => listeners.forEach((f) => f(s));

/** Subscribe to speech-engine status text ("Downloading speech model 40%", ...). Returns unsubscribe. */
export function onSpeechStatus(f) {
  listeners.add(f);
  return () => { listeners.delete(f); };
}

async function serverTranscribe(pcm) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), 60000);
  try {
    const r = await fetch("/api/rtr/stt", { method: "POST", headers: { "Content-Type": "application/octet-stream" }, body: pcm.buffer , signal: ctl.signal });
    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      throw Object.assign(new Error(`Speech server error ${r.status}${detail ? `: ${detail.slice(0, 200)}` : ""}`), { server: true });
    }
    return ((await r.json()) ).text;
  } finally { clearTimeout(t); }
}

let worker = null;
let seq = 0;
const pending = new Map();

function browserWorker() {
  if (!worker) {
    worker = new Worker(new URL("./stt.worker.js", import.meta.url), { type: "module" });
    worker.onmessage = (e) => {
      const m = e.data ;
      if (m.progress != null) status(`Downloading speech model ${Math.round(m.progress)}% (first time only)`);
      if (m.ready) status("Speech engine ready (runs in your browser)");
      if (m.id != null) {
        const p = pending.get(m.id);
        pending.delete(m.id);
        if (m.error) _optionalChain([p, 'optionalAccess', _7 => _7.fail, 'call', _8 => _8(new Error(m.error))]); else _optionalChain([p, 'optionalAccess', _9 => _9.ok, 'call', _10 => _10(m.text || "")]);
      }
    };
  }
  return worker;
}

function browserTranscribe(pcm) {
  const w = browserWorker();
  const id = ++seq;
  return new Promise((ok, fail) => {
    pending.set(id, { ok, fail });
    w.postMessage({ id, pcm }, [pcm.buffer]);
  });
}

async function transcribe(pcm) {
  if (mode !== "browser") {
    try {
      const t = await serverTranscribe(pcm.slice());
      mode = "server";
      return t;
    } catch (e) {
      // No speech server (static hosting / serverless): switch to the in-browser engine, unless forced.
      if (CONFIGURED === "server") throw e;
      mode = "browser";
      status("Switching to in-browser speech engine…");
    }
  }
  return browserTranscribe(pcm);
}

/** Whisper writes numbers compactly ("1214", "FL280", "1009r"); tidy the obvious cases for display. */
function cleanTranscript(t) {
  return t
    .replace(/\[.*?\]|\(.*?\)/g, "")
    .replace(/(\d)r\b/gi, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** Warm the speech engine in the background so the first transmission is quick. */
export function warmMic() {
  if (mode === "browser") { browserWorker().postMessage({ warm: true }); return; }
  fetch("/api/rtr/stt?ping=1")
    .then((r) => { if (!r.ok) throw new Error(); })
    .catch(() => { if (CONFIGURED !== "server") { mode = "browser"; browserWorker().postMessage({ warm: true }); } });
}
