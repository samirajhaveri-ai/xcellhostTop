export interface CaseStudy {
  readonly id: string;
  readonly documentId?: string;
  readonly mainCategory: string;
  readonly subCategory: string;
  readonly customer?: string;
  readonly headline?: string;
  readonly quote?: string;
  readonly quoteBy?: string;
  readonly industry: string;
  readonly profile: string;
  readonly metric: string;
  readonly metricLabel: string;
  readonly summary: string;
  readonly challenge: string;
  readonly solution: string;
  readonly impact: readonly string[];
  readonly services: readonly string[];
}

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    id: 'tally-cloud',
    mainCategory: 'Cloud & Infrastructure',
    subCategory: 'Manufacturing',
    industry: 'Manufacturing',
    profile: '3 branches',
    metric: '2 days to 0',
    metricLabel: 'Month-end reconciliation disappeared',
    summary:
      'Three branches moved from separate Tally files and emailed backups to one live, protected workspace.',
    challenge:
      'Each branch maintained its own Tally data. At month-end, teams exchanged backups and spent up to two days checking and reconciling records before reporting could begin.',
    solution:
      'XcellHost moved the business to Tally on Cloud, created secure role-based access for each branch and protected the shared dataset with scheduled cloud backups.',
    impact: [
      'One current dataset across all three branches',
      'No manual month-end file consolidation',
      'Secure access for authorised teams from any location',
    ],
    services: ['Tally on Cloud', 'Cloud Backup'],
  },
  {
    id: 'ca-continuity',
    mainCategory: 'Cloud & Infrastructure',
    subCategory: 'Professional Services',
    industry: 'CA firm',
    profile: 'Pune',
    metric: '10 minutes',
    metricLabel: 'From office PC crash to back at work',
    summary:
      'A failed office PC became a short interruption instead of a recovery project with possible data loss.',
    challenge:
      'Critical applications and client work were tied to an office computer. A hardware failure could stop the team for days while files and software were recovered.',
    solution:
      'A managed Cloud Desktop separated the working environment from the physical device, while Acronis Backup added a protected recovery layer for business data.',
    impact: [
      'Work resumed from another laptop in ten minutes',
      'No dependency on a single office device',
      'A repeatable backup and recovery path for the team',
    ],
    services: ['Cloud Desktop', 'Acronis Backup'],
  },
  {
    id: 'dpdpa-readiness',
    mainCategory: 'Data Protection & Compliance',
    subCategory: 'BFSI',
    industry: 'BFSI',
    profile: 'Enterprise',
    metric: '8 weeks',
    metricLabel: 'DPDPA audit-ready before the deadline',
    summary:
      'A structured privacy programme replaced scattered compliance activity with evidence, ownership and operating workflows.',
    challenge:
      'The organisation needed to discover personal data, formalise consent and rights handling, review vendor obligations and answer enterprise due-diligence requests consistently.',
    solution:
      'SecureSetu was deployed for data discovery, consent and data-principal request workflows, supported by a named vDPO to own governance and remediation.',
    impact: [
      'Core privacy workflows operating within eight weeks',
      'Clear ownership and evidence for audit questions',
      'Faster responses to client due-diligence requests',
    ],
    services: ['SecureSetu', 'vDPO'],
  },
  {
    id: 'cloud-drive-collaboration',
    mainCategory: 'Cloud & Infrastructure',
    subCategory: 'Professional Services',
    industry: 'Professional Services',
    profile: '45 users',
    metric: '1 workspace',
    metricLabel: 'File versions and email attachments brought under control',
    summary:
      'A growing services team replaced scattered local folders and emailed documents with one governed cloud workspace.',
    challenge:
      'Project files were spread across laptops, shared through email and duplicated under inconsistent names, making collaboration and recovery difficult.',
    solution:
      'XcellHost deployed Cloud Drive with team folders, role-based access, version history and protected sharing for staff and external collaborators.',
    impact: [
      'One current version of each project file',
      'Secure sharing without oversized email attachments',
      'Version history for quick recovery from accidental changes',
    ],
    services: ['Cloud Drive'],
  },
  {
    id: 'endpoint-security-response',
    mainCategory: 'Cybersecurity',
    subCategory: 'Manufacturing',
    industry: 'Manufacturing',
    profile: 'Multi-site SMB',
    metric: '12 minutes',
    metricLabel: 'Suspicious endpoint isolated before the threat could spread',
    summary:
      'Central endpoint detection and response gave a distributed business one place to detect, investigate and contain threats.',
    challenge:
      'Endpoints across offices and production locations had inconsistent protection, while the small IT team lacked a unified view of alerts and risky activity.',
    solution:
      'Advanced Endpoint Security (EDR) was deployed with central policies, behavioural detection, automated isolation and guided investigation workflows.',
    impact: [
      'Central visibility across protected endpoints',
      'Automated containment reduced lateral-movement risk',
      'Clear incident evidence for follow-up and reporting',
    ],
    services: ['Advanced Endpoint Security (EDR)'],
  },
  {
    id: 'rmm-device-operations',
    mainCategory: 'Cloud & Infrastructure',
    subCategory: 'Retail',
    industry: 'Retail',
    profile: '60 endpoints',
    metric: '60 endpoints',
    metricLabel: 'Managed remotely from one operations console',
    summary:
      'Remote monitoring and management replaced reactive site visits with central health checks, patching and support.',
    challenge:
      'Store and office devices were maintained individually, so missed patches and small faults often became disruptive support calls or site visits.',
    solution:
      'XcellHost introduced Remote Monitoring & Mgmt (RMM) with device inventory, health alerts, patch policies and secure remote assistance.',
    impact: [
      'Central inventory and health status for every managed device',
      'Scheduled patching with fewer manual interventions',
      'Faster remote resolution without unnecessary travel',
    ],
    services: ['Remote Monitoring & Mgmt (RMM)'],
  },
  {
    id: 'smb-security-appliance',
    mainCategory: 'Cybersecurity',
    subCategory: 'Retail',
    industry: 'Retail',
    profile: '4 locations',
    metric: '1 policy',
    metricLabel: 'Four locations protected under one security policy',
    summary:
      'A growing retailer replaced inconsistent branch protection with centrally managed network security and reporting.',
    challenge:
      'Each location used a different router and security configuration, leaving the IT team without consistent controls, web filtering or usable event visibility.',
    solution:
      'XcellHost deployed an SMB Cyber Security Appliance at each location with unified policies, secure connectivity, threat prevention and central monitoring.',
    impact: [
      'Consistent security controls across every location',
      'Central visibility into blocked threats and risky activity',
      'Simpler policy changes without individual branch visits',
    ],
    services: ['SMB Cyber Security Appliance'],
  },
  {
    id: 'microsoft-365-smb-collaboration',
    mainCategory: 'Cloud & Infrastructure',
    subCategory: 'Professional Services',
    industry: 'Professional Services',
    profile: '38 users',
    metric: '38 users',
    metricLabel: 'Email and teamwork moved into one managed workspace',
    summary:
      'A services firm standardised email, documents and meetings on Microsoft 365 without interrupting client work.',
    challenge:
      'Staff relied on mixed email providers and local Office files, which created mailbox issues, duplicate documents and inconsistent access from outside the office.',
    solution:
      'XcellHost migrated the team to Microsoft 365 SMB, configured identities and security policies, and moved shared working files into governed cloud collaboration.',
    impact: [
      'One managed identity and productivity environment',
      'Secure access to email and files from any approved device',
      'Reduced document duplication through shared collaboration',
    ],
    services: ['Microsoft 365 SMB'],
  },
  {
    id: 'acronis-genai-governance',
    mainCategory: 'Cybersecurity',
    subCategory: 'Professional Services',
    industry: 'Professional Services',
    profile: 'Hybrid workforce',
    metric: '6 AI tools',
    metricLabel: 'Generative AI use made visible and policy-controlled',
    summary:
      'A hybrid team gained visibility into workplace AI use while protecting sensitive business information from unsafe prompts and uploads.',
    challenge:
      'Employees were adopting public AI tools faster than the business could assess them, creating uncertainty around confidential data, acceptable use and incident evidence.',
    solution:
      'Acronis GenAI Protection was introduced with discovery, activity visibility and policies for approved and restricted generative AI services.',
    impact: [
      'Clear inventory of generative AI services in use',
      'Consistent controls for sensitive prompts and uploads',
      'Actionable reporting for security and governance reviews',
    ],
    services: ['Acronis GenAI Protection'],
  },
  {
    id: 'cloud-disaster-recovery-smb',
    mainCategory: 'Data Protection & Compliance',
    subCategory: 'Manufacturing',
    industry: 'Manufacturing',
    profile: 'SMB',
    metric: '18 minutes',
    metricLabel: 'Critical server recovered during a planned DR test',
    summary:
      'A manufacturer replaced an untested backup assumption with a documented cloud disaster-recovery process.',
    challenge:
      'The company backed up its main server but had no proven way to restore applications quickly after hardware failure, ransomware or a site outage.',
    solution:
      'XcellHost implemented Cloud Disaster Recovery SMB with replicated workloads, an isolated recovery environment and scheduled recovery testing.',
    impact: [
      'Documented recovery steps and named responsibilities',
      'Successful recovery test without affecting production',
      'A practical continuity option during a site-level incident',
    ],
    services: ['Cloud Disaster Recovery SMB'],
  },
  {
    id: 'dpdpa-for-smb-readiness',
    mainCategory: 'Data Protection & Compliance',
    subCategory: 'Professional Services',
    industry: 'Professional Services',
    profile: 'SMB',
    metric: '6 weeks',
    metricLabel: 'Core DPDPA workflows moved from policy to practice',
    summary:
      'An SMB established practical privacy ownership, data mapping and request handling without building a large internal compliance team.',
    challenge:
      'Personal data was handled across sales, HR and support processes, but the business lacked a common inventory, documented responsibilities and a repeatable response workflow.',
    solution:
      'DPDPA For SMB provided a scoped readiness assessment, remediation plan, essential records and operating workflows suited to the organisation’s size.',
    impact: [
      'Clear inventory of priority personal-data processing',
      'Defined process for consent and data-principal requests',
      'Evidence organised for customer and partner reviews',
    ],
    services: ['DPDPA For SMB'],
  },
  {
    id: 'workforce-analytics-visibility',
    mainCategory: 'Cloud & Infrastructure',
    subCategory: 'Business Services',
    industry: 'Business Services',
    profile: '75 employees',
    metric: '1 dashboard',
    metricLabel: 'Work patterns made visible across hybrid teams',
    summary:
      'Managers replaced manual status chasing with a shared view of application use, workload patterns and operational trends.',
    challenge:
      'Hybrid team leaders had limited evidence for workload planning and relied on fragmented updates that made capacity and process bottlenecks hard to identify.',
    solution:
      'Workforce Analytics was configured with role-based dashboards, privacy-aware activity trends and scheduled management reporting.',
    impact: [
      'Shared operational view across office and remote teams',
      'Earlier identification of workload and process bottlenecks',
      'Evidence-based planning without manual status collection',
    ],
    services: ['Workforce Analytics'],
  },
  {
    id: 'domain-portfolio-control',
    mainCategory: 'Web Presence',
    subCategory: 'Business Services',
    industry: 'Business Services',
    profile: '14 domains',
    metric: '14 domains',
    metricLabel: 'Domain registrations consolidated under one accountable team',
    summary:
      'A multi-brand business brought registration, renewals, ownership records and domain protection into one managed portfolio.',
    challenge:
      'Domains were registered through different providers and employee accounts, making ownership, renewal dates, pricing and access difficult to track.',
    solution:
      'XcellHost transferred the active portfolio, registered new names, reviewed premium and backorder options, enabled Domain Protect+ and documented registry ownership.',
    impact: [
      'One portfolio view for registrations and renewals',
      'Protected contact information and controlled account access',
      'Clear pricing and ownership records for every domain',
    ],
    services: [
      'Register a Domain Name',
      'Transfer Your Domain',
      'Premium Domains',
      'Domain Protect+',
      'Domain Whois Lookup',
      'Domain Name Prices',
      'Backorder Domains',
    ],
  },
  {
    id: 'domain-extension-launch',
    mainCategory: 'Web Presence',
    subCategory: 'Digital Commerce',
    industry: 'Digital Commerce',
    profile: '3 markets',
    metric: '3 markets',
    metricLabel: 'Relevant domain extensions selected for a multi-market launch',
    summary:
      'A digital business compared new extensions, regional naming options and TLD requirements before launching in three markets.',
    challenge:
      'The team had shortlisted several brand names but lacked a structured way to compare extension relevance, availability and regional fit.',
    solution:
      'XcellHost used the latest extension catalogue, TLD directory and Bharat domain options to build a practical registration plan for each audience.',
    impact: [
      'Clear extension shortlist for each target market',
      'Fewer naming conflicts before campaign production',
      'Regional domain options included in the launch plan',
    ],
    services: ['Latest Domain Extensions', 'TLD Directory', 'Bharat Domains'],
  },
  {
    id: 'ai-domain-shortlist',
    mainCategory: 'Web Presence',
    subCategory: 'Startup',
    industry: 'Technology startup',
    profile: 'New brand',
    metric: '40 to 3',
    metricLabel: 'Domain ideas narrowed to an available brand shortlist',
    summary:
      'A startup moved from an open-ended naming exercise to three relevant, available domain candidates.',
    challenge:
      'The founding team had broad product concepts but struggled to create memorable names that matched the offer and still had practical domains available.',
    solution:
      'The AI Domain Generator produced targeted name ideas and the Ai Domain Advisor compared clarity, availability and extension fit.',
    impact: [
      'Forty relevant ideas generated from the business brief',
      'Availability and extension fit checked during shortlisting',
      'Three final candidates ready for brand review',
    ],
    services: ['AI Domain Generator', 'Ai Domain Advisor'],
  },
  {
    id: 'managed-web-hosting',
    mainCategory: 'Web Presence',
    subCategory: 'Digital Agency',
    industry: 'Digital agency',
    profile: '3 websites',
    metric: '3 websites',
    metricLabel: 'Mixed website workloads consolidated with the right hosting stack',
    summary:
      'An agency moved Windows, Linux and WordPress websites into managed hosting environments sized for each application.',
    challenge:
      'Client sites used different technologies but were hosted through a single unmanaged setup, creating performance, compatibility and support problems.',
    solution:
      'XcellHost separated the workloads across Windows Hosting, Linux Hosting and optimised WordPress Hosting while providing one support and management path.',
    impact: [
      'Appropriate runtime and configuration for every website',
      'Simpler management through one hosting partner',
      'Clear upgrade and support path as traffic grows',
    ],
    services: ['Windows Hosting', 'Linux Hosting', 'WordPress Hosting'],
  },
  {
    id: 'ai-website-launch',
    mainCategory: 'Web Presence',
    subCategory: 'Startup',
    industry: 'Technology startup',
    profile: 'New business',
    metric: '2 days',
    metricLabel: 'From business brief to a live website and domain',
    summary:
      'A new business launched its first professional web presence without waiting for a full custom-development cycle.',
    challenge:
      'The founders needed a credible website quickly but had limited design resources and had not yet secured a suitable domain.',
    solution:
      'The team used the AI Website Builder to create and refine the site, then connected the included Free Domain for launch.',
    impact: [
      'Initial website structure generated from the business brief',
      'Responsive pages edited without specialist development skills',
      'Domain and website launched through one managed workflow',
    ],
    services: ['Free Domain', 'AI Website Builder'],
  },
  {
    id: 'website-migration-backup',
    mainCategory: 'Web Presence',
    subCategory: 'Professional Services',
    industry: 'Professional Services',
    profile: 'Business website',
    metric: '30 minutes',
    metricLabel: 'Website rollback completed after a faulty update',
    summary:
      'A business website moved to XcellHost with a tested backup and recovery path for future changes.',
    challenge:
      'The existing host delivered inconsistent support and the site had no dependable restore point before plugin, content or configuration updates.',
    solution:
      'XcellHost migrated the website, verified application and DNS behaviour, and enabled scheduled Website Backup with retained restore points.',
    impact: [
      'Planned migration with content and configuration checks',
      'Automated restore points before future site changes',
      'Fast rollback when an update caused a website issue',
    ],
    services: ['Migrate to XcellHost', 'Website Backup'],
  },
  {
    id: 'hosting-control-panel-operations',
    mainCategory: 'Web Presence',
    subCategory: 'Digital Agency',
    industry: 'Digital agency',
    profile: '24 websites',
    metric: '1 workflow',
    metricLabel: 'Client hosting administration standardised across control panels',
    summary:
      'An agency brought routine website, database, email and account administration into a documented hosting workflow.',
    challenge:
      'Client websites arrived on different hosting platforms, so common tasks depended on individual knowledge and inconsistent access arrangements.',
    solution:
      'XcellHost organised managed environments using cPanel, Plesk and Webuzo control panels, with consistent access, ownership and operational procedures.',
    impact: [
      'Faster routine administration across client websites',
      'Clear access ownership and handover procedures',
      'Consistent support path despite different website stacks',
    ],
    services: ['cPanel Control Panel', 'Plesk Control Panel', 'Webuzo Control Panel'],
  },
  {
    id: 'cloudlinux-account-isolation',
    mainCategory: 'Web Presence',
    subCategory: 'Web Hosting',
    industry: 'Web hosting',
    profile: '40 accounts',
    metric: '40 accounts',
    metricLabel: 'Hosting accounts isolated for steadier shared-server performance',
    summary:
      'A shared hosting environment gained per-account resource controls and clearer visibility into heavy workloads.',
    challenge:
      'Traffic spikes or inefficient scripts on one customer account could consume shared resources and affect unrelated websites on the same server.',
    solution:
      'CloudLinux was introduced with account-level resource limits, isolation and usage visibility suited to the shared hosting environment.',
    impact: [
      'Resource-heavy accounts contained from neighbouring websites',
      'Clearer data for capacity and hosting-plan decisions',
      'More predictable performance across shared accounts',
    ],
    services: ['CloudLinux'],
  },
  {
    id: 'website-security-trust',
    mainCategory: 'Web Presence',
    subCategory: 'Web Security',
    industry: 'Digital commerce',
    profile: 'Customer portal',
    metric: '7 controls',
    metricLabel: 'Website protection, trust and recovery managed together',
    summary:
      'An online business combined malware protection, certificates, backup and compliance checks into one website-security programme.',
    challenge:
      'Security tools had been added independently over time, leaving gaps in ownership, certificate tracking, backup verification and payment-security evidence.',
    solution:
      'XcellHost coordinated SiteLock and cWatch protection, SSL certificates, CodeGuard Backup, PCI scanning and TrustedSite certification workflows.',
    impact: [
      'Clear ownership for website security and certificate renewals',
      'Recoverable website copies alongside active threat monitoring',
      'Trust and compliance evidence organised for customer review',
    ],
    services: [
      'Web Security (SiteLock)',
      'Web Security (cWatch)',
      'Thawte  SSL Certificates',
      'RapidSSL  SSL Certificates',
      'CodeGuard Backup',
      'HackerGuardian PCI Compliance Scanning',
      'TrustedSite Certifications',
    ],
  },
  {
    id: 'web-design-business-portfolios',
    mainCategory: 'Web Presence',
    subCategory: 'Web Design',
    industry: 'Web design',
    profile: '4 business profiles',
    metric: '4 templates',
    metricLabel: 'Web experiences tailored to different business audiences',
    summary:
      'A design programme created distinct conversion-focused website patterns for professional firms, SMBs and enterprise teams.',
    challenge:
      'A generic page structure did not address the credibility, enquiry and governance needs of different customer types.',
    solution:
      'XcellHost combined audience-specific web design for CA, CS and lawyers, SMB and enterprise use cases with rapid AI-assisted page creation.',
    impact: [
      'Relevant page journeys for each target audience',
      'Consistent responsive design and content standards',
      'Faster first drafts through AI-assisted website building',
    ],
    services: [
      'Web Design for CA, CS & Lawyers',
      'Web Design for SMB',
      'Web Design for Enterprise',
      'AI Website Builder',
    ],
  },
  {
    id: 'web-marketing-customer-journey',
    mainCategory: 'Web Presence',
    subCategory: 'Web Marketing',
    industry: 'Retail',
    profile: 'Omnichannel campaign',
    metric: '7 channels',
    metricLabel: 'Customer acquisition and messaging connected across channels',
    summary:
      'A retail business coordinated discovery, campaigns and customer notifications instead of managing each channel separately.',
    challenge:
      'WhatsApp, email, SMS, search listings and website optimisation were handled in isolation, producing inconsistent messaging and limited campaign visibility.',
    solution:
      'XcellHost connected WhatsApp business messaging and broadcasts with Google visibility, email and SMS campaigns, SEO and transactional email delivery.',
    impact: [
      'Consistent messaging across acquisition and service channels',
      'Clear separation between campaigns and transactional updates',
      'Improved local and organic discovery through managed visibility',
    ],
    services: [
      'WhatsApp For Business',
      'WhatsApp Broadcasting',
      'Google My Business',
      'E-mail Marketing',
      'SMS Marketing',
      'Website SEO',
      'Transactional Emails',
    ],
  },
  {
    id: 'vps-workload-platform',
    mainCategory: 'Web Presence',
    subCategory: 'VPS Servers',
    industry: 'Managed IT',
    profile: 'Mixed workloads',
    metric: '10 workloads',
    metricLabel: 'Business applications placed on workload-specific VPS environments',
    summary:
      'A managed IT team standardised general servers, automation, AI, trading and ERP applications on supported VPS configurations.',
    challenge:
      'Different applications were being forced onto a shared server despite conflicting operating-system, performance and access requirements.',
    solution:
      'XcellHost separated workloads across Windows and Linux VPS options, one-click application VPS plans and managed hosting for Odoo, ERPNext and Sage.',
    impact: [
      'Right-sized operating environment for each workload',
      'Simpler deployment for automation, AI and trading tools',
      'Managed infrastructure path for core ERP applications',
    ],
    services: [
      'Windows VPS',
      'Linux VPS',
      'n8n VPS',
      'OpenClaw VPS',
      'Trading VPS',
      'Claude VPS',
      'Window 11 VPS',
      'Odoo Hosting',
      'ERP Next Hosting',
      'Sage Hosting',
    ],
  },
];

