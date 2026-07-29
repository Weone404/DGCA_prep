'use client'

import Sidebar from './Sidebar'
import { useAuth } from '@/lib/auth-context'
import { useStudyTimeTracker } from '@/lib/use-study-time-tracker'

export default function AppShell({ children }) {
  const { user: authUser } = useAuth()
  useStudyTimeTracker(authUser?.email)

  return (
    <div className="flex min-h-screen flex-col bg-gradient-page transition-colors duration-300 dark:bg-slate-950 lg:flex-row">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <main className="px-4 sm:px-6 lg:px-8 pb-10 container">{children}</main>
      </div>
    </div>
  )
}
