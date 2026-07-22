'use client'

import Link from 'next/link'
import AppShell from '@/components/AppShell'
import { SIDEBAR_ITEMS } from '@/lib/sidebar-nav'

const admissionLetterSection = SIDEBAR_ITEMS.find((item) => item.id === 'student-visa')?.children?.[0]?.children?.[0]

export default function AdmissionLetterPage() {
  return (
    <AppShell title="Admission Letter for Visa">
      <div className="space-y-6">
        <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">USA Visa • Admission Letter</p>
          <h2 className="mt-2 text-2xl font-display font-bold text-ink">Admission Letter for Visa</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Gather the right information and complete the visa form in one place.
          </p>
        </div>

        <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
          <p className="text-sm font-semibold text-ink mb-3">Application</p>
          <div className="space-y-4 text-sm text-muted">
            <div className="rounded-2xl bg-canvas p-5">
              <p className="font-semibold text-ink">Application Form</p>
              <p className="mt-2">Fields and information needed to complete your visa application form.</p>
            </div>
            <div className="rounded-2xl bg-canvas p-5">
              <p className="font-semibold text-ink">Supporting Letter</p>
              <p className="mt-2">Prepare the cover letter, invitation letter, or financial support letter required for your visa application.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <label className="rounded-2xl border border-line bg-white p-4">
                <span className="text-xs text-muted">Full Name</span>
                <input className="mt-2 w-full border border-line rounded-xl px-3 py-2 text-sm text-ink outline-none" placeholder="Enter your full name" />
              </label>
              <label className="rounded-2xl border border-line bg-white p-4">
                <span className="text-xs text-muted">Email</span>
                <input className="mt-2 w-full border border-line rounded-xl px-3 py-2 text-sm text-ink outline-none" placeholder="Enter your email" />
              </label>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <label className="rounded-2xl border border-line bg-white p-4">
                <span className="text-xs text-muted">Course</span>
                <input className="mt-2 w-full border border-line rounded-xl px-3 py-2 text-sm text-ink outline-none" placeholder="Course name" />
              </label>
              <label className="rounded-2xl border border-line bg-white p-4">
                <span className="text-xs text-muted">University</span>
                <input className="mt-2 w-full border border-line rounded-xl px-3 py-2 text-sm text-ink outline-none" placeholder="University name" />
              </label>
            </div>
            <div className="flex justify-end">
              <button className="rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors">Save details</button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Link href="/student-visa" className="text-sm font-semibold text-brand hover:underline">Back to visa overview</Link>
        </div>
      </div>
    </AppShell>
  )
}
