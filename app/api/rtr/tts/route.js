export const runtime = 'nodejs'

export async function GET(request) {
  const q = new URL(request.url).searchParams
  if (q.has('voices')) return Response.json({ voices: [], mode: 'browser' })
  return Response.json({ error: 'Server TTS is not configured. Use browser speech synthesis.' }, { status: 503 })
}
