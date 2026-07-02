import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ArticleCard from '@/components/ArticleCard'
import { getAllTags, getArticlesByTagSlug } from '@/lib/tags'

export function generateStaticParams() {
  return getAllTags().map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const result = getArticlesByTagSlug(params.slug)
  if (!result) return { title: 'Topic not found' }
  return {
    title: result.tag,
    description: `Every StagePulse article filed under ${result.tag}.`,
  }
}

export default function TagPage({ params }: { params: { slug: string } }) {
  const result = getArticlesByTagSlug(params.slug)
  if (!result) return notFound()
  const { tag, articles } = result

  return (
    <div className="bg-sp-black min-h-screen">
      {/* Header */}
      <section className="pt-36 md:pt-44 pb-12 md:pb-16 border-b border-sp-border-soft">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <Link
            href="/articles"
            className="inline-block text-[0.7rem] tracking-[0.25em] uppercase text-sp-soft hover:text-sp-accent transition-colors mb-8"
          >
            ← All articles
          </Link>
          <h1 className="font-display italic text-5xl md:text-7xl lg:text-[6rem] tracking-tight text-sp-text leading-[0.95] mb-6 max-w-3xl text-balance">
            {tag}.
          </h1>
          <p className="text-sp-soft text-base md:text-xl max-w-2xl leading-relaxed font-light">
            {articles.length} article{articles.length === 1 ? '' : 's'} filed under{' '}
            <span className="text-sp-text-2">{tag}</span>.
          </p>
        </div>
      </section>

      {/* Article grid */}
      <section className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-10 md:gap-y-16">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </div>
  )
}
