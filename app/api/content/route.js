import { NextResponse } from 'next/server'
import pool from '../../../lib/db'
import { supabaseRequest } from '../../../lib/supabase'
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
} from '../../../lib/data'

export const dynamic = 'force-dynamic'

const TABLE_MAP = {
  user_profile: 'user_profile',
  subjects: 'subjects',
  subject_tests: 'subject_tests',
  class_tests: 'class_tests',
  chat_suggestions: 'chat_suggestions',
  progress_weekly: 'progress_weekly',
  progress_subjects: 'progress_subjects',
  live_classes: 'live_classes',
  lectures: 'lectures',
  interviews: 'interviews',
  mock_tests: 'mock_tests',
  resources: 'resources',
}

async function safeSelect(tableKey) {
  const table = TABLE_MAP[tableKey]
  if (!table) return null

  try {
    const supabaseResult = await supabaseRequest(table, { query: '*' })
    if (!supabaseResult.error && Array.isArray(supabaseResult.data)) {
      return supabaseResult.data
    }
  } catch {
    // Ignore and fall back to postgres query.
  }

  try {
    const { rows } = await pool.query(`SELECT * FROM ${table}`)
    return rows
  } catch {
    return null
  }
}

export async function GET() {
  try {
    const [
      userRows,
      subjects,
      subjectTests,
      classTests,
      chatSuggestions,
      progressWeekly,
      progressSubjects,
      liveClasses,
      lectures,
      interviews,
      mockTests,
      resources,
    ] = await Promise.all([
      safeSelect('user_profile'),
      safeSelect('subjects'),
      safeSelect('subject_tests'),
      safeSelect('class_tests'),
      safeSelect('chat_suggestions'),
      safeSelect('progress_weekly'),
      safeSelect('progress_subjects'),
      safeSelect('live_classes'),
      safeSelect('lectures'),
      safeSelect('interviews'),
      safeSelect('mock_tests'),
      safeSelect('resources'),
    ])

    return NextResponse.json({
      user: userRows?.[0] || USER,
      subjects: subjects?.length ? subjects : SUBJECTS,
      subjectTests: subjectTests?.length ? subjectTests : SUBJECT_TESTS,
      classTests: classTests?.length ? classTests : CLASS_TESTS,
      chatSuggestions: chatSuggestions?.length
        ? chatSuggestions.map((item) => item.text || item.suggestion || '')
        : CHAT_SUGGESTIONS,
      progressWeekly: progressWeekly?.length ? progressWeekly : PROGRESS_WEEKLY,
      progressSubjects: progressSubjects?.length ? progressSubjects : PROGRESS_SUBJECTS,
      liveClasses: liveClasses?.length ? liveClasses : LIVE_CLASSES,
      lecturesArray: lectures?.length ? lectures : LECTURES_ARRAY,
      shortVideosData: SHORT_VIDEOS_DATA,
      personalysisData: PERSONALYSIS_DATA,
      interviews: interviews?.length ? interviews : INTERVIEWS,
      mockTests: mockTests?.length ? mockTests : MOCK_TESTS,
      resources: resources?.length ? resources : RESOURCES,
    })
  } catch {
    return NextResponse.json({
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
    })
  }
}
