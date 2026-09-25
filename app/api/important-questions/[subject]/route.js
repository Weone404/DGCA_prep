import { NextResponse } from 'next/server'
import { loadSubjectQuestions } from '../../../../lib/subject-question-source'

function isUsableQuestion(question) {
  return Boolean(
    question
      && typeof question === 'object'
      && String(question.question || '').trim()
      && Array.isArray(question.options)
      && question.options.some((option) => String(option || '').trim())
      && String(question.answer || '').trim()
  )
}

async function readQuestions(subject) {
  const result = await loadSubjectQuestions(subject)
  return { ...result, questions: result.questions.filter(isUsableQuestion) }
}

export async function GET(request, { params }) {
  const resolvedParams = await params
  const subject = decodeURIComponent(resolvedParams?.subject || '')
  const metadataOnly = new URL(request.url).searchParams.get('metadata') === '1'

  try {
    const result = await readQuestions(subject)
    if (!result.fileName) {
      return NextResponse.json({ subject, total: 0, questions: [] })
    }

    return NextResponse.json({
      subject,
      total: result.questions.length,
      ...(metadataOnly ? {} : { questions: result.questions }),
    })
  } catch (error) {
    console.error('Unable to load important questions:', error)
    return NextResponse.json(
      { error: 'Unable to load Important Questions.' },
      { status: 500 }
    )
  }
}
