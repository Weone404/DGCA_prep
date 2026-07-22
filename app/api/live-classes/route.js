import { NextResponse } from 'next/server'
import pool from '../../../lib/db'

export const dynamic = 'force-dynamic'

function getStatus(startDateTime, endDateTime) {
  const now = new Date()
  const start = new Date(startDateTime)
  const end = new Date(endDateTime)

  if (Number.isFinite(start.getTime()) && now >= start && (!Number.isFinite(end.getTime()) || now <= end)) {
    return 'live'
  }

  if (Number.isFinite(start.getTime()) && now < start) {
    return 'scheduled'
  }

  return 'ended'
}

function normalizeLiveClass(record) {
  const startDateTime = record.start_date_time || ''
  const endDateTime = record.end_date_time || ''

  return {
    id: record.id,
    title: record.title || 'Live class',
    description: record.description || '',
    start_date_time: startDateTime,
    end_date_time: endDateTime,
    meet_link: record.meet_link || '',
    batch: record.batch || '',
    status: getStatus(startDateTime, endDateTime),
    created_at: record.created_at || '',
  }
}

export async function GET() {
  try {
    const { rows } = await pool.query(`
      SELECT id, title, description, start_date_time, end_date_time, meet_link, batch
      FROM live_classes
      ORDER BY start_date_time ASC
    `)

    return NextResponse.json(rows.map(normalizeLiveClass))
  } catch (err) {
    console.error('GET /api/live-classes error:', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
