'use client'

import { QUESTION_BANK_CHAPTERS } from './data'
import { questions as airRegQuestions } from './question-banks/question_bank_air_regulations'
import { questions as gnQuestions } from './question-banks/question_bank_gn'
import { questions as metQuestions } from './question-banks/question_bank_meteorology'
import { questions as instrumentQuestions } from './question-banks/question_bank_instrument_navigation'
import { questions as rtQuestions } from './question-banks/question_bank_rt'
import { questions as radioTelephonyQuestions } from './question-banks/question_bank_radio_telephony'
import { questions as technicalQuestions } from './question-banks/question_bank_technical_general'
import { questions as qbQuestions } from './question-banks/question_bank_qb'

const GUEST_ID_KEY = 'estudy_mock_test_guest_id'
const PENDING_RESULT_KEY = 'estudy_mock_test_pending_result'
const TRANSFERRED_RESULT_KEY = 'estudy_mock_test_transferred_result'

const ALL_QUESTION_BANKS = {
  ...airRegQuestions,
  ...gnQuestions,
  ...metQuestions,
  ...instrumentQuestions,
  ...rtQuestions,
  ...radioTelephonyQuestions,
  ...technicalQuestions,
  ...qbQuestions,
}

const SAFE_CHAPTERS = Array.isArray(QUESTION_BANK_CHAPTERS) ? QUESTION_BANK_CHAPTERS : []
const ALL_CHAPTER_IDS = SAFE_CHAPTERS.map((chapter) => chapter?.id).filter(Boolean)

function countQuestionsForChapterIds(chapterIds) {
  return chapterIds.reduce((count, id) => {
    const items = ALL_QUESTION_BANKS[id]
    return count + (Array.isArray(items) ? items.length : 0)
  }, 0)
}

function countAllQuestions() {
  return Object.values(ALL_QUESTION_BANKS).reduce((sum, chapterQuestions) => sum + (Array.isArray(chapterQuestions) ? chapterQuestions.length : 0), 0)
}

function getChapterIdsBySource(sourceName) {
  return SAFE_CHAPTERS.filter((chapter) => chapter.sourceBank === sourceName).map((chapter) => chapter.id)
}

export const DEFAULT_MOCK_TEST_SETTINGS = {
  count: 100,
  durationMinutes: 100,
}

export const MOCK_TEST_SUBJECTS = [
  {
    id: 'all',
    title: 'All Subjects',
    icon: 'target',
    color: '#7C3AED',
    gradient: 'from-violet-500 to-cyan-500',
    chapterIds: null,
    stats: { questions: countAllQuestions() },
  },
  {
    id: 'air-regulations',
    title: 'Air Regulations',
    icon: 'book',
    color: '#2BC48A',
    gradient: 'from-emerald-400 to-teal-600',
    chapterIds: getChapterIdsBySource('Air Regulations'),
    stats: { questions: countQuestionsForChapterIds(getChapterIdsBySource('Air Regulations')) },
  },
  {
    id: 'meteorology',
    title: 'Meteorology',
    icon: 'sun',
    color: '#6366F1',
    gradient: 'from-sky-500 to-indigo-500',
    chapterIds: getChapterIdsBySource('Meteorology'),
    stats: { questions: countQuestionsForChapterIds(getChapterIdsBySource('Meteorology')) },
  },
  {
    id: 'navigation',
    title: 'Navigation',
    icon: 'chart',
    color: '#F97316',
    gradient: 'from-orange-400 to-red-500',
    children: [
      {
        id: 'general-navigation',
        title: 'General Navigation',
        icon: 'play',
        color: '#F97316',
        gradient: 'from-orange-400 to-amber-400',
        chapterIds: getChapterIdsBySource('General Navigation'),
        stats: { questions: countQuestionsForChapterIds(getChapterIdsBySource('General Navigation')) },
      },
      {
        id: 'instrument-navigation',
        title: 'Instrument Navigation',
        icon: 'video',
        color: '#FB923C',
        gradient: 'from-orange-300 to-red-400',
        chapterIds: getChapterIdsBySource('Instrument Navigation'),
        stats: { questions: countQuestionsForChapterIds(getChapterIdsBySource('Instrument Navigation')) },
      },
    ],
  },
  {
    id: 'radio-telephony',
    title: 'Radio Telephony',
    icon: 'mic',
    color: '#F2C94C',
    gradient: 'from-amber-300 to-yellow-400',
    chapterIds: getChapterIdsBySource('Radio Telephony'),
    stats: { questions: countQuestionsForChapterIds(getChapterIdsBySource('Radio Telephony')) },
  },
  {
    id: 'technical-general',
    title: 'Technical General',
    icon: 'file',
    color: '#43B7E9',
    gradient: 'from-cyan-400 to-sky-500',
    chapterIds: getChapterIdsBySource('Technical General'),
    stats: { questions: countQuestionsForChapterIds(getChapterIdsBySource('Technical General')) },
  },
]

function findSubjectById(subjectId, subjects = MOCK_TEST_SUBJECTS) {
  if (!subjectId) return null
  for (const subject of subjects) {
    if (subject.id === subjectId) return subject
    if (Array.isArray(subject.children)) {
      const child = findSubjectById(subjectId, subject.children)
      if (child) return child
    }
  }
  return null
}

function collectChapterIds(subject) {
  if (!subject) return []
  if (subject.chapterIds === null) return ALL_CHAPTER_IDS

  const collected = []
  if (Array.isArray(subject.chapterIds)) {
    collected.push(...subject.chapterIds)
  }
  if (Array.isArray(subject.children)) {
    subject.children.forEach((child) => {
      collected.push(...collectChapterIds(child))
    })
  }
  return Array.from(new Set(collected))
}

function shuffleQuestions(list) {
  const array = [...list]
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

export function findMockTestSubjectById(subjectId) {
  return findSubjectById(subjectId)
}

export function buildQuestionPool(subjectId, targetCount = DEFAULT_MOCK_TEST_SETTINGS.count) {
  const subject = findSubjectById(subjectId)
  if (!subject) {
    return { pool: [], totalAvailable: 0, warning: 'Subject not found.' }
  }
  const chapterIds = collectChapterIds(subject)
  const allQuestions = chapterIds.flatMap((id) => ALL_QUESTION_BANKS[id] || [])
  const shuffled = shuffleQuestions(allQuestions)
  const pool = shuffled.slice(0, Math.min(targetCount, shuffled.length))
  const warning = allQuestions.length < targetCount
    ? `Only ${allQuestions.length} questions are available for this subject.`
    : ''
  return { pool, totalAvailable: allQuestions.length, warning }
}

export function getOrCreateMockGuestId() {
  if (typeof window === 'undefined') return null
  let guestId = window.localStorage.getItem(GUEST_ID_KEY)
  if (guestId) return guestId
  const randomPart = typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`
  guestId = `guest-${randomPart}`
  window.localStorage.setItem(GUEST_ID_KEY, guestId)
  return guestId
}

export function getMockGuestId() {
  if (typeof window === 'undefined') return null
  return window.localStorage.getItem(GUEST_ID_KEY)
}

export function saveMockPendingResult(result) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(PENDING_RESULT_KEY, JSON.stringify(result))
}

export function getMockPendingResult() {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem(PENDING_RESULT_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function clearMockPendingResult() {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(PENDING_RESULT_KEY)
}

export function saveTransferredMockResult(result) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(TRANSFERRED_RESULT_KEY, JSON.stringify(result))
}

export function getTransferredMockResult() {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem(TRANSFERRED_RESULT_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function clearTransferredMockResult() {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(TRANSFERRED_RESULT_KEY)
}
