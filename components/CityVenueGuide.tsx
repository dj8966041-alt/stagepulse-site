import Link from 'next/link'
import { formatShowDate, upcomingShows } from '@/lib/shows'
import {
  getVenuesForCity,
  matchVenue,
  showMatchesCityGuide,
  type VenueEntry,
} from '@/lib/venues'

type Props = {
  city: string
}

/**
 * Live venue directory for city guide articles.
 * Venue list is static; upcoming shows pull from Ticketmaster + manual entries
 * and refresh hourly with the rest of the calendar.
 */
export default async function CityVenueGuide({ city }: Props) {
  const venues = getVenuesForCity(city)
  if (venues.length === 0) return null

  const upcoming = await upcomingShows()
  const cityShows = upcoming.filter((s) => showMatchesCityGuide(city, s.city))

  return (
    <div className="my-14 md:my-20 max-w-prose lg:max-w-none">
      <div className="space-y-8 md:space-y-10">
        {venues.map((venue) => (
          <VenueBlock key={venue.name} venue={venue} shows={cityShows.filter((s) => matchVenue(s.venue, venue.name))} />
        ))}
      </div>

      {cityShows.length > 0 && (
        <div className="mt-14 pt-10 border-t border-sp-border-soft">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-sp-muted mb-4">
            Listings refresh hourly via Ticketmaster ·{' '}
            <Link href="/calendar" className="text-sp-accent hover:underline underline-offset-2">
              Full calendar →
            </Link>
          </p>
        </div>
      )}
    </div>
  )
}

function VenueBlock({
  venue,
  shows,
}: {
  venue: VenueEntry
  shows: { artist: string; support?: string; date: string; ticketUrl: string; soldOut?: boolean }[]
}) {
  return (
    <article className="border border-sp-border-soft bg-sp-card p-6 md:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
        <h3 className="font-display text-2xl md:text-[1.65rem] text-sp-text tracking-tight leading-tight">
          {venue.name}
        </h3>
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-sp-muted">{venue.capacity}</span>
      </div>

      <p className="text-[0.7rem] tracking-[0.18em] uppercase text-sp-accent mb-3">
        {venue.genres.join(' · ')}
      </p>

      {venue.note && (
        <p className="text-sp-soft text-sm md:text-base leading-relaxed font-light mb-5">{venue.note}</p>
      )}

      <div className="pt-4 border-t border-sp-border-soft">
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-sp-muted mb-3">Upcoming</p>
        {shows.length === 0 ? (
          <p className="text-sp-muted text-sm font-light">Nothing listed right now — check back or see the full calendar.</p>
        ) : (
          <ul className="space-y-3">
            {shows.slice(0, 5).map((show) => {
              const d = formatShowDate(show.date)
              return (
                <li key={`${show.artist}-${show.date}`} className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-sp-text text-sm md:text-base">{show.artist}</span>
                    {show.support && (
                      <span className="text-sp-muted text-sm"> · {show.support}</span>
                    )}
                    <span className="block text-[0.65rem] tracking-[0.18em] uppercase text-sp-muted mt-1">
                      {d.full}
                      {show.soldOut ? ' · Sold out' : ''}
                    </span>
                  </div>
                  {!show.soldOut && (
                    <a
                      href={show.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.65rem] tracking-[0.2em] uppercase text-sp-accent hover:underline underline-offset-2 shrink-0"
                    >
                      Tickets →
                    </a>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </article>
  )
}
