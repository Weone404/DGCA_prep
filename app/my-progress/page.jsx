'use client'

import { useMemo, useState, useEffect } from 'react'
import AppShell from '@/components/AppShell'
import { ProgressBar } from '@/components/UI'
import { useAppContent } from '@/lib/use-app-content'
import { useAuth } from '@/lib/auth-context'

function formatDuration(hours = 0) {
  const totalMinutes = Math.round(hours * 60)
  const h = Math.floor(totalMinutes / 60)
  const m = totalMinutes % 60
  return `${h}h ${m.toString().padStart(2, '0')}m`
}

export default function MyProgressPage() {
  const { progressSubjects: PROGRESS_SUBJECTS, user: USER } = useAppContent()
  const { user: authUser } = useAuth()
  const [testResults, setTestResults] = useState([])
  const [weeklyHours, setWeeklyHours] = useState({
    currentWeek: [],
    currentWeekTotal: 0,
    previousWeekTotal: 0,
    comparison: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!authUser?.email) {
      setLoading(false)
      return
    }

    async function fetchData() {
      try {
        const [resultsRes, studyTimeRes] = await Promise.all([
          fetch(`/api/results?email=${encodeURIComponent(authUser.email)}`, { credentials: 'include' }),
          fetch(`/api/study-time?email=${encodeURIComponent(authUser.email)}`, { credentials: 'include' }),
        ])

        if (resultsRes.ok) {
          const resultsData = await resultsRes.json()
          setTestResults(Array.isArray(resultsData) ? resultsData : [])
        }

        if (studyTimeRes.ok) {
          const studyTimeData = await studyTimeRes.json()
          setWeeklyHours(
            studyTimeData && !Array.isArray(studyTimeData)
              ? studyTimeData
              : {
                  currentWeek: [],
                  currentWeekTotal: 0,
                  previousWeekTotal: 0,
                  comparison: 0,
                }
          )
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [authUser?.email])

  const currentWeek = weeklyHours.currentWeek || []

  const max = useMemo(() => {
    if (!currentWeek || currentWeek.length === 0) return 1
    const maxVal = Math.max(...currentWeek.map((d) => d.hours || 0))
    return maxVal > 0 ? maxVal : 1
  }, [currentWeek])

  const comparison = weeklyHours.comparison || 0
  const comparisonLabel = comparison === 0
    ? 'Same as last week'
    : `${comparison > 0 ? '+' : ''}${comparison.toFixed(1)}h vs last week`

  const currentWeekLabel = formatDuration(weeklyHours.currentWeekTotal)
  const totalHours = weeklyHours.currentWeekTotal.toFixed(1)
  const avgScore = testResults.length > 0 ? Math.round(testResults.reduce((sum, r) => sum + (r.score / r.total * 100), 0) / testResults.length) : 0
  const totalTests = testResults.length

  return (
    <AppShell>
      <div>
        <h1 className="sr-only">My Progress</h1>
        <div className="grid sm:grid-cols-3 gap-6 mb-6">
        {[
          { label: 'Courses in progress', value: USER.coursesInProgress, color: 'text-violet' },
          { label: 'Courses completed', value: USER.coursesComplete, color: 'text-brand' },
          { label: 'Hours this week', value: currentWeekLabel, color: 'text-coral' },
        ].map((s) => (
          <div key={s.label} className="card p-6">
            <p className={`text-3xl font-display font-bold ${s.color}`}>{s.value}</p>
            <p className="text-sm text-muted mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
        <div className="card p-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display font-semibold text-ink">Weekly Study Hours</h2>
              <p className="mt-2 text-sm text-muted">Mon–Sun time spent across study sessions</p>
            </div>
            <div className="rounded-2xl border border-line bg-canvas px-4 py-3 text-sm">
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted">Compared to last week</p>
              <p className={`mt-2 text-lg font-semibold ${comparison >= 0 ? 'text-emerald' : 'text-coral'}`}>{comparisonLabel}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-4xl font-display font-bold text-ink">{currentWeekLabel}</p>
              <p className="text-sm text-muted mt-2">Total hours logged this week</p>
            </div>
            <div className="rounded-2xl bg-brand-light px-4 py-3 text-sm text-ink">
              <p className="font-semibold">{totalHours}h tracked</p>
              <p className="text-xs text-muted mt-1">Study time from active sessions</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-7">
            {currentWeek.map((d) => {
              const height = d.hours > 0 ? `${(d.hours / max) * 100}%` : '4%'
              return (
                <div key={d.date} className="flex flex-col items-center gap-2">
                  <div className="relative flex h-28 w-full items-end overflow-hidden rounded-3xl bg-canvas">
                    <div className="absolute bottom-0 left-0 right-0 rounded-t-3xl bg-brand transition-all" style={{ height }} />
                  </div>
                  <span className="text-xs font-semibold text-ink">{d.day}</span>
                  <span className="text-[11px] text-muted">{d.hours ? `${d.hours.toFixed(1)}h` : '—'}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="font-display font-semibold text-ink mb-6">Subject Mastery</h2>
          <div className="space-y-5">
            {PROGRESS_SUBJECTS.map((s) => (
              <div key={s.subject}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-ink font-medium">{s.subject}</span>
                  <span className="text-muted">{s.progress}%</span>
                </div>
                <ProgressBar value={s.progress} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card p-6 mt-6">
        <h2 className="font-display font-semibold text-ink mb-5">Recent Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: '👑', label: 'Top Scorer' },
            { icon: '🏆', label: '10-Day Streak' },
            { icon: '🎯', label: 'Perfect Mock' },
            { icon: '🥇', label: 'Fast Learner' },
          ].map((a) => (
            <div key={a.label} className="bg-canvas rounded-xl2 p-4 text-center">
              <div className="text-3xl mb-2">{a.icon}</div>
              <p className="text-xs font-medium text-ink">{a.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mt-6">
        {[
          { label: 'Tests Attempted', value: totalTests, color: 'text-violet' },
          { label: 'Average Score', value: `${avgScore}%`, color: 'text-brand' },
          { label: 'Total Questions', value: testResults.reduce((sum, r) => sum + r.total, 0), color: 'text-coral' },
        ].map((s) => (
          <div key={s.label} className="card p-6">
            <p className={`text-3xl font-display font-bold ${s.color}`}>{s.value}</p>
            <p className="text-sm text-muted mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {!loading && testResults.length > 0 && (
        <div className="card p-6 mt-6">
          <h2 className="font-display font-semibold text-ink mb-5">Test Results</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="text-left py-3 px-3 font-semibold text-muted">Chapter</th>
                  <th className="text-center py-3 px-3 font-semibold text-muted">Score</th>
                  <th className="text-center py-3 px-3 font-semibold text-muted">Percentage</th>
                  <th className="text-left py-3 px-3 font-semibold text-muted">Date</th>
                </tr>
              </thead>
              <tbody>
                {testResults.slice(0, 10).map((result) => (
                  <tr key={result.id} className="border-b border-line hover:bg-canvas transition-colors">
                    <td className="py-3 px-3 text-ink">{result.chapterId}</td>
                    <td className="py-3 px-3 text-center font-semibold text-ink">{result.score}/{result.total}</td>
                    <td className="py-3 px-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        (result.score / result.total * 100) >= 70 
                          ? 'bg-green-50 text-green-700' 
                          : (result.score / result.total * 100) >= 50
                          ? 'bg-yellow-50 text-yellow-700'
                          : 'bg-red-50 text-red-700'
                      }`}>
                        {Math.round(result.score / result.total * 100)}%
                      </span>
                    </td>
                    <td className="py-3 px-3 text-muted text-xs">{new Date(result.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </AppShell>
  )
}
