import pool from './db'

let initialized = false
let schemaReady = null

function getDbConnectionString() {
  return (
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.SUPABASE_DB_URL ||
    ''
  )
}

function toIso(value) {
  if (!value) return new Date().toISOString()
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString()
}

function toNumber(value, fallback = 0) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

function normalizeAnswers(value) {
  if (Array.isArray(value)) return value
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value)
      return Array.isArray(parsed) ? parsed : []
    } catch {
      return []
    }
  }
  return []
}

function getLowerEmail(value) {
  return String(value || '').trim().toLowerCase()
}

async function ensureRequiredColumns() {
  const statements = [
    `ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS phone VARCHAR(20)`,
    `ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS batch VARCHAR(255) DEFAULT 'Batch A — Morning'`,
    `ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS whatsapp_opt_in BOOLEAN DEFAULT false`,
    `ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS whatsapp_opt_in_at TIMESTAMPTZ`,
    `ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS is_verified BOOLEAN DEFAULT FALSE`,
    `ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`,
    `ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`,
    `ALTER TABLE IF EXISTS test_results ADD COLUMN IF NOT EXISTS answers JSONB DEFAULT '[]'::jsonb`,
    `ALTER TABLE IF EXISTS assigned_tests ADD COLUMN IF NOT EXISTS chapter_ids TEXT[] NOT NULL DEFAULT '{}'`,
    `ALTER TABLE IF EXISTS assigned_tests ADD COLUMN IF NOT EXISTS class_id TEXT DEFAULT ''`,
    `ALTER TABLE IF EXISTS assigned_tests ADD COLUMN IF NOT EXISTS class_name TEXT DEFAULT ''`,
    `ALTER TABLE IF EXISTS assigned_tests ADD COLUMN IF NOT EXISTS duration_mins INTEGER NOT NULL DEFAULT 30`,
    `ALTER TABLE IF EXISTS assigned_tests ADD COLUMN IF NOT EXISTS instructions TEXT DEFAULT ''`,
    `ALTER TABLE IF EXISTS assigned_tests ADD COLUMN IF NOT EXISTS due_at TIMESTAMPTZ`,
    `ALTER TABLE IF EXISTS assigned_tests ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW()`,
    `ALTER TABLE IF EXISTS assigned_tests ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true`,
    `ALTER TABLE IF EXISTS assigned_tests ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW()`,
    `ALTER TABLE IF EXISTS assigned_test_results ADD COLUMN IF NOT EXISTS answers JSONB DEFAULT '[]'`,
    `ALTER TABLE IF EXISTS attendance ADD COLUMN IF NOT EXISTS note TEXT DEFAULT ''`,
    `ALTER TABLE IF EXISTS attendance ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW()`,
    `ALTER TABLE IF EXISTS attendance ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW()`,
    `ALTER TABLE IF EXISTS live_classes ADD COLUMN IF NOT EXISTS description TEXT DEFAULT ''`,
    `ALTER TABLE IF EXISTS live_classes ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW()`,
    `ALTER TABLE IF EXISTS live_links ADD COLUMN IF NOT EXISTS label TEXT DEFAULT 'Live Class'`,
    `ALTER TABLE IF EXISTS live_links ADD COLUMN IF NOT EXISTS set_at TIMESTAMPTZ DEFAULT NOW()`,
    `ALTER TABLE IF EXISTS live_links ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW()`,
    `ALTER TABLE IF EXISTS leaderboard ADD COLUMN IF NOT EXISTS total_score INTEGER NOT NULL DEFAULT 0`,
    `ALTER TABLE IF EXISTS leaderboard ADD COLUMN IF NOT EXISTS total_questions INTEGER NOT NULL DEFAULT 0`,
    `ALTER TABLE IF EXISTS leaderboard ADD COLUMN IF NOT EXISTS tests_attempted INTEGER NOT NULL DEFAULT 0`,
    `ALTER TABLE IF EXISTS leaderboard ADD COLUMN IF NOT EXISTS accuracy INTEGER NOT NULL DEFAULT 0`,
    `ALTER TABLE IF EXISTS leaderboard ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW()`,
    `ALTER TABLE IF EXISTS leaderboard ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW()`,
  ]

  for (const statement of statements) {
    try {
      await pool.query(statement)
    } catch (error) {
      const message = String(error?.message || '')
      if (!message.includes('already exists') && !message.includes('does not exist')) {
        console.error('teacher-data column migration error', error)
      }
    }
  }
}

async function ensureTables() {
  if (initialized) return

  if (!getDbConnectionString()) {
    initialized = true
    return
  }

  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone VARCHAR(20) NOT NULL UNIQUE,
        batch VARCHAR(255) DEFAULT 'Batch A — Morning',
        is_verified BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS test_results (
        id SERIAL PRIMARY KEY,
        student_email VARCHAR(255) NOT NULL,
        chapter_id VARCHAR(255) NOT NULL,
        score INT DEFAULT 0,
        total INT DEFAULT 0,
        answers JSONB DEFAULT '[]'::jsonb,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS assigned_tests (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        subject_id TEXT NOT NULL,
        subject_label TEXT NOT NULL,
        class_id TEXT DEFAULT '',
        class_name TEXT DEFAULT '',
        chapter_id TEXT DEFAULT '',
        chapter_label TEXT DEFAULT '',
        chapter_ids TEXT[] NOT NULL DEFAULT '{}',
        num_questions INTEGER NOT NULL DEFAULT 20,
        duration_mins INTEGER NOT NULL DEFAULT 30,
        instructions TEXT DEFAULT '',
        due_at TIMESTAMPTZ,
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS assigned_test_results (
        id SERIAL PRIMARY KEY,
        test_id INTEGER NOT NULL,
        student_email TEXT NOT NULL,
        student_name TEXT NOT NULL,
        score INTEGER NOT NULL,
        total INTEGER NOT NULL,
        accuracy INTEGER NOT NULL,
        answers JSONB DEFAULT '[]',
        submitted_at TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS attendance (
        id SERIAL PRIMARY KEY,
        student_email TEXT NOT NULL,
        student_name TEXT NOT NULL,
        date DATE NOT NULL,
        batch TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'absent',
        note TEXT DEFAULT '',
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW(),
        CONSTRAINT attendance_student_date_batch_unique UNIQUE (student_email, date, batch)
      );

      CREATE TABLE IF NOT EXISTS live_classes (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT DEFAULT '',
        start_date_time TIMESTAMPTZ NOT NULL,
        end_date_time TIMESTAMPTZ NOT NULL,
        meet_link TEXT NOT NULL,
        batch TEXT DEFAULT 'All Batches',
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS live_links (
        id SERIAL PRIMARY KEY,
        url TEXT NOT NULL,
        label TEXT DEFAULT 'Live Class',
        set_at TIMESTAMPTZ DEFAULT NOW(),
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS leaderboard (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        total_score INTEGER NOT NULL DEFAULT 0,
        total_questions INTEGER NOT NULL DEFAULT 0,
        tests_attempted INTEGER NOT NULL DEFAULT 0,
        accuracy INTEGER NOT NULL DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `)

    await ensureRequiredColumns()

    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_users_email ON users (LOWER(email));
      CREATE INDEX IF NOT EXISTS idx_users_phone ON users (phone);
      CREATE INDEX IF NOT EXISTS idx_test_results_email ON test_results (LOWER(student_email));
      CREATE INDEX IF NOT EXISTS idx_test_results_date ON test_results (date);
      CREATE INDEX IF NOT EXISTS idx_atr_test_id ON assigned_test_results (test_id);
      CREATE INDEX IF NOT EXISTS idx_atr_email ON assigned_test_results (student_email);
      CREATE INDEX IF NOT EXISTS idx_attendance_email ON attendance (LOWER(student_email));
      CREATE INDEX IF NOT EXISTS idx_attendance_date ON attendance (date);
      CREATE INDEX IF NOT EXISTS idx_attendance_batch ON attendance (batch);
    `)

    initialized = true
  } catch (error) {
    console.error('teacher-data init error', error)
    // Production DB roles can block CREATE/ALTER. Keep runtime alive so
    // read paths can still query existing tables.
    initialized = true
  }
}

async function seedDemoData() {
  try {
    const { rows } = await pool.query('SELECT COUNT(*)::int AS count FROM users')
    if ((rows[0]?.count || 0) > 0) return

    await pool.query(`
      INSERT INTO users (name, email, phone, batch, created_at) VALUES
      ('Jaydeep Singh', 'kotwaljaydeep369@gmail.com', '916006951508', 'A1', NOW()),
      ('Bhavya', 'aviator.bhavya@gmail.com', '9988776655', 'A2', NOW());
    `)

    await pool.query(`
      INSERT INTO assigned_tests (title, subject_id, subject_label, chapter_id, chapter_label, chapter_ids, num_questions, duration_mins, instructions, is_active, created_at) VALUES
      ('Air Regulations Practice', 'air-regulations', 'Air Regulations', 'air-reg-1', 'Regulatory Basics', ARRAY['air-reg-1'], 20, 30, 'Attempt all questions.', true, NOW());
    `)

    await pool.query(`
      INSERT INTO test_results (student_email, chapter_id, score, total, answers, date) VALUES
      ('kotwaljaydeep369@gmail.com', 'air-reg-1', 18, 25, '[]'::jsonb, NOW()),
      ('aviator.bhavya@gmail.com', 'met-1', 20, 25, '[]'::jsonb, NOW());
    `)

    await pool.query(`
      INSERT INTO assigned_test_results (test_id, student_email, student_name, score, total, accuracy, answers, submitted_at) VALUES
      (1, 'kotwaljaydeep369@gmail.com', 'Jaydeep Singh', 16, 20, 80, '[]'::jsonb, NOW());
    `)

    await pool.query(`
      INSERT INTO attendance (student_email, student_name, date, batch, status, note, created_at) VALUES
      ('kotwaljaydeep369@gmail.com', 'Jaydeep Singh', CURRENT_DATE, 'A1', 'present', 'On time', NOW()),
      ('aviator.bhavya@gmail.com', 'Bhavya', CURRENT_DATE, 'A1', 'late', 'Joined late', NOW());
    `)

    await pool.query(`
      INSERT INTO live_links (url, label, set_at) VALUES ('https://meet.example.com/live', 'Join live class', NOW());
    `)
  } catch (error) {
    console.error('teacher-data seed error', error)
  }
}

async function runTeacherDataSetup() {
  await ensureTables()
  try {
    await seedDemoData()
  } catch (error) {
    console.warn('teacher-data seed skipped:', error?.message || error)
  }
}

export async function ensureTeacherDataTables() {
  if (schemaReady) return schemaReady
  // Share one setup promise across concurrent callers; reset on failure so a
  // later request can retry instead of caching a permanent failure.
  schemaReady = runTeacherDataSetup().catch((error) => {
    schemaReady = null
    throw error
  })
  return schemaReady
}

async function getLegacyStudentsFromStudentsTable() {
  const tableCheck = await pool.query(`SELECT to_regclass('public.students') AS table_name`)
  if (!tableCheck.rows[0]?.table_name) return []

  const legacy = await pool.query(`
    SELECT name, email, phone, batch, joined_at, tests_attempted, avg_score, best_score, total_questions, results, created_at
    FROM students
    ORDER BY created_at ASC, name ASC
  `)

  return legacy.rows.map((row) => {
    const parsedResults = normalizeAnswers(row.results).map((entry, index) => {
      const total = toNumber(entry?.total, 0)
      const score = toNumber(entry?.score, 0)
      const pct = entry?.pct != null ? toNumber(entry.pct, 0) : (total > 0 ? Math.round((score / total) * 100) : 0)
      return {
        id: String(entry?.id || `legacy-${row.email || 'student'}-${index}`),
        chapterId: entry?.chapterId || entry?.chapter_id || '',
        title: entry?.title || '',
        subjectLabel: entry?.subjectLabel || entry?.subject_label || '',
        score,
        total,
        answers: normalizeAnswers(entry?.answers),
        date: toIso(entry?.date || row.joined_at || row.created_at),
        pct,
        source: entry?.source || 'legacy',
      }
    })

    const scoreSeries = parsedResults.map((entry) => entry.pct)
    return {
      name: row.name || 'Student',
      email: row.email || '',
      phone: row.phone || '',
      batch: row.batch || 'A1',
      whatsappOptIn: false,
      whatsappOptInAt: null,
      joinedAt: toIso(row.joined_at || row.created_at),
      testsAttempted: toNumber(row.tests_attempted, parsedResults.length),
      avgScore: scoreSeries.length ? Math.round(scoreSeries.reduce((sum, value) => sum + value, 0) / scoreSeries.length) : toNumber(row.avg_score, 0),
      bestScore: scoreSeries.length ? Math.max(...scoreSeries) : toNumber(row.best_score, 0),
      totalQuestions: toNumber(row.total_questions, parsedResults.reduce((sum, entry) => sum + (entry.total || 0), 0)),
      results: parsedResults,
    }
  })
}

export async function getStudentsWithResults() {
  await ensureTeacherDataTables()

  async function safeRows(query, values = []) {
    try {
      const result = await pool.query(query, values)
      return result.rows || []
    } catch (error) {
      console.warn('teacher-data read fallback:', error?.message || error)
      return []
    }
  }

  const [usersRows, normalRows, assignedRows] = await Promise.all([
    safeRows(`SELECT id, name, email, phone, batch, COALESCE(whatsapp_opt_in, false) AS whatsapp_opt_in, whatsapp_opt_in_at, created_at FROM users ORDER BY created_at ASC, name ASC`),
    safeRows(`SELECT id, student_email, chapter_id, score, total, answers, date FROM test_results ORDER BY date DESC, id DESC`),
    safeRows(`SELECT atr.id, atr.test_id, atr.student_email, atr.student_name, atr.score, atr.total, atr.answers, atr.submitted_at, at.title AS test_title, at.subject_label FROM assigned_test_results atr LEFT JOIN assigned_tests at ON at.id = atr.test_id ORDER BY atr.submitted_at DESC, atr.id DESC`),
  ])

  const normalByEmail = new Map()
  for (const row of normalRows) {
    const key = getLowerEmail(row.student_email)
    const list = normalByEmail.get(key) || []
    list.push({
      id: String(row.id),
      chapterId: row.chapter_id || '',
      score: toNumber(row.score, 0),
      total: toNumber(row.total, 0),
      answers: normalizeAnswers(row.answers),
      date: toIso(row.date),
      pct: row.total > 0 ? Math.round((toNumber(row.score, 0) / toNumber(row.total, 0)) * 100) : 0,
      source: 'normal',
    })
    normalByEmail.set(key, list)
  }

  const assignedByEmail = new Map()
  for (const row of assignedRows) {
    const key = getLowerEmail(row.student_email)
    const list = assignedByEmail.get(key) || []
    list.push({
      id: `assigned-${row.id}`,
      chapterId: null,
      title: row.test_title || 'Assigned Test',
      subjectLabel: row.subject_label || '',
      testId: toNumber(row.test_id, 0),
      score: toNumber(row.score, 0),
      total: toNumber(row.total, 0),
      answers: normalizeAnswers(row.answers),
      date: toIso(row.submitted_at),
      pct: row.total > 0 ? Math.round((toNumber(row.score, 0) / toNumber(row.total, 0)) * 100) : 0,
      source: 'assigned',
    })
    assignedByEmail.set(key, list)
  }

  let students = usersRows.map((user) => {
    const key = getLowerEmail(user.email)
    const combined = [
      ...(normalByEmail.get(key) || []),
      ...(assignedByEmail.get(key) || []),
    ].sort((a, b) => new Date(b.date) - new Date(a.date))

    const scores = combined.map((entry) => entry.pct)
    return {
      name: user.name || 'Student',
      email: user.email || '',
      phone: user.phone || '',
      batch: user.batch || 'Batch A — Morning',
      whatsappOptIn: user.whatsapp_opt_in === true,
      whatsappOptInAt: user.whatsapp_opt_in_at ? toIso(user.whatsapp_opt_in_at) : null,
      joinedAt: toIso(user.created_at),
      testsAttempted: combined.length,
      avgScore: scores.length ? Math.round(scores.reduce((sum, value) => sum + value, 0) / scores.length) : 0,
      bestScore: scores.length ? Math.max(...scores) : 0,
      totalQuestions: combined.reduce((sum, entry) => sum + (entry.total || 0), 0),
      results: combined,
    }
  })

  // Production safety fallback: if users table has no student rows,
  // read from legacy teacher dashboard table used by older deployments.
  if (!students.length) {
    students = await getLegacyStudentsFromStudentsTable()
  }

  const totalTests = students.reduce((sum, student) => sum + (student.testsAttempted || 0), 0)
  const avgAccuracy = students.length ? Math.round(students.reduce((sum, student) => sum + (student.avgScore || 0), 0) / students.length) : 0

  return {
    summary: {
      totalStudents: students.length,
      totalTests,
      avgAccuracy,
    },
    students,
  }
}

export async function addStudent(payload) {
  await ensureTeacherDataTables()
  const name = String(payload?.name || payload?.student?.name || '').trim()
  const email = String(payload?.email || payload?.student?.email || '').trim().toLowerCase()
  const phone = String(payload?.phone || payload?.student?.phone || '0000000000').trim()
  const batch = String(payload?.batch || payload?.student?.batch || 'Batch A — Morning').trim()
  const whatsappOptIn = payload?.whatsappOptIn === true || payload?.student?.whatsappOptIn === true

  if (!name || !email) {
    throw new Error('name and email are required')
  }

  await pool.query(
    `INSERT INTO users (name, email, phone, batch, whatsapp_opt_in, whatsapp_opt_in_at, created_at)
     VALUES ($1, $2, $3, $4, $5, $6, NOW())
     ON CONFLICT (email) DO UPDATE SET
       name = EXCLUDED.name,
       phone = EXCLUDED.phone,
       batch = EXCLUDED.batch,
       whatsapp_opt_in = EXCLUDED.whatsapp_opt_in,
       whatsapp_opt_in_at = CASE
         WHEN EXCLUDED.whatsapp_opt_in = true THEN COALESCE(users.whatsapp_opt_in_at, EXCLUDED.whatsapp_opt_in_at)
         ELSE NULL
       END`,
    [name, email, phone, batch, whatsappOptIn, whatsappOptIn ? new Date().toISOString() : null]
  )

  return getStudentsWithResults()
}

export async function removeStudent(email) {
  await ensureTeacherDataTables()
  const normalizedEmail = getLowerEmail(email)
  if (!normalizedEmail) throw new Error('email is required')

  await pool.query(`DELETE FROM users WHERE LOWER(email) = $1`, [normalizedEmail])
  return getStudentsWithResults()
}

export async function listAttendance({ date, batch } = {}) {
  await ensureTeacherDataTables()

  let query = `SELECT student_email AS email, student_name AS name, date, batch, status, note FROM attendance`
  const values = []

  if (date || batch) {
    const filters = []
    if (date) {
      filters.push(`date = $${values.length + 1}`)
      values.push(date)
    }
    if (batch) {
      filters.push(`batch = $${values.length + 1}`)
      values.push(batch)
    }
    query += ` WHERE ${filters.join(' AND ')}`
  }

  query += ` ORDER BY date DESC, created_at DESC`

  let result
  try {
    result = await pool.query(query, values)
  } catch (error) {
    console.warn('attendance list fallback:', error?.message || error)
    return { records: [] }
  }
  return {
    records: result.rows.map((row) => ({
      email: row.email || '',
      name: row.name || '',
      status: row.status || 'absent',
      note: row.note || '',
      date: row.date ? String(row.date) : '',
      batch: row.batch || 'A1',
    })),
  }
}

export async function saveAttendance({ date, batch, records }) {
  await ensureTeacherDataTables()
  const normalizedRecords = Array.isArray(records) ? records : []
  let saved = 0

  for (const record of normalizedRecords) {
    const email = getLowerEmail(record.email)
    const name = String(record.name || '').trim()
    const status = String(record.status || 'absent').trim()
    const note = String(record.note || '').trim()
    if (!email || !date || !batch) continue

    await pool.query(
      `INSERT INTO attendance (student_email, student_name, date, batch, status, note, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
       ON CONFLICT (student_email, date, batch) DO UPDATE SET student_name = EXCLUDED.student_name, status = EXCLUDED.status, note = EXCLUDED.note, updated_at = NOW()`,
      [email, name, date, batch, status, note]
    )
    saved += 1
  }

  return { success: true, saved, attendance: await listAttendance({ date, batch }).then((payload) => payload.records) }
}

export async function getAttendanceReport({ batch, month }) {
  await ensureTeacherDataTables()
  const query = `
    SELECT
      student_email AS email,
      student_name AS name,
      COUNT(*) FILTER (WHERE status = 'present') AS present,
      COUNT(*) FILTER (WHERE status = 'absent') AS absent,
      COUNT(*) FILTER (WHERE status = 'late') AS late
    FROM attendance
    WHERE batch = $1 AND date >= $2 AND date < $3
    GROUP BY student_email, student_name
    ORDER BY student_name ASC
  `
  const start = `${month}-01`
  const nextMonth = new Date(`${month}-01T00:00:00`)
  nextMonth.setMonth(nextMonth.getMonth() + 1)
  const end = nextMonth.toISOString().slice(0, 10)

  const result = await pool.query(query, [batch, start, end])
  return {
    report: result.rows.map((row) => ({
      email: row.email || '',
      name: row.name || '',
      present: toNumber(row.present, 0),
      absent: toNumber(row.absent, 0),
      late: toNumber(row.late, 0),
    })),
  }
}

export async function getStudentAttendance(email) {
  await ensureTeacherDataTables()
  const normalizedEmail = getLowerEmail(email)
  if (!normalizedEmail) return { present: 0, absent: 0, late: 0, monthPct: 0, days: {}, recent: [] }

  const currentMonthStart = new Date()
  currentMonthStart.setDate(1)
  currentMonthStart.setHours(0, 0, 0, 0)
  const currentMonth = currentMonthStart.toISOString().slice(0, 10)

  const [summaryResult, recentResult] = await Promise.all([
    pool.query(`SELECT status, date FROM attendance WHERE LOWER(student_email) = $1 AND date >= $2 ORDER BY date ASC`, [normalizedEmail, currentMonth]),
    pool.query(`SELECT date, batch, status, note FROM attendance WHERE LOWER(student_email) = $1 ORDER BY date DESC, created_at DESC LIMIT 10`, [normalizedEmail]),
  ])

  const summary = summaryResult.rows.reduce((acc, row) => {
    acc[row.status] = (acc[row.status] || 0) + 1
    return acc
  }, { present: 0, absent: 0, late: 0 })

  const total = summary.present + summary.absent + summary.late
  const monthPct = total ? Math.round((summary.present / total) * 100) : 0
  const days = summaryResult.rows.reduce((acc, row) => {
    acc[row.date ? String(row.date) : ''] = row.status
    return acc
  }, {})

  return {
    present: summary.present,
    absent: summary.absent,
    late: summary.late,
    monthPct,
    days,
    recent: recentResult.rows.map((row) => ({
      date: row.date ? String(row.date) : '',
      batch: row.batch || '',
      status: row.status || '',
      note: row.note || '',
    })),
  }
}

export async function listLiveClasses() {
  await ensureTeacherDataTables()
  const result = await pool.query(`SELECT id, title, description, start_date_time, end_date_time, meet_link, batch, created_at FROM live_classes WHERE end_date_time >= NOW() ORDER BY start_date_time ASC`)
  return {
    success: true,
    events: result.rows.map((row) => ({
      id: row.id,
      title: row.title,
      description: row.description || '',
      startDateTime: toIso(row.start_date_time),
      endDateTime: toIso(row.end_date_time),
      meetLink: row.meet_link || '',
      batch: row.batch || 'All Batches',
      createdAt: toIso(row.created_at),
    })),
  }
}

export async function createLiveClass(payload) {
  await ensureTeacherDataTables()
  const title = String(payload?.title || '').trim()
  if (!title || !payload?.startDateTime || !payload?.endDateTime || !payload?.meetLink) {
    throw new Error('title, startDateTime, endDateTime, and meetLink are required')
  }

  const result = await pool.query(`
    INSERT INTO live_classes (title, description, start_date_time, end_date_time, meet_link, batch, created_at)
    VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *
  `, [title, payload?.description || '', payload.startDateTime, payload.endDateTime, payload.meetLink, payload?.batch || 'All Batches'])

  return { success: true, event: { id: result.rows[0].id, ...result.rows[0] } }
}

export async function deleteLiveClass(id) {
  await ensureTeacherDataTables()
  await pool.query(`DELETE FROM live_classes WHERE id = $1`, [id])
  return { success: true }
}

export async function getLiveLink() {
  await ensureTeacherDataTables()
  const result = await pool.query(`SELECT url, label, set_at, created_at FROM live_links ORDER BY set_at DESC, created_at DESC LIMIT 1`)
  const row = result.rows[0]
  return {
    success: true,
    liveLink: row ? { url: row.url, label: row.label, setAt: toIso(row.set_at), createdAt: toIso(row.created_at) } : null,
  }
}

export async function setLiveLink(payload) {
  await ensureTeacherDataTables()
  const result = await pool.query(`INSERT INTO live_links (url, label, set_at, created_at) VALUES ($1, $2, NOW(), NOW()) RETURNING *`, [payload?.url || '', payload?.label || 'Live Class'])
  const row = result.rows[0]
  return { success: true, liveLink: { url: row.url, label: row.label, setAt: toIso(row.set_at), createdAt: toIso(row.created_at) } }
}

export async function clearLiveLink() {
  await ensureTeacherDataTables()
  await pool.query(`DELETE FROM live_links`)
  return { success: true }
}

export async function listAssignedTests({ onlyActive = false } = {}) {
  await ensureTeacherDataTables()
  const whereClause = onlyActive ? `WHERE COALESCE(is_active, true) = true` : ''
  const result = await pool.query(`SELECT id, title, subject_id, subject_label, class_id, class_name, chapter_id, chapter_label, chapter_ids, num_questions, duration_mins, instructions, due_at, is_active, created_at, updated_at FROM assigned_tests ${whereClause} ORDER BY created_at DESC`)

  return {
    success: true,
    tests: result.rows.map((row) => ({
      id: row.id,
      title: row.title,
      subjectId: row.subject_id,
      subjectLabel: row.subject_label,
      classId: row.class_id || '',
      className: row.class_name || '',
      chapterId: row.chapter_id || '',
      chapterLabel: row.chapter_label || '',
      chapterIds: Array.isArray(row.chapter_ids) ? row.chapter_ids : [],
      numQuestions: row.num_questions,
      durationMins: row.duration_mins,
      instructions: row.instructions || '',
      dueAt: row.due_at || null,
      isActive: row.is_active !== false,
      createdAt: toIso(row.created_at),
      updatedAt: toIso(row.updated_at),
    })),
    onlyActive,
  }
}

export async function createAssignedTest(payload) {
  await ensureTeacherDataTables()
  const result = await pool.query(`
    INSERT INTO assigned_tests (title, subject_id, subject_label, class_id, class_name, chapter_id, chapter_label, chapter_ids, num_questions, duration_mins, instructions, due_at, is_active, created_at, updated_at)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW(), NOW()) RETURNING *
  `, [
    payload?.title || payload?.test?.title || '',
    payload?.subjectId || payload?.test?.subjectId || '',
    payload?.subjectLabel || payload?.test?.subjectLabel || '',
    payload?.classId || payload?.test?.classId || '',
    payload?.className || payload?.test?.className || payload?.classId || payload?.test?.classId || '',
    payload?.chapterId || payload?.test?.chapterId || '',
    payload?.chapterLabel || payload?.test?.chapterLabel || '',
    payload?.chapterIds || payload?.test?.chapterIds || [],
    toNumber(payload?.numQuestions || payload?.test?.numQuestions, 20),
    toNumber(payload?.durationMins || payload?.test?.durationMins, 30),
    payload?.instructions || payload?.test?.instructions || '',
    payload?.dueAt || payload?.test?.dueAt || null,
    payload?.isActive !== undefined ? payload.isActive : (payload?.test?.isActive !== undefined ? payload.test.isActive : true),
  ])

  return { success: true, test: { id: result.rows[0].id, ...result.rows[0] } }
}

export async function updateAssignedTest(payload) {
  await ensureTeacherDataTables()

  const id = payload?.id || payload?.test?.id
  if (!id) throw new Error('id is required')

  const fields = [
    ['title', payload?.title ?? payload?.test?.title],
    ['subject_id', payload?.subjectId ?? payload?.test?.subjectId],
    ['subject_label', payload?.subjectLabel ?? payload?.test?.subjectLabel],
    ['class_id', payload?.classId ?? payload?.test?.classId],
    ['class_name', payload?.className ?? payload?.test?.className],
    ['chapter_id', payload?.chapterId ?? payload?.test?.chapterId],
    ['chapter_label', payload?.chapterLabel ?? payload?.test?.chapterLabel],
    ['chapter_ids', payload?.chapterIds ?? payload?.test?.chapterIds],
    ['num_questions', payload?.numQuestions ?? payload?.test?.numQuestions],
    ['duration_mins', payload?.durationMins ?? payload?.test?.durationMins],
    ['instructions', payload?.instructions ?? payload?.test?.instructions],
    ['due_at', payload?.dueAt ?? payload?.test?.dueAt],
    ['is_active', payload?.isActive ?? payload?.test?.isActive],
  ]

  const assignments = []
  const values = []

  for (const [column, value] of fields) {
    if (value === undefined) continue
    assignments.push(`${column} = $${values.length + 1}`)
    values.push(value)
  }

  assignments.push(`updated_at = NOW()`)

  if (!assignments.length) {
    const { rows } = await pool.query(`SELECT * FROM assigned_tests WHERE id = $1`, [id])
    return { success: true, test: rows[0] || null }
  }

  const { rows } = await pool.query(
    `UPDATE assigned_tests SET ${assignments.join(', ')} WHERE id = $${values.length + 1} RETURNING *`,
    [...values, id]
  )

  if (!rows[0]) throw new Error('Assigned test not found')
  return { success: true, test: rows[0] }
}

export async function toggleAssignedTest(payload) {
  await ensureTeacherDataTables()
  const id = payload?.id
  const nextActive = payload?.isActive ?? payload?.is_active
  if (!id) throw new Error('id is required')

  const result = await pool.query(`UPDATE assigned_tests SET is_active = $1, updated_at = NOW() WHERE id = $2 RETURNING *`, [nextActive !== undefined ? nextActive : true, id])
  return { success: true, test: result.rows[0] }
}

export async function deleteAssignedTest(id) {
  await ensureTeacherDataTables()
  await pool.query(`DELETE FROM assigned_tests WHERE id = $1`, [id])
  return { success: true }
}

export async function getAssignedTestResults(testId) {
  await ensureTeacherDataTables()
  const result = await pool.query(`SELECT atr.id, atr.test_id, atr.student_email, atr.student_name, atr.score, atr.total, atr.accuracy, atr.answers, atr.submitted_at, at.title AS test_title, at.subject_label FROM assigned_test_results atr LEFT JOIN assigned_tests at ON at.id = atr.test_id WHERE atr.test_id = $1 ORDER BY atr.submitted_at DESC`, [testId])

  return {
    success: true,
    results: result.rows.map((row) => ({
      id: row.id,
      testId: row.test_id,
      studentEmail: row.student_email,
      studentName: row.student_name,
      score: row.score,
      total: row.total,
      accuracy: row.accuracy,
      answers: normalizeAnswers(row.answers),
      submittedAt: toIso(row.submitted_at),
      testTitle: row.test_title || '',
      subjectLabel: row.subject_label || '',
    })),
    submissions: result.rows.map((row) => ({
      id: row.id,
      testId: row.test_id,
      studentEmail: row.student_email,
      studentName: row.student_name,
      score: row.score,
      total: row.total,
      accuracy: row.accuracy,
      answers: normalizeAnswers(row.answers),
      submittedAt: toIso(row.submitted_at),
    })),
  }
}

export async function submitAssignedTestResult(payload) {
  await ensureTeacherDataTables()
  const result = await pool.query(`
    INSERT INTO assigned_test_results (test_id, student_email, student_name, score, total, accuracy, answers, submitted_at)
    VALUES ($1, $2, $3, $4, $5, $6, $7, NOW()) RETURNING *
  `, [
    toNumber(payload?.testId, 0),
    getLowerEmail(payload?.studentEmail),
    payload?.studentName || 'Student',
    toNumber(payload?.score, 0),
    toNumber(payload?.total, 0),
    payload?.accuracy !== undefined ? toNumber(payload.accuracy, 0) : (payload?.total ? Math.round((toNumber(payload?.score, 0) / toNumber(payload?.total, 0)) * 100) : 0),
    JSON.stringify(payload?.answers || []),
  ])

  return { success: true, result: { id: result.rows[0].id, ...result.rows[0] } }
}

export async function getLeaderboard() {
  await ensureTeacherDataTables()
  const result = await pool.query(`SELECT email, name, total_score, total_questions, tests_attempted, accuracy FROM leaderboard ORDER BY accuracy DESC, total_score DESC`)
  return result.rows.map((row) => ({
    email: row.email,
    name: row.name,
    totalScore: toNumber(row.total_score, 0),
    totalQuestions: toNumber(row.total_questions, 0),
    testsAttempted: toNumber(row.tests_attempted, 0),
    accuracy: toNumber(row.accuracy, 0),
  }))
}

export async function upsertLeaderboard(payload) {
  await ensureTeacherDataTables()
  const email = getLowerEmail(payload?.email)
  const name = String(payload?.name || '').trim()
  const score = toNumber(payload?.score, 0)
  const total = toNumber(payload?.total, 0)

  if (!email || !name) throw new Error('email and name are required')

  const result = await pool.query(`
    INSERT INTO leaderboard (email, name, total_score, total_questions, tests_attempted, accuracy, updated_at)
    VALUES ($1, $2, $3, $4, 1, $5, NOW())
    ON CONFLICT (email) DO UPDATE SET
      name = EXCLUDED.name,
      total_score = leaderboard.total_score + EXCLUDED.total_score,
      total_questions = leaderboard.total_questions + EXCLUDED.total_questions,
      tests_attempted = leaderboard.tests_attempted + 1,
      accuracy = CASE WHEN leaderboard.total_questions + EXCLUDED.total_questions > 0 THEN ROUND((leaderboard.total_score + EXCLUDED.total_score) * 100 / (leaderboard.total_questions + EXCLUDED.total_questions)) ELSE 0 END,
      updated_at = NOW()
    RETURNING *
  `, [email, name, score, total, score > 0 && total > 0 ? Math.round((score / total) * 100) : 0])

  return { created: Boolean(result.rows[0]) }
}
