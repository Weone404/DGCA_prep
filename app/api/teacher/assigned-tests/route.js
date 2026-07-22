import { NextResponse } from 'next/server'
import pool from '../../../../lib/db'

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS assigned_tests (
      id              SERIAL PRIMARY KEY,
      title           TEXT NOT NULL,
      subject_id      TEXT NOT NULL,
      subject_label   TEXT NOT NULL,
      chapter_ids     TEXT[] NOT NULL DEFAULT '{}',
      num_questions   INTEGER NOT NULL DEFAULT 20,
      duration_mins   INTEGER NOT NULL DEFAULT 30,
      instructions    TEXT DEFAULT '',
      is_active       BOOLEAN DEFAULT true,
      created_at      TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_assigned_tests_subject ON assigned_tests(subject_id);
  `)
}

export async function GET(request) {
  try {
    await ensureTable()

    const { searchParams } = new URL(request.url)
    const includeAll = searchParams.get('all') === '1' || searchParams.get('all') === 'true'

    const query = `
      SELECT
        id,
        title,
        subject_id      AS "subjectId",
        subject_label   AS "subjectLabel",
        chapter_ids     AS "chapterIds",
        num_questions   AS "numQuestions",
        duration_mins   AS "durationMins",
        instructions,
        is_active       AS "isActive",
        created_at      AS "createdAt"
      FROM assigned_tests
      ${includeAll ? '' : 'WHERE COALESCE(is_active, true) = true'}
      ORDER BY created_at DESC
    `

    const { rows } = await pool.query(query)
    return NextResponse.json({ success: true, tests: rows, includeAll })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    await ensureTable()

    const body = await request.json()
    const test = body?.test || body

    if (!test?.title || !test?.subjectId || !test?.subjectLabel) {
      return NextResponse.json(
        { success: false, error: 'title, subjectId, and subjectLabel are required' },
        { status: 400 }
      )
    }

    const { rows } = await pool.query(
      `INSERT INTO assigned_tests
       (title, subject_id, subject_label, chapter_ids, num_questions, duration_mins, instructions)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        test.title,
        test.subjectId,
        test.subjectLabel,
        test.chapterIds || [],
        test.numQuestions || 20,
        test.durationMins || 30,
        test.instructions || '',
      ]
    )

    return NextResponse.json({ success: true, test: rows[0] })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export async function PATCH(request) {
  try {
    await ensureTable()

    const body = await request.json()
    const id = body?.id
    if (!id) {
      return NextResponse.json({ success: false, error: 'id is required' }, { status: 400 })
    }

    const updates = []
    const values = []

    const addUpdate = (column, value, key) => {
      if (value === undefined) return
      updates.push(`${column} = $${values.length + 1}`)
      values.push(value)
      if (key) {
        values.push(key)
      }
    }

    if (body?.title !== undefined) {
      updates.push(`title = $${values.length + 1}`)
      values.push(body.title)
    }
    if (body?.subjectId !== undefined) {
      updates.push(`subject_id = $${values.length + 1}`)
      values.push(body.subjectId)
    }
    if (body?.subjectLabel !== undefined) {
      updates.push(`subject_label = $${values.length + 1}`)
      values.push(body.subjectLabel)
    }
    if (body?.chapterIds !== undefined || body?.chapter_ids !== undefined) {
      updates.push(`chapter_ids = $${values.length + 1}`)
      values.push(body.chapterIds ?? body.chapter_ids ?? [])
    }
    if (body?.numQuestions !== undefined) {
      updates.push(`num_questions = $${values.length + 1}`)
      values.push(body.numQuestions)
    }
    if (body?.durationMins !== undefined) {
      updates.push(`duration_mins = $${values.length + 1}`)
      values.push(body.durationMins)
    }
    if (body?.instructions !== undefined) {
      updates.push(`instructions = $${values.length + 1}`)
      values.push(body.instructions)
    }
    if (body?.isActive !== undefined || body?.is_active !== undefined) {
      updates.push(`is_active = $${values.length + 1}`)
      values.push(body.isActive ?? body.is_active)
    }

    if (!updates.length) {
      return NextResponse.json({ success: false, error: 'No updatable fields provided' }, { status: 400 })
    }

    values.push(id)
    const { rows } = await pool.query(
      `UPDATE assigned_tests SET ${updates.join(', ')} WHERE id = $${values.length} RETURNING *`,
      values
    )

    return NextResponse.json({ success: true, test: rows[0] })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    await ensureTable()

    const body = await request.json()
    const id = body?.id
    if (!id) {
      return NextResponse.json({ success: false, error: 'id is required' }, { status: 400 })
    }

    const { rows } = await pool.query('DELETE FROM assigned_tests WHERE id = $1 RETURNING id', [id])
    return NextResponse.json({ success: true, deletedId: rows[0]?.id ?? id })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
