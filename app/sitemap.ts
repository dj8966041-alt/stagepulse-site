import type { MetadataRoute } from 'next'
import { articles } from '@/lib/data'
import { getAllTags } from '@/lib/tags'
import { SITE_URL } from '@/lib/site'

/**
 * Auto-generated /sitemap.xml.
 *
 * Lists every public route on the site:
 *   - static pages (home, articles index, calendar, prints, about, apply, contact)
 *   - every article at /articles/<slug>
 *   - every tag page at /articles/tag/<slug>
 *
 * Google and Bing read this on a schedule, so as new articles are added to
 * `lib/data.ts` they automatically show up in the next crawl without any
 * manual sitemap maintenance.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE_URL}/articles`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/calendar`, lastModified: now, changeFrequency: 'hourly', priority: 0.8 },
    { url: `${SITE_URL}/prints`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/apply`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/articles/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const tagRoutes: MetadataRoute.Sitemap = getAllTags().map((t) => ({
    url: `${SITE_URL}/articles/tag/${t.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.4,
  }))

  return [...staticRoutes, ...articleRoutes, ...tagRoutes]
}
