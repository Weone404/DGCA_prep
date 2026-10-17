'use client'

import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { useAuth } from '@/lib/auth-context'
import { useStudyTimeTracker } from '@/lib/use-study-time-tracker'
import { useTheme } from '@/components/ThemeProvider'

export default function AppShell({ title, children }) {
  const { user: authUser } = useAuth()
  const { theme, toggleTheme } = useTheme()
  useStudyTimeTracker(authUser?.email)

  return (
    <div className="flex min-h-screen flex-col bg-gradient-page transition-colors duration-300 dark:bg-slate-950 lg:flex-row lg:items-start">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar title={title} theme={theme} toggleTheme={toggleTheme} />
        <main className="w-full min-w-0 px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8">{children}</main>
      </div>
    </div>
  )
}
