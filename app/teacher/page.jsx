"use client"

import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react'

const NAV_TABS = [
  { id: 'students', label: 'Students' },
  { id: 'allresults', label: 'All Results' },
  { id: 'dailyupdate', label: 'Daily Update' },
  { id: 'attendance', label: 'Attendance' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'assigntest', label: 'Assign Test' },
  { id: 'manage', label: 'Manage Students' },
  { id: 'leaderboard', label: 'Leaderboard' },
]

const SUBJECT_OPTIONS = [
  { id: 'air-regulations', label: 'Air Regulations', icon: '🛫', color: 'bg-sky-100', chapters: [{ id: 'air-reg-1', label: 'Regulatory Basics' }, { id: 'air-reg-2', label: 'Operational Rules' }] },
  { id: 'meteorology', label: 'Meteorology', icon: '🌦️', color: 'bg-emerald-100', chapters: [{ id: 'met-1', label: 'Weather Systems' }, { id: 'met-2', label: 'Forecasting' }] },
  { id: 'navigation', label: 'Navigation', icon: '🧭', color: 'bg-amber-100', chapters: [{ id: 'nav-1', label: 'Map Reading' }, { id: 'nav-2', label: 'Flight Planning' }] },
  { id: 'technical-general', label: 'Technical General', icon: '⚙️', color: 'bg-violet-100', chapters: [{ id: 'tech-1', label: 'Aircraft Systems' }, { id: 'tech-2', label: 'Maintenance Basics' }] },
  { id: 'radio-telephony', label: 'Radio Telephony', icon: '📡', color: 'bg-rose-100', chapters: [{ id: 'rt-1', label: 'Phraseology' }, { id: 'rt-2', label: 'Communication Procedures' }] },
]

const MOCK_SUBJECTS = [
  { id: 'all', label: 'All', icon: '🎯', color: '#8B5CF6' },
  { id: 'air-regulations', label: 'Air Regs', icon: '📋', color: '#1D4ED8' },
  { id: 'meteorology', label: 'Meteorology', icon: '🌦️', color: '#0EA5E9' },
  { id: 'navigation', label: 'Navigation', icon: '🗺️', color: '#10B981' },
  { id: 'technical-general', label: 'Technical', icon: '🔧', color: '#F59E0B' },
  { id: 'radio-telephony', label: 'Radio Tel.', icon: '📻', color: '#EF4444' },
]

const SUBJECT_COLOR_MAP = {
  'Air Regulations': '#1D4ED8',
  Meteorology: '#0EA5E9',
  Navigation: '#10B981',
  'General Navigation': '#6366F1',
  'Instrument Navigation': '#EC4899',
  'Radio Navigation': '#EF4444',
  'Technical General': '#F59E0B',
  Technical: '#F59E0B',
  'Radio Tel.': '#EF4444',
  'Radio Telephony': '#EF4444',
}

const AVATAR_COLORS = [
  ['#dbeafe', '#2563eb'],
  ['#dcfce7', '#16a34a'],
  ['#fef3c7', '#b45309'],
  ['#f3e8ff', '#7c3aed'],
  ['#ffe4e6', '#be123c'],
]

function subjectColor(subject) {
  return SUBJECT_COLOR_MAP[subject] || '#8B5CF6'
}

function accuracyColor(pct) {
  if (pct >= 80) return '#10B981'
  if (pct >= 50) return '#F59E0B'
  return '#EF4444'
}

function hexA(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

function initials(name) {
  return String(name || '')
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

function avatarColors(index) {
  return AVATAR_COLORS[index % AVATAR_COLORS.length]
}

const DEMO_STUDENTS = [
  {
    name: 'Jaydeep Singh',
    email: 'kotwaljaydeep369@gmail.com',
    phone: '916006951508',
    batch: 'A1',
    joinedAt: '2026-06-24',
    testsAttempted: 3,
    avgScore: 72,
    bestScore: 88,
    totalQuestions: 90,
    results: [
      { id: 'r1', chapterId: 'air-reg-1', title: 'Air Regulations Basics', subjectLabel: 'Air Regulations', date: '2026-06-15', score: 18, total: 25, pct: 72, correctCount: 18, wrongCount: 7, answers: [{ questionId: 1, selected: 'A', correct: 'B', isCorrect: false }, { questionId: 2, selected: 'C', correct: 'C', isCorrect: true }] },
      { id: 'r2', chapterId: 'met-1', title: 'Meteorology Review', subjectLabel: 'Meteorology', date: '2026-06-18', score: 20, total: 25, pct: 80, correctCount: 20, wrongCount: 5, answers: [{ questionId: 3, selected: 'D', correct: 'D', isCorrect: true }, { questionId: 4, selected: 'A', correct: 'B', isCorrect: false }] },
    ],
  },
  {
    name: 'Bhavya',
    email: 'aviator.bhavya@gmail.com',
    phone: '9988776655',
    batch: 'A2',
    joinedAt: '2026-05-02',
    testsAttempted: 4,
    avgScore: 85,
    bestScore: 92,
    totalQuestions: 120,
    results: [
      { id: 'r3', chapterId: 'nav-1', title: 'Navigation Basics', subjectLabel: 'Navigation', date: '2026-06-10', score: 22, total: 25, pct: 88, correctCount: 22, wrongCount: 3, answers: [{ questionId: 5, selected: 'A', correct: 'A', isCorrect: true }] },
      { id: 'r4', chapterId: 'tech-1', title: 'Technical General Drill', subjectLabel: 'Technical General', date: '2026-06-20', score: 14, total: 20, pct: 70, correctCount: 14, wrongCount: 6, answers: [{ questionId: 6, selected: 'B', correct: 'C', isCorrect: false }] },
    ],
  },
]

const DEMO_ATTENDANCE = [
  { date: '2026-07-10', batch: 'A1', email: 'kotwaljaydeep369@gmail.com', name: 'Jaydeep Singh', status: 'present', note: 'On time' },
  { date: '2026-07-10', batch: 'A1', email: 'aviator.bhavya@gmail.com', name: 'Bhavya', status: 'late', note: 'Joined late' },
]

const DEMO_SCHEDULED_CLASSES = [
  { id: 'class-1', title: 'Live Algebra Drill', description: 'Revision class', date: '2026-07-12', time: '18:00', duration: 60, meetLink: 'https://meet.example.com/teacher', batch: 'A1', startDateTime: '2026-07-12T18:00:00', endDateTime: '2026-07-12T19:00:00' },
]

const DEMO_LIVE_LINK = { url: 'https://meet.example.com/live', label: 'Join live class', setAt: '2026-07-11T10:00:00' }

const DEMO_ASSIGNED_TESTS = [
  { id: 'test-1', title: 'Air Regulations Practice', classId: 'a1', className: 'A1', subjectId: 'air-regulations', subjectLabel: 'Air Regulations', chapterId: 'air-reg-1', chapterLabel: 'Regulatory Basics', chapterIds: ['air-reg-1'], numQuestions: 20, durationMins: 30, instructions: 'Attempt all questions.', is_active: true },
]

const DEMO_SUBMISSIONS = [
  { id: 'sub-1', testId: 'test-1', studentEmail: 'kotwaljaydeep369@gmail.com', studentName: 'Jaydeep Singh', score: 16, total: 20, accuracy: 80, submittedAt: '2026-07-09T10:00:00' },
]

async function delay(ms = 180) {
  await new Promise((resolve) => setTimeout(resolve, ms))
}

function formatLocalDateTime(date) {
  const pad = (value) => String(value).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:00`
}

function buildLocalDateTime(dateValue, timeValue) {
  const [year, month, day] = dateValue.split('-').map(Number)
  const [hours, minutes] = timeValue.split(':').map(Number)
  return formatLocalDateTime(new Date(year, month - 1, day, hours, minutes, 0))
}

async function requestJson(url, options = {}, fallback) {
  try {
    const response = await fetch(url, options)
    if (!response.ok) throw new Error(`Request failed: ${response.status}`)
    return await response.json()
  } catch {
    return fallback
  }
}

function isValidUrl(value) {
  try {
    const parsed = new URL(value)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

function formatDisplayDate(value) {
  if (!value) return '—'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}

function getStatusTone(status) {
  switch (status) {
    case 'present':
      return 'bg-emerald-50 text-emerald-700'
    case 'late':
      return 'bg-amber-50 text-amber-700'
    default:
      return 'bg-rose-50 text-rose-700'
  }
}

function getScoreTone(score) {
  if (score >= 80) return 'text-emerald-700'
  if (score >= 60) return 'text-amber-700'
  return 'text-rose-700'
}

function getCountdown(startDateTime) {
  const now = Date.now()
  const start = new Date(startDateTime).getTime()
  const diffMs = start - now

  if (diffMs <= 0) return 'Now live'

  const hours = Math.floor(diffMs / (1000 * 60 * 60))
  const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
  return `Starts in ${hours}h ${mins}m`
}

function isLive(startDateTime, endDateTime) {
  const now = Date.now()
  return now >= new Date(startDateTime).getTime() && now <= new Date(endDateTime).getTime()
}

function DatabaseLoadingState({ title = 'Connecting to database…', subtitle = 'Fetching latest records.', compact = false }) {
  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
        <span className="relative inline-flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
        </span>
        <span className="animate-pulse">{title}</span>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="relative inline-flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-brand" />
        </span>
        <div>
          <div className="font-semibold text-slate-800">{title}</div>
          <div className="text-sm text-slate-500">{subtitle}</div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-2.5 w-full animate-pulse rounded-full bg-slate-200" />
        <div className="h-2.5 w-5/6 animate-pulse rounded-full bg-slate-200" />
        <div className="h-2.5 w-2/3 animate-pulse rounded-full bg-slate-200" />
      </div>
    </div>
  )
}

function StudentsTab({ students, setStudents, selectedEmail, setSelectedEmail }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    const load = async () => {
      setLoading(true)
      setError('')
      await delay()
      const payload = await requestJson('/api/teacher/students', { method: 'GET' }, null)
      if (!active) return
      if (payload?.students?.length) {
        setStudents(payload.students)
        if (!selectedEmail && payload.students.length) setSelectedEmail(payload.students[0].email)
      } else {
        setStudents([])
        setSelectedEmail('')
      }
      setLoading(false)
    }

    load()
    return () => {
      active = false
    }
  }, [setSelectedEmail, setStudents])

  const selectedStudent = students.find((student) => student.email === selectedEmail) || null

  const topicStats = useMemo(() => {
    if (!selectedStudent?.results?.length) return { clear: [], weak: [] }

    const grouped = selectedStudent.results.reduce((acc, result) => {
      const existing = acc[result.chapterId] || { chapterId: result.chapterId, title: result.title, subjectLabel: result.subjectLabel, count: 0, totalPct: 0 }
      existing.count += 1
      existing.totalPct += result.pct
      acc[result.chapterId] = existing
      return acc
    }, {})

    const values = Object.values(grouped).map((entry) => ({ ...entry, avgPct: Math.round(entry.totalPct / entry.count) }))

    return {
      clear: values.filter((entry) => entry.avgPct >= 80),
      weak: values.filter((entry) => entry.avgPct < 60),
    }
  }, [selectedStudent])

  const wrongAnswers = useMemo(() => {
    if (!selectedStudent?.results?.length) return []
    return selectedStudent.results.flatMap((result) => result.answers.filter((answer) => !answer.isCorrect).map((answer) => ({ ...answer, resultTitle: result.title, subjectLabel: result.subjectLabel })))
  }, [selectedStudent])

  return (
    <div className="space-y-4">
      {loading ? <DatabaseLoadingState compact title="Connecting to database for students…" /> : null}
      {error ? <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{error}</div> : null}

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4">
        <div className="card p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">Student progress</h3>
              <p className="text-sm text-slate-500">Track class performance and highlight who needs attention.</p>
            </div>
            <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">{students.length} students</div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50">
                <tr className="text-left text-slate-500">
                  <th className="px-3 py-3">Name</th>
                  <th className="px-3 py-3">Batch</th>
                  <th className="px-3 py-3">Tests</th>
                  <th className="px-3 py-3">Avg</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.email} className={`cursor-pointer border-t border-slate-200 transition ${selectedEmail === student.email ? 'bg-brand/5' : 'hover:bg-slate-50'}`} onClick={() => setSelectedEmail(student.email)}>
                    <td className="px-3 py-3 font-medium text-slate-800">{student.name}</td>
                    <td className="px-3 py-3 text-slate-600">{student.batch}</td>
                    <td className="px-3 py-3 text-slate-600">{student.testsAttempted}</td>
                    <td className={`px-3 py-3 font-semibold ${getScoreTone(student.avgScore)}`}>{student.avgScore}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card p-5 space-y-4">
          <div>
            <h3 className="font-semibold text-slate-900">Student snapshot</h3>
            <p className="text-sm text-slate-500">The latest signal for the selected learner.</p>
          </div>
          {selectedStudent ? (
            <div className="space-y-3 text-sm">
              <div className="rounded-2xl bg-slate-50 p-3">
                <div className="font-semibold text-slate-900">{selectedStudent.name}</div>
                <div className="text-slate-600">{selectedStudent.email}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <div className="text-xs uppercase tracking-wide text-slate-400">Joined</div>
                  <div className="mt-1 font-semibold text-slate-700">{formatDisplayDate(selectedStudent.joinedAt)}</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <div className="text-xs uppercase tracking-wide text-slate-400">Best score</div>
                  <div className="mt-1 font-semibold text-slate-700">{selectedStudent.bestScore}%</div>
                </div>
              </div>
              <div>
                <div className="mb-2 font-semibold text-slate-900">Strong topics</div>
                <ul className="space-y-1 text-slate-600">
                  {topicStats.clear.length ? topicStats.clear.map((entry) => <li key={entry.chapterId} className="rounded-xl bg-emerald-50 px-2 py-1">{entry.title} • {entry.avgPct}%</li>) : <li className="text-slate-500">No strong topics yet.</li>}
                </ul>
              </div>
              <div>
                <div className="mb-2 font-semibold text-slate-900">Needs attention</div>
                <ul className="space-y-1 text-slate-600">
                  {topicStats.weak.length ? topicStats.weak.map((entry) => <li key={entry.chapterId} className="rounded-xl bg-amber-50 px-2 py-1">{entry.title} • {entry.avgPct}%</li>) : <li className="text-slate-500">No weak topics detected.</li>}
                </ul>
              </div>
              <div>
                <div className="mb-2 font-semibold text-slate-900">Review list</div>
                <ul className="space-y-1 text-slate-600">
                  {wrongAnswers.length ? wrongAnswers.map((answer, index) => <li key={`${answer.resultTitle}-${index}`} className="rounded-xl bg-rose-50 px-2 py-1">{answer.resultTitle} • {answer.selected} vs {answer.correct}</li>) : <li className="text-slate-500">No incorrect answers to review.</li>}
                </ul>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200 p-4 text-sm text-slate-500">Select a student to inspect their performance.</div>
          )}
        </div>
      </div>
    </div>
  )
}

function AllResultsTab({ students }) {
  const [query, setQuery] = useState('')
  const [chapterFilter, setChapterFilter] = useState('all')
  const [sortOrder, setSortOrder] = useState('desc')

  const flattenedResults = useMemo(() => {
    return students.flatMap((student) => (student.results || []).map((result) => ({ ...result, studentName: student.name, studentEmail: student.email })))
  }, [students])

  const filteredResults = useMemo(() => {
    const lowerQuery = query.toLowerCase()
    const sorted = [...flattenedResults].filter((entry) => {
      const matchesQuery = `${entry.studentName} ${entry.studentEmail}`.toLowerCase().includes(lowerQuery)
      const matchesChapter = chapterFilter === 'all' || entry.chapterId === chapterFilter
      return matchesQuery && matchesChapter
    })

    sorted.sort((a, b) => {
      const byDate = new Date(a.date) - new Date(b.date)
      if (sortOrder === 'date-asc') return byDate
      if (sortOrder === 'date-desc') return -byDate
      if (sortOrder === 'score-asc') return a.pct - b.pct
      return b.pct - a.pct
    })

    return sorted
  }, [chapterFilter, flattenedResults, query, sortOrder])

  const chapters = useMemo(() => Array.from(new Set(flattenedResults.map((entry) => entry.chapterId))), [flattenedResults])
  const totals = useMemo(() => {
    const totalResults = filteredResults.length
    const totalStudents = new Set(filteredResults.map((entry) => entry.studentEmail)).size
    const avgAccuracy = totalResults ? Math.round(filteredResults.reduce((sum, entry) => sum + entry.pct, 0) / totalResults) : 0
    const bestScore = filteredResults.length ? Math.max(...filteredResults.map((entry) => entry.pct)) : 0
    return { totalResults, totalStudents, avgAccuracy, bestScore }
  }, [filteredResults])

  return (
    <div className="space-y-4">
      <div className="card p-5 space-y-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h3 className="font-semibold text-slate-900">Assessment history</h3>
            <p className="text-sm text-slate-500">A readable view of every completed result, sorted by performance.</p>
          </div>
          <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">{totals.totalResults} results</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search student" className="border border-slate-200 rounded-xl px-3 py-2 text-sm" />
          <select value={chapterFilter} onChange={(event) => setChapterFilter(event.target.value)} className="border border-slate-200 rounded-xl px-3 py-2 text-sm">
            <option value="all">All chapters</option>
            {chapters.map((chapter) => <option key={chapter} value={chapter}>{chapter}</option>)}
          </select>
          <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} className="border border-slate-200 rounded-xl px-3 py-2 text-sm">
            <option value="score-desc">Score desc</option>
            <option value="score-asc">Score asc</option>
            <option value="date-desc">Date desc</option>
            <option value="date-asc">Date asc</option>
          </select>
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-600">Visible rows: {filteredResults.length}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm">
          <div className="rounded-2xl border border-slate-200 bg-white p-3">Students: {totals.totalStudents}</div>
          <div className="rounded-2xl border border-slate-200 bg-white p-3">Avg accuracy: {totals.avgAccuracy}%</div>
          <div className="rounded-2xl border border-slate-200 bg-white p-3">Best score: {totals.bestScore}%</div>
          <div className="rounded-2xl border border-slate-200 bg-white p-3">Seen in list: {filteredResults.length}</div>
        </div>
      </div>

      <div className="card p-5 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50">
            <tr className="text-left text-slate-500">
              <th className="px-3 py-3">Student</th>
              <th className="px-3 py-3">Chapter</th>
              <th className="px-3 py-3">Date</th>
              <th className="px-3 py-3">Score</th>
              <th className="px-3 py-3">Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {filteredResults.map((entry) => (
              <tr key={`${entry.studentEmail}-${entry.id}`} className="border-t border-slate-200">
                <td className="px-3 py-3 font-medium text-slate-800">{entry.studentName}</td>
                <td className="px-3 py-3 text-slate-600">{entry.chapterId}</td>
                <td className="px-3 py-3 text-slate-600">{formatDisplayDate(entry.date)}</td>
                <td className="px-3 py-3 text-slate-700">{entry.score}/{entry.total}</td>
                <td className={`px-3 py-3 font-semibold ${getScoreTone(entry.pct)}`}>{entry.pct}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ManageStudentsTab({ students, setStudents }) {
  const [query, setQuery] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', batch: 'A1', whatsappOptIn: false })
  const [error, setError] = useState('')

  const filteredStudents = useMemo(() => {
    const lowerQuery = query.toLowerCase()
    return students.filter((student) => `${student.name} ${student.email}`.toLowerCase().includes(lowerQuery))
  }, [query, students])

  const batchSummary = useMemo(() => {
    return students.reduce((acc, student) => {
      const batchKey = student.batch || 'Unassigned'
      acc[batchKey] = (acc[batchKey] || 0) + 1
      return acc
    }, {})
  }, [students])

  const handleAdd = async (event) => {
    event.preventDefault()
    setError('')

    if (!form.name.trim()) {
      setError('Name is required.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Use a valid email address.')
      return
    }
    if (!/^\d{10}$/.test(form.phone)) {
      setError('Phone number should be 10 digits.')
      return
    }
    if (students.some((student) => student.email.toLowerCase() === form.email.toLowerCase())) {
      setError('A student with this email already exists.')
      return
    }

    const payload = await requestJson('/api/teacher/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ student: { ...form, joinedAt: new Date().toISOString(), testsAttempted: 0, avgScore: 0, bestScore: 0, totalQuestions: 0, results: [] } }),
    }, null)

    if (payload?.students) {
      setStudents(payload.students)
      setForm({ name: '', email: '', phone: '', batch: 'A1', whatsappOptIn: false })
      return
    }

    setStudents((current) => [
      ...current,
      {
        ...form,
        joinedAt: new Date().toISOString(),
        testsAttempted: 0,
        avgScore: 0,
        bestScore: 0,
        totalQuestions: 0,
        results: [],
      },
    ])
    setForm({ name: '', email: '', phone: '', batch: 'A1', whatsappOptIn: false })
  }

  const handleRemove = async (email) => {
    const confirmed = window.confirm(`Remove ${email}?`)
    if (!confirmed) return

    const payload = await requestJson('/api/teacher/students', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }, null)

    if (payload?.students) {
      setStudents(payload.students)
      return
    }

    setStudents((current) => current.filter((student) => student.email !== email))
  }

  return (
    <div className="space-y-4">
      <div className="card p-5">
        <div className="mb-4">
          <h3 className="font-semibold text-slate-900">Add student</h3>
          <p className="text-sm text-slate-500">Enrol a new learner and keep their profile aligned with the dashboard.</p>
        </div>
        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} placeholder="Name" className="border border-slate-200 rounded-xl px-3 py-2" />
          <input value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} placeholder="Email" className="border border-slate-200 rounded-xl px-3 py-2" />
          <input value={form.phone} onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))} placeholder="Phone" className="border border-slate-200 rounded-xl px-3 py-2" />
          <input value={form.batch} onChange={(event) => setForm((current) => ({ ...current, batch: event.target.value }))} placeholder="Batch" className="border border-slate-200 rounded-xl px-3 py-2" />
          <label className="md:col-span-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
            <input type="checkbox" checked={form.whatsappOptIn} onChange={(event) => setForm((current) => ({ ...current, whatsappOptIn: event.target.checked }))} className="h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand" />
            Student consented to receive WhatsApp test notifications
          </label>
          <button type="submit" className="md:col-span-4 rounded-xl bg-brand px-3 py-2 text-white">Add student</button>
        </form>
        {error ? <div className="mt-2 text-sm text-rose-600">{error}</div> : null}
      </div>

      <div className="card p-5">
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-semibold text-slate-900">Existing students</h3>
            <p className="text-sm text-slate-500">Manage cohorts and keep the roster tidy.</p>
          </div>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name/email" className="border border-slate-200 rounded-xl px-3 py-2" />
        </div>
        <div className="mb-3 grid grid-cols-1 md:grid-cols-2 gap-3">
          {Object.entries(batchSummary).map(([batch, count]) => (
            <div key={batch} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              {batch}: {count} students
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {filteredStudents.map((student) => (
            <div key={student.email} className="flex items-center justify-between rounded-2xl border border-slate-200 px-3 py-3">
              <div>
                <div className="font-semibold text-slate-900">{student.name}</div>
                <div className="text-sm text-slate-500">{student.email} • {student.batch}</div>
              </div>
              <button type="button" onClick={() => handleRemove(student.email)} className="rounded-xl border border-slate-200 px-3 py-1 text-sm text-slate-700">Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AttendanceTab({ students, attendanceRecords, setAttendanceRecords }) {
  const [subTab, setSubTab] = useState('mark')
  const [batch, setBatch] = useState('A1')
  const [selectedDate, setSelectedDate] = useState('2026-07-10')
  const [statuses, setStatuses] = useState({})
  const [notes, setNotes] = useState({})
  const [error, setError] = useState('')
  const [reportMonth, setReportMonth] = useState('2026-07')
  const [selectedStudentEmail, setSelectedStudentEmail] = useState(students[0]?.email || '')

  const batchStudents = useMemo(() => students.filter((student) => student.batch === batch), [batch, students])

  useEffect(() => {
    const nextStatuses = {}
    const nextNotes = {}
    batchStudents.forEach((student) => {
      const existing = attendanceRecords.find((record) => record.date === selectedDate && record.batch === batch && record.email === student.email)
      nextStatuses[student.email] = existing?.status || ''
      nextNotes[student.email] = existing?.note || ''
    })
    setStatuses(nextStatuses)
    setNotes(nextNotes)
  }, [attendanceRecords, batch, batchStudents, selectedDate])

  const markAllPresent = () => {
    const nextStatuses = {}
    batchStudents.forEach((student) => {
      nextStatuses[student.email] = 'present'
    })
    setStatuses(nextStatuses)
  }

  const saveAttendance = async () => {
    const today = new Date().toISOString().slice(0, 10)
    if (selectedDate > today) {
      setError('Future dates are not allowed for attendance marking.')
      return
    }

    const records = batchStudents.map((student) => ({
      date: selectedDate,
      batch,
      email: student.email,
      name: student.name,
      status: statuses[student.email] || 'absent',
      note: notes[student.email] || '',
    }))

    const payload = await requestJson('/api/teacher/attendance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ records }),
    }, { attendance: records })

    setAttendanceRecords(payload.attendance || records)
    setError('')
  }

  const progress = useMemo(() => {
    const total = batchStudents.length
    const present = batchStudents.filter((student) => statuses[student.email] === 'present').length
    const late = batchStudents.filter((student) => statuses[student.email] === 'late').length
    const absent = batchStudents.filter((student) => statuses[student.email] === 'absent').length
    const unmarked = total - present - late - absent
    return { total, present, late, absent, unmarked, percent: total ? Math.round(((present + late + absent) / total) * 100) : 0 }
  }, [batchStudents, statuses])

  const reportRows = useMemo(() => {
    const monthRecords = attendanceRecords.filter((record) => record.date.startsWith(reportMonth) && record.batch === batch)
    return Object.values(monthRecords.reduce((acc, record) => {
      const entry = acc[record.email] || { name: record.name, email: record.email, present: 0, absent: 0, late: 0 }
      entry[record.status] += 1
      acc[record.email] = entry
      return acc
    }, {}))
  }, [attendanceRecords, batch, reportMonth])

  const selectedStudentAttendance = useMemo(() => {
    const entries = attendanceRecords.filter((record) => record.email === selectedStudentEmail)
    const summary = entries.reduce((acc, record) => {
      acc[record.status] += 1
      return acc
    }, { present: 0, absent: 0, late: 0 })
    const total = summary.present + summary.absent + summary.late
    const percent = total ? Math.round((summary.present / total) * 100) : 0
    return { entries, summary, total, percent }
  }, [attendanceRecords, selectedStudentEmail])

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
        <div className="flex gap-2">
          {['mark', 'report', 'student'].map((tab) => (
            <button key={tab} type="button" onClick={() => setSubTab(tab)} className={`rounded-xl px-3 py-2 text-sm font-medium capitalize ${subTab === tab ? 'bg-brand text-white shadow-sm' : 'bg-slate-50 text-slate-700'}`}>
              {tab === 'mark' ? 'Mark' : tab === 'report' ? 'Report' : 'Student'}
            </button>
          ))}
        </div>
      </div>

      {subTab === 'mark' ? (
        <div className="card p-5 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <select value={batch} onChange={(event) => setBatch(event.target.value)} className="border border-slate-200 rounded-xl px-3 py-2">
              <option value="A1">A1</option>
              <option value="A2">A2</option>
            </select>
            <input type="date" value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} className="border border-slate-200 rounded-xl px-3 py-2" />
            <button type="button" onClick={markAllPresent} className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">Mark all present</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm">
            <div className="rounded-2xl border border-slate-200 bg-white p-3">Present: {progress.present}</div>
            <div className="rounded-2xl border border-slate-200 bg-white p-3">Absent: {progress.absent}</div>
            <div className="rounded-2xl border border-slate-200 bg-white p-3">Late: {progress.late}</div>
            <div className="rounded-2xl border border-slate-200 bg-white p-3">Done: {progress.percent}%</div>
          </div>

          <div className="space-y-2">
            {batchStudents.map((student) => (
              <div key={student.email} className="rounded-2xl border border-slate-200 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold text-slate-900">{student.name}</div>
                    <div className="text-sm text-slate-500">{student.email}</div>
                  </div>
                  <div className="flex gap-2">
                    {['present', 'absent', 'late'].map((status) => (
                      <button key={status} type="button" onClick={() => setStatuses((current) => ({ ...current, [student.email]: status }))} className={`rounded-xl px-3 py-1 text-sm font-medium capitalize ${statuses[student.email] === status ? 'bg-brand text-white' : 'bg-slate-100 text-slate-700'}`}>
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
                <input value={notes[student.email] || ''} onChange={(event) => setNotes((current) => ({ ...current, [student.email]: event.target.value }))} placeholder="Note" className="mt-2 w-full border border-slate-200 rounded-xl px-3 py-2" />
              </div>
            ))}
          </div>

          {error ? <div className="text-sm text-red-600">{error}</div> : null}
          <button type="button" onClick={saveAttendance} className="rounded-lg bg-brand px-3 py-2 text-white">Save attendance</button>
        </div>
      ) : null}

      {subTab === 'report' ? (
        <div className="card p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <select value={batch} onChange={(event) => setBatch(event.target.value)} className="border border-line rounded-lg px-3 py-2">
              <option value="A1">A1</option>
              <option value="A2">A2</option>
            </select>
            <input type="month" value={reportMonth} onChange={(event) => setReportMonth(event.target.value)} className="border border-line rounded-lg px-3 py-2" />
          </div>
          <div className="space-y-2">
            {reportRows.map((row) => (
              <div key={row.email} className="flex items-center justify-between rounded-lg border border-line p-3 text-sm">
                <div>
                  <div className="font-semibold">{row.name}</div>
                  <div className="text-muted">{row.email}</div>
                </div>
                <div className="text-right">
                  <div>Present {row.present}</div>
                  <div>Absent {row.absent}</div>
                  <div>Late {row.late}</div>
                  <div>{Math.round(((row.present || 0) / Math.max(row.present + row.absent + row.late, 1)) * 100)}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {subTab === 'student' ? (
        <div className="card p-4 space-y-3">
          <select value={selectedStudentEmail} onChange={(event) => setSelectedStudentEmail(event.target.value)} className="border border-line rounded-lg px-3 py-2">
            {students.map((student) => <option key={student.email} value={student.email}>{student.name}</option>)}
          </select>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
            <div className="bg-canvas p-2 rounded">Present: {selectedStudentAttendance.summary.present}</div>
            <div className="bg-canvas p-2 rounded">Absent: {selectedStudentAttendance.summary.absent}</div>
            <div className="bg-canvas p-2 rounded">Late: {selectedStudentAttendance.summary.late}</div>
          </div>
          <div className="text-sm">Attendance rate: {selectedStudentAttendance.percent}%</div>
          <div className="space-y-2">
            {selectedStudentAttendance.entries.map((entry) => (
              <div key={`${entry.date}-${entry.email}`} className="flex items-center justify-between rounded-lg border border-line p-2 text-sm">
                <div>{entry.date}</div>
                <div className="capitalize">{entry.status}</div>
                <div className="text-muted">{entry.note}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function DailyUpdateTab({ students, dailyUpdates, setDailyUpdates }) {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [batch, setBatch] = useState('A1')
  const [subject, setSubject] = useState('')
  const [topicInput, setTopicInput] = useState('')
  const [topics, setTopics] = useState([])
  const [notes, setNotes] = useState('')
  const [teacherName, setTeacherName] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [loadingUpdates, setLoadingUpdates] = useState(false)
  const [error, setError] = useState('')

  const batchOptions = useMemo(() => {
    const values = Array.from(new Set((students || []).map((student) => String(student.batch || '').trim()).filter(Boolean)))
    return values.length ? values : ['A1', 'A2']
  }, [students])

  useEffect(() => {
    if (!batchOptions.includes(batch)) {
      setBatch(batchOptions[0])
    }
  }, [batch, batchOptions])

  useEffect(() => {
    let active = true
    const load = async () => {
      setLoadingUpdates(true)
      const payload = await requestJson('/api/teacher/daily-updates', { method: 'GET' }, { updates: [] })
      if (!active) return
      setDailyUpdates(Array.isArray(payload?.updates) ? payload.updates : [])
      setLoadingUpdates(false)
    }

    load()
    return () => {
      active = false
    }
  }, [setDailyUpdates])

  const addTopic = () => {
    const value = topicInput.trim()
    if (!value) return
    if (topics.some((topic) => topic.toLowerCase() === value.toLowerCase())) {
      setTopicInput('')
      return
    }
    setTopics((current) => [...current, value])
    setTopicInput('')
  }

  const removeTopic = (topicToRemove) => {
    setTopics((current) => current.filter((topic) => topic !== topicToRemove))
  }

  const handleSave = async (event) => {
    event.preventDefault()
    setError('')

    if (!date) {
      setError('Please select a date.')
      return
    }
    if (!subject.trim()) {
      setError('Please enter the subject name.')
      return
    }
    if (!topics.length) {
      setError('Add at least one covered topic.')
      return
    }

    setIsSaving(true)
    const payload = await requestJson(
      '/api/teacher/daily-updates',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date,
          batch,
          subject: subject.trim(),
          topics,
          notes: notes.trim(),
          teacherName: teacherName.trim(),
        }),
      },
      null,
    )

    if (!payload?.success) {
      setError(payload?.error || 'Unable to save daily update.')
      setIsSaving(false)
      return
    }

    if (payload?.update) {
      setDailyUpdates((current) => [payload.update, ...current].slice(0, 100))
    }

    setSubject('')
    setTopicInput('')
    setTopics([])
    setNotes('')
    setIsSaving(false)
  }

  return (
    <div className="space-y-4">
      <div className="card p-5">
        <div className="mb-4">
          <h3 className="font-semibold text-slate-900">Daily class update</h3>
          <p className="text-sm text-slate-500">Record topics covered today so your teaching log is saved in the database.</p>
        </div>
        <form onSubmit={handleSave} className="space-y-3">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} className="rounded-xl border border-slate-200 px-3 py-2" />
            <select value={batch} onChange={(event) => setBatch(event.target.value)} className="rounded-xl border border-slate-200 px-3 py-2">
              {batchOptions.map((entry) => (
                <option key={entry} value={entry}>{entry}</option>
              ))}
            </select>
            <input value={teacherName} onChange={(event) => setTeacherName(event.target.value)} placeholder="Teacher name (optional)" className="rounded-xl border border-slate-200 px-3 py-2" />
          </div>

          <input value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="Subject (e.g., Navigation)" className="w-full rounded-xl border border-slate-200 px-3 py-2" />

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <label className="mb-2 block text-sm font-medium text-slate-700">Covered topics</label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                value={topicInput}
                onChange={(event) => setTopicInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault()
                    addTopic()
                  }
                }}
                placeholder="Type topic and press Add"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2"
              />
              <button type="button" onClick={addTopic} className="rounded-xl bg-slate-800 px-4 py-2 text-white">Add</button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {topics.length ? topics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => removeTopic(topic)}
                  className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand"
                >
                  {topic} ×
                </button>
              )) : <span className="text-xs text-slate-500">No topics added yet.</span>}
            </div>
          </div>

          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder="Optional notes, recap, or homework"
            className="h-24 w-full rounded-xl border border-slate-200 px-3 py-2"
          />

          {error ? <div className="text-sm text-rose-600">{error}</div> : null}

          <button type="submit" disabled={isSaving} className="rounded-xl bg-brand px-4 py-2 text-white disabled:opacity-60">
            {isSaving ? 'Saving update…' : 'Save daily update'}
          </button>
        </form>
      </div>

      <div className="card p-5 space-y-3">
        <h3 className="font-semibold text-slate-900">Recent daily updates</h3>
        {loadingUpdates ? <DatabaseLoadingState compact title="Fetching daily updates from database…" /> : null}
        {!loadingUpdates && !dailyUpdates.length ? (
          <div className="rounded-2xl border border-dashed border-slate-200 p-4 text-sm text-slate-500">No updates logged yet.</div>
        ) : null}
        {!loadingUpdates && dailyUpdates.length ? dailyUpdates.slice(0, 10).map((update) => (
          <div key={`${update.id}-${update.createdAt}`} className="rounded-2xl border border-slate-200 p-3">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="rounded-full bg-slate-100 px-2 py-0.5">{update.date || 'No date'}</span>
              <span className="rounded-full bg-brand/10 px-2 py-0.5 text-brand">{update.batch || 'Batch'}</span>
              {update.teacherName ? <span className="rounded-full bg-violet/10 px-2 py-0.5 text-violet">{update.teacherName}</span> : null}
            </div>
            <div className="mt-2 font-semibold text-slate-900">{update.subject}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {(Array.isArray(update.topics) ? update.topics : []).map((topic) => (
                <span key={`${update.id}-${topic}`} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700">{topic}</span>
              ))}
            </div>
            {update.notes ? <div className="mt-2 text-sm text-slate-600">{update.notes}</div> : null}
          </div>
        )) : null}
      </div>
    </div>
  )
}

function ScheduleTab({ scheduledClasses, setScheduledClasses, liveLink, setLiveLink }) {
  const [form, setForm] = useState({ title: '', description: '', date: '2026-07-12', time: '18:00', duration: 60, meetLink: '', batch: 'A1' })
  const [formError, setFormError] = useState('')
  const [quickUrl, setQuickUrl] = useState('')
  const [quickLabel, setQuickLabel] = useState('')

  const handleCreate = async (event) => {
    event.preventDefault()
    setFormError('')

    if (!form.title || !form.description || !form.date || !form.time || !form.duration || !form.meetLink || !form.batch) {
      setFormError('Please fill in all fields.')
      return
    }
    if (!isValidUrl(form.meetLink)) {
      setFormError('The meeting link must be a valid URL.')
      return
    }

    const startDateTime = buildLocalDateTime(form.date, form.time)
    const startMinutes = Number(form.time.split(':')[0]) * 60 + Number(form.time.split(':')[1])
    const endMinutes = startMinutes + Number(form.duration)
    const endHours = Math.floor(endMinutes / 60)
    const endMins = endMinutes % 60
    const endTime = `${String(endHours).padStart(2, '0')}:${String(endMins).padStart(2, '0')}`
    const newEvent = {
      id: `class-${Date.now()}`,
      ...form,
      startDateTime,
      endDateTime: buildLocalDateTime(form.date, endTime),
    }

    const payload = await requestJson('/api/teacher/schedule', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ event: newEvent }) }, { event: newEvent })

    setScheduledClasses((current) => [payload.event || newEvent, ...current])
    setForm({ title: '', description: '', date: '2026-07-12', time: '18:00', duration: 60, meetLink: '', batch: 'A1' })
  }

  const deleteClass = async (id) => {
    const payload = await requestJson('/api/teacher/schedule', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) }, { id })
    if (payload?.id) {
      setScheduledClasses((current) => current.filter((event) => event.id !== payload.id))
    }
  }

  const saveLiveLink = async (event) => {
    event.preventDefault()
    const payload = await requestJson('/api/teacher/live-link', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: quickUrl, label: quickLabel || 'Live now' }) }, { link: { url: quickUrl, label: quickLabel || 'Live now', setAt: new Date().toISOString() } })
    setLiveLink(payload.link || { url: quickUrl, label: quickLabel || 'Live now', setAt: new Date().toISOString() })
  }

  const endLiveLink = async () => {
    await requestJson('/api/teacher/live-link', { method: 'DELETE' }, null)
    setLiveLink(null)
  }

  return (
    <div className="space-y-4">
      <div className="card p-5">
        <div className="mb-4">
          <h3 className="font-semibold text-slate-900">Schedule class</h3>
          <p className="text-sm text-slate-500">Create a lesson block and push it to your learners instantly.</p>
        </div>
        <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input value={form.title} onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))} placeholder="Title" className="border border-slate-200 rounded-xl px-3 py-2" />
          <input value={form.date} onChange={(event) => setForm((current) => ({ ...current, date: event.target.value }))} type="date" className="border border-slate-200 rounded-xl px-3 py-2" />
          <input value={form.time} onChange={(event) => setForm((current) => ({ ...current, time: event.target.value }))} type="time" className="border border-slate-200 rounded-xl px-3 py-2" />
          <input value={form.duration} onChange={(event) => setForm((current) => ({ ...current, duration: Number(event.target.value) }))} type="number" className="border border-slate-200 rounded-xl px-3 py-2" />
          <input value={form.meetLink} onChange={(event) => setForm((current) => ({ ...current, meetLink: event.target.value }))} placeholder="Meet link" className="border border-slate-200 rounded-xl px-3 py-2" />
          <input value={form.batch} onChange={(event) => setForm((current) => ({ ...current, batch: event.target.value }))} placeholder="Batch" className="border border-slate-200 rounded-xl px-3 py-2" />
          <textarea value={form.description} onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))} placeholder="Description" className="md:col-span-2 border border-slate-200 rounded-xl px-3 py-2" />
          <button type="submit" className="md:col-span-2 rounded-xl bg-brand px-3 py-2 text-white">Create class</button>
        </form>
        {formError ? <div className="mt-2 text-sm text-rose-600">{formError}</div> : null}
      </div>

      <div className="card p-5 space-y-3">
        <h3 className="font-semibold text-slate-900">Scheduled classes</h3>
        {scheduledClasses.length ? scheduledClasses.map((event) => (
          <div key={event.id} className="rounded-2xl border border-slate-200 p-3 text-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-900">{event.title}</div>
                <div className="text-slate-500">{event.date} • {event.time}</div>
              </div>
              <div className="text-right">
                <div className="text-slate-700">{isLive(event.startDateTime, event.endDateTime) ? 'Live now' : getCountdown(event.startDateTime)}</div>
                <button type="button" onClick={() => deleteClass(event.id)} className="mt-2 rounded-xl border border-slate-200 px-3 py-1 text-slate-700">Delete</button>
              </div>
            </div>
          </div>
        )) : <div className="rounded-2xl border border-dashed border-slate-200 p-4 text-sm text-slate-500">No classes are connected yet.</div>}
      </div>

      <div className="card p-5 space-y-3">
        <h3 className="font-semibold text-slate-900">Quick live link</h3>
        <form onSubmit={saveLiveLink} className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input value={quickUrl} onChange={(event) => setQuickUrl(event.target.value)} placeholder="https://..." className="border border-slate-200 rounded-xl px-3 py-2" />
          <input value={quickLabel} onChange={(event) => setQuickLabel(event.target.value)} placeholder="Label (optional)" className="border border-slate-200 rounded-xl px-3 py-2" />
          <button type="submit" className="md:col-span-2 rounded-xl bg-brand px-3 py-2 text-white">Set live link</button>
        </form>
        {liveLink ? (
          <div className="rounded-2xl border border-slate-200 p-3 text-sm">
            <div className="font-semibold text-slate-900">{liveLink.label}</div>
            <div className="text-slate-500">{liveLink.url}</div>
            <button type="button" onClick={endLiveLink} className="mt-2 rounded-xl border border-slate-200 px-3 py-1 text-slate-700">End live</button>
          </div>
        ) : null}
      </div>

      <LiveClassButton liveLink={liveLink} />
    </div>
  )
}

function LiveClassButton({ liveLink }) {
  const [link, setLink] = useState(liveLink)

  useEffect(() => {
    let active = true
    const load = async () => {
      const payload = await requestJson('/api/live-link', { method: 'GET' }, null)
      if (!active) return
      if (payload?.link) setLink(payload.link)
      else if (payload?.url) setLink(payload)
      else setLink(null)
    }

    load()
    const timer = setInterval(load, 15000)
    return () => {
      active = false
      clearInterval(timer)
    }
  }, [])

  if (!link?.url) return null

  return (
    <div className="card p-4">
      <div className="font-semibold text-ink">Student-facing quick join</div>
      <a href={link.url} target="_blank" rel="noreferrer" className="mt-2 inline-flex rounded-lg bg-brand px-3 py-2 text-white">Join {link.label || 'live class'}</a>
    </div>
  )
}

function AssignTestTab({ assignedTests, setAssignedTests, submissions, setSubmissions, students }) {
  const [selectedSubject, setSelectedSubject] = useState(SUBJECT_OPTIONS[0].id)
  const [selectedChapters, setSelectedChapters] = useState([])
  const [selectedBatch, setSelectedBatch] = useState('A1')
  const [title, setTitle] = useState('')
  const [numQuestions, setNumQuestions] = useState(20)
  const [durationMins, setDurationMins] = useState(30)
  const [instructions, setInstructions] = useState('')
  const [dueAt, setDueAt] = useState('')
  const [notifyStudents, setNotifyStudents] = useState(true)
  const [notifyMinorUpdates, setNotifyMinorUpdates] = useState(false)
  const [updateSeverity, setUpdateSeverity] = useState('major')
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [viewingResultsId, setViewingResultsId] = useState(null)
  const [subjects, setSubjects] = useState(SUBJECT_OPTIONS)
  const [subjectsLoading, setSubjectsLoading] = useState(false)

  const getSubjectLabel = (subjectId) => {
    return subjects.find((subject) => subject.id === subjectId)?.label
      || SUBJECT_OPTIONS.find((subject) => subject.id === subjectId)?.label
      || subjectId
  }

  useEffect(() => {
    const autoTitle = `${getSubjectLabel(selectedSubject)} ${selectedChapters.map((chapter) => chapter.label).join(', ')}`.trim()
    setTitle(autoTitle)
  }, [selectedChapters, selectedSubject, subjects])

  useEffect(() => {
    let active = true
    const loadSubjects = async () => {
      setSubjectsLoading(true)
      const payload = await requestJson('/api/teacher/subjects', { method: 'GET' }, null)
      if (!active) return
      if (payload?.subjects && payload.subjects.length) {
        setSubjects(payload.subjects)
        // if current selectedSubject is not in the new list, pick the first
        if (!payload.subjects.some((s) => s.id === selectedSubject)) {
          setSelectedSubject(payload.subjects[0].id)
        }
      }
      if (payload?.warnings && payload.warnings.length) {
        // surface to console for now – UI could show these later
        // eslint-disable-next-line no-console
        console.warn('question-bank warnings:', payload.warnings)
      }
      setSubjectsLoading(false)
    }

    loadSubjects()
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    let active = true

    const loadAssignedTests = async () => {
      const payload = await requestJson('/api/teacher/assigned-tests', { method: 'GET' }, null)
      if (!active) return
      if (payload?.tests?.length) {
        setAssignedTests(payload.tests)
      }
    }

    loadAssignedTests()
    return () => {
      active = false
    }
  }, [setAssignedTests])

  const batchOptions = useMemo(() => {
    const values = Array.from(new Set((students || []).map((student) => student.batch).filter(Boolean)))
    return values.length ? values : ['A1', 'A2']
  }, [students])

  const toggleChapter = (chapter) => {
    setSelectedChapters((current) => (current.some((entry) => entry.id === chapter.id) ? current.filter((entry) => entry.id !== chapter.id) : [...current, chapter]))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSuccessMessage('')

    if (!title.trim()) {
      setError('Please provide a title.')
      return
    }
    if (!selectedChapters.length) {
      setError('Please select at least one chapter.')
      return
    }
    if (numQuestions < 5 || numQuestions > 100) {
      setError('Questions should be between 5 and 100.')
      return
    }
    if (durationMins < 5 || durationMins > 180) {
      setError('Duration should be between 5 and 180 minutes.')
      return
    }

    const optimisticTest = {
      id: `test-${Date.now()}`,
      title,
      classId: selectedBatch.toLowerCase(),
      className: selectedBatch,
      subjectId: selectedSubject,
      subjectLabel: getSubjectLabel(selectedSubject),
      chapterId: selectedChapters[0]?.id || '',
      chapterLabel: selectedChapters[0]?.label || '',
      chapterIds: selectedChapters.map((chapter) => chapter.id),
      numQuestions,
      durationMins,
      instructions,
      dueAt: dueAt || null,
      notifyStudents,
      notifyMinorUpdates,
      updateSeverity,
      isActive: true,
    }

    const payload = await requestJson(
      '/api/teacher/assigned-tests',
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ test: optimisticTest }) },
      { success: false, error: 'Unable to create the test right now.' }
    )
    if (payload?.success === false) {
      setError(payload.error || 'Unable to create the test right now.')
      return
    }

    const created = payload?.test
      ? {
        id: payload.test.id,
        title: payload.test.title || optimisticTest.title,
        classId: payload.test.classId || optimisticTest.classId,
        className: payload.test.className || optimisticTest.className,
        subjectId: payload.test.subjectId || payload.test.subject_id || optimisticTest.subjectId,
        subjectLabel: payload.test.subjectLabel || payload.test.subject_label || optimisticTest.subjectLabel,
        chapterId: payload.test.chapterId || payload.test.chapter_id || optimisticTest.chapterId,
        chapterLabel: payload.test.chapterLabel || payload.test.chapter_label || optimisticTest.chapterLabel,
        chapterIds: payload.test.chapterIds || payload.test.chapter_ids || optimisticTest.chapterIds,
        numQuestions: payload.test.numQuestions || payload.test.num_questions || optimisticTest.numQuestions,
        durationMins: payload.test.durationMins || payload.test.duration_mins || optimisticTest.durationMins,
        instructions: payload.test.instructions || optimisticTest.instructions,
        dueAt: payload.test.dueAt || payload.test.due_at || optimisticTest.dueAt,
        isActive: payload.test.isActive ?? payload.test.is_active ?? optimisticTest.isActive,
      }
      : optimisticTest

    setAssignedTests((current) => [created, ...current])
    const notification = payload?.notification
    if (notification) {
      if (notification.skipped) {
        setSuccessMessage(`Test uploaded. WhatsApp not sent (${notification.reason || 'skipped'}).`)
      } else {
        const issueLine = Array.isArray(notification.deliveryIssues) && notification.deliveryIssues.length
          ? ` Reason: ${notification.deliveryIssues[0]}`
          : ''
        setSuccessMessage(
          `Test uploaded. WhatsApp: sent ${notification.sent || 0}, failed ${notification.failed || 0}, targeted ${notification.targetedStudentNumbers?.length || 0}.${issueLine}`
        )
      }
    } else {
      setSuccessMessage('Test uploaded successfully.')
    }
  }

  const toggleActive = async (testId) => {
    const currentTest = assignedTests.find((test) => test.id === testId)
    const nextActive = !(currentTest?.isActive ?? currentTest?.is_active ?? true)
    const payload = await requestJson('/api/teacher/assigned-tests', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: testId, isActive: nextActive }) }, null)
    if (payload?.success !== false) {
      setAssignedTests((current) => current.map((test) => (test.id === testId ? { ...test, isActive: nextActive } : test)))
    }
  }

  const deleteTest = async (testId) => {
    const payload = await requestJson('/api/teacher/assigned-tests', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: testId }) }, { id: testId })
    if (payload?.id) {
      setAssignedTests((current) => current.filter((test) => test.id !== payload.id))
    }
  }

  const viewResults = async (testId) => {
    setViewingResultsId(testId)
    const payload = await requestJson(`/api/teacher/assigned-tests/results?testId=${encodeURIComponent(testId)}`, { method: 'GET' }, null)
    setSubmissions(payload?.submissions || payload?.results || [])
  }

  return (
    <div className="space-y-4">
      <div className="card p-5">
        <div className="mb-4 grid gap-4 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Create assigned test</h3>
            <p className="mt-2 text-sm text-slate-500">Select subject chapters, set the test details, and assign it to your cohort with one click.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <div className="font-medium text-slate-900">Quick summary</div>
            <div className="mt-2 space-y-1">
              <div>{selectedChapters.length ? `${selectedChapters.length} chapter${selectedChapters.length === 1 ? '' : 's'} selected` : 'No chapters selected yet'}</div>
              <div>{subjectsLoading ? 'Refreshing subjects…' : `${subjects.length} subjects available`}</div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Subject selection</h4>
                  <p className="mt-1 text-sm text-slate-500">Choose the area your test should cover.</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 shadow-sm">{subjects.length} subjects</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {subjects.map((subject) => (
                  <button
                    key={subject.id}
                    type="button"
                    onClick={() => setSelectedSubject(subject.id)}
                    className={`rounded-3xl border p-4 text-left transition ${selectedSubject === subject.id ? 'border-brand bg-brand text-white shadow-sm' : 'border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50'}`}
                  >
                    <div className="mb-2 text-lg">{subject.icon || '📚'}</div>
                    <div className="font-semibold">{subject.label}</div>
                    <div className="mt-1 text-sm text-slate-500">{subject.chapters?.length ?? 0} chapters</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-900">Chapter selection</h4>
                <p className="mt-1 text-sm text-slate-500">Pick the chapters to include in this test.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {(subjects.find((subject) => subject.id === selectedSubject)?.chapters || []).map((chapter) => {
                  const isChecked = selectedChapters.some((entry) => entry.id === chapter.id)
                  return (
                    <label
                      key={chapter.id}
                      className={`flex cursor-pointer items-center gap-3 rounded-3xl border p-3 transition ${isChecked ? 'border-brand bg-brand/10 text-slate-900' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'}`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleChapter(chapter)}
                        className="h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand"
                      />
                      <span className="text-sm font-medium">{chapter.label}</span>
                    </label>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-900">Test details</h4>
              <p className="mt-1 text-sm text-slate-500">Name the test, choose a batch, and define duration.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Batch</label>
                <select value={selectedBatch} onChange={(event) => setSelectedBatch(event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20">
                  {batchOptions.map((batch) => <option key={batch} value={batch}>{batch}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Title</label>
                <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Use an explicit title for your test" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Questions</label>
                  <input value={numQuestions} onChange={(event) => setNumQuestions(Number(event.target.value))} type="number" placeholder="20" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Duration (mins)</label>
                  <input value={durationMins} onChange={(event) => setDurationMins(Number(event.target.value))} type="number" placeholder="30" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Instructions</label>
                <textarea value={instructions} onChange={(event) => setInstructions(event.target.value)} placeholder="Add any test instructions or guidance" className="h-28 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Deadline (optional)</label>
                <input value={dueAt} onChange={(event) => setDueAt(event.target.value)} type="datetime-local" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </div>
              <div className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <label className="flex items-center gap-2 text-sm text-slate-700">
                  <input type="checkbox" checked={notifyStudents} onChange={(event) => setNotifyStudents(event.target.checked)} className="h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand" />
                  Send WhatsApp notification to this batch
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-700">
                  <input type="checkbox" checked={notifyMinorUpdates} onChange={(event) => setNotifyMinorUpdates(event.target.checked)} className="h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand" />
                  Also send for minor edits
                </label>
                <div>
                  <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">Update type</label>
                  <select value={updateSeverity} onChange={(event) => setUpdateSeverity(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20">
                    <option value="major">Major update</option>
                    <option value="minor">Minor update</option>
                  </select>
                </div>
              </div>
              <button type="button" onClick={handleSubmit} className="inline-flex w-full items-center justify-center rounded-3xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">
                Assign test
              </button>
            </div>
          </div>
        </div>

        {error ? <div className="mt-3 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</div> : null}
        {successMessage ? <div className="mt-3 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{successMessage}</div> : null}
      </div>

      <div className="card p-5 space-y-3">
        <h3 className="font-semibold text-slate-900">Assigned tests</h3>
        {assignedTests.map((test) => (
          <div key={test.id} className="rounded-2xl border border-slate-200 p-3 text-sm">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="font-semibold text-slate-900">{test.title}</div>
                <div className="text-slate-500">{test.subjectLabel} • {test.chapterLabel} • {test.className || test.classId || 'All Classes'}</div>
                {test.dueAt || test.due_at ? <div className="text-xs text-slate-500 mt-1">Deadline: {formatDisplayDate(test.dueAt || test.due_at)}</div> : null}
              </div>
              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={() => toggleActive(test.id)} className="rounded-xl border border-slate-200 px-3 py-1 text-slate-700">{test.is_active ? 'Pause' : 'Resume'}</button>
                <button type="button" onClick={() => deleteTest(test.id)} className="rounded-xl border border-slate-200 px-3 py-1 text-slate-700">Delete</button>
                <button type="button" onClick={() => viewResults(test.id)} className="rounded-xl bg-brand px-3 py-1 text-white">View results</button>
              </div>
            </div>
            {viewingResultsId === test.id ? (
              <div className="mt-3 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr className="text-left text-slate-500">
                      <th className="px-3 py-2">Student</th>
                      <th className="px-3 py-2">Score</th>
                      <th className="px-3 py-2">Accuracy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.length ? submissions.map((submission) => (
                      <tr key={submission.id} className="border-t border-slate-200">
                        <td className="px-3 py-2 text-slate-700">{submission.studentName || submission.student_name || submission.studentEmail || submission.student_email}</td>
                        <td className="px-3 py-2 text-slate-700">{submission.score}/{submission.total}</td>
                        <td className="px-3 py-2 text-slate-700">{submission.accuracy}%</td>
                      </tr>
                    )) : <tr><td colSpan="3" className="px-3 py-3 text-sm text-slate-500">No submissions yet.</td></tr>}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

function LeaderboardTab({ students }) {
  const [mode, setMode] = useState('exam')
  const [query, setQuery] = useState('')
  const [expandedEmail, setExpandedEmail] = useState('')
  const [entries, setEntries] = useState([])
  const [entriesLoading, setEntriesLoading] = useState(true)

  const [mockBoard, setMockBoard] = useState([])
  const [mockLoading, setMockLoading] = useState(true)
  const [mockSearch, setMockSearch] = useState('')
  const [activeMockSubject, setActiveMockSubject] = useState('all')
  const [expandedMockRow, setExpandedMockRow] = useState(null)
  const [mockLastRefresh, setMockLastRefresh] = useState(null)

  useEffect(() => {
    let active = true
    if (mode !== 'exam') return () => {}

    const load = async () => {
      setEntriesLoading(true)
      await delay()
      const payload = await requestJson('/api/teacher/leaderboard?mode=exam&subject=all', { method: 'GET' }, null)
      if (!active) return
      if (payload?.entries) {
        setEntries(payload.entries)
      } else {
        const derived = students.map((student) => ({
          name: student.name,
          email: student.email,
          accuracy: student.avgScore,
          attempts: student.testsAttempted,
          score: student.bestScore,
          total: student.totalQuestions,
          subjectBreakdown: student.results.map((result) => ({ subject: result.subjectLabel, chapter: result.title, accuracy: result.pct, tests: 1 })),
        }))
        setEntries(derived)
      }
      setEntriesLoading(false)
    }

    load()
    return () => {
      active = false
    }
  }, [mode, students])

  const fetchMockBoard = useCallback(async (subject) => {
    setMockLoading(true)
    try {
      const url = subject === 'all' ? '/api/mock-leaderboard' : `/api/mock-leaderboard?subject=${encodeURIComponent(subject)}`
      const response = await fetch(url)
      const data = await response.json()
      if (data?.success) {
        setMockBoard(Array.isArray(data.entries) ? data.entries : [])
        setMockLastRefresh(new Date())
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Mock leaderboard fetch failed:', error)
    } finally {
      setMockLoading(false)
    }
  }, [])

  useEffect(() => {
    if (mode !== 'mock') return
    void fetchMockBoard(activeMockSubject)
  }, [activeMockSubject, fetchMockBoard, mode])

  const filteredEntries = useMemo(() => {
    const lowerQuery = query.toLowerCase()
    return entries.filter((entry) => `${entry.name} ${entry.email}`.toLowerCase().includes(lowerQuery))
  }, [entries, query])

  const sortedEntries = useMemo(() => [...filteredEntries].sort((a, b) => b.accuracy - a.accuracy), [filteredEntries])

  const mockFiltered = useMemo(() => {
    const term = mockSearch.trim().toLowerCase()
    if (!term) return mockBoard
    return mockBoard.filter((entry) => String(entry.name || '').toLowerCase().includes(term))
  }, [mockBoard, mockSearch])

  const mockPodium = useMemo(() => mockFiltered.slice(0, 3), [mockFiltered])

  const mockStats = useMemo(() => {
    const avg = mockBoard.length
      ? Math.round(mockBoard.reduce((sum, entry) => sum + Number(entry.accuracy || 0), 0) / mockBoard.length)
      : 0
    const totalTests = mockBoard.reduce((sum, entry) => sum + Number(entry.attempts || 0), 0)
    return {
      students: mockBoard.length,
      topScore: mockBoard[0]?.accuracy ?? 0,
      avg,
      totalTests,
      topStudent: mockBoard[0] || null,
    }
  }, [mockBoard])

  const medals = { 1: '🥇', 2: '🥈', 3: '🥉' }
  const podiumColors = { 1: '#F59E0B', 2: '#1D4ED8', 3: '#8B5CF6' }
  const ringCircumference = 2 * Math.PI * 11

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => setMode('exam')} className={`rounded-xl px-3 py-2 text-sm font-medium ${mode === 'exam' ? 'bg-brand text-white' : 'bg-slate-50 text-slate-700'}`}>Exam leaderboard</button>
          <button type="button" onClick={() => setMode('mock')} className={`rounded-xl px-3 py-2 text-sm font-medium ${mode === 'mock' ? 'bg-brand text-white' : 'bg-slate-50 text-slate-700'}`}>Mock leaderboard</button>
        </div>
      </div>

      {mode === 'exam' ? (
        <>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search student" className="border border-slate-200 rounded-xl px-3 py-2" />

          {entriesLoading ? <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-500">Loading leaderboard…</div> : null}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {sortedEntries.slice(0, 3).map((entry, index) => (
              <div key={entry.email} className="card p-4">
                <div className="text-sm font-semibold uppercase tracking-wide text-slate-400">#{index + 1}</div>
                <div className="mt-2 font-semibold text-slate-900">{entry.name}</div>
                <div className="text-sm text-slate-500">{entry.accuracy}% accuracy</div>
              </div>
            ))}
          </div>

          <div className="card p-5 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50">
                <tr className="text-left text-slate-500">
                  <th className="px-3 py-3">Name</th>
                  <th className="px-3 py-3">Accuracy</th>
                  <th className="px-3 py-3">Attempts</th>
                </tr>
              </thead>
              <tbody>
                {sortedEntries.map((entry) => (
                  <Fragment key={entry.email}>
                    <tr className="cursor-pointer border-t border-slate-200" onClick={() => setExpandedEmail((current) => (current === entry.email ? '' : entry.email))}>
                      <td className="px-3 py-3 font-medium text-slate-800">{entry.name}</td>
                      <td className="px-3 py-3 font-semibold text-slate-700">{entry.accuracy}%</td>
                      <td className="px-3 py-3 text-slate-700">{entry.attempts}</td>
                    </tr>
                    {expandedEmail === entry.email ? (
                      <tr>
                        <td colSpan="3" className="px-3 py-2 text-sm text-slate-600">
                          {entry.subjectBreakdown.map((item) => <div key={`${item.subject}-${item.chapter}`} className="rounded-xl bg-slate-50 px-2 py-1">{item.subject} • {item.chapter} • {item.accuracy}% ({item.tests})</div>)}
                        </td>
                      </tr>
                    ) : null}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : null}

      {mode === 'mock' ? (
        <>
          <div className="card p-4 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              {MOCK_SUBJECTS.map((subject) => {
                const active = activeMockSubject === subject.id
                return (
                  <button
                    key={subject.id}
                    type="button"
                    onClick={() => {
                      setActiveMockSubject(subject.id)
                      setExpandedMockRow(null)
                    }}
                    className="rounded-full border px-3 py-2 text-sm font-medium transition"
                    style={active
                      ? { borderColor: subject.color, borderWidth: 2, backgroundColor: hexA(subject.color, 0.1), color: '#0f172a' }
                      : { borderColor: '#e2e8f0', backgroundColor: '#ffffff', color: '#334155' }}
                  >
                    {subject.icon} {subject.label}
                    {active ? <span className="ml-2 rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-slate-600">{mockFiltered.length}</span> : null}
                  </button>
                )
              })}
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <input
                value={mockSearch}
                onChange={(event) => setMockSearch(event.target.value)}
                placeholder="Search by student name"
                className="w-full md:max-w-sm rounded-xl border border-slate-200 px-3 py-2"
              />
              <div className="flex items-center gap-3">
                <button type="button" onClick={() => fetchMockBoard(activeMockSubject)} className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700">
                  Refresh
                </button>
                <span className="text-xs text-slate-500">
                  {mockLastRefresh ? `Last refresh ${mockLastRefresh.toLocaleTimeString()}` : 'Not refreshed yet'}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <div className="card p-4">
              <div className="text-xs uppercase tracking-wide text-slate-500">👥 Students</div>
              <div className="mt-2 text-2xl font-semibold text-slate-900">{mockStats.students}</div>
            </div>
            <div className="card p-4">
              <div className="text-xs uppercase tracking-wide text-slate-500">🥇 Top Score</div>
              <div className="mt-2 text-2xl font-semibold text-slate-900">{mockStats.topScore}%</div>
            </div>
            <div className="card p-4">
              <div className="text-xs uppercase tracking-wide text-slate-500">🎯 Avg Accuracy</div>
              <div className="mt-2 text-2xl font-semibold text-slate-900">{mockStats.avg}%</div>
            </div>
            <div className="card p-4">
              <div className="text-xs uppercase tracking-wide text-slate-500">📝 Total Tests</div>
              <div className="mt-2 text-2xl font-semibold text-slate-900">{mockStats.totalTests}</div>
            </div>
          </div>

          {mockStats.topStudent ? (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              Top Student: <span className="font-semibold">{mockStats.topStudent.name}</span> • {mockStats.topStudent.accuracy}% • {mockStats.topStudent.subjectLabel}
            </div>
          ) : null}

          {!mockLoading && !mockSearch.trim() && mockPodium.length >= 2 ? (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:items-end">
              {(mockPodium.length >= 3
                ? [{ e: mockPodium[1], rank: 2, h: 80 }, { e: mockPodium[0], rank: 1, h: 110 }, { e: mockPodium[2], rank: 3, h: 60 }]
                : [{ e: mockPodium[1], rank: 2, h: 80 }, { e: mockPodium[0], rank: 1, h: 110 }]
              ).map(({ e, rank, h }) => {
                const strongest = Array.isArray(e.subjectBreakdown) && e.subjectBreakdown.length
                  ? [...e.subjectBreakdown].sort((a, b) => b.accuracy - a.accuracy)[0]
                  : null
                return (
                  <div key={e.email} className="card p-4 text-center">
                    <div className="text-2xl">{medals[rank]}</div>
                    <div className="mt-2 font-semibold text-slate-900">{e.name}</div>
                    <div className="text-sm text-slate-500">{e.accuracy}% accuracy</div>
                    {strongest ? (
                      <div className="mt-2 inline-flex rounded-full px-2 py-1 text-xs font-semibold" style={{ backgroundColor: hexA(subjectColor(strongest.subject), 0.15), color: subjectColor(strongest.subject) }}>
                        ⭐ {strongest.subject}
                      </div>
                    ) : null}
                    <div className="mx-auto mt-3 w-20 rounded-t-xl" style={{ height: `${h}px`, backgroundColor: podiumColors[rank] }} />
                  </div>
                )
              })}
            </div>
          ) : null}

          <div className="card overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-3 py-3 text-left">Rank</th>
                  <th className="px-3 py-3 text-left">Student</th>
                  <th className="px-3 py-3 text-left">Details</th>
                  <th className="px-3 py-3 text-left">Score</th>
                  <th className="px-3 py-3 text-left">Accuracy</th>
                  <th className="px-3 py-3 text-left">Expand</th>
                </tr>
              </thead>
              <tbody>
                {mockLoading ? Array.from({ length: 5 }).map((_, index) => (
                  <tr key={`skeleton-${index}`} className="border-t border-slate-200">
                    <td className="px-3 py-4"><div className="h-6 w-10 animate-pulse rounded bg-slate-100" /></td>
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 animate-pulse rounded-full bg-slate-100" />
                        <div className="space-y-2">
                          <div className="h-3 w-28 animate-pulse rounded bg-slate-100" />
                          <div className="h-3 w-20 animate-pulse rounded bg-slate-100" />
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4"><div className="h-4 w-36 animate-pulse rounded bg-slate-100" /></td>
                    <td className="px-3 py-4"><div className="h-6 w-14 animate-pulse rounded bg-slate-100" /></td>
                    <td className="px-3 py-4"><div className="h-6 w-20 animate-pulse rounded bg-slate-100" /></td>
                    <td className="px-3 py-4"><div className="h-4 w-12 animate-pulse rounded bg-slate-100" /></td>
                  </tr>
                )) : null}

                {!mockLoading && !mockFiltered.length ? (
                  <tr>
                    <td colSpan="6" className="px-3 py-10 text-center text-slate-500">
                      <div className="text-2xl">📭</div>
                      <div className="mt-2">
                        {mockSearch.trim() ? 'No students match your search.' : 'No mock leaderboard entries available for this subject.'}
                      </div>
                    </td>
                  </tr>
                ) : null}

                {!mockLoading ? mockFiltered.map((entry, index) => {
                  const rank = index + 1
                  const [avatarBg, avatarText] = avatarColors(index)
                  const expandOpen = expandedMockRow === entry.email
                  const breakdown = Array.isArray(entry.subjectBreakdown) ? entry.subjectBreakdown : []
                  const topTwo = breakdown.slice(0, 2)
                  const overflow = Math.max(0, breakdown.length - 2)
                  const rowStyle = rank === 1
                    ? { backgroundColor: '#FFFBEB' }
                    : expandOpen
                      ? { backgroundColor: '#F8FAFF' }
                      : undefined

                  return (
                    <Fragment key={entry.email}>
                      <tr
                        className="cursor-pointer border-t border-slate-200 transition hover:bg-slate-50"
                        style={rowStyle}
                        onClick={() => setExpandedMockRow((current) => (current === entry.email ? null : entry.email))}
                      >
                        <td className="px-3 py-3 font-semibold text-slate-800">{rank <= 3 ? medals[rank] : `#${rank}`}</td>
                        <td className="px-3 py-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold" style={{ backgroundColor: avatarBg, color: avatarText }}>
                              {initials(entry.name)}
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900">{entry.name}</div>
                              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                                <span className="rounded-full px-2 py-0.5" style={{ backgroundColor: hexA(subjectColor(entry.subjectLabel), 0.14), color: subjectColor(entry.subjectLabel) }}>{entry.subjectLabel}</span>
                                <span>{entry.attempts} attempt{entry.attempts !== 1 ? 's' : ''}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3">
                          {entry.lastChapter ? <div className="mb-2 text-xs text-slate-600">📖 Last chapter: {entry.lastChapter}</div> : null}
                          <div className="flex flex-wrap gap-2">
                            {topTwo.map((item) => (
                              <span key={`${entry.email}-${item.subject}-${item.chapter}`} className="rounded-full px-2 py-1 text-xs" style={{ backgroundColor: hexA(subjectColor(item.subject), 0.15), color: subjectColor(item.subject) }}>
                                {item.subject} · {item.chapter} · {item.accuracy}% · {item.tests}
                              </span>
                            ))}
                            {overflow > 0 ? <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">+{overflow} more</span> : null}
                          </div>
                        </td>
                        <td className="px-3 py-3 font-semibold text-slate-800">{entry.score}/{entry.total}</td>
                        <td className="px-3 py-3">
                          <div className="flex items-center gap-2">
                            <span style={{ color: accuracyColor(entry.accuracy) }} className="font-semibold">{entry.accuracy}%</span>
                            <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
                              <circle cx="14" cy="14" r="11" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                              <circle
                                cx="14"
                                cy="14"
                                r="11"
                                fill="none"
                                stroke={accuracyColor(entry.accuracy)}
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeDasharray={`${(ringCircumference * Math.min(entry.accuracy, 100)) / 100} ${ringCircumference}`}
                                style={{ transform: 'rotate(-90deg)', transformOrigin: '14px 14px' }}
                              />
                            </svg>
                          </div>
                        </td>
                        <td className="px-3 py-3 text-xs font-semibold text-slate-500">{expandOpen ? '▲ less' : '▼ detail'}</td>
                      </tr>
                      {expandOpen ? (
                        <tr className="border-t border-slate-100 bg-slate-50/70">
                          <td colSpan="6" className="px-4 py-4">
                            {breakdown.length ? (
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  {breakdown.map((item) => (
                                    <div key={`${entry.email}-${item.subject}-${item.chapter}-bar`}>
                                      <div className="mb-1 flex items-center justify-between text-xs text-slate-600">
                                        <span>{item.subject} • {item.chapter}</span>
                                        <span>{item.accuracy}%</span>
                                      </div>
                                      <div className="h-2 rounded-full bg-slate-200">
                                        <div className="h-2 rounded-full" style={{ width: `${Math.min(item.accuracy, 100)}%`, backgroundColor: accuracyColor(item.accuracy) }} />
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                                  <table className="min-w-full text-xs">
                                    <thead className="bg-slate-100 text-slate-500">
                                      <tr>
                                        <th className="px-3 py-2 text-left">CHAPTER</th>
                                        <th className="px-3 py-2 text-left">SUBJECT</th>
                                        <th className="px-3 py-2 text-left">ACC</th>
                                        <th className="px-3 py-2 text-left">TESTS</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {breakdown.map((item, idx) => (
                                        <tr key={`${entry.email}-${item.subject}-${item.chapter}-table`} className={idx % 2 ? 'bg-slate-50' : 'bg-white'}>
                                          <td className="px-3 py-2 text-slate-700">
                                            <span className="mr-2 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: subjectColor(item.subject) }} />
                                            {item.chapter}
                                          </td>
                                          <td className="px-3 py-2 text-slate-700">{item.subject}</td>
                                          <td className="px-3 py-2 font-semibold" style={{ color: accuracyColor(item.accuracy) }}>{item.accuracy}%</td>
                                          <td className="px-3 py-2 text-slate-700">{item.tests}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            ) : (
                              <div className="text-sm text-slate-600">No chapter breakdown available yet.</div>
                            )}
                          </td>
                        </tr>
                      ) : null}
                    </Fragment>
                  )
                }) : null}
              </tbody>
            </table>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default function TeacherDashboardPage() {
  const [activeTab, setActiveTab] = useState('students')
  const [students, setStudents] = useState([])
  const [selectedEmail, setSelectedEmail] = useState('')
  const [attendanceRecords, setAttendanceRecords] = useState([])
  const [scheduledClasses, setScheduledClasses] = useState([])
  const [liveLink, setLiveLink] = useState(null)
  const [assignedTests, setAssignedTests] = useState([])
  const [submissions, setSubmissions] = useState([])
  const [dailyUpdates, setDailyUpdates] = useState([])
  const [isAuthed, setIsAuthed] = useState(false)
  const [authChecked, setAuthChecked] = useState(false)
  const [dashboardLoading, setDashboardLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    let active = true
    const checkAuth = async () => {
      try {
        const payload = await requestJson('/api/teacher/login', { method: 'GET' }, { authed: false })
        if (!active) return
        setIsAuthed(Boolean(payload?.authed))
      } catch {
        setIsAuthed(false)
      } finally {
        if (active) setAuthChecked(true)
      }
    }

    checkAuth()
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    let active = true
    if (!isAuthed) return

    const loadDashboardData = async () => {
      setDashboardLoading(true)

      const dashboardPayload = await requestJson('/api/teacher/dashboard', { method: 'GET' }, {
        students: [],
        attendance: [],
        classes: [],
        link: null,
        tests: [],
        submissions: [],
      })

      if (!active) return

      if (Array.isArray(dashboardPayload?.students)) {
        setStudents(dashboardPayload.students)
      }
      if (Array.isArray(dashboardPayload?.attendance)) {
        setAttendanceRecords(dashboardPayload.attendance)
      }
      if (Array.isArray(dashboardPayload?.classes)) {
        setScheduledClasses(dashboardPayload.classes)
      }
      if (dashboardPayload?.link) {
        setLiveLink(dashboardPayload.link)
      }
      if (Array.isArray(dashboardPayload?.tests)) {
        setAssignedTests(dashboardPayload.tests)
      }
      if (Array.isArray(dashboardPayload?.submissions)) {
        setSubmissions(dashboardPayload.submissions)
      }

      const dailyUpdatesPayload = await requestJson('/api/teacher/daily-updates', { method: 'GET' }, { updates: [] })
      if (!active) return
      if (Array.isArray(dailyUpdatesPayload?.updates)) {
        setDailyUpdates(dailyUpdatesPayload.updates)
      }

      setDashboardLoading(false)
    }

    loadDashboardData()
    return () => {
      active = false
    }
  }, [isAuthed])

  useEffect(() => {
    if (!students.length) {
      setSelectedEmail('')
      return
    }
    if (!students.some((student) => student.email === selectedEmail)) {
      setSelectedEmail(students[0].email)
    }
  }, [selectedEmail, students])

  const summary = useMemo(() => {
    const totalTests = students.reduce((sum, student) => sum + (student.testsAttempted || 0), 0)
    const avgAccuracy = students.length ? Math.round(students.reduce((sum, student) => sum + student.avgScore, 0) / students.length) : 0
    const liveClasses = scheduledClasses.filter((event) => isLive(event.startDateTime, event.endDateTime)).length
    const attendanceRate = attendanceRecords.length ? Math.round((attendanceRecords.filter((entry) => entry.status === 'present' || entry.status === 'late').length / attendanceRecords.length) * 100) : 0
    const activeTests = assignedTests.filter((test) => test.isActive ?? test.is_active ?? true).length
    return { totalStudents: students.length, totalTests, avgAccuracy, liveClasses, attendanceRate, activeTests }
  }, [assignedTests, attendanceRecords, scheduledClasses, students])

  const handleLogin = async (event) => {
    event.preventDefault()
    setAuthError('')

    const payload = await requestJson('/api/teacher/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    }, null)

    if (payload?.success) {
      setIsAuthed(true)
      return
    }

    setAuthError(payload?.error || 'Incorrect password.')
  }

  const handleLogout = async () => {
    await requestJson('/api/teacher/login', { method: 'DELETE' }, null)
    setIsAuthed(false)
    setPassword('')
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'allresults':
        return <AllResultsTab students={students} />
      case 'dailyupdate':
        return <DailyUpdateTab students={students} dailyUpdates={dailyUpdates} setDailyUpdates={setDailyUpdates} />
      case 'attendance':
        return <AttendanceTab students={students} attendanceRecords={attendanceRecords} setAttendanceRecords={setAttendanceRecords} />
      case 'schedule':
        return <ScheduleTab scheduledClasses={scheduledClasses} setScheduledClasses={setScheduledClasses} liveLink={liveLink} setLiveLink={setLiveLink} />
      case 'assigntest':
        return <AssignTestTab assignedTests={assignedTests} setAssignedTests={setAssignedTests} submissions={submissions} setSubmissions={setSubmissions} students={students} />
      case 'manage':
        return <ManageStudentsTab students={students} setStudents={setStudents} />
      case 'leaderboard':
        return <LeaderboardTab students={students} />
      case 'students':
      default:
        return <StudentsTab students={students} setStudents={setStudents} selectedEmail={selectedEmail} setSelectedEmail={setSelectedEmail} />
    }
  }

  if (!authChecked) {
    return (
      <AppShell>
        <div className="p-6">
          <DatabaseLoadingState
            title="Checking teacher access…"
            subtitle="Verifying your session before opening the dashboard."
          />
        </div>
      </AppShell>
    )
  }

  if (!isAuthed) {
    return (
      <AppShell>
        <div className="card p-6 max-w-md mx-auto space-y-3">
          <h1 className="text-2xl font-semibold text-ink">Teacher access</h1>
          <p className="text-sm text-muted">Sign in with the teacher password configured in the environment.</p>
          <form onSubmit={handleLogin} className="space-y-3">
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Teacher password" className="w-full border border-line rounded-lg px-3 py-2" />
            <button type="submit" className="w-full rounded-lg bg-brand px-3 py-2 text-white">Unlock dashboard</button>
          </form>
          {authError ? <div className="text-sm text-red-600">{authError}</div> : null}
        </div>
      </AppShell>
    )
  }

  if (dashboardLoading && !students.length && !attendanceRecords.length && !scheduledClasses.length && !assignedTests.length) {
    return (
      <AppShell>
        <div className="p-6">
          <DatabaseLoadingState
            title="Connecting to database…"
            subtitle="Loading students, attendance, classes, tests, and daily updates."
          />
        </div>
      </AppShell>
    )
  }

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Teacher operations</div>
            <h1 className="mt-2 text-3xl font-display font-bold text-slate-900">Teacher Dashboard</h1>
            <p className="mt-1 text-sm text-slate-500">Everything you need to review learners, run classes, and manage assessments in one place.</p>
          </div>
          <button type="button" onClick={handleLogout} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">Logout</button>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-[linear-gradient(115deg,_#f7fbff_0%,_#f8f5ff_55%,_#fff5f8_100%)] p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:[background-image:linear-gradient(115deg,_#111827_0%,_#1f2937_55%,_#0f172a_100%)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900">Today at a glance</h2>
              <p className="text-sm text-slate-500">A calm, focused view of the most important teaching metrics.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-2xl bg-white/90 px-4 py-3 text-center shadow-sm">
                <div className="text-xs uppercase tracking-wide text-slate-400">Students</div>
                <div className="text-xl font-semibold text-slate-900">{summary.totalStudents}</div>
              </div>
              <div className="rounded-2xl bg-white/90 px-4 py-3 text-center shadow-sm">
                <div className="text-xs uppercase tracking-wide text-slate-400">Active tests</div>
                <div className="text-xl font-semibold text-slate-900">{summary.activeTests}</div>
              </div>
              <div className="rounded-2xl bg-white/90 px-4 py-3 text-center shadow-sm">
                <div className="text-xs uppercase tracking-wide text-slate-400">Live classes</div>
                <div className="text-xl font-semibold text-slate-900">{summary.liveClasses}</div>
              </div>
              <div className="rounded-2xl bg-white/90 px-4 py-3 text-center shadow-sm">
                <div className="text-xs uppercase tracking-wide text-slate-400">Attendance</div>
                <div className="text-xl font-semibold text-slate-900">{summary.attendanceRate}%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="flex flex-wrap gap-2">
            {NAV_TABS.map((tab) => (
              <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={`rounded-xl px-3 py-2 text-sm font-medium ${activeTab === tab.id ? 'bg-brand text-white shadow-sm' : 'bg-slate-50 text-slate-700'}`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {renderTab()}
      </div>
    </AppShell>
  )
}
