import { NextResponse } from 'next/server'
import { clearLiveLink, getLiveLink, setLiveLink } from '../../../../lib/teacher-data'

export async function GET() {
  try {
    const payload = await getLiveLink()
    return NextResponse.json(payload)
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const payload = await setLiveLink(body)
    return NextResponse.json(payload)
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function DELETE() {
  try {
    const payload = await clearLiveLink()
    return NextResponse.json(payload)
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
