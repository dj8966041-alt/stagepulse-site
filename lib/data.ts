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
  readTime: string
  body: string[]
  tags: string[]
}

export type Gallery = {
  slug: string
  title: string
  subtitle: string
  photographer: string
  date: string
  displayDate: string
  venue: string
  photos: {
    index: number
    caption: string
    alt: string
  }[]
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
    slug: 'acl-fest-2026-lineup-speculation',
    type: 'preview',
    title: "ACL Fest 2026 — Who's In, Who's Out, and What the Lineup Is Missing",
    subtitle: "Confirmed bookings, sourced rumors, the names generating real buzz, and the two gaps the festival needs to answer for.",
    author: 'Diego Jauregui',
    date: '2026-04-22',
    displayDate: 'April 22, 2026',
    category: 'Festival Preview',
    coverIndex: 6,
    readTime: '8 min read',
    body: [
      "Every year around this time the ACL speculation cycle kicks into full gear. The lineup hasn't dropped yet — it usually comes sometime in May — and that gap between now and the announcement is where the real conversation happens. Who's in. Who got knocked out by a radius clause. Who nobody saw coming. This year that conversation is more complicated than usual and honestly more frustrating too. Here's where things stand.",
      "## What's Already Settled",
      "**Mumford & Sons** are coming back. If you're a regular at ACL this news landed with the energy of someone showing up to a party you've already seen them at twice. They have no Austin conflicts and open availability for both weekends. They put on a genuinely good show — nobody is disputing that — but there's a difference between a good show and an exciting announcement. As someone who has seen them at ACL before, the return feels more like a scheduling habit than a bold booking decision. It is what it is.",
      "**Asleep At The Wheel** are also confirmed. The Texas Western Swing institution returns as reliably as the October weather. Some things at ACL are just constants.",
      "## The Names Generating Real Buzz",
      "Four names come from sourced information inside the community and are about as close to confirmed as anything gets before the official announcement:",
      "**Bleachers** make complete sense here. Jack Antonoff has been on a serious run and their live show has gotten genuinely strong reviews. This is a booking that fits ACL's indie-pop identity without feeling safe or predictable.",
      "**The Chainsmokers** are polarizing and that's fine. They have an enormous catalogue of songs that a massive portion of the ACL crowd knows by heart and they know how to work a festival stage. Whether you consider yourself a fan or not there's something undeniable about hearing those songs outdoors at night with a crowd that size.",
      "**It's Murph** and **Suki Waterhouse** round out the rumored tier. Waterhouse has grown considerably since her 2023 appearance and the community seems genuinely excited about a return. It's Murph fits the mid-card indie rock slot that ACL always does well.",
      "## Who's Building Momentum",
      "A handful of artists have scheduling situations that point strongly toward ACL without being confirmed:",
      "**Twenty One Pilots** haven't been at ACL since 2015 and are spending 2026 exclusively playing festivals. They've already headlined multiple C3 shows this year — the same company that promotes ACL — and the gap in their schedule lines up perfectly. This feels overdue.",
      "**Turnstile** are everywhere this year. Bonnaroo, Lollapalooza, Shaky Knees — all C3 festivals. At some point the pipeline leads to Austin.",
      "**Parcels** have tour routing that lines up almost perfectly with Weekend 2 and sourced information backs it up. Quietly one of the stronger bets on this list.",
      "**Sierra Ferrell** opening for Mumford and Sons before the festival and with Texas shows reportedly in the works between weekends makes her presence feel close to inevitable.",
      "**Angine De Poitrine**, **Young Miko**, **Jesse Welles**, **Amyl and the Sniffers**, **Caamp**, and **Geese** all have scheduling situations worth watching — tour gaps, C3 festival appearances, or routing that points toward Austin. Geese in particular have been on practically every major C3 festival this year which is about as clear a signal as exists.",
      "## The Possible Column",
      "**KATSEYE** is personally one of the names I'm most excited about potentially being on this lineup. If you haven't seen their performances look them up right now. The music, the choreography, the staging, the lighting — they execute at a level that most acts with three times their profile don't come close to. They might have a new album out by October which would make a festival appearance even more timely. An ACL booking would be a genuine statement about where pop music is heading.",
      "**Charli XCX** would be electric on an ACL stage. She commands a crowd in a way that makes the whole thing feel like a moment rather than just a set. She's headlining Lollapalooza this year which keeps her in the conversation through the C3 connection. Personally feels like she might be done with the US festival circuit after Reading and Leeds but if she shows up in Austin it would be one of the sets of the weekend.",
      "**Lorde** is having her festival year — headlining practically everything worth headlining in 2026. The scheduling would have to work out but the appetite is clearly there.",
      "**Clairo**, **Rufus Du Sol**, **Blood Orange**, **The XX**, and **Lil Wayne** all have windows that could work depending on how things shake out. The XX situation is complicated — Jamie xx is opening for Harry Styles at Madison Square Garden through most of October — but the C3 and Lollapalooza connection keeps them technically in play. Don't count on it but don't fully rule it out either.",
      "## Who's Gone",
      "The OUT list this year is long and it hurts. **Doja Cat**, **Daniel Caesar**, **Kali Uchis**, **J. Cole**, **Gorillaz**, **Tame Impala**, **Zach Bryan**, **Post Malone** — all unavailable for various reasons. Most of them are simply somewhere else in the world on those exact dates or locked out by radius clauses from nearby shows. Post Malone is playing Circuit of the Americas which is almost comedically close to Zilker Park. Gone anyway.",
      "This is the defining story of ACL 2026's booking situation. More major artists than usual are on arena tours this year instead of the festival circuit. Radius clauses are hitting harder. The window between late September and mid-October is packed with conflicts in a way that makes the available talent pool genuinely smaller than it has been in recent years. This isn't just an ACL problem — it's an industry-wide 2026 problem — but ACL is feeling it as sharply as anyone.",
      "## The Two Gaps That Need To Be Said Out Loud",
      "The rap situation is real and it needs to be addressed directly. Look at recent ACL history. 2023 had **Kendrick Lamar** headlining — one of the most celebrated rap performances the festival has ever had. 2024 had **Tyler, the Creator** headlining — delivering exactly the kind of bold creative statement that makes a festival feel alive. Then 2025 came and there was no rap headliner at the top of the bill. And now 2026 is shaping up the same way — back to back years with nothing at the top of the bill in the genre that has arguably been the most culturally dominant force in music for the past decade.",
      "Back to back years with no rap at the top of the bill is not a coincidence. It is a pattern. And it is worth asking why.",
      "Part of the answer is a 2026-specific problem that is genuinely hitting every major festival hard. This year an unusual number of major artists across all genres decided to do arena and stadium tours instead of the festival circuit. Radius clauses have knocked out a staggering number of names that would otherwise be realistic bookings. The pool of available headliner-level talent in 2026 is genuinely smaller than in previous years and ACL is feeling that as sharply as anyone.",
      "But some of this is also an ACL identity question that predates 2026. The festival has always maintained a specific audience profile — older on average, more eclectic, more rooted in indie and Americana — and that profile creates genuine tension with what rap headlining looks like right now. Coachella commits fully to that lane. Rolling Loud builds its entire identity around it. ACL has always sat somewhere in the middle and that middle ground is getting harder to occupy as festival audiences diverge further and further by genre.",
      "The result is a 2026 lineup that risks being remembered as the year ACL played it safe at the top while everything interesting happened in the middle of the bill. Two straight years without a rap headliner at a Texas festival — in the state that gave the world Travis Scott, Don Toliver, and a hip hop culture that runs deeper than almost anywhere in the country — is a choice. Whether it's a deliberate one or just the consequence of a difficult booking year is the question only C3 can answer.",
      "The Latin music gap is the other conversation worth having. ACL is in Austin, Texas. Texas has one of the largest Latino populations in the country. The Latin music market is not a niche anymore — it is the fastest growing segment in the entire industry. And yet meaningful Latin representation at ACL has been minimal year after year. The most obvious booking right now would have been **Karol G** — but she's coming to San Antonio which puts her inside the radius window and takes her off the table entirely. That's a perfect encapsulation of how hard it is to fix this gap when radius clauses keep knocking out the biggest names in the genre before negotiations even start. It still needs to be fixed. The audience is there. The artists are there. The will to book them at the level they deserve is the missing piece.",
      "## The Bottom Line",
      "The rumored mid-card for 2026 is genuinely solid. **Bleachers**, **The Chainsmokers**, **Twenty One Pilots**, **Turnstile**, **Parcels** — these are real artists with real fanbases and real live shows worth showing up for. KATSEYE and Charli XCX in the possible column represent the kind of exciting bookings that could make this lineup feel alive at the top.",
      "But the headliner picture is unclear, the rap slot is empty, the Latin representation conversation is long overdue, and 2026 is shaping up to be one of the harder booking years the festival has faced in recent memory.",
      "The official lineup announcement comes in May. We'll have full coverage and our immediate reaction the moment it drops.",
      "[NOTE] ACL Festival 2026 runs October 2-4 and 9-11 at Zilker Park in Austin, TX. Tickets and information at aclfestival.com.",
    ],
    tags: ['ACL Fest', 'Austin City Limits', 'Festival Preview', 'Lineup', '2026'],
  },
  {
    slug: 'san-antonio-concert-calendar-2026',
    type: 'preview',
    title: "San Antonio's Concert Calendar Is Stacked — Here's What You Need to Know",
    subtitle: 'Don Toliver, Bruno Mars, Benson Boone, Lil Wayne, J. Cole, Karol G, and Carin León — and why you should already have your tickets.',
    author: 'Diego Jauregui',
    date: '2026-04-22',
    displayDate: 'April 22, 2026',
    category: 'Show Preview',
    coverIndex: 3,
    readTime: '7 min read',
    body: [
      "San Antonio doesn't always get treated like a major market. The city sits between Austin and Dallas in the Texas touring triangle, and too often gets passed over for one or both. But in 2026, the calendar looks different. The shows coming through are the kind of nights that turn into stories. Here's what you need to have on your radar — and, more importantly, on your calendar.",
      "## Don Toliver — Octane Tour",
      "Frost Bank Center | June 14, 2026 | with SoFaygo, SahBabii, Chase B",
      "**Don Toliver** is in rare form right now. Since 'Lose My Mind' and the Houston-to-everywhere arc he's been riding since linking with **Travis Scott**, Toliver has become one of the most distinct voices in melodic rap — the guy who makes you feel weightless at 2 AM on a Friday. Live, he delivers that same suspended feeling but louder, with a production setup that feels genuinely cinematic. Bringing **SoFaygo**, **SahBabii**, and **Chase B** along means the whole set is laced into something cohesive rather than just a setlist of features. This one is for anyone who has ever driven around San Antonio at night with his music on. Don't miss it.",
      "[TICKETS]",
      "## Bruno Mars",
      "Coming to San Antonio in 2026",
      "Nobody puts on a show quite like **Bruno Mars**. The man is a throwback to a different era of live performance — every night is a full production, every song is a moment, and he never half-asses a single second of it. If you haven't seen him live before, this is the year to fix that. Bruno Mars shows sell out fast and they sell out for a reason: the people who go come back talking about it like they witnessed something. Stop waiting.",
      "[TICKETS]",
      "## Benson Boone",
      "Coming to San Antonio in 2026",
      "**Benson Boone** became a viral moment and then proved he was a lot more than that. 'Beautiful Things' was everywhere, but what you might not know until you see him live is that the guy can genuinely sing — the kind of singing that makes people stop mid-conversation. His live performances lean theatrical without being hollow about it; there's real emotion behind every run and every pause. If you're the kind of person who dismisses pop music as surface-level, see him perform before you say that. The voice changes the conversation.",
      "[TICKETS]",
      "## Lil Wayne",
      "Coming to San Antonio in 2026",
      "Tha Carter III turned a generation. Tha Carter IV, Tha Carter V — **Lil Wayne** has been putting out music that matters for longer than most of the current audience has been paying attention. A live Lil Wayne show is its own experience: the catalog is so deep that a great night with Wayne covers everything from the mixtape era through the albums, and when the crowd is locked in, it stops feeling like a concert. It feels like a shared memory. San Antonio fans already know. Any show on this tour is a night you'll talk about.",
      "[TICKETS]",
      "## J. Cole",
      "Coming to San Antonio in 2026",
      "**J. Cole** live shows aren't what people who haven't been assume they are. People expect a sitting-and-nodding crowd. What actually happens is that the room knows every word to every verse — and when that works, it becomes a collective experience that doesn't feel like a concert at all. Cole has been deliberate about his career in ways that make every show feel like it might be one of the last for a while. When he's out there, he's fully present, and the crowd gives it back at the same level. If he's coming through, you go.",
      "[TICKETS]",
      "## Karol G",
      "Coming to San Antonio in 2026",
      "**Karol G** has become one of the biggest touring acts in music — not just in Latin music, in music full stop. Her shows are massive productions with choreography, visuals, and a crowd energy that's infectious regardless of whether you know Spanish. In San Antonio, she's not just popular — she's a cultural moment every time she comes through. The room is going to be full of people who have been waiting for this specific show. Get tickets early. She sells out.",
      "[TICKETS]",
      "## Carin León",
      "Coming to San Antonio in 2026",
      "**Carin León** represents something that doesn't get said enough: regional Mexican is having a moment that's bigger than any one genre cycle, and León is one of the main reasons why. His music crosses between banda, norteño, and Americana in ways that shouldn't work on paper but absolutely do in practice — and his live shows carry that same effortlessness. He has built a fanbase that transcends age, language, and background, and San Antonio — one of the most important cities in the country for regional Mexican music — is exactly the kind of market where a Carin León show becomes a cultural event. This one sells out. Plan accordingly.",
      "[TICKETS]",
    ],
    tags: ['San Antonio', 'Concert Preview', 'Don Toliver', 'Bruno Mars', 'Benson Boone', 'Lil Wayne', 'J. Cole', 'Karol G', 'Carin León'],
  },
  {
    slug: 'che-paper-tiger-may-2026',
    type: 'spotlight',
    title: 'Why Che at Paper Tiger on May 14 Is the Most Important Underground Show in San Antonio Right Now',
    subtitle: 'The Atlanta rapper who built a cult following from a bedroom is coming to the most important room in the city.',
    author: 'Diego Jauregui',
    date: '2026-04-22',
    displayDate: 'April 17, 2026',
    category: 'Artist Spotlight',
    venue: 'Paper Tiger',
    coverIndex: 0,
    readTime: '6 min read',
    body: [
      "There are shows you go to because everyone is going. There are shows you go to because you got the ticket for cheap and had nothing else to do that Friday. And then there are shows you go to because something is happening — something real, something that feels like it matters — and you want to be in the room when it does.",
      "Che at Paper Tiger on May 14 is the third kind.",
      "## Who Is Che",
      "Chase Shaun Mitchell was born in Atlanta, Georgia on August 29, 2006. He is nineteen years old. By the time most kids his age were figuring out what they wanted to do with their lives, Che had already built a fanbase from his bedroom, signed to a major independent label, released two critically acclaimed studio albums, and earned an 8.3 from Pitchfork — a score most artists spend their entire careers chasing.",
      "It started in 2020. Fourteen years old, COVID lockdowns, nothing to do. He downloaded BandLab — a free music production app — and started making music with no prior experience, no training, and no industry connections. Just a kid in Atlanta figuring it out by himself.",
      "By late 2021 his song \"Agenda\" went viral on TikTok. Then \"The Final Agenda.\" Then \"Euphoria.\" The underground rap internet found him fast and held on tight. By 2023 he had signed to 10K Projects — the same independent label behind Trippie Redd, Ice Spice, and Artemas — and released his debut mixtape Closed Captions to immediate critical praise.",
      "## The Music",
      "Che's sound is not easy to describe and that's exactly the point. It sits somewhere between rage rap, drill, hyperpop, and something that doesn't have a name yet. The production is maximalist — dense, layered, chaotic, with frothy hi-hats, distorted bass, and atmospheric synths that feel like they're constantly on the verge of collapsing into each other. His vocal delivery matches it — aggressive, distorted, higher-pitched, pushing into the red.",
      "Working closely with producer CXO, Che built a sound that critic after critic described as genuinely new. Not new in the way labels market artists as new. Actually new — like something that hadn't existed before he made it.",
      "His 2024 debut album Sayso Says leaned into that experimental identity fully. The record told the story of his alter ego Sayso, drawing heavy influence from electronic acts like Crystal Castles while never losing the Atlanta DNA underneath. It was strange and ambitious and it worked.",
      "Then in July 2025 came Rest in Bass — his second studio album and the record that made the wider music world pay attention. Pitchfork gave it an 8.3. TheNeedleDrop gave it a light 7. The critical consensus was clear: this was not a kid making rap music from his bedroom anymore. This was an artist operating at a genuinely high level, on his own terms, at nineteen years old.",
      "## Why Paper Tiger",
      "This is important. Che is not playing the AT&T Center. He is not playing the Majestic. He is playing Paper Tiger — a 1,200 capacity venue on the North Saint Mary's Strip that has become San Antonio's home for exactly this kind of show. Intimate, loud, sweaty, real.",
      "There is something specific that happens when an artist at Che's level plays a room this size. The energy has nowhere to go but into the crowd. You are not watching a production from the upper deck. You are in it. You feel every bass hit. You see his face. The whole thing is immediate in a way that arena shows simply cannot replicate.",
      "This is the kind of show people talk about for years. Not because of pyrotechnics or production budgets. Because of proximity and energy and the specific feeling of being in a small room with an artist who is genuinely good and genuinely hungry and has something to prove.",
      "## Why This Moment Matters",
      "Che just released a new EP in March 2026 called Fully Loaded — two singles followed by three new tracks, dropping on the heels of the Rest in Bass deluxe. He is not coasting. He is building. Every release tightens the vision, pushes the sound further, adds another layer to whatever it is he is constructing.",
      "The trajectory is obvious to anyone paying attention. The rooms are getting bigger. The reviews are getting louder. The fanbase is getting wider.",
      "May 14 at Paper Tiger might be one of the last times you see Che in a room this size in San Antonio. That is not hyperbole. That is just math.",
      "## The Bottom Line",
      "Go to this show. Buy the ticket now. Show up early. Get close to the stage. Pay attention.",
      "Che is the real thing. Paper Tiger is the perfect room. May 14 is the night.",
      "You'll want to have been there.",
      "[TICKETS]",
    ],
    tags: ['Che', 'Paper Tiger', 'Atlanta', 'Rage Rap', 'Artist Spotlight', 'San Antonio', '10K Projects', 'Pitchfork'],
  },
]

export const galleries: Gallery[] = []

export const radarEntries: RadarEntry[] = []
