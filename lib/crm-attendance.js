/**
 * Read-only client for the CRM's partner attendance API.
 *
 * The CRM (FastAPI on Render) owns the biometric attendance data. This module
 * talks to it over HTTP only — it never opens a database connection, so there
 * is deliberately no `pg` import and nothing from lib/db.js here.
 *
 * Attendance is TWO STATES: present and absent. The institute has no fixed
 * class timings, so the CRM's hours-based grades (full_day / half_day /
 * short_day / missing_exit) all mean the same thing to us — the student was
 * here. We keep their in/out times as a note and nothing more.
 *
 * Every failure path (missing config, non-2xx, timeout, bad JSON, network
 * error) console.warns and returns null. Nothing in this module throws.
 */

const REQUEST_TIMEOUT_MS = 20000

// Sunday. Override with WEEKLY_OFF_DAYS (comma-separated, 0=Sunday..6=Saturday).
const DEFAULT_WEEKLY_OFF_DAYS = '0'

const IST_DATE_FORMAT = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Kolkata',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
})

export const EMPTY_ATTENDANCE = { present: 0, absent: 0, monthPct: 0, days: {}, recent: [] }

function onlyDigits(value) {
  return String(value ?? '').replace(/\D/g, '')
}

/**
 * The CRM matches on the last 10 digits, so '+91 98765 43210', '098765-43210'
 * and '9876543210' all resolve to the same student.
 */
export function lastTenDigits(value) {
  const digits = onlyDigits(value)
  return digits.length >= 10 ? digits.slice(-10) : ''
}

/** Today in Asia/Kolkata as 'YYYY-MM-DD' (en-CA formats as ISO). */
export function istToday() {
  return IST_DATE_FORMAT.format(new Date())
}

/** Current month in Asia/Kolkata as 'YYYY-MM'. */
export function istMonth() {
  return istToday().slice(0, 7)
}

function isValidMonth(value) {
  return /^\d{4}-\d{2}$/.test(String(value || ''))
}

function weeklyOffDays() {
  const raw = process.env.WEEKLY_OFF_DAYS ?? DEFAULT_WEEKLY_OFF_DAYS
  const days = new Set()
  for (const part of String(raw).split(',')) {
    const trimmed = part.trim()
    if (!trimmed) continue
    const day = Number(trimmed)
    if (Number.isInteger(day) && day >= 0 && day <= 6) days.add(day)
  }
  return days
}

/**
 * The single source of truth for present/absent/leave.
 *
 * Reads ONLY `status`. The CRM already folds an Admin's status_override into
 * that field server-side, so day_status and hours_worked must never be
 * consulted here — doing so would silently ignore manual corrections.
 */
export function classifyRow(row) {
  const status = String(row?.status || '').toLowerCase()
  if (status === 'absent') return 'absent'
  if (status === 'leave') return 'leave'
  // full_day, half_day, short_day, missing_exit — a punch exists, so: present.
  return 'present'
}

function formatTime(value) {
  if (!value) return ''
  const match = String(value).match(/(\d{1,2}):(\d{2})/)
  if (!match) return ''
  return `${match[1].padStart(2, '0')}:${match[2]}`
}

/** Times only — no verdict, no scolding. */
function buildNote(row) {
  const entry = formatTime(row?.entry_time)
  if (!entry) return ''
  const exit = formatTime(row?.exit_time)
  // A missing exit simply means they have not tapped out yet. Normal, not an error.
  return exit ? `In ${entry} • Out ${exit}` : `In ${entry} • still in`
}

/**
 * The ONLY inferred number in this module.
 *
 * The CRM stores punches, not absences: a day a student never showed up has no
 * row at all. So absence is derived — every day from the 1st up to today in
 * Asia/Kolkata, minus the weekly offs, minus days that do have a punch.
 *
 * Today itself is excluded while it is still in progress; counting it would
 * mark the entire student body absent every morning until they walk in.
 */
function inferrableDates(month) {
  const [year, monthIndex] = month.split('-').map(Number)
  if (!Number.isInteger(year) || !Number.isInteger(monthIndex)) return []

  const offDays = weeklyOffDays()
  const today = istToday()
  const daysInMonth = new Date(Date.UTC(year, monthIndex, 0)).getUTCDate()
  const dates = []

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = `${month}-${String(day).padStart(2, '0')}`
    // Stops at today for the current month; never trips for a past month.
    if (date >= today) break
    if (offDays.has(new Date(Date.UTC(year, monthIndex - 1, day)).getUTCDay())) continue
    dates.push(date)
  }

  return dates
}

/**
 * Turns a CRM payload into the app's attendance shape.
 *
 * Leave sits out of BOTH sides of the ratio: an approved leave must never drag
 * a student's percentage down, and it must not inflate it either.
 */
export function mapPartnerAttendance(payload) {
  const month = isValidMonth(payload?.month) ? payload.month : istMonth()
  const batch = String(payload?.student?.course || '')
  const days = {}
  let present = 0
  let absent = 0

  const rows = Array.isArray(payload?.days) ? payload.days : []
  for (const row of rows) {
    const date = String(row?.date || '').slice(0, 10)
    if (!date) continue
    const status = classifyRow(row)
    days[date] = status
    if (status === 'present') present += 1
    else if (status === 'absent') absent += 1
  }

  for (const date of inferrableDates(month)) {
    if (days[date]) continue
    days[date] = 'absent'
    absent += 1
  }

  const rated = present + absent
  const monthPct = rated ? Math.round((present / rated) * 100) : 0

  const recentRows = Array.isArray(payload?.recent) ? payload.recent : []
  const recent = recentRows
    .map((row) => ({
      date: String(row?.date || '').slice(0, 10),
      batch,
      status: classifyRow(row),
      note: buildNote(row),
    }))
    .filter((row) => row.date)

  return { present, absent, monthPct, days, recent }
}

/**
 * GET {CRM_API_URL}/api/partner/attendance/by-mobile. Returns the raw payload,
 * or null if anything at all went wrong.
 */
export async function fetchPartnerAttendance(mobile, month) {
  const baseUrl = String(process.env.CRM_API_URL || '').trim().replace(/\/+$/, '')
  const token = String(process.env.CRM_PARTNER_TOKEN || '').trim()

  if (!baseUrl || !token) {
    console.warn('[crm-attendance] CRM_API_URL / CRM_PARTNER_TOKEN not configured; skipping CRM lookup')
    return null
  }

  const digits = lastTenDigits(mobile)
  if (!digits) {
    console.warn('[crm-attendance] mobile has fewer than 10 digits; skipping CRM lookup')
    return null
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const url = new URL('/api/partner/attendance/by-mobile', `${baseUrl}/`)
    url.searchParams.set('mobile', digits)
    if (isValidMonth(month)) url.searchParams.set('month', month)

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        // Never logged anywhere in this module.
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      cache: 'no-store',
      signal: controller.signal,
    })

    if (!response.ok) {
      console.warn(`[crm-attendance] CRM returned ${response.status} for by-mobile lookup`)
      return null
    }

    const payload = await response.json()
    if (!payload || typeof payload !== 'object') {
      console.warn('[crm-attendance] CRM returned a non-object payload')
      return null
    }

    return payload
  } catch (error) {
    const reason = error?.name === 'AbortError'
      ? `timed out after ${REQUEST_TIMEOUT_MS}ms`
      : error?.message || String(error)
    console.warn('[crm-attendance] CRM lookup failed:', reason)
    return null
  } finally {
    clearTimeout(timer)
  }
}

/**
 * One call for the route: fetch + map. Returns null on any failure so the
 * caller can fall back to local data.
 */
export async function getCrmAttendanceByMobile(mobile, month) {
  const payload = await fetchPartnerAttendance(mobile, month)
  if (!payload) return null

  try {
    return {
      linked: Boolean(payload.linked),
      deviceMapped: Boolean(payload.device_mapped),
      month: isValidMonth(payload.month) ? payload.month : istMonth(),
      student: payload.student || null,
      attendance: mapPartnerAttendance(payload),
    }
  } catch (error) {
    console.warn('[crm-attendance] could not map CRM payload:', error?.message || error)
    return null
  }
}
