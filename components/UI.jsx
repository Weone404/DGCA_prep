'use client'

export function Badge({ children, tone = 'brand' }) {
  const tones = {
    brand: 'bg-brand-light text-brand-dark dark:bg-brand/15 dark:text-brand',
    coral: 'bg-orange-50 text-coral dark:bg-orange-950/40 dark:text-orange-300',
    violet: 'bg-violet-50 text-violet dark:bg-violet-950/40 dark:text-violet-300',
    muted: 'bg-canvas text-muted dark:bg-slate-800 dark:text-slate-300',
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
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="mb-3 text-4xl">{icon}</div>
      <p className="font-display font-semibold text-ink dark:text-slate-100">{title}</p>
      {subtitle && <p className="mt-1 max-w-sm text-sm text-muted dark:text-slate-400">{subtitle}</p>}
    </div>
  )
}
