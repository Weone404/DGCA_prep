import { AUTHOR, SITE_URL, blogPosts, getCategory } from './blogs'

const ORGANIZATION = {
  '@type': 'EducationalOrganization',
  '@id': `${SITE_URL}/#organization`,
  name: 'We One Aviation',
  alternateName: 'DGCA Exam Prep',
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/Logo.webp` },
  description:
    'Online DGCA ground school for Indian student pilots, covering CPL and ATPL theory papers, subject-wise tests, mock tests and study resources.',
  areaServed: { '@type': 'Country', name: 'India' },
  knowsAbout: [
    'DGCA CPL ground classes',
    'Air Navigation',
    'Aviation Meteorology',
    'Air Regulation',
    'Technical General',
    'RTR(A)',
    'DGCA Class 1 medical',
    'Commercial Pilot Licence India',
  ],
}

const AUTHOR_NODE = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#ground-school`,
  name: AUTHOR.name,
  url: AUTHOR.url,
  description: AUTHOR.description,
  parentOrganization: { '@id': `${SITE_URL}/#organization` },
}

function breadcrumb(trail) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map(([name, url], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: `${SITE_URL}${url}`,
    })),
  }
}

export function blogListingSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ORGANIZATION,
      breadcrumb([['Home', '/'], ['Blog', '/blogs']]),
      {
        '@type': 'Blog',
        '@id': `${SITE_URL}/blogs#blog`,
        url: `${SITE_URL}/blogs`,
        name: 'DGCA Exam and Pilot Career Blog',
        description:
          'Long-form, answer-first guides on DGCA CPL and ATPL exams, licensing, medicals, training cost and pilot careers in India.',
        inLanguage: 'en-IN',
        publisher: { '@id': `${SITE_URL}/#organization` },
        blogPost: blogPosts.map((post) => ({
          '@type': 'BlogPosting',
          '@id': `${SITE_URL}/blog/${post.slug}#article`,
          headline: post.title,
          url: `${SITE_URL}/blog/${post.slug}`,
          datePublished: post.publishedDate,
          dateModified: post.modifiedDate,
          wordCount: post.wordCount,
          timeRequired: `PT${post.readingMinutes}M`,
          image: `${SITE_URL}${post.coverImage}`,
          author: { '@id': `${SITE_URL}/#ground-school` },
        })),
      },
      {
        '@type': 'ItemList',
        '@id': `${SITE_URL}/blogs#index`,
        itemListOrder: 'https://schema.org/ItemListOrderDescending',
        numberOfItems: blogPosts.length,
        itemListElement: blogPosts.map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${SITE_URL}/blog/${post.slug}`,
          name: post.title,
        })),
      },
    ],
  }
}

function stepSections(post) {
  return (post.content.sections || []).filter((section) => section.steps?.length)
}

export function blogPostSchema(post) {
  const url = `${SITE_URL}/blog/${post.slug}`
  const category = getCategory(post.category)
  const { content } = post

  const article = {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    isPartOf: { '@id': `${SITE_URL}/blogs#blog` },
    headline: post.title,
    description: post.excerpt,
    abstract: content.intro,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: {
      '@type': 'ImageObject',
      url: `${SITE_URL}${post.coverImage}`,
      width: 1200,
      height: 675,
      caption: post.title,
    },
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate,
    inLanguage: 'en-IN',
    wordCount: post.wordCount,
    timeRequired: `PT${post.readingMinutes}M`,
    articleSection: category ? category.label : undefined,
    keywords: (post.keywords || []).join(', '),
    author: { '@id': `${SITE_URL}/#ground-school` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    about: { '@type': 'Thing', name: category ? category.label : 'DGCA pilot training' },
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'student',
      audienceType: 'Student pilots in India',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#summary-heading + p', '.dgca-key-facts'],
    },
    citation: (post.sources || []).map(([name, sourceUrl]) => ({
      '@type': 'CreativeWork',
      name,
      url: sourceUrl,
    })),
    articleBody: [
      content.intro,
      ...(content.sections || []).flatMap((section) => [section.heading, ...(section.paragraphs || [])]),
    ].join(' '),
  }

  if (content.keyFacts?.length) {
    article.additionalProperty = content.keyFacts.map(([name, value]) => ({
      '@type': 'PropertyValue',
      name,
      value,
    }))
  }

  const graph = [
    ORGANIZATION,
    AUTHOR_NODE,
    breadcrumb([['Home', '/'], ['Blog', '/blogs'], [post.title, `/blog/${post.slug}`]]),
    article,
  ]

  if (content.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      isPartOf: { '@id': url },
      mainEntity: content.faqs.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    })
  }

  for (const [index, section] of stepSections(post).entries()) {
    graph.push({
      '@type': 'HowTo',
      '@id': `${url}#howto-${index + 1}`,
      name: section.heading,
      description: (section.paragraphs || [])[0] || section.heading,
      totalTime: section.totalTime,
      step: section.steps.map(([name, text], stepIndex) => ({
        '@type': 'HowToStep',
        position: stepIndex + 1,
        name,
        text,
      })),
    })
  }

  if (content.glossary?.length) {
    graph.push({
      '@type': 'DefinedTermSet',
      '@id': `${url}#glossary`,
      name: `${post.title} — key terms`,
      hasDefinedTerm: content.glossary.map(([term, definition]) => ({
        '@type': 'DefinedTerm',
        name: term,
        description: definition,
        inDefinedTermSet: { '@id': `${url}#glossary` },
      })),
    })
  }

  if (content.quiz?.length) {
    graph.push({
      '@type': 'Quiz',
      '@id': `${url}#quiz`,
      name: `${post.title} — practice questions`,
      about: { '@type': 'Thing', name: 'DGCA examination preparation' },
      educationalLevel: 'DGCA CPL theory',
      hasPart: content.quiz.map((item) => ({
        '@type': 'Question',
        eduQuestionType: 'Multiple choice',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.options[item.answer],
          comment: { '@type': 'Comment', text: item.explanation },
        },
        suggestedAnswer: item.options
          .map((option, index) => ({ option, index }))
          .filter(({ index }) => index !== item.answer)
          .map(({ option }) => ({ '@type': 'Answer', text: option })),
      })),
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}
