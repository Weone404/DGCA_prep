import Link from 'next/link'
import { notFound } from 'next/navigation'
import CoverArt from '@/components/blog/CoverArt'
import Diagram from '@/components/blog/Diagram'
import Quiz from '@/components/blog/Quiz'
import ReadingProgress from '@/components/blog/ReadingProgress'
import TableOfContents from '@/components/blog/TableOfContents'
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

function WorkedExample({ example, id }) {
  return (
    <aside aria-labelledby={`${id}-heading`} className="mt-6 rounded-xl2 border-l-4 border-violet bg-white p-5 shadow-card dark:bg-slate-900 sm:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-violet">Worked example</p>
      <h3 id={`${id}-heading`} className="mt-2 font-display text-lg font-semibold text-ink">{example.title}</h3>

      {example.given?.length > 0 && (
        <>
          <p className="mt-4 text-sm font-semibold text-ink">Given</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
            {example.given.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </>
      )}

      {example.working?.length > 0 && (
        <>
          <p className="mt-4 text-sm font-semibold text-ink">Working</p>
          <ol className="mt-2 space-y-2 text-sm leading-6 text-muted">
            {example.working.map(([step, detail]) => (
              <li key={step}><span className="font-medium text-ink">{step}:</span> {detail}</li>
            ))}
          </ol>
        </>
      )}

      <p className="mt-4 rounded-xl bg-brand-light px-4 py-3 text-sm font-semibold leading-6 text-ink dark:bg-slate-800 dark:text-slate-100">
        Answer: {example.answer}
      </p>
    </aside>
  )
}

function BlogSection({ section, index }) {
  const id = slugify(section.heading)

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 border-b border-line py-8 last:border-b-0 dark:border-slate-700">
      <h2 id={`${id}-heading`} className="group font-display text-2xl font-semibold text-ink">
        <a href={`#${id}`} className="no-underline">
          {section.heading}
          <span aria-hidden="true" className="ml-2 text-brand opacity-0 transition-opacity group-hover:opacity-100">#</span>
        </a>
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
          {section.numbered.map(([heading, text], i) => (
            <li key={heading}><strong className="font-semibold text-ink">{i + 1}. {heading}: </strong>{text}</li>
          ))}
        </ol>
      )}

      {section.steps && (
        <ol className="mt-5 space-y-4">
          {section.steps.map(([heading, text], i) => (
            <li key={heading} className="flex gap-4 rounded-xl border border-line bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">{i + 1}</span>
              <span className="text-base leading-7 text-muted">
                <strong className="font-semibold text-ink">{heading}. </strong>{text}
              </span>
            </li>
          ))}
        </ol>
      )}

      {section.table && (
        <div className="mt-5 overflow-x-auto rounded-xl border border-line dark:border-slate-700">
          <table className="w-full min-w-[620px] text-left text-sm">
            {section.table.caption && <caption className="px-4 py-3 text-left text-sm text-muted">{section.table.caption}</caption>}
            <thead className="bg-canvas text-ink dark:bg-slate-800 dark:text-slate-100">
              <tr>
                {section.table.headers.map((header, i) => (
                  <th key={`${header}-${i}`} scope="col" className="px-4 py-3 font-semibold">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row.join('|')} className="border-t border-line dark:border-slate-700">
                  {row.map((cell, i) => (
                    i === 0
                      ? <th key={`${cell}-${i}`} scope="row" className="px-4 py-3 text-left font-medium text-ink">{cell}</th>
                      : <td key={`${cell}-${i}`} className="px-4 py-3 text-muted">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.diagram && <Diagram diagram={section.diagram} id={`fig-${index}`} />}

      {section.example && <WorkedExample example={section.example} id={`ex-${index}`} />}

      {section.pitfalls && (
        <div className="mt-6 rounded-xl2 border-l-4 border-coral bg-white p-5 dark:bg-slate-900 sm:p-6">
          <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-coral">Where students go wrong</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
            {section.pitfalls.map((item) => <li key={item}>{item}</li>)}
          </ul>
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
  const { content } = post

  const tocItems = [
    ...content.sections.map((section) => ({ id: slugify(section.heading), label: section.heading })),
    ...(content.glossary?.length ? [{ id: 'glossary', label: 'Key terms' }] : []),
    ...(content.quiz?.length ? [{ id: 'practice', label: 'Check your understanding' }] : []),
    { id: 'faq', label: 'Frequently asked questions' },
  ]

  return (
    <main className="min-h-screen bg-canvas px-6 py-10 text-ink sm:py-14">
      <ReadingProgress />
      <JsonLd id={`article-schema-${post.slug}`} schema={blogPostSchema(post)} />

      <div className="mx-auto max-w-6xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" prefetch={false} className="hover:text-brand">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blogs" prefetch={false} className="hover:text-brand">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-ink" aria-current="page">{category ? category.label : 'Article'}</li>
          </ol>
        </nav>

        <div className="mt-6 gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_250px]">
          <article>
            <header className="border-b border-line pb-8 dark:border-slate-700">
              {category && <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">{category.label}</p>}
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

              <figure className="mt-8 overflow-hidden rounded-xl2">
                <CoverArt motif={post.coverMotif} uid={post.slug} title={post.title} eyebrow={category ? category.label : 'Guide'} priority />
              </figure>
            </header>

            <section aria-labelledby="summary-heading" className="mt-8 rounded-xl2 border border-brand/30 bg-brand-light p-6 dark:border-slate-700 dark:bg-slate-800">
              <h2 id="summary-heading" className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-dark dark:text-brand">
                Short answer
              </h2>
              <p className="mt-3 text-lg leading-8 text-ink dark:text-slate-100">{content.intro}</p>
            </section>

            {content.keyFacts?.length > 0 && (
              <section aria-labelledby="keyfacts-heading" className="dgca-key-facts mt-6 rounded-xl2 border border-line bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
                <h2 id="keyfacts-heading" className="font-display text-lg font-semibold text-ink">At a glance</h2>
                <dl className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {content.keyFacts.map(([label, value]) => (
                    <div key={label} className="border-l-2 border-brand pl-4">
                      <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">{label}</dt>
                      <dd className="mt-1 text-base font-semibold leading-6 text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            <nav aria-label="Table of contents" className="mt-6 rounded-xl border border-line bg-white p-6 dark:border-slate-700 dark:bg-slate-900 lg:hidden">
              <h2 className="font-display text-lg font-semibold text-ink">On this page</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-muted">
                {tocItems.map((item) => (
                  <li key={item.id}><a href={`#${item.id}`} className="hover:text-brand">{item.label}</a></li>
                ))}
              </ol>
            </nav>

            <div className="mt-2 text-slate-900 dark:text-slate-100">
              {content.sections.map((section, index) => (
                <BlogSection key={section.heading} section={section} index={index} />
              ))}
            </div>

            {content.glossary?.length > 0 && (
              <section id="glossary" aria-labelledby="glossary-heading" className="scroll-mt-24 border-t border-line py-8 dark:border-slate-700">
                <h2 id="glossary-heading" className="font-display text-2xl font-semibold text-ink">Key terms</h2>
                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                  {content.glossary.map(([term, definition]) => (
                    <div key={term} className="rounded-xl border border-line bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                      <dt className="font-semibold text-ink">{term}</dt>
                      <dd className="mt-1 text-sm leading-6 text-muted">{definition}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {content.quiz?.length > 0 && <Quiz questions={content.quiz} />}

            <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-24 border-t border-line py-8 dark:border-slate-700">
              <h2 id="faq-heading" className="font-display text-2xl font-semibold text-ink">Frequently asked questions</h2>
              <div className="mt-5 divide-y divide-line rounded-xl2 border border-line bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900">
                {content.faqs.map(([question, answer], index) => (
                  <details key={question} name="faq" open={index === 0} className="group p-5">
                    <summary className="cursor-pointer list-none font-semibold text-ink marker:hidden">
                      <span className="flex items-start justify-between gap-4">
                        {question}
                        <span aria-hidden="true" className="mt-1 shrink-0 text-brand transition-transform group-open:rotate-45">+</span>
                      </span>
                    </summary>
                    <p className="mt-3 text-base leading-7 text-muted">{answer}</p>
                  </details>
                ))}
              </div>
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
                  Fees, exam dates and regulatory limits change. Confirm current figures against the DGCA Pariksha
                  portal and the applicable Civil Aviation Requirements before acting on them. Last reviewed{' '}
                  <time dateTime={post.modifiedDate}>{formatDate(post.modifiedDate)}</time>.
                </p>
              </section>
            )}
          </article>

          <aside className="hidden lg:block">
            <TableOfContents items={tocItems} />
          </aside>
        </div>

        {related.length > 0 && (
          <section aria-labelledby="related-heading" className="border-t border-line py-8 dark:border-slate-700">
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
          </section>
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
