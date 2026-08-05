import { NextResponse } from 'next/server'
import { getLeaderboard, getStudentsWithResults } from '../../../../lib/teacher-data'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const mode = searchParams.get('mode') || 'exam'
    const subject = searchParams.get('subject') || 'all'

    // First preference: dedicated leaderboard table maintained by submissions.
    const leaderboardRows = await getLeaderboard()
    if (Array.isArray(leaderboardRows) && leaderboardRows.length) {
      const entries = leaderboardRows.map((row) => ({
        name: row.name || 'Student',
        email: row.email || '',
        accuracy: Number(row.accuracy || 0),
        attempts: Number(row.testsAttempted || 0),
        score: Number(row.totalScore || 0),
        total: Number(row.totalQuestions || 0),
        subjectBreakdown: [],
      }))

      return NextResponse.json({ entries, mode, subject })
    }

    // Fallback: derive leaderboard from student results when table is empty.
    const studentsPayload = await getStudentsWithResults()
    const students = Array.isArray(studentsPayload?.students) ? studentsPayload.students : []

    const entries = students.map((student) => ({
      name: student.name || 'Student',
      email: student.email || '',
      accuracy: Number(student.avgScore || 0),
      attempts: Number(student.testsAttempted || 0),
      score: Number(student.bestScore || 0),
      total: Number(student.totalQuestions || 0),
      subjectBreakdown: Array.isArray(student.results)
        ? student.results.map((result) => ({
            subject: result.subjectLabel || 'Subject',
            chapter: result.title || result.chapterId || 'Chapter',
            accuracy: Number(result.pct || 0),
            tests: 1,
          }))
        : [],
    }))

    return NextResponse.json({ entries, mode, subject })
  } catch (error) {
    console.error('GET /api/teacher/leaderboard error:', error)
    return NextResponse.json({ entries: [], degraded: true, error: 'Unable to load leaderboard' })
  }
}
