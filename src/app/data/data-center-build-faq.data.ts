// Questions and answers from the supplied Data Center Build Services HTML.
export const DATA_CENTER_BUILD_FAQS: [string, string][] = [
  [
    "What does XcellHost Data Center Build Services cover?",
    "Feasibility and site survey, design, procurement, build management, commissioning from L1 to L5, handover, and optional AMC with 24×7 NOC monitoring. That covers power, cooling, fire, physical security, structured cabling, racks and containment, and DCIM/BMS, for server rooms, edge and micro sites, modular halls, enterprise data centres and AI-ready halls."
  ],
  [
    "How much does it cost to build a data centre in India?",
    "It depends on load, redundancy, site and equipment, so build projects are quoted after design. The site survey and feasibility package starts at ₹49,999* per site and the design package at ₹2,49,999* per site, excl. 18% GST. The sizing estimator gives an illustrative capex at a ₹ per kW rate you can change, and the cost calculator compares it with colocation."
  ],
  [
    "What do Tier I to Tier IV mean?",
    "Under the Uptime Institute's Tier concepts, Tier I is basic capacity, Tier II adds redundant capacity components, Tier III is concurrently maintainable (any component can be taken out for maintenance without stopping IT), and Tier IV is fault tolerant (a single failure does not interrupt IT). We use these as design intent. Formal Tier certification is awarded only by Uptime Institute."
  ],
  [
    "Is TIA-942 the same as Uptime Tiers?",
    "No. ANSI/TIA-942 is a telecommunications infrastructure standard for data centres, now in revision C (published 2024). It defines Rated-1 to Rated-4 facilities and also covers cabling, spaces and site selection. Certification against it is done by third-party conformity assessors. XcellHost designs to these concepts. *Design standards & certifications confirmed at proposal."
  ],
  [
    "Will my data centre be certified?",
    "Only if you choose to pursue certification with the relevant body. XcellHost can prepare the design and documentation for it, but does not issue or promise certifications. Which standards and audits apply is confirmed at proposal."
  ],
  [
    "What are commissioning levels L1 to L5?",
    "A common industry sequence. L1 is factory witness testing, L2 is delivery and installation inspection, L3 is start-up and pre-functional checks, L4 is functional testing of each system, and L5 is the integrated systems test, where failures are simulated across power, cooling, fire and controls under load."
  ],
  [
    "How do you size UPS, generator and cooling?",
    "From IT load (racks × kW per rack). Cooling ≈ IT × 1.1, UPS ≈ IT ÷ 0.9 power factor × 1.25 headroom per path, and the generator ≈ facility load ÷ 0.8 × 1.25, then multiplied by your redundancy (N, N+1 or 2N). These are the same rules of thumb as our cost calculator. Final sizes come from detailed design."
  ],
  [
    "Which equipment brands do you use?",
    "We are OEM-agnostic. We specify by performance and compare equivalent equipment from leading manufacturers for each project, weighing availability, service support in your city and lifecycle cost. You approve the final selection."
  ],
  [
    "Can you build for high-density AI and GPU racks?",
    "Yes, as AI-ready halls with heavier power blocks, floor loading checks and liquid-ready cooling such as rear-door or direct-to-chip loops. See our liquid-cooled AI data centre and 100 MW AI campus pages for the cooling options."
  ],
  [
    "Do you take over operations after handover?",
    "If you want us to. Under AMC, DCIM and BMS alarms route to XcellHost's 24×7 NOC in Mumbai, with preventive maintenance visits, OEM coordination and monthly capacity reports. AMC and NOC are quoted per site."
  ],
  [
    "Should I build my own or use colocation?",
    "Build when data or equipment must stay on your premises, for edge sites, or when you need full control of a large footprint. Colocate when you mainly want servers out of the office. XcellHost offers both: co-location in our Tier IV data centre in Mumbai, and the TCO tool to compare."
  ],
  [
    "Does this help with DPDP and CERT-In compliance?",
    "It helps you meet the physical and operational side: access control, CCTV, time sync, logging and 24×7 monitoring. Compliance with the DPDP Act, CERT-In directions and RBI/SEBI rules also depends on your own policies and processes."
  ]
];
