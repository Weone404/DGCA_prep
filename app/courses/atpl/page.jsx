import { SubjectTestsPage } from '@/app/subject-tests/page'

const ATPL_SUBJECTS = [
  { name: 'Meteorology' },
  { name: 'Radio', sourceNames: ['Radio Telephony'], testNames: ['Radio Telephony'] },
  { name: 'Instrument', sourceNames: ['Instrument Navigation'], testNames: ['Instrument Navigation'] },
]

export default function AtplPage() {
  return <SubjectTestsPage courseSubjectDefinitions={ATPL_SUBJECTS} pageTitle="ATPL" />
}
