"use client";
import React from 'react';
const _jsxFileName = "D:\\RTR 2\\RTR\\components\\Chart.tsx"; function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
import { useEffect, useMemo, useRef, useState } from "react";

import { Icon } from "./Icons";

const W = 900, H = 560;

export default function Chart({ spec }) {
  const svgRef = useRef(null);
  const cardRef = useRef(null);
  const boxRef = useRef(null);
  const [view, setView] = useState({ k: 1, x: 0, y: 0 });
  const [drag, setDrag] = useState(null);

  const pt = (cx, cy) => {
    const svg = svgRef.current;
    const p = svg.createSVGPoint();
    p.x = cx; p.y = cy;
    return p.matrixTransform(svg.getScreenCTM().inverse());
  };
  const zoomAt = (f, px, py) =>
    setView((v) => {
      const k = Math.min(6, Math.max(1, v.k * f));
      if (k === 1) return { k: 1, x: 0, y: 0 };
      const r = k / v.k;
      return { k, x: px - (px - v.x) * r, y: py - (py - v.y) * r };
    });

  // Native listener so the page does not scroll while zooming the chart.
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      const p = pt(e.clientX, e.clientY);
      zoomAt(e.deltaY < 0 ? 1.15 : 1 / 1.15, p.x, p.y);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Deterministic spot elevations for chart texture.
  const spots = useMemo(() => {
    let seed = 7;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    return Array.from({ length: 40 }, () => ({ x: rnd() * W, y: rnd() * H, v: Math.round(rnd() * 30 + 5) * 100 }));
  }, []);

  const P = spec.points;
  const path = (ids) => ids.map((id, i) => `${i ? "L" : "M"}${P[id][0]} ${P[id][1]}`).join(" ");
  const mono = { fontFamily: "var(--mono)" };

  return (
    React.createElement('div', { className: "card chart-card" , ref: cardRef, __self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}
      , React.createElement('div', { className: `chart${drag ? " drag" : ""}`, ref: boxRef, __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}}
        , React.createElement('div', { className: "ctrls", __self: this, __source: {fileName: _jsxFileName, lineNumber: 57}}
          , React.createElement('button', { onClick: () => zoomAt(1.3, W / 2, H / 2), 'aria-label': "Zoom in" , title: "Zoom in" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}}, React.createElement(Icon, { name: "zoomIn", __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}} ))
          , React.createElement('button', { onClick: () => zoomAt(1 / 1.3, W / 2, H / 2), 'aria-label': "Zoom out" , title: "Zoom out" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 59}}, React.createElement(Icon, { name: "zoomOut", __self: this, __source: {fileName: _jsxFileName, lineNumber: 59}} ))
          , React.createElement('button', { onClick: () => setView({ k: 1, x: 0, y: 0 }), 'aria-label': "Reset view" , title: "Reset view" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}}, React.createElement(Icon, { name: "reset", __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}} ))
          , React.createElement('button', {
            onClick: () => { const c = cardRef.current; if (document.fullscreenElement) void document.exitFullscreen(); else _optionalChain([c, 'optionalAccess', _2 => _2.requestFullscreen, 'optionalCall', _3 => _3(), 'access', _4 => _4.catch, 'call', _5 => _5(() => {})]); },
            'aria-label': "Fullscreen", title: "Fullscreen", __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}
, React.createElement(Icon, { name: "expand", __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}} ))
        )
        , React.createElement('svg', {
          ref: svgRef, viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: "xMidYMid meet" , role: "img",
          'aria-label': "Schematic en-route chart showing the planned route"      ,
          onPointerDown: (e) => { const p = pt(e.clientX, e.clientY); setDrag({ px: p.x, py: p.y, x: view.x, y: view.y }); _optionalChain([(e.target ), 'access', _6 => _6.setPointerCapture, 'optionalCall', _7 => _7(e.pointerId)]); },
          onPointerMove: (e) => { if (!drag) return; const p = pt(e.clientX, e.clientY); setView((v) => ({ ...v, x: drag.x + p.x - drag.px, y: drag.y + p.y - drag.py })); },
          onPointerUp: () => setDrag(null), onPointerCancel: () => setDrag(null),
          onDoubleClick: () => setView({ k: 1, x: 0, y: 0 }), __self: this, __source: {fileName: _jsxFileName, lineNumber: 66}}

          , React.createElement('g', { transform: `translate(${view.x} ${view.y}) scale(${view.k})`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}}
            , React.createElement('rect', { x: -400, y: -400, width: 1700, height: 1360, fill: "var(--chart-bg)", __self: this, __source: {fileName: _jsxFileName, lineNumber: 75}} )
            , Array.from({ length: 13 }, (_, i) => React.createElement('line', { key: `v${i}`, x1: i * 75, y1: 0, x2: i * 75, y2: H, stroke: "var(--chart-grid)", __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}} ))
            , Array.from({ length: 9 }, (_, i) => React.createElement('line', { key: `h${i}`, x1: 0, y1: i * 70, x2: W, y2: i * 70, stroke: "var(--chart-grid)", __self: this, __source: {fileName: _jsxFileName, lineNumber: 77}} ))
            , React.createElement('path', { d: spec.fir, fill: "none", stroke: "var(--chart-fir)", strokeWidth: 6, strokeLinejoin: "round", opacity: 0.75, __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}} )
            , spec.fir && React.createElement('text', { x: 640, y: 40, fontSize: 13, fontWeight: 700, fill: "var(--chart-fir)", style: mono, __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}, "FIR BDRY" )

            , spec.airways.map((a) => {
              const [x1, y1] = P[a.via[0]], [x2, y2] = P[a.via[1]];
              return (
                React.createElement('g', { key: a.name, __self: this, __source: {fileName: _jsxFileName, lineNumber: 84}}
                  , React.createElement('path', { d: path(a.via), fill: "none", stroke: "var(--chart-awy)", strokeWidth: 1.3, opacity: 0.8, __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}} )
                  , React.createElement('g', { transform: `translate(${(x1 + x2) / 2} ${(y1 + y2) / 2})`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}
                    , React.createElement('rect', { x: -17, y: -8, width: 34, height: 15, rx: 2, fill: "var(--chart-bg)", stroke: "var(--chart-awy)", strokeWidth: 0.8, __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}} )
                    , React.createElement('text', { x: 0, y: 3.5, textAnchor: "middle", fontSize: 9, fill: "var(--chart-txt)", style: mono, __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}, a.name)
                  )
                )
              );
            })

            , spec.areas.map((a) => {
              const cx = a.pts.reduce((s, p) => s + p[0], 0) / a.pts.length;
              const cy = a.pts.reduce((s, p) => s + p[1], 0) / a.pts.length;
              return (
                React.createElement('g', { key: a.label, __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}
                  , React.createElement('polygon', { points: a.pts.map((p) => p.join(",")).join(" "), fill: "var(--chart-r)", fillOpacity: 0.07, stroke: "var(--chart-r)", strokeWidth: 1.4, strokeDasharray: "5 3" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}} )
                  , React.createElement('text', { x: cx, y: cy + 4, textAnchor: "middle", fontSize: 9.5, fontWeight: 700, fill: "var(--chart-r)", style: mono, __self: this, __source: {fileName: _jsxFileName, lineNumber: 100}}, a.label)
                )
              );
            })

            , [...spec.navaids.slice(0, 4), ...spec.airports].map((k) => {
              const [x, y] = P[k];
              return (
                React.createElement('g', { key: `rose-${k}`, opacity: 0.8, __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}
                  , React.createElement('circle', { cx: x, cy: y, r: 34, fill: "none", stroke: "var(--chart-vor)", strokeWidth: 1.2, __self: this, __source: {fileName: _jsxFileName, lineNumber: 109}} )
                  , Array.from({ length: 36 }, (_, i) => {
                    const a = (i * 10 * Math.PI) / 180, r1 = i % 3 ? 30 : 26;
                    return React.createElement('line', { key: i, x1: x + Math.sin(a) * r1, y1: y - Math.cos(a) * r1, x2: x + Math.sin(a) * 34, y2: y - Math.cos(a) * 34, stroke: "var(--chart-vor)", strokeWidth: 0.8, __self: this, __source: {fileName: _jsxFileName, lineNumber: 112}} );
                  })
                )
              );
            })

            , React.createElement('path', { d: path(spec.route), fill: "none", stroke: "var(--chart-route)", strokeWidth: 3.2, strokeLinecap: "round", strokeLinejoin: "round", opacity: 0.9, __self: this, __source: {fileName: _jsxFileName, lineNumber: 118}} )

            , Object.entries(P).map(([k, [x, y]]) => {
              const apt = spec.airports.includes(k), vor = spec.navaids.includes(k);
              return (
                React.createElement('g', { key: k, __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}}
                  , apt ? (
                    React.createElement(React.Fragment, null
                      , React.createElement('circle', { cx: x, cy: y, r: 8, fill: "var(--chart-bg)", stroke: "var(--chart-route)", strokeWidth: 2.5, __self: this, __source: {fileName: _jsxFileName, lineNumber: 126}} )
                      , React.createElement('line', { x1: x - 6, y1: y + 5, x2: x + 6, y2: y - 5, stroke: "var(--chart-route)", strokeWidth: 2.5, __self: this, __source: {fileName: _jsxFileName, lineNumber: 127}} )
                    )
                  ) : vor ? (
                    React.createElement(React.Fragment, null
                      , React.createElement('polygon', { points: `${x - 6},${y} ${x - 3},${y - 5} ${x + 3},${y - 5} ${x + 6},${y} ${x + 3},${y + 5} ${x - 3},${y + 5}`, fill: "var(--chart-bg)", stroke: "var(--chart-vor)", strokeWidth: 1.6, __self: this, __source: {fileName: _jsxFileName, lineNumber: 131}} )
                      , React.createElement('circle', { cx: x, cy: y, r: 1.4, fill: "var(--chart-vor)", __self: this, __source: {fileName: _jsxFileName, lineNumber: 132}} )
                    )
                  ) : (
                    React.createElement('polygon', { points: `${x},${y - 7} ${x + 6},${y + 4} ${x - 6},${y + 4}`, fill: "var(--chart-bg)", stroke: "var(--chart-route)", strokeWidth: 1.8, __self: this, __source: {fileName: _jsxFileName, lineNumber: 135}} )
                  )
                  , React.createElement('text', { x: x + 10, y: y - 9, fontSize: apt ? 12 : 10.5, fontWeight: 700, fill: vor ? "var(--chart-txt)" : "var(--chart-route)", stroke: "var(--chart-bg)", strokeWidth: 3, paintOrder: "stroke", style: mono, __self: this, __source: {fileName: _jsxFileName, lineNumber: 137}}, k)
                )
              );
            })

            , spots.map((s, i) => React.createElement('text', { key: i, x: s.x, y: s.y, fontSize: 8, fill: "var(--chart-txt)", opacity: 0.45, style: mono, __self: this, __source: {fileName: _jsxFileName, lineNumber: 142}}, s.v))
            , React.createElement('text', { x: 14, y: 548, fontSize: 10, fill: "var(--chart-txt)", style: mono, __self: this, __source: {fileName: _jsxFileName, lineNumber: 143}}, spec.fir ? "SCHEMATIC EN-ROUTE CHART · FICTIONAL · NOT FOR NAVIGATION" : "SCHEMATIC ROUTE CHART · POSITIONS APPROXIMATE · NOT FOR NAVIGATION")
          )
        )
      )
      , React.createElement('div', { className: "chart-note", __self: this, __source: {fileName: _jsxFileName, lineNumber: 147}}, "Scroll to zoom · drag to pan · double-click to reset"          )
    )
  );
}
