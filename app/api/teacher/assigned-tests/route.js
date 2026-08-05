import { NextResponse } from 'next/server'
import { createAssignedTest, deleteAssignedTest, listAssignedTests, toggleAssignedTest, updateAssignedTest } from '../../../../lib/teacher-data'
import { sendAssignedTestWhatsAppNotifications } from '../../../../lib/whatsapp-notifier'

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
    dueAt: test?.dueAt || null,
    notifyStudents: test?.notifyStudents !== false,
    notifyMinorUpdates: test?.notifyMinorUpdates === true,
    updateSeverity: String(test?.updateSeverity || 'major').toLowerCase() === 'minor' ? 'minor' : 'major',
    isActive: test?.isActive !== false,
    createdAt: new Date().toISOString(),
  }
}

function listMemoryTests({ onlyActive }) {
  const tests = onlyActive ? memoryAssignedTests.filter((test) => test.isActive !== false) : memoryAssignedTests
  return { success: true, tests, onlyActive }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const onlyActive = searchParams.get('onlyActive') === '1' || searchParams.get('onlyActive') === 'true' || searchParams.get('all') !== '1' && searchParams.get('all') !== 'true'

  try {
    if (!isDbConfigured()) {
      return NextResponse.json(listMemoryTests({ onlyActive }))
    }

    const payload = await listAssignedTests({ onlyActive })
    return NextResponse.json(payload)
  } catch (err) {
    console.error('GET /api/teacher/assigned-tests error:', err)
    return NextResponse.json({ success: true, tests: [], onlyActive, degraded: true, error: err?.message || 'Unable to load assigned tests' })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const normalized = normalizeTest(body)

    if (!isDbConfigured()) {
      const test = normalized
      if (!test.title || !test.subjectId || !test.subjectLabel || !test.chapterIds.length) {
        return NextResponse.json({ success: false, error: 'title, subject, and at least one chapter are required.' }, { status: 400 })
      }
      memoryAssignedTests.unshift(test)
      return NextResponse.json({ success: true, test })
    }

    const payload = await createAssignedTest(body)

    const dbTest = payload?.test || {}
    const assignment = {
      id: dbTest.id,
      title: dbTest.title || normalized.title,
      subjectId: dbTest.subject_id || dbTest.subjectId || normalized.subjectId,
      subjectLabel: dbTest.subject_label || dbTest.subjectLabel || normalized.subjectLabel,
      classId: dbTest.class_id || dbTest.classId || normalized.classId,
      className: dbTest.class_name || dbTest.className || normalized.className,
      dueAt: dbTest.due_at || dbTest.dueAt || normalized.dueAt || null,
    }

    const notification = await sendAssignedTestWhatsAppNotifications({
      assignment,
      eventType: 'created',
      updateSeverity: 'major',
      notifyStudents: normalized.notifyStudents,
      notifyMinorUpdates: normalized.notifyMinorUpdates,
    })

    return NextResponse.json({ ...payload, notification })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export async function PATCH(request) {
  try {
    const body = await request.json()
    const normalized = normalizeTest(body)

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
      memoryAssignedTests[index] = {
        ...memoryAssignedTests[index],
        ...Object.fromEntries(Object.entries(normalized).filter(([, value]) => value !== undefined)),
        isActive: nextActive !== undefined ? nextActive !== false : memoryAssignedTests[index].isActive,
      }
      return NextResponse.json({ success: true, test: memoryAssignedTests[index] })
    }

    const isToggleOnly = Object.keys(body || {}).every((key) => ['id', 'isActive', 'is_active', 'notifyStudents', 'notifyMinorUpdates', 'updateSeverity'].includes(key))
    const payload = isToggleOnly ? await toggleAssignedTest(body) : await updateAssignedTest(body)

    const dbTest = payload?.test || {}
    const assignment = {
      id: dbTest.id,
      title: dbTest.title || normalized.title,
      subjectId: dbTest.subject_id || dbTest.subjectId || normalized.subjectId,
      subjectLabel: dbTest.subject_label || dbTest.subjectLabel || normalized.subjectLabel,
      classId: dbTest.class_id || dbTest.classId || normalized.classId,
      className: dbTest.class_name || dbTest.className || normalized.className,
      dueAt: dbTest.due_at || dbTest.dueAt || normalized.dueAt || null,
    }

    const notification = await sendAssignedTestWhatsAppNotifications({
      assignment,
      eventType: 'updated',
      updateSeverity: normalized.updateSeverity,
      notifyStudents: normalized.notifyStudents,
      notifyMinorUpdates: normalized.notifyMinorUpdates,
    })

    return NextResponse.json({ ...payload, notification })
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
