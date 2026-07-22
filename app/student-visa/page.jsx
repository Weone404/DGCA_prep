'use client'

import Link from 'next/link'
import AppShell from '@/components/AppShell'
import { SIDEBAR_ITEMS } from '@/lib/sidebar-nav'
import StudentVisaHierarchy from '@/components/StudentVisaHierarchy'

const studentVisaSection = SIDEBAR_ITEMS.find((item) => item.id === 'student-visa')

export default function StudentVisaPage() {
  return (
    <AppShell title="Student Visa">
      <div className="space-y-6">
        <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Student Visa Resources</p>
            <h2 className="mt-2 text-2xl font-display font-bold text-ink">Plan your visa journey step by step</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Use the overview below to move from visa preparation to interview readiness with clear next steps for each section.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-ink">Visa navigation</h3>
              <p className="mt-1 text-sm text-muted">Choose a path to open the matching guidance page.</p>
            </div>
          </div>

          <div className="mt-6">
            <StudentVisaHierarchy items={studentVisaSection?.children || []} maxDepth={0} />
          </div>
        </div>
      </div>
    </AppShell>
  )
}
