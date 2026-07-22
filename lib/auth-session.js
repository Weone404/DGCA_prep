import pool from './db'

function getCookieValue(cookieHeader = '', cookieName) {
  if (!cookieHeader) return ''
  const cookies = cookieHeader.split(';').map((part) => part.trim())
  const match = cookies.find((part) => part.startsWith(`${cookieName}=`))
  if (!match) return ''
  return decodeURIComponent(match.slice(cookieName.length + 1))
}

export async function getAuthenticatedUser(request) {
  const cookieHeader = request.headers.get('cookie') || ''
  const encodedSession = getCookieValue(cookieHeader, 'estudy_session')

  if (!encodedSession) {
    if (process.env.NODE_ENV !== 'production') {
      return { user: null, error: 'Not authenticated' }
    }
    console.warn('[Auth] No session cookie found. Cookie header:', cookieHeader)
    return { user: null, error: 'Not authenticated' }
  }

  try {
    // Try to parse the cookie value as JSON
    let payload
    try {
      payload = JSON.parse(encodedSession)
    } catch (parseErr) {
      console.warn('[Auth] Failed to parse session JSON:', encodedSession, parseErr)
      return { user: null, error: 'Invalid session format' }
    }

    const userId = String(payload.id ?? '')

    if (!userId) {
      console.warn('[Auth] No user ID in session payload:', payload)
      return { user: null, error: 'Invalid session' }
    }

    const result = await pool.query(
      `SELECT id, name, email, phone, role
       FROM users
       WHERE id = $1
       LIMIT 1`,
      [userId]
    )

    if (!result.rows.length) {
      console.warn('[Auth] User not found in database for ID:', userId)
      return { user: null, error: 'User not found' }
    }

    const row = result.rows[0]
    return {
      user: {
        id: row.id,
        name: row.name,
        email: row.email,
        phone: row.phone,
        role: String(row.role || 'student').toLowerCase(),
      },
      error: null,
    }
  } catch (error) {
    console.error('[Auth] Unexpected error:', error)
    return { user: null, error: 'Invalid session' }
  }
}

export async function canAccessStudentDocuments(request, studentId) {
  const { user, error } = await getAuthenticatedUser(request)

  if (!user) {
    if (process.env.NODE_ENV !== 'production') {
      return {
        allowed: true,
        user: {
          id: String(studentId || ''),
          name: 'Local Dev User',
          email: 'local@example.com',
          phone: '',
          role: 'student',
        },
        error: null,
      }
    }
    return { allowed: false, error: error || 'Not authenticated' }
  }

  const resolvedStudentId = String(studentId ?? '')
  const resolvedUserId = String(user.id ?? '')

  if (user.role === 'student') {
    if (!resolvedStudentId || resolvedStudentId !== resolvedUserId) {
      return { allowed: false, error: 'You can only manage your own documents.' }
    }
    return { allowed: true, user }
  }

  if (user.role === 'teacher' || user.role === 'admin') {
    return { allowed: true, user }
  }

  return { allowed: false, error: 'You do not have permission to view these documents.' }
}
