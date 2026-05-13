import type { MetadataRoute } from 'next'
import { SPEAKING_ENGAGEMENTS, JUDGING_OPPORTUNITIES } from './data'

const SITE_URL = 'https://fofadiyapayal.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  const speakingRoutes: MetadataRoute.Sitemap = SPEAKING_ENGAGEMENTS.map((e) => ({
    url: `${SITE_URL}/speaking/${e.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const judgingRoutes: MetadataRoute.Sitemap = JUDGING_OPPORTUNITIES.map((o) => ({
    url: `${SITE_URL}/judging/${o.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...speakingRoutes, ...judgingRoutes]
}
