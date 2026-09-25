"use client";
import React from 'react';
const _jsxFileName = "D:\\RTR 2\\RTR\\components\\PracticeLanding.tsx"; function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ALL_EXAMS, EXAM_MINUTES, PASS_MARK, } from "@/lib/exams";
import { clearProgress, loadProgress, } from "@/lib/progress";
import { Icon } from "./Icons";

export default function PracticeLanding() {
  const router = useRouter();
  const [prog, setProg] = useState({});
  useEffect(() => {
    setProg(Object.fromEntries(ALL_EXAMS.map((e) => [e.id, loadProgress(e.id)])));
  }, []);

  const [q, setQ] = useState("");
  const scenarios = ALL_EXAMS.filter((e) => e.group === "scenario");
  const match = (e) => {
    const t = q.trim().toLowerCase();
    if (!t) return true;
    const f = e.flight;
    return [e.title, f.callsign, f.aircraft, f.dep, f.dest, f.route].join(" ").toLowerCase().includes(t);
  };
  const row = (e) => {
          const p = prog[e.id];
          const answered = p ? p.results.filter((r) => r.best != null).length : 0;
          const status = !p ? null : p.finished ? "done" : "prog";
          return (
            React.createElement('div', { className: "exam", key: e.id, __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
              , React.createElement('div', { className: "exam-info", __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}
                , React.createElement('div', { className: "exam-title", __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}
                  , e.title
                  , e.tags.includes("Important") && React.createElement('span', { className: "chip imp" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}, React.createElement(Icon, { name: "alert", size: 12, __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}} ), "Important")
                  , e.tags.includes("Free") && React.createElement('span', { className: "chip free" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}, "Free")
                  , e.tags.includes("New") && React.createElement('span', { className: "chip new" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}, "New")
                  , status === "prog" && React.createElement('span', { className: "chip prog" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "In Progress - Q"   , (_nullishCoalesce(p.cur, () => ( 0))) + 1, "/", e.questions.length)
                  , status === "done" && React.createElement('span', { className: "chip done" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}, "Completed - "  , answered, "/", e.questions.length, " answered" )
                )
                , React.createElement('div', { className: "exam-meta", __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}}
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}, "Callsign: " , React.createElement('b', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}, e.flight.callsign))
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}, "Reg: " , React.createElement('b', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}, e.flight.reg))
                  , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}, e.questions.length, " questions" )
                )
                , React.createElement('div', { className: "exam-meta", __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}, e.flight.dep, " → "  , e.flight.dest)
              )
              , React.createElement('div', { className: "exam-acts", __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}}
                , status ? (
                  React.createElement(React.Fragment, null
                    , React.createElement(Link, { className: "btn", href: `/rtr-practice/${e.id}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}, React.createElement(Icon, { name: "restart", size: 15, __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}} ), status === "done" ? "Review" : "Resume")
                    , React.createElement('button', { className: "btn primary" , onClick: () => restart(e.id), __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}, React.createElement(Icon, { name: "plane", size: 15, __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}} ), "Restart")
                  )
                ) : (
                  React.createElement(Link, { className: "btn primary" , href: `/rtr-practice/${e.id}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}, React.createElement(Icon, { name: "plane", size: 15, __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}} ), "Start")
                )
              )
            )
          );
        };

  const restart = (id) => {
    clearProgress(id);
    router.push(`/rtr-practice/${id}`);
  };

  return (
    React.createElement('div', { className: "page", __self: this, __source: {fileName: _jsxFileName, lineNumber: 66}}
      , React.createElement(Link, { href: "/rtr-learn", className: "banner", __self: this, __source: {fileName: _jsxFileName, lineNumber: 67}}
        , React.createElement('span', { className: "banner-ico", __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}}, React.createElement(Icon, { name: "book", size: 22, __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}} ))
        , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 69}}
          , React.createElement('span', { className: "eyebrow", __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}, "New to RTR Part 2?"    )
          , React.createElement('h2', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 71}}, "Learn RT Transmissions first"   )
          , React.createElement('p', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 72}}, "Phraseology, templates and worked example conversations for every topic on the viva."           )
        )
        , React.createElement('span', { className: "arrow", __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}}, React.createElement(Icon, { name: "arrowR", size: 20, __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}} ))
      )

      , React.createElement('section', { className: "hero", __self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}
        , React.createElement('div', { className: "hero-top", __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}}
          , React.createElement('span', { className: "hero-ico", __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}, React.createElement(Icon, { name: "radio", size: 30, __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}} ))
          , React.createElement('h1', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 80}}, "RTR Part 2 Practice"   )
          , React.createElement('p', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}, "Practise the DGCA RTR Part 2 viva with scored, timed exams."          )
        )
        , React.createElement('div', { className: "facts", __self: this, __source: {fileName: _jsxFileName, lineNumber: 83}}
          , React.createElement('div', { className: "fact", __self: this, __source: {fileName: _jsxFileName, lineNumber: 84}}
            , React.createElement('h3', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}, "Exam Format" )
            , React.createElement('ul', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}, ALL_EXAMS.length, " exams: 2 sample exams and "      , ALL_EXAMS.length - 2, " real-style scenarios"  )
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}, "11–19 questions per scenario"   )
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 89}}, EXAM_MINUTES, " minutes" )
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 90}}, "Passing marks: "  , PASS_MARK * 100, "%")
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 91}}, "Push-to-talk voice input or typed answers"     )
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 92}}, "ATC replies with a radio voice"     )
            )
          )
          , React.createElement('div', { className: "fact", __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}
            , React.createElement('h3', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 96}}, "Topics Covered" )
            , React.createElement('ul', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 97}}
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}, "Departure procedures" )
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}, "En route communications"  )
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 100}}, "Arrival and landing"  )
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 101}}, "Meteorological information" )
              , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 102}}, "Emergency and communication failure"   )
            )
          )
        )

        , React.createElement('h2', { className: "section-title", __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}}, "Select an Exam"  )
        , ALL_EXAMS.filter((e) => e.group === "sample").map(row)

        , React.createElement('div', { className: "section-title", style: { display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", margin: "10px 0 -4px" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}}
          , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 111}}, "Scenario Bank "  , React.createElement('span', { className: "chip new" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 111}}, scenarios.length, " scenarios" ))
          , React.createElement('label', { className: "search", style: { marginLeft: "auto", fontSize: 14, fontWeight: 400, minWidth: 220 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 112}}
            , React.createElement(Icon, { name: "search", size: 15, __self: this, __source: {fileName: _jsxFileName, lineNumber: 113}} )
            , React.createElement('input', { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search ICAO, callsign, aircraft…"   , 'aria-label': "Search scenarios" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}} )
          )
        )
        , scenarios.filter(match).map(row)
        , scenarios.filter(match).length === 0 && React.createElement('p', { style: { color: "var(--muted)", margin: 0 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 118}}, "No scenario matches “"   , q, "”.")
      )
    )
  );
}
