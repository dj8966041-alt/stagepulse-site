import Link from 'next/link'
import PhotoPlaceholder from './PhotoPlaceholder'
import type { Gallery } from '@/lib/data'

type Props = {
  gallery: Gallery
  variant?: 'default' | 'large'
}

export default function GalleryCard({ gallery, variant = 'default' }: Props) {
  if (variant === 'large') {
    return (
      <Link href={`/galleries/${gallery.slug}`} className="group block">
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-2 gap-0.5">
            <PhotoPlaceholder index={0} alt={gallery.title} aspectRatio="4/3" className="col-span-1 transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="grid grid-rows-2 gap-0.5">
              <PhotoPlaceholder index={1} alt={gallery.title} aspectRatio="4/3" className="transition-transform duration-700 group-hover:scale-[1.02]" />
              <PhotoPlaceholder index={2} alt={gallery.title} aspectRatio="4/3" className="transition-transform duration-700 group-hover:scale-[1.02]" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6">
              <span className="text-xs tracking-widest uppercase text-barricade-red">View Gallery</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs tracking-widest uppercase text-barricade-red">Gallery</span>
          </div>
          <h3 className="font-display text-3xl tracking-wide text-barricade-text group-hover:text-barricade-red transition-colors leading-tight">
            {gallery.title}
          </h3>
          <p className="text-barricade-secondary text-sm mt-2 line-clamp-2">{gallery.subtitle}</p>
          <div className="flex items-center gap-3 mt-3">
            <span className="text-xs text-barricade-muted uppercase tracking-widest">{gallery.photographer}</span>
            <span className="text-barricade-border">·</span>
            <span className="text-xs text-barricade-muted">{gallery.displayDate}</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/galleries/${gallery.slug}`} className="group block">
      <div className="relative overflow-hidden mb-4">
        <PhotoPlaceholder
          index={gallery.photos[0]?.index ?? 0}
          alt={gallery.title}
          aspectRatio="3/2"
          className="transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs tracking-widest uppercase text-barricade-red">Gallery</span>
        <span className="text-barricade-border">·</span>
        <span className="text-xs text-barricade-muted">{gallery.venue}</span>
      </div>
      <h3 className="font-display text-2xl md:text-3xl tracking-wide text-barricade-text group-hover:text-barricade-red transition-colors leading-tight mb-2">
        {gallery.title}
      </h3>
      <div className="flex items-center gap-3">
        <span className="text-xs text-barricade-muted uppercase tracking-widest">{gallery.photographer}</span>
        <span className="text-barricade-border">·</span>
        <span className="text-xs text-barricade-muted">{gallery.displayDate}</span>
      </div>
    </Link>
  )
}
