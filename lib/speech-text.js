 function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }// Shared (client + server): display text -> clear RT speech text.


const DIGIT = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "niner"];
const PHONETIC = {
  A: "Alpha", B: "Bravo", C: "Charlie", D: "Delta", E: "Echo", F: "Foxtrot", G: "Golf", H: "Hotel",
  I: "India", J: "Juliett", K: "Kilo", L: "Lima", M: "Mike", N: "November", O: "Oscar", P: "Papa",
  Q: "Quebec", R: "Romeo", S: "Sierra", T: "Tango", U: "Uniform", V: "Victor", W: "Whiskey",
  X: "X-ray", Y: "Yankee", Z: "Zulu",
};

export function spellPhonetic(code) {
  return code.toUpperCase().split("").map((c) => _nullishCoalesce(PHONETIC[c], () => ( (/\d/.test(c) ? DIGIT[+c] : c)))).join(" ");
}
const digits = (s) => s.split("").map((c) => (c === "." ? "decimal" : DIGIT[+c])).join(" ");
function hundreds(n) {
  const th = Math.floor(n / 1000), hu = Math.floor((n % 1000) / 100);
  return [th ? `${digits(String(th))} thousand` : "", hu ? `${DIGIT[hu]} hundred` : ""].filter(Boolean).join(" ");
}

/** Convert display text into clear RT speech (digits spoken one by one, "niner", "decimal"). */
export function toRadioSpeech(text) {
  let s = text;
  s = s.replace(/\bWEONE\b/g, "We One");
  s = s.replace(/\bVT-([A-Z]{3})\b/g, (_, r) => `Victor Tango ${spellPhonetic(r)}`);
  s = s.replace(/\bFL\s?(\d{2,3})\b/g, (_, d) => `flight level ${digits(d)}`);
  s = s.replace(/\bQNH\s?(\d{3,4})\b/g, (_, d) => `Q N H ${digits(d)}`);
  s = s.replace(/\bQNH\b/g, "Q N H").replace(/\bRVR\b/g, "R V R").replace(/\bATIS\b/g, "ay-tiss").replace(/\bILS\b/g, "I L S");
  s = s.replace(/\b(\d{3,5})\s?(ft|feet)\b/g, (_, d) => (+d % 100 === 0 ? `${hundreds(+d)} feet` : `${digits(d)} feet`));
  s = s.replace(/\b(\d{4,5})\s?(m|metres)\b/g, (_, d) => (+d % 100 === 0 ? `${hundreds(+d)} metres` : `${digits(d)} metres`));
  s = s.replace(/\b([A-Z]{4})\b/g, (m) => (/^(VI|VA|VO|VE)/.test(m) ? spellPhonetic(m) : m));
  s = s.replace(/\d+(\.\d+)?/g, (m) => digits(m));
  s = s.replace(/\bMAYDAY\b/g, "Mayday").replace(/\bPAN PAN\b/g, "Pan Pan");
  return s;
}

