"use client";
import React from 'react';
const _jsxFileName = "D:\\RTR 2\\RTR\\components\\Drill.tsx"; function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { grade, gradeLabel, scoreAnswer } from "@/lib/scoring";
import { defaultVoiceSettings, loadVoiceSettings, pttBeep, speak, stopSpeaking, warmVoice, } from "@/lib/voice";
import { startRecording, stopRecording, warmMic } from "@/lib/recorder";
import { Icon } from "./Icons";



/** Every pilot line in the category becomes a drill item; the preceding ATC line (if any) is the cue. */
function buildItems(cat) {
  const items = [];
  for (const t of cat.topics) {
    t.convo.forEach((l, i) => {
      if (l.s !== "PIL") return;
      const prev = t.convo[i - 1];
      items.push({ topic: t.title, template: t.pilot, atc: _optionalChain([prev, 'optionalAccess', _ => _.s]) === "ATC" ? prev.t : undefined, target: l.t });
    });
  }
  return items;
}

export default function Drill({ category }) {
  const items = useMemo(() => buildItems(category), [category]);
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [scores, setScores] = useState([]);
  const [live, setLive] = useState(false);
  const [voice, setVoice] = useState(defaultVoiceSettings);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(null);
  const item = items[i];
  const done = i >= items.length;

  useEffect(() => {
    setVoice(loadVoiceSettings());
    warmVoice();
    warmMic();
    return () => stopSpeaking();
  }, []);
  useEffect(() => { if (_optionalChain([item, 'optionalAccess', _2 => _2.atc])) void speak(item.atc, "ATC", voice); /* cue */ }, [i]); // eslint-disable-line react-hooks/exhaustive-deps

  const check = (said) => {
    if (!said.trim() || !item) return;
    const r = scoreAnswer({ a: item.target, mode: "seq" }, said);
    setResult({ pct: r.pct, said });
    setScores((s) => { const n = [...s]; n[i] = r.pct; return n; });
  };
  const next = () => { stopSpeaking(); setResult(null); setText(""); setI((x) => x + 1); };

  const talk = async () => {
    if (busy) return;
    if (!live) {
      try { stopSpeaking(); await startRecording(); pttBeep(true); setLive(true); setErr(null); }
      catch (e2) { setErr("Microphone unavailable. Allow microphone access for this site, or type your answer."); }
      return;
    }
    setLive(false); pttBeep(false); setBusy(true);
    try {
      const said = await stopRecording();
      if (said) { setText(said); check(said); } else setErr("Nothing heard. Try again.");
    } catch (e3) { setErr("Transcription failed. Type your answer instead."); }
    setBusy(false);
  };

  const avg = scores.length ? Math.round((scores.reduce((a, b) => a + (_nullishCoalesce(b, () => ( 0))), 0) / items.length) * 100) : 0;

  return (
    React.createElement('div', { className: "drill", __self: this, __source: {fileName: _jsxFileName, lineNumber: 72}}
      , React.createElement(Link, { href: `/rtr-learn#${category.id}`, className: "exit", style: { justifySelf: "start" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 73}}, "← Back to "   , category.title)
      , React.createElement('h1', { style: { margin: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}}, "Drill: " , category.title)
      , !done ? (
        React.createElement('div', { className: "drill-card", __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}}
          , React.createElement('div', { className: "drill-prog", __self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}, item.topic), React.createElement('span', { className: "mono", __self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}, i + 1, " / "  , items.length))
          , React.createElement('div', { className: "drill-prompt", __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}}
            , item.atc ? React.createElement(React.Fragment, null, "ATC says:" , React.createElement('span', { className: "atcline", __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}, item.atc)) : React.createElement(React.Fragment, null, "Make the call for "    , React.createElement('b', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}, item.topic), ".", React.createElement('span', { className: "atcline", __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}, item.template))
          )
          , React.createElement('div', { style: { display: "flex", gap: 8, flexWrap: "wrap" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}
            , item.atc && React.createElement('button', { className: "btn sm" , onClick: () => speak(item.atc, "ATC", voice), __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}, React.createElement(Icon, { name: "volume", size: 14, __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}} ), "Replay ATC" )
            , React.createElement('button', { className: `btn sm${live ? " primary" : ""}`, onClick: talk, __self: this, __source: {fileName: _jsxFileName, lineNumber: 83}}, React.createElement(Icon, { name: "mic", size: 14, __self: this, __source: {fileName: _jsxFileName, lineNumber: 83}} ), busy ? "Transcribing…" : live ? "Stop and check" : "Speak answer")
          )
          , err && React.createElement('div', { className: "notice", style: { margin: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}, err)
          , React.createElement('form', { className: "typed", onSubmit: (e) => { e.preventDefault(); check(text); }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}
            , React.createElement('input', { id: "drillIn", value: text, onChange: (e) => setText(e.target.value), placeholder: "Or type your transmission…"   , 'aria-label': "Your transmission" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}} )
            , React.createElement('button', { className: "btn primary" , type: "submit", __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}, "Check")
          )
          , result && (
            React.createElement('div', { className: `msg ${grade(result.pct)}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 91}}
              , React.createElement('div', { className: "who", __self: this, __source: {fileName: _jsxFileName, lineNumber: 92}}, React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 92}}, gradeLabel[grade(result.pct)]), React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 92}}, Math.round(result.pct * 100), "%"))
              , React.createElement('div', { className: "txt", __self: this, __source: {fileName: _jsxFileName, lineNumber: 93}}, "Model: " , React.createElement('b', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 93}}, item.target))
              , React.createElement('div', { style: { display: "flex", gap: 8, marginTop: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}
                , React.createElement('button', { className: "btn sm" , onClick: () => speak(item.target, "PIL", voice), __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}, React.createElement(Icon, { name: "play", size: 12, __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}} ), "Hear model" )
                , React.createElement('button', { className: "btn sm primary"  , onClick: next, __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}}, "Next →" )
              )
            )
          )
          , !result && React.createElement('button', { className: "btn sm" , style: { justifySelf: "start" }, onClick: next, __self: this, __source: {fileName: _jsxFileName, lineNumber: 100}}, "Skip")
        )
      ) : (
        React.createElement('div', { className: "drill-card", __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}
          , React.createElement('h2', { style: { margin: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 104}}, "Drill complete" )
          , React.createElement('p', { style: { margin: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}}, "Average score: "  , React.createElement('b', { className: "mono", __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}}, avg, "%"), " across "  , items.length, " transmissions." )
          , React.createElement('div', { style: { display: "flex", gap: 8 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 106}}
            , React.createElement('button', { className: "btn", onClick: () => { setI(0); setScores([]); setResult(null); }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}}, "Try again" )
            , React.createElement(Link, { className: "btn primary" , href: "/rtr-practice", __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}, "Go to practice exams"   )
          )
        )
      )
    )
  );
}
