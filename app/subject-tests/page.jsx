'use client'

import { useMemo, useState, useEffect, useTransition } from 'react'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { Badge } from '@/components/UI'
import { useAppContent } from '@/lib/use-app-content'
import { useRouter } from 'next/navigation'
import RouteLoadingOverlay from '@/components/RouteLoadingOverlay'

const DIFF_TONE = { Easy: 'brand', Medium: 'violet', Hard: 'coral' }

export default function SubjectTestsPage() {
  const { subjects: SUBJECTS, subjectTests: SUBJECT_TESTS } = useAppContent()
  const [activeSubject, setActiveSubject] = useState('Air Regulations')
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)
  const [studentData, setStudentData] = useState(null)
  const [pendingRoute, setPendingRoute] = useState('')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const filtered = useMemo(() => {
    return SUBJECT_TESTS.filter((t) => {
      const bySubject = activeSubject === 'All' || t.subject === activeSubject
      const byStatus = filter === 'all' || (filter === 'attempted' ? t.attempted : !t.attempted)
      return bySubject && byStatus
    })
  }, [activeSubject, filter])

  useEffect(() => {
    if (SUBJECTS.length) {
      const preferredSubject = SUBJECTS.find((subject) => subject.name === 'Air Regulations')?.name || SUBJECTS[0]?.name || ''
      setActiveSubject((current) => {
        if (current && SUBJECTS.some((subject) => subject.name === current)) return current
        return preferredSubject
      })
    }
  }, [SUBJECTS])

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const res = await fetch('/api/students', {
          credentials: 'include',
        })
        if (!mounted) return
        const data = await res.json()
        // expect array
        const first = Array.isArray(data) ? data[0] : data
        setStudentData(first)
      } catch (err) {
        // ignore
      }
    })()
    return () => (mounted = false)
  }, [])

  useEffect(() => {
    SUBJECT_TESTS.slice(0, 20).forEach((test) => {
      router.prefetch(`/subject-tests/${test.id}`)
    })
  }, [SUBJECT_TESTS, router])

  function navigateWithLoader(href) {
    setPendingRoute(href)
    startTransition(() => {
      router.push(href)
    })
  }

  return (
    <AppShell>
      <div className="w-full mb-6">
        <div className="w-full bg-black text-white p-4 rounded-lg flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold">{`You have completed ${
              (studentData?.completedLessonsLastDay ?? studentData?.completed_lessons_last_day ?? studentData?.completed_lessons ?? 5)
            } lessons in the last day.`}</p>
            <p className="text-sm text-white/80">Start your learning today.</p>
          </div>
          <button onClick={() => navigateWithLoader('/live-classes')} className="bg-white text-black px-4 py-2 rounded-md font-semibold">Start Learning</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {SUBJECTS.map((s) => s.name).map((s) => (
          <button
            key={s}
            onClick={() => setActiveSubject(s)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeSubject === s ? 'bg-brand text-white' : 'bg-white text-muted hover:text-ink shadow-card'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="card p-5 mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">{filtered.length} tests found</p>
        <div className="flex gap-2">
          {[{ k: 'all', l: 'All' }, { k: 'attempted', l: 'Attempted' }, { k: 'pending', l: 'Pending' }].map((f) => (
            <button
              key={f.k}
              onClick={() => setFilter(f.k)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${filter === f.k ? 'bg-brand-light text-brand-dark' : 'text-muted hover:bg-canvas'}`}
            >
              {f.l}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((t) => (
          <div key={t.id} className="card p-5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <Badge tone="muted">{t.subject}</Badge>
              <Badge tone={DIFF_TONE[t.difficulty]}>{t.difficulty}</Badge>
            </div>
            <h3 className="font-display font-semibold text-ink mb-1">{t.title}</h3>
            <p className="text-xs text-muted mb-4">{t.questions} questions · {t.duration} min</p>

            {t.attempted ? (
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1 text-sm text-brand font-semibold">
                  <Icon name="check" size={15} /> Scored {t.score}%
                </div>
                <button onClick={() => setSelected(t)} className="text-xs font-semibold text-ink underline">Review</button>
              </div>
            ) : (
              <button onClick={() => navigateWithLoader(`/subject-tests/${t.id}`)} className="mt-auto bg-brand hover:bg-brand-dark transition-colors text-white text-sm font-semibold py-2.5 rounded-xl">
                Start Test
              </button>
            )}
          </div>
        ))}
      </div>

      {/* chapter modal removed — subject chips only filter the test list now */}

      {selected && (
        <div className="fixed inset-0 bg-ink/40 flex items-center justify-center z-50 p-4" onClick={() => setSelected(null)}>
          <div className="card p-7 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-display font-bold text-lg text-ink mb-1">{selected.title}</h3>
            <p className="text-sm text-muted mb-5">{selected.subject} · {selected.questions} questions · {selected.duration} minutes</p>
            {selected.attempted ? (
              <p className="text-sm text-ink mb-5">Your last score was <span className="font-semibold text-brand">{selected.score}%</span>. Reviewing answers helps lock in what you missed.</p>
            ) : (
              <p className="text-sm text-ink mb-5">You'll have {selected.duration} minutes once you start. Make sure you're ready to focus.</p>
            )}
            <div className="flex gap-3">
              <button onClick={() => setSelected(null)} className="flex-1 border border-line text-ink text-sm font-semibold py-2.5 rounded-xl">Cancel</button>
              <button onClick={() => setSelected(null)} className="flex-1 bg-brand text-white text-sm font-semibold py-2.5 rounded-xl">
                {selected.attempted ? 'Review Answers' : 'Begin Test'}
              </button>
            </div>
          </div>
        </div>
      )}

      {isPending ? (
        <RouteLoadingOverlay
          title="Preparing your test"
          subtitle={pendingRoute.includes('/subject-tests/') ? 'Loading questions and test instructions...' : 'Loading the next page...'}
        />
      ) : null}
    </AppShell>
  )
}
