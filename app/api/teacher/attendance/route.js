import { NextResponse } from 'next/server'
import { listAttendance, saveAttendance } from '../../../../lib/teacher-data'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const payload = await listAttendance({ date: searchParams.get('date') || '', batch: searchParams.get('batch') || '' })
    return NextResponse.json(payload)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const payload = await saveAttendance({
      date: body?.date,
      batch: body?.batch,
      records: body?.records || [],
    })
    return NextResponse.json(payload)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
