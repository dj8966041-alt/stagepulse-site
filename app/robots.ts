import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

/**
 * Auto-generated /robots.txt.
 *
 * Allows all standard crawlers full access and points them at the sitemap so
 * Google, Bing, and friends can find every article and tag page without
 * relying on hyperlink discovery alone.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
