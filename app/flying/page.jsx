import AppShell from '@/components/AppShell'
import {
  BadgeCheck,
  BookOpen,
  FileText,
  GraduationCap,
  MessageSquareText,
  Plane,
  Target,
  UserRound,
} from 'lucide-react'

const flyingOptions = [
  { id: 'flying-training', title: 'Flying Training', icon: Plane, tone: 'brand' },
  { id: 'dgca-documents', title: 'DGCA Documents', icon: FileText, tone: 'violet' },
  { id: 'logbook', title: 'Logbook', icon: BookOpen, tone: 'coral' },
  { id: 'simulator', title: 'Simulator', icon: Target, tone: 'brand' },
  { id: 'cabin-crew', title: 'Cabin Crew', icon: UserRound, tone: 'violet' },
  { id: 'ground-staff', title: 'Ground Staff', icon: GraduationCap, tone: 'coral' },
  { id: 'hospitality-training', title: 'Hospitality Training', icon: BadgeCheck, tone: 'brand' },
  { id: 'customer-services', title: 'Customer Services', icon: MessageSquareText, tone: 'violet' },
]

const toneClasses = {
  brand: 'bg-brand/10 text-brand',
  violet: 'bg-violet/10 text-violet',
  coral: 'bg-coral/10 text-coral',
}

export default function FlyingPage() {
  return (
    <AppShell title="Flying">
      <div>
        <h1 className="sr-only">Flying</h1>
        <div className="mb-6">
          <p className="text-sm leading-6 text-muted">
            Explore aviation training, documentation, simulation, and career preparation resources.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {flyingOptions.map(({ id, title, icon: Icon, tone }) => (
            <div key={id} className="card flex min-h-44 flex-col p-5 transition-shadow hover:shadow-md">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${toneClasses[tone]}`}>
                <Icon size={22} aria-hidden="true" />
              </div>
              <h2 className="mt-5 font-display text-base font-semibold text-ink">{title}</h2>
              <span className="mt-auto pt-5 text-sm font-semibold text-brand">Explore <span aria-hidden="true">→</span></span>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  )
}
