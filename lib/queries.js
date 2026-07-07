import pool from './db'

// Ensure users table exists
export async function ensureUsersTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id              SERIAL PRIMARY KEY,
      name            TEXT NOT NULL,
      email           TEXT UNIQUE NOT NULL,
      phone           TEXT UNIQUE NOT NULL,
      batch           TEXT,
      is_verified     BOOLEAN DEFAULT false,
      created_at      TIMESTAMPTZ DEFAULT NOW(),
      updated_at      TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_users_email ON users(LOWER(email));
    CREATE INDEX IF NOT EXISTS idx_users_phone ON users(phone);
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
