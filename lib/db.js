import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const { Pool } = require('pg')

const isProduction = process.env.NODE_ENV === 'production'
const connectionString =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_PRISMA_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.SUPABASE_DB_URL ||
  ''

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

function toInt(value, fallback) {
  const parsed = Number.parseInt(String(value || ''), 10)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

const poolMax = toInt(process.env.PGPOOL_MAX || process.env.PG_POOL_MAX, 3)
const idleTimeoutMillis = toInt(process.env.PG_IDLE_TIMEOUT_MS, 20000)
const connectionTimeoutMillis = toInt(process.env.PG_CONNECT_TIMEOUT_MS, 10000)

const pool = new Pool({
  connectionString,
  ssl,
  max: poolMax,
  idleTimeoutMillis,
  connectionTimeoutMillis,
})

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err)
})

export default pool
