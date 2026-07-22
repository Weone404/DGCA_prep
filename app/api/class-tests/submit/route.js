import { NextResponse } from 'next/server'
import pool from '../../../../lib/db'

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS class_test_results (
      id              SERIAL PRIMARY KEY,
      class_id        TEXT NOT NULL,
      test_id         INTEGER,
      student_email   TEXT NOT NULL,
      student_name    TEXT NOT NULL,
      score           INTEGER NOT NULL,
      total           INTEGER NOT NULL,
      accuracy        INTEGER NOT NULL,
      answers         JSONB DEFAULT '[]',
      submitted_at    TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_ctr_class_id ON class_test_results(class_id);
    CREATE INDEX IF NOT EXISTS idx_ctr_test_id ON class_test_results(test_id);
    CREATE INDEX IF NOT EXISTS idx_ctr_email ON class_test_results(student_email);
    CREATE INDEX IF NOT EXISTS idx_ctr_submitted ON class_test_results(submitted_at);
  `)

  await pool.query(`ALTER TABLE class_test_results ADD COLUMN IF NOT EXISTS class_id TEXT`)
}

export async function POST(request) {
  try {
    await ensureTable()

    const body = await request.json()
    const { classId, testId, studentEmail, studentName, score, total, answers } = body

    if (!classId || !studentEmail || score == null || total == null) {
      return NextResponse.json(
        { success: false, error: 'classId, studentEmail, score, total are required' },
        { status: 400 }
      )
    }

    const parsedTestId = testId != null ? parseInt(testId, 10) : null
    const accuracy = total > 0 ? Math.round((score / total) * 100) : 0

    const { rows } = await pool.query(
      `INSERT INTO class_test_results
       (class_id, test_id, student_email, student_name, score, total, accuracy, answers)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [
        String(classId),
        Number.isFinite(parsedTestId) ? parsedTestId : null,
        String(studentEmail).toLowerCase().trim(),
        studentName || '',
        score,
        total,
        accuracy,
        JSON.stringify(answers || []),
      ]
    )

    return NextResponse.json({ success: true, result: rows[0] })
  } catch (err) {
    console.error('POST /api/class-tests/submit error:', err)
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
