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
  /** Optional path to a real cover/hero image. When set, replaces the gradient placeholder on cards and the article hero. */
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

export const articles: Article[] = [
  {
    slug: 'acl-2026-preview-texas-acts',
    type: 'preview',
    title: 'ACL 2026 Preview: The Texas Acts Worth Showing Up Early For',
    subtitle:
      'Six homegrown artists buried in the undercard who could steal the festival before the headliners hit the stage.',
    author: 'Diego Jauregui',
    date: '2026-05-22',
    displayDate: 'May 22, 2026',
    category: 'Festival Preview',
    venue: 'Zilker Park, Austin',
    coverIndex: 3,
    readTime: '4 min read',
    body: [
      "The 2026 Austin City Limits lineup dropped earlier this month, and as is tradition, the conversation went immediately to the headliners. That's how festivals work. But the bigger story this year is happening lower on the bill, where Texas artists are stacked across the four days in a way ACL hasn't programmed in years.",
      "The names are smaller, the set times are mid-afternoon, and the press cycle hasn't bothered to flag them yet. But anyone watching the Texas scene over the last twelve months should already have a few of these acts circled.",
      "## Who's worth getting there early for",
      "The Texas presence cuts across genre. A Houston rapper coming off her best year ever. An Austin indie band whose debut landed harder than anyone expected. A San Antonio-born R&B project that's been quietly opening for everyone. A Dallas production duo whose tape last fall is going to age into a classic. None of them are headlining. All of them are worth showing up for.",
      "## Why this lineup feels different",
      "ACL has historically been weighted toward national bookings. Local programming has been there but light, often pushed to the smaller stages on Sunday afternoon when half the crowd is already cooked from two days of sun.",
      "This year reads different. Whether that's intentional curation or a reflection of how much Texas music has shifted is impossible to say from outside. The result is the same: build your weekend around the Texas acts and you'll see a festival most people are going to miss.",
      "[NOTE] Full lineup and set times at aclfestival.com. We'll have on-the-ground coverage from both weekends.",
    ],
    tags: [
      'ACL Festival',
      'Austin',
      'Festival Preview',
      'Texas Music',
      'Live Music',
      '2026',
    ],
  },
  {
    slug: 'don-toliver-frost-bank-center-san-antonio-2026',
    type: 'preview',
    title: 'Don Toliver Brings the Hardstone Psycho Tour to the Frost Bank Center',
    subtitle:
      'The Houston-born rapper is back on Texas soil for one night only — and the production is built for the room.',
    author: 'Diego Jauregui',
    date: '2026-05-20',
    displayDate: 'May 20, 2026',
    category: 'Show Preview',
    venue: 'Frost Bank Center',
    coverIndex: 1,
    readTime: '3 min read',
    body: [
      "Don Toliver is back in Texas, and the stop he's making at the Frost Bank Center on June 7 is the kind of show San Antonio rarely gets without making it onto the back half of a national tour. It's not the biggest room in the state, but for one night, it's going to be the loudest.",
      "Toliver is Houston-born. He came up through the Cactus Jack ecosystem, broke through with **Heaven or Hell** in 2020, and has spent the last six years building one of the most unmistakable vocal signatures in modern rap.",
      "## What to expect",
      "The Hardstone Psycho tour leans into the album's psychedelic, near-arena R&B production. Live, that translates to a wall of low end, real visual design, and a setlist that moves between Toliver's biggest hits and the more atmospheric, slow-burning cuts the new record is built around.",
      "## Why this stop matters",
      "Houston acts coming to San Antonio is not unusual. Houston acts at this scale stopping in San Antonio while the same tour is also booking Toyota Center is. The booking team chose this room on purpose. Take that as a compliment to the city.",
      "Doors at 7 PM. Tickets are still available — but only barely, and not at the price they started at.",
      "[TICKETS]",
    ],
    tags: [
      'Don Toliver',
      'Houston',
      'San Antonio',
      'Frost Bank Center',
      'Hardstone Psycho',
      'Show Preview',
    ],
  },
  {
    slug: 'texas-summer-concert-guide-2026',
    type: 'preview',
    title: 'Your Texas Summer Concert Guide: The Shows Worth Marking Down',
    subtitle:
      "From outdoor amphitheaters in Austin to club dates on the Saint Mary's strip, here's where the energy is going to be.",
    author: 'Diego Jauregui',
    date: '2026-05-18',
    displayDate: 'May 18, 2026',
    category: 'Show Guide',
    coverIndex: 2,
    readTime: '5 min read',
    body: [
      "Summer in Texas is brutal, but the concert calendar makes up for it. Between the outdoor amphitheaters, the indoor venues running their AC on max, and the festival circuit moving through Austin and Houston, the next four months are going to be unrelenting. Here's what we're marking down.",
      "## San Antonio",
      "Paper Tiger continues to do most of the heavy lifting for SA's underground bookings — three or four shows worth flying in for already on the books through August. The Aztec Theatre's run of touring rap dates is also unusually deep this year. The Tobin and Majestic are running their usual mix of theater-scale tours and one-night-only specials.",
      "## Austin",
      "Stubb's, Mohawk, Empire — the rotation is on its normal cycle. The bigger story is the festival circuit. ACL is the obvious headliner, but the run of smaller festivals in June and July are doing some of the more interesting booking this year. Watch the smaller bills.",
      "## Houston, Dallas, the rest",
      "White Oak Music Hall is having its strongest summer in years. Granada Theater in Dallas is doing the same. The Houston Toyota Center is hosting two of the bigger Texas-tied tours and a handful of national stops worth crossing the state for.",
      "We'll keep this updated through Labor Day. Show tips welcome at the contact page.",
    ],
    tags: [
      'Texas Music',
      'Summer 2026',
      'Show Guide',
      'San Antonio',
      'Austin',
      'Houston',
      'Dallas',
    ],
  },
  {
    slug: 'texas-rappers-to-watch-2026',
    type: 'spotlight',
    title: 'Six Texas Rappers Defining 2026',
    subtitle:
      'A roundup of the homegrown artists shaping how the state sounds this year — from Houston veterans to San Antonio newcomers.',
    author: 'Diego Jauregui',
    date: '2026-05-12',
    displayDate: 'May 12, 2026',
    category: 'Artist Roundup',
    coverIndex: 0,
    readTime: '6 min read',
    body: [
      "The Texas rap scene in 2026 doesn't have a center. That's the point. What used to be a Houston-dominated conversation has split open — Dallas is building its own gravity, San Antonio is moving artists nationally for the first time in a decade, and Austin is producing rappers who don't sound like anyone else's idea of an Austin rapper. Here are six acts shaping how the state actually sounds right now.",
      "## The Houston veterans still raising the ceiling",
      "The list opens where every Texas rap conversation has to open: Houston. The veterans who built the platform are still here, still releasing, and still cranking out music that beats almost anything the rest of the country is putting up. The model they laid down — slow, low, unhurried, regional in every way that matters — has never been more influential.",
      "## The San Antonio movement",
      "This is the part nobody outside Texas is talking about yet. Three artists in their early twenties, all from the south side, all releasing on their own labels, all booking out-of-state. The sound is different — colder, more electronic, less interested in trap drums than in what's happening overseas — but the work ethic is straight off the freeway.",
      "## Dallas and the production-driven wave",
      "Dallas in 2026 is producer's town. The rappers come second to the people building the beats, and the beats are some of the most adventurous regional production happening anywhere right now. The whole scene is one major-label A&R signing away from breaking out, and most of the people in it know it.",
      "## What to watch for the rest of the year",
      "Two of these artists have major-label deals stalled in legal negotiation. One is sitting on a mixtape that's been done since January. Another has a tour announcement coming any day. By Q4 the conversation about Texas rap is going to look genuinely different than it did at the start of the year.",
    ],
    tags: [
      'Texas Rap',
      'Houston',
      'San Antonio',
      'Dallas',
      'Artist Roundup',
      '2026',
    ],
  },
  {
    slug: 'freddie-dredd-back-to-hell-aztec-may-2026',
    type: 'review',
    title: "Freddie Dredd Brings the Back to Hell Tour to San Antonio's Aztec Theatre",
    subtitle:
      'Surprise Texas opener, four genuine sets at the intimate Aztec, and a headliner who held the room from first song to last.',
    author: 'Diego Jauregui',
    date: '2026-05-01',
    displayDate: 'May 1, 2026',
    category: 'Concert Review',
    venue: 'Aztec Theatre',
    coverIndex: 5,
    heroImage: '/articles/freddie-dredd-back-to-hell-aztec-may-2026/freddie-dredd-hero-dsc5420.png',
    readTime: '5 min read',
    body: [
      "The Back to Hell Tour made its San Antonio stop at the Aztec Theatre on May 1st, and what was already shaping up to be a great night of live music turned into something even better. The original bill listed **Germ** and one other opener alongside headliner **Freddie Dredd** — but the night came with a surprise addition in the form of a local Texas rapper who nobody saw coming. The crowd's reaction said it all. By the end of his set, fans were asking who he was, and the buzz around him carried all the way through the rest of the night.",
      "[PHOTOS:/articles/freddie-dredd-back-to-hell-aztec-may-2026/germ-1.png|Germ holds the Aztec Theatre crowd during his Back to Hell Tour set;;/articles/freddie-dredd-back-to-hell-aztec-may-2026/germ-2.png|Germ raises the mic mid-song under the Aztec Theatre's stage lights]",
      "All four performers brought something genuine to the stage. The intimate setting of the Aztec Theatre worked in everyone's favor — there's no smoke, no pyrotechnics, no massive production, but there doesn't need to be. The energy in the room filled every gap. One artist jumped down from the stage into the pit mid-performance, grabbing fans' phones to record himself while the crowd lost it. Another connected with the audience between songs, taking time for real dialogue rather than just running through a setlist. The DJs held everything together seamlessly throughout the night.",
      "[PHOTOS:/articles/freddie-dredd-back-to-hell-aztec-may-2026/freddie-dredd-2.png|Freddie Dredd performs through stage smoke at the Aztec Theatre;;/articles/freddie-dredd-back-to-hell-aztec-may-2026/freddie-dredd-4.png|Freddie Dredd locked in under deep red light at the Aztec Theatre, San Antonio]",
      "[PHOTOS:/articles/freddie-dredd-back-to-hell-aztec-may-2026/germ-3.png|Germ delivers a verse close-up at the Aztec Theatre;;/articles/freddie-dredd-back-to-hell-aztec-may-2026/germ-4.png|Germ closes out his opening set on the Back to Hell Tour]",
      "**Freddie Dredd** closed the night the way a headliner should — commanding the room and keeping the energy locked in from the first song to the last. If you're a fan of **$uicideboy$** or that pocket of dark rap, this tour is worth every penny. Tickets are affordable, the shows are intimate, and the performances deliver. StagePulse recommends catching the Back to Hell Tour if it's coming to your city.",
      "[PHOTOS:/articles/freddie-dredd-back-to-hell-aztec-may-2026/freddie-dredd-1.png|Freddie Dredd commands the Aztec Theatre stage during his Back to Hell Tour headlining set;;/articles/freddie-dredd-back-to-hell-aztec-may-2026/freddie-dredd-cover.png|Freddie Dredd close-up under the Aztec Theatre's stage lights]",
    ],
    tags: [
      'Freddie Dredd',
      'Germ',
      'Aztec Theatre',
      'San Antonio',
      'Back to Hell Tour',
      'Concert Review',
    ],
  },
  {
    slug: 'paper-tiger-san-antonio-venue-spotlight',
    type: 'spotlight',
    title: "Inside Paper Tiger: How a 1,200-Cap Room Became San Antonio's Most Important Venue",
    subtitle:
      "On the Saint Mary's strip, a former auto shop turned music hall has quietly become the city's loudest argument that scale isn't the same as importance.",
    author: 'Diego Jauregui',
    date: '2026-04-28',
    displayDate: 'April 28, 2026',
    category: 'Venue Spotlight',
    venue: 'Paper Tiger',
    coverIndex: 5,
    readTime: '4 min read',
    body: [
      "If you've been to a show in San Antonio in the last five years, there's a real chance it happened at Paper Tiger. The 1,200-capacity venue on the Saint Mary's strip has quietly become the most important room in the city — not by size, not by marketing, but by the consistency of what they book.",
      "## What Paper Tiger actually is",
      "A former auto shop turned music hall. Concrete floors, a stage that gets you closer to artists than almost any other room of its size in Texas, and a sightline situation that means the back of the room is still better than the middle of any arena. The capacity is exactly the right number for the artists who play it — big enough to feel like a real show, small enough to feel like a real room.",
      "## Why the booking matters",
      "Paper Tiger's calendar is consistently three steps ahead of the rest of the city. Touring acts who would absolutely have been booked at the Aztec or the Majestic a few years ago are choosing this room instead. Part of that is price. Part of it is intimacy. Most of it is that the staff actually books with curatorial intention — they're not chasing whatever's on Billboard.",
      "## What's next",
      "The summer calendar is one of the strongest the room has had. Four shows we're already credentialed for, two more we're hoping to be at, and a handful of announcements expected before July. If you're trying to understand what's actually happening in San Antonio music in 2026, Paper Tiger is where you start.",
    ],
    tags: [
      'Paper Tiger',
      'San Antonio',
      'Venue Spotlight',
      'Saint Marys Strip',
      'Live Music',
    ],
  },
  {
    slug: 'rolling-loud-california-2026-recap',
    type: 'review',
    title: 'Rolling Loud California 2026 Recap: Three Days, One Hell of a Texas Showing',
    subtitle:
      'Texas rappers held more of the lineup than anyone outside the state expected — and the crowds reacted accordingly.',
    author: 'Diego Jauregui',
    date: '2026-04-10',
    displayDate: 'April 10, 2026',
    category: 'Festival Recap',
    venue: 'Hollywood Park',
    coverIndex: 3,
    readTime: '5 min read',
    body: [
      "Rolling Loud California wrapped at Hollywood Park last weekend, and the Texas presence on the lineup was bigger than anyone outside the state was framing it as. Across three days and four stages, you could have built an entire set out of just the Texas-born acts on the bill — and most of them outdrew their slot.",
      "## The Texas takeover",
      "The headliner conversation didn't include any Texans this year, which is fair. But the mid-card was a different story. Crowds reacted to the regional sets the way you'd expect a hometown reaction — even though Hollywood Park is a long way from any of the cities these artists are from. That speaks to how much Texas rap has traveled in the last twelve months.",
      "## Who made the most of it",
      "Two specific sets are going to define how this festival gets remembered. One was a Houston veteran's mid-afternoon slot that pulled a crowd nobody saw coming. The other was a younger artist out of Dallas whose first major festival booking turned into the kind of viral moment that doesn't usually happen until day three.",
      "## What it means going forward",
      "Rolling Loud's California weekend has historically been weighted toward LA acts and East Coast bookings. The reweighting toward Texas this year was visible from the schedule. Whether that's a one-time programming choice or a sign of where the festival is going next is the question that matters for the rest of 2026.",
    ],
    tags: [
      'Rolling Loud',
      'California',
      'Festival Recap',
      'Texas Rap',
      'Houston',
      'Dallas',
      '2026',
    ],
  },
]

export const radarEntries: RadarEntry[] = []
