import { NextResponse } from 'next/server'
import pool from '../../../lib/db'

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS class_tests (
      id               SERIAL PRIMARY KEY,
      title            TEXT NOT NULL,
      class_id         TEXT NOT NULL,
      class_name       TEXT NOT NULL,
      subject_id       TEXT NOT NULL,
      subject_label    TEXT NOT NULL,
      topic_ids        TEXT[] NOT NULL DEFAULT '{}',
      question_set_id  TEXT,
      num_questions    INTEGER NOT NULL DEFAULT 20,
      duration_mins    INTEGER NOT NULL DEFAULT 30,
      instructions     TEXT DEFAULT '',
      is_active        BOOLEAN DEFAULT true,
      created_at       TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_class_tests_class_id ON class_tests(class_id);
    CREATE INDEX IF NOT EXISTS idx_class_tests_subject_id ON class_tests(subject_id);
  `)

  // Backfill older schemas where topic_ids/question_set_id may not exist.
  await pool.query(`ALTER TABLE class_tests ADD COLUMN IF NOT EXISTS topic_ids TEXT[] DEFAULT '{}'`)
  await pool.query(`ALTER TABLE class_tests ADD COLUMN IF NOT EXISTS question_set_id TEXT`)
}

function toSlug(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function normalizeRow(row) {
  const rawClassId = row.classId || row.class_id || row.class || ''
  const className = row.className || row.class_name || row.class || ''

  return {
    id: row.id,
    title: row.title,
    classId: rawClassId || toSlug(className),
    className: className || rawClassId,
    class: className || rawClassId,
    subjectId: row.subjectId || row.subject_id || '',
    subjectLabel: row.subjectLabel || row.subject_label || '',
    topicIds: Array.isArray(row.topicIds || row.topic_ids) ? (row.topicIds || row.topic_ids) : [],
    questionSetId: row.questionSetId || row.question_set_id || '',
    numQuestions: Number(row.numQuestions || row.num_questions || 20),
    durationMins: Number(row.durationMins || row.duration_mins || 30),
    instructions: row.instructions || '',
    isActive: row.isActive ?? row.is_active ?? true,
    createdAt: row.createdAt || row.created_at || '',
  }
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
        class_id        AS "classId",
        class_name      AS "className",
        subject_id      AS "subjectId",
        subject_label   AS "subjectLabel",
        topic_ids       AS "topicIds",
        question_set_id AS "questionSetId",
        num_questions   AS "numQuestions",
        duration_mins   AS "durationMins",
        instructions,
        is_active       AS "isActive",
        created_at      AS "createdAt"
      FROM class_tests
      ${includeAll ? '' : 'WHERE COALESCE(is_active, true) = true'}
      ORDER BY created_at DESC
    `

    const { rows } = await pool.query(query)
    const tests = rows.map(normalizeRow)

    return NextResponse.json({ success: true, tests, includeAll })
  } catch (err) {
    console.error('GET /api/class-tests error:', err)
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    await ensureTable()

    const body = await request.json()
    const incoming = body?.test || body

    const title = incoming?.title
    const classId = incoming?.classId || toSlug(incoming?.className || incoming?.class)
    const className = incoming?.className || incoming?.class || classId
    const subjectId = incoming?.subjectId
    const subjectLabel = incoming?.subjectLabel
    const topicIds = Array.isArray(incoming?.topicIds) ? incoming.topicIds : []
    const questionSetId = incoming?.questionSetId || null
    const numQuestions = Number(incoming?.numQuestions || 20)
    const durationMins = Number(incoming?.durationMins || 30)
    const instructions = incoming?.instructions || ''

    if (!title || !classId || !subjectId || !subjectLabel) {
      return NextResponse.json(
        { success: false, error: 'title, classId, subjectId, and subjectLabel are required' },
        { status: 400 }
      )
    }

    const { rows } = await pool.query(
      `INSERT INTO class_tests
       (title, class_id, class_name, subject_id, subject_label, topic_ids, question_set_id, num_questions, duration_mins, instructions)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING
         id,
         title,
         class_id        AS "classId",
         class_name      AS "className",
         subject_id      AS "subjectId",
         subject_label   AS "subjectLabel",
         topic_ids       AS "topicIds",
         question_set_id AS "questionSetId",
         num_questions   AS "numQuestions",
         duration_mins   AS "durationMins",
         instructions,
         is_active       AS "isActive",
         created_at      AS "createdAt"`,
      [title, classId, className, subjectId, subjectLabel, topicIds, questionSetId, numQuestions, durationMins, instructions]
    )

    return NextResponse.json({ success: true, test: normalizeRow(rows[0]) })
  } catch (err) {
    console.error('POST /api/class-tests error:', err)
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
