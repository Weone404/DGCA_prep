'use client'

import { useEffect, useState } from 'react'
import {
  USER,
  SUBJECTS,
  SUBJECT_TESTS,
  CLASS_TESTS,
  CHAT_SUGGESTIONS,
  PROGRESS_WEEKLY,
  PROGRESS_SUBJECTS,
  LIVE_CLASSES,
  LECTURES_ARRAY,
  SHORT_VIDEOS_DATA,
  PERSONALYSIS_DATA,
  INTERVIEWS,
  MOCK_TESTS,
  RESOURCES,
} from '@/lib/data'

const defaults = {
  user: USER,
  subjects: SUBJECTS,
  subjectTests: SUBJECT_TESTS,
  classTests: CLASS_TESTS,
  chatSuggestions: CHAT_SUGGESTIONS,
  progressWeekly: PROGRESS_WEEKLY,
  progressSubjects: PROGRESS_SUBJECTS,
  liveClasses: LIVE_CLASSES,
  lecturesArray: LECTURES_ARRAY,
  shortVideosData: SHORT_VIDEOS_DATA,
  personalysisData: PERSONALYSIS_DATA,
  interviews: INTERVIEWS,
  mockTests: MOCK_TESTS,
  resources: RESOURCES,
}

export function useAppContent() {
  const [content, setContent] = useState(defaults)

  useEffect(() => {
    let active = true

    const load = async () => {
      try {
        const res = await fetch('/api/content')
        if (!res.ok || !active) return
        const data = await res.json()
        if (!active) return
        setContent({ ...defaults, ...data })
      } catch {
        // Keep local defaults if DB/API is unavailable.
      }
    }

    load()
    return () => {
      active = false
    }
  }, [])

  return content
}
