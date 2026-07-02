export type VenueEntry = {
  name: string
  capacity: string
  genres: string[]
  /** Optional one-line note about the room. */
  note?: string
}

export const CITY_VENUES: Record<string, VenueEntry[]> = {
  'San Antonio': [
    { name: 'Alamodome', capacity: '18,500+', genres: ['Hip-Hop/Rap', 'Pop', 'R&B', 'Latin', 'Country'], note: 'Arena — stadium-scale tours and holiday-weekend specials.' },
    { name: 'Frost Bank Center', capacity: '18,500', genres: ['Hip-Hop/Rap', 'Pop', 'R&B', 'Country'], note: 'Former AT&T Center — Spurs home and major arena routing.' },
    { name: 'Aztec Theatre', capacity: '1,800', genres: ['Hip-Hop/Rap', 'Indie', 'Alternative', 'Rock'], note: 'Restored 1920s downtown room — one of the best rooms in the city.' },
    { name: 'Majestic Theatre', capacity: '2,300', genres: ['Theater', 'Comedy', 'Latin', 'Jazz', 'Pop'], note: 'Seated vaudeville-era hall for larger touring acts.' },
    { name: 'Tobin Center for the Performing Arts', capacity: '1,750', genres: ['Classical', 'Jazz', 'Latin', 'Broadway', 'Pop'], note: 'Performing arts center — strong Latin and jazz programming.' },
    { name: 'Paper Tiger', capacity: '1,200', genres: ['Indie', 'Hip-Hop/Rap', 'Alternative', 'Punk'], note: 'Saint Mary\'s strip flagship — booking runs ahead of every other room in town.' },
    { name: "Sam's Burger Joint", capacity: '1,500 outdoor', genres: ['Rock', 'Country', 'Indie', 'Hip-Hop/Rap'], note: 'Reliable calendar, strong under-21 programming.' },
    { name: 'The Limelight', capacity: '500', genres: ['Punk', 'Metal', 'Hardcore'], note: 'Small, loud, exactly what it needs to be.' },
    { name: 'The Lonesome Rose', capacity: '400', genres: ['Country', 'Americana', 'Tejano'], note: 'Saint Mary\'s strip — patio and honky-tonk programming.' },
    { name: 'Hi-Tones', capacity: '300', genres: ['Bar shows', 'DJ', 'Local'], note: 'Post-show hub on the strip — doubles as a music room.' },
    { name: 'Flamingo Cantina', capacity: '350', genres: ['Reggae', 'Funk', 'World'], note: 'Long-running downtown room with a loyal regular crowd.' },
  ],
  Austin: [
    { name: 'Moody Center', capacity: '15,000', genres: ['Hip-Hop/Rap', 'Pop', 'Rock', 'Country'], note: 'UT campus arena — major touring stop since 2022.' },
    { name: 'ACL Live at the Moody Theater', capacity: '2,750', genres: ['Indie', 'Rock', 'Hip-Hop/Rap', 'Americana'], note: 'Broadcast-quality room — one of the best-sounding halls in Texas.' },
    { name: "Stubb's Bar-B-Q", capacity: '2,000 outdoor', genres: ['Rock', 'Hip-Hop/Rap', 'Country', 'Indie'], note: 'Outdoor amphitheater — the postcard Austin show.' },
    { name: "Emo's Austin", capacity: '1,700', genres: ['Hip-Hop/Rap', 'Indie', 'Alternative', 'Punk'], note: 'Riverside anchor for mid-tier touring.' },
    { name: 'Mohawk', capacity: 'Indoor + outdoor', genres: ['Indie', 'Punk', 'Hip-Hop/Rap', 'Electronic'], note: 'Red River — two stages, strong booking on both.' },
    { name: 'Germania Insurance Amphitheater', capacity: '14,000', genres: ['Pop', 'Rock', 'Country', 'Hip-Hop/Rap'], note: 'Circuit of the Americas shed — summer touring circuit.' },
    { name: 'The Parish', capacity: '450', genres: ['Indie', 'Rock', 'Hip-Hop/Rap'], note: 'Red River small room — early-career and mid-tier stops.' },
    { name: 'Empire Control Room', capacity: '800', genres: ['Electronic', 'Hip-Hop/Rap', 'Indie'], note: 'Red River — club nights and touring electronic acts.' },
    { name: "Antone's Nightclub", capacity: '450', genres: ['Blues', 'Rock', 'Americana'], note: 'Historic blues room — roots and jazz programming.' },
    { name: 'Continental Club', capacity: '300', genres: ['Country', 'Rockabilly', 'Roots'], note: 'South Congress honky-tonk institution.' },
    { name: 'Scoot Inn', capacity: '1,500 outdoor', genres: ['Country', 'Rock', 'Hip-Hop/Rap'], note: 'East Austin outdoor yard — strong summer calendar.' },
  ],
  Houston: [
    { name: 'Toyota Center', capacity: '18,500', genres: ['Hip-Hop/Rap', 'Pop', 'R&B', 'Country'], note: 'Downtown arena — Houston\'s anchor for arena-scale tours.' },
    { name: 'NRG Stadium', capacity: '72,000', genres: ['Stadium pop', 'Hip-Hop/Rap', 'Country'], note: 'Stadium shows only — the biggest routing in the metro.' },
    { name: '713 Music Hall', capacity: '3,000', genres: ['Hip-Hop/Rap', 'R&B', 'Indie', 'Rock'], note: 'Mid-tier room the city was missing — now a workhorse.' },
    { name: 'White Oak Music Hall', capacity: 'Indoor + outdoor', genres: ['Indie', 'Hip-Hop/Rap', 'Country', 'Electronic'], note: 'Heights — two stages, strong touring calendar.' },
    { name: 'House of Blues Houston', capacity: '1,500', genres: ['Rock', 'Hip-Hop/Rap', 'R&B', 'Blues'], note: 'Standard touring rotation stop.' },
    { name: 'Bayou Music Center', capacity: '2,400', genres: ['Rock', 'Metal', 'Hip-Hop/Rap', 'Country'], note: 'Downtown theater-style room.' },
    { name: 'Revention Music Center', capacity: '2,700', genres: ['Rock', 'Metal', 'Hip-Hop/Rap'], note: 'Former Arena Theatre — mid-large touring acts.' },
    { name: 'Warehouse Live', capacity: '1,800', genres: ['Hip-Hop/Rap', 'Rock', 'Electronic'], note: 'Midtown — hip-hop and rock bookings stay busy.' },
    { name: 'Cynthia Woods Mitchell Pavilion', capacity: '16,500', genres: ['Pop', 'Country', 'Rock', 'Hip-Hop/Rap'], note: 'Woodlands amphitheater — summer shed routing.' },
    { name: 'Minute Maid Park', capacity: '40,000+', genres: ['Stadium pop', 'Country'], note: 'Baseball stadium — occasional stadium concerts.' },
    { name: 'Continental Club Houston', capacity: '300', genres: ['Blues', 'Roots', 'Americana'], note: 'Historic club room — local and touring roots acts.' },
    { name: 'Heights Theater', capacity: '600', genres: ['Indie', 'Americana', 'Singer-songwriter'], note: 'Restored theater — seated and standing shows.' },
  ],
  Dallas: [
    { name: 'American Airlines Center', capacity: '20,000', genres: ['Hip-Hop/Rap', 'Pop', 'R&B', 'Country'], note: 'Victory Park arena — DFW\'s primary arena stop.' },
    { name: 'AT&T Stadium', capacity: '80,000+', genres: ['Stadium pop', 'Country', 'Hip-Hop/Rap'], note: 'Arlington — stadium-scale only.' },
    { name: 'Dos Equis Pavilion', capacity: '20,000', genres: ['Pop', 'Rock', 'Country', 'Hip-Hop/Rap'], note: 'Fair Park amphitheater — summer touring circuit.' },
    { name: 'Toyota Music Factory', capacity: 'Indoor + pavilion', genres: ['Rock', 'Country', 'Hip-Hop/Rap', 'Pop'], note: 'Irving — indoor theater and outdoor pavilion.' },
    { name: 'The Factory in Deep Ellum', capacity: '4,300', genres: ['Hip-Hop/Rap', 'Rock', 'Electronic'], note: 'Deep Ellum warehouse — bigger hip-hop and rock tours.' },
    { name: 'Granada Theater', capacity: '1,100', genres: ['Indie', 'Hip-Hop/Rap', 'Jazz', 'Country', 'Rock'], note: 'Deep Ellum flagship — eclectic booking, beautiful room.' },
    { name: 'Trees', capacity: '700', genres: ['Punk', 'Hardcore', 'Hip-Hop/Rap', 'Experimental'], note: 'Deep Ellum — where the weirder bills land.' },
    { name: 'House of Blues Dallas', capacity: '1,600', genres: ['Rock', 'Hip-Hop/Rap', 'Blues'], note: 'Victory Park — steady touring calendar.' },
    { name: 'South Side Music Hall', capacity: '1,800', genres: ['Rock', 'Metal', 'Hip-Hop/Rap'], note: 'South Dallas — mid-tier rock and rap.' },
    { name: 'Deep Ellum Art Co.', capacity: '500', genres: ['Indie', 'Punk', 'Local'], note: 'Bar-venue hybrid on the Deep Ellum circuit.' },
    { name: 'The Kessler Theater', capacity: '800', genres: ['Indie', 'Americana', 'Jazz', 'Soul'], note: 'Oak Cliff — seated and standing, strong singer-songwriter bookings.' },
    { name: 'Echo Lounge & Music Hall', capacity: '900', genres: ['Rock', 'Metal', 'Punk'], note: 'Deep Ellum — rock and metal focus.' },
    { name: 'Canton Hall', capacity: '1,200', genres: ['Hip-Hop/Rap', 'Electronic', 'Indie'], note: 'Design District — newer room catching mid-tier tours.' },
  ],
}

/** Match a Ticketmaster venue string to a guide entry. */
export function matchVenue(showVenue: string, guideName: string): boolean {
  const a = showVenue.toLowerCase()
  const b = guideName.toLowerCase()
  return a.includes(b) || b.includes(a)
}

export function getVenuesForCity(city: string): VenueEntry[] {
  return CITY_VENUES[city] ?? []
}

/** Cities included when filtering metro-wide guides (Dallas–Fort Worth). */
export const DALLAS_METRO_CITIES = new Set([
  'dallas',
  'irving',
  'arlington',
  'fort worth',
  'grand prairie',
  'frisco',
  'plano',
  'garland',
])

export function showMatchesCityGuide(cityKey: string, showCity: string): boolean {
  const c = showCity.toLowerCase()
  if (cityKey === 'Dallas') return DALLAS_METRO_CITIES.has(c) || c.includes('dallas')
  return c === cityKey.toLowerCase()
}
