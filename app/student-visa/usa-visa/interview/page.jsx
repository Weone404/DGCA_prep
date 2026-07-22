'use client'

import Link from 'next/link'
import AppShell from '@/components/AppShell'

export default function VisaInterviewPage() {
  return (
    <AppShell title="Visa Interview">
      <div className="space-y-6">
        <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">USA Visa • VISA Interview</p>
          <h2 className="mt-2 text-2xl font-display font-bold text-ink">VISA Interview Preparation</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Review the common visa interview questions and prepare your answers with confidence.
          </p>
        </div>

        <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
          <p className="text-sm font-semibold text-ink mb-3">Interview Questions</p>
          <ul className="space-y-3 text-sm text-muted">
            <li className="rounded-2xl bg-canvas px-4 py-3">Why do you want to study in the USA?</li>
            <li className="rounded-2xl bg-canvas px-4 py-3">What is the name of your university and course?</li>
            <li className="rounded-2xl bg-canvas px-4 py-3">How will you fund your education and stay?</li>
            <li className="rounded-2xl bg-canvas px-4 py-3">What are your plans after completing your studies?</li>
          </ul>
          <div className="mt-4 rounded-2xl bg-canvas p-4 text-sm text-muted">
            <p className="font-semibold text-ink">Prep tips</p>
            <p className="mt-2">Practice short, honest answers, keep your documents ready, and explain your study plans clearly.</p>
          </div>
        </div>
        <div className="mt-4">
          <Link href="/student-visa" className="text-sm font-semibold text-brand hover:underline">Back to visa overview</Link>
        </div>
      </div>
    </AppShell>
  )
}
