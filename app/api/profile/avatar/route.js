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

function getCandidateBuckets() {
  return Array.from(
    new Set(
      [
        SUPABASE_AVATARS_BUCKET,
        SUPABASE_STORAGE_BUCKET,
        process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET,
        'avatars',
        'documents',
      ]
        .map((value) => String(value || '').trim())
        .filter(Boolean)
    )
  )
}

function isBucketNotFoundError(error) {
  const message = String(error?.message || '').toLowerCase()
  return message.includes('bucket not found') || message.includes('not found')
}

function isAlreadyExistsError(error) {
  const message = String(error?.message || '').toLowerCase()
  return message.includes('already exists') || message.includes('duplicate')
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

    const bucketCandidates = getCandidateBuckets()
    const extension = getSafeExtension(file.name, mimeType)
    const storagePath = `avatars/${userId}/profile.${extension}`
    const buffer = Buffer.from(await file.arrayBuffer())
    const canUseLocalFallback = !isServerlessProduction()

    const supabase = getSupabaseAdminClient()
    if (supabase) {
      let lastStorageError = null

      for (const bucketName of bucketCandidates) {
        const { error: storageError } = await supabase.storage.from(bucketName).upload(storagePath, buffer, {
          contentType: mimeType,
          upsert: true,
        })

        if (!storageError) {
          const { data: publicUrlData } = supabase.storage.from(bucketName).getPublicUrl(storagePath)
          const publicUrl = `${publicUrlData.publicUrl}?t=${Date.now()}`
          return NextResponse.json({ publicUrl })
        }

        lastStorageError = storageError
        console.error('Avatar upload failed in Supabase bucket attempt:', {
          message: storageError.message,
          status: storageError.status,
          statusCode: storageError.statusCode,
          bucketName,
        })

        if (isBucketNotFoundError(storageError)) {
          const { error: createBucketError } = await supabase.storage.createBucket(bucketName, { public: true })

          if (!createBucketError || isAlreadyExistsError(createBucketError)) {
            const { error: retryError } = await supabase.storage.from(bucketName).upload(storagePath, buffer, {
              contentType: mimeType,
              upsert: true,
            })

            if (!retryError) {
              const { data: publicUrlData } = supabase.storage.from(bucketName).getPublicUrl(storagePath)
              const publicUrl = `${publicUrlData.publicUrl}?t=${Date.now()}`
              return NextResponse.json({ publicUrl })
            }

            lastStorageError = retryError
            console.error('Avatar upload retry failed after bucket create attempt:', {
              message: retryError.message,
              status: retryError.status,
              statusCode: retryError.statusCode,
              bucketName,
            })
          } else {
            lastStorageError = createBucketError
            console.error('Unable to auto-create Supabase bucket for avatar upload:', {
              message: createBucketError.message,
              status: createBucketError.status,
              statusCode: createBucketError.statusCode,
              bucketName,
            })
          }

          continue
        }

        if (!isBucketNotFoundError(storageError)) {
          break
        }
      }

      const details = lastStorageError?.message || 'Unknown storage error.'

      if (!canUseLocalFallback) {
        return NextResponse.json(
          {
            error: 'Avatar upload failed in storage. Please verify Supabase storage bucket configuration.',
            details: `${details} Tried buckets: ${bucketCandidates.join(', ')}`,
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
