export const runtime = 'nodejs'

export async function GET() {
  return Response.json({
    ok: true,
    stt: {
      mode: 'browser',
      available: false,
      message: 'Server speech recognition is unavailable; browser speech recognition is used when supported.',
    },
    tts: {
      mode: 'browser',
      available: false,
      message: 'Server speech synthesis is unavailable; browser speech synthesis is used when supported.',
    },
  })
}
