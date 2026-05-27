import type { Metadata } from 'next'
import { Bebas_Neue, Fraunces, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'opsz'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'StagePulse — Texas-born. Music-driven.',
    template: '%s | StagePulse',
  },
  description:
    'StagePulse is a Texas-based independent music and culture publication covering concerts, artist interviews, and fan culture across Texas and beyond. Founded in San Antonio.',
  keywords: [
    'live music',
    'concerts',
    'texas music',
    'san antonio',
    'artist interviews',
    'concert photography',
    'fan culture',
    'music publication',
    'stagepulse',
  ],
  authors: [{ name: 'Diego Jauregui' }],
  openGraph: {
    siteName: 'StagePulse',
    title: 'StagePulse — Texas-born. Music-driven.',
    description:
      'Independent music and culture publication from San Antonio, covering live shows, artists, and fan culture across Texas and beyond.',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${bebasNeue.variable}`}>
      <body className="bg-sp-black font-sans text-sp-text-2 min-h-screen antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
