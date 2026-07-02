/**
 * Site-level constants shared across SEO surfaces (sitemap, robots, OG images,
 * JSON-LD structured data).
 *
 * In production set NEXT_PUBLIC_SITE_URL on Vercel → Environment Variables
 * to whatever domain the site actually lives on, e.g. https://stagepulse.live
 * — the fallback below is only used in local dev / preview builds when the
 * env var is missing.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://stagepulse.live'
).replace(/\/$/, '')

export const SITE_NAME = 'StagePulse'

export const SITE_DESCRIPTION =
  'StagePulse is an independent music publication. Concert reviews, artist features, and scene reporting — filed from the rooms, not the press releases.'

export const SITE_AUTHOR = 'Diego Jauregui'
