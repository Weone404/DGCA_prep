import { NextResponse } from 'next/server'
import pool from '../../../../../lib/db'
import { ensureAuthSchema } from '../../../../../lib/queries'
import { canAccessStudentDocuments } from '../../../../../lib/auth-session'
import { getSupabaseAdminClient, SUPABASE_STORAGE_BUCKET } from '../../../../../lib/documents'

export const dynamic = 'force-dynamic'

export async function GET(request, { params }) {
  try {
    await ensureAuthSchema()

    const documentId = params?.id
    if (!documentId) {
      return NextResponse.json({ error: 'Document id is required.' }, { status: 400 })
    }

    const documentResult = await pool.query(
      `SELECT id, student_id, storage_path, mime_type, file_name
       FROM documents
       WHERE id = $1
       LIMIT 1`,
      [documentId]
    )

    if (!documentResult.rows.length) {
      return NextResponse.json({ error: 'Document not found.' }, { status: 404 })
    }

    const document = documentResult.rows[0]
    const access = await canAccessStudentDocuments(request, document.student_id)
    if (!access.allowed) {
      return NextResponse.json({ error: access.error || 'Not allowed.' }, { status: 403 })
    }

    const supabase = getSupabaseAdminClient()
    if (!supabase) {
      return NextResponse.json({ error: 'Supabase storage is not configured.' }, { status: 500 })
    }

    const bucketName = SUPABASE_STORAGE_BUCKET || 'documents'
    if (!bucketName) {
      return NextResponse.json({ error: 'Supabase storage bucket is not configured.' }, { status: 500 })
    }

    const { data, error } = await supabase.storage.from(bucketName).createSignedUrl(document.storage_path, 60)
    if (error) {
      return NextResponse.json({ error: error.message || 'Unable to generate signed URL.' }, { status: 500 })
    }

    return NextResponse.json({ url: data?.signedUrl || null, fileName: document.file_name, mimeType: document.mime_type })
  } catch (error) {
    console.error('GET /api/documents/[id]/view error:', error)
    return NextResponse.json({ error: 'Server error while opening document.' }, { status: 500 })
  }
}
