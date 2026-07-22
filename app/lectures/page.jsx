'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { ProgressBar } from '@/components/UI'
import { useAuth } from '@/lib/auth-context'
import { LECTURES_ARRAY, PERSONALYSIS_DATA, SHORT_VIDEOS_DATA, SUBJECTS } from '@/lib/data'

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const FREE_LIMIT = 2
const SUBSCRIPTION_STORAGE_KEY = 'dgca_lectures_subscription'
const LIVE_CLASSES_POLL_MS = 60_000
const LIVE_CLOCK_TICK_MS = 15_000

/**
 * @typedef {{ id: string, label: string, price: number, originalPrice: number,
 *   durationDays: number, badge?: string, features: string[] }} Plan
 */
/** @type {Record<'monthly'|'quarterly'|'yearly', Plan>} */
const PLANS = {
  monthly: {
    id: 'monthly', label: 'Monthly', price: 299, originalPrice: 499, durationDays: 30,
    features: ['All recorded lectures', 'Short videos', 'Personalysis', 'Live class access'],
  },
  quarterly: {
    id: 'quarterly', label: 'Quarterly', price: 699, originalPrice: 1299, durationDays: 90,
    badge: 'Most Popular',
    features: ['Everything in Monthly', 'Priority doubt support', 'Mock test access'],
  },
  yearly: {
    id: 'yearly', label: 'Yearly', price: 1999, originalPrice: 4999, durationDays: 365,
    badge: 'Best Value',
    features: ['Everything in Quarterly', 'Lowest price/month', '1-on-1 mentor session'],
  },
}

const TABS = [
  { id: 'lectures', label: '🎬 Lectures' },
  { id: 'shorts', label: '⚡ Short Videos' },
  { id: 'personalysis', label: '🧠 Personalysis' },
]

// Access-model badge shown per tab so users know what they're looking at
// before they click into anything.
const TAB_ACCESS_NOTE = {
  lectures: { icon: '🆓', text: `First ${FREE_LIMIT} lectures free, then premium` },
  shorts: { icon: '🆓', text: 'Always free — no subscription needed' },
  personalysis: { icon: '👑', text: 'Premium — subscription required' },
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function fmtDate(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

function fmtDateTime(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
}

function daysRemaining(expiresAt) {
  if (!expiresAt) return 0
  const diff = new Date(expiresAt).getTime() - Date.now()
  return Math.max(0, Math.ceil(diff / 86_400_000))
}

function extractSrc(iframeCode) {
  if (!iframeCode) return ''
  if (iframeCode.startsWith('http')) return iframeCode
  const m = iframeCode.match(/src=["']([^"']+)["']/i)
  return m ? m[1] : ''
}

function getYtThumb(src) {
  if (!src) return null
  const m = src.match(/youtube\.com\/embed\/([\w-]{11})/)
  return m ? `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg` : null
}

// Normalize the dedicated short-video and personalysis datasets from lib/data.js
// into the shape expected by the lecture page cards and filters.
function buildSectionItems(sectionData, prefix) {
  return Object.entries(sectionData).flatMap(([sectionName, section]) =>
    (section?.videos || []).map((video, index) => ({
      ...video,
      id: `${prefix}-${sectionName}-${index + 1}`,
      subject: video.chapter || sectionName,
      locked: prefix === 'pa',
      duration: video.duration || '8 min',
    })),
  )
}

const SHORT_VIDEOS = buildSectionItems(SHORT_VIDEOS_DATA, 'sv')
const PERSONALYSIS = buildSectionItems(PERSONALYSIS_DATA, 'pa')

// Map of lecture ID -> global index across all lectures, so the free limit
// (first N lectures overall) is enforced correctly regardless of subject filtering.
const GLOBAL_INDEX_MAP = new Map(LECTURES_ARRAY.map((l, i) => [l.id, i]))

function isLectureFree({ item, idx, tab, subscribed, user }) {
  if (tab === 'personalysis') return !!user && subscribed
  if (subscribed) return true
  if (tab === 'shorts') return true // short videos are always free

  const globalIndex = GLOBAL_INDEX_MAP.get(item.id)
  if (typeof globalIndex === 'number') return globalIndex < FREE_LIMIT

  // Fallback for items not present in the map (shouldn't happen in normal operation).
  return typeof idx === 'number' ? idx < FREE_LIMIT : false
}

function loadStoredSubscription() {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(SUBSCRIPTION_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (parsed?.expiresAt && new Date(parsed.expiresAt) > new Date()) return parsed
    window.localStorage.removeItem(SUBSCRIPTION_STORAGE_KEY)
    return null
  } catch {
    return null
  }
}

function saveStoredSubscription(sub) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(SUBSCRIPTION_STORAGE_KEY, JSON.stringify(sub))
  } catch {
    // Storage may be unavailable (private browsing, quota exceeded, etc). Non-fatal.
  }
}

// Group a list of lectures by subject, matched against SUBJECTS metadata
// (icon/color/subtitle) with graceful fallbacks — used to render folder cards.
function buildSubjectFolders(list, subjectsMeta) {
  const bySubject = new Map()
  for (const item of list) {
    const key = item.subject || 'Other'
    if (!bySubject.has(key)) bySubject.set(key, [])
    bySubject.get(key).push(item)
  }
  return Array.from(bySubject.entries()).map(([name, items]) => {
    const meta = subjectsMeta?.find((s) => s.name === name)
    const total = items.length
    const filled = items.filter((i) => !!i.iframeCode).length
    return {
      name,
      icon: meta?.icon || '📚',
      subtitle: meta?.subtitle || '',
      total,
      filled,
      pct: total ? Math.round((filled / total) * 100) : 0,
    }
  })
}

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC MODAL SHELL
// Shared backdrop click-to-close, Escape-to-close, focus, and scroll-lock logic.
// Only used by PaywallModal now — VideoModal has been removed since all
// playback happens inline in the player card.
// ─────────────────────────────────────────────────────────────────────────────
function Modal({ onClose, children, ariaLabel, maxWidth = 'max-w-xl' }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-5 overflow-y-auto"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        tabIndex={-1}
        className={`card w-full ${maxWidth} overflow-hidden outline-none`}
      >
        {children}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// LIVE CLASSES SECTION
// Polls /api/classes every 60s, ticks a local clock every 15s to keep
// live/countdown state fresh without refetching.
// ─────────────────────────────────────────────────────────────────────────────
function LiveClassesSection() {
  const [classes, setClasses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const nowRef = useRef(Date.now())
  const [, forceTick] = useState(0)

  const fetchClasses = useCallback(() => {
    setError('')
    fetch('/api/classes', { credentials: 'include' })
      .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json() })
      .then((d) => {
        if (d.success) setClasses(d.events || [])
        else setError(d.message || 'API returned success:false')
      })
      .catch((err) => setError(err.message || 'Failed to load classes'))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => { fetchClasses() }, [fetchClasses])
  useEffect(() => {
    const id = setInterval(fetchClasses, LIVE_CLASSES_POLL_MS)
    return () => clearInterval(id)
  }, [fetchClasses])
  useEffect(() => {
    const id = setInterval(() => { nowRef.current = Date.now(); forceTick((t) => t + 1) }, LIVE_CLOCK_TICK_MS)
    return () => clearInterval(id)
  }, [])

  const isLive = (c) => c.startDateTime && c.endDateTime
    && new Date(c.startDateTime).getTime() <= nowRef.current
    && nowRef.current <= new Date(c.endDateTime).getTime()
  const isPast = (c) => c.endDateTime ? new Date(c.endDateTime).getTime() < nowRef.current : false
  const countdown = (c) => {
    if (!c.startDateTime) return null
    const diff = new Date(c.startDateTime).getTime() - nowRef.current
    if (diff <= 0) return null
    const totalMins = Math.floor(diff / 60_000)
    const h = Math.floor(totalMins / 60), m = totalMins % 60
    if (h > 24) return `in ${Math.floor(h / 24)}d ${h % 24}h`
    if (h > 0) return `in ${h}h ${m}m`
    return `in ${m}m`
  }

  const visible = classes
    .filter((c) => !isPast(c))
    .sort((a, b) => {
      const aLive = isLive(a), bLive = isLive(b)
      if (aLive && !bLive) return -1
      if (!aLive && bLive) return 1
      return new Date(a.startDateTime) - new Date(b.startDateTime)
    })

  if (loading) {
    return (
      <div className="card p-5 mb-5">
        <div className="space-y-2">
          <div className="h-16 bg-canvas rounded-xl animate-pulse" />
          <div className="h-16 bg-canvas rounded-xl animate-pulse" />
        </div>
      </div>
    )
  }

  return (
    <div className="card p-5 mb-5">
      <div className="space-y-2">
        {visible.map((c) => {
          const live = isLive(c)
          const timer = countdown(c)
          const id = c._id ? (typeof c._id === 'object' ? c._id.toString() : c._id) : c.id
          const endTime = c.endDateTime ? new Date(c.endDateTime).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) : null
          const hasMeetLink = c.meetLink && c.meetLink.startsWith('http')
          return (
            <div
              key={id}
              className={`flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl ${live ? 'bg-red-50 border border-red-200' : 'bg-canvas'}`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  {live && (
                    <span className="inline-flex items-center gap-1.5 bg-red-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE NOW
                    </span>
                  )}
                  {!live && timer && (
                    <span className="bg-brand-light text-brand text-[10px] font-bold px-2.5 py-0.5 rounded-full">⏰ {timer}</span>
                  )}
                  <span className="text-sm font-semibold text-ink">{c.title}</span>
                </div>
                <p className="text-xs text-muted">🕐 {fmtDateTime(c.startDateTime)}{endTime && ` → ${endTime}`}</p>
                {c.description && <p className="text-xs text-muted mt-0.5">{c.description}</p>}
              </div>
              {live ? (
                hasMeetLink ? (
                  <a
                    href={c.meetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-red-500 text-white text-sm font-bold whitespace-nowrap"
                  >
                    🔴 Join Now →
                  </a>
                ) : (
                  <div className="text-right shrink-0">
                    <p className="px-3 py-2 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">🔴 Class is Live</p>
                    <p className="text-[10px] text-red-500 mt-1">⚠️ No meeting link added yet</p>
                  </div>
                )
              ) : (
                <button disabled className="px-4 py-2 rounded-xl bg-canvas text-muted text-sm font-semibold cursor-not-allowed whitespace-nowrap">
                  ⚫ Join Live {timer ? `(${timer})` : ''}
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SUBJECT FOLDER GRID
// Browse a tab's content grouped by subject, with an upload-progress bar per
// folder. Clicking a folder drills into it (reuses the existing `subject`
// filter state, so the sidebar chips and this grid always stay in sync).
// ─────────────────────────────────────────────────────────────────────────────
function SubjectFolderGrid({ folders, onSelect }) {
  if (folders.length === 0) {
    return <div className="card p-8 text-center text-muted">No subjects available yet</div>
  }
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {folders.map((f) => (
        <button
          key={f.name}
          onClick={() => onSelect(f.name)}
          className="card p-4 text-left hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-2xl shrink-0">
              {f.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="font-display font-bold text-ink text-sm truncate">{f.name}</p>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-canvas text-muted whitespace-nowrap">
                  {f.total} videos
                </span>
              </div>
              {f.subtitle && <p className="text-xs text-muted mt-0.5 truncate">{f.subtitle}</p>}
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center justify-between text-[11px] text-muted mb-1">
              <span>{f.filled}/{f.total} uploaded</span>
              <span className="font-semibold text-brand">{f.pct}%</span>
            </div>
            <ProgressBar value={f.pct} />
          </div>
          <p className="mt-3 text-xs font-semibold text-brand">📂 Open {f.name} →</p>
        </button>
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PAYWALL MODAL
// ─────────────────────────────────────────────────────────────────────────────
function PaywallModal({ totalLectures, onSuccess, onClose }) {
  const [selected, setSelected] = useState('quarterly')
  const plan = PLANS[selected]
  const isDev = process.env.NODE_ENV !== 'production'

  return (
    <Modal onClose={onClose} ariaLabel="Unlock all lectures">
      <div className="bg-violet p-7 relative text-white">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center"
        >
          ×
        </button>
        <p className="text-3xl mb-2">👑</p>
        <p className="font-display font-extrabold text-xl mb-1">Unlock All Lectures</p>
        <p className="text-sm text-white/80">
          First {FREE_LIMIT} lectures free. Subscribe to access all {totalLectures} lectures.
        </p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {['🎬 All Lectures', '⚡ Short Videos', '🧠 Personalysis'].map((p) => (
            <span key={p} className="bg-white/15 text-xs font-semibold px-3 py-1 rounded-full">{p}</span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <p className="font-display font-bold text-sm text-ink mb-3">Choose Your Plan</p>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {Object.values(PLANS).map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelected(p.id)}
              aria-pressed={selected === p.id}
              className={`relative rounded-xl border-2 p-3 text-left cursor-pointer ${
                selected === p.id ? 'border-brand bg-brand-light' : 'border-canvas'
              }`}
            >
              {p.badge && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                  {p.badge}
                </span>
              )}
              <p className="font-bold text-sm text-ink">{p.label}</p>
              <p className="text-lg font-extrabold text-ink">
                ₹{p.price} <span className="text-xs text-muted line-through font-normal">₹{p.originalPrice}</span>
              </p>
              <p className="text-xs text-muted">{p.durationDays} days</p>
            </button>
          ))}
        </div>

        <div className="bg-canvas rounded-xl p-4 mb-5">
          <p className="text-sm font-semibold text-ink mb-2">What you get with {plan.label}:</p>
          {plan.features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-ink mb-1">
              <Icon name="check" size={14} className="text-brand shrink-0" /> {f}
            </div>
          ))}
        </div>

        <button
          onClick={() => onSuccess({
            planLabel: plan.label,
            expiresAt: new Date(Date.now() + plan.durationDays * 86400000).toISOString(),
          })}
          className="w-full py-3 rounded-xl bg-brand text-white font-bold mb-2"
        >
          💳 Pay ₹{plan.price}
        </button>

        {/* Demo activation button — only rendered outside production builds. */}
        {isDev && (
          <button
            onClick={() => onSuccess({
              planLabel: 'Demo (dev)',
              expiresAt: new Date(Date.now() + 24 * 3600 * 1000).toISOString(),
            })}
            className="w-full py-2 rounded-xl bg-white text-ink font-medium border border-line"
          >
            🧪 Demo Mode — Activate Free (Testing Only)
          </button>
        )}

        <p className="text-center text-xs text-muted mt-2">🔒 Secured payment · Instant activation</p>
      </div>
    </Modal>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO CARD
// Distinguishes three states: free & playable, locked/premium, and
// "coming soon" (slot exists but no iframeCode uploaded yet).
// Clicking a free card now plays inline in the shared player above —
// it no longer opens a popup modal.
// ─────────────────────────────────────────────────────────────────────────────
function VideoCard({ item, idx, isFree, isActive, onPlay, onLock }) {
  const src = extractSrc(item.iframeCode)
  const thumb = getYtThumb(src)
  const hasVideo = !!item.iframeCode
  const locked = hasVideo && !isFree

  function handleClick() {
    if (!hasVideo) return
    if (locked) { onLock(); return }
    onPlay(item)
  }

  return (
    <button
      onClick={handleClick}
      disabled={!hasVideo}
      aria-current={isActive}
      className={`card text-left overflow-hidden transition-shadow ${
        isActive ? 'ring-2 ring-brand' : ''
      } ${hasVideo ? 'hover:shadow-md cursor-pointer' : 'opacity-60 cursor-default'}`}
    >
      <div className="relative aspect-video bg-canvas flex items-center justify-center text-4xl overflow-hidden">
        {hasVideo && thumb ? (
          <img src={thumb} alt={item.title} className={`w-full h-full object-cover ${locked ? 'opacity-30' : ''}`} />
        ) : (
          <span>{hasVideo ? (item.thumb || '🎬') : '⏳'}</span>
        )}

        <div className="absolute inset-0 flex items-center justify-center">
          {hasVideo ? (
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${locked ? 'bg-violet' : 'bg-white/90'}`}>
              <Icon name={locked ? 'lock' : 'play'} size={16} className={locked ? 'text-white' : 'text-ink'} />
            </div>
          ) : (
            <span className="bg-black/50 text-white text-[10px] font-semibold px-3 py-1 rounded-full">Coming Soon</span>
          )}
        </div>

        {hasVideo && (
          <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${locked ? 'bg-violet text-white' : 'bg-green-500 text-white'}`}>
            {locked ? '👑 PREMIUM' : '🆓 FREE'}
          </span>
        )}
        {typeof idx === 'number' && (
          <span className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
            #{idx + 1}
          </span>
        )}
        {item.duration && (
          <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
            {item.duration}
          </span>
        )}
      </div>

      <div className="p-3">
        {item.chapter && (
          <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-canvas text-muted mb-1.5">
            {item.chapter}
          </span>
        )}
        <p className="text-sm font-semibold text-ink truncate">{item.title}</p>
        <p className="text-xs text-muted mt-0.5">{item.subject}</p>
        {locked && <p className="text-xs text-brand font-semibold mt-2">🔒 Subscribe to watch</p>}
        {!hasVideo && <p className="text-xs text-muted mt-2">Video will be uploaded soon</p>}
      </div>
    </button>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// LECTURE PLAYER (shared main panel across all three tabs)
// ─────────────────────────────────────────────────────────────────────────────
function LecturePlayer({ lecture, free, inlinePlaying, onPlay }) {
  const src = extractSrc(lecture.iframeCode)

  if (inlinePlaying && free) {
    return (
      <div className="relative aspect-video bg-black">
        {src ? (
          <iframe src={src} className="absolute inset-0 w-full h-full border-0" allowFullScreen title={lecture.title} />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-muted gap-2">
            <p className="text-4xl">{lecture.thumb || '🎬'}</p>
            <p className="text-sm font-semibold">Video coming soon</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <button onClick={onPlay} className="w-full block text-left">
      <div className="bg-violet aspect-video flex items-center justify-center text-6xl relative">
        {lecture.thumb}
        {!free && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Icon name="lock" size={28} className="text-white" />
          </div>
        )}
        {free && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
              <Icon name="play" size={22} className="text-ink" />
            </div>
          </div>
        )}
      </div>
    </button>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function LecturesPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [tab, setTab] = useState('lectures')
  const [subject, setSubject] = useState('All')
  const [search, setSearch] = useState('')
  const [active, setActive] = useState(() => LECTURES_ARRAY[0] ?? null)
  const [inlinePlaying, setInlinePlaying] = useState(false)
  const [showPaywall, setShowPaywall] = useState(false)
  const [subscription, setSubscription] = useState(null) // { planLabel, expiresAt } | null

  // Ref to the shared player card so we can smooth-scroll to it whenever a
  // video is chosen from a grid/sidebar list further down the page.
  const playerRef = useRef(null)

  // Restore any previously "purchased" subscription after mount (avoids SSR/client
  // hydration mismatch, since localStorage isn't available on the server).
  useEffect(() => {
    setSubscription(loadStoredSubscription())
  }, [])

  const subscribed = !!subscription
  const remainingDays = subscribed ? daysRemaining(subscription.expiresAt) : 0

  const source = useMemo(
    () => ({ lectures: LECTURES_ARRAY, shorts: SHORT_VIDEOS, personalysis: PERSONALYSIS }[tab]),
    [tab],
  )

  // Subject folders for the current tab (used by the browse-by-folder view on
  // Short Videos / Personalysis). Recomputed only when the tab changes.
  const folders = useMemo(() => buildSubjectFolders(source, SUBJECTS), [source])

  const filtered = useMemo(() => {
    let list = subject === 'All' ? source : source.filter((l) => l.subject === subject)
    if (search) {
      const q = search.toLowerCase()
      list = list.filter((l) => l.title.toLowerCase().includes(q))
    }
    return list
  }, [source, subject, search])

  const isItemFree = useCallback(
    (item, idx) => isLectureFree({ item, idx, tab, subscribed, user }),
    [tab, subscribed, user],
  )

  const handlePaySuccess = useCallback((newSub) => {
    setSubscription(newSub)
    setShowPaywall(false)
    saveStoredSubscription(newSub)
  }, [])

  // Switching tabs now also resets `active` to the first item of the new
  // tab's dataset, so the shared player always has something sensible to show.
  const handleTabChange = useCallback((t) => {
    setTab(t)
    setSubject('All')
    setSearch('')
    setInlinePlaying(false)
    const newSource = { lectures: LECTURES_ARRAY, shorts: SHORT_VIDEOS, personalysis: PERSONALYSIS }[t]
    setActive(newSource[0] ?? null)
  }, [])

  // Every tab now plays inline in the shared card — no more popup modal branch.
  const handlePlay = useCallback((item, idx) => {
    if (tab === 'personalysis' && !user) {
      router.push('/login')
      return
    }
    if (!isItemFree(item, idx)) {
      setShowPaywall(true)
      return
    }
    setActive(item)
    setInlinePlaying(true)
    // Scroll the player into view in case the click came from a grid/sidebar
    // item that's below the fold.
    playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [isItemFree, tab, user, router])

  const activeIsFree = active ? isItemFree(active) : false

  // Folder browsing only applies to the two flat-grid tabs, and only while
  // no subject/search filter has narrowed things down yet.
  const showFolderGrid = (tab === 'shorts' || tab === 'personalysis') && subject === 'All' && !search
  const accessNote = TAB_ACCESS_NOTE[tab]

  return (
    <AppShell>
      {showPaywall && (
        <PaywallModal
          totalLectures={LECTURES_ARRAY.length}
          onSuccess={handlePaySuccess}
          onClose={() => setShowPaywall(false)}
        />
      )}

      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <div>
          <h2 className="font-display font-bold text-ink text-lg">🎬 Recorded Lectures</h2>
          <p className="text-sm text-muted mt-1">
            {subscribed
              ? `👑 Premium active — ${subscription.planLabel} plan, ${remainingDays} day${remainingDays !== 1 ? 's' : ''} left (expires ${fmtDate(subscription.expiresAt)})`
              : `First ${FREE_LIMIT} lectures free · Short Videos always free · Subscribe to unlock Personalysis`}
          </p>
        </div>
        {!subscribed && (
          <button onClick={() => setShowPaywall(true)} className="px-4 py-2 rounded-xl bg-brand text-white text-sm font-semibold">
            👑 Get Premium
          </button>
        )}
      </div>

      {/* Live Classes */}
      <LiveClassesSection />

      {/* Search */}
      <div className="flex items-center gap-2 card px-3 py-2">
        <Icon name="search" size={16} className="text-muted" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Search in ${tab}…`}
          aria-label={`Search in ${tab}`}
          className="bg-transparent outline-none text-sm flex-1 text-ink"
        />
        {search && (
          <button onClick={() => setSearch('')} aria-label="Clear search" className="text-muted text-lg leading-none">
            ×
          </button>
        )}
      </div>

      {/* Subscription / free banner */}
      {subscribed ? (
        <div className="card bg-green-50 border border-green-200 p-4 mb-5 mt-5 flex items-center justify-between flex-wrap gap-3">
          <p className="text-sm font-semibold text-green-700">
            ✅ All content unlocked — {subscription.planLabel} plan · {remainingDays} day{remainingDays !== 1 ? 's' : ''} remaining
          </p>
          <button onClick={() => setShowPaywall(true)} className="text-xs font-semibold text-green-700 underline">Renew →</button>
        </div>
      ) : (
        <div className="card bg-brand-light p-4 mb-5 mt-5 flex items-center justify-between flex-wrap gap-3">
          <p className="text-sm text-ink">🎁 First {FREE_LIMIT} lectures free across all subjects — subscribe to unlock everything.</p>
          <button onClick={() => setShowPaywall(true)} className="px-4 py-2 rounded-xl bg-brand text-white text-xs font-bold whitespace-nowrap">Unlock All →</button>
        </div>
      )}

      {tab === 'personalysis' && !user && (
        <div className="card border border-dashed border-brand-light p-4 mb-5 text-sm text-ink">
          <p className="font-semibold mb-2">🔒 Personalysis videos require login</p>
          <p className="text-muted mb-4">Please sign in to unlock expert Personalysis content.</p>
          <button
            type="button"
            onClick={() => router.push('/login')}
            className="px-4 py-2 rounded-xl bg-brand text-white text-sm font-semibold"
          >
            Log in to continue
          </button>
        </div>
      )}

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex gap-1 bg-canvas rounded-xl p-1 w-fit" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => handleTabChange(t.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold ${tab === t.id ? 'bg-brand text-white' : 'text-muted'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        {accessNote && (
          <span className="text-xs font-semibold text-muted bg-canvas px-3 py-1.5 rounded-full">
            {accessNote.icon} {accessNote.text}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
        {/* Player / grid */}
        <div className="space-y-5">
          {/* Shared player card — renders for ALL tabs now (lectures, shorts,
              personalysis). Clicking any playable item anywhere on the page
              updates `active`/`inlinePlaying` and this card swaps to that video. */}
          {active ? (
            <div ref={playerRef} className="card overflow-hidden scroll-mt-4">
              <LecturePlayer
                lecture={active}
                free={activeIsFree}
                inlinePlaying={inlinePlaying}
                onPlay={() => handlePlay(active)}
              />
              <div className="p-6">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  {active.chapter && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-light text-brand">
                      {active.chapter}
                    </span>
                  )}
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      activeIsFree ? 'bg-green-500 text-white' : 'bg-violet text-white'
                    }`}
                  >
                    {activeIsFree ? '🆓 FREE' : '👑 PREMIUM'}
                  </span>
                </div>
                <h2 className="font-display font-bold text-ink text-lg mb-1">{active.title}</h2>
                <p className="text-sm text-muted mb-2">{active.subject} · {active.duration}</p>
                {active.description && (
                  <p className="text-sm text-muted mb-4">{active.description}</p>
                )}
                {/* Watched-progress bar only makes sense for the Lectures tab */}
                {tab === 'lectures' && (
                  <>
                    <ProgressBar value={active.watched} />
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs text-muted">{active.watched}% watched</p>
                      {active.uploadedAt && (
                        <p className="text-xs text-muted">{fmtDate(active.uploadedAt)}</p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="card p-8 text-center text-muted">No videos available yet</div>
          )}

          {(tab === 'shorts' || tab === 'personalysis') && (
            <>
              {/* Stats row — mirrors the section header stats from the folder-based UI */}
              {subject === 'All' && (
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: '📂', val: folders.length, label: 'Subjects' },
                    { icon: '✅', val: source.filter((i) => !!i.iframeCode).length, label: 'Uploaded' },
                    { icon: '⏳', val: source.filter((i) => !i.iframeCode).length, label: 'Coming Soon' },
                  ].map((s) => (
                    <div key={s.label} className="card px-3 py-2 flex items-center gap-2">
                      <span className="text-base">{s.icon}</span>
                      <div>
                        <p className="font-bold text-sm text-ink leading-none">{s.val}</p>
                        <p className="text-[11px] text-muted">{s.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {subject !== 'All' && (
                <button
                  onClick={() => setSubject('All')}
                  className="text-xs font-semibold text-brand flex items-center gap-1"
                >
                  ← All Subjects
                </button>
              )}

              {showFolderGrid ? (
                <SubjectFolderGrid folders={folders} onSelect={setSubject} />
              ) : (
                <div className="grid sm:grid-cols-2 gap-4">
                  {filtered.length === 0 ? (
                    <div className="card p-8 text-center text-muted col-span-2">No videos found</div>
                  ) : (
                    filtered.map((item, idx) => (
                      <VideoCard
                        key={item.id}
                        item={item}
                        idx={idx}
                        isFree={isItemFree(item, idx)}
                        isActive={active?.id === item.id}
                        onPlay={(i) => handlePlay(i, idx)}
                        onLock={() => setShowPaywall(true)}
                      />
                    ))
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Sidebar list */}
        <div className="card p-5">
          <div className="flex flex-wrap gap-2 mb-4">
            {['All', ...SUBJECTS.map((s) => s.name)].map((s) => (
              <button
                key={s}
                onClick={() => setSubject(s)}
                aria-pressed={subject === s}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${subject === s ? 'bg-brand text-white' : 'bg-canvas text-muted'}`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
            {filtered.length === 0 && (
              <p className="text-sm text-muted text-center py-6">No items match your filters</p>
            )}
            {filtered.map((l, idx) => {
              const free = isItemFree(l, idx)
              const isActive = active?.id === l.id
              const hasVideo = !!l.iframeCode
              return (
                <button
                  key={l.id}
                  onClick={() => handlePlay(l, idx)}
                  disabled={!hasVideo}
                  aria-current={isActive}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors ${
                    isActive ? 'bg-brand-light' : hasVideo ? 'hover:bg-canvas' : 'opacity-60 cursor-default'
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-xl shrink-0">
                    {hasVideo ? l.thumb : '⏳'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{l.title}</p>
                    <p className="text-xs text-muted">{l.subject} · {l.duration}</p>
                    {/* Chapter tag — lecture-tab only, mirrors the folder/grid version's per-card chapter tag */}
                    {tab === 'lectures' && l.chapter && (
                      <span className="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-canvas text-muted">
                        {l.chapter}
                      </span>
                    )}
                  </div>
                  {/* FREE/PRO badge — lecture-tab only */}
                  {tab === 'lectures' && hasVideo && (
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${
                        free ? 'bg-green-500 text-white' : 'bg-violet text-white'
                      }`}
                    >
                      {free ? 'FREE' : 'PRO'}
                    </span>
                  )}
                  {!hasVideo ? (
                    <span className="text-[9px] font-bold text-muted shrink-0">SOON</span>
                  ) : !free ? (
                    <Icon name="lock" size={16} className="text-violet shrink-0" />
                  ) : l.watched === 100 ? (
                    <Icon name="check" size={16} className="text-brand shrink-0" />
                  ) : (
                    <Icon name="play" size={16} className="text-muted shrink-0" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      {!subscribed && (
        <div className="mt-8 bg-violet rounded-2xl p-8 text-center text-white">
          <p className="text-4xl mb-3">🚀</p>
          <p className="font-display font-extrabold text-xl mb-2">Ready to Unlock Everything?</p>
          <p className="text-sm text-white/80 mb-5">Get unlimited access to all lectures, short videos, personalysis & more — starting at ₹299/month.</p>
          <button onClick={() => setShowPaywall(true)} className="px-8 py-3 rounded-xl bg-amber-400 text-ink font-bold">
            👑 Subscribe Now →
          </button>
        </div>
      )}
    </AppShell>
  )
}