import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { articles, type Article } from '@/lib/data'
import { slugifyTag } from '@/lib/tags'
import { SITE_URL, SITE_NAME, SITE_AUTHOR } from '@/lib/site'
import ArticleCard from '@/components/ArticleCard'
import ArticleInlinePhotos from '@/components/ArticleInlinePhotos'
import ArticlePhotoGallery from '@/components/ArticlePhotoGallery'
import CityVenueGuide from '@/components/CityVenueGuide'
import { parsePhotoMarker } from '@/lib/photo-markers'

export const revalidate = 3600

/**
 * Score-based related-article picker.
 *
 * Scoring:
 *   +10 same category   — category is a strong signal of editorial type
 *    +3 per shared tag  — tags catch venue/artist/scene overlap
 *
 * Ties break on recency (newer first). If nothing scores above zero (e.g.
 * articles have no overlap at all), the most recent other articles fill the
 * remaining slots so the section always shows three picks.
 */
function pickRelated(current: Article, pool: Article[], n = 3): Article[] {
  const others = pool.filter((a) => a.slug !== current.slug)

  const scored = others.map((a) => {
    let score = 0
    if (a.category === current.category) score += 10
    const sharedTags = a.tags.filter((t) => current.tags.includes(t))
    score += sharedTags.length * 3
    return { article: a, score }
  })

  scored.sort(
    (a, b) =>
      b.score - a.score ||
      b.article.date.localeCompare(a.article.date)
  )

  const top = scored.slice(0, n).map((s) => s.article)

  // Backfill with the most recent articles if we didn't get enough.
  if (top.length < n) {
    const fillers = others
      .filter((a) => !top.includes(a))
      .sort((a, b) => b.date.localeCompare(a.date))
    for (const f of fillers) {
      if (top.length >= n) break
      top.push(f)
    }
  }

  return top
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}

  const url = `${SITE_URL}/articles/${article.slug}`

  return {
    title: article.title,
    description: article.subtitle,
    authors: [{ name: article.author }],
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: article.title,
      description: article.subtitle,
      siteName: SITE_NAME,
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
      // Next.js auto-detects opengraph-image.tsx colocated with this route
      // — if the article has a real heroImage we surface that *in addition*
      // so platforms that prefer photographic OG cards (Instagram, iMessage)
      // get the real concert image instead of the generated card.
      ...(article.heroImage
        ? { images: [{ url: article.heroImage, width: 1600, height: 1067, alt: article.title }] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.subtitle,
    },
  }
}

function renderText(text: string) {
  const boldRegex = /\*\*([^*]+)\*\*/g
  const nodes: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index))
    nodes.push(
      <strong key={match.index} className="text-sp-text font-semibold">
        {match[1]}
      </strong>
    )
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))
  return nodes
}

function renderNote(text: string) {
  const parts = text.split('aclfestival.com')
  return (
    <>
      {parts[0]}
      {parts.length > 1 && (
        <>
          <a
            href="https://www.aclfestival.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-sp-border hover:text-sp-accent transition-colors"
          >
            aclfestival.com
          </a>
          {parts[1]}
        </>
      )}
    </>
  )
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return notFound()

  const related = pickRelated(article, articles, 3)

  // JSON-LD structured data — gives Google explicit facts about the article
  // (author, publish date, headline, image, publisher) so it can render
  // article rich results and feed the Top Stories carousel down the line.
  const articleUrl = `${SITE_URL}/articles/${article.slug}`
  const ogImageUrl = `${articleUrl}/opengraph-image`
  const imageUrl = article.heroImage
    ? `${SITE_URL}${article.heroImage}`
    : ogImageUrl

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.subtitle,
    image: [imageUrl],
    datePublished: article.date,
    dateModified: article.date,
    author: [
      {
        '@type': 'Person',
        name: article.author,
        url: `${SITE_URL}/about`,
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/opengraph-image`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    keywords: article.tags.join(', '),
    articleSection: article.category,
    creator: SITE_AUTHOR,
  }

  return (
    <div className="bg-sp-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero — full-bleed photo with title overlay */}
      <section className="relative w-full min-h-[80svh] md:min-h-[88svh] overflow-hidden bg-sp-black">
        {article.heroImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.heroImage}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-sp-black" aria-hidden="true" />
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.5) 40%, rgba(10,10,10,0.2) 70%, rgba(10,10,10,0.55) 100%)',
          }}
        />

        <div className="relative z-10 max-w-screen-xl mx-auto px-5 md:px-8 pt-36 pb-14 min-h-[80svh] md:min-h-[88svh] flex flex-col justify-between">
          <Link
            href="/articles"
            className="inline-block text-[0.7rem] tracking-[0.25em] uppercase text-sp-soft hover:text-sp-accent transition-colors mb-10 w-fit"
          >
            ← Back to articles
          </Link>
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.35em] uppercase text-sp-accent mb-6">
              <span>★</span> {article.category}
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight text-sp-text mb-6 leading-[1.05] text-balance">
              {article.title}
            </h1>
            <p className="text-sp-soft text-base md:text-xl max-w-3xl mb-8 leading-relaxed font-light">
              {article.subtitle}
            </p>
            <div className="h-px w-full bg-sp-border mb-6 max-w-3xl" />
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.7rem] tracking-[0.2em] uppercase text-sp-muted">
              <span className="text-sp-text-2">{article.author}</span>
              <span className="text-sp-subtle">·</span>
              <span>{article.displayDate}</span>
              <span className="text-sp-subtle">·</span>
              <span>{article.readTime}</span>
              {article.venue && (
                <>
                  <span className="text-sp-subtle">·</span>
                  <span>{article.venue}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-screen-xl mx-auto px-5 md:px-8 py-16 md:py-24">
        {article.body.map((paragraph, i) => {
          if (paragraph.startsWith('[CITY_VENUES:') && paragraph.endsWith(']')) {
            const city = paragraph.slice('[CITY_VENUES:'.length, -1).trim()
            return <CityVenueGuide key={i} city={city} />
          }

          if (paragraph.startsWith('[GALLERY:') && paragraph.endsWith(']')) {
            return (
              <div key={i} className="max-w-5xl mx-auto my-14 md:my-20">
                <ArticlePhotoGallery items={parsePhotoMarker(paragraph)} />
              </div>
            )
          }

          if (paragraph.startsWith('[PHOTOS:') && paragraph.endsWith(']')) {
            return (
              <ArticleInlinePhotos key={i} items={parsePhotoMarker(paragraph)} />
            )
          }

          if (paragraph === '[CREDIT]') {
            return (
              <p
                key={i}
                className="max-w-prose text-sp-muted text-sm italic leading-relaxed mb-10 font-display"
              >
                Photos by Diego Jauregui
              </p>
            )
          }

          if (paragraph.startsWith('## ')) {
            return (
              <div key={i} className="max-w-prose mt-16 md:mt-20 mb-8">
                <h2 className="font-display italic text-3xl md:text-[2.5rem] tracking-tight text-sp-text leading-[1.1]">
                  {paragraph.slice(3)}
                </h2>
              </div>
            )
          }

          if (paragraph === '[TICKETS]') {
            return (
              <div key={i} className="max-w-prose mt-6 mb-12">
                <a
                  href="https://www.ticketmaster.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-sp-accent text-sp-black text-[0.7rem] tracking-[0.25em] uppercase font-semibold px-7 py-4 hover:bg-sp-accent-hover transition-colors"
                >
                  Get tickets on Ticketmaster
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            )
          }

          if (paragraph.startsWith('[NOTE] ')) {
            return (
              <p
                key={i}
                className="max-w-prose text-sp-muted text-sm italic leading-relaxed mt-16 pt-8 border-t border-sp-border-soft font-display"
              >
                {renderNote(paragraph.slice(7))}
              </p>
            )
          }

          // First paragraph gets a drop-cap-ish lead-in treatment
          const isLead = i === 0
          return (
            <p
              key={i}
              className={`max-w-prose text-sp-text-2 mb-7 ${
                isLead
                  ? 'text-lg md:text-xl font-light leading-[1.7]'
                  : 'text-base md:text-lg leading-[1.85] font-light'
              }`}
            >
              {renderText(paragraph)}
            </p>
          )
        })}
      </section>

      {/* Tags */}
      {article.tags.length > 0 && (
        <section className="border-t border-sp-border-soft">
          <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-10 md:py-14">
            <span className="block text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-5">
              Filed under
            </span>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/articles/tag/${slugifyTag(tag)}`}
                  className="text-[0.7rem] tracking-[0.18em] uppercase text-sp-soft border border-sp-border px-4 py-2 hover:border-sp-accent hover:text-sp-accent transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More Coverage — related articles, scored by shared category + tags */}
      {related.length > 0 && (
        <section className="border-t border-sp-border-soft bg-sp-card">
          <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="mb-10 md:mb-14 flex items-end justify-between flex-wrap gap-4">
              <h2 className="font-display italic text-3xl md:text-5xl text-sp-text leading-none tracking-tight">
                Related
              </h2>
              <Link
                href="/articles"
                className="text-[0.7rem] tracking-[0.25em] uppercase text-sp-muted hover:text-sp-accent transition-colors"
              >
                All articles →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-10 md:gap-y-16">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
