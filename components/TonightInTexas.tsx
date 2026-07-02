import Link from 'next/link'
import { formatShowDate, upcomingShows, type Show } from '@/lib/shows'

const DAY_MS = 1000 * 60 * 60 * 24
/** How far ahead to look for the "this week" widget. Two weeks gives the
 *  homepage some breathing room between announcements. */
const WINDOW_DAYS = 14
const MAX_SHOWS = 4

/**
 * Tonight in Texas — homepage strip of the next handful of Texas concerts.
 *
 * Server component. Pulls from the same source as /calendar (manual + optional
 * Ticketmaster) and renders silently when there's nothing to show.
 */
export default async function TonightInTexas() {
  const upcoming = await upcomingShows()
  const cutoff = Date.now() + WINDOW_DAYS * DAY_MS
  const shows = upcoming
    .filter((s) => {
      const [y, m, d] = s.date.split('-').map(Number)
      if (!y || !m || !d) return false
      return new Date(y, m - 1, d).getTime() <= cutoff
    })
    .slice(0, MAX_SHOWS)

  if (shows.length === 0) return null

  return (
    <section className="border-t border-sp-border-soft bg-sp-card">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="mb-10 md:mb-12 flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display italic text-3xl md:text-5xl text-sp-text leading-[1.05] tracking-tight">
            Upcoming shows
          </h2>
          <Link
            href="/calendar"
            className="text-[0.7rem] tracking-[0.25em] uppercase text-sp-muted hover:text-sp-accent transition-colors whitespace-nowrap"
          >
            Full calendar →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-sp-border-soft">
          {shows.map((s) => (
            <TonightCard key={s.id} show={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TonightCard({ show }: { show: Show }) {
  const d = formatShowDate(show.date)
  return (
    <a
      href={show.ticketUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-sp-black p-6 md:p-7 group flex flex-col gap-5 hover:bg-sp-elevated transition-colors min-h-[180px]"
    >
      <div className="flex items-baseline gap-3">
        <span className="font-display text-5xl md:text-6xl text-sp-text leading-none tracking-tight">
          {d.day}
        </span>
        <div>
          <span className="block text-[0.7rem] tracking-[0.25em] uppercase text-sp-accent">
            {d.monthShort}
          </span>
          <span className="block text-[0.65rem] tracking-[0.2em] uppercase text-sp-muted mt-0.5">
            {d.weekday}
          </span>
        </div>
      </div>

      <div className="mt-auto">
        {show.soldOut && (
          <span className="block text-[0.6rem] tracking-[0.3em] uppercase text-sp-muted mb-2">
            Sold out
          </span>
        )}
        <h3 className="font-display text-xl md:text-2xl tracking-tight text-sp-text leading-[1.1] mb-2 group-hover:text-sp-accent transition-colors line-clamp-2">
          {show.artist}
        </h3>
        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-sp-muted">
          {show.venue} · {show.city}
        </p>
      </div>
    </a>
  )
}
