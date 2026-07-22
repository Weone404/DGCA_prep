import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const SESSION_COOKIE = 'teacher_auth'

function isValidPassword(value) {
  const expected = process.env.TEACHER_PASSWORD
  if (!expected || !value) return false
  return String(value) === String(expected)
}

export async function GET() {
  const cookieStore = await cookies()
  const authed = cookieStore.get(SESSION_COOKIE)?.value === '1'
  return NextResponse.json({ authed })
}

export async function POST(request) {
  try {
    const body = await request.json()
    const password = body?.password

    if (!isValidPassword(password)) {
      return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 401 })
    }

    const cookieStore = await cookies()
    cookieStore.set(SESSION_COOKIE, '1', {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 8,
      secure: process.env.NODE_ENV === 'production',
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })
  }
}

export async function DELETE() {
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, '', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
    secure: process.env.NODE_ENV === 'production',
  })

  return NextResponse.json({ success: true })
}
