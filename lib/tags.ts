import { articles, type Article } from '@/lib/data'

/**
 * URL-safe slug for a tag string.
 *
 * Strips apostrophes, ampersands, dollar signs, asterisks, and other
 * punctuation; lowercases the result; joins spaces with hyphens.
 *
 *   "AT&T Stadium"      → "att-stadium"
 *   "Stubb's"           → "stubbs"
 *   "$uicideboy$"       → "uicideboy"
 *   "Saint Marys Strip" → "saint-marys-strip"
 */
export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export type TagSummary = {
  /** Display name (original casing). */
  tag: string
  /** URL slug. */
  slug: string
  /** Number of articles tagged with this. */
  count: number
}

/**
 * All unique tags across the article catalog, sorted by frequency desc, then
 * by display name asc. Tags that slugify to an empty string are skipped.
 */
export function getAllTags(): TagSummary[] {
  const counts = new Map<string, { tag: string; count: number }>()
  for (const a of articles) {
    for (const t of a.tags) {
      const slug = slugifyTag(t)
      if (!slug) continue
      const existing = counts.get(slug)
      if (existing) {
        existing.count++
      } else {
        counts.set(slug, { tag: t, count: 1 })
      }
    }
  }
  return Array.from(counts.entries())
    .map(([slug, { tag, count }]) => ({ slug, tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
}

/**
 * Resolve a tag slug → { display name, articles sorted by date desc }.
 *
 * Returns `null` when no article matches the slug (404 territory).
 */
export function getArticlesByTagSlug(
  slug: string
): { tag: string; articles: Article[] } | null {
  const normalized = slug.toLowerCase()
  const matches = articles.filter((a) =>
    a.tags.some((t) => slugifyTag(t) === normalized)
  )
  if (matches.length === 0) return null

  const first = matches[0]!
  const displayTag =
    first.tags.find((t) => slugifyTag(t) === normalized) ?? slug

  return {
    tag: displayTag,
    articles: matches.sort((a, b) => b.date.localeCompare(a.date)),
  }
}
