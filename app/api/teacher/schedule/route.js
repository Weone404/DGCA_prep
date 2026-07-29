import { NextResponse } from 'next/server'
import pool from '../../../../lib/db'

function normalizeScheduledClass(record) {
  return {
    id: record.id,
    title: record.title || 'Scheduled Class',
    description: record.description || '',
    date: record.date || '',
    time: record.time || '',
    duration: Number(record.duration || 60),
    meetLink: record.meet_link || record.meetLink || '',
    batch: record.batch || 'A1',
    startDateTime: record.start_date_time || record.startDateTime || '',
    endDateTime: record.end_date_time || record.endDateTime || '',
    createdAt: record.created_at || record.createdAt || '',
  }
}

async function ensureScheduledClassesTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS scheduled_classes (
      id TEXT PRIMARY KEY,
      title TEXT,
      description TEXT,
      date TEXT,
      time TEXT,
      duration INTEGER DEFAULT 60,
      meet_link TEXT,
      batch TEXT,
      start_date_time TEXT,
      end_date_time TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `)
}

export async function GET() {
  try {
    await ensureScheduledClassesTable()
    const { rows } = await pool.query('SELECT * FROM scheduled_classes ORDER BY created_at DESC, date DESC')
    return NextResponse.json({ classes: rows.map(normalizeScheduledClass) })
  } catch (error) {
    console.error('GET /api/teacher/schedule error:', error)
    return NextResponse.json({ error: 'Unable to load scheduled classes' }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const event = body?.event || body
    const id = event.id || `class-${Date.now()}`
    const startDateTime = event.startDateTime || event.start_date_time || ''
    const endDateTime = event.endDateTime || event.end_date_time || ''

    await ensureScheduledClassesTable()
    await pool.query(
      `INSERT INTO scheduled_classes (id, title, description, date, time, duration, meet_link, batch, start_date_time, end_date_time, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW())
       ON CONFLICT (id) DO UPDATE SET
         title = EXCLUDED.title,
         description = EXCLUDED.description,
         date = EXCLUDED.date,
         time = EXCLUDED.time,
         duration = EXCLUDED.duration,
         meet_link = EXCLUDED.meet_link,
         batch = EXCLUDED.batch,
         start_date_time = EXCLUDED.start_date_time,
         end_date_time = EXCLUDED.end_date_time,
         created_at = NOW()`,
      [
        id,
        event.title || '',
        event.description || '',
        event.date || '',
        event.time || '',
        Number(event.duration || 60),
        event.meetLink || event.meet_link || '',
        event.batch || 'A1',
        startDateTime,
        endDateTime,
      ]
    )

    const { rows } = await pool.query('SELECT * FROM scheduled_classes ORDER BY created_at DESC, date DESC')
    return NextResponse.json({ classes: rows.map(normalizeScheduledClass), event: { ...event, id, startDateTime, endDateTime } })
  } catch (error) {
    console.error('POST /api/teacher/schedule error:', error)
    return NextResponse.json({ error: 'Unable to save scheduled class' }, { status: 500 })
  }
}

export async function DELETE(req) {
  try {
    const body = await req.json()
    const id = body?.id
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 })

    await pool.query('DELETE FROM scheduled_classes WHERE id = $1', [id])
    return NextResponse.json({ id })
  } catch (error) {
    console.error('DELETE /api/teacher/schedule error:', error)
    return NextResponse.json({ error: 'Unable to delete scheduled class' }, { status: 500 })
  }
}
