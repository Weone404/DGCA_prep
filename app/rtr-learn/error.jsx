'use client'

export default function Error({ reset }) {
  return <div className="page error-state"><h1>Learning library is unavailable</h1><p>Something went wrong while loading the phraseology library.</p><button className="btn primary" onClick={() => reset()}>Try again</button></div>
}
