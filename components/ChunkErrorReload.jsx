'use client'

import { useEffect } from 'react'

const RETRY_KEY = 'chunk-reload-retry'
const RETRY_META_KEY = 'chunk-reload-retry-meta'
const MAX_RETRIES = 2
const RETRY_WINDOW_MS = 30000

function hasChunkFailureMessage(value) {
  const message = String(value || '').toLowerCase()
  return (
    message.includes('chunkloaderror') ||
    message.includes('loading chunk') ||
    message.includes('loading css chunk') ||
    message.includes('loading chunk app/') ||
    message.includes('(timeout:') ||
    message.includes('/_next/static/') ||
    message.includes('failed to fetch dynamically imported module')
  )
}

function shouldIgnoreHotUpdate(value) {
  const message = String(value || '').toLowerCase()
  return message.includes('.hot-update.') || message.includes('hot-update.json')
}

function getRetryMeta() {
  try {
    const raw = sessionStorage.getItem(RETRY_META_KEY)
    if (!raw) return { count: 0, startedAt: 0 }
    const parsed = JSON.parse(raw)
    return {
      count: Number(parsed?.count || 0),
      startedAt: Number(parsed?.startedAt || 0),
    }
  } catch {
    return { count: 0, startedAt: 0 }
  }
}

function setRetryMeta(meta) {
  sessionStorage.setItem(RETRY_META_KEY, JSON.stringify(meta))
}

function buildReloadUrl() {
  const url = new URL(window.location.href)
  // Drop query params so Next loads fresh route assets without propagating stale cache-bust values.
  url.search = ''
  url.searchParams.set('_chunk_retry', String(Date.now()))
  return url.toString()
}

export default function ChunkErrorReload() {
  useEffect(() => {
    const isDev = process.env.NODE_ENV === 'development'

    function tryReload() {
      const now = Date.now()
      const existing = getRetryMeta()
      const withinWindow = existing.startedAt > 0 && now - existing.startedAt < RETRY_WINDOW_MS
      const count = withinWindow ? existing.count : 0

      if (count >= MAX_RETRIES) return

      const nextMeta = {
        count: count + 1,
        startedAt: withinWindow ? existing.startedAt : now,
      }

      sessionStorage.setItem(RETRY_KEY, '1')
      setRetryMeta(nextMeta)
      window.location.replace(buildReloadUrl())
    }

    function onError(event) {
      const target = event?.target
      if (
        target instanceof HTMLScriptElement ||
        target instanceof HTMLLinkElement ||
        target instanceof HTMLImageElement
      ) {
        const src = target.src || target.href || ''
        const source = String(src)
        if (source.includes('/_next/static/') && !source.includes('.hot-update.')) {
          tryReload()
          return
        }
      }

      const message = event?.message || event?.error?.message
      if (isDev && shouldIgnoreHotUpdate(message)) return
      if (hasChunkFailureMessage(message)) {
        tryReload()
      }
    }

    function onUnhandledRejection(event) {
      const reason = event?.reason
      const message = reason?.message || reason || ''
      if (isDev && shouldIgnoreHotUpdate(message)) return
      if (hasChunkFailureMessage(message)) {
        tryReload()
      }
    }

    window.addEventListener('error', onError, true)
    window.addEventListener('unhandledrejection', onUnhandledRejection)

    // Clear retry markers once a healthy page load settles.
    const timer = window.setTimeout(() => {
      sessionStorage.removeItem(RETRY_KEY)
      const meta = getRetryMeta()
      if (meta.startedAt > 0 && Date.now() - meta.startedAt >= RETRY_WINDOW_MS) {
        sessionStorage.removeItem(RETRY_META_KEY)
      }
    }, 5000)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('error', onError, true)
      window.removeEventListener('unhandledrejection', onUnhandledRejection)
    }
  }, [])

  return null
}
