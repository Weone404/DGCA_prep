// Transcript normalisation and scoring for spoken / typed RT answers.

const DIG = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const SYN = {
  niner: "nine", fife: "five", tree: "three", fower: "four", tousand: "thousand",
  meters: "metres", meter: "metres", metre: "metres",
  weone: "we one", wilko: "wilco", panpan: "pan pan",
  hpa: "", hectopascals: "", hectopascal: "",
  to: "two", too: "two", for: "four", won: "one", oh: "zero",
};

export function norm(s) {
  const t = s
    .toLowerCase()
    .replace(/q\s*\.?\s*n\s*\.?\s*h/g, "qnh")
    .replace(/q\s*\.?\s*f\s*\.?\s*e/g, "qfe")
    .replace(/([a-z])(\d)/g, "$1 $2")
    .replace(/(\d)([a-z])/g, "$1 $2");
  const out = [];
  for (let w of t.split(/[\s,;:!?"'()/\-]+/)) {
    w = w.replace(/\.$/, "");
    if (!w) continue;
    if (/^[\d.]+$/.test(w)) {
      for (const c of w) out.push(c === "." ? "decimal" : DIG[+c]);
      continue;
    }
    if (w in SYN) {
      if (SYN[w]) out.push(...SYN[w].split(" "));
      continue;
    }
    out.push(w);
  }
  return out;
}

// ---- fuzzy word matching (speech-to-text misspellings like "hiderabod", "tacse") ----
const NUMBER_WORDS = new Set([...DIG, "decimal", "hundred", "thousand"]);

function lev(a, b) {
  const d = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    let prev = d[0];
    d[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const t = d[j];
      d[j] = Math.min(d[j] + 1, d[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = t;
    }
  }
  return d[b.length];
}

/** Rough sound key: similar-sounding spellings map to the same key. */
function soundKey(w) {
  let s = w.toLowerCase()
    .replace(/ph/g, "f").replace(/ck/g, "k").replace(/x/g, "ks").replace(/q/g, "k")
    .replace(/c(?=[eiy])/g, "s").replace(/c/g, "k").replace(/z/g, "s").replace(/d/g, "t").replace(/b/g, "p")
    .replace(/g/g, "k").replace(/v/g, "f");
  const first = /[aeiouy]/.test(s[0]) ? "a" : s[0];
  s = first + s.slice(1).replace(/[aeiouyhw]/g, "");
  return s.replace(/(.)\1+/g, "$1");
}

function same(a, b) {
  if (a === b) return true;
  if (NUMBER_WORDS.has(a) || NUMBER_WORDS.has(b)) return false;
  if (a.length < 4 || b.length < 4) return false;
  const tol = Math.max(a.length, b.length) >= 8 ? 2 : 1;
  return lev(a, b) <= tol || (soundKey(a) === soundKey(b) && soundKey(a).length >= 3);
}

function lcs(a, b) {
  const d = new Array(b.length + 1).fill(0);
  for (const x of a) {
    let p = 0;
    for (let j = 1; j <= b.length; j++) {
      const t = d[j];
      d[j] = same(x, b[j - 1]) ? p + 1 : Math.max(d[j], d[j - 1]);
      p = t;
    }
  }
  return d[b.length];
}

function containsSeq(hay, needle) {
  outer: for (let i = 0; i <= hay.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) if (!same(hay[i + j], needle[j])) continue outer;
    return true;
  }
  return false;
}

/** kw item: a phrase, or a list of acceptable alternative phrases. */
 














export function scoreAnswer(q, text) {
  const got = norm(text);
  if (q.mode === "kw" && q.kw) {
    const missing = [];
    let hit = 0;
    for (const k of q.kw) {
      const options = Array.isArray(k) ? k : [k];
      if (options.some((o) => containsSeq(got, norm(o)))) hit++;
      else missing.push(options[0]);
    }
    return { pct: hit / q.kw.length, missing };
  }
  const pct = Math.max(
    ...[q.a, ...(q.alts || [])].map((a) => {
      const exp = norm(a);
      const m = lcs(exp, got);
      const extra = Math.max(0, got.length - exp.length);
      return Math.max(0, m - (q.lenient || q.mode === "mean" ? 0 : extra * 0.25)) / exp.length;
    }),
  );
  return { pct, missing: [] };
}

 
export const grade = (p) => (p >= 0.9 ? "ok" : p >= 0.6 ? "part" : "bad");
export const gradeLabel = {
  ok: "Correct",
  part: "Partly correct",
  bad: "Incorrect",
  none: "Not answered",
};
