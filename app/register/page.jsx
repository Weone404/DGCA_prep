"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import Icon from '@/components/Icon'

export default function RegisterPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [errors, setErrors] = useState([])

  const validate = () => {
    const list = []
    if (!name.trim()) list.push('Full name is required.')
    const phoneRe = /^\d{7,15}$/
    if (!phoneRe.test(mobile)) list.push('Enter a valid phone number (7–15 digits).')
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(email)) list.push('Enter a valid email address.')

    if (password.length < 8) list.push('Password must be at least 8 characters.')
    if (!/[A-Z]/.test(password)) list.push('Add at least one uppercase letter.')
    if (!/[a-z]/.test(password)) list.push('Add at least one lowercase letter.')
    if (!/[0-9]/.test(password)) list.push('Add at least one number.')
    if (!/[^A-Za-z0-9]/.test(password)) list.push('Add at least one special character.')
    if (password !== confirm) list.push('Passwords do not match.')

    return list
  }

  const handleRegister = (e) => {
    e.preventDefault()
    const list = validate()
    setErrors(list)
    if (list.length) return

    const avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`
    const user = { name, email, avatar, role: 'Student', coursesInProgress: 0, coursesComplete: 0, mobile }

    // demo: log in created user
    login(user)
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand/10 to-violet/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="card p-8 md:p-10">
          <div className="text-center mb-6">
            <div className="text-5xl mb-4">📚</div>
            <h1 className="font-display font-bold text-2xl text-ink mb-2">Create Account</h1>
            <p className="text-muted text-sm">Join WeOne aviation to start learning</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4 mb-4">
            <div>
              <label className="text-xs text-muted mb-1.5 block font-medium">Full Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" className="w-full border border-line rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand transition-colors" />
            </div>

            <div>
              <label className="text-xs text-muted mb-1.5 block font-medium">Mobile Number</label>
              <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="e.g. 9876543210" className="w-full border border-line rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand transition-colors" />
            </div>

            <div>
              <label className="text-xs text-muted mb-1.5 block font-medium">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full border border-line rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand transition-colors" />
            </div>

            <div>
              <label className="text-xs text-muted mb-1.5 block font-medium">Create Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" className="w-full border border-line rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand transition-colors" />
            </div>

            <div>
              <label className="text-xs text-muted mb-1.5 block font-medium">Confirm Password</label>
              <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Confirm password" className="w-full border border-line rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand transition-colors" />
            </div>

            {errors.length > 0 && (
              <div className="bg-coral/10 border border-coral/30 text-coral text-xs rounded-xl p-3">
                <ul className="list-inside list-disc space-y-1">
                  {errors.map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                </ul>
              </div>
            )}

            <button type="submit" className="w-full bg-brand hover:bg-brand-dark transition-colors text-white text-sm font-semibold px-6 py-3 rounded-xl mt-2">
              Begin Training →
            </button>
          </form>

          <div className="text-center text-sm mt-2">
            Already registered? <Link href="/login" className="text-brand font-semibold">Sign In</Link>
          </div>

          <p className="text-center text-xs text-muted mt-6">
            By creating an account you agree to our Terms of Service.
          </p>
        </div>
      </div>
    </div>
  )
}
