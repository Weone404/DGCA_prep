import { NextResponse } from 'next/server'
import { SUBJECT_TESTS } from '../../../lib/data'
import { getQuestionsForClassTest, getSubjectTestQuestionsPayload } from '../../../lib/question-bank'
import { isNavigationSubject, loadSubjectQuestions } from '../../../lib/subject-question-source'

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
    const subjectTest = SUBJECT_TESTS.find((test) => String(test.id) === String(subjectTestId))
    if (isNavigationSubject(subjectTest?.subject) || isNavigationSubject(subjectTest?.bankSubject)) {
      try {
        const source = await loadSubjectQuestions('Navigation')
        const questions = source.questions
          .filter((question) => Array.isArray(question?.options) && question.options.length > 0)
          .map((question) => {
            const answer = String(question.answer || '').trim().toLowerCase()
            const correct = question.options.findIndex((option) => String(option || '').trim().toLowerCase() === answer)
            return { ...question, correct: correct >= 0 ? correct : null }
          })

        return NextResponse.json({
          source: 'subject-json',
          sourceFile: source.fileName,
          subjectTestId,
          total: questions.length,
          questions,
          chapter: {
            id: String(subjectTestId),
            title: subjectTest?.title || 'Navigation',
            part: subjectTest?.subject || 'Navigation',
            bankSubject: 'Navigation',
            totalQuestions: questions.length,
            fallback: false,
          },
        })
      } catch (error) {
        console.error('Unable to load Navigation questions from Air_Navigation.json:', error)
        return NextResponse.json({ source: 'subject-json', sourceFile: 'Air_Navigation.json', subjectTestId, total: 0, questions: [] }, { status: 500 })
      }
    }

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