import { readFileSync } from 'node:fs'
import path from 'node:path'

const COURSE_DIRECTORY = path.join(process.cwd(), 'public', 'elp-course')
const LESSONS_PATH = path.join(COURSE_DIRECTORY, 'offline-course.json')
const lessons = JSON.parse(readFileSync(LESSONS_PATH, 'utf8'))

if (!Array.isArray(lessons)) {
  throw new Error('The ELP course manifest must contain a lesson list.')
}

export const ELP_LOGIN_FOLDER = '40_login'
export const ELP_PREVIOUS_LESSON_FOLDER = '41_previous_lesson'
export const ELP_FIRST_LESSON_FOLDER = '01_new_dgca_elp_test_procedure_631'

export function getELPCourseLessons() {
  return lessons
}

export function getELPLesson(folder) {
  const index = lessons.findIndex((lesson) => lesson.folder === folder)
  if (index === -1) return null

  const contentPath = path.join(COURSE_DIRECTORY, 'lectures', folder, 'content.json')
  const content = JSON.parse(readFileSync(contentPath, 'utf8'))
  return { lesson: lessons[index], content, index }
}
