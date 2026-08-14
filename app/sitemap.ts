import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const siteUrl = 'https://swira.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/servicios/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/casos/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/nosotros/`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${siteUrl}/contacto/`, changeFrequency: 'yearly', priority: 0.7 },
  ]
}
