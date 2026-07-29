import { NextResponse } from 'next/server'
import { QUESTION_BANK_SUBJECTS, QUESTION_BANK_CHAPTERS } from '../../../../lib/question-bank-data'

function buildSubjects() {
  const subjects = QUESTION_BANK_SUBJECTS.map((sub) => ({
    id: sub.id,
    label: sub.name,
    color: sub.color || null,
    chapters: QUESTION_BANK_CHAPTERS.filter((ch) => ch.subjectId === sub.id).map((ch) => ({ id: ch.id, label: ch.title, icon: ch.icon || ch.part || '' })),
  }))

  // Detect if a subjectId maps to multiple source banks (possible name collisions)
  const collisions = {}
  QUESTION_BANK_CHAPTERS.forEach((ch) => {
    if (!collisions[ch.subjectId]) collisions[ch.subjectId] = new Set()
    if (ch.sourceBank) collisions[ch.subjectId].add(ch.sourceBank)
  })

  const warnings = []
  Object.entries(collisions).forEach(([subjectId, set]) => {
    if (set.size > 1) {
      warnings.push(`Subject id "${subjectId}" has chapters from multiple source banks: ${Array.from(set).join(', ')}`)
    }
  })

  return { subjects, warnings }
}

export async function GET(req) {
  try {
    const payload = buildSubjects()
    return NextResponse.json(payload)
  } catch (err) {
    return NextResponse.json({ subjects: [], warnings: [String(err.message || err)] }, { status: 500 })
  }
}
