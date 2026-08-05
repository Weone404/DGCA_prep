import { NextResponse } from 'next/server'
import pool from '../../../../lib/db'

export const dynamic = 'force-dynamic'
export const revalidate = 0

function toNumber(value, fallback = 0) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

function normalizeStudentRow(row) {
  let results = []
  if (row.results) {
    try {
      results = typeof row.results === 'string' ? JSON.parse(row.results) : row.results
    } catch {
      results = []
    }
  }

  return {
    id: row.id,
    name: row.name || 'Student',
    email: row.email || '',
    phone: row.phone || '',
    batch: row.batch || 'A1',
    joinedAt: row.joined_at ? new Date(row.joined_at).toISOString() : new Date().toISOString(),
    testsAttempted: toNumber(row.tests_attempted, 0),
    avgScore: toNumber(row.avg_score, 0),
    bestScore: toNumber(row.best_score, 0),
    totalQuestions: toNumber(row.total_questions, 0),
    results: Array.isArray(results) ? results : [],
  }
}

function normalizeAttendanceRow(row) {
  return {
    date: row.date || '',
    batch: row.batch || 'A1',
    email: row.email || '',
    name: row.name || '',
    status: row.status || 'absent',
    note: row.note || '',
  }
}

function normalizeClassRow(row) {
  return {
    id: row.id,
    title: row.title || 'Scheduled Class',
    description: row.description || '',
    date: row.date || '',
    time: row.time || '',
    duration: toNumber(row.duration, 60),
    meetLink: row.meet_link || '',
    batch: row.batch || 'A1',
    startDateTime: row.start_date_time || '',
    endDateTime: row.end_date_time || '',
    createdAt: row.created_at || '',
  }
}

function normalizeLinkRow(row) {
  return {
    url: row.url || '',
    label: row.label || 'Live class',
    setAt: row.set_at || new Date().toISOString(),
    createdAt: row.created_at || '',
  }
}

function normalizeTestRow(row) {
  return {
    id: row.id,
    title: row.title || 'Assigned Test',
    classId: row.class_id || '',
    className: row.class_name || '',
    subjectId: row.subject_id || '',
    subjectLabel: row.subject_label || '',
    chapterId: row.chapter_id || '',
    chapterLabel: row.chapter_label || '',
    chapterIds: Array.isArray(row.chapter_ids) ? row.chapter_ids : [],
    numQuestions: toNumber(row.num_questions, 20),
    durationMins: toNumber(row.duration_mins, 30),
    instructions: row.instructions || '',
    isActive: row.is_active !== false,
    createdAt: row.created_at || '',
  }
}

function normalizeSubmissionRow(row) {
  return {
    id: row.id,
    testId: row.test_id,
    studentEmail: row.student_email || '',
    studentName: row.student_name || '',
    score: toNumber(row.score, 0),
    total: toNumber(row.total, 0),
    accuracy: toNumber(row.accuracy, 0),
    submittedAt: row.submitted_at || '',
  }
}

async function ensureColumn(tableName, columnName, definition) {
  await pool.query(`
    ALTER TABLE ${tableName}
    ADD COLUMN IF NOT EXISTS ${columnName} ${definition}
  `)
}

async function ensureTables() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS students (
      id SERIAL PRIMARY KEY,
      name TEXT,
      email TEXT UNIQUE,
      phone TEXT,
      batch TEXT,
      joined_at TIMESTAMPTZ DEFAULT NOW(),
      tests_attempted INTEGER DEFAULT 0,
      avg_score NUMERIC DEFAULT 0,
      best_score NUMERIC DEFAULT 0,
      total_questions INTEGER DEFAULT 0,
      results JSONB DEFAULT '[]'::jsonb,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS attendance (
      id SERIAL PRIMARY KEY,
      date TEXT,
      batch TEXT,
      name TEXT,
      status TEXT,
      note TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

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

    CREATE TABLE IF NOT EXISTS live_links (
      id SERIAL PRIMARY KEY,
      url TEXT,
      label TEXT,
      set_at TIMESTAMPTZ DEFAULT NOW(),
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS assigned_tests (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      subject_id TEXT NOT NULL,
      subject_label TEXT NOT NULL,
      class_id TEXT,
      class_name TEXT,
      chapter_id TEXT,
      chapter_label TEXT,
      chapter_ids TEXT[] DEFAULT '{}',
      num_questions INTEGER DEFAULT 20,
      duration_mins INTEGER DEFAULT 30,
      instructions TEXT DEFAULT '',
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS test_submissions (
      id SERIAL PRIMARY KEY,
      test_id TEXT,
      student_email TEXT,
      student_name TEXT,
      score INTEGER DEFAULT 0,
      total INTEGER DEFAULT 0,
      accuracy NUMERIC DEFAULT 0,
      submitted_at TIMESTAMPTZ DEFAULT NOW()
    );
  `)

  await ensureColumn('students', 'email', 'TEXT')
  await ensureColumn('students', 'phone', 'TEXT')
  await ensureColumn('students', 'batch', 'TEXT')
  await ensureColumn('students', 'joined_at', 'TIMESTAMPTZ')
  await ensureColumn('students', 'tests_attempted', 'INTEGER')
  await ensureColumn('students', 'avg_score', 'NUMERIC')
  await ensureColumn('students', 'best_score', 'NUMERIC')
  await ensureColumn('students', 'total_questions', 'INTEGER')
  await ensureColumn('students', 'results', 'JSONB')
  await ensureColumn('students', 'created_at', 'TIMESTAMPTZ')

  await ensureColumn('attendance', 'date', 'TEXT')
  await ensureColumn('attendance', 'batch', 'TEXT')
  await ensureColumn('attendance', 'email', 'TEXT')
  await ensureColumn('attendance', 'name', 'TEXT')
  await ensureColumn('attendance', 'status', 'TEXT')
  await ensureColumn('attendance', 'note', 'TEXT')
  await ensureColumn('attendance', 'created_at', 'TIMESTAMPTZ')

  await ensureColumn('scheduled_classes', 'title', 'TEXT')
  await ensureColumn('scheduled_classes', 'description', 'TEXT')
  await ensureColumn('scheduled_classes', 'date', 'TEXT')
  await ensureColumn('scheduled_classes', 'time', 'TEXT')
  await ensureColumn('scheduled_classes', 'duration', 'INTEGER')
  await ensureColumn('scheduled_classes', 'meet_link', 'TEXT')
  await ensureColumn('scheduled_classes', 'batch', 'TEXT')
  await ensureColumn('scheduled_classes', 'start_date_time', 'TEXT')
  await ensureColumn('scheduled_classes', 'end_date_time', 'TEXT')
  await ensureColumn('scheduled_classes', 'created_at', 'TIMESTAMPTZ')

  await ensureColumn('live_links', 'url', 'TEXT')
  await ensureColumn('live_links', 'label', 'TEXT')
  await ensureColumn('live_links', 'set_at', 'TIMESTAMPTZ')
  await ensureColumn('live_links', 'created_at', 'TIMESTAMPTZ')

  await ensureColumn('assigned_tests', 'title', 'TEXT')
  await ensureColumn('assigned_tests', 'subject_id', 'TEXT')
  await ensureColumn('assigned_tests', 'subject_label', 'TEXT')
  await ensureColumn('assigned_tests', 'class_id', 'TEXT')
  await ensureColumn('assigned_tests', 'class_name', 'TEXT')
  await ensureColumn('assigned_tests', 'chapter_id', 'TEXT')
  await ensureColumn('assigned_tests', 'chapter_label', 'TEXT')
  await ensureColumn('assigned_tests', 'chapter_ids', 'TEXT[]')
  await ensureColumn('assigned_tests', 'num_questions', 'INTEGER')
  await ensureColumn('assigned_tests', 'duration_mins', 'INTEGER')
  await ensureColumn('assigned_tests', 'instructions', 'TEXT')
  await ensureColumn('assigned_tests', 'is_active', 'BOOLEAN')
  await ensureColumn('assigned_tests', 'created_at', 'TIMESTAMPTZ')

  await ensureColumn('test_submissions', 'test_id', 'TEXT')
  await ensureColumn('test_submissions', 'student_email', 'TEXT')
  await ensureColumn('test_submissions', 'student_name', 'TEXT')
  await ensureColumn('test_submissions', 'score', 'INTEGER')
  await ensureColumn('test_submissions', 'total', 'INTEGER')
  await ensureColumn('test_submissions', 'accuracy', 'NUMERIC')
  await ensureColumn('test_submissions', 'submitted_at', 'TIMESTAMPTZ')
}

async function seedIfEmpty() {
  const { rows: studentRows } = await pool.query('SELECT COUNT(*)::int AS count FROM students')
  if (studentRows[0]?.count > 0) return

  await pool.query(
    `INSERT INTO students (name, email, phone, batch, joined_at, tests_attempted, avg_score, best_score, total_questions, results)
     VALUES
       ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10::jsonb),
       ($11, $12, $13, $14, $15, $16, $17, $18, $19, $20::jsonb)`,
    [
      'Jaydeep Singh', 'kotwaljaydeep369@gmail.com', '916006951508', 'A1', new Date('2026-06-24').toISOString(), 3, 72, 88, 90, JSON.stringify([]),
      'Bhavya', 'aviator.bhavya@gmail.com', '9988776655', 'A2', new Date('2026-05-02').toISOString(), 4, 85, 92, 120, JSON.stringify([]),
    ]
  )

  await pool.query(
    `INSERT INTO attendance (date, batch, email, name, status, note)
     VALUES ($1, $2, $3, $4, $5, $6), ($7, $8, $9, $10, $11, $12)`,
    [
      '2026-07-10', 'A1', 'kotwaljaydeep369@gmail.com', 'Jaydeep Singh', 'present', 'On time',
      '2026-07-10', 'A1', 'aviator.bhavya@gmail.com', 'Bhavya', 'late', 'Joined late',
    ]
  )

  await pool.query(
    `INSERT INTO scheduled_classes (id, title, description, date, time, duration, meet_link, batch, start_date_time, end_date_time)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
    ['class-1', 'Live Algebra Drill', 'Revision class', '2026-07-12', '18:00', 60, 'https://meet.example.com/teacher', 'A1', '2026-07-12T18:00:00', '2026-07-12T19:00:00']
  )

  await pool.query(`INSERT INTO live_links (url, label, set_at) VALUES ($1, $2, $3)`, ['https://meet.example.com/live', 'Join live class', new Date().toISOString()])

  await pool.query(
    `INSERT INTO assigned_tests (title, subject_id, subject_label, class_id, class_name, chapter_id, chapter_label, chapter_ids, num_questions, duration_mins, instructions, is_active)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
    ['Air Regulations Practice', 'air-regulations', 'Air Regulations', 'a1', 'A1', 'air-reg-1', 'Regulatory Basics', ['air-reg-1'], 20, 30, 'Attempt all questions.', true]
  )

  await pool.query(
    `INSERT INTO test_submissions (test_id, student_email, student_name, score, total, accuracy)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    ['1', 'kotwaljaydeep369@gmail.com', 'Jaydeep Singh', 16, 20, 80]
  )
}

export async function GET() {
  try {
    await ensureTables()
    await seedIfEmpty()

    const [studentsResult, attendanceResult, classesResult, linkResult, testsResult, submissionsResult] = await Promise.all([
      pool.query('SELECT * FROM students ORDER BY created_at DESC, name ASC'),
      pool.query('SELECT * FROM attendance ORDER BY created_at DESC, date DESC'),
      pool.query('SELECT * FROM scheduled_classes ORDER BY created_at DESC, date DESC'),
      pool.query('SELECT * FROM live_links ORDER BY set_at DESC, created_at DESC LIMIT 1'),
      pool.query('SELECT * FROM assigned_tests ORDER BY created_at DESC'),
      pool.query('SELECT * FROM test_submissions ORDER BY submitted_at DESC'),
    ])

    return NextResponse.json({
      students: studentsResult.rows.map(normalizeStudentRow),
      attendance: attendanceResult.rows.map(normalizeAttendanceRow),
      classes: classesResult.rows.map(normalizeClassRow),
      link: linkResult.rows[0] ? normalizeLinkRow(linkResult.rows[0]) : null,
      tests: testsResult.rows.map(normalizeTestRow),
      submissions: submissionsResult.rows.map(normalizeSubmissionRow),
    })
  } catch (error) {
    console.error('Teacher dashboard fetch error:', error)
    return NextResponse.json({
      students: [],
      attendance: [],
      classes: [],
      link: null,
      tests: [],
      submissions: [],
      degraded: true,
      error: error?.message || 'Unable to load teacher dashboard',
    })
  }
}
