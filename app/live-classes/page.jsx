'use client'

import { useState, useMemo } from 'react'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { LIVE_CLASSES } from '@/lib/data'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const HOURS = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']

const TONE = {
  live: { bar: 'bg-brand', bg: 'bg-brand-light', text: 'text-brand' },
  upcoming: { bar: 'bg-brand', bg: 'bg-brand-light', text: 'text-brand' },
  scheduled: { bar: 'bg-brand', bg: 'bg-brand-light', text: 'text-brand' },
}

function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

export default function LiveClassesPage() {
  const today = useMemo(() => new Date(), [])
  const [monthIdx, setMonthIdx] = useState(today.getMonth())
  const [year] = useState(today.getFullYear())
  const [selectedDate, setSelectedDate] = useState(today.getDate())
  const [joined, setJoined] = useState(null)
  const [miniMonth, setMiniMonth] = useState(today.getMonth())

  const totalDays = daysInMonth(year, monthIdx)
  const stripDays = Array.from({ length: totalDays }, (_, i) => i + 1)
  const selectedDow = new Date(year, monthIdx, selectedDate).getDay()

  // Map classes onto hour slots for the selected day (cycled across data for demo)
  const dayClasses = useMemo(() => {
    return LIVE_CLASSES.map((c, i) => ({
      ...c,
      hour: HOURS[(i * 2 + 2) % HOURS.length],
    })).slice(0, 4)
  }, [])

  // Mini calendar grid
  const miniTotal = daysInMonth(year, miniMonth)
  const miniFirstDow = new Date(year, miniMonth, 1).getDay()
  const miniCells = []
  for (let i = 0; i < miniFirstDow; i++) miniCells.push(null)
  for (let d = 1; d <= miniTotal; d++) miniCells.push(d)

  function handleJoin(c) {
    if (c.status === 'scheduled') return
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
            {HOURS.map((h) => {
              const slotClass = dayClasses.find((c) => c.hour === h)
              const tone = slotClass ? TONE[slotClass.status] || TONE.scheduled : null
              return (
                <div key={h} className="flex items-start gap-4 py-3 border-b border-dashed border-canvas last:border-0">
                  <div className={`w-16 shrink-0 text-center text-xs font-semibold py-2 rounded-full ${h === '12:00' ? 'bg-brand text-white' : 'bg-canvas text-ink'}`}>
                    {h}
                  </div>
                  <div className="flex-1 min-h-[2.5rem]">
                    {slotClass && (
                      <button
                        onClick={() => handleJoin(slotClass)}
                        className={`w-full text-left rounded-lg ${tone.bg} border-l-4 ${tone.bar} px-4 py-2.5 max-w-md`}
                      >
                        <p className={`text-sm font-semibold ${tone.text}`}>{slotClass.title}</p>
                        <p className="text-xs text-muted flex items-center gap-1 mt-0.5">
                          <Icon name="clock" size={12} /> {slotClass.time} · {slotClass.teacher}
                        </p>
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
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
              <p className="text-2xl font-display font-bold text-violet">{LIVE_CLASSES.filter((c) => c.status !== 'scheduled').length.toString().padStart(2, '0')}</p>
              <p className="text-xs text-muted mt-1">Course in progress</p>
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-brand">{LIVE_CLASSES.filter((c) => c.status === 'scheduled').length.toString().padStart(2, '0')}</p>
              <p className="text-xs text-muted mt-1">Course Complete</p>
            </div>
          </div>

          <div className="card p-5">
            <p className="font-display font-bold text-ink mb-4">Reminders</p>
            <div className="space-y-4">
              {LIVE_CLASSES.slice(0, 2).map((c) => (
                <div key={c.id} className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${TONE[c.status]?.bg || 'bg-canvas'} ${TONE[c.status]?.text || 'text-muted'}`}>
                    <Icon name="bell" size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{c.title}</p>
                    <p className="text-xs text-muted">{c.time}</p>
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
            <p className="text-sm text-muted mb-5">{joined.title} with {joined.teacher} at {joined.time}.</p>
            <button onClick={() => setJoined(null)} className="bg-brand text-white text-sm font-semibold px-6 py-2.5 rounded-xl">Got it</button>
          </div>
        </div>
      )}
    </AppShell>
  )
}