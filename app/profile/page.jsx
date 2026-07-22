'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import StudentDocuments from '@/components/StudentDocuments'
import { useAuth } from '@/lib/auth-context'

const TABS = ['Personal Details', 'Test Results', 'Notification', 'Privacy', 'Student Documents']

export default function ProfilePage() {
  const router = useRouter()
  const { user } = useAuth()
  const [tab, setTab] = useState('Personal Details')
  const [testResults, setTestResults] = useState([])
  const [loadingResults, setLoadingResults] = useState(false)

  const FIELDS = [
    { key: 'fullName', label: 'Full Name', value: (user && user.name) || '' },
    { key: 'email', label: 'Email address', value: (user && user.email) || '' },
    { key: 'address', label: 'Address', value: (user && user.address) || '', full: true },
    { key: 'city', label: 'City', value: (user && user.city) || '' },
    { key: 'state', label: 'State/Province', value: (user && user.state) || '' },
    { key: 'zip', label: 'Zip Code', value: (user && user.zip) || '' },
    { key: 'country', label: 'Country', value: (user && user.country) || '' },
  ]

  const [form, setForm] = useState(() => Object.fromEntries(FIELDS.map((f) => [f.key, f.value])))
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setForm(Object.fromEntries(FIELDS.map((f) => [f.key, f.value])))
  }, [user])

  useEffect(() => {
    if (tab === 'Test Results' && user?.email) {
      setLoadingResults(true)
      fetch(`/api/results?email=${encodeURIComponent(user.email)}`, {
        credentials: 'include',
      })
        .then(res => res.ok ? res.json() : [])
        .then(data => {
          setTestResults(Array.isArray(data) ? data : [])
          setLoadingResults(false)
        })
        .catch(err => {
          console.error('Error fetching results:', err)
          setLoadingResults(false)
        })
    }
  }, [tab, user?.email])

  // Redirect to login if not authenticated
  if (!user) {
    return (
      <AppShell>
        <div className="flex items-center justify-center min-h-screen">
          <div className="card p-8 max-w-md w-full text-center">
            <div className="text-5xl mb-4">🔐</div>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Login Required</h2>
            <p className="text-muted text-sm mb-6">Please log in to access your profile</p>
            <button
              onClick={() => router.push('/login')}
              className="bg-brand hover:bg-brand-dark transition-colors text-white font-semibold px-6 py-3 rounded-xl w-full"
            >
              Go to Login
            </button>
          </div>
        </div>
      </AppShell>
    )
  }

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
    setSaved(false)
  }

  function save(e) {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <AppShell>
      <div className="grid lg:grid-cols-[320px_1fr] gap-6">
        {/* left summary card */}
        <div className="card p-6">
          <div className="flex flex-col items-center text-center">
            <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full object-cover mb-4" />
            <h2 className="font-display font-bold text-ink">{user.name}</h2>
            <span className="mt-1 text-xs font-semibold bg-coral/10 text-coral px-2.5 py-1 rounded-full">{user.role || 'Student'}</span>

            <div className="flex gap-8 mt-6">
              <div>
                <p className="font-display font-bold text-violet text-xl">{String(user.coursesInProgress || 0).padStart(2, '0')}</p>
                <p className="text-xs text-muted">Course in progress</p>
              </div>
              <div>
                <p className="font-display font-bold text-brand text-xl">{user.coursesComplete || 0}</p>
                <p className="text-xs text-muted">Course Complete</p>
              </div>
            </div>
          </div>

          <h3 className="font-display font-semibold text-ink mt-8 mb-4">Last Achievement</h3>
          <div className="grid grid-cols-4 gap-3">
            {['👑', '🏆', '🎯', '🥇'].map((e, i) => (
              <div key={i} className="aspect-square rounded-xl bg-canvas flex items-center justify-center text-xl">{e}</div>
            ))}
          </div>

          <h3 className="font-display font-semibold text-ink mt-8 mb-4">Support</h3>
          <div className="space-y-1">
            {[
              { icon: 'user', label: 'Become a Mentor' },
              { icon: 'shield', label: 'Support' },
              { icon: 'mail', label: 'Invite friend' },
              { icon: 'logout', label: 'Delete Account', danger: true },
            ].map((s) => (
              <button key={s.label} className={`w-full flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm hover:bg-canvas transition-colors ${s.danger ? 'text-coral' : 'text-ink'}`}>
                <Icon name={s.icon} size={16} /> {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* right settings card */}
        <div className="card p-6 sm:p-8">
          <h2 className="font-display font-bold text-xl text-ink mb-5">Profile Setting</h2>
          <div className="flex gap-6 border-b border-line mb-8 overflow-x-auto">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  tab === t ? 'border-brand text-ink' : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {tab === 'Personal Details' && (
            <form onSubmit={save}>
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <img src={user.avatar} alt="" className="w-24 h-24 rounded-full object-cover" />
                  <button type="button" className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-violet text-white flex items-center justify-center">
                    <Icon name="camera" size={14} />
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {FIELDS.map((f) => (
                  <div key={f.key} className={f.full ? 'sm:col-span-2' : ''}>
                    <label className="text-xs text-muted mb-1.5 block">{f.label}</label>
                    <input
                      value={form[f.key]}
                      onChange={(e) => update(f.key, e.target.value)}
                      className="w-full border border-line rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand transition-colors"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-7">
                <button type="submit" className="bg-brand hover:bg-brand-dark transition-colors text-white text-sm font-semibold px-6 py-3 rounded-xl">
                  Save profile
                </button>
                <button type="button" onClick={() => setForm(Object.fromEntries(FIELDS.map((f) => [f.key, f.value])))} className="border border-line text-ink text-sm font-semibold px-6 py-3 rounded-xl">
                  Cancel
                </button>
                {saved && <span className="text-brand text-sm font-medium ml-2 flex items-center gap-1"><Icon name="check" size={15} /> Saved</span>}
              </div>
            </form>
          )}

          {tab === 'Test Results' && (
            <div>
              {loadingResults ? (
                <div className="text-center py-8">
                  <p className="text-muted">Loading test results...</p>
                </div>
              ) : testResults.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted">No test results yet. Start taking tests to see your results here.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-line">
                        <th className="text-left py-3 px-3 font-semibold text-muted">Chapter</th>
                        <th className="text-center py-3 px-3 font-semibold text-muted">Subject</th>
                        <th className="text-center py-3 px-3 font-semibold text-muted">Score</th>
                        <th className="text-center py-3 px-3 font-semibold text-muted">Percentage</th>
                        <th className="text-left py-3 px-3 font-semibold text-muted">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testResults.map((result) => (
                        <tr key={result.id} className="border-b border-line hover:bg-canvas transition-colors">
                          <td className="py-3 px-3 text-ink">{result.chapterId}</td>
                          <td className="py-3 px-3 text-center text-ink">{result.subjectId}</td>
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
              )}
            </div>
          )}

          {tab === 'Notification' && (
            <div className="space-y-4 max-w-md">
              {['Email notifications', 'Live class reminders', 'New resource alerts', 'Weekly progress digest'].map((n) => (
                <label key={n} className="flex items-center justify-between bg-canvas rounded-xl px-4 py-3 cursor-pointer">
                  <span className="text-sm text-ink">{n}</span>
                  <ToggleSwitch />
                </label>
              ))}
            </div>
          )}

          {tab === 'Privacy' && (
            <div className="space-y-4 max-w-md">
              {['Make profile public', 'Show progress to mentors', 'Allow data analytics'].map((n) => (
                <label key={n} className="flex items-center justify-between bg-canvas rounded-xl px-4 py-3 cursor-pointer">
                  <span className="text-sm text-ink">{n}</span>
                  <ToggleSwitch />
                </label>
              ))}
            </div>
          )}

          {tab === 'Student Documents' && (
            <div className="space-y-4">
              <div className="rounded-3xl border border-line bg-canvas/70 p-5">
                <h3 className="font-semibold text-ink mb-3">Student Documents</h3>
                <p className="text-sm text-muted mb-4">Upload the documents below. Teachers and admins can view these documents.</p>
                <StudentDocuments />
              </div>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  )
}

function ToggleSwitch() {
  const [on, setOn] = useState(true)
  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      className={`w-10 h-6 rounded-full transition-colors relative ${on ? 'bg-brand' : 'bg-line'}`}
    >
      <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${on ? 'left-[18px]' : 'left-0.5'}`} />
    </button>
  )
}
