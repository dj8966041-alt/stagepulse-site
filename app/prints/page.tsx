import type { Metadata } from 'next'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Prints',
  description:
    "Limited-edition concert photography prints from StagePulse — numbered, archival, and shipped from the studio in San Antonio. Coming soon.",
}

type Print = {
  title: string
  meta: string
  edition: string
  coverIndex: number
  priceFrom: string
}

const prints: Print[] = [
  {
    title: 'Freddie Dredd',
    meta: "Aztec Theatre · May '26",
    edition: 'Edition of 50',
    coverIndex: 5,
    priceFrom: 'From $85',
  },
  {
    title: 'Germ, Mid-Set',
    meta: "Aztec Theatre · May '26",
    edition: 'Edition of 50',
    coverIndex: 1,
    priceFrom: 'From $85',
  },
  {
    title: 'Paper Tiger',
    meta: "Saint Mary's Strip · Venue Series",
    edition: 'Edition of 25',
    coverIndex: 0,
    priceFrom: 'From $95',
  },
  {
    title: 'The Aztec Theatre',
    meta: 'Downtown SA · Venue Series',
    edition: 'Edition of 25',
    coverIndex: 7,
    priceFrom: 'From $95',
  },
  {
    title: "Stubb's, After Doors",
    meta: 'Austin · Venue Series',
    edition: 'Edition of 25',
    coverIndex: 2,
    priceFrom: 'From $95',
  },
  {
    title: 'Rolling Loud California',
    meta: "Hollywood Park · May '26",
    edition: 'Edition of 75',
    coverIndex: 3,
    priceFrom: 'From $75',
  },
]

const sizes = [
  { label: '11 × 14', price: '$85', note: 'Studio format' },
  { label: '16 × 20', price: '$145', note: 'Gallery format' },
  { label: '20 × 30', price: '$245', note: 'Statement format' },
]

const filters = ['All', 'Artists', 'Venues', 'Festivals', 'Open Editions']

const aboutCards = [
  {
    title: 'Numbered editions',
    body: 'Every print is individually numbered as part of a capped run. Most editions are limited to 25 or 50 — when the edition closes, that print is retired for good.',
  },
  {
    title: 'Archival paper',
    body: 'Printed on archival cotton-rag paper rated to 100+ years without fading. Each print is dry-mounted and ships in a rigid hard-tube enclosure.',
  },
  {
    title: 'Three standard sizes',
    body: '11×14, 16×20, and 20×30. Pricing starts at $85 for the smallest size. Larger formats and gallery framing are available on request.',
  },
  {
    title: 'Shipped from San Antonio',
    body: 'Every print is produced and shipped from the StagePulse studio. US orders ship in 5–7 business days. International shipping at cost.',
  },
  {
    title: "From rooms we've covered",
    body: 'Every image in the catalog comes from a show, venue, or festival we covered editorially. The image and the writeup belong to the same night.',
  },
  {
    title: 'A cut to the venues',
    body: 'Ten percent of every venue-series print sale goes back to the room the photo was made in. Independent venues keep the scene running — this is the smallest possible thanks.',
  },
]

export default function PrintsPage() {
  return (
    <div className="bg-sp-black min-h-screen relative">
      {/* ─── Blurred page content ────────────────────────────────────────
          Visually-complete print store sitting behind the Coming Soon
          gate. `aria-hidden` + `inert`-style classes keep the content out
          of the tab order; pointer-events-none and select-none mean the
          page reads as a preview and can't be interacted with.
      */}
      <div
        className="select-none pointer-events-none"
        aria-hidden="true"
        style={{ filter: 'blur(7px)' }}
      >
        {/* Header */}
        <section className="pt-36 md:pt-44 pb-12 md:pb-16 border-b border-sp-border-soft">
          <div className="max-w-screen-xl mx-auto px-5 md:px-8">
            <span className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.35em] uppercase text-sp-accent mb-6">
              <span>★</span> Photography by Diego Jauregui
            </span>
            <h1 className="font-display italic text-5xl md:text-7xl lg:text-[6rem] tracking-tight text-sp-text leading-[0.95] mb-6 max-w-3xl text-balance">
              Prints.
            </h1>
            <p className="text-sp-soft text-base md:text-xl max-w-2xl leading-relaxed font-light">
              Limited-edition concert photography from the rooms we've covered. Numbered, archival, printed and shipped from the studio in San Antonio.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-sp-border-soft">
          <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-6 md:py-7">
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((f, i) => (
                <span
                  key={f}
                  className={`text-[0.7rem] tracking-[0.2em] uppercase px-4 py-2.5 border ${
                    i === 0
                      ? 'border-sp-accent text-sp-accent'
                      : 'border-sp-border text-sp-soft'
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-8 md:gap-y-14">
            {prints.map((p) => (
              <article key={p.title}>
                <div className="overflow-hidden mb-5">
                  <PhotoPlaceholder
                    index={p.coverIndex}
                    aspectRatio="4/5"
                    alt={p.title}
                  />
                </div>
                <div className="flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-sp-accent mb-3">
                  <span className="w-3 h-px bg-sp-accent" />
                  {p.edition}
                </div>
                <h3 className="font-display text-2xl md:text-[1.7rem] tracking-tight text-sp-text leading-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-sp-soft text-sm leading-relaxed font-light mb-5">
                  {p.meta}
                </p>
                <div className="flex items-baseline justify-between pt-4 border-t border-sp-border-soft">
                  <span className="text-sp-text-2 text-sm">{p.priceFrom}</span>
                  <span className="text-[0.65rem] tracking-[0.25em] uppercase text-sp-muted">
                    View →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How a print is made */}
        <section className="border-t border-sp-border-soft bg-sp-card">
          <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-20 md:py-24">
            <div className="mb-14">
              <span className="block text-[0.65rem] tracking-[0.35em] uppercase text-sp-accent mb-4">
                ★ About the prints
              </span>
              <h2 className="font-display italic text-3xl md:text-5xl text-sp-text leading-[1.1] tracking-tight max-w-3xl text-balance">
                How a StagePulse print is made.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sp-border-soft">
              {aboutCards.map(({ title, body }) => (
                <div key={title} className="bg-sp-card p-7 md:p-9">
                  <div className="text-sp-accent mb-5 text-sm">★</div>
                  <h3 className="font-display text-2xl text-sp-text mb-3 tracking-tight leading-tight">
                    {title}
                  </h3>
                  <p className="text-sp-soft text-sm md:text-base leading-relaxed font-light">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sizes & pricing */}
        <section className="border-t border-sp-border-soft">
          <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="mb-10">
              <span className="block text-[0.65rem] tracking-[0.35em] uppercase text-sp-accent mb-3">
                ★ Sizes & pricing
              </span>
              <h2 className="font-display italic text-3xl md:text-4xl text-sp-text leading-tight tracking-tight">
                Standard editions.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-sp-border-soft">
              {sizes.map((s) => (
                <div key={s.label} className="bg-sp-black p-8 md:p-10">
                  <p className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-3">
                    {s.note}
                  </p>
                  <p className="font-display text-3xl md:text-4xl text-sp-text leading-none tracking-tight mb-6">
                    {s.label}
                  </p>
                  <p className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-2">
                    Starts at
                  </p>
                  <p className="text-sp-text-2 text-2xl font-display">{s.price}</p>
                </div>
              ))}
            </div>
            <p className="text-sp-muted text-xs leading-relaxed mt-6 max-w-2xl">
              Prices reflect unframed prints. Custom framing and oversized formats available on request. Edition pricing rises as the run fills — the earliest numbers are the lowest priced.
            </p>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="border-t border-sp-border-soft bg-sp-card">
          <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="max-w-2xl">
              <span className="block text-[0.65rem] tracking-[0.35em] uppercase text-sp-accent mb-4">
                ★ Custom requests
              </span>
              <h2 className="font-display italic text-3xl md:text-5xl text-sp-text leading-[1.05] tracking-tight mb-5 text-balance">
                Looking for a specific show?
              </h2>
              <p className="text-sp-soft text-base md:text-lg leading-relaxed font-light mb-7">
                If we covered a show and you want a print from that night, write us. Most of the archive isn't listed publicly — we open it on request.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ─── Coming Soon overlay ──────────────────────────────────────────
          Fixed-position card sits over the blurred preview. The scrim is
          z-30 so the global Nav (z-50) stays interactive on top. The
          card itself opts back into pointer events so the email form
          remains usable.
      */}
      <div className="fixed inset-0 z-30 flex items-center justify-center px-5 md:px-8 pt-24 pb-12 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-sp-black/65 via-sp-black/55 to-sp-black/80" />

        <div className="relative pointer-events-auto max-w-xl w-full bg-sp-card border border-sp-border p-8 md:p-12 text-center shadow-[0_30px_90px_rgba(0,0,0,0.7)]">
          <span className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.35em] uppercase text-sp-accent mb-6">
            <span>★</span> Coming Soon
          </span>
          <h2 className="font-display italic text-4xl md:text-5xl text-sp-text leading-[1.05] tracking-tight mb-5 text-balance">
            The print store<br /> opens this fall.
          </h2>
          <p className="text-sp-soft text-base md:text-lg leading-relaxed font-light mb-8 max-w-md mx-auto">
            Limited-edition, archival concert photography prints from the rooms we've covered. Drop your email and we'll send word the moment it's live — early access goes out first.
          </p>
          <NewsletterForm
            source="prints-early-access"
            className="max-w-md mx-auto text-left"
          />
        </div>
      </div>
    </div>
  )
}
