'use client'

import { useEffect } from 'react'

const RETRY_KEY = 'chunk-reload-retry'

function hasChunkFailureMessage(value) {
  const message = String(value || '').toLowerCase()
  return (
    message.includes('chunkloaderror') ||
    message.includes('loading chunk') ||
    message.includes('/_next/static/') ||
    message.includes('failed to fetch dynamically imported module')
  )
}

function buildReloadUrl() {
  const url = new URL(window.location.href)
  // Drop query params so Next loads fresh route assets without propagating stale cache-bust values.
  url.search = ''
  return url.toString()
}

export default function ChunkErrorReload() {
  useEffect(() => {
    // Only enable stale chunk recovery in production builds.
    if (process.env.NODE_ENV !== 'production') return

    const retried = sessionStorage.getItem(RETRY_KEY) === '1'

    function tryReload() {
      if (retried) return
      sessionStorage.setItem(RETRY_KEY, '1')
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
      if (hasChunkFailureMessage(message)) {
        tryReload()
      }
    }

    function onUnhandledRejection(event) {
      const reason = event?.reason
      const message = reason?.message || reason || ''
      if (hasChunkFailureMessage(message)) {
        tryReload()
      }
    }

    window.addEventListener('error', onError, true)
    window.addEventListener('unhandledrejection', onUnhandledRejection)

    // Clear retry flag once a healthy page load settles.
    const timer = window.setTimeout(() => {
      sessionStorage.removeItem(RETRY_KEY)
    }, 2000)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('error', onError, true)
      window.removeEventListener('unhandledrejection', onUnhandledRejection)
    }
  }, [])

  return null
}
