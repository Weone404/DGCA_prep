import { NextResponse } from 'next/server'
import pool from '../../../lib/db'

export const dynamic = 'force-dynamic'

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS test_results (
      id SERIAL PRIMARY KEY,
      student_email VARCHAR(255) NOT NULL,
      chapter_id VARCHAR(100) NOT NULL,
      subject_id VARCHAR(100),
      score NUMERIC NOT NULL,
      total NUMERIC NOT NULL,
      answers JSONB DEFAULT '[]'::jsonb,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_test_results_student_email ON test_results(student_email);
    CREATE INDEX IF NOT EXISTS idx_test_results_chapter_id ON test_results(chapter_id);
    CREATE INDEX IF NOT EXISTS idx_test_results_date ON test_results(date);
  `)
}

function mapResult(row) {
  return {
    id: row.id.toString(),
    userEmail: row.student_email,
    chapterId: row.chapter_id,
    subjectId: row.subject_id || null,
    score: Number(row.score),
    total: Number(row.total),
    answers: row.answers || [],
    date: row.date,
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
      `SELECT *
       FROM test_results
       WHERE LOWER(student_email) = LOWER($1)
       ORDER BY date DESC
       LIMIT 50`,
      [email.trim()]
    )

    return NextResponse.json(rows.map(mapResult))
  } catch (err) {
    console.error('GET /api/results error:', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    await ensureTable()

    const body = await request.json()
    const { userEmail, chapterId, subjectId, score, total, answers } = body

    if (!userEmail || !chapterId || score == null || total == null) {
      return NextResponse.json(
        { error: 'userEmail, chapterId, score, and total are required.' },
        { status: 400 }
      )
    }

    const { rows } = await pool.query(
      `INSERT INTO test_results (student_email, chapter_id, subject_id, score, total, answers)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, student_email, chapter_id, subject_id, score, total, answers, date`,
      [userEmail.trim(), chapterId, subjectId || null, score, total, JSON.stringify(answers || [])]
    )

    return NextResponse.json({ success: true, data: mapResult(rows[0]) }, { status: 201 })
  } catch (err) {
    console.error('POST /api/results error:', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}