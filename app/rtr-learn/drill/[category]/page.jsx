'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import AppShell from '@/components/AppShell'
import { CATEGORIES } from '@/lib/learn'
import Drill from '@/components/Drill'

export default function RTRDrillPage() {
  const { category } = useParams()
  const cat = CATEGORIES.find((item) => item.id === category)
  return <AppShell title={cat?.title || 'Phraseology Drill'}>
    {cat ? <Drill key={cat.id} category={cat} /> : <div className="page empty-state"><h1>Category not found</h1><p><Link href="/rtr-learn">Back to library</Link></p></div>}
  </AppShell>
}
