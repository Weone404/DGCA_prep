import { NextResponse } from 'next/server'
import { supabaseRequest } from '../../../lib/supabase'

function normalizeLink(record) {
  return {
    url: record.url || record.meet_link || record.link || '',
    label: record.label || record.title || record.name || 'Live class',
    setAt: record.set_at || record.setAt || record.created_at || new Date().toISOString(),
  }
}

export async function GET() {
  try {
    const result = await supabaseRequest('live_links', { query: '*', searchParams: { order: 'created_at.desc', limit: 1 } })

    if (result.error || !Array.isArray(result.data) || !result.data.length) {
      return NextResponse.json({ link: null })
    }

    return NextResponse.json({ link: normalizeLink(result.data[0]) })
  } catch {
    return NextResponse.json({ link: null })
  }
}
