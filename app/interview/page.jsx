'use client'

import { useState } from 'react'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { Badge } from '@/components/UI'
import { INTERVIEWS } from '@/lib/data'

export default function InterviewPage() {
  const [session, setSession] = useState(null)
  const [recording, setRecording] = useState(false)

  return (
    <AppShell>
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {INTERVIEWS.map((i) => (
          <div key={i.id} className="card p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-coral/10 text-coral flex items-center justify-center shrink-0">
              <Icon name="mic" size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-semibold text-ink text-sm">{i.title}</h3>
              <p className="text-xs text-muted mt-1">{i.type} · {i.duration} · {i.level}</p>
            </div>
            <button onClick={() => { setSession(i); setRecording(false) }} className="bg-brand text-white text-xs font-semibold px-4 py-2 rounded-lg shrink-0">
              Start
            </button>
          </div>
        ))}
      </div>

      {session && (
        <div className="fixed inset-0 bg-ink/40 flex items-center justify-center z-50 p-4" onClick={() => setSession(null)}>
          <div className="card p-7 max-w-md w-full text-center" onClick={(e) => e.stopPropagation()}>
            <Badge tone="violet">{session.type}</Badge>
            <h3 className="font-display font-bold text-ink text-lg mt-3 mb-1">{session.title}</h3>
            <p className="text-sm text-muted mb-6">Question 1 of 5 · {session.duration}</p>

            <div className="bg-canvas rounded-xl2 p-6 mb-6">
              <p className="text-sm text-ink leading-relaxed">"Tell me about a time you solved a difficult problem under a tight deadline."</p>
            </div>

            <button
              onClick={() => setRecording((r) => !r)}
              className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-colors mb-4 ${
                recording ? 'bg-coral text-white animate-pulse' : 'bg-brand text-white'
              }`}
            >
              <Icon name="mic" size={24} />
            </button>
            <p className="text-xs text-muted mb-6">{recording ? 'Recording your answer…' : 'Tap to start recording'}</p>

            <button onClick={() => setSession(null)} className="text-sm font-semibold text-ink underline">End session</button>
          </div>
        </div>
      )}
    </AppShell>
  )
}
