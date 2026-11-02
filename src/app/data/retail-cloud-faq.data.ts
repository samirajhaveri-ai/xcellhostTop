// FAQs from the supplied Retail Cloud document.
export const RETAIL_CLOUD_FAQS: [string, string][] = [
  [
    "Does Retail Cloud make us \"PCI DSS compliant\"?",
    "No provider can do that for you — compliance is assessed for your business by a QSA or through your self-assessment questionnaire. Retail Cloud keeps the card environment small and segmented, uses tokens instead of card numbers where possible, and gives you evidence. Our PCI DSS consulting helps with SAQ or RoC readiness against v4.0.1."
  ],
  [
    "How does autoscaling work on sale days?",
    "Your storefront and APIs run in groups that add servers when load rises and remove them when it falls. We load-test a month ahead, pre-scale the week before and watch the sale from our NOC. Burst capacity is billed pro-rated — ₹20* per vCPU-day, from the ₹599 monthly rate."
  ],
  [
    "What happens when a store's broadband fails?",
    "With managed SD-WAN and a 4G / 5G backup, traffic moves to the mobile link automatically and billing continues. Most POS software can also queue sales offline and sync later. SD-WAN starts at ₹2,999* per store a month; backup management is ₹499* per store."
  ],
  [
    "Can we keep customers' card numbers for one-click checkout?",
    "Not the actual numbers. RBI's card-on-file tokenisation rules, in effect since 1 October 2022, stop merchants storing full card data; one-click checkout uses tokens issued through your payment aggregator, and you may keep limited data such as the last four digits."
  ],
  [
    "Can you host our ONDC seller app or inventory APIs?",
    "Yes. Seller apps, catalogue and inventory APIs that connect to the ONDC network — or to marketplaces — run on the shared VPC with uptime monitoring and logs of every order call. Network participation itself is between you, your technology provider and ONDC."
  ],
  [
    "Do the E-Commerce Rules apply to us?",
    "The Consumer Protection (E-Commerce) Rules 2020 apply to e-commerce entities — marketplace and inventory models — offering goods or services to consumers in India. They include grievance timelines of 48 hours to acknowledge and a month to redress. Our readiness checker shows typical applicability; your legal team decides."
  ],
  [
    "Where is customer data stored?",
    "In XcellHost's Tier IV data centre in Mumbai, with DR at a partner data centre in India* if you choose it. CDN edges may cache public pages and images closer to shoppers*; customer, order and payment data stay in the core."
  ],
  [
    "Can you run CCTV and footfall analytics?",
    "Yes — store cameras can feed an in-store edge node for counting and heatmaps, with only aggregated numbers sent to the cloud. Camera footage is personal data under the DPDP Act, so we help you set notices, retention and access controls. GPU for heavier models is priced on quote."
  ],
  [
    "How do you stop bots during a sale?",
    "WAAP sits in front of the storefront with bot rules, rate limits on login, OTP and checkout, and virtual patches for known flaws. The SOC watches for credential stuffing and card testing. WAAP starts at ₹4,999* a month."
  ],
  [
    "What does Retail Cloud cost?",
    "Compute is ₹599 per vCPU, ₹149 per GB RAM and ₹6 per GB NVMe a month; a dedicated 3-node cluster is ₹49,999*. Store SD-WAN starts at ₹2,999* per site, CDN at ₹1,999* and SOC at ₹449* per server a month. All excl. 18% GST; licences and links are quoted."
  ],
  [
    "Is XcellHost MeitY empanelled?",
    "Yes. XcellHost is MeitY empanelled and certified to ISO 27001 and ISO 20000-1, and has run managed cloud and security from Mumbai since 1999."
  ]
];
