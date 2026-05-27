'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/about', label: 'About' },
  { href: '/apply', label: 'Apply' },
  { href: '/contact', label: 'Contact' },
]

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
    <svg width="16" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  )
}

// Wordmark — mixed-case serif feels editorial; the small star/diamond is a
// quiet nod to Texas without leaning on flags or boots.
function Wordmark() {
  return (
    <span className="flex items-baseline gap-1.5">
      <span className="font-display font-medium italic text-[1.55rem] md:text-[1.7rem] tracking-tight text-sp-text leading-none">
        Stage<span className="font-semibold not-italic">Pulse</span>
      </span>
      <span aria-hidden="true" className="text-sp-accent text-[0.7rem] leading-none">★</span>
    </span>
  )
}

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-sp-black/90 backdrop-blur-md border-b border-sp-border-soft'
            : 'bg-gradient-to-b from-sp-black/70 to-transparent'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-[76px]">
          <Link href="/" className="group flex-shrink-0">
            <Wordmark />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.slice(1).map(({ href, label }) => {
              const active = pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-[0.7rem] tracking-[0.2em] uppercase font-medium transition-colors relative ${
                    active ? 'text-sp-text' : 'text-sp-soft hover:text-sp-text'
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sp-accent" />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
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
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <span className={`block h-px w-6 bg-sp-text transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px w-6 bg-sp-text transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-6 bg-sp-text transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-sp-black transition-transform duration-300 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col justify-center h-full px-8 pt-20 pb-12">
          <span className="block text-[0.65rem] tracking-[0.35em] uppercase text-sp-accent mb-6">
            Menu
          </span>
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-display italic text-5xl md:text-6xl py-2 transition-colors ${
                    active ? 'text-sp-accent' : 'text-sp-text hover:text-sp-accent'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>
          <div className="mt-14 pt-8 border-t border-sp-border-soft">
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-4">Follow</p>
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/stagepulselive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-sp-soft hover:text-sp-accent transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://tiktok.com/@stagepulselive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-sp-soft hover:text-sp-accent transition-colors"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
