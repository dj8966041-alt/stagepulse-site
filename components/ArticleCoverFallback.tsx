type Props = {
  title: string
  category: string
  aspectRatio?: string
  className?: string
  fill?: boolean
  /** Overlay title on the card — used for hero/large covers without a photo. */
  showTitle?: boolean
}

/**
 * Minimal fallback when an article has no real photo.
 * Solid black — no gradients, no generative visuals.
 */
export default function ArticleCoverFallback({
  title,
  category,
  aspectRatio = '3/2',
  className = '',
  fill = false,
  showTitle = false,
}: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-sp-black border border-sp-border-soft ${className}`}
      style={fill ? undefined : { aspectRatio }}
      role="img"
      aria-label={title}
    >
      {showTitle && (
        <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8 lg:p-10">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-accent mb-3">
            {category}
          </span>
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-sp-text leading-[1.1] line-clamp-4 text-balance">
            {title}
          </p>
        </div>
      )}
    </div>
  )
}
