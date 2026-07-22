'use client'

import { useMemo, useState } from 'react'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { Badge } from '@/components/UI'
import { useAppContent } from '@/lib/use-app-content'

export default function ResourcesPage() {
  const { resources: RESOURCES, subjects: SUBJECTS } = useAppContent()
  const [subject, setSubject] = useState('All')
  const [query, setQuery] = useState('')

  const list = useMemo(() => {
    return RESOURCES.filter((r) => {
      const bySubject = subject === 'All' || r.subject === subject
      const byQuery = r.title.toLowerCase().includes(query.toLowerCase())
      return bySubject && byQuery
    })
  }, [subject, query])

  return (
    <AppShell>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-card flex-1">
          <Icon name="search" size={16} className="text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources..."
            className="bg-transparent outline-none text-sm w-full text-ink placeholder:text-muted"
          />
        </div>
        <select value={subject} onChange={(e) => setSubject(e.target.value)} className="bg-white rounded-xl px-4 py-3 shadow-card text-sm text-ink outline-none">
          {['All', ...SUBJECTS.map((s) => s.name), 'General'].map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {list.map((r) => (
          <div key={r.id} className="card p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet/10 text-violet flex items-center justify-center shrink-0">
              <Icon name="file" size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-ink truncate">{r.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge tone="muted">{r.type}</Badge>
                <span className="text-xs text-muted">{r.size}</span>
              </div>
            </div>
            <button className="w-9 h-9 rounded-lg bg-canvas text-ink hover:bg-brand hover:text-white transition-colors flex items-center justify-center shrink-0">
              <Icon name="download" size={16} />
            </button>
          </div>
        ))}
        {list.length === 0 && <p className="text-sm text-muted">No resources match your search.</p>}
      </div>
    </AppShell>
  )
}
