import { NextResponse } from 'next/server'
import pool from '../../../lib/db'
import { ensureAuthSchema } from '../../../lib/queries'
import { canAccessStudentDocuments } from '../../../lib/auth-session'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  try {
    await ensureAuthSchema()

    const { searchParams } = new URL(request.url)
    const studentId = searchParams.get('studentId')

    if (!studentId) {
      return NextResponse.json({ error: 'studentId is required.' }, { status: 400 })
    }

    const access = await canAccessStudentDocuments(request, studentId)
    if (!access.allowed) {
      return NextResponse.json({ error: access.error || 'Not allowed.' }, { status: 403 })
    }

    const result = await pool.query(
      `SELECT id, student_id, uploaded_by, file_name, storage_path, mime_type, file_size, doc_type, created_at
       FROM documents
       WHERE student_id = $1
       ORDER BY created_at DESC`,
      [studentId]
    )

    return NextResponse.json({ documents: result.rows })
  } catch (error) {
    console.error('GET /api/documents error:', error)
    return NextResponse.json({ error: 'Server error while loading documents.' }, { status: 500 })
  }
}
