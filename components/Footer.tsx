import Link from 'next/link'

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="15" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  )
}

const footerNav = [
  { label: 'Articles', href: '/articles' },
  { label: 'Calendar', href: '/calendar' },
  { label: 'About', href: '/about' },
  { label: 'Apply', href: '/apply' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-sp-border-soft bg-sp-black">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 pt-20 pb-10">
        {/* Big editorial tagline anchored to the footer top */}
        <div className="pb-14 border-b border-sp-border-soft mb-14">
          <p className="font-display italic text-4xl md:text-6xl lg:text-7xl text-sp-text leading-[1.05] tracking-tight max-w-4xl">
            In the room.<br />
            <span className="text-sp-accent">On the record.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-baseline gap-1.5">
              <span className="font-display font-medium italic text-2xl text-sp-text leading-none">
                Stage<span className="font-semibold not-italic">Pulse</span>
              </span>
              <span aria-hidden="true" className="text-sp-accent text-[0.7rem]">★</span>
            </Link>
            <p className="text-sp-soft text-sm leading-relaxed mt-4 max-w-sm">
              Independent music and culture publication covering live shows, artists, and fan culture across Texas and beyond.
            </p>
            <p className="text-sp-muted text-xs mt-3 tracking-wide">
              San Antonio, TX — independent since 2026
            </p>
            <div className="flex items-center gap-5 mt-7">
              <a
                href="https://instagram.com/stagepulselive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-sp-muted hover:text-sp-accent transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://tiktok.com/@stagepulselive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-sp-muted hover:text-sp-accent transition-colors"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-5">Navigate</h3>
            <nav className="flex flex-col gap-3">
              {footerNav.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sp-soft hover:text-sp-text text-sm transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-5">Contact</h3>
            <div className="flex flex-col gap-5 text-sm">
              <div>
                <p className="text-sp-muted text-[0.65rem] uppercase tracking-[0.2em] mb-1">Apply & Credentials</p>
                <a
                  href="mailto:stagepulselive@gmail.com"
                  className="text-sp-text-2 hover:text-sp-accent transition-colors"
                >
                  stagepulselive@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sp-muted text-[0.65rem] uppercase tracking-[0.2em] mb-1">Pitches & General</p>
                <a
                  href="mailto:stagepulselive@gmail.com"
                  className="text-sp-text-2 hover:text-sp-accent transition-colors"
                >
                  stagepulselive@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-sp-border-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sp-muted text-xs">
            © 2026 StagePulse — San Antonio, Texas
          </p>
          <p className="text-sp-muted text-xs italic font-display">
            Live music. Real stories. No filter.
          </p>
        </div>
      </div>
    </footer>
  )
}
