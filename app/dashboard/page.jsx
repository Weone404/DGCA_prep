'use client'

import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { ProgressBar, Badge } from '@/components/UI'
import { useMemo, useState, useEffect, useCallback } from 'react'
import { useAuth } from '@/lib/auth-context'
import { useAppContent } from '@/lib/use-app-content'

const TODAY = new Date(2020, 5, 28) // June 28, 2020 — fixed "today" reference for the demo calendar

const COURSES = [
  { id: 1, name: 'Air Regulations', instructor: '', progress: 25, rating: 4.3, icon: '', color: '#FF6B6B' },
  { id: 2, name: 'Meteorology', instructor: '', progress: 25, rating: 4.3, icon: '', color: '#4ECDC4' },
  { id: 3, name: 'Navigation', instructor: '', progress: 25, rating: 4.3, icon: '', color: '#95E1D3' },
  { id: 4, name: 'Technical', instructor: '', progress: 25, rating: 4.3, icon: '', color: '#F38181' },
  { id: 5, name: 'General Radio Telephony', instructor: '', progress: 25, rating: 4.3, icon: '', color: '#AA96DA' },
]

// Shared classes so every interactive control gets the same smooth, accessible feel
const focusRing = 'outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-1'
const pressable = `${focusRing} transition-colors duration-200 motion-safe:active:scale-[0.98]`

export default function DashboardPage() {
  const {
    subjects: SUBJECTS,
    liveClasses: LIVE_CLASSES,
    resources: RESOURCES,
    subjectTests: SUBJECT_TESTS,
    classTests: CLASS_TESTS_DATA,
    lecturesArray: LECTURES_ARRAY,
    mockTests: MOCK_TESTS,
  } = useAppContent()
  const [timeRange, setTimeRange] = useState('Today')
  const [activityRange, setActivityRange] = useState('Weekly')
  const [studentData, setStudentData] = useState(null)
  const [isLoadingStats, setIsLoadingStats] = useState(true)
  const [hoveredBar, setHoveredBar] = useState(null)
  const { user } = useAuth()
  const todayClass = LIVE_CLASSES.find((c) => c.status === 'live')
  const [currentDate, setCurrentDate] = useState(TODAY)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const res = await fetch('/api/students', {
          credentials: 'include',
        })
        if (!mounted) return
        const data = await res.json()
        const first = Array.isArray(data) ? data[0] : data
        setStudentData(first)
      } catch (err) {
        // ignore — fall back to locally computed stats
      } finally {
        if (mounted) setIsLoadingStats(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  const parseDuration = (duration) => {
    const parsed = parseInt(duration, 10)
    return Number.isNaN(parsed) ? 0 : parsed
  }

  const formatDuration = (minutes) => {
    if (!Number.isFinite(minutes) || minutes <= 0) return '0m'
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
  }

  // Real, per-category study minutes derived from the user's actual lecture/test progress.
  // This replaces the old hardcoded demo numbers and feeds bo
  // th the summary text and the activity chart.
  const rawBreakdown = useMemo(() => {
    const lecture = LECTURES_ARRAY.reduce(
      (sum, lecture) => sum + parseDuration(lecture.duration) * ((lecture.watched ?? 0) / 100),
      0,
    )
    const subjectTest = SUBJECT_TESTS.filter((test) => test.attempted).reduce(
      (sum, test) => sum + test.duration,
      0,
    )
    const mockTest = MOCK_TESTS.filter((test) => test.attempts > 0).reduce(
      (sum, test) => sum + test.duration * test.attempts,
      0,
    )
    return { lecture, subjectTest, mockTest }
  }, [LECTURES_ARRAY, SUBJECT_TESTS, MOCK_TESTS])

  const manualStudyMinutes = useMemo(
    () => Math.round(rawBreakdown.lecture + rawBreakdown.subjectTest + rawBreakdown.mockTest),
    [rawBreakdown],
  )

  // Video = lectures; Assignment = subject tests + mock tests
  const videoMinutes = useMemo(() => Math.round(rawBreakdown.lecture), [rawBreakdown])
  const assignmentMinutes = useMemo(() => Math.round(rawBreakdown.subjectTest + rawBreakdown.mockTest), [rawBreakdown])
  const donutTotal = Math.max(1, videoMinutes + assignmentMinutes)
  const segVideo = (videoMinutes / donutTotal) * 100
  const segAssignment = (assignmentMinutes / donutTotal) * 100

  const activeStudyMinutes = useMemo(() => {
    if (timeRange === 'Today') {
      return studentData?.time_spent_today_minutes ?? studentData?.time_spent_minutes ?? manualStudyMinutes
    }
    return studentData?.time_spent_weekly_minutes ?? studentData?.time_spent_minutes ?? manualStudyMinutes
  }, [timeRange, studentData, manualStudyMinutes])

  const upcomingClassTests = useMemo(
    () => (CLASS_TESTS_DATA || []).filter((test) => test.status === 'upcoming').slice(0, 3),
    [CLASS_TESTS_DATA],
  )

  // My Activity: real breakdown by category (lectures watched, subject tests attempted, mock tests attempted).
  // The *shape* (relative split between categories) always comes from the user's actual content progress.
  // The *scale* (total minutes) uses the backend's period total when available (weekly/monthly), so switching
  // the selector reflects real numbers rather than a static demo curve.
  const activityChartData = useMemo(() => {
    const { lecture, subjectTest, mockTest } = rawBreakdown
    const rawTotal = lecture + subjectTest + mockTest

    const apiTotal =
      activityRange === 'Weekly'
        ? studentData?.time_spent_weekly_minutes ?? studentData?.time_spent_minutes
        : studentData?.time_spent_monthly_minutes ??
          (studentData?.time_spent_weekly_minutes != null ? studentData.time_spent_weekly_minutes * 4 : undefined)

    const total = apiTotal ?? rawTotal
    const scale = rawTotal > 0 ? total / rawTotal : 0

    return [
      { key: 'lectures', label: 'Lectures', minutes: Math.round(lecture * scale), color: '#43B7E9' },
      { key: 'subjectTests', label: 'Subject Tests', minutes: Math.round(subjectTest * scale), color: '#FF8B6B' },
      { key: 'mockTests', label: 'Mock Tests', minutes: Math.round(mockTest * scale), color: '#AA96DA' },
    ]
  }, [rawBreakdown, activityRange, studentData])

  const activityMax = Math.max(1, ...activityChartData.map((d) => d.minutes))
  const hasActivity = activityChartData.some((d) => d.minutes > 0)

  const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay()

  const calendarDays = useMemo(
    () => Array.from({ length: daysInMonth(currentDate) }, (_, i) => i + 1),
    [currentDate],
  )
  const emptyDays = useMemo(
    () => Array.from({ length: firstDayOfMonth(currentDate) }, (_, i) => null),
    [currentDate],
  )

  const isCurrentMonth =
    currentDate.getMonth() === TODAY.getMonth() && currentDate.getFullYear() === TODAY.getFullYear()

  const goToPrevMonth = useCallback(() => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
  }, [])

  const goToNextMonth = useCallback(() => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
  }, [])

  return (
    <AppShell>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-5 sm:gap-6 lg:gap-8 pb-8">
        <div className="space-y-5 sm:space-y-6 lg:space-y-8 min-w-0">
          {/* Hero */}
          <div className="text-ink text-2xl sm:text-3xl font-display font-bold mb-3">
            <div className="relative z-10 max-w-md">
              <h2 className="text-ink text-2xl sm:text-3xl font-display font-bold mb-3">
                Hi {user ? user.name.split(' ')[0] : 'there'}!
              </h2>
              {isLoadingStats ? (
                <div className="h-4 w-56 max-w-full rounded-full bg-white/20 motion-safe:animate-pulse" />
              ) : (
                <p className="text-ink/80 text-sm leading-relaxed transition-opacity duration-300">
                  {studentData
                    ? `You've spent ${formatDuration(activeStudyMinutes)} on the site ${timeRange === 'Today' ? 'today' : 'this week'}. Keep going!`
                    : 'Track your learning time across tests, lectures, and mock practice.'}
                </p>
              )}
              <button
                type="button"
                className={`mt-5 bg-white text-brand font-semibold text-sm px-5 sm:px-6 py-2.5 rounded-xl hover:bg-white/90 ${pressable}`}
              >
                Resume Learning
              </button>
            </div>
            <div className="hidden sm:block absolute right-8 top-0 text-9xl opacity-10 select-none pointer-events-none">
              📚
            </div>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f70674e90?w=300&h=300&fit=crop"
              alt=""
              loading="lazy"
              className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48 object-cover opacity-20 rounded-2xl pointer-events-none"
            />
          </div>

          {/* stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="card p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4 gap-2">
                <h3 className="font-display font-semibold text-ink">Learning Time</h3>
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className={`text-xs text-muted bg-canvas rounded-lg px-2 py-1 border border-line hover:border-ink/20 ${pressable}`}
                >
                  <option>Today</option>
                  <option>This Week</option>
                </select>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0">
                  <svg viewBox="0 0 36 36" className="w-24 h-24 sm:w-28 sm:h-28 -rotate-90">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#EDF0F4" strokeWidth="3.5" />
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="#43B7E9"
                      strokeWidth="3.5"
                      strokeDasharray={`${segVideo} ${100 - segVideo}`}
                      strokeDashoffset="0"
                      strokeLinecap="round"
                      pathLength="100"
                      className="motion-safe:transition-[stroke-dasharray] duration-500"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="#FF8B6B"
                      strokeWidth="3.5"
                      strokeDasharray={`${segAssignment} ${100 - segAssignment}`}
                      strokeDashoffset={`-${segVideo}`}
                      strokeLinecap="round"
                      pathLength="100"
                      className="motion-safe:transition-[stroke-dasharray] duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-ink text-sm text-center px-2">
                    {isLoadingStats ? (
                      <span className="w-10 h-3 rounded-full bg-line motion-safe:animate-pulse" />
                    ) : (
                      formatDuration(videoMinutes + assignmentMinutes)
                    )}
                  </div>
                </div>
                <div className="space-y-2 text-xs text-muted">
                  <p className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-violet shrink-0" /> Video: {formatDuration(videoMinutes)}</p>
                  <p className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-coral shrink-0" /> Assignment: {formatDuration(assignmentMinutes)}</p>
                </div>
              </div>
            </div>

            <div className="card p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4 gap-2">
                <h3 className="font-display font-semibold text-ink">My Activity</h3>
                <select
                  value={activityRange}
                  onChange={(e) => setActivityRange(e.target.value)}
                  className={`text-xs text-muted bg-canvas rounded-lg px-2 py-1 border border-line hover:border-ink/20 ${pressable}`}
                >
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>

              {isLoadingStats ? (
                <div className="h-28 flex items-end gap-4 px-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex-1 h-16 rounded-t-lg bg-line motion-safe:animate-pulse" />
                  ))}
                </div>
              ) : !hasActivity ? (
                <div className="h-28 flex flex-col items-center justify-center text-center gap-1">
                  <p className="text-xs text-muted">No activity yet</p>
                  <p className="text-[11px] text-muted/70">Watch a lecture or attempt a test to see it here.</p>
                </div>
              ) : (
                <div className="h-28 flex items-end justify-between gap-4 px-1">
                  {activityChartData.map((d) => {
                    const heightPct = Math.max(4, (d.minutes / activityMax) * 100)
                    return (
                      <div
                        key={d.key}
                        className="flex-1 h-full flex flex-col items-center justify-end gap-1.5 cursor-default"
                        onMouseEnter={() => setHoveredBar(d.key)}
                        onMouseLeave={() => setHoveredBar((k) => (k === d.key ? null : k))}
                      >
                        <span
                          className={`text-[10px] font-semibold text-ink transition-opacity duration-150 ${
                            hoveredBar === d.key ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          {formatDuration(d.minutes)}
                        </span>
                        <div
                          title={`${d.label}: ${formatDuration(d.minutes)}`}
                          style={{ height: `${heightPct}%`, background: d.color }}
                          className="w-full max-w-[28px] rounded-t-lg motion-safe:transition-[height] duration-500"
                        />
                      </div>
                    )
                  })}
                </div>
              )}

              <div className="flex justify-between text-[10px] text-muted mt-2 px-1">
                {activityChartData.map((d) => (
                  <span key={d.key} className="flex-1 text-center truncate">
                    {d.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* My Courses */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <h3 className="font-display font-semibold text-ink text-lg">My Courses</h3>
              <div className="flex gap-3">
                <button type="button" className={`text-xs text-ink font-semibold hover:text-brand rounded-md px-1 ${pressable}`}>
                  All
                </button>
                <button type="button" className={`text-xs text-muted font-semibold hover:text-ink rounded-md px-1 ${pressable}`}>
                  Ongoing
                </button>
                <button type="button" className={`text-xs text-muted font-semibold hover:text-ink rounded-md px-1 ${pressable}`}>
                  Complete
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {COURSES.map((course) => (
                <div
                  key={course.id}
                  className="card p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 duration-200"
                >
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shrink-0"
                    style={{ background: course.color + '20', color: course.color }}
                  >
                    {course.icon}
                  </div>
                  <div className="flex-1 min-w-0 w-full">
                    <h4 className="font-semibold text-ink mb-1">{course.name}</h4>
                    <p className="text-xs text-muted mb-3">{course.instructor}</p>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex-1">
                        <ProgressBar value={course.progress} color={course.color} />
                      </div>
                      <span className="text-xs font-medium text-ink shrink-0">{course.progress}%</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-1">
                        <Icon name="star" size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-semibold text-ink">{course.rating}</span>
                      </div>
                      <button
                        type="button"
                        className={`text-xs font-semibold text-brand border border-brand rounded-lg px-4 py-1.5 hover:bg-brand hover:text-white ${pressable}`}
                      >
                        View Course
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right sidebar */}
        <div className="space-y-5 sm:space-y-6">
          {/* Calendar */}
          <div className="card p-5 sm:p-6">
            <div className="flex items-center justify-between mb-6 gap-2">
              <h3 className="font-display font-semibold text-ink truncate">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h3>
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={goToPrevMonth}
                  aria-label="Previous month"
                  className={`p-1 hover:bg-canvas rounded-lg ${pressable}`}
                >
                  <Icon name="chevron-down" size={16} className="text-muted -rotate-90" />
                </button>
                <button
                  type="button"
                  onClick={goToNextMonth}
                  aria-label="Next month"
                  className={`p-1 hover:bg-canvas rounded-lg ${pressable}`}
                >
                  <Icon name="chevron-down" size={16} className="text-muted rotate-90" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-xs font-semibold text-muted py-1">
                    {day}
                  </div>
                ))}

                {[...emptyDays, ...calendarDays].map((day, idx) => (
                  <button
                    type="button"
                    key={idx}
                    disabled={day === null}
                    className={`aspect-square flex items-center justify-center text-xs font-medium rounded-lg duration-200 ${focusRing} ${
                      day === null
                        ? 'cursor-default'
                        : day === 28 && isCurrentMonth
                          ? 'bg-brand text-white font-semibold transition-colors'
                          : day === 6
                            ? 'bg-coral/20 text-coral transition-colors hover:bg-coral/30'
                            : 'text-ink hover:bg-canvas transition-colors'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Task */}
          <div className="card p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold text-ink">Upcoming Task</h3>
              <a href="/class-test" className={`text-brand text-xs font-semibold rounded-md ${pressable}`}>
                See all
              </a>
            </div>
            <div className="space-y-3">
              {upcomingClassTests.length === 0 ? (
                <div className="rounded-xl border border-dashed border-line bg-canvas/70 p-3 text-sm text-muted">
                  No upcoming class tests right now.
                </div>
              ) : (
                upcomingClassTests.map((test) => (
                  <div
                    key={test.id}
                    className="flex items-center gap-3 bg-canvas rounded-xl p-3 motion-safe:transition-colors hover:bg-canvas/70"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-lg shrink-0">
                      🧪
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-ink truncate">{test.title}</p>
                      <p className="text-xs text-muted">{test.date} • {test.time}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Payment History */}
          
        </div>
      </div>
    </AppShell>
  )
}