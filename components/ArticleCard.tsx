import Link from 'next/link'
import PhotoPlaceholder from './PhotoPlaceholder'
import type { Article } from '@/lib/data'

type Props = {
  article: Article
  variant?: 'default' | 'large' | 'horizontal'
}

export default function ArticleCard({ article, variant = 'default' }: Props) {
  if (variant === 'large') {
    return (
      <Link href={`/articles/${article.slug}`} className="group block">
        <div className="relative overflow-hidden">
          <PhotoPlaceholder
            index={article.coverIndex}
            alt={article.title}
            aspectRatio="16/9"
            className="transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <span className="inline-block text-xs tracking-widest uppercase text-barricade-red mb-3">
              {article.category}
            </span>
            <h2 className="font-display text-3xl md:text-5xl tracking-wide text-white leading-tight mb-2 group-hover:text-barricade-red transition-colors duration-300">
              {article.title}
            </h2>
            <p className="text-barricade-secondary text-sm leading-relaxed hidden md:block line-clamp-2">
              {article.subtitle}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-xs text-barricade-muted uppercase tracking-widest">{article.author}</span>
              <span className="text-barricade-border">·</span>
              <span className="text-xs text-barricade-muted">{article.displayDate}</span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  if (variant === 'horizontal') {
    return (
      <Link href={`/articles/${article.slug}`} className="group flex gap-4">
        <div className="flex-shrink-0 w-28 md:w-36 overflow-hidden">
          <PhotoPlaceholder
            index={article.coverIndex}
            alt={article.title}
            aspectRatio="4/3"
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center min-w-0">
          <span className="text-xs tracking-widest uppercase text-barricade-red mb-1">{article.category}</span>
          <h3 className="font-display text-xl tracking-wide text-barricade-text group-hover:text-barricade-red transition-colors leading-tight line-clamp-2">
            {article.title}
          </h3>
          <p className="text-xs text-barricade-muted mt-1.5">{article.displayDate}</p>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <div className="overflow-hidden mb-4">
        <PhotoPlaceholder
          index={article.coverIndex}
          alt={article.title}
          aspectRatio="3/2"
          className="transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <span className="inline-block text-xs tracking-widest uppercase text-barricade-red mb-2">
        {article.category}
      </span>
      <h3 className="font-display text-2xl md:text-3xl tracking-wide text-barricade-text group-hover:text-barricade-red transition-colors leading-tight mb-2">
        {article.title}
      </h3>
      <p className="text-barricade-secondary text-sm leading-relaxed line-clamp-2 mb-3">
        {article.subtitle}
      </p>
      <div className="flex items-center gap-3">
        <span className="text-xs text-barricade-muted uppercase tracking-widest">{article.author}</span>
        <span className="text-barricade-border">·</span>
        <span className="text-xs text-barricade-muted">{article.displayDate}</span>
        <span className="text-barricade-border">·</span>
        <span className="text-xs text-barricade-muted">{article.readTime}</span>
      </div>
    </Link>
  )
}
