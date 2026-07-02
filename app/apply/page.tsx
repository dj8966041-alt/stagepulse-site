import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Apply',
  description:
    'Apply to write or shoot for StagePulse, request press credentials, or pitch a story. Information for contributors, publicists, and promoters working with an independent Texas music publication.',
}

export default function ApplyPage() {
  return (
    <div className="bg-sp-black min-h-screen">
      {/* Header */}
      <section className="pt-36 md:pt-44 pb-14 md:pb-20 border-b border-sp-border-soft">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <span className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.35em] uppercase text-sp-accent mb-6">
            <span>★</span> Apply
          </span>
          <h1 className="font-display italic text-5xl md:text-7xl lg:text-[6rem] tracking-tight text-sp-text leading-[0.95] mb-6 max-w-4xl text-balance">
            Join the roster.
          </h1>
          <p className="text-sp-soft text-lg md:text-xl max-w-2xl leading-relaxed font-light">
            Pitch a story, apply as a contributor, or request press credentials. StagePulse is an independent Texas-based publication building out its run of writers, photographers, and on-the-ground coverage.
          </p>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 md:gap-20">
          {/* Main content */}
          <div className="lg:col-span-7 space-y-16">
            {/* Writers */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sp-accent text-xs">★</span>
                <h2 className="font-display italic text-3xl md:text-4xl tracking-tight text-sp-text">
                  Apply as a writer
                </h2>
              </div>
              <div className="space-y-5 text-sp-soft text-base md:text-lg leading-relaxed font-light">
                <p>
                  We accept pitches from independent writers on a rolling basis. We're especially interested in contributors embedded in their local scene — Austin, Houston, Dallas, the Valley — who know what's happening because they're already there.
                </p>
                <p>
                  Pitch a specific show review, an artist feature with a clear angle, or a scene piece tied to a moment. We don't assign speculatively — pitches should come with a point of view and a reason this story matters now.
                </p>
                <p>
                  Send the pitch, a couple of relevant writing samples, and a one-line bio to{' '}
                  <a
                    href="mailto:stagepulselive@gmail.com"
                    className="text-sp-text-2 hover:text-sp-accent transition-colors underline underline-offset-4 decoration-sp-border"
                  >
                    stagepulselive@gmail.com
                  </a>
                  . We respond within 48 hours.
                </p>
              </div>
            </div>

            {/* Photographers */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sp-accent text-xs">★</span>
                <h2 className="font-display italic text-3xl md:text-4xl tracking-tight text-sp-text">
                  Apply as a photographer
                </h2>
              </div>
              <div className="space-y-5 text-sp-soft text-base md:text-lg leading-relaxed font-light">
                <p>
                  We review portfolios show-by-show. If you have strong low-light concert work and you're embedded in a Texas scene, we want to hear from you. Bring a portfolio link and a brief note about your approach.
                </p>
                <p>
                  Our photographers operate within standard photo pit protocols and shoot in available light — no flash unless explicitly authorized. All images are used for editorial purposes; we don't sell images commercially without separate arrangements.
                </p>
                <p>
                  Send portfolio + a few lines to{' '}
                  <a
                    href="mailto:stagepulselive@gmail.com"
                    className="text-sp-text-2 hover:text-sp-accent transition-colors underline underline-offset-4 decoration-sp-border"
                  >
                    stagepulselive@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Press credentials */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sp-accent text-xs">★</span>
                <h2 className="font-display italic text-3xl md:text-4xl tracking-tight text-sp-text">
                  Request press credentials
                </h2>
              </div>
              <div className="space-y-5 text-sp-soft text-base md:text-lg leading-relaxed font-light">
                <p>
                  For publicists, promoters, and venues: StagePulse actively requests photo passes and press credentials for shows we plan to cover. If you represent a venue, festival, or touring artist coming through Texas, we'd love to be there.
                </p>
                <p>
                  Email{' '}
                  <a
                    href="mailto:stagepulselive@gmail.com"
                    className="text-sp-text-2 hover:text-sp-accent transition-colors underline underline-offset-4 decoration-sp-border"
                  >
                    stagepulselive@gmail.com
                  </a>{' '}
                  with the show name, date, venue, and any relevant details. We respond to credential requests within 48 hours.
                </p>
                <p>
                  We don't embargo reviews and we don't submit copy for approval. Artists and publicists are welcome to correct factual errors after publication, but editorial content is not subject to pre-publication review.
                </p>
              </div>
            </div>

            {/* What we cover */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sp-accent text-xs">★</span>
                <h2 className="font-display italic text-3xl md:text-4xl tracking-tight text-sp-text">
                  What we cover
                </h2>
              </div>
              <div className="space-y-5 text-sp-soft text-base md:text-lg leading-relaxed font-light">
                <p>
                  StagePulse is an independent music publication. The work is concert reviews, artist features and interviews, festival coverage, and scene reporting — the rooms, the audiences, and the artists who keep showing up to do the work.
                </p>
                <p>
                  Our editorial home base is San Antonio, and our core beat is Texas — Austin, Houston, Dallas, San Antonio, and everything in between. We follow stories when they leave the state, especially when artists we cover take their tours national.
                </p>
                <p>
                  We're genre-broad: rap, indie, Latin, country, R&B, electronic, punk. If it's a live show with a real audience and something interesting going on, it's in our lane.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-px bg-sp-border-soft">
              {/* Direct contact */}
              <div className="bg-sp-card p-8 md:p-9">
                <span className="block text-[0.65rem] tracking-[0.35em] uppercase text-sp-accent mb-4">
                  ★ Reach the desk
                </span>
                <h3 className="font-display text-2xl md:text-[1.7rem] tracking-tight text-sp-text mb-6 leading-tight">
                  Get in touch directly.
                </h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-2">Email</p>
                    <a
                      href="mailto:stagepulselive@gmail.com"
                      className="text-sp-text-2 hover:text-sp-accent transition-colors"
                    >
                      stagepulselive@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-2">Response time</p>
                    <p className="text-sp-soft text-sm">Within 48 hours for all applications and credential requests.</p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-2">Coverage area</p>
                    <p className="text-sp-soft text-sm">San Antonio first. Texas regularly. Anywhere the story is.</p>
                  </div>
                </div>
                <div className="mt-7 pt-6 border-t border-sp-border">
                  <Link
                    href="/contact"
                    className="block text-center bg-sp-accent text-sp-black text-[0.7rem] tracking-[0.25em] uppercase font-semibold px-6 py-4 hover:bg-sp-accent-hover transition-colors"
                  >
                    Use the contact form →
                  </Link>
                </div>
              </div>

              {/* At a glance */}
              <div className="bg-sp-card p-8 md:p-9">
                <span className="block text-[0.65rem] tracking-[0.35em] uppercase text-sp-accent mb-4">
                  ★ At a glance
                </span>
                <h3 className="font-display text-2xl md:text-[1.7rem] tracking-tight text-sp-text mb-6 leading-tight">
                  The basics.
                </h3>
                <dl className="space-y-4">
                  {[
                    { term: 'Founded', def: '2026, San Antonio' },
                    { term: 'Coverage', def: 'Live music & culture across Texas and beyond' },
                    { term: 'Beat', def: 'Concerts, artist features, scene reporting' },
                    { term: 'Advertising', def: 'None — fully independent' },
                    { term: 'Photography', def: 'Available light, no flash' },
                    { term: 'Reviews', def: 'Honest, unembargoed' },
                  ].map(({ term, def }) => (
                    <div key={term} className="flex justify-between items-baseline gap-4 pt-4 border-t border-sp-border">
                      <dt className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted flex-shrink-0">
                        {term}
                      </dt>
                      <dd className="text-sp-soft text-sm text-right">{def}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Venues we cover */}
              <div className="bg-sp-card p-8 md:p-9">
                <span className="block text-[0.65rem] tracking-[0.35em] uppercase text-sp-accent mb-4">
                  ★ Venues we cover
                </span>
                <h3 className="font-display text-2xl md:text-[1.7rem] tracking-tight text-sp-text mb-4 leading-tight">
                  Where we file from.
                </h3>
                <p className="text-sp-muted text-xs leading-relaxed mb-5">
                  San Antonio regulars plus the rooms we travel to across Texas. Not exhaustive — just where we end up most.
                </p>
                <ul className="grid grid-cols-1 gap-2.5 text-sp-soft text-sm">
                  {[
                    'Paper Tiger',
                    'The Aztec Theatre',
                    'Tobin Center for the Performing Arts',
                    'The Majestic Theatre',
                    "Sam's Burger Joint",
                    'Limelight',
                    'The Lonesome Rose',
                    "Stubb's — Austin",
                    'The Mohawk — Austin',
                    'White Oak Music Hall — Houston',
                    'Granada Theater — Dallas',
                    'Festival stages (ACL, F1, X Games)',
                  ].map((venue) => (
                    <li key={venue} className="flex items-start gap-3">
                      <span className="text-sp-accent text-[0.6rem] mt-1.5">★</span>
                      <span>{venue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
