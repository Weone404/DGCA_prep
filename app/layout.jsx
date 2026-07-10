import './globals.css'
import { AuthProvider } from '@/lib/auth-context'

export const metadata = {
  title: 'WeOne aviation — Learn From Home',
  description: 'Your all-in-one learning dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
