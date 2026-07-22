import { NextResponse } from 'next/server'
import crypto from 'crypto'
import pool from '../../../../lib/db'
import { ensureAuthSchema } from '../../../../lib/queries'

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex')
}

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'email and password are required.' }, { status: 400 })
    }

    await ensureAuthSchema()

    const result = await pool.query(
      `SELECT id, name, email, phone, password_hash, role
       FROM users
       WHERE LOWER(email) = LOWER($1)
       LIMIT 1`,
      [String(email).toLowerCase().trim()]
    )

    if (!result.rows.length) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 })
    }

    const user = result.rows[0]
    const incomingHash = hashPassword(password)

    if (!user.password_hash || user.password_hash !== incomingHash) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 })
    }

    const sessionUser = {
      id: user.id,
      email: user.email,
      role: String(user.role || 'student').toLowerCase(),
    }

    const responseUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: String(user.role || 'student').toLowerCase(),
      coursesInProgress: 0,
      coursesComplete: 0,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user.name)}`,
    }

    const response = NextResponse.json({ user: responseUser })
    response.cookies.set({
      name: 'estudy_session',
      value: JSON.stringify(sessionUser),
      httpOnly: false,
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    })

    return response
  } catch (error) {
    console.error('POST /api/auth/login error:', error)
    return NextResponse.json({ error: 'Server error during login.' }, { status: 500 })
  }
}
