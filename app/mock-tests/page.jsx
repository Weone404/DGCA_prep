'use client'

import { useState } from 'react'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { MOCK_TESTS } from '@/lib/data'

export default function MockTestsPage() {
  const [active, setActive] = useState(null)

  return (
    <AppShell>
      <div className="grid md:grid-cols-2 gap-5">
        {MOCK_TESTS.map((m) => (
          <div key={m.id} className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-brand-light text-brand flex items-center justify-center">
                <Icon name="target" size={20} />
              </div>
              {m.bestScore != null && (
                <span className="text-sm font-display font-bold text-brand">{m.bestScore}% best</span>
              )}
            </div>
            <h3 className="font-display font-semibold text-ink mb-1">{m.title}</h3>
            <p className="text-xs text-muted mb-4">{m.questions} questions · {m.duration} min · {m.attempts} attempt{m.attempts === 1 ? '' : 's'}</p>
            <button onClick={() => setActive(m)} className="w-full bg-brand hover:bg-brand-dark transition-colors text-white text-sm font-semibold py-2.5 rounded-xl">
              {m.attempts > 0 ? 'Retake Test' : 'Start Mock Test'}
            </button>
          </div>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 bg-ink/40 flex items-center justify-center z-50 p-4" onClick={() => setActive(null)}>
          <div className="card p-7 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-display font-bold text-lg text-ink mb-1">{active.title}</h3>
            <p className="text-sm text-muted mb-5">
              {active.questions} questions, {active.duration} minutes. Once started, the timer can't be paused.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setActive(null)} className="flex-1 border border-line text-ink text-sm font-semibold py-2.5 rounded-xl">Cancel</button>
              <button onClick={() => setActive(null)} className="flex-1 bg-brand text-white text-sm font-semibold py-2.5 rounded-xl">Start Now</button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  )
}
