'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import AppShell from './AppShell'
import { useAuth } from '@/lib/auth-context'

function getRequestedUrl(pathname) {
  if (typeof window === 'undefined') return pathname || '/'
  return `${pathname || '/'}${window.location.search}${window.location.hash}`
}

export default function NotFoundContent() {
  const pathname = usePathname()
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      const redirect = encodeURIComponent(getRequestedUrl(pathname))
      router.replace(`/login?redirect=${redirect}`)
    }
  }, [loading, pathname, router, user])

  if (loading || !user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-page px-6 py-16 text-center text-ink dark:bg-slate-950 dark:text-slate-100">
        <div className="card w-full max-w-md px-6 py-10">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-line border-t-brand" />
          <p className="text-sm text-muted">Checking your session...</p>
        </div>
      </main>
    )
  }

  return (
    <AppShell title="Coming Soon">
      <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center py-10">
        <div className="card w-full max-w-lg px-6 py-10 text-center sm:px-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light text-3xl dark:bg-brand/15">
            🚧
          </div>
          <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">Coming soon</p>
          <h1 className="mt-3 font-display text-2xl font-bold text-ink dark:text-slate-100 sm:text-3xl">
            This feature will be added in the future.
          </h1>
          <p className="mt-3 text-sm leading-6 text-muted">
            We are working on this part of the learning experience. In the meantime, continue your preparation from the dashboard.
          </p>
          <Link href="/dashboard" className="mt-8 inline-flex rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </AppShell>
  )
}
