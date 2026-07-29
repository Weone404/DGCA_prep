import { createClient } from '@supabase/supabase-js'

const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '').trim()
const supabaseServiceRoleKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY || '').trim()
const SUPABASE_STORAGE_BUCKET = (process.env.SUPABASE_STORAGE_BUCKET || process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET || 'documents').trim()
const SUPABASE_AVATARS_BUCKET = (process.env.SUPABASE_AVATARS_BUCKET || process.env.SUPABASE_STORAGE_BUCKET || process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET || 'documents').trim()
let cachedClient = null

export function getSupabaseAdminClient() {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error('Supabase admin client configuration missing.', {
      supabaseUrlConfigured: Boolean(supabaseUrl),
      serviceRoleKeyConfigured: Boolean(supabaseServiceRoleKey),
    })
    return null
  }

  if (!cachedClient) {
    cachedClient = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    })
  }

  return cachedClient
}

export { SUPABASE_STORAGE_BUCKET, SUPABASE_AVATARS_BUCKET }

export const ALLOWED_DOCUMENT_MIME_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'application/pdf',
])

export const MAX_DOCUMENT_SIZE_BYTES = 5 * 1024 * 1024
