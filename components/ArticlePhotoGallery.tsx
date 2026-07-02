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
        <div className="relative min-h-[240px] bg-sp-card border border-sp-border flex items-center justify-center">
          <p className="text-sp-muted text-sm tracking-[0.15em] uppercase">
            Photos coming soon
          </p>
        </div>
      </figure>
    )
  }

  return (
    <figure className="w-full">
      <div className="relative border border-sp-border bg-sp-black group">
        <div className="flex items-center justify-center min-h-[280px] max-h-[min(82svh,880px)] px-2 py-3 md:px-6 md:py-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={current.src}
            src={current.src}
            alt={current.alt || 'Concert photo'}
            className="max-w-full max-h-[min(78svh,820px)] w-auto h-auto object-contain"
            decoding="async"
          />
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-sp-black/80 border border-sp-border text-sp-text hover:border-sp-accent hover:text-sp-accent transition-colors opacity-90 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
              aria-label="Previous photo"
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-sp-black/80 border border-sp-border text-sp-text hover:border-sp-accent hover:text-sp-accent transition-colors opacity-90 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
              aria-label="Next photo"
            >
              <Chevron direction="right" />
            </button>
          </>
        )}
      </div>

      {current.alt && (
        <figcaption className="mt-3 px-1">
          <p className="text-sp-soft text-sm md:text-base font-light leading-relaxed max-w-3xl">
            {current.alt}
          </p>
        </figcaption>
      )}

      {count > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {items.map((item, i) => (
            <button
              key={`${item.src}-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              className={`relative shrink-0 w-14 h-[4.25rem] md:w-16 md:h-20 overflow-hidden border bg-sp-black transition-colors ${
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
                className="absolute inset-0 w-full h-full object-contain p-0.5"
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
