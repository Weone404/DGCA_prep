import { NextResponse } from 'next/server'
import fs from 'node:fs/promises'
import path from 'node:path'

const SUBJECT_FILES = {
  'air navigation': 'Air_Navigation.json',
  'air regulation': 'Air_Regulation.json',
  'air regulations': 'Air_Regulation.json',
  meteorology: 'Meteorology.json',
  rtr: 'RTR.json',
  'radio telephony': 'RTR.json',
  'technical general': 'Technical_General.json',
}

function normalize(value) {
  return String(value || '').trim().toLowerCase().replace(/[_-]/g, ' ')
}

function getFileName(subject) {
  return SUBJECT_FILES[normalize(subject)] || null
}

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
  const fileName = getFileName(subject)
  if (!fileName) return { fileName: null, questions: [] }

  const filePath = path.join(process.cwd(), fileName)
  const content = await fs.readFile(filePath, 'utf8')
  const parsed = JSON.parse(content)
  const questions = Array.isArray(parsed) ? parsed : parsed?.questions
  return {
    fileName,
    questions: Array.isArray(questions) ? questions.filter(isUsableQuestion) : [],
  }
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
