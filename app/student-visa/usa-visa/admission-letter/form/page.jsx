'use client'

import AppShell from '@/components/AppShell'

export default function AdmissionLetterFormPage() {
  return (
    <AppShell title="Admission Letter Form">
      <div className="space-y-6">
        <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">USA Visa • Admission Letter</p>
          <h2 className="mt-2 text-2xl font-display font-bold text-ink">Admission Letter Form</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            This form page is ready for the visa request details and supporting information.
          </p>
        </div>
      </div>
    </AppShell>
  )
}
