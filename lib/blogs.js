import { AUTHOR, CATEGORIES, SITE_URL, slugify } from './blog-posts/_shared'

import howToBecomeAPilot from './blog-posts/how-to-become-a-pilot-in-india'
import cplEligibility from './blog-posts/dgca-cpl-eligibility'
import examSubjects from './blog-posts/dgca-exam-subjects-and-syllabus'
import examPattern from './blog-posts/dgca-exam-pattern-and-passing-marks'
import computerNumber from './blog-posts/dgca-computer-number'
import examDates from './blog-posts/dgca-exam-dates-2026'
import medical from './blog-posts/dgca-class-1-and-class-2-medical'
import trainingCost from './blog-posts/pilot-training-cost-in-india'
import rtrGuide from './blog-posts/rtr-a-exam-guide'
import conversion from './blog-posts/foreign-cpl-to-dgca-conversion'
import atpl from './blog-posts/dgca-atpl-requirements'
import pilotSalary from './blog-posts/pilot-salary-in-india'
import airHostessSalary from './blog-posts/air-hostess-salary-in-india'

export { AUTHOR, CATEGORIES, SITE_URL, slugify }

export const blogPosts = [
  howToBecomeAPilot,
  cplEligibility,
  examSubjects,
  examPattern,
  examDates,
  computerNumber,
  medical,
  trainingCost,
  rtrGuide,
  conversion,
  atpl,
  pilotSalary,
  airHostessSalary,
].sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1))

export const categoryList = Object.values(CATEGORIES).map((category) => ({
  ...category,
  count: blogPosts.filter((post) => post.category === category.slug).length,
}))

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getCategory(slug) {
  return Object.values(CATEGORIES).find((category) => category.slug === slug)
}

export function getRelatedPosts(post, limit = 3) {
  const explicit = (post.related || [])
    .map((slug) => getBlogPost(slug))
    .filter(Boolean)

  if (explicit.length >= limit) return explicit.slice(0, limit)

  const sameCategory = blogPosts.filter(
    (candidate) =>
      candidate.slug !== post.slug &&
      candidate.category === post.category &&
      !explicit.some((item) => item.slug === candidate.slug),
  )

  return [...explicit, ...sameCategory].slice(0, limit)
}
