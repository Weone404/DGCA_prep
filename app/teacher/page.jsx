"use client"

import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { Fragment, useEffect, useMemo, useState } from 'react'

const NAV_TABS = [
  { id: 'students', label: 'Students' },
  { id: 'allresults', label: 'All Results' },
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
  { id: 'test-1', title: 'Air Regulations Practice', subjectId: 'air-regulations', subjectLabel: 'Air Regulations', chapterId: 'air-reg-1', chapterLabel: 'Regulatory Basics', chapterIds: ['air-reg-1'], numQuestions: 20, durationMins: 30, instructions: 'Attempt all questions.', is_active: true },
]

const DEMO_SUBMISSIONS = [
  { id: 'sub-1', testId: 'test-1', studentEmail: 'kotwaljaydeep369@gmail.com', studentName: 'Jaydeep Singh', score: 16, total: 20, accuracy: 80, submittedAt: '2026-07-09T10:00:00' },
]

async function delay(ms = 180) {
  await new Promise((resolve) => setTimeout(resolve, ms))
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
        setStudents(DEMO_STUDENTS)
        if (!selectedEmail) setSelectedEmail(DEMO_STUDENTS[0].email)
      }
      setLoading(false)
    }

    load()
    return () => {
      active = false
    }
  }, [selectedEmail, setSelectedEmail, setStudents])

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
      {loading ? <div>Loading students…</div> : null}
      {error ? <div className="text-red-600">{error}</div> : null}

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4">
        <div className="card p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-ink">Students overview</h3>
            <div className="text-sm text-muted">{students.length} students</div>
          </div>
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-muted">
                <th className="pb-2">Name</th>
                <th className="pb-2">Batch</th>
                <th className="pb-2">Tests</th>
                <th className="pb-2">Avg</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.email} className={`border-t border-line ${selectedEmail === student.email ? 'bg-brand/5' : ''}`} onClick={() => setSelectedEmail(student.email)}>
                  <td className="py-2">{student.name}</td>
                  <td className="py-2">{student.batch}</td>
                  <td className="py-2">{student.testsAttempted}</td>
                  <td className="py-2">{student.avgScore}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card p-4 space-y-3">
          <h3 className="font-semibold text-ink">Student details</h3>
          {selectedStudent ? (
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-muted">{selectedStudent.name}</div>
                <div>{selectedStudent.email}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-canvas p-2 rounded">Joined {new Date(selectedStudent.joinedAt).toLocaleDateString()}</div>
                <div className="bg-canvas p-2 rounded">Best {selectedStudent.bestScore}%</div>
              </div>
              <div>
                <div className="font-semibold">Clear topics</div>
                <ul className="list-disc ml-4 text-muted">
                  {topicStats.clear.length ? topicStats.clear.map((entry) => <li key={entry.chapterId}>{entry.title} • {entry.avgPct}%</li>) : <li>No strong topics yet.</li>}
                </ul>
              </div>
              <div>
                <div className="font-semibold">Weak topics</div>
                <ul className="list-disc ml-4 text-muted">
                  {topicStats.weak.length ? topicStats.weak.map((entry) => <li key={entry.chapterId}>{entry.title} • {entry.avgPct}%</li>) : <li>No weak topics detected.</li>}
                </ul>
              </div>
              <div>
                <div className="font-semibold">Wrong answers for review</div>
                <ul className="list-disc ml-4 text-muted">
                  {wrongAnswers.length ? wrongAnswers.map((answer, index) => <li key={`${answer.resultTitle}-${index}`}>{answer.resultTitle} • {answer.selected} vs {answer.correct}</li>) : <li>No incorrect answers to review.</li>}
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-muted">Select a student.</div>
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
      <div className="card p-4 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search student" className="border border-line rounded-lg px-3 py-2" />
          <select value={chapterFilter} onChange={(event) => setChapterFilter(event.target.value)} className="border border-line rounded-lg px-3 py-2">
            <option value="all">All chapters</option>
            {chapters.map((chapter) => <option key={chapter} value={chapter}>{chapter}</option>)}
          </select>
          <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} className="border border-line rounded-lg px-3 py-2">
            <option value="score-desc">Score desc</option>
            <option value="score-asc">Score asc</option>
            <option value="date-desc">Date desc</option>
            <option value="date-asc">Date asc</option>
          </select>
          <div className="bg-canvas rounded-lg px-3 py-2 text-sm text-muted">Stats: {totals.totalResults} results</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm">
          <div className="bg-canvas p-2 rounded">Students: {totals.totalStudents}</div>
          <div className="bg-canvas p-2 rounded">Avg accuracy: {totals.avgAccuracy}%</div>
          <div className="bg-canvas p-2 rounded">Best score: {totals.bestScore}%</div>
          <div className="bg-canvas p-2 rounded">Visible rows: {filteredResults.length}</div>
        </div>
      </div>

      <div className="card p-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-muted">
              <th className="pb-2">Student</th>
              <th className="pb-2">Chapter</th>
              <th className="pb-2">Date</th>
              <th className="pb-2">Score</th>
              <th className="pb-2">Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {filteredResults.map((entry) => (
              <tr key={`${entry.studentEmail}-${entry.id}`} className="border-t border-line">
                <td className="py-2">{entry.studentName}</td>
                <td className="py-2">{entry.chapterId}</td>
                <td className="py-2">{entry.date}</td>
                <td className="py-2">{entry.score}/{entry.total}</td>
                <td className="py-2">{entry.pct}%</td>
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
  const [form, setForm] = useState({ name: '', email: '', phone: '', batch: 'A1' })
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
      setForm({ name: '', email: '', phone: '', batch: 'A1' })
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
    setForm({ name: '', email: '', phone: '', batch: 'A1' })
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
      <div className="card p-4">
        <h3 className="font-semibold text-ink">Add student</h3>
        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3">
          <input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} placeholder="Name" className="border border-line rounded-lg px-3 py-2" />
          <input value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} placeholder="Email" className="border border-line rounded-lg px-3 py-2" />
          <input value={form.phone} onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))} placeholder="Phone" className="border border-line rounded-lg px-3 py-2" />
          <input value={form.batch} onChange={(event) => setForm((current) => ({ ...current, batch: event.target.value }))} placeholder="Batch" className="border border-line rounded-lg px-3 py-2" />
          <button type="submit" className="md:col-span-4 rounded-lg bg-brand px-3 py-2 text-white">Add student</button>
        </form>
        {error ? <div className="text-sm text-red-600 mt-2">{error}</div> : null}
      </div>

      <div className="card p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-ink">Existing students</h3>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name/email" className="border border-line rounded-lg px-3 py-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          {Object.entries(batchSummary).map(([batch, count]) => (
            <div key={batch} className="bg-canvas rounded-lg p-2 text-sm">
              {batch}: {count} students
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {filteredStudents.map((student) => (
            <div key={student.email} className="flex items-center justify-between rounded-lg border border-line px-3 py-2">
              <div>
                <div className="font-semibold">{student.name}</div>
                <div className="text-sm text-muted">{student.email} • {student.batch}</div>
              </div>
              <button type="button" onClick={() => handleRemove(student.email)} className="rounded-lg border border-line px-3 py-1 text-sm">Remove</button>
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
      <div className="flex gap-2">
        {['mark', 'report', 'student'].map((tab) => (
          <button key={tab} type="button" onClick={() => setSubTab(tab)} className={`rounded-lg px-3 py-2 ${subTab === tab ? 'bg-brand text-white' : 'bg-canvas text-ink'}`}>
            {tab === 'mark' ? 'Mark' : tab === 'report' ? 'Report' : 'Student'}
          </button>
        ))}
      </div>

      {subTab === 'mark' ? (
        <div className="card p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <select value={batch} onChange={(event) => setBatch(event.target.value)} className="border border-line rounded-lg px-3 py-2">
              <option value="A1">A1</option>
              <option value="A2">A2</option>
            </select>
            <input type="date" value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} className="border border-line rounded-lg px-3 py-2" />
            <button type="button" onClick={markAllPresent} className="rounded-lg bg-canvas px-3 py-2">Mark all present</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm">
            <div className="bg-canvas rounded-lg p-2">Present: {progress.present}</div>
            <div className="bg-canvas rounded-lg p-2">Absent: {progress.absent}</div>
            <div className="bg-canvas rounded-lg p-2">Late: {progress.late}</div>
            <div className="bg-canvas rounded-lg p-2">Done: {progress.percent}%</div>
          </div>

          <div className="space-y-2">
            {batchStudents.map((student) => (
              <div key={student.email} className="rounded-lg border border-line p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold">{student.name}</div>
                    <div className="text-sm text-muted">{student.email}</div>
                  </div>
                  <div className="flex gap-2">
                    {['present', 'absent', 'late'].map((status) => (
                      <button key={status} type="button" onClick={() => setStatuses((current) => ({ ...current, [student.email]: status }))} className={`rounded-lg px-3 py-1 text-sm ${statuses[student.email] === status ? 'bg-brand text-white' : 'bg-canvas text-ink'}`}>
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
                <input value={notes[student.email] || ''} onChange={(event) => setNotes((current) => ({ ...current, [student.email]: event.target.value }))} placeholder="Note" className="mt-2 w-full border border-line rounded-lg px-3 py-2" />
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

    const newEvent = {
      id: `class-${Date.now()}`,
      ...form,
      startDateTime: `${form.date}T${form.time}:00`,
      endDateTime: `${form.date}T${(Number(form.time.split(':')[0]) + Math.floor(form.duration / 60)).toString().padStart(2, '0')}:${String(Number(form.time.split(':')[1]) + (form.duration % 60)).padStart(2, '0')}:00`,
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
      <div className="card p-4">
        <h3 className="font-semibold text-ink">Schedule class</h3>
        <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <input value={form.title} onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))} placeholder="Title" className="border border-line rounded-lg px-3 py-2" />
          <input value={form.date} onChange={(event) => setForm((current) => ({ ...current, date: event.target.value }))} type="date" className="border border-line rounded-lg px-3 py-2" />
          <input value={form.time} onChange={(event) => setForm((current) => ({ ...current, time: event.target.value }))} type="time" className="border border-line rounded-lg px-3 py-2" />
          <input value={form.duration} onChange={(event) => setForm((current) => ({ ...current, duration: Number(event.target.value) }))} type="number" className="border border-line rounded-lg px-3 py-2" />
          <input value={form.meetLink} onChange={(event) => setForm((current) => ({ ...current, meetLink: event.target.value }))} placeholder="Meet link" className="border border-line rounded-lg px-3 py-2" />
          <input value={form.batch} onChange={(event) => setForm((current) => ({ ...current, batch: event.target.value }))} placeholder="Batch" className="border border-line rounded-lg px-3 py-2" />
          <textarea value={form.description} onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))} placeholder="Description" className="md:col-span-2 border border-line rounded-lg px-3 py-2" />
          <button type="submit" className="md:col-span-2 rounded-lg bg-brand px-3 py-2 text-white">Create class</button>
        </form>
        {formError ? <div className="text-sm text-red-600 mt-2">{formError}</div> : null}
      </div>

      <div className="card p-4 space-y-3">
        <h3 className="font-semibold text-ink">Scheduled classes</h3>
        {scheduledClasses.map((event) => (
          <div key={event.id} className="rounded-lg border border-line p-3 text-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{event.title}</div>
                <div className="text-muted">{event.date} • {event.time}</div>
              </div>
              <div className="text-right">
                <div>{isLive(event.startDateTime, event.endDateTime) ? 'Live now' : getCountdown(event.startDateTime)}</div>
                <button type="button" onClick={() => deleteClass(event.id)} className="mt-2 rounded-lg border border-line px-3 py-1">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-4 space-y-3">
        <h3 className="font-semibold text-ink">Quick live link</h3>
        <form onSubmit={saveLiveLink} className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input value={quickUrl} onChange={(event) => setQuickUrl(event.target.value)} placeholder="https://..." className="border border-line rounded-lg px-3 py-2" />
          <input value={quickLabel} onChange={(event) => setQuickLabel(event.target.value)} placeholder="Label (optional)" className="border border-line rounded-lg px-3 py-2" />
          <button type="submit" className="md:col-span-2 rounded-lg bg-brand px-3 py-2 text-white">Set live link</button>
        </form>
        {liveLink ? (
          <div className="rounded-lg border border-line p-3 text-sm">
            <div className="font-semibold">{liveLink.label}</div>
            <div className="text-muted">{liveLink.url}</div>
            <button type="button" onClick={endLiveLink} className="mt-2 rounded-lg border border-line px-3 py-1">End live</button>
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

function AssignTestTab({ assignedTests, setAssignedTests, submissions, setSubmissions }) {
  const [selectedSubject, setSelectedSubject] = useState(SUBJECT_OPTIONS[0].id)
  const [selectedChapters, setSelectedChapters] = useState([])
  const [title, setTitle] = useState('')
  const [numQuestions, setNumQuestions] = useState(20)
  const [durationMins, setDurationMins] = useState(30)
  const [instructions, setInstructions] = useState('')
  const [error, setError] = useState('')
  const [viewingResultsId, setViewingResultsId] = useState(null)

  useEffect(() => {
    const autoTitle = `${SUBJECT_OPTIONS.find((subject) => subject.id === selectedSubject)?.label || ''} ${selectedChapters.map((chapter) => chapter.label).join(', ')}`.trim()
    setTitle(autoTitle)
  }, [selectedChapters, selectedSubject])

  const toggleChapter = (chapter) => {
    setSelectedChapters((current) => (current.some((entry) => entry.id === chapter.id) ? current.filter((entry) => entry.id !== chapter.id) : [...current, chapter]))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (!title.trim()) {
      setError('Please provide a title.')
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

    const newTest = {
      id: `test-${Date.now()}`,
      title,
      subjectId: selectedSubject,
      subjectLabel: SUBJECT_OPTIONS.find((subject) => subject.id === selectedSubject)?.label || selectedSubject,
      chapterId: selectedChapters[0]?.id || '',
      chapterLabel: selectedChapters[0]?.label || '',
      chapterIds: selectedChapters.map((chapter) => chapter.id),
      numQuestions,
      durationMins,
      instructions,
      is_active: true,
    }

    const payload = await requestJson('/api/teacher/assigned-tests', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ test: newTest }) }, { test: newTest })
    setAssignedTests((current) => [payload.test || newTest, ...current])
  }

  const toggleActive = async (testId) => {
    const payload = await requestJson('/api/teacher/assigned-tests', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: testId }) }, { test: null })
    if (payload?.test) {
      setAssignedTests((current) => current.map((test) => (test.id === testId ? payload.test : test)))
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
    const payload = await requestJson('/api/teacher/assigned-tests/results', { method: 'GET', headers: { 'Content-Type': 'application/json' } }, { submissions: DEMO_SUBMISSIONS.filter((submission) => submission.testId === testId) })
    setSubmissions(payload.submissions || [])
  }

  return (
    <div className="space-y-4">
      <div className="card p-4">
        <h3 className="font-semibold text-ink">Create assigned test</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          {SUBJECT_OPTIONS.map((subject) => (
            <button key={subject.id} type="button" onClick={() => setSelectedSubject(subject.id)} className={`rounded-lg border border-line px-3 py-2 text-left ${selectedSubject === subject.id ? 'bg-brand text-white' : 'bg-canvas text-ink'}`}>
              {subject.icon} {subject.label}
            </button>
          ))}
        </div>
        <div className="mt-3 space-y-2">
          {SUBJECT_OPTIONS.find((subject) => subject.id === selectedSubject)?.chapters.map((chapter) => (
            <label key={chapter.id} className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={selectedChapters.some((entry) => entry.id === chapter.id)} onChange={() => toggleChapter(chapter)} />
              {chapter.label}
            </label>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
          <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title" className="border border-line rounded-lg px-3 py-2" />
          <input value={numQuestions} onChange={(event) => setNumQuestions(Number(event.target.value))} type="number" placeholder="Questions" className="border border-line rounded-lg px-3 py-2" />
          <input value={durationMins} onChange={(event) => setDurationMins(Number(event.target.value))} type="number" placeholder="Duration" className="border border-line rounded-lg px-3 py-2" />
          <textarea value={instructions} onChange={(event) => setInstructions(event.target.value)} placeholder="Instructions" className="md:col-span-2 border border-line rounded-lg px-3 py-2" />
          <button type="submit" className="md:col-span-2 rounded-lg bg-brand px-3 py-2 text-white">Assign test</button>
        </form>
        {error ? <div className="text-sm text-red-600 mt-2">{error}</div> : null}
      </div>

      <div className="card p-4 space-y-3">
        <h3 className="font-semibold text-ink">Assigned tests</h3>
        {assignedTests.map((test) => (
          <div key={test.id} className="rounded-lg border border-line p-3 text-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{test.title}</div>
                <div className="text-muted">{test.subjectLabel} • {test.chapterLabel}</div>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => toggleActive(test.id)} className="rounded-lg border border-line px-3 py-1">{test.is_active ? 'Pause' : 'Resume'}</button>
                <button type="button" onClick={() => deleteTest(test.id)} className="rounded-lg border border-line px-3 py-1">Delete</button>
                <button type="button" onClick={() => viewResults(test.id)} className="rounded-lg bg-brand px-3 py-1 text-white">View results</button>
              </div>
            </div>
            {viewingResultsId === test.id ? (
              <div className="mt-3 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-muted">
                      <th className="pb-2">Student</th>
                      <th className="pb-2">Score</th>
                      <th className="pb-2">Accuracy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((submission) => (
                      <tr key={submission.id} className="border-t border-line">
                        <td className="py-2">{submission.studentName}</td>
                        <td className="py-2">{submission.score}/{submission.total}</td>
                        <td className="py-2">{submission.accuracy}%</td>
                      </tr>
                    ))}
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
  const [activeSubject, setActiveSubject] = useState('all')
  const [query, setQuery] = useState('')
  const [expandedEmail, setExpandedEmail] = useState('')
  const [entries, setEntries] = useState([])

  useEffect(() => {
    let active = true
    const load = async () => {
      await delay()
      const payload = await requestJson(`/api/teacher/leaderboard?mode=${mode}&subject=${activeSubject}`, { method: 'GET' }, null)
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
    }

    load()
    return () => {
      active = false
    }
  }, [activeSubject, mode, students])

  const filteredEntries = useMemo(() => {
    const lowerQuery = query.toLowerCase()
    return entries.filter((entry) => `${entry.name} ${entry.email}`.toLowerCase().includes(lowerQuery))
  }, [entries, query])

  const sortedEntries = useMemo(() => [...filteredEntries].sort((a, b) => b.accuracy - a.accuracy), [filteredEntries])
  const podium = sortedEntries.slice(0, 3)

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button type="button" onClick={() => setMode('exam')} className={`rounded-lg px-3 py-2 ${mode === 'exam' ? 'bg-brand text-white' : 'bg-canvas text-ink'}`}>Exam leaderboard</button>
        <button type="button" onClick={() => setMode('mock')} className={`rounded-lg px-3 py-2 ${mode === 'mock' ? 'bg-brand text-white' : 'bg-canvas text-ink'}`}>Mock leaderboard</button>
      </div>

      {mode === 'mock' ? (
        <div className="flex gap-2">
          {['all', ...SUBJECT_OPTIONS.map((subject) => subject.id)].map((subjectId) => (
            <button key={subjectId} type="button" onClick={() => setActiveSubject(subjectId)} className={`rounded-lg px-3 py-2 ${activeSubject === subjectId ? 'bg-brand text-white' : 'bg-canvas text-ink'}`}>
              {subjectId === 'all' ? 'All' : SUBJECT_OPTIONS.find((subject) => subject.id === subjectId)?.label}
            </button>
          ))}
        </div>
      ) : null}

      <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search student" className="border border-line rounded-lg px-3 py-2" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {podium.map((entry, index) => (
          <div key={entry.email} className="card p-4">
            <div className="text-muted">#{index + 1}</div>
            <div className="font-semibold">{entry.name}</div>
            <div className="text-sm text-muted">{entry.accuracy}%</div>
          </div>
        ))}
      </div>

      <div className="card p-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-muted">
              <th className="pb-2">Name</th>
              <th className="pb-2">Accuracy</th>
              <th className="pb-2">Attempts</th>
            </tr>
          </thead>
          <tbody>
            {sortedEntries.map((entry) => (
              <Fragment key={entry.email}>
                <tr className="border-t border-line" onClick={() => setExpandedEmail((current) => (current === entry.email ? '' : entry.email))}>
                  <td className="py-2">{entry.name}</td>
                  <td className="py-2">{entry.accuracy}%</td>
                  <td className="py-2">{entry.attempts}</td>
                </tr>
                {expandedEmail === entry.email ? (
                  <tr>
                    <td colSpan="3" className="py-2 text-sm text-muted">
                      {entry.subjectBreakdown.map((item) => <div key={`${item.subject}-${item.chapter}`}>{item.subject} • {item.chapter} • {item.accuracy}% ({item.tests})</div>)}
                    </td>
                  </tr>
                ) : null}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function TeacherDashboardPage() {
  const [activeTab, setActiveTab] = useState('students')
  const [students, setStudents] = useState(DEMO_STUDENTS)
  const [selectedEmail, setSelectedEmail] = useState(DEMO_STUDENTS[0].email)
  const [attendanceRecords, setAttendanceRecords] = useState(DEMO_ATTENDANCE)
  const [scheduledClasses, setScheduledClasses] = useState(DEMO_SCHEDULED_CLASSES)
  const [liveLink, setLiveLink] = useState(DEMO_LIVE_LINK)
  const [assignedTests, setAssignedTests] = useState(DEMO_ASSIGNED_TESTS)
  const [submissions, setSubmissions] = useState(DEMO_SUBMISSIONS)
  const [isAuthed, setIsAuthed] = useState(false)
  const [authChecked, setAuthChecked] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = window.localStorage.getItem('teacher_authed')
    if (stored === '1') setIsAuthed(true)
    setAuthChecked(true)
  }, [])

  useEffect(() => {
    if (!students.length) return
    if (!students.some((student) => student.email === selectedEmail)) {
      setSelectedEmail(students[0].email)
    }
  }, [selectedEmail, students])

  const summary = useMemo(() => {
    const totalTests = students.reduce((sum, student) => sum + (student.testsAttempted || 0), 0)
    const avgAccuracy = students.length ? Math.round(students.reduce((sum, student) => sum + student.avgScore, 0) / students.length) : 0
    return { totalStudents: students.length, totalTests, avgAccuracy }
  }, [students])

  const handleLogin = (event) => {
    event.preventDefault()
    const expectedPassword = process.env.NEXT_PUBLIC_TEACHER_PASSWORD || 'teacher123'
    if (password === expectedPassword) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('teacher_authed', '1')
      }
      setIsAuthed(true)
      setAuthError('')
      return
    }
    setAuthError('Incorrect password.')
  }

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('teacher_authed')
    }
    setIsAuthed(false)
    setPassword('')
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'allresults':
        return <AllResultsTab students={students} />
      case 'attendance':
        return <AttendanceTab students={students} attendanceRecords={attendanceRecords} setAttendanceRecords={setAttendanceRecords} />
      case 'schedule':
        return <ScheduleTab scheduledClasses={scheduledClasses} setScheduledClasses={setScheduledClasses} liveLink={liveLink} setLiveLink={setLiveLink} />
      case 'assigntest':
        return <AssignTestTab assignedTests={assignedTests} setAssignedTests={setAssignedTests} submissions={submissions} setSubmissions={setSubmissions} />
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
        <div className="p-6">Checking access…</div>
      </AppShell>
    )
  }

  if (!isAuthed) {
    return (
      <AppShell>
        <div className="card p-6 max-w-md mx-auto space-y-3">
          <h1 className="text-2xl font-semibold text-ink">Teacher access</h1>
          <p className="text-sm text-muted">This is a UI-only gate for scaffolding purposes and is not secure authentication.</p>
          <form onSubmit={handleLogin} className="space-y-3">
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Teacher password" className="w-full border border-line rounded-lg px-3 py-2" />
            <button type="submit" className="w-full rounded-lg bg-brand px-3 py-2 text-white">Unlock dashboard</button>
          </form>
          {authError ? <div className="text-sm text-red-600">{authError}</div> : null}
        </div>
      </AppShell>
    )
  }

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-display font-bold text-ink">Teacher Dashboard</h1>
            <p className="text-sm text-muted">Logic-first scaffolding for students, attendance, scheduling, tests, and leaderboard management.</p>
          </div>
          <button type="button" onClick={handleLogout} className="rounded-lg border border-line px-3 py-2 text-sm">Logout</button>
        </div>

        <div className="flex flex-wrap gap-2">
          {NAV_TABS.map((tab) => (
            <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={`rounded-lg px-3 py-2 text-sm ${activeTab === tab.id ? 'bg-brand text-white' : 'bg-canvas text-ink'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="card bg-brand p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-display font-bold text-white">Overview</h2>
              <p className="text-white/80">Quick stats and a single source of truth for the teacher workflow.</p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-lg bg-white/90 px-4 py-3 text-center">
                <div className="text-xs text-muted">Students</div>
                <div className="text-xl font-semibold text-ink">{summary.totalStudents}</div>
              </div>
              <div className="rounded-lg bg-white/90 px-4 py-3 text-center">
                <div className="text-xs text-muted">Tests</div>
                <div className="text-xl font-semibold text-ink">{summary.totalTests}</div>
              </div>
              <div className="rounded-lg bg-white/90 px-4 py-3 text-center">
                <div className="text-xs text-muted">Avg accuracy</div>
                <div className="text-xl font-semibold text-ink">{summary.avgAccuracy}%</div>
              </div>
            </div>
          </div>
        </div>

        {renderTab()}
      </div>
    </AppShell>
  )
}
