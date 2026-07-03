'use client'

export function Badge({ children, tone = 'brand' }) {
  const tones = {
    brand: 'bg-brand-light text-brand-dark',
    coral: 'bg-orange-50 text-coral',
    violet: 'bg-violet-50 text-violet',
    muted: 'bg-canvas text-muted',
  }
  return <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${tones[tone] || tones.brand}`}>{children}</span>
}

export function ProgressBar({ value, color = '#2BC48A' }) {
  return (
    <div className="w-full h-2 rounded-full bg-line overflow-hidden">
      <div className="h-full rounded-full transition-all" style={{ width: `${value}%`, background: color }} />
    </div>
  )
}

export function EmptyState({ icon = '📭', title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      <div className="text-4xl mb-3">{icon}</div>
      <p className="font-display font-semibold text-ink">{title}</p>
      {subtitle && <p className="text-sm text-muted mt-1 max-w-sm">{subtitle}</p>}
    </div>
  )
}
