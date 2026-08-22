export interface CompanyCard {
  icon: string;
  title: string;
  body: string;
}

export interface CompanySection {
  title: string;
  body: string;
  points?: string[];
}

export interface CompanyPageContent {
  eyebrow: 'About' | 'Partner' | 'Careers' | 'Support' | 'Legal';
  title: string;
  tagline: string;
  intro: string;
  cards: CompanyCard[];
  sections: CompanySection[];
  cta: string;
  ctaLabel: string;
}

const aboutCards: CompanyCard[] = [
  { icon: '27+', title: 'Years of experience', body: 'Managed hosting and cloud expertise since 1999.' },
  { icon: '24×7', title: 'NOC + SOC', body: 'Engineers monitoring infrastructure and security around the clock.' },
  { icon: '100+', title: 'Cloud services', body: 'Infrastructure, productivity, backup, security and digital trust.' },
];

const partnerCards: CompanyCard[] = [
  { icon: '↗', title: 'Recurring growth', body: 'Build predictable revenue with services customers renew.' },
  { icon: '◎', title: 'Specialist support', body: 'Use XcellHost presales, migration and technical expertise.' },
  { icon: '◇', title: 'Broad portfolio', body: 'Serve cloud, security, backup and productivity needs together.' },
];

const careerCards: CompanyCard[] = [
  { icon: '✦', title: 'Learning opportunity', body: 'Gain hands-on exposure to cloud, cybersecurity and managed services.' },
  { icon: '★', title: 'Performance recognition', body: 'Strong work and ownership are recognised as you grow.' },
  { icon: '⌂', title: 'Modern workplace', body: 'A technology-led environment built for collaboration and progress.' },
];

const supportCards: CompanyCard[] = [
  { icon: '24×7', title: 'Technical assistance', body: 'Help for service incidents, configuration and troubleshooting.' },
  { icon: '✓', title: 'Track every request', body: 'Keep the issue, updates and resolution together in one ticket.' },
  { icon: '↑', title: 'Clear escalation', body: 'Critical service-impacting issues follow an accountable escalation path.' },
];

const legalCards: CompanyCard[] = [
  { icon: '◉', title: 'Plain-language summary', body: 'The important policy points are organised for quick review.' },
  { icon: '⌁', title: 'Service specific terms', body: 'Some products may include additional order or vendor conditions.' },
  { icon: '✉', title: 'Questions welcome', body: 'Contact the XcellHost team before ordering if anything is unclear.' },
];

export const COMPANY_PAGES: Record<string, CompanyPageContent> = {
  'why-xcellhost': {
    eyebrow: 'About',
    title: 'Why XcellHost',
    tagline: 'Secure, scalable cloud services backed by experienced people and responsive support.',
    intro: 'Since 1999, XcellHost has helped organisations run critical workloads across public and private clouds. The difference is a practical combination of infrastructure, cybersecurity, managed operations and people who remain accountable after deployment.',
    cards: aboutCards,
    sections: [
      { title: 'The XcellHost advantage', body: 'Solutions are tailored to company size, workload and budget instead of forcing every customer into the same package.', points: ['Cloud and hosting expertise across multiple platforms', 'ISO-aligned security and service-management processes', 'Global delivery with continuity of contact', 'Provisioning, migration, monitoring and support from one team'] },
      { title: 'Support is part of the service', body: 'Technology matters most when something changes or fails. Our managed approach keeps engineers close to your environment and gives you a clear route to help.' },
    ],
    cta: 'Tell us what you need to run, protect or improve and our team will help shape the right approach.',
    ctaLabel: 'Talk to our team',
  },
  'our-team-our-story': {
    eyebrow: 'About',
    title: 'Our Team · Our Story',
    tagline: 'A Mumbai-born cloud company built around long-term customer relationships.',
    intro: 'XcellHost began as a hosting company in 1999 and grew with the needs of its customers into managed cloud, cybersecurity, backup, productivity and digital trust. Today, cross-functional teams work together so advice, migration and ongoing operations stay connected.',
    cards: [
      { icon: '1999', title: 'Where we began', body: 'Helping Indian businesses establish a reliable online presence.' },
      { icon: '☁', title: 'How we evolved', body: 'From hosting into complete public, private and hybrid cloud operations.' },
      { icon: '🛡', title: 'Where we are going', body: 'Bringing security, compliance and automation into every managed service.' },
    ],
    sections: [
      { title: 'One connected team', body: 'Cloud architects, support engineers, security specialists and customer teams collaborate across the service lifecycle.', points: ['Solution discovery and architecture', 'Migration and onboarding', '24×7 monitoring and response', 'Service reviews and continuous improvement'] },
      { title: 'The values behind the work', body: 'Be clear, own the outcome, keep learning and recommend what genuinely fits the customer.' },
    ],
    cta: 'Meet the people behind your cloud journey by starting a conversation with us.',
    ctaLabel: 'Get in touch',
  },
  'customer-stories': {
    eyebrow: 'About',
    title: 'Customer Stories',
    tagline: 'Real cloud and security outcomes, built around the way each organisation works.',
    intro: 'Every environment has different constraints. These common customer journeys show how managed services can simplify operations, strengthen resilience and make secure work available from anywhere.',
    cards: [
      { icon: '01', title: 'Modern workplace', body: 'Centralised productivity, identity and device management for distributed teams.' },
      { icon: '02', title: 'Resilient operations', body: 'Protected workloads with monitored backup and tested recovery paths.' },
      { icon: '03', title: 'Secure growth', body: 'Layered cloud security and expert support without building a large internal team.' },
    ],
    sections: [
      { title: 'A repeatable path to results', body: 'Successful projects start with the business problem, not a product list.', points: ['Discover the current environment and desired outcome', 'Design the target service and migration plan', 'Move with controlled risk and agreed validation', 'Operate, measure and improve after go-live'] },
    ],
    cta: 'Share your challenge and let us outline a practical path forward.',
    ctaLabel: 'Discuss your project',
  },
  'certifications-awards': {
    eyebrow: 'About',
    title: 'Certifications & Awards',
    tagline: 'Credentials that reflect disciplined operations, security and technical capability.',
    intro: 'Certifications help customers evaluate how a provider manages information security, service quality and vendor technologies. XcellHost combines organisational standards with platform expertise across its cloud and security portfolio.',
    cards: [
      { icon: 'ISO', title: 'ISO 27001', body: 'Information-security management practices focused on risk and control.' },
      { icon: 'ISO', title: 'ISO 20000-1', body: 'Service-management processes designed for consistent IT delivery.' },
      { icon: '✓', title: 'Technology expertise', body: 'Skills and partnerships spanning major cloud, backup and security platforms.' },
    ],
    sections: [
      { title: 'What credentials mean for customers', body: 'They support repeatable processes, clearer accountability and continual improvement—but they complement rather than replace practical engineering experience.' },
    ],
    cta: 'Need certification evidence for procurement or due diligence? Ask our team for the current documents.',
    ctaLabel: 'Request documents',
  },
  'data-centers-global': {
    eyebrow: 'About',
    title: 'Data Centers (Global)',
    tagline: 'Place workloads closer to users while meeting performance, resilience and residency needs.',
    intro: 'XcellHost works across a global data-centre footprint so customers can choose locations that suit latency, availability and compliance requirements. Architecture and operations remain managed through one accountable team.',
    cards: [
      { icon: 'IN', title: 'India', body: 'Options for India-resident workloads and low-latency regional access.' },
      { icon: 'AP', title: 'Asia Pacific', body: 'Regional locations for growing teams and customer bases across Asia.' },
      { icon: 'GL', title: 'Global reach', body: 'Additional international locations for distributed applications and recovery.' },
    ],
    sections: [
      { title: 'Choose by workload', body: 'Location selection considers more than geography.', points: ['Data residency and regulatory obligations', 'Latency to users and connected systems', 'Carrier and connectivity requirements', 'High availability and disaster-recovery design'] },
    ],
    cta: 'Tell us where your users and data need to be, and we will help shortlist the right locations.',
    ctaLabel: 'Plan your deployment',
  },
  'vendor-partners': {
    eyebrow: 'About',
    title: 'Vendor Partners',
    tagline: 'A curated technology ecosystem for cloud, productivity, protection and security.',
    intro: 'XcellHost brings established technology platforms together with design, migration and managed operations. Customers get a solution fitted to their environment and one team to coordinate the moving parts.',
    cards: [
      { icon: '☁', title: 'Cloud platforms', body: 'Microsoft Azure, Amazon Web Services, Google Cloud and other infrastructure options.' },
      { icon: '↻', title: 'Data protection', body: 'Backup, recovery and cyber-protection technologies including Acronis.' },
      { icon: '🛡', title: 'Security ecosystem', body: 'Identity, endpoint, email, certificate and managed-security technologies.' },
    ],
    sections: [
      { title: 'Technology plus service', body: 'Vendor products are supported by solution architecture, onboarding, monitoring, support and lifecycle guidance from XcellHost.' },
    ],
    cta: 'Ask us how your preferred platform can fit into a managed solution.',
    ctaLabel: 'Speak with a specialist',
  },

  'partner-signup': {
    eyebrow: 'Partner', title: 'Partner Signup', tagline: 'Start building cloud and security revenue with XcellHost.',
    intro: 'The partner programme is designed for technology advisers, resellers, service providers and businesses that want to take a broader portfolio to their customers without building every capability internally.', cards: partnerCards,
    sections: [{ title: 'How to get started', body: 'Tell us about your company, customers and preferred engagement model.', points: ['Submit your business details', 'Discuss market focus and service fit', 'Agree the commercial and support model', 'Complete onboarding and begin enablement'] }],
    cta: 'Ready to explore a partnership? Our channel team will guide the next steps.', ctaLabel: 'Start partner signup',
  },
  'partnership-models': {
    eyebrow: 'Partner', title: 'Partnership Models', tagline: 'Choose the level of ownership and support that fits your business.',
    intro: 'Different partners need different ways to sell and deliver. XcellHost can support referral-led relationships, resale, co-selling and managed-service delivery depending on your skills, customer base and growth plan.', cards: [
      { icon: '→', title: 'Referral', body: 'Introduce qualified opportunities while XcellHost manages solution and delivery.' },
      { icon: '↗', title: 'Reseller', body: 'Own the customer relationship with commercial and technical backing.' },
      { icon: '∞', title: 'Managed services', body: 'Extend your portfolio with white-label or co-managed capabilities.' },
    ], sections: [{ title: 'Find the right fit', body: 'The best model considers sales ownership, billing, branding, technical capability and how much post-sale responsibility your team wants.' }],
    cta: 'We will help you select a model that can grow as your capability expands.', ctaLabel: 'Compare partner models',
  },
  'resources-services': {
    eyebrow: 'Partner', title: 'Partner Resources & Services', tagline: 'Sales, solution and delivery support for every stage of the customer journey.',
    intro: 'Partners can draw on XcellHost expertise to qualify opportunities, shape solutions and move customers into production. Resources are focused on shortening the path from first conversation to a successful managed service.', cards: partnerCards,
    sections: [{ title: 'Partner enablement', body: 'Available support can include:', points: ['Portfolio and sales enablement', 'Presales discovery and solution design', 'Commercial and proposal support', 'Migration, onboarding and managed operations'] }],
    cta: 'Tell us where your team needs support and we will build it into the engagement.', ctaLabel: 'Explore partner resources',
  },
  'partner-advancement': {
    eyebrow: 'Partner', title: 'Partner Advancement', tagline: 'Grow capability, opportunity and rewards as the relationship develops.',
    intro: 'The advancement path recognises active partners that invest in knowledge, build qualified pipelines and deliver strong customer outcomes. Reviews align enablement and benefits with the next stage of growth.', cards: partnerCards,
    sections: [{ title: 'Build momentum', body: 'Progress is supported through business planning, service enablement and regular pipeline collaboration.', points: ['Set shared growth goals', 'Develop technical and commercial readiness', 'Review opportunities and customer outcomes', 'Expand into additional service areas'] }],
    cta: 'Plan the next stage of your XcellHost partnership with the channel team.', ctaLabel: 'Plan your growth',
  },
  'partner-portal': {
    eyebrow: 'Partner', title: 'Partner Portal', tagline: 'A central starting point for partner activity and support.',
    intro: 'The partner portal experience brings programme resources and operational touchpoints together. Access is provided to approved partners during onboarding.', cards: [
      { icon: '▦', title: 'Opportunities', body: 'Coordinate active customer requirements with the channel team.' },
      { icon: '▤', title: 'Resources', body: 'Find current programme, portfolio and enablement information.' },
      { icon: '✉', title: 'Partner support', body: 'Reach the right team for commercial or service assistance.' },
    ], sections: [{ title: 'Need access?', body: 'If your organisation is already enrolled but you do not have access, contact the partner team using your registered business email.' }],
    cta: 'New to the programme? Complete partner signup before requesting portal access.', ctaLabel: 'Contact partner support',
  },
  'partner-guide': {
    eyebrow: 'Partner', title: 'Partner Guide', tagline: 'A practical overview of working with XcellHost.',
    intro: 'The partner guide explains the programme journey from opportunity discovery through solution design, ordering, onboarding and ongoing support.', cards: partnerCards,
    sections: [{ title: 'What the guide covers', body: 'Use it to align teams and set clear expectations.', points: ['Programme and engagement models', 'Opportunity and presales workflow', 'Ordering and customer onboarding', 'Support, escalation and account reviews'] }],
    cta: 'Request the current guide from the partner team.', ctaLabel: 'Request partner guide',
  },
  'affiliate-program': {
    eyebrow: 'Partner', title: 'Affiliate Program', tagline: 'Introduce businesses to relevant XcellHost services.',
    intro: 'The affiliate route is suited to individuals and organisations that can generate qualified interest but do not need to manage solution delivery or ongoing technical support.', cards: [
      { icon: '1', title: 'Introduce', body: 'Share the relevant XcellHost solution with your audience or network.' },
      { icon: '2', title: 'Qualify', body: 'Provide accurate context so the team can follow up effectively.' },
      { icon: '3', title: 'Track', body: 'Eligible referrals follow the agreed affiliate terms and validation process.' },
    ], sections: [{ title: 'Responsible promotion', body: 'Affiliates must use approved claims and materials, protect customer information and avoid unsolicited or misleading promotion.' }],
    cta: 'Contact the channel team to check availability and current eligibility terms.', ctaLabel: 'Join the affiliate program',
  },

  'career-handbook': {
    eyebrow: 'Careers', title: 'Career Handbook', tagline: 'Learn how we work, grow and serve customers together.',
    intro: 'XcellHost brings together people interested in cloud, cybersecurity and dependable customer service. The career handbook introduces the workplace, expectations and development opportunities before you apply.', cards: careerCards,
    sections: [{ title: 'Working at XcellHost', body: 'We value curiosity, clear ownership and steady improvement.', points: ['Learn through real customer and platform challenges', 'Collaborate across technical and customer-facing teams', 'Communicate clearly and take responsibility for outcomes', 'Build skills as the portfolio and industry evolve'] }],
    cta: 'Explore the handbook, then review roles that match your strengths.', ctaLabel: 'Ask about careers',
  },
  'apply-for-job': {
    eyebrow: 'Careers', title: 'Apply For Job', tagline: 'Build your future in cloud, cybersecurity and managed services.',
    intro: 'Join a team where ideas are valued, learning is continuous and the work has a visible impact on customers. We welcome thoughtful applications from people who enjoy solving problems and taking ownership.', cards: careerCards,
    sections: [{ title: 'Prepare your application', body: 'Help us understand both your experience and what you want to learn next.', points: ['A current résumé with contact details', 'The role or discipline that interests you', 'Relevant platforms, certifications or projects', 'Your location, availability and preferred work arrangement'] }],
    cta: 'Send your résumé and a short introduction to the XcellHost team.', ctaLabel: 'Contact the careers team',
  },

  'support-overview': {
    eyebrow: 'Support', title: 'Customer Support', tagline: 'The right route to help, from everyday questions to critical incidents.',
    intro: 'XcellHost support covers managed services across cloud, hosting, backup, productivity and security. Start with a ticket whenever possible so the team has a shared record and can route the request correctly.', cards: supportCards,
    sections: [{ title: 'Before you contact support', body: 'Include the service, affected users, start time, business impact and any recent change. Never send passwords or private keys in an email or ticket.' }],
    cta: 'Need help now? Contact us and we will direct you to the correct support route.', ctaLabel: 'Contact support',
  },
  'submit-a-ticket': {
    eyebrow: 'Support', title: 'Submit a Ticket', tagline: 'Create a clear support record for faster triage and resolution.',
    intro: 'A useful ticket states what is affected, when it began and what users are experiencing. Add screenshots or error text after removing credentials and other sensitive information.', cards: supportCards,
    sections: [{ title: 'What to include', body: 'Good initial detail reduces back-and-forth.', points: ['Service or account identifier', 'Time the issue began and whether it is ongoing', 'Number of users or systems affected', 'Exact error text and safe reproduction steps', 'Recent changes already made'] }],
    cta: 'If you cannot access your usual support portal, use the Contact page so the team can assist.', ctaLabel: 'Get support',
  },
  'knowledge-base': {
    eyebrow: 'Support', title: 'Knowledge Base', tagline: 'Practical guidance for common service and account tasks.',
    intro: 'Use self-service guidance for routine configuration, access and troubleshooting. For account-specific changes, uncertain instructions or service-impacting problems, contact support before proceeding.', cards: supportCards,
    sections: [{ title: 'Popular help areas', body: 'Guidance is commonly organised around:', points: ['Account access and billing', 'Email and Microsoft 365', 'Cloud server and desktop access', 'Backup checks and restore requests', 'Domain, DNS and certificate tasks'] }],
    cta: 'Could not find a safe answer? Ask support to confirm the right procedure.', ctaLabel: 'Ask support',
  },
  'remote-assist': {
    eyebrow: 'Support', title: 'Remote Assist', tagline: 'Secure, attended troubleshooting with an XcellHost technician.',
    intro: 'Remote assistance should begin only after you have an active support interaction and have verified the technician. You remain present and can end the session at any time.', cards: supportCards,
    sections: [{ title: 'Stay secure', body: 'Protect your organisation during every remote session.', points: ['Start only from a verified XcellHost support request', 'Do not share passwords, OTPs or recovery codes', 'Close confidential files before the session', 'End the session when troubleshooting is complete'] }],
    cta: 'Contact support first to receive the correct session instructions.', ctaLabel: 'Contact support',
  },

  'privacy-policy': {
    eyebrow: 'Legal', title: 'Privacy Policy', tagline: 'How XcellHost handles personal information shared through its services and website.',
    intro: 'XcellHost may process information needed to respond to enquiries, provide and secure services, manage accounts, meet legal duties and improve customer experience. Access should be limited to authorised people and service providers with a valid purpose.', cards: legalCards,
    sections: [
      { title: 'Information and purpose', body: 'Depending on your interaction, this can include contact, company, account, billing, support and technical usage information.', points: ['Respond to requests and deliver contracted services', 'Authenticate users and protect services', 'Process billing and maintain business records', 'Communicate service information and permitted updates', 'Meet regulatory and lawful-request obligations'] },
      { title: 'Choices and requests', body: 'Subject to applicable law and retention duties, individuals may ask about their data, request correction or raise a privacy concern through XcellHost contact channels.' },
    ],
    cta: 'For a privacy question or data request, contact XcellHost with enough detail to verify and handle it safely.', ctaLabel: 'Contact us about privacy',
  },
  'terms-of-service': {
    eyebrow: 'Legal', title: 'Terms of Service', tagline: 'The core responsibilities that apply when using XcellHost services.',
    intro: 'Orders, service descriptions and applicable product terms form part of the service agreement. Customers are responsible for accurate account information, authorised use, timely payment and keeping credentials secure.', cards: legalCards,
    sections: [
      { title: 'Using the services', body: 'Services must be used lawfully and without harming XcellHost, other customers or third parties.', points: ['Follow acceptable-use and product-specific requirements', 'Maintain appropriate backups unless backup is expressly included', 'Keep account contacts and payment details current', 'Report suspected compromise or abuse promptly', 'Do not attempt unauthorised access or disruptive activity'] },
      { title: 'Billing, renewal and changes', body: 'Fees, billing cycles, renewal dates and eligible cancellation terms are defined in the order. Third-party pricing or regulatory changes may affect future renewals with applicable notice.' },
      { title: 'Service scope', body: 'Availability commitments, support coverage, exclusions and remedies depend on the purchased service and its written service-level terms.' },
    ],
    cta: 'Review your order-specific terms and ask us to clarify any condition before purchase.', ctaLabel: 'Ask a terms question',
  },
  'refund-policy': {
    eyebrow: 'Legal', title: 'Refund Policy', tagline: 'How eligible cancellation and refund requests are reviewed.',
    intro: 'Refund eligibility depends on the product, order terms, provisioning status, usage and any third-party licence or registration costs. Some services become non-refundable once provisioned or committed to a vendor.', cards: legalCards,
    sections: [
      { title: 'Requesting a review', body: 'Send the request from an authorised account contact and include the order, service and reason.', points: ['Submit within the eligibility period stated on the order', 'Stop using the service when cancellation is confirmed', 'Allow for consumed usage, setup or third-party deductions', 'Approved refunds return through the supported payment process'] },
      { title: 'Common exclusions', body: 'Domain registrations, certificates, software licences, professional work already delivered, abuse-related termination and custom-provisioned resources may be excluded unless the order says otherwise.' },
    ],
    cta: 'Contact billing with your order details to confirm whether a service is eligible.', ctaLabel: 'Request a refund review',
  },
  'acceptable-use-policy': {
    eyebrow: 'Legal', title: 'Acceptable Use Policy', tagline: 'The standards that keep XcellHost services safe, lawful and reliable for everyone.',
    intro: 'Customers and authorised users must use XcellHost services responsibly and comply with applicable laws. Activity that threatens systems, networks, people or the availability of services is not permitted.', cards: legalCards,
    sections: [
      { title: 'Prohibited activity', body: 'Services must not be used to enable unlawful, abusive or disruptive conduct.', points: ['Unauthorised access, scanning or interception', 'Malware, phishing, fraud or deceptive activity', 'Spam or communications sent without required consent', 'Copyright or intellectual-property infringement', 'Activity that degrades or disrupts shared infrastructure'] },
      { title: 'Enforcement and reporting', body: 'XcellHost may investigate credible reports, restrict affected resources and require corrective action. Urgent action may be taken when needed to protect customers, infrastructure or third parties.' },
    ],
    cta: 'Report suspected abuse with the relevant service, timestamp and supporting details.', ctaLabel: 'Report an issue',
  },
  'ekyc-verification': {
    eyebrow: 'Legal', title: 'eKYC Verification', tagline: 'Identity and business verification for secure, compliant service activation.',
    intro: 'XcellHost may request electronic know-your-customer verification before activating or changing certain services. Verification helps prevent fraud, confirms authorised contacts and supports regulatory obligations.', cards: legalCards,
    sections: [
      { title: 'What may be required', body: 'Requirements depend on the customer type, service and applicable rules.', points: ['Authorised contact and business details', 'Government-issued identity documentation', 'Company registration or tax information', 'Address or domain-control evidence', 'Additional checks for higher-risk requests'] },
      { title: 'Submitting information safely', body: 'Use only the verification channel provided by XcellHost. Do not email passwords, one-time codes or unrelated sensitive documents. Information is retained only as required for legitimate business and legal purposes.' },
    ],
    cta: 'Need help completing a verification request? Contact the XcellHost team.', ctaLabel: 'Get verification help',
  },
  'escalation-matrix': {
    eyebrow: 'Support', title: 'Escalation Matrix', tagline: 'The right escalation path when a support request needs additional attention.',
    intro: 'Begin with a support ticket so the issue has an owner, timeline and complete technical record. Escalate with the ticket reference when impact increases, progress stalls or a committed update is missed.', cards: supportCards,
    sections: [
      { title: 'Escalation levels', body: 'Choose the level that matches the business impact.', points: ['Level 1: support team for initial triage and routine updates', 'Level 2: service lead for unresolved or recurring technical issues', 'Level 3: operations management for critical impact or missed commitments', 'Emergency: phone support for an active outage or security incident'] },
      { title: 'Information to include', body: 'Provide the ticket number, affected service, business impact, start time, current symptoms and the outcome you need. Never include passwords, private keys or one-time codes.' },
    ],
    cta: 'Contact support with your existing ticket reference to begin an escalation.', ctaLabel: 'Contact support',
  },
  'glossary': {
    eyebrow: 'Support', title: 'Cloud & Security Glossary', tagline: 'Plain-language explanations of common cloud, hosting and cyber-security terms.',
    intro: 'Use this glossary as a quick guide when comparing services or speaking with technical teams. Product scope and implementation details can vary, so confirm requirements before making a decision.', cards: supportCards,
    sections: [
      { title: 'Cloud and infrastructure', body: 'Common terms include IaaS (rented compute, storage and networking), virtual machine (an isolated software-defined server), bare metal (a dedicated physical server), and high availability (design that reduces single points of failure).' },
      { title: 'Security and resilience', body: 'MFA adds another sign-in factor; EDR monitors endpoints for suspicious behaviour; RPO describes acceptable data loss; RTO describes the target recovery time; and a zero-trust approach verifies every access request.' },
    ],
    cta: 'Need a term explained in the context of your environment?', ctaLabel: 'Ask an expert',
  },
  'qr-codes': {
    eyebrow: 'Support', title: 'Official QR Codes', tagline: 'A safe starting point for XcellHost QR-enabled resources and verification links.',
    intro: 'Only scan QR codes presented through an official XcellHost channel. Check the destination before entering information, and never approve a payment or share a one-time code solely because a QR code asks you to.', cards: supportCards,
    sections: [
      { title: 'Scan safely', body: 'Treat every QR code as a link.', points: ['Confirm the destination domain before continuing', 'Avoid codes that have been covered by a sticker or altered', 'Do not install unexpected apps or profiles', 'Contact XcellHost when a destination looks unfamiliar'] },
    ],
    cta: 'Want to verify an XcellHost QR code or destination?', ctaLabel: 'Contact support',
  },
  'sitemap': {
    eyebrow: 'About', title: 'Sitemap', tagline: 'Find the main areas of the XcellHost website.',
    intro: 'Explore XcellHost services, solutions, insights and company resources from the main navigation. The service catalog covers cloud infrastructure, managed hosting, productivity, backup, cyber security and compliance.', cards: aboutCards,
    sections: [
      { title: 'Browse the website', body: 'Use the header to explore service categories, compare solutions and view product details. Visit Insights for practical articles, Company for organisational information, and Contact for sales or support guidance.' },
    ],
    cta: 'Not sure where to start? Tell us what you need and we will point you in the right direction.', ctaLabel: 'Contact us',
  },
  'media-kit': {
    eyebrow: 'About', title: 'Media Kit', tagline: 'Approved XcellHost company and brand information for media and partners.',
    intro: 'The XcellHost media kit provides current company descriptions, approved brand assets and contact guidance. Request the latest files before publication so logos, colours and company details remain accurate.', cards: aboutCards,
    sections: [
      { title: 'Using brand assets', body: 'Do not redraw, distort or recolour the XcellHost logo. Keep clear space around it, use supplied artwork and do not imply endorsement or partnership without written approval.' },
      { title: 'Press and partnership requests', body: 'Include your organisation, publication or campaign, intended use, formats required and publication deadline when contacting the team.' },
    ],
    cta: 'Request current logos, company information or media support.', ctaLabel: 'Request the media kit',
  },
  'service-index': {
    eyebrow: 'Support', title: 'Service Index', tagline: 'A guide to the cloud, infrastructure, productivity and security services available from XcellHost.',
    intro: 'XcellHost brings together infrastructure, managed operations, data protection, workplace productivity and cyber security. Use the service navigation to open detailed product pages and compare the options relevant to your organisation.', cards: supportCards,
    sections: [
      { title: 'Core service areas', body: 'The catalog includes cloud servers and desktops, bare metal and GPU infrastructure, Microsoft cloud services, backup and disaster recovery, managed security, endpoint protection, email security and compliance solutions.' },
      { title: 'Choosing a service', body: 'Start with workload, user, compliance, availability, recovery and budget requirements. XcellHost can then recommend an architecture and clearly define what is managed.' },
    ],
    cta: 'Share your requirements and get help selecting the right service.', ctaLabel: 'Talk to a specialist',
  },
};
