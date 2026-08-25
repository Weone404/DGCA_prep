'use client'

import dynamic from 'next/dynamic'

const FloatingCalculator = dynamic(() => import('./FloatingCalculator'), { ssr: false })
const E6BFlightComputer = dynamic(() => import('./E6BFlightComputer'), { ssr: false })

export default function DeferredTools() {
  return (
    <>
      <FloatingCalculator />
      <E6BFlightComputer />
    </>
  )
}