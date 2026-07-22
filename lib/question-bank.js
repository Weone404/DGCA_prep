import { SUBJECT_TESTS } from '@/lib/data'
import { chapters as airChapters, questions as airQuestions } from './question-banks/question_bank_air_regulations'
import { chapters as gnChapters, questions as gnQuestions } from './question-banks/question_bank_gn'
import { chapters as metChapters, questions as metQuestions } from './question-banks/question_bank_meteorology'
import { chapters as instrumentChapters, questions as instrumentQuestions } from './question-banks/question_bank_instrument_navigation'
import { chapters as rtChapters, questions as rtQuestions } from './question-banks/question_bank_rt'
import { chapters as radioTelephonyChapters, questions as radioTelephonyQuestions } from './question-banks/question_bank_radio_telephony'
import { chapters as technicalChapters, questions as technicalQuestions } from './question-banks/question_bank_technical_general'
import { chapters as qbChapters, questions as qbQuestions } from './question-banks/question_bank_qb'

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function hashString(input) {
  let hash = 2166136261
  const text = String(input || '')
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i)
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24)
  }
  return hash >>> 0
}

function mulberry32(seed) {
  return function random() {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const BANK_MODULES = [
  { chapters: airChapters, questions: airQuestions, subject: 'Air Regulations' },
  { chapters: gnChapters, questions: gnQuestions, subject: 'General Navigation' },
  { chapters: metChapters, questions: metQuestions, subject: 'Meteorology' },
  { chapters: instrumentChapters, questions: instrumentQuestions, subject: 'Instrument Navigation' },
  { chapters: rtChapters, questions: rtQuestions, subject: 'Radio Telephony' },
  { chapters: radioTelephonyChapters, questions: radioTelephonyQuestions, subject: 'Radio Telephony' },
  { chapters: technicalChapters, questions: technicalQuestions, subject: 'Technical General' },
  { chapters: qbChapters, questions: qbQuestions, subject: 'QB Extra' },
]

function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function buildChapterBankIndex() {
  return BANK_MODULES.flatMap((bank) =>
    (bank.chapters || []).map((chapter) => ({
      ...chapter,
      bankSubject: bank.subject,
      questions: Array.isArray(bank.questions?.[chapter.id]) ? bank.questions[chapter.id] : [],
    }))
  )
}

const CHAPTER_BANK_INDEX = buildChapterBankIndex()

function normalizeToken(value) {
  const token = String(value || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '')
  return token.endsWith('s') && token.length > 3 ? token.slice(0, -1) : token
}

function titlesMatch(titleA, titleB) {
  const normalizedA = normalizeText(titleA)
  const normalizedB = normalizeText(titleB)
  if (normalizedA === normalizedB) return true
  if (normalizedA.includes(normalizedB) || normalizedB.includes(normalizedA)) return true

  const tokensA = normalizedA.split(' ').map(normalizeToken)
  const tokensB = normalizedB.split(' ').map(normalizeToken)
  const sharedTokens = tokensA.filter((token) => token && tokensB.includes(token))
  return sharedTokens.length >= Math.max(1, Math.min(tokensA.length, tokensB.length) - 1)
}

function subjectsAlign(test, chapter) {
  const testSubject = normalizeText(test?.subject || test?.bankSubject || '')
  const bankSubject = normalizeText(chapter?.bankSubject || chapter?.subject || chapter?.part || '')
  if (!testSubject || !bankSubject) return true
  if (testSubject === bankSubject) return true
  if (testSubject.includes(bankSubject) || bankSubject.includes(testSubject)) return true
  if (testSubject === 'navigation' && ['general navigation', 'instrument navigation'].includes(bankSubject)) return true
  return false
}

function findChapterBankEntry(test) {
  if (!test) return null

  const testId = String(test?.id || '').toLowerCase()
  const testChapterId = String(test?.chapterId || '').toLowerCase()
  const title = test?.title || ''

  const directMatch = CHAPTER_BANK_INDEX.find((chapter) => {
    const chapterId = String(chapter?.id || '').toLowerCase()
    return chapterId && (chapterId === testId || chapterId === testChapterId)
  })
  if (directMatch) return directMatch

  const subjectMatches = CHAPTER_BANK_INDEX.filter((chapter) => subjectsAlign(test, chapter))
  const exactMatch = subjectMatches.find((chapter) => titlesMatch(chapter.title, title))
  if (exactMatch) return exactMatch

  return subjectMatches.find((chapter) => titlesMatch(chapter.title, title)) || subjectMatches[0] || null
}

function getSubjectTestById(subjectTestId, subjectTests = SUBJECT_TESTS) {
  return subjectTests.find((test) => String(test.id) === String(subjectTestId))
}

function getSubjectTestQuestionPayload(subjectTestId, count, subjectTests = SUBJECT_TESTS) {
  const test = getSubjectTestById(subjectTestId, subjectTests)
  if (!test) return { questions: [], chapter: null, test: null }

  const bankEntry = findChapterBankEntry(test)
  let questions = []
  let chapter = {
    id: String(test.id),
    title: test.title,
    part: test.subject,
    bankSubject: test.subject,
    totalQuestions: 0,
    fallback: true,
  }

  if (bankEntry?.questions?.length) {
    const limit = Math.max(1, Number(count || test.questions || bankEntry.questions.length || 20))
    questions = bankEntry.questions.slice(0, Math.min(limit, bankEntry.questions.length))
    chapter = {
      id: bankEntry.id,
      title: bankEntry.title,
      part: bankEntry.part,
      bankSubject: bankEntry.bankSubject,
      totalQuestions: bankEntry.questions.length,
      fallback: false,
    }
  } else {
    const key = `subject:${test.id}`
    const fallbackEntry = QUESTION_BANK[key]
    if (fallbackEntry) {
      const limit = Math.max(1, Number(count || test.questions || fallbackEntry.questions.length || 20))
      questions = fallbackEntry.questions.slice(0, limit)
    }
  }

  return { questions, chapter, test }
}

export function getQuestionsForSubjectTest(subjectTestId, count, subjectTests = SUBJECT_TESTS) {
  return getSubjectTestQuestionPayload(subjectTestId, count, subjectTests).questions
}

export function getSubjectTestQuestionsPayload(subjectTestId, count, subjectTests = SUBJECT_TESTS) {
  return getSubjectTestQuestionPayload(subjectTestId, count, subjectTests)
}

export function getQuestionsForClassTest(params = {}, subjectTests = SUBJECT_TESTS) {
  const topicIds = Array.isArray(params.topicIds) ? params.topicIds : []
  const chapterIds = Array.isArray(params.chapterIds) ? params.chapterIds : []
  const sourceIds = [...new Set([...topicIds, ...chapterIds].map((id) => String(id)))]
  const targetCount = Math.max(1, Number(params.numQuestions || 20))

  if (sourceIds.length) {
    const pooled = sourceIds.flatMap((sourceId) => {
      const test = getSubjectTestById(sourceId, subjectTests)
      if (!test) return []
      const bankEntry = findChapterBankEntry(test)
      return Array.isArray(bankEntry?.questions) ? bankEntry.questions : []
    })

    if (pooled.length) {
      return pooled.slice(0, Math.min(targetCount, pooled.length))
    }
  }

  return []
}