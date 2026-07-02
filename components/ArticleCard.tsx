import Link from 'next/link'
import ArticleCoverFallback from './ArticleCoverFallback'
import type { Article } from '@/lib/data'

type Props = {
  article: Article
  variant?: 'default' | 'large' | 'horizontal' | 'feature'
}

function Cover({
  article,
  aspectRatio,
  showTitleOnFallback = false,
}: {
  article: Article
  aspectRatio: string
  showTitleOnFallback?: boolean
}) {
  if (article.heroImage) {
    return (
      <div
        className="relative overflow-hidden bg-sp-black flex items-center justify-center"
        style={{ aspectRatio }}
        role="img"
        aria-label={article.title}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.heroImage}
          alt={article.title}
          loading="lazy"
          className="block w-full h-full object-contain object-center transition-opacity duration-300 group-hover:opacity-95"
        />
      </div>
    )
  }
  return (
    <ArticleCoverFallback
      title={article.title}
      category={article.category}
      aspectRatio={aspectRatio}
      showTitle={showTitleOnFallback}
      className="transition-transform duration-[600ms] group-hover:scale-[1.01]"
    />
  )
}

function Meta({ article, light = false }: { article: Article; light?: boolean }) {
  const color = light ? 'text-sp-soft' : 'text-sp-muted'
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] uppercase tracking-[0.18em] ${color}`}>
      <span>{article.author}</span>
      <span className="text-sp-subtle">·</span>
      <span>{article.displayDate}</span>
      <span className="text-sp-subtle">·</span>
      <span>{article.readTime}</span>
    </div>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-sp-accent font-medium">
      <span className="w-3 h-px bg-sp-accent" />
      {children}
    </span>
  )
}

export default function ArticleCard({ article, variant = 'default' }: Props) {
  const hasPhoto = Boolean(article.heroImage)

  if (variant === 'feature') {
    return (
      <Link href={`/articles/${article.slug}`} className="group block">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 overflow-hidden">
            <Cover article={article} aspectRatio="3/2" />
          </div>
          <div className="lg:col-span-5">
            <div className="mb-5">
              <Eyebrow>{article.category}</Eyebrow>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.7rem] tracking-tight text-sp-text leading-[1.05] mb-5 group-hover:text-sp-accent transition-colors duration-200 text-balance">
              {article.title}
            </h2>
            <p className="text-sp-soft text-base md:text-lg leading-relaxed line-clamp-3 mb-6 font-light">
              {article.subtitle}
            </p>
            <Meta article={article} />
          </div>
        </div>
      </Link>
    )
  }

  if (variant === 'large') {
    return (
      <Link href={`/articles/${article.slug}`} className="group block">
        <div className="md:relative md:overflow-hidden">
          <div className="overflow-hidden">
            <Cover article={article} aspectRatio="16/9" showTitleOnFallback={!hasPhoto} />
          </div>
          {hasPhoto && (
            <div className="md:absolute md:inset-0 md:bg-gradient-to-t md:from-sp-black md:via-sp-black/40 md:to-transparent" />
          )}
          <div
            className={
              hasPhoto
                ? 'pt-6 md:absolute md:bottom-0 md:left-0 md:right-0 md:p-10 p-0'
                : 'pt-6 md:pt-8'
            }
          >
            {hasPhoto && (
              <>
                <div className="mb-4">
                  <Eyebrow>{article.category}</Eyebrow>
                </div>
                <h2 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tight text-sp-text leading-[1.08] md:leading-[1.05] mb-3 group-hover:text-sp-accent transition-colors duration-200 text-balance max-w-4xl">
                  {article.title}
                </h2>
              </>
            )}
            <p
              className={`text-sp-soft text-sm md:text-base leading-relaxed line-clamp-2 mb-5 max-w-2xl font-light ${
                hasPhoto ? 'hidden md:block' : ''
              }`}
            >
              {article.subtitle}
            </p>
            <Meta article={article} light={hasPhoto} />
          </div>
        </div>
      </Link>
    )
  }

  if (variant === 'horizontal') {
    return (
      <Link href={`/articles/${article.slug}`} className="group flex gap-5">
        <div className="flex-shrink-0 w-28 md:w-36 overflow-hidden">
          <Cover article={article} aspectRatio="4/3" />
        </div>
        <div className="flex flex-col justify-center min-w-0">
          <div className="mb-2">
            <Eyebrow>{article.category}</Eyebrow>
          </div>
          <h3 className="font-display text-xl tracking-tight text-sp-text group-hover:text-sp-accent transition-colors leading-tight line-clamp-2">
            {article.title}
          </h3>
          <p className="text-[0.7rem] text-sp-muted mt-2 uppercase tracking-[0.18em]">{article.displayDate}</p>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <div className="overflow-hidden mb-5">
        <Cover article={article} aspectRatio="3/2" />
      </div>
      <div className="mb-3">
        <Eyebrow>{article.category}</Eyebrow>
      </div>
      <h3 className="font-display text-2xl md:text-[1.8rem] tracking-tight text-sp-text group-hover:text-sp-accent transition-colors duration-200 leading-[1.1] mb-3 text-balance">
        {article.title}
      </h3>
      <p className="text-sp-soft text-sm md:text-base leading-relaxed line-clamp-2 mb-4 font-light">
        {article.subtitle}
      </p>
      <Meta article={article} />
    </Link>
  )
}
