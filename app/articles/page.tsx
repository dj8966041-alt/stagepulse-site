import type { Metadata } from 'next'
import ArticleCard from '@/components/ArticleCard'
import { articles } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Concert reviews, artist spotlights, and show previews from StagePulse.',
}

export default function ArticlesPage() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date))
  const [featured, ...rest] = sorted

  return (
    <div className="bg-barricade-black min-h-screen">
      {/* Page header */}
      <div className="border-b border-barricade-border pt-36 pb-12 md:pb-16">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <span className="block text-xs tracking-[0.35em] uppercase text-barricade-red mb-4">
            StagePulse
          </span>
          <h1 className="font-display text-6xl md:text-8xl tracking-widest text-barricade-text mb-4">
            ARTICLES
          </h1>
          <p className="text-barricade-secondary text-base md:text-lg max-w-xl leading-relaxed">
            Concert reviews, artist spotlights, and show previews. No PR spin, no sponsored content — just honest coverage of what's happening in San Antonio and beyond.
          </p>
        </div>
      </div>

      {/* Featured article */}
      {featured && (
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-10">
          <ArticleCard article={featured} variant="large" />
        </div>
      )}

      {/* Article grid */}
      {rest.length > 0 && (
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
