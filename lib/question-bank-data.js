import { chapters as airChapters, questions as airQuestions } from './question-banks/question_bank_air_regulations'
import { chapters as gnChapters, questions as gnQuestions } from './question-banks/question_bank_gn'
import { chapters as metChapters, questions as metQuestions } from './question-banks/question_bank_meteorology'
import { chapters as instrumentChapters, questions as instrumentQuestions } from './question-banks/question_bank_instrument_navigation'
import { chapters as rtChapters, questions as rtQuestions } from './question-banks/question_bank_rt'
import { chapters as radioTelephonyChapters, questions as radioTelephonyQuestions } from './question-banks/question_bank_radio_telephony'
import { chapters as technicalChapters, questions as technicalQuestions } from './question-banks/question_bank_technical_general'
import { chapters as qbChapters, questions as qbQuestions } from './question-banks/question_bank_qb'

function normalizeSubjectName(subject) {
  if (!subject) return 'General'
  if (subject === 'General Navigation' || subject === 'Instrument Navigation') return 'Navigation'
  return subject
}

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const BANK_MODULES = [
  { id: 'air-regulations', subject: 'Air Regulations', chapters: airChapters, questions: airQuestions },
  { id: 'navigation', subject: 'General Navigation', chapters: gnChapters, questions: gnQuestions },
  { id: 'meteorology', subject: 'Meteorology', chapters: metChapters, questions: metQuestions },
  { id: 'navigation', subject: 'Instrument Navigation', chapters: instrumentChapters, questions: instrumentQuestions },
  { id: 'radio-telephony', subject: 'Radio Telephony', chapters: rtChapters, questions: rtQuestions },
  { id: 'radio-telephony', subject: 'Radio Telephony', chapters: radioTelephonyChapters, questions: radioTelephonyQuestions },
  { id: 'technical-general', subject: 'Technical General', chapters: technicalChapters, questions: technicalQuestions },
  { id: 'qb-extra', subject: 'QB Extra', chapters: qbChapters, questions: qbQuestions },
]

export const QUESTION_BANK_SUBJECTS = [
  { id: 'air-regulations', name: 'Air Regulations', color: '#2BC48A' },
  { id: 'meteorology', name: 'Meteorology', color: '#7B7FF2' },
  { id: 'navigation', name: 'Navigation', color: '#FF8B6B' },
  { id: 'technical-general', name: 'Technical General', color: '#43B7E9' },
  { id: 'radio-telephony', name: 'Radio Telephony', color: '#F2C94C' },
]

export const QUESTION_BANK_CHAPTERS = BANK_MODULES.flatMap((bank) =>
  (bank.chapters || []).map((chapter, index) => {
    const chapterQuestions = Array.isArray(bank.questions?.[chapter.id]) ? bank.questions[chapter.id] : []
    const subjectLabel = normalizeSubjectName(bank.subject)
    return {
      ...chapter,
      subjectId: bank.id,
      subject: subjectLabel,
      subjectDisplay: subjectLabel,
      questionCount: chapterQuestions.length || Math.max(10, 12 + index % 3),
      sourceBank: bank.subject,
    }
  })
)

export const QUESTION_BANK_SUBJECT_TESTS = QUESTION_BANK_CHAPTERS.map((chapter, index) => ({
  id: chapter.id,
  subject: chapter.subject,
  title: chapter.title,
  chapterId: chapter.id,
  part: chapter.part,
  questions: chapter.questionCount,
  duration: 20 + (index % 4) * 5,
  difficulty: ['Easy', 'Medium', 'Hard'][index % 3],
  attempted: false,
  score: null,
  bankSubject: chapter.sourceBank,
  subjectId: chapter.subjectId,
  slug: slugify(`${chapter.subject}-${chapter.title}`),
}))
