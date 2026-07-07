'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { ProgressBar } from '@/components/UI'
import { useAuth } from '@/lib/auth-context'
import { LECTURES_ARRAY, SUBJECTS } from '@/lib/data'

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const FREE_LIMIT = 2
const SUBSCRIPTION_STORAGE_KEY = 'dgca_lectures_subscription'

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

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function fmtDate(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
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

// Build SHORT_VIDEOS + PERSONALYSIS lazily from existing LECTURES/SUBJECTS so we
// don't need a separate data source — short videos reuse the same lecture list
// (marked free), personalysis is a locked subset. Computed once at module load.
function buildVariant(list, prefix) {
  return list.map((l) => ({ ...l, id: `${prefix}-${l.id}`, locked: prefix === 'pa' }))
}
const SHORT_VIDEOS = buildVariant(LECTURES_ARRAY, 'sv')
const PERSONALYSIS = buildVariant(LECTURES_ARRAY, 'pa')

// Map of lecture ID -> global index across all lectures, so the free limit
// (first N lectures overall) is enforced correctly regardless of subject filtering.
const GLOBAL_INDEX_MAP = new Map(LECTURES_ARRAY.map((l, i) => [l.id, i]))

function isLectureFree({ item, idx, tab, subscribed, user }) {
  if (tab === 'personalysis') return !!user
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

// ─────────────────────────────────────────────────────────────────────────────
// GENERIC MODAL SHELL
// Shared backdrop click-to-close, Escape-to-close, focus, and scroll-lock logic
// so VideoModal and PaywallModal don't each reimplement it slightly differently.
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
// VIDEO MODAL
// ─────────────────────────────────────────────────────────────────────────────
function VideoModal({ lecture, onClose }) {
  const src = extractSrc(lecture.iframeCode)

  return (
    <Modal onClose={onClose} ariaLabel={lecture.title} maxWidth="max-w-3xl">
      <div className="flex items-center justify-between p-4 border-b border-canvas">
        <div>
          <p className="font-display font-bold text-ink text-sm">{lecture.title}</p>
          <p className="text-xs text-muted">{lecture.subject}{lecture.chapter ? ` · ${lecture.chapter}` : ''}</p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="w-8 h-8 rounded-lg bg-canvas flex items-center justify-center text-lg"
        >
          ×
        </button>
      </div>
      <div className="relative pb-[56.25%] bg-black">
        {src ? (
          <iframe src={src} className="absolute inset-0 w-full h-full border-0" allowFullScreen title={lecture.title} />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-muted gap-2">
            <p className="text-4xl">{lecture.thumb || '🎬'}</p>
            <p className="text-sm font-semibold">Video coming soon</p>
          </div>
        )}
      </div>
    </Modal>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO CARD
// ─────────────────────────────────────────────────────────────────────────────
function VideoCard({ item, isFree, onPlay, onLock }) {
  const src = extractSrc(item.iframeCode)
  const thumb = getYtThumb(src)
  const locked = !isFree

  return (
    <button
      onClick={() => (locked ? onLock() : onPlay(item))}
      className="card text-left overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-video bg-canvas flex items-center justify-center text-4xl overflow-hidden">
        {thumb ? (
          <img src={thumb} alt={item.title} className={`w-full h-full object-cover ${locked ? 'opacity-30' : ''}`} />
        ) : (
          <span>{item.thumb || '🎬'}</span>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${locked ? 'bg-violet' : 'bg-white/90'}`}>
            <Icon name={locked ? 'lock' : 'play'} size={16} className={locked ? 'text-white' : 'text-ink'} />
          </div>
        </div>
        <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${locked ? 'bg-violet text-white' : 'bg-green-500 text-white'}`}>
          {locked ? '👑 PREMIUM' : '🆓 FREE'}
        </span>
      </div>
      <div className="p-3">
        <p className="text-sm font-semibold text-ink truncate">{item.title}</p>
        <p className="text-xs text-muted mt-0.5">{item.subject} · {item.duration}</p>
        {locked && <p className="text-xs text-brand font-semibold mt-2">🔒 Subscribe to watch</p>}
      </div>
    </button>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// LECTURE PLAYER (main panel on the "Lectures" tab)
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
  const [activeVideo, setActiveVideo] = useState(null)
  const [inlinePlaying, setInlinePlaying] = useState(false)
  const [showPaywall, setShowPaywall] = useState(false)
  const [subscription, setSubscription] = useState(null) // { planLabel, expiresAt } | null

  // Restore any previously "purchased" subscription after mount (avoids SSR/client
  // hydration mismatch, since localStorage isn't available on the server).
  useEffect(() => {
    setSubscription(loadStoredSubscription())
  }, [])

  const subscribed = !!subscription

  const source = useMemo(
    () => ({ lectures: LECTURES_ARRAY, shorts: SHORT_VIDEOS, personalysis: PERSONALYSIS }[tab]),
    [tab],
  )

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

  const handleTabChange = useCallback((t) => {
    setTab(t)
    setSubject('All')
    setSearch('')
    setInlinePlaying(false)
  }, [])

  const handlePlay = useCallback((item, idx) => {
    if (tab === 'personalysis' && !user) {
      router.push('/login')
      return
    }
    if (!isItemFree(item, idx)) {
      setShowPaywall(true)
      return
    }
    if (tab === 'lectures') {
      setActive(item)
      setInlinePlaying(true)
      return
    }
    // Shorts / Personalysis don't have a main inline panel, so they open in the popup modal.
    setActiveVideo(item)
  }, [isItemFree, tab, user, router])

  const activeIsFree = active ? isItemFree(active) : false

  return (
    <AppShell>
      {activeVideo && <VideoModal lecture={activeVideo} onClose={() => setActiveVideo(null)} />}
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
              ? `👑 Premium active — ${subscription.planLabel} plan, expires ${fmtDate(subscription.expiresAt)}`
              : `First ${FREE_LIMIT} lectures free · Short Videos always free · Subscribe to unlock Personalysis`}
          </p>
        </div>
        {!subscribed && (
          <button onClick={() => setShowPaywall(true)} className="px-4 py-2 rounded-xl bg-brand text-white text-sm font-semibold">
            👑 Get Premium
          </button>
        )}
      </div>

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
          <p className="text-sm font-semibold text-green-700">✅ All content unlocked — {subscription.planLabel} plan</p>
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
      <div className="flex gap-1 bg-canvas rounded-xl p-1 mb-5 w-fit" role="tablist">
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

      <div className="grid lg:grid-cols-[1fr_360px] gap-6">
        {/* Player / grid */}
        <div className="space-y-5">
          {tab === 'lectures' && (
            active ? (
              <div className="card overflow-hidden">
                <LecturePlayer
                  lecture={active}
                  free={activeIsFree}
                  inlinePlaying={inlinePlaying}
                  onPlay={() => handlePlay(active)}
                />
                <div className="p-6">
                  {/* Chapter + Free/Premium badges — lecture-tab only, mirrors the
                      richer info shown per-video in the folder/grid version. */}
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
                  <ProgressBar value={active.watched} />
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-muted">{active.watched}% watched</p>
                    {active.uploadedAt && (
                      <p className="text-xs text-muted">{fmtDate(active.uploadedAt)}</p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="card p-8 text-center text-muted">No lectures available yet</div>
            )
          )}

          {(tab === 'shorts' || tab === 'personalysis') && (
            <div className="grid sm:grid-cols-2 gap-4">
              {filtered.length === 0 ? (
                <div className="card p-8 text-center text-muted col-span-2">No videos found</div>
              ) : (
                filtered.map((item, idx) => (
                  <VideoCard
                    key={item.id}
                    item={item}
                    isFree={isItemFree(item, idx)}
                    onPlay={(i) => handlePlay(i, idx)}
                    onLock={() => setShowPaywall(true)}
                  />
                ))
              )}
            </div>
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
              const isActive = tab === 'lectures' && active?.id === l.id
              return (
                <button
                  key={l.id}
                  onClick={() => handlePlay(l, idx)}
                  aria-current={isActive}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors ${
                    isActive ? 'bg-brand-light' : 'hover:bg-canvas'
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-xl shrink-0">{l.thumb}</div>
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
                  {tab === 'lectures' && (
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${
                        free ? 'bg-green-500 text-white' : 'bg-violet text-white'
                      }`}
                    >
                      {free ? 'FREE' : 'PRO'}
                    </span>
                  )}
                  {!free ? (
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