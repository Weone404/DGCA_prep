import { NextResponse } from 'next/server'
import pool from '../../../../lib/db'
import { ensureAuthSchema } from '../../../../lib/queries'
import { canAccessStudentDocuments } from '../../../../lib/auth-session'
import { ALLOWED_DOCUMENT_MIME_TYPES, MAX_DOCUMENT_SIZE_BYTES, SUPABASE_STORAGE_BUCKET } from '../../../../lib/documents'
import { getSupabaseAdminClient } from '../../../../lib/documents'
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

function getFileExtension(fileName = '') {
  const parts = fileName.split('.')
  return parts.length > 1 ? parts[parts.length - 1] : 'bin'
}

export async function POST(request) {
  try {
    await ensureAuthSchema()

    const formData = await request.formData()
    const file = formData.get('file')
    const studentId = formData.get('studentId')
    const docType = String(formData.get('docType') || 'other')

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'A file is required.' }, { status: 400 })
    }

    if (!studentId) {
      return NextResponse.json({ error: 'studentId is required.' }, { status: 400 })
    }

    const mimeType = file.type || 'application/octet-stream'
    if (!ALLOWED_DOCUMENT_MIME_TYPES.has(mimeType)) {
      return NextResponse.json({ error: 'Only JPG, PNG, WebP, and PDF files are supported.' }, { status: 400 })
    }

    if (file.size > MAX_DOCUMENT_SIZE_BYTES) {
      return NextResponse.json({ error: 'File size must be 5MB or less.' }, { status: 400 })
    }

    const access = await canAccessStudentDocuments(request, studentId)
    if (!access.allowed) {
      return NextResponse.json({ error: access.error || 'Not allowed.' }, { status: 403 })
    }

    const storagePath = `students/${studentId}/${Date.now()}-${Math.random().toString(36).slice(2)}.${getFileExtension(file.name)}`
    const buffer = Buffer.from(await file.arrayBuffer())

    let uploadedStoragePath = storagePath
    let uploadedUrl = null

    const supabase = getSupabaseAdminClient()
    const bucketName = SUPABASE_STORAGE_BUCKET || 'documents'

    if (supabase && bucketName) {
      try {
        const { error: storageError } = await supabase.storage.from(bucketName).upload(storagePath, buffer, {
          contentType: mimeType,
          upsert: false,
        })

        if (storageError) {
          console.error('Supabase upload failed:', storageError)
        } else {
          uploadedUrl = `/api/documents/${storagePath}`
        }
      } catch (storageErr) {
        console.error('Supabase upload exception:', storageErr)
      }
    }

    if (!uploadedUrl) {
      const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'documents', studentId)
      if (!existsSync(uploadDir)) {
        mkdirSync(uploadDir, { recursive: true })
      }
      const localFileName = `${Date.now()}-${Math.random().toString(36).slice(2)}-${file.name}`
      const localFilePath = path.join(uploadDir, localFileName)
      writeFileSync(localFilePath, buffer)
      uploadedStoragePath = `uploads/documents/${studentId}/${localFileName}`
      uploadedUrl = `/uploads/documents/${studentId}/${localFileName}`
    }

    const insertResult = await pool.query(
      `INSERT INTO documents (student_id, uploaded_by, file_name, storage_path, mime_type, file_size, doc_type)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, student_id, uploaded_by, file_name, storage_path, mime_type, file_size, doc_type, created_at`,
      [studentId, access.user.id, file.name, uploadedStoragePath, mimeType, file.size, docType]
    )

    if (!insertResult.rows[0]) {
      await supabase.storage.from('documents').remove([storagePath])
      return NextResponse.json({ error: 'Failed to save document metadata.' }, { status: 500 })
    }

    return NextResponse.json({ document: { ...insertResult.rows[0], storageUrl: uploadedUrl } }, { status: 201 })
  } catch (error) {
    console.error('POST /api/documents/upload error:', error)
    return NextResponse.json({ error: 'Server error while uploading document.', details: error?.message || error }, { status: 500 })
  }
}
