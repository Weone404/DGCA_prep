'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

function hasUncertainty(question) {
  const text = `${question.question || ''} ${question.answer || ''} ${question.explanation || ''}`.toLowerCase()
  return /\b(ambiguous|inconsistent|uncertain|possibly|maybe|none seem|not sure|assume|incorrect)\b/.test(text)
}

function sourceDetails(question) {
  return [question.source_subject, question.source_paper].filter(Boolean).join(' · ')
}

function Source({ question }) {
  const details = sourceDetails(question)
  if (!details && !question.source_url) return null

  return (
    <details className="mt-4 rounded-lg border border-line bg-canvas px-3 py-2 text-sm">
      <summary className="cursor-pointer font-semibold text-ink">Source</summary>
      <div className="mt-2 text-muted">
        {details ? <p>{details}</p> : null}
        {question.source_url ? (
          <a className="break-all text-brand underline" href={question.source_url} target="_blank" rel="noreferrer">
            {question.source_url}
          </a>
        ) : null}
      </div>
    </details>
  )
}

function Feedback({ question, selected }) {
  if (selected === undefined) return null
  const isCorrect = String(question.options[selected]) === String(question.answer)

  return (
    <div className={`mt-4 rounded-lg border p-3 text-sm ${isCorrect ? 'border-green-200 bg-green-50 text-green-800' : 'border-red-200 bg-red-50 text-red-800'}`}>
      <p className="font-bold">{isCorrect ? '✓ Correct' : '✕ Incorrect'}</p>
      {!isCorrect ? <p className="mt-1"><strong>Correct Answer:</strong> {question.answer}</p> : null}
      {question.explanation ? <p className="mt-2"><strong>Explanation:</strong> {question.explanation}</p> : null}
      {hasUncertainty(question) ? (
        <p className="mt-2 rounded border border-amber-200 bg-amber-50 p-2 text-amber-800">
          ⚠ Review Question: This question or answer data may contain an inconsistency. Please verify with the official source.
        </p>
      ) : null}
      <Source question={question} />
    </div>
  )
}

export default function ImportantQuestionsSection({ subject, dedicated = false }) {
  const router = useRouter()
  const [screen, setScreen] = useState('card')
  const [availableCount, setAvailableCount] = useState(null)
  const [questions, setQuestions] = useState([])
  const [testQuestions, setTestQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [current, setCurrent] = useState(0)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setScreen('card')
    setQuestions([])
    setTestQuestions([])
    setAnswers({})
    setCurrent(0)
    setSearch('')
    setError('')
    setAvailableCount(null)

    if (!subject) return undefined
    const controller = new AbortController()
    fetch(`/api/important-questions/${encodeURIComponent(subject)}?metadata=1`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('metadata request failed')
        return response.json()
      })
      .then((payload) => setAvailableCount(Number(payload.total) || 0))
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') setError('Unable to load Important Questions. Please try again.')
      })
    return () => controller.abort()
  }, [subject])

  async function startTest() {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(`/api/important-questions/${encodeURIComponent(subject)}`)
      if (!response.ok) throw new Error('question request failed')
      const payload = await response.json()
      const pool = Array.isArray(payload.questions) ? payload.questions : []
      setQuestions(pool)
      setTestQuestions(pool)
      setAnswers({})
      setCurrent(0)
      setScreen(pool.length ? 'test' : 'empty')
    } catch {
      setError('Unable to load Important Questions. Please try again.')
      setScreen('card')
    } finally {
      setLoading(false)
    }
  }

  const score = useMemo(
    () => testQuestions.reduce((total, question, index) => total + (String(question.options[answers[index]]) === String(question.answer) ? 1 : 0), 0),
    [testQuestions, answers]
  )
  const question = testQuestions[current]
  const filteredQuestions = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return questions
    return questions.filter((item) => `${item.question} ${item.source_paper || ''} ${item.source_subject || ''}`.toLowerCase().includes(term))
  }, [questions, search])

  function restart() {
    setTestQuestions(questions)
    setAnswers({})
    setCurrent(0)
    setScreen('test')
  }

  if (screen === 'card' && !dedicated) {
    return (
      <section className="card mb-6 border-l-4 border-brand p-5" aria-labelledby="important-questions-title">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand">Practice Mode</p>
            <h2 id="important-questions-title" className="font-display text-xl font-bold text-ink">⭐ Important Questions</h2>
            <p className="mt-1 max-w-2xl text-sm text-muted">Practice frequently asked DGCA questions from previous papers and question banks.</p>
            <p className="mt-3 text-sm font-semibold text-ink">{availableCount === null ? 'Loading question count...' : `${availableCount} Important Questions`} <span className="font-normal text-muted">· {subject}</span></p>
          </div>
          <button type="button" onClick={() => router.push(`/subject-tests/important-questions/${encodeURIComponent(subject.toLowerCase().replace(/\s+/g, '-'))}`)} disabled={loading || availableCount === 0} className="w-full shrink-0 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto">
            {loading ? 'Loading...' : 'Start Important Questions'}
          </button>
        </div>
        {error ? <p className="mt-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}
        {availableCount === 0 ? <p className="mt-3 text-sm text-muted">No Important Questions are currently available for this subject.</p> : null}
      </section>
    )
  }

  if (screen === 'card' && dedicated) {
    return (
      <section className="card mx-auto w-full max-w-xl p-6 text-center">
        <p className="mb-2 text-2xl">⭐</p>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">Important Questions Test</p>
        <h1 className="mt-2 font-display text-2xl font-bold text-ink">{subject}</h1>
        <p className="mt-3 text-sm text-muted">Practice important questions from the available {subject} question bank.</p>
        <div className="my-6 grid grid-cols-2 gap-3 text-left text-sm">
          <div className="rounded-lg bg-canvas p-3"><span className="block text-muted">Total Questions</span><strong className="text-ink">{availableCount ?? 'Loading...'}</strong></div>
          <div className="rounded-lg bg-canvas p-3"><span className="block text-muted">Question Type</span><strong className="text-ink">Multiple Choice</strong></div>
        </div>
        {error ? <p className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-left text-sm text-red-700">{error}</p> : null}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={() => router.push('/subject-tests')} className="order-2 flex-1 rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-ink sm:order-1">Back to Subject</button>
          <button type="button" onClick={startTest} disabled={loading || availableCount === 0} className="order-1 flex-1 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-400 sm:order-2">{loading ? 'Loading...' : 'Start Test'}</button>
        </div>
      </section>
    )
  }

  if (screen === 'empty') {
    return <section className="card mb-6 p-6 text-center text-sm text-muted">No Important Questions are currently available for this subject.</section>
  }

  if (screen === 'result') {
    return (
      <section className="card mb-6 p-6 text-center">
        <h2 className="font-display text-2xl font-bold text-ink">Important Questions Complete</h2>
        <p className="mt-4 text-4xl font-extrabold text-brand">{score} / {testQuestions.length}</p>
        <p className="mt-1 text-muted">{Math.round((score / Math.max(1, testQuestions.length)) * 100)}%</p>
        <div className="mx-auto mt-5 grid max-w-sm grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg bg-green-50 p-3 text-green-800"><strong>{score}</strong><br />Correct</div>
          <div className="rounded-lg bg-red-50 p-3 text-red-800"><strong>{testQuestions.length - score}</strong><br />Incorrect</div>
        </div>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={() => setScreen('review')} className="rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-ink">Review Answers</button>
          <button type="button" onClick={restart} className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white">Retake Test</button>
        </div>
      </section>
    )
  }

  if (screen === 'review') {
    return (
      <section className="card mb-6 p-5">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-xl font-bold text-ink">Review Answers</h2>
          <button type="button" onClick={() => setScreen('result')} className="rounded-lg border border-line px-3 py-2 text-sm font-semibold text-ink">Back to Result</button>
        </div>
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search important questions..." className="mb-5 w-full rounded-lg border border-line bg-transparent px-3 py-2 text-sm outline-none" />
        <div className="space-y-5">
          {testQuestions.map((item, index) => ({ item, index })).filter(({ item }) => filteredQuestions.includes(item)).map(({ item, index }) => (
            <article key={`${item.id || 'question'}-${index}`} className="border-b border-line pb-5 last:border-0">
              <p className="text-xs font-semibold text-muted">Question {index + 1}</p>
              <h3 className="mt-1 font-semibold text-ink">{item.question}</h3>
              <p className="mt-2 text-sm text-muted">Your Answer: <span className="text-ink">{answers[index] === undefined ? 'Not answered' : item.options[answers[index]]}</span></p>
              <p className="text-sm text-muted">Correct Answer: <span className="text-ink">{item.answer}</span></p>
              <Feedback question={item} selected={answers[index]} />
            </article>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="card mb-6 p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-muted">Important Questions · {subject}</p>
          <h2 className="font-display text-xl font-bold text-ink">Question {current + 1} of {testQuestions.length}</h2>
        </div>
        <button type="button" onClick={() => router.push('/subject-tests')} className="rounded-lg border border-line px-3 py-2 text-sm text-ink">Exit</button>
      </div>
      <div className="mb-5 flex flex-wrap gap-2">
        {testQuestions.map((item, index) => (
          <button key={`${item.id || 'question'}-${index}`} type="button" onClick={() => setCurrent(index)} className={`h-8 w-8 rounded-lg text-xs font-semibold ${index === current ? 'bg-brand text-white' : answers[index] === undefined ? 'border border-line text-muted' : 'bg-brand-light text-brand-dark'}`} aria-label={`Go to question ${index + 1}`}>{index + 1}</button>
        ))}
      </div>
      <h3 className="break-words text-lg font-bold leading-relaxed text-ink">{question.question}</h3>
      <div className="mt-4 flex flex-col gap-3">
        {question.options.map((option, index) => {
          const selected = answers[current]
          const isSelected = selected === index
          const isCorrect = String(option) === String(question.answer)
          const style = selected === undefined ? 'border-line hover:border-brand hover:bg-canvas' : isCorrect ? 'border-green-300 bg-green-50' : isSelected ? 'border-red-300 bg-red-50' : 'border-line opacity-60'
          return <button key={`${question.id || 'question'}-${index}`} type="button" disabled={selected !== undefined} onClick={() => setAnswers((previous) => ({ ...previous, [current]: index }))} className={`flex min-h-12 w-full items-start gap-3 rounded-xl border p-3 text-left text-sm text-ink ${style}`}><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current text-xs font-bold">{String.fromCharCode(65 + index)}</span><span className="min-w-0 break-words">{option}</span></button>
        })}
      </div>
      <Feedback question={question} selected={answers[current]} />
      <div className="mt-5 flex justify-between gap-3">
        <button type="button" disabled={current === 0} onClick={() => setCurrent((value) => Math.max(0, value - 1))} className="rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-ink disabled:opacity-40">Previous</button>
        {current === testQuestions.length - 1 ? (
          <button type="button" onClick={() => setScreen('result')} className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white">Complete Test</button>
        ) : (
          <button type="button" onClick={() => setCurrent((value) => Math.min(testQuestions.length - 1, value + 1))} className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white">Next</button>
        )}
      </div>
    </section>
  )
}
