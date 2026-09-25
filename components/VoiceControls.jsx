"use client";
import React from 'react';
const _jsxFileName = "D:\\RTR 2\\RTR\\components\\VoiceControls.tsx";
import { useEffect, useState } from "react";
import { fetchVoiceOptions, VOICE_OPTIONS, } from "@/lib/voice";

export default function VoiceControls({ value, onChange, compact }) {
  const [opts, setOpts] = useState(VOICE_OPTIONS);
  useEffect(() => { void fetchVoiceOptions().then(setOpts); }, []);
  const set = (p) => onChange({ ...value, ...p });
  // "in_2" is the second Indian-English voice; show it under the same list.
  const pilotOpts = opts.map(([id, n]) => (id === "in_1" ? ["in_2", n] : [id, n]));
  return (
    React.createElement('div', { className: "voice-set", __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
      , React.createElement('label', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}, "ATC"
        , React.createElement('select', { value: value.atcVoice, onChange: (e) => set({ atcVoice: e.target.value }), __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}
          , opts.map(([id, n]) => React.createElement('option', { key: id, value: id, __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}, n))
        )
      )
      , !compact && (
        React.createElement('label', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}, "Pilot"
          , React.createElement('select', { value: value.pilotVoice, onChange: (e) => set({ pilotVoice: e.target.value }), __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
            , pilotOpts.map(([id, n]) => React.createElement('option', { key: id, value: id, __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}, id === "in_2" ? `Auto - ${n.replace(/^[^-]+- /, "")}` : n))
          )
        )
      )
      , React.createElement('label', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}, "Radio"
        , React.createElement('select', { value: value.radio, onChange: (e) => set({ radio: e.target.value  }), __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}
          , React.createElement('option', { value: "off", __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}, "Off (clearest)" ), React.createElement('option', { value: "light", __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}, "Light"), React.createElement('option', { value: "full", __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}, "VHF")
        )
      )
      , React.createElement('label', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}, "Speed"
        , React.createElement('select', { value: value.rate, onChange: (e) => set({ rate: +e.target.value }), __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}
          , React.createElement('option', { value: 0.85, __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}, "Slow"), React.createElement('option', { value: 1, __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}, "Normal"), React.createElement('option', { value: 1.15, __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}, "Fast")
        )
      )
    )
  );
}
