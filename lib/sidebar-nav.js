import {
  Home,
  BookOpen,
  FileText,
  MessageSquareText,
  Video,
  Play,
  Mic,
  Target,
  BookMarked,
  UserRound,
  BadgeCheck,
  GraduationCap,
  Plane,
  Radio,
  ClipboardList,
  CircleHelp,
  Wrench,
} from 'lucide-react'

export const SIDEBAR_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: Home },
  { id: 'subject-tests', label: 'Subject Tests', href: '/subject-tests', icon: BookOpen },
  { id: 'class-test', label: 'Class Test', href: '/class-test', icon: FileText },
  { id: 'ai-doubt-chat', label: 'AI Doubt Chat', href: '/ai-doubt-chat', icon: MessageSquareText },
  {
    id: 'courses',
    label: 'Courses',
    href: '',
    icon: BookOpen,
    type: 'group',
    description: 'Explore pilot training and airline preparation courses.',
    children: [
      {
        id: 'cpl',
        label: 'CPL',
        href: '/courses/cpl',
        icon: Plane,
        description: 'Commercial Pilot Licence preparation and training.',
      },
      {
        id: 'atpl',
        label: 'ATPL',
        href: '/courses/atpl',
        icon: BadgeCheck,
        description: 'Airline Transport Pilot Licence preparation and training.',
      },
      {
        id: 'airlines-preparation',
        label: 'Airlines Preparation',
        href: '/courses/airlines-preparation',
        icon: GraduationCap,
        description: 'Prepare for airline selection, interviews, and assessments.',
      },
    ],
  },
  { id: 'live-classes', label: 'Live Classes', href: '/live-classes', icon: Video },
  { id: 'lectures', label: 'Lectures', href: '/lectures', icon: Play },
  { id: 'interview', label: 'Interview', href: 'https://avi-assess-io5m.vercel.app/', icon: Mic },
  { id: 'rtr', label: 'RTR', href: '/rtr-practice', icon: Radio },
  { id: 'mock-tests', label: 'Mock Tests', href: '/mock-tests', icon: Target },
  { id: 'resources', label: 'Resources', href: '/resources', icon: BookMarked },
  { id: 'flying', label: 'Flying', href: '/flying', icon: Plane },
  { id: 'tools', label: 'Tools', href: '/tools', icon: Wrench },
  {
    id: 'student-visa',
    label: 'Student Visa',
    href: '/student-visa',
    icon: BadgeCheck,
    type: 'group',
    description: 'Visa paperwork, admission letter guidance, and interview preparation.',
    children: [
      {
        id: 'usa-visa',
        label: 'USA Visa',
        href: '/student-visa/usa-visa/admission-letter/form',
        icon: CircleHelp,
        type: 'group',
        description: 'Open the admission letter flow for your USA visa application.',
        children: [
          {
            id: 'admission-letter',
            label: 'Admission Letter for Visa',
            href: '/student-visa/usa-visa/admission-letter',
            icon: ClipboardList,
            type: 'group',
            description: 'Prepare your visa ready documents and supporting forms.',
            children: [
              {
                id: 'admission-letter-form',
                label: 'Form',
                href: '/student-visa/usa-visa/admission-letter/form',
                icon: FileText,
                description: 'Fill out the admission letter request form.',
              },
            ],
          },
          {
            id: 'visa-interview',
            label: 'VISA Interview',
            href: '/student-visa/usa-visa/interview/interview-questions',
            icon: Mic,
            type: 'group',
            description: 'Go straight to the visa interview questions.',
            children: [
              {
                id: 'interview-questions',
                label: 'Interview Questions',
                href: '/student-visa/usa-visa/interview/interview-questions',
                icon: MessageSquareText,
                description: 'Review the most common interview questions.',
              },
            ],
          },
        ],
      },
    ],
  },
  { id: 'student-education-loan', label: 'Student Education Loan', href: '/student-education-loan', icon: GraduationCap },
  { id: 'flying-training-license', label: 'Flying Training License', href: '/flying-training-license', icon: Plane },
  { id: 'profile', label: 'Profile', href: '/profile', icon: UserRound },
]

export function findSidebarItem(items, id) {
  for (const item of items) {
    if (item.id === id) return item
    if (item.children) {
      const found = findSidebarItem(item.children, id)
      if (found) return found
    }
  }
  return null
}
