import AppShell from '@/components/AppShell'

export const metadata = {
  title: 'DGCA Exam Guide for Aspiring Commercial Pilots | We One Aviation',
  description: 'Learn what the DGCA exam covers, who should take it, and why it matters for a Commercial Pilot License in India.',
  keywords: ['DGCA exam', 'DGCA CPL', 'Commercial Pilot License India', 'Air Navigation', 'Air Regulations', 'Meteorology'],
}

export default function AboutDgcaPage() {
  return (
    <AppShell title="About DGCA">
      <article className="about-dgca-content mx-auto max-w-4xl py-4 text-slate-900 dark:text-slate-100">
        <header className="border-b border-line pb-8 dark:border-slate-700">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Pilot training in India</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">DGCA Exam Preparation Guide for Aspiring Commercial Pilots</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">The Directorate General of Civil Aviation (DGCA) is India&apos;s civil aviation regulator. Its examinations test the aviation knowledge required by student pilots working toward a professional flying career.</p>
        </header>

        <section className="border-b border-line py-8 dark:border-slate-700">
          <h2 className="font-display text-2xl font-semibold">What is the DGCA exam?</h2>
          <p className="mt-4 text-base leading-7 text-muted">The DGCA theory examinations assess whether a pilot understands the rules, procedures, aircraft systems, navigation methods, and weather knowledge needed for safe flight operations. Candidates usually prepare for these subjects alongside their flight training.</p>
          <p className="mt-4 text-base leading-7 text-muted">The exam is an important part of the path toward a Commercial Pilot License (CPL) in India. It connects classroom learning with the practical decisions pilots make before and during a flight.</p>
        </section>

        <section className="border-b border-line py-8 dark:border-slate-700">
          <h2 className="font-display text-2xl font-semibold">Who should take it?</h2>
          <p className="mt-4 text-base leading-7 text-muted">The DGCA exam is intended for student pilots and aspiring commercial pilots who want to build a career with an airline, charter operator, flight school, or other commercial aviation organization.</p>
          <p className="mt-4 text-base leading-7 text-muted">Strong preparation is useful both for passing the examinations and for developing the disciplined knowledge expected of a professional pilot.</p>
        </section>

        <section className="border-b border-line py-8 dark:border-slate-700">
          <h2 className="font-display text-2xl font-semibold">DGCA Exam Subjects: Aviation Navigation and Meteorology</h2>
          <div className="mt-5 space-y-6">
            <div><h3 className="text-lg font-semibold">Air Navigation</h3><p className="mt-2 text-base leading-7 text-muted">Covers charts, flight planning, navigation systems, instruments, and the calculations used to plan a safe route.</p></div>
            <div><h3 className="text-lg font-semibold">Air Regulations</h3><p className="mt-2 text-base leading-7 text-muted">Covers aviation law, operating procedures, pilot licensing, airspace rules, and the standards that govern civil aviation.</p></div>
            <div><h3 className="text-lg font-semibold">Technical General</h3><p className="mt-2 text-base leading-7 text-muted">Covers aircraft systems, engines, aerodynamics, electricity, instrumentation, and the technical principles behind aircraft operation.</p></div>
            <div><h3 className="text-lg font-semibold">Technical Specific</h3><p className="mt-2 text-base leading-7 text-muted">Covers the aircraft type being operated, including its systems, limitations, performance, and operating procedures.</p></div>
            <div><h3 className="text-lg font-semibold">Meteorology</h3><p className="mt-2 text-base leading-7 text-muted">Covers weather systems, forecasts, reports, atmospheric conditions, and the effect of weather on flight planning.</p></div>
          </div>
        </section>

        <section className="border-b border-line py-8 dark:border-slate-700">
          <h2 className="font-display text-2xl font-semibold">Why DGCA Exam Preparation Matters for CPL Ground Classes</h2>
          <p className="mt-4 text-base leading-7 text-muted">A Commercial Pilot License requires more than flight hours. A professional pilot must also understand the regulations, weather, navigation, aircraft systems, and operating limitations that support safe decisions.</p>
          <p className="mt-4 text-base leading-7 text-muted">Preparing for DGCA examinations gives aspiring pilots the theoretical foundation needed to progress through flight training and operate responsibly in the aviation environment.</p>
        </section>

        <section className="py-8">
          <h2 className="font-display text-2xl font-semibold">How to Prepare for the DGCA Mock Test and DGCA Exam</h2>
          <p className="mt-4 text-base leading-7 text-muted">Study each subject consistently, revise important concepts, practise examination-style questions, and connect theory to real flight operations. Organised notes and regular revision can make preparation more focused and effective.</p>
        </section>
      </article>
    </AppShell>
  )
}
