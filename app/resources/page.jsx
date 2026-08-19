'use client'

import { useEffect, useMemo, useState } from 'react'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { Badge } from '@/components/UI'
import ResourceViewer from '@/components/ResourceViewer'
import { useAuth } from '@/lib/auth-context'

export default function ResourcesPage() {
  const { user, loading } = useAuth()
  const [resources, setResources] = useState([])
  const [subject, setSubject] = useState('All')
  const [query, setQuery] = useState('')
  const [selectedResource, setSelectedResource] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (loading) return
    fetch('/api/resources', { credentials: 'include' })
      .then(async (response) => {
        const payload = await response.json()
        if (!response.ok) throw new Error(payload.error || 'Unable to load resources.')
        setResources(payload.resources || [])
      })
      .catch((requestError) => setError(requestError.message))
  }, [loading])

  const subjects = useMemo(() => ['All', ...new Set(resources.map((resource) => resource.subject).filter(Boolean))], [resources])

  const list = useMemo(() => {
    return resources.filter((resource) => {
      const bySubject = subject === 'All' || resource.subject === subject
      const byQuery = resource.title.toLowerCase().includes(query.toLowerCase())
      return bySubject && byQuery
    })
  }, [resources, subject, query])

  return (
    <AppShell>
      <div>
        <h1 className="sr-only">Resources</h1>
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
          {subjects.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>

      {error ? <p className="mb-4 text-sm text-coral">{error}</p> : null}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {list.map((r) => (
          <button type="button" key={r.id} onClick={() => setSelectedResource(r)} className="card p-5 flex items-center gap-4 text-left hover:border-brand/40">
            <div className="w-12 h-12 rounded-xl bg-violet/10 text-violet flex items-center justify-center shrink-0">
              <Icon name="file" size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-ink truncate">{r.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge tone="muted">{r.subject}</Badge>
                <span className="text-xs text-muted">View note</span>
              </div>
            </div>
            <Icon name="arrow-right" size={16} className="text-muted" />
          </button>
        ))}
        {!loading && list.length === 0 && !error && <p className="text-sm text-muted">No resources match your search.</p>}
      </div>
      {selectedResource ? <ResourceViewer resource={selectedResource} user={user} onClose={() => setSelectedResource(null)} /> : null}
    </div>
    </AppShell>
  )
}
