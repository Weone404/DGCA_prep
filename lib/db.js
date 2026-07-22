import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const { Pool } = require('pg')

const isProduction = process.env.NODE_ENV === 'production'
const connectionString = process.env.DATABASE_URL || ''

function shouldUseSsl() {
  if (isProduction) return true

  const lower = connectionString.toLowerCase()
  if (lower.includes('sslmode=require')) return true
  if (lower.includes('supabase.com')) return true

  const explicit = String(process.env.PGSSLMODE || '').toLowerCase()
  if (explicit === 'require' || explicit === 'verify-full' || explicit === 'verify-ca') return true

  return false
}

const ssl = shouldUseSsl() ? { rejectUnauthorized: false } : false

const pool = new Pool({
  connectionString,
  ssl,
})

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err)
})

export default pool
