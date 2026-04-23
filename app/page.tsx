import Link from 'next/link'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'

export default function HomePage() {
  return (
    <div className="bg-barricade-black">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <PhotoPlaceholder index={0} className="absolute inset-0 w-full h-full" aspectRatio="auto" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.25) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-5 md:px-8 pb-20 md:pb-28 pt-40">
          <div className="max-w-4xl">
            <span className="inline-block text-xs tracking-[0.35em] uppercase text-barricade-red mb-6 md:mb-8">
              San Antonio, TX — Independent Live Music Coverage
            </span>
            <h1 className="font-display text-[clamp(5rem,16vw,14rem)] leading-none tracking-widest text-white mb-4 md:mb-6">
              STAGE<br />PULSE
            </h1>
            <div className="h-1 w-24 bg-barricade-red mb-6 md:mb-8" />
            <p className="text-xl md:text-2xl text-barricade-secondary font-light tracking-[0.15em] uppercase">
              Up close. Every show.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMING SOON ─────────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="border border-barricade-border p-8 md:p-12">
            <span className="block text-xs tracking-widest uppercase text-barricade-red mb-6">
              First Coverage
            </span>
            <h2 className="font-display text-4xl md:text-5xl tracking-widest text-barricade-text mb-5 leading-tight">
              LAUNCHING SOON
            </h2>
            <p className="text-barricade-secondary text-base leading-relaxed mb-6">
              StagePulse is a brand new independent publication. Our first articles and photo galleries will be published after our first show.
            </p>
            <p className="text-barricade-secondary text-base leading-relaxed mb-6">
              No ads. No label deals. No sponsored opinions. If a show was incredible, we'll tell you. If it wasn't, we'll tell you that too.
            </p>
            <p className="text-barricade-secondary text-sm leading-relaxed">
              Follow{' '}
              <a
                href="https://instagram.com/stagepulselive"
                target="_blank"
                rel="noopener noreferrer"
                className="text-barricade-text hover:text-barricade-red transition-colors"
              >
                @stagepulselive
              </a>
              {' '}on Instagram and TikTok to know when we publish.
            </p>
          </div>

          <div className="border border-barricade-border border-l-0 p-8 md:p-12 bg-[#0d0d0d]">
            <span className="block text-xs tracking-widest uppercase text-barricade-red mb-6">
              First Show
            </span>
            <h3 className="font-display text-3xl md:text-4xl tracking-widest text-barricade-text mb-3">
              CHE
            </h3>
            <p className="text-barricade-secondary text-sm uppercase tracking-widest mb-1">
              Paper Tiger — San Antonio
            </p>
            <p className="text-barricade-muted text-sm mb-6">May 14, 2026</p>
            <p className="text-barricade-secondary text-sm leading-relaxed">
              Che — Paper Tiger — May 14, 2026 — On our radar.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────────────────── */}
      <div className="max-w-screen-xl mx-auto px-5 md:px-8">
        <div className="h-px bg-barricade-border" />
      </div>

      {/* ── SAN ANTONIO ─────────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-16">
        <p className="text-barricade-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
          Based in San Antonio, TX — covering live music across every genre. New coverage coming soon.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            href="/about"
            className="text-xs tracking-widest uppercase text-barricade-text border border-barricade-border hover:border-barricade-red hover:text-barricade-red px-7 py-3.5 transition-colors duration-200"
          >
            About StagePulse
          </Link>
          <Link
            href="/contact"
            className="text-xs tracking-widest uppercase text-barricade-muted hover:text-barricade-secondary transition-colors px-1 py-3.5"
          >
            Get in Touch →
          </Link>
        </div>
      </section>

      {/* ── ABOUT STRIP ─────────────────────────────────────────────────── */}
      <section className="border-t border-barricade-border bg-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-0.5 w-10 bg-barricade-red mx-auto mb-8" />
            <p className="font-display text-3xl md:text-5xl tracking-widest text-barricade-text leading-tight mb-6">
              INDEPENDENT. UNSPONSORED. UP CLOSE.
            </p>
            <p className="text-barricade-secondary text-base md:text-lg leading-relaxed mb-8">
              StagePulse is an independent music publication founded by Diego Jauregui. We cover live music across all genres — from underground rap to indie rock to everything in between. We show up, we shoot, and we share.
            </p>
            <Link
              href="/about"
              className="inline-block text-xs tracking-widest uppercase text-barricade-text border border-barricade-border hover:border-barricade-red hover:text-barricade-red px-8 py-4 transition-colors duration-200"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
