import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/lib/blogs'

export const metadata = {
  title: 'Aviation Career & Exam Preparation Blog | We One Aviation',
  description: 'Read practical guides about aviation careers, cabin crew salaries, DGCA exam preparation, and pilot training in India.',
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-IN', { dateStyle: 'long' }).format(new Date(`${date}T00:00:00`))
}

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-canvas px-6 py-12 text-ink sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">We One Aviation</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Aviation Career &amp; Exam Preparation Blog</h1>
          <p className="mt-4 text-base leading-7 text-muted">Practical guides for cabin crew careers, DGCA exams, pilot training, and aviation study.</p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="card overflow-hidden p-0">
              <Image src={post.coverImage} alt="" width={640} height={360} className="h-48 w-full object-cover" />
              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{formatDate(post.publishedDate)}</p>
                <h2 className="mt-3 font-display text-xl font-bold text-ink">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{post.excerpt}</p>
                <p className="mt-4 text-xs text-muted">By {post.author}</p>
                <Link href={`/blog/${post.slug}`} prefetch={false} className="mt-5 inline-flex rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
