'use client'

import { useEffect, useState } from 'react'

export default function TableOfContents({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id)

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (!headings.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-88px 0px -70% 0px', threshold: 0 },
    )

    headings.forEach((heading) => observer.observe(heading))
    return () => observer.disconnect()
  }, [items])

  return (
    <nav aria-labelledby="toc-heading" className="lg:sticky lg:top-6">
      <h2 id="toc-heading" className="font-display text-sm font-bold uppercase tracking-[0.14em] text-muted">
        On this page
      </h2>
      <ol className="mt-3 space-y-1 border-l border-line dark:border-slate-700">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={activeId === item.id ? 'true' : undefined}
              className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm leading-6 transition-colors ${
                activeId === item.id
                  ? 'border-brand font-semibold text-brand'
                  : 'border-transparent text-muted hover:border-line hover:text-ink dark:hover:text-slate-200'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
