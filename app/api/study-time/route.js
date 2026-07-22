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

export async function GET(request) {
  try {
    await ensureTable()

    const { searchParams } = request.nextUrl
    const email = searchParams.get('email')

    if (!email) {
      return NextResponse.json({ error: 'email is required.' }, { status: 400 })
    }

    const { rows } = await pool.query(
      `SELECT 
         TO_CHAR(date, 'YYYY-MM-DD') as date,
         TO_CHAR(date, 'Dy') as day,
         ROUND(SUM(seconds) / 3600.0, 2) as hours_sum
       FROM study_time
       WHERE LOWER(student_email) = LOWER($1)
         AND date >= NOW() - INTERVAL '7 days'
       GROUP BY TO_CHAR(date, 'YYYY-MM-DD'), TO_CHAR(date, 'Dy')
       ORDER BY date ASC`,
      [email.trim()]
    )

    const dateMap = Object.fromEntries(rows.map((r) => [r.date, mapStudyDay(r)]))
    const result = []

    for (let i = 6; i >= 0; i--) {
      const d = new Date()
      d.setDate(d.getDate() - i)
      const dateStr = d.toISOString().split('T')[0]
      const dayName = d.toLocaleString('en-US', { weekday: 'short' })

      result.push(
        dateMap[dateStr] || {
          day: dayName,
          date: dateStr,
          hours: 0,
        }
      )
    }

    return NextResponse.json(result)
  } catch (err) {
    console.error('GET /api/study-time error:', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
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
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
