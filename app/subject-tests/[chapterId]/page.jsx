"use client"

import { useEffect, useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import { SUBJECT_TESTS, SUBJECTS } from '@/lib/data'

function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5) }

function makeDummyQuestions(title, count) {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${title}-${i + 1}`,
    question: `${title} — Question ${i + 1}`,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: i % 4,
    explanation: 'This is a short explanation for the answer.'
  }))
}

export default function TestPage({ params }) {
  const { chapterId } = params
  const router = useRouter()

  const test = SUBJECT_TESTS.find(t => String(t.id) === String(chapterId))
  useEffect(() => { if (!test) router.replace('/subject-tests') }, [test, router])
  if (!test) return null

  const subjMeta = SUBJECTS.find(s => s.name === test.subject) || {}
  const themeColor = subjMeta.color || '#2563eb'

  const TOTAL_TIME = test.duration * 60
  const [screen, setScreen] = useState('start')
  const [questions, setQuestions] = useState([])
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME)
  const timerRef = useRef(null)
  const testActiveRef = useRef(false)

  useEffect(() => { setQuestions(shuffle(makeDummyQuestions(test.title, test.questions))) }, [test])

  useEffect(() => { testActiveRef.current = screen === 'test' }, [screen])

  useEffect(() => {
    function onVis() { if (document.hidden && testActiveRef.current) { clearInterval(timerRef.current); router.replace('/dashboard?reason=tab_switch') } }
    window.addEventListener('blur', onVis)
    document.addEventListener('visibilitychange', onVis)
    return () => { window.removeEventListener('blur', onVis); document.removeEventListener('visibilitychange', onVis) }
  }, [router])

  useEffect(() => {
    if (screen !== 'test') return
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timerRef.current); setScreen('finish'); return 0 }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [screen])

  function startTest() {
    setAnswers({}); setCurrentQ(0); setTimeLeft(TOTAL_TIME); setScreen('test')
  }

  function handleAnswer(idx) {
    if (answers[currentQ] !== undefined) return
    setAnswers(prev => ({ ...prev, [currentQ]: idx }))
  }

  const q = questions[currentQ]
  const selected = answers[currentQ]

  const mins = Math.floor(timeLeft / 60)
  const secs = timeLeft % 60

  const total = questions.length
  const score = questions.reduce((acc, qq, i) => acc + (answers[i] === qq.correct ? 1 : 0), 0)

  return (
    <AppShell>
      <div className="min-h-screen flex items-center justify-center p-6">
        {screen === 'start' && (
          <div className="card p-6 max-w-lg w-full" style={{ borderLeft: `6px solid ${themeColor}` }}>
            <h2 className="font-bold text-xl mb-2">{test.title}</h2>
            <p className="text-sm text-muted mb-4">{test.subject} · {test.questions} questions · {test.duration} minutes</p>
            <p className="text-sm mb-6">You'll have {test.duration} minutes. Once started, timer can't be paused.</p>
            <div className="flex gap-3">
              <button onClick={() => router.push('/subject-tests')} className="flex-1 border rounded-lg py-2">Cancel</button>
              <button onClick={startTest} style={{ background: themeColor }} className="flex-1 text-white rounded-lg py-2">Start Test</button>
            </div>
          </div>
        )}

        {screen === 'test' && q && (
          <div className="max-w-2xl w-full">
            <div className="flex items-center justify-between mb-4">
              <button onClick={() => router.push('/subject-tests')} className="border rounded-lg px-3 py-1">Exit</button>
              <div className="font-semibold">{test.title}</div>
              <div className="font-mono">{String(mins).padStart(2,'0')}:{String(secs).padStart(2,'0')}</div>
            </div>
            <div className="card p-5">
              <div className="text-sm text-muted mb-2">Question {currentQ + 1} of {total}</div>
              <div className="font-bold text-lg mb-4">{q.question}</div>
              <div className="flex flex-col gap-3">
                {q.options.map((opt, idx) => {
                  const cls = `p-3 rounded-lg border ${selected !== undefined ? (idx === q.correct ? 'bg-green-50 border-green-300' : (idx === selected ? 'bg-red-50 border-red-300' : 'opacity-60')) : 'hover:bg-gray-50'}`
                  return (
                    <button key={idx} className={cls} onClick={() => handleAnswer(idx)} disabled={selected !== undefined}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white border flex items-center justify-center">{['A','B','C','D'][idx]}</div>
                        <div>{opt}</div>
                      </div>
                    </button>
                  )
                })}
              </div>
              <div className="flex items-center justify-between mt-4">
                <button onClick={() => setCurrentQ(c => Math.max(0, c - 1))} disabled={currentQ === 0} className="px-3 py-2 border rounded">Previous</button>
                {currentQ === total - 1 ? (
                  <button onClick={() => setScreen('finish')} className="px-4 py-2 rounded text-white" style={{ background: themeColor }}>Submit</button>
                ) : (
                  <button onClick={() => setCurrentQ(c => Math.min(total - 1, c + 1))} className="px-4 py-2 border rounded">Next</button>
                )}
              </div>
            </div>
          </div>
        )}

        {screen === 'finish' && (
          <div className="card p-6 max-w-md w-full text-center">
            <h3 className="text-2xl font-bold mb-2">Result</h3>
            <div className="text-4xl font-extrabold mb-2" style={{ color: themeColor }}>{score} / {total}</div>
            <p className="text-sm text-muted mb-4">{Math.round((score / Math.max(1, total)) * 100)}%</p>
            <div className="flex gap-3">
              <button onClick={() => router.push('/subject-tests')} className="flex-1 border rounded-lg py-2">Back</button>
              <button onClick={() => { setQuestions(shuffle(makeDummyQuestions(test.title, test.questions))); setAnswers({}); setCurrentQ(0); setTimeLeft(TOTAL_TIME); setScreen('start') }} className="flex-1 rounded-lg py-2" style={{ background: themeColor, color: '#fff' }}>Retry</button>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  )
}
