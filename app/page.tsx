import Link from 'next/link'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'
import ArticleCard from '@/components/ArticleCard'
import NewsletterForm from '@/components/NewsletterForm'
import TonightInTexas from '@/components/TonightInTexas'
import StagePulseWeekly from '@/components/StagePulseWeekly'
import { articles } from '@/lib/data'

/**
 * Picks the best photograph for the homepage hero.
 *
 * Order of preference:
 *   1. The first article with a real heroImage (real concert photography wins).
 *   2. A themed photographic placeholder (still beautiful — burnt-orange,
 *      stage-wash gradient designed to evoke a real Texas concert).
 *
 * The page stays striking even before any photography is published.
 */
function pickHeroPhoto(): { src?: string; alt: string } {
  const withHero = articles.find((a) => a.heroImage)
  if (withHero?.heroImage) {
    return { src: withHero.heroImage, alt: withHero.title }
  }
  return { alt: 'StagePulse — Texas live music' }
}

export default function HomePage() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date))
  const featured = sorted.slice(0, 4)
  const heroPhoto = pickHeroPhoto()

  return (
    <div className="bg-sp-black">
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {heroPhoto.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <PhotoPlaceholder index={0} className="absolute inset-0 w-full h-full" aspectRatio="auto" fill />
          )}
          {/* Layered overlay — keeps the photo legible everywhere the headline
              and CTA sit, plus a subtle vignette so the eye lands on the copy. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.25) 30%, rgba(10,10,10,0.55) 70%, rgba(10,10,10,0.92) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(10,10,10,0.55) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto w-full px-5 md:px-8 pt-32 md:pt-40 pb-20 md:pb-28">
          <span className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.35em] uppercase text-sp-accent mb-7 md:mb-9">
            <span>★</span> Independent music coverage
          </span>

          <h1 className="font-display italic text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.92] tracking-tight text-sp-text mb-7 md:mb-9 text-balance max-w-5xl">
            In the room.<br />
            <span className="text-sp-accent not-italic font-semibold">On the record.</span>
          </h1>

          <p className="text-sp-soft text-lg md:text-2xl leading-relaxed font-light max-w-2xl mb-10 md:mb-12">
            Concerts, artists, and scene reporting. Texas is home base. The shows are everywhere.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 bg-sp-accent text-sp-black text-[0.7rem] tracking-[0.25em] uppercase font-semibold px-8 py-4 hover:bg-sp-accent-hover transition-colors"
            >
              Read Coverage
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/calendar"
              className="inline-flex items-center text-[0.7rem] tracking-[0.25em] uppercase text-sp-text border border-sp-border hover:border-sp-accent hover:text-sp-accent px-8 py-4 transition-colors"
            >
              Concert Calendar
            </Link>
          </div>
        </div>

        {/* Scroll cue — quiet, only on desktop, sits at the bottom of the hero. */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-sp-muted">
          <span className="text-[0.6rem] tracking-[0.3em] uppercase">Scroll</span>
          <span className="block w-px h-8 bg-sp-muted/40" />
        </div>
      </section>

      {/* ─── FEATURED ARTICLES ────────────────────────────────────────────── */}
      {featured.length > 0 && (
        <section className="border-t border-sp-border-soft">
          <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-20 md:py-28">
            <div className="mb-12 md:mb-16 flex items-end justify-between gap-6 flex-wrap">
              <h2 className="font-display italic text-4xl md:text-6xl text-sp-text leading-[1.02] tracking-tight">
                Latest
              </h2>
              <Link
                href="/articles"
                className="text-[0.7rem] tracking-[0.25em] uppercase text-sp-muted hover:text-sp-accent transition-colors whitespace-nowrap"
              >
                View All →
              </Link>
            </div>

            {/* Top story — single big card */}
            <div className="mb-16 md:mb-20">
              <ArticleCard article={featured[0]!} variant="feature" />
            </div>

            {/* Secondary grid — next 3 */}
            {featured.length > 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-10 md:gap-y-16 pt-12 md:pt-16 border-t border-sp-border-soft">
                {featured.slice(1).map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            )}

            <div className="mt-14 md:mt-16 flex justify-center">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.25em] uppercase text-sp-text border border-sp-border hover:border-sp-accent hover:text-sp-accent px-8 py-4 transition-colors"
              >
                View all articles
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ─── TONIGHT IN TEXAS ───────────────────────────────────────────── */}
      <TonightInTexas />

      {/* ─── STAGEPULSE WEEKLY (Spotify) ────────────────────────────────── */}
      <StagePulseWeekly />

      {/* ─── NEWSLETTER ─────────────────────────────────────────────────── */}
      <section className="border-t border-sp-border-soft">
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <h2 className="font-display italic text-4xl md:text-6xl text-sp-text leading-[1.05] tracking-tight mb-5 text-balance">
            Newsletter
          </h2>
          <p className="text-sp-soft text-base md:text-lg leading-relaxed font-light mb-10 max-w-xl mx-auto">
            The week's coverage, sent on Sundays.
          </p>
          <NewsletterForm source="homepage" className="max-w-lg mx-auto text-left" />
        </div>
      </section>
    </div>
  )
}
