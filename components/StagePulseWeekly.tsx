/**
 * StagePulse Weekly — Spotify playlist embed on the homepage.
 *
 * To swap in your real curated playlist, grab the ID from the playlist's
 * Spotify URL (the bit between `/playlist/` and `?`) and replace the value
 * below. Spotify's embed widget handles the rest.
 *
 *   https://open.spotify.com/playlist/<THIS_IS_THE_ID>?si=...
 *
 */
const STAGEPULSE_PLAYLIST_ID = '3wRkGbixvLxIItiqUIu4PZ'

const PLAYLIST_URL = `https://open.spotify.com/playlist/${STAGEPULSE_PLAYLIST_ID}`
const EMBED_URL = `https://open.spotify.com/embed/playlist/${STAGEPULSE_PLAYLIST_ID}?utm_source=generator&theme=0`

export default function StagePulseWeekly() {
  return (
    <section className="border-t border-sp-border-soft">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Editorial column */}
          <div className="lg:col-span-5">
            <h2 className="font-display italic text-4xl md:text-6xl text-sp-text leading-[1.05] tracking-tight mb-5 text-balance">
              StagePulse Weekly
            </h2>
            <p className="text-sp-soft text-base md:text-lg leading-relaxed font-light mb-7 max-w-md">
              Tracks on our radar and on rotation at the studio. Updated every Sunday.
            </p>
            <a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.25em] uppercase text-sp-text border border-sp-border hover:border-sp-accent hover:text-sp-accent px-7 py-4 transition-colors"
            >
              Follow on Spotify
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Embed column */}
          <div className="lg:col-span-7">
            <iframe
              title="StagePulse Weekly — Spotify playlist"
              src={EMBED_URL}
              width="100%"
              height="420"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="border-0 block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
