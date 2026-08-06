import { NextResponse } from 'next/server'
import { getAssignedTestResults } from '../../../../../lib/teacher-data'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const rawTestId = searchParams.get('testId')
    const parsedTestId = Number(rawTestId)

    if (!Number.isFinite(parsedTestId) || parsedTestId <= 0) {
      return NextResponse.json({ success: false, error: 'Valid testId is required' }, { status: 400 })
    }

    const payload = await getAssignedTestResults(parsedTestId)
    return NextResponse.json(payload)
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
