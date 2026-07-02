import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { articles } from '@/lib/data'
import { getAllTags } from '@/lib/tags'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Concert reviews, artist features, and scene reporting from StagePulse — an independent music publication based in Texas.',
}

export default function ArticlesPage() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date))
  const [featured, ...rest] = sorted
  const [second, third, ...remaining] = rest
  const topTags = getAllTags().slice(0, 20)

  return (
    <div className="bg-sp-black min-h-screen">
      <section className="pt-36 md:pt-44 pb-12 md:pb-16 border-b border-sp-border-soft">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <h1 className="font-display italic text-5xl md:text-7xl lg:text-[6rem] tracking-tight text-sp-text leading-[0.95] mb-6 max-w-3xl text-balance">
            Articles.
          </h1>
          <p className="text-sp-soft text-base md:text-xl max-w-2xl leading-relaxed font-light">
            Concert reviews, artist features, and scene reporting from Texas and on the road.
          </p>
        </div>
      </section>

      {featured && (
        <section className="border-b border-sp-border-soft">
          <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-12 md:py-20">
            <h2 className="font-display italic text-3xl md:text-4xl text-sp-text leading-tight tracking-tight mb-8 md:mb-10">
              Latest
            </h2>
            <ArticleCard article={featured} variant="feature" />
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-20">
          {(second || third) && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-x-10 md:gap-y-16 mb-12 md:mb-16 pb-12 md:pb-16 border-b border-sp-border-soft">
              {second && <ArticleCard article={second} variant="default" />}
              {third && <ArticleCard article={third} variant="default" />}
            </div>
          )}

          {remaining.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-10 md:gap-y-16">
              {remaining.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </section>
      )}

      {topTags.length > 0 && (
        <section className="border-t border-sp-border-soft bg-sp-card">
          <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <h2 className="font-display italic text-3xl md:text-4xl text-sp-text leading-tight tracking-tight mb-10 md:mb-12">
              Topics
            </h2>
            <div className="flex flex-wrap gap-2">
              {topTags.map(({ tag, slug, count }) => (
                <Link
                  key={slug}
                  href={`/articles/tag/${slug}`}
                  className="inline-flex items-baseline gap-2 text-[0.7rem] tracking-[0.18em] uppercase text-sp-soft border border-sp-border px-4 py-2.5 hover:border-sp-accent hover:text-sp-accent transition-colors"
                >
                  <span>{tag}</span>
                  <span className="text-sp-muted text-[0.6rem]">{count}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
