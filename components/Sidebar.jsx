'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Icon from './Icon'
import { SIDEBAR_ITEMS } from '@/lib/sidebar-nav'

function isActivePath(pathname, href) {
  return pathname === href || pathname?.startsWith(`${href}/`)
}

export default function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState({})

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  useEffect(() => {
    const nextState = {}

    const visit = (items) => {
      items.forEach((item) => {
        if (item.children?.length) {
          const hasActiveChild = item.children.some((child) => isActivePath(pathname, child.href))
          if (hasActiveChild) nextState[item.id] = true
          visit(item.children)
        }
      })
    }

    visit(SIDEBAR_ITEMS)
    setExpanded(nextState)
  }, [pathname])

  const renderItem = (item, depth = 0) => {
    const isGroup = item.type === 'group' && item.children?.length
    const active = isActivePath(pathname, item.href)
    const hasActiveChild = item.children?.some((child) => isActivePath(pathname, child.href)) || false
    const expandedState = expanded[item.id] || hasActiveChild

    if (isGroup) {
      return (
        <div key={item.id} className="space-y-1">
          <div className={`flex items-center rounded-xl border border-transparent transition-all duration-200 ${active || hasActiveChild ? 'bg-brand-light' : 'hover:bg-canvas'}`}>
            <Link
              href={item.href}
              className={`flex-1 flex items-center gap-3 px-3 py-2.5 rounded-l-xl text-[14px] font-medium relative transition-all duration-200 ease-out ${active || hasActiveChild ? 'text-brand' : 'text-muted hover:text-ink'}`}
            >
              <span
                className={`absolute left-[-20px] top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-brand transition-all duration-200 ease-out origin-center ${active || hasActiveChild ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
                aria-hidden="true"
              />
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/80 text-ink shadow-sm">
                <item.icon size={18} />
              </span>
              <span className="flex-1 text-left">{item.label}</span>
            </Link>
            <button
              type="button"
              onClick={() => setExpanded((current) => ({ ...current, [item.id]: !current[item.id] }))}
              aria-label={`${expandedState ? 'Collapse' : 'Expand'} ${item.label}`}
              className={`mr-1 flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors duration-200 hover:bg-white hover:text-ink ${expandedState ? 'text-brand' : ''}`}
            >
              <Icon name="chevron-down" size={16} className={`transition-transform duration-200 ${expandedState ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {expandedState ? (
            <div className="ml-4 space-y-1 border-l border-line/70 pl-3 py-1">
              {item.children.map((child) => renderItem(child, depth + 1))}
            </div>
          ) : null}
        </div>
      )
    }

    return (
      <Link
        key={item.id}
        href={item.href}
        className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium relative transition-all duration-200 ease-out ${active ? 'text-brand bg-brand-light' : 'text-muted hover:bg-canvas hover:text-ink hover:translate-x-0.5'}`}
        style={{ marginLeft: depth * 12 }}
      >
        <span
          className={`absolute left-[-20px] top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-brand transition-all duration-200 ease-out origin-center ${active ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
          aria-hidden="true"
        />
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/80 text-ink shadow-sm">
          <item.icon size={18} />
        </span>
        <span>{item.label}</span>
      </Link>
    )
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="lg:hidden fixed top-4 left-4 z-40 w-11 h-11 rounded-xl2 bg-white border border-line shadow-sm flex items-center justify-center text-ink active:scale-95 transition-transform duration-150"
      >
        <Icon name="menu" size={20} />
      </button>

      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 z-40 bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 ease-out ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      <aside
        role="navigation"
        aria-hidden={!open}
        className={`flex flex-col w-64 sm:w-72 lg:w-64 shrink-0 bg-white px-5 py-6 h-dvh border-r border-line fixed inset-y-0 left-0 z-50 lg:sticky lg:top-0 lg:z-0 transition-transform duration-300 ease-in-out will-change-transform ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="flex items-center justify-between mb-8">
          <Link href="/dashboard" className="flex items-center gap-3 px-2 group">
            <div className="w-11 h-11 rounded-2xl bg-brand flex items-center justify-center text-white font-display font-bold text-lg shrink-0 transition-transform duration-200 group-hover:scale-105">
              W
            </div>
            <div>
              <p className="font-display font-bold text-ink leading-none">WeOne aviation</p>
              <p className="text-xs text-muted mt-1">Learn From Home</p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-muted hover:text-ink hover:bg-canvas transition-colors duration-150"
          >
            <Icon name="x" size={18} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto pr-1 space-y-1">
          {SIDEBAR_ITEMS.map((item) => renderItem(item))}
        </nav>

        <div className="mt-6 rounded-xl2 bg-gradient-page p-4 text-center transition-shadow duration-300 hover:shadow-md">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-white/70 flex items-center justify-center overflow-hidden mb-2">
            <Image src={encodeURI('/Flying around the world-bro.webp')} alt="Flying around the world" width={56} height={56} className="object-cover" />
          </div>

          <button className="mt-3 w-full bg-brand hover:bg-brand-dark active:scale-[0.98] transition-all duration-200 text-white text-sm font-semibold py-2.5 rounded-xl">
            Upgrade Now
          </button>
        </div>
      </aside>
    </>
  )
}