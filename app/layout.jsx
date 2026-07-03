import './globals.css'
import { AuthProvider } from '@/lib/auth-context'

export const metadata = {
  title: 'WeOne aviation — Learn From Home',
  description: 'Your all-in-one learning dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
