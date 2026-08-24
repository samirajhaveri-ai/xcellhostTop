/**
 * Insight articles. Add a post by adding a key here — the slug becomes the URL
 * (/insights/<slug>/). Body blocks: ['p', text] paragraph, ['h', text] heading,
 * ['ul', [items]] bullet list, ['cta', text] closing call to action.
 *
 * EDIT THIS FILE to change site content — no other file needs touching.
 */

import { BlogPost } from './models';

export const BLOG_POSTS: Record<string, BlogPost> = {
  "tally-vs-local": {
    "cat": "Cloud Strategy",
    "read": "7 min",
    "date": "July 2026",
    "title": "Tally on Cloud vs a local PC: the real 3-year cost comparison",
    "sub": "Server, UPS, AMC, the IT guy who visits when it breaks. We sat down with a Pune CA firm and added it all up over three years. The number surprised even us.",
    "body": [
      [
        "p",
        "Every firm we talk to believes the same thing at first: running Tally on the office desktop is free. You already bought the machine. There is no monthly bill. What is there to compare?"
      ],
      [
        "p",
        "So we did the exercise properly with a nine-person CA firm in Pune. Not estimates — their actual invoices, over three years."
      ],
      [
        "h",
        "What the office setup actually costs"
      ],
      [
        "p",
        "The desktop running Tally was not the expense. The expense was everything standing behind it."
      ],
      [
        "ul",
        [
          "A server-grade machine that could handle nine concurrent users, replaced once in the period",
          "A UPS, plus a battery replacement in year two",
          "An annual maintenance contract with the local hardware vendor",
          "A part-time IT engineer on call — billed per visit, and there were more visits than anyone remembered",
          "An external hard drive for backups that someone had to remember to plug in",
          "Two days of lost billing when the power supply failed during audit season"
        ]
      ],
      [
        "p",
        "That last line is the one nobody budgets for. When the machine holding your live books goes down in the third week of September, the cost is not the repair. It is the work that does not happen."
      ],
      [
        "h",
        "What moving to cloud replaced"
      ],
      [
        "p",
        "On cloud, the firm paid a flat per-user monthly fee. That fee absorbed the server, the redundancy, the backups, the patching, and the support engineer. There was no hardware to replace, no AMC to renew, and no battery to buy."
      ],
      [
        "p",
        "The partner’s summary was blunt: the monthly bill was visible in a way the old costs never were, and that visibility was uncomfortable at first. But when they compared three years against three years, the cloud figure was lower — and that was before counting the two days they got back."
      ],
      [
        "h",
        "Where the savings actually came from"
      ],
      [
        "p",
        "Not from the hardware, interestingly. Hardware is a one-time cost that people amortise in their heads until it feels like nothing. The savings came from three quieter places:"
      ],
      [
        "ul",
        [
          "Support calls that stopped happening, because there was no local machine to fail",
          "Backup discipline that stopped depending on a human remembering",
          "Audit-season downtime that went to zero"
        ]
      ],
      [
        "h",
        "When the local PC still wins"
      ],
      [
        "p",
        "We will be honest about this, because pretending otherwise wastes your time. A single-user practice with one accountant, no branches, no CA needing remote access, and a reliable machine — that setup is hard to beat on pure cost. Cloud earns its keep when there is more than one person, more than one location, or more than one device."
      ],
      [
        "h",
        "How to run this maths for your own firm"
      ],
      [
        "p",
        "Pull three years of invoices and add up: hardware purchases, AMC renewals, UPS and battery, every IT visit, and any storage bought for backups. Then estimate the hours lost to failures. Divide by 36 and compare it to a per-user monthly quote. Most firms are surprised in the same direction."
      ],
      [
        "cta",
        "Want us to run this comparison on your numbers? We will do it honestly — including telling you if staying local is the better call."
      ]
    ]
  },
  "offsite-backup": {
    "cat": "Data Protection",
    "read": "6 min",
    "date": "July 2026",
    "title": "Why every Indian SMB needs off-site backup in 2026",
    "sub": "Ransomware doesn’t wait for business hours. Here’s the story of a client who got that 3 AM call — and slept fine anyway.",
    "body": [
      [
        "p",
        "The call came at 3:10 AM. A manufacturing client’s file server had started encrypting itself. By the time their operations head saw the alert, most of the shared drive was gone."
      ],
      [
        "p",
        "Here is why that story has a boring ending: their most recent clean backup was three hours old, stored somewhere the ransomware could not reach, and it could not be altered even with domain admin credentials. They restored, verified, and were running before the morning shift."
      ],
      [
        "h",
        "The mistake almost everyone makes"
      ],
      [
        "p",
        "Most businesses do have backups. The problem is where those backups live. A backup drive attached to the same network as the thing it protects is not a backup — it is a second copy waiting for the same attack."
      ],
      [
        "p",
        "Modern ransomware looks for backups first. That is the whole strategy. Encrypt the recovery option, then encrypt production, then negotiate."
      ],
      [
        "h",
        "What off-site actually means"
      ],
      [
        "ul",
        [
          "A copy that lives outside your network, unreachable from an infected machine",
          "Immutable storage — once written, it cannot be modified or deleted for a set retention window",
          "Encryption in transit and at rest, with keys you control",
          "Frequent enough intervals that losing the gap is survivable"
        ]
      ],
      [
        "h",
        "How often is often enough?"
      ],
      [
        "p",
        "The honest answer is: how much work can you afford to redo? A firm posting a few hundred entries a day loses real money on a 24-hour gap. Three-hourly is a common sweet spot — short enough that the loss is an afternoon, not a week."
      ],
      [
        "h",
        "The step almost nobody does"
      ],
      [
        "p",
        "Test the restore. A backup you have never restored from is a theory. We ask clients to do a live restore drill at least twice a year, timed, with someone watching the clock. It is the only way to find out that the backup has been silently failing since March."
      ],
      [
        "h",
        "What to ask a provider"
      ],
      [
        "ul",
        [
          "Where does the copy physically sit, and under which jurisdiction?",
          "Is the storage immutable, and for how long?",
          "What is the actual recovery time for our data volume — measured, not promised?",
          "Who performs the restore at 3 AM, us or you?"
        ]
      ],
      [
        "cta",
        "We run backup and disaster recovery for businesses across India — including the restore drills. Ask us for the real recovery numbers for your data size."
      ]
    ]
  },
  "zero-downtime-migration": {
    "cat": "How-To",
    "read": "5 min",
    "date": "July 2026",
    "title": "Zero-downtime migration: how our overnight process actually works",
    "sub": "No downtime, no lost vouchers, no “please don’t touch anything for two days.” A plain-English walk through the migration playbook.",
    "body": [
      [
        "p",
        "Migration is where most IT projects quietly go wrong. Data goes missing, someone works a full day in the old system after cutover, and a week later you discover March is incomplete."
      ],
      [
        "p",
        "None of that is inevitable. It happens when a migration is treated as an event instead of a rehearsed process. Here is the process we actually follow."
      ],
      [
        "h",
        "Step 1 — Inventory before anything moves"
      ],
      [
        "p",
        "We list every company file, every user, every customisation, every printer, and every integration. The surprises always live here: a TDL customisation nobody documented, or a second company file on someone’s laptop."
      ],
      [
        "h",
        "Step 2 — A full dry run"
      ],
      [
        "p",
        "We migrate a complete copy to the new environment while the old one keeps running untouched. Nothing is cut over. This rehearsal tells us exactly how long the real move takes and what breaks."
      ],
      [
        "h",
        "Step 3 — You verify the dry run"
      ],
      [
        "p",
        "Your team logs into the rehearsal environment and checks the things only you would notice: opening balances, custom reports, the invoice format the client insists on. Sign-off happens here, before anything real changes."
      ],
      [
        "h",
        "Step 4 — The overnight cutover"
      ],
      [
        "p",
        "The final sync runs after business hours. It only carries the delta — what changed since the dry run — so it is fast. Users log off from the old system at the end of day and log into the new one the next morning."
      ],
      [
        "h",
        "Step 5 — The old system stays alive"
      ],
      [
        "p",
        "We do not decommission anything for at least two weeks. If something was missed, the source is still there, read-only, to compare against. This single habit prevents almost every migration horror story."
      ],
      [
        "h",
        "What we need from you"
      ],
      [
        "ul",
        [
          "An accurate list of who needs access, and at what level",
          "One person who can make decisions during cutover night",
          "Two hours of a senior person’s time to verify the dry run"
        ]
      ],
      [
        "p",
        "That is genuinely it. Everything else is ours."
      ],
      [
        "cta",
        "Planning a move? We will scope it and tell you honestly how long it takes — including whether it is worth doing at all right now."
      ]
    ]
  },
  "tally-cloud-guide": {
    "cat": "Cloud Strategy",
    "read": "9 min",
    "date": "July 2026",
    "title": "The complete guide to Tally on Cloud for Indian businesses",
    "sub": "What it is, when it genuinely helps, when it doesn’t, and the questions to ask before you sign anything.",
    "body": [
      [
        "p",
        "Tally runs the books for a very large share of Indian business. It is stable, it is understood, and nobody wants to replace it. The question is not whether to leave Tally — it is where Tally should run."
      ],
      [
        "h",
        "What Tally on Cloud actually is"
      ],
      [
        "p",
        "Instead of Tally being installed on a machine in your office, it runs on a server in a datacenter. You reach it from a browser or a lightweight client. Your data lives on that server, backed up on a schedule, reachable from any device with a connection."
      ],
      [
        "p",
        "Your licence does not change. Your Tally does not change. What changes is the box it runs on and who is responsible for that box."
      ],
      [
        "h",
        "Where it genuinely helps"
      ],
      [
        "ul",
        [
          "Multiple branches that currently email backup files to each other",
          "A CA who needs access during audit season without visiting your office",
          "Staff who work from home even occasionally",
          "Anyone whose books have ever been held hostage by one desktop failing",
          "Firms that keep forgetting to take backups"
        ]
      ],
      [
        "h",
        "Where it does not help much"
      ],
      [
        "p",
        "Single user, single location, reliable machine, no remote access needed, patchy internet. In that situation cloud adds cost and a dependency without solving a problem you actually have. We tell people this regularly."
      ],
      [
        "h",
        "The internet question"
      ],
      [
        "p",
        "This is the honest constraint. Tally on cloud needs a stable connection. It does not need a fast one — the session is lightweight — but it does need a consistent one. A connection that drops for ten minutes at a time will frustrate your accountant. A second connection as failover solves it cheaply."
      ],
      [
        "h",
        "The security question"
      ],
      [
        "p",
        "The instinct is that data on your own premises is safer. In practice, the office desktop usually has no encryption, no patching schedule, one shared password, and a backup drive sitting next to it. A managed datacenter environment is the safer of the two more often than not — but only if the provider is doing the work. Ask them to prove it."
      ],
      [
        "h",
        "What to ask before signing"
      ],
      [
        "ul",
        [
          "Where is the data physically located, and is it in India?",
          "How often are backups taken, and are they immutable?",
          "Can I download a full backup of my own data at any time?",
          "What happens to my data if I leave — and will you certify deletion?",
          "Is support staffed by people who understand Tally, or just servers?",
          "What is the actual uptime record, not the SLA number?"
        ]
      ],
      [
        "h",
        "Migration in practice"
      ],
      [
        "p",
        "A typical move takes a few days end to end, most of which is verification rather than transfer. The pattern that works: inventory, dry run, you verify, overnight cutover, old system kept alive for two weeks."
      ],
      [
        "h",
        "The honest summary"
      ],
      [
        "p",
        "Tally on Cloud is not a transformation. It is an infrastructure decision that removes a category of problems — hardware failure, backup discipline, remote access — and introduces one dependency, your connection. For most firms with more than one user, that trade is clearly worth it. For some, it is not."
      ],
      [
        "cta",
        "We have moved thousands of Tally installations to cloud since 1999. Ask us for a straight assessment of whether yours should be one of them."
      ]
    ]
  },
  "consent-dpdpa": {
    "cat": "DPDPA",
    "read": "8 min",
    "date": "July 2026",
    "title": "Your consent form is probably illegal now. Here’s the fix.",
    "sub": "The DPDP Rules changed what “consent” legally means in India. Most signup forms we audit fail. The correction takes an afternoon.",
    "body": [
      [
        "p",
        "We audit a lot of signup forms. The same failures appear almost every time, and they are all fixable in an afternoon — which makes it worth doing before someone asks."
      ],
      [
        "h",
        "Failure 1: the pre-ticked box"
      ],
      [
        "p",
        "If the consent checkbox is ticked when the page loads, that is not consent. Consent has to be a positive action taken by the person. An unticked box that they tick themselves is the standard."
      ],
      [
        "h",
        "Failure 2: bundling"
      ],
      [
        "p",
        "One checkbox covering account creation, marketing emails, SMS, and sharing with partners is four different purposes wearing one coat. Each purpose needs its own decision, and refusing the marketing one cannot block the account."
      ],
      [
        "h",
        "Failure 3: consent buried in the terms"
      ],
      [
        "p",
        "“By continuing you agree to our Privacy Policy” does not carry consent for data processing. The notice has to be specific, readable, and presented at the point of collection — not eleven screens deep in a legal document."
      ],
      [
        "h",
        "Failure 4: no way to withdraw"
      ],
      [
        "p",
        "Withdrawing consent must be as easy as giving it. If signing up took one click and withdrawing requires emailing an address that nobody monitors, that fails. This is the most commonly missed requirement we see."
      ],
      [
        "h",
        "Failure 5: no record"
      ],
      [
        "p",
        "You have to be able to demonstrate that consent was obtained — what was consented to, when, and in what version of the notice. A tick in a database column with no timestamp and no notice version proves nothing."
      ],
      [
        "h",
        "The afternoon fix"
      ],
      [
        "ul",
        [
          "Untick every box by default",
          "Split bundled consent into one checkbox per purpose",
          "Write a short, plain notice shown at the point of collection",
          "Add a working withdrawal path — a link in the account settings and in every marketing email",
          "Log consent events with timestamp, purpose, and notice version"
        ]
      ],
      [
        "h",
        "What this does not cover"
      ],
      [
        "p",
        "Fixing the form is the visible part. Behind it sit data mapping, retention limits, breach notification readiness, and — depending on your size and sector — a Data Protection Officer. The form is where enforcement starts looking, not where compliance ends."
      ],
      [
        "cta",
        "We run DPDPA readiness assessments free of charge. It takes about a week and tells you exactly where you stand."
      ]
    ]
  },
  "ransomware-inside": {
    "cat": "Threats",
    "read": "10 min",
    "date": "July 2026",
    "title": "What a real ransomware attack looks like from the inside",
    "sub": "Not the Hollywood version — the actual timeline, hour by hour, from a case our response team handled.",
    "body": [
      [
        "p",
        "People imagine ransomware as a sudden event: a skull on the screen, everything gone. The reality is slower, quieter, and far more preventable — which is exactly why it is worth understanding."
      ],
      [
        "h",
        "Day minus 21: the way in"
      ],
      [
        "p",
        "An accounts assistant received an invoice attachment from what appeared to be a known supplier. It was a good forgery. Opening it installed a small remote-access tool. Nothing visible happened. No alert fired."
      ],
      [
        "h",
        "Day minus 20 to minus 3: quiet mapping"
      ],
      [
        "p",
        "The attacker spent three weeks doing nothing dramatic. They mapped the network, found the file server, identified which machines held the accounting data, and — critically — located the backup drive. They harvested credentials from a machine where someone had saved the domain admin password in a text file."
      ],
      [
        "p",
        "This phase is where attacks are actually won or lost. Three weeks is a long time to be caught. Nothing was watching."
      ],
      [
        "h",
        "Day minus 2: the backups go first"
      ],
      [
        "p",
        "Before touching production, they deleted the backup job history and encrypted the local backup drive. Standard practice. If you cannot restore, you negotiate."
      ],
      [
        "h",
        "Day zero, 02:40: encryption begins"
      ],
      [
        "p",
        "Chosen for the hour when nobody is watching. Encryption ran across shares in sequence. By 04:15 the file server was done."
      ],
      [
        "h",
        "Day zero, 08:30: discovery"
      ],
      [
        "p",
        "Staff arrived to unreadable files and a ransom note. The first hour went to confusion — several people rebooted machines, which in some cases destroyed forensic evidence."
      ],
      [
        "h",
        "What actually determined the outcome"
      ],
      [
        "p",
        "Not the sophistication of the attack. Three things:"
      ],
      [
        "ul",
        [
          "Whether an off-site, immutable backup existed that the attacker could not reach",
          "Whether anyone was monitoring for the three weeks of reconnaissance",
          "Whether credentials were sitting in plain text on a workstation"
        ]
      ],
      [
        "h",
        "The unglamorous prevention list"
      ],
      [
        "ul",
        [
          "Off-site immutable backups, tested by restore drill",
          "Multi-factor authentication on every remote access path",
          "Endpoint detection that flags unusual internal reconnaissance",
          "A password manager, so nobody saves admin credentials in a text file",
          "An incident plan that says “do not reboot” in the first line"
        ]
      ],
      [
        "p",
        "None of that is exotic. All of it is boring. That is rather the point."
      ],
      [
        "cta",
        "If you want to know how you would fare, our readiness assessment walks the same timeline against your environment.",
        ""
      ]
    ]
  },
  "ssl-which-cert": {
    "cat": "SSL Guide",
    "read": "5 min",
    "date": "July 2026",
    "title": "DV, OV, EV — stop overpaying for the wrong certificate",
    "sub": "Most businesses buy more certificate than they need, or less trust than they should. Getting it right takes five minutes.",
    "body": [
      [
        "p",
        "There are three validation levels, they cost very different amounts, and the difference is not encryption. Every level encrypts identically. What differs is what the certificate authority verified before issuing."
      ],
      [
        "h",
        "DV — Domain Validation"
      ],
      [
        "p",
        "Proves that whoever requested the certificate controls the domain. Issued in minutes, automatically. Verifies nothing about the organisation behind it."
      ],
      [
        "p",
        "Right for: blogs, brochure sites, internal tools, staging environments, anything not handling payments or personal data."
      ],
      [
        "h",
        "OV — Organisation Validation"
      ],
      [
        "p",
        "The CA verifies that your company legally exists — registration records, address, a phone check. Takes a day or two. Your verified company name appears in the certificate details."
      ],
      [
        "p",
        "Right for: business websites, customer portals, anything collecting personal data, most e-commerce."
      ],
      [
        "h",
        "EV — Extended Validation"
      ],
      [
        "p",
        "The most thorough vetting: legal existence, physical presence, operational history, signing authority. Takes up to a week and costs the most."
      ],
      [
        "p",
        "Worth noting honestly: browsers removed the green address bar years ago, so the visible payoff is smaller than it was. EV still makes sense for banks, large financial platforms, and organisations that are frequently impersonated — the verified identity in the certificate is the value, not a UI badge."
      ],
      [
        "h",
        "The two shape decisions"
      ],
      [
        "ul",
        [
          "Wildcard — covers *.yourdomain.com. One certificate, unlimited subdomains at one level. Right when you keep adding subdomains.",
          "Multi-domain (SAN) — covers several different domains on one certificate. Right when you run multiple brands."
        ]
      ],
      [
        "h",
        "The mistake that actually costs money"
      ],
      [
        "p",
        "Not choosing the wrong level. Letting one expire. An unnoticed expiry takes production down and erodes trust in a way that no validation level compensates for. If you have more than a handful of certificates, use lifecycle management with automated renewal and stop tracking them in a spreadsheet."
      ],
      [
        "cta",
        "Not sure what you are running? We will audit your certificate estate — most organisations find around 30% more certificates than they knew about."
      ]
    ]
  },
  "bimi-gmail": {
    "cat": "Email Trust",
    "read": "6 min",
    "date": "July 2026",
    "title": "Why your logo isn’t showing in Gmail (and how to fix it)",
    "sub": "That little brand logo next to the sender name is called BIMI. It is a trust signal you are probably missing — and the prerequisites matter more than the logo.",
    "body": [
      [
        "p",
        "You may have noticed some senders show a circular brand logo in Gmail while yours shows a grey initial. That is BIMI — Brand Indicators for Message Identification. Getting it is less about the logo and more about the email authentication underneath it."
      ],
      [
        "h",
        "The prerequisite nobody skips past"
      ],
      [
        "p",
        "BIMI only displays if your domain enforces DMARC at quarantine or reject. Not “none”. That means SPF and DKIM must be correct and aligned first, and you must have moved through monitoring to enforcement without breaking your legitimate mail."
      ],
      [
        "p",
        "This is the real work, and it is worth doing regardless of logos — DMARC enforcement is what stops criminals sending invoices as you."
      ],
      [
        "h",
        "The path, in order"
      ],
      [
        "ul",
        [
          "Publish SPF listing every service that sends on your behalf",
          "Enable DKIM signing on each of those services",
          "Publish DMARC at p=none and collect reports",
          "Fix what the reports reveal — there is always something forgotten",
          "Move to p=quarantine, then p=reject",
          "Only then, add BIMI"
        ]
      ],
      [
        "h",
        "The logo requirements"
      ],
      [
        "p",
        "The logo must be SVG Tiny P/S — not a normal SVG export. Square, centred, solid background. Most design teams need one attempt to get the format right."
      ],
      [
        "h",
        "The VMC question"
      ],
      [
        "p",
        "Some mailbox providers, including Gmail, require a Verified Mark Certificate — which requires a registered trademark for your logo. This is the step that stops most organisations, and it is a genuine cost. If you do not hold a trademark, BIMI display is limited."
      ],
      [
        "h",
        "Is it worth it?"
      ],
      [
        "p",
        "The logo itself is a modest gain. The DMARC enforcement you have to do first is a significant one — it removes an entire category of fraud committed in your name. Treat BIMI as the reward for doing the authentication properly, not as the goal."
      ],
      [
        "cta",
        "We handle DMARC from first report to full enforcement, without breaking your mail flow. Ask for a free authentication check on your domain."
      ]
    ]
  },
  "local-seo": {
    "cat": "SEO",
    "read": "9 min",
    "date": "July 2026",
    "title": "We ranked a Mumbai business #1 locally. Here’s the playbook.",
    "sub": "No black-hat tricks, no bought links. The boring, repeatable process that actually moves local rankings in India.",
    "body": [
      [
        "p",
        "Local search is one of the few areas where a small business can genuinely outrank a large one, because proximity and relevance count for more than domain authority. The work is unglamorous and mostly consists of doing obvious things consistently."
      ],
      [
        "h",
        "Step 1: the business profile, done completely"
      ],
      [
        "p",
        "Most profiles are half-filled. Complete means: exact category and secondary categories, full service list, hours including holidays, service area, a description written for humans, and photographs that are not stock images. Completeness alone moves rankings more than most people expect."
      ],
      [
        "h",
        "Step 2: consistency across every listing"
      ],
      [
        "p",
        "Your name, address, and phone number must match character-for-character everywhere they appear — directories, social profiles, your own footer. “Pvt Ltd” in one place and “Private Limited” in another is a real signal problem. Audit it once, fix it everywhere."
      ],
      [
        "h",
        "Step 3: reviews, requested systematically"
      ],
      [
        "p",
        "Not bought. Asked for, at the moment a customer is happiest, through a process that runs without anyone remembering. Volume matters, recency matters more, and responding to every review — including the critical ones — matters most."
      ],
      [
        "h",
        "Step 4: pages that match how people search"
      ],
      [
        "p",
        "One page per service per area, written properly. Not thin doorway pages — genuine pages that answer the question someone typed. This is the slowest part and the one competitors usually skip."
      ],
      [
        "h",
        "Step 5: local relevance signals"
      ],
      [
        "ul",
        [
          "Mentions from local business associations and chambers",
          "Sponsorships and local event pages",
          "Coverage in local publications",
          "Partner and supplier pages that reference you"
        ]
      ],
      [
        "h",
        "What we did not do"
      ],
      [
        "p",
        "Buy links. Spin content. Create fake locations. These produce a quick rise and then a fall that takes far longer to recover from than the original climb would have taken."
      ],
      [
        "h",
        "How long it took"
      ],
      [
        "p",
        "Visible movement at around six weeks. Top three at four months. Number one at seven. Anyone promising three weeks is either lying or doing something you will have to undo later."
      ],
      [
        "cta",
        "We run managed SEO for Indian businesses — with monthly reporting that shows the actual work done, not just a rankings graph."
      ]
    ]
  }
};
