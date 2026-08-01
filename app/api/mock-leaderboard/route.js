import { NextResponse } from 'next/server'
import pool from '../../../lib/db'

export const dynamic = 'force-dynamic'

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS mock_leaderboard (
      id SERIAL PRIMARY KEY,
      guest_id VARCHAR(255),
      email VARCHAR(255),
      name VARCHAR(255) NOT NULL DEFAULT 'Guest',
      subject VARCHAR(255),
      subject_label VARCHAR(255),
      score INTEGER NOT NULL DEFAULT 0,
      total INTEGER NOT NULL DEFAULT 0,
      accuracy INTEGER NOT NULL DEFAULT 0,
      submitted_at TIMESTAMP NOT NULL DEFAULT NOW()
    );

    CREATE INDEX IF NOT EXISTS idx_mock_leaderboard_guest_id ON mock_leaderboard (guest_id);
    CREATE INDEX IF NOT EXISTS idx_mock_leaderboard_email ON mock_leaderboard (email);
    CREATE INDEX IF NOT EXISTS idx_mock_leaderboard_subject ON mock_leaderboard (subject);
  `)
}

export async function POST(request) {
  try {
    await ensureTable()

    const body = await request.json()
    const guestId = body?.guestId ? String(body.guestId).trim() : null
    const email = body?.email ? String(body.email).trim().toLowerCase() : null
    const name = body?.name ? String(body.name).trim() : 'Guest'
    const subject = body?.subject ? String(body.subject).trim() : null
    const subjectLabel = body?.subjectLabel ? String(body.subjectLabel).trim() : null
    const score = Number(body?.score)
    const total = Number(body?.total)
    const accuracy = Number(body?.accuracy)
    const submittedAt = body?.submittedAt ? new Date(body.submittedAt) : new Date()

    if (!email && !guestId) {
      return NextResponse.json({ success: false, error: 'guestId or email is required.' }, { status: 400 })
    }
    if (!subject) {
      return NextResponse.json({ success: false, error: 'subject is required.' }, { status: 400 })
    }
    if (Number.isNaN(score) || Number.isNaN(total) || Number.isNaN(accuracy)) {
      return NextResponse.json({ success: false, error: 'score, total, and accuracy are required.' }, { status: 400 })
    }

    if (email && guestId) {
      const updateResult = await pool.query(
        `UPDATE mock_leaderboard
         SET email = $1, name = $2
         WHERE guest_id = $3
           AND (email IS NULL OR email = 'Guest')`,
        [email, name, guestId]
      )
      if (updateResult.rowCount > 0) {
        return NextResponse.json({ success: true, claimed: true })
      }
    }

    await pool.query(
      `INSERT INTO mock_leaderboard (guest_id, email, name, subject, subject_label, score, total, accuracy, submitted_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [guestId, email, name, subject, subjectLabel, score, total, accuracy, submittedAt]
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('POST /api/mock-leaderboard error:', error)
    return NextResponse.json({ success: false, error: 'Unable to save leaderboard result.' }, { status: 500 })
  }
}
