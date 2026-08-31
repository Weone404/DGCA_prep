export const SITE_URL = 'https://www.dgcaexam.com'

export const AUTHOR = {
  name: 'We One Aviation Ground School',
  url: `${SITE_URL}/about-dgca`,
  description:
    'Ground instructors at We One Aviation who teach DGCA CPL and ATPL theory papers to student pilots preparing on eGCA and DGCA Pariksha.',
}

export const CATEGORIES = {
  exams: { slug: 'dgca-exams', label: 'DGCA Exams' },
  licensing: { slug: 'licensing', label: 'Licensing & Regulation' },
  medical: { slug: 'medical', label: 'Medical & Fitness' },
  career: { slug: 'career', label: 'Careers & Salary' },
  cost: { slug: 'cost-planning', label: 'Cost & Planning' },
}

export function slugify(title) {
  return title
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function sectionText(section) {
  const parts = [section.heading]
  parts.push(...(section.paragraphs || []))
  parts.push(...(section.list || []))
  parts.push(...(section.pitfalls || []))
  parts.push(...(section.numbered || []).flat())
  parts.push(...(section.steps || []).flat())
  if (section.note) parts.push(section.note)
  if (section.table) parts.push(...section.table.headers, ...section.table.rows.flat())
  if (section.example) {
    parts.push(section.example.title, section.example.answer)
    parts.push(...(section.example.given || []))
    parts.push(...(section.example.working || []).flat())
  }
  if (section.diagram?.caption) parts.push(section.diagram.caption)
  return parts
}

function countWords(post) {
  const parts = [post.excerpt, post.content.intro]
  parts.push(...(post.content.keyFacts || []).flat())
  for (const section of post.content.sections || []) parts.push(...sectionText(section))
  parts.push(...(post.content.glossary || []).flat())
  for (const item of post.content.quiz || []) {
    parts.push(item.question, item.explanation, ...item.options)
  }
  for (const [question, answer] of post.content.faqs || []) parts.push(question, answer)
  return parts.filter(Boolean).join(' ').trim().split(/\s+/).length
}

export function createPost(post) {
  const words = countWords(post)
  return {
    ...post,
    slug: post.slug || slugify(post.title),
    modifiedDate: post.modifiedDate || post.publishedDate,
    author: post.author || AUTHOR.name,
    wordCount: words,
    readingMinutes: Math.max(3, Math.round(words / 200)),
  }
}
