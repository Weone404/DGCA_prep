import Link from 'next/link'
import AppShell from '@/components/AppShell'
import {
  BookOpen,
  Calculator,
  Cloud,
  CloudSun,
  Gauge,
  Map,
  MessageSquareText,
  Route,
  Scale,
  TowerControl,
} from 'lucide-react'

const tools = [
  { id: 'ai-doubt-chat', title: 'AI Doubt Chat', icon: MessageSquareText, href: '/ai-doubt-chat' },
  { id: 'metar-decoder', title: 'METAR Decoder', icon: Cloud },
  { id: 'taf-decoder', title: 'TAF Decoder', icon: CloudSun },
  { id: 'cx3-calculator', title: 'CX-3 Calculator', icon: Calculator },
  { id: 'scientific-calculator', title: 'Scientific Calculator', icon: Calculator },
  { id: 'log-books', title: 'Log Books', icon: BookOpen },
  { id: 'flight-planning', title: 'Flight Planning', icon: Route },
  { id: 'weather', title: 'Weather', icon: CloudSun },
  { id: 'charts-navigation', title: 'Charts & Navigation', icon: Map },
  { id: 'performance', title: 'Performance', icon: Gauge },
  { id: 'weight-balance', title: 'Weight & Balance', icon: Scale },
  { id: 'atc-airport', title: 'ATC & Airport', icon: TowerControl },
]

function ToolCard({ tool }) {
  const { icon: Icon, title, href } = tool
  const content = (
    <>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h2 className="mt-5 font-display text-base font-semibold text-ink">{title}</h2>
      <span className="mt-auto pt-5 text-sm font-semibold text-brand">
        Open <span aria-hidden="true">→</span>
      </span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className="card flex min-h-44 flex-col p-5 transition-shadow hover:shadow-md">
        {content}
      </Link>
    )
  }

  return (
    <div className="card flex min-h-44 flex-col p-5 transition-shadow hover:shadow-md">
      {content}
    </div>
  )
}

export default function ToolsPage() {
  return (
    <AppShell title="Tools">
      <div>
        <div className="mb-6">
          <h1 className="font-display text-2xl font-bold text-ink">Tools</h1>
          <p className="mt-2 text-sm leading-6 text-muted">
            Useful aviation tools and calculators for pilots and aviation students.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </AppShell>
  )
}
