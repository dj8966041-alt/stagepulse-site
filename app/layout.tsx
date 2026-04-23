import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'StagePulse — Up Close. Every Show.',
    template: '%s | StagePulse',
  },
  description:
    "An independent music publication based in San Antonio, TX — covering live music everywhere. Concert reviews, photo galleries, artist spotlights, and show previews across every genre.",
  keywords: ['live music', 'san antonio', 'concert photography', 'music reviews', 'local music', 'stagepulse'],
  authors: [{ name: 'Diego Jauregui' }],
  openGraph: {
    siteName: 'StagePulse',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="bg-barricade-black font-sans text-barricade-text min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
