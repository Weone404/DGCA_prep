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
    const { name, email, mobile, password } = await request.json()

    if (!name || !email || !mobile || !password) {
      return NextResponse.json({ error: 'name, email, mobile, and password are required.' }, { status: 400 })
    }

    const normalizedEmail = String(email).toLowerCase().trim()
    const normalizedMobile = String(mobile).trim()

    await ensureAuthColumns()

    const existing = await pool.query(
      `SELECT id FROM users WHERE LOWER(email) = LOWER($1) LIMIT 1`,
      [normalizedEmail]
    )

    if (existing.rows.length) {
      return NextResponse.json({ error: 'Account already exists for this email.' }, { status: 409 })
    }

    const passwordHash = hashPassword(password)
    const inserted = await pool.query(
      `INSERT INTO users (name, email, phone, password_hash)
       VALUES ($1, $2, $3, $4)
       RETURNING id, name, email, phone, created_at`,
      [name.trim(), normalizedEmail, normalizedMobile, passwordHash]
    )

    const user = inserted.rows[0]
    return NextResponse.json(
      {
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
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('POST /api/auth/register error:', error)
    return NextResponse.json({ error: 'Server error during registration.' }, { status: 500 })
  }
}
