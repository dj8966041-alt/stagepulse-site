import Link from 'next/link'

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="15" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
    </svg>
  )
}

const footerNav = [
  { label: 'Articles', href: '/articles' },
  { label: 'Galleries', href: '/galleries' },
  { label: 'About', href: '/about' },
  { label: 'Press', href: '/press' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-barricade-border bg-barricade-black">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="font-display text-3xl tracking-widest text-barricade-text">STAGEPULSE</span>
              <span className="block h-0.5 w-full bg-barricade-red mt-1 mb-4" />
            </div>
            <p className="text-barricade-secondary text-sm leading-relaxed">
              Up close. Every show.
            </p>
            <p className="text-barricade-muted text-xs mt-2">
              San Antonio, TX — Independent since 2026
            </p>
            <div className="flex items-center gap-5 mt-6">
              <a href="https://instagram.com/stagepulselive" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="text-barricade-muted hover:text-barricade-text transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://tiktok.com/@stagepulselive" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="text-barricade-muted hover:text-barricade-text transition-colors">
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-barricade-muted mb-5">Navigate</h3>
            <nav className="flex flex-col gap-3">
              {footerNav.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-barricade-secondary hover:text-barricade-text text-sm transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-barricade-muted mb-5">Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-barricade-secondary">
              <div>
                <p className="text-barricade-muted text-xs uppercase tracking-widest mb-1">Press & Media</p>
                <a href="mailto:dj8966041@gmail.com" className="hover:text-barricade-text transition-colors">
                  dj8966041@gmail.com
                </a>
              </div>
              <div>
                <p className="text-barricade-muted text-xs uppercase tracking-widest mb-1">Pitches & General</p>
                <a href="mailto:dj8966041@gmail.com" className="hover:text-barricade-text transition-colors">
                  dj8966041@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-barricade-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-barricade-muted text-xs">
            © 2026 StagePulse — San Antonio, TX
          </p>
          <p className="text-barricade-muted text-xs">
            Independent. Unsponsored. Up close.
          </p>
        </div>
      </div>
    </footer>
  )
}
