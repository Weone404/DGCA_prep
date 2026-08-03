import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import pool from '../../../../lib/db'
import { ensureAuthSchema } from '../../../../lib/queries'

function isBcryptHash(value) {
  return typeof value === 'string' && value.startsWith('$2')
}

function verifyPassword(password, passwordHash) {
  if (!passwordHash) return false
  if (isBcryptHash(passwordHash)) {
    return bcrypt.compareSync(password, passwordHash)
  }
  return crypto.createHash('sha256').update(password).digest('hex') === passwordHash
}

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'email and password are required.' }, { status: 400 })
    }

    await ensureAuthSchema()

    const result = await pool.query(
      `SELECT *
       FROM users
       WHERE LOWER(email) = LOWER($1)
       LIMIT 1`,
      [String(email).toLowerCase().trim()]
    )

    if (!result.rows.length) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 })
    }

    const user = result.rows[0]
    if (!verifyPassword(password, user.password_hash)) {
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
      is_verified: user.is_verified ?? false,
      coursesInProgress: 0,
      coursesComplete: 0,
      avatar:
        user.avatar_url ||
        user.avatar ||
        `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user.name)}`,
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
    return NextResponse.json({ error: 'Unable to reach authentication service right now.' }, { status: 503 })
  }
}
