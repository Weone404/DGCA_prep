'use client'

import { useParams } from 'next/navigation'
import AppShell from '@/components/AppShell'
import ImportantQuestionsSection from '@/components/ImportantQuestionsSection'

const SUBJECT_LABELS = {
  'air-navigation': 'Air Navigation',
  'air-regulation': 'Air Regulation',
  'air-regulations': 'Air Regulations',
  meteorology: 'Meteorology',
  rtr: 'RTR',
  'radio-telephony': 'Radio Telephony',
  'technical-general': 'Technical General',
}

export default function ImportantQuestionsPage() {
  const { subject: subjectSlug } = useParams()
  const subject = SUBJECT_LABELS[String(subjectSlug || '').toLowerCase()] || ''

  return (
    <AppShell>
      <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl items-start justify-center py-6">
        {subject ? (
          <ImportantQuestionsSection subject={subject} dedicated />
        ) : (
          <section className="card w-full max-w-xl p-6 text-center">
            <h1 className="font-display text-xl font-bold text-ink">Important Questions unavailable</h1>
            <p className="mt-2 text-sm text-muted">This subject could not be found.</p>
          </section>
        )}
      </main>
    </AppShell>
  )
}
