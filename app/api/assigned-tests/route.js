import { NextResponse } from 'next/server'
import pool from '../../../lib/db'

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS assigned_tests (
      id              SERIAL PRIMARY KEY,
      title           TEXT NOT NULL,
      subject_id      TEXT NOT NULL,
      subject_label   TEXT NOT NULL,
      chapter_ids     TEXT[] NOT NULL DEFAULT '{}',
      num_questions   INTEGER NOT NULL DEFAULT 20,
      duration_mins   INTEGER NOT NULL DEFAULT 30,
      instructions    TEXT DEFAULT '',
      is_active       BOOLEAN DEFAULT true,
      created_at      TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_assigned_tests_subject ON assigned_tests(subject_id);
  `)
}

export async function GET(request) {
  try {
    await ensureTable()

    const { searchParams } = new URL(request.url)
    const includeAll = searchParams.get('all') === '1' || searchParams.get('all') === 'true'

    const query = `
      SELECT
        id,
        title,
        subject_id      AS "subjectId",
        subject_label   AS "subjectLabel",
        chapter_ids     AS "chapterIds",
        num_questions   AS "numQuestions",
        duration_mins   AS "durationMins",
        instructions,
        is_active       AS "isActive",
        created_at      AS "createdAt"
      FROM assigned_tests
      ${includeAll ? '' : 'WHERE COALESCE(is_active, true) = true'}
      ORDER BY created_at DESC
    `

    const { rows } = await pool.query(query)

    console.log(`📋 [GET /api/assigned-tests] Fetched ${rows.length} tests (includeAll=${includeAll})`)

    return NextResponse.json({ success: true, tests: rows, includeAll })
  } catch (err) {
    console.error('❌ GET /api/assigned-tests error:', err)
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    await ensureTable()

    const { title, subjectId, subjectLabel, chapterIds, numQuestions, durationMins, instructions } =
      await request.json()

    if (!title || !subjectId || !subjectLabel) {
      return NextResponse.json(
        { success: false, error: 'title, subjectId, and subjectLabel are required' },
        { status: 400 }
      )
    }

    const { rows } = await pool.query(
      `INSERT INTO assigned_tests 
       (title, subject_id, subject_label, chapter_ids, num_questions, duration_mins, instructions)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        title,
        subjectId,
        subjectLabel,
        chapterIds || [],
        numQuestions || 20,
        durationMins || 30,
        instructions || '',
      ]
    )

    console.log('✅ [POST /api/assigned-tests] Created test:', rows[0]?.id)

    return NextResponse.json({ success: true, test: rows[0] })
  } catch (err) {
    console.error('❌ POST /api/assigned-tests error:', err)
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
