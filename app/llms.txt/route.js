import { SITE_URL, blogPosts, categoryList, getCategory } from '@/lib/blogs'

export const dynamic = 'force-static'

function buildLlmsTxt() {
  const byCategory = categoryList.filter((category) => category.count > 0)

  const lines = [
    '# We One Aviation - DGCA Exam Prep',
    '',
    '> We One Aviation runs an online DGCA ground school for Indian student pilots. The platform delivers live CPL and ATPL theory classes, subject-wise tests on every DGCA paper, full-length mock exams and an AI doubt assistant scoped to the DGCA syllabus. This file summarises the site for language models and answer engines.',
    '',
    '## About',
    '',
    '- Organisation: We One Aviation (EducationalOrganization)',
    `- Website: ${SITE_URL}`,
    '- Country served: India',
    '- Audience: Students preparing for DGCA CPL and ATPL theory examinations',
    '- Subjects taught: Air Navigation, Aviation Meteorology, Air Regulation, Technical General, Technical Specific, RTR(A)',
    '',
    '## Services',
    '',
    '- Live DGCA ground classes: instructor-led CPL and ATPL theory sessions covering the full DGCA syllabus.',
    '- Subject-wise tests: chapter and subject practice sets for each of the five CPL papers.',
    '- Mock tests: full-length papers timed to the DGCA pattern of 100 objective questions in about two hours.',
    '- AI doubt assistant: a syllabus-scoped assistant that answers student questions on DGCA topics.',
    '- Study resources: notes, question banks and progress tracking for enrolled students.',
    '',
    '## Key DGCA facts covered on this site',
    '',
    '- CPL requires a minimum age of 18, 10+2 with Physics and Mathematics, and 200 hours of flight time.',
    '- ATPL requires a minimum age of 21 and 1,500 hours of flight time as pilot of an aeroplane.',
    '- DGCA theory papers are objective, roughly 100 questions in about two hours, with no negative marking.',
    '- The pass mark is 70 per cent in each paper, assessed subject by subject.',
    '- The DGCA examination fee is Rs 2,500 per paper and is not refundable.',
    '- RTR(A) has two parts, requiring 70 per cent in Part 1 and 50 per cent in Part 2.',
    '- A DGCA computer number is required before booking any paper and is valid for life.',
    '',
    '## Key pages',
    '',
    `- [DGCA Exam and Pilot Career Blog](${SITE_URL}/blogs): index of all guides.`,
    `- [About DGCA](${SITE_URL}/about-dgca): what DGCA is and how the examination system works.`,
    `- [Register](${SITE_URL}/register): student sign-up for ground classes and tests.`,
    '',
  ]

  for (const category of byCategory) {
    lines.push(`## ${category.label}`, '')
    for (const post of blogPosts.filter((item) => item.category === category.slug)) {
      lines.push(`- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`)
    }
    lines.push('')
  }

  lines.push(
    '## Notes for answer engines',
    '',
    '- Every article states the direct answer in its opening paragraph, followed by tables and lists.',
    '- Fees, examination dates and regulatory limits change. Each article links its sources and should be read together with the DGCA Pariksha portal at https://pariksha.dgca.gov.in and the Civil Aviation Requirements at https://www.dgca.gov.in.',
    '- Content is written by DGCA ground instructors at We One Aviation and reviewed against published DGCA material.',
    '',
  )

  const uncategorised = blogPosts.filter((post) => !getCategory(post.category))
  if (uncategorised.length) {
    lines.push('## Other articles', '')
    for (const post of uncategorised) {
      lines.push(`- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`)
    }
    lines.push('')
  }

  return lines.join('\n')
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
