import { NextResponse } from 'next/server'

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_KEY

const defaultMock = [
  {
    id: 1,
    name: 'Demo Student',
    completed_lessons: 5,
    completed_lessons_last_day: 5,
    time_spent_minutes: 155,
    time_spent_today_minutes: 35,
    time_spent_weekly_minutes: 155,
  },
]

export async function GET(req) {
  try {
    if (!SUPABASE_URL || !SUPABASE_KEY) return NextResponse.json(defaultMock)

    const url = `${SUPABASE_URL}/rest/v1/students`
    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Accept: 'application/json'
      }
    })

    if (!res.ok) {
      const text = await res.text()
      return new NextResponse(text, { status: res.status })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json(defaultMock)
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    if (!SUPABASE_URL || !SUPABASE_KEY) return NextResponse.json({ ok: true, inserted: body })

    const url = `${SUPABASE_URL}/rest/v1/students`
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation'
      },
      body: JSON.stringify(body)
    })

    const data = await res.json()
    return NextResponse.json(data, { status: res.status })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
