import type { Metadata } from 'next'
import Link from 'next/link'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'

export const metadata: Metadata = {
  title: 'About',
  description:
    'StagePulse is a Texas-based independent publication covering live music, concerts, artist interviews, and fan culture across Texas and beyond. Founded in San Antonio in 2026.',
}

export default function AboutPage() {
  return (
    <div className="bg-sp-black min-h-screen">
      {/* Page intro */}
      <section className="pt-36 md:pt-44 pb-8 md:pb-12">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <span className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.35em] uppercase text-sp-accent mb-6">
            <span>★</span> About StagePulse
          </span>
          <h1 className="font-display italic text-5xl md:text-7xl lg:text-[6rem] tracking-tight text-sp-text leading-[0.95] mb-6 max-w-4xl text-balance">
            A Texas music<br className="hidden md:block" /> publication, in plain&nbsp;sight.
          </h1>
          <p className="text-sp-soft text-lg md:text-xl max-w-2xl leading-relaxed font-light">
            StagePulse is an independent publication covering concerts, artist interviews, and fan culture — based in San Antonio, reporting from everywhere the show is.
          </p>
        </div>
      </section>

      {/* Hero photo */}
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 mb-12 md:mb-16">
        <PhotoPlaceholder
          index={2}
          aspectRatio="21/9"
          className="w-full"
          alt="Stage lights at a Texas live music venue"
        />
      </div>

      {/* Main story */}
      <section className="max-w-screen-xl mx-auto px-5 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
          {/* Sidebar — facts */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <div className="border-l-2 border-sp-accent pl-6 mb-12">
              <blockquote className="font-display italic text-2xl md:text-[1.7rem] text-sp-text leading-[1.2] tracking-tight">
                "We cover the shows we actually went to, in the rooms we actually stood in."
              </blockquote>
            </div>

            <dl className="space-y-6">
              {[
                { term: 'Based in', def: 'San Antonio, TX' },
                { term: 'Founded', def: '2026' },
                { term: 'Coverage', def: 'Concerts, interviews, fan culture — across Texas and beyond.' },
                { term: 'Founder', def: 'Diego Jauregui' },
              ].map(({ term, def }) => (
                <div key={term} className="pt-5 border-t border-sp-border-soft">
                  <dt className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-2">{term}</dt>
                  <dd className="text-sp-text-2 text-sm md:text-base leading-relaxed">{def}</dd>
                </div>
              ))}
            </dl>
          </aside>

          {/* Body */}
          <div className="lg:col-span-8">
            <article className="space-y-7 text-sp-text-2">
              <p className="font-display text-xl md:text-2xl lg:text-[1.6rem] leading-[1.5] text-sp-text font-light text-balance">
                StagePulse is a music and culture publication built in Texas, born out of a simple idea: the shows happening here are worth covering with the same care any city would expect.
              </p>

              <p className="text-sp-soft text-base md:text-lg leading-[1.85] font-light">
                We're independent. No advertisers, no label relationships, no sponsored opinions. Every story, every photo, every interview is ours — and the only people we answer to are the readers and the artists we cover.
              </p>

              <p className="text-sp-soft text-base md:text-lg leading-[1.85] font-light">
                San Antonio is home base. Texas is the beat. From intimate club shows on the Saint Mary's strip to festival stages in Austin, theaters in Houston, and the back patios where local scenes get built — we go where the music is and we file from there.
              </p>

              <p className="text-sp-soft text-base md:text-lg leading-[1.85] font-light">
                And when artists we cover take their tours national, we follow. The frame doesn't end at the state line. Texas is where we live; the music is everywhere.
              </p>

              <div className="border-l-2 border-sp-accent pl-6 py-2 my-10">
                <p className="font-display italic text-xl md:text-2xl text-sp-text leading-[1.4] tracking-tight">
                  Texas-born. Music-driven. Independent on every page.
                </p>
              </div>

              <p className="text-sp-soft text-base md:text-lg leading-[1.85] font-light">
                The approach is straightforward: show up, get close, document what actually happened. The story comes from the room, not the press kit. The photos come from the pit, not a stock library. The opinions are ours, formed in real time, written without permission.
              </p>

              <p className="text-sp-soft text-base md:text-lg leading-[1.85] font-light">
                This is for the people in the crowd who knew something real was happening — and for the artists building careers one room at a time, who deserve coverage as honest as the work they put in.
              </p>
            </article>

            <div className="mt-14 pt-10 border-t border-sp-border-soft flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-sp-accent text-sp-black text-[0.7rem] tracking-[0.25em] uppercase font-semibold px-7 py-4 hover:bg-sp-accent-hover transition-colors"
              >
                Get in touch
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/apply"
                className="text-[0.7rem] tracking-[0.25em] uppercase text-sp-muted hover:text-sp-accent transition-colors"
              >
                Apply to contribute →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-t border-sp-border-soft bg-sp-card">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <div className="mb-14 md:mb-16">
            <span className="block text-[0.65rem] tracking-[0.35em] uppercase text-sp-accent mb-5">
              ★ How we work
            </span>
            <h2 className="font-display italic text-4xl md:text-6xl text-sp-text leading-[1.05] tracking-tight max-w-3xl text-balance">
              The values behind every story.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sp-border-soft">
            {[
              {
                title: 'Independent',
                body: 'No advertisers. No label relationships. No promotional agreements. Every review and feature is produced without any financial arrangement with the subjects.',
              },
              {
                title: 'On the ground',
                body: "If we covered a show, we were at the show. Standing on the floor, often near the front. Everything we publish starts from being there.",
              },
              {
                title: 'Available light',
                body: "We shoot without flash. It keeps us close to the actual energy of the room — and keeps the work honest to what the night actually looked like.",
              },
              {
                title: 'Honest by default',
                body: "We don't write press releases. We don't pre-agree to positive coverage. We go to the show and we write what happened — the good and the rough.",
              },
              {
                title: 'Built in San Antonio',
                body: 'Home base is SA. We cover this city like it deserves. When the story leaves Texas, so do we — but it always starts here.',
              },
              {
                title: 'For the readers',
                body: "We write for fans first — people who care enough to read 1,200 words about a Tuesday show. That's the audience. That's the bar.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-sp-card p-7 md:p-9">
                <div className="text-sp-accent mb-5 text-sm">★</div>
                <h3 className="font-display text-2xl md:text-[1.7rem] text-sp-text mb-3 tracking-tight leading-tight">
                  {title}
                </h3>
                <p className="text-sp-soft text-sm md:text-base leading-relaxed font-light">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
