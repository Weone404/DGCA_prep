import { NextResponse } from 'next/server'
import { createLiveClass, deleteLiveClass, listLiveClasses } from '../../../lib/teacher-data'

export async function GET() {
  try {
    const payload = await listLiveClasses()
    return NextResponse.json(payload)
  } catch (error) {
    return NextResponse.json({ success: false, message: error?.message || 'Failed to load classes', events: [] }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const payload = await createLiveClass(body)
    return NextResponse.json(payload)
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function DELETE(req) {
  try {
    const body = await req.json()
    const payload = await deleteLiveClass(body?.id)
    return NextResponse.json(payload)
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
