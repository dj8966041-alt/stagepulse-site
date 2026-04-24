import type { Metadata } from 'next'
import Link from 'next/link'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'

export const metadata: Metadata = {
  title: 'Photo Galleries',
  description: 'Concert photography from San Antonio — coming soon from StagePulse.',
}

export default function GalleriesPage() {
  return (
    <div className="bg-barricade-black min-h-screen">
      {/* Page header */}
      <div className="border-b border-barricade-border pt-36 pb-12 md:pb-16">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <span className="block text-xs tracking-[0.35em] uppercase text-barricade-red mb-4">
            StagePulse
          </span>
          <h1 className="font-display text-6xl md:text-8xl tracking-widest text-barricade-text mb-4">
            GALLERIES
          </h1>
          <p className="text-barricade-secondary text-base md:text-lg max-w-xl leading-relaxed">
            Concert photography from San Antonio venues and beyond. Shot without flash, up close, every time.
          </p>
        </div>
      </div>

      {/* Coming soon state */}
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Dark placeholder */}
          <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <PhotoPlaceholder index={0} className="absolute inset-0 w-full h-full" aspectRatio="auto" />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.3) 100%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="block text-xs tracking-widest uppercase text-barricade-red mb-3">
                Coming Soon
              </span>
              <p className="font-display text-3xl tracking-widest text-white">
                FIRST GALLERY
              </p>
            </div>
          </div>

          {/* Message */}
          <div className="border border-barricade-border border-l-0 p-8 md:p-12 flex flex-col justify-center">
            <div className="h-0.5 w-8 bg-barricade-red mb-8" />
            <h2 className="font-display text-3xl md:text-4xl tracking-widest text-barricade-text mb-5 leading-tight">
              OUR FIRST GALLERIES WILL BE PUBLISHED AFTER OUR UPCOMING SHOW COVERAGE.
            </h2>
            <p className="text-barricade-secondary text-base leading-relaxed mb-6">
              Che — Paper Tiger — May 14, 2026 — On our radar.
            </p>
            <a
              href="https://instagram.com/stagepulselive"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs tracking-widest uppercase text-barricade-text border border-barricade-border hover:border-barricade-red hover:text-barricade-red px-7 py-3.5 transition-colors duration-200 self-start"
            >
              Follow @stagepulselive
            </a>
          </div>
        </div>
      </div>

      {/* Photography note */}
      <div className="border-t border-barricade-border">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-12 md:py-14">
          <div className="max-w-2xl">
            <span className="block text-xs tracking-widest uppercase text-barricade-red mb-4">
              Our approach
            </span>
            <p className="text-barricade-secondary leading-relaxed text-base md:text-lg mb-4">
              We shoot all gallery work with available light — no flash, no ring lights. It keeps the work honest and keeps us close to the actual energy of the room.
            </p>
            <p className="text-barricade-secondary leading-relaxed text-sm">
              Photographers interested in contributing work can reach out at{' '}
              <a href="mailto:stagepulselive@gmail.com" className="text-barricade-text hover:text-barricade-red transition-colors">
                stagepulselive@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
