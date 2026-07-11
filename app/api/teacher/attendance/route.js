import { jsonResponse, normalizeAttendanceRecord, supabaseRequest } from '@/lib/supabase'

const fallbackAttendance = [
  { date: '2026-07-10', batch: 'A1', email: 'kotwaljaydeep369@gmail.com', name: 'Jaydeep Singh', status: 'present', note: 'On time' },
]

export async function GET() {
  const { data, error } = await supabaseRequest('attendance', { query: '*' })
  if (error) return jsonResponse({ attendance: fallbackAttendance })
  const attendance = Array.isArray(data) ? data.map(normalizeAttendanceRecord) : fallbackAttendance
  return jsonResponse({ attendance })
}

export async function POST(req) {
  const body = await req.json()
  const records = Array.isArray(body?.records) ? body.records : []
  const { data, error } = await supabaseRequest('attendance', { method: 'POST', body: records })
  if (error) return jsonResponse({ error }, 500)

  const refreshed = await supabaseRequest('attendance', { query: '*' })
  const attendance = Array.isArray(refreshed.data) ? refreshed.data.map(normalizeAttendanceRecord) : records
  return jsonResponse({ attendance })
}
