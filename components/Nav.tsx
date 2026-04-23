'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/galleries', label: 'Galleries' },
  { href: '/about', label: 'About' },
  { href: '/press', label: 'Press' },
  { href: '/contact', label: 'Contact' },
]

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
    <svg width="16" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
    </svg>
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
          scrolled ? 'bg-barricade-black/95 backdrop-blur-sm border-b border-barricade-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-[72px]">
          {/* Wordmark */}
          <Link href="/" className="group flex-shrink-0">
            <span className="font-display text-2xl md:text-3xl tracking-widest text-barricade-text group-hover:text-white transition-colors">
              STAGEPULSE
            </span>
            <span className="block h-0.5 w-full bg-barricade-red mt-0.5" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map(({ href, label }) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-xs tracking-widest uppercase font-medium transition-colors ${
                    active ? 'text-barricade-red' : 'text-barricade-secondary hover:text-barricade-text'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Social icons + hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <a href="https://instagram.com/stagepulselive" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="text-barricade-muted hover:text-barricade-text transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://tiktok.com/@stagepulselive" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="text-barricade-muted hover:text-barricade-text transition-colors">
                <TikTokIcon />
              </a>
            </div>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <span className={`block h-px w-6 bg-barricade-text transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px w-6 bg-barricade-text transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-6 bg-barricade-text transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-barricade-black transition-transform duration-300 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col justify-center h-full px-8 pt-20 pb-12">
          <nav className="flex flex-col gap-2">
            {navLinks.map(({ href, label }) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-display text-5xl tracking-widest py-2 transition-colors ${
                    active ? 'text-barricade-red' : 'text-barricade-text hover:text-barricade-red'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>
          <div className="flex items-center gap-6 mt-12">
            <a href="https://instagram.com/stagepulselive" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="text-barricade-secondary hover:text-barricade-text transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://tiktok.com/@stagepulselive" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
              className="text-barricade-secondary hover:text-barricade-text transition-colors">
              <TikTokIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
