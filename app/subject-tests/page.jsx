'use client'

import { useMemo, useState, useEffect, useTransition } from 'react'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { Badge } from '@/components/UI'
import { useAppContent } from '@/lib/use-app-content'
import { useRouter } from 'next/navigation'
import RouteLoadingOverlay from '@/components/RouteLoadingOverlay'

const DIFF_TONE = { Easy: 'brand', Medium: 'violet', Hard: 'coral' }

function normalizeKey(value) {
  return String(value || '').trim().toLowerCase()
}

function buildSubjectOptions(subjects = []) {
  const hasConfiguredParents = subjects.some((subject) => subject.hasSubjects && Array.isArray(subject.subSubjects) && subject.subSubjects.length)
  if (hasConfiguredParents) return subjects

  const navigationOrder = ['General Navigation', 'Radio Navigation', 'Instrument Navigation']
  const navigationChildren = navigationOrder
    .map((name) => subjects.find((subject) => normalizeKey(subject.name) === normalizeKey(name)))
    .filter(Boolean)
  const remainingNavigationChildren = subjects.filter(
    (subject) => normalizeKey(subject.name).includes('navigation') && !navigationOrder.some((name) => normalizeKey(name) === normalizeKey(subject.name))
  )
  navigationChildren.push(...remainingNavigationChildren)
  const hasNavigationParent = subjects.some((subject) => normalizeKey(subject.name) === 'navigation')

  if (navigationChildren.length >= 2 && !hasNavigationParent) {
    const nonNavigationSubjects = subjects.filter((subject) => !normalizeKey(subject.name).includes('navigation'))
    const parent = {
      id: 'navigation',
      name: 'Navigation',
      color: navigationChildren[0]?.color || '#0F766E',
      subtitle: navigationChildren.map((subject) => subject.name).join(' + '),
      icon: '🧭',
      hasSubjects: true,
      subSubjects: navigationChildren.map((subject) => ({
        ...subject,
        title: subject.name,
        subtitle: subject.subtitle || `${subject.tests || 0} chapters`,
      })),
    }
    return [...nonNavigationSubjects, parent]
  }

  return subjects
}

export default function SubjectTestsPage() {
  const { subjects: SUBJECTS, subjectTests: SUBJECT_TESTS, user: appUser } = useAppContent()
  const subjectOptions = useMemo(() => buildSubjectOptions(SUBJECTS), [SUBJECTS])
  const [activeSubject, setActiveSubject] = useState('Air Regulations')
  const [activeSubTopic, setActiveSubTopic] = useState(null)
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const [pendingRoute, setPendingRoute] = useState('')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const selectedSubjectConfig = useMemo(
    () => subjectOptions.find((subject) => subject.name === activeSubject) || null,
    [subjectOptions, activeSubject]
  )

  const subTopicConfigs = useMemo(
    () => (selectedSubjectConfig?.hasSubjects && Array.isArray(selectedSubjectConfig?.subSubjects)
      ? selectedSubjectConfig.subSubjects
      : []),
    [selectedSubjectConfig]
  )

  const scopedTests = useMemo(() => {
    if (!SUBJECT_TESTS?.length) return []

    const hasSubTopics = subTopicConfigs.length > 0
    if (hasSubTopics && activeSubTopic) {
      return SUBJECT_TESTS.filter((test) => normalizeKey(test.subject) === normalizeKey(activeSubTopic.name || activeSubTopic.title))
    }

    if (hasSubTopics) {
      const names = new Set(subTopicConfigs.map((subTopic) => normalizeKey(subTopic.name || subTopic.title)))
      return SUBJECT_TESTS.filter((test) => names.has(normalizeKey(test.subject)))
    }

    return SUBJECT_TESTS.filter((test) => {
      const bySubject = activeSubject === 'All' || test.subject === activeSubject
      return bySubject
    })
  }, [SUBJECT_TESTS, activeSubject, subTopicConfigs, activeSubTopic])

  const visibleTests = useMemo(() => {
    const lowerSearch = searchQuery.trim().toLowerCase()

    return scopedTests.filter((test) => {
      const byStatus = filter === 'all' || (filter === 'attempted' ? test.attempted : !test.attempted)
      const bySearch = !lowerSearch
        || String(test.title || '').toLowerCase().includes(lowerSearch)
        || String(test.subject || '').toLowerCase().includes(lowerSearch)
        || String(test.part || '').toLowerCase().includes(lowerSearch)
      return byStatus && bySearch
    })
  }, [scopedTests, filter, searchQuery])

  const groupedTests = useMemo(() => {
    const source = visibleTests
    if (!source.length) return []

    const partMap = new Map()
    for (const test of source) {
      const partLabel = String(test.part || 'Other').trim() || 'Other'
      if (!partMap.has(partLabel)) {
        partMap.set(partLabel, { title: partLabel, chapterIds: new Set() })
      }
      partMap.get(partLabel).chapterIds.add(String(test.chapterId || test.id || ''))
    }

    const partDefinitions = Array.from(partMap.values()).map((entry) => ({
      title: entry.title,
      chapterIds: Array.from(entry.chapterIds),
    }))

    const grouped = partDefinitions.map((part) => ({
      title: part.title,
      tests: source.filter((test) => part.chapterIds.includes(String(test.chapterId || test.id || ''))),
    }))

    return grouped.filter((entry) => entry.tests.length > 0)
  }, [visibleTests])

  const stats = useMemo(() => {
    const total = visibleTests.length
    const attempted = visibleTests.filter((test) => test.attempted).length
    const attemptedScores = visibleTests.filter((test) => test.attempted && Number.isFinite(Number(test.score))).map((test) => Number(test.score))
    const avgScore = attemptedScores.length
      ? Math.round(attemptedScores.reduce((sum, score) => sum + score, 0) / attemptedScores.length)
      : 0
    const bestScore = attemptedScores.length ? Math.max(...attemptedScores) : 0

    return { total, attempted, avgScore, bestScore }
  }, [visibleTests])

  const subTopicCards = useMemo(() => {
    if (!subTopicConfigs.length) return []

    return subTopicConfigs.map((subTopic) => {
      const subName = subTopic.name || subTopic.title || ''
      const chapters = SUBJECT_TESTS.filter((test) => normalizeKey(test.subject) === normalizeKey(subName))
      return {
        id: subTopic.id || normalizeKey(subName),
        name: subName,
        icon: subTopic.icon || '📚',
        title: subTopic.title || subName,
        subtitle: subTopic.subtitle || `${chapters.length} chapters`,
        chapterCount: chapters.length,
        examTag: subTopic.exam || (Array.isArray(subTopic.examTags) ? subTopic.examTags.join(', ') : ''),
        color: subTopic.color || selectedSubjectConfig?.color || '#2BC48A',
      }
    })
  }, [subTopicConfigs, SUBJECT_TESTS, selectedSubjectConfig])

  useEffect(() => {
    if (subjectOptions.length) {
      const preferredSubject = subjectOptions.find((subject) => subject.name === 'Air Regulations')?.name || subjectOptions[0]?.name || ''
      setActiveSubject((current) => {
        if (current && subjectOptions.some((subject) => subject.name === current)) return current
        return preferredSubject
      })
    }
  }, [subjectOptions])

  useEffect(() => {
    setActiveSubTopic(null)
  }, [activeSubject])

  useEffect(() => {
    if (!SUBJECT_TESTS?.length) return

    const prefetchTests = () => {
      SUBJECT_TESTS.slice(0, 20).forEach((test) => {
        router.prefetch(`/subject-tests/${test.id}`)
      })
    }

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = window.requestIdleCallback(prefetchTests)
      return () => window.cancelIdleCallback?.(id)
    }

    const timeoutId = window.setTimeout(prefetchTests, 0)
    return () => window.clearTimeout(timeoutId)
  }, [SUBJECT_TESTS, router])

  function navigateWithLoader(href) {
    setPendingRoute(href)
    startTransition(() => {
      router.push(href)
    })
  }

  const completedLessons = appUser?.completedLessonsLastDay ?? appUser?.completed_lessons_last_day ?? appUser?.completed_lessons ?? 5

  return (
    <AppShell>
      <div className="w-full mb-6">
        <div className="w-full bg-black text-white p-4 rounded-lg flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold">{`You have completed ${completedLessons} lessons in the last day.`}</p>
            <p className="text-sm text-white/80">Start your learning today.</p>
          </div>
          <button onClick={() => navigateWithLoader('/live-classes')} className="bg-white text-black px-4 py-2 rounded-md font-semibold">Start Learning</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {subjectOptions.map((subject) => subject.name).map((s) => (
          <button
            key={s}
            onClick={() => {
              setActiveSubject(s)
              setActiveSubTopic(null)
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeSubject === s ? 'bg-brand text-white' : 'bg-white text-muted hover:text-ink shadow-card'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {subTopicCards.length > 0 && !activeSubTopic ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
          {subTopicCards.map((subTopic) => (
            <button
              key={subTopic.id}
              type="button"
              onClick={() => setActiveSubTopic(subTopic)}
              className="card p-4 text-left border-l-4 hover:shadow-md transition-shadow"
              style={{ borderLeftColor: subTopic.color }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm" style={{ backgroundColor: `${subTopic.color}22`, color: subTopic.color }}>
                    {subTopic.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-ink truncate">{subTopic.title}</p>
                    <p className="text-xs text-muted truncate">{subTopic.subtitle}</p>
                  </div>
                </div>
                {subTopic.examTag ? <Badge tone="muted">{subTopic.examTag}</Badge> : null}
              </div>
              <p className="mt-3 text-xs text-muted">{subTopic.chapterCount} chapters</p>
            </button>
          ))}
        </div>
      ) : null}

      {subTopicCards.length > 0 && activeSubTopic ? (
        <div className="mb-4">
          <button
            type="button"
            onClick={() => setActiveSubTopic(null)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand"
          >
            <Icon name="chevron-left" size={16} /> Back to {activeSubject}
          </button>
        </div>
      ) : null}

      <div className="card p-5 mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
          <p className="text-muted">Total chapters: <span className="font-semibold text-ink">{stats.total}</span></p>
          <p className="text-muted">Attempted: <span className="font-semibold text-ink">{stats.attempted}</span></p>
          <p className="text-muted">Avg score: <span className="font-semibold text-ink">{stats.avgScore}%</span></p>
          <p className="text-muted">Best score: <span className="font-semibold text-ink">{stats.bestScore}%</span></p>
        </div>
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

      <div className="card p-4 mb-6 flex items-center gap-2">
        <Icon name="search" size={16} className="text-muted" />
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search chapters in current scope"
          className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
        />
      </div>

      <div className="space-y-6">
        {groupedTests.map((group) => (
          <section key={group.title}>
            <h3 className="mb-3 text-sm font-semibold text-muted">{group.title}</h3>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {group.tests.map((t) => (
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
          </section>
        ))}

        {!groupedTests.length ? (
          <div className="card p-8 text-center text-sm text-muted">
            No chapters match this filter.
          </div>
        ) : null}
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
