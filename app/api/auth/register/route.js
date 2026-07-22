import { NextResponse } from 'next/server'
import crypto from 'crypto'
import pool from '../../../../lib/db'
import { ensureAuthSchema } from '../../../../lib/queries'

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex')
}

async function getUsersColumns() {
  const result = await pool.query(
    `SELECT column_name, data_type, is_nullable, column_default
     FROM information_schema.columns
     WHERE table_schema = 'public' AND table_name = 'users'`
  )

  const map = new Map()
  for (const row of result.rows) {
    map.set(row.column_name, row)
  }
  return map
}

function hasColumn(columns, name) {
  return columns.has(name)
}

function needsValue(columns, name) {
  const column = columns.get(name)
  if (!column) return false
  return column.is_nullable === 'NO' && !column.column_default
}

async function insertUserWithSchema({ name, email, mobile, passwordHash }) {
  const columns = await getUsersColumns()
  const values = {
    name,
    email,
    phone: mobile,
    password_hash: passwordHash,
  }

  // Handle legacy/alternate schemas where id is UUID and has no DB default.
  if (hasColumn(columns, 'id')) {
    const idColumn = columns.get('id')
    if (idColumn.data_type === 'uuid' && needsValue(columns, 'id')) {
      values.id = crypto.randomUUID()
    }
  }

  if (hasColumn(columns, 'is_verified') && needsValue(columns, 'is_verified')) {
    values.is_verified = false
  }

  if (hasColumn(columns, 'role')) {
    values.role = 'student'
  }

  if (hasColumn(columns, 'is_active') && needsValue(columns, 'is_active')) {
    values.is_active = true
  }

  const now = new Date().toISOString()
  if (hasColumn(columns, 'created_at') && needsValue(columns, 'created_at')) {
    values.created_at = now
  }

  if (hasColumn(columns, 'updated_at') && needsValue(columns, 'updated_at')) {
    values.updated_at = now
  }

  const fields = Object.keys(values)
  const placeholders = fields.map((_, idx) => `$${idx + 1}`).join(', ')
  const params = fields.map((field) => values[field])

  return pool.query(
    `INSERT INTO users (${fields.join(', ')})
     VALUES (${placeholders})
     RETURNING id, name, email, phone, created_at`,
    params
  )
}

export async function POST(request) {
  try {
    const { name, email, mobile, password } = await request.json()

    if (!name || !email || !mobile || !password) {
      return NextResponse.json({ error: 'name, email, mobile, and password are required.' }, { status: 400 })
    }

    const normalizedEmail = String(email).toLowerCase().trim()
    const normalizedMobile = String(mobile).trim()

    await ensureAuthSchema()

    const existing = await pool.query(
      `SELECT id, email, phone
       FROM users
       WHERE LOWER(email) = LOWER($1) OR phone = $2
       LIMIT 1`,
      [normalizedEmail, normalizedMobile]
    )

    if (existing.rows.length) {
      const matched = existing.rows[0]
      if (String(matched.email || '').toLowerCase() === normalizedEmail) {
        return NextResponse.json({ error: 'Account already exists for this email.' }, { status: 409 })
      }
      return NextResponse.json({ error: 'Account already exists for this mobile number.' }, { status: 409 })
    }

    const passwordHash = hashPassword(password)
    const inserted = await insertUserWithSchema({
      name: name.trim(),
      email: normalizedEmail,
      mobile: normalizedMobile,
      passwordHash,
    })

    const user = inserted.rows[0]
    const sessionUser = {
      id: user.id,
      email: user.email,
      role: 'student',
    }

    const responseUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: 'student',
      coursesInProgress: 0,
      coursesComplete: 0,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user.name)}`,
    }

    const response = NextResponse.json({ user: responseUser }, { status: 201 })
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
    if (error?.code === '23505') {
      const detail = String(error?.detail || '').toLowerCase()
      if (detail.includes('(email)')) {
        return NextResponse.json({ error: 'Account already exists for this email.' }, { status: 409 })
      }
      if (detail.includes('(phone)')) {
        return NextResponse.json({ error: 'Account already exists for this mobile number.' }, { status: 409 })
      }
      return NextResponse.json({ error: 'An account already exists with these details.' }, { status: 409 })
    }

    console.error('POST /api/auth/register error:', error)
    return NextResponse.json({ error: 'Server error during registration.' }, { status: 500 })
  }
}
