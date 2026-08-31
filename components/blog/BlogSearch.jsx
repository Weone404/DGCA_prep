'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

export default function BlogSearch({ posts, categories }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return posts.filter((post) => {
      if (category !== 'all' && post.category !== category) return false
      if (!needle) return true
      return (
        post.title.toLowerCase().includes(needle) ||
        post.excerpt.toLowerCase().includes(needle) ||
        (post.keywords || []).some((keyword) => keyword.toLowerCase().includes(needle))
      )
    })
  }, [posts, query, category])

  return (
    <section aria-labelledby="find-heading" className="mt-10">
      <h2 id="find-heading" className="sr-only">Find a guide</h2>

      <div className="flex flex-col gap-4 rounded-xl2 border border-line bg-white p-5 dark:border-slate-700 dark:bg-slate-900 sm:flex-row sm:items-center">
        <label className="flex-1">
          <span className="sr-only">Search guides</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search: medical, 200 hours, exam fee, RTR..."
            className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-brand dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          />
        </label>

        <label className="sm:w-56">
          <span className="sr-only">Filter by category</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none focus:border-brand dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          >
            <option value="all">All topics ({posts.length})</option>
            {categories.map((item) => (
              <option key={item.slug} value={item.slug}>{item.label} ({item.count})</option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-4 text-sm text-muted" role="status" aria-live="polite">
        Showing {results.length} of {posts.length} guides
      </p>

      {results.length > 0 ? (
        <ul className="mt-3 divide-y divide-line rounded-xl2 border border-line bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900">
          {results.map((post) => (
            <li key={post.slug} className="p-5">
              <Link href={`/blog/${post.slug}`} prefetch={false} className="font-semibold text-ink hover:text-brand">
                {post.title}
              </Link>
              <p className="mt-1 text-sm leading-6 text-muted">{post.excerpt}</p>
              <p className="mt-2 text-xs text-muted">{post.readingMinutes} min read</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 rounded-xl2 border border-line bg-white p-6 text-sm text-muted dark:border-slate-700 dark:bg-slate-900">
          Nothing matched that. Try a shorter phrase such as medical, fee, hours or conversion.
        </p>
      )}
    </section>
  )
}
