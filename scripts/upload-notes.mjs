import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { createClient } from '@supabase/supabase-js'
import pg from 'pg'

const { Pool } = pg
const MAX_SIZE = 25 * 1024 * 1024

function argument(name, fallback = '') {
  const index = process.argv.indexOf(`--${name}`)
  return index >= 0 ? process.argv[index + 1] || fallback : fallback
}

const directory = argument('dir')
const teacherId = argument('teacher-id')
const defaultSubject = argument('subject', 'General')
if (!directory || !teacherId) {
  console.error('Usage: node --env-file=.env scripts/upload-notes.mjs --dir ./notes --teacher-id <id> [--subject General]')
  process.exit(1)
}

const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.SUPABASE_DB_URL
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY
if (!databaseUrl || !supabaseUrl || !serviceRoleKey) throw new Error('Database and Supabase service-role configuration are required.')

const pool = new Pool({ connectionString: databaseUrl, ssl: databaseUrl.includes('localhost') ? false : { rejectUnauthorized: false } })
const supabase = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false, autoRefreshToken: false } })
const bucket = process.env.SUPABASE_RESOURCES_BUCKET || process.env.SUPABASE_STORAGE_BUCKET || 'documents'

try {
  const userTypeResult = await pool.query(`SELECT data_type FROM information_schema.columns WHERE table_name = 'users' AND column_name = 'id' LIMIT 1`)
  const dataType = String(userTypeResult.rows[0]?.data_type || '').toLowerCase()
  const userIdType = dataType.includes('uuid') ? 'UUID' : dataType.includes('bigint') ? 'BIGINT' : dataType.includes('int') ? 'INTEGER' : 'TEXT'
  await pool.query(`
    CREATE TABLE IF NOT EXISTS resources (
      id SERIAL PRIMARY KEY, title TEXT NOT NULL, description TEXT DEFAULT '', subject TEXT NOT NULL,
      storage_path TEXT NOT NULL, uploaded_by ${userIdType} NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW(), updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `)

  const entries = (await fs.readdir(directory, { withFileTypes: true })).filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.pdf'))
  if (!entries.length) throw new Error(`No PDF files found in ${directory}.`)

  for (const entry of entries) {
    const filePath = path.join(directory, entry.name)
    const buffer = await fs.readFile(filePath)
    if (buffer.length > MAX_SIZE) {
      console.warn(`Skipping ${entry.name}: larger than 25MB.`)
      continue
    }
    const storagePath = `resources/${teacherId}/${Date.now()}-${crypto.randomUUID()}.pdf`
    const { error: uploadError } = await supabase.storage.from(bucket).upload(storagePath, buffer, { contentType: 'application/pdf', cacheControl: 'no-store', upsert: false })
    if (uploadError) throw uploadError
    try {
      await pool.query(
        `INSERT INTO resources (title, description, subject, storage_path, uploaded_by) VALUES ($1, $2, $3, $4, $5)`,
        [path.basename(entry.name, path.extname(entry.name)), '', defaultSubject, storagePath, teacherId],
      )
      console.log(`Uploaded ${entry.name}`)
    } catch (error) {
      await supabase.storage.from(bucket).remove([storagePath])
      throw error
    }
  }
} finally {
  await pool.end()
}