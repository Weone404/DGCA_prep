"use client";
import React from 'react';
const _jsxFileName = "D:\\RTR 2\\RTR\\components\\LearnLibrary.tsx"; function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AIRPORTS, CATEGORIES, PHRASE_QA } from "@/lib/learn";
import { defaultVoiceSettings, loadVoiceSettings, playSequence, preload, saveVoiceSettings, speak, spellPhonetic, stopSpeaking, warmVoice, } from "@/lib/voice";
import VoiceControls from "./VoiceControls";
import { Icon } from "./Icons";

 // category id, "codes" or "qa"
const EXTRA_TABS = [
  { id: "codes", title: "Airport Codes", icon: "pin" },
  { id: "qa", title: "Phraseology Questions", icon: "help" },
];
const pad = (n) => String(n).padStart(2, "0");

export default function LearnLibrary() {
  const [tab, setTab] = useState(CATEGORIES[0].id);
  const [topicId, setTopicId] = useState(CATEGORIES[0].topics[0].id);
  const [query, setQuery] = useState("");
  const [tocOpen, setTocOpen] = useState(false);
  const [playing, setPlaying] = useState(-1);
  const [voice, setVoice] = useState(defaultVoiceSettings);
  const runId = useRef(0);

  useEffect(() => {
    // deep link: /rtr-learn#category/topic
    const [c, t] = decodeURIComponent(location.hash.slice(1)).split("/");
    const cat = CATEGORIES.find((x) => x.id === c);
    if (cat) { setTab(cat.id); setTopicId(_nullishCoalesce(_optionalChain([cat, 'access', _ => _.topics, 'access', _2 => _2.find, 'call', _3 => _3((x) => x.id === t), 'optionalAccess', _4 => _4.id]), () => ( cat.topics[0].id))); }
    else if (EXTRA_TABS.some((x) => x.id === c)) setTab(c);
    setVoice(loadVoiceSettings());
    warmVoice();
    return () => stopSpeaking();
  }, []);

  const cat = CATEGORIES.find((c) => c.id === tab);
  const topics = useMemo(
    () => (cat ? cat.topics.filter((t) => t.title.toLowerCase().includes(query.toLowerCase())) : []),
    [cat, query],
  );
  const topic = _nullishCoalesce(_optionalChain([cat, 'optionalAccess', _5 => _5.topics, 'access', _6 => _6.find, 'call', _7 => _7((t) => t.id === topicId)]), () => ( _optionalChain([cat, 'optionalAccess', _8 => _8.topics, 'access', _9 => _9[0]])));
  const topicIdx = cat && topic ? cat.topics.indexOf(topic) : 0;

  useEffect(() => { if (topic) preload(topic.convo, voice); }, [topic, voice]);

  const stop = () => { runId.current++; stopSpeaking(); setPlaying(-1); };
  const selectTab = (id) => {
    stop(); setTab(id); setQuery("");
    const c = CATEGORIES.find((x) => x.id === id);
    if (c) setTopicId(c.topics[0].id);
    history.replaceState(null, "", `#${id}`);
  };
  const selectTopic = (id) => {
    stop(); setTopicId(id); setTocOpen(false);
    _optionalChain([document, 'access', _10 => _10.querySelector, 'call', _11 => _11(".detail"), 'optionalAccess', _12 => _12.scrollIntoView, 'call', _13 => _13({ behavior: "smooth", block: "start" })]);
    history.replaceState(null, "", `#${tab}/${id}`);
  };
  const playAll = async () => {
    if (!topic) return;
    if (playing >= 0) { stop(); return; }
    const my = ++runId.current;
    await playSequence(topic.convo, voice, (i) => { if (runId.current === my) setPlaying(i); }, () => runId.current !== my);
  };
  const playOne = async (i) => {
    if (!topic) return;
    stop();
    const my = runId.current;
    setPlaying(i);
    await speak(topic.convo[i].t, topic.convo[i].s, voice);
    if (runId.current === my) setPlaying(-1);
  };

  return (
    React.createElement('div', { className: "lib", __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}}
      , React.createElement('div', { className: "lib-head", __self: this, __source: {fileName: _jsxFileName, lineNumber: 75}}
        , React.createElement('h1', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 76}}, "RT Phraseology Library"  )
        , React.createElement('p', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}, "Categories and topics for the RTR Part 2 viva, with phraseology templates and example conversations you can play in a radio voice."                     )
      )

      , React.createElement('nav', { className: "tabs", 'aria-label': "Categories", __self: this, __source: {fileName: _jsxFileName, lineNumber: 80}}
        , [...CATEGORIES.map((c) => ({ id: c.id, title: c.title, icon: c.icon })), ...EXTRA_TABS].map((t) => (
          React.createElement('button', { key: t.id, className: `tab${tab === t.id ? " on" : ""}`, onClick: () => selectTab(t.id), __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}
            , React.createElement(Icon, { name: t.icon, size: 15, __self: this, __source: {fileName: _jsxFileName, lineNumber: 83}} ), t.title
          )
        ))
      )

      , tab === "codes" && (
        React.createElement('section', { className: "detail", __self: this, __source: {fileName: _jsxFileName, lineNumber: 89}}
          , React.createElement('div', { className: "detail-h", __self: this, __source: {fileName: _jsxFileName, lineNumber: 90}}, React.createElement('h2', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 90}}, "Airport Codes" ))
          , React.createElement('p', { style: { margin: 0, color: "var(--muted)" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 91}}, "ICAO location indicators for major Indian aerodromes, with the phonetic spelling used on the radio. Confirm against the current AIP India before operational use."                       )
          , React.createElement('div', { className: "table-wrap", __self: this, __source: {fileName: _jsxFileName, lineNumber: 92}}
            , React.createElement('table', { className: "codes", __self: this, __source: {fileName: _jsxFileName, lineNumber: 93}}
              , React.createElement('thead', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}, React.createElement('tr', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}, React.createElement('th', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}, "ICAO"), React.createElement('th', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}, "City"), React.createElement('th', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}, "Aerodrome"), React.createElement('th', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}, "Spoken"), React.createElement('th', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 94}} )))
              , React.createElement('tbody', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}
                , AIRPORTS.map((a) => (
                  React.createElement('tr', { key: a.icao, __self: this, __source: {fileName: _jsxFileName, lineNumber: 97}}
                    , React.createElement('td', { className: "mono", __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}, React.createElement('b', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}, a.icao)), React.createElement('td', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}, a.city), React.createElement('td', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}, a.name), React.createElement('td', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}, spellPhonetic(a.icao))
                    , React.createElement('td', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}, React.createElement('button', { className: "btn sm" , onClick: () => speak(a.icao, "ATC", voice), 'aria-label': `Play ${a.icao}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}, React.createElement(Icon, { name: "play", size: 12, __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}} )))
                  )
                ))
              )
            )
          )
        )
      )

      , tab === "qa" && (
        React.createElement('section', { className: "detail", __self: this, __source: {fileName: _jsxFileName, lineNumber: 109}}
          , React.createElement('div', { className: "detail-h", __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}}, React.createElement('h2', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 110}}, "Phraseology Questions" ))
          , React.createElement('div', { className: "qa", __self: this, __source: {fileName: _jsxFileName, lineNumber: 111}}
            , PHRASE_QA.map((q, i) => (
              React.createElement('details', { key: i, __self: this, __source: {fileName: _jsxFileName, lineNumber: 113}}, React.createElement('summary', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 113}}, q.q), React.createElement('p', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 113}}, q.a))
            ))
          )
        )
      )

      , cat && topic && (
        React.createElement('div', { className: "lib-body", __self: this, __source: {fileName: _jsxFileName, lineNumber: 120}}
          , React.createElement('button', { className: "toc-toggle", onClick: () => setTocOpen((o) => !o), 'aria-expanded': tocOpen, __self: this, __source: {fileName: _jsxFileName, lineNumber: 121}}
            , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 122}}, React.createElement('small', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 122}}, cat.title), pad(topicIdx + 1), " · "  , topic.title)
            , React.createElement(Icon, { name: "arrowR", size: 16, style: { transform: tocOpen ? "rotate(90deg)" : "rotate(0)" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}} )
          )
          , React.createElement('aside', { className: `toc${tocOpen ? " open" : ""}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 125}}
            , React.createElement('div', { className: "toc-label hide-sm" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 126}}, cat.title)
            , React.createElement('label', { className: "search", __self: this, __source: {fileName: _jsxFileName, lineNumber: 127}}, React.createElement(Icon, { name: "search", size: 15, __self: this, __source: {fileName: _jsxFileName, lineNumber: 127}} ), React.createElement('input', { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search topics…" , 'aria-label': "Search topics" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 127}} ))
            , React.createElement('div', { className: "toc-label", __self: this, __source: {fileName: _jsxFileName, lineNumber: 128}}, cat.title, React.createElement('span', { className: "toc-count", __self: this, __source: {fileName: _jsxFileName, lineNumber: 128}}, cat.topics.length))
            , React.createElement('div', { className: "toc-list", __self: this, __source: {fileName: _jsxFileName, lineNumber: 129}}
              , topics.map((t) => (
                React.createElement('button', { key: t.id, className: `toc-item${t.id === topic.id ? " on" : ""}`, onClick: () => selectTopic(t.id), __self: this, __source: {fileName: _jsxFileName, lineNumber: 131}}
                  , React.createElement('span', { className: "n", __self: this, __source: {fileName: _jsxFileName, lineNumber: 132}}, pad(cat.topics.indexOf(t) + 1)), t.title
                )
              ))
              , topics.length === 0 && React.createElement('span', { style: { color: "var(--muted)", padding: 10 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 135}}, "No topics match."  )
            )
            , React.createElement(Link, { className: "drill-link", href: `/rtr-learn/drill/${cat.id}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 137}}
              , React.createElement('span', { className: "drill-ico", __self: this, __source: {fileName: _jsxFileName, lineNumber: 138}}, React.createElement(Icon, { name: "sparkle", size: 16, __self: this, __source: {fileName: _jsxFileName, lineNumber: 138}} ))
              , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 139}}, React.createElement('small', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 139}}, "FINAL DRILL" ), React.createElement('b', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 139}}, "Practise " , cat.title))
              , React.createElement(Icon, { name: "arrowR", size: 16, style: { marginLeft: "auto" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 140}} )
            )
          )

          , React.createElement('article', { className: "detail", __self: this, __source: {fileName: _jsxFileName, lineNumber: 144}}
            , React.createElement('div', { className: "detail-h", __self: this, __source: {fileName: _jsxFileName, lineNumber: 145}}, React.createElement('span', { className: "num", __self: this, __source: {fileName: _jsxFileName, lineNumber: 145}}, pad(topicIdx + 1)), React.createElement('h2', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 145}}, topic.title))

            , React.createElement('div', { className: "box", __self: this, __source: {fileName: _jsxFileName, lineNumber: 147}}
              , React.createElement('div', { className: "box-h", __self: this, __source: {fileName: _jsxFileName, lineNumber: 148}}, React.createElement(Icon, { name: "clock", size: 14, __self: this, __source: {fileName: _jsxFileName, lineNumber: 148}} ), "When to use"  )
              , React.createElement('p', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 149}}, topic.when)
            )

            , React.createElement('div', { className: "tpl-row", __self: this, __source: {fileName: _jsxFileName, lineNumber: 152}}
              , React.createElement('div', { className: "tpl", __self: this, __source: {fileName: _jsxFileName, lineNumber: 153}}, React.createElement('div', { className: "box-h", __self: this, __source: {fileName: _jsxFileName, lineNumber: 153}}, React.createElement(Icon, { name: "mic", size: 14, __self: this, __source: {fileName: _jsxFileName, lineNumber: 153}} ), "Pilot transmission" ), React.createElement('code', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 153}}, topic.pilot))
              , React.createElement('div', { className: "tpl atc" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 154}}, React.createElement('div', { className: "box-h", __self: this, __source: {fileName: _jsxFileName, lineNumber: 154}}, React.createElement(Icon, { name: "headset", size: 14, __self: this, __source: {fileName: _jsxFileName, lineNumber: 154}} ), "ATC response" ), React.createElement('code', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 154}}, topic.atc))
            )

            , React.createElement('div', { className: "box", __self: this, __source: {fileName: _jsxFileName, lineNumber: 157}}
              , React.createElement('div', { className: "box-h", __self: this, __source: {fileName: _jsxFileName, lineNumber: 158}}, React.createElement(Icon, { name: "radio", size: 14, __self: this, __source: {fileName: _jsxFileName, lineNumber: 158}} ), "Example conversation" , React.createElement('span', { className: "ref", __self: this, __source: {fileName: _jsxFileName, lineNumber: 158}}, topic.ref))
              , React.createElement('div', { className: "play-row", __self: this, __source: {fileName: _jsxFileName, lineNumber: 159}}
                , React.createElement('button', { className: "btn dark" , onClick: playAll, __self: this, __source: {fileName: _jsxFileName, lineNumber: 160}}, React.createElement(Icon, { name: playing >= 0 ? "stop" : "play", size: 14, __self: this, __source: {fileName: _jsxFileName, lineNumber: 160}} ), playing >= 0 ? "Stop" : "Play conversation")
                , React.createElement(VoiceControls, { value: voice, onChange: (v) => { setVoice(v); saveVoiceSettings(v); }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 161}} )
                , React.createElement('span', { className: "hint", __self: this, __source: {fileName: _jsxFileName, lineNumber: 162}}, "Click any line to hear it on its own."        )
              )
              , React.createElement('div', { className: "convo", __self: this, __source: {fileName: _jsxFileName, lineNumber: 164}}
                , topic.convo.map((l, i) => {
                  return (
                    React.createElement('div', { key: i, className: `bub-wrap ${l.s === "PIL" ? "pil" : "atc"}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 167}}
                      , React.createElement('span', { className: "bub-label", __self: this, __source: {fileName: _jsxFileName, lineNumber: 168}}, l.s, " T" , i + 1)
                      , React.createElement('button', { className: `bub ${l.s === "PIL" ? "pil" : "atc"}${playing === i ? " playing" : ""}`, onClick: () => playOne(i), __self: this, __source: {fileName: _jsxFileName, lineNumber: 169}}, l.t)
                    )
                  );
                })
              )
            )

            , topic.notes.length > 0 && (
              React.createElement('div', { className: "box", __self: this, __source: {fileName: _jsxFileName, lineNumber: 177}}
                , React.createElement('div', { className: "box-h", __self: this, __source: {fileName: _jsxFileName, lineNumber: 178}}, React.createElement(Icon, { name: "help", size: 14, __self: this, __source: {fileName: _jsxFileName, lineNumber: 178}} ), "Notes")
                , React.createElement('ul', { className: "notes", __self: this, __source: {fileName: _jsxFileName, lineNumber: 179}}, topic.notes.map((n, i) => React.createElement('li', { key: i, __self: this, __source: {fileName: _jsxFileName, lineNumber: 179}}, n)))
                , React.createElement('div', { className: "ref-line", __self: this, __source: {fileName: _jsxFileName, lineNumber: 180}}, "Reference: " , React.createElement('b', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 180}}, topic.ref))
              )
            )
          )
        )
      )
    )
  );
}
