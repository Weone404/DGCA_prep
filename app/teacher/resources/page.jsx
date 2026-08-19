'use client'

import { useEffect, useState } from 'react'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { useAuth } from '@/lib/auth-context'

const inputClass = 'w-full rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500'

export default function TeacherResourcesPage() {
  const { user, loading } = useAuth()
  const [teacherCookieAuthed, setTeacherCookieAuthed] = useState(false)
  const [teacherAuthChecked, setTeacherAuthChecked] = useState(false)
  const [form, setForm] = useState({ title: '', description: '', subject: '' })
  const [file, setFile] = useState(null)
  const [resources, setResources] = useState([])
  const [progress, setProgress] = useState(0)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')
  const [loggingIn, setLoggingIn] = useState(false)

  useEffect(() => {
    if (loading) return
    let active = true
    fetch('/api/teacher/login', { credentials: 'include' })
      .then((response) => response.json())
      .then((payload) => { if (active) setTeacherCookieAuthed(Boolean(payload?.authed)) })
      .catch(() => { if (active) setTeacherCookieAuthed(false) })
      .finally(() => { if (active) setTeacherAuthChecked(true) })
    return () => { active = false }
  }, [loading])

  const hasTeacherAccess = ['teacher', 'admin'].includes(user?.role) || teacherCookieAuthed

  useEffect(() => {
    if (loading || !teacherAuthChecked || !hasTeacherAccess) return
    fetch('/api/resources', { credentials: 'include' })
      .then((response) => response.json())
      .then((payload) => setResources(payload.resources || []))
      .catch(() => setError('Unable to load uploaded resources.'))
  }, [hasTeacherAccess, loading, teacherAuthChecked])

  const updateForm = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }))

  const loginTeacher = async (event) => {
    event.preventDefault()
    setLoggingIn(true)
    setError('')
    try {
      const response = await fetch('/api/teacher/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const payload = await response.json()
      if (!response.ok || !payload.success) throw new Error(payload.error || 'Invalid teacher password.')
      setTeacherCookieAuthed(true)
      setPassword('')
    } catch (loginError) {
      setError(loginError.message)
    } finally {
      setLoggingIn(false)
    }
  }

  const deleteResource = async (resource) => {
    if (!window.confirm(`Delete "${resource.title}"? This cannot be undone.`)) return
    setError('')
    setMessage('')
    try {
      const response = await fetch(`/api/resources/${resource.id}`, {
        method: 'DELETE',
        credentials: 'include',
      })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload.error || 'Unable to delete resource.')
      setResources((current) => current.filter((item) => item.id !== resource.id))
      setMessage('Resource deleted.')
    } catch (deleteError) {
      setError(deleteError.message)
    }
  }

  const submit = (event) => {
    event.preventDefault()
    setMessage('')
    setError('')
    if (!file || file.type !== 'application/pdf' || !file.name.toLowerCase().endsWith('.pdf')) {
      setError('Choose a PDF file.')
      return
    }
    if (file.size > 25 * 1024 * 1024) {
      setError('PDF files must be 25MB or smaller.')
      return
    }

    const body = new FormData()
    Object.entries(form).forEach(([key, value]) => body.append(key, value))
    body.append('file', file)
    setSaving(true)
    setProgress(0)

    const request = new XMLHttpRequest()
    request.open('POST', '/api/resources')
    request.withCredentials = true
    request.upload.onprogress = (progressEvent) => {
      if (progressEvent.lengthComputable) setProgress(Math.round((progressEvent.loaded / progressEvent.total) * 100))
    }
    request.onload = () => {
      const payload = JSON.parse(request.responseText || '{}')
      if (request.status < 200 || request.status >= 300) {
        setError(payload.error || 'Unable to upload resource.')
      } else {
        setResources((current) => [payload.resource, ...current])
        setForm({ title: '', description: '', subject: '' })
        setFile(null)
        setMessage('Resource uploaded.')
      }
      setSaving(false)
    }
    request.onerror = () => {
      setError('Upload failed. Please try again.')
      setSaving(false)
    }
    request.send(body)
  }

  if (loading || !teacherAuthChecked) return <AppShell><p className="text-sm text-muted">Checking teacher access...</p></AppShell>
  if (!hasTeacherAccess) {
    return <AppShell title="Resources"><div className="card max-w-lg p-5"><h1 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100">Teacher sign in</h1><p className="mt-1 text-sm text-muted">Sign in with the same teacher password used for the Teacher Dashboard.</p><form onSubmit={loginTeacher} className="mt-4 space-y-3"><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Teacher password" className={inputClass} required /><button type="submit" disabled={loggingIn} className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50">{loggingIn ? 'Signing in...' : 'Sign in'}</button>{error ? <p className="text-sm text-coral">{error}</p> : null}</form></div></AppShell>
  }

  return (
    <AppShell title="Resources">
      <div className="mx-auto max-w-4xl space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100">Upload notes</h1>
          <p className="mt-1 text-sm text-muted">PDF notes are stored privately and opened only in the protected viewer.</p>
        </div>
        <form onSubmit={submit} className="resource-upload-form card space-y-4 p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-900 dark:text-slate-100">Title<input name="title" value={form.title} onChange={updateForm} className={`${inputClass} mt-1`} required /></label>
            <label className="text-sm font-medium text-slate-900 dark:text-slate-100">Subject<input name="subject" value={form.subject} onChange={updateForm} className={`${inputClass} mt-1`} required /></label>
          </div>
          <label className="block text-sm font-medium text-slate-900 dark:text-slate-100">Description<textarea name="description" value={form.description} onChange={updateForm} className={`${inputClass} mt-1 min-h-24`} /></label>
          <label className="block text-sm font-medium text-slate-900 dark:text-slate-100">PDF file<input type="file" accept="application/pdf,.pdf" onChange={(event) => setFile(event.target.files?.[0] || null)} className={`${inputClass} mt-1`} required /></label>
          {saving ? <div className="h-2 overflow-hidden rounded-full bg-canvas"><div className="h-full bg-brand transition-all" style={{ width: `${progress}%` }} /></div> : null}
          {error ? <p className="text-sm text-coral">{error}</p> : null}
          {message ? <p className="text-sm text-emerald-600">{message}</p> : null}
          <button type="submit" disabled={saving} className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50"><Icon name="upload" size={16} />{saving ? `Uploading ${progress}%` : 'Upload PDF'}</button>
        </form>
        <div className="grid gap-3 sm:grid-cols-2">
          {resources.map((resource) => <div key={resource.id} className="card flex items-center justify-between gap-3 p-4"><div className="min-w-0"><p className="truncate font-semibold text-slate-900 dark:text-slate-100">{resource.title}</p><p className="mt-1 text-xs text-muted">{resource.subject}</p></div><button type="button" onClick={() => deleteResource(resource)} className="shrink-0 rounded-lg border border-coral/40 px-3 py-2 text-xs font-semibold text-coral hover:bg-coral/10">Delete</button></div>)}
        </div>
      </div>
    </AppShell>
  )
}