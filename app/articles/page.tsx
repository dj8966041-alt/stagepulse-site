import type { Metadata } from 'next'
import ArticleCard from '@/components/ArticleCard'
import { articles } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Concert reviews, artist features, and culture writing from StagePulse — an independent Texas music publication.',
}

export default function ArticlesPage() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date))
  const [featured, ...rest] = sorted

  return (
    <div className="bg-sp-black min-h-screen">
      {/* Page header */}
      <section className="pt-36 md:pt-44 pb-12 md:pb-16 border-b border-sp-border-soft">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <span className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.35em] uppercase text-sp-accent mb-6">
            <span>★</span> The Coverage
          </span>
          <h1 className="font-display italic text-5xl md:text-7xl lg:text-[6rem] tracking-tight text-sp-text leading-[0.95] mb-6 max-w-3xl text-balance">
            Articles.
          </h1>
          <p className="text-sp-soft text-base md:text-xl max-w-2xl leading-relaxed font-light">
            Concert reviews, artist features, and culture writing — filed from rooms across Texas, with the people who were actually there.
          </p>
        </div>
      </section>

      {/* Featured article — large */}
      {featured && (
        <section className="border-b border-sp-border-soft">
          <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-12 md:py-20">
            <div className="mb-8 md:mb-10">
              <span className="block text-[0.65rem] tracking-[0.35em] uppercase text-sp-accent mb-3">
                ★ Latest
              </span>
              <h2 className="font-display italic text-3xl md:text-4xl text-sp-text leading-tight tracking-tight">
                Top of the page.
              </h2>
            </div>
            <ArticleCard article={featured} variant="large" />
          </div>
        </section>
      )}

      {/* Article grid */}
      {rest.length > 0 && (
        <section className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="mb-10 md:mb-14">
            <span className="block text-[0.65rem] tracking-[0.35em] uppercase text-sp-accent mb-3">
              ★ More stories
            </span>
            <h2 className="font-display italic text-3xl md:text-4xl text-sp-text leading-tight tracking-tight">
              The archive.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-10 md:gap-y-16">
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Empty-ish state if no rest */}
      {rest.length === 0 && featured && (
        <section className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <p className="text-sp-muted text-sm md:text-base max-w-prose leading-relaxed">
            More coverage is on the way. Follow us on Instagram for daily show coverage between articles, or check back soon.
          </p>
        </section>
      )}
    </div>
  )
}
