'use client'

import AppShell from '@/components/AppShell'

export default function StudentEducationLoanPage() {
  return (
    <AppShell title="Student Education Loan">
      <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Student Support</p>
        <h2 className="mt-2 text-2xl font-display font-bold text-ink">Student Education Loan</h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          This section is ready for loan eligibility, documents, and application guidance.
        </p>
      </div>
    </AppShell>
  )
}
