'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import AppShell from '@/components/AppShell'
import { getExam } from '@/lib/exams'
import Simulator from '@/components/Simulator'

export default function RTRExamPage() {
  const { examId } = useParams()
  const exam = getExam(examId)
  return <AppShell title={exam?.title || 'RTR Simulator'}>
    {exam ? <Simulator key={exam.id} exam={exam} /> : <div className="page empty-state"><h1>Exam not found</h1><p><Link href="/rtr-practice">Back to exams</Link></p></div>}
  </AppShell>
}
