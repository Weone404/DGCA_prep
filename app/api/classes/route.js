import { NextResponse } from 'next/server'
import { supabaseRequest } from '../../../lib/supabase'

const fallbackEvents = []

function toIso(date, time) {
  if (!date) return ''
  if (!time) return `${date}T00:00:00`
  return `${date}T${time}:00`
}

function withDuration(startDateTime, durationMins) {
  const start = new Date(startDateTime).getTime()
  if (!Number.isFinite(start)) return ''
  return new Date(start + Number(durationMins || 60) * 60000).toISOString()
}

function normalizeClassEvent(record) {
  const startDateTime = record.start_date_time || record.startDateTime || record.start_at || toIso(record.date, record.time)
  const durationMins = Number(record.duration || record.duration_mins || record.durationMins || 60)

  return {
    id: record.id || record.class_id,
    title: record.title || record.name || 'Live class',
    description: record.description || record.notes || '',
    date: record.date || record.class_date || '',
    time: record.time || record.class_time || '',
    batch: record.batch || record.class_batch || 'A1',
    meetLink: record.meet_link || record.meetLink || record.link || '',
    duration: durationMins,
    startDateTime,
    endDateTime: record.end_date_time || record.endDateTime || record.end_at || withDuration(startDateTime, durationMins),
  }
}

export async function GET() {
  try {
    const fromSchedule = await supabaseRequest('scheduled_classes', { query: '*' })
    if (!fromSchedule.error && Array.isArray(fromSchedule.data) && fromSchedule.data.length) {
      return NextResponse.json({ success: true, events: fromSchedule.data.map(normalizeClassEvent) })
    }

    const fromLiveClasses = await supabaseRequest('live_classes', { query: '*' })
    if (!fromLiveClasses.error && Array.isArray(fromLiveClasses.data) && fromLiveClasses.data.length) {
      return NextResponse.json({ success: true, events: fromLiveClasses.data.map(normalizeClassEvent) })
    }

    return NextResponse.json({ success: true, events: fallbackEvents })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Failed to load classes', events: fallbackEvents },
      { status: 500 }
    )
  }
}
