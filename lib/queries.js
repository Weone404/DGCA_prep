import pool from './db'

// Ensure users table exists
export async function ensureUsersTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id              SERIAL PRIMARY KEY,
      name            TEXT NOT NULL,
      email           TEXT UNIQUE NOT NULL,
      phone           TEXT UNIQUE NOT NULL,
      password_hash   TEXT,
      batch           TEXT,
      role            TEXT DEFAULT 'student',
      is_verified     BOOLEAN DEFAULT false,
      created_at      TIMESTAMPTZ DEFAULT NOW(),
      updated_at      TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_users_email ON users(LOWER(email));
    CREATE INDEX IF NOT EXISTS idx_users_phone ON users(phone);
  `)
}

async function hasColumn(tableName, columnName) {
  const result = await pool.query(
    `SELECT 1
     FROM information_schema.columns
     WHERE table_name = $1 AND column_name = $2
     LIMIT 1`,
    [tableName, columnName]
  )
  return result.rows.length > 0
}

async function getUserIdColumnType() {
  const result = await pool.query(
    `SELECT data_type
     FROM information_schema.columns
     WHERE table_name = 'users' AND column_name = 'id'
     LIMIT 1`
  )
  const dataType = String(result.rows[0]?.data_type || '').toLowerCase()
  if (dataType.includes('uuid')) return 'UUID'
  if (dataType.includes('bigint')) return 'BIGINT'
  if (dataType.includes('int')) return 'INTEGER'
  return 'TEXT'
}

export async function ensureAuthSchema() {
  await ensureUsersTable()

  try {
    await pool.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash TEXT`)
    await pool.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'student'`)
    await pool.query(`UPDATE users SET role = COALESCE(NULLIF(role, ''), 'student') WHERE role IS NULL OR role = ''`)
  } catch (error) {
    // If ALTER fails due to DB permissions, continue only when the column already exists.
    if (error?.code === '42501') {
      const exists = await hasColumn('users', 'password_hash')
      const roleExists = await hasColumn('users', 'role')
      if (exists && roleExists) return
    }
    throw error
  }

  const userIdType = await getUserIdColumnType()

  await pool.query(`
    CREATE TABLE IF NOT EXISTS documents (
      id              SERIAL PRIMARY KEY,
      student_id      ${userIdType} NOT NULL,
      uploaded_by     ${userIdType} NOT NULL,
      file_name       TEXT NOT NULL,
      storage_path    TEXT NOT NULL,
      mime_type       TEXT NOT NULL,
      file_size       INTEGER NOT NULL,
      doc_type        TEXT NOT NULL DEFAULT 'other',
      created_at      TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_documents_student_id ON documents(student_id);
    CREATE INDEX IF NOT EXISTS idx_documents_uploaded_by ON documents(uploaded_by);
  `)
}

// Create a new user
export async function createUser({ name, email, phone, batch = null }) {
  await ensureUsersTable()
  const emailNormalized = email.toLowerCase().trim()
  const phoneTrimmed = phone.trim()

  try {
    const { rows } = await pool.query(
      `INSERT INTO users (name, email, phone, batch)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [name, emailNormalized, phoneTrimmed, batch]
    )
    return rows[0]
  } catch (err) {
    if (err.code === '23505') {
      // Duplicate key - user exists
      return findUserByEmail(emailNormalized)
    }
    throw err
  }
}

// Find user by email
export async function findUserByEmail(email) {
  await ensureUsersTable()
  const { rows } = await pool.query(
    `SELECT * FROM users WHERE LOWER(email) = LOWER($1)`,
    [email.toLowerCase().trim()]
  )
  return rows[0] || null
}

// Find user by phone
export async function findUserByPhone(phone) {
  await ensureUsersTable()
  const { rows } = await pool.query(
    `SELECT * FROM users WHERE phone = $1`,
    [phone.trim()]
  )
  return rows[0] || null
}

// Find user by ID
export async function findUserById(id) {
  await ensureUsersTable()
  const { rows } = await pool.query(
    `SELECT * FROM users WHERE id = $1`,
    [id]
  )
  return rows[0] || null
}

// Get all users
export async function getAllUsers() {
  await ensureUsersTable()
  const { rows } = await pool.query(
    `SELECT * FROM users ORDER BY created_at DESC`
  )
  return rows
}

// Update user
export async function updateUser(id, { name, phone, batch }) {
  await ensureUsersTable()
  const { rows } = await pool.query(
    `UPDATE users 
     SET name = COALESCE($1, name),
         phone = COALESCE($2, phone),
         batch = COALESCE($3, batch),
         updated_at = NOW()
     WHERE id = $4
     RETURNING *`,
    [name, phone, batch, id]
  )
  return rows[0] || null
}

// Delete user
export async function deleteUser(id) {
  await ensureUsersTable()
  const { rows } = await pool.query(
    `DELETE FROM users WHERE id = $1 RETURNING id`,
    [id]
  )
  return rows[0] || null
}
