'use client'

import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { ProgressBar, Badge } from '@/components/UI'
import { SUBJECTS, LIVE_CLASSES, RESOURCES } from '@/lib/data'
import { useMemo, useState } from 'react'
import { useAuth } from '@/lib/auth-context'

const ACTIVITY = [3, 5, 2, 6, 4, 7, 5]
const DAYS = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']

const COURSES = [
  { id: 1, name: 'History of graphic design', instructor: '', progress: 25, rating: 4.3, icon: '📚', color: '#FFA500' },
  { id: 2, name: 'App Design Course', instructor: '', progress: 25, rating: 4.3, icon: '📱', color: '#2BC48A' },
  { id: 3, name: 'Digital painting', instructor: '', progress: 25, rating: 4.3, icon: '🎨', color: '#2BC4FF' },
]

export default function DashboardPage() {
  const [range, setRange] = useState('Weekly')
  const { user } = useAuth()
  const todayClass = LIVE_CLASSES.find((c) => c.status === 'live')
  const [currentDate] = useState(new Date(2020, 5, 28)) // June 28, 2020

  const points = useMemo(() => {
    const max = Math.max(...ACTIVITY)
    return ACTIVITY.map((v, i) => `${(i / (ACTIVITY.length - 1)) * 100},${100 - (v / max) * 80}`).join(' ')
  }, [])

  const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay()

  const calendarDays = Array.from({ length: daysInMonth(currentDate) }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDayOfMonth(currentDate) }, (_, i) => null)

  const getDayOfWeek = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    return date.toLocaleDateString('en-US', { weekday: 'short' })
  }

  return (
    <AppShell>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 pb-8">
        <div className="space-y-8 min-w-0">
          {/* Hero */}
          <div className="card relative overflow-hidden bg-brand p-8">
            <div className="relative z-10 max-w-md">
              <h2 className="text-white text-3xl font-display font-bold mb-3">Hi {user ? user.name.split(' ')[0] : 'there'}!</h2>
              <p className="text-white/85 text-sm leading-relaxed">
                You have complete 5 lesson in last day.Start your learning today.
              </p>
              <button className="mt-5 bg-white text-brand font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-white/90 transition-colors">
                Resume Learning
              </button>
            </div>
            <div className="absolute right-8 top-0 text-9xl opacity-10 select-none">📚</div>
            <img src="https://images.unsplash.com/photo-1516321318423-f06f70674e90?w=300&h=300&fit=crop" alt="" className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 object-cover opacity-20 rounded-2xl" />
          </div>

          {/* stat cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-ink">Learning Time</h3>
                <select className="text-xs text-muted bg-canvas rounded-lg px-2 py-1 outline-none border border-line">
                  <option>Today</option>
                  <option>This Week</option>
                </select>
              </div>
              <div className="flex items-center gap-6">
                <div className="relative w-28 h-28 shrink-0">
                  <svg viewBox="0 0 36 36" className="w-28 h-28 -rotate-90">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#EDF0F4" strokeWidth="3.5" />
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#2BC48A" strokeWidth="3.5" strokeDasharray="55" strokeDashoffset="0" strokeLinecap="round" pathLength="100" />
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#FF8B6B" strokeWidth="3.5" strokeDasharray="25 100" strokeDashoffset="-55" strokeLinecap="round" pathLength="100" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-ink text-sm">2h 35m</div>
                </div>
                <div className="space-y-2 text-xs text-muted">
                  <p className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand" /> Reading</p>
                  <p className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-coral" /> Writing</p>
                  <p className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-violet" /> Video</p>
                  <p className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-ink" /> Assignment</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-ink">My Activity</h3>
                <select value={range} onChange={(e) => setRange(e.target.value)} className="text-xs text-muted bg-canvas rounded-lg px-2 py-1 outline-none border border-line">
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-24">
                <polyline points={points} fill="none" stroke="#43B7E9" strokeWidth="2" />
                <circle cx="14.28" cy="66" r="1.5" fill="#43B7E9" />
                <circle cx="42.84" cy="50" r="1.5" fill="#43B7E9" />
                <circle cx="71.4" cy="34" r="1.5" fill="#43B7E9" />
              </svg>
              <div className="flex justify-between text-[10px] text-muted mt-2 px-1">
                {DAYS.map((d) => <span key={d} className="flex-1 text-center">{d}</span>)}
              </div>
            </div>
          </div>

          {/* My Courses */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-semibold text-ink text-lg">My Courses</h3>
              <div className="flex gap-3">
                <button className="text-xs text-ink font-semibold hover:text-brand">All</button>
                <button className="text-xs text-muted font-semibold hover:text-ink">Ongoing</button>
                <button className="text-xs text-muted font-semibold hover:text-ink">Complete</button>
              </div>
            </div>
            <div className="space-y-4">
              {COURSES.map((course) => (
                <div key={course.id} className="card p-6 flex items-start gap-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shrink-0"
                    style={{ background: course.color + '20', color: course.color }}
                  >
                    {course.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-ink mb-1">{course.name}</h4>
                    <p className="text-xs text-muted mb-3">{course.instructor}</p>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex-1">
                        <ProgressBar value={course.progress} color={course.color} />
                      </div>
                      <span className="text-xs font-medium text-ink">{course.progress}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Icon name="star" size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-semibold text-ink">{course.rating}</span>
                      </div>
                      <button className="text-xs font-semibold text-brand border border-brand rounded-lg px-4 py-1.5 hover:bg-brand hover:text-white transition-colors">
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
        <div className="space-y-6">
          {/* Calendar */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-semibold text-ink">
                {currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} {currentDate.toLocaleDateString('en-US', { weekday: 'long' })}
              </h3>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-canvas rounded-lg transition-colors">
                  <Icon name="chevron-down" size={16} className="text-muted -rotate-90" />
                </button>
                <button className="p-1 hover:bg-canvas rounded-lg transition-colors">
                  <Icon name="chevron-down" size={16} className="text-muted rotate-90" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-7 gap-2 text-center">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-xs font-semibold text-muted py-1">
                    {day}
                  </div>
                ))}

                {[...emptyDays, ...calendarDays].map((day, idx) => (
                  <div
                    key={idx}
                    className={`aspect-square flex items-center justify-center text-xs font-medium rounded-lg ${
                      day === null
                        ? ''
                        : day === 28
                          ? 'bg-brand text-white font-semibold'
                          : day === 6
                            ? 'bg-coral/20 text-coral'
                            : 'text-ink hover:bg-canvas'
                    } transition-colors`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Task */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold text-ink">Upcoming Task</h3>
              <a href="/class-test" className="text-brand text-xs font-semibold">See all</a>
            </div>
            <div className="space-y-3">
              {[
                { icon: '🧪', title: 'Discussion Algorithm', time: '08:00 AM – 09:00 AM' },
                { icon: '📐', title: 'Simple Home Page Design', time: '08:00 AM – 09:00 AM' },
              ].map((t) => (
                <div key={t.title} className="flex items-center gap-3 bg-canvas rounded-xl p-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-lg shrink-0">
                    {t.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{t.title}</p>
                    <p className="text-xs text-muted">{t.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment History */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold text-ink">Payment History</h3>
              <a href="#" className="text-brand text-xs font-semibold">See all</a>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Wireframe & Prototype ', price: '$120' },
                { name: 'Msc in Machine Learning:', price: '$140' },
              ].map((p) => (
                <div key={p.name} className="flex items-center justify-between py-2">
                  <span className="text-sm text-ink">{p.name}</span>
                  <span className="text-sm font-semibold text-ink">{p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
