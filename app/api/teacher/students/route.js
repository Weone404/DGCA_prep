import { NextResponse } from 'next/server'
import { addStudent, getStudentsWithResults, removeStudent } from '../../../../lib/teacher-data'

export async function GET() {
  try {
    const payload = await getStudentsWithResults()
    return NextResponse.json(payload)
  } catch (error) {
    console.error('GET /api/teacher/students error:', error)
    return NextResponse.json({
      summary: { totalStudents: 0, totalTests: 0, avgAccuracy: 0 },
      students: [],
      degraded: true,
      error: error?.message || 'Unable to load students right now.',
    })
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const payload = await addStudent(body)
    return NextResponse.json(payload)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(req) {
  try {
    const body = await req.json()
    const payload = await removeStudent(body?.email)
    return NextResponse.json(payload)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
