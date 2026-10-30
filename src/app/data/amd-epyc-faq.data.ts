// FAQs from the supplied AMD EPYC comparison document.
export const AMD_EPYC_FAQS: [string, string][] = [
  [
    "What is the difference between EPYC 9005 and 9004?",
    "Both use the SP5 socket and 12 DDR5 channels. The 9005 series uses Zen 5 and Zen 5c cores, reaches 192 cores and DDR5-6400 on AMD's product pages, and adds CXL 2.0. The 9004 series uses Zen 4 and Zen 4c, tops out at 128 cores and DDR5-4800, and supports CXL 1.1+. AMD states that 9005 is compatible with the SP5 platform, subject to the server maker."
  ],
  [
    "Zen 5 or Zen 5c — which should I choose?",
    "Zen 5c parts pack more, smaller cores per socket (up to 192 in the EPYC 9965) at lower boost clocks — ideal for containers, web serving and dense virtual machines. Zen 5 parts run faster per core (up to 5 GHz on F models) and suit databases, licensed software and latency-sensitive applications."
  ],
  [
    "What does the F suffix mean and when is it worth it?",
    "F parts are frequency-optimised: fewer cores with higher base and boost clocks and a large L3 per core. When software such as SQL Server or Windows Server is licensed per core, a 16-core F part can do the work of more slow cores while needing fewer licences — try the licence calculator above."
  ],
  [
    "What is 3D V-Cache and who needs it?",
    "It is extra L3 cache stacked on the core chiplets. X parts such as the EPYC 9684X carry 1,152 MB of L3. Workloads that repeatedly read large working sets — CFD, FEA, EDA and some databases — can benefit; general web and VM workloads usually do not need it."
  ],
  [
    "Is the new EPYC 9006 series available?",
    "AMD lists 31 EPYC 9006 SKUs with specifications and 1KU prices on amd.com, on new SP7 and SP8 platforms with Zen 6 and Zen 6c cores, PCIe Gen 6 and up to 256 cores. AMD marks the specifications as subject to change. Ask us about server availability and lead times in India."
  ],
  [
    "Where do the specifications on this page come from?",
    "Each SKU was read from its own AMD product page on amd.com, with AMD datasheets and press releases used for core type, 3D V-Cache and CXL. Data was retrieved on 30 October 2026. Where AMD does not publish a value for a SKU, the table shows a dash rather than an estimate. Always check AMD's page before you buy."
  ],
  [
    "Are the USD prices what I will pay XcellHost?",
    "No. The AMD list price (1KU, USD) is AMD's published price for the processor alone in 1,000-unit lots. An XcellHost server is priced monthly in INR and includes the platform, memory, storage, network, data-centre space and 24×7 support. Listed servers show their price; everything else is quoted."
  ],
  [
    "What is the difference between 1P and 2P?",
    "1P means a single-socket server; 2P means two CPUs in one server sharing memory. P-suffix SKUs are 1P-only and usually cost less than their 2P twins. A well-sized 1P EPYC often replaces an older 2P server and halves per-socket licences."
  ],
  [
    "When should I choose 8004 or 8005 instead of 9005?",
    "When power, space or heat are the limit — edge sites, telco cabinets and storage nodes. The 8004 and 8005 series use the smaller SP6 socket with six DDR5 channels and up to 225 W default power. AMD's 8004 PN models are NEBS-friendly for telco deployments."
  ],
  [
    "Are EPYC 4005 and 4004 real server CPUs?",
    "Yes. They are AMD EPYC processors for the AM5 socket, with 4 to 16 cores, two DDR5 channels and up to 28 PCIe 5.0 lanes from the CPU. They suit small-business servers, game servers and hosting where a high clock matters more than a large memory system."
  ],
  [
    "Can XcellHost build a GPU server with an EPYC host CPU?",
    "Yes. We build EPYC-hosted servers with NVIDIA or AMD Instinct GPUs and run them 24×7 from Mumbai. GPU servers are always priced on quote because GPU supply and configuration vary. See our dedicated AI server and MI300X pages for details."
  ]
];
