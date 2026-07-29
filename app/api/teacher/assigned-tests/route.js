import { NextResponse } from 'next/server'
import { createAssignedTest, deleteAssignedTest, listAssignedTests, toggleAssignedTest } from '../../../../lib/teacher-data'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const onlyActive = searchParams.get('onlyActive') === '1' || searchParams.get('onlyActive') === 'true' || searchParams.get('all') !== '1' && searchParams.get('all') !== 'true'
    const payload = await listAssignedTests({ onlyActive })
    return NextResponse.json(payload)
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const payload = await createAssignedTest(body)
    return NextResponse.json(payload)
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export async function PATCH(request) {
  try {
    const body = await request.json()
    const payload = await toggleAssignedTest(body)
    return NextResponse.json(payload)
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    const body = await request.json()
    const payload = await deleteAssignedTest(body?.id)
    return NextResponse.json(payload)
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
