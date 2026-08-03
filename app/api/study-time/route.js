import { NextResponse } from 'next/server'
import pool from '../../../lib/db'

export const dynamic = 'force-dynamic'

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS study_time (
      id SERIAL PRIMARY KEY,
      student_email VARCHAR(255) NOT NULL,
      seconds NUMERIC NOT NULL,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_study_time_student_email ON study_time(student_email);
    CREATE INDEX IF NOT EXISTS idx_study_time_date ON study_time(date);
  `)
}

function mapStudyDay(row) {
  return {
    day: row.day,
    date: row.date,
    hours: parseFloat(row.hours_sum) || 0,
  }
}

function toDateKey(date) {
  return date.toISOString().split('T')[0]
}

function buildWeekSeries(startDate, rowsMap) {
  const result = []
  const date = new Date(startDate)

  for (let i = 0; i < 7; i++) {
    const current = new Date(date)
    current.setDate(startDate.getDate() + i)
    const dateKey = toDateKey(current)

    result.push(
      rowsMap[dateKey] || {
        day: current.toLocaleString('en-US', { weekday: 'short' }),
        date: dateKey,
        hours: 0,
      }
    )
  }

  return result
}

function buildFallbackStudyTimeResponse() {
  const today = new Date()
  const currentWeekOffset = (today.getDay() + 6) % 7
  const currentWeekStart = new Date(today)
  currentWeekStart.setDate(today.getDate() - currentWeekOffset)
  currentWeekStart.setHours(0, 0, 0, 0)

  return {
    currentWeek: buildWeekSeries(currentWeekStart, {}),
    currentWeekTotal: 0,
    previousWeekTotal: 0,
    comparison: 0,
  }
}

export async function GET(request) {
  try {
    await ensureTable()

    const { searchParams } = request.nextUrl
    const email = searchParams.get('email')

    if (!email) {
      return NextResponse.json({ error: 'email is required.' }, { status: 400 })
    }

    const today = new Date()
    const currentWeekOffset = (today.getDay() + 6) % 7
    const currentWeekStart = new Date(today)
    currentWeekStart.setDate(today.getDate() - currentWeekOffset)
    currentWeekStart.setHours(0, 0, 0, 0)

    const previousWeekStart = new Date(currentWeekStart)
    previousWeekStart.setDate(currentWeekStart.getDate() - 7)
    previousWeekStart.setHours(0, 0, 0, 0)

    const windowEnd = new Date(currentWeekStart)
    windowEnd.setDate(currentWeekStart.getDate() + 14)
    windowEnd.setHours(0, 0, 0, 0)

    const { rows } = await pool.query(
      `SELECT 
         date::date AS date,
         TO_CHAR(date::date, 'Dy') AS day,
         ROUND(SUM(seconds) / 3600.0, 2) AS hours_sum
       FROM study_time
       WHERE LOWER(student_email) = LOWER($1)
         AND date >= $2
         AND date < $3
       GROUP BY date::date
       ORDER BY date::date ASC`,
      [email.trim(), previousWeekStart.toISOString(), windowEnd.toISOString()]
    )

    const dateMap = Object.fromEntries(rows.map((r) => [r.date, mapStudyDay(r)]))
    const currentWeek = buildWeekSeries(currentWeekStart, dateMap)
    const previousWeek = buildWeekSeries(previousWeekStart, dateMap)

    const currentWeekTotal = currentWeek.reduce((sum, day) => sum + day.hours, 0)
    const previousWeekTotal = previousWeek.reduce((sum, day) => sum + day.hours, 0)

    return NextResponse.json({
      currentWeek,
      currentWeekTotal,
      previousWeekTotal,
      comparison: parseFloat((currentWeekTotal - previousWeekTotal).toFixed(2)),
    })
  } catch (err) {
    console.error('GET /api/study-time error:', err)
    return NextResponse.json(buildFallbackStudyTimeResponse())
  }
}

export async function POST(request) {
  try {
    await ensureTable()

    const body = await request.json()
    const { userEmail, seconds } = body

    if (!userEmail || seconds == null) {
      return NextResponse.json(
        { error: 'userEmail and seconds are required.' },
        { status: 400 }
      )
    }

    const clampedSeconds = Math.min(Number(seconds), 600)

    await pool.query(
      `INSERT INTO study_time (student_email, seconds)
       VALUES ($1, $2)`,
      [userEmail.trim(), clampedSeconds]
    )

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('POST /api/study-time error:', err)
    return NextResponse.json({ success: true, fallback: true })
  }
}
