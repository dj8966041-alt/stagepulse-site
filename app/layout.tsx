import type { Metadata } from 'next'
import { Bebas_Neue, Fraunces, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/site'

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'StagePulse — Independent live music coverage',
    template: '%s | StagePulse',
  },
  description:
    'StagePulse is an independent music publication. Concert reviews, artist features, and scene reporting — filed from the rooms, not the press releases.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'live music',
    'concerts',
    'concert reviews',
    'artist features',
    'concert photography',
    'scene reporting',
    'music publication',
    'hip-hop coverage',
    'underground music',
    'san antonio',
    'stagepulse',
  ],
  authors: [{ name: 'Diego Jauregui' }],
  openGraph: {
    siteName: 'StagePulse',
    title: 'StagePulse — Independent live music coverage',
    description:
      'Independent music publication. Concert reviews, artist features, and scene reporting — Texas-based, on the road for the rest.',
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
