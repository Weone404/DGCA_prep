'use client'

export default function Error({ reset }) {
  return <div className="page error-state"><h1>RTR practice is unavailable</h1><p>Something went wrong while loading the simulator.</p><button className="btn primary" onClick={() => reset()}>Try again</button></div>
}
