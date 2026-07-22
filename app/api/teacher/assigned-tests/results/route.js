import { jsonResponse, normalizeSubmission, supabaseRequest } from '../../../../../lib/supabase'

const fallbackSubmissions = [
  {
    id: 'sub-1',
    testId: 'test-1',
    studentEmail: 'kotwaljaydeep369@gmail.com',
    studentName: 'Jaydeep Singh',
    score: 16,
    total: 20,
    accuracy: 80,
    submittedAt: '2026-07-09T10:00:00',
  },
]

export async function GET() {
  const { data, error } = await supabaseRequest('test_submissions', { query: '*' })
  if (error) return jsonResponse({ submissions: fallbackSubmissions })

  const submissions = Array.isArray(data) ? data.map(normalizeSubmission) : fallbackSubmissions
  return jsonResponse({ submissions })
}
