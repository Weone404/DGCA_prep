// Inline SVG cover art. No network request, no image optimizer round-trip, and
// every label is real <text> so crawlers and language models can read the figure.

const BRAND = '#2BC48A'
const CORAL = '#FF8B6B'
const MUTED = '#8C95A3'
const INK = '#1B2430'

const MOTIFS = {
  route: {
    label: 'Flight path climbing through five waypoints towards an aircraft',
    draw: (
      <>
        <path d="M20 400 L120 320 L240 340 L360 220 L440 120" fill="none" stroke={BRAND} strokeWidth="5" strokeLinecap="round" strokeDasharray="14 12" />
        {[[20, 400], [120, 320], [240, 340], [360, 220], [440, 120]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="9" fill={INK} stroke={BRAND} strokeWidth="4" />
        ))}
        <g transform="translate(440,120) rotate(-38)">
          <path d="M0,-30 L9,10 L34,24 L34,34 L9,28 L9,44 L20,54 L20,62 L0,56 L-20,62 L-20,54 L-9,44 L-9,28 L-34,34 L-34,24 L-9,10 Z" fill="#FFFFFF" opacity="0.95" />
        </g>
      </>
    ),
  },
  checklist: {
    label: 'Eligibility checklist with three requirements met and one pending',
    draw: (
      <>
        <rect x="40" y="60" width="380" height="340" rx="22" fill="none" stroke={MUTED} strokeWidth="3" opacity="0.5" />
        {[0, 1, 2, 3].map((i) => {
          const y = 120 + i * 72
          return (
            <g key={i}>
              <rect x="80" y={y - 22} width="44" height="44" rx="10" fill="none" stroke={BRAND} strokeWidth="4" />
              {i < 3 && <path d={`M89 ${y} l11 12 l24 -26`} fill="none" stroke={BRAND} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />}
              <rect x="146" y={y - 9} width={[220, 180, 240, 150][i]} height="18" rx="9" fill="#FFFFFF" opacity={i < 3 ? 0.85 : 0.35} />
            </g>
          )
        })}
      </>
    ),
  },
  subjects: {
    label: 'Five stacked bars representing the five DGCA theory papers',
    draw: (
      <>
        {[0, 1, 2, 3, 4].map((i) => {
          const y = 60 + i * 72
          return (
            <g key={i}>
              <rect x="40" y={y} width={380 - i * 18} height="52" rx="14" fill={[BRAND, '#7B7FF2', CORAL, BRAND, '#7B7FF2'][i]} opacity={0.9 - i * 0.12} />
              <circle cx="72" cy={y + 26} r="10" fill={INK} opacity="0.5" />
            </g>
          )
        })}
      </>
    ),
  },
  gauge: {
    label: 'Circular gauge filled to seventy per cent, the DGCA pass mark',
    draw: (
      <>
        <circle cx="230" cy="240" r="150" fill="none" stroke="#FFFFFF" strokeWidth="26" opacity="0.12" />
        <circle cx="230" cy="240" r="150" fill="none" stroke={BRAND} strokeWidth="26" strokeLinecap="round" strokeDasharray="659.7 942.5" transform="rotate(-90 230 240)" />
        <text x="230" y="258" fontSize="76" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">70%</text>
      </>
    ),
  },
  calendar: {
    label: 'Calendar grid with four examination sessions highlighted',
    draw: (
      <>
        <rect x="45" y="70" width="370" height="330" rx="20" fill="none" stroke={MUTED} strokeWidth="3" opacity="0.55" />
        <rect x="45" y="70" width="370" height="58" rx="20" fill={BRAND} opacity="0.9" />
        <rect x="45" y="108" width="370" height="20" fill={BRAND} opacity="0.9" />
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3, 4].map((c) => (
            <rect key={`${r}-${c}`} x={78 + c * 68} y={158 + r * 58} width="44" height="38" rx="9" fill="#FFFFFF"
              opacity={[[0, 1], [1, 3], [2, 0], [3, 2]].some(([a, b]) => a === r && b === c) ? 0.92 : 0.16} />
          )),
        )}
      </>
    ),
  },
  idcard: {
    label: 'Identity card representing the lifetime DGCA computer number',
    draw: (
      <>
        <rect x="40" y="110" width="380" height="250" rx="22" fill="#FFFFFF" opacity="0.10" stroke={MUTED} strokeWidth="3" />
        <rect x="72" y="150" width="96" height="96" rx="16" fill={BRAND} opacity="0.85" />
        <circle cx="120" cy="184" r="18" fill={INK} opacity="0.55" />
        <path d="M96 232 q24 -28 48 0" fill={INK} opacity="0.55" />
        {[210, 160, 120].map((w, i) => <rect key={w} x="196" y={158 + i * 36} width={w} height="16" rx="8" fill="#FFFFFF" opacity={0.8 - i * 0.2} />)}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <rect key={i} x={74 + i * 40} y="288" width="24" height="44" rx="5" fill={BRAND} opacity={0.35 + 0.07 * i} />)}
      </>
    ),
  },
  ecg: {
    label: 'Electrocardiogram trace over a heart, for the aeromedical assessment',
    draw: (
      <>
        <path d="M230 320 c0 -46 -74 -46 -74 -4 c0 40 74 78 74 78 c0 0 74 -38 74 -78 c0 -42 -74 -42 -74 4 z" fill={CORAL} opacity="0.85" />
        <path d="M20 240 L110 240 L135 240 L152 170 L172 320 L192 210 L212 240 L300 240 L322 240 L340 190 L358 290 L376 240 L440 240" fill="none" stroke={BRAND} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="440" cy="240" r="10" fill={BRAND} />
      </>
    ),
  },
  bars: {
    label: 'Rising bar chart with a trend line, representing training cost',
    draw: (
      <>
        {[120, 180, 250, 330].map((v, i) => <rect key={v} x={60 + i * 96} y={420 - v} width="62" height={v} rx="12" fill={BRAND} opacity={0.35 + 0.2 * i} />)}
        <path d="M60 300 L156 250 L252 190 L348 110" fill="none" stroke={CORAL} strokeWidth="5" strokeLinecap="round" />
        <line x1="40" y1="428" x2="440" y2="428" stroke={MUTED} strokeWidth="3" opacity="0.6" />
      </>
    ),
  },
  radio: {
    label: 'Radio mast transmitting three signal arcs',
    draw: (
      <>
        {[70, 120, 170].map((r, i) => <path key={r} d={`M ${230 - r} 200 a ${r} ${r} 0 0 1 ${2 * r} 0`} fill="none" stroke={BRAND} strokeWidth="6" opacity={0.8 - 0.22 * i} strokeLinecap="round" />)}
        <path d="M196 400 L214 262 L246 262 L264 400 Z" fill={BRAND} opacity="0.9" />
        <line x1="230" y1="262" x2="230" y2="186" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
        <circle cx="230" cy="178" r="12" fill={CORAL} />
      </>
    ),
  },
  convert: {
    label: 'A foreign licence document converting into an Indian DGCA licence',
    draw: (
      <>
        <rect x="30" y="120" width="170" height="230" rx="18" fill="#FFFFFF" opacity="0.14" stroke={MUTED} strokeWidth="3" />
        <rect x="260" y="120" width="170" height="230" rx="18" fill={BRAND} opacity="0.22" stroke={BRAND} strokeWidth="3" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x="56" y={158 + i * 40} width={118 - i * 14} height="14" rx="7" fill="#FFFFFF" opacity="0.5" />
            <rect x="286" y={158 + i * 40} width={118 - i * 14} height="14" rx="7" fill={BRAND} opacity="0.9" />
          </g>
        ))}
        <path d="M210 235 L250 235" stroke={CORAL} strokeWidth="8" strokeLinecap="round" />
        <path d="M236 219 L254 235 L236 251" fill="none" stroke={CORAL} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  epaulette: {
    label: "Captain's epaulette with four command stripes",
    draw: (
      <>
        <path d="M70 120 L390 120 L350 400 L110 400 Z" fill="#16202C" stroke={MUTED} strokeWidth="3" opacity="0.9" />
        {[0, 1, 2, 3].map((i) => <rect key={i} x={96 + i * 3} y={180 + i * 50} width={268 - i * 6} height="22" rx="6" fill={BRAND} opacity={0.95 - 0.1 * i} />)}
      </>
    ),
  },
  steps: {
    label: 'Ascending steps with a rising line, representing salary progression',
    draw: (
      <>
        {[0, 1, 2, 3].map((i) => <rect key={i} x={50 + i * 98} y={420 - (90 + i * 80)} width="80" height={90 + i * 80} rx="12" fill={BRAND} opacity={0.3 + 0.2 * i} />)}
        <path d="M90 300 L188 240 L286 160 L384 60" fill="none" stroke="#FFFFFF" strokeWidth="5" opacity="0.85" strokeLinecap="round" />
        <circle cx="90" cy="300" r="13" fill="#FFFFFF" opacity="0.9" />
        <circle cx="384" cy="60" r="17" fill={CORAL} />
      </>
    ),
  },
  crew: {
    label: 'Cabin crew silhouette above three service bars',
    draw: (
      <>
        <path d="M120 400 q110 -140 220 0 z" fill="#FFFFFF" opacity="0.16" />
        <circle cx="230" cy="150" r="58" fill={BRAND} opacity="0.9" />
        <path d="M172 108 a 58 58 0 0 1 116 0 z" fill="#16202C" />
        <rect x="166" y="100" width="128" height="16" rx="8" fill="#16202C" />
        {[0, 1, 2].map((i) => <rect key={i} x={130 + i * 80} y="330" width="60" height="14" rx="7" fill={BRAND} opacity={0.8 - 0.2 * i} />)}
      </>
    ),
  },
}

function wrapTitle(title, width) {
  const words = title.split(' ')
  const lines = []
  let line = ''
  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (next.length > width && line) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  }
  if (line) lines.push(line)
  return lines.slice(0, 3)
}

export default function CoverArt({ motif, title, eyebrow, uid: uidProp, priority = false, className = '' }) {
  const art = MOTIFS[motif] || MOTIFS.route
  const lines = wrapTitle(title, 20)
  const fontSize = lines.length <= 2 ? 58 : 50
  const startY = 300 - (lines.length - 1) * fontSize * 0.62 + 20
  const uid = `cover-${uidProp || motif}`

  return (
    <svg
      viewBox="0 0 1200 675"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-labelledby={`${uid}-title ${uid}-desc`}
      preserveAspectRatio="xMidYMid slice"
      fetchPriority={priority ? 'high' : undefined}
    >
      <title id={`${uid}-title`}>{title}</title>
      <desc id={`${uid}-desc`}>
        {eyebrow} illustration for We One Aviation: {art.label}.
      </desc>

      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0E1620" />
          <stop offset="55%" stopColor={INK} />
          <stop offset="100%" stopColor="#12303C" />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx="0.78" cy="0.32" r="0.6">
          <stop offset="0%" stopColor={BRAND} stopOpacity="0.30" />
          <stop offset="100%" stopColor={BRAND} stopOpacity="0" />
        </radialGradient>
        <pattern id={`${uid}-grid`} width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0 L0 0 0 48" fill="none" stroke="#FFFFFF" strokeOpacity="0.045" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="1200" height="675" fill={`url(#${uid}-bg)`} />
      <rect width="1200" height="675" fill={`url(#${uid}-grid)`} />
      <rect width="1200" height="675" fill={`url(#${uid}-glow)`} />
      <rect x="0" y="0" width="10" height="675" fill={BRAND} />

      <g transform="translate(690,108)" aria-hidden="true">{art.draw}</g>

      <rect x="80" y="150" width="10" height="42" rx="5" fill={BRAND} />
      <text x="106" y="182" fontSize="24" fontWeight="bold" letterSpacing="4" fill={BRAND}>
        {eyebrow.toUpperCase()}
      </text>

      {lines.map((line, index) => (
        <text key={line} x="80" y={startY + index * fontSize * 1.18} fontSize={fontSize} fontWeight="bold" fill="#FFFFFF">
          {line}
        </text>
      ))}

      <line x1="80" y1="524" x2="620" y2="524" stroke="#FFFFFF" strokeOpacity="0.16" strokeWidth="2" />
      <text x="80" y="570" fontSize="26" fontWeight="bold" fill="#FFFFFF" fillOpacity="0.92">We One Aviation</text>
      <text x="80" y="604" fontSize="21" fill={MUTED}>DGCA Ground School · dgcaexam.com</text>
    </svg>
  )
}
