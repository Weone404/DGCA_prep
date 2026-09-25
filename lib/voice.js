"use client";
 function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
// Radio voice engine.
// Speech comes from the local neural TTS route (/api/rtr/tts, Kokoro female voices), played through
// Web Audio with an optional VHF radio treatment. If the route is unavailable it falls back to
// the best female system voice.

 








export const defaultVoiceSettings = { radio: "light", rate: 1, atcVoice: "in_1", pilotVoice: "in_2" };

// Filled from the server (/api/rtr/tts?voices=1); this is the offline default.
export const VOICE_OPTIONS = [
  ["in_1", "English (India)"],
  ["af_heart", "Heart (US English)"],
  ["af_bella", "Bella (US English)"],
  ["bf_emma", "Emma (British English)"],
];
let voiceListP = null;
export function fetchVoiceOptions() {
  voiceListP ??= fetch("/api/rtr/tts?voices=1").then((r) => r.json()).then((j) => Array.isArray(j.voices) && j.voices.length ? j.voices : VOICE_OPTIONS).catch(() => VOICE_OPTIONS);
  return voiceListP;
}

export function loadVoiceSettings() {
  try {
    const v = JSON.parse(localStorage.getItem("rtr-voice3") || "{}");
    return { ...defaultVoiceSettings, ...v };
  } catch (e2) { return defaultVoiceSettings; }
}
export function saveVoiceSettings(v) {
  try { localStorage.setItem("rtr-voice3", JSON.stringify(v)); } catch (e3) { /* storage blocked */ }
}

export { spellPhonetic, toRadioSpeech } from "./speech-text";
import { toRadioSpeech } from "./speech-text";

/* ---------------- audio graph ---------------- */

let ctx = null;
let noiseBuf = null;

function audio() {
  if (typeof window === "undefined") return null;
  const AC = window.AudioContext || (window ).webkitAudioContext;
  if (!AC) return null;
  if (!ctx) {
    ctx = new AC();
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function noiseBurst(c, gain, dur) {
  const src = c.createBufferSource();
  src.buffer = noiseBuf;
  const bp = c.createBiquadFilter();
  bp.type = "bandpass"; bp.frequency.value = 2400; bp.Q.value = 0.8;
  const g = c.createGain();
  g.gain.setValueAtTime(gain, c.currentTime);
  g.gain.linearRampToValueAtTime(0, c.currentTime + dur);
  src.connect(bp).connect(g).connect(c.destination);
  src.start(); src.stop(c.currentTime + dur + 0.02);
}

function click(c, f, vol) {
  const o = c.createOscillator(), g = c.createGain();
  o.type = "sine"; o.frequency.value = f;
  g.gain.setValueAtTime(vol, c.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.04);
  o.connect(g).connect(c.destination);
  o.start(); o.stop(c.currentTime + 0.05);
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/** Plays a decoded buffer through the radio chain; resolves when finished. */
function playBuffer(c, buf, fx) {
  return new Promise((resolve) => {
    const src = c.createBufferSource();
    src.buffer = buf;
    let node = src;
    if (fx !== "off") {
      // Keep the voice band clear: gentle band-limit for "light", narrow VHF band for "full".
      const hp = c.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = fx === "full" ? 350 : 180;
      const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = fx === "full" ? 3200 : 6500;
      const comp = c.createDynamicsCompressor();
      comp.threshold.value = -22; comp.ratio.value = 3; comp.attack.value = 0.005; comp.release.value = 0.15;
      node.connect(hp); hp.connect(lp); lp.connect(comp); node = comp;
    }
    const out = c.createGain();
    out.gain.value = fx === "full" ? 1.25 : 1.1;
    node.connect(out).connect(c.destination);
    let hiss = null;
    if (fx === "full") {
      hiss = c.createBufferSource(); hiss.buffer = noiseBuf; hiss.loop = true;
      const bp = c.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 1800; bp.Q.value = 0.5;
      const hg = c.createGain(); hg.gain.value = 0.012;
      hiss.connect(bp).connect(hg).connect(c.destination); hiss.start();
    }
    current = src;
    src.onended = () => { try { _optionalChain([hiss, 'optionalAccess', _ => _.stop, 'call', _2 => _2()]); } catch (e4) { /* stopped */ } if (current === src) current = null; resolve(); };
    src.start();
  });
}

/* ---------------- speak ---------------- */

const bufferCache = new Map();
let current = null;
let generation = 0;
let serverOk = null;

// Static audio exported for hosting (public/audio/manifest.json). Missing on local dev: that's fine.
let manifestP = null;
function staticManifest() {
  manifestP ??= fetch("/audio/manifest.json").then((r) => (r.ok ? r.json() : {})).catch(() => ({}));
  return manifestP;
}

async function fetchWithTimeout(url, ms) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), ms);
  try {
    const r = await fetch(url, { signal: ctl.signal });
    if (!r.ok) throw new Error(`audio ${r.status}`);
    return await r.arrayBuffer();
  } finally { clearTimeout(t); }
}

function fetchBuffer(c, text, voice, rate) {
  const key = `${voice}|${rate}|${text}`;
  let p = bufferCache.get(key);
  if (!p) {
    p = (async () => {
      const file = (await staticManifest())[key];
      if (file) {
        try { return await c.decodeAudioData(await fetchWithTimeout(`/audio/${file}`, 20000)); } catch (e5) { /* fall through to live voice */ }
      }
      if (serverOk === false) throw new Error("no voice server");
      const url = `/api/rtr/tts?voice=${voice}&speed=${rate}&text=${encodeURIComponent(text)}`;
      let lastErr;
      for (let attempt = 0; attempt < 2; attempt++) { // one retry for flaky networks
        try { return await c.decodeAudioData(await fetchWithTimeout(url, 45000)); } catch (e) { lastErr = e; }
      }
      throw lastErr;
    })();
    p.catch(() => bufferCache.delete(key));
    bufferCache.set(key, p);
  }
  return p;
}

/** Load the voice model in the background so the first line plays quickly. */
export function warmVoice() {
  if (typeof window === "undefined" || serverOk !== null) return;
  fetch("/api/rtr/tts?warm=1").then((r) => { serverOk = r.ok; }).catch(() => { serverOk = false; });
}

export function stopSpeaking() {
  generation++;
  try { _optionalChain([current, 'optionalAccess', _3 => _3.stop, 'call', _4 => _4()]); } catch (e6) { /* already stopped */ }
  current = null;
  if (typeof window !== "undefined" && "speechSynthesis" in window) speechSynthesis.cancel();
}

/** Pre-fetch lines (e.g. a whole conversation) so playback has no gaps. */
export function preload(lines, settings) {
  const c = audio();
  if (!c) return;
  for (const l of lines) void fetchBuffer(c, toRadioSpeech(l.t), l.s === "ATC" ? settings.atcVoice : settings.pilotVoice, rateFor(l.s, settings)).catch(() => {});
}

const rateFor = (role, s) => Math.round((role === "ATC" ? 1.05 : 1.0) * s.rate * 100) / 100;

export async function speak(text, role, settings = defaultVoiceSettings, onLoading) {
  const c = audio();
  const my = ++generation;
  const spoken = toRadioSpeech(text);
  const voice = role === "ATC" ? settings.atcVoice : settings.pilotVoice;
  if (c) {
    try {
      _optionalChain([onLoading, 'optionalCall', _5 => _5(true)]);
      const buf = await fetchBuffer(c, spoken, voice, rateFor(role, settings));
      _optionalChain([onLoading, 'optionalCall', _6 => _6(false)]);
      if (my !== generation) return;
      if (settings.radio !== "off") { click(c, 1600, 0.05); noiseBurst(c, 0.06, 0.07); await wait(90); }
      if (my !== generation) return;
      await playBuffer(c, buf, settings.radio);
      if (settings.radio !== "off" && my === generation) { noiseBurst(c, settings.radio === "full" ? 0.12 : 0.05, 0.12); await wait(130); }
      return;
    } catch (e7) {
      _optionalChain([onLoading, 'optionalCall', _7 => _7(false)]);
      // fall back to the system voice for this line
    }
  }
  await systemSpeak(spoken, role, settings, my);
}

/* ---------------- fallback: system voice ---------------- */

const FEMALE_PREF = ["Isha", "Veena", "Lekha", "Samantha", "Ava", "Allison", "Susan", "Karen", "Moira", "Tessa", "Serena", "Veena", "Google UK English Female", "Google US English", "Microsoft Aria", "Microsoft Jenny", "Microsoft Zira"];

function systemSpeak(text, role, settings, my) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return Promise.resolve();
  const voices = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith("en"));
  const preferredId = role === "ATC" ? settings.atcVoice : settings.pilotVoice;
  const preferred = preferredId === "in_1"
    ? voices.find((v) => /india|en-in|heera|veena|ravi/i.test(`${v.name} ${v.lang}`))
    : preferredId === "in_2"
      ? voices.find((v) => /india|en-in|heera|veena|ravi/i.test(`${v.name} ${v.lang}`) && v.name !== voices.find((candidate) => /india|en-in|heera|veena|ravi/i.test(`${candidate.name} ${candidate.lang}`))?.name)
      : voices.find((v) => v.name.toLowerCase().includes(String(preferredId || '').toLowerCase()));
  const ranked = FEMALE_PREF.map((n) => voices.find((v) => v.name.includes(n))).filter(Boolean);
  const v = preferred || (role === "ATC" ? ranked[0] : _nullishCoalesce(ranked[1], () => ranked[0]));
  return new Promise((resolve) => {
    if (my !== generation) return resolve();
    const u = new SpeechSynthesisUtterance(text);
    if (v) { u.voice = v; u.lang = v.lang; }
    u.rate = 0.95 * settings.rate;
    if (settings.radio !== "off") {
      const c = audio();
      if (c) { click(c, 1600, 0.05); noiseBurst(c, 0.06, 0.07); }
    }
    u.onend = () => resolve();
    u.onerror = () => resolve();
    speechSynthesis.speak(u);
  });
}

/** Play several lines in turn with a natural gap between transmissions. */
export async function playSequence(lines, settings, onLine, isCancelled) {
  preload(lines, settings);
  for (let i = 0; i < lines.length; i++) {
    if (_optionalChain([isCancelled, 'optionalCall', _8 => _8()])) return;
    _optionalChain([onLine, 'optionalCall', _9 => _9(i)]);
    await speak(lines[i].t, lines[i].s, settings);
    if (_optionalChain([isCancelled, 'optionalCall', _10 => _10()])) return;
    await wait(500);
  }
  _optionalChain([onLine, 'optionalCall', _11 => _11(-1)]);
}

export function pttBeep(open) {
  const c = audio();
  if (c) click(c, open ? 1800 : 1100, 0.06);
}
