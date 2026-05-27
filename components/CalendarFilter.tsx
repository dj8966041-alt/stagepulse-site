'use client'

import { useMemo, useState } from 'react'
import { groupShowsByMonth, type Show } from '@/lib/shows'
import { ShowRow } from './ShowRow'

/**
 * Concert calendar — city filter (client-side).
 *
 * The full upcoming list is passed in from the server (already hydrated with
 * manual + Ticketmaster shows, sorted by date). We just slice that array on
 * the client when a filter button is clicked — no page reload, no extra
 * network calls.
 *
 * Filter buttons surface live counts so the UI tells you which markets have
 * shows on the board without making you click around.
 */

type Filter = {
  value: string
  label: string
  /** Matched against `show.city` (case-insensitive). For 'all', the matcher is unused. */
  matches: (city: string) => boolean
}

const FILTERS: Filter[] = [
  { value: 'all', label: 'All Texas', matches: () => true },
  {
    value: 'san-antonio',
    label: 'San Antonio',
    matches: (c) => c.toLowerCase() === 'san antonio',
  },
  { value: 'austin', label: 'Austin', matches: (c) => c.toLowerCase() === 'austin' },
  { value: 'houston', label: 'Houston', matches: (c) => c.toLowerCase() === 'houston' },
  { value: 'dallas', label: 'Dallas', matches: (c) => c.toLowerCase() === 'dallas' },
]

export default function CalendarFilter({ shows }: { shows: Show[] }) {
  const [active, setActive] = useState<string>('all')

  // Per-filter counts — computed once per `shows` change, so re-renders are cheap.
  const counts = useMemo(() => {
    const map: Record<string, number> = {}
    for (const f of FILTERS) {
      map[f.value] = f.value === 'all' ? shows.length : shows.filter((s) => f.matches(s.city)).length
    }
    return map
  }, [shows])

  const filteredShows = useMemo(() => {
    const filter = FILTERS.find((f) => f.value === active) ?? FILTERS[0]!
    return filter.value === 'all' ? shows : shows.filter((s) => filter.matches(s.city))
  }, [shows, active])

  const months = useMemo(() => groupShowsByMonth(filteredShows), [filteredShows])
  const activeFilter = FILTERS.find((f) => f.value === active) ?? FILTERS[0]!

  return (
    <>
      {/* Filter buttons */}
      <div
        role="tablist"
        aria-label="Filter shows by city"
        className="flex flex-wrap gap-2 md:gap-3 mb-12 md:mb-16"
      >
        {FILTERS.map(({ value, label }) => {
          const isActive = active === value
          const count = counts[value] ?? 0
          const disabled = count === 0 && value !== 'all'
          return (
            <button
              key={value}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(value)}
              disabled={disabled}
              className={`inline-flex items-center gap-2.5 text-[0.7rem] tracking-[0.2em] uppercase font-semibold px-5 py-3 md:px-6 md:py-3.5 border transition-colors ${
                isActive
                  ? 'bg-sp-accent text-sp-black border-sp-accent'
                  : 'bg-transparent text-sp-text border-sp-border hover:border-sp-accent hover:text-sp-accent'
              } disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-sp-border disabled:hover:text-sp-text`}
            >
              <span>{label}</span>
              <span
                className={`text-[0.6rem] font-medium tracking-normal tabular-nums ${
                  isActive ? 'text-sp-black/55' : 'text-sp-muted'
                }`}
                aria-label={`${count} shows`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Filtered shows */}
      {filteredShows.length === 0 ? (
        <div className="py-16 md:py-20 text-center max-w-md mx-auto border border-sp-border-soft bg-sp-card">
          <div className="px-6">
            <span className="block text-[0.65rem] tracking-[0.35em] uppercase text-sp-accent mb-4">
              ★ Quiet in {activeFilter.label}
            </span>
            <p className="font-display italic text-2xl md:text-3xl text-sp-text mb-4 tracking-tight leading-tight">
              Nothing on the calendar here yet.
            </p>
            <p className="text-sp-soft text-sm md:text-base font-light leading-relaxed">
              Try a different city, or switch back to{' '}
              <button
                onClick={() => setActive('all')}
                className="underline underline-offset-2 hover:text-sp-accent transition-colors"
              >
                All Texas
              </button>{' '}
              to see every show.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-16 md:space-y-20">
          {months.map(({ label, shows: monthShows }) => (
            <div key={label}>
              <div className="flex items-end justify-between flex-wrap gap-4 mb-2">
                <h2 className="font-display italic text-3xl md:text-5xl text-sp-text leading-none tracking-tight">
                  {label}
                </h2>
                <span className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted">
                  {monthShows.length} {monthShows.length === 1 ? 'show' : 'shows'}
                </span>
              </div>
              <div>
                {monthShows.map((show) => (
                  <ShowRow key={show.id} show={show} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
