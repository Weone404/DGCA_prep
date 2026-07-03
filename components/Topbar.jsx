'use client'

import { useState } from 'react'
import Icon from './Icon'
import { NAV_ITEMS } from '@/lib/data'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'

export default function Topbar({ title }) {
  const [query, setQuery] = useState('')
  const [openMenu, setOpenMenu] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth()
  const pageTitle = title || NAV_ITEMS.find((n) => pathname?.startsWith(n.href))?.label || 'WeOne aviation'

  return (
    <header className="flex items-center justify-between gap-4 px-6 lg:px-8 pt-6 pb-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-display font-bold text-ink">{pageTitle}</h1>
        <div className="hidden md:flex items-center gap-2 bg-white border border-line rounded-full px-3 py-2 w-64 shadow-card">
          <Icon name="search" size={16} className="text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anything..."
            className="bg-transparent outline-none text-sm text-ink placeholder:text-muted w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-muted hover:text-brand transition-colors">
          <Icon name="bell" size={18} />
          <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-coral" />
        </button>

        {user ? (
          <div className="relative">
            <button onClick={() => setOpenMenu((v) => !v)} className="flex items-center gap-2">
              <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover" />
              <span className="hidden sm:block text-sm font-semibold text-ink">{user.name}</span>
              <Icon name="chevron-down" size={16} className="text-muted" />
            </button>
            {openMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-card border border-line py-2 z-20">
                <a href="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-ink hover:bg-canvas">
                  <Icon name="user" size={15} /> My Profile
                </a>
                <button 
                  onClick={() => {
                    logout()
                    setOpenMenu(false)
                    router.push('/')
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-coral hover:bg-canvas">
                  <Icon name="logout" size={15} /> Log out
                </button>
              </div>
            )}
          </div>
        ) : (
          <a 
            href="/login" 
            className="bg-brand hover:bg-brand-dark transition-colors text-white text-sm font-semibold px-6 py-2.5 rounded-xl"
          >
            Login
          </a>
        )}
      </div>
    </header>
  )
}
