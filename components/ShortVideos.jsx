'use client'

import { useState } from 'react'

const colors = {
  bg: '#F0F4FF',
  card: '#FFFFFF',
  border: '#E2E8F0',
  text: '#0F172A',
  muted: '#64748B',
  accent: '#F59E0B',
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

export default function ShortVideos({ dataConfig, videoKey = 'videos', accentColor, sectionIcon, sectionTitle, sectionDesc, subscribed, setActiveVideo, onLock }) {
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [search, setSearch] = useState('')

  const KEYS = Object.keys(dataConfig)
  const selectedCfg = selectedSubject ? dataConfig[selectedSubject] : null
  const selectedVideos = selectedCfg ? (selectedCfg[videoKey] || []) : []

  const filteredVideos = search
    ? selectedVideos.filter((v) =>
      v.title.toLowerCase().includes(search.toLowerCase()) ||
      (v.chapter || '').toLowerCase().includes(search.toLowerCase()))
    : selectedVideos

  // ===== FOLDER GRID =====
  if (!selectedSubject) {
    return (
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">{sectionIcon}</span>
          <div>
            <h3 className="font-bold text-lg text-ink">{sectionTitle}</h3>
            <p className="text-sm text-muted">{sectionDesc}</p>
          </div>
          <span className="ml-auto text-xs font-semibold bg-green-500 text-white px-3 py-1 rounded-full">🆓 Free</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {KEYS.map((subject) => {
            const cfg = dataConfig[subject]
            const items = cfg[videoKey] || []
            const total = items.length
            const filled = items.filter((v) => !!v.iframeCode).length

            return (
              <button
                key={subject}
                onClick={() => { setSelectedSubject(subject); setSearch(''); }}
                className="text-left card overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="h-1" style={{ background: cfg.color }} />
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="text-3xl">{cfg.icon}</div>
                    <span className="text-xs font-semibold bg-canvas text-muted px-2 py-1 rounded-full">{total} videos</span>
                  </div>
                  <h4 className="font-bold text-sm text-ink mb-1">{subject}</h4>
                  {cfg.subtitle && <p className="text-xs text-muted mb-3">{cfg.subtitle}</p>}
                  {cfg.examTags?.length > 0 && (
                    <div className="flex gap-2 flex-wrap mb-3">
                      {cfg.examTags.map((tag) => (
                        <span key={tag} className="text-[10px] font-semibold text-white px-2 py-0.5 rounded-full" style={{ background: cfg.color }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="bg-canvas rounded-lg p-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted">{filled} / {total} uploaded</span>
                      <span className="font-semibold" style={{ color: cfg.color }}>{Math.round((filled / total) * 100)}%</span>
                    </div>
                    <div className="h-1.5 bg-white rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${(filled / total) * 100}%`, background: cfg.color }} />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold" style={{ background: cfg.color + '15', color: cfg.color }}>
                    📂 Open {subject} →
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // ===== DRILL-DOWN VIEW =====
  return (
    <div>
      {/* Breadcrumb */}
      <div className="card p-4 mb-5 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="text-4xl">{selectedCfg.icon}</div>
          <div>
            <h3 className="font-bold text-lg text-ink">{selectedSubject}</h3>
            {selectedCfg.subtitle && <p className="text-sm text-muted">{selectedCfg.subtitle}</p>}
          </div>
        </div>
        <button
          onClick={() => { setSelectedSubject(null); setSearch(''); }}
          className="px-4 py-2 text-sm font-semibold bg-canvas text-muted rounded-lg hover:bg-canvas/80"
        >
          ← Back
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 card px-3 py-2 mb-5">
        <span className="text-muted">🔍</span>
        <input
          placeholder={`Search in ${selectedSubject}…`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none text-sm flex-1 text-ink"
        />
        {search && (
          <button onClick={() => setSearch('')} className="text-muted text-lg">×</button>
        )}
      </div>

      {/* Video Grid */}
      {filteredVideos.length === 0 ? (
        <div className="card p-12 text-center">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-lg font-semibold text-ink">No videos found</p>
          <p className="text-sm text-muted mt-1">Try a different search</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVideos.map((video, idx) => {
            const src = extractSrc(video.iframeCode)
            const thumbUrl = getYtThumb(src)
            const hasVideo = !!video.iframeCode

            return (
              <button
                key={idx}
                onClick={() => hasVideo && setActiveVideo({ ...video, subject: selectedSubject })}
                disabled={!hasVideo}
                className="card text-left overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-default"
              >
                <div className="relative aspect-video bg-slate-900 flex items-center justify-center overflow-hidden">
                  {hasVideo && thumbUrl ? (
                    <img src={thumbUrl} alt={video.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-4xl">{hasVideo ? '🎬' : '⏳'}</div>
                  )}
                  {hasVideo && (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                          ▶
                        </div>
                      </div>
                      <span className="absolute top-2 left-2 text-xs font-bold bg-green-500 text-white px-2 py-1 rounded-full">🆓 FREE</span>
                    </>
                  )}
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    {video.chapter && (
                      <span className="text-xs font-semibold bg-canvas text-muted px-2 py-0.5 rounded-full">{video.chapter}</span>
                    )}
                    <span className="text-xs font-bold">#{idx + 1}</span>
                  </div>
                  <p className="text-sm font-semibold text-ink line-clamp-2 mb-1">{video.title}</p>
                  {video.description && <p className="text-xs text-muted line-clamp-2 mb-2">{video.description}</p>}
                  {!hasVideo && (
                    <div className="bg-canvas px-2 py-1 rounded text-xs text-muted text-center font-semibold">
                      ⏳ Coming Soon
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
