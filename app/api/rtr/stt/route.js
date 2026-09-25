export const runtime = 'nodejs'

export async function GET() {
  return Response.json({ ok: false, mode: 'browser', message: 'Server speech recognition is unavailable; use browser speech recognition.' }, { status: 503 })
}

export async function POST() {
  return Response.json({ error: 'Server STT is not configured. Use browser speech recognition.' }, { status: 503 })
}
