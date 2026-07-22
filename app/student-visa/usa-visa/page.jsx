'use client'

import Link from 'next/link'
import AppShell from '@/components/AppShell'

const applicationFields = [
  'Full name as shown on your passport',
  'Passport number, issue date, and expiry date',
  'Personal and contact details, including your home address',
  'University name, course title, and program start date',
  'Financial support information and sponsor details',
  'Travel plans, purpose of stay, and expected duration',
]

const supportingLetters = [
  'Cover letter explaining your study purpose and travel plans',
  'Admission or invitation letter from the university',
  'Financial support letter from a sponsor or bank statement summary',
  'Any additional documents requested by the embassy or consulate',
]

const interviewQuestions = [
  'Why do you want to study in the USA?',
  'Which university and course have you been accepted into?',
  'How will you pay for your education and living costs?',
  'What are your plans after you complete your studies?',
]

const prepTips = [
  'Be clear and honest about your study plans and funding source.',
  'Keep your documents organized so you can answer confidently.',
  'Practice short, natural answers that match the question directly.',
]

const sampleAnswers = [
  'I am going to the USA to study because this program matches my career goals and the university offers strong academic support.',
  'My sponsor will cover my tuition and living expenses, and I have supporting bank documents ready.',
  'After completing my studies, I plan to use the knowledge I gain to contribute to my career and community.',
]

export default function UsaVisaPage() {
  return (
    <AppShell title="Student Visa – USA">
      <div className="space-y-6">
        <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">USA Visa • Student Visa</p>
          <h2 className="mt-2 text-2xl font-display font-bold text-ink">Student Visa – USA</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Use this guide to prepare the right documents, understand the application steps, and get ready for your interview.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-line bg-white p-6 shadow-card">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Section 1</p>
                <h3 className="mt-1 text-xl font-semibold text-ink">Application</h3>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-canvas p-5">
                <p className="font-semibold text-ink">Application Form</p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {applicationFields.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-canvas p-5">
                <p className="font-semibold text-ink">Supporting Letter</p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {supportingLetters.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-line bg-white p-6 shadow-card">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Section 2</p>
                <h3 className="mt-1 text-xl font-semibold text-ink">Interview</h3>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-canvas p-5">
                <p className="font-semibold text-ink">Interview Questions</p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {interviewQuestions.map((item) => (
                    <li key={item} className="rounded-2xl border border-line bg-white px-3 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-canvas p-5">
                <p className="font-semibold text-ink">Prep tips / sample answers</p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {prepTips.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-2xl border border-line bg-white p-3 text-sm text-muted">
                  <p className="font-semibold text-ink">Sample answer</p>
                  <p className="mt-2">{sampleAnswers[0]}</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
          <div className="flex flex-wrap gap-3">
            <Link href="/student-visa/usa-visa/admission-letter/form" className="rounded-2xl bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors">
              Open admission letter form
            </Link>
            <Link href="/student-visa/usa-visa/interview/interview-questions" className="rounded-2xl border border-line px-4 py-2.5 text-sm font-semibold text-ink hover:bg-canvas transition-colors">
              View interview questions
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
