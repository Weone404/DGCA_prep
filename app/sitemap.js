import { blogPosts, categoryList } from '@/lib/blogs'

const BASE_URL = 'https://www.dgcaexam.com'

export default function sitemap() {
  const lastModified = new Date()
  const newestPost = blogPosts.reduce(
    (latest, post) => (post.modifiedDate > latest ? post.modifiedDate : latest),
    blogPosts[0].modifiedDate,
  )

  return [
    { url: BASE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about-dgca`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(`${newestPost}T00:00:00`),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...categoryList
      .filter((category) => category.count > 0)
      .map((category) => ({
        url: `${BASE_URL}/blogs#${category.slug}`,
        lastModified: new Date(`${newestPost}T00:00:00`),
        changeFrequency: 'weekly',
        priority: 0.6,
      })),
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(`${post.modifiedDate}T00:00:00`),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    { url: `${BASE_URL}/register`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/login`, lastModified, changeFrequency: 'monthly', priority: 0.4 },
  ]
}
