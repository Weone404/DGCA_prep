'use client'

import AppShell from '@/components/AppShell'

export default function InterviewQuestionsPage() {
  return (
    <AppShell title="Interview Questions">
      <div className="space-y-6">
        <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">USA Visa • Interview</p>
          <h2 className="mt-2 text-2xl font-display font-bold text-ink">Interview Questions</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Review the likely questions you may face during your visa interview.
          </p>
        </div>

        <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
          <p className="text-sm font-semibold text-ink mb-3">Common questions</p>
          <ul className="space-y-3 text-sm text-muted">
            <li className="rounded-2xl bg-canvas px-4 py-3">Why do you want to study in the USA?</li>
            <li className="rounded-2xl bg-canvas px-4 py-3">What is the name of your university and course?</li>
            <li className="rounded-2xl bg-canvas px-4 py-3">How will you fund your education and stay?</li>
            <li className="rounded-2xl bg-canvas px-4 py-3">What are your plans after completing your studies?</li>
          </ul>
          <div className="mt-4 rounded-2xl bg-canvas p-4 text-sm text-muted">
            <p className="font-semibold text-ink">Sample answer</p>
            <p className="mt-2">I am going to the USA to study because this program aligns with my career goals and the university offers strong academic support.</p>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
