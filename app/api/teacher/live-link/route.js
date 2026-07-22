import { jsonResponse, normalizeLiveLink, supabaseRequest } from '../../../../lib/supabase'

const fallbackLink = { url: 'https://meet.example.com/live', label: 'Join live class', setAt: new Date().toISOString() }

export async function GET() {
  const { data, error } = await supabaseRequest('live_links', { query: '*' })
  if (error) return jsonResponse({ link: fallbackLink })
  const first = Array.isArray(data) && data.length ? data[0] : null
  return jsonResponse({ link: first ? normalizeLiveLink(first) : null })
}

export async function POST(req) {
  const body = await req.json()
  const link = { url: body?.url, label: body?.label || 'Live now', setAt: new Date().toISOString() }
  const { error } = await supabaseRequest('live_links', { method: 'POST', body: link })
  if (error) return jsonResponse({ error }, 500)

  return jsonResponse({ link })
}

export async function DELETE() {
  const { error } = await supabaseRequest('live_links', { method: 'DELETE' })
  if (error) return jsonResponse({ error }, 500)
  return jsonResponse({ ok: true })
}
