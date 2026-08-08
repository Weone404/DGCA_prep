import { NextResponse } from 'next/server'
import { getAuthenticatedUser } from '../../../../lib/auth-session'
import { getStudentAttendance } from '../../../../lib/teacher-data'
import { getCrmAttendanceByMobile, lastTenDigits, EMPTY_ATTENDANCE } from '../../../../lib/crm-attendance'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const NOT_ENROLLED = 'mobile not enrolled'
const NOT_MAPPED = 'biometric ID not linked yet — contact the front desk'

export async function GET(request) {
  try {
    const { user, error } = await getAuthenticatedUser(request)

    if (!user || !user.email) {
      return NextResponse.json(
        { error: error || 'Not authenticated' },
        { status: 401 },
      )
    }

    const student = {
      id: user.id,
      name: user.name || 'Student',
      email: user.email,
    }

    // The join key between this app and the CRM is the MOBILE number, not the
    // email — the CRM matches students on mobile_normalized.
    if (lastTenDigits(user.phone)) {
      const crm = await getCrmAttendanceByMobile(user.phone)

      if (crm && crm.linked && crm.deviceMapped) {
        return NextResponse.json({
          success: true,
          source: 'crm',
          student: { ...student, name: crm.student?.name || student.name },
          ...crm.attendance,
        })
      }

      // The CRM answered, it just has nothing to show. Report why rather than
      // rendering a wall of absences the student cannot act on.
      if (crm) {
        return NextResponse.json({
          success: true,
          source: 'crm',
          notice: crm.linked ? NOT_MAPPED : NOT_ENROLLED,
          student,
          ...EMPTY_ATTENDANCE,
        })
      }
    }

    // Missing config or any CRM failure lands here silently.
    const attendance = await getStudentAttendance(user.email)

    return NextResponse.json({
      success: true,
      source: 'local',
      student,
      ...attendance,
    })
  } catch (error) {
    console.error('GET /api/attendance/me error:', error)
    return NextResponse.json(
      {
        success: false,
        source: 'local',
        error: 'Unable to load attendance right now.',
        ...EMPTY_ATTENDANCE,
      },
      { status: 500 },
    )
  }
}
