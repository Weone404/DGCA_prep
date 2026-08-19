import pool from './db'
import { getAuthenticatedUser } from './auth-session'
import { getSupabaseAdminClient } from './documents'

export const RESOURCE_BUCKET = String(
  process.env.SUPABASE_RESOURCES_BUCKET || process.env.SUPABASE_STORAGE_BUCKET || 'documents',
).trim()
export const RESOURCE_MAX_SIZE_BYTES = 25 * 1024 * 1024
export const RESOURCE_MIME_TYPE = 'application/pdf'

export function isResourcePdf(file) {
  return Boolean(file) && file.type === RESOURCE_MIME_TYPE && /\.pdf$/i.test(String(file.name || ''))
}

export async function getResourceAccess(request, { allowStaff = true } = {}) {
  const { user, error } = await getAuthenticatedUser(request)
  let resolvedUser = user
  const hasTeacherCookie = request.headers.get('cookie')?.split(';').some((part) => part.trim() === 'teacher_auth=1')

  if (allowStaff && hasTeacherCookie) {
    const teacherResult = await pool.query(
      `SELECT id, name, email, phone, role
       FROM users
       WHERE LOWER(role) IN ('teacher', 'admin')
       ORDER BY id
       LIMIT 1`,
    )
    const teacher = teacherResult.rows[0]
    if (teacher) {
      resolvedUser = {
        id: teacher.id,
        name: teacher.name,
        email: teacher.email,
        phone: teacher.phone,
        role: String(teacher.role || 'teacher').toLowerCase(),
      }
    }
  }

  if (!resolvedUser) return { allowed: false, user: null, error: error || 'Not authenticated.' }

  if (allowStaff && (resolvedUser.role === 'teacher' || resolvedUser.role === 'admin')) {
    return { allowed: true, user: resolvedUser }
  }

  if (resolvedUser.role !== 'student') {
    return { allowed: false, user: resolvedUser, error: 'Only enrolled students can access resources.' }
  }

  if (resolvedUser.is_verified !== true) {
    return { allowed: false, user: resolvedUser, error: 'Only verified students can access resources.' }
  }

  return { allowed: true, user: resolvedUser }
}

export function createResourceStoragePath(userId, fileName = '') {
  const extension = String(fileName).toLowerCase().endsWith('.pdf') ? 'pdf' : 'bin'
  return `resources/${userId}/${Date.now()}-${crypto.randomUUID()}.${extension}`
}

export async function uploadResourcePdf(storagePath, buffer) {
  const supabase = getSupabaseAdminClient()
  if (!supabase || !RESOURCE_BUCKET) {
    throw new Error('Resource storage is not configured.')
  }

  const { error } = await supabase.storage.from(RESOURCE_BUCKET).upload(storagePath, buffer, {
    contentType: RESOURCE_MIME_TYPE,
    cacheControl: 'no-store',
    upsert: false,
  })

  if (error) throw new Error(error.message || 'Unable to upload resource PDF.')
  return storagePath
}

export async function createResourceSignedUrl(storagePath, expiresInSeconds = 60) {
  const supabase = getSupabaseAdminClient()
  if (!supabase || !RESOURCE_BUCKET) {
    throw new Error('Resource storage is not configured.')
  }

  const { data, error } = await supabase.storage
    .from(RESOURCE_BUCKET)
    .createSignedUrl(storagePath, expiresInSeconds, { download: false })

  if (error || !data?.signedUrl) throw new Error(error?.message || 'Unable to generate resource URL.')
  return data.signedUrl
}

export async function removeResourceFile(storagePath) {
  const supabase = getSupabaseAdminClient()
  if (!supabase || !RESOURCE_BUCKET || !storagePath) return
  await supabase.storage.from(RESOURCE_BUCKET).remove([storagePath])
}