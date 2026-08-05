import { NextResponse } from 'next/server'
import pool from '../../../lib/db'
import { QUESTION_BANK_CHAPTERS, QUESTION_BANK_SUBJECTS } from '../../../lib/question-bank-data'

export const dynamic = 'force-dynamic'

function normalizeLookupKey(value) {
  return String(value || '').trim().toLowerCase()
}

const CHAPTER_LOOKUP = new Map(
  (QUESTION_BANK_CHAPTERS || []).map((chapter) => [normalizeLookupKey(chapter.id), chapter])
)

const SUBJECT_LOOKUP = new Map([
  ...(QUESTION_BANK_SUBJECTS || []).map((subject) => [normalizeLookupKey(subject.id), subject.name]),
  ...(QUESTION_BANK_SUBJECTS || []).map((subject) => [normalizeLookupKey(subject.name), subject.name]),
])

function resolveChapterName(chapterId) {
  const chapter = CHAPTER_LOOKUP.get(normalizeLookupKey(chapterId))
  return chapter?.title || String(chapterId || '')
}

function resolveSubjectName(subjectId, chapterId) {
  const normalized = normalizeLookupKey(subjectId)
  const direct = SUBJECT_LOOKUP.get(normalized)
  if (direct) return direct

  const chapter = CHAPTER_LOOKUP.get(normalizeLookupKey(chapterId))
  if (chapter?.subject) return chapter.subject

  return String(subjectId || chapter?.subjectId || '').trim()
}

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS test_results (
      id SERIAL PRIMARY KEY,
      student_email VARCHAR(255) NOT NULL,
      chapter_id VARCHAR(100) NOT NULL,
      chapter_name VARCHAR(255),
      subject_id VARCHAR(100),
      subject_name VARCHAR(255),
      score NUMERIC NOT NULL,
      total NUMERIC NOT NULL,
      answers JSONB DEFAULT '[]'::jsonb,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    ALTER TABLE test_results ADD COLUMN IF NOT EXISTS chapter_name VARCHAR(255);
    ALTER TABLE test_results ADD COLUMN IF NOT EXISTS subject_name VARCHAR(255);

    CREATE INDEX IF NOT EXISTS idx_test_results_student_email ON test_results(student_email);
    CREATE INDEX IF NOT EXISTS idx_test_results_chapter_id ON test_results(chapter_id);
    CREATE INDEX IF NOT EXISTS idx_test_results_date ON test_results(date);
  `)
}

function mapResult(row) {
  const chapterId = row.chapter_id
  const subjectId = row.subject_id || null
  const chapterName = String(row.chapter_name || '').trim() || resolveChapterName(chapterId)
  const subjectName = String(row.subject_name || '').trim() || resolveSubjectName(subjectId, chapterId)

  return {
    id: row.id.toString(),
    userEmail: row.student_email,
    chapterId,
    chapterName,
    subjectId,
    subjectName,
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
    const { userEmail, chapterId, chapterName, subjectId, subjectName, score, total, answers } = body

    if (!userEmail || !chapterId || score == null || total == null) {
      return NextResponse.json(
        { error: 'userEmail, chapterId, score, and total are required.' },
        { status: 400 }
      )
    }

    const resolvedChapterName = String(chapterName || '').trim() || resolveChapterName(chapterId)
    const resolvedSubjectName = String(subjectName || '').trim() || resolveSubjectName(subjectId, chapterId)

    const { rows } = await pool.query(
      `INSERT INTO test_results (student_email, chapter_id, chapter_name, subject_id, subject_name, score, total, answers)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id, student_email, chapter_id, chapter_name, subject_id, subject_name, score, total, answers, date`,
      [userEmail.trim(), chapterId, resolvedChapterName, subjectId || null, resolvedSubjectName, score, total, JSON.stringify(answers || [])]
    )

    return NextResponse.json({ success: true, data: mapResult(rows[0]) }, { status: 201 })
  } catch (err) {
    console.error('POST /api/results error:', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}