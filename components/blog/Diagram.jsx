// Data-driven inline SVG figures. Every label is a real <text> node, so answer
// engines read the figure as text rather than guessing from an alt attribute.
// Rendered inline: no HTTP request, no layout shift, sharp at any DPI.

const BRAND = '#2BC48A'
const DARK = '#1FA374'
const CORAL = '#FF8B6B'

function Frame({ id, title, description, height, children }) {
  return (
    <svg
      viewBox={`0 0 900 ${height}`}
      className="h-auto w-full text-ink dark:text-slate-100"
      role="img"
      aria-labelledby={`${id}-t ${id}-d`}
    >
      <title id={`${id}-t`}>{title}</title>
      <desc id={`${id}-d`}>{description}</desc>
      {children}
    </svg>
  )
}

function Flow({ id, title, caption, data }) {
  const n = data.length
  const boxH = 74
  const gap = 22
  const height = n * (boxH + gap) + 20

  return (
    <Frame id={id} title={title} height={height}
      description={`${title}. ${n} stages: ${data.map((d, i) => `${i + 1}. ${d.label}, ${d.detail}`).join('; ')}.`}>
      {data.map((item, i) => {
        const y = i * (boxH + gap)
        return (
          <g key={item.label}>
            {i < n - 1 && <line x1="46" y1={y + boxH} x2="46" y2={y + boxH + gap} stroke={BRAND} strokeWidth="3" strokeDasharray="5 5" />}
            <circle cx="46" cy={y + boxH / 2} r="24" fill={BRAND} />
            <text x="46" y={y + boxH / 2 + 8} textAnchor="middle" fontSize="22" fontWeight="bold" fill="#FFFFFF">{i + 1}</text>
            <rect x="90" y={y} width="800" height={boxH} rx="14" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.14" />
            <text x="112" y={y + 30} fontSize="21" fontWeight="bold" fill="currentColor">{item.label}</text>
            <text x="112" y={y + 56} fontSize="17" fill="currentColor" fillOpacity="0.7">{item.detail}</text>
          </g>
        )
      })}
    </Frame>
  )
}

function Timeline({ id, title, caption, data }) {
  const n = data.length
  const step = 860 / n
  const height = 210

  return (
    <Frame id={id} title={title} height={height}
      description={`${title}. Stages in order: ${data.map((d) => `${d.label} takes ${d.detail}`).join('; ')}.`}>
      <line x1="24" y1="96" x2="876" y2="96" stroke={BRAND} strokeWidth="4" />
      {data.map((item, i) => {
        const x = 24 + step * i + step / 2
        return (
          <g key={item.label}>
            <circle cx={x} cy="96" r="13" fill={BRAND} stroke="#FFFFFF" strokeWidth="3" />
            <text x={x} y="56" textAnchor="middle" fontSize="18" fontWeight="bold" fill="currentColor">{item.detail}</text>
            <text x={x} y="140" textAnchor="middle" fontSize="16" fill="currentColor" fillOpacity="0.75">{item.label}</text>
            {item.sub && <text x={x} y="164" textAnchor="middle" fontSize="14" fill="currentColor" fillOpacity="0.55">{item.sub}</text>}
          </g>
        )
      })}
    </Frame>
  )
}

function Bars({ id, title, caption, data }) {
  const max = Math.max(...data.map((d) => d.value))
  const rowH = 56
  const height = data.length * rowH + 30
  const labelW = 250
  const trackW = 560

  return (
    <Frame id={id} title={title} height={height}
      description={`${title}. Values: ${data.map((d) => `${d.label} is ${d.display}`).join('; ')}.`}>
      {data.map((item, i) => {
        const y = i * rowH + 10
        const w = Math.max(6, (item.value / max) * trackW)
        return (
          <g key={item.label}>
            <text x="0" y={y + 30} fontSize="18" fill="currentColor" fillOpacity="0.85">{item.label}</text>
            <rect x={labelW} y={y + 10} width={trackW} height="28" rx="8" fill="currentColor" fillOpacity="0.07" />
            <rect x={labelW} y={y + 10} width={w} height="28" rx="8" fill={item.highlight ? CORAL : BRAND} fillOpacity={item.highlight ? 0.95 : 0.85} />
            <text x={labelW + w + 12} y={y + 30} fontSize="17" fontWeight="bold" fill="currentColor">{item.display}</text>
          </g>
        )
      })}
    </Frame>
  )
}

function Ladder({ id, title, caption, data }) {
  const n = data.length
  const rowH = 82
  const height = n * rowH + 20

  return (
    <Frame id={id} title={title} height={height}
      description={`${title}. From lowest to highest: ${data.map((d) => `${d.label}, ${d.detail}`).join('; ')}.`}>
      {data.map((item, i) => {
        const y = height - (i + 1) * rowH
        const w = 300 + (i * 560) / Math.max(1, n - 1)
        return (
          <g key={item.label}>
            <rect x="0" y={y + 8} width={w} height={rowH - 18} rx="12" fill={BRAND} fillOpacity={0.2 + i * 0.18} stroke={DARK} strokeOpacity="0.35" />
            <text x="22" y={y + 36} fontSize="20" fontWeight="bold" fill="currentColor">{item.label}</text>
            <text x="22" y={y + 58} fontSize="16" fill="currentColor" fillOpacity="0.75">{item.detail}</text>
          </g>
        )
      })}
    </Frame>
  )
}

const RENDERERS = { flow: Flow, timeline: Timeline, bars: Bars, ladder: Ladder }

export default function Diagram({ diagram, id }) {
  const Renderer = RENDERERS[diagram.type]
  if (!Renderer) return null

  return (
    <figure className="mt-6 rounded-xl2 border border-line bg-white p-5 dark:border-slate-700 dark:bg-slate-900 sm:p-6">
      <Renderer id={id} title={diagram.title} caption={diagram.caption} data={diagram.data} />
      <figcaption className="mt-4 border-t border-line pt-3 text-sm leading-6 text-muted dark:border-slate-700">
        <span className="font-semibold text-ink dark:text-slate-200">{diagram.title}.</span> {diagram.caption}
      </figcaption>
    </figure>
  )
}
