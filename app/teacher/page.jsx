"use client"

import AppShell from '@/components/AppShell'
import { useEffect, useState } from 'react'
import Icon from '@/components/Icon'

const NAV_TABS = [
  { id: 'students', label: 'Students' },
  { id: 'allresults', label: 'All Results' },
  { id: 'attendance', label: 'Attendance' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'assigntest', label: 'Assign Test' },
  { id: 'manage', label: 'Manage Students' },
  { id: 'leaderboard', label: 'Leaderboard' },
]

export default function TeacherDashboardPage() {
  const [activeTab, setActiveTab] = useState('students')
  const [students, setStudents] = useState([])
  const [selectedEmail, setSelectedEmail] = useState(null)
  const [summary, setSummary] = useState({ totalStudents: 0, totalTests: 0, avgAccuracy: 0 })

  useEffect(() => {
    // Lightweight UI-only scaffolding. Later we'll wire /api/teacher endpoints.
    const mock = [
      { name: 'Jaydeep Singh', email: 'kotwaljaydeep369@gmail.com', phone: '916006951508', joinedAt: '2026-06-24', testsAttempted: 0, avgScore: 0, bestScore: 0, totalQuestions: 0, results: [] },
      { name: 'Bhavya', email: 'aviator.bhavya@gmail.com', phone: '9988776655', joinedAt: '2026-05-02', testsAttempted: 4, avgScore: 85, bestScore: 88, totalQuestions: 120, results: [] },
    ]
    setStudents(mock)
    setSelectedEmail(mock[0].email)
    setSummary({ totalStudents: mock.length, totalTests: 12, avgAccuracy: 72 })
  }, [])

  const selectedStudent = students.find((s) => s.email === selectedEmail)

  return (
    <AppShell>
      <div className="space-y-6">
        {/* top nav */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-display font-bold text-ink">Teacher Dashboard</h1>
            <p className="text-muted text-sm">Manage students, tests, attendance and live classes.</p>
          </div>
          <div className="flex gap-2">
            {NAV_TABS.map((t) => (
              <button key={t.id} onClick={() => setActiveTab(t.id)} className={`px-3 py-2 rounded-lg text-sm font-semibold ${activeTab === t.id ? 'bg-brand text-white' : 'bg-canvas text-ink border border-line'}`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* hero stats */}
        <div className="card bg-brand p-6 flex items-center justify-between gap-6">
          <div>
            <h2 className="text-white text-2xl font-display font-bold">All Students & Test Performance</h2>
            <p className="text-white/85 mt-1">Live summary and quick actions.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white/90 rounded-xl px-6 py-4 text-center">
              <div className="text-sm text-muted">Students</div>
              <div className="text-2xl font-bold text-ink">{summary.totalStudents}</div>
            </div>
            <div className="bg-white/90 rounded-xl px-6 py-4 text-center">
              <div className="text-sm text-muted">Total Tests</div>
              <div className="text-2xl font-bold text-ink">{summary.totalTests}</div>
            </div>
            <div className="bg-white/90 rounded-xl px-6 py-4 text-center">
              <div className="text-sm text-muted">Avg Accuracy</div>
              <div className="text-2xl font-bold text-ink">{summary.avgAccuracy}%</div>
            </div>
          </div>
        </div>

        {/* main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          <div className="space-y-6">
            {/* Students list panel */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-ink">Students</h3>
                <div className="text-sm text-muted">{students.length} records</div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-muted">
                      <th className="pb-3">Name</th>
                      <th className="pb-3">Email</th>
                      <th className="pb-3">Tests</th>
                      <th className="pb-3">Avg</th>
                      <th className="pb-3">Best</th>
                      <th className="pb-3" />
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((s, i) => (
                      <tr key={s.email} className={`border-t border-line hover:bg-canvas ${selectedEmail === s.email ? 'bg-brand/5' : ''}`} onClick={() => setSelectedEmail(s.email)}>
                        <td className="py-3">{s.name}</td>
                        <td className="py-3 text-muted">{s.email}</td>
                        <td className="py-3">{s.testsAttempted}</td>
                        <td className="py-3 text-ink">{s.avgScore}%</td>
                        <td className="py-3 text-ink">{s.bestScore}%</td>
                        <td className="py-3"><button className="text-xs bg-canvas px-3 py-1 rounded-lg">View</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Results / other placeholder panels depending on tab */}
            <div className="card p-6">
              <h3 className="font-display font-semibold text-ink mb-3">Recent Results</h3>
              <div className="text-sm text-muted">This area will show recent results and allow filters. Implementation will follow your reference structure.</div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="card p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-sm text-muted">Student Details</div>
                  <div className="font-semibold text-ink">{selectedStudent?.name || 'Select a student'}</div>
                </div>
                <div className="text-sm text-muted">{selectedStudent?.email}</div>
              </div>

              {selectedStudent ? (
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-canvas rounded-lg">
                      <div className="text-muted text-xs">Joined</div>
                      <div className="font-semibold">{new Date(selectedStudent.joinedAt).toLocaleDateString()}</div>
                    </div>
                    <div className="p-3 bg-canvas rounded-lg">
                      <div className="text-muted text-xs">Total Questions</div>
                      <div className="font-semibold">{selectedStudent.totalQuestions}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-canvas rounded-lg text-center">
                      <div className="text-muted text-xs">Tests</div>
                      <div className="font-semibold">{selectedStudent.testsAttempted}</div>
                    </div>
                    <div className="p-3 bg-canvas rounded-lg text-center">
                      <div className="text-muted text-xs">Avg Score</div>
                      <div className="font-semibold">{selectedStudent.avgScore}%</div>
                    </div>
                    <div className="p-3 bg-canvas rounded-lg text-center">
                      <div className="text-muted text-xs">Best</div>
                      <div className="font-semibold">{selectedStudent.bestScore}%</div>
                    </div>
                  </div>

                  <div className="mt-2">
                    <button className="w-full px-4 py-2 bg-brand text-white rounded-lg">Message Student</button>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-muted">No student selected.</div>
              )}
            </div>

            <div className="card p-6">
              <h4 className="font-semibold text-ink mb-3">Quick Actions</h4>
              <div className="flex flex-col gap-2">
                <button className="px-4 py-2 bg-brand text-white rounded-lg flex items-center justify-center gap-2"><Icon name="plus" /> Create Class</button>
                <button className="px-4 py-2 bg-canvas text-ink rounded-lg">Assign Test</button>
                <button className="px-4 py-2 bg-canvas text-ink rounded-lg">Manage Students</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </AppShell>
  )
}
