import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../core/cart.service';
import { CatalogService, slugify } from '../core/catalog.service';
import { OverlayService } from '../core/overlay.service';
import { MEGA_MENU } from '../data/nav.data';

/** Pills the original rendered in the blue variant (`class="pill b"`). */
const BLUE_PILLS = new Set(['1-yr free ext.', 'Soon']);

function menuPillClass(pill: string | null): string {
  if (!pill) return '';

  const normalized = pill.toLowerCase();
  if (normalized === 'top seller' || normalized === 'best seller') {
    return 'has-menu-pill is-seller';
  }
  if (normalized === 'new') return 'has-menu-pill is-new';
  if (BLUE_PILLS.has(pill)) return 'has-menu-pill is-blue';
  return 'has-menu-pill';
}

/** Small, dependency-free line icons used by the mega-menu service cards. */
const MENU_ICON_PATHS = {
  globe: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c2.2 2.5 3.4 5.5 3.4 9s-1.2 6.5-3.4 9c-2.2-2.5-3.4-5.5-3.4-9S9.8 5.5 12 3Z',
  domainAdd: 'M16 19a8 8 0 1 1 2.9-3.8M4 11h14M11 3c2 2.2 3 4.9 3 8m-3 8c-2-2.2-3-4.9-3-8s1-5.8 3-8m8 12v6m-3-3h6',
  transfer: 'M16 3h5v5m0-5-6 6M8 21H3v-5m0 5 6-6M18 12a6 6 0 0 0-10.2-4.3M6 12a6 6 0 0 0 10.2 4.3',
  bulkSearch: 'M4 5h12v12H4V5Zm3-3h12v12m-3.5 3.5L21 23m-2.5-5.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  parking: 'M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-4V9m0 0h2.5a2.5 2.5 0 0 1 0 5H12M9 2h6',
  extensions: 'M4 4h6v4a2 2 0 1 0 4 0V4h6v6h-4a2 2 0 1 0 0 4h4v6h-6v-4a2 2 0 1 0-4 0v4H4v-6h4a2 2 0 1 0 0-4H4V4Z',
  award: 'm12 3 2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L12 3Zm-3 13-1 6 4-2 4 2-1-6',
  lookup: 'M4 3h12v18H4V3Zm3 4h6M7 11h4m7.5 6.5L22 21m-1.5-5.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  price: 'M3 11V4h7l10 10-7 7L3 11Zm5-3h.01M11 12h5m-2.5-2.5v5',
  backorder: 'M4 5h16v16H4V5Zm0 5h16M8 3v4m8-4v4m-4 7v3l2 1',
  server: 'M4 4h16v6H4V4Zm0 10h16v6H4v-6Zm3-7h.01M7 17h.01M11 7h6M11 17h6',
  cloud: 'M7 18h11a4 4 0 0 0 .7-7.9A7 7 0 0 0 5.4 8.2 5 5 0 0 0 7 18Z',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3.5-10 2.2 2.2 4.8-4.8',
  mail: 'M3 5h18v14H3V5Zm0 1 9 7 9-7',
  database: 'M20 5c0 1.7-3.6 3-8 3S4 6.7 4 5s3.6-3 8-3 8 1.3 8 3Zm0 0v7c0 1.7-3.6 3-8 3s-8-1.3-8-3V5m16 7v7c0 1.7-3.6 3-8 3s-8-1.3-8-3v-7',
  monitor: 'M3 4h18v13H3V4Zm6 17h6m-3-4v4',
  code: 'm8 9-4 3 4 3m8-6 4 3-4 3m-2-9-4 12',
  network: 'M12 8V5m0 3-6 4m6-4 6 4M6 12v3m12-3v3M3 15h6v5H3v-5Zm12 0h6v5h-6v-5ZM9 2h6v5H9V2Z',
  chart: 'M4 20V10m6 10V4m6 16v-7m4 7H2',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
  file: 'M6 2h8l4 4v16H6V2Zm8 0v5h5M9 12h6m-6 4h6',
  support: 'M4 13v-2a8 8 0 0 1 16 0v2M4 13H2v6h4v-6H4Zm16 0h2v6h-4v-6h2Zm0 6c0 2-2 3-5 3',
  settings: 'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7.4-3.5 2-1.5-2-3.5-2.4 1a8 8 0 0 0-1.7-1L15 4.5h-4L10.7 7A8 8 0 0 0 9 8L6.6 7l-2 3.5 2 1.5a8 8 0 0 0 0 2l-2 1.5 2 3.5L9 18a8 8 0 0 0 1.7 1l.3 2.5h4l.3-2.5a8 8 0 0 0 1.7-1l2.4 1 2-3.5-2-1.5a8 8 0 0 0 0-2Z',
} as const;

function menuIconAccent(identity: string): string {
  let hash = 0;
  for (const character of identity) hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  const firstX = 18 + (hash & 3) * 0.65;
  const firstY = 2.5 + ((hash >>> 2) & 3) * 0.65;
  const secondX = 18 + ((hash >>> 4) & 3) * 0.65;
  const secondY = 5 + ((hash >>> 6) & 3) * 0.65;
  return `M${firstX} ${firstY}h.01M${secondX} ${secondY}h.01`;
}

function menuIconPath(title: string, identity: string): string {
  const value = title.toLowerCase();
  let path: string;

  if (/register a domain/.test(value)) path = MENU_ICON_PATHS.domainAdd;
  else if (/transfer your domain/.test(value)) path = MENU_ICON_PATHS.transfer;
  else if (/bulk domain/.test(value)) path = MENU_ICON_PATHS.bulkSearch;
  else if (/domain parking/.test(value)) path = MENU_ICON_PATHS.parking;
  else if (/latest domain extension/.test(value)) path = MENU_ICON_PATHS.extensions;
  else if (/premium domain/.test(value)) path = MENU_ICON_PATHS.award;
  else if (/domain whois/.test(value)) path = MENU_ICON_PATHS.lookup;
  else if (/domain name price/.test(value)) path = MENU_ICON_PATHS.price;
  else if (/backorder domain/.test(value)) path = MENU_ICON_PATHS.backorder;
  else if (/support|assist|help|contact|ticket/.test(value)) path = MENU_ICON_PATHS.support;
  else if (/mail|e-mail|email|dmarc|smtp|exchange|bimi|mime/.test(value)) path = MENU_ICON_PATHS.mail;
  else if (/backup|storage|database|warehouse|archiv/.test(value)) path = MENU_ICON_PATHS.database;
  else if (/security|threat|risk|protect|firewall|malware|phishing|ransom|penetration|vapt|soc|siem|edr|privacy|compliance|certificate|ssl/.test(value)) path = MENU_ICON_PATHS.shield;
  else if (/server|vps|bare metal|colocation|infrastructure|compute|virtual machine|gpu/.test(value)) path = MENU_ICON_PATHS.server;
  else if (/monitor|analytics|visualization|insight|report|score|assessment/.test(value)) path = MENU_ICON_PATHS.chart;
  else if (/network|dns|connect|sd-wan|iot|telecom/.test(value)) path = MENU_ICON_PATHS.network;
  else if (/code|api|developer|software|application|app |wordpress/.test(value)) path = MENU_ICON_PATHS.code;
  else if (/desktop|workspace|device|remote access/.test(value)) path = MENU_ICON_PATHS.monitor;
  else if (/partner|team|customer|identity|employee|career|job/.test(value)) path = MENU_ICON_PATHS.users;
  else if (/blog|case stud|whitepaper|ebook|catalog|document|policy|terms|guide|knowledge|glossary/.test(value)) path = MENU_ICON_PATHS.file;
  else if (/cloud|azure|aws|google|microsoft 365|tally/.test(value)) path = MENU_ICON_PATHS.cloud;
  else if (/domain|hosting|website|web |seo|internet/.test(value)) path = MENU_ICON_PATHS.globe;
  else path = MENU_ICON_PATHS.settings;

  return `${path}${menuIconAccent(identity)}`;
}

/** Top-level labels that go straight to a page instead of a category listing. */
const DIRECT_LINKS: Record<string, string> = {
  Insights: '/insights',
  Company: '/about',
};

interface NavItemVm {
  title: string;
  iconPath: string;
  pill: string | null;
  pillClass: string;
  desc: string | null;
  link: string | null;
  external: boolean;
}
interface NavGroupVm {
  heading: string | null;
  items: NavItemVm[];
}
interface NavTabVm {
  g: string;
  label: string;
  groups: NavGroupVm[];
}

interface NavFeatureVm {
  title: string;
  body: string;
}

interface NavFeatureCardVm extends NavFeatureVm {
  label: string;
  image: string;
  link: string;
  imagePosition?: string;
  fresh?: boolean;
}

const MENU_FEATURES: Record<string, NavFeatureVm> = {
  'Web Presence': { title: 'AI Website Builder', body: 'Describe your business and get a complete website in minutes.' },
  Cloud: { title: 'Tally on Cloud', body: 'Access Tally securely from any device, wherever your team works.' },
  'Digital Trust': { title: 'Verified Mark Certificate', body: 'Display your verified brand logo inside supported inboxes.' },
  Security: { title: 'DPDPA Platform', body: 'Technology and expert support for privacy compliance.' },
  Software: { title: 'TSplus Suite', body: 'Secure remote application access at a practical cost.' },
  Solutions: { title: 'CA Cloud', body: 'A complete cloud workspace built for accounting firms.' },
  Insights: { title: 'DPDPA Readiness Checklist', body: 'Score your privacy readiness using 26 practical checkpoints.' },
  Company: { title: 'Partner Program', body: 'Resell the XcellHost portfolio with recurring margins.' },
};

/** Two visual Explore cards for every top-level mega-menu section. */
const MENU_FEATURE_CARDS: Readonly<Record<string, readonly NavFeatureCardVm[]>> = {
  'Web Presence': [
    {
      label: 'Popular hosting', title: 'WordPress Hosting',
      body: 'Fast, managed WordPress hosting with security and expert support.',
      image: '/assets/images/product-intros/reference-b657997eaab0.jpg',
      link: '/wordpress-hosting', fresh: true,
    },
    {
      label: 'Website security', title: 'Web Security (SiteLock)',
      body: 'Protect your website from malware, attacks and online threats.',
      image: '/assets/images/hero-web-security-sitelock-wide.png',
      link: '/web-security-sitelock', imagePosition: '72% center',
    },
  ],
  Cloud: [
    {
      label: 'Top seller', title: 'Tally on Cloud',
      body: 'Run Tally securely from any device with managed cloud support.',
      image: '/assets/images/hero-tally-on-cloud.png',
      link: '/tally-on-cloud', fresh: true,
    },
    {
      label: 'File collaboration', title: 'Cloud Drive',
      body: 'Secure file sharing, team folders and access from every device.',
      image: '/assets/images/product-intros/reference-54ea5391cf7f.png',
      link: '/cloud-drive',
    },
  ],
  'Digital Trust': [
    {
      label: 'SSL certificates', title: 'GeoTrust SSL',
      body: 'Protect websites with trusted encryption and verified identity.',
      image: '/assets/images/product-intros/reference-9a75e56032c8.png',
      link: '/geotrust', fresh: true,
    },
    {
      label: 'Email trust', title: 'Secure DMARC',
      body: 'Stop domain spoofing with managed SPF, DKIM and DMARC.',
      image: '/assets/images/product-intros/reference-5728a592b032.png',
      link: '/secure-dmarc',
    },
  ],
  Security: [
    {
      label: 'Endpoint security', title: 'Advanced EDR',
      body: 'Detect, investigate and respond to advanced endpoint threats.',
      image: '/assets/images/hero-advanced-endpoint-security-edr.svg',
      link: '/advanced-endpoint-security-edr', fresh: true,
    },
    {
      label: 'SMB protection', title: 'Cyber Security Appliance',
      body: 'Cloud-managed firewall and threat protection for growing teams.',
      image: '/assets/images/hero-smb-cyber-security-appliance.png',
      link: '/smb-cyber-security-appliance', imagePosition: 'center 28%',
    },
  ],
  Software: [
    {
      label: 'Remote access', title: 'TSplus Remote Access',
      body: 'Deliver Windows applications and desktops securely from anywhere.',
      image: '/assets/images/menu-tsplus-remote-access.svg',
      link: '/tsplus-remote-access', fresh: true,
    },
    {
      label: 'Cloud analytics', title: 'Data Analytics',
      body: 'Turn operational data into clear, actionable business insight.',
      image: '/assets/images/menu-data-analytics.svg',
      link: '/data-analytics',
    },
  ],
  Solutions: [
    {
      label: 'Accounting cloud', title: 'CA Cloud',
      body: 'A complete cloud workspace for accounting and audit practices.',
      image: '/assets/images/menu-ca-cloud.svg',
      link: '/ca-cloud', fresh: true,
    },
    {
      label: 'Industry solution', title: 'Manufacturing',
      body: 'Production-ready cloud, security and continuity for manufacturers.',
      image: '/assets/images/product-intros/reference-b660d1a63828.jpg',
      link: '/manufacturing',
    },
  ],
  Insights: [
    {
      label: 'Expert guidance', title: 'Blogs',
      body: 'Practical cloud, security and infrastructure guidance from experts.',
      image: '/assets/images/menu-blogs.svg',
      link: '/insights', fresh: true,
    },
  ],
  Company: [
    {
      label: 'Talk to our team', title: 'Contact Us',
      body: 'Connect with our cloud and security specialists for expert help.',
      image: '/assets/images/contact-call.webp',
      link: '/contact', fresh: true,
    },
    {
      label: 'Meet XcellHost', title: 'Our Team · Our Story',
      body: 'Discover the people and journey behind XcellHost since 1999.',
      image: '/assets/images/menu-our-team.svg',
      link: '/company/our-team-our-story',
    },
  ],
};

/** Reference-site descriptions for combined or menu-only entries. */
const MENU_DESCRIPTIONS: Record<string, string> = {
  'Cloud Drive — File Share & Sync': 'Share and access files securely across multiple devices 🌐',
  'Managed Azure': 'Certified experts for tailored Microsoft Azure management 🌐',
  'Managed Google Cloud (GCP)': 'Certified experts for tailored Google Cloud management 🌟',
  'Managed Oracle Cloud': 'Expert management for Oracle Cloud infrastructure 🌐',
  'Managed Intune Services': 'Streamline, secure and improve device management 🔒',
  'IoT Certificates Management': 'Secure, scalable X.509 certificates for connected devices 🔐',
  'Device Attestation Certificates': 'Trusted device identity and Matter ecosystem support 💡',
  'Comodo Code Signing': 'Protect software integrity with trusted digital signatures 🔏',
  'Comodo EV Code Signing': 'Higher identity assurance that reduces download warnings 📝',
  'Sectigo Code Signing': 'Authenticate software and scripts with trusted signatures 🔐',
  'Sectigo EV Code Signing': 'Enhanced publisher verification for trusted downloads 🔒',
  'DigiCert Code Signing': 'Verify software authenticity with DigiCert signatures 🔐',
  'DigiCert EV Code Signing': 'High-assurance signing with verified publisher identity 🌟',
  'DigiCert S/MIME Class 1': 'Validate the certificate holder’s email address 📧',
  'DigiCert S/MIME (OV)': 'Stronger authentication of the certificate holder’s identity 💪',
  'Comodo Enterprise / Pro / Basic PA': 'Personal authentication certificates for secure identity 👤',
  'Continuous Threat Exposure (CTEM)': 'Find and fix vulnerabilities continuously and in real time 🔍',
  'Managed Detection & Response (MDR)': 'Continuous threat monitoring with rapid expert response 🔍',
  'Third-Party Risk Mgmt (TPRM)': 'Identify and manage risks across third-party relationships 🤝',
  'TSplus Remote Access': 'Secure remote access and web application delivery 🖥️',
  'TSplus Advanced Security': 'Protect remote servers against attacks and misuse 🛡️',
  'TSplus Remote Support': 'Secure attended and unattended remote assistance 🔧',
  'TSplus Server Monitoring': 'Monitor server health, availability and performance 📊',
  'Acronis Cyber Protect for Enterprise': 'Enterprise backup and cybersecurity in one solution 🔒',
  'Data Analytics': 'Insightful data analysis for informed decisions 📊',
  'Data Engineering': 'Optimized data infrastructure for efficient insights 🛠️',
  'Data Visualization': 'Turn complex data into clear visual insights 📊',
  'Data Warehouse': 'Centralized data storage for comprehensive analytics 🏢',
  'Data Governance': 'Maintain data integrity, security and compliance 🔒',
  'Data Modernization': 'Modernize data platforms for cloud-ready operations 🚀',
  'Speed Test · Looking Glass': 'Test network speed, latency and routing visibility 🌐',
  'DMARC Monitoring & Reporting': 'Real-time email authentication visibility and analytics 📊',
  'SPF · DKIM · DMARC · BIMI Tools': 'Configure and validate essential email trust records 🛠️',
  'MTA-STS · TLS-RPT Tools': 'Strengthen email transport security and reporting 🛡️',
  'CSR Generator / Decoder': 'Generate and decode certificate signing requests instantly 🔍',
  'SSL Checker / Converter': 'Check SSL installation and convert certificate formats 🌐',
  'Certificate Key Matcher': 'Match a certificate with its CSR and private key 🔑',
  'CAA Record Generator': 'Control which authorities can issue certificates for your domain 🏢',
  'Why No Padlock?': 'Find why a browser shows a Not Secure warning 🌐',
  'Higher Education · University Program': 'Technology and support designed for higher education 🎓',
  'Pharmaceutical': 'Technology solutions tailored to pharmaceutical operations 💊',
  'Construction': 'Cloud and digital solutions for construction businesses 🏗️',
  'Food & Beverage': 'Technology designed for food and beverage operations 💻',
  'Logistics': 'Reliable digital solutions for modern logistics operations 🚚',
  'OT Security': 'Protect operational technology systems from cyber threats 💻',
  'Blogs': 'Technology trends, practical guidance and expert perspectives 📝',
  'Case Studies': 'Explore customer challenges, solutions and measurable outcomes 🌟',
  'Whitepapers': 'In-depth research and guidance from industry specialists 📄',
  'Infographics': 'Understand complex technology through clear visual stories 📊',
  'Webinars': 'Learn from cloud and security experts in practical sessions 🎥',
  'Glossary': 'Plain-language definitions for cloud and security terms 📚',
  'SMB Catalog · Enterprise Catalog': 'Explore cloud services for growing and enterprise businesses 📚',
  'Acronis Cyber Protect Cloud': 'Explore integrated backup and cybersecurity solutions 📚',
  'Microsoft 365 · Tally on Cloud': 'Explore productivity and cloud accounting solutions 📚',
  'Bare Metal · GPU · Performance Cloud': 'Explore high-performance infrastructure options 📚',
  'Company Profile · Career Handbook': 'Learn about XcellHost, our culture and opportunities 📚',
  'State of Infrastructure': 'Insights into modern infrastructure priorities and change 📘',
  'State of Security': 'Insights into today’s threats, controls and security priorities 📘',
  'Unified Cyber Defense Platform': 'Learn how unified defense simplifies security operations 🛡️',
};
/**
 * Destinations for the Insights and Company menus. Add an entry here when the
 * matching page is built; until then the link renders inert.
 */
const CONTENT_LINKS: Record<string, string> = {
  'Acronis Advanced EDR SLA': '/acronis-advanced-edr-sla',
  'Acronis Advanced MDR SLA': '/acronis-advanced-mdr-sla',
  'Acronis Advanced XDR SLA': '/acronis-advanced-xdr-sla',
  'Acronis Backup Cloud SLA': '/acronis-backup-cloud-sla',
  'Acronis Disaster Recovery (DR) SLA': '/acronis-disaster-recovery-dr-sla',
  'Acronis Remote Monitoring and Management SLA': '/acronis-remote-monitoring-management-rmm-sla',
  'Email Backup for Microsoft 365 SLA': '/email-backup-for-microsoft-365-sla',
  'File Cloud SLA': '/file-cloud-sla',
  'SMB Catalog · Enterprise Catalog': 'https://flipbooks.officeinfra.com/books/SMB-Cloud-Services/',
  'Acronis Cyber Protect Cloud': 'https://flipbooks.officeinfra.com/books/Acronis-Cyber-Protect-Cloud-compressed/',
  'Microsoft 365 · Tally on Cloud': 'https://flipbooks.officeinfra.com/books/Microsoft-365-Platfrom/',
  'Bare Metal · GPU · Performance Cloud': 'https://flipbooks.officeinfra.com/books/guzk/',
  'Company Profile · Career Handbook': 'https://flipbooks.officeinfra.com/books/Career-Handbook-MRmA/',
  'Blogs': '/insights',
  'Blog': '/insights',
  'Insights': '/insights',
  'Whitepapers': '/insights',
  'Case Studies': '/insights',
  'Customer Stories': '/company/customer-stories',
  'About XcellHost': '/about',
  'About Us': '/about',
  'Why XcellHost': '/company/why-xcellhost',
  'Our Team · Our Story': '/company/our-team-our-story',
  'Certifications & Awards': '/company/certifications-awards',
  'Data Centers (Global)': '/company/data-centers-global',
  'Vendor Partners': '/company/vendor-partners',
  'Contact Us': '/contact',
  'Contact': '/contact',
  'Partner Signup ': '/company/partner-signup',
  'Partnership Models': '/company/partnership-models',
  'Resources & Services': '/company/resources-services',
  'Partner Advancement': '/company/partner-advancement',
  'Partner Portal': '/company/partner-portal',
  'Partner Guide': '/company/partner-guide',
  'Affiliate Program': '/company/affiliate-program',
  'Career Handbook': '/company/career-handbook',
  'Apply For Job': '/company/apply-for-job',
  'Customer Support': '/company/support-overview',
  'Submit a Ticket': '/company/submit-a-ticket',
  'Knowledge Base': '/company/knowledge-base',
  'Remote Assist': '/company/remote-assist',
  'Privacy Policy': '/company/privacy-policy',
  'Terms of Services': '/company/terms-of-service',
  'Refund Policy': '/company/refund-policy',
  'Pricing': '/pricing',
};

interface NavTopVm {
  label: string;
  link: string;
  megaId: string;
  tabs: NavTabVm[];
  feature: NavFeatureVm;
  featureCards: readonly NavFeatureCardVm[];
}

/** Preferred order for the five Solutions views in the mega-menu sidebar. */
const SOLUTION_TAB_ORDER = [
  'By Industry',
  'By Use Case',
  'By Capability',
  'By Vendors',
  'By Technology',
] as const;

function solutionTabRank(label: string): number {
  const rank = SOLUTION_TAB_ORDER.indexOf(label as (typeof SOLUTION_TAB_ORDER)[number]);
  return rank === -1 ? SOLUTION_TAB_ORDER.length : rank;
}

/**
 * The sticky site header: logo, the eight mega menus built from `MEGA_MENU`,
 * the search trigger, the hamburger + mobile nav, and the login / trial CTAs.
 *
 * Panel behaviour mirrors the original: clicking a top-level label toggles its
 * panel (and navigates), hovering a label closes any other open one, and a
 * click outside `nav.main` or any scroll closes everything.
 */
@Component({
  selector: 'xh-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private readonly doc = inject(DOCUMENT);
  private readonly catalog = inject(CatalogService);
  private readonly destroyRef = inject(DestroyRef);
  readonly overlay = inject(OverlayService);
  readonly cart = inject(CartService);

  /** The whole menu, pre-resolved once: no per-render slug lookups. */
  readonly tops: NavTopVm[] = MEGA_MENU.map((top) => ({
    label: top.label,
    link: DIRECT_LINKS[top.label] ?? `/category/${slugify(top.label)}`,
    megaId: `mega-${slugify(top.label)}`,
    feature: MENU_FEATURES[top.label],
    featureCards: MENU_FEATURE_CARDS[top.label] ?? [],
    tabs: (top.label === 'Solutions'
      ? [...top.tabs].sort((a, b) => solutionTabRank(a.label) - solutionTabRank(b.label))
      : top.tabs)
      .map((tab) => ({
      g: tab.g,
      label: tab.label,
      groups: tab.groups.map((group) => ({
        heading: group.heading,
        items: group.items.map((item) => ({
          title: item.title,
          iconPath: menuIconPath(
            item.title,
            `${top.label}-${tab.g}-${group.heading ?? ''}-${item.title}`,
          ),
          pill: item.pill,
          pillClass: menuPillClass(item.pill),
          desc: this.menuDescription(item.title, item.desc),
          link: this.serviceLink(item.title, top.label, item.href),
          external: this.serviceLink(item.title, top.label, item.href)?.startsWith('http') ?? false,
        })),
      })),
      })),
  }));

  /** Which top-level panel is open, if any. */
  readonly openTop = signal<string | null>(null);

  /** Keeps hover/focus CSS from reopening a menu immediately after navigation. */
  readonly menuSuppressed = signal(false);

  /** Active tab per top-level menu, seeded from the `on` flag in the data. */
  private readonly tabs = signal<Record<string, string>>(
    Object.fromEntries(
      MEGA_MENU.map((top) => {
        const visibleTabs = top.label === 'Solutions'
          ? [...top.tabs].sort((a, b) => solutionTabRank(a.label) - solutionTabRank(b.label))
          : top.tabs;
        const defaultTab = top.label === 'Solutions'
          ? visibleTabs.find((tab) => tab.label === 'By Vendors')
          : visibleTabs.find((tab) => tab.on);
        return [top.label, (defaultTab ?? visibleTabs[0]).g];
      }),
    ),
  );

  readonly mobileOpen = computed(() => this.overlay.isOpen('mobileNav'));

  constructor() {
    const win = this.doc.defaultView;
    if (win) {
      const onScroll = () => {
        if (this.openTop() !== null) this.openTop.set(null);
      };
      const onDocClick = (e: Event) => {
        const t = e.target;
        if (t instanceof Element && !t.closest('.xh-main-nav')) this.openTop.set(null);
      };
      win.addEventListener('scroll', onScroll, { passive: true });
      this.doc.addEventListener('click', onDocClick);
      this.destroyRef.onDestroy(() => {
        win.removeEventListener('scroll', onScroll);
        this.doc.removeEventListener('click', onDocClick);
      });
    }

    // the original scroll lock for the mobile sheet is a body class, not a style
    effect(() => {
      this.doc.body.classList.toggle('mnav-lock', this.mobileOpen());
    });
    this.destroyRef.onDestroy(() => this.doc.body.classList.remove('mnav-lock'));
  }

  isOn(label: string, g: string): boolean {
    return this.tabs()[label] === g;
  }

  setTab(label: string, g: string): void {
    if (this.tabs()[label] === g) return;
    this.tabs.update((m) => ({ ...m, [label]: g }));
  }

  onTabClick(event: Event, label: string, g: string): void {
    event.preventDefault();
    this.setTab(label, g);
  }

  /** Clicking a label toggles its panel; the routerLink still navigates. */
  toggleTop(label: string): void {
    this.menuSuppressed.set(false);
    this.openTop.update((cur) => (cur === label ? null : label));
  }

  /** Hovering one menu closes any other that was clicked open. */
  onTopEnter(label: string, event: MouseEvent): void {
    const hoveredMenu = event.currentTarget;
    const focused = this.doc.activeElement;

    // A focused button in the previous menu keeps its `:focus-within` panel
    // visible underneath the newly hovered menu. Release that stale focus so
    // only one mega menu can be displayed at a time.
    if (
      hoveredMenu instanceof HTMLElement &&
      focused instanceof HTMLElement &&
      !hoveredMenu.contains(focused)
    ) {
      focused.blur();
    }

    if (this.openTop() !== label) this.openTop.set(null);
  }

  releaseMenuSuppression(): void {
    this.menuSuppressed.set(false);
  }

  /** Following a menu link dismisses whatever was covering the page. */
  onNavigate(): void {
    this.openTop.set(null);
    this.menuSuppressed.set(true);
    const active = this.doc.activeElement;
    if (active instanceof HTMLElement) active.blur();
    this.overlay.close('mobileNav');
  }

  toggleMobile(): void {
    if (this.mobileOpen()) this.overlay.close('mobileNav');
    else {
      this.openTop.set(null);
      this.overlay.open('mobileNav');
    }
  }

  openSearch(): void {
    this.overlay.open('search');
  }

  openLayer(event: Event, id: 'auth' | 'trial'): void {
    event.preventDefault();
    this.overlay.open(id);
  }

  /**
   * Where a menu link goes.
   *
   * Service menus resolve to a service page, preferring the directory's
   * spelling so the slug matches. The Insights and Company menus list editorial
   * and corporate pages that do not exist yet — the original site left those as
   * inert `href="#"`, so anything without a known destination stays inert
   * rather than routing to a page that would 404.
   */
  private serviceLink(title: string, menu: string, explicitLink?: string): string | null {
    if (explicitLink) return explicitLink;
    if (CONTENT_LINKS[title]) return CONTENT_LINKS[title];
    if (menu === 'Insights' || menu === 'Company') return CONTENT_LINKS[title] ?? null;
    const entry = this.catalog.findInDirectory(title);
    const slug = slugify(entry ? entry.name : title);
    return this.catalog.entryBySlug(slug) ? `/${slug}` : null;
  }

  /** Every visible menu card gets concise supporting copy. */
  private menuDescription(title: string, description: string | null): string {
    const resolved = description ?? (
      this.catalog.findInDirectory(title)?.desc ??
      MENU_DESCRIPTIONS[title] ??
      `Explore ${title} services, features and solutions.`
    );
    return resolved.replace(/\s*[\p{Extended_Pictographic}\uFE0F\u200D]+$/gu, '').trim();
  }
}
