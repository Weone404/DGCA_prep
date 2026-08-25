import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPost } from '@/lib/blogs'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ title: post.slug }))
}

export async function generateMetadata({ params }) {
  const { title } = await params
  const post = getBlogPost(title)
  if (!post) return {}

  return {
    title: `${post.title} | We One Aviation`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.dgcaexam.com/blog/${post.slug}`,
      siteName: 'DGCA Exam Prep',
      images: [{ url: post.coverImage, alt: post.title }],
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
    },
  }
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-IN', { dateStyle: 'long' }).format(new Date(`${date}T00:00:00`))
}

function BlogSection({ section }) {
  return (
    <section className="border-b border-line py-8 last:border-b-0 dark:border-slate-700">
      <h2 className="font-display text-2xl font-semibold text-ink">{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 text-base leading-7 text-muted">{paragraph}</p>)}
      {section.list && <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-7 text-muted">{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
      {section.numbered && <ol className="mt-5 space-y-5 text-base leading-7 text-muted">{section.numbered.map(([heading, text], index) => <li key={heading}><strong className="font-semibold text-ink">{index + 1}. {heading}: </strong>{text}</li>)}</ol>}
      {section.note && <p className="mt-5 text-sm italic leading-6 text-muted">{section.note}</p>}
      {section.table && (
        <div className="mt-5 overflow-x-auto rounded-xl border border-line dark:border-slate-700">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-canvas text-ink dark:bg-slate-800 dark:text-slate-100"><tr>{section.table.headers.map((header) => <th key={header} className="px-4 py-3 font-semibold">{header}</th>)}</tr></thead>
            <tbody>{section.table.rows.map((row) => <tr key={row[0]} className="border-t border-line dark:border-slate-700">{row.map((cell) => <td key={cell} className="px-4 py-3 text-muted">{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default async function BlogPostPage({ params }) {
  const { title } = await params
  const post = getBlogPost(title)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-canvas px-6 py-12 text-ink sm:py-16">
      <article className="mx-auto max-w-4xl">
        <Link href="/blogs" prefetch={false} className="text-sm font-semibold text-brand hover:underline">Back to all blogs</Link>
        <header className="mt-6 border-b border-line pb-8 dark:border-slate-700">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">{formatDate(post.publishedDate)} · {post.author}</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{post.excerpt}</p>
          <Image src={post.coverImage} alt="" width={1200} height={675} className="mt-8 max-h-[26rem] w-full rounded-xl object-cover" priority />
        </header>

        <div className="text-slate-900 dark:text-slate-100">
          <p className="border-b border-line py-8 text-lg leading-8 text-muted dark:border-slate-700">{post.content.intro}</p>
          {post.content.sections.map((section) => <BlogSection key={section.heading} section={section} />)}
          <section className="py-8">
            <h2 className="font-display text-2xl font-semibold text-ink">Frequently Asked Questions</h2>
            <div className="mt-5 space-y-6">{post.content.faqs.map(([question, answer]) => <div key={question}><h3 className="text-lg font-semibold text-ink">{question}</h3><p className="mt-2 text-base leading-7 text-muted">{answer}</p></div>)}</div>
          </section>
        </div>
      </article>
    </main>
  )
}
