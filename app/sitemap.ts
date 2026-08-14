import type { MetadataRoute } from 'next'
import { categoryToSlug, getAllPosts, getCategories } from '@/lib/blog'

export const dynamic = 'force-static'

const siteUrl = 'https://swira.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/servicios/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/casos/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/nosotros/`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${siteUrl}/contacto/`, changeFrequency: 'yearly', priority: 0.7 },
  ]
  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({ url: `${siteUrl}/blog/${post.slug}/`, lastModified: post.date, changeFrequency: 'monthly', priority: 0.7 }))
  const categories: MetadataRoute.Sitemap = getCategories().map((category) => ({ url: `${siteUrl}/blog/categoria/${categoryToSlug(category)}/`, changeFrequency: 'monthly', priority: 0.6 }))
  return [...staticRoutes, { url: `${siteUrl}/blog/`, changeFrequency: 'weekly', priority: 0.8 }, ...categories, ...posts]
}
