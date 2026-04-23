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
      "**Bleachers** make complete sense here. **Jack Antonoff** has been on a serious run and their live show has gotten genuinely strong reviews. This is a booking that fits ACL's indie-pop identity without feeling safe or predictable.",
      "**The Chainsmokers** are polarizing and that's fine. They have an enormous catalogue of songs that a massive portion of the ACL crowd knows by heart and they know how to work a festival stage. Whether you consider yourself a fan or not there's something undeniable about hearing those songs outdoors at night with a crowd that size.",
      "**It's Murph** and **Suki Waterhouse** round out the rumored tier. Waterhouse has grown considerably since her 2023 appearance and the community seems genuinely excited about a return. **It's Murph** fits the mid-card indie rock slot that ACL always does well.",
      "## Who's Building Momentum",
      "A handful of artists have scheduling situations that point strongly toward ACL without being confirmed:",
      "**Twenty One Pilots** haven't been at ACL since 2015 and are spending 2026 exclusively playing festivals. They've already headlined multiple C3 shows this year — the same company that promotes ACL — and the gap in their schedule lines up perfectly. This feels overdue.",
      "**Turnstile** are everywhere this year. Bonnaroo, Lollapalooza, Shaky Knees — all C3 festivals. At some point the pipeline leads to Austin.",
      "**Parcels** have tour routing that lines up almost perfectly with Weekend 2 and sourced information backs it up. Quietly one of the stronger bets on this list.",
      "**Sierra Ferrell** opening for **Mumford & Sons** before the festival and with Texas shows reportedly in the works between weekends makes her presence feel close to inevitable.",
      "**Angine De Poitrine**, **Young Miko**, **Jesse Welles**, **Amyl and the Sniffers**, **Caamp**, and **Geese** all have scheduling situations worth watching — tour gaps, C3 festival appearances, or routing that points toward Austin. **Geese** in particular have been on practically every major C3 festival this year which is about as clear a signal as exists.",
      "## The Possible Column",
      "**KATSEYE** is personally one of the names I'm most excited about potentially being on this lineup. If you haven't seen their performances look them up right now. The music, the choreography, the staging, the lighting — they execute at a level that most acts with three times their profile don't come close to. They might have a new album out by October which would make a festival appearance even more timely. An ACL booking would be a genuine statement about where pop music is heading.",
      "**Charli XCX** would be electric on an ACL stage. She commands a crowd in a way that makes the whole thing feel like a moment rather than just a set. She's headlining Lollapalooza this year which keeps her in the conversation through the C3 connection. Personally feels like she might be done with the US festival circuit after Reading and Leeds but if she shows up in Austin it would be one of the sets of the weekend.",
      "**Lorde** is having her festival year — headlining practically everything worth headlining in 2026. The scheduling would have to work out but the appetite is clearly there.",
      "**Clairo**, **Rufus Du Sol**, **Blood Orange**, **The XX**, and **Lil Wayne** all have windows that could work depending on how things shake out. The XX situation is complicated — **Jamie xx** is opening for **Harry Styles** at Madison Square Garden through most of October — but the C3 and Lollapalooza connection keeps them technically in play. Don't count on it but don't fully rule it out either.",
      "## Who's Gone",
      "The OUT list this year is long and it hurts. **Doja Cat**, **Daniel Caesar**, **Kali Uchis**, **J. Cole**, **Gorillaz**, **Tame Impala**, **Zach Bryan**, **Post Malone** — all unavailable for various reasons. Most of them are simply somewhere else in the world on those exact dates or locked out by radius clauses from nearby shows. **Post Malone** is playing Circuit of the Americas which is almost comedically close to Zilker Park. Gone anyway.",
      "This is the defining story of ACL 2026's booking situation. More major artists than usual are on arena tours this year instead of the festival circuit. Radius clauses are hitting harder. The window between late September and mid-October is packed with conflicts in a way that makes the available talent pool genuinely smaller than it has been in recent years. This isn't just an ACL problem — it's an industry-wide 2026 problem — but ACL is feeling it as sharply as anyone.",
      "## The Two Gaps That Need To Be Said Out Loud",
      "The rap situation is real and it needs to be addressed directly. 2023 had **Kendrick Lamar** headlining. 2024 had **Tyler, the Creator** headlining. 2025 had no rap headliner at the top of the bill. And right now 2026 is shaping up the same way — back to back years with nothing at the top of the bill in the genre that has arguably been the most culturally dominant force in music for the past decade.",
      "Some of this is the 2026 touring problem described above. But some of it is also an identity question ACL has been quietly avoiding for years. This is a Texas festival. Texas gave the world **Travis Scott**, **Don Toliver**, **Megan Thee Stallion**, **Beyoncé** — a hip hop and R&B lineage that runs as deep as anywhere in the country. The argument that the ACL audience doesn't connect with rap headliners is getting harder to make every year as that audience gets younger and the genre gets bigger. Two straight years without a rap headliner is a pattern. It deserves to be called one.",
      "The Latin music gap is the other conversation worth having. ACL is in Austin, Texas. Texas has one of the largest Latino populations in the country. The Latin music market is not a niche anymore — it is the fastest growing segment in the entire industry. And yet meaningful Latin representation at ACL has been minimal year after year. The most obvious booking right now would have been **Karol G** — but she's coming to San Antonio which puts her inside the radius window and takes her off the table. That's a perfect encapsulation of how hard it is to fix this gap when radius clauses keep knocking out the biggest names in the genre before negotiations even start. It still needs to be fixed. The audience is there. The artists are there. The will to book them at the level they deserve is the missing piece.",
      "## The Bottom Line",
      "The rumored mid-card for 2026 is genuinely solid. **Bleachers**, **The Chainsmokers**, **Twenty One Pilots**, **Turnstile**, **Parcels** — these are real artists with real fanbases and real live shows worth showing up for. **KATSEYE** and **Charli XCX** in the possible column represent the kind of exciting bookings that could make this lineup feel alive at the top.",
      "But the headliner picture is unclear, the rap slot is empty, the Latin representation conversation is long overdue, and 2026 is shaping up to be one of the harder booking years the festival has faced in recent memory.",
      "The official lineup announcement comes in May. We'll have full coverage and our immediate reaction the moment it drops.",
      "[NOTE] ACL Festival 2026 runs October 2-4 and 9-11 at Zilker Park in Austin, TX. Tickets and information at aclfestival.com.",
    ],
    tags: ['ACL Fest', 'Austin City Limits', 'Festival Preview', 'Lineup', '2026'],
  },
  {
    slug: 'acl-2026-lineup-speculation',
    type: 'preview',
    title: 'ACL Fest 2026 — Who We Want, Who We Expect, and Who Would Break the Internet',
    subtitle: 'Headliner predictions, undercard wishes, and one pick that would set the internet on fire.',
    author: 'Diego Jauregui',
    date: '2026-04-22',
    displayDate: 'April 22, 2026',
    category: 'Festival Preview',
    coverIndex: 2,
    readTime: '5 min read',
    body: [
      "ACL Fest 2026 drops its lineup sometime this spring, and as of right now, the Austin City Limits card is still a blank page. Which means we get to do the fun part: speculate, argue, and pretend we have insider knowledge we absolutely do not have. Here's the StagePulse forecast for October 2026.",
      "## The Headliners",
      "Let's get the obvious one out of the way: **Kendrick Lamar**. Coming off the most dominant stretch in hip-hop in the last decade — the Drake beef, 'Not Like Us,' the Pulitzer, the Super Bowl halftime show — Kendrick is the biggest name in music right now. Whether he's doing a full set at ACL depends entirely on whether he's in touring mode, but if he is, ACL will chase him hard. This is the one that would break the internet.",
      "Second slot: **Chappell Roan**. She blew up at Lollapalooza, she blew up at Glastonbury, and she has been strategically selective about where she performs. A proper ACL headline set would be a coronation. She would sell the field twice over.",
      "Third slot is the wildcard. **Post Malone** in full country-crossover mode? **The Weeknd** on a Hurry Up Tomorrow victory lap? **Noah Kahan** building on his grassroots run into genuine stadium-level momentum? My gut says the third headliner is someone who makes half the internet say 'perfect' and the other half say 'who?' — and that's exactly what ACL needs right now.",
      "## The Undercard (What We Actually Want)",
      "**Doechii** is non-negotiable. She closed out last year as the most interesting rapper alive, and a festival set from her would be the kind of thing people talk about for years. Book her.",
      "**Benson Boone** is going to be everywhere in 2026, and his theatrical stage presence is built for a big outdoor audience. His songs have the kind of melodic lift that lands even if you've never heard them before.",
      "**Gracie Abrams** has quietly built one of the most devoted fanbases in indie pop. She spent two years supporting **Taylor Swift** — at some point she graduates to her own headline slot, and a mid-afternoon ACL set would be a statement of arrival.",
      "**Carin León**. Yes, he's country-adjacent. Yes, ACL has historically underrepresented regional Mexican. Book him anyway. Sell it as the booking of the year and watch what happens.",
      "## Wildcards",
      "**Charli XCX** — because Brat is eternal and because a proper live Charli set is one of the best things happening in pop music right now. She knows how to perform in a way that makes everything feel like a rave even in a field.",
      "**Amaarae** — undercard, late-night stage, the kind of set that gets clipped for three weeks and makes everyone feel like they discovered something.",
      "**Tyla** — growing fast across every genre barrier that used to exist. ACL programmers can't ignore that kind of momentum much longer.",
      "**FKA twigs** — because the last time she did a major festival set, people were still talking about it months later. The choreography alone is worth a ticket.",
      "## The Bottom Line",
      "ACL 2026 has the potential to be one of the stronger lineups in recent memory. The pool of available artists is deep and the moment is interesting — pop, hip-hop, regional, and indie are all having real moments simultaneously, which means the card could genuinely surprise people.",
      "Whoever gets **Kendrick** gets the conversation. Everything else is about whether the programmers have the taste to fill the rest of the card with people who actually mean something right now — not people who meant something five years ago.",
      "We'll be watching the announcement like everyone else. Check back here for the instant reaction.",
    ],
    tags: ['ACL Fest', 'Austin City Limits', 'Festival', 'Lineup Predictions', '2026'],
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
    displayDate: 'April 22, 2026',
    category: 'Artist Spotlight',
    venue: 'Paper Tiger',
    coverIndex: 0,
    readTime: '6 min read',
    body: [
      "There is a version of this story where **Che** is already everywhere. Where the algorithm made sure you already know his name, already have his albums saved, already have a ticket for May 14. But in San Antonio, we don't always get the benefit of that kind of early arrival — we find out about artists when they're already too big to play rooms like Paper Tiger. That's exactly why May 14 matters.",
      "Che is twenty years old. He grew up in Atlanta, in that particular lineage of Atlanta rap that values intensity over accessibility, energy over polish, volume over everything that gets in the way of the feeling. He started making music when he was fourteen years old — not as a hobby, not as something to do for school, but because COVID happened and a bedroom and BandLab and something to say were the only things available. That's a specific kind of origin story. It doesn't produce smooth, comfortable sounds. It produces something that sounds like pressure with a pulse.",
      "What came out of that bedroom was something that immediately had a different texture than most of what was circulating out of Atlanta at the time. The production was maximalist in the way early SoundCloud rap was maximalist — distorted bass, compressed everything, chaos organized at the last possible second before it falls apart. But Che's voice had control inside the chaos. He wasn't screaming randomly. He was screaming with purpose and precision, which is a harder thing to pull off than it sounds.",
      "The TikTok era helped and complicated things in equal measure. 'Agenda' blew up on the platform, then 'The Final Agenda' followed it, and suddenly Che had a fanbase that had found him through a thirty-second clip instead of an album deep-dive. A lot of artists get lost in that translation — the clip audience doesn't convert, the algorithm moves on, and the moment evaporates. Che went and made albums.",
      "## Three Albums That Build",
      "**Closed Captions**. **Sayso Says**. **Rest in Bass**. Three projects that build on each other in ways you only notice if you're paying attention from the beginning. The rage rap elements are still there on every record — that's the foundation, that's the identity — but by Rest in Bass he had developed enough sonic range to do something unexpected: pull back when the song needed it. Let the bass breathe instead of just collapsing under its own weight. Know when to stop.",
      "That kind of development in three albums, from a teenager who started on BandLab, is not the norm. It's what separates artists who matter from artists who had a moment.",
      "Pitchfork gave Rest in Bass an 8.3. That's not a number that happens by accident or by hype-cycle math. That's a number that means someone inside a legacy publication heard something genuinely interesting, heard real growth, and said so publicly. An 8.3 from Pitchfork in 2026 carries weight.",
      "## The Label That Gets It",
      "The **10K Projects** signing matters as context. 10K has been one of the most important labels in post-internet rap — **Trippie Redd**, **Iann Dior**, **Freddie Gibbs**, **Night Lovell**. It's not a roster built around the algorithm. It's a roster built around artists who have an actual identity, a specific sound that isn't easily replicated. Che fits there. The signing wasn't random. Someone at 10K looked at those three records and heard an artist, not a viral clip.",
      "## Why Paper Tiger Is the Right Room",
      "Paper Tiger is a 750-capacity venue on the near north side of San Antonio, and it is — without question — the most important room in the city for music that matters. Not the biggest room. The most important room. The ceiling is low enough that the sound lands differently. The bass hits your chest. You can see the artist's face. There's a reason certain shows at Paper Tiger become the kind of thing people reference years later — the room forces an intimacy that arenas and amphitheaters physically cannot replicate, no matter how large the production budget.",
      "Che at Paper Tiger is precisely the right scale for where Che is right now. He's beyond the DIY basement circuit. He's not yet playing pavilions and amphitheaters. He's at the inflection point — the moment where the room is full but not so full that you lose the artist inside it. The artist can still see the audience. The audience can still feel the artist looking back. May 14 at Paper Tiger is exactly that show. The kind you either catch or spend three years explaining why you didn't.",
      "## San Antonio Should Show Up",
      "San Antonio has a history of finding artists before they graduate to the next level. We've seen it in hip-hop, in regional, in punk, in indie. The city's music culture is real — it just doesn't always get treated that way from the outside. Che coming to Paper Tiger is an opportunity to do what this city does best: show up early, show up loudly, and make sure the artist knows they have a home here.",
      "He built a following from a bedroom in Atlanta at fourteen years old using free software. He made three albums that got progressively better in ways that critics had to acknowledge. He signed to a label that doesn't waste signings. He's coming to one of the best small rooms in Texas.",
      "The question is whether San Antonio will be in that room when it matters.",
    ],
    tags: ['Che', 'Paper Tiger', 'Atlanta', 'Rage Rap', 'Artist Spotlight', 'San Antonio', '10K Projects', 'Pitchfork'],
  },
]

export const galleries: Gallery[] = []

export const radarEntries: RadarEntry[] = []
