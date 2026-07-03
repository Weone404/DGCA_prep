'use client'

import { useState } from 'react'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { Badge } from '@/components/UI'
import { CLASS_TESTS } from '@/lib/data'

export default function ClassTestPage() {
  const [tab, setTab] = useState('upcoming')
  const list = CLASS_TESTS.filter((t) => t.status === tab)

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

      <div className="grid lg:grid-cols-2 gap-5">
        {list.map((t) => (
          <div key={t.id} className="card p-5 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-violet/10 text-violet flex flex-col items-center justify-center shrink-0">
              <span className="text-xs font-semibold leading-none">{t.date.split(' ')[1]}</span>
              <span className="text-[10px] uppercase">{t.date.split(' ')[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display font-semibold text-ink text-sm truncate">{t.title}</h3>
                <Badge tone="muted">{t.class}</Badge>
              </div>
              <p className="text-xs text-muted flex items-center gap-3">
                <span className="flex items-center gap-1"><Icon name="clock" size={13} /> {t.time}</span>
                <span>{t.questions} questions</span>
              </p>
            </div>
            {t.status === 'upcoming' ? (
              <button className="bg-brand text-white text-xs font-semibold px-4 py-2 rounded-lg shrink-0">Set Reminder</button>
            ) : (
              <div className="text-right shrink-0">
                <p className="font-display font-bold text-brand">{t.score}%</p>
                <p className="text-[10px] text-muted">Score</p>
              </div>
            )}
          </div>
        ))}
        {list.length === 0 && <p className="text-sm text-muted">No {tab} tests.</p>}
      </div>
    </AppShell>
  )
}
