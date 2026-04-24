import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { articles } from '@/lib/data'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'

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
      <strong key={match.index} className="text-barricade-text font-semibold">
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
            className="underline decoration-barricade-border hover:text-barricade-secondary transition-colors"
          >
            aclfestival.com
          </a>
          {parts[1]}
        </>
      )}
    </>
  )
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return notFound()

  return (
    <div className="bg-barricade-black min-h-screen">
      {/* Hero — min height + base layer so full-bleed header matches every article, even with fill-only placeholder */}
      <div className="relative w-full min-h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 min-h-[50vh] bg-[#0a0a0a] pointer-events-none"
          aria-hidden
        />
        <PhotoPlaceholder
          fill
          index={article.coverIndex}
          className="absolute inset-0 w-full h-full min-h-[50vh]"
          alt={article.title}
        />
        <div
          className="absolute inset-0 min-h-[50vh] pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.6) 55%, rgba(10,10,10,0.15) 100%)' }}
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-5 md:px-8 pt-36 pb-14">
          <Link
            href="/articles"
            className="inline-block text-xs tracking-widest uppercase text-barricade-muted hover:text-barricade-secondary transition-colors mb-10"
          >
            ← Articles
          </Link>
          <div className="max-w-3xl">
            <span className="block text-xs tracking-widest uppercase text-barricade-red mb-5">
              {article.category}
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-widest text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-barricade-secondary text-base md:text-xl max-w-2xl mb-8 leading-relaxed">
              {article.subtitle}
            </p>
            <div className="h-px w-full bg-barricade-border mb-6" />
            <div className="flex flex-wrap items-center gap-4 text-xs tracking-widest uppercase text-barricade-muted">
              <span className="text-barricade-secondary">{article.author}</span>
              <span className="text-barricade-border">—</span>
              <span>{article.displayDate}</span>
              <span className="text-barricade-border">—</span>
              <span>{article.readTime}</span>
              {article.venue && (
                <>
                  <span className="text-barricade-border">—</span>
                  <span>{article.venue}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="max-w-[680px]">
          {article.body.map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return (
                <div key={i} className="mt-14 mb-6">
                  <div className="h-px w-full bg-barricade-border mb-8" />
                  <div className="h-0.5 w-8 bg-barricade-red mb-4" />
                  <h2 className="font-display text-3xl md:text-4xl tracking-widest text-barricade-text">
                    {paragraph.slice(3).toUpperCase()}
                  </h2>
                </div>
              )
            }
            if (paragraph === '[TICKETS]') {
              return (
                <div key={i} className="mt-4 mb-10">
                  <a
                    href="https://www.ticketmaster.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs tracking-widest uppercase text-barricade-text border border-barricade-border hover:border-barricade-red hover:text-barricade-red px-7 py-3.5 transition-colors duration-200"
                  >
                    Get Tickets on Ticketmaster →
                  </a>
                </div>
              )
            }
            if (paragraph.startsWith('[NOTE] ')) {
              return (
                <p
                  key={i}
                  className="text-barricade-muted text-sm italic leading-relaxed mt-14 pt-8 border-t border-barricade-border"
                >
                  {renderNote(paragraph.slice(7))}
                </p>
              )
            }
            return (
              <p key={i} className="text-barricade-secondary leading-[1.85] mb-6 text-base md:text-lg">
                {renderText(paragraph)}
              </p>
            )
          })}
        </div>
      </div>

      {/* Footer nav */}
      <div className="border-t border-barricade-border">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/articles"
            className="text-xs tracking-widest uppercase text-barricade-muted hover:text-barricade-secondary transition-colors"
          >
            ← All Articles
          </Link>
          <div className="flex flex-wrap gap-2">
            {article.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs tracking-widest uppercase text-barricade-muted border border-barricade-border px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
