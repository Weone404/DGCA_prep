import { NextResponse } from 'next/server'
import crypto from 'crypto'
import pool from '@/lib/db'
import { ensureUsersTable } from '@/lib/queries'

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex')
}

async function ensureAuthColumns() {
  await ensureUsersTable()
  await pool.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash TEXT`)
}

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'email and password are required.' }, { status: 400 })
    }

    await ensureAuthColumns()

    const result = await pool.query(
      `SELECT id, name, email, phone, password_hash
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

    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        mobile: user.phone,
        role: 'Student',
        coursesInProgress: 0,
        coursesComplete: 0,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user.name)}`,
      },
    })
  } catch (error) {
    console.error('POST /api/auth/login error:', error)
    return NextResponse.json({ error: 'Server error during login.' }, { status: 500 })
  }
}
