'use client'

import { useEffect, useState, useTransition } from 'react'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { Badge } from '@/components/UI'
import RouteLoadingOverlay from '@/components/RouteLoadingOverlay'
import { useRouter } from 'next/navigation'

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default function ClassTestPage() {
  const [tab, setTab] = useState('upcoming')
  const [tests, setTests] = useState([])
  const [loading, setLoading] = useState(true)
  const [pendingRoute, setPendingRoute] = useState('')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  useEffect(() => {
    let active = true

    const load = async () => {
      try {
        const response = await fetch('/api/assigned-tests', {
          credentials: 'include',
        })
        const payload = await response.json()
        if (!active) return

        const rows = Array.isArray(payload?.tests) ? payload.tests : []
        const mapped = rows.map((item) => ({
          id: item.id,
          title: item.title || 'Assigned Class Test',
          classId: slugify(item.subjectId || item.subjectLabel || 'all-subjects'),
          subjectLabel: item.subjectLabel || 'Subject',
          chapterLabel: Array.isArray(item.chapterIds) && item.chapterIds.length ? item.chapterIds.join(', ') : '',
          numQuestions: Number(item.numQuestions || 20),
          durationMins: Number(item.durationMins || 30),
          isActive: item.isActive ?? item.is_active ?? true,
          createdAt: item.createdAt || item.created_at || new Date().toISOString(),
        }))

        setTests(mapped)

        mapped.slice(0, 20).forEach((item) => {
          const href = `/class-test/${encodeURIComponent(item.classId || 'all-subjects')}/${encodeURIComponent(String(item.id))}`
          router.prefetch(href)
        })
      } catch {
        if (!active) return
        setTests([])
      } finally {
        if (active) setLoading(false)
      }
    }

    load()
    return () => {
      active = false
    }
  }, [router])

  function openTest(href) {
    setPendingRoute(href)
    startTransition(() => {
      router.push(href)
    })
  }

  const list = tests.filter((t) => (tab === 'upcoming' ? t.isActive : !t.isActive))

  return (
    <AppShell>
      <div className="card p-2 inline-flex gap-1 mb-6">
        {['upcoming', 'completed'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold capitalize transition-colors ${
              tab === t ? 'bg-brand text-white' : 'text-muted hover:text-ink'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {loading ? <p className="text-sm text-muted mb-4">Loading class tests...</p> : null}

      <div className="grid lg:grid-cols-2 gap-5">
        {list.map((t) => (
          <div key={t.id} className="card p-5 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-violet/10 text-violet flex flex-col items-center justify-center shrink-0">
              <span className="text-xs font-semibold leading-none">{new Date(t.createdAt).toLocaleDateString('en-IN', { day: '2-digit' })}</span>
              <span className="text-[10px] uppercase">{new Date(t.createdAt).toLocaleDateString('en-IN', { month: 'short' })}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display font-semibold text-ink text-sm truncate">{t.title}</h3>
                <Badge tone="muted">{t.subjectLabel}</Badge>
              </div>
              <p className="text-xs text-muted flex items-center gap-3">
                <span className="flex items-center gap-1"><Icon name="clock" size={13} /> {t.durationMins} mins</span>
                <span>{t.numQuestions} questions</span>
                <span>{t.subjectLabel}</span>
              </p>
              {t.chapterLabel ? <p className="text-xs text-muted mt-1">{t.chapterLabel}</p> : null}
            </div>
            {tab === 'upcoming' ? (
              <button
                onClick={() => openTest(`/class-test/${encodeURIComponent(t.classId || 'all-subjects')}/${encodeURIComponent(String(t.id))}`)}
                className="bg-brand text-white text-xs font-semibold px-4 py-2 rounded-lg shrink-0"
              >
                Start Test
              </button>
            ) : (
              <div className="text-right shrink-0">
                <p className="font-display font-bold text-muted">Inactive</p>
                <p className="text-[10px] text-muted">Paused</p>
              </div>
            )}
          </div>
        ))}
        {list.length === 0 && <p className="text-sm text-muted">No {tab} tests.</p>}
      </div>

      {isPending ? (
        <RouteLoadingOverlay
          title="Starting class test"
          subtitle={pendingRoute ? 'Please wait while your test session is initialized...' : 'Preparing your test...'}
        />
      ) : null}
    </AppShell>
  )
}
