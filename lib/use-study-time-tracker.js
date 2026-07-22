'use client'

import { useEffect, useRef } from 'react'

export function useStudyTimeTracker(email) {
  const accumulatedRef = useRef(0)
  const intervalRef = useRef(null)
  const visibilityListenerRef = useRef(null)
  const pagehideListenerRef = useRef(null)
  const beforeunloadListenerRef = useRef(null)

  // Flush accumulated seconds using sendBeacon
  const flushWithBeacon = (seconds) => {
    if (seconds <= 0 || !email) return

    try {
      const payload = JSON.stringify({ userEmail: email, seconds })
      navigator.sendBeacon('/api/study-time', new Blob([payload], { type: 'application/json' }))
    } catch (err) {
      console.error('Failed to send beacon:', err)
    }
  }

  // Flush accumulated seconds using fetch
  const flushWithFetch = async (seconds) => {
    if (seconds <= 0 || !email) return

    try {
      await fetch('/api/study-time', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail: email, seconds }),
        keepalive: true,
      })
      accumulatedRef.current = 0
    } catch (err) {
      console.error('Failed to flush study time:', err)
    }
  }

  useEffect(() => {
    if (!email) return

    // Set up interval to flush every 20 seconds
    intervalRef.current = setInterval(async () => {
      if (document.visibilityState === 'visible' && accumulatedRef.current > 0) {
        await flushWithFetch(accumulatedRef.current)
      }
    }, 20000)

    // Track visibility changes
    visibilityListenerRef.current = () => {
      if (document.visibilityState === 'hidden' && accumulatedRef.current > 0) {
        flushWithBeacon(accumulatedRef.current)
        accumulatedRef.current = 0
      }
    }
    document.addEventListener('visibilitychange', visibilityListenerRef.current)

    // Handle page hide
    pagehideListenerRef.current = () => {
      if (accumulatedRef.current > 0) {
        flushWithBeacon(accumulatedRef.current)
        accumulatedRef.current = 0
      }
    }
    window.addEventListener('pagehide', pagehideListenerRef.current)

    // Handle beforeunload
    beforeunloadListenerRef.current = () => {
      if (accumulatedRef.current > 0) {
        flushWithBeacon(accumulatedRef.current)
        accumulatedRef.current = 0
      }
    }
    window.addEventListener('beforeunload', beforeunloadListenerRef.current)

    // Accumulate time every second if tab is visible
    const timeoutRef = setInterval(() => {
      if (document.visibilityState === 'visible') {
        accumulatedRef.current += 1
      }
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
      clearInterval(timeoutRef)
      document.removeEventListener('visibilitychange', visibilityListenerRef.current)
      window.removeEventListener('pagehide', pagehideListenerRef.current)
      window.removeEventListener('beforeunload', beforeunloadListenerRef.current)

      // Flush on unmount
      if (accumulatedRef.current > 0) {
        flushWithBeacon(accumulatedRef.current)
        accumulatedRef.current = 0
      }
    }
  }, [email])
}
