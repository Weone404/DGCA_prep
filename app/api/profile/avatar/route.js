import { NextResponse } from 'next/server'
import { getSupabaseAdminClient, SUPABASE_STORAGE_BUCKET, SUPABASE_AVATARS_BUCKET } from '../../../../lib/documents'
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

function isServerlessProduction() {
  return process.env.NODE_ENV === 'production' || process.env.VERCEL === '1'
}

function getSafeExtension(fileName = '', mimeType = '') {
  const normalized = String(fileName || '').toLowerCase()
  if (normalized.endsWith('.png')) return 'png'
  if (normalized.endsWith('.webp')) return 'webp'
  if (normalized.endsWith('.gif')) return 'gif'
  if (normalized.endsWith('.jpg') || normalized.endsWith('.jpeg')) return 'jpg'

  if (mimeType === 'image/png') return 'png'
  if (mimeType === 'image/webp') return 'webp'
  if (mimeType === 'image/gif') return 'gif'
  return 'jpg'
}

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')
    const userId = String(formData.get('userId') || '').trim()

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'A file is required.' }, { status: 400 })
    }

    if (!userId) {
      return NextResponse.json({ error: 'userId is required.' }, { status: 400 })
    }

    const mimeType = file.type || 'image/jpeg'
    if (!mimeType.startsWith('image/')) {
      return NextResponse.json({ error: 'Only image files are supported.' }, { status: 400 })
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size must be 5MB or less.' }, { status: 400 })
    }

    const bucketName = SUPABASE_AVATARS_BUCKET || SUPABASE_STORAGE_BUCKET || 'documents'
    const extension = getSafeExtension(file.name, mimeType)
    const storagePath = `avatars/${userId}/profile.${extension}`
    const buffer = Buffer.from(await file.arrayBuffer())
    const canUseLocalFallback = !isServerlessProduction()

    const supabase = getSupabaseAdminClient()
    if (supabase) {
      const { error: storageError } = await supabase.storage.from(bucketName).upload(storagePath, buffer, {
        contentType: mimeType,
        upsert: true,
      })

      if (!storageError) {
        const { data: publicUrlData } = supabase.storage.from(bucketName).getPublicUrl(storagePath)
        const publicUrl = `${publicUrlData.publicUrl}?t=${Date.now()}`
        return NextResponse.json({ publicUrl })
      }

      console.error('Avatar upload failed in Supabase. Falling back to local storage:', {
        message: storageError.message,
        status: storageError.status,
        statusCode: storageError.statusCode,
        bucketName,
      })

      if (!canUseLocalFallback) {
        return NextResponse.json(
          {
            error: 'Avatar upload failed in storage. Please verify Supabase storage bucket configuration.',
            details: storageError.message,
          },
          { status: 502 }
        )
      }
    } else if (!canUseLocalFallback) {
      return NextResponse.json(
        { error: 'Supabase storage is not configured for avatar upload in production.' },
        { status: 500 }
      )
    }

    const avatarDir = path.join(process.cwd(), 'public', 'uploads', 'avatars', userId)
    if (!existsSync(avatarDir)) {
      mkdirSync(avatarDir, { recursive: true })
    }
    const localFileName = `profile.${extension}`
    const localFilePath = path.join(avatarDir, localFileName)
    writeFileSync(localFilePath, buffer)
    const publicUrl = `/uploads/avatars/${encodeURIComponent(userId)}/${encodeURIComponent(localFileName)}?t=${Date.now()}`
    return NextResponse.json({ publicUrl })
  } catch (error) {
    console.error('POST /api/profile/avatar error:', error)
    return NextResponse.json({ error: 'Server error while uploading avatar.' }, { status: 500 })
  }
}
