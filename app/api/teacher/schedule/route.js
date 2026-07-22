import { jsonResponse, normalizeScheduledClass, supabaseRequest } from '../../../../lib/supabase'

const fallbackClasses = [
  { id: 'class-1', title: 'Live Algebra Drill', description: 'Revision class', date: '2026-07-12', time: '18:00', duration: 60, meetLink: 'https://meet.example.com/teacher', batch: 'A1', startDateTime: '2026-07-12T18:00:00', endDateTime: '2026-07-12T19:00:00' },
]

export async function GET() {
  const { data, error } = await supabaseRequest('scheduled_classes', { query: '*' })
  if (error) return jsonResponse({ classes: fallbackClasses })
  const classes = Array.isArray(data) ? data.map(normalizeScheduledClass) : fallbackClasses
  return jsonResponse({ classes })
}

export async function POST(req) {
  const body = await req.json()
  const event = body?.event || body
  const { error } = await supabaseRequest('scheduled_classes', { method: 'POST', body: event })
  if (error) return jsonResponse({ error }, 500)

  const refreshed = await supabaseRequest('scheduled_classes', { query: '*' })
  const classes = Array.isArray(refreshed.data) ? refreshed.data.map(normalizeScheduledClass) : [event]
  return jsonResponse({ classes, event })
}

export async function DELETE(req) {
  const body = await req.json()
  const id = body?.id
  if (!id) return jsonResponse({ error: 'ID required' }, 400)

  const { error } = await supabaseRequest('scheduled_classes', { method: 'DELETE', searchParams: { id: `eq.${encodeURIComponent(id)}` } })
  if (error) return jsonResponse({ error }, 500)

  return jsonResponse({ id })
}
