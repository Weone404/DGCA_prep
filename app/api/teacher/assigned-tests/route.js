import { NextResponse } from 'next/server'
import { createAssignedTest, deleteAssignedTest, listAssignedTests, toggleAssignedTest } from '../../../../lib/teacher-data'

const memoryAssignedTests = []

function isDbConfigured() {
  return Boolean(String(process.env.DATABASE_URL || '').trim())
}

function normalizeTest(payload = {}) {
  const test = payload?.test || payload
  return {
    id: test?.id || `test-${Date.now()}`,
    title: String(test?.title || '').trim(),
    subjectId: String(test?.subjectId || '').trim(),
    subjectLabel: String(test?.subjectLabel || '').trim(),
    chapterId: String(test?.chapterId || '').trim(),
    chapterLabel: String(test?.chapterLabel || '').trim(),
    chapterIds: Array.isArray(test?.chapterIds) ? test.chapterIds : [],
    numQuestions: Number(test?.numQuestions || 20),
    durationMins: Number(test?.durationMins || 30),
    instructions: String(test?.instructions || ''),
    isActive: test?.isActive !== false,
    createdAt: new Date().toISOString(),
  }
}

function listMemoryTests({ onlyActive }) {
  const tests = onlyActive ? memoryAssignedTests.filter((test) => test.isActive !== false) : memoryAssignedTests
  return { success: true, tests, onlyActive }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const onlyActive = searchParams.get('onlyActive') === '1' || searchParams.get('onlyActive') === 'true' || searchParams.get('all') !== '1' && searchParams.get('all') !== 'true'

    if (!isDbConfigured()) {
      return NextResponse.json(listMemoryTests({ onlyActive }))
    }

    const payload = await listAssignedTests({ onlyActive })
    return NextResponse.json(payload)
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    if (!isDbConfigured()) {
      const test = normalizeTest(body)
      if (!test.title || !test.subjectId || !test.subjectLabel || !test.chapterIds.length) {
        return NextResponse.json({ success: false, error: 'title, subject, and at least one chapter are required.' }, { status: 400 })
      }
      memoryAssignedTests.unshift(test)
      return NextResponse.json({ success: true, test })
    }

    const payload = await createAssignedTest(body)
    return NextResponse.json(payload)
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export async function PATCH(request) {
  try {
    const body = await request.json()

    if (!isDbConfigured()) {
      const id = body?.id
      const nextActive = body?.isActive ?? body?.is_active
      if (!id) {
        return NextResponse.json({ success: false, error: 'id is required' }, { status: 400 })
      }
      const index = memoryAssignedTests.findIndex((test) => String(test.id) === String(id))
      if (index < 0) {
        return NextResponse.json({ success: false, error: 'Test not found' }, { status: 404 })
      }
      memoryAssignedTests[index] = { ...memoryAssignedTests[index], isActive: nextActive !== false }
      return NextResponse.json({ success: true, test: memoryAssignedTests[index] })
    }

    const payload = await toggleAssignedTest(body)
    return NextResponse.json(payload)
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    const body = await request.json()

    if (!isDbConfigured()) {
      const id = body?.id
      const index = memoryAssignedTests.findIndex((test) => String(test.id) === String(id))
      if (index >= 0) {
        memoryAssignedTests.splice(index, 1)
      }
      return NextResponse.json({ success: true, id })
    }

    const payload = await deleteAssignedTest(body?.id)
    return NextResponse.json({ ...payload, id: body?.id })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
