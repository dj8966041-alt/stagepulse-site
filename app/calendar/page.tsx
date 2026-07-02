import type { Metadata } from 'next'
import Link from 'next/link'
import {
  TICKETMASTER_CACHE_TTL,
  formatShowDate,
  getTicketmasterStatus,
  pastShows,
  upcomingShows,
} from '@/lib/shows'
import { PastShowRow, TicketButton } from '@/components/ShowRow'
import CalendarFilter from '@/components/CalendarFilter'

export const metadata: Metadata = {
  title: 'Concert Calendar',
  description:
    'Upcoming concerts and shows StagePulse is covering across Texas — Paper Tiger, the Aztec, Mohawk, Stubb\'s, White Oak Music Hall and more.',
}

// ISR: regenerate this page at most once an hour. Matches the Ticketmaster
// fetch cache TTL so a single revalidation cycle picks up newly announced
// tour dates without manual input.
export const revalidate = TICKETMASTER_CACHE_TTL

export default async function CalendarPage() {
  // `upcomingShows`/`pastShows` are async because they pull from Ticketmaster
  // when configured (see lib/shows.ts). When the API key isn't set they just
  // return the manual list — same shape, no network.
  const [upcoming, past] = await Promise.all([upcomingShows(), pastShows(8)])
  const featured = upcoming.find((s) => s.featured)

  const ticketmaster = getTicketmasterStatus()
  const hasTicketmasterEvents = upcoming.some((s) => s.source === 'ticketmaster')
  const showSetupBanner = process.env.NODE_ENV !== 'production' && !ticketmaster.configured

  return (
    <div className="bg-sp-black min-h-screen">
      {/* Header */}
      <section className="pt-36 md:pt-44 pb-12 md:pb-16 border-b border-sp-border-soft">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <h1 className="font-display italic text-5xl md:text-7xl lg:text-[6rem] tracking-tight text-sp-text leading-[0.95] mb-6 max-w-3xl text-balance">
            Concert calendar.
          </h1>
          <p className="text-sp-soft text-base md:text-xl max-w-2xl leading-relaxed font-light">
            Upcoming Texas shows from the artists we cover. Filter by city or browse the full list.
          </p>
        </div>
      </section>

      {/* Dev-only setup banner — only visible in `npm run dev` */}
      {showSetupBanner && (
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 pt-8">
          <div className="border border-sp-accent/40 bg-sp-accent/[0.07] p-5 md:p-6 text-sm leading-relaxed">
            <p className="text-sp-accent text-[0.65rem] tracking-[0.3em] uppercase mb-2 font-semibold">
              ★ Ticketmaster setup needed
            </p>
            <p className="text-sp-text-2 mb-2">
              The calendar is wired up to auto-pull Texas concerts from Ticketmaster, but{' '}
              <code className="text-sp-accent">TICKETMASTER_API_KEY</code> isn't set.
            </p>
            <p className="text-sp-soft text-sm">
              Get a free Consumer Key at{' '}
              <a
                href="https://developer.ticketmaster.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sp-accent underline underline-offset-2"
              >
                developer.ticketmaster.com
              </a>{' '}
              and add <code className="text-sp-text-2">TICKETMASTER_API_KEY=...</code> to{' '}
              <code className="text-sp-text-2">.env.local</code>. Manual shows still render
              normally. This banner only shows in development.
            </p>
          </div>
        </div>
      )}

      {/* Featured show — optional, pinned regardless of filter */}
      {featured && (
        <section className="border-b border-sp-border-soft bg-sp-card">
          <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-12 md:py-16">
            <span className="block text-[0.65rem] tracking-[0.35em] uppercase text-sp-accent mb-5">
              Featured
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-9">
                <h2 className="font-display italic text-3xl md:text-5xl text-sp-text leading-[1.05] tracking-tight mb-4 text-balance">
                  {featured.artist}
                  {featured.support && (
                    <span className="text-sp-soft not-italic font-normal text-2xl md:text-4xl">
                      {' '}with {featured.support}
                    </span>
                  )}
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sp-soft text-sm md:text-base font-light">
                  <span className="text-sp-text-2">{formatShowDate(featured.date).full}</span>
                  <span className="text-sp-subtle">·</span>
                  <span>{featured.venue}</span>
                  <span className="text-sp-subtle">·</span>
                  <span>
                    {featured.city}, {featured.state}
                  </span>
                </div>
                {featured.note && (
                  <p className="text-sp-soft text-base md:text-lg font-light leading-relaxed mt-4 max-w-2xl">
                    {featured.note}
                  </p>
                )}
              </div>
              <div className="lg:col-span-3 flex lg:justify-end">
                <TicketButton show={featured} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming — city filter + month-grouped list (client component) */}
      <section className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-20">
        {upcoming.length === 0 ? (
          <div className="py-12 md:py-20 text-center max-w-xl mx-auto">
            <h2 className="font-display italic text-3xl md:text-5xl text-sp-text leading-[1.1] tracking-tight mb-6 text-balance">
              No shows on the calendar right now.
            </h2>
            <p className="text-sp-soft text-base md:text-lg font-light leading-relaxed mb-8">
              We only list shows we can confirm. Follow us on Instagram for updates as new tours announce.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://instagram.com/stagepulselive"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sp-accent text-sp-black text-[0.7rem] tracking-[0.25em] uppercase font-semibold px-7 py-4 hover:bg-sp-accent-hover transition-colors"
              >
                Follow @stagepulselive
                <span aria-hidden="true">→</span>
              </a>
              <Link
                href="/articles"
                className="inline-flex items-center text-[0.7rem] tracking-[0.25em] uppercase text-sp-text border border-sp-border hover:border-sp-accent hover:text-sp-accent px-7 py-4 transition-colors"
              >
                Read recent coverage
              </Link>
            </div>
          </div>
        ) : (
          <>
            <CalendarFilter shows={upcoming} />

            {hasTicketmasterEvents && (
              <p className="mt-14 pt-6 border-t border-sp-border-soft text-[0.65rem] tracking-[0.25em] uppercase text-sp-muted">
                Event data via{' '}
                <a
                  href="https://www.ticketmaster.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sp-accent transition-colors"
                >
                  Ticketmaster
                </a>
                . Refreshed hourly.
              </p>
            )}
          </>
        )}
      </section>

      {/* Past shows — small archive */}
      {past.length > 0 && (
        <section className="border-t border-sp-border-soft bg-sp-card">
          <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-18">
            <div className="mb-8">
              <h2 className="font-display italic text-2xl md:text-4xl text-sp-text leading-none tracking-tight">
                Past shows
              </h2>
            </div>
            <ul className="space-y-0">
              {past.map((show) => (
                <PastShowRow key={show.id} show={show} />
              ))}
            </ul>
            <div className="mt-10">
              <Link
                href="/articles"
                className="text-[0.7rem] tracking-[0.25em] uppercase text-sp-muted hover:text-sp-accent transition-colors"
              >
                Read the coverage →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Submit a show */}
      <section className="border-t border-sp-border-soft">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="max-w-3xl">
            <h2 className="font-display italic text-3xl md:text-5xl text-sp-text leading-[1.05] tracking-tight mb-5 text-balance">
              Submit a show
            </h2>
            <p className="text-sp-soft text-base md:text-lg leading-relaxed font-light mb-7 max-w-2xl">
              Promoters, publicists, and fans — send us a Texas show we should cover.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-sp-accent text-sp-black text-[0.7rem] tracking-[0.25em] uppercase font-semibold px-7 py-4 hover:bg-sp-accent-hover transition-colors"
            >
              Send a show tip
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
