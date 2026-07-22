import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function StudentVisaHierarchy({ items, depth = 0, maxDepth = Infinity }) {
  if (!items?.length) return null

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const hasChildren = Boolean(item.children?.length)
        const canRenderChildren = depth < maxDepth && hasChildren

        return (
          <div key={item.id} className="space-y-3">
            <Link
              href={item.href}
              className={`group flex items-start justify-between gap-3 rounded-2xl border border-line bg-white p-4 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md ${depth === 0 ? 'md:p-5' : 'md:p-4'}`}
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  {item.icon ? (
                    <div className="rounded-xl bg-brand-light p-2 text-brand">
                      <item.icon className="h-4 w-4" />
                    </div>
                  ) : null}
                  <p className={`font-semibold text-ink ${depth === 0 ? 'text-base' : 'text-sm'}`}>{item.label}</p>
                </div>
                {item.description ? <p className="mt-2 text-sm text-muted">{item.description}</p> : null}
              </div>
              <div className="rounded-full bg-canvas p-2 text-muted transition-colors duration-200 group-hover:bg-brand-light group-hover:text-brand">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            {canRenderChildren ? (
              <div className="ml-4 space-y-3">
                <StudentVisaHierarchy items={item.children} depth={depth + 1} maxDepth={maxDepth} />
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
