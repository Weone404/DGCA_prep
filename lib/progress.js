"use client";
// Per-browser exam progress, kept in localStorage.



const key = (id) => `rtr-exam-${id}`;
export function loadProgress(id) {
  try { const s = localStorage.getItem(key(id)); return s ? (JSON.parse(s) ) : null; } catch (e) { return null; }
}
export function saveProgress(id, p) {
  try { localStorage.setItem(key(id), JSON.stringify(p)); } catch (e2) { /* storage blocked */ }
}
export function clearProgress(id) {
  try { localStorage.removeItem(key(id)); } catch (e3) { /* storage blocked */ }
}
