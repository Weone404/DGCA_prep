'use client'

import { useEffect, useState, useMemo } from 'react'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const TONE = {
  live: { bar: 'bg-brand', bg: 'bg-brand-light', text: 'text-brand' },
  upcoming: { bar: 'bg-brand', bg: 'bg-brand-light', text: 'text-brand' },
  scheduled: { bar: 'bg-brand', bg: 'bg-brand-light', text: 'text-brand' },
  ended: { bar: 'bg-gray-400', bg: 'bg-gray-100', text: 'text-gray-600' },
}

function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function formatClassTime(startDateTime, endDateTime) {
  const start = new Date(startDateTime)
  if (!Number.isFinite(start.getTime())) return ''

  const startLabel = start.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  if (!endDateTime) return startLabel

  const end = new Date(endDateTime)
  if (!Number.isFinite(end.getTime())) return startLabel

  const endLabel = end.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  return `${startLabel} - ${endLabel}`
}

function getHourLabel(hour) {
  return new Date(2000, 0, 1, hour, 0).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}

export default function LiveClassesPage() {
  const today = useMemo(() => new Date(), [])
  const [liveClasses, setLiveClasses] = useState([])
  const [loading, setLoading] = useState(true)
  const [monthIdx, setMonthIdx] = useState(today.getMonth())
  const [year] = useState(today.getFullYear())
  const [selectedDate, setSelectedDate] = useState(today.getDate())
  const [joined, setJoined] = useState(null)
  const [miniMonth, setMiniMonth] = useState(today.getMonth())

  useEffect(() => {
    let active = true

    async function loadClasses() {
      try {
        const response = await fetch('/api/live-classes', {
          credentials: 'include',
        })
        if (!response.ok) throw new Error('Failed to load classes')
        const data = await response.json()
        if (active) {
          setLiveClasses(Array.isArray(data) ? data : [])
        }
      } catch (error) {
        console.error('Error loading live classes:', error)
        if (active) {
          setLiveClasses([])
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadClasses()

    return () => {
      active = false
    }
  }, [])

  const totalDays = daysInMonth(year, monthIdx)
  const stripDays = Array.from({ length: totalDays }, (_, i) => i + 1)

  const dayClasses = useMemo(() => {
    return liveClasses
      .map((c) => {
        const classDate = c.start_date_time ? new Date(c.start_date_time) : null
        if (!classDate || !Number.isFinite(classDate.getTime())) return null

        const sameDay = classDate.getMonth() === monthIdx && classDate.getDate() === selectedDate
        if (!sameDay) return null

        return {
          ...c,
          classDate,
          hourKey: classDate.getHours(),
          hourLabel: getHourLabel(classDate.getHours()),
          displayTime: formatClassTime(c.start_date_time, c.end_date_time),
        }
      })
      .filter(Boolean)
      .sort((a, b) => a.hourKey - b.hourKey || a.classDate - b.classDate)
  }, [liveClasses, monthIdx, selectedDate])

  const hourRows = useMemo(() => {
    const rows = new Map()

    dayClasses.forEach((c) => {
      if (!rows.has(c.hourKey)) {
        rows.set(c.hourKey, [])
      }
      rows.get(c.hourKey).push(c)
    })

    return Array.from(rows.entries())
      .sort(([a], [b]) => a - b)
      .map(([hourKey, classes]) => ({
        hourKey,
        hourLabel: getHourLabel(hourKey),
        classes,
      }))
  }, [dayClasses])

  // Mini calendar grid
  const miniTotal = daysInMonth(year, miniMonth)
  const miniFirstDow = new Date(year, miniMonth, 1).getDay()
  const miniCells = []
  for (let i = 0; i < miniFirstDow; i++) miniCells.push(null)
  for (let d = 1; d <= miniTotal; d++) miniCells.push(d)

  function handleJoin(c) {
    if (c.status === 'scheduled') return

    if (c.meet_link) {
      window.open(c.meet_link, '_blank', 'noopener,noreferrer')
      return
    }

    setJoined(c)
  }

  return (
    <AppShell>
      <div className="grid lg:grid-cols-[1fr_360px] gap-6">
        {/* MAIN SCHEDULE */}
        <div className="card overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4">
            <div className="flex items-center gap-2">
              <h2 className="font-display font-bold text-ink text-lg">{MONTHS[monthIdx]}</h2>
              <span className="text-ink text-lg">{year}</span>
              <button onClick={() => setMonthIdx((m) => (m === 0 ? 11 : m - 1))} className="w-6 h-6 rounded-full text-muted hover:bg-canvas flex items-center justify-center">
                <Icon name="chevron-left" size={14} />
              </button>
              <button onClick={() => setMonthIdx((m) => (m === 11 ? 0 : m + 1))} className="w-6 h-6 rounded-full text-muted hover:bg-canvas flex items-center justify-center">
                <Icon name="chevron-right" size={14} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg bg-canvas text-xs font-semibold text-ink flex items-center gap-1">
                Monthly <Icon name="chevron-down" size={12} />
              </button>
              <button className="w-9 h-9 rounded-lg bg-canvas flex items-center justify-center text-muted">
                <Icon name="list" size={16} />
              </button>
              <button className="w-9 h-9 rounded-lg bg-brand flex items-center justify-center text-white">
                <Icon name="grid" size={16} />
              </button>
            </div>
          </div>

          {/* Month strip */}
          <div className="flex gap-5 px-6 pb-4 overflow-x-auto text-sm">
            {MONTHS.map((m, i) => (
              <button
                key={m}
                onClick={() => setMonthIdx(i)}
                className={`whitespace-nowrap font-medium ${i === monthIdx ? 'text-brand' : 'text-muted'}`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Day strip */}
          <div className="flex items-center gap-2 px-4 pb-4 border-b border-canvas">
            <button className="text-muted shrink-0 px-1">
              <Icon name="chevron-left" size={16} />
            </button>
            <div className="flex gap-3 overflow-x-auto flex-1 px-1">
              {stripDays.map((d) => {
                const dow = DOW[new Date(year, monthIdx, d).getDay()]
                const isSelected = d === selectedDate
                return (
                  <button key={d} onClick={() => setSelectedDate(d)} className="flex flex-col items-center gap-1 shrink-0">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center text-base font-semibold ${isSelected ? 'bg-brand text-white' : 'bg-canvas text-ink'}`}>
                      {d}
                    </div>
                    <span className={`text-xs ${isSelected ? 'text-brand font-semibold border-b-2 border-brand pb-1' : 'text-muted'}`}>{dow}</span>
                  </button>
                )
              })}
            </div>
            <button className="text-muted shrink-0 px-1">
              <Icon name="chevron-right" size={16} />
            </button>
          </div>

          {/* Time grid */}
          <div className="px-6 py-4">
            {loading ? (
              <div className="text-sm text-muted py-4">Loading classes…</div>
            ) : hourRows.length > 0 ? (
              hourRows.map(({ hourKey, hourLabel, classes }) => (
                <div key={hourKey} className="flex items-start gap-4 py-3 border-b border-dashed border-canvas last:border-0">
                  <div className={`w-16 shrink-0 text-center text-xs font-semibold py-2 rounded-full ${hourLabel === '12:00 PM' ? 'bg-brand text-white' : 'bg-canvas text-ink'}`}>
                    {hourLabel}
                  </div>
                  <div className="flex-1 min-h-[2.5rem] space-y-2">
                    {classes.map((slotClass) => {
                      const tone = TONE[slotClass.status] || TONE.scheduled
                      return (
                        <button
                          key={slotClass.id || `${hourKey}-${slotClass.title}-${slotClass.batch}`}
                          onClick={() => handleJoin(slotClass)}
                          className={`w-full text-left rounded-lg ${tone.bg} border-l-4 ${tone.bar} px-4 py-2.5 max-w-md`}
                        >
                          <p className={`text-sm font-semibold ${tone.text}`}>{slotClass.title}</p>
                          <p className="text-xs text-muted flex items-center gap-1 mt-0.5">
                            <Icon name="clock" size={12} /> {slotClass.displayTime} · {slotClass.batch || 'All Batches'}
                          </p>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-sm text-muted py-4">No classes for this day.</div>
            )}
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-5">
          <div className="card p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="font-display font-bold text-ink">
                {MONTHS[miniMonth]} <span className="font-normal text-muted">{year}</span>
              </p>
              <div className="flex gap-1">
                <button onClick={() => setMiniMonth((m) => (m === 0 ? 11 : m - 1))} className="w-7 h-7 rounded-full hover:bg-canvas text-muted flex items-center justify-center">
                  <Icon name="chevron-left" size={14} />
                </button>
                <button onClick={() => setMiniMonth((m) => (m === 11 ? 0 : m + 1))} className="w-7 h-7 rounded-full hover:bg-canvas text-muted flex items-center justify-center">
                  <Icon name="chevron-right" size={14} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-y-2 text-center text-xs">
              {DOW.map((d) => (
                <span key={d} className="text-muted font-medium">{d}</span>
              ))}
              {miniCells.map((d, i) => {
                const isSelected = d === selectedDate && miniMonth === monthIdx
                return (
                  <button
                    key={i}
                    disabled={!d}
                    onClick={() => { if (d) { setSelectedDate(d); setMonthIdx(miniMonth) } }}
                    className={`h-8 w-8 mx-auto rounded-full flex items-center justify-center text-sm ${
                      !d ? '' : isSelected ? 'bg-brand text-white font-semibold' : 'text-ink hover:bg-canvas'
                    }`}
                  >
                    {d || ''}
                  </button>
                )
              })}
            </div>
          </div>

          <button className="w-full bg-brand text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2">
            <Icon name="plus" size={16} /> Add New Task
          </button>

          <div className="card p-5 flex items-center justify-around text-center">
            <div>
              <p className="text-2xl font-display font-bold text-violet">{liveClasses.filter((c) => c.status === 'live').length.toString().padStart(2, '0')}</p>
              <p className="text-xs text-muted mt-1">Course in progress</p>
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-brand">{liveClasses.filter((c) => c.status === 'ended').length.toString().padStart(2, '0')}</p>
              <p className="text-xs text-muted mt-1">Course Complete</p>
            </div>
          </div>

          <div className="card p-5">
            <p className="font-display font-bold text-ink mb-4">Reminders</p>
            <div className="space-y-4">
              {liveClasses.slice(0, 2).map((c) => (
                <div key={c.id} className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${TONE[c.status]?.bg || 'bg-canvas'} ${TONE[c.status]?.text || 'text-muted'}`}>
                    <Icon name="bell" size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{c.title}</p>
                    <p className="text-xs text-muted">{formatClassTime(c.start_date_time, c.end_date_time)}</p>
                  </div>
                  <button className="text-muted px-1">
                    <Icon name="more-horizontal" size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {joined && (
        <div className="fixed inset-0 bg-ink/40 flex items-center justify-center z-50 p-4" onClick={() => setJoined(null)}>
          <div className="card p-7 max-w-sm w-full text-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-14 h-14 mx-auto rounded-full bg-brand-light flex items-center justify-center text-brand mb-4">
              <Icon name="video" size={22} />
            </div>
            <h3 className="font-display font-bold text-ink mb-1">{joined.status === 'live' ? 'Joining class…' : 'Reminder set!'}</h3>
            <p className="text-sm text-muted mb-5">{joined.title} for {joined.batch || 'all batches'} at {joined.displayTime || formatClassTime(joined.start_date_time, joined.end_date_time)}.</p>
            <button onClick={() => setJoined(null)} className="bg-brand text-white text-sm font-semibold px-6 py-2.5 rounded-xl">Got it</button>
          </div>
        </div>
      )}
    </AppShell>
  )
}