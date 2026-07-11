import { jsonResponse, supabaseRequest } from '@/lib/supabase'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const mode = searchParams.get('mode') || 'exam'
  const subject = searchParams.get('subject') || 'all'

  const { data, error } = await supabaseRequest('students', { query: '*' })
  if (error) return jsonResponse({ entries: [] })

  const entries = Array.isArray(data)
    ? data.map((student) => ({
        name: student.name || student.student_name || 'Student',
        email: student.email || student.student_email || '',
        accuracy: Number(student.avg_score || student.avgScore || 0),
        attempts: Number(student.tests_attempted || student.testsAttempted || 0),
        score: Number(student.best_score || student.bestScore || 0),
        total: Number(student.total_questions || student.totalQuestions || 0),
        subjectBreakdown: [],
      }))
    : []

  return jsonResponse({ entries, mode, subject })
}
