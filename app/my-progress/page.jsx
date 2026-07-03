'use client'

import { useMemo } from 'react'
import AppShell from '@/components/AppShell'
import { ProgressBar } from '@/components/UI'
import { PROGRESS_WEEKLY, PROGRESS_SUBJECTS, USER } from '@/lib/data'

export default function MyProgressPage() {
  const max = useMemo(() => Math.max(...PROGRESS_WEEKLY.map((d) => d.hours)), [])
  const totalHours = PROGRESS_WEEKLY.reduce((a, b) => a + b.hours, 0).toFixed(1)

  return (
    <AppShell>
      <div className="grid sm:grid-cols-3 gap-6 mb-6">
        {[
          { label: 'Courses in progress', value: USER.coursesInProgress, color: 'text-violet' },
          { label: 'Courses completed', value: USER.coursesComplete, color: 'text-brand' },
          { label: 'Hours this week', value: `${totalHours}h`, color: 'text-coral' },
        ].map((s) => (
          <div key={s.label} className="card p-6">
            <p className={`text-3xl font-display font-bold ${s.color}`}>{s.value}</p>
            <p className="text-sm text-muted mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
        <div className="card p-6">
          <h3 className="font-display font-semibold text-ink mb-6">Weekly Study Hours</h3>
          <div className="flex items-end gap-4 h-48">
            {PROGRESS_WEEKLY.map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full rounded-t-lg bg-brand-light relative" style={{ height: '100%' }}>
                  <div
                    className="absolute bottom-0 w-full rounded-t-lg bg-brand transition-all"
                    style={{ height: `${(d.hours / max) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-muted">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="font-display font-semibold text-ink mb-6">Subject Mastery</h3>
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
        <h3 className="font-display font-semibold text-ink mb-5">Recent Achievements</h3>
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
    </AppShell>
  )
}
