"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import { useAppContent } from '@/lib/use-app-content'
import { useAuth } from '@/lib/auth-context'

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function normalizeClassTest(item) {
  if (!item) return null
  return {
    id: item.id,
    title: item.title || 'Class test',
    classId: slugify(item.subjectId || item.subjectLabel || item.subject_id || item.subject_label || 'subject'),
    className: item.subjectLabel || item.subject_label || 'Subject',
    subjectId: item.subjectId || item.subject_id || '',
    subjectLabel: item.subjectLabel || item.subject_label || 'Subject',
    chapterIds: Array.isArray(item.chapterIds || item.chapter_ids) ? (item.chapterIds || item.chapter_ids) : [],
    numQuestions: Number(item.numQuestions || item.num_questions || item.questions || 20),
    durationMins: Number(item.durationMins || item.duration_mins || item.duration || 30),
    instructions: item.instructions || '',
    isActive: item.isActive ?? item.is_active ?? true,
  }
}

async function fetchClassTestQuestions(classTest) {
  const params = new URLSearchParams({
    testId: String(classTest.id || ''),
    title: classTest.title || 'Class Test',
    subjectLabel: classTest.subjectLabel || 'Aviation',
    numQuestions: String(classTest.numQuestions || 20),
  })

  if (Array.isArray(classTest.chapterIds) && classTest.chapterIds.length) {
    params.set('chapterIds', classTest.chapterIds.join(','))
  }

  try {
    const response = await fetch(`/api/questions?${params.toString()}`, {
      credentials: 'include',
    })
    if (!response.ok) throw new Error('Question bank request failed')
    const payload = await response.json()
    if (Array.isArray(payload?.questions)) {
      return payload.questions
    }
  } catch {
    // No local fallback is used; the UI will show an empty state if the bank has no questions.
  }

  return []
}

export default function ClassTestPage({ params }) {
  const { classId, testId } = params
  const router = useRouter()
  const { user } = useAuth()
  const { subjects: SUBJECTS } = useAppContent()

  const [screen, setScreen] = useState('loading')
  const [error, setError] = useState('')
  const [classTest, setClassTest] = useState(null)
  const [questions, setQuestions] = useState([])
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(0)
  const [submitting, setSubmitting] = useState(false)

  const timerRef = useRef(null)
  const testActiveRef = useRef(false)
  const finishedRef = useRef(false)

  useEffect(() => {
    let active = true

    const loadTest = async () => {
      setScreen('loading')
      setError('')

      try {
        const response = await fetch('/api/assigned-tests?all=1', {
          credentials: 'include',
        })
        const payload = await response.json()
        const tests = Array.isArray(payload?.tests) ? payload.tests : []

        const found = tests
          .map(normalizeClassTest)
          .find((entry) =>
            String(entry.id) === String(testId)
              && (String(entry.classId) === String(classId)
                || slugify(entry.className) === String(classId))
          )

        if (!active) return

        if (!found) {
          setError('Class test not found.')
          setScreen('error')
          return
        }

        const bankQuestions = await fetchClassTestQuestions(found)
        if (!active) return

        setClassTest(found)
        setQuestions(bankQuestions)
        setTimeLeft(found.durationMins * 60)
        setScreen('start')
      } catch {
        if (!active) return
        setError('Unable to load class test right now.')
        setScreen('error')
      }
    }

    loadTest()
    return () => {
      active = false
    }
  }, [classId, testId])

  useEffect(() => {
    testActiveRef.current = screen === 'test'
  }, [screen])

  useEffect(() => {
    function onVisibilityChange() {
      if (document.hidden) onViolation()
    }

    function onViolation() {
      if (!testActiveRef.current) return
      clearInterval(timerRef.current)
      router.replace(`/dashboard?reason=tab_switch&classId=${encodeURIComponent(classId)}`)
    }

    window.addEventListener('blur', onViolation)
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      window.removeEventListener('blur', onViolation)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [classId, router])

  useEffect(() => {
    if (screen !== 'test') return

    timerRef.current = setInterval(() => {
      setTimeLeft((current) => {
        if (current <= 1) {
          clearInterval(timerRef.current)
          setScreen('finish')
          return 0
        }
        return current - 1
      })
    }, 1000)

    return () => clearInterval(timerRef.current)
  }, [screen])

  const total = questions.length
  const score = useMemo(
    () => questions.reduce((acc, question, index) => acc + (answers[index] === question.correct ? 1 : 0), 0),
    [answers, questions]
  )

  const answeredCount = Object.keys(answers).length
  const unansweredCount = Math.max(0, total - answeredCount)
  const wrongCount = Math.max(0, answeredCount - score)

  const subjectMeta = SUBJECTS.find((subject) => subject.name === classTest?.subjectLabel)
  const themeColor = subjectMeta?.color || '#2563eb'

  const submitResult = useCallback(async () => {
    if (!classTest || finishedRef.current) return

    finishedRef.current = true
    setSubmitting(true)

    const answerRows = questions.map((question, index) => {
      const selected = answers[index]
      return {
        questionId: question.id,
        selected,
        correct: question.correct,
        isCorrect: selected === question.correct,
      }
    })

    try {
      await fetch('/api/assigned-tests/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          classId,
          testId: classTest.id,
          studentEmail: user?.email || 'student@example.com',
          studentName: user?.name || 'Student',
          score,
          total,
          answers: answerRows,
        }),
      })
    } catch {
      // Keep finish screen even if auto-save fails.
    } finally {
      setSubmitting(false)
    }
  }, [answers, classId, classTest, questions, score, total, user?.email, user?.name])

  useEffect(() => {
    if (screen === 'finish') {
      clearInterval(timerRef.current)
      submitResult()
    }
  }, [screen, submitResult])

  function startTest() {
    if (!classTest) return
    finishedRef.current = false
    setAnswers({})
    setCurrentQ(0)
    setTimeLeft(classTest.durationMins * 60)
    setScreen('test')
  }

  function handleAnswer(optionIndex) {
    if (answers[currentQ] !== undefined) return
    setAnswers((prev) => ({ ...prev, [currentQ]: optionIndex }))
  }

  function retryTest() {
    if (!classTest) return
    finishedRef.current = false

    ;(async () => {
      const bankQuestions = await fetchClassTestQuestions(classTest)
      setQuestions(bankQuestions)
      setAnswers({})
      setCurrentQ(0)
      setTimeLeft(classTest.durationMins * 60)
      setScreen('start')
    })()
  }

  const currentQuestion = questions[currentQ]
  const selected = answers[currentQ]
  const mins = Math.floor(timeLeft / 60)
  const secs = timeLeft % 60

  return (
    <AppShell>
      <div className="min-h-screen flex items-center justify-center p-6">
        {screen === 'loading' && (
          <div className="card p-6 max-w-md w-full text-center">
            <h2 className="font-bold text-xl mb-2">Loading class test</h2>
            <p className="text-sm text-muted">Preparing your questions...</p>
          </div>
        )}

        {screen === 'error' && (
          <div className="card p-6 max-w-md w-full text-center">
            <h2 className="font-bold text-xl mb-2">Unable to start</h2>
            <p className="text-sm text-muted mb-4">{error || 'Something went wrong.'}</p>
            <button onClick={() => router.push('/class-test')} className="px-4 py-2 border rounded-lg">Back to Class Tests</button>
          </div>
        )}

        {screen === 'start' && classTest && (
          <div className="card p-6 max-w-lg w-full" style={{ borderLeft: `6px solid ${themeColor}` }}>
            <h2 className="font-bold text-xl mb-3">{classTest.title}</h2>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center px-3 py-1 text-xs rounded-full border" style={{ borderColor: `${themeColor}55`, color: themeColor }}>
                Subject: {classTest.subjectLabel}
              </span>
              <span className="inline-flex items-center px-3 py-1 text-xs rounded-full border border-line text-ink">
                Class: {classTest.className || classId}
              </span>
            </div>

            <p className="text-sm text-muted mb-4">
              {classTest.numQuestions} questions · {classTest.durationMins} minutes
            </p>

            <p className="text-sm mb-2">
              {classTest.instructions || `You'll have ${classTest.durationMins} minutes. Once started, timer can't be paused.`}
            </p>

            <p className="text-xs text-muted mb-6">Switching tabs/windows will auto-submit and redirect you.</p>

            {questions.length === 0 ? (
              <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-4">
                No question-bank questions are available for this class test yet.
              </p>
            ) : null}

            <div className="flex gap-3">
              <button onClick={() => router.push('/class-test')} className="flex-1 border rounded-lg py-2">Cancel</button>
              <button onClick={startTest} disabled={questions.length === 0} style={{ background: questions.length === 0 ? '#94a3b8' : themeColor }} className="flex-1 text-white rounded-lg py-2">{questions.length === 0 ? 'Unavailable' : 'Start Test'}</button>
            </div>
          </div>
        )}

        {screen === 'test' && questions.length === 0 && classTest && (
          <div className="card p-6 max-w-md w-full text-center">
            <h3 className="text-xl font-bold mb-2">No bank questions available</h3>
            <p className="text-sm text-muted mb-4">This test has no question-bank entries to load right now.</p>
            <button onClick={() => router.push('/class-test')} className="px-4 py-2 border rounded-lg">Back to class tests</button>
          </div>
        )}

        {screen === 'test' && currentQuestion && classTest && (
          <div className="max-w-3xl w-full">
            <div className="flex items-center justify-between mb-4">
              <button onClick={() => setScreen('finish')} className="border rounded-lg px-3 py-1">Finish</button>
              <div className="font-semibold truncate px-3">{classTest.title}</div>
              <div className="font-mono">{String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}</div>
            </div>

            <div className="card p-5">
              <div className="text-sm text-muted mb-3">Question {currentQ + 1} of {total}</div>
              <div className="font-bold text-lg mb-4">{currentQuestion.question}</div>

              <div className="flex flex-col gap-3">
                {currentQuestion.options.map((option, index) => {
                  const optionClass = `p-3 rounded-lg border ${selected !== undefined
                    ? (index === currentQuestion.correct
                      ? 'bg-green-50 border-green-300'
                      : (index === selected ? 'bg-red-50 border-red-300' : 'opacity-60'))
                    : 'hover:bg-gray-50'}`

                  return (
                    <button
                      key={index}
                      className={optionClass}
                      onClick={() => handleAnswer(index)}
                      disabled={selected !== undefined}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white border flex items-center justify-center">
                          {['A', 'B', 'C', 'D'][index]}
                        </div>
                        <div>{option}</div>
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {questions.map((_, index) => {
                  const isCurrent = index === currentQ
                  const isAnswered = answers[index] !== undefined
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentQ(index)}
                      className={`w-8 h-8 rounded-full border text-xs font-semibold ${isCurrent ? 'text-white border-transparent' : (isAnswered ? 'bg-brand/10 border-brand/30 text-brand' : 'bg-white border-line text-muted')}`}
                      style={isCurrent ? { background: themeColor } : undefined}
                    >
                      {index + 1}
                    </button>
                  )
                })}
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => setCurrentQ((index) => Math.max(0, index - 1))}
                  disabled={currentQ === 0}
                  className="px-3 py-2 border rounded"
                >
                  Previous
                </button>

                {currentQ === total - 1 ? (
                  <button
                    onClick={() => setScreen('finish')}
                    className="px-4 py-2 rounded text-white"
                    style={{ background: themeColor }}
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentQ((index) => Math.min(total - 1, index + 1))}
                    className="px-4 py-2 border rounded"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {screen === 'finish' && classTest && (
          <div className="card p-6 max-w-md w-full text-center">
            <h3 className="text-2xl font-bold mb-2">Result</h3>
            <div className="text-4xl font-extrabold mb-2" style={{ color: themeColor }}>{score} / {total}</div>
            <p className="text-sm text-muted mb-4">{Math.round((score / Math.max(1, total)) * 100)}%</p>

            <div className="grid grid-cols-3 gap-2 text-xs mb-4">
              <div className="rounded-lg bg-green-50 border border-green-200 p-2">
                <div className="font-semibold">Correct</div>
                <div>{score}</div>
              </div>
              <div className="rounded-lg bg-red-50 border border-red-200 p-2">
                <div className="font-semibold">Wrong</div>
                <div>{wrongCount}</div>
              </div>
              <div className="rounded-lg bg-gray-50 border border-line p-2">
                <div className="font-semibold">Unanswered</div>
                <div>{unansweredCount}</div>
              </div>
            </div>

            {submitting ? <p className="text-xs text-muted mb-3">Saving result...</p> : null}

            <div className="flex gap-3">
              <button onClick={() => router.push('/class-test')} className="flex-1 border rounded-lg py-2">Back</button>
              <button
                onClick={retryTest}
                className="flex-1 rounded-lg py-2"
                style={{ background: themeColor, color: '#fff' }}
              >
                Retry
              </button>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  )
}
