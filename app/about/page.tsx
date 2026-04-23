import type { Metadata } from 'next'
import Link from 'next/link'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'

export const metadata: Metadata = {
  title: 'About',
  description: 'StagePulse is an independent music publication based in San Antonio, TX, founded by Diego Jauregui.',
}

export default function AboutPage() {
  return (
    <div className="bg-barricade-black min-h-screen">
      {/* Header */}
      <div className="pt-36 pb-0 md:pb-0">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <span className="block text-xs tracking-[0.35em] uppercase text-barricade-red mb-4">
            StagePulse
          </span>
          <h1 className="font-display text-6xl md:text-8xl xl:text-[10rem] tracking-widest text-barricade-text leading-none mb-0">
            ABOUT
          </h1>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 mt-8 mb-0">
        <PhotoPlaceholder index={4} aspectRatio="21/9" className="w-full" alt="Live show at a San Antonio venue" />
      </div>

      {/* Main story */}
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Pull quote column */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <div className="border-l-2 border-barricade-red pl-6">
              <blockquote className="font-display text-3xl md:text-4xl tracking-widest text-barricade-text leading-tight">
                "WE LOVE SHOWS AND WE BELIEVE EVERY ARTIST DESERVES TO BE DOCUMENTED PROPERLY."
              </blockquote>
            </div>
            <div className="mt-10 pt-8 border-t border-barricade-border">
              <p className="text-xs tracking-widest uppercase text-barricade-muted mb-3">Founded by</p>
              <p className="text-barricade-text">Diego Jauregui</p>
              <p className="text-barricade-muted text-xs mt-1">Founder &amp; Photographer</p>
            </div>
            <div className="mt-6 pt-6 border-t border-barricade-border">
              <p className="text-xs tracking-widest uppercase text-barricade-muted mb-3">Based in</p>
              <p className="text-barricade-text">San Antonio, TX</p>
            </div>
            <div className="mt-6 pt-6 border-t border-barricade-border">
              <p className="text-xs tracking-widest uppercase text-barricade-muted mb-3">Founded</p>
              <p className="text-barricade-text">2026</p>
            </div>
            <div className="mt-6 pt-6 border-t border-barricade-border">
              <p className="text-xs tracking-widest uppercase text-barricade-muted mb-3">Coverage</p>
              <p className="text-barricade-text">All genres. Every venue. No exceptions.</p>
            </div>
          </div>

          {/* Story column */}
          <div className="lg:col-span-8">
            <div className="prose max-w-none">
              <p className="text-xl md:text-2xl text-barricade-text leading-loose mb-8 font-light">
                StagePulse is an independent music publication based in San Antonio, TX. Founded by Diego Jauregui, StagePulse covers live music across all genres — from underground rap to indie rock to everything in between.
              </p>

              <p className="text-barricade-secondary text-base md:text-lg leading-loose mb-6">
                We started this because we love shows and we believe every artist deserves to be documented properly. Too many performances happen and disappear — no photos, no review, no record that it ever took place. That's the gap StagePulse exists to fill.
              </p>

              <p className="text-barricade-secondary text-base md:text-lg leading-loose mb-6">
                San Antonio has always had a scene. Punk, metal, cumbia, hip-hop, country, jazz, indie, hardcore — generations of it. The music has always been here. The consistent documentation hasn't always been. That's what we're building.
              </p>

              <div className="border-l-2 border-barricade-red pl-6 my-10">
                <p className="text-barricade-text text-xl leading-relaxed italic">
                  "We show up, we shoot, and we share."
                </p>
              </div>

              <p className="text-barricade-secondary text-base md:text-lg leading-loose mb-6">
                The approach is simple: get to the show, get as close as possible, and capture what's actually happening — not a polished version of it, not a PR-approved version. The real thing, as it is, in the light the stage gives us.
              </p>

              <p className="text-barricade-secondary text-base md:text-lg leading-loose mb-6">
                StagePulse is fully independent. There are no advertisers, no label deals, no sponsored content. Coverage decisions are made based on what we think is worth covering — full stop. If a show was incredible, you'll read that here. If something didn't land, we'll be honest about that too.
              </p>

              <p className="text-barricade-secondary text-base md:text-lg leading-loose mb-6">
                The name comes from what a live show actually does when it's working — it hits you somewhere physical. A pulse. Something you feel before you process it. That's what we're chasing at every show, and that's what we're trying to put on the page.
              </p>

              <p className="text-barricade-secondary text-base md:text-lg leading-loose">
                If you're playing a show in San Antonio, or coming through, or doing something we should know about — reach out. We want to be there.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-barricade-border flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block text-xs tracking-widest uppercase text-barricade-text border border-barricade-border hover:border-barricade-red hover:text-barricade-red px-8 py-4 transition-all duration-300"
              >
                Get in Touch
              </Link>
              <Link
                href="/press"
                className="inline-block text-xs tracking-widest uppercase text-barricade-muted hover:text-barricade-secondary transition-colors pt-4"
              >
                Press &amp; Media Info →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Values strip */}
      <div className="border-t border-barricade-border bg-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-16">
          <h2 className="font-display text-4xl md:text-5xl tracking-widest text-barricade-text mb-12 md:mb-14">
            HOW WE WORK
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {[
              {
                title: 'Independent',
                body: 'No advertisers, no label relationships, no promotional agreements. Every review and gallery is produced without any financial arrangement with the subjects.',
              },
              {
                title: 'All Genres',
                body: 'Underground rap, indie rock, cumbia, punk, jazz, country, metal, electronic — we cover it all. If it\'s live and it\'s in San Antonio, we\'re interested.',
              },
              {
                title: 'Available Light',
                body: 'We shoot without flash. It\'s a constraint we embrace — it keeps the work honest and keeps us close to the actual energy of the room.',
              },
              {
                title: 'Honest',
                body: 'We don\'t write press releases. We don\'t pre-agree to positive coverage. We go to the show and we write what happened.',
              },
              {
                title: 'Local First',
                body: 'We exist to serve San Antonio. Major touring acts are covered when they come through, but local and regional artists are always the priority.',
              },
              {
                title: 'Up Close',
                body: 'The name is not incidental. We are at the front. Always. That proximity is what makes the work worth doing and worth reading.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="border border-barricade-border p-6 md:p-8 -mt-px -ml-px">
                <div className="h-0.5 w-6 bg-barricade-red mb-5" />
                <h3 className="font-display text-2xl md:text-3xl tracking-widest text-barricade-text mb-3">{title}</h3>
                <p className="text-barricade-secondary text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
