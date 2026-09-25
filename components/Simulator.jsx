"use client";
import React from 'react';
const _jsxFileName = "D:\\RTR 2\\RTR\\components\\Simulator.tsx"; function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { EXAM_MINUTES, PASS_MARK } from "@/lib/exams";
import { grade, gradeLabel, scoreAnswer } from "@/lib/scoring";
import { clearProgress, loadProgress, saveProgress, } from "@/lib/progress";
import { defaultVoiceSettings, loadVoiceSettings, preload, pttBeep, saveVoiceSettings, speak, stopSpeaking, warmVoice, } from "@/lib/voice";
import { onSpeechStatus, startRecording, stopRecording, warmMic } from "@/lib/recorder";
import VoiceControls from "./VoiceControls";
import dynamic from "next/dynamic";
import { useOnline } from "@/lib/useOnline";

// The chart is heavy SVG; load it after the controls so the page is usable sooner.
const Chart = dynamic(() => import("./Chart"), { ssr: false, loading: () => React.createElement('div', { className: "card chart-card" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}, React.createElement('div', { className: "chart skeleton" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}} )) });
import { Icon } from "./Icons";

const LIMIT = EXAM_MINUTES * 60;
const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

const fresh = (n) => ({ cur: 0, elapsed: 0, finished: false, results: Array.from({ length: n }, () => ({ best: null, attempts: [] })) });

export default function Simulator({ exam }) {
  const router = useRouter();
  const N = exam.questions.length;
  const [st, setSt] = useState(() => fresh(N));
  const [loaded, setLoaded] = useState(false);
  const [hideText, setHideText] = useState(false);
  const [showAns, setShowAns] = useState({});
  const [modal, setModal] = useState(null);
  const [typed, setTyped] = useState("");
  const [live, setLive] = useState(false);
  const [interim, setInterim] = useState("");
  const [notice, setNotice] = useState(null);
  const [voice, setVoice] = useState(defaultVoiceSettings);
  const [atcLoading, setAtcLoading] = useState(false);
  const micBlocked = useRef(false);
  const liveRef = useRef(false);
  const logRef = useRef(null);
  const navRef = useRef(null);
  const online = useOnline();
  const [sttStatus, setSttStatus] = useState("");

  // load saved progress once
  useEffect(() => {
    const p = loadProgress(exam.id);
    if (p && p.results.length === N) {
      setSt(p);
      if (p.finished) setModal("results");
    }
    setVoice(loadVoiceSettings());
    warmVoice();
    warmMic();
    const off = onSpeechStatus(setSttStatus);
    setLoaded(true);
    return off;
  }, [exam.id, N]);

  useEffect(() => { if (loaded) saveProgress(exam.id, st); }, [st, loaded, exam.id]);
  useEffect(() => { if (loaded) saveVoiceSettings(voice); }, [voice, loaded]);

  // timer
  useEffect(() => {
    if (!loaded || st.finished) return;
    const t = setInterval(() => {
      setSt((s) => {
        if (s.finished) return s;
        const elapsed = s.elapsed + 1;
        if (elapsed >= LIMIT) { setModal("results"); return { ...s, elapsed: LIMIT, finished: true }; }
        return { ...s, elapsed };
      });
    }, 1000);
    return () => clearInterval(t);
  }, [loaded, st.finished]);

  useEffect(() => { _optionalChain([logRef, 'access', _2 => _2.current, 'optionalAccess', _3 => _3.scrollTo, 'call', _4 => _4({ top: 1e6 })]); }, [st.cur, st.results]);
  useEffect(() => () => stopSpeaking(), []);

  const Q = exam.questions[st.cur];
  useEffect(() => {
    if (!loaded) return;
    const lines = [{ s: "ATC", t: _nullishCoalesce(Q.atc, () => ( Q.q)) }];
    if (Q.reply) lines.push({ s: "ATC", t: Q.reply });
    preload(lines, voice);
  }, [Q, voice, loaded]);
  useEffect(() => { _optionalChain([navRef, 'access', _5 => _5.current, 'optionalAccess', _6 => _6.querySelector, 'call', _7 => _7(".cur"), 'optionalAccess', _8 => _8.scrollIntoView, 'call', _9 => _9({ inline: "center", block: "nearest", behavior: "smooth" })]); }, [st.cur]);
  const go = (i) => { stopSpeaking(); setSt((s) => ({ ...s, cur: Math.max(0, Math.min(N - 1, i)) })); };

  const transmit = useCallback((text, src) => {
    text = text.trim();
    if (!text) return;
    let reply;
    setSt((s) => {
      if (s.finished) return s;
      const q = exam.questions[s.cur];
      const r = scoreAnswer(q, text);
      const results = s.results.map((x, i) => i === s.cur
        ? { best: Math.max(_nullishCoalesce(x.best, () => ( 0)), r.pct), attempts: [...x.attempts, { text, src, pct: r.pct, t: fmt(s.elapsed), missing: r.missing }] }
        : x);
      if (grade(r.pct) === "ok" && q.reply) reply = q.reply;
      return { ...s, results };
    });
    // ATC answers a correct transmission, like on a real frequency
    setTimeout(() => { if (reply) void speak(reply, "ATC", voice, setAtcLoading); }, 350);
  }, [exam.questions, voice]);

  /* ---------- push to talk (local Whisper transcription) ---------- */
  const pttStart = useCallback(async () => {
    if (liveRef.current || st.finished) return;
    if (micBlocked.current) { _optionalChain([document, 'access', _10 => _10.getElementById, 'call', _11 => _11("typedIn"), 'optionalAccess', _12 => _12.focus, 'call', _13 => _13()]); return; }
    stopSpeaking();
    liveRef.current = true;
    setLive(true);
    setInterim("Transmitting… release to send");
    try {
      await startRecording();
      pttBeep(true);
      setNotice(null);
    } catch (e) {
      liveRef.current = false;
      setLive(false);
      setInterim("");
      micBlocked.current = true;
      setNotice((e ).name === "NotAllowedError"
        ? "Microphone access is blocked. Allow it for localhost in your browser (Safari: Settings → Websites → Microphone), reload, or type your transmission."
        : "Could not open the microphone. Type your transmission instead.");
    }
  }, [st.finished]);

  const pttStop = useCallback(async () => {
    if (!liveRef.current) return;
    liveRef.current = false;
    setLive(false);
    pttBeep(false);
    setInterim("Transcribing…");
    try {
      const text = await stopRecording();
      setInterim("");
      if (text) transmit(text, "voice");
      else setNotice("Nothing heard. Hold the button while you speak, then release.");
    } catch (e) {
      setInterim("");
      console.error(e);
      setNotice(`Transcription failed: ${(e ).message}. Open /api/health to check the speech engine, or type your transmission.`);
    }
  }, [transmit]);

  useEffect(() => {
    const isField = () => ["INPUT", "BUTTON", "TEXTAREA", "SELECT"].includes(_optionalChain([document, 'access', _14 => _14.activeElement, 'optionalAccess', _15 => _15.tagName]) || "");
    const down = (e) => { if (e.code === "Space" && !e.repeat && !isField()) { e.preventDefault(); pttStart(); } };
    const up = (e) => { if (e.code === "Space" && !isField()) pttStop(); };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
  }, [pttStart, pttStop]);

  /* ---------- actions ---------- */
  const finish = () => { stopSpeaking(); pttStop(); setSt((s) => ({ ...s, finished: true })); setModal("results"); };
  const restart = () => { clearProgress(exam.id); setSt(fresh(N)); setShowAns({}); setModal(null); };
  const playQuestion = () => speak(_nullishCoalesce(Q.atc, () => ( Q.q)), "ATC", voice, setAtcLoading);

  const answered = st.results.filter((r) => r.best != null).length;
  const pts = st.results.reduce((s, r) => s + (_nullishCoalesce(r.best, () => ( 0))), 0);
  const pct = Math.round((pts / N) * 100);
  const res = st.results[st.cur];

  return (
    React.createElement('div', { className: "sim", __self: this, __source: {fileName: _jsxFileName, lineNumber: 168}}
      , React.createElement('header', { className: "sim-bar", __self: this, __source: {fileName: _jsxFileName, lineNumber: 169}}
        , React.createElement('div', { className: "sim-bar-top", __self: this, __source: {fileName: _jsxFileName, lineNumber: 170}}
          , React.createElement('button', { className: "exit", onClick: () => setModal("exit"), 'aria-label': "Exit exam" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 171}}, React.createElement(Icon, { name: "arrowL", size: 16, __self: this, __source: {fileName: _jsxFileName, lineNumber: 171}} ), React.createElement('span', { className: "hide-sm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 171}}, "Exit"))
          , React.createElement('div', { className: "sim-head", __self: this, __source: {fileName: _jsxFileName, lineNumber: 172}}
            , React.createElement('span', { className: "sim-title", __self: this, __source: {fileName: _jsxFileName, lineNumber: 173}}, exam.title)
            , React.createElement('span', { className: "sim-sub mono" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 174}}, exam.flight.dep, " → "  , exam.flight.dest)
          )
          , React.createElement('span', { className: `timer mono${LIMIT - st.elapsed <= 120 ? " low" : ""}`, 'aria-label': "Time used" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 176}}, React.createElement(Icon, { name: "clock", size: 14, __self: this, __source: {fileName: _jsxFileName, lineNumber: 176}} ), React.createElement('b', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 176}}, fmt(st.elapsed)), React.createElement('span', { className: "hide-sm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 176}}, " / "  , fmt(LIMIT)))
          , React.createElement('button', { className: "btn sm primary"  , onClick: finish, __self: this, __source: {fileName: _jsxFileName, lineNumber: 177}}, "Finish")
        )
        , React.createElement('div', { className: "sim-bar-nav", __self: this, __source: {fileName: _jsxFileName, lineNumber: 179}}
          , React.createElement('nav', { className: "qnav", 'aria-label': "Questions", ref: navRef, __self: this, __source: {fileName: _jsxFileName, lineNumber: 180}}
            , exam.questions.map((_, i) => {
              const b = st.results[i].best;
              return React.createElement('button', { key: i, className: `qbtn${i === st.cur ? " cur" : ""}`, 'data-s': b == null ? "" : grade(b), onClick: () => go(i), 'aria-label': `Question ${i + 1}`, 'aria-current': i === st.cur ? "step" : undefined, __self: this, __source: {fileName: _jsxFileName, lineNumber: 183}}, i + 1);
            })
          )
          , React.createElement('div', { className: "qmeta", __self: this, __source: {fileName: _jsxFileName, lineNumber: 186}}
            , React.createElement('span', { className: "pill", __self: this, __source: {fileName: _jsxFileName, lineNumber: 187}}, answered, "/", N, " answered" )
            , React.createElement('div', { className: "prog", 'aria-hidden': true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 188}}, React.createElement('i', { style: { width: `${(answered / N) * 100}%` }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 188}} ))
          )
        )
      )
      , !online && React.createElement('div', { className: "offline-bar", role: "status", __self: this, __source: {fileName: _jsxFileName, lineNumber: 192}}, "You are offline. Typed answers still work; voice needs a connection."          )

      , React.createElement('div', { className: "sim-grid", __self: this, __source: {fileName: _jsxFileName, lineNumber: 194}}
        , React.createElement('section', { className: "a-scen", __self: this, __source: {fileName: _jsxFileName, lineNumber: 195}}
          , React.createElement('div', { className: "card", __self: this, __source: {fileName: _jsxFileName, lineNumber: 196}}
            , React.createElement('h3', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 197}}, React.createElement(Icon, { name: "radio", __self: this, __source: {fileName: _jsxFileName, lineNumber: 197}} ), "Scenario", React.createElement('span', { className: "tag", __self: this, __source: {fileName: _jsxFileName, lineNumber: 197}}, "Q", st.cur + 1, "/", N))
            , React.createElement('p', { className: "scen-text", __self: this, __source: {fileName: _jsxFileName, lineNumber: 198}}, Q.q)
            , React.createElement('div', { className: "scen-actions", __self: this, __source: {fileName: _jsxFileName, lineNumber: 199}}
              , React.createElement('button', { className: "btn sm" , onClick: () => go(st.cur - 1), disabled: st.cur === 0, 'aria-label': "Previous question" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 200}}, React.createElement(Icon, { name: "arrowL", size: 14, __self: this, __source: {fileName: _jsxFileName, lineNumber: 200}} ), React.createElement('span', { className: "hide-sm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 200}}, "Prev"))
              , React.createElement('button', { className: "btn sm" , onClick: playQuestion, disabled: atcLoading, 'aria-busy': atcLoading, __self: this, __source: {fileName: _jsxFileName, lineNumber: 201}}
                , atcLoading ? React.createElement('span', { className: "spin", 'aria-hidden': true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 202}} ) : React.createElement(Icon, { name: "volume", size: 14, __self: this, __source: {fileName: _jsxFileName, lineNumber: 202}} ), atcLoading ? "Buffering…" : Q.atc ? "Play ATC" : "Play"
              )
              , React.createElement('button', { className: "btn sm" , onClick: () => setShowAns((m) => ({ ...m, [st.cur]: !m[st.cur] })), __self: this, __source: {fileName: _jsxFileName, lineNumber: 204}}, showAns[st.cur] ? "Hide" : "Show", " answer" )
              , React.createElement('button', { className: "btn sm primary push"   , onClick: () => (st.cur === N - 1 ? finish() : go(st.cur + 1)), __self: this, __source: {fileName: _jsxFileName, lineNumber: 205}}, st.cur === N - 1 ? "Finish" : "Next", React.createElement(Icon, { name: "arrowR", size: 14, __self: this, __source: {fileName: _jsxFileName, lineNumber: 205}} ))
            )
          )
          , React.createElement('div', { className: "logbar", __self: this, __source: {fileName: _jsxFileName, lineNumber: 208}}
            , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 209}}, "Communication Log" )
            , React.createElement('button', { onClick: () => setHideText((h) => !h), __self: this, __source: {fileName: _jsxFileName, lineNumber: 210}}, React.createElement(Icon, { name: hideText ? "eye" : "eyeOff", size: 15, __self: this, __source: {fileName: _jsxFileName, lineNumber: 210}} ), hideText ? "Show Text" : "Hide Text")
          )
          , React.createElement('div', { className: `log${hideText ? " hidetext" : ""}`, ref: logRef, 'aria-live': "polite", __self: this, __source: {fileName: _jsxFileName, lineNumber: 212}}
            , Q.atc && React.createElement('div', { className: "msg atc" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 213}}, React.createElement('div', { className: "who", __self: this, __source: {fileName: _jsxFileName, lineNumber: 213}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 213}}, "ATC")), React.createElement('div', { className: "txt", __self: this, __source: {fileName: _jsxFileName, lineNumber: 213}}, Q.atc))
            , res.attempts.length === 0 && !showAns[st.cur] && React.createElement('div', { className: "log-empty", __self: this, __source: {fileName: _jsxFileName, lineNumber: 214}}, "No transmissions yet. Hold the mic (or Space) and speak, or type below."            )
            , res.attempts.map((a, i) => {
              const g = grade(a.pct);
              return (
                React.createElement('div', { key: i, className: "log-group", __self: this, __source: {fileName: _jsxFileName, lineNumber: 218}}
                  , React.createElement('div', { className: "msg pilot" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 219}}, React.createElement('div', { className: "who", __self: this, __source: {fileName: _jsxFileName, lineNumber: 219}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 219}}, "Pilot · "  , a.src), React.createElement('span', { className: "mono", __self: this, __source: {fileName: _jsxFileName, lineNumber: 219}}, a.t)), React.createElement('div', { className: "txt", __self: this, __source: {fileName: _jsxFileName, lineNumber: 219}}, a.text))
                  , React.createElement('div', { className: `msg ${g}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 220}}
                    , React.createElement('div', { className: "who", __self: this, __source: {fileName: _jsxFileName, lineNumber: 221}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 221}}, "Assessor"), React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 221}}, Math.round(a.pct * 100), "%"))
                    , React.createElement('div', { className: "txt", __self: this, __source: {fileName: _jsxFileName, lineNumber: 222}}
                      , gradeLabel[g], ".", a.missing.length > 0 && React.createElement(React.Fragment, null, " Missing: "  , a.missing.join(", "), ".")
                      , g !== "ok" && React.createElement(React.Fragment, null, React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 224}} ), "Model answer: "  , React.createElement('b', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 224}}, _nullishCoalesce(Q.full, () => ( Q.a))))
                    )
                  )
                  , g === "ok" && Q.reply && React.createElement('div', { className: "msg atc" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 227}}, React.createElement('div', { className: "who", __self: this, __source: {fileName: _jsxFileName, lineNumber: 227}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 227}}, "ATC")), React.createElement('div', { className: "txt", __self: this, __source: {fileName: _jsxFileName, lineNumber: 227}}, Q.reply))
                )
              );
            })
            , showAns[st.cur] && (
              React.createElement('div', { className: "msg", __self: this, __source: {fileName: _jsxFileName, lineNumber: 232}}, React.createElement('div', { className: "who", __self: this, __source: {fileName: _jsxFileName, lineNumber: 232}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 232}}, "Model answer" )), React.createElement('div', { className: "txt", __self: this, __source: {fileName: _jsxFileName, lineNumber: 232}}, React.createElement('b', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 232}}, _nullishCoalesce(Q.full, () => ( Q.a))), React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 232}} ), React.createElement('span', { className: "muted-sm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 232}}, Q.ref)))
            )
          )
          , React.createElement('form', { className: "typed", onSubmit: (e) => { e.preventDefault(); transmit(typed, "typed"); setTyped(""); }, autoComplete: "off", __self: this, __source: {fileName: _jsxFileName, lineNumber: 235}}
            , React.createElement('input', { id: "typedIn", value: typed, onChange: (e) => setTyped(e.target.value), placeholder: "Type your transmission…"  , 'aria-label': "Type your transmission"  , enterKeyHint: "send", __self: this, __source: {fileName: _jsxFileName, lineNumber: 236}} )
            , React.createElement('button', { className: "btn primary" , type: "submit", 'aria-label': "Transmit", __self: this, __source: {fileName: _jsxFileName, lineNumber: 237}}, React.createElement('span', { className: "hide-sm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 237}}, "Transmit"), React.createElement(Icon, { name: "arrowR", size: 16, className: "show-sm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 237}} ))
          )
        )

        , React.createElement('section', { className: "a-flight card" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 241}}
          , React.createElement('h3', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 242}}, React.createElement(Icon, { name: "plane", __self: this, __source: {fileName: _jsxFileName, lineNumber: 242}} ), "Flight Info" )
          , React.createElement('div', { className: "fi", __self: this, __source: {fileName: _jsxFileName, lineNumber: 243}}
            , React.createElement('div', { className: "row", __self: this, __source: {fileName: _jsxFileName, lineNumber: 244}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 244}}, "Callsign"), React.createElement('span', { className: "mono callsign" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 244}}, exam.flight.callsign))
            , ([["Reg", exam.flight.reg], ["Aircraft", exam.flight.aircraft], ["POB", exam.flight.pob], ["Endurance", exam.flight.endurance], ["Start Time", exam.flight.start], ["Departure", exam.flight.dep], ["Destination", exam.flight.dest]] )
              .filter(([, v]) => v && v !== "—")
              .map(([k, v]) => React.createElement('div', { className: "row", key: k, __self: this, __source: {fileName: _jsxFileName, lineNumber: 247}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 247}}, k), React.createElement('span', { className: "mono", __self: this, __source: {fileName: _jsxFileName, lineNumber: 247}}, v)))
            , _optionalChain([exam, 'access', _16 => _16.flight, 'access', _17 => _17.extra, 'optionalAccess', _18 => _18.map, 'call', _19 => _19(([k, v]) => React.createElement('div', { className: "row", key: k, __self: this, __source: {fileName: _jsxFileName, lineNumber: 248}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 248}}, k), React.createElement('span', { className: "mono", __self: this, __source: {fileName: _jsxFileName, lineNumber: 248}}, v)))])
            , React.createElement('div', { className: "blk", __self: this, __source: {fileName: _jsxFileName, lineNumber: 249}}, React.createElement('small', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 249}}, "RTE"), React.createElement('div', { className: "mono", __self: this, __source: {fileName: _jsxFileName, lineNumber: 249}}, exam.flight.route))
            , React.createElement('div', { className: "blk", __self: this, __source: {fileName: _jsxFileName, lineNumber: 250}}, React.createElement('small', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 250}}, "ATIS"), React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 250}}, exam.flight.atis))
          )
        )

        , React.createElement('div', { className: "a-squawk squawk" , 'aria-label': `Assigned squawk ${exam.flight.squawk}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 254}}, "SQUAWK : "  , exam.flight.squawk)

        , React.createElement('section', { className: "a-freq card" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 256}}
          , React.createElement('h3', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 257}}, React.createElement(Icon, { name: "headset", __self: this, __source: {fileName: _jsxFileName, lineNumber: 257}} ), "Frequencies")
          , React.createElement('div', { className: "freq", __self: this, __source: {fileName: _jsxFileName, lineNumber: 258}}
            , exam.freqs.map(([k, v]) => React.createElement('div', { className: "frow", key: k, __self: this, __source: {fileName: _jsxFileName, lineNumber: 259}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 259}}, k), React.createElement('span', { className: "mono", __self: this, __source: {fileName: _jsxFileName, lineNumber: 259}}, v, " MHz" )))
          )
        )

        , React.createElement('section', { className: "a-chart", __self: this, __source: {fileName: _jsxFileName, lineNumber: 263}}, React.createElement(Chart, { spec: exam.chart, __self: this, __source: {fileName: _jsxFileName, lineNumber: 263}} ))

        , React.createElement('section', { className: `a-ptt ptt${live ? " is-live" : ""}`, 'aria-label': "Push to talk"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 265}}
          , notice && React.createElement('div', { className: "notice", role: "alert", __self: this, __source: {fileName: _jsxFileName, lineNumber: 266}}, notice, React.createElement('button', { className: "notice-x", onClick: () => setNotice(null), 'aria-label': "Dismiss", __self: this, __source: {fileName: _jsxFileName, lineNumber: 266}}, "×"))
          , React.createElement('div', { className: "ptt-row", __self: this, __source: {fileName: _jsxFileName, lineNumber: 267}}
            , React.createElement('button', {
              className: `mic${live ? " live" : ""}${interim === "Transcribing…" ? " busy" : ""}`, 'aria-label': "Press and hold to talk"    ,
              onPointerDown: (e) => { e.preventDefault(); _optionalChain([(e.currentTarget ), 'access', _20 => _20.setPointerCapture, 'optionalCall', _21 => _21(e.pointerId)]); pttStart(); },
              onPointerUp: pttStop, onPointerCancel: pttStop, onContextMenu: (e) => e.preventDefault(), __self: this, __source: {fileName: _jsxFileName, lineNumber: 268}}
, interim === "Transcribing…" ? React.createElement('span', { className: "spin lg" , 'aria-hidden': true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 272}} ) : React.createElement(Icon, { name: "mic", size: 34, __self: this, __source: {fileName: _jsxFileName, lineNumber: 272}} ))
            , React.createElement('div', { className: "ptt-text", __self: this, __source: {fileName: _jsxFileName, lineNumber: 273}}
              , React.createElement('div', { className: "ptt-hint", __self: this, __source: {fileName: _jsxFileName, lineNumber: 274}}, interim || (live ? "Transmitting…" : "Hold to talk"))
              , React.createElement('div', { className: "ptt-sub", __self: this, __source: {fileName: _jsxFileName, lineNumber: 275}}, sttStatus || "Release to send · Space on keyboard")
            )
            , React.createElement('details', { className: "voice-details", __self: this, __source: {fileName: _jsxFileName, lineNumber: 277}}
              , React.createElement('summary', { 'aria-label': "Voice settings" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 278}}, React.createElement(Icon, { name: "gear", size: 18, __self: this, __source: {fileName: _jsxFileName, lineNumber: 278}} ), React.createElement('span', { className: "hide-sm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 278}}, "Voice"))
              , React.createElement('div', { className: "voice-pop", __self: this, __source: {fileName: _jsxFileName, lineNumber: 279}}, React.createElement(VoiceControls, { value: voice, onChange: setVoice, __self: this, __source: {fileName: _jsxFileName, lineNumber: 279}} ))
            )
          )
        )
      )
      , exam.note && React.createElement('p', { className: "disclaim warn" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 284}}, "Note: " , exam.note)
      , React.createElement('p', { className: "disclaim", __self: this, __source: {fileName: _jsxFileName, lineNumber: 285}}, exam.group === "scenario"
        ? "Scenario and model answers from the RTR Part 2 scenario pack. Frequencies, squawk and chart are simulated for practice; the chart is a schematic, not for navigation."
        : "Training simulator. Flight data, frequencies and chart are fictional and for practice only.")

      , modal && (
        React.createElement('div', { className: "modal", onClick: (e) => { if (e.target === e.currentTarget && modal === "exit") setModal(null); }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 290}}
          , React.createElement('div', { className: "sheet", role: "dialog", 'aria-modal': "true", __self: this, __source: {fileName: _jsxFileName, lineNumber: 291}}
            , modal === "exit" ? (
              React.createElement(React.Fragment, null
                , React.createElement('h2', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 294}}, "Leave the exam?"  )
                , React.createElement('p', { style: { color: "var(--muted)" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 295}}, "Your progress is saved on this device. You can resume from the exam list."             )
                , React.createElement('div', { className: "acts", __self: this, __source: {fileName: _jsxFileName, lineNumber: 296}}
                  , React.createElement('button', { className: "btn", onClick: () => setModal(null), __self: this, __source: {fileName: _jsxFileName, lineNumber: 297}}, "Stay")
                  , React.createElement('button', { className: "btn", onClick: finish, __self: this, __source: {fileName: _jsxFileName, lineNumber: 298}}, "Finish and see results"   )
                  , React.createElement('button', { className: "btn primary" , onClick: () => { stopSpeaking(); router.push("/rtr-practice"); }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 299}}, "Exit")
                )
              )
            ) : (
              React.createElement(React.Fragment, null
                , React.createElement('h2', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 304}}, st.elapsed >= LIMIT ? "Time is up" : "Exam complete")
                , React.createElement('p', { style: { color: "var(--muted)", margin: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 305}}, exam.title, " · "  , exam.flight.callsign, " · "  , exam.flight.dep, " to "  , exam.flight.dest)
                , React.createElement('div', { className: "score", __self: this, __source: {fileName: _jsxFileName, lineNumber: 306}}
                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 307}}, React.createElement('b', { style: { color: pts / N >= PASS_MARK ? "var(--ok)" : "var(--bad)" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 307}}, pct, "%"), React.createElement('small', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 307}}, pts / N >= PASS_MARK ? "Pass" : "Below pass mark", " (" , PASS_MARK * 100, "%)"))
                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 308}}, React.createElement('b', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 308}}, st.results.filter((r) => r.best != null && grade(r.best) === "ok").length, "/", N), React.createElement('small', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 308}}, "Fully correct" ))
                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 309}}, React.createElement('b', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 309}}, answered, "/", N), React.createElement('small', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 309}}, "Answered"))
                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 310}}, React.createElement('b', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 310}}, fmt(st.elapsed)), React.createElement('small', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 310}}, "Time used" ))
                )
                , React.createElement('div', { className: "rev", __self: this, __source: {fileName: _jsxFileName, lineNumber: 312}}
                  , exam.questions.map((q, i) => {
                    const r = st.results[i];
                    const g = r.best == null ? "none" : grade(r.best);
                    const last = r.attempts.at(-1);
                    return (
                      React.createElement('div', { className: "item", key: i, __self: this, __source: {fileName: _jsxFileName, lineNumber: 318}}
                        , React.createElement('div', { className: "h", __self: this, __source: {fileName: _jsxFileName, lineNumber: 319}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 319}}, "Q", i + 1, ". " , q.q), React.createElement('span', { className: `badge ${g}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 319}}, gradeLabel[g], r.best != null ? ` · ${Math.round(r.best * 100)}%` : ""))
                        , React.createElement('div', { className: "k", __self: this, __source: {fileName: _jsxFileName, lineNumber: 320}}, "Your last answer: "   , last ? last.text : "—")
                        , React.createElement('div', { className: "k", __self: this, __source: {fileName: _jsxFileName, lineNumber: 321}}, "Model answer: "  , React.createElement('b', { style: { color: "var(--ink)" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 321}}, _nullishCoalesce(q.full, () => ( q.a))), " · "  , q.ref)
                      )
                    );
                  })
                )
                , React.createElement('div', { className: "acts", __self: this, __source: {fileName: _jsxFileName, lineNumber: 326}}
                  , React.createElement('button', { className: "btn", onClick: () => router.push("/rtr-practice"), __self: this, __source: {fileName: _jsxFileName, lineNumber: 327}}, "Back to exams"  )
                  , React.createElement('button', { className: "btn", onClick: () => setModal(null), __self: this, __source: {fileName: _jsxFileName, lineNumber: 328}}, "Review screen" )
                  , React.createElement('button', { className: "btn primary" , onClick: restart, __self: this, __source: {fileName: _jsxFileName, lineNumber: 329}}, "Restart exam" )
                )
              )
            )
          )
        )
      )
    )
  );
}
