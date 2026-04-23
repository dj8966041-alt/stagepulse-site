import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Press & Media',
  description: 'Press pass requests, credential inquiries, and media information for StagePulse — San Antonio independent live music coverage.',
}

export default function PressPage() {
  return (
    <div className="bg-barricade-black min-h-screen">
      {/* Header */}
      <div className="border-b border-barricade-border pt-36 pb-12 md:pb-16">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <span className="block text-xs tracking-[0.35em] uppercase text-barricade-red mb-4">
            StagePulse
          </span>
          <h1 className="font-display text-6xl md:text-8xl tracking-widest text-barricade-text mb-4">
            PRESS &amp;<br className="md:hidden" /> MEDIA
          </h1>
          <p className="text-barricade-secondary text-base md:text-lg max-w-xl leading-relaxed">
            Information for publicists, promoters, venues, and artists seeking coverage from StagePulse.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 md:gap-20">
          {/* Main content */}
          <div className="lg:col-span-7 space-y-14">

            {/* What we cover */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-0.5 w-6 bg-barricade-red flex-shrink-0" />
                <h2 className="font-display text-3xl md:text-4xl tracking-widest text-barricade-text">
                  WHAT WE COVER
                </h2>
              </div>
              <div className="space-y-4 text-barricade-secondary text-base leading-relaxed">
                <p>
                  StagePulse covers live music across every genre — no exceptions. Our editorial calendar includes punk, hardcore, metal, indie rock, folk, Americana, country, cumbia, norteño, hip-hop, jazz, electronic, classical, and everything in between. If it's live and it's in San Antonio, we want to know about it.
                </p>
                <p>
                  Beyond shows, we cover artist spotlights and profiles on emerging and established acts, show preview roundups, scene coverage, and occasional longer features on San Antonio's music infrastructure — venues, promoters, and the independent ecosystems that keep live music alive in the city.
                </p>
                <p>
                  We cover national touring acts when they come through San Antonio, but our primary focus is local and regional artists, and we prioritize coverage that serves San Antonio readers specifically.
                </p>
              </div>
            </div>

            {/* Editorial approach */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-0.5 w-6 bg-barricade-red flex-shrink-0" />
                <h2 className="font-display text-3xl md:text-4xl tracking-widest text-barricade-text">
                  EDITORIAL APPROACH
                </h2>
              </div>
              <div className="space-y-4 text-barricade-secondary text-base leading-relaxed">
                <p>
                  StagePulse is fully independent. We do not accept advertising, sponsored content, or any financial arrangements that affect editorial decisions. Press passes and credentials are never exchanged for guaranteed positive coverage — we cover what we think is worth covering, and we write what we actually experienced.
                </p>
                <p>
                  Our reviews are honest assessments of live performances. We don't write puff pieces. If a show was exceptional, you'll know from reading us. If something didn't land, we'll say that too, with respect for the work that went into it.
                </p>
                <p>
                  We do not embargo reviews or submit copy for approval. Artists and publicists are welcome to correct factual errors, but editorial content is not subject to pre-publication review by subjects.
                </p>
              </div>
            </div>

            {/* Photo pass requests */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-0.5 w-6 bg-barricade-red flex-shrink-0" />
                <h2 className="font-display text-3xl md:text-4xl tracking-widest text-barricade-text">
                  PHOTO PASS &amp; PRESS CREDENTIALS
                </h2>
              </div>
              <div className="space-y-4 text-barricade-secondary text-base leading-relaxed">
                <p>
                  We actively seek photo passes and press credentials for shows we intend to cover. If you represent a venue, promoter, or touring act coming through San Antonio, we'd love to be there.
                </p>
                <p>
                  To request press or photo credentials, contact us at{' '}
                  <a href="mailto:dj8966041@gmail.com" className="text-barricade-text hover:text-barricade-red transition-colors underline underline-offset-2">
                    dj8966041@gmail.com
                  </a>{' '}
                  with the show name, date, venue, and any relevant details. We respond to all credential requests within 48 hours.
                </p>
                <p>
                  Our photographers work within standard photo pit protocols and are experienced at operating in low-light, high-volume environments. We shoot without flash unless explicitly authorized. All gallery usage follows standard editorial licensing — we do not sell images commercially without separate arrangements.
                </p>
              </div>
            </div>

            {/* Pitches */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-0.5 w-6 bg-barricade-red flex-shrink-0" />
                <h2 className="font-display text-3xl md:text-4xl tracking-widest text-barricade-text">
                  PITCHES FROM WRITERS &amp; PHOTOGRAPHERS
                </h2>
              </div>
              <div className="space-y-4 text-barricade-secondary text-base leading-relaxed">
                <p>
                  We accept pitches from independent writers and concert photographers on a rolling basis. We're especially interested in contributors who are already embedded in the San Antonio music community — people who go to shows because they love shows, not because they were assigned.
                </p>
                <p>
                  Writers: pitch us a specific show review, an artist you think deserves coverage, or a scene piece with a clear angle. We don't assign writers to shows speculatively — pitches should come with a genuine point of view.
                </p>
                <p>
                  Photographers: we review portfolios and work on a show-by-show basis. If you have strong low-light concert photography experience and want to contribute gallery work, send a link to your portfolio and a brief note about your approach to{' '}
                  <a href="mailto:dj8966041@gmail.com" className="text-barricade-text hover:text-barricade-red transition-colors underline underline-offset-2">
                    dj8966041@gmail.com
                  </a>.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-0">
              {/* Quick contact */}
              <div className="border border-barricade-border p-7 md:p-8">
                <h3 className="font-display text-2xl tracking-widest text-barricade-text mb-5">
                  PRESS CONTACT
                </h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-barricade-muted mb-1.5">Email</p>
                    <a href="mailto:dj8966041@gmail.com" className="text-barricade-text hover:text-barricade-red transition-colors">
                      dj8966041@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-barricade-muted mb-1.5">Response Time</p>
                    <p className="text-barricade-secondary text-sm">Within 48 hours for press and credential inquiries</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-barricade-muted mb-1.5">Coverage Area</p>
                    <p className="text-barricade-secondary text-sm">San Antonio, TX and surrounding region. Select travel for the right story.</p>
                  </div>
                </div>
                <div className="mt-7 pt-6 border-t border-barricade-border">
                  <Link
                    href="/contact"
                    className="block text-center text-xs tracking-widest uppercase bg-barricade-red text-white px-6 py-4 hover:bg-barricade-red-hover transition-colors"
                  >
                    Send Credential Request
                  </Link>
                </div>
              </div>

              {/* At a glance */}
              <div className="border border-barricade-border border-t-0 p-7 md:p-8">
                <h3 className="font-display text-2xl tracking-widest text-barricade-text mb-5">
                  AT A GLANCE
                </h3>
                <dl className="space-y-4">
                  {[
                    { term: 'Founded', def: '2026' },
                    { term: 'Based', def: 'San Antonio, TX' },
                    { term: 'Coverage', def: 'All genres, all venues' },
                    { term: 'Advertising', def: 'None — fully independent' },
                    { term: 'Photography', def: 'Available light only, no flash' },
                    { term: 'Reviews', def: 'Honest, unembargoed' },
                  ].map(({ term, def }) => (
                    <div key={term} className="flex justify-between items-baseline gap-4">
                      <dt className="text-xs tracking-widest uppercase text-barricade-muted flex-shrink-0">{term}</dt>
                      <dd className="text-barricade-secondary text-sm text-right">{def}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Venues we cover */}
              <div className="border border-barricade-border border-t-0 p-7 md:p-8">
                <h3 className="font-display text-2xl tracking-widest text-barricade-text mb-4">
                  VENUES WE COVER
                </h3>
                <p className="text-barricade-muted text-xs leading-relaxed mb-4">
                  Regular coverage includes, but is not limited to:
                </p>
                <ul className="space-y-2 text-barricade-secondary text-sm">
                  {[
                    'Paper Tiger',
                    'Ventura',
                    'The Mix',
                    'Tobin Center for the Performing Arts',
                    'The Majestic Theatre',
                    'The Aztec Theatre',
                    'The Lonesome Rose',
                    'Limelight',
                    'Sam\'s Burger Joint',
                    'Southtown venues and back patios',
                  ].map((venue) => (
                    <li key={venue} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-barricade-red rounded-full flex-shrink-0" />
                      {venue}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
