import { NextResponse } from 'next/server'
import { SUBJECT_TESTS } from '../../../lib/data'
import { getQuestionsForClassTest, getSubjectTestQuestionsPayload } from '../../../lib/question-bank'

function parseList(value) {
  if (!value) return []
  return String(value)
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean)
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)

  const subjectTestId = searchParams.get('subjectTestId')
  const numQuestions = Number(searchParams.get('numQuestions') || 0)

  if (subjectTestId) {
    const result = getSubjectTestQuestionsPayload(subjectTestId, numQuestions, SUBJECT_TESTS)
    return NextResponse.json({
      source: 'subject-test',
      subjectTestId,
      total: result.questions.length,
      questions: result.questions,
      chapter: result.chapter,
    })
  }

  const classTestPayload = {
    id: searchParams.get('id') || searchParams.get('testId') || '',
    title: searchParams.get('title') || 'Class Test',
    subjectLabel: searchParams.get('subjectLabel') || 'Aviation',
    questionSetId: searchParams.get('questionSetId') || '',
    numQuestions: numQuestions || 20,
    topicIds: parseList(searchParams.get('topicIds')),
    chapterIds: parseList(searchParams.get('chapterIds')),
  }

  const questions = getQuestionsForClassTest(classTestPayload, SUBJECT_TESTS)
  return NextResponse.json({
    source: 'class-test',
    total: questions.length,
    questions,
  })
}