import { ImageResponse } from 'next/og'
import { articles } from '@/lib/data'

/**
 * Per-article OpenGraph image — auto-generated for every article on the site.
 *
 * When someone shares /articles/<slug> on Instagram, X, iMessage, Slack, etc.,
 * the preview card renders this 1200×630 image: the publication's branding,
 * the article's category tag, the article title, the author + date.
 *
 * Rendered at request time and cached at the edge. No manual asset
 * management required as new articles are added to `lib/data.ts`.
 */

export const runtime = 'edge'
export const alt = 'StagePulse article'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({
  params,
}: {
  params: { slug: string }
}) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    // Fallback rendering when the slug doesn't match — shouldn't happen in
    // practice because generateStaticParams pins this to known slugs, but
    // safer than throwing.
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            color: '#ffffff',
            fontSize: 64,
            fontStyle: 'italic',
          }}
        >
          StagePulse
        </div>
      ),
      { ...size }
    )
  }

  // Truncate very long titles so the OG image never overflows its frame.
  const title =
    article.title.length > 120
      ? article.title.slice(0, 117) + '...'
      : article.title

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'radial-gradient(ellipse at 18% 22%, rgba(232,101,26,0.28) 0%, transparent 55%), radial-gradient(ellipse at 82% 78%, rgba(232,101,26,0.14) 0%, transparent 50%)',
          padding: 80,
          color: '#ffffff',
        }}
      >
        {/* Top — wordmark + category eyebrow */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', fontSize: 32, letterSpacing: '-0.01em' }}>
            <span style={{ fontStyle: 'italic' }}>Stage</span>
            <span style={{ fontWeight: 700 }}>Pulse</span>
            <span style={{ color: '#e8651a', marginLeft: 12, fontSize: 24 }}>★</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              color: '#e8651a',
              fontSize: 22,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
            }}
          >
            <span>★</span>
            <span>{article.category}</span>
          </div>
        </div>

        {/* Middle — the headline */}
        <div
          style={{
            display: 'flex',
            fontSize: title.length > 80 ? 60 : 76,
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
            maxWidth: 1040,
            color: '#ffffff',
          }}
        >
          {title}
        </div>

        {/* Bottom — byline + meta */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
            color: '#b8b8b8',
            fontSize: 22,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ color: '#ffffff' }}>{article.author}</span>
            <span style={{ color: '#5a5a5a' }}>·</span>
            <span>{article.displayDate}</span>
            <span style={{ color: '#5a5a5a' }}>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
