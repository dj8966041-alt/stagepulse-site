export type Article = {
  slug: string
  type: 'review' | 'spotlight' | 'preview'
  title: string
  subtitle: string
  author: string
  date: string
  displayDate: string
  category: string
  venue?: string
  coverIndex: number
  heroImage?: string
  readTime: string
  body: string[]
  tags: string[]
}

export type RadarEntry = {
  artist: string
  venue: string
  date: string
  genre: string
  note: string
}
