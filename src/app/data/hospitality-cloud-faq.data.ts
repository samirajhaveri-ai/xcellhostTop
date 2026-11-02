// FAQs from the supplied Hospitality Cloud document.
export const HOSPITALITY_CLOUD_FAQS: [string, string][] = [
  [
    "Can our existing PMS and POS run on XcellHost's cloud?",
    "In most cases, yes. We host the PMS, POS, central reservation and channel-manager software you already license on Windows or Linux servers in Mumbai, platform-neutral. Licences stay with you; check your vendor's terms for hosted use and we will help with the conversation."
  ],
  [
    "What happens to check-ins if the hotel's internet goes down?",
    "Design for it: two links or SD-WAN with 4G/5G backup keeps the property online, and the front desk can open the PMS from any laptop on a mobile hotspot. For remote resorts we can add an edge node that keeps key functions running locally."
  ],
  [
    "Do we need OTP login for guest Wi-Fi?",
    "DoT's 2009 Wi-Fi directions expect hotspot users to be authenticated centrally — for example a login sent by SMS to their mobile — with the mobile-to-login record kept for a year. Managed Wi-Fi Professional at ₹799* per AP a month includes the OTP portal and one-year records. Confirm with your legal team what applies to your setup."
  ],
  [
    "Is XcellHost a PCI QSA?",
    "No. We help you scope, segment, close gaps and complete your SAQ, and coordinate the QSA and ASV partners who sign off. SAQ assist starts at ₹1,49,999* and quarterly ASV scans at ₹24,999* a quarter."
  ],
  [
    "Can the PMS keep guests' card numbers for no-shows?",
    "Under RBI's card-on-file tokenisation rules, merchants should not store actual card numbers. We design PMS and POS integrations around gateway tokens so the card number never lands in your database, which also keeps PCI scope small."
  ],
  [
    "How do you help with Form C for foreign guests?",
    "The Bureau of Immigration expects accommodation providers to submit Form C online within 24 hours of a foreign guest's arrival. Your hosted PMS holds the arrival data and can raise a reminder; your front desk submits it on the Bureau's portal."
  ],
  [
    "What does the DPDP Act change for guest data?",
    "Guest details are personal data: you need a clear notice and purpose, consent where required (marketing especially), reasonable security safeguards and breach intimation. We host the data in India with encryption and logging, record consents, and support you through our vDPO retainer."
  ],
  [
    "Can one setup serve all our properties?",
    "Yes. Chains usually run one central reservations and guest-profile core on a dedicated cluster in Mumbai, with each property connected over SD-WAN. New properties join by shipping a pre-configured box."
  ],
  [
    "Do you provide CCTV?",
    "Yes, through Video Surveillance-as-a-Service: existing ONVIF cameras, NVRs and DVRs connect to cloud video management with people counting and alerts*. It is quoted per property because cameras and retention vary."
  ],
  [
    "How long does a move take, and when?",
    "A single property typically moves in three to five weeks*, with each system cut over in one night after the night audit and a rollback plan ready. We avoid your peak dates."
  ],
  [
    "What does Hospitality Cloud cost?",
    "Compute is ₹599 per vCPU, ₹149 per GB RAM and ₹6 per GB NVMe a month; managed Wi-Fi is ₹499* or ₹799* per AP; SD-WAN ₹2,999* or ₹4,499* per property; SOC ₹449* per server; a dedicated cluster ₹49,999* a month. All excl. 18% GST."
  ]
];
