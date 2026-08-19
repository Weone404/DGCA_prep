import './globals.css'
import { AuthProvider } from '@/lib/auth-context'
import { ThemeProvider } from '@/components/ThemeProvider'
import FloatingCalculator from '@/components/FloatingCalculator'
import E6BFlightComputer from '@/components/E6BFlightComputer'
import ChunkErrorReload from '@/components/ChunkErrorReload'

export const metadata = {
  title: 'We One aviation — Learn From Home',
  description: 'Your all-in-one learning dashboard',
}

export default function RootLayout({ children }) {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'We One aviation'
  const appTagline = process.env.NEXT_PUBLIC_APP_TAGLINE || 'Learn From Home'
  const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@example.com'

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-canvas text-ink transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <ChunkErrorReload />
        <div className="border-b border-line bg-canvas px-4 py-2 text-center text-xs text-muted transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
          {appName} • {appTagline} • {supportEmail}
        </div>
        <ThemeProvider>
          <AuthProvider>
            {children}
            <FloatingCalculator />
            <E6BFlightComputer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
