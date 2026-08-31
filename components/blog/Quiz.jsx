'use client'

import { useState } from 'react'

export default function Quiz({ questions }) {
  const [chosen, setChosen] = useState({})

  const answered = Object.keys(chosen).length
  const correct = questions.filter((item, index) => chosen[index] === item.answer).length

  return (
    <section id="practice" aria-labelledby="practice-heading" className="scroll-mt-24 border-t border-line py-8 dark:border-slate-700">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 id="practice-heading" className="font-display text-2xl font-semibold text-ink">Check your understanding</h2>
        <p className="text-sm text-muted" role="status" aria-live="polite">
          {answered > 0 ? `${correct} of ${answered} correct` : `${questions.length} questions`}
        </p>
      </div>

      <ol className="mt-5 space-y-5">
        {questions.map((item, index) => {
          const picked = chosen[index]
          const isAnswered = picked !== undefined

          return (
            <li key={item.question} className="rounded-xl2 border border-line bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
              <p className="font-semibold text-ink">{index + 1}. {item.question}</p>

              <div className="mt-4 grid gap-2" role="group" aria-label={`Options for question ${index + 1}`}>
                {item.options.map((option, optionIndex) => {
                  const isCorrect = optionIndex === item.answer
                  const isPicked = picked === optionIndex

                  let tone = 'border-line text-ink hover:border-brand dark:border-slate-700 dark:text-slate-100'
                  if (isAnswered && isCorrect) tone = 'border-brand bg-brand-light font-semibold text-ink dark:bg-slate-800 dark:text-slate-100'
                  else if (isAnswered && isPicked) tone = 'border-coral bg-coral/10 text-ink dark:text-slate-100'
                  else if (isAnswered) tone = 'border-line text-muted dark:border-slate-700'

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => setChosen((prev) => ({ ...prev, [index]: optionIndex }))}
                      aria-pressed={isPicked}
                      className={`rounded-xl border px-4 py-3 text-left text-sm leading-6 transition-colors disabled:cursor-default ${tone}`}
                    >
                      <span className="mr-2 font-semibold">{'ABCD'[optionIndex]}.</span>
                      {option}
                      {isAnswered && isCorrect && <span className="ml-2 text-xs font-bold uppercase tracking-wide text-brand-dark">Correct</span>}
                    </button>
                  )
                })}
              </div>

              <p hidden={!isAnswered} className="mt-4 rounded-xl border-l-4 border-brand bg-brand-light px-4 py-3 text-sm leading-6 text-ink dark:bg-slate-800 dark:text-slate-200">
                {item.explanation}
              </p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
