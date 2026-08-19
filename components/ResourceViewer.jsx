'use client'

import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import Icon from '@/components/Icon'

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString()

export default function ResourceViewer({ resource, user, onClose }) {
  const [url, setUrl] = useState('')
  const [pages, setPages] = useState(0)
  const [error, setError] = useState('')
  const [openedAt] = useState(() => new Date().toLocaleString())
  const [annotations, setAnnotations] = useState({ items: [] })
  const [annotationsLoaded, setAnnotationsLoaded] = useState(false)
  const [mode, setMode] = useState('select')
  const [highlightColor, setHighlightColor] = useState('#fde047')
  const saveTimer = useRef(null)
  const canAnnotate = String(user?.role || '').toLowerCase() === 'student'

  useEffect(() => {
    let active = true
    fetch(`/api/resources/${resource.id}/signed-url`, { credentials: 'include' })
      .then(async (response) => {
        const payload = await response.json()
        if (!response.ok) throw new Error(payload.error || 'Unable to open resource.')
        if (active) setUrl(payload.url)
      })
      .catch((requestError) => {
        if (active) setError(requestError.message)
      })
    return () => { active = false }
  }, [resource.id])

  useEffect(() => {
    if (!canAnnotate) return undefined
    let active = true
    fetch(`/api/resources/${resource.id}/annotations`, { credentials: 'include' })
      .then(async (response) => {
        const payload = await response.json()
        if (!response.ok) throw new Error(payload.error || 'Unable to load annotations.')
        if (active) {
          setAnnotations(payload.annotations || { items: [] })
          setAnnotationsLoaded(true)
        }
      })
      .catch((requestError) => { if (active) setError(requestError.message) })
    return () => { active = false }
  }, [canAnnotate, resource.id])

  useEffect(() => {
    if (!canAnnotate || !annotationsLoaded) return undefined
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => {
      fetch(`/api/resources/${resource.id}/annotations`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ annotations }),
      }).catch(() => {})
    }, 500)
    return () => clearTimeout(saveTimer.current)
  }, [annotations, annotationsLoaded, canAnnotate, resource.id])

  const addHighlight = (event) => {
    if (!canAnnotate || mode !== 'highlight') return
    const pageElement = event.currentTarget
    const pageNumber = Number(pageElement?.dataset?.page)
    if (!pageElement || !Number.isFinite(pageNumber)) return
    const selection = window.getSelection()
    if (!selection?.rangeCount || selection.isCollapsed) return
    const range = selection.getRangeAt(0)
    const page = pageElement.getBoundingClientRect()
    const rects = Array.from(range.getClientRects()).map((rect) => ({
      x: ((rect.left - page.left) / page.width) * 100,
      y: ((rect.top - page.top) / page.height) * 100,
      width: (rect.width / page.width) * 100,
      height: (rect.height / page.height) * 100,
    }))
    if (rects.length) setAnnotations((current) => ({ ...current, items: [...(current.items || []), { type: 'highlight', page: pageNumber, color: highlightColor, rects }] }))
    selection.removeAllRanges()
  }

  const applyHighlight = () => {
    if (!canAnnotate) return
    const selection = window.getSelection()
    if (!selection?.rangeCount || selection.isCollapsed) return
    const range = selection.getRangeAt(0)
    const pageElement = selection.anchorNode?.parentElement?.closest('[data-page]')
    if (!pageElement) return
    const page = pageElement.getBoundingClientRect()
    const rects = Array.from(range.getClientRects()).map((rect) => ({
      x: ((rect.left - page.left) / page.width) * 100,
      y: ((rect.top - page.top) / page.height) * 100,
      width: (rect.width / page.width) * 100,
      height: (rect.height / page.height) * 100,
    }))
    if (rects.length) setAnnotations((current) => ({ ...current, items: [...(current.items || []), { type: 'highlight', page: Number(pageElement.dataset.page), color: highlightColor, rects }] }))
    selection.removeAllRanges()
  }

  const eraseSelection = (event) => {
    if (!canAnnotate || mode !== 'eraser') return
    const pageElement = event.currentTarget
    const bounds = pageElement?.getBoundingClientRect()
    const pageNumber = Number(pageElement?.dataset?.page)
    if (!bounds || !Number.isFinite(pageNumber)) return

    const selection = window.getSelection()
    if (!selection?.rangeCount || selection.isCollapsed) return
    const range = selection.getRangeAt(0)
    const selectedRects = Array.from(range.getClientRects()).map((rect) => ({
      x: ((rect.left - bounds.left) / bounds.width) * 100,
      y: ((rect.top - bounds.top) / bounds.height) * 100,
      width: (rect.width / bounds.width) * 100,
      height: (rect.height / bounds.height) * 100,
    }))
    if (!selectedRects.length) return

    const intersects = (first, second) => (
      first.x < second.x + second.width &&
      first.x + first.width > second.x &&
      first.y < second.y + second.height &&
      first.y + first.height > second.y
    )

    const subtractRect = (source, cutter) => {
      if (!intersects(source, cutter)) return [source]

      const sourceRight = source.x + source.width
      const sourceBottom = source.y + source.height
      const cutterRight = Math.min(sourceRight, cutter.x + cutter.width)
      const cutterBottom = Math.min(sourceBottom, cutter.y + cutter.height)
      const cutterLeft = Math.max(source.x, cutter.x)
      const cutterTop = Math.max(source.y, cutter.y)
      const fragments = []

      if (cutterTop > source.y) fragments.push({ x: source.x, y: source.y, width: source.width, height: cutterTop - source.y })
      if (cutterBottom < sourceBottom) fragments.push({ x: source.x, y: cutterBottom, width: source.width, height: sourceBottom - cutterBottom })
      if (cutterLeft > source.x) fragments.push({ x: source.x, y: cutterTop, width: cutterLeft - source.x, height: cutterBottom - cutterTop })
      if (cutterRight < sourceRight) fragments.push({ x: cutterRight, y: cutterTop, width: sourceRight - cutterRight, height: cutterBottom - cutterTop })

      return fragments.filter((fragment) => fragment.width > 0.15 && fragment.height > 0.15)
    }

    setAnnotations((current) => ({
      ...current,
      items: (current.items || []).flatMap((item) => {
        if (item.type !== 'highlight' || item.page !== pageNumber) return [item]
        const remainingRects = selectedRects.reduce(
          (rects, selectedRect) => rects.flatMap((rect) => subtractRect(rect, selectedRect)),
          item.rects || [],
        )
        return remainingRects.length ? [{ ...item, rects: remainingRects }] : []
      }),
    }))
    selection.removeAllRanges()
  }

  const handlePageMouseUp = (event) => {
    if (mode === 'eraser') {
      eraseSelection(event)
      return
    }
    addHighlight(event)
  }

  useEffect(() => {
    const preventContextMenu = (event) => event.preventDefault()
    const preventSaveAndPrint = (event) => {
      if ((event.ctrlKey || event.metaKey) && ['p', 's'].includes(event.key.toLowerCase())) {
        event.preventDefault()
        event.stopPropagation()
      }
    }
    document.addEventListener('contextmenu', preventContextMenu)
    document.addEventListener('keydown', preventSaveAndPrint, true)
    return () => {
      document.removeEventListener('contextmenu', preventContextMenu)
      document.removeEventListener('keydown', preventSaveAndPrint, true)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[80] flex flex-col bg-slate-950/95 text-white" onContextMenu={(event) => event.preventDefault()}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div className="min-w-0"><p className="truncate text-sm font-semibold">{resource.title}</p><p className="text-xs text-white/60">Protected resource viewer</p></div>
        <div className="flex items-center gap-1" aria-label="Annotation tools">
          {['select', 'highlight', 'eraser'].map((tool) => <button key={tool} type="button" disabled={!canAnnotate} onClick={() => setMode(tool)} title={canAnnotate ? undefined : 'Only verified students can annotate'} className={`rounded-lg px-2.5 py-1.5 text-xs ${mode === tool && canAnnotate ? 'bg-brand text-white' : 'bg-white/10 text-white/70'} disabled:cursor-not-allowed disabled:opacity-40`}>{tool === 'select' ? 'Select' : tool === 'highlight' ? 'Highlight' : 'Eraser'}</button>)}
          <span className="mx-1 text-[11px] text-white/60">Color</span>
          {[['Yellow', '#fde047'], ['Green', '#86efac'], ['Blue', '#93c5fd'], ['Pink', '#f9a8d4']].map(([name, value]) => <button key={value} type="button" disabled={!canAnnotate} aria-label={`${name} highlight`} title={`${name} highlight`} onClick={() => setHighlightColor(value)} className={`h-5 w-5 rounded-full border-2 ${highlightColor === value ? 'border-white ring-2 ring-brand' : 'border-white/40'} disabled:cursor-not-allowed disabled:opacity-40`} style={{ backgroundColor: value }} />)}
          <button type="button" disabled={!canAnnotate} onClick={applyHighlight} title={canAnnotate ? 'Highlight selected text' : 'Only verified students can annotate'} className="rounded-lg bg-yellow-400 px-2.5 py-1.5 text-xs font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-40">Apply selection</button>
        </div>
        <button type="button" onClick={onClose} className="rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white" aria-label="Close viewer"><Icon name="close" size={20} /></button>
      </div>
      <div className="min-h-0 flex-1 overflow-auto p-4" onContextMenu={(event) => event.preventDefault()}>
        {error ? <p className="mx-auto mt-12 max-w-md text-center text-sm text-rose-300">{error}</p> : null}
        {!error && !url ? <p className="mt-12 text-center text-sm text-white/60">Opening note...</p> : null}
        {url ? <Document file={url} onLoadSuccess={({ numPages }) => setPages(numPages)} onLoadError={() => setError('Unable to render this PDF.')} loading={<p className="mt-12 text-center text-sm text-white/60">Rendering note...</p>} className="mx-auto flex max-w-4xl flex-col items-center gap-5">
          {Array.from({ length: pages }, (_, index) => {
            const pageNumber = index + 1
            const pageItems = (annotations.items || []).filter((item) => item.page === pageNumber)
            return <div key={pageNumber} className="relative max-w-full shadow-2xl" data-page={pageNumber} onMouseUp={handlePageMouseUp}>
              <Page pageNumber={pageNumber} renderTextLayer renderAnnotationLayer={false} width={Math.min(900, typeof window === 'undefined' ? 900 : window.innerWidth - 32)} />
              <div className="pointer-events-none absolute inset-0">{pageItems.filter((item) => item.type === 'highlight').map((item, itemIndex) => item.rects.map((rect, rectIndex) => <span key={`${itemIndex}-${rectIndex}`} className="absolute opacity-50" style={{ left: `${rect.x}%`, top: `${rect.y}%`, width: `${rect.width}%`, height: `${rect.height}%`, backgroundColor: item.color || '#fde047' }} />))}<div className="absolute inset-0 grid place-items-center"><span className="rotate-[-28deg] text-center text-xs font-semibold tracking-wide text-slate-900/20">{user?.name || 'Student'} · {user?.email || ''}<br />{openedAt}</span></div></div>
            </div>
          })}
        </Document> : null}
      </div>
      <p className="px-4 py-2 text-center text-[11px] text-white/40">Viewing only. This watermark reduces casual copying but cannot fully prevent screenshots.</p>
    </div>
  )
}