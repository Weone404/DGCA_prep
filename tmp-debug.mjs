import { SUBJECT_TESTS } from './lib/data.js'
import { getSubjectTestQuestionsPayload, getQuestionsForSubjectTest } from './lib/question-bank.js'
const filters = SUBJECT_TESTS.filter(t => t.subject === 'Air Regulations')
console.log('total air regulations tests', filters.length)
for (const test of filters) {
  const payload = getSubjectTestQuestionsPayload(String(test.id), test.questions)
  console.log('---')
  console.log('test id', test.id, 'title', test.title)
  console.log('chapter payload title', payload.chapter?.title)
  console.log('chapter payload id', payload.chapter?.id)
  console.log('payload total', payload.questions.length)
  console.log('first q id', payload.questions[0]?.id)
}
