'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { Badge, ProgressBar } from '@/components/UI'
import { useAuth } from '@/lib/auth-context'
import {
  MOCK_TEST_SUBJECTS,
  DEFAULT_MOCK_TEST_SETTINGS,
  buildQuestionPool,
  getOrCreateMockGuestId,
  getMockPendingResult,
  clearMockPendingResult,
  getTransferredMockResult,
  clearTransferredMockResult,
  saveMockPendingResult,
} from '@/lib/mock-test'

const SCREEN = {
  SUBJECT_SELECT: 'subjectSelect',
  INTRO: 'intro',
  TEST: 'test',
  LOGIN_REQUIRED: 'loginRequired',
  FINISH: 'finish',
}

const saveStatusTone = {
  idle: 'muted',
  saving: 'violet',
  saved: 'brand',
  error: 'coral',
}

const TOTAL_TIME_SECONDS = Number(DEFAULT_MOCK_TEST_SETTINGS.totalTimeSeconds) || 6000

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return '00:00'
  }
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

function getDurationMinutes(totalTimeSeconds) {
  return Math.floor(totalTimeSeconds / 60)
}

function getNestedCategories(category) {
  if (Array.isArray(category?.subcategories)) return category.subcategories
  if (Array.isArray(category?.children)) return category.children
  return []
}

function getDotState({ screen, index, currentIndex, answers, pool }) {
  if (screen === SCREEN.FINISH) {
    if (answers[index] === undefined) return 'unanswered'
    return answers[index] === pool[index]?.correct ? 'correct' : 'wrong'
  }
  if (index === currentIndex) return 'active'
  if (answers[index] !== undefined) return 'answered'
  return 'default'
}

function computeResults(pool, answers) {
  const perQuestion = pool.map((question, index) => {
    const selected = answers[index]
    const isSkipped = selected === undefined
    const isCorrect = !isSkipped && selected === question.correct
    return { question, selected, isSkipped, isCorrect }
  })
  const total = perQuestion.length
  const correct = perQuestion.filter((item) => item.isCorrect).length
  const skipped = perQuestion.filter((item) => item.isSkipped).length
  const wrong = total - correct - skipped
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0
  return { total, correct, wrong, skipped, accuracy, perQuestion }
}

function SubjectCard({ subject, selectedId, onSelect }) {
  const nestedCategories = getNestedCategories(subject)

  return (
    <button
      type="button"
      onClick={() => onSelect(subject)}
      className={`group card p-5 text-left transition-shadow border ${selectedId === subject.id ? 'border-brand shadow-xl' : 'border-line hover:border-brand/70'} rounded-3xl`}
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${subject.gradient} text-white grid place-items-center`}>
            <Icon name={subject.icon} size={20} />
          </div>
          <div>
            <p className="font-semibold text-ink">{subject.title}</p>
            <p className="text-xs text-muted">{subject.stats?.questions ?? 0} questions</p>
          </div>
        </div>
        {selectedId === subject.id ? <Badge tone="brand">Selected</Badge> : null}
      </div>
      <div className="text-sm text-muted">
        {subject.chapterIds === null
          ? 'All chapters included'
          : nestedCategories.length > 0
            ? `${nestedCategories.length} sub-category${nestedCategories.length === 1 ? '' : 'ies'}`
          : Array.isArray(subject.chapterIds)
            ? `${subject.chapterIds.length} chapter${subject.chapterIds.length === 1 ? '' : 's'}`
            : 'Custom set'}
      </div>
      {nestedCategories.length > 0 ? <div className="mt-4 text-xs font-semibold text-brand">Open category</div> : null}
    </button>
  )
}

function IntroScreen({ subject, questionCount, totalTimeSeconds, warning, onStart, onBack }) {
  const durationMinutes = getDurationMinutes(totalTimeSeconds)

  return (
    <div className="space-y-6">
      <div className="card p-4 sm:p-6">
        <div className="flex flex-col items-start justify-between gap-4 mb-6 sm:flex-row sm:items-center">
          <div>
            <h1 className="font-display text-2xl font-bold">Ready for your mock test?</h1>
            <p className="text-sm text-muted mt-1">Review the rules before you begin.</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
            <Icon name="clock" size={16} /> {durationMinutes} mins
          </span>
        </div>
        <div className="grid gap-3">
          <div className="rounded-3xl border border-line p-4 bg-surface">
            <p className="text-sm font-semibold text-ink">{subject.title}</p>
            <p className="text-sm text-muted">
              {questionCount} questions · {durationMinutes} minutes · {subject.chapterIds === null
                ? 'All chapters'
                : Array.isArray(subject.chapterIds)
                  ? `${subject.chapterIds.length} chapters`
                  : `${subject.children?.length ?? 0} sub-subjects`}
            </p>
          </div>
          <div className="space-y-3">
            {[
              '4 options per question; click the same answer again to deselect.',
              'Your pool is fixed once the test starts and will not reshuffle.',
              'Timer counts down and auto-submits at 0.',
              'Guests must sign in to unlock score and leaderboard placement.',
            ].map((rule) => (
              <div key={rule} className="flex items-start gap-3 rounded-3xl border border-line p-4">
                <span className="mt-1 text-brand">•</span>
                <p className="text-sm text-muted">{rule}</p>
              </div>
            ))}
          </div>
          {warning ? (
            <div className="rounded-3xl border border-coral/30 bg-coral/10 p-4 text-sm text-coral">{warning}</div>
          ) : null}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={onBack} className="rounded-3xl border border-line px-5 py-3 text-sm font-semibold text-ink">Change subject</button>
        <button type="button" onClick={onStart} className="rounded-3xl bg-brand px-5 py-3 text-sm font-semibold text-white">Start test</button>
      </div>
    </div>
  )
}

function TestScreen({
  screen,
  pool,
  subject,
  currentQuestion,
  currentIndex,
  total,
  answers,
  onSelectOption,
  onJumpToQuestion,
  onPrev,
  onNext,
  onSubmit,
  remainingSeconds,
}) {
  const options = Array.isArray(currentQuestion?.options) ? currentQuestion.options : []

  if (!currentQuestion) {
    return (
      <div className="space-y-6">
        <div className="card p-6">
          <h2 className="font-display text-xl font-bold">No questions available</h2>
          <p className="mt-2 text-sm text-muted">This test does not currently have any questions in its pool.</p>
        </div>
      </div>
    )
  }

  const selectedAnswer = answers[currentIndex]
  const answeredCount = Object.keys(answers).length

  return (
    <div className="space-y-6">
      <div className="card p-3 sm:p-2.5">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <div className="text-[11px] text-muted">Answered {answeredCount} / {total}</div>
          <div className="text-[11px] font-semibold text-ink">{formatTime(remainingSeconds)} remaining</div>
        </div>

        <div className="flex flex-wrap gap-2 pb-0.5">
          {Array.from({ length: total }).map((_, index) => {
            const state = getDotState({ screen, index, currentIndex, answers, pool })
            return (
              <button
                key={index}
                type="button"
                onClick={() => onJumpToQuestion(index)}
                className={`h-9 w-9 rounded-full text-[10px] font-semibold transition ${state === 'active' ? 'border-2 border-brand bg-brand/10 text-brand' : state === 'answered' ? 'bg-brand/20 text-brand' : 'bg-slate-100 text-muted hover:bg-slate-200'}`}
              >
                {index + 1}
              </button>
            )
          })}
        </div>
      </div>

      <div className="card p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
          <div>
            <p className="text-sm font-semibold text-muted">{subject.title}</p>
            <h2 className="font-display text-xl font-bold">Question {currentIndex + 1} of {total}</h2>
          </div>
          <div className="min-w-[108px] rounded-3xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold tabular-nums text-white">
            {formatTime(remainingSeconds)}
          </div>
        </div>

        <div className="mb-5">
          <p className="text-sm text-muted">Progress</p>
          <ProgressBar value={Math.round(((currentIndex + 1) / total) * 100)} color={subject.color} />
        </div>

        <div className="rounded-3xl border border-line p-4 bg-surface sm:p-6">
          <p className="text-sm text-muted mb-3">{currentQuestion.chapterId}</p>
          <p className="font-semibold text-ink text-lg">{currentQuestion.question}</p>
        </div>

        <div className="grid gap-3 mt-5">
          {options.map((option, index) => {
            const isSelected = selectedAnswer === index
            return (
              <button
                key={option}
                type="button"
                onClick={() => onSelectOption(index)}
                className={`rounded-3xl border px-4 py-4 text-left transition-all ${isSelected ? 'border-brand bg-brand/10' : 'border-line bg-white hover:border-brand/70'} text-sm text-ink`}
              >
                <div className="flex items-center gap-3">
                  <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full border ${isSelected ? 'border-brand bg-brand text-white' : 'border-line bg-slate-100 text-muted'}`}>{String.fromCharCode(65 + index)}</span>
                  <span>{option}</span>
                </div>
              </button>
            )
          })}
        </div>

        {options.length === 0 ? (
          <div className="mt-4 rounded-3xl border border-coral/30 bg-coral/10 p-4 text-sm text-coral">
            This question is missing options and cannot be answered.
          </div>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="rounded-3xl border border-line px-5 py-3 text-sm font-semibold text-ink disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={currentIndex === total - 1 ? onSubmit : onNext}
          className="rounded-3xl bg-brand px-5 py-3 text-sm font-semibold text-white"
        >
          {currentIndex === total - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  )
}

function LoginRequiredScreen({ onReset, loginHref }) {
  return (
    <div className="space-y-6">
      <div className="card p-6 text-center">
        <span className="inline-flex items-center justify-center rounded-full bg-brand/10 p-4 text-brand text-3xl">🔒</span>
        <h1 className="font-display text-2xl font-bold mt-5">Login required</h1>
        <p className="text-sm text-muted mt-2">Your answers have been saved, but your score is locked until you sign in.</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={loginHref} className="rounded-3xl bg-brand px-6 py-3 text-sm font-semibold text-white">Sign in to unlock</a>
          <button type="button" onClick={onReset} className="rounded-3xl border border-line px-6 py-3 text-sm font-semibold text-ink">Try another subject</button>
        </div>
      </div>
    </div>
  )
}

function FinishScreen({ subject, result, answers, pool, saveStatus, onReset, leaderboardHref }) {
  const saveLabel = saveStatus === 'saving' ? 'Saving…' : saveStatus === 'saved' ? 'Saved' : saveStatus === 'error' ? 'Save failed' : 'Not saved'
  const saveTone = saveStatusTone[saveStatus] || 'muted'
  const reviewLength = pool.length || result.perQuestion?.length || result.total || 0
  const subjectLabel = subject?.title || result.subjectLabel || 'Mock Test'

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-muted">{subjectLabel}</p>
            <h2 className="font-display text-3xl font-bold">{result.correct} / {result.total}</h2>
            <p className="text-muted mt-1">{result.accuracy}% accuracy</p>
          </div>
          <Badge tone={saveTone}>{saveLabel}</Badge>
        </div>

        <div className="grid grid-cols-1 gap-3 mt-6 text-center text-sm sm:grid-cols-3">
          <div className="rounded-3xl border border-line p-4">
            <p className="font-semibold text-ink">Correct</p>
            <p className="text-brand text-xl font-semibold">{result.correct}</p>
          </div>
          <div className="rounded-3xl border border-line p-4">
            <p className="font-semibold text-ink">Wrong</p>
            <p className="text-coral text-xl font-semibold">{result.wrong}</p>
          </div>
          <div className="rounded-3xl border border-line p-4">
            <p className="font-semibold text-ink">Skipped</p>
            <p className="text-muted text-xl font-semibold">{result.skipped}</p>
          </div>
        </div>
      </div>

      <div className="card p-5">
        <div className="grid gap-2 sm:grid-cols-3">
          {Array.from({ length: reviewLength }).map((_, index) => {
            const fallbackState = result.perQuestion?.[index]?.isSkipped
              ? 'unanswered'
              : result.perQuestion?.[index]?.isCorrect
                ? 'correct'
                : 'wrong'
            const state = pool.length > 0
              ? getDotState({ screen: SCREEN.FINISH, index, currentIndex: -1, answers, pool })
              : fallbackState
            const tone = state === 'unanswered' ? 'bg-slate-100 text-slate-500' : state === 'correct' ? 'bg-emerald-100 text-emerald-700' : 'bg-coral-100 text-coral-700'
            return (
              <div key={index} className={`${tone} rounded-3xl border border-line p-3 text-center text-xs font-semibold`}>Q{index + 1}</div>
            )
          })}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={onReset} className="rounded-3xl border border-line px-5 py-3 text-sm font-semibold text-ink">Try another subject</button>
        {saveStatus === 'saved' ? (
          <a href={leaderboardHref} className="rounded-3xl bg-brand px-5 py-3 text-sm font-semibold text-white">View leaderboard</a>
        ) : null}
      </div>
    </div>
  )
}

export default function MockTestsPage() {
  const { user } = useAuth()

  const [screen, setScreen] = useState(SCREEN.SUBJECT_SELECT)
  const [categoryTrail, setCategoryTrail] = useState([])
  const [subject, setSubject] = useState(null)
  const [pool, setPool] = useState([])
  const [questionWarning, setQuestionWarning] = useState('')
  const [answers, setAnswers] = useState({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [remainingSeconds, setRemainingSeconds] = useState(TOTAL_TIME_SECONDS)
  const [submissionResult, setSubmissionResult] = useState(null)
  const [saveStatus, setSaveStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')
  const timerRef = useRef(null)
  const selectionThrottleRef = useRef({ disabled: false, key: null })
  const pendingResultRef = useRef(null)

  useEffect(() => {
    const transferred = getTransferredMockResult()
    if (transferred) {
      clearTransferredMockResult()
      setSubmissionResult(transferred)
      setSaveStatus('saved')
      setScreen(SCREEN.FINISH)
    }
  }, [])

  useEffect(() => {
    if (!user) return
    const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams('')
    const claim = params.get('claim') === '1'
    if (!claim) return
    const pending = getMockPendingResult()
    if (!pending) return
    if (pendingResultRef.current?.claimed) return

    const claimResult = async () => {
      setSaveStatus('saving')
      try {
        const response = await fetch('/api/mock-leaderboard', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...pending,
            guestId: pending.guestId || undefined,
            email: user.email,
            name: user.name || user.email,
          }),
        })
        const data = await response.json()
        if (!response.ok || !data.success) {
          setSaveStatus('error')
          return
        }
        clearMockPendingResult()
        pendingResultRef.current = { ...pending, claimed: true }
        setSubmissionResult({ ...pending, score: pending.score, total: pending.total, accuracy: pending.accuracy, correct: pending.score, wrong: pending.total - pending.score - (pending.skipped ?? 0), skipped: pending.skipped ?? 0, perQuestion: pending.perQuestion ?? [] })
        setSaveStatus('saved')
        setScreen(SCREEN.FINISH)
      } catch (error) {
        setSaveStatus('error')
      }
    }

    void claimResult()
  }, [user])

  useEffect(() => {
    if (screen !== SCREEN.TEST) return undefined
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = window.setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          window.clearInterval(timerRef.current)
          timerRef.current = null
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [screen])

  const currentQuestion = pool[currentQuestionIndex]
  const questionCount = pool.length
  const activeCategories = categoryTrail.length > 0
    ? getNestedCategories(categoryTrail[categoryTrail.length - 1])
    : MOCK_TEST_SUBJECTS

  const resetMock = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current)
      timerRef.current = null
    }
    clearMockPendingResult()
    setScreen(SCREEN.SUBJECT_SELECT)
    setCategoryTrail([])
    setSubject(null)
    setPool([])
    setAnswers({})
    setCurrentQuestionIndex(0)
    setRemainingSeconds(TOTAL_TIME_SECONDS)
    setSubmissionResult(null)
    setSaveStatus('idle')
    setSubmitError('')
    setQuestionWarning('')
    pendingResultRef.current = null
  }

  const handleSelectSubject = (selected) => {
    if (!selected) return

    const nested = getNestedCategories(selected)
    if (nested.length > 0) {
      setCategoryTrail((prev) => [...prev, selected])
      return
    }

    const { pool: builtPool, warning } = buildQuestionPool(selected.id)
    setSubject(selected)
    setPool(builtPool)
    setQuestionWarning(warning)
    setAnswers({})
    setCurrentQuestionIndex(0)
    setRemainingSeconds(TOTAL_TIME_SECONDS)
    setSubmissionResult(null)
    setSaveStatus('idle')
    setSubmitError('')
    setScreen(SCREEN.INTRO)
  }

  const handleStart = () => {
    setScreen(SCREEN.TEST)
  }

  const handlePrev = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, questionCount - 1))
  }

  const handleJumpToQuestion = (index) => {
    setCurrentQuestionIndex(index)
  }

  const handleSelectOption = (optionIndex) => {
    if (!currentQuestion) return
    const key = `${currentQuestionIndex}-${optionIndex}`
    if (selectionThrottleRef.current.disabled && selectionThrottleRef.current.key === key) {
      return
    }

    selectionThrottleRef.current.disabled = true
    selectionThrottleRef.current.key = key
    window.setTimeout(() => {
      selectionThrottleRef.current.disabled = false
      selectionThrottleRef.current.key = null
    }, 275)

    setAnswers((prev) => {
      const next = { ...prev }
      if (next[currentQuestionIndex] === optionIndex) {
        delete next[currentQuestionIndex]
      } else {
        next[currentQuestionIndex] = optionIndex
      }
      return next
    })
  }

  const handleSubmit = async () => {
    if (!pool.length || saveStatus === 'saving') return
    const results = computeResults(pool, answers)
    const payloadBase = {
      subject: subject?.id,
      subjectLabel: subject?.title,
      score: results.correct,
      total: results.total,
      accuracy: results.accuracy,
      submittedAt: new Date().toISOString(),
      correct: results.correct,
      wrong: results.wrong,
      skipped: results.skipped,
      perQuestion: results.perQuestion,
    }

    if (user?.email) {
      setSaveStatus('saving')
      try {
        const response = await fetch('/api/mock-leaderboard', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...payloadBase,
            email: user.email,
            name: user.name || user.email,
          }),
        })
        const data = await response.json()
        if (!response.ok || !data.success) {
          setSaveStatus('error')
          setSubmitError(data?.error || 'Unable to save your result.')
          return
        }
        setSaveStatus('saved')
        setSubmissionResult(payloadBase)
        setScreen(SCREEN.FINISH)
      } catch (error) {
        setSaveStatus('error')
        setSubmitError('Unable to save your result.')
      }
      return
    }

    const guestId = getOrCreateMockGuestId()
    try {
      saveMockPendingResult({ ...payloadBase, guestId, name: 'Guest' })
      setSubmissionResult(payloadBase)
      setSaveStatus('idle')
      setScreen(SCREEN.LOGIN_REQUIRED)
    } catch (error) {
      setSaveStatus('error')
      setSubmitError('Unable to save your result locally.')
    }
  }

  const loginHref = `/login?next=${encodeURIComponent('/mock-tests?claim=1')}`
  const leaderboardHref = '/teacher?tab=leaderboard'

  const screenContent = useMemo(() => {
    switch (screen) {
      case SCREEN.INTRO:
        return (
          <IntroScreen
            subject={subject}
            questionCount={questionCount}
            totalTimeSeconds={TOTAL_TIME_SECONDS}
            warning={questionWarning}
            onStart={handleStart}
            onBack={() => setScreen(SCREEN.SUBJECT_SELECT)}
          />
        )
      case SCREEN.TEST:
        if (!currentQuestion) {
          return (
            <div className="card p-6">
              <h2 className="font-display text-xl font-bold">No questions available</h2>
              <p className="mt-2 text-sm text-muted">Go back and select another subject to continue.</p>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={resetMock}
                  className="rounded-3xl border border-line px-5 py-3 text-sm font-semibold text-ink"
                >
                  Choose another subject
                </button>
              </div>
            </div>
          )
        }
        return (
          <TestScreen
            screen={screen}
            pool={pool}
            subject={subject}
            currentQuestion={currentQuestion}
            currentIndex={currentQuestionIndex}
            total={questionCount}
            answers={answers}
            onSelectOption={handleSelectOption}
            onJumpToQuestion={handleJumpToQuestion}
            onPrev={handlePrev}
            onNext={handleNext}
            onSubmit={handleSubmit}
            remainingSeconds={remainingSeconds}
          />
        )
      case SCREEN.LOGIN_REQUIRED:
        return <LoginRequiredScreen onReset={resetMock} loginHref={loginHref} />
      case SCREEN.FINISH:
        return submissionResult ? (
          <FinishScreen
            subject={subject}
            result={submissionResult}
            answers={answers}
            pool={pool}
            saveStatus={saveStatus}
            onReset={resetMock}
            leaderboardHref={leaderboardHref}
          />
        ) : null
      default:
        return (
          <div className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {activeCategories.map((item) => (
                <SubjectCard
                  key={item.id}
                  subject={item}
                  selectedId={subject?.id}
                  onSelect={handleSelectSubject}
                />
              ))}
            </div>
          </div>
        )
    }
  }, [screen, subject, questionCount, questionWarning, currentQuestion, currentQuestionIndex, answers, remainingSeconds, submissionResult, saveStatus, pool, activeCategories])

  return (
    <AppShell>
      <div className="space-y-6 py-6">
        <h1 className="sr-only">Mock Tests</h1>
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm text-muted">Mock Test</p>
            <h2 className="font-display text-3xl font-bold">Practice with full mock tests</h2>
          </div>
          {screen === SCREEN.SUBJECT_SELECT ? (
            <div className="rounded-3xl border border-line px-4 py-3 text-sm text-muted">{DEFAULT_MOCK_TEST_SETTINGS.count} Questions · {getDurationMinutes(TOTAL_TIME_SECONDS)} Mins</div>
          ) : null}
        </header>

        {screen === SCREEN.SUBJECT_SELECT && categoryTrail.length > 0 ? (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-line px-4 py-3">
            <p className="text-sm text-muted">{categoryTrail.map((item) => item.title).join(' / ')}</p>
            <button
              type="button"
              onClick={() => setCategoryTrail((prev) => prev.slice(0, -1))}
              className="rounded-2xl border border-line px-3 py-1 text-sm font-semibold text-ink"
            >
              Back one level
            </button>
          </div>
        ) : null}

        {screen !== SCREEN.SUBJECT_SELECT && screen !== SCREEN.FINISH ? (
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700">Subject: {subject?.title ?? '—'}</div>
            <button type="button" onClick={resetMock} className="rounded-3xl border border-line px-4 py-3 text-sm font-semibold text-ink">Reset</button>
          </div>
        ) : null}

        {screenContent}

        {submitError ? (
          <div className="rounded-3xl border border-coral/30 bg-coral/10 p-4 text-sm text-coral">{submitError}</div>
        ) : null}
      </div>
    </AppShell>
  )
}
