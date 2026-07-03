'use client'

import { useState, useEffect } from 'react'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { ProgressBar } from '@/components/UI'
import { LECTURES, SUBJECTS } from '@/lib/data'

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const FREE_LIMIT = 2
const PLANS = {
  monthly: { id: 'monthly', label: 'Monthly', price: 299, originalPrice: 499, durationDays: 30, features: ['All recorded lectures', 'Short videos', 'Personalysis', 'Live class access'] },
  quarterly: { id: 'quarterly', label: 'Quarterly', price: 699, originalPrice: 1299, durationDays: 90, badge: 'Most Popular', features: ['Everything in Monthly', 'Priority doubt support', 'Mock test access'] },
  yearly: { id: 'yearly', label: 'Yearly', price: 1999, originalPrice: 4999, durationDays: 365, badge: 'Best Value', features: ['Everything in Quarterly', 'Lowest price/month', '1-on-1 mentor session'] },
}

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

// Build SHORT_VIDEOS + PERSONALYSIS lazily from existing LECTURES/SUBJECTS
// so we don't need a separate data source — short videos reuse the same
// lecture list (marked free), personalysis is a locked subset.
function buildVariant(list, prefix) {
  return list.map((l, i) => ({ ...l, id: `${prefix}-${l.id}`, locked: prefix === 'pa' }))
}
const SHORT_VIDEOS = buildVariant(LECTURES, 'sv')
const PERSONALYSIS = buildVariant(LECTURES, 'pa')

// ─────────────────────────────────────────────────────────────────────────────
// PAYWALL MODAL
// ─────────────────────────────────────────────────────────────────────────────
function PaywallModal({ totalLectures, onSuccess, onClose }) {
  const [selected, setSelected] = useState('quarterly')
  const plan = PLANS[selected]

  return (
    <div onClick={(e) => { if (e.target === e.currentTarget) onClose() }} className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-5 overflow-y-auto">
      <div className="card w-full max-w-xl overflow-hidden">
        <div className="bg-violet p-7 relative text-white">
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">×</button>
          <p className="text-3xl mb-2">👑</p>
          <p className="font-display font-extrabold text-xl mb-1">Unlock All Lectures</p>
          <p className="text-sm text-white/80">First {FREE_LIMIT} lectures free. Subscribe to access all {totalLectures} lectures.</p>
          <div className="flex gap-2 mt-3 flex-wrap">
            {['   All Lectures', '⚡ Short Videos', '🔬 Personalysis'].map((p) => (
              <span key={p} className="bg-white/15 text-xs font-semibold px-3 py-1 rounded-full">{p}</span>
            ))}
          </div>
        </div>
        <div className="p-6">
          <p className="font-display font-bold text-sm text-ink mb-3">Choose Your Plan</p>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {Object.values(PLANS).map((p) => (
              <div key={p.id} onClick={() => setSelected(p.id)} className={`relative rounded-xl border-2 p-3 cursor-pointer ${selected === p.id ? 'border-brand bg-brand-light' : 'border-canvas'}`}>
                {p.badge && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">{p.badge}</span>}
                <p className="font-bold text-sm text-ink">{p.label}</p>
                <p className="text-lg font-extrabold text-ink">₹{p.price} <span className="text-xs text-muted line-through font-normal">₹{p.originalPrice}</span></p>
                <p className="text-xs text-muted">{p.durationDays} days</p>
              </div>
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
          <button onClick={() => onSuccess({ planLabel: plan.label, expiresAt: new Date(Date.now() + plan.durationDays * 86400000).toISOString() })} className="w-full py-3 rounded-xl bg-brand text-white font-bold mb-2">
            💳 Pay ₹{plan.price}
          </button>
          <p className="text-center text-xs text-muted mt-2">🔒 Secured payment · Instant activation</p>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO MODAL
// ─────────────────────────────────────────────────────────────────────────────
function VideoModal({ lecture, onClose }) {
  const src = extractSrc(lecture.iframeCode)
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [onClose])

  return (
    <div onClick={(e) => { if (e.target === e.currentTarget) onClose() }} className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-5">
      <div className="card w-full max-w-3xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-canvas">
          <div>
            <p className="font-display font-bold text-ink text-sm">{lecture.title}</p>
            <p className="text-xs text-muted">{lecture.subject}{lecture.chapter ? ` · ${lecture.chapter}` : ''}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg bg-canvas flex items-center justify-center text-lg">×</button>
        </div>
        <div className="relative pb-[56.25%] bg-black">
          {src ? (
            <iframe src={src} className="absolute inset-0 w-full h-full border-0" allowFullScreen title={lecture.title} />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted gap-2">
              <p className="text-4xl">{lecture.thumb || '  '}</p>
              <p className="text-sm font-semibold">Video coming soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
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
          <span>{item.thumb || '  '}</span>
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
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
const TABS = [
  { id: 'lectures', label: '   Lectures' },
  { id: 'shorts', label: ' Short Videos' },
  { id: 'personalysis', label: ' Personalysis' },
]

export default function LecturesPage() {
  const [tab, setTab] = useState('lectures')
  const [subject, setSubject] = useState('All')
  const [search, setSearch] = useState('')
  const [active, setActive] = useState(LECTURES[0])
  const [activeVideo, setActiveVideo] = useState(null)
  const [showPaywall, setShowPaywall] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [sub, setSub] = useState(null)

  const sourceMap = { lectures: LECTURES, shorts: SHORT_VIDEOS, personalysis: PERSONALYSIS }
  const source = sourceMap[tab]

  let filtered = subject === 'All' ? source : source.filter((l) => l.subject === subject)
  if (search) filtered = filtered.filter((l) => l.title.toLowerCase().includes(search.toLowerCase()))

  function isItemFree(item, idx) {
    if (subscribed) return true
    if (tab === 'shorts') return true // short videos always free
    if (tab === 'personalysis') return false // personalysis always locked unless subscribed
    return idx < FREE_LIMIT // lectures: first N free
  }

  function handlePaySuccess(newSub) {
    setSub(newSub)
    setSubscribed(true)
    setShowPaywall(false)
  }

  function handleTabChange(t) {
    setTab(t)
    setSubject('All')
    setSearch('')
  }

  function handlePlay(item, idx) {
    if (!isItemFree(item, idx)) { setShowPaywall(true); return }
    setActiveVideo(item)
    if (tab === 'lectures') setActive(item)
  }

  return (
    <AppShell>
      {activeVideo && <VideoModal lecture={activeVideo} onClose={() => setActiveVideo(null)} />}
      {showPaywall && <PaywallModal totalLectures={LECTURES.length} onSuccess={handlePaySuccess} onClose={() => setShowPaywall(false)} />}

      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <div>
          <h2 className="font-display font-bold text-ink text-lg">   Recorded Lectures</h2>
          <p className="text-sm text-muted mt-1">
            {subscribed
              ? ` Premium active — ${sub?.planLabel} plan, expires ${fmtDate(sub?.expiresAt)}`
              : `First ${FREE_LIMIT} lectures free · Short Videos always free · Subscribe to unlock Personalysis`}
          </p>
        </div>
        {!subscribed && (
          <button onClick={() => setShowPaywall(true)} className="px-4 py-2 rounded-xl bg-brand text-white text-sm font-semibold">
             Get Premium
          </button>
        )}
      </div>

      {/* Subscription / free banner */}
      {subscribed ? (
        <div className="card bg-green-50 border border-green-200 p-4 mb-5 flex items-center justify-between flex-wrap gap-3">
          <p className="text-sm font-semibold text-green-700">✅ All content unlocked — {sub?.planLabel} plan</p>
          <button onClick={() => setShowPaywall(true)} className="text-xs font-semibold text-green-700 underline">Renew →</button>
        </div>
      ) : (
        <div className="card bg-brand-light p-4 mb-5 flex items-center justify-between flex-wrap gap-3">
          <p className="text-sm text-ink">   First {FREE_LIMIT} lectures free across all subjects — subscribe to unlock everything.</p>
          <button onClick={() => setShowPaywall(true)} className="px-4 py-2 rounded-xl bg-brand text-white text-xs font-bold whitespace-nowrap">Unlock All →</button>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-1 bg-canvas rounded-xl p-1 mb-5 w-fit">
        {TABS.map((t) => (
          <button
            key={t.id}
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
            <div className="card overflow-hidden">
              <div className="bg-violet aspect-video flex items-center justify-center text-6xl">{active.thumb}</div>
              <div className="p-6">
                <h2 className="font-display font-bold text-ink text-lg mb-1">{active.title}</h2>
                <p className="text-sm text-muted mb-4">{active.subject} · {active.duration}</p>
                <ProgressBar value={active.watched} />
                <p className="text-xs text-muted mt-2">{active.watched}% watched</p>
              </div>
            </div>
          )}

          {/* Search */}
          <div className="flex items-center gap-2 card px-3 py-2">
            <Icon name="search" size={16} className="text-muted" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search in ${tab}…`}
              className="bg-transparent outline-none text-sm flex-1 text-ink"
            />
            {search && <button onClick={() => setSearch('')} className="text-muted text-lg leading-none">×</button>}
          </div>

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
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${subject === s ? 'bg-brand text-white' : 'bg-canvas text-muted'}`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
            {filtered.map((l, idx) => {
              const free = isItemFree(l, idx)
              return (
                <button
                  key={l.id}
                  onClick={() => handlePlay(l, idx)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors ${
                    tab === 'lectures' && active.id === l.id ? 'bg-brand-light' : 'hover:bg-canvas'
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-xl shrink-0">{l.thumb}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{l.title}</p>
                    <p className="text-xs text-muted">{l.subject} · {l.duration}</p>
                  </div>
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