import Link from 'next/link'
import { getELPCourseLessons } from '@/lib/elp-course'

const LESSONS_PATH = '/courses/elp'
const ARCHIVE_PATH = '/elp-course/lectures'

function assetPath(folder, filename) {
  return `${ARCHIVE_PATH}/${encodeURIComponent(folder)}/${filename}`
}

function cleanLessonText(value, title) {
  let text = typeof value === 'string' ? value.trim() : ''
  if (title && text.startsWith(title)) text = text.slice(title.length).trim()
  return text
    .replace(/\s+(?:Complete and Continue|Lesson Content Locked|Your session expired\. Please sign in again to continue\.)[\s\S]*$/i, '')
    .trim()
}

function CourseNavigation({ activeFolder }) {
  const lessons = getELPCourseLessons()

  return (
    <aside className="min-w-0 rounded-2xl border border-line bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5 lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
        Course contents
      </h2>
      <nav aria-label="Course contents">
        <ol className="space-y-1">
          {lessons.map((lesson) => {
            const isActive = lesson.folder === activeFolder
            return (
              <li key={lesson.folder}>
                <Link
                  href={`${LESSONS_PATH}/${encodeURIComponent(lesson.folder)}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-sm leading-5 transition-colors ${
                    isActive
                      ? 'bg-emerald-50 font-semibold text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200'
                      : 'text-ink hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  {lesson.title}
                </Link>
              </li>
            )
          })}
        </ol>
      </nav>
    </aside>
  )
}

export function ELPCourseReader({ activeFolder, children }) {
  return (
    <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(15rem,19rem)_minmax(0,1fr)]">
      <CourseNavigation activeFolder={activeFolder} />
      <article className="min-w-0 rounded-2xl border border-line bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
        {children}
      </article>
    </div>
  )
}

export function ELPCourseHome({ lessonCount }) {
  return (
    <>
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-300">
        Offline course archive
      </p>
      <h1 className="mb-4 text-2xl font-bold text-ink dark:text-white sm:text-3xl">Welcome to the ELP course</h1>
      <p className="max-w-3xl leading-7 text-muted">
        Browse the locally archived English Language Proficiency course lessons from the course contents menu.
        The archive includes lesson notes, images, and available PDF documents.
      </p>
      <p className="mt-4 font-medium text-ink dark:text-slate-100">
        {lessonCount} archived lessons are available.
      </p>
      <p className="mt-6 rounded-xl border-l-4 border-slate-400 bg-slate-50 p-4 leading-6 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
        This is a read-only offline archive. Hosted sign-in, comments, lesson tracking, and protected video playback
        are not available.
      </p>
    </>
  )
}

export function ELPCourseNotice({ title, message, canonicalLesson }) {
  const lessons = getELPCourseLessons()
  const canonical = canonicalLesson && lessons.find((lesson) => lesson.folder === canonicalLesson)

  return (
    <>
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-300">
        Offline course archive
      </p>
      <h1 className="mb-4 text-2xl font-bold text-ink dark:text-white sm:text-3xl">{title}</h1>
      <p className="rounded-xl border-l-4 border-slate-400 bg-slate-50 p-4 leading-6 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
        {message}
      </p>
      {canonical && (
        <Link
          className="mt-5 inline-flex font-medium text-emerald-700 underline underline-offset-4 hover:text-emerald-800 dark:text-emerald-300"
          href={`${LESSONS_PATH}/${encodeURIComponent(canonical.folder)}`}
        >
          Open archived lesson: {canonical.title}
        </Link>
      )}
    </>
  )
}

export function ELPCourseLesson({ lesson, content, index }) {
  const lessons = getELPCourseLessons()
  const title = content.title || lesson.title
  const text = cleanLessonText(content.text, title)
  const images = Array.isArray(content.images) ? content.images : []
  const documents = Array.isArray(content.pdfs) ? content.pdfs : []
  const videos = Array.isArray(content.videos) ? content.videos : []

  return (
    <>
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-300">
        ELP course lesson
      </p>
      <h1 className="max-w-4xl text-2xl font-bold leading-tight text-ink dark:text-white sm:text-3xl">{title}</h1>
      {(content.duration || lesson.duration) && (
        <p className="mt-3 text-sm text-muted">Duration: {content.duration || lesson.duration}</p>
      )}

      {text && (
        <div className="mt-6 max-w-4xl whitespace-pre-wrap break-words text-[1.02rem] leading-8 text-slate-700 dark:text-slate-200">
          {text}
        </div>
      )}

      {(images.length > 0 || documents.length > 0 || videos.length > 0) && (
        <section className="mt-8 max-w-5xl" aria-label="Lesson attachments">
          {images.length > 0 && (
            <div>
              <h2 className="mb-3 text-lg font-semibold text-ink dark:text-white">Images</h2>
              <div className="grid items-start gap-5 sm:grid-cols-2">
                {images.map((filename, imageIndex) => (
                  <figure key={filename}>
                    <img
                      className="h-auto w-full rounded-lg border border-line dark:border-slate-700"
                      src={assetPath(lesson.folder, `images/${encodeURIComponent(filename)}`)}
                      alt={`${title} image ${imageIndex + 1}`}
                      loading="lazy"
                    />
                  </figure>
                ))}
              </div>
            </div>
          )}

          {documents.length > 0 && (
            <div className={images.length > 0 ? 'mt-7' : ''}>
              <h2 className="mb-3 text-lg font-semibold text-ink dark:text-white">Documents</h2>
              <ul className="list-inside list-disc space-y-2 text-emerald-700 dark:text-emerald-300">
                {documents.map((filename) => (
                  <li key={filename}>
                    <a
                      className="break-all underline underline-offset-4 hover:text-emerald-800"
                      href={assetPath(lesson.folder, `documents/${encodeURIComponent(filename)}`)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {filename}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {videos.length > 0 && (
            <p className="mt-6 rounded-xl border-l-4 border-slate-400 bg-slate-50 p-4 leading-6 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              Video unavailable in this offline archive. The original course video requires the hosted course platform.
            </p>
          )}
        </section>
      )}

      <nav className="mt-9 flex flex-col justify-between gap-3 border-t border-line pt-5 dark:border-slate-800 sm:flex-row" aria-label="Previous and next lesson">
        {index > 0 ? (
          <Link
            className="max-w-full text-emerald-700 underline underline-offset-4 dark:text-emerald-300 sm:max-w-[48%]"
            href={`${LESSONS_PATH}/${encodeURIComponent(lessons[index - 1].folder)}`}
          >
            ← Previous: {lessons[index - 1].title}
          </Link>
        ) : <span />}
        {index < lessons.length - 1 && (
          <Link
            className="max-w-full text-left text-emerald-700 underline underline-offset-4 dark:text-emerald-300 sm:ml-auto sm:max-w-[48%] sm:text-right"
            href={`${LESSONS_PATH}/${encodeURIComponent(lessons[index + 1].folder)}`}
          >
            Next: {lessons[index + 1].title} →
          </Link>
        )}
      </nav>
    </>
  )
}
