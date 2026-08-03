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

function normalizeSubjectId(subject) {
  const value = String(subject || '').trim().toLowerCase()
  if (!value || value === 'all') return 'all'
  return value.replace(/_/g, '-')
}

function toNumber(value) {
  const num = Number(value)
  return Number.isFinite(num) ? num : 0
}

export async function GET(request) {
  try {
    await ensureTable()

    const { searchParams } = new URL(request.url)
    const subject = normalizeSubjectId(searchParams.get('subject'))

    const result = await pool.query(
      `WITH filtered AS (
         SELECT
           id,
           guest_id,
           email,
           name,
           subject,
           subject_label,
           score,
           total,
           accuracy,
           submitted_at,
           COALESCE(NULLIF(LOWER(email), ''), CONCAT('guest:', COALESCE(NULLIF(guest_id, ''), name, id::text))) AS entity_key
         FROM mock_leaderboard
         WHERE $1 = 'all' OR subject = $1
       ),
       ranked AS (
         SELECT
           *,
           ROW_NUMBER() OVER (
             PARTITION BY entity_key
             ORDER BY accuracy DESC, score DESC, total DESC, submitted_at DESC, id DESC
           ) AS rn
         FROM filtered
       ),
       best_rows AS (
         SELECT
           entity_key,
           email,
           name,
           subject,
           subject_label,
           score,
           total,
           accuracy
         FROM ranked
         WHERE rn = 1
       ),
       attempts AS (
         SELECT entity_key, COUNT(*)::int AS attempts
         FROM filtered
         GROUP BY entity_key
       ),
       breakdown AS (
         SELECT
           entity_key,
           COALESCE(NULLIF(subject_label, ''), 'General') AS breakdown_subject,
           MAX(accuracy)::int AS breakdown_accuracy,
           COUNT(*)::int AS breakdown_tests
         FROM filtered
         GROUP BY entity_key, COALESCE(NULLIF(subject_label, ''), 'General')
       )
       SELECT
         b.entity_key,
         b.email,
         b.name,
         b.subject,
         b.subject_label,
         b.score,
         b.total,
         b.accuracy,
         a.attempts,
         COALESCE(
           JSON_AGG(
             JSON_BUILD_OBJECT(
               'subject', d.breakdown_subject,
               'chapter', 'Overall',
               'accuracy', d.breakdown_accuracy,
               'tests', d.breakdown_tests
             )
             ORDER BY d.breakdown_accuracy DESC, d.breakdown_subject ASC
           ) FILTER (WHERE d.entity_key IS NOT NULL),
           '[]'::json
         ) AS subject_breakdown
       FROM best_rows b
       JOIN attempts a ON a.entity_key = b.entity_key
       LEFT JOIN breakdown d ON d.entity_key = b.entity_key
       GROUP BY
         b.entity_key,
         b.email,
         b.name,
         b.subject,
         b.subject_label,
         b.score,
         b.total,
         b.accuracy,
         a.attempts
       ORDER BY b.accuracy DESC, a.attempts DESC, b.score DESC, b.total DESC, b.name ASC`,
      [subject]
    )

    const entries = result.rows.map((row) => ({
      email: row.email || row.entity_key,
      name: row.name || 'Guest',
      accuracy: toNumber(row.accuracy),
      score: toNumber(row.score),
      total: toNumber(row.total),
      subject: row.subject || 'all',
      subjectLabel: row.subject_label || 'General',
      attempts: toNumber(row.attempts),
      subjectBreakdown: Array.isArray(row.subject_breakdown) ? row.subject_breakdown : [],
    }))

    return NextResponse.json({ success: true, entries })
  } catch (error) {
    console.error('GET /api/mock-leaderboard error:', error)
    return NextResponse.json({ success: false, entries: [], error: 'Unable to load mock leaderboard.' }, { status: 500 })
  }
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
