/**
 * Concert Calendar — show data
 * ==========================================================================
 *
 *  HOW TO ADD A CONFIRMED SHOW MANUALLY
 *  ------------------------------------
 *  Edit `shows` below. Copy one of the existing entries, paste it into the
 *  array, fill in the real details, save. The site rebuilds automatically.
 *
 *  REQUIRED FIELDS for every entry:
 *    - id           unique slug-style id (used as a React key)
 *    - artist       headlining act
 *    - venue        venue name, e.g. "Paper Tiger"
 *    - city         city name
 *    - state        state / country abbreviation, e.g. "TX"
 *    - date         ISO date, YYYY-MM-DD
 *    - ticketUrl    real URL — Ticketmaster, AXS, venue site, etc.
 *
 *  NEVER ENTER PLACEHOLDERS
 *  ------------------------
 *  The calendar page is the public face of the publication. Only put
 *  confirmed shows in here. If you don't have an artist name yet, don't add
 *  the show. "TBA" / "TBD" should never appear on the live site.
 *
 *  AUTO-PULL FROM TICKETMASTER (recommended)
 *  -----------------------------------------
 *  Ticketmaster's free Discovery API auto-fills upcoming Texas concerts so
 *  you don't have to maintain this list by hand.
 *
 *    1. Sign up at https://developer.ticketmaster.com (takes ~2 minutes).
 *    2. Create an app → copy the "Consumer Key".
 *    3. Add to .env.local:
 *         TICKETMASTER_API_KEY=your_consumer_key
 *       and to Vercel → Settings → Environment Variables for production.
 *    4. Deploy. The /calendar page revalidates hourly and merges Ticketmaster
 *       events with the manual list below. Manual entries win on conflict.
 *
 *  If you don't add the key the calendar still works — it just shows whatever
 *  is in `shows` below plus a polished empty state when that list is empty.
 * ==========================================================================
 */

export type Show = {
  /** Unique slug-style id. Used as a React key. */
  id: string
  /** Headlining artist — real name only, never "TBA". */
  artist: string
  /** Opener(s). Optional. */
  support?: string
  /** Tour name. Optional. */
  tour?: string
  /** Venue name, e.g. "Paper Tiger". */
  venue: string
  /** City — e.g. "San Antonio". */
  city: string
  /** State / country abbreviation, e.g. "TX". */
  state: string
  /** ISO date, YYYY-MM-DD. */
  date: string
  /** Door / start time, free text, e.g. "Doors 7 PM". */
  doorsTime?: string
  /** External ticket URL — required. */
  ticketUrl: string
  /** Drives the ticket-button label. */
  ticketProvider?: 'Ticketmaster' | 'AXS' | 'See Tickets' | 'Front Gate' | 'Venue' | 'DICE'
  /** Optional one-line note shown under the show. */
  note?: string
  /** Highlights this show at the top of the page. */
  featured?: boolean
  /** Disables the ticket button (renders "Sold out" badge). */
  soldOut?: boolean
  /** Where this entry came from — for debugging only. */
  source?: 'manual' | 'ticketmaster'
}

/**
 * Real, manually-entered shows.
 *
 * Includes shows we've already covered in articles (they'll appear in the
 * "Shows we just covered" archive section at the bottom of /calendar). Replace
 * or add to as new confirmed shows are announced.
 */
export const shows: Show[] = [
  {
    id: 'freddie-dredd-aztec-2026-05-01',
    artist: 'Freddie Dredd',
    support: 'Germ',
    tour: 'Back to Hell Tour',
    venue: 'The Aztec Theatre',
    city: 'San Antonio',
    state: 'TX',
    date: '2026-05-01',
    ticketUrl: 'https://www.ticketmaster.com',
    ticketProvider: 'Ticketmaster',
    source: 'manual',
  },
]

// ─── TICKETMASTER AUTO-FILL ──────────────────────────────────────────────────
//
// One-time setup:
//   1. Sign up at https://developer.ticketmaster.com → create an app →
//      copy the "Consumer Key".
//   2. Add it to your env:
//        .env.local                         TICKETMASTER_API_KEY=...
//        Vercel → Environment Variables:    TICKETMASTER_API_KEY=...
//   3. Deploy. The calendar refreshes from Ticketmaster every hour
//      automatically — no further manual input needed.
//
// Manual entries in `shows` above always win on conflict.

/** Discovery API base URL. */
const TICKETMASTER_API_BASE = 'https://app.ticketmaster.com/discovery/v2'

/** Restrict results to a single US state. Empty string disables the filter. */
export const TICKETMASTER_STATE = 'TX'

/**
 * Ticketmaster classification "genre" allowlist. Empty array means accept all
 * music genres. Edit freely to match the publication's coverage.
 *
 * Full list of valid genre names lives at:
 *   https://app.ticketmaster.com/discovery/v2/classifications.json
 */
export const TICKETMASTER_GENRES: string[] = [
  'Hip-Hop/Rap',
  'Alternative',
  'Rock',
  'R&B',
  'Pop',
  'Metal',
  'Dance/Electronic',
  'Reggae',
  'Latin',
  'Tejano',
]

/** How long Ticketmaster responses are cached, in seconds (1 hour). */
export const TICKETMASTER_CACHE_TTL = 60 * 60

/** Max events to pull per page (Ticketmaster caps this at ~200). */
const TICKETMASTER_PAGE_SIZE = 100

/** Max pages to walk per refresh. 3 × 100 = up to 300 upcoming events. */
const TICKETMASTER_MAX_PAGES = 3

type TMVenue = {
  name?: string
  city?: { name?: string }
  state?: { stateCode?: string; name?: string }
}

type TMAttraction = { name?: string }

type TMEvent = {
  id: string
  name: string
  url?: string
  dates?: {
    start?: {
      localDate?: string
      localTime?: string
      dateTBD?: boolean
      dateTBA?: boolean
      noSpecificTime?: boolean
    }
    status?: { code?: string }
  }
  classifications?: {
    primary?: boolean
    segment?: { name?: string }
    genre?: { name?: string }
  }[]
  _embedded?: {
    venues?: TMVenue[]
    attractions?: TMAttraction[]
  }
}

type TMResponse = {
  _embedded?: { events?: TMEvent[] }
  page?: { totalPages?: number; number?: number }
}

export type TicketmasterStatus = {
  configured: boolean
  pagesFetched: number
  pagesFailed: number
  eventsFetched: number
  eventsAfterFilter: number
}

let lastStatus: TicketmasterStatus = {
  configured: false,
  pagesFetched: 0,
  pagesFailed: 0,
  eventsFetched: 0,
  eventsAfterFilter: 0,
}

/** Snapshot of the most recent Ticketmaster fetch — used by the dev banner. */
export function getTicketmasterStatus(): TicketmasterStatus {
  return lastStatus
}

/**
 * Best-effort fetch of upcoming Ticketmaster events.
 *
 * - Returns `[]` on any failure so the manual list always renders.
 * - Drops events with incomplete venue data so we never display placeholder
 *   text like "Venue TBA" on the live site.
 * - Filters to a single state (Texas by default) and an editable genre allowlist.
 * - Extracts the headliner + support acts from the event's attractions.
 * - Honors event status codes to flag sold-out / cancelled shows.
 * - Caches responses for an hour at the fetch layer (Next.js data cache),
 *   so the calendar stays current without hammering the API.
 */
export async function fetchTicketmasterShows(): Promise<Show[]> {
  const apiKey = process.env.TICKETMASTER_API_KEY

  if (!apiKey) {
    lastStatus = {
      configured: false,
      pagesFetched: 0,
      pagesFailed: 0,
      eventsFetched: 0,
      eventsAfterFilter: 0,
    }
    return []
  }

  const events: TMEvent[] = []
  let pagesFetched = 0
  let pagesFailed = 0

  const startDateTime = new Date().toISOString().split('.')[0] + 'Z'

  for (let page = 0; page < TICKETMASTER_MAX_PAGES; page++) {
    const url = new URL(`${TICKETMASTER_API_BASE}/events.json`)
    url.searchParams.set('apikey', apiKey)
    url.searchParams.set('classificationName', 'music')
    url.searchParams.set('size', String(TICKETMASTER_PAGE_SIZE))
    url.searchParams.set('page', String(page))
    url.searchParams.set('sort', 'date,asc')
    url.searchParams.set('startDateTime', startDateTime)
    if (TICKETMASTER_STATE) url.searchParams.set('stateCode', TICKETMASTER_STATE)

    let json: TMResponse | null = null
    try {
      const res = await fetch(url.toString(), {
        next: { revalidate: TICKETMASTER_CACHE_TTL },
      })
      if (!res.ok) {
        pagesFailed++
        if (process.env.NODE_ENV !== 'production') {
          console.warn(`[ticketmaster] page ${page}: HTTP ${res.status}`)
        }
        break
      }
      json = (await res.json()) as TMResponse
      pagesFetched++
    } catch (e) {
      pagesFailed++
      if (process.env.NODE_ENV !== 'production') {
        console.warn(
          `[ticketmaster] page ${page}: ${e instanceof Error ? e.message : 'fetch error'}`
        )
      }
      break
    }

    const batch = json?._embedded?.events ?? []
    events.push(...batch)

    const totalPages = json?.page?.totalPages ?? 0
    if (page + 1 >= totalPages) break
  }

  const normalized = events
    .map(normalizeTicketmasterEvent)
    .filter((s): s is Show => s !== null)

  lastStatus = {
    configured: true,
    pagesFetched,
    pagesFailed,
    eventsFetched: events.length,
    eventsAfterFilter: normalized.length,
  }

  if (process.env.NODE_ENV !== 'production') {
    console.info(
      `[ticketmaster] pages=${pagesFetched}/${pagesFetched + pagesFailed} ` +
        `events=${events.length} (after filter: ${normalized.length})`
    )
  }

  return normalized
}

function normalizeTicketmasterEvent(event: TMEvent): Show | null {
  const start = event.dates?.start
  const date = start?.localDate
  if (!date || start?.dateTBD || start?.dateTBA) return null

  const venue = event._embedded?.venues?.[0]
  const venueName = venue?.name?.trim()
  const city = venue?.city?.name?.trim()
  const state = venue?.state?.stateCode?.trim()
  if (!venueName || !city || !state) return null

  if (TICKETMASTER_STATE && state !== TICKETMASTER_STATE) return null

  const primary = event.classifications?.find((c) => c.primary) ?? event.classifications?.[0]
  const segment = primary?.segment?.name
  if (segment && segment !== 'Music') return null

  const genre = primary?.genre?.name
  if (TICKETMASTER_GENRES.length > 0 && genre && !TICKETMASTER_GENRES.includes(genre)) {
    return null
  }

  const attractions = event._embedded?.attractions ?? []
  const named = attractions.map((a) => a.name?.trim()).filter((n): n is string => Boolean(n))
  const headliner = named[0] ?? event.name?.trim()
  if (!headliner) return null

  const supportList = named.slice(1, 4)
  const support = supportList.length > 0 ? supportList.join(', ') : undefined

  if (!event.url) return null

  const statusCode = event.dates?.status?.code
  const soldOut = statusCode === 'offsale' || statusCode === 'cancelled'

  return {
    id: `tm-${event.id}`,
    artist: headliner,
    support,
    venue: venueName,
    city,
    state,
    date,
    ticketUrl: event.url,
    ticketProvider: 'Ticketmaster',
    soldOut: soldOut || undefined,
    source: 'ticketmaster',
  }
}

/** De-dupes by (artist + date + venue). Manual entries always win. */
function dedupe(list: Show[]): Show[] {
  const seen = new Map<string, Show>()
  for (const s of list) {
    const key = `${s.artist.toLowerCase()}|${s.date}|${s.venue.toLowerCase()}`
    const existing = seen.get(key)
    if (!existing || (existing.source !== 'manual' && s.source === 'manual')) {
      seen.set(key, s)
    }
  }
  return Array.from(seen.values())
}

// ─── DATE HELPERS + PUBLIC API ───────────────────────────────────────────────

function todayStart(): Date {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}

function parseShowDate(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, (m ?? 1) - 1, d ?? 1)
}

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function formatShowDate(iso: string) {
  const d = parseShowDate(iso)
  return {
    day: d.getDate(),
    month: MONTH_NAMES[d.getMonth()] ?? '',
    monthShort: (MONTH_NAMES[d.getMonth()] ?? '').slice(0, 3),
    weekday: d.toLocaleDateString('en-US', { weekday: 'short' }),
    year: d.getFullYear(),
    full: d.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
  }
}

/**
 * Returns all known shows (manual + optional Ticketmaster), de-duplicated.
 */
export async function getAllShows(): Promise<Show[]> {
  const remote = await fetchTicketmasterShows()
  return dedupe([...shows, ...remote])
}

export async function upcomingShows(): Promise<Show[]> {
  const cutoff = todayStart().getTime()
  const all = await getAllShows()
  return all
    .filter((s) => parseShowDate(s.date).getTime() >= cutoff)
    .sort((a, b) => a.date.localeCompare(b.date))
}

export async function pastShows(limit = 6): Promise<Show[]> {
  const cutoff = todayStart().getTime()
  const all = await getAllShows()
  return all
    .filter((s) => parseShowDate(s.date).getTime() < cutoff)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit)
}

export function groupShowsByMonth(list: Show[]): { label: string; shows: Show[] }[] {
  const groups = new Map<string, Show[]>()
  for (const show of list) {
    const fmt = formatShowDate(show.date)
    const label = `${fmt.month} ${fmt.year}`
    if (!groups.has(label)) groups.set(label, [])
    groups.get(label)!.push(show)
  }
  return Array.from(groups.entries()).map(([label, shows]) => ({ label, shows }))
}
