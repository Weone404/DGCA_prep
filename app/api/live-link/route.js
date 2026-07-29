import { NextResponse } from 'next/server'
import { getLiveLink } from '../../../lib/teacher-data'

export async function GET() {
  try {
    const payload = await getLiveLink()
    const liveLink = payload.liveLink
    return NextResponse.json({ url: liveLink?.url || null, label: liveLink?.label || null, setAt: liveLink?.setAt || null })
  } catch {
    return NextResponse.json({ url: null, label: null, setAt: null })
  }
}
