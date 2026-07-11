import './globals.css'
import { AuthProvider } from '@/lib/auth-context'

export const metadata = {
  title: 'WeOne aviation — Learn From Home',
  description: 'Your all-in-one learning dashboard',
}

export default function RootLayout({ children }) {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'WeOne aviation'
  const appTagline = process.env.NEXT_PUBLIC_APP_TAGLINE || 'Learn From Home'
  const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@example.com'

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="bg-canvas border-b border-line px-4 py-2 text-xs text-muted text-center">
          {appName} • {appTagline} • {supportEmail}
        </div>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
