import { NextResponse } from 'next/server'
import pool from '../../../../../lib/db'
import { ensureAuthSchema } from '../../../../../lib/queries'
import { getResourceAccess } from '../../../../../lib/resources'

export const dynamic = 'force-dynamic'

async function getResourceId(context) {
  const params = await context?.params
  return params?.id
}

async function ensureResource(resourceId) {
  const result = await pool.query('SELECT id FROM resources WHERE id = $1 LIMIT 1', [resourceId])
  return result.rows[0]?.id || null
}

export async function GET(request, context) {
  try {
    await ensureAuthSchema()
    const access = await getResourceAccess(request, { allowStaff: false })
    if (!access.allowed) return NextResponse.json({ error: access.error }, { status: 403 })
    const resourceId = await getResourceId(context)
    if (!await ensureResource(resourceId)) return NextResponse.json({ error: 'Resource not found.' }, { status: 404 })

    const result = await pool.query(
      `SELECT annotations, updated_at
      FROM annotations
       WHERE resource_id = $1 AND user_id = $2
       LIMIT 1`,
      [resourceId, access.user.id],
    )
    return NextResponse.json({ annotations: result.rows[0]?.annotations || { items: [] }, updatedAt: result.rows[0]?.updated_at || null })
  } catch (error) {
    console.error('GET /api/resources/[id]/annotations error:', error)
    return NextResponse.json({ error: 'Unable to load annotations.' }, { status: 500 })
  }
}

export async function POST(request, context) {
  try {
    await ensureAuthSchema()
    const access = await getResourceAccess(request, { allowStaff: false })
    if (!access.allowed) return NextResponse.json({ error: access.error }, { status: 403 })
    const resourceId = await getResourceId(context)
    if (!await ensureResource(resourceId)) return NextResponse.json({ error: 'Resource not found.' }, { status: 404 })

    const body = await request.json()
    const annotations = body?.annotations
    if (!annotations || typeof annotations !== 'object' || Array.isArray(annotations)) {
      return NextResponse.json({ error: 'Annotations must be a JSON object.' }, { status: 400 })
    }

    const result = await pool.query(
      `INSERT INTO annotations (user_id, resource_id, annotations, updated_at)
       VALUES ($1, $2, $3::jsonb, NOW())
       ON CONFLICT (user_id, resource_id) DO UPDATE SET annotations = EXCLUDED.annotations, updated_at = NOW()
       RETURNING updated_at`,
      [access.user.id, resourceId, JSON.stringify(annotations)],
    )
    return NextResponse.json({ saved: true, updatedAt: result.rows[0]?.updated_at || null })
  } catch (error) {
    console.error('POST /api/resources/[id]/annotations error:', error)
    return NextResponse.json({ error: 'Unable to save annotations.' }, { status: 500 })
  }
}