type PhotoItem = { src: string; alt: string }

type Props = {
  items: PhotoItem[]
}

/** Inline [PHOTOS:...] blocks — single images get a wide feature layout; pairs/grids stay in a row. */
export default function ArticleInlinePhotos({ items }: Props) {
  if (items.length === 1) {
    const item = items[0]
    return (
      <figure className="my-14 md:my-20">
        <div className="max-w-4xl mx-auto border border-sp-border bg-sp-black overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt={item.alt || 'Article photo'}
            loading="lazy"
            decoding="async"
            width={1024}
            height={677}
            className="block w-full h-auto max-h-[min(72svh,780px)] object-contain mx-auto"
          />
        </div>
        {item.alt && (
          <figcaption className="mt-3 max-w-4xl mx-auto px-1 text-sp-soft text-sm md:text-base font-light leading-relaxed">
            {item.alt}
          </figcaption>
        )}
      </figure>
    )
  }

  const cols =
    items.length >= 3
      ? 'sm:grid-cols-3'
      : items.length === 2
        ? 'sm:grid-cols-2'
        : 'sm:grid-cols-1'

  return (
    <figure className={`my-14 md:my-20 grid grid-cols-1 ${cols} gap-3 sm:gap-4 max-w-5xl mx-auto`}>
      {items.map((item, idx) => (
        <div key={idx} className="border border-sp-border bg-sp-black overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            className="block w-full h-auto max-h-[min(60svh,640px)] object-contain mx-auto"
          />
          {item.alt && (
            <figcaption className="px-3 py-2.5 text-sp-muted text-xs md:text-sm font-light leading-snug border-t border-sp-border-soft">
              {item.alt}
            </figcaption>
          )}
        </div>
      ))}
    </figure>
  )
}
