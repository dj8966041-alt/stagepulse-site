/**
 * Concert calendar row components — shared by the server-rendered calendar
 * page and the client-side filter component.
 *
 * Pure presentation, no client hooks here — keep this file directive-free so
 * it can be rendered in either runtime. Adding `'use client'` would force the
 * whole calendar page into client-side rendering and defeat ISR.
 */

import { formatShowDate, type Show } from '@/lib/shows'

export function TicketButton({ show }: { show: Show }) {
  if (show.soldOut) {
    return (
      <span className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.25em] uppercase text-sp-muted border border-sp-border px-6 py-3.5">
        Sold out
      </span>
    )
  }
  const label =
    show.ticketProvider === 'Ticketmaster'
      ? 'Tickets on Ticketmaster'
      : show.ticketProvider === 'AXS'
      ? 'Tickets on AXS'
      : show.ticketProvider === 'DICE'
      ? 'Tickets on DICE'
      : show.ticketProvider === 'See Tickets'
      ? 'See Tickets'
      : show.ticketProvider === 'Front Gate'
      ? 'Tickets on Front Gate'
      : show.ticketProvider === 'Venue'
      ? 'Venue tickets'
      : 'Get tickets'
  return (
    <a
      href={show.ticketUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-sp-accent text-sp-black text-[0.7rem] tracking-[0.25em] uppercase font-semibold px-6 py-3.5 hover:bg-sp-accent-hover transition-colors whitespace-nowrap"
    >
      {label}
      <span aria-hidden="true">→</span>
    </a>
  )
}

export function ShowRow({ show }: { show: Show }) {
  const d = formatShowDate(show.date)
  return (
    <article className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 md:py-10 border-t border-sp-border-soft">
      {/* Date — big day number + month/weekday */}
      <div className="md:col-span-2">
        <div className="flex md:flex-col items-baseline md:items-start gap-3 md:gap-1">
          <span className="font-display text-5xl md:text-6xl text-sp-text leading-none tracking-tight">
            {d.day}
          </span>
          <div>
            <span className="block text-[0.7rem] tracking-[0.25em] uppercase text-sp-accent">
              {d.monthShort}
            </span>
            <span className="block text-[0.65rem] tracking-[0.2em] uppercase text-sp-muted mt-1">
              {d.weekday}
            </span>
          </div>
        </div>
      </div>

      {/* Artist + venue */}
      <div className="md:col-span-7">
        {show.featured && (
          <span className="block text-[0.6rem] tracking-[0.35em] uppercase text-sp-accent mb-2">
            ★ Featured
          </span>
        )}
        <h3 className="font-display text-2xl md:text-[1.9rem] text-sp-text leading-[1.1] tracking-tight mb-2">
          {show.artist}
        </h3>
        {show.support && (
          <p className="text-sp-soft text-sm md:text-base font-light mb-2">
            <span className="text-sp-muted">with</span> {show.support}
          </p>
        )}
        {show.tour && (
          <p className="text-sp-muted text-[0.7rem] uppercase tracking-[0.2em] mb-3">
            {show.tour}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] uppercase tracking-[0.18em] text-sp-muted">
          <span className="text-sp-text-2">{show.venue}</span>
          <span className="text-sp-subtle">·</span>
          <span>
            {show.city}, {show.state}
          </span>
          {show.doorsTime && (
            <>
              <span className="text-sp-subtle">·</span>
              <span>{show.doorsTime}</span>
            </>
          )}
        </div>
        {show.note && (
          <p className="text-sp-soft text-sm font-light mt-4 max-w-xl leading-relaxed">
            {show.note}
          </p>
        )}
      </div>

      {/* Ticket CTA */}
      <div className="md:col-span-3 flex md:justify-end md:items-center">
        <TicketButton show={show} />
      </div>
    </article>
  )
}

export function PastShowRow({ show }: { show: Show }) {
  const d = formatShowDate(show.date)
  return (
    <li className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4 border-t border-sp-border-soft text-sm">
      <span className="text-sp-muted text-[0.7rem] uppercase tracking-[0.2em] flex-shrink-0 w-24">
        {d.monthShort} {d.day}, {d.year}
      </span>
      <span className="text-sp-text-2 font-display text-lg md:text-xl tracking-tight">
        {show.artist}
      </span>
      <span className="text-sp-subtle">·</span>
      <span className="text-sp-soft text-sm">
        {show.venue}, {show.city}
      </span>
    </li>
  )
}
