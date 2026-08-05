import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import pool from '../../../../lib/db'

const SESSION_COOKIE = 'teacher_auth'

function getDbConnectionString() {
  return (
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.SUPABASE_DB_URL ||
    ''
  )
}

function isDbConfigured() {
  return Boolean(String(getDbConnectionString()).trim())
}

async function requireTeacherAuth() {
  const cookieStore = await cookies()
  return cookieStore.get(SESSION_COOKIE)?.value === '1'
}

function toIso(value) {
  if (!value) return ''
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return ''
  return parsed.toISOString()
}

function normalizeRow(row) {
  return {
    id: row.id,
    date: row.update_date ? String(row.update_date) : '',
    batch: row.batch || 'A1',
    subject: row.subject || '',
    topics: Array.isArray(row.topics) ? row.topics : [],
    notes: row.notes || '',
    teacherName: row.teacher_name || '',
    createdAt: toIso(row.created_at),
  }
}

async function ensureDailyUpdatesTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS daily_updates (
      id SERIAL PRIMARY KEY,
      update_date DATE NOT NULL,
      batch TEXT NOT NULL DEFAULT 'A1',
      subject TEXT NOT NULL,
      topics TEXT[] NOT NULL DEFAULT '{}',
      notes TEXT DEFAULT '',
      teacher_name TEXT DEFAULT '',
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE INDEX IF NOT EXISTS idx_daily_updates_date ON daily_updates (update_date DESC);
    CREATE INDEX IF NOT EXISTS idx_daily_updates_batch ON daily_updates (batch);
    CREATE INDEX IF NOT EXISTS idx_daily_updates_created_at ON daily_updates (created_at DESC);
  `)
}

const memoryUpdates = []

export async function GET(request) {
  try {
    const authed = await requireTeacherAuth()
    if (!authed) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const date = String(searchParams.get('date') || '').trim()
    const batch = String(searchParams.get('batch') || '').trim()

    if (!isDbConfigured()) {
      let updates = [...memoryUpdates]
      if (date) updates = updates.filter((entry) => entry.date === date)
      if (batch) updates = updates.filter((entry) => entry.batch === batch)
      return NextResponse.json({ success: true, updates })
    }

    await ensureDailyUpdatesTable()

    const filters = []
    const values = []

    if (date) {
      filters.push(`update_date = $${values.length + 1}`)
      values.push(date)
    }

    if (batch) {
      filters.push(`batch = $${values.length + 1}`)
      values.push(batch)
    }

    const whereClause = filters.length ? `WHERE ${filters.join(' AND ')}` : ''

    const result = await pool.query(
      `SELECT id, update_date, batch, subject, topics, notes, teacher_name, created_at
       FROM daily_updates
       ${whereClause}
       ORDER BY update_date DESC, created_at DESC
       LIMIT 100`,
      values,
    )

    return NextResponse.json({ success: true, updates: result.rows.map(normalizeRow) })
  } catch (error) {
    console.error('GET /api/teacher/daily-updates error:', error)
    return NextResponse.json({ success: false, updates: [], error: 'Unable to load daily updates' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const authed = await requireTeacherAuth()
    if (!authed) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const date = String(body?.date || '').trim()
    const batch = String(body?.batch || 'A1').trim() || 'A1'
    const subject = String(body?.subject || '').trim()
    const topics = Array.isArray(body?.topics)
      ? body.topics.map((topic) => String(topic || '').trim()).filter(Boolean)
      : []
    const notes = String(body?.notes || '').trim()
    const teacherName = String(body?.teacherName || '').trim()

    if (!date || !subject || !topics.length) {
      return NextResponse.json({ success: false, error: 'date, subject and at least one topic are required' }, { status: 400 })
    }

    if (!isDbConfigured()) {
      const update = {
        id: Date.now(),
        date,
        batch,
        subject,
        topics,
        notes,
        teacherName,
        createdAt: new Date().toISOString(),
      }
      memoryUpdates.unshift(update)
      return NextResponse.json({ success: true, update, updates: memoryUpdates.slice(0, 100) })
    }

    await ensureDailyUpdatesTable()

    const result = await pool.query(
      `INSERT INTO daily_updates (update_date, batch, subject, topics, notes, teacher_name, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW())
       RETURNING id, update_date, batch, subject, topics, notes, teacher_name, created_at`,
      [date, batch, subject, topics, notes, teacherName],
    )

    const update = normalizeRow(result.rows[0])
    return NextResponse.json({ success: true, update })
  } catch (error) {
    console.error('POST /api/teacher/daily-updates error:', error)
    return NextResponse.json({ success: false, error: 'Unable to save daily update' }, { status: 500 })
  }
}
