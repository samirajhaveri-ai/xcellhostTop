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
import { CatalogService, slugify } from '../core/catalog.service';
import { OverlayService } from '../core/overlay.service';
import { MEGA_MENU } from '../data/nav.data';

/** Pills the original rendered in the blue variant (`class="pill b"`). */
const BLUE_PILLS = new Set(['1-yr free ext.', 'Soon']);

/** Top-level labels that go straight to a page instead of a category listing. */
const DIRECT_LINKS: Record<string, string> = {
  Insights: '/insights',
  Company: '/about',
};

interface NavItemVm {
  title: string;
  pill: string | null;
  pillClass: string;
  desc: string | null;
  link: string | null;
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

  /** The whole menu, pre-resolved once: no per-render slug lookups. */
  readonly tops: NavTopVm[] = MEGA_MENU.map((top) => ({
    label: top.label,
    link: DIRECT_LINKS[top.label] ?? `/category/${slugify(top.label)}`,
    megaId: `mega-${slugify(top.label)}`,
    feature: MENU_FEATURES[top.label],
    tabs: top.tabs.map((tab) => ({
      g: tab.g,
      label: tab.label,
      groups: tab.groups.map((group) => ({
        heading: group.heading,
        items: group.items.map((item) => ({
          title: item.title,
          pill: item.pill,
          pillClass: item.pill && BLUE_PILLS.has(item.pill) ? 'pill b' : 'pill',
          desc: this.menuDescription(item.title, item.desc),
          link: this.serviceLink(item.title, top.label),
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
      MEGA_MENU.map((top) => [top.label, (top.tabs.find((t) => t.on) ?? top.tabs[0]).g]),
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
  onTopEnter(label: string): void {
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
  private serviceLink(title: string, menu: string): string | null {
    if (menu === 'Insights' || menu === 'Company') return CONTENT_LINKS[title] ?? null;
    const entry = this.catalog.findInDirectory(title);
    const slug = slugify(entry ? entry.name : title);
    return this.catalog.entryBySlug(slug) ? `/${slug}` : null;
  }

  /** Every visible menu card gets concise supporting copy. */
  private menuDescription(title: string, description: string | null): string {
    if (description) return description;
    return (
      this.catalog.findInDirectory(title)?.desc ??
      MENU_DESCRIPTIONS[title] ??
      `Explore ${title} services, features and solutions.`
    );
  }
}
