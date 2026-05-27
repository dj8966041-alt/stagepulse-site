import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { articles, type Article } from '@/lib/data'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'
import ArticleCard from '@/components/ArticleCard'

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
  return { title: article.title, description: article.subtitle }
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

type PhotoItem = { src: string; alt: string }

function parsePhotos(marker: string): PhotoItem[] {
  // Format: [PHOTOS:src1|alt1;;src2|alt2;;...]
  const inner = marker.slice('[PHOTOS:'.length, -1)
  return inner
    .split(';;')
    .map((entry) => {
      const [src, alt] = entry.split('|')
      return { src: (src ?? '').trim(), alt: (alt ?? '').trim() }
    })
    .filter((item) => item.src.length > 0)
}

function PhotoGrid({ items }: { items: PhotoItem[] }) {
  const cols =
    items.length >= 3
      ? 'sm:grid-cols-3'
      : items.length === 2
      ? 'sm:grid-cols-2'
      : 'sm:grid-cols-1'

  return (
    <figure className={`my-14 md:my-20 grid grid-cols-1 ${cols} gap-3 sm:gap-4`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative overflow-hidden bg-sp-card aspect-[4/5]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}
    </figure>
  )
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return notFound()

  const related = pickRelated(article, articles, 3)

  return (
    <div className="bg-sp-black min-h-screen">
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
          <PhotoPlaceholder
            fill
            index={article.coverIndex}
            className="absolute inset-0 w-full h-full"
            alt={article.title}
          />
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
          if (paragraph.startsWith('[PHOTOS:') && paragraph.endsWith(']')) {
            return <PhotoGrid key={i} items={parsePhotos(paragraph)} />
          }

          if (paragraph.startsWith('## ')) {
            return (
              <div key={i} className="max-w-prose mt-16 md:mt-20 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="block w-6 h-px bg-sp-accent" />
                  <span className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-accent">Section</span>
                </div>
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
                <span
                  key={tag}
                  className="text-[0.7rem] tracking-[0.18em] uppercase text-sp-soft border border-sp-border px-4 py-2 hover:border-sp-accent hover:text-sp-accent transition-colors"
                >
                  {tag}
                </span>
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
              <div>
                <span className="block text-[0.65rem] tracking-[0.35em] uppercase text-sp-accent mb-3">
                  ★ You might also like
                </span>
                <h2 className="font-display italic text-3xl md:text-5xl text-sp-text leading-none tracking-tight">
                  More Coverage.
                </h2>
              </div>
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
