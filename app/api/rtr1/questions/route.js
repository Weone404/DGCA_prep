import fs from 'node:fs/promises'
import path from 'node:path'
import { NextResponse } from 'next/server'

const SOURCE_FILE = 'RTR-Part-1-standard_book_.json'

function answerIndex(options, answer) {
  const letter = String(answer || '').trim().toUpperCase().match(/^[A-D]/)?.[0]
  if (!letter) return null
  const index = letter.charCodeAt(0) - 65
  return index >= 0 && index < options.length ? index : null
}

export async function GET() {
  try {
    const raw = await fs.readFile(path.join(process.cwd(), SOURCE_FILE), 'utf8')
    const parsed = JSON.parse(raw)
    const source = Array.isArray(parsed) ? parsed : parsed?.questions
    if (!Array.isArray(source)) {
      return NextResponse.json({ error: 'RTR 1 question source is invalid.' }, { status: 500 })
    }

    const questions = source
      .map((item, index) => {
        const options = Array.isArray(item.options)
          ? item.options.map((option) => String(option).replace(/^[A-D]\s*[.)-]?\s*/i, '').trim())
          : []
        return {
          id: `rtr1-${index + 1}`,
          question: String(item.question || '').trim(),
          options,
          correct: answerIndex(options, item.correct_answer),
          explanation: String(item.explanation || '').trim(),
          section: String(item.section || '').trim(),
          chapter: String(item.chapter || '').trim(),
        }
      })
      .filter((item) => item.question && item.options.length > 0)

    return NextResponse.json({
      source: SOURCE_FILE,
      total: questions.length,
      questions,
    })
  } catch (error) {
    console.error('Unable to load RTR 1 questions:', error)
    return NextResponse.json({ error: 'Unable to load RTR 1 questions.' }, { status: 500 })
  }
}
