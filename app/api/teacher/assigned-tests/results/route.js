import { NextResponse } from 'next/server'
import { getAssignedTestResults } from '../../../../../lib/teacher-data'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const payload = await getAssignedTestResults(searchParams.get('testId'))
    return NextResponse.json(payload)
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
