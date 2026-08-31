import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { blogListingSchema } from '@/lib/blog-schema'
import { SITE_URL, blogPosts, categoryList, getCategory } from '@/lib/blogs'

export const metadata = {
  title: 'DGCA Exam & Pilot Career Blog | We One Aviation',
  description:
    'Answer-first guides to DGCA CPL and ATPL exams, licensing, Class 1 medical, RTR(A), training cost and pilot salaries in India. Written by DGCA ground instructors.',
  keywords: [
    'DGCA exam blog',
    'DGCA ground classes',
    'CPL training India',
    'pilot career guide India',
    'DGCA syllabus',
  ],
  alternates: { canonical: `${SITE_URL}/blogs` },
  openGraph: {
    title: 'DGCA Exam & Pilot Career Blog | We One Aviation',
    description:
      'Answer-first guides to DGCA CPL and ATPL exams, licensing, medicals, training cost and pilot salaries in India.',
    url: `${SITE_URL}/blogs`,
    siteName: 'DGCA Exam Prep',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: `${SITE_URL}${blogPosts[0].coverImage}`, width: 1200, height: 675, alt: blogPosts[0].title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DGCA Exam & Pilot Career Blog',
    description: 'Answer-first guides to DGCA exams, licensing, medicals and pilot careers in India.',
    images: [`${SITE_URL}${blogPosts[0].coverImage}`],
  },
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-IN', { dateStyle: 'long' }).format(new Date(`${date}T00:00:00`))
}

function PostCard({ post, featured = false }) {
  const category = getCategory(post.category)

  return (
    <article
      className={`card group flex flex-col overflow-hidden p-0 transition-shadow hover:shadow-card ${
        featured ? 'md:col-span-2 md:flex-row' : ''
      }`}
    >
      <Link href={`/blog/${post.slug}`} prefetch={false} className={`block shrink-0 ${featured ? 'md:w-1/2' : ''}`} aria-hidden="true" tabIndex={-1}>
        <Image
          src={post.coverImage}
          alt=""
          width={1200}
          height={675}
          sizes={featured ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'}
          className={`w-full object-cover ${featured ? 'h-56 md:h-full' : 'h-44'}`}
          priority={featured}
        />
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {category && (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{category.label}</p>
        )}
        <h3 className={`mt-2 font-display font-bold text-ink ${featured ? 'text-2xl' : 'text-lg'}`}>
          <Link href={`/blog/${post.slug}`} prefetch={false} className="hover:text-brand focus-visible:text-brand">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted">{post.excerpt}</p>

        <p className="mt-auto pt-5 text-xs text-muted">
          <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
          <span aria-hidden="true"> · </span>
          {post.readingMinutes} min read
        </p>
      </div>
    </article>
  )
}

export default function BlogsPage() {
  const [featured, ...rest] = blogPosts
  const activeCategories = categoryList.filter((category) => category.count > 0)

  return (
    <main className="min-h-screen bg-canvas px-6 py-12 text-ink sm:py-16">
      <JsonLd id="blog-listing-schema" schema={blogListingSchema()} />

      <div className="mx-auto max-w-6xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" prefetch={false} className="hover:text-brand">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-ink" aria-current="page">Blog</li>
          </ol>
        </nav>

        <header className="mt-6 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">We One Aviation Ground School</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            DGCA Exam and Pilot Career Guides
          </h1>
          <p className="mt-4 text-base leading-7 text-muted">
            Straight answers on DGCA eligibility, the five CPL theory papers, Class 1 medicals, RTR(A), training cost
            and pilot pay in India. Every figure is sourced, and every guide leads with the answer.
          </p>
        </header>

        <nav aria-label="Blog categories" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {activeCategories.map((category) => (
              <li key={category.slug}>
                <a
                  href={`#${category.slug}`}
                  className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                >
                  {category.label}
                  <span className="ml-2 text-muted">{category.count}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="latest-heading" className="mt-10">
          <h2 id="latest-heading" className="sr-only">Latest articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PostCard post={featured} featured />
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {activeCategories.map((category) => (
          <section key={category.slug} id={category.slug} aria-labelledby={`${category.slug}-heading`} className="mt-14 scroll-mt-24">
            <h2 id={`${category.slug}-heading`} className="font-display text-2xl font-bold text-ink">
              {category.label}
            </h2>
            <ul className="mt-4 divide-y divide-line rounded-xl border border-line bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900">
              {blogPosts
                .filter((post) => post.category === category.slug)
                .map((post) => (
                  <li key={post.slug} className="p-5">
                    <Link href={`/blog/${post.slug}`} prefetch={false} className="font-semibold text-ink hover:text-brand">
                      {post.title}
                    </Link>
                    <p className="mt-1 text-sm leading-6 text-muted">{post.excerpt}</p>
                  </li>
                ))}
            </ul>
          </section>
        ))}

        <aside className="mt-14 rounded-xl2 bg-ink p-8 text-white dark:bg-slate-900">
          <h2 className="font-display text-2xl font-bold">Preparing for your DGCA papers?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            We One Aviation runs live CPL and ATPL ground classes with subject-wise tests, full-length mock exams and
            an AI doubt assistant trained on the DGCA syllabus.
          </p>
          <Link
            href="/register"
            prefetch={false}
            className="mt-6 inline-flex rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Start learning free
          </Link>
        </aside>
      </div>
    </main>
  )
}
