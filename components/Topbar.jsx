'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Icon from './Icon'
import { NAV_ITEMS } from '@/lib/data'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import Link from 'next/link'

const NOTIFICATION_SEEN_KEY = 'student_notifications_seen_at_v1'
const NOTIFICATION_POLL_MS = 45000

function toMillis(value) {
  if (!value) return 0
  const parsed = new Date(value).getTime()
  return Number.isFinite(parsed) ? parsed : 0
}

function parseTimestampFromId(id) {
  const value = String(id || '')
  const match = value.match(/(\d{13})/)
  if (!match) return 0
  const ms = Number(match[1])
  return Number.isFinite(ms) ? ms : 0
}

function inferTimestamp(item, keys = []) {
  for (const key of keys) {
    const time = toMillis(item?.[key])
    if (time > 0) return time
  }

  const fromId = parseTimestampFromId(item?.id)
  if (fromId > 0) return fromId

  return 0
}

function formatAge(ms) {
  if (!ms) return 'just now'
  const diff = Date.now() - ms
  if (diff < 60_000) return 'just now'
  const mins = Math.floor(diff / 60_000)
  if (mins < 60) return `${mins}m ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

export default function Topbar({ title }) {
  const [query, setQuery] = useState('')
  const [openMenu, setOpenMenu] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [notifications, setNotifications] = useState([])
  const [seenAt, setSeenAt] = useState(0)
  const notificationRef = useRef(null)
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth()
  const pageTitle = title || NAV_ITEMS.find((n) => pathname?.startsWith(n.href))?.label || 'WeOne aviation'
  const isExamRoute =
    pathname?.startsWith('/class-test/')
    || (pathname?.startsWith('/subject-tests/') && pathname !== '/subject-tests')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = Number(window.localStorage.getItem(NOTIFICATION_SEEN_KEY) || '0')
    if (stored > 0) {
      setSeenAt(stored)
      return
    }

    const now = Date.now()
    window.localStorage.setItem(NOTIFICATION_SEEN_KEY, String(now))
    setSeenAt(now)
  }, [])

  useEffect(() => {
    if (isExamRoute) {
      setNotifications([])
      return
    }

    let active = true

    const loadNotifications = async () => {
      try {
        const [testsRes, classesRes, liveRes, contentRes] = await Promise.all([
          fetch('/api/teacher/assigned-tests', { credentials: 'include' }),
          fetch('/api/teacher/schedule', { credentials: 'include' }),
          fetch('/api/teacher/live-link', { credentials: 'include' }),
          fetch('/api/content', { credentials: 'include' }),
        ])

        if (!active) return

        const testsPayload = testsRes.ok ? await testsRes.json() : {}
        const classesPayload = classesRes.ok ? await classesRes.json() : {}
        const livePayload = liveRes.ok ? await liveRes.json() : {}
        const contentPayload = contentRes.ok ? await contentRes.json() : {}

        const testItems = (testsPayload?.tests || []).map((test) => {
          const at = inferTimestamp(test, ['createdAt', 'created_at', 'assignedAt', 'assigned_at'])
          return {
            id: `test-${test.id}`,
            type: 'class-test',
            title: test.title || 'New class test assigned',
            subtitle: `${test.subjectLabel || 'Subject'}${test.chapterLabel ? ` • ${test.chapterLabel}` : ''}`,
            href: '/class-test',
            at,
          }
        })

        const classItems = (classesPayload?.classes || []).map((event) => {
          const at = inferTimestamp(event, ['createdAt', 'created_at', 'setAt', 'set_at', 'startDateTime'])
          return {
            id: `class-${event.id}`,
            type: 'live-class',
            title: event.title || 'New live class scheduled',
            subtitle: `${event.date || ''}${event.time ? ` • ${event.time}` : ''}`.trim(),
            href: '/live-classes',
            at,
          }
        })

        const liveItems = livePayload?.link?.url
          ? [{
              id: `live-link-${livePayload.link.url}`,
              type: 'live-class',
              title: livePayload.link.label || 'Teacher started a live class',
              subtitle: 'Quick join link is available now',
              href: '/live-classes',
              at: inferTimestamp(livePayload.link, ['setAt', 'createdAt', 'created_at']),
            }]
          : []

        const lectureItems = (contentPayload?.lecturesArray || []).map((lecture) => {
          const at = inferTimestamp(lecture, ['uploadedAt', 'createdAt', 'created_at', 'updated_at'])
          return {
            id: `lecture-${lecture.id}`,
            type: 'lecture',
            title: lecture.title || 'New lecture uploaded',
            subtitle: lecture.subject || lecture.chapter || 'Lecture update',
            href: '/lectures',
            at,
          }
        })

        const merged = [...testItems, ...classItems, ...liveItems, ...lectureItems]
          .filter((item) => item.at > 0)
          .sort((a, b) => b.at - a.at)
          .slice(0, 25)

        setNotifications(merged)
      } catch {
        if (!active) return
        setNotifications([])
      }
    }

    loadNotifications()
    const timer = setInterval(loadNotifications, NOTIFICATION_POLL_MS)

    return () => {
      active = false
      clearInterval(timer)
    }
  }, [isExamRoute])

  useEffect(() => {
    if (!notificationOpen) return

    const handleOutsideClick = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [notificationOpen])

  const unreadCount = useMemo(
    () => notifications.filter((entry) => entry.at > seenAt).length,
    [notifications, seenAt]
  )

  const toggleNotifications = () => {
    const next = !notificationOpen
    setNotificationOpen(next)
    if (next) {
      const now = Date.now()
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(NOTIFICATION_SEEN_KEY, String(now))
      }
      setSeenAt(now)
    }
  }

  const openNotificationTarget = (href) => {
    setNotificationOpen(false)
    router.push(href)
  }

  return (
    <header className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-4">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        {/* hamburger - visible on small screens */}
        <button onClick={() => setMobileNav(true)} className="lg:hidden p-2 rounded-md bg-white/60 mr-2">
          <Icon name="menu" size={18} />
        </button>
        <h1 className="text-xl sm:text-2xl font-display font-bold text-ink truncate">{pageTitle}</h1>
        <div className="hidden md:flex items-center gap-2 bg-white border border-line rounded-full px-3 py-2 w-52 sm:w-64 shadow-card">
          <Icon name="search" size={16} className="text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anything..."
            className="bg-transparent outline-none text-sm text-ink placeholder:text-muted w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 ml-auto">
        <div className="relative" ref={notificationRef}>
          <button
            onClick={toggleNotifications}
            className="relative w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-muted hover:text-brand transition-colors"
            aria-label="Open notifications"
          >
            <Icon name="bell" size={18} />
            {unreadCount > 0 ? <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-coral" /> : null}
          </button>

          {notificationOpen && (
            <div className="absolute right-0 mt-2 w-[22rem] max-w-[88vw] bg-white rounded-2xl shadow-card border border-line py-2 z-30">
              <div className="flex items-center justify-between px-4 py-2 border-b border-line">
                <p className="text-sm font-semibold text-ink">Notifications</p>
                <p className="text-xs text-muted">{unreadCount > 0 ? `${unreadCount} new` : 'Up to date'}</p>
              </div>

              <div className="max-h-80 overflow-y-auto">
                {notifications.length ? (
                  notifications.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => openNotificationTarget(item.href)}
                      className="w-full text-left px-4 py-3 hover:bg-canvas transition-colors border-b border-line/60"
                    >
                      <p className="text-sm font-semibold text-ink line-clamp-1">{item.title}</p>
                      <p className="text-xs text-muted mt-0.5 line-clamp-1">{item.subtitle || 'Update available'}</p>
                      <p className="text-[11px] text-muted mt-1">{formatAge(item.at)}</p>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-6 text-center text-sm text-muted">No notifications yet.</div>
                )}
              </div>
            </div>
          )}
        </div>

        {user ? (
          <div className="relative">
            <button onClick={() => setOpenMenu((v) => !v)} className="flex items-center gap-2">
              <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover" />
              <span className="hidden sm:block text-sm font-semibold text-ink">{user.name}</span>
              <Icon name="chevron-down" size={16} className="text-muted" />
            </button>
            {openMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-card border border-line py-2 z-20">
                <Link href="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-ink hover:bg-canvas">
                  <Icon name="user" size={15} /> My Profile
                </Link>
                <button 
                  onClick={() => {
                    logout()
                    setOpenMenu(false)
                    router.push('/')
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-coral hover:bg-canvas">
                  <Icon name="logout" size={15} /> Log out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/login"
            className="bg-brand hover:bg-brand-dark transition-colors text-white text-sm font-semibold px-6 py-2.5 rounded-xl"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile nav drawer */}
      {mobileNav && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-ink/30" onClick={() => setMobileNav(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-full sm:w-80 md:w-72 bg-white p-6 overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand flex items-center justify-center text-white font-display font-bold">W</div>
                <div>
                  <p className="font-display font-bold text-ink leading-none">WeOne aviation</p>
                  <p className="text-xs text-muted mt-1">Learn From Home</p>
                </div>
              </div>
              <button onClick={() => setMobileNav(false)} className="p-2 rounded-md">
                <Icon name="x" size={18} />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium text-muted hover:bg-canvas hover:text-ink">
                  <Icon name={item.icon} size={18} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </header>
  )
}
