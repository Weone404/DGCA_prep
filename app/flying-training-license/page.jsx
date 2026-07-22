'use client'

import AppShell from '@/components/AppShell'

export default function FlyingTrainingLicensePage() {
  return (
    <AppShell title="Flying Training License">
      <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Pilot Training</p>
        <h2 className="mt-2 text-2xl font-display font-bold text-ink">Flying Training License</h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          This section is ready for licensing requirements, training steps, and support resources.
        </p>
      </div>
    </AppShell>
  )
}
