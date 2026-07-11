'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { PUBLIC_APP_CONFIG } from '@/lib/public-config'

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()
      if (!res.ok) {
        setError(data?.error || 'Invalid credentials. Please try again.')
        return
      }

      login(data.user)
      router.push('/dashboard')
    } catch {
      setError('Unable to log in right now. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand/10 to-violet/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="card p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">📚</div>
            <h1 className="font-display font-bold text-2xl text-ink mb-2">{PUBLIC_APP_CONFIG.appName}</h1>
            <p className="text-muted text-sm">Welcome back! Let's continue learning</p>
            <p className="text-muted text-xs mt-2">Support: {PUBLIC_APP_CONFIG.supportEmail}</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5 mb-8">
            <div>
              <label className="text-xs text-muted mb-1.5 block font-medium">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-line rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand transition-colors"
              />
            </div>

            <div>
              <label className="text-xs text-muted mb-1.5 block font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full border border-line rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand transition-colors"
              />
            </div>

            {error && (
              <div className="bg-coral/10 border border-coral/30 text-coral text-xs rounded-xl p-3 flex items-center gap-2">
                <span className="text-lg">⚠️</span>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-brand hover:bg-brand-dark transition-colors text-white text-sm font-semibold px-6 py-3 rounded-xl mt-6"
            >
              {submitting ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Don't have an account? <Link href="/register" className="text-brand font-semibold">Create account</Link>
          </p>

          <p className="text-center text-xs text-muted mt-6">
            Login is connected to PostgreSQL via DATABASE_URL
          </p>
        </div>
      </div>
    </div>
  )
}
