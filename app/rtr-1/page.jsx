import AppShell from '@/components/AppShell'
import Link from 'next/link'

export const metadata = { title: 'RTR 1 MCQ Test' }

export default function Rtr1Page() {
  return (
    <AppShell title="RTR 1">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-2xl items-center justify-center py-10">
        <div className="card w-full p-6 text-ink sm:p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-brand">RTR 1</p>
          <h1 className="mb-3 text-2xl font-bold">RTR 1 MCQ Test</h1>
          <p className="mb-6 text-sm leading-6 text-muted">
            Practice from the complete RTR Part 1 Standard Book question bank. Questions and explanations are loaded from the project JSON source when you start the test.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/rtr-1/test" className="flex-1 rounded-xl bg-brand px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-dark">
              Start Test
            </Link>
            <Link href="/dashboard" className="flex-1 rounded-xl border border-line px-4 py-3 text-center text-sm font-semibold text-ink">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
