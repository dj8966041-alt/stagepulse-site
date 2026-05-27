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
    default: 'StagePulse — Independent live music coverage',
    template: '%s | StagePulse',
  },
  description:
    'StagePulse is an independent music and culture publication covering live concerts, artist interviews, and fan culture. Filed from the rooms where the shows happen.',
  keywords: [
    'live music',
    'concerts',
    'concert reviews',
    'artist interviews',
    'concert photography',
    'fan culture',
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
      'Independent music and culture publication covering live shows, artists, and fan culture — filed from the rooms where the shows happen.',
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
