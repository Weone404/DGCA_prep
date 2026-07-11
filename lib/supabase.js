import { NextResponse } from 'next/server'

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_KEY

export function getSupabaseConfig() {
  return { url: SUPABASE_URL, key: SUPABASE_KEY }
}

function getValue(record, keys, fallback = '') {
  for (const key of keys) {
    const value = record?.[key]
    if (value !== undefined && value !== null && value !== '') return value
  }
  return fallback
}

function toNumber(value, fallback = 0) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

export function normalizeStudent(record) {
  return {
    id: record.id || record.student_id || record.email,
    name: getValue(record, ['name', 'full_name', 'student_name', 'first_name'], 'Student'),
    email: getValue(record, ['email', 'student_email', 'email_address'], ''),
    phone: getValue(record, ['phone', 'phone_number', 'mobile'], ''),
    batch: getValue(record, ['batch', 'class_batch', 'group', 'batch_name'], 'A1'),
    joinedAt: getValue(record, ['joined_at', 'joinedAt', 'created_at', 'createdAt'], new Date().toISOString()),
    testsAttempted: toNumber(getValue(record, ['tests_attempted', 'testsAttempted', 'attempts'], 0)),
    avgScore: toNumber(getValue(record, ['avg_score', 'avgScore', 'accuracy'], 0)),
    bestScore: toNumber(getValue(record, ['best_score', 'bestScore', 'highest_score'], 0)),
    totalQuestions: toNumber(getValue(record, ['total_questions', 'totalQuestions', 'question_count'], 0)),
    results: Array.isArray(record.results) ? record.results : [],
  }
}

export function normalizeAttendanceRecord(record) {
  return {
    date: getValue(record, ['date', 'attendance_date', 'created_at'], ''),
    batch: getValue(record, ['batch', 'class_batch'], 'A1'),
    email: getValue(record, ['email', 'student_email'], ''),
    name: getValue(record, ['name', 'student_name'], ''),
    status: getValue(record, ['status', 'attendance_status'], 'absent'),
    note: getValue(record, ['note', 'remarks', 'comment'], ''),
  }
}

export function normalizeScheduledClass(record) {
  return {
    id: record.id || record.class_id,
    title: getValue(record, ['title', 'name'], 'Scheduled Class'),
    description: getValue(record, ['description', 'notes'], ''),
    date: getValue(record, ['date', 'class_date'], ''),
    time: getValue(record, ['time', 'class_time'], ''),
    duration: toNumber(getValue(record, ['duration', 'duration_mins'], 60)),
    meetLink: getValue(record, ['meet_link', 'meetLink', 'link'], ''),
    batch: getValue(record, ['batch', 'class_batch'], 'A1'),
    startDateTime: getValue(record, ['start_date_time', 'startDateTime', 'start_at'], ''),
    endDateTime: getValue(record, ['end_date_time', 'endDateTime', 'end_at'], ''),
  }
}

export function normalizeLiveLink(record) {
  return {
    url: getValue(record, ['url', 'meet_link', 'link'], ''),
    label: getValue(record, ['label', 'title', 'name'], 'Live class'),
    setAt: getValue(record, ['set_at', 'setAt', 'created_at'], new Date().toISOString()),
  }
}

export function normalizeAssignedTest(record) {
  return {
    id: record.id || record.test_id,
    title: getValue(record, ['title', 'name'], 'Assigned Test'),
    subjectId: getValue(record, ['subject_id', 'subjectId'], ''),
    subjectLabel: getValue(record, ['subject_label', 'subjectLabel'], ''),
    chapterId: getValue(record, ['chapter_id', 'chapterId'], ''),
    chapterLabel: getValue(record, ['chapter_label', 'chapterLabel'], ''),
    chapterIds: Array.isArray(record.chapter_ids) ? record.chapter_ids : [],
    numQuestions: toNumber(getValue(record, ['num_questions', 'numQuestions'], 20)),
    durationMins: toNumber(getValue(record, ['duration_mins', 'durationMins'], 30)),
    instructions: getValue(record, ['instructions', 'description'], ''),
    is_active: record.is_active ?? record.isActive ?? true,
  }
}

export function normalizeSubmission(record) {
  return {
    id: record.id || record.submission_id,
    testId: record.test_id || record.testId,
    studentEmail: getValue(record, ['student_email', 'studentEmail'], ''),
    studentName: getValue(record, ['student_name', 'studentName'], ''),
    score: toNumber(getValue(record, ['score', 'points'], 0)),
    total: toNumber(getValue(record, ['total', 'max_score'], 0)),
    accuracy: toNumber(getValue(record, ['accuracy', 'pct'], 0)),
    submittedAt: getValue(record, ['submitted_at', 'submittedAt', 'created_at'], ''),
  }
}

export async function supabaseRequest(table, { method = 'GET', body, query = '*', searchParams = {} } = {}) {
  const { url, key } = getSupabaseConfig()

  if (!url || !key) {
    return { data: [], error: 'Missing Supabase env vars', status: 200 }
  }

  const endpoint = new URL(`${url}/rest/v1/${table}`)

  if (query) {
    endpoint.searchParams.set('select', query)
  }

  Object.entries(searchParams).forEach(([name, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      endpoint.searchParams.set(name, String(value))
    }
  })

  const headers = {
    apikey: key,
    Authorization: `Bearer ${key}`,
    Accept: 'application/json',
  }

  if (body !== undefined) {
    headers['Content-Type'] = 'application/json'
  }

  if (method !== 'GET' && method !== 'DELETE') {
    headers.Prefer = 'return=representation'
  }

  const response = await fetch(endpoint, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  })

  const contentType = response.headers.get('content-type') || ''
  const payload = contentType.includes('application/json') ? await response.json() : await response.text()

  if (!response.ok) {
    return { data: [], error: typeof payload === 'string' ? payload : JSON.stringify(payload), status: response.status }
  }

  return { data: payload, error: null, status: response.status }
}

export function jsonResponse(data, status = 200) {
  return NextResponse.json(data, { status })
}
