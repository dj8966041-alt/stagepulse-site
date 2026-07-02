'use client'

import { useCallback, useEffect, useState } from 'react'
import type { PhotoItem } from '@/lib/photo-markers'

type Props = {
  items: PhotoItem[]
}

function Chevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === 'left' ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  )
}

export default function ArticlePhotoGallery({ items }: Props) {
  const [index, setIndex] = useState(0)
  const count = items.length
  const current = items[index]

  const go = useCallback(
    (delta: number) => {
      if (count === 0) return
      setIndex((i) => (i + delta + count) % count)
    },
    [count]
  )

  useEffect(() => {
    if (index >= count && count > 0) setIndex(0)
  }, [count, index])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (count <= 1) return
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [count, go])

  if (count === 0) {
    return (
      <figure className="w-full">
        <div className="relative aspect-[16/10] bg-sp-card border border-sp-border flex items-center justify-center">
          <p className="text-sp-muted text-sm tracking-[0.15em] uppercase">
            Photos coming soon
          </p>
        </div>
      </figure>
    )
  }

  return (
    <figure className="w-full">
      <div className="relative aspect-[16/10] bg-sp-card border border-sp-border overflow-hidden group">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.src}
          src={current.src}
          alt={current.alt || 'Concert photo'}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 35%)',
          }}
        />

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-sp-black/70 border border-sp-border text-sp-text hover:border-sp-accent hover:text-sp-accent transition-colors opacity-90 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
              aria-label="Previous photo"
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-sp-black/70 border border-sp-border text-sp-text hover:border-sp-accent hover:text-sp-accent transition-colors opacity-90 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
              aria-label="Next photo"
            >
              <Chevron direction="right" />
            </button>
          </>
        )}

        {current.alt && (
          <figcaption className="absolute bottom-0 left-0 right-0 z-10 px-4 py-3 md:px-5 md:py-4">
            <p className="text-sp-text-2 text-sm md:text-base font-light leading-snug max-w-3xl">
              {current.alt}
            </p>
          </figcaption>
        )}
      </div>

      {count > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {items.map((item, i) => (
            <button
              key={`${item.src}-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              className={`relative shrink-0 w-[4.5rem] h-[3.25rem] md:w-20 md:h-14 overflow-hidden border transition-colors ${
                i === index
                  ? 'border-sp-accent ring-1 ring-sp-accent'
                  : 'border-sp-border opacity-70 hover:opacity-100 hover:border-sp-soft'
              }`}
              aria-label={`View photo ${i + 1}${item.alt ? `: ${item.alt}` : ''}`}
              aria-current={i === index ? 'true' : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {count > 1 && (
        <p className="mt-2 text-[0.65rem] tracking-[0.2em] uppercase text-sp-subtle">
          {index + 1} / {count}
        </p>
      )}
    </figure>
  )
}
