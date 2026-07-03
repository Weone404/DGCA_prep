'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import Icon from '@/components/Icon'

const SAMPLE_USERS = [
  {
    name: 'Puja',
    email: 'puja@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Puja',
    role: 'VIP',
    coursesInProgress: 5,
    coursesComplete: 12,
  },
  {
    name: 'Aman',
    email: 'aman@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aman',
    role: 'Premium',
    coursesInProgress: 3,
    coursesComplete: 8,
  },
  {
    name: 'Martin Nel',
    email: 'martin@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    role: 'VIP',
    coursesInProgress: 8,
    coursesComplete: 23,
  },
]

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [selectedUser, setSelectedUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleQuickLogin = (user) => {
    login(user)
    router.push('/dashboard')
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    // Find user by email
    const user = SAMPLE_USERS.find((u) => u.email === email)

    if (!user) {
      setError('User not found. Please select from the quick login options.')
      return
    }

    if (password.length < 3) {
      setError('Invalid credentials. Please try again.')
      return
    }

    login(user)
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand/10 to-violet/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="card p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">📚</div>
            <h1 className="font-display font-bold text-2xl text-ink mb-2">WeOne aviation</h1>
            <p className="text-muted text-sm">Welcome back! Let's continue learning</p>
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
              className="w-full bg-brand hover:bg-brand-dark transition-colors text-white text-sm font-semibold px-6 py-3 rounded-xl mt-6"
            >
              Sign In
            </button>
          </form>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-line" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white text-muted">OR</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs text-muted text-center font-medium mb-4">Quick Login</p>
            {SAMPLE_USERS.map((user) => (
              <button
                key={user.email}
                onClick={() => handleQuickLogin(user)}
                className="w-full flex items-center gap-3 bg-canvas hover:bg-canvas/80 transition-colors border border-line rounded-xl p-3"
              >
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold text-ink">{user.name}</p>
                  <p className="text-xs text-muted">{user.email}</p>
                </div>
                <Icon name="arrow-right" size={16} className="text-muted" />
              </button>
            ))}
          </div>

          <p className="text-center text-xs text-muted mt-8">
            Demo app • All users can log in with any password
          </p>
        </div>
      </div>
    </div>
  )
}
