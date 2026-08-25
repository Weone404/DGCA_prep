import './globals.css'
import { AuthProvider } from '@/lib/auth-context'
import { ThemeProvider } from '@/components/ThemeProvider'
import FloatingCalculator from '@/components/FloatingCalculator'
import E6BFlightComputer from '@/components/E6BFlightComputer'
import ChunkErrorReload from '@/components/ChunkErrorReload'

export const metadata = {
  metadataBase: new URL('https://www.dgcaexam.com'),
  title: 'DGCA Exam Preparation | CPL & ATPL Ground Classes',
  description: 'DGCA exam preparation made easy — live CPL & ATPL ground classes, subject-wise mock tests, and AI-powered doubt solving. Start learning free today.',
  openGraph: {
    title: 'DGCA Exam Preparation | CPL & ATPL Ground Classes',
    description: 'DGCA exam preparation made easy — live CPL & ATPL ground classes, subject-wise mock tests, and AI-powered doubt solving. Start learning free today.',
    url: 'https://www.dgcaexam.com',
    siteName: 'DGCA Exam Prep',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DGCA Exam Prep for CPL and ATPL ground classes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DGCA Exam Preparation | CPL & ATPL Ground Classes',
    description: 'DGCA exam preparation made easy — live CPL & ATPL ground classes, subject-wise mock tests, and AI-powered doubt solving. Start learning free today.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'We One Aviation',
  url: 'https://www.dgcaexam.com',
  logo: 'https://www.dgcaexam.com/Logo.webp',
  description: 'Online DGCA exam preparation platform offering live classes, subject-wise tests, mock tests, and study resources for aspiring commercial pilots.',
}

export default function RootLayout({ children }) {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'We One aviation'
  const appTagline = process.env.NEXT_PUBLIC_APP_TAGLINE || 'Learn From Home'
  const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@example.com'

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
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
