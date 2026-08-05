import { NextResponse } from 'next/server'
import { getAuthenticatedUser } from '../../../../lib/auth-session'
import { getStudentAttendance } from '../../../../lib/teacher-data'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request) {
  try {
    const { user, error } = await getAuthenticatedUser(request)

    if (!user || !user.email) {
      return NextResponse.json(
        { error: error || 'Not authenticated' },
        { status: 401 },
      )
    }

    const attendance = await getStudentAttendance(user.email)

    return NextResponse.json({
      success: true,
      student: {
        id: user.id,
        name: user.name || 'Student',
        email: user.email,
      },
      ...attendance,
    })
  } catch (error) {
    console.error('GET /api/attendance/me error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to load attendance right now.',
        present: 0,
        absent: 0,
        late: 0,
        monthPct: 0,
        days: {},
        recent: [],
      },
      { status: 500 },
    )
  }
}
