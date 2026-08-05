import { NextResponse } from 'next/server'
import { clearLiveLink, getLiveLink, setLiveLink } from '../../../../lib/teacher-data'

let memoryLiveLink = null

function isDbConfigured() {
  return Boolean(String(process.env.DATABASE_URL || '').trim())
}

export async function GET() {
  try {
    if (!isDbConfigured()) {
      return NextResponse.json({ success: true, liveLink: memoryLiveLink })
    }

    const payload = await getLiveLink()
    return NextResponse.json(payload)
  } catch (error) {
    console.error('GET /api/teacher/live-link error:', error)
    return NextResponse.json({ success: true, liveLink: null, degraded: true, error: error?.message || 'Unable to load live link' })
  }
}

export async function POST(req) {
  try {
    const body = await req.json()

    if (!isDbConfigured()) {
      memoryLiveLink = {
        url: body?.url || '',
        label: body?.label || 'Live Class',
        setAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      }
      return NextResponse.json({ success: true, liveLink: memoryLiveLink })
    }

    const payload = await setLiveLink(body)
    return NextResponse.json(payload)
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function DELETE() {
  try {
    if (!isDbConfigured()) {
      memoryLiveLink = null
      return NextResponse.json({ success: true })
    }

    const payload = await clearLiveLink()
    return NextResponse.json(payload)
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
