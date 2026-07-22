'use client'

export default function RouteLoadingOverlay({
  title = 'Loading...',
  subtitle = 'Please wait while we prepare your page.',
}) {
  return (
    <div className="fixed inset-0 z-[120] bg-ink/45 backdrop-blur-[2px] flex items-center justify-center p-4">
      <div className="card w-full max-w-sm text-center p-6">
        <div className="mx-auto mb-4 h-11 w-11 rounded-full border-4 border-line border-t-brand animate-spin" />
        <h3 className="font-display font-bold text-lg text-ink">{title}</h3>
        <p className="text-sm text-muted mt-1">{subtitle}</p>
      </div>
    </div>
  )
}