import { NextResponse } from 'next/server'
import pool from '../../../lib/db'
import { ensureAuthSchema } from '../../../lib/queries'
import {
  createResourceStoragePath,
  getResourceAccess,
  isResourcePdf,
  RESOURCE_MAX_SIZE_BYTES,
  uploadResourcePdf,
  removeResourceFile,
} from '../../../lib/resources'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  try {
    await ensureAuthSchema()
    const access = await getResourceAccess(request)
    if (!access.allowed) return NextResponse.json({ error: access.error }, { status: 403 })

    const result = await pool.query(
      `SELECT id, title, description, subject, created_at, updated_at
       FROM resources
       ORDER BY created_at DESC`,
    )

    return NextResponse.json({ resources: result.rows })
  } catch (error) {
    console.error('GET /api/resources error:', error)
    return NextResponse.json({ error: 'Server error while loading resources.' }, { status: 500 })
  }
}

export async function POST(request) {
  let storagePath = ''

  try {
    await ensureAuthSchema()
    const access = await getResourceAccess(request)
    if (!access.allowed || !['teacher', 'admin'].includes(access.user?.role)) {
      return NextResponse.json({ error: access.error || 'Teacher access is required.' }, { status: 403 })
    }

    const formData = await request.formData()
    const title = String(formData.get('title') || '').trim()
    const description = String(formData.get('description') || '').trim()
    const subject = String(formData.get('subject') || '').trim()
    const file = formData.get('file')

    if (!title || !subject || !file || typeof file === 'string') {
      return NextResponse.json({ error: 'Title, subject, and a PDF file are required.' }, { status: 400 })
    }
    if (!isResourcePdf(file)) {
      return NextResponse.json({ error: 'Only PDF files are supported.' }, { status: 400 })
    }
    if (file.size > RESOURCE_MAX_SIZE_BYTES) {
      return NextResponse.json({ error: 'PDF files must be 25MB or smaller.' }, { status: 400 })
    }

    storagePath = createResourceStoragePath(access.user.id, file.name)
    await uploadResourcePdf(storagePath, Buffer.from(await file.arrayBuffer()))

    const result = await pool.query(
      `INSERT INTO resources (title, description, subject, storage_path, uploaded_by)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, title, description, subject, created_at, updated_at`,
      [title, description, subject, storagePath, access.user.id],
    )

    return NextResponse.json({ resource: result.rows[0] }, { status: 201 })
  } catch (error) {
    if (storagePath) await removeResourceFile(storagePath).catch(() => {})
    console.error('POST /api/resources error:', error)
    return NextResponse.json({ error: error?.message || 'Server error while uploading resource.' }, { status: 500 })
  }
}