'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { evaluate } from 'mathjs'
import { Calculator, GripHorizontal, History, RotateCcw, X } from 'lucide-react'

const TRIGGER_SIZE = 56
const PANEL_WIDTH = 320
const PANEL_HEIGHT_ESTIMATE = 520
const EDGE_GAP = 12
const BUTTON_POSITION_KEY = 'floating_calc_button_pos_v1'
const PANEL_POSITION_KEY = 'floating_calc_panel_pos_v1'

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function formatNumber(value) {
  const asNumber = Number(value)
  if (!Number.isFinite(asNumber)) return String(value)
  if (Math.abs(asNumber) > 1e12 || (Math.abs(asNumber) > 0 && Math.abs(asNumber) < 1e-8)) {
    return asNumber.toExponential(8)
  }
  return Number(asNumber.toPrecision(12)).toString()
}

function evalScope() {
  return {
    sind: (x) => Math.sin((Number(x) * Math.PI) / 180),
    cosd: (x) => Math.cos((Number(x) * Math.PI) / 180),
    tand: (x) => Math.tan((Number(x) * Math.PI) / 180),
    asind: (x) => (Math.asin(Number(x)) * 180) / Math.PI,
    acosd: (x) => (Math.acos(Number(x)) * 180) / Math.PI,
    atand: (x) => (Math.atan(Number(x)) * 180) / Math.PI,
    pow10: (x) => 10 ** Number(x),
  }
}

function preprocessExpression(rawExpression, isDegMode) {
  let expr = rawExpression

  // Convert plain percent into a decimal percentage.
  expr = expr.replace(/(\d+(?:\.\d+)?)%/g, '($1/100)')
  expr = expr.replace(/\)%/g, ')/100')

  if (isDegMode) {
    expr = expr
      .replace(/\bsin\(/g, 'sind(')
      .replace(/\bcos\(/g, 'cosd(')
      .replace(/\btan\(/g, 'tand(')
      .replace(/\basin\(/g, 'asind(')
      .replace(/\bacos\(/g, 'acosd(')
      .replace(/\batan\(/g, 'atand(')
  }

  return expr
}

function prettyExpression(rawExpression) {
  return rawExpression
    .replace(/\*/g, '×')
    .replace(/\//g, '÷')
    .replace(/-/g, '−')
}

function getViewport() {
  if (typeof window === 'undefined') {
    return { width: 1280, height: 800 }
  }
  return { width: window.innerWidth, height: window.innerHeight }
}

function buildAnchoredPanelPosition(buttonPos, panelWidth) {
  const { width: vw, height: vh } = getViewport()
  let x = buttonPos.x - panelWidth + TRIGGER_SIZE
  let y = buttonPos.y - 8

  if (x < EDGE_GAP) x = buttonPos.x + TRIGGER_SIZE + 8
  if (x + panelWidth > vw - EDGE_GAP) x = vw - panelWidth - EDGE_GAP

  if (y + PANEL_HEIGHT_ESTIMATE > vh - EDGE_GAP) {
    y = buttonPos.y - PANEL_HEIGHT_ESTIMATE + TRIGGER_SIZE
  }
  if (y < EDGE_GAP) y = EDGE_GAP

  return {
    x: clamp(x, EDGE_GAP, vw - panelWidth - EDGE_GAP),
    y: clamp(y, EDGE_GAP, Math.max(EDGE_GAP, vh - 180)),
  }
}

export default function FloatingCalculator() {
  const [isOpen, setIsOpen] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [isShift, setIsShift] = useState(false)
  const [isDegMode, setIsDegMode] = useState(true)
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('0')
  const [lastAnswer, setLastAnswer] = useState('0')
  const [memory, setMemory] = useState(0)
  const [history, setHistory] = useState([])
  const [hasError, setHasError] = useState(false)
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 })
  const [panelPos, setPanelPos] = useState(null)
  const [hasHydratedPos, setHasHydratedPos] = useState(false)

  const panelRef = useRef(null)
  const dragStateRef = useRef(null)
  const justDraggedRef = useRef(false)

  const panelWidth = useMemo(() => {
    const { width } = getViewport()
    return Math.min(PANEL_WIDTH, Math.max(260, width - EDGE_GAP * 2))
  }, [hasHydratedPos, isOpen])

  useEffect(() => {
    const { width, height } = getViewport()
    const fallback = {
      x: Math.max(EDGE_GAP, width - TRIGGER_SIZE - 24),
      y: Math.max(EDGE_GAP, height - TRIGGER_SIZE - 24),
    }

    try {
      const storedButton = window.localStorage.getItem(BUTTON_POSITION_KEY)
      const parsedButton = storedButton ? JSON.parse(storedButton) : null
      if (parsedButton && Number.isFinite(parsedButton.x) && Number.isFinite(parsedButton.y)) {
        setButtonPos({
          x: clamp(parsedButton.x, EDGE_GAP, width - TRIGGER_SIZE - EDGE_GAP),
          y: clamp(parsedButton.y, EDGE_GAP, height - TRIGGER_SIZE - EDGE_GAP),
        })
      } else {
        setButtonPos(fallback)
      }

      const storedPanel = window.localStorage.getItem(PANEL_POSITION_KEY)
      const parsedPanel = storedPanel ? JSON.parse(storedPanel) : null
      if (parsedPanel && Number.isFinite(parsedPanel.x) && Number.isFinite(parsedPanel.y)) {
        setPanelPos(parsedPanel)
      }
    } catch {
      setButtonPos(fallback)
    } finally {
      setHasHydratedPos(true)
    }
  }, [])

  useEffect(() => {
    if (!hasHydratedPos) return
    window.localStorage.setItem(BUTTON_POSITION_KEY, JSON.stringify(buttonPos))
  }, [buttonPos, hasHydratedPos])

  useEffect(() => {
    if (!hasHydratedPos || !panelPos) return
    window.localStorage.setItem(PANEL_POSITION_KEY, JSON.stringify(panelPos))
  }, [panelPos, hasHydratedPos])

  const resolvePanelPosition = useMemo(() => {
    if (panelPos) {
      const { width, height } = getViewport()
      return {
        x: clamp(panelPos.x, EDGE_GAP, width - panelWidth - EDGE_GAP),
        y: clamp(panelPos.y, EDGE_GAP, Math.max(EDGE_GAP, height - 180)),
      }
    }
    return buildAnchoredPanelPosition(buttonPos, panelWidth)
  }, [buttonPos, panelPos, panelWidth, hasHydratedPos, isOpen])

  const evaluateExpression = useCallback(
    (rawExpression) => {
      const cleaned = preprocessExpression(rawExpression, isDegMode)
      const value = evaluate(cleaned, evalScope())
      return formatNumber(value)
    },
    [isDegMode],
  )

  const setExpressionAndPreview = useCallback(
    (nextExpression) => {
      setExpression(nextExpression)
      if (!nextExpression.trim()) {
        setResult('0')
        setHasError(false)
        return
      }
      try {
        const preview = evaluateExpression(nextExpression)
        setResult(preview)
        setHasError(false)
      } catch {
        // Ignore preview errors while typing; full evaluation happens on '='.
      }
    },
    [evaluateExpression],
  )

  const appendToken = useCallback(
    (token) => {
      setHasError(false)
      setExpression((prev) => {
        const current = hasError ? '' : prev
        const next = `${current}${token}`
        try {
          const preview = evaluateExpression(next)
          setResult(preview)
        } catch {
          // Keep prior result while expression is incomplete.
        }
        return next
      })
    },
    [evaluateExpression, hasError],
  )

  const clearAll = useCallback(() => {
    setExpression('')
    setResult('0')
    setHasError(false)
  }, [])

  const runEvaluate = useCallback(() => {
    if (!expression.trim()) return
    try {
      const value = evaluateExpression(expression)
      setResult(value)
      setLastAnswer(value)
      setHistory((prev) => [{ expression, result: value, id: Date.now() }, ...prev].slice(0, 10))
      setExpression('')
      setHasError(false)
    } catch {
      setResult('Error')
      setHasError(true)
    }
  }, [expression, evaluateExpression])

  const backspace = useCallback(() => {
    if (!expression) return
    setExpressionAndPreview(expression.slice(0, -1))
  }, [expression, setExpressionAndPreview])

  const currentNumericValue = useMemo(() => {
    if (hasError) return 0
    const parsed = Number(result)
    return Number.isFinite(parsed) ? parsed : 0
  }, [hasError, result])

  const pendingDecimal = useMemo(() => /(?:^|[+\-*/^(])\d*\.$/.test(expression), [expression])

  useEffect(() => {
    function onPointerMove(event) {
      const drag = dragStateRef.current
      if (!drag) return
      const { width, height } = getViewport()

      const dx = event.clientX - drag.originX
      const dy = event.clientY - drag.originY
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        justDraggedRef.current = true
      }

      if (drag.kind === 'button') {
        setButtonPos({
          x: clamp(drag.startX + dx, EDGE_GAP, width - TRIGGER_SIZE - EDGE_GAP),
          y: clamp(drag.startY + dy, EDGE_GAP, height - TRIGGER_SIZE - EDGE_GAP),
        })
      }

      if (drag.kind === 'panel') {
        setPanelPos({
          x: clamp(drag.startX + dx, EDGE_GAP, width - panelWidth - EDGE_GAP),
          y: clamp(drag.startY + dy, EDGE_GAP, Math.max(EDGE_GAP, height - 180)),
        })
      }
    }

    function onPointerUp() {
      dragStateRef.current = null
      window.setTimeout(() => {
        justDraggedRef.current = false
      }, 0)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [panelWidth])

  const startDrag = useCallback((kind, event) => {
    const sourcePos = kind === 'button' ? buttonPos : resolvePanelPosition
    dragStateRef.current = {
      kind,
      originX: event.clientX,
      originY: event.clientY,
      startX: sourcePos.x,
      startY: sourcePos.y,
    }
  }, [buttonPos, resolvePanelPosition])

  useEffect(() => {
    if (!isOpen) return

    const panel = panelRef.current
    panel?.focus()

    function onKeyDown(event) {
      if (!isOpen) return

      const target = event.target
      const isEditable =
        target instanceof HTMLElement &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)

      if (event.key === 'Escape') {
        event.preventDefault()
        setIsOpen(false)
        return
      }

      if (event.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll(
          'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])',
        )
        if (!focusables.length) return

        const first = focusables[0]
        const last = focusables[focusables.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
        return
      }

      if (isEditable && panelRef.current && !panelRef.current.contains(target)) return

      const key = event.key
      if (/^[0-9]$/.test(key)) {
        event.preventDefault()
        appendToken(key)
        return
      }

      const keyMap = {
        '+': '+',
        '-': '-',
        '*': '*',
        '/': '/',
        '^': '^',
        '(': '(',
        ')': ')',
        '.': '.',
        '%': '%',
      }

      if (keyMap[key]) {
        event.preventDefault()
        appendToken(keyMap[key])
        return
      }

      if (key === 'Enter' || key === '=') {
        event.preventDefault()
        runEvaluate()
        return
      }

      if (key === 'Backspace') {
        event.preventDefault()
        backspace()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [appendToken, backspace, isOpen, runEvaluate])

  const trigRow = isShift
    ? [
        { label: 'sin⁻1', aria: 'inverse sine', onPress: () => appendToken('asin(') },
        { label: 'cos⁻1', aria: 'inverse cosine', onPress: () => appendToken('acos(') },
        { label: 'tan⁻1', aria: 'inverse tangent', onPress: () => appendToken('atan(') },
        { label: '10ˣ', aria: 'ten to power x', onPress: () => appendToken('pow10(') },
        { label: 'ln', aria: 'natural log', onPress: () => appendToken('ln(') },
        { label: '1/x', aria: 'reciprocal', onPress: () => appendToken('1/(') },
      ]
    : [
        { label: 'sin', aria: 'sine', onPress: () => appendToken('sin(') },
        { label: 'cos', aria: 'cosine', onPress: () => appendToken('cos(') },
        { label: 'tan', aria: 'tangent', onPress: () => appendToken('tan(') },
        { label: 'log', aria: 'base ten log', onPress: () => appendToken('log10(') },
        { label: 'ln', aria: 'natural log', onPress: () => appendToken('ln(') },
        { label: '1/x', aria: 'reciprocal', onPress: () => appendToken('1/(') },
      ]

  if (!hasHydratedPos) return null

  return (
    <>
      <button
        type="button"
        aria-label="Toggle scientific calculator"
        onPointerDown={(event) => startDrag('button', event)}
        onClick={() => {
          if (justDraggedRef.current) return
          setIsOpen((prev) => !prev)
        }}
        className="fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand to-violet text-white shadow-xl transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
        style={{ left: buttonPos.x, top: buttonPos.y }}
      >
        <Calculator className="h-6 w-6" />
      </button>

      <div
        className={`fixed z-50 origin-bottom-right rounded-2xl border border-line bg-white/95 p-3 text-ink shadow-2xl backdrop-blur transition-all duration-200 dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-100 ${
          isOpen ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
        }`}
        role="dialog"
        aria-label="Scientific Calculator"
        aria-modal="true"
        tabIndex={-1}
        ref={panelRef}
        style={{
          width: `${panelWidth}px`,
          left: resolvePanelPosition.x,
          top: resolvePanelPosition.y,
          maxWidth: `calc(100vw - ${EDGE_GAP * 2}px)`,
        }}
      >
        <div className="mb-3 flex items-center justify-between gap-2 rounded-xl bg-canvas px-3 py-2 dark:bg-slate-800/70">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Drag calculator panel"
              onPointerDown={(event) => startDrag('panel', event)}
              className="rounded-md border border-line bg-white p-1.5 text-muted transition-colors hover:bg-brand-light hover:text-brand dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
            >
              <GripHorizontal className="h-3.5 w-3.5" />
            </button>
            <p className="text-sm font-semibold text-ink dark:text-slate-100">Scientific Calculator</p>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Toggle calculation history"
              onClick={() => setShowHistory((prev) => !prev)}
              className={`rounded-lg p-1.5 transition-colors ${showHistory ? 'bg-brand-light text-brand dark:bg-brand/30 dark:text-brand-light' : 'text-muted hover:bg-brand-light hover:text-brand dark:text-slate-300 dark:hover:bg-slate-700'}`}
            >
              <History className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Close calculator"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-muted transition-colors hover:bg-brand-light hover:text-brand dark:text-slate-300 dark:hover:bg-slate-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mb-3 rounded-xl border border-line bg-canvas px-3 py-2 dark:border-slate-700 dark:bg-slate-950">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-brand-light px-2 py-0.5 text-[10px] font-medium text-brand dark:bg-brand/30 dark:text-brand-light">
              {isDegMode ? 'DEG' : 'RAD'}
            </span>
            {pendingDecimal ? (
              <span className="rounded-full bg-coral/15 px-2 py-0.5 text-[10px] font-medium text-coral">DEC</span>
            ) : null}
          </div>
          <div className="max-h-10 overflow-x-auto text-right text-xs text-muted dark:text-slate-400">{expression ? prettyExpression(expression) : ' '}</div>
          <div className="max-h-12 overflow-x-auto text-right text-3xl font-semibold tracking-tight text-ink dark:text-white">
            {hasError ? 'Error' : prettyExpression(expression || result)}
          </div>
        </div>

        {showHistory ? (
          <div className="mb-3 max-h-40 space-y-1 overflow-y-auto rounded-xl border border-line bg-canvas p-2 dark:border-slate-700 dark:bg-slate-950">
            {!history.length ? (
              <p className="px-2 py-3 text-center text-xs text-muted dark:text-slate-400">No history yet</p>
            ) : (
              history.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Load history expression ${item.expression}`}
                  onClick={() => {
                    setExpressionAndPreview(item.expression)
                    setHasError(false)
                    setShowHistory(false)
                  }}
                  className="w-full rounded-lg border border-line bg-white px-2 py-1.5 text-left text-xs hover:border-brand/40 hover:bg-brand-light dark:border-slate-700 dark:bg-slate-900 dark:hover:border-brand/50 dark:hover:bg-slate-800"
                >
                  <p className="truncate text-muted dark:text-slate-300">{prettyExpression(item.expression)}</p>
                  <p className="truncate text-sm font-semibold text-ink dark:text-white">= {item.result}</p>
                </button>
              ))
            )}
          </div>
        ) : null}

        <div className="mb-2 grid grid-cols-2 gap-2">
          <button
            type="button"
            aria-label="Toggle degree and radian mode"
            onClick={() => setIsDegMode((prev) => !prev)}
            className={`rounded-xl px-2 py-2 text-xs font-semibold transition-colors ${isDegMode ? 'bg-brand-light text-brand dark:bg-brand/30 dark:text-brand-light' : 'bg-white text-ink hover:bg-brand-light dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'}`}
          >
            {isDegMode ? 'DEG' : 'RAD'} Mode
          </button>
          <button
            type="button"
            aria-label="Toggle second function"
            onClick={() => setIsShift((prev) => !prev)}
            className={`rounded-xl px-2 py-2 text-xs font-semibold transition-colors ${isShift ? 'bg-brand-light text-brand dark:bg-brand/30 dark:text-brand-light' : 'bg-white text-ink hover:bg-brand-light dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'}`}
          >
            2nd / SHIFT
          </button>
        </div>

        <div className="grid grid-cols-6 gap-2 text-sm">
          <CalcButton label="2nd" aria="Toggle second function" onClick={() => setIsShift((prev) => !prev)} tone={isShift ? 'accent' : 'soft'} />
          <CalcButton label={isDegMode ? 'DEG' : 'RAD'} aria="Toggle degree and radian mode" onClick={() => setIsDegMode((prev) => !prev)} tone="soft" />
          <CalcButton label="(" aria="Open parenthesis" onClick={() => appendToken('(')} tone="soft" />
          <CalcButton label=")" aria="Close parenthesis" onClick={() => appendToken(')')} tone="soft" />
          <CalcButton label="⌫" aria="Backspace" onClick={backspace} tone="soft" />
          <CalcButton label="AC" aria="Clear all" onClick={clearAll} tone="danger" />

          <CalcButton label="x²" aria="Square" onClick={() => appendToken('^2')} tone="soft" />
          <CalcButton label="√x" aria="Square root" onClick={() => appendToken('sqrt(')} tone="soft" />
          <CalcButton label="^" aria="Power" onClick={() => appendToken('^')} tone="operator" />
          <CalcButton label="π" aria="Pi" onClick={() => appendToken('pi')} tone="soft" />
          <CalcButton label="e" aria="Euler constant" onClick={() => appendToken('e')} tone="soft" />
          <CalcButton label="%" aria="Percent" onClick={() => appendToken('%')} tone="operator" />

          {trigRow.map((key) => (
            <CalcButton key={key.label} label={key.label} aria={key.aria} onClick={key.onPress} tone="soft" />
          ))}

          <CalcButton label="7" aria="Seven" onClick={() => appendToken('7')} />
          <CalcButton label="8" aria="Eight" onClick={() => appendToken('8')} />
          <CalcButton label="9" aria="Nine" onClick={() => appendToken('9')} />
          <CalcButton label="÷" aria="Divide" onClick={() => appendToken('/')} tone="operator" />
          <CalcButton label="M+" aria="Memory plus" onClick={() => setMemory((prev) => prev + currentNumericValue)} tone="soft" />
          <CalcButton label="M-" aria="Memory minus" onClick={() => setMemory((prev) => prev - currentNumericValue)} tone="soft" />

          <CalcButton label="4" aria="Four" onClick={() => appendToken('4')} />
          <CalcButton label="5" aria="Five" onClick={() => appendToken('5')} />
          <CalcButton label="6" aria="Six" onClick={() => appendToken('6')} />
          <CalcButton label="×" aria="Multiply" onClick={() => appendToken('*')} tone="operator" />
          <CalcButton label="MR" aria="Memory recall" onClick={() => appendToken(formatNumber(memory))} tone="soft" />
          <CalcButton label="MC" aria="Memory clear" onClick={() => setMemory(0)} tone="soft" />

          <CalcButton label="1" aria="One" onClick={() => appendToken('1')} />
          <CalcButton label="2" aria="Two" onClick={() => appendToken('2')} />
          <CalcButton label="3" aria="Three" onClick={() => appendToken('3')} />
          <CalcButton label="−" aria="Minus" onClick={() => appendToken('-')} tone="operator" />
          <CalcButton label="Ans" aria="Insert last answer" onClick={() => appendToken(lastAnswer)} tone="soft" />
          <CalcButton label={<RotateCcw className="mx-auto h-4 w-4" />} aria="Toggle history" onClick={() => setShowHistory((prev) => !prev)} tone="soft" />

          <CalcButton label="0" aria="Zero" onClick={() => appendToken('0')} />
          <CalcButton label="." aria="Decimal point" onClick={() => appendToken('.')} />
          <CalcButton label="EXP" aria="Scientific exponent" onClick={() => appendToken('*10^(')} tone="operator" />
          <CalcButton label="+" aria="Plus" onClick={() => appendToken('+')} tone="operator" />
          <CalcButton
            label="="
            aria="Equals"
            onClick={runEvaluate}
            tone="equals"
            className="col-span-2"
          />
        </div>
      </div>
    </>
  )
}

function CalcButton({ label, aria, onClick, tone = 'number', className = '' }) {
  const tones = {
    number: 'bg-white text-ink hover:bg-canvas dark:bg-slate-700/60 dark:text-slate-100 dark:hover:bg-slate-600',
    soft: 'bg-canvas text-ink hover:bg-brand-light dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700',
    operator: 'bg-violet/15 text-violet hover:bg-violet/25 dark:bg-violet/25 dark:text-violet-100 dark:hover:bg-violet/35',
    accent: 'bg-brand-light text-brand hover:bg-brand/20 dark:bg-brand/35 dark:text-brand-light dark:hover:bg-brand/45',
    equals: 'bg-gradient-to-br from-brand to-violet text-white hover:opacity-95',
    danger: 'bg-coral/15 text-coral hover:bg-coral/25 dark:bg-coral/25 dark:text-rose-100 dark:hover:bg-coral/35',
  }

  return (
    <button
      type="button"
      aria-label={aria}
      onClick={onClick}
      className={`rounded-xl px-1.5 py-2.5 text-center font-medium transition-all duration-150 active:scale-[0.98] ${tones[tone]} ${className}`}
    >
      {label}
    </button>
  )
}
