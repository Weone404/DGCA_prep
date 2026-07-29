import { NextResponse } from 'next/server'
import { getSupabaseAdminClient, SUPABASE_STORAGE_BUCKET, SUPABASE_AVATARS_BUCKET } from '../../../../lib/documents'

export const dynamic = 'force-dynamic'

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

    const supabase = getSupabaseAdminClient()
    if (!supabase) {
      return NextResponse.json({ error: 'Supabase storage is not configured.' }, { status: 500 })
    }

    const bucketName = SUPABASE_AVATARS_BUCKET || SUPABASE_STORAGE_BUCKET || 'documents'
    const storagePath = `avatars/${userId}/profile.jpg`
    const buffer = Buffer.from(await file.arrayBuffer())
    const { error: storageError } = await supabase.storage.from(bucketName).upload(storagePath, buffer, {
      contentType: mimeType,
      upsert: true,
    })

    if (storageError) {
      console.error('Avatar upload failed:', {
        message: storageError.message,
        status: storageError.status,
        statusCode: storageError.statusCode,
        bucketName,
        supabaseUrlConfigured: !!(process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL),
        serviceRoleKeyConfigured: !!(process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY),
      })
      return NextResponse.json(
        {
          error: storageError.message || 'Avatar upload failed.',
          storageError: {
            status: storageError.status,
            statusCode: storageError.statusCode,
            bucketName,
          },
        },
        { status: 500 }
      )
    }

    const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL}/storage/v1/object/public/${encodeURIComponent(bucketName)}/${encodeURIComponent(storagePath)}?t=${Date.now()}`
    return NextResponse.json({ publicUrl })
  } catch (error) {
    console.error('POST /api/profile/avatar error:', error)
    return NextResponse.json({ error: 'Server error while uploading avatar.' }, { status: 500 })
  }
}
