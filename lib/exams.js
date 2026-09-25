
import SCENARIOS from "./scenarios.json";

















































export const EXAM_MINUTES = 30;
export const PASS_MARK = 0.5;

export const EXAMS = [
  {
    id: "sample-exam-1",
    title: "Sample Exam 1",
    tags: ["Important", "Free"],
    flight: {
      callsign: "WEONE 214",
      reg: "VT-WXA",
      aircraft: "A320",
      pob: "142",
      endurance: "3 h 10 min",
      start: "06:15 UTC",
      dep: "VOHS",
      dest: "VOMM",
      route: "VOHS-KARNO-TELIM-RUDRA-PENAK-SAVRI-VOMM",
      atis: "Information Charlie. METAR VOHS 240600Z 27010KT 4000 HZ BKN015 29/21 Q1009 NOSIG",
      squawk: "5231",
    },
    freqs: [["Ground", "121.75"], ["Tower", "118.45"], ["Approach", "127.10"], ["Departure", "124.30"], ["ATIS", "126.85"], ["Control", "132.70"]],
    chart: {
      points: {
        VOHS: [170, 110], KARNO: [270, 180], TELIM: [365, 250], RUDRA: [470, 300], PENAK: [575, 360], SAVRI: [690, 440], VOMM: [800, 500],
        HSV: [120, 300], NDR: [330, 470], KDP: [540, 160], VJW: [660, 220], TPT: [450, 520], GNT: [250, 380], OGL: [610, 90],
      },
      airways: [
        { via: ["HSV", "KARNO", "KDP", "OGL"], name: "W1" }, { via: ["HSV", "GNT", "NDR", "TPT"], name: "W12" },
        { via: ["VOHS", "HSV"], name: "A4" }, { via: ["KDP", "VJW", "SAVRI"], name: "W27" }, { via: ["GNT", "TELIM", "KDP"], name: "W33" },
        { via: ["NDR", "RUDRA", "VJW"], name: "W41" }, { via: ["TPT", "PENAK", "VJW"], name: "W52" }, { via: ["OGL", "VJW", "VOMM"], name: "G2" },
        { via: ["GNT", "RUDRA"], name: "W8" }, { via: ["TPT", "VOMM"], name: "R3" },
      ],
      route: ["VOHS", "KARNO", "TELIM", "RUDRA", "PENAK", "SAVRI", "VOMM"],
      navaids: ["HSV", "NDR", "KDP", "VJW", "TPT", "GNT", "OGL"],
      airports: ["VOHS", "VOMM"],
      areas: [
        { pts: [[380, 110], [450, 95], [480, 160], [420, 190]], label: "VO(R)-104" },
        { pts: [[600, 270], [660, 260], [675, 320], [610, 330]], label: "VO(D)-22" },
        { pts: [[250, 450], [310, 440], [320, 500], [255, 510]], label: "VO(P)-7" },
      ],
      fir: "M0 150 L180 120 L330 40 L520 70 L610 0 M900 250 L760 300 L700 420 L760 560",
    },
    questions: [
      { q: "Convert to RT phraseology: Visibility 4000 metres", a: "Visibility four thousand metres", alts: ["Visibility 4000 metres"], mode: "seq", ref: "ICAO Doc 9432: transmission of visibility" },
      { q: "Convert the ATIS cloud group to RT phraseology: BKN015", a: "Broken one thousand five hundred feet", alts: ["Broken 1500 feet"], mode: "seq", ref: "ICAO Doc 9432: cloud amount and height" },
      { q: "What is the correct RT word for: I understand your message and will comply with it.", a: "Wilco", mode: "seq", ref: "ICAO Doc 9432: standard words and phrases" },
      { q: "How will you say: FL280", a: "Flight level two eight zero", mode: "seq", ref: "ICAO Doc 9432: transmission of numbers" },
      { q: "Convert to RT phraseology: Heading 050", a: "Heading zero five zero", mode: "seq", ref: "ICAO Doc 9432: transmission of numbers" },
      { q: "Convert to RT phraseology: QNH 1009 hPa", a: "QNH one zero zero nine", mode: "seq", ref: "ICAO Doc 9432: altimeter setting" },
      { q: "Say the Approach frequency shown in the Frequencies panel.", a: "One two seven decimal one", mode: "seq", ref: "Annex 10 Vol II: transmission of frequencies" },
      { q: "What is the correct RT word for: Consider that transmission as not sent.", a: "Disregard", mode: "seq", ref: "ICAO Doc 9432: standard words and phrases" },
      { q: "You lose two-way radio contact. Which code do you set? Say it in RT.", a: "Squawk seven six zero zero", mode: "kw", kw: ["seven six zero zero"], ref: "Transponder code for radio communication failure" },
      {
        q: "Make your initial call to Hyderabad Ground: you are at stand 12, have information Charlie, and request taxi.",
        a: "Hyderabad Ground, WEONE two one four, stand one two, information Charlie, request taxi",
        mode: "kw", kw: ["hyderabad ground", "we one two one four", "stand one two", "information charlie", "request taxi"],
        ref: "ICAO Doc 9432: taxi procedures",
        reply: "WEONE 214, taxi to holding point runway 27 via Alpha, QNH 1009.",
      },
      {
        q: "Engine fire just after take-off, climbing through 2000 ft. Begin your distress message to Hyderabad Tower.",
        a: "MAYDAY MAYDAY MAYDAY, Hyderabad Tower, WEONE two one four, engine fire, returning to land, passing two thousand feet",
        mode: "kw", kw: ["mayday mayday mayday", "hyderabad tower", "we one two one four", "engine fire"],
        ref: "ICAO Doc 9432: distress messages",
        reply: "WEONE 214, roger MAYDAY, runway 27 cleared to land, wind 270 degrees 10 knots, emergency services alerted.",
      },
      {
        q: "ATC: \"WEONE 214, climb FL120.\" Read back the clearance.",
        a: "Climb flight level one two zero, WEONE two one four",
        mode: "kw", kw: ["climb flight level one two zero", "we one two one four"],
        ref: "ICAO Doc 9432: readback requirements",
        atc: "WEONE 214, climb FL120.",
      },
    ],
  },
  {
    id: "sample-exam-2",
    title: "Sample Exam 2",
    tags: ["New"],
    flight: {
      callsign: "WEONE 318",
      reg: "VT-WXD",
      aircraft: "A321",
      pob: "186",
      endurance: "2 h 40 min",
      start: "13:40 UTC",
      dep: "VABB",
      dest: "VOGA",
      route: "VABB-SUDAR-KELVA-MANOR-PAVAN-VOGA",
      atis: "Information Delta. METAR VABB 241330Z 24015G25KT 5000 RA SCT012 BKN080 27/24 Q1006 TEMPO 2500 TSRA",
      squawk: "3417",
    },
    freqs: [["Ground", "121.85"], ["Tower", "118.25"], ["Approach", "127.90"], ["Departure", "125.45"], ["ATIS", "126.60"], ["Control", "132.35"]],
    chart: {
      points: {
        VABB: [220, 90], SUDAR: [290, 170], KELVA: [360, 260], MANOR: [430, 340], PAVAN: [520, 420], VOGA: [610, 490],
        BBB: [140, 200], PNE: [470, 140], KLP: [590, 290], RTN: [300, 400], BLG: [720, 380], SWD: [410, 510],
      },
      airways: [
        { via: ["VABB", "BBB", "RTN", "SWD"], name: "W15" }, { via: ["PNE", "KLP", "BLG"], name: "W20" },
        { via: ["BBB", "KELVA", "PNE"], name: "A7" }, { via: ["RTN", "MANOR", "KLP"], name: "W9" },
        { via: ["SWD", "PAVAN", "BLG"], name: "W44" }, { via: ["PNE", "VABB"], name: "G5" }, { via: ["KLP", "VOGA"], name: "R11" },
      ],
      route: ["VABB", "SUDAR", "KELVA", "MANOR", "PAVAN", "VOGA"],
      navaids: ["BBB", "PNE", "KLP", "RTN", "BLG", "SWD"],
      airports: ["VABB", "VOGA"],
      areas: [
        { pts: [[500, 200], [560, 190], [575, 245], [515, 250]], label: "VA(D)-31" },
        { pts: [[200, 300], [255, 290], [265, 345], [205, 350]], label: "VA(R)-9" },
      ],
      fir: "M0 60 L160 40 L260 0 M900 200 L780 250 L760 400 L820 560",
    },
    questions: [
      { q: "Convert the ATIS wind to RT phraseology: 24015G25KT", a: "Wind two four zero degrees one five knots gusting two five knots", alts: ["Wind 240 degrees 15 knots gusting 25 knots"], mode: "seq", ref: "ICAO Doc 9432: transmission of wind" },
      { q: "Convert to RT phraseology: RVR runway 27, 550 metres", a: "RVR runway two seven five five zero metres", alts: ["RVR runway 27 550 metres"], mode: "seq", ref: "ICAO Doc 9432: runway visual range" },
      { q: "What is the correct RT word for: Yes.", a: "Affirm", mode: "seq", ref: "ICAO Doc 9432: standard words and phrases" },
      { q: "How will you say: Altitude 2500 ft", a: "Altitude two thousand five hundred feet", alts: ["Altitude 2500 feet"], mode: "seq", ref: "ICAO Doc 9432: transmission of numbers" },
      { q: "Convert the ATIS cloud group to RT phraseology: SCT012", a: "Scattered one thousand two hundred feet", alts: ["Scattered 1200 feet"], mode: "seq", ref: "ICAO Doc 9432: cloud amount and height" },
      { q: "Say the Tower frequency shown in the Frequencies panel.", a: "One one eight decimal two five", mode: "seq", ref: "Annex 10 Vol II: transmission of frequencies" },
      { q: "What is the correct RT word for: A change has been made to your last clearance and this new clearance supersedes your previous clearance.", a: "Recleared", mode: "seq", ref: "ICAO Doc 9432: standard words and phrases" },
      { q: "What is the correct RT word for: Wait and I will call you.", a: "Standby", mode: "seq", ref: "ICAO Doc 9432: standard words and phrases" },
      {
        q: "You are at holding point runway 27 and ready. Call Mumbai Tower.",
        a: "Mumbai Tower, WEONE three one eight, holding point runway two seven, ready for departure",
        mode: "kw", kw: ["mumbai tower", "we one three one eight", "runway two seven", "ready for departure"],
        ref: "ICAO Doc 9432: aerodrome departure phraseology",
        reply: "WEONE 318, line up and wait runway 27.",
      },
      { q: "Which transponder code indicates unlawful interference? Say it in RT.", a: "Squawk seven five zero zero", mode: "kw", kw: ["seven five zero zero"], ref: "Transponder code for unlawful interference" },
      {
        q: "A passenger is seriously ill. Begin an urgency message to Mumbai Control at FL330.",
        a: "PAN PAN, PAN PAN, PAN PAN, Mumbai Control, WEONE three one eight, passenger seriously ill, request priority landing at Goa, flight level three three zero",
        mode: "kw", kw: ["pan pan pan pan pan pan", "mumbai control", "we one three one eight", ["ill", "sick", "medical"]],
        ref: "ICAO Doc 9432: urgency messages",
        reply: "WEONE 318, roger PAN PAN, descend FL150, expect priority at Goa.",
      },
      {
        q: "ATC: \"WEONE 318, descend to altitude 4000 feet, QNH 1006.\" Read back the clearance.",
        a: "Descend altitude four thousand feet, QNH one zero zero six, WEONE three one eight",
        mode: "kw", kw: ["descend", ["four thousand feet", "four zero zero zero feet"], "qnh one zero zero six", "we one three one eight"],
        ref: "ICAO Doc 9432: readback requirements",
        atc: "WEONE 318, descend to altitude 4000 feet, QNH 1006.",
      },
    ],
  },
];

const SCENARIO_EXAMS = (SCENARIOS ).map((e) => ({
  ...e,
  questions: e.questions.map((q) => ({ ...q, lenient: true })),
}));

/** Sample exams first, then the 33 scenarios from the RTR Part 2 scenario pack. */
export const ALL_EXAMS = [...EXAMS.map((e) => ({ ...e, group: "sample"  })), ...SCENARIO_EXAMS];

export const getExam = (id) => ALL_EXAMS.find((e) => e.id === id);
