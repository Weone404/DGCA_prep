import { jsonResponse, normalizeAssignedTest, supabaseRequest } from '@/lib/supabase'

const fallbackTests = [
  {
    id: 'test-1',
    title: 'Air Regulations Practice',
    subjectId: 'air-regulations',
    subjectLabel: 'Air Regulations',
    chapterId: 'air-reg-1',
    chapterLabel: 'Regulatory Basics',
    chapterIds: ['air-reg-1'],
    numQuestions: 20,
    durationMins: 30,
    instructions: 'Attempt all questions.',
    is_active: true,
  },
]

export async function GET() {
  const { data, error } = await supabaseRequest('assigned_tests', { query: '*' })
  if (error) return jsonResponse({ tests: fallbackTests })

  const tests = Array.isArray(data) ? data.map(normalizeAssignedTest) : fallbackTests
  return jsonResponse({ tests })
}

export async function POST(req) {
  const body = await req.json()
  const test = body?.test || body
  const { error } = await supabaseRequest('assigned_tests', { method: 'POST', body: test })
  if (error) return jsonResponse({ error }, 500)

  return jsonResponse({ test })
}

export async function PATCH(req) {
  const body = await req.json()
  const test = { ...body, is_active: body?.is_active ?? true }
  return jsonResponse({ test })
}

export async function DELETE(req) {
  const body = await req.json()
  const id = body?.id
  if (!id) return jsonResponse({ error: 'ID required' }, 400)
  return jsonResponse({ id })
}
