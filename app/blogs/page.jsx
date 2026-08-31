import Link from 'next/link'
import BlogSearch from '@/components/blog/BlogSearch'
import CoverArt from '@/components/blog/CoverArt'
import JsonLd from '@/components/JsonLd'
import { blogListingSchema } from '@/lib/blog-schema'
import { SITE_URL, blogPosts, categoryList, getCategory } from '@/lib/blogs'

export const metadata = {
  title: 'DGCA Exam & Pilot Career Blog | We One Aviation',
  description:
    'In-depth, sourced guides to DGCA CPL and ATPL exams, licensing, Class 1 medical, RTR(A), training cost and pilot salaries in India. Written by DGCA ground instructors.',
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
      'In-depth, sourced guides to DGCA exams, licensing, medicals, training cost and pilot salaries in India.',
    url: `${SITE_URL}/blogs`,
    siteName: 'DGCA Exam Prep',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: `${SITE_URL}${blogPosts[0].coverImage}`, width: 1200, height: 675, alt: blogPosts[0].title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DGCA Exam & Pilot Career Blog',
    description: 'In-depth guides to DGCA exams, licensing, medicals and pilot careers in India.',
    images: [`${SITE_URL}${blogPosts[0].coverImage}`],
  },
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-IN', { dateStyle: 'long' }).format(new Date(`${date}T00:00:00`))
}

function PostCard({ post, featured = false }) {
  const category = getCategory(post.category)

  return (
    <article className={`card group flex flex-col overflow-hidden p-0 ${featured ? 'md:col-span-2 md:flex-row' : ''}`}>
      <div className={`shrink-0 overflow-hidden ${featured ? 'md:w-1/2' : ''}`} aria-hidden="true">
        <CoverArt motif={post.coverMotif} uid={post.slug} title={post.title} eyebrow={category ? category.label : 'Guide'} priority={featured} />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {category && <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{category.label}</p>}

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
          <span aria-hidden="true"> · </span>
          {post.wordCount.toLocaleString('en-IN')} words
        </p>
      </div>
    </article>
  )
}

export default function BlogsPage() {
  const [featured, ...rest] = blogPosts
  const activeCategories = categoryList.filter((category) => category.count > 0)
  const totalMinutes = blogPosts.reduce((sum, post) => sum + post.readingMinutes, 0)

  const searchPosts = blogPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    keywords: post.keywords,
    readingMinutes: post.readingMinutes,
  }))

  return (
    <main className="min-h-screen bg-canvas px-6 py-12 text-ink sm:py-16">
      <JsonLd id="blog-listing-schema" schema={blogListingSchema()} />

      <div className="mx-auto max-w-6xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" prefetch={false} className="hover:text-brand">Home</Link></li>
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
            Long-form, sourced guides on DGCA eligibility, the five CPL theory papers, Class 1 medicals, RTR(A),
            training cost and pilot pay in India. Each guide leads with the answer, then works through the detail with
            tables, worked examples and practice questions.
          </p>

          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div>
              <dt className="text-muted">Guides</dt>
              <dd className="font-display text-xl font-bold text-ink">{blogPosts.length}</dd>
            </div>
            <div>
              <dt className="text-muted">Total reading</dt>
              <dd className="font-display text-xl font-bold text-ink">{totalMinutes} min</dd>
            </div>
            <div>
              <dt className="text-muted">Topics</dt>
              <dd className="font-display text-xl font-bold text-ink">{activeCategories.length}</dd>
            </div>
          </dl>
        </header>

        <BlogSearch posts={searchPosts} categories={activeCategories} />

        <section aria-labelledby="latest-heading" className="mt-12">
          <h2 id="latest-heading" className="font-display text-2xl font-bold text-ink">All guides</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PostCard post={featured} featured />
            {rest.map((post) => <PostCard key={post.slug} post={post} />)}
          </div>
        </section>

        {activeCategories.map((category) => (
          <section key={category.slug} id={category.slug} aria-labelledby={`${category.slug}-heading`} className="mt-14 scroll-mt-24">
            <h2 id={`${category.slug}-heading`} className="font-display text-2xl font-bold text-ink">{category.label}</h2>
            <ul className="mt-4 divide-y divide-line rounded-xl2 border border-line bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900">
              {blogPosts
                .filter((post) => post.category === category.slug)
                .map((post) => (
                  <li key={post.slug} className="p-5">
                    <Link href={`/blog/${post.slug}`} prefetch={false} className="font-semibold text-ink hover:text-brand">
                      {post.title}
                    </Link>
                    <p className="mt-1 text-sm leading-6 text-muted">{post.excerpt}</p>
                    <p className="mt-2 text-xs text-muted">{post.readingMinutes} min read</p>
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
          <Link href="/register" prefetch={false} className="mt-6 inline-flex rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
            Start learning free
          </Link>
        </aside>
      </div>
    </main>
  )
}
