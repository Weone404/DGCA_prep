import { NextResponse } from 'next/server'
import pool from '../../../lib/db'
import { createUser, findUserByEmail, findUserByPhone, findUserById, ensureAuthSchema } from '../../../lib/queries'

export const dynamic = 'force-dynamic'

async function getUserColumns() {
  const { rows } = await pool.query(
    `SELECT column_name
     FROM information_schema.columns
     WHERE table_schema = 'public' AND table_name = 'users'`
  )
  return new Set(rows.map((row) => String(row.column_name).toLowerCase()))
}

async function ensureProfileColumns() {
  await ensureAuthSchema()
  const columns = await getUserColumns()
  const definitions = [
    ['address', 'TEXT'],
    ['city', 'TEXT'],
    ['state', 'TEXT'],
    ['zip', 'TEXT'],
    ['country', 'TEXT'],
    ['father_name', 'TEXT'],
    ['mother_name', 'TEXT'],
    ['avatar_url', 'TEXT'],
  ]

  for (const [columnName, columnType] of definitions) {
    if (!columns.has(columnName)) {
      await pool.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS ${columnName} ${columnType}`)
    }
  }
}

function normalizeProfilePayload(payload = {}) {
  const source = payload || {}
  const normalized = {}

  if (source.name !== undefined) normalized.name = String(source.name).trim()
  if (source.fullName !== undefined) normalized.name = String(source.fullName).trim()

  if (source.email !== undefined) normalized.email = String(source.email).trim().toLowerCase()
  if (source.phone !== undefined) normalized.phone = String(source.phone).trim()
  if (source.phoneNumber !== undefined) normalized.phone = String(source.phoneNumber).trim()
  if (source.batch !== undefined) normalized.batch = source.batch
  if (source.address !== undefined) normalized.address = String(source.address).trim()
  if (source.city !== undefined) normalized.city = String(source.city).trim()
  if (source.state !== undefined) normalized.state = String(source.state).trim()
  if (source.zip !== undefined) normalized.zip = String(source.zip).trim()
  if (source.country !== undefined) normalized.country = String(source.country).trim()
  if (source.fatherName !== undefined || source.father_name !== undefined) {
    normalized.father_name = String(source.fatherName ?? source.father_name ?? '').trim()
  }
  if (source.motherName !== undefined || source.mother_name !== undefined) {
    normalized.mother_name = String(source.motherName ?? source.mother_name ?? '').trim()
  }
  if (source.avatar !== undefined || source.avatarUrl !== undefined || source.avatar_url !== undefined) {
    normalized.avatar_url = String(source.avatar ?? source.avatarUrl ?? source.avatar_url ?? '').trim()
  }

  return normalized
}

async function saveProfile(payload) {
  await ensureProfileColumns()
  const normalized = normalizeProfilePayload(payload)
  const columns = await getUserColumns()

  let existingUser = null
  if (payload?.id) {
    existingUser = await findUserById(payload.id)
  }
  if (!existingUser && normalized.email) {
    existingUser = await findUserByEmail(normalized.email)
  }

  if (!existingUser) {
    if (!normalized.email) {
      throw new Error('email is required.')
    }
    existingUser = await createUser({
      name: normalized.name || normalized.email.split('@')[0],
      email: normalized.email,
      phone: normalized.phone || `profile-${Date.now()}`,
      batch: normalized.batch || null,
    })
  }

  const assignments = []
  const values = []

  const pushValue = (columnName, value) => {
    if (value === undefined || value === null) return
    if (columnName === 'name' && value === '') return
    if (columns.has(columnName)) {
      assignments.push(`${columnName} = $${values.length + 1}`)
      values.push(value)
    }
  }

  if (normalized.name !== undefined) pushValue('name', normalized.name)
  if (normalized.email !== undefined) pushValue('email', normalized.email)
  if (normalized.phone !== undefined) pushValue('phone', normalized.phone)
  if (normalized.batch !== undefined) pushValue('batch', normalized.batch)
  if (normalized.address !== undefined) pushValue('address', normalized.address)
  if (normalized.city !== undefined) pushValue('city', normalized.city)
  if (normalized.state !== undefined) pushValue('state', normalized.state)
  if (normalized.zip !== undefined) pushValue('zip', normalized.zip)
  if (normalized.country !== undefined) pushValue('country', normalized.country)
  if (normalized.father_name !== undefined) pushValue('father_name', normalized.father_name)
  if (normalized.mother_name !== undefined) pushValue('mother_name', normalized.mother_name)
  if (normalized.avatar_url !== undefined) pushValue('avatar_url', normalized.avatar_url)

  if (columns.has('updated_at')) {
    assignments.push('updated_at = NOW()')
  }

  if (!assignments.length) return existingUser

  const { rows } = await pool.query(
    `UPDATE users SET ${assignments.join(', ')} WHERE id = $${values.length + 1} RETURNING *`,
    [...values, existingUser.id]
  )

  return rows[0] || existingUser
}

// POST /api/user — register (upsert) a user
export async function POST(request) {
  try {
    const payload = await request.json()
    const user = await saveProfile(payload)

    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      batch: user.batch,
      address: user.address || '',
      city: user.city || '',
      state: user.state || '',
      zip: user.zip || '',
      country: user.country || '',
      fatherName: user.father_name || user.fatherName || '',
      motherName: user.mother_name || user.motherName || '',
      avatar: user.avatar_url || user.avatar || '',
      is_verified: user.is_verified ?? false,
      created_at: user.created_at,
    })
  } catch (err) {
    console.error('POST /api/user error:', err)
    return NextResponse.json({ error: err?.message || 'Server error.' }, { status: 500 })
  }
}

// GET /api/user?email=... or /api/user?phone=... — fetch user
export async function GET(request) {
  try {
    const { searchParams } = request.nextUrl
    const email = searchParams.get('email')
    const phone = searchParams.get('phone')

    if (!email && !phone) {
      return NextResponse.json(
        { error: 'email or phone is required.' },
        { status: 400 }
      )
    }

    const user = email
      ? await findUserByEmail(email.toLowerCase().trim())
      : await findUserByPhone(phone.trim())

    if (!user) return NextResponse.json(null)

    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      batch: user.batch,
      address: user.address || '',
      city: user.city || '',
      state: user.state || '',
      zip: user.zip || '',
      country: user.country || '',
      fatherName: user.father_name || user.fatherName || '',
      motherName: user.mother_name || user.motherName || '',
      avatar: user.avatar_url || user.avatar || '',
      is_verified: user.is_verified ?? false,
      created_at: user.created_at,
    })
  } catch (err) {
    console.error('GET /api/user error:', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
