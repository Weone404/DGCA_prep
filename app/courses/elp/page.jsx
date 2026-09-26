import { ELPCourseHome, ELPCourseReader } from '@/components/ELPCourseReader'
import { getELPCourseLessons } from '@/lib/elp-course'

export default function ELPCoursePage() {
  const lessons = getELPCourseLessons()

  return (
    <ELPCourseReader>
      <ELPCourseHome lessonCount={lessons.length} />
    </ELPCourseReader>
  )
}
