// FAQs from the supplied Acronis Cyber Platform document.
export const ACRONIS_CYBER_PLATFORM_FAQS: [string, string][] = [
  [
    "Is the Acronis Cyber Platform one product?",
    "It works as one product: a single agent, console and data model. The services on it, such as backup, EDR, email security or RMM, can be used together or on their own, and you pay only for the ones you switch on."
  ],
  [
    "Is it the same as Acronis Cyber Protect Cloud?",
    "Yes. Acronis renamed Cyber Protect Cloud, and the corporate Cyber Protect product, to Acronis Cyber Platform on 14 October 2026. Acronis says only the name changed; existing licences and agents keep working, and older quotes or consoles may still show the old name."
  ],
  [
    "How is it licensed through XcellHost?",
    "Most customers take it monthly, per workload, on our partner account: workstations from ₹349, servers ₹1,499, VMs ₹999 and Microsoft 365 seats ₹149 a month on Essentials (indicative, excl. GST). Storage is billed per TB. Teams that want to run the console themselves can buy annual corporate subscriptions through us instead."
  ],
  [
    "Is it built for MSPs and resellers?",
    "Yes. The platform is multi-tenant: a provider manages many customers and sites from one console, with per-tenant admins, usage reporting and branding. Indian resellers can work under XcellHost's partner account and be billed by us in INR."
  ],
  [
    "Does it include RMM and PSA features?",
    "Yes. Remote monitoring and management, patching and remote access are built in, and the Service Desk covers ticketing and triage. It also connects to third-party RMM, PSA and ticketing tools if you already use them."
  ],
  [
    "Can it run fully on premises?",
    "The management console can run on a dedicated, single-tenant server on premises or in a data centre, and backups can go to local storage, cloud storage or both. On-premises management servers come only with subscription licensing, and features that depend on the cloud are not available with a local server."
  ],
  [
    "Where are my backups stored?",
    "Your choice: XcellHost's Mumbai Tier IV data centre (₹1,999 per TB a month*), Acronis's cloud, which has a Mumbai data centre (₹2,499 per TB a month*), your own Azure or S3 bucket, or local disks and NAS. Many customers keep a local copy for speed and a Mumbai copy for disasters."
  ],
  [
    "What is the difference between Essentials, Advanced and Complete?",
    "Essentials covers backup, anti-malware and monitoring. Advanced adds endpoint detection and response and AI automation. Complete adds XDR, the Service Desk and Cyber Studio. Advanced is 1.6× and Complete 2.2× the Essentials price. The edition finder above suggests one from five answers."
  ],
  [
    "What is the Cyber Console?",
    "Acronis's new AI-native interface for the platform, which brings Cyber Intelligence, Cyber Studio, Cyber Compliance, the AI assistant and the Service Desk into one workspace for people and AI agents. It was in early access in October 2026 and is not a separate licence."
  ],
  [
    "Does it help with DPDP, CERT-In and the daily-backup rules?",
    "It supports them. Encryption, immutable copies, DLP and India storage help with DPDP safeguards. Detection and Response keeps events for 180 days, which helps with CERT-In's log and 6-hour reporting directions. A daily plan to Mumbai storage with logs supports Companies rule 3(5) and Income-tax rule 46(8). No product makes you compliant on its own."
  ],
  [
    "Can we move from our current backup or antivirus?",
    "Yes. We plan the order so devices are never unprotected: the Acronis agent and first backup go on, then the old tools come off. Existing backups can be kept read-only until their retention ends. Onboarding is ₹24,999* one-time."
  ],
  [
    "Is there a free trial?",
    "We can arrange a trial on a few machines so you can see the agent, console and a test restore before you commit. Ask through the form below or on WhatsApp."
  ]
];
