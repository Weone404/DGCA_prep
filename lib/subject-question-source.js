import fs from 'node:fs/promises'
import path from 'node:path'

export const SUBJECT_TO_FILE = {
  Navigation: 'Air_Navigation.json',
  'Air Navigation': 'Air_Navigation.json',
  'Air Regulation': 'Air_Regulation.json',
  'Air Regulations': 'Air_Regulation.json',
  Meteorology: 'Meteorology.json',
  RTR: 'RTR.json',
  'Radio Telephony': 'RTR.json',
  'Technical General': 'Technical_General.json',
}

function normalizeSubject(subject) {
  return String(subject || '').trim().toLowerCase().replace(/[_-]/g, ' ')
}

function getMappedFile(subject) {
  const entry = Object.entries(SUBJECT_TO_FILE).find(([label]) => normalizeSubject(label) === normalizeSubject(subject))
  return entry?.[1] || null
}

export function isNavigationSubject(subject) {
  return normalizeSubject(subject).includes('navigation')
}

export async function loadSubjectQuestions(subject) {
  const fileName = getMappedFile(subject) || (isNavigationSubject(subject) ? SUBJECT_TO_FILE.Navigation : null)
  if (!fileName) return { fileName: null, questions: [] }

  const content = await fs.readFile(path.join(process.cwd(), fileName), 'utf8')
  const parsed = JSON.parse(content)
  const questions = Array.isArray(parsed) ? parsed : parsed?.questions
  return {
    fileName,
    questions: Array.isArray(questions) ? questions : [],
  }
}
