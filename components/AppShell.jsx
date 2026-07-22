'use client'

import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { useAuth } from '@/lib/auth-context'
import { useStudyTimeTracker } from '@/lib/use-study-time-tracker'

export default function AppShell({ title, children }) {
  const { user: authUser } = useAuth()
  useStudyTimeTracker(authUser?.email)

  return (
    <div className="flex min-h-screen bg-gradient-page flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <Topbar title={title} />
        <main className="px-4 sm:px-6 lg:px-8 pb-10 container">{children}</main>
      </div>
    </div>
  )
}
