import { SubjectTestsPage } from '@/app/subject-tests/page'

const CPL_SUBJECTS = [
  { name: 'Air Regulations' },
  { name: 'Meteorology' },
  { name: 'Navigation' },
  { name: 'Technical General' },
  { name: 'Radio Telephony' },
]

export default function CplPage() {
  return <SubjectTestsPage courseSubjectDefinitions={CPL_SUBJECTS} pageTitle="CPL" />
}
