import { jsonResponse, normalizeStudent, supabaseRequest } from '../../../../lib/supabase'

const fallbackStudents = [
  {
    name: 'Jaydeep Singh',
    email: 'kotwaljaydeep369@gmail.com',
    phone: '916006951508',
    batch: 'A1',
    joinedAt: '2026-06-24',
    testsAttempted: 3,
    avgScore: 72,
    bestScore: 88,
    totalQuestions: 90,
    results: [],
  },
  {
    name: 'Bhavya',
    email: 'aviator.bhavya@gmail.com',
    phone: '9988776655',
    batch: 'A2',
    joinedAt: '2026-05-02',
    testsAttempted: 4,
    avgScore: 85,
    bestScore: 92,
    totalQuestions: 120,
    results: [],
  },
]

export async function GET() {
  const { data, error } = await supabaseRequest('students', { query: '*' })

  if (error) {
    return jsonResponse({ students: fallbackStudents })
  }

  const students = Array.isArray(data) ? data.map(normalizeStudent) : fallbackStudents
  return jsonResponse({ students })
}

export async function POST(req) {
  const body = await req.json()
  const payload = body?.student || body
  const { data, error } = await supabaseRequest('students', { method: 'POST', body: payload })

  if (error) {
    return jsonResponse({ error }, 500)
  }

  const refreshed = await supabaseRequest('students', { query: '*' })
  const students = Array.isArray(refreshed.data) ? refreshed.data.map(normalizeStudent) : fallbackStudents
  return jsonResponse({ students })
}

export async function DELETE(req) {
  const body = await req.json()
  const email = body?.email
  if (!email) return jsonResponse({ error: 'Email required' }, 400)

  const { error } = await supabaseRequest('students', { method: 'DELETE', searchParams: { email: `eq.${encodeURIComponent(email)}` } })
  if (error) return jsonResponse({ error }, 500)

  const refreshed = await supabaseRequest('students', { query: '*' })
  const students = Array.isArray(refreshed.data) ? refreshed.data.map(normalizeStudent) : fallbackStudents
  return jsonResponse({ students })
}
