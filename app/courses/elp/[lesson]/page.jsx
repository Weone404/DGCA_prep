import { notFound } from 'next/navigation'
import {
  ELPCourseLesson,
  ELPCourseNotice,
  ELPCourseReader,
} from '@/components/ELPCourseReader'
import {
  ELP_FIRST_LESSON_FOLDER,
  ELP_LOGIN_FOLDER,
  ELP_PREVIOUS_LESSON_FOLDER,
  getELPCourseLessons,
  getELPLesson,
} from '@/lib/elp-course'

export const dynamicParams = false

export function generateStaticParams() {
  return [
    ...getELPCourseLessons().map((lesson) => ({ lesson: lesson.folder })),
    { lesson: ELP_LOGIN_FOLDER },
    { lesson: ELP_PREVIOUS_LESSON_FOLDER },
  ]
}

export default async function ELPLessonPage({ params }) {
  const { lesson: folder } = await params
  const result = getELPLesson(folder)

  if (folder === ELP_LOGIN_FOLDER) {
    return (
      <ELPCourseReader>
        <ELPCourseNotice
          title="Sign-in unavailable offline"
          message="The original course sign-in requires the hosted course platform. No sign-in or account functionality is provided in this archive."
        />
      </ELPCourseReader>
    )
  }

  if (folder === ELP_PREVIOUS_LESSON_FOLDER) {
    return (
      <ELPCourseReader>
        <ELPCourseNotice
          title="Previous Lesson"
          message="This saved page duplicates the first archived lesson. The original platform URL maps to that lesson."
          canonicalLesson={ELP_FIRST_LESSON_FOLDER}
        />
      </ELPCourseReader>
    )
  }

  if (!result) notFound()

  return (
    <ELPCourseReader activeFolder={folder}>
      <ELPCourseLesson {...result} />
    </ELPCourseReader>
  )
}
