import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-page px-6 py-16 text-ink dark:bg-slate-950 dark:text-slate-100">
      <div className="w-full max-w-lg text-center">
        <Link href="/" className="mx-auto inline-flex items-center gap-3" aria-label="We One Aviation home">
          <img src="/Logo.webp" alt="We One Aviation" width="64" height="64" className="h-16 w-16 rounded-2xl object-contain" />
          <span className="text-left">
            <span className="block font-display text-lg font-bold">We One Aviation</span>
            <span className="block text-sm text-muted">DGCA exam preparation</span>
          </span>
        </Link>

        <div className="card mt-10 px-6 py-10 sm:px-10">
          <p className="font-display text-6xl font-bold text-brand">404</p>
          <h1 className="mt-4 font-display text-2xl font-bold sm:text-3xl">Page not found</h1>
          <p className="mt-3 text-sm leading-6 text-muted">The page you are looking for does not exist or may have moved.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
              Go to homepage
            </Link>
            <Link href="/about-dgca" className="rounded-xl border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand dark:text-slate-100">
              About DGCA
            </Link>
            <Link href="/login" className="rounded-xl border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand dark:text-slate-100">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
