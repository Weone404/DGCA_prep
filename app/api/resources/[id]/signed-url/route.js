import { NextResponse } from 'next/server'
import pool from '../../../../../lib/db'
import { ensureAuthSchema } from '../../../../../lib/queries'
import { createResourceSignedUrl, getResourceAccess } from '../../../../../lib/resources'

export const dynamic = 'force-dynamic'

export async function GET(request, context) {
  try {
    await ensureAuthSchema()
    // PDF viewing is restricted to authenticated, verified, actively enrolled students.
    const access = await getResourceAccess(request, { allowStaff: false })
    if (!access.allowed) return NextResponse.json({ error: access.error }, { status: 403 })

    const params = await context?.params
    const resourceId = params?.id
    const result = await pool.query(
      `SELECT id, title, storage_path
       FROM resources
       WHERE id = $1
       LIMIT 1`,
      [resourceId],
    )
    const resource = result.rows[0]
    if (!resource) return NextResponse.json({ error: 'Resource not found.' }, { status: 404 })

    const url = await createResourceSignedUrl(resource.storage_path, 60)
    return NextResponse.json(
      { url, title: resource.title, expiresIn: 60 },
      {
        headers: {
          'Cache-Control': 'private, no-store, max-age=0',
          'Content-Disposition': 'inline',
        },
      },
    )
  } catch (error) {
    console.error('GET /api/resources/[id]/signed-url error:', error)
    return NextResponse.json({ error: 'Unable to open resource.' }, { status: 500 })
  }
}