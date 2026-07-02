type Props = {
  src: string
  alt: string
  fit?: 'landscape' | 'portrait'
  className?: string
  loading?: 'lazy' | 'eager'
}

/**
 * Article cover / hero image.
 * Landscape: full-bleed crop (matches wide concert shots).
 * Portrait: sharp photo centered on a blurred fill of the same image — fills the frame without cropping faces.
 */
export default function ArticleCoverImage({
  src,
  alt,
  fit = 'landscape',
  className = '',
  loading = 'lazy',
}: Props) {
  if (fit === 'portrait') {
    return (
      <div className={`relative overflow-hidden bg-sp-black ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          aria-hidden
          loading={loading}
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl brightness-[0.45] saturate-125"
        />
        <div className="absolute inset-0 bg-sp-black/30" aria-hidden />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={loading}
          className="relative z-10 w-full h-full object-contain object-center"
        />
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden bg-sp-black ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </div>
  )
}
