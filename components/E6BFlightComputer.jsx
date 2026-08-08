'use client'

// Usage note: render <E6BFlightComputer /> once in app/layout.jsx alongside the existing floating calculator so both FABs coexist without overlap on first load.
import { useEffect, useMemo, useRef, useState } from 'react'
import { BatteryFull, Bookmark, Clock3, Compass, Gauge, History, Play, RotateCcw, Sparkles, X } from 'lucide-react'

const TRIGGER_SIZE = 56
const PANEL_WIDTH = 360
const EDGE_GAP = 12
const BUTTON_POSITION_KEY = 'e6b_fab_button_pos_v1'
const PANEL_POSITION_KEY = 'e6b_fab_panel_pos_v1'
const HISTORY_KEY = 'e6b_fab_history_v1'
const UNIT_PREFS_KEY = 'e6b_unit_preferences_v1'

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function getViewport() {
  if (typeof window === 'undefined') return { width: 1280, height: 800 }
  return { width: window.innerWidth, height: window.innerHeight }
}

function formatNumber(value) {
  const asNumber = Number(value)
  if (!Number.isFinite(asNumber)) return String(value)
  if (Math.abs(asNumber) > 1e12 || (Math.abs(asNumber) > 0 && Math.abs(asNumber) < 1e-8)) {
    return asNumber.toExponential(8)
  }
  return Number(asNumber.toPrecision(12)).toString()
}

function formatClock(time) {
  const hours = String(time.getUTCHours()).padStart(2, '0')
  const minutes = String(time.getUTCMinutes()).padStart(2, '0')
  return `${hours}:${minutes}Z`
}

function formatTime(seconds) {
  const safe = Math.max(0, Math.floor(seconds))
  const hh = String(Math.floor(safe / 3600)).padStart(2, '0')
  const mm = String(Math.floor((safe % 3600) / 60)).padStart(2, '0')
  const ss = String(safe % 60).padStart(2, '0')
  return `${hh}:${mm}:${ss}`
}

function toNumber(value, fallback = 0) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

function buildAnchoredPanelPosition(buttonPos, panelWidth) {
  const { width: vw, height: vh } = getViewport()
  let x = buttonPos.x - panelWidth + TRIGGER_SIZE
  let y = buttonPos.y - 8

  if (x < EDGE_GAP) x = buttonPos.x + TRIGGER_SIZE + 8
  if (x + panelWidth > vw - EDGE_GAP) x = vw - panelWidth - EDGE_GAP

  if (y + 580 > vh - EDGE_GAP) y = buttonPos.y - 520 + TRIGGER_SIZE
  if (y < EDGE_GAP) y = EDGE_GAP

  return {
    x: clamp(x, EDGE_GAP, vw - panelWidth - EDGE_GAP),
    y: clamp(y, EDGE_GAP, Math.max(EDGE_GAP, vh - 180)),
  }
}

function toUnitLabel(unit) {
  return unit === 'in-Hg' ? 'in-Hg' : unit
}

function convertUnit(value, fromUnit, toUnit) {
  const units = {
    distance: {
      nm: 1,
      sm: 1.15078,
      km: 1.852,
      m: 1852,
      ft: 6076.12,
    },
    speed: {
      kt: 1,
      mph: 1.15078,
      'km-h': 1.852,
    },
    volume: {
      gal: 1,
      L: 3.78541,
      qt: 4,
    },
    weight: {
      lb: 1,
      kg: 0.453592,
    },
    temperature: {
      '°C': (c) => c,
      '°F': (f) => (f - 32) * (5 / 9),
    },
    pressure: {
      'in-Hg': 1,
      hPa: 33.8639,
      mb: 33.8639,
    },
    rate: {
      fpm: 1,
      'm-s': 0.00508,
    },
  }

  if (fromUnit === toUnit) return value

  if (fromUnit === '°C' || toUnit === '°C') {
    const celsius = fromUnit === '°C' ? value : ((value - 32) * 5) / 9
    return toUnit === '°F' ? (celsius * 9) / 5 + 32 : celsius
  }

  const fromBase = units["distance"]?.[fromUnit] || units["speed"]?.[fromUnit] || units["volume"]?.[fromUnit] || units["weight"]?.[fromUnit] || units["pressure"]?.[fromUnit] || units["rate"]?.[fromUnit]
  const toBase = units["distance"]?.[toUnit] || units["speed"]?.[toUnit] || units["volume"]?.[toUnit] || units["weight"]?.[toUnit] || units["pressure"]?.[toUnit] || units["rate"]?.[toUnit]

  if (fromBase && toBase) {
    const baseValue = value / fromBase
    return baseValue * toBase
  }

  return value
}

function getUnitOptions(type) {
  switch (type) {
    case 'distance':
      return ['nm', 'sm', 'km', 'm', 'ft']
    case 'speed':
      return ['kt', 'mph', 'km-h']
    case 'volume':
      return ['gal', 'L', 'qt']
    case 'weight':
      return ['lb', 'kg']
    case 'temperature':
      return ['°C', '°F']
    case 'pressure':
      return ['in-Hg', 'hPa', 'mb']
    case 'rate':
      return ['fpm', 'm-s']
    default:
      return []
  }
}

export default function E6BFlightComputer() {
  const [isOpen, setIsOpen] = useState(false)
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 })
  const [panelPos, setPanelPos] = useState(null)
  const [hasHydratedPos, setHasHydratedPos] = useState(false)
  const [clock, setClock] = useState(() => new Date())
  const [showHistory, setShowHistory] = useState(false)
  const [view, setView] = useState('menu')
  const [activeFunction, setActiveFunction] = useState(null)
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const [lastAnswer, setLastAnswer] = useState('0')
  const [history, setHistory] = useState([])
  const [focusedField, setFocusedField] = useState(null)
  const [unitPrefs, setUnitPrefs] = useState({ distance: 'nm', speed: 'kt', volume: 'gal', weight: 'lb', temperature: '°C', pressure: 'in-Hg', rate: 'fpm' })
  const [dragState, setDragState] = useState(null)
  const [justDragged, setJustDragged] = useState(false)
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [timerRunning, setTimerRunning] = useState(false)
  const [timerMode, setTimerMode] = useState('stopwatch')
  const [countdownInput, setCountdownInput] = useState('60')

  const panelRef = useRef(null)
  const dragAnchorRef = useRef(null)
  const [functionData, setFunctionData] = useState({
    unitConversions: { fromValue: '1', fromUnit: 'nm', toUnit: 'sm' },
    altitude: { fieldElevation: '0', altimeterSetting: '29.92', oat: '15' },
    cloudBase: { surfaceTemp: '15', dewPoint: '10' },
    atmosphere: { pressureAltitude: '0' },
    airspeed: { cas: '120', pressureAltitude: '0', oat: '15' },
    fuel: { flow: '10', timeHours: '1', onboard: '20', fuelUnit: 'gal' },
    windCorrection: { trueCourse: '090', tas: '120', windDirection: '030', windSpeed: '20' },
    trip: { legs: [{ distance: '50', tas: '120', windDir: '030', windSpeed: '20' }] },
    weightBalance: { stations: [{ weight: '100', arm: '10' }, { weight: '200', arm: '30' }] },
    shift: { totalWeight: '300', desiredCg: '20', distance: '20' },
  })

  const menuItems = ['Unit Conversions', 'Altitude', 'Cloud Base', 'Standard Atmosphere', 'Airspeed', 'Fuel']

  useEffect(() => {
    const interval = window.setInterval(() => setClock(new Date()), 1000)
    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    const { width, height } = getViewport()
    const fallback = {
      x: Math.max(EDGE_GAP, width - TRIGGER_SIZE - 96),
      y: Math.max(EDGE_GAP, height - TRIGGER_SIZE - 24),
    }

    try {
      const storedButton = window.localStorage.getItem(BUTTON_POSITION_KEY)
      const parsedButton = storedButton ? JSON.parse(storedButton) : null
      if (parsedButton && Number.isFinite(parsedButton.x) && Number.isFinite(parsedButton.y)) {
        setButtonPos({ x: clamp(parsedButton.x, EDGE_GAP, width - TRIGGER_SIZE - EDGE_GAP), y: clamp(parsedButton.y, EDGE_GAP, height - TRIGGER_SIZE - EDGE_GAP) })
      } else {
        setButtonPos(fallback)
      }

      const storedPanel = window.localStorage.getItem(PANEL_POSITION_KEY)
      const parsedPanel = storedPanel ? JSON.parse(storedPanel) : null
      if (parsedPanel && Number.isFinite(parsedPanel.x) && Number.isFinite(parsedPanel.y)) {
        setPanelPos(parsedPanel)
      }

      const storedHist = window.localStorage.getItem(HISTORY_KEY)
      if (storedHist) setHistory(JSON.parse(storedHist))

      const storedPrefs = window.localStorage.getItem(UNIT_PREFS_KEY)
      if (storedPrefs) setUnitPrefs(JSON.parse(storedPrefs))
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
    if (!hasHydratedPos) return
    window.localStorage.setItem(PANEL_POSITION_KEY, JSON.stringify(panelPos || buildAnchoredPanelPosition(buttonPos, PANEL_WIDTH)))
  }, [buttonPos, panelPos, hasHydratedPos])

  useEffect(() => {
    if (!hasHydratedPos) return
    window.localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
  }, [history, hasHydratedPos])

  useEffect(() => {
    if (!hasHydratedPos) return
    window.localStorage.setItem(UNIT_PREFS_KEY, JSON.stringify(unitPrefs))
  }, [unitPrefs, hasHydratedPos])

  useEffect(() => {
    if (!timerRunning) return
    const id = window.setInterval(() => {
      setTimerSeconds((prev) => prev + 1)
    }, 1000)
    return () => window.clearInterval(id)
  }, [timerRunning])

  useEffect(() => {
    if (!isOpen) return
    const panel = panelRef.current
    panel?.focus()

    const onKeyDown = (event) => {
      if (!isOpen) return
      if (event.key === 'Escape') {
        event.preventDefault()
        if (view === 'menu') {
          setIsOpen(false)
        } else if (activeFunction) {
          setView('menu')
          setActiveFunction(null)
        }
        return
      }

      if (view === 'menu') {
        if (event.key === 'ArrowDown') {
          event.preventDefault()
          setHighlightedIndex((prev) => (prev + 1) % menuItems.length)
        }
        if (event.key === 'ArrowUp') {
          event.preventDefault()
          setHighlightedIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length)
        }
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          selectMenuItem(highlightedIndex)
        }
      }

      if (view === 'function' && activeFunction) {
        const isNumber = /^[0-9]$/.test(event.key)
        if (isNumber && focusedField) {
          event.preventDefault()
          updateField(focusedField, (focusedField.value || '') + event.key)
          return
        }
        if (event.key === 'Backspace' && focusedField) {
          event.preventDefault()
          updateField(focusedField, String(focusedField.value || '').slice(0, -1))
          return
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeFunction, focusedField, highlightedIndex, isOpen, view])

  const resolvePanelPosition = useMemo(() => {
    if (panelPos) {
      const { width, height } = getViewport()
      return {
        x: clamp(panelPos.x, EDGE_GAP, width - PANEL_WIDTH - EDGE_GAP),
        y: clamp(panelPos.y, EDGE_GAP, Math.max(EDGE_GAP, height - 180)),
      }
    }
    return buildAnchoredPanelPosition(buttonPos, PANEL_WIDTH)
  }, [buttonPos, panelPos])

  const handlePointerMove = (event) => {
    if (!dragState) return
    const { width, height } = getViewport()
    const dx = event.clientX - dragState.originX
    const dy = event.clientY - dragState.originY
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) setJustDragged(true)

    if (dragState.kind === 'button') {
      setButtonPos({
        x: clamp(dragState.startX + dx, EDGE_GAP, width - TRIGGER_SIZE - EDGE_GAP),
        y: clamp(dragState.startY + dy, EDGE_GAP, height - TRIGGER_SIZE - EDGE_GAP),
      })
    }

    if (dragState.kind === 'panel') {
      setPanelPos({
        x: clamp(dragState.startX + dx, EDGE_GAP, width - PANEL_WIDTH - EDGE_GAP),
        y: clamp(dragState.startY + dy, EDGE_GAP, Math.max(EDGE_GAP, height - 180)),
      })
    }
  }

  useEffect(() => {
    if (!dragState) return
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', stopDragging)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', stopDragging)
    }
  }, [dragState])

  function stopDragging() {
    setDragState(null)
    window.setTimeout(() => setJustDragged(false), 0)
  }

  function startDrag(kind, event) {
    const sourcePos = kind === 'button' ? buttonPos : resolvePanelPosition
    dragAnchorRef.current = { kind, originX: event.clientX, originY: event.clientY, startX: sourcePos.x, startY: sourcePos.y }
    setDragState({ kind, originX: event.clientX, originY: event.clientY, startX: sourcePos.x, startY: sourcePos.y })
  }

  function snapToNearestCorner(position) {
    const { width, height } = getViewport()
    const centerX = position.x + TRIGGER_SIZE / 2
    const centerY = position.y + TRIGGER_SIZE / 2
    const left = centerX < width / 2
    const top = centerY < height / 2
    const corner = left ? (top ? 'top-left' : 'bottom-left') : (top ? 'top-right' : 'bottom-right')
    const offsetX = corner.includes('right') ? -84 : 84
    const offsetY = corner.includes('bottom') ? -84 : 84
    return {
      x: corner.includes('left') ? EDGE_GAP : Math.max(EDGE_GAP, width - TRIGGER_SIZE - EDGE_GAP),
      y: corner.includes('top') ? EDGE_GAP : Math.max(EDGE_GAP, height - TRIGGER_SIZE - EDGE_GAP),
      corner,
      offsetX,
      offsetY,
    }
  }

  function onButtonRelease() {
    const snapped = snapToNearestCorner(buttonPos)
    setButtonPos({ x: snapped.x + (snapped.corner.includes('right') ? snapped.offsetX : 0), y: snapped.y + (snapped.corner.includes('bottom') ? snapped.offsetY : 0) })
  }

  function selectMenuItem(index) {
    const mapping = {
      0: 'unitConversions',
      1: 'altitude',
      2: 'cloudBase',
      3: 'atmosphere',
      4: 'airspeed',
      5: 'fuel',
    }
    setHighlightedIndex(index)
    setActiveFunction(mapping[index])
    setView('function')
    setFocusedField(null)
  }

  function updateField(field, value) {
    if (!field) return
    setFunctionData((prev) => ({ ...prev, [field.section]: { ...prev[field.section], [field.key]: value } }))
  }

  function setUnitForFocusedField(type, unit) {
    setUnitPrefs((prev) => ({ ...prev, [type]: unit }))
    if (focusedField) {
      updateField({ ...focusedField, value: functionData[focusedField.section]?.[focusedField.key] || '' }, functionData[focusedField.section]?.[focusedField.key] || '')
    }
  }

  function toggleSign(field) {
    if (!field) return
    const current = String(functionData[field.section]?.[field.key] || '')
    const numeric = Number(current)
    if (!Number.isFinite(numeric)) return
    updateField(field, String(-numeric))
  }

  function clearField(field) {
    if (!field) return
    updateField(field, '')
  }

  function appendDigit(field, digit) {
    if (!field) return
    const current = String(functionData[field.section]?.[field.key] || '')
    updateField(field, `${current}${digit}`)
  }

  function useLastAnswer(field) {
    if (!field) return
    updateField(field, lastAnswer)
  }

  function addHistory(label, detail) {
    const entry = { id: Date.now(), label, detail }
    setHistory((prev) => [entry, ...prev].slice(0, 10))
  }

  function calculateUnitConversion() {
    const fromValue = toNumber(functionData.unitConversions.fromValue, 0)
    const fromUnit = functionData.unitConversions.fromUnit || unitPrefs.distance
    const toUnit = functionData.unitConversions.toUnit || unitPrefs.distance
    const result = convertUnit(fromValue, fromUnit, toUnit)
    setLastAnswer(formatNumber(result))
    addHistory('Unit Conversion', `${fromValue} ${fromUnit} → ${formatNumber(result)} ${toUnit}`)
  }

  function calculateAltitude() {
    const fieldElevation = toNumber(functionData.altitude.fieldElevation, 0)
    const altimeterSetting = toNumber(functionData.altitude.altimeterSetting, 29.92)
    const oat = toNumber(functionData.altitude.oat, 15)
    const pressureAltitude = fieldElevation + (29.92 - altimeterSetting) * 1000
    const isaTemp = 15 - (2 * pressureAltitude) / 1000
    const densityAltitude = pressureAltitude + 120 * (oat - isaTemp)
    const result = `PA ${formatNumber(pressureAltitude)} ft · DA ${formatNumber(densityAltitude)} ft`
    setLastAnswer(result)
    addHistory('Altitude', result)
  }

  function calculateCloudBase() {
    const surfaceTemp = toNumber(functionData.cloudBase.surfaceTemp, 15)
    const dewPoint = toNumber(functionData.cloudBase.dewPoint, 10)
    const cloudBase = ((surfaceTemp - dewPoint) / 2.5) * 1000
    const result = `${formatNumber(cloudBase)} ft AGL`
    setLastAnswer(result)
    addHistory('Cloud Base', result)
  }

  function calculateAtmosphere() {
    const pressureAltitude = toNumber(functionData.atmosphere.pressureAltitude, 0)
    const isaTemp = 15 - (2 * pressureAltitude) / 1000
    const isaPressure = 29.92 - (pressureAltitude / 1000) * 1.0
    const speedOfSound = 38.967854 * Math.sqrt(273.15 + isaTemp)
    const result = `ISA ${formatNumber(isaTemp)}°C · ${formatNumber(isaPressure)} in-Hg · ${formatNumber(speedOfSound)} kt`
    setLastAnswer(result)
    addHistory('Standard Atmosphere', result)
  }

  function calculateAirspeed() {
    const cas = toNumber(functionData.airspeed.cas, 120)
    const pressureAltitude = toNumber(functionData.airspeed.pressureAltitude, 0)
    const oat = toNumber(functionData.airspeed.oat, 15)
    const tempKelvin = 273.15 + oat
    const tas = cas * (1 + 0.02 * pressureAltitude / 1000)
    const mach = tas / (38.967854 * Math.sqrt(tempKelvin))
    const result = `TAS ${formatNumber(tas)} kt · Mach ${formatNumber(mach)}`
    setLastAnswer(result)
    addHistory('Airspeed', result)
  }

  function calculateFuel() {
    const flow = toNumber(functionData.fuel.flow, 0)
    const timeHours = toNumber(functionData.fuel.timeHours, 0)
    const onboard = toNumber(functionData.fuel.onboard, 0)
    const burn = flow * timeHours
    const endurance = onboard / flow
    const result = `Burn ${formatNumber(burn)} ${functionData.fuel.fuelUnit} · End ${formatNumber(endurance)} hr`
    setLastAnswer(result)
    addHistory('Fuel', result)
  }

  function calculateWind() {
    const trueCourse = (Math.PI / 180) * toNumber(functionData.windCorrection.trueCourse, 90)
    const tas = toNumber(functionData.windCorrection.tas, 120)
    const windDirection = (Math.PI / 180) * toNumber(functionData.windCorrection.windDirection, 30)
    const windSpeed = toNumber(functionData.windCorrection.windSpeed, 20)
    const wca = Math.asin((windSpeed * Math.sin(windDirection - trueCourse)) / tas)
    const groundSpeed = tas * Math.cos(wca) - windSpeed * Math.cos(windDirection - trueCourse)
    const trueHeading = (trueCourse * 180) / Math.PI + (wca * 180) / Math.PI
    const result = `WCA ${formatNumber((wca * 180) / Math.PI)}° · TH ${formatNumber(trueHeading)}° · GS ${formatNumber(groundSpeed)} kt`
    setLastAnswer(result)
    addHistory('Wind', result)
  }

  function calculateTrip() {
    const legs = functionData.trip.legs || []
    const totals = legs.reduce(
      (acc, leg) => {
        const distance = toNumber(leg.distance, 0)
        const tas = toNumber(leg.tas, 120)
        const windSpeed = toNumber(leg.windSpeed, 0)
        const windDir = toNumber(leg.windDir, 0)
        const time = distance / tas
        const fuel = time * 10
        return {
          distance: acc.distance + distance,
          time: acc.time + time,
          fuel: acc.fuel + fuel,
        }
      },
      { distance: 0, time: 0, fuel: 0 },
    )
    const result = `Dist ${formatNumber(totals.distance)} nm · Time ${formatNumber(totals.time)} hr · Fuel ${formatNumber(totals.fuel)} gal`
    setLastAnswer(result)
    addHistory('Trip', result)
  }

  function calculateWeightBalance() {
    const stations = functionData.weightBalance.stations || []
    const totalWeight = stations.reduce((sum, station) => sum + toNumber(station.weight, 0), 0)
    const totalMoment = stations.reduce((sum, station) => sum + toNumber(station.weight, 0) * toNumber(station.arm, 0), 0)
    const cg = totalWeight ? totalMoment / totalWeight : 0
    const result = `WT ${formatNumber(totalWeight)} lb · CG ${formatNumber(cg)} in`
    setLastAnswer(result)
    addHistory('Weight & Balance', result)
  }

  function calculateShift() {
    const totalWeight = toNumber(functionData.shift.totalWeight, 0)
    const desiredCg = toNumber(functionData.shift.desiredCg, 0)
    const distance = toNumber(functionData.shift.distance, 0)
    const shift = (desiredCg * totalWeight) / distance
    const result = `Shift ${formatNumber(shift)} lb`
    setLastAnswer(result)
    addHistory('Weight Shift', result)
  }

  function runActionForFunction() {
    switch (activeFunction) {
      case 'unitConversions':
        calculateUnitConversion();
        break
      case 'altitude':
        calculateAltitude();
        break
      case 'cloudBase':
        calculateCloudBase();
        break
      case 'atmosphere':
        calculateAtmosphere();
        break
      case 'airspeed':
        calculateAirspeed();
        break
      case 'fuel':
        calculateFuel();
        break
      case 'windCorrection':
        calculateWind();
        break
      case 'trip':
        calculateTrip();
        break
      case 'weightBalance':
        calculateWeightBalance();
        break
      case 'shift':
        calculateShift();
        break
      default:
        break
    }
  }

  function handleNumericKey(value) {
    if (!focusedField) return
    const current = String(functionData[focusedField.section]?.[focusedField.key] || '')
    updateField(focusedField, `${current}${value}`)
  }

  const panelWidth = useMemo(() => Math.min(PANEL_WIDTH, Math.max(280, getViewport().width - EDGE_GAP * 2)), [isOpen])

  if (!hasHydratedPos) return null

  return (
    <>
      <button
        type="button"
        aria-label="Toggle E6-B flight computer"
        onPointerDown={(event) => {
          startDrag('button', event)
        }}
        onClick={() => {
          if (justDragged) return
          setIsOpen((prev) => !prev)
        }}
        onPointerUp={() => {
          if (dragState?.kind === 'button') onButtonRelease()
        }}
        className="fixed z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-orange-500/30 bg-[#111111] text-white shadow-[0_0_18px_rgba(255,140,0,0.28)] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_24px_rgba(255,140,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
        style={{ left: buttonPos.x, top: buttonPos.y }}
      >
        <Gauge className="h-6 w-6 text-orange-400" />
      </button>

      <div
        className={`fixed z-[60] origin-bottom-right overflow-hidden rounded-[24px] border border-white/10 bg-[#111111] text-white shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition-all duration-300 ${isOpen ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
        role="dialog"
        aria-label="E6-B Flight Computer"
        aria-modal="true"
        tabIndex={-1}
        ref={panelRef}
        style={{ width: `${panelWidth}px`, left: resolvePanelPosition.x, top: resolvePanelPosition.y, maxWidth: `calc(100vw - ${EDGE_GAP * 2}px)` }}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Drag flight computer"
              onPointerDown={(event) => startDrag('panel', event)}
              className="rounded-lg border border-white/10 bg-white/10 p-1.5 text-white/70"
            >
              <Sparkles className="h-4 w-4" />
            </button>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-400">E6-B</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">Cx-3</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button type="button" aria-label="Show history" onClick={() => setShowHistory((prev) => !prev)} className="rounded-lg border border-white/10 bg-white/10 p-1.5 text-white/80">
              <History className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[11px] text-white/80">
              <Clock3 className="h-3.5 w-3.5" />
              <span>{formatClock(clock)}</span>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[11px] text-white/80">
              <BatteryFull className="h-3.5 w-3.5 text-green-400" />
              <span>BATT</span>
            </div>
            <button type="button" aria-label="Close flight computer" onClick={() => setIsOpen(false)} className="rounded-lg border border-white/10 bg-white/10 p-1.5 text-white/80">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {showHistory ? (
          <div className="border-b border-white/10 bg-black/20 p-2">
            <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-white/60">
              <span>History</span>
              <button type="button" aria-label="Clear history" onClick={() => setHistory([])} className="text-orange-400">Clear</button>
            </div>
            <div className="max-h-24 space-y-1 overflow-y-auto">
              {history.length === 0 ? <p className="text-xs text-white/60">No calculations yet</p> : history.map((item) => (
                <div key={item.id} className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs">
                  <p className="text-white/70">{item.label}</p>
                  <p className="text-white">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="p-3">
          {view === 'menu' ? (
            <MenuScreen menuItems={menuItems} highlightedIndex={highlightedIndex} onSelect={selectMenuItem} />
          ) : (
            <FunctionScreen
              activeFunction={activeFunction}
              functionData={functionData}
              setFunctionData={setFunctionData}
              focusedField={focusedField}
              setFocusedField={setFocusedField}
              unitPrefs={unitPrefs}
              setUnitPrefs={setUnitPrefs}
              onBack={() => {
                setView('menu')
                setActiveFunction(null)
              }}
              lastAnswer={lastAnswer}
              useLastAnswer={useLastAnswer}
              onRun={runActionForFunction}
              timerSeconds={timerSeconds}
              timerRunning={timerRunning}
              setTimerRunning={setTimerRunning}
              timerMode={timerMode}
              setTimerMode={setTimerMode}
              countdownInput={countdownInput}
              setCountdownInput={setCountdownInput}
              setTimerSeconds={setTimerSeconds}
              handleNumericKey={handleNumericKey}
              toggleSign={toggleSign}
              clearField={clearField}
              appendDigit={appendDigit}
              setUnitForFocusedField={setUnitForFocusedField}
            />
          )}
        </div>
      </div>
    </>
  )
}

function MenuScreen({ menuItems, highlightedIndex, onSelect }) {
  return (
    <div className="rounded-[20px] border border-white/10 bg-[#0b0b0b] p-2">
      <div className="mb-2 rounded-[14px] border border-white/10 bg-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.25em] text-white/70">
        Main Menu
      </div>
      <div className="max-h-[260px] space-y-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <button
            key={item}
            type="button"
            aria-label={`Open ${item}`}
            onClick={() => onSelect(index)}
            className={`flex w-full items-center justify-between rounded-[14px] px-3 py-3 text-left text-sm transition-all ${highlightedIndex === index ? 'bg-white text-black' : 'bg-black/40 text-white/85 hover:bg-white/10'}`}
          >
            <span>{item}</span>
            {highlightedIndex === index ? <Compass className="h-4 w-4" /> : null}
          </button>
        ))}
      </div>
    </div>
  )
}

function FunctionScreen({
  activeFunction,
  functionData,
  setFunctionData,
  focusedField,
  setFocusedField,
  unitPrefs,
  setUnitPrefs,
  onBack,
  lastAnswer,
  useLastAnswer,
  onRun,
  timerSeconds,
  timerRunning,
  setTimerRunning,
  timerMode,
  setTimerMode,
  countdownInput,
  setCountdownInput,
  setTimerSeconds,
  handleNumericKey,
  toggleSign,
  clearField,
  appendDigit,
  setUnitForFocusedField,
}) {
  const renderInput = (section, key, label, unitType, placeholder = '0') => {
    const value = String(functionData[section]?.[key] ?? '')
    const currentUnit = unitPrefs[unitType] || 'nm'
    const field = { section, key, value, unitType }
    return (
      <div className="rounded-[14px] border border-white/10 bg-black/30 p-2">
        <label className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-white/45">{label}</label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            inputMode="decimal"
            value={value}
            onFocus={() => setFocusedField(field)}
            onChange={(event) => setFunctionData((prev) => ({ ...prev, [section]: { ...prev[section], [key]: event.target.value } }))}
            placeholder={placeholder}
            className="w-full rounded-lg border border-white/10 bg-white/10 px-2 py-2 text-sm text-white outline-none"
          />
          <button type="button" aria-label={`Toggle unit for ${label}`} onClick={() => {
            const options = getUnitOptions(unitType)
            const nextIndex = (options.indexOf(currentUnit) + 1) % options.length
            const nextUnit = options[nextIndex]
            setUnitPrefs((prev) => ({ ...prev, [unitType]: nextUnit }))
            setFunctionData((prev) => ({ ...prev, [section]: { ...prev[section], [key]: prev[section]?.[key] ?? '' } }))
          }} className="rounded-lg border border-white/10 bg-white/10 px-2 py-2 text-[11px] text-white/80">
            {currentUnit}
          </button>
        </div>
        {focusedField?.section === section && focusedField?.key === key ? (
          <button type="button" onClick={() => useLastAnswer(field)} className="mt-2 text-[11px] text-orange-400">Use last result</button>
        ) : null}
      </div>
    )
  }

  const renderKeypad = () => (
    <div className="mt-3 grid grid-cols-5 gap-2">
      {['7', '8', '9', '.', 'C'].map((digit) => (
        <button key={digit} type="button" aria-label={`Input ${digit}`} onClick={() => appendDigit(focusedField, digit)} className="rounded-[12px] bg-white/10 px-3 py-2 text-sm text-white">{digit}</button>
      ))}
      {['4', '5', '6', '+/-', '⌫'].map((digit) => (
        <button key={digit} type="button" aria-label={`Input ${digit}`} onClick={() => {
          if (digit === '+/-' && focusedField) toggleSign(focusedField)
          else if (digit === '⌫' && focusedField) clearField(focusedField)
          else appendDigit(focusedField, digit)
        }} className="rounded-[12px] bg-white/10 px-3 py-2 text-sm text-white">{digit}</button>
      ))}
      {['1', '2', '3', '0', 'Enter'].map((digit) => (
        <button key={digit} type="button" aria-label={`Input ${digit}`} onClick={() => {
          if (digit === 'Enter') onRun()
          else appendDigit(focusedField, digit)
        }} className={`rounded-[12px] px-3 py-2 text-sm ${digit === 'Enter' ? 'bg-orange-500 text-black' : 'bg-white/10 text-white'}`}>{digit}</button>
      ))}
    </div>
  )

  const renderTimer = () => (
    <div className="space-y-3">
      <div className="rounded-[16px] border border-white/10 bg-black/30 p-3 text-center text-3xl font-semibold tracking-[0.2em] text-white">{formatTime(timerSeconds)}</div>
      <div className="flex gap-2">
        <button type="button" aria-label="Start timer" onClick={() => setTimerRunning(true)} className="flex-1 rounded-[12px] bg-orange-500 px-3 py-2 text-sm font-semibold text-black">Start</button>
        <button type="button" aria-label="Pause timer" onClick={() => setTimerRunning(false)} className="flex-1 rounded-[12px] bg-white/10 px-3 py-2 text-sm text-white">Pause</button>
        <button type="button" aria-label="Reset timer" onClick={() => { setTimerRunning(false); setTimerSeconds(0) }} className="flex-1 rounded-[12px] bg-white/10 px-3 py-2 text-sm text-white">Reset</button>
      </div>
      <div className="flex gap-2 text-xs">
        <button type="button" aria-label="Stopwatch mode" onClick={() => setTimerMode('stopwatch')} className={`flex-1 rounded-[10px] px-3 py-2 ${timerMode === 'stopwatch' ? 'bg-orange-500 text-black' : 'bg-white/10 text-white'}`}>Stopwatch</button>
        <button type="button" aria-label="Countdown mode" onClick={() => setTimerMode('countdown')} className={`flex-1 rounded-[10px] px-3 py-2 ${timerMode === 'countdown' ? 'bg-orange-500 text-black' : 'bg-white/10 text-white'}`}>Countdown</button>
      </div>
      {timerMode === 'countdown' ? (
        <div className="rounded-[14px] border border-white/10 bg-black/30 p-2">
          <label className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-white/45">Countdown Seconds</label>
          <input type="text" inputMode="numeric" value={countdownInput} onChange={(event) => setCountdownInput(event.target.value)} className="w-full rounded-lg border border-white/10 bg-white/10 px-2 py-2 text-sm text-white" />
          <button type="button" aria-label="Apply countdown" onClick={() => setTimerSeconds(Number(countdownInput))} className="mt-2 rounded-lg bg-white/10 px-3 py-2 text-sm text-white">Apply</button>
        </div>
      ) : null}
    </div>
  )

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <button type="button" aria-label="Back to menu" onClick={onBack} className="rounded-[10px] border border-white/10 bg-white/10 px-3 py-2 text-sm text-white/80">Back</button>
        <div className="rounded-[10px] border border-white/10 bg-black/30 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/70">{activeFunction}</div>
      </div>

      {activeFunction === 'unitConversions' ? (
        <div className="space-y-2">
          {renderInput('unitConversions', 'fromValue', 'Value', 'distance')}
          <div className="grid gap-2 md:grid-cols-2">
            {renderInput('unitConversions', 'fromUnit', 'From', 'distance')}
            {renderInput('unitConversions', 'toUnit', 'To', 'distance')}
          </div>
          <button type="button" aria-label="Compute unit conversion" onClick={onRun} className="w-full rounded-[12px] bg-orange-500 px-3 py-2 text-sm font-semibold text-black">Compute</button>
        </div>
      ) : null}

      {activeFunction === 'altitude' ? (
        <div className="space-y-2">
          {renderInput('altitude', 'fieldElevation', 'Field Elevation', 'distance')}
          {renderInput('altitude', 'altimeterSetting', 'Altimeter Setting', 'pressure')}
          {renderInput('altitude', 'oat', 'OAT', 'temperature')}
          <button type="button" aria-label="Calculate altitude" onClick={onRun} className="w-full rounded-[12px] bg-orange-500 px-3 py-2 text-sm font-semibold text-black">Calculate</button>
        </div>
      ) : null}

      {activeFunction === 'cloudBase' ? (
        <div className="space-y-2">
          {renderInput('cloudBase', 'surfaceTemp', 'Surface Temp', 'temperature')}
          {renderInput('cloudBase', 'dewPoint', 'Dew Point', 'temperature')}
          <button type="button" aria-label="Calculate cloud base" onClick={onRun} className="w-full rounded-[12px] bg-orange-500 px-3 py-2 text-sm font-semibold text-black">Calculate</button>
        </div>
      ) : null}

      {activeFunction === 'atmosphere' ? (
        <div className="space-y-2">
          {renderInput('atmosphere', 'pressureAltitude', 'Pressure Altitude', 'distance')}
          <button type="button" aria-label="Calculate standard atmosphere" onClick={onRun} className="w-full rounded-[12px] bg-orange-500 px-3 py-2 text-sm font-semibold text-black">Calculate</button>
        </div>
      ) : null}

      {activeFunction === 'airspeed' ? (
        <div className="space-y-2">
          {renderInput('airspeed', 'cas', 'CAS', 'speed')}
          {renderInput('airspeed', 'pressureAltitude', 'Pressure Altitude', 'distance')}
          {renderInput('airspeed', 'oat', 'OAT', 'temperature')}
          <button type="button" aria-label="Calculate airspeed" onClick={onRun} className="w-full rounded-[12px] bg-orange-500 px-3 py-2 text-sm font-semibold text-black">Calculate</button>
        </div>
      ) : null}

      {activeFunction === 'fuel' ? (
        <div className="space-y-2">
          {renderInput('fuel', 'flow', 'Fuel Flow', 'rate')}
          {renderInput('fuel', 'timeHours', 'Time', 'distance')}
          {renderInput('fuel', 'onboard', 'Fuel Onboard', 'volume')}
          <button type="button" aria-label="Calculate fuel burn" onClick={onRun} className="w-full rounded-[12px] bg-orange-500 px-3 py-2 text-sm font-semibold text-black">Calculate</button>
        </div>
      ) : null}

      {activeFunction === 'windCorrection' ? (
        <div className="space-y-2">
          {renderInput('windCorrection', 'trueCourse', 'True Course', 'distance')}
          {renderInput('windCorrection', 'tas', 'TAS', 'speed')}
          {renderInput('windCorrection', 'windDirection', 'Wind Direction', 'distance')}
          {renderInput('windCorrection', 'windSpeed', 'Wind Speed', 'speed')}
          <button type="button" aria-label="Compute wind triangle" onClick={onRun} className="w-full rounded-[12px] bg-orange-500 px-3 py-2 text-sm font-semibold text-black">Compute</button>
        </div>
      ) : null}

      {activeFunction === 'trip' ? (
        <div className="space-y-2">
          <div className="rounded-[14px] border border-white/10 bg-black/30 p-2 text-xs text-white/70">Trip planning is simplified to 3 leg totals with distance, time and fuel estimates.</div>
          <button type="button" aria-label="Compute trip" onClick={onRun} className="w-full rounded-[12px] bg-orange-500 px-3 py-2 text-sm font-semibold text-black">Compute</button>
        </div>
      ) : null}

      {activeFunction === 'weightBalance' ? (
        <div className="space-y-2">
          <div className="rounded-[14px] border border-white/10 bg-black/30 p-2 text-xs text-white/70">Weight and balance uses a simple station list and computes total weight and CG.</div>
          <button type="button" aria-label="Compute weight and balance" onClick={onRun} className="w-full rounded-[12px] bg-orange-500 px-3 py-2 text-sm font-semibold text-black">Compute</button>
        </div>
      ) : null}

      {activeFunction === 'shift' ? (
        <div className="space-y-2">
          {renderInput('shift', 'totalWeight', 'Total Weight', 'weight')}
          {renderInput('shift', 'desiredCg', 'Desired CG', 'distance')}
          {renderInput('shift', 'distance', 'Distance', 'distance')}
          <button type="button" aria-label="Calculate weight shift" onClick={onRun} className="w-full rounded-[12px] bg-orange-500 px-3 py-2 text-sm font-semibold text-black">Calculate</button>
        </div>
      ) : null}

      {activeFunction === 'timer' ? renderTimer() : null}

      <div className="rounded-[14px] border border-white/10 bg-black/30 p-2 text-xs text-white/60">
        <p className="font-semibold text-white/80">Last answer</p>
        <p className="text-sm text-orange-400">{lastAnswer}</p>
      </div>

      {renderKeypad()}
    </div>
  )
}
