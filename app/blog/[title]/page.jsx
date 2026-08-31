import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import { blogPostSchema } from '@/lib/blog-schema'
import { AUTHOR, SITE_URL, blogPosts, getBlogPost, getCategory, getRelatedPosts, slugify } from '@/lib/blogs'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ title: post.slug }))
}

export async function generateMetadata({ params }) {
  const { title } = await params
  const post = getBlogPost(title)
  if (!post) return {}

  const url = `${SITE_URL}/blog/${post.slug}`
  const image = `${SITE_URL}${post.coverImage}`

  return {
    title: `${post.title} | We One Aviation`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: 'DGCA Exam Prep',
      images: [{ url: image, width: 1200, height: 675, alt: post.title }],
      type: 'article',
      locale: 'en_IN',
      publishedTime: post.publishedDate,
      modifiedTime: post.modifiedDate,
      authors: [AUTHOR.name],
      section: getCategory(post.category)?.label,
      tags: post.keywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  }
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-IN', { dateStyle: 'long' }).format(new Date(`${date}T00:00:00`))
}

function BlogSection({ section }) {
  const id = slugify(section.heading)

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 border-b border-line py-8 last:border-b-0 dark:border-slate-700">
      <h2 id={`${id}-heading`} className="font-display text-2xl font-semibold text-ink">
        {section.heading}
      </h2>

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-base leading-7 text-muted">{paragraph}</p>
      ))}

      {section.list && (
        <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          {section.list.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}

      {section.numbered && (
        <ol className="mt-5 space-y-5 text-base leading-7 text-muted">
          {section.numbered.map(([heading, text], index) => (
            <li key={heading}>
              <strong className="font-semibold text-ink">{index + 1}. {heading}: </strong>{text}
            </li>
          ))}
        </ol>
      )}

      {section.table && (
        <div className="mt-5 overflow-x-auto rounded-xl border border-line dark:border-slate-700">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-canvas text-ink dark:bg-slate-800 dark:text-slate-100">
              <tr>
                {section.table.headers.map((header, index) => (
                  <th key={`${header}-${index}`} scope="col" className="px-4 py-3 font-semibold">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row.join('|')} className="border-t border-line dark:border-slate-700">
                  {row.map((cell, index) => (
                    index === 0
                      ? <th key={`${cell}-${index}`} scope="row" className="px-4 py-3 text-left font-medium text-ink">{cell}</th>
                      : <td key={`${cell}-${index}`} className="px-4 py-3 text-muted">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.note && (
        <p className="mt-5 rounded-xl border-l-4 border-brand bg-brand-light px-4 py-3 text-sm leading-6 text-ink dark:bg-slate-800 dark:text-slate-200">
          {section.note}
        </p>
      )}
    </section>
  )
}

export default async function BlogPostPage({ params }) {
  const { title } = await params
  const post = getBlogPost(title)
  if (!post) notFound()

  const category = getCategory(post.category)
  const related = getRelatedPosts(post)

  return (
    <main className="min-h-screen bg-canvas px-6 py-10 text-ink sm:py-14">
      <JsonLd id={`article-schema-${post.slug}`} schema={blogPostSchema(post)} />

      <div className="mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" prefetch={false} className="hover:text-brand">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blogs" prefetch={false} className="hover:text-brand">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-ink" aria-current="page">{category ? category.label : 'Article'}</li>
          </ol>
        </nav>

        <article className="mt-6">
          <header className="border-b border-line pb-8 dark:border-slate-700">
            {category && (
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">{category.label}</p>
            )}
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>

            <p className="mt-4 text-sm text-muted">
              By <span className="font-semibold text-ink">{AUTHOR.name}</span>
              <span aria-hidden="true"> · </span>
              Published <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
              {post.modifiedDate !== post.publishedDate && (
                <>
                  <span aria-hidden="true"> · </span>
                  Updated <time dateTime={post.modifiedDate}>{formatDate(post.modifiedDate)}</time>
                </>
              )}
              <span aria-hidden="true"> · </span>
              {post.readingMinutes} min read
            </p>

            <Image
              src={post.coverImage}
              alt={`${post.title} - We One Aviation DGCA ground school guide`}
              width={1200}
              height={675}
              sizes="(min-width: 1024px) 896px, 100vw"
              className="mt-8 w-full rounded-xl2 object-cover"
              priority
            />
          </header>

          <section aria-labelledby="summary-heading" className="mt-8 rounded-xl2 border border-brand/30 bg-brand-light p-6 dark:border-slate-700 dark:bg-slate-800">
            <h2 id="summary-heading" className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-dark dark:text-brand">
              Short answer
            </h2>
            <p className="mt-3 text-lg leading-8 text-ink dark:text-slate-100">{post.content.intro}</p>
          </section>

          <nav aria-labelledby="toc-heading" className="mt-8 rounded-xl border border-line bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <h2 id="toc-heading" className="font-display text-lg font-semibold text-ink">On this page</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-muted">
              {post.content.sections.map((section) => (
                <li key={section.heading}>
                  <a href={`#${slugify(section.heading)}`} className="hover:text-brand">{section.heading}</a>
                </li>
              ))}
              <li><a href="#faq" className="hover:text-brand">Frequently asked questions</a></li>
            </ol>
          </nav>

          <div className="mt-4 text-slate-900 dark:text-slate-100">
            {post.content.sections.map((section) => (
              <BlogSection key={section.heading} section={section} />
            ))}
          </div>

          <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-24 border-t border-line py-8 dark:border-slate-700">
            <h2 id="faq-heading" className="font-display text-2xl font-semibold text-ink">Frequently asked questions</h2>
            <dl className="mt-5 space-y-6">
              {post.content.faqs.map(([question, answer]) => (
                <div key={question}>
                  <dt className="text-lg font-semibold text-ink">{question}</dt>
                  <dd className="mt-2 text-base leading-7 text-muted">{answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          {post.sources?.length > 0 && (
            <section aria-labelledby="sources-heading" className="border-t border-line py-8 dark:border-slate-700">
              <h2 id="sources-heading" className="font-display text-lg font-semibold text-ink">Sources</h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                {post.sources.map(([name, url]) => (
                  <li key={url}>
                    <a href={url} rel="nofollow noopener" target="_blank" className="text-brand hover:underline">{name}</a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-5 text-muted">
                Fees, exam dates and regulatory limits change. Confirm current figures against the DGCA Pariksha portal
                and the applicable Civil Aviation Requirements before acting on them.
              </p>
            </section>
          )}
        </article>

        {related.length > 0 && (
          <aside aria-labelledby="related-heading" className="border-t border-line py-8 dark:border-slate-700">
            <h2 id="related-heading" className="font-display text-lg font-semibold text-ink">Read next</h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug} className="card p-5">
                  <Link href={`/blog/${item.slug}`} prefetch={false} className="font-semibold text-ink hover:text-brand">
                    {item.title}
                  </Link>
                  <p className="mt-2 text-xs leading-5 text-muted">{item.readingMinutes} min read</p>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <aside className="mt-4 rounded-xl2 bg-ink p-8 text-white dark:bg-slate-900">
          <h2 className="font-display text-2xl font-bold">Study for your DGCA papers with us</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Live CPL and ATPL ground classes, subject-wise tests on every paper, full-length mock exams and an AI doubt
            assistant scoped to the DGCA syllabus.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/register" prefetch={false} className="inline-flex rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
              Start learning free
            </Link>
            <Link href="/blogs" prefetch={false} className="inline-flex rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-white hover:border-brand hover:text-brand">
              All guides
            </Link>
          </div>
        </aside>
      </div>
    </main>
  )
}
