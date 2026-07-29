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

export async function GET() {
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
