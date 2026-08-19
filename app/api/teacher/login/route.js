import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import pool from '../../../../lib/db'
import { ensureAuthSchema } from '../../../../lib/queries'

const SESSION_COOKIE = 'teacher_auth'
const TEACHER_PASSWORD = 'dgca@teacher2026' // <-- set your password here
const TEACHER_EMAIL = String(process.env.TEACHER_EMAIL || 'teacher@local.estudy').trim().toLowerCase()
const TEACHER_NAME = String(process.env.TEACHER_NAME || 'Teacher').trim()

function isValidPassword(value) {
  if (!value) return false
  return String(value) === String(TEACHER_PASSWORD)
}

async function ensureTeacherIdentity() {
  await ensureAuthSchema()
  const idTypeResult = await pool.query(
    `SELECT data_type FROM information_schema.columns
     WHERE table_name = 'users' AND column_name = 'id' LIMIT 1`,
  )
  const userIdType = String(idTypeResult.rows[0]?.data_type || '').toLowerCase()
  const existing = await pool.query(
    `SELECT id FROM users WHERE LOWER(email) = $1 LIMIT 1`,
    [TEACHER_EMAIL],
  )

  if (existing.rows[0]) {
    await pool.query(
      `UPDATE users SET role = 'teacher', name = COALESCE(NULLIF(name, ''), $1) WHERE id = $2`,
      [TEACHER_NAME, existing.rows[0].id],
    )
    return existing.rows[0].id
  }

  const result = userIdType.includes('uuid')
    ? await pool.query(
      `INSERT INTO users (id, name, email, phone, role, is_verified, is_active, created_at, updated_at)
       VALUES ($1, $2, $3, $4, 'teacher', true, true, NOW(), NOW())
       RETURNING id`,
      [crypto.randomUUID(), TEACHER_NAME, TEACHER_EMAIL, `t${Date.now()}`],
    )
    : await pool.query(
      `INSERT INTO users (name, email, phone, role, is_verified, is_active, created_at, updated_at)
       VALUES ($1, $2, $3, 'teacher', true, true, NOW(), NOW())
       RETURNING id`,
      [TEACHER_NAME, TEACHER_EMAIL, `t${Date.now()}`],
    )
  return result.rows[0]?.id
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

    await ensureTeacherIdentity()

    const cookieStore = await cookies()
    cookieStore.set(SESSION_COOKIE, '1', {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 8,
      secure: process.env.NODE_ENV === 'production',
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('POST /api/teacher/login error:', error)
    return NextResponse.json({
      success: false,
      error: process.env.NODE_ENV === 'production' ? 'Invalid request' : error?.message || 'Invalid request',
    }, { status: 400 })
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