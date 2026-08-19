import { NextResponse } from 'next/server'
import pool from '../../../../lib/db'
import { ensureAuthSchema } from '../../../../lib/queries'
import { getResourceAccess, removeResourceFile } from '../../../../lib/resources'

export const dynamic = 'force-dynamic'

export async function DELETE(request, context) {
  try {
    await ensureAuthSchema()
    const access = await getResourceAccess(request)
    if (!access.allowed || !['teacher', 'admin'].includes(access.user?.role)) {
      return NextResponse.json({ error: access.error || 'Teacher access is required.' }, { status: 403 })
    }

    const params = await context?.params
    const resourceId = params?.id
    const result = await pool.query(
      `DELETE FROM resources
       WHERE id = $1 AND uploaded_by = $2
       RETURNING id, storage_path`,
      [resourceId, access.user.id],
    )

    const resource = result.rows[0]
    if (!resource) return NextResponse.json({ error: 'Resource not found or not owned by this teacher.' }, { status: 404 })

    await removeResourceFile(resource.storage_path)
    return NextResponse.json({ deleted: true, id: resource.id })
  } catch (error) {
    console.error('DELETE /api/resources/[id] error:', error)
    return NextResponse.json({ error: 'Unable to delete resource.' }, { status: 500 })
  }
}