'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'

export default function Home() {
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (user) router.replace('/dashboard')
  }, [router, user])

  if (user) return null

  return (
    <main className="min-h-screen bg-canvas px-6 py-16 text-ink">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">We One Aviation</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          DGCA Exam Preparation - Live Classes, Mock Tests &amp; Study Resources
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Build your aviation career with focused ground training, practice and study support.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/register" prefetch={false} className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white">
            Create account
          </Link>
          <Link href="/about-dgca" prefetch={false} className="rounded-xl border border-line px-5 py-3 text-sm font-semibold text-ink">
            Explore DGCA exam guide
          </Link>
        </div>
      </div>
    </main>
  )
}
