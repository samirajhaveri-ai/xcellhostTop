// Original FAQs from the supplied AI Training and Cloud Connectivity pages.
import { Faq } from './models';
export const SERVICE_DEFAULT_FAQS: Record<string, Faq[]> = {
  "ai-training-educators": [
    [
      "Will AI replace teachers?",
      "No. This course treats AI as an assistant for first drafts: plans, worksheets, questions and feedback. Teaching, relationships, judgement and assessment decisions stay with you, and every AI output is reviewed before students see it."
    ],
    [
      "Is it for school teachers or college faculty?",
      "Both. The modules are the same, but you choose a K-12 or higher-education track, which changes the examples, labs and policy context — for example CBSE curriculum links for schools, and UGC academic-integrity rules for colleges."
    ],
    [
      "Which AI tools will I use?",
      "ChatGPT, Microsoft 365 Copilot, Gemini, Claude, Gemini Notebook (formerly NotebookLM) and Perplexity, plus quiz and slide tools shown generically. Free tiers are enough for most labs. XcellHost does not endorse any one product."
    ],
    [
      "Can I put student work into AI tools?",
      "Only anonymised work, and only in tools your institution allows. Remove names, roll numbers and anything identifying. Under the DPDP Act, learners under 18 are children and their data needs verifiable parental consent; your school's policy decides what is permitted."
    ],
    [
      "Should I use AI detectors to catch cheating?",
      "Not as sole evidence. AI-writing detectors produce false positives, which can be unfair to students. We teach task design that makes learning visible — drafts, oral checks, in-class work and reflections — and a clear class policy on acceptable AI use."
    ],
    [
      "How does this relate to NEP 2020?",
      "NEP 2020 emphasises experiential, competency-based learning, computational thinking and teacher capacity in educational technology. CBSE's AI and computational thinking curriculum for Classes 3–8 from 2026-27 was developed in line with NEP 2020 and NCF-SE 2023. The course helps you apply those ideas; it is not an official NEP programme."
    ],
    [
      "What certificate do I get?",
      "An XcellHost certificate of completion when you pass the assessment (pass mark 70%*). It is not a teaching qualification or a government credential. The course also prepares you for optional Microsoft exams — Microsoft Certified Educator (62-193)* or AI Business Professional (AB-730)* — booked and paid for separately."
    ],
    [
      "Does it count towards CPD hours?",
      "Many schools count external training towards their own professional-development hours. Whether this course counts depends on your institution or board*. We provide an attendance record and certificate you can submit."
    ],
    [
      "How much time does it take each week?",
      "About three hours a week on the weekend batch — a live session plus short lab work. Sessions are recorded if you miss one. Hours are indicative*."
    ],
    [
      "Can you train our whole staff?",
      "Yes. Institution cohorts are on quote and can run on campus or live online, around staff-development days, with examples from your board and subjects and your AI-use policy built in."
    ],
    [
      "Who are the instructors?",
      "An XcellHost AI practice trainer leads tools and labs, an experienced teacher-educator engaged for each batch* leads classroom practice, and a data-protection specialist covers student data. Names are shared in your batch confirmation."
    ],
    [
      "What if I need to change batch?",
      "Transfer and refund terms are set out on your quotation and invoice*. Tell us before you enrol if your dates may change."
    ]
  ],
  "ai-training-insurance-professionals": [
    [
      "M1AI foundations for insurance2 h*",
      "What large language models do well and badly: summarising, drafting, classifying; why they invent factsGenerative AI vs predictive models already used in pricing and fraud analyticsMapping your team's tasks to AI-assisted, AI-drafted and never-AI"
    ],
    [
      "M2Prompting and the AI tool landscape3 h*",
      "ChatGPT, Microsoft 365 Copilot, Gemini and Claude side by side on the same insurance taskGemini Notebook (formerly NotebookLM) and Perplexity for source-grounded answers with citationsPrompt patterns: role, context, format, examples, checks; building a reusable team promptEnterprise vs consumer accounts, data retention settings and redaction"
    ],
    [
      "M3Policy wordings and document summarisation3 h*",
      "Summaries of wordings, endorsements and IRDAI circulars that cite each clauseComparing two product wordings: waiting periods, sub-limits, exclusionsSpot-checking for missed exclusions and invented clauses"
    ],
    [
      "M4Underwriting support3 h*",
      "Extracting disclosures from proposal forms and medical reports into a checklistFlagging missing documents and inconsistencies for the underwriterWhy AI does not set loadings or decline cases, and how to record the underwriter's reasons"
    ],
    [
      "M5Claims intake and triage3 h*",
      "FNOL summaries, intake notes and document checklists for motor, health and property claimsSuggesting a queue (fast-track, standard, refer) that a handler confirmsReading surveyor reports, hospital bills and discharge summaries with document AI"
    ],
    [
      "M6Fraud red flags with human review2.5 h*",
      "Turning your anti-fraud policy's red-flag indicators into a structured review promptWriting a neutral referral note to the fraud monitoring unitBias, false positives and why an AI flag is never a finding"
    ],
    [
      "M7Customer service and grievance replies2.5 h*",
      "Claim-status, renewal and endorsement replies in plain English and Hindi*Call summaries and next-action notes for contact-centre teamsTone, empathy and wording that never promises an outcome"
    ],
    [
      "M8Responsible AI, IRDAI and the DPDP Act2 h*",
      "IRDAI information and cyber-security guidelines, fraud-monitoring guidelines and the 2026 AI working groupDPDP Act 2023 and Rules 2025: purpose, consent, minimisation and breach reportingHuman oversight, explainability and keeping an audit trail of AI use"
    ],
    [
      "CPCapstone and assessment3 h*",
      "Build a reviewed AI workflow for one task from your own role, using synthetic dataFive-minute demo to the instructor and peersOnline assessment: pass mark 70%* plus a completed capstone"
    ],
    [
      "Who is this course for?",
      "Claims handlers and TPA staff, underwriters, customer-service and contact-centre teams, agents, brokers and POSPs, bancassurance and operations staff, and compliance, risk and fraud teams in life, health and general insurance. Team leads join to set rules for their teams."
    ],
    [
      "Do I need technical or coding skills?",
      "No. If you can use email, Word and Excel, you can take this course. Everything is done through chat-style AI tools and ready-made templates; there is no programming."
    ],
    [
      "Which AI tools will we use?",
      "ChatGPT, Microsoft 365 Copilot, Gemini, Claude, Gemini Notebook (formerly NotebookLM) and Perplexity. We also explain, in general terms, the AI features now built into policy-administration, claims and document-processing systems, so the skills carry over to whatever your insurer uses."
    ],
    [
      "Will we work with real policyholder data?",
      "No. All labs use synthetic policies, proposals and claim files written for training. Corporate cohorts can add their own documents only after they are redacted and approved for training by the organisation."
    ],
    [
      "Does the course teach AI to approve or reject claims?",
      "No. AI drafts, summarises, sorts and flags. A named person makes every claim, underwriting and fraud decision and records the reason. That principle runs through every module and lab."
    ],
    [
      "What does IRDAI say about using AI?",
      "As of October 2026, IRDAI had not issued AI-specific rules. It set up a working group on AI governance in the insurance sector on 17 June 2026, and its information and cyber-security guidelines (revised April 2026) and fraud monitoring framework guidelines (from 1 April 2026) already apply to how AI tools are used. We update the module when IRDAI publishes more."
    ],
    [
      "How does the DPDP Act affect AI use in insurance?",
      "Proposal forms, KYC and claim files are personal data, often including health data. Under the DPDP Act 2023 and the DPDP Rules 2025, most obligations apply from May 2027: personal data should be used only for its stated purpose, kept to the minimum needed and protected. The course shows how to redact data before it goes into any prompt."
    ],
    [
      "What certificate do I get?",
      "An XcellHost certificate of completion, once you pass the online assessment (pass mark 70%*) and complete the capstone. It is a training certificate. It is not an IRDAI licence, an accredited qualification or a continuing-education credit."
    ],
    [
      "Does it prepare me for a Microsoft certification?",
      "Optionally. The course covers much of what Microsoft Azure AI Fundamentals (AI-901)* tests. AI-901 replaced AI-900, which retired on 30 June 2026. Microsoft 365 Copilot users may also look at Microsoft Certified: AI Business Professional (AB-730)*. Exam fees are paid to Microsoft and are not included."
    ],
    [
      "What formats and batches are available?",
      "Live online weekday-evening and weekend batches, a three-day in-person batch in Mumbai, training at your office anywhere in India, and private corporate cohorts. The dates on this page are samples; we confirm real dates when you enquire*."
    ],
    [
      "Can you train our whole claims or service team?",
      "Yes. A corporate cohort is priced on quote and can be tailored to your lines of business, run on your redacted documents, delivered in Hindi*, and followed by 30 days of office hours. We share a completion and assessment report for HR."
    ],
    [
      "How do we pay, and do we get a GST invoice?",
      "Yes. XcellHost issues a GST invoice in rupees. Individual seats can be added to the cart on this page; companies can pay against a purchase order. Seat prices exclude 18% GST."
    ]
  ],
  "ai-training-integrated-program": [
    [
      "Who runs XcellAI Academy?",
      "XcellAI Academy is the training programme of XcellHost Cloud Services, a Mumbai managed cloud and security company operating since 1999. Courses are designed and delivered by XcellHost's AI practice, the same team that runs AI rollouts and governance work for clients."
    ],
    [
      "Do I need to know coding or maths?",
      "No. The programme is for working professionals who use email, documents and spreadsheets. Everything is done in the tools' own interfaces and no-code builders."
    ],
    [
      "How much time does it take each week?",
      "About five hours a week for twelve weeks*: roughly two hours of self-paced lessons, a two-hour live session and some lab time. Capstone weeks are a little heavier."
    ],
    [
      "Which AI tools will I use?",
      "ChatGPT, Microsoft 365 Copilot, Gemini (including Gemini in Google Workspace), Claude, Perplexity and Gemini Notebook, which Google renamed from NotebookLM in 2026*. You learn patterns that carry across tools. Free tiers cover most labs; where a lab needs a paid licence we arrange lab access*."
    ],
    [
      "What certificate do I get?",
      "An XcellHost certificate of completion. It is not a university degree or a government-accredited qualification. If you want a vendor credential too, the programme prepares you for Microsoft Azure AI Fundamentals (exam AI-901, which replaced AI-900 after 30 June 2026)* and Microsoft Certified: AI Business Professional (AB-730)*. Exams are booked and paid with Microsoft separately."
    ],
    [
      "What is the pass mark?",
      "70% overall*, made up of quizzes (20%), labs (40%) and the capstone (40%), plus a submitted capstone and attendance at 75% of live sessions*. You get one free capstone resubmission*."
    ],
    [
      "What if I miss a live session?",
      "Every live session is recorded and posted to the course space, usually within a day*. Tell your facilitator in advance and an excused absence counts as attended once you have watched the recording."
    ],
    [
      "How is it different from Live Online AI Training?",
      "Live Online is a shorter, instructor-led course of live classes only. The integrated programme adds self-paced modules, eight graded labs, a mentored capstone and a longer arc for habits to stick. If you start with Live Online, ask about credit towards this programme*."
    ],
    [
      "Can you train our whole team?",
      "Yes. A corporate cohort is a private batch online, in Mumbai or at your site, with labs and capstones built around your use cases and your AI policy. It is priced on quote; use the configurator to see list-price figures first."
    ],
    [
      "Is our data safe during the labs?",
      "Labs use sample or synthetic data we provide. Learners are taught never to paste identifiable personal or client-confidential data into public AI tools. For corporate cohorts working on your own data, we agree the tools and data rules with your IT team first."
    ],
    [
      "Do you offer placement or a job guarantee?",
      "No. This is a skills programme for people in work or about to start. We do not offer placements, job guarantees or salary claims."
    ],
    [
      "How do we pay, and is there GST?",
      "Fees are quoted in rupees excluding 18% GST, and you receive a GST invoice from XcellHost. The prices on this page are indicative placeholders, so your coordinator confirms the final figure before payment."
    ]
  ],
  "ai-training-live-online": [
    [
      "Who runs XcellAI Academy?",
      "XcellAI Academy is the training programme of XcellHost Cloud Services, a Mumbai managed cloud and security company operating since 1999. Live classes are taught by XcellHost's AI practice, the team that also runs AI rollouts for clients."
    ],
    [
      "Which platform are the classes on?",
      "A mainstream video-meeting platform with breakout rooms, polls and chat, confirmed in your joining email*. You join from a browser or the desktop app; no special software is needed."
    ],
    [
      "What are the batch timings?",
      "In the sample schedule, weekday batches meet Tuesday and Thursday 19:30–21:30 IST for six weeks, and weekend batches meet Saturday and Sunday 10:00–13:00 IST for four weekends*. Use the batch finder to see the times in your own time zone."
    ],
    [
      "How big is a batch?",
      "Up to 30 learners*, so that breakout rooms stay at five or six people and everyone gets time with the facilitator."
    ],
    [
      "What if I miss a class?",
      "Every main session is recorded and posted with chapters, usually within a day*. Recordings stay available for 90 days after your batch ends*. Tell the coordinator in advance and an excused absence counts once you have watched the recording."
    ],
    [
      "Do I need paid AI subscriptions?",
      "No. Free tiers of ChatGPT, Gemini, Claude and Perplexity cover most labs. Microsoft 365 Copilot is demonstrated live; if you have a licence at work you can follow along, otherwise you watch and practise the same patterns in the free tools."
    ],
    [
      "What certificate do I get?",
      "An XcellHost certificate of completion when you attend at least 75% of sessions* and score 70%* on the quiz and mini-project. It is not a university or government-accredited qualification. The course also prepares you for Microsoft Certified: AI Business Professional (AB-730)* and Azure AI Fundamentals (AI-901, which replaced AI-900 after 30 June 2026)*; exams are booked with Microsoft separately."
    ],
    [
      "Can I join from outside India?",
      "Yes. Classes run on IST, which suits the Gulf, South-East Asia and early UK mornings or afternoons. Fees are invoiced in rupees by XcellHost; for payment from abroad your coordinator confirms the options."
    ],
    [
      "Can you run a private batch for our team?",
      "Yes. A private cohort can be online, in Mumbai or at your site, with your dates, your examples and your AI policy in session 10. It is priced on quote; the configurator shows list-price figures first."
    ],
    [
      "Are the classes recorded? What about my privacy?",
      "Main sessions are recorded for your cohort only and we announce it before recording starts. Your camera is optional and breakout rooms are not recorded*. Recordings are kept in the course space and removed when access ends."
    ],
    [
      "Is there a placement or job guarantee?",
      "No. This is a skills course for people in work or about to start. We don't offer placements, job guarantees or salary claims."
    ],
    [
      "How do fees and GST work?",
      "Fees are in rupees excluding 18% GST, and XcellHost issues a GST invoice. The fees on this page are indicative placeholders, so your coordinator confirms the final figure before you pay."
    ]
  ],
  "ai-training-medical-doctors": [
    [
      "Will this course teach me to diagnose with AI?",
      "No. The course teaches safe use of general AI tools for documentation, reading and communication, and how to judge clinical AI products. AI assists; the treating doctor makes every clinical decision. We make no diagnostic claims for any tool."
    ],
    [
      "Can I use real patient cases in the labs?",
      "No. All lab material is synthetic. A core rule of the course is never to paste identifiable patient data into public AI tools; you practise de-identification on invented records."
    ],
    [
      "Do I get CME credit hours?",
      "CME credit — subject to accreditation*. CME hours are granted by the accrediting medical council, not by XcellHost. We tell you before the batch starts whether credit applies to it."
    ],
    [
      "What certificate do I receive?",
      "An XcellHost certificate of completion when you pass the assessment (pass mark 70%*). It is not a medical qualification or a licence. The course also prepares you for the optional Microsoft AI Business Professional (AB-730) exam*, which you book and pay for separately."
    ],
    [
      "Which AI tools are covered?",
      "ChatGPT, Microsoft 365 Copilot, Gemini, Claude, Gemini Notebook (formerly NotebookLM) and Perplexity, plus ambient scribes, evidence-search tools and imaging AI described generically. We are not paid by any tool vendor and do not endorse a product."
    ],
    [
      "Is ambient scribing allowed in Indian clinics?",
      "It depends on consent, where the audio and text are stored and processed, and your hospital's policy. We cover patient consent and notice, DPDP obligations and what to ask a scribe vendor, so you can raise it properly with your hospital."
    ],
    [
      "How does the DPDP Act affect my use of AI?",
      "Health information is personal data. Under the DPDP Rules notified in November 2025, most obligations apply from May 2027: lawful purpose, notice and consent, security safeguards and breach reporting. The course explains how these apply when AI tools touch patient data. It is not legal advice."
    ],
    [
      "Are AI imaging tools regulated in India?",
      "Software with a medical purpose can be a medical device under the Medical Device Rules 2017. CDSCO's 2026 guidance on medical device software covers SaMD, SiMD and AI-enabled software in classes A to D. Module 6 teaches the questions to ask a vendor about status, validation and intended use."
    ],
    [
      "How much time will I need each week?",
      "About four hours a week for four weeks on the evening batch: two live sessions plus short lab work. Missed sessions are recorded. Hours are indicative*."
    ],
    [
      "Can our hospital run it for a department?",
      "Yes. Corporate cohorts are on quote and can run on site or live online, with cases set in your specialties and your approved tools and AI policy built in. Use the configurator or request a quotation."
    ],
    [
      "Who are the instructors?",
      "An XcellHost AI practice trainer leads the tool and lab work, a practising clinician engaged for each batch* leads the clinical discussion, and a data-protection specialist covers DPDP, consent and security. Names are shared in your batch confirmation."
    ],
    [
      "What is the refund policy?",
      "Transfer and refund terms are set out on your quotation and invoice*. Ask us before you enrol if you may need to change batch."
    ]
  ],
  "cloud-connectivity": [
    [
      "What does \"Cloud Connectivity\" cover?",
      "Seven services that carry traffic between your people, your sites and the cloud: Managed Wi-Fi, Managed SD-WAN, Virtual Edge, Edge Network, Cloud Router, Private Connect and IP Transit. Each has its own page with details, tools and indicative prices."
    ],
    [
      "Do we have to take all seven?",
      "No. Each service stands alone. Most businesses start with one or two — often Wi-Fi and SD-WAN for branches, or Cloud Router and Private Connect for hybrid cloud — and add more later on the same design."
    ],
    [
      "Which do I need for a faster connection to AWS or Azure?",
      "For steady or large traffic,Private Connect— a private circuit into AWS Direct Connect, Azure ExpressRoute, Google Cloud Interconnect or Oracle FastConnect. AddCloud Routerif you use more than one cloud. For small traffic, an IPsec VPN is a fine start."
    ],
    [
      "Where is the network hub?",
      "In XcellHost's own Tier IV data centre in Mumbai. Edge sites, internet exchanges and carriers are partner PoPs*, confirmed by XcellHost at proposal."
    ],
    [
      "Is XcellHost a telecom operator?",
      "XcellHost designs, deploys and manages networks. Internet and carrier circuits are supplied by licensed providers through partner exchanges*; we arrange and manage them for you."
    ],
    [
      "How is it priced?",
      "Per unit, in INR plus 18% GST: per access point, site, VNF, router, circuit or Mbps. The configurator above adds them up. Cloud provider port and data-transfer fees and some carrier circuits are billed separately or quoted per location."
    ],
    [
      "What uptime do you commit to?",
      "Our standard SLA is 99.95% uptime*, with terms per service confirmed at proposal. Redundant links and failover design are how we protect it on your side."
    ],
    [
      "Can you take over our existing network?",
      "Usually, yes. We survey what you have, keep what is supported and fit for purpose, and replace the rest in waves. Many leading SD-WAN, firewall and Wi-Fi platforms are supported*."
    ],
    [
      "How do the services help with CERT-In and DPDP?",
      "Logs are kept in India for at least 180 days, networks are segmented, guest Wi-Fi users are authenticated and the NOC supports 6-hour incident reporting. They help you meet the rules; your own policies still matter."
    ],
    [
      "Do you support offices outside Mumbai?",
      "Yes — Wi-Fi and SD-WAN are deployed at your sites across India, with field work through partners* where needed and monitoring from our Mumbai NOC."
    ],
    [
      "How long does a typical rollout take?",
      "A single office can be surveyed and live in weeks; private cloud circuits depend on carrier lead times. The design document gives a dated plan*, confirmed at proposal."
    ]
  ],
  "cloud-router": [
    [
      "What exactly is a cloud router?",
      "A router that runs as software rather than a box in your office. XcellHost Cloud Router runs in our Mumbai Tier IV data centre and exchanges routes with your sites and with each cloud provider's own routing service, so traffic between them follows one policy."
    ],
    [
      "Does it replace AWS Transit Gateway, Azure Route Server or Google Cloud Router?",
      "No. Those services route inside each provider's network and stay in your cloud accounts. Our router peers with them over BGP and handles routing between clouds, sites and colocation, which none of them do on their own."
    ],
    [
      "Do we need our own ASN or public IP space?",
      "Not for private routing. Private ASNs (64512–65534, and the 32-bit private range) work for sessions with cloud providers over private circuits and VPNs. If you want to announce your own public prefixes to the internet, seeIP Transit."
    ],
    [
      "What is a VRF and do we need one?",
      "A VRF (virtual routing and forwarding instance) is a separate routing table on the same router. Use one per environment or business unit that must not reach the others — for example production, development and a vendor network. Standard includes one VRF, Advanced four."
    ],
    [
      "How fast is failover?",
      "It depends on the peer. With BFD, where the cloud side supports it, failures are detected in under a second; without it, BGP waits for its hold timer. We measure the real figure during the bring-up test and record it in your runbook."
    ],
    [
      "Two of our networks use the same IP range. Can you still connect them?",
      "Yes. If the two never need to talk, separate VRFs are enough. If they do, we translate one side with NAT at the router. Renumbering is the cleanest fix long-term and the overlap checker above shows a free range to move to."
    ],
    [
      "Which connections can the router use?",
      "Private circuits to the clouds (AWS Direct Connect, Azure ExpressRoute, Google Cloud Interconnect, Oracle FastConnect — seePrivate Connect), IPsec VPNs over the internet, cross-connects to racks in our data centre and SD-WAN overlays from your branches."
    ],
    [
      "Who pays the cloud provider's charges?",
      "You do, directly or through your existing cloud billing. Gateways, attachments, ports and data transfer are billed by each provider per their pricing. XcellHost's invoice covers the router, links and services we provide, in INR with GST."
    ],
    [
      "How are routing changes made after go-live?",
      "Through a ticket. The NOC reviews the change against your route policy, schedules it in an agreed window and keeps a record. Emergency changes during an incident are logged the same way afterwards."
    ],
    [
      "Does this help with CERT-In and DPDP?",
      "It helps you meet them: session and change logs are kept in India for at least 180 days, routing separates systems that hold personal data, and the NOC can support your 6-hour incident reporting. Your own policies and applications still matter."
    ],
    [
      "Can we start small and grow?",
      "Yes. Start on Standard with one cloud and one site, then move to Advanced when you add clouds or VRFs. The routing design carries over; only the plan changes."
    ]
  ],
  "edge-network": [
    [
      "What is an edge PoP?",
      "A point of presence is a location — usually a data centre or internet exchange in a city — where networks meet and where your traffic can be handed off, cached or processed close to the users and devices that create it. XcellHost uses partner PoPs and exchanges outside Mumbai*, confirmed per site."
    ],
    [
      "How much faster is the edge?",
      "It depends on distance and hops. Light in fibre travels roughly 200 km per millisecond, so a user 1,000 km from the data centre pays several milliseconds per round trip before any processing — and apps often need many round trips per action. The estimator above shows the effect; we measure real numbers in a pilot."
    ],
    [
      "How is this different from Edge Cloud?",
      "Edge Cloudis the compute — managed nodes that run your VMs and containers. Edge Network is the connectivity around it: site backhaul, PoP hand-offs, 5G and IoT links, and the path to the Mumbai core."
    ],
    [
      "Can we run a private 5G network in India?",
      "Yes, under DoT's captive non-public network (CNPN) framework. The common routes are a private network provided by a licensed operator (network slicing or an isolated on-site network), leasing spectrum from an operator, or direct spectrum from DoT for eligible enterprises. A CNPN cannot connect to public networks. We help you assess the route and integrate it; spectrum stays with operators or DoT."
    ],
    [
      "What IoT connectivity do you support?",
      "Gateways for LoRaWAN, NB-IoT and LTE-M (through licensed operators), Wi-Fi and wired sensors, and 4G/5G routers. Gateways filter and batch data at the edge and forward it to theIoT Cloudor your platform."
    ],
    [
      "What happens if the link to Mumbai fails?",
      "Sites fail over to their second link. If the core is unreachable, edge nodes keep local apps running and store data until the link returns, then sync — designed per site."
    ],
    [
      "How does the CDN fit in?",
      "For content you publish — sites, apps, video, downloads —CDN Cloudcaches it at the edge, with an origin shield in Mumbai, so repeat requests are answered nearby and your origin and backhaul carry less."
    ],
    [
      "What does Edge Connect at ₹4,999 a site include?",
      "An encrypted IPsec or SD-WAN tunnel from the site to its nearest edge PoP* or the Mumbai core, failover across two links, and 24×7 NOC monitoring. The access links themselves are billed by your ISP or operator. Indicative, excl. 18% GST."
    ],
    [
      "Do you guarantee latency?",
      "No latency figure is promised on this page. Our SLA is 99.95% uptime, set in your contract. Latency targets for a specific design are measured in a pilot and written into your proposal if agreed*."
    ],
    [
      "How are logs handled for CERT-In?",
      "Tunnel, gateway and node logs are kept for 180 days in India, clocks are synced to NIC or NPL time servers, and the NOC alerts you quickly so you can report incidents within 6 hours."
    ],
    [
      "Where is our data stored?",
      "The core runs in XcellHost's Tier IV data centre in Mumbai. Edge nodes at your sites or at partner PoPs* in India process data locally; only what you choose is sent on."
    ]
  ],
  "ip-transit": [
    [
      "What is IP transit?",
      "A dedicated connection that carries your traffic to and from the rest of the internet. It is delivered on a port in a data centre, the capacity is reserved for you (1:1), and you can run BGP to announce your own IP addresses."
    ],
    [
      "How is it different from business broadband or a leased line?",
      "Broadband is shared and uses the provider's addresses. An office leased line is dedicated but usually comes without BGP and lands across the city. IP transit lands inside the data centre, is dedicated, and lets you run your own routing and multihome with other providers."
    ],
    [
      "Do I need my own ASN?",
      "No. Without one, we route a static block of XcellHost IPv4 and IPv6 addresses to you, or run BGP with a private ASN for automatic failover across two sessions. With your own ASN and provider-independent space from IRINN or APNIC, you can announce your prefixes and multihome with another provider."
    ],
    [
      "How does 95th-percentile billing work?",
      "Your port's traffic is sampled every 5 minutes — about 8,640 samples in a 30-day month. At month end the samples are sorted, the highest 5% (about 432 samples, roughly 36 hours) are ignored, and the next value is your billable rate. Short peaks are free; sustained ones are not. Burst above your commit is billed at that rate per Mbps*."
    ],
    [
      "Flat commit or burstable — which should I pick?",
      "If your traffic is steady, a flat commit is simplest. If you have a few hours of peaks a day or event days, commit to your normal level and let the 95th percentile handle the rest. The estimator above shows both bills for your traffic shape."
    ],
    [
      "Full routes or a default route?",
      "With one upstream, a default route is enough. With two or more, partial or full routes let your router choose better exits. The full table is close to a million IPv4 prefixes plus IPv6, so check your router's memory first."
    ],
    [
      "Do you support IPv6?",
      "Yes — IPv4 and IPv6 run on the same port with separate BGP sessions. If you have no IPv6 space, we assign a /48 at no extra charge*."
    ],
    [
      "How does the DDoS protection add-on work?",
      "Flow telemetry from the edge is watched for volumetric floods. You or our NOC can blackhole an attacked address with a BGP community (RTBH), and larger attacks can be diverted to scrubbing* so clean traffic still reaches you. Capacity and mitigation options are confirmed in your proposal*."
    ],
    [
      "Where is it delivered?",
      "In XcellHost's Tier IV data centre in Mumbai — to your co-location rack by cross-connect or into your XcellHost cloud network. Hand-offs in other cities are arranged through partner PoPs and exchanges*."
    ],
    [
      "What does the NOC monitor?",
      "BGP session state and flaps, prefix counts, port errors and light levels, 5-minute traffic, and DDoS alarms — 24×7. You're alerted by phone, email or WhatsApp, and upstream faults are chased on your behalf."
    ],
    [
      "What is the uptime SLA?",
      "XcellHost's SLA is 99.95% uptime, set out in your contract. Taking two sessions on separate edge routers protects you during maintenance on either one."
    ],
    [
      "Can transit feed my co-location rack and XcellHost cloud together?",
      "Yes. Announce the same prefixes to both, or split them.Co-locationandvirtual networkssit in the same Mumbai facility, so one design covers both."
    ]
  ],
  "managed-sd-wan": [
    [
      "Do we have to give up MPLS?",
      "No. Many customers keep MPLS at a few critical sites and add broadband and 4G/5G everywhere; others move to internet-first. SD-WAN works over any mix. The TCO tool on this page lets you model how much MPLS to keep."
    ],
    [
      "Which SD-WAN platforms do you support?",
      "We are vendor-agnostic and work with leading SD-WAN platforms*. Where you already own edges, we manage them if the model and licence are supported; otherwise we recommend a platform after the design and supply it on quote. Supported platforms are confirmed by XcellHost at proposal."
    ],
    [
      "How fast does traffic move when a link fails?",
      "Paths are probed continuously, so a hard failure or a brownout is usually detected and steered around in about a second or less, depending on the platform and probe settings*. Real-time apps like voice can move first, while bulk traffic follows."
    ],
    [
      "What does zero-touch provisioning mean in practice?",
      "We pre-register each edge to your orchestrator and assign it a site template. At the branch, someone plugs in power and the links; the box calls home, authenticates, downloads its configuration and builds its tunnels. Our NOC watches it come up and confirms the site is live."
    ],
    [
      "How does SD-WAN relate to SASE and SSE?",
      "SD-WAN decides which link traffic uses. SSE (security service edge) inspects internet and SaaS traffic in the cloud — web gateway, CASB, ZTNA and firewall-as-a-service. Together they are SASE. We send branch internet traffic to an SSE point of presence so it is secured without backhauling through head office."
    ],
    [
      "Do you supply the internet links and SIMs?",
      "Links stay contracted with licensed ISPs and telecom operators — your existing ones or ones we help you choose. With your letter of authority, the NOC logs and chases faults with them. Hub bandwidth at XcellHost Mumbai is available at ₹449* per Mbps per month, dedicated."
    ],
    [
      "Can the hub run in XcellHost's data centre?",
      "Yes. A virtual hub edge can run in XcellHost's Mumbai Tier IV facility at ₹3,999* per VNF per month, close to servers you host with us or inco-location. Physical hubs can also be racked there."
    ],
    [
      "How does this help with CERT-In and audits?",
      "Edge, orchestrator and security logs are kept for a rolling 180 days in India with clocks synced to NIC or NPL time, and the 24×7 SOC can help you meet the 6-hour CERT-In reporting window. Change records and SLA reports support RBI and SEBI reviews. Compliance remains your organisation's responsibility."
    ],
    [
      "How long does a rollout take?",
      "A pilot usually follows the design within a few weeks*, then branches go live in waves sized to your change windows. Timelines depend on hardware lead times and any new circuits, and are fixed in the project plan."
    ],
    [
      "Can our IT team still make changes?",
      "Yes. You get read access to the orchestrator and can request or approve changes. Most customers keep policy decisions and hand us monitoring, fault handling, changes and reporting, all under change control."
    ],
    [
      "How is it billed?",
      "Per site per month — ₹2,999* Essential or ₹4,499* Professional — plus ₹2,499* one-time onboarding per site, with optional 4G/5G backup management and Mumbai virtual hubs. Invoiced in INR with 18% GST by XcellHost Cloud Services Pvt. Ltd. Hardware, licences and circuits are separate."
    ]
  ],
  "managed-wifi": [
    [
      "Do we have to buy new access points?",
      "No. If your APs and controller are a supported model on current firmware, we manage them as they are. Where they are end-of-support or too few for the space, the survey says so and we quote replacements. Hardware is billed separately from the per-AP fee."
    ],
    [
      "What is a Wi-Fi survey, and do we really need one?",
      "A survey measures signal, noise and interference across your floors. A predictive model from drawings comes first; an on-site walk confirms it; a validation survey after install proves it. Without one, APs end up where cabling was easy rather than where people sit."
    ],
    [
      "Wi-Fi 6, 6E or Wi-Fi 7 — which should we choose?",
      "Wi-Fi 6 suits most offices on 2.4 and 5 GHz. Wi-Fi 6E and Wi-Fi 7 add the 6 GHz band, which DoT exempted from licensing on 20 January 2026 for low-power indoor and very-low-power use (5925–6425 MHz). They pay off in dense spaces where many laptops and phones support 6 GHz. We check your device mix before recommending."
    ],
    [
      "Is OTP login required for our guest Wi-Fi?",
      "DoT's Wi-Fi directions expect public hotspot users to be authenticated — for example by a login sent by SMS to their mobile — with the record kept for one year, and PM-WANI hotspots use mobile OTP. What applies to you depends on how your guest Wi-Fi and internet link are set up, so confirm with your legal team. Our Professional plan includes OTP login and one-year records by default."
    ],
    [
      "How long are logs kept, and where?",
      "Guest login records are kept for one year. Controller, AP, portal and firewall logs are kept for a rolling 180 days to support CERT-In's directions, with clocks synced to NIC or NPL time. Records are stored in India."
    ],
    [
      "How does the guest portal handle the DPDP Act?",
      "The portal shows a short notice explaining why the mobile number is collected and how long it is kept, takes the guest's consent, and the record is deleted when the retention period ends. You remain the data fiduciary; we run the system to your instructions."
    ],
    [
      "Can guests ever reach our office systems?",
      "Not by design. Guests land on their own SSID and VLAN with client isolation, and the firewall allows them to the internet only. Staff use 802.1X with your directory, and devices such as CCTV and POS sit on a third segment."
    ],
    [
      "Do you support network access control?",
      "Yes. Wi-Fi works with Genian NAC, which XcellHost also sells, to see every device, check its posture and quarantine what fails. Professional plans include rogue-AP and intrusion detection on the wireless side."
    ],
    [
      "What happens when an access point fails?",
      "The NOC sees it go offline, opens a ticket and tries a remote fix — for example a PoE power-cycle on the switch port. If the AP is faulty, we arrange replacement under your warranty, or ship a spare first with the advance replacement add-on (₹199* per AP per month)."
    ],
    [
      "Can you integrate with our hotel PMS for room-number login?",
      "Room-number or booking-reference login and PMS integration are scoped on the Enterprise plan. Support depends on your PMS and Wi-Fi platform and is confirmed by XcellHost at proposal."
    ],
    [
      "Can XcellHost also manage our internet links?",
      "Yes. Branch links and failover are covered byManaged SD-WAN, and the wider estate — firewalls, switches, ISP escalations — byManaged Network Operations. All of it runs from the same NOC."
    ],
    [
      "How is it billed?",
      "Per access point per month — ₹499* Essential or ₹799* Professional — plus a one-time survey of ₹14,999* per site, invoiced in INR with 18% GST by XcellHost Cloud Services Pvt. Ltd. All prices are indicative until confirmed by XcellHost."
    ]
  ],
  "private-connect": [
    [
      "What is private connectivity to a public cloud?",
      "A circuit that carries your traffic into the cloud provider's network at one of its on-ramp locations instead of over the public internet. AWS calls it Direct Connect, Microsoft ExpressRoute, Google Cloud Interconnect and Oracle FastConnect. Routing runs over BGP."
    ],
    [
      "Which India locations do the providers list?",
      "As listed in October 2026: AWS Direct Connect in Mumbai, Delhi, Chennai, Hyderabad, Kolkata and Bengaluru; Azure ExpressRoute peering locations Mumbai, Mumbai2, Chennai, Chennai2 and Pune; Google Cloud Dedicated Interconnect facilities in Mumbai, Delhi (incl. Noida), Chennai and Hyderabad; Oracle FastConnect in Mumbai and Hyderabad. Lists change, so we re-check at proposal."
    ],
    [
      "What speeds can we buy?",
      "Per each provider: AWS dedicated 1, 10, 100 or 400 Gbps and hosted 50 Mbps to 25 Gbps; Azure circuits 50 Mbps to 10 Gbps, ExpressRoute Direct 10, 100 or 400 Gbps; Google Dedicated 10 or 100 Gbps (in India) and Partner 50 Mbps to 50 Gbps; Oracle dedicated 1, 10, 100 or 400 Gbps, partner speeds per partner. Not every speed is offered at every location."
    ],
    [
      "Is XcellHost's data centre an on-ramp?",
      "No — the on-ramps are in the facilities each provider lists. Your equipment or our router sits in the XcellHost Mumbai Tier IV data centre, and a carrier or exchange partner* carries the circuit from there to the on-ramp. Partners are confirmed by XcellHost at proposal."
    ],
    [
      "Dedicated or partner — which should we choose?",
      "Partner (hosted) connections suit most businesses: smaller sizes, faster to arrange, a share of a partner's port. Dedicated ports make sense from about 1 Gbps upwards, or when you want the whole port and features such as MACsec where offered."
    ],
    [
      "Who pays the cloud provider's fees?",
      "You, on your cloud bill: port hours, data transfer and any gateways, per each provider's pricing. Oracle, for example, says it charges FastConnect by port hour with no extra charge for data transferred. XcellHost's invoice covers our managed connection, cross-connects, backup VPN and onboarding."
    ],
    [
      "Is the traffic encrypted?",
      "A private circuit keeps traffic off the public internet but isn't encrypted by default. Options are MACsec on supported dedicated ports, IPsec over the circuit, or application-level TLS. We recommend one for regulated data."
    ],
    [
      "What happens if the circuit fails?",
      "With a redundant pair, BGP moves traffic to the second circuit. With a single circuit, the IPsec VPN backup takes over at lower, internet-dependent capacity. The NOC opens the fault with the carrier either way."
    ],
    [
      "How long does it take?",
      "Usually weeks rather than days, mostly waiting on the carrier circuit and cross-connects. An internet VPN can run in the meantime. Timelines are confirmed at proposal."
    ],
    [
      "Can one connection reach more than one cloud?",
      "Through an exchange partner*, one physical port can carry separate virtual circuits to several clouds. AddCloud Routerto route between them under one policy."
    ],
    [
      "Does it help with CERT-In and DPDP?",
      "It helps you meet them: transfers avoid the public internet, logs are kept in India for at least 180 days and the NOC can support your 6-hour incident reporting. Compliance also depends on your own policies and systems."
    ]
  ],
  "virtual-edge": [
    [
      "What is a VNF?",
      "A virtual network function is a network appliance — a firewall, router, SD-WAN edge or load balancer — delivered as software that runs as a virtual machine (or container) on standard servers instead of on dedicated hardware."
    ],
    [
      "What is NFV?",
      "Network functions virtualisation is the approach of running network functions as software on shared infrastructure. The ETSI NFV framework describes three parts: the infrastructure (NFVI), the VNFs themselves, and management and orchestration (MANO)."
    ],
    [
      "What is a uCPE?",
      "A universal customer-premises device: a small server at the branch with a hypervisor that hosts several VNFs side by side. It replaces separate router, firewall and SD-WAN boxes with one device."
    ],
    [
      "Which vendors do you support?",
      "We are vendor-agnostic and support leading vendors' virtual appliances* — for example Fortinet, Palo Alto Networks and Cisco — as well as open-source routers and load balancers. Exact images and versions are confirmed in your design. Names are for compatibility only."
    ],
    [
      "Can I bring my own licences?",
      "Yes. Bring-your-own-licence works where the vendor allows it on our platform; otherwise we source licences on quote. Licence terms stay between you and the vendor."
    ],
    [
      "Should VNFs run at the branch or in the cloud?",
      "Functions that must work when the WAN is down — local routing, the branch firewall, SD-WAN path selection — sit best on a uCPE. Functions that protect cloud workloads — the hub firewall, load balancer, IPsec hub — sit best in XcellHost cloud. Most designs are hybrid."
    ],
    [
      "How is a VNF sized?",
      "By throughput and features. Plain routing and stateful firewalling need few vCPUs per Gbps; intrusion prevention and TLS inspection need many more. The chain builder above gives a first estimate; vendor datasheets and a pilot confirm it."
    ],
    [
      "Is a virtual firewall as secure as a hardware one?",
      "The inspection engine is the same software the vendor ships; what changes is the hardware underneath. For very high throughput with heavy inspection, a hardware appliance or dedicated host may still be right — we'll tell you in the design."
    ],
    [
      "What does the price include?",
      "Each VNF price covers compute in XcellHost cloud (or management on your uCPE) and 24×7 NOC management: monitoring, change tickets, config backups and a monthly report. Vendor licences and uCPE hardware are quoted separately. Prices are indicative and exclude 18% GST."
    ],
    [
      "How does this help with CERT-In?",
      "Firewall, VPN and SD-WAN logs are streamed to storage in India or to your SIEM and kept for 180 days, clocks are synced to NIC or NPL time servers, and the NOC alerts you quickly so you can report incidents within 6 hours."
    ],
    [
      "How does it relate to managed SD-WAN?",
      "Virtual Edge is the platform for running any network function. If you mainly want a fully managed branch WAN, seeManaged SD-WAN; it can run as a VNF on the same uCPE."
    ]
  ]
};
