'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icon from './Icon'
import Image from 'next/image'
import { NAV_ITEMS } from '@/lib/data'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex flex-col w-[260px] shrink-0 bg-white px-5 py-6 h-screen sticky top-0 border-r border-line">
      <Link href="/dashboard" className="flex items-center gap-3 px-2 mb-8">
        <div className="w-11 h-11 rounded-2xl bg-brand flex items-center justify-center text-white font-display font-bold text-lg">W</div>
        <div>
          <p className="font-display font-bold text-ink leading-none">WeOne aviation</p>
          <p className="text-xs text-muted mt-1">Learn From Home</p>
        </div>
      </Link>

      <nav className="flex-1 overflow-y-auto pr-1 space-y-1">
        {NAV_ITEMS.map((item) => {
          const active = pathname?.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium transition-colors relative ${
                active ? 'text-brand bg-brand-light' : 'text-muted hover:bg-canvas hover:text-ink'
              }`}
            >
              {active && <span className="absolute left-[-20px] top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-brand" />}
              <Icon name={item.icon} size={19} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-6 rounded-xl2 bg-gradient-page p-4 text-center">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-white/70 flex items-center justify-center overflow-hidden mb-2">
          <Image
            src={encodeURI('/Flying around the world-bro.webp')}
            alt="Flying around the world"
            width={56}
            height={56}
            className="object-cover"
          />
        </div>
        
        <button className="mt-3 w-full bg-brand hover:bg-brand-dark transition-colors text-white text-sm font-semibold py-2.5 rounded-xl">
          Upgrade Now
        </button>
      </div>
    </aside>
  )
}
