import { Injectable, inject } from '@angular/core';
import { CatalogService } from './catalog.service';
import {
  CATEGORY_BENEFITS, CATEGORY_BLOG, CATEGORY_FAQ_BASE, CATEGORY_FAQ_EXTRA,
  CATEGORY_MOCK, CATEGORY_REVIEWS, CATEGORY_STEPS,
  CATEGORY_WHY, WHY_ICONS,
} from '../data/category.data';
import {
  SEC_EXTRA, SEC_OPENERS, SEC_OVERRIDE, SEC_POOL, SecuritySection,
  USE_FRAMES, USE_ICONS, USE_OVERRIDE, USE_POOL,
} from '../data/usecases.data';
import { CATEGORY_FAQS, CATEGORY_FEATURES, FEATURE_ICONS } from '../data/services.data';
import {
  DEEP_CONTENT,
  PRODUCT_INFOSHEETS,
  PRODUCT_VIDEOS,
  RICH_PRODUCTS,
  SERVICE_INDEX_URL,
} from '../data/products.data';
import { EDR_COMPARE, EDR_PRODUCTS, EDR_TIMELINE, HERO_SCENES } from '../data/site.data';
import { BlogCard, Category, Faq, IconItem, Pair, RichProduct } from '../data/models';

/** What the caller knows before the page is built. */
export interface ProductRequest {
  name: string;
  tag?: string;
  crumb?: string;
  cat?: Category;
  badge?: string;
  price?: string;
}

export interface PricingPlan {
  term: string;
  amount: string;
  unit: string;
  tag?: string;
  ribbon?: string;
  badge?: string;
  hot?: boolean;
  /** value written into the cart */
  cartName: string;
  cartPrice: string;
  quoteOnly?: boolean;
}

/** Everything the product page template needs. Nothing is computed in the view. */
export interface ProductView {
  name: string;
  crumb: string;
  cat: Category;
  tagline: string;
  heroHighlight: string | null;
  chips: { label: string; kind: 'badge' | 'price' | 'plain' }[];
  overview: string;
  features: { icon: string; title: string; body: string }[];
  benefits: IconItem[];
  benefitGrid: { title: string; body?: string; icon?: string; image?: string }[];
  uses: IconItem[];
  security: { head: string; intro: string; rows: Pair[] };
  honest: string | null;
  steps: Pair[];
  mock: string[];
  why: { icon: string; title: string; body: string }[];
  reviews: { initials: string; name: string; role: string; stars: number; quote: string }[];
  faqs: Faq[];
  blogs: BlogCard[];
  plans: PricingPlan[];
  packages: { icon: string; title: string; image: string | null }[];
  videos: string[];
  videoLabels: string[];
  infosheetUrl: string;
  heroScene: string | null;
  heroImage: string | null;
  heroMessages: string[];
  heroPoints: string[];
  offerSection: {
    title: string;
    subtitle: string;
    lead: string;
    priceImage: string;
    offersImage: string;
  } | null;
  featureSpotlight: {
    title: string;
    body: string;
    image: string;
  } | null;
  featureDetail: {
    title: string;
    bullets: string[];
    image: string;
  } | null;
  frameworkSection: {
    title: string;
    subtitle: string;
    image: string;
    secondaryImage?: string;
    tertiaryImage?: string;
  } | null;
  advancedSection: {
    title: string;
    tagline: string;
    body: string;
    image: string;
    secondaryImage?: string;
    tertiaryImage?: string;
  } | null;
  poweredBy: string | null;
  poweredMark: string | null;
  activeProtection: { title: string; body: string } | null;
  platforms: string[];
  edr: { timeline: [string, string][]; compare: { cols: string[]; rows: string[][] } } | null;
}

/* ---------------------------------------------------------------- seeding */
/** djb2 — the original site's hash, kept so pages render identically. */
function hash(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/** Seeded Fisher–Yates, matching the original LCG. */
function pick<T>(pool: T[], seed: number, n: number): T[] {
  const a = pool.slice();
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

const PLAN_DISCOUNTS = [
  { term: '1 Year', factor: 1, tag: '', badge: '', hot: false },
  { term: '2 Years', factor: 0.9, tag: 'SAVE 10%', badge: 'Most Popular', hot: true },
  { term: '3 Years', factor: 0.8, tag: 'SAVE 20%', badge: '', hot: false },
];

/** Product-specific commercial offers that must not affect the generic pricing ladder. */
const PRODUCT_PLAN_OVERRIDES: Record<string, PricingPlan[]> = {
  'WhatsApp SMB': [
    {
      term: 'Starter',
      amount: '₹1,249',
      unit: '/month, billed annually',
      tag: '1 user · 30,000 contacts',
      cartName: 'WhatsApp SMB — Starter Plan',
      cartPrice: '₹1,249/month',
    },
    {
      term: 'Growth',
      amount: '₹1,499',
      unit: '/month, billed annually',
      tag: '3 users · Team inbox · Basic chatbot',
      badge: 'Popular',
      hot: true,
      cartName: 'WhatsApp SMB — Growth Plan',
      cartPrice: '₹1,499/month',
    },
    {
      term: 'Advanced',
      amount: '₹4,999',
      unit: '/month, billed annually',
      tag: '5 users · Advanced chatbots · Sequences',
      cartName: 'WhatsApp SMB — Advanced Plan',
      cartPrice: '₹4,999/month',
    },
    {
      term: 'Enterprise',
      amount: '₹14,999',
      unit: '/month, billed annually',
      tag: '10 users · Assignment · IP controls',
      cartName: 'WhatsApp SMB — Enterprise Plan',
      cartPrice: '₹14,999/month',
    },
  ],
  'Remote Monitoring & Mgmt (RMM)': [
    {
      term: '1 Year',
      amount: '₹1,199',
      unit: '/user/year',
      tag: '3 Months Free*',
      ribbon: 'Special Offer',
      cartName: 'Acronis RMM — 1 Year Contract',
      cartPrice: '₹1,199/user/year',
    },
    {
      term: '2 Years',
      amount: '₹1,199',
      unit: '/user/year',
      tag: '6 Months Free*',
      ribbon: 'Special Offer',
      hot: true,
      cartName: 'Acronis RMM — 2 Year Contract',
      cartPrice: '₹1,199/user/year',
    },
    {
      term: '3 Years',
      amount: '₹1,199',
      unit: '/user/year',
      tag: '12 Months Free*',
      ribbon: 'Special Offer',
      cartName: 'Acronis RMM — 3 Year Contract',
      cartPrice: '₹1,199/user/year',
    },
  ],
  'Advanced Endpoint Security (EDR)': [
    {
      term: '1 Year',
      amount: '₹999',
      unit: '/user/year',
      tag: 'Get 3 Months Free',
      ribbon: 'Special Offer',
      cartName: 'Advanced Endpoint Security (EDR) — 1 Year Plan',
      cartPrice: '₹999/user/year',
    },
    {
      term: '2 Years',
      amount: '₹999',
      unit: '/user/year',
      tag: 'Get 6 Months Free',
      ribbon: 'Special Offer',
      hot: true,
      cartName: 'Advanced Endpoint Security (EDR) — 2 Years Plan',
      cartPrice: '₹999/user/year',
    },
    {
      term: '3 Years',
      amount: '₹999',
      unit: '/user/year',
      tag: 'Get 12 Months Free',
      ribbon: 'Special Offer',
      cartName: 'Advanced Endpoint Security (EDR) — 3 Years Plan',
      cartPrice: '₹999/user/year',
    },
  ],
  'SMB Cyber Security Appliance': [
    {
      term: '1 Year',
      amount: '₹24,999',
      unit: 'up to 24 users',
      tag: '25–50 users: ₹29,999',
      cartName: 'SMB Cyber Security Appliance — 1 Year Plan',
      cartPrice: '₹24,999/year',
    },
    {
      term: '2 Years',
      amount: '₹43,999',
      unit: 'up to 24 users',
      tag: '25–50 users: ₹53,999 · Save 12%',
      badge: 'Most Popular',
      hot: true,
      cartName: 'SMB Cyber Security Appliance — 2 Year Plan',
      cartPrice: '₹43,999/2 years',
    },
    {
      term: '3 Years',
      amount: '₹61,499',
      unit: 'up to 24 users',
      tag: '25–50 users: ₹73,999 · Save 18%',
      cartName: 'SMB Cyber Security Appliance — 3 Year Plan',
      cartPrice: '₹61,499/3 years',
    },
  ],
};

/** Screenshot-supplied capabilities shown only on the Advanced EDR product page. */
const EDR_TOP_FEATURES: ProductView['features'] = [
  { icon: '🧠', title: 'Behavior-based threat detection', body: 'Detects unknown threats using behavioral analysis' },
  { icon: '🔒', title: 'Anti-ransomware with rollback', body: 'Restores affected files instantly after attack' },
  { icon: '✳️', title: 'Exploit prevention', body: 'Blocks zero-day and fileless attacks' },
  { icon: '🌐', title: 'URL filtering & web protection', body: 'Prevents access to malicious websites' },
  { icon: '💾', title: 'Device control', body: 'Controls USB and removable media usage' },
  { icon: '🎯', title: 'Real-time threat intelligence feed', body: 'Constant updates on emerging threats' },
  { icon: '👁️', title: 'Continuous endpoint monitoring', body: 'Tracks all activities on endpoints' },
  { icon: '🧳', title: 'Forensic data collection', body: 'Captures detailed attack evidence' },
  { icon: '📋', title: 'Event monitoring & logging', body: 'Deep visibility into system events' },
  { icon: '🔗', title: 'Automated event correlation', body: 'Links related events into one incident view' },
  { icon: '🧬', title: 'AI-based attack analysis', body: 'Guided interpretation simplifies investigation' },
  { icon: '🗺️', title: 'MITRE ATT&CK mapping & visualization', body: 'Visual attack chain tracking' },
  { icon: '🔔', title: 'Prioritized incident alerts', body: 'Reduces alert fatigue with smart prioritization' },
  { icon: '🔎', title: 'Threat hunting capabilities', body: 'IoC search to find indicators of compromise' },
  { icon: '⚡', title: 'Single-click response actions', body: 'Fast containment and mitigation' },
  { icon: '🚫', title: 'Endpoint isolation & quarantine', body: 'Stops lateral movement instantly' },
  { icon: '↩️', title: 'Attack-specific rollback & remediation', body: 'Reverts malicious changes' },
  { icon: '🖥️', title: 'Full system reimaging & recovery', body: 'Restores compromised systems completely' },
  { icon: '☁️', title: 'Integrated backup & disaster recovery', body: 'Ensures rapid business recovery and data resilience' },
  { icon: '🛡️', title: 'Unified cyber protection platform', body: 'Combines backup, security, and EDR in one solution' },
];

/** Security capabilities supplied for the Tally on Cloud feature section. */
const TALLY_SECURITY_FEATURES: ProductView['features'] = [
  { icon: '🏅', title: 'Secure Infrastructure', body: 'ISO 27001 Certified, Multi-Tier Security Infrastructure. Hosting in Tier 4 Datacenters' },
  { icon: '🛡️', title: 'Virtual Firewall', body: 'Next-generation firewalls combine application awareness and deep packet inspection to give companies more control.' },
  { icon: '☁️', title: 'Encrypted Backup', body: 'We take a backup every 8 hours, and the backup is encrypted and ransomware-proof.' },
  { icon: '🔐', title: 'Encrypted Tally Data', body: 'Your Tally data is secured on our servers, with access limited to authorised users.' },
  { icon: '⚙️', title: 'Cloud Endpoint Security', body: 'Block cyber threats before they compromise your system through traffic-filtering capabilities.' },
  { icon: '🧱', title: 'Multi-Layer Security', body: 'Enhanced anti-DDoS protection and multiple ISO/IEC certifications cover security and business continuity.' },
  { icon: '🔒', title: 'SSL VPN', body: 'SSL VPN lets remote users securely access web applications, client-server apps and internal network utilities.' },
  { icon: '🌐', title: 'Site To Site VPN', body: 'IPsec creates an encrypted tunnel from a customer network to the customer’s remote site.' },
];

/** Tally-specific replacement for the generic category benefits. */
const TALLY_WHY_CHOOSE: IconItem[] = [
  ['🌍', 'Access from Anywhere', 'Access from office, branch and home, free of any location restrictions.'],
  ['🧑‍💻', 'Access Anytime', '99.995% uptime backed by a guaranteed SLA.'],
  ['🖥️', 'Any Device', 'Access from Windows, Mac, Linux and iOS devices, anytime and anywhere.'],
  ['🚀', 'Surprisingly Lightweight', 'Highly optimised Tally Cloud for better remote performance with low internet bandwidth requirements.'],
  ['🎛️', 'Pleasantly User-friendly', 'Simple user access with a dedicated client portal, browser access and an intuitive interface.'],
  ['🛡️', 'Super Secured', 'High-speed MySQL storage and layered protection reduce malicious threats entering your system.'],
  ['⚙️', 'Seamlessly Scalable', 'Automated performance mapping supports optimum resource management as your Tally usage grows.'],
  ['📊', 'Real-Time Data', 'Work on centrally managed data from multiple locations with one Tally licence.'],
  ['🧩', 'Customization Support', 'One-click application support for Tally customisation (TDL).'],
  ['🖨️', 'Local Printers', 'Print from one location to another with centralised printer installation.'],
  ['💾', 'Local Backup', 'Automated backups are also stored on local backup devices for additional assurance.'],
  ['📶', 'Incredible Bandwidth', 'Fast internet connectivity helps prevent Tally ERP slowdowns.'],
  ['🔄', 'Data Synchronization', 'Synchronise data across multiple devices while your ERP is hosted in the cloud.'],
  ['🆓', 'No Maintenance Cost', 'No server-maintenance expense—XcellHost manages the cloud-based Tally environment.'],
];

const SMB_CYBER_HERO_POINTS = [
  'Secure Business Wi-Fi',
  'Advanced Firewall',
  'Secure Web Gateway',
  'Smart Controls & Policies',
  'Insights & Visibility',
  'Easy to Deploy & Manage',
];

const SMB_CYBER_BENEFITS: IconItem[] = [
  ['🛡️', 'Multi-Layer Protection', 'Defend against phishing, malware, ransomware and other cyber threats.'],
  ['📉', 'Reduced Cyber Risk', 'Proactive threat detection and filtering help keep business data safe.'],
  ['🌐', 'Safe Browsing for Users', 'Provide a safer, more productive internet experience for every user.'],
  ['📈', 'Scalable for Any Environment', 'Support office, remote, multi-site and growing business environments.'],
  ['⚡', 'Boost Productivity', 'Improve internet performance and reduce avoidable downtime for your team.'],
  ['💰', 'Lower Total Cost', 'Replace multiple tools with one right-sized security and network platform.'],
  ['📋', 'Stay Compliant', 'Support regulatory and data-protection requirements with policies and reporting.'],
  ['☁️', 'Built to Scale', 'Add users and sites easily as the business grows.'],
];

@Injectable({ providedIn: 'root' })
export class ProductPageService {
  private catalog = inject(CatalogService);

  build(req: ProductRequest): ProductView {
    const name = req.name.trim();
    const rich = this.catalog.rich(name);
    const dirEntry = this.catalog.findInDirectory(name);
    const cat: Category = req.cat ?? (dirEntry?.cat as Category) ?? 'Cloud';
    const tag = req.tag ?? dirEntry?.desc ?? '';
    const deep = DEEP_CONTENT[name];
    const product: RichProduct | undefined = RICH_PRODUCTS[name];
    const seed = hash(name);
    const heroTagline =
      name === 'Advanced Endpoint Security (EDR)'
        ? 'Monitors endpoints continuously'
        : name === 'Tally on Cloud'
          ? 'Run Tally On Cloud 24/7 - Safety & Data Security Guranteed !!!'
          : name === 'SMB Cyber Security Appliance'
            ? 'Allow organizations to manage complex defenses through a unified interface.'
            : product?.tagline || tag || `${name} from XcellHost`;
    const heroHighlight =
      name === 'Advanced Endpoint Security (EDR)'
        ? 'Quickly experience the power of Acronis EDR and see how easy it is to analyze attacks'
        : name === 'Tally on Cloud'
          ? 'Your Business runs on Tally, Make your Tally run on our Cloud'
          : name === 'SMB Cyber Security Appliance'
            ? 'Next-Generation Cyber Security for SMB Infrastructure.'
            : name === 'Remote Monitoring & Mgmt (RMM)'
              ? null
              : product?.highlight || rich?.f?.[0]?.[1] || tag || null;
    const heroMessages =
      name === 'Advanced Endpoint Security (EDR)'
        ? ['Behavioral analysis', 'Threat hunting', 'Real-time isolation', 'Root-cause analysis']
        : name === 'Tally on Cloud'
          ? [
              'Every 8 Hours Backups and Highly Secured Financial Data',
              'Ultra-fast Flash NVMe AMD EPYC Servers',
              'Easy Management and security thanks to control panel',
            ]
          : name === 'SMB Cyber Security Appliance'
            ? [
                'Protect Data, Devices, and Business Operations Securely',
                'Affordable Cyber Security Appliance for Modern SMBs',
                'Unified Security Gateway for Small Business Protection!',
              ]
            : dirEntry?.heroMessages?.length
              ? dirEntry.heroMessages
              : rich?.f?.length
                ? rich.f.slice(0, 4).map(([title]) => title)
                : product?.heroPoints?.length
                  ? product.heroPoints
                  : deep?.heroPoints?.length
                    ? deep.heroPoints
                    : [tag || `${name} services from XcellHost`];

    /* -------- chips -------- */
    const chips: ProductView['chips'] = [];
    if (req.badge) chips.push({ label: req.badge, kind: 'badge' });
    const priceStr = rich?.price || req.price || (/from\s*(₹[\d,]+[^\s—]*)/i.exec(tag) || [])[1] || '';
    if (priceStr) chips.push({ label: `from ${priceStr}`, kind: 'price' });

    /* -------- overview + features -------- */
    const overview =
      name === 'Remote Monitoring & Mgmt (RMM)'
        ? 'Acronis RMM software helps Customer deliver better IT management. Deploy high-performance and secure remote desktop and assistance at no additional cost.'
        : rich?.ov ||
          `${name} from XcellHost. ${tag} Delivered from Indian Tier-4 datacenters, ` +
            `monitored around the clock, and backed by engineers who answer the phone.`;

    const featSrc: Pair[] = rich?.f ?? CATEGORY_FEATURES[cat] ?? CATEGORY_FEATURES['Cloud'];
    const features =
      name === 'Advanced Endpoint Security (EDR)'
        ? EDR_TOP_FEATURES.map((feature) => ({ ...feature }))
        : name === 'Tally on Cloud'
          ? TALLY_SECURITY_FEATURES.map((feature) => ({ ...feature }))
        : featSrc.map((f, i) => ({
            icon: FEATURE_ICONS[i % FEATURE_ICONS.length],
            title: f[0],
            body: f[1],
          }));

    /* -------- use cases (the __ppPersonalise pipeline) -------- */
    let uses: IconItem[];
    if (deep) {
      uses = deep.uses;
    } else if (USE_OVERRIDE[name]) {
      uses = USE_OVERRIDE[name];
    } else {
      /*
       * Only the product's OWN features seed its use cases. Falling back to
       * CATEGORY_FEATURES here would give every service in a category the same
       * first four use cases; the name-interpolated frames below are what make
       * a service without bespoke copy still read as its own page.
       */
      const fromFeatures: IconItem[] = (rich?.f ?? []).map(
        (f, i) => [USE_ICONS[(seed + i) % USE_ICONS.length], f[0], f[1]] as IconItem
      );
      const out = fromFeatures.slice(0, 8);
      let fi = seed % USE_FRAMES.length;
      while (out.length < 8) {
        const fr = USE_FRAMES[fi % USE_FRAMES.length];
        out.push([fr[0], fr[1].replace(/\{name\}/g, name), fr[2].replace(/\{name\}/g, name)]);
        fi++;
      }
      /* the frame loop above always reaches 8, but keep the pool as the
         backstop for a category whose frames are ever trimmed */
      const shortfall = Math.max(0, 8 - out.length);
      uses = (shortfall ? out.concat(pick(USE_POOL[cat] ?? [], seed, shortfall)) : out).slice(0, 8);
    }

    /* -------- security section -------- */
    let security: ProductView['security'];
    if (deep) {
      security = { head: `Security & compliance — ${name}`, intro: deep.sec[0], rows: deep.sec[1] };
    } else {
      const ovr: SecuritySection | undefined = SEC_OVERRIDE[name];
      if (ovr) {
        security = { head: `Security & compliance — ${name}`, intro: ovr[0], rows: ovr[1] };
      } else {
        const poolCat = SEC_POOL[cat] ?? SEC_POOL['Cloud'];
        const chosen = poolCat[seed % poolCat.length];
        const opener = SEC_OPENERS[seed % SEC_OPENERS.length].replace(/\{name\}/g, name);
        const extra = SEC_EXTRA[(seed >> 3) % SEC_EXTRA.length];
        security = {
          head: `Security & compliance — ${name}`,
          intro: opener + chosen[0],
          rows: chosen[1].concat(extra),
        };
      }
    }

    /* -------- FAQs: rich + category, deduped, capped at 8 -------- */
    let faqs: Faq[];
    if (product) {
      faqs = product.faqs;
    } else if (deep) {
      faqs = deep.faq;
    } else if (dirEntry?.faqs) {
      faqs = dirEntry.faqs;
    } else {
      const merged = [
        ...(rich?.q ?? CATEGORY_FAQS[cat] ?? []),
        ...(CATEGORY_FAQ_BASE[cat] ?? []),
        ...(CATEGORY_FAQ_EXTRA[cat] ?? []),
      ];
      const seen = new Set<string>();
      faqs = merged.filter((f) => {
        const k = f[0].toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      }).slice(0, 8);
    }

    /* -------- pricing ladder -------- */
    const plans: PricingPlan[] = (PRODUCT_PLAN_OVERRIDES[name] ?? []).map((plan) => ({ ...plan }));
    const money = /₹\s*([\d,]+)/.exec(priceStr);
    if (!plans.length && money) {
      const base = parseInt(money[1].replace(/,/g, ''), 10);
      const unit = priceStr.slice(priceStr.indexOf(money[0]) + money[0].length).trim() || '/mo';
      for (const d of PLAN_DISCOUNTS) {
        const amt = Math.round(base * d.factor);
        const formatted = '₹' + amt.toLocaleString('en-IN');
        plans.push({
          term: d.term,
          amount: formatted,
          unit,
          tag: d.tag || undefined,
          badge: d.badge || undefined,
          hot: d.hot,
          cartName: `${name} — ${d.term} Plan`,
          cartPrice: formatted + unit,
        });
      }
    } else if (!plans.length) {
      ['1 Year', '2 Years', '3 Years'].forEach((term, i) => {
        plans.push({
          term,
          amount: 'Custom quote',
          unit: '',
          badge: i === 1 ? 'BEST VALUE' : undefined,
          hot: i === 1,
          quoteOnly: true,
          cartName: `${name} — ${term} Plan`,
          cartPrice: 'Custom quote',
        });
      });
    }

    /* -------- videos -------- */
    const videos = rich?.v ?? PRODUCT_VIDEOS[name] ?? ['', ''];

    /* -------- hero scene -------- */
    const heroScene = product ? null : HERO_SCENES[sceneKey(name, cat)] ?? null;

    /* -------- reviews -------- */
    const reviews = product
      ? product.reviews.map((r) => ({
          initials: r[0], name: r[1], role: r[2], stars: parseFloat(r[3]) || 5, quote: r[4],
        }))
      : (CATEGORY_REVIEWS[cat] ?? []).map((r) => ({
          initials: r[0], name: r[1], role: r[2], stars: 5, quote: r[3],
        }));

    return {
      name,
      crumb: 'Home › ' + (req.crumb || (dirEntry ? `${dirEntry.cat} › ${dirEntry.group}` : 'Services')),
      cat,
      tagline: heroTagline,
      heroHighlight,
      chips,
      overview,
      features,
      benefits:
        name === 'Tally on Cloud'
          ? TALLY_WHY_CHOOSE
          : name === 'SMB Cyber Security Appliance'
            ? SMB_CYBER_BENEFITS
            : CATEGORY_BENEFITS[cat] ?? [],
      benefitGrid: dirEntry?.benefitGrid ?? [],
      uses,
      security,
      honest: deep?.not_for ?? null,
      steps: CATEGORY_STEPS[cat] ?? [],
      mock: CATEGORY_MOCK[cat] ?? [],
      why: (CATEGORY_WHY[cat] ?? []).map((w, i) => ({
        icon: WHY_ICONS[i % WHY_ICONS.length], title: w[0], body: w[1],
      })),
      reviews,
      faqs,
      blogs: product ? product.blogs : CATEGORY_BLOG[cat] ?? [],
      plans,
      packages: (product?.packages ?? []).map((item, i) => ({
        icon: item[0],
        title: item[1],
        image: product?.packageImages?.[i] ?? null,
      })),
      videos,
      videoLabels: product?.videoLabels ?? ['Product Intro', 'Use Cases'],
      infosheetUrl: PRODUCT_INFOSHEETS[name] ?? SERVICE_INDEX_URL,
      heroScene,
      heroImage: product?.heroImage ?? dirEntry?.heroImage ?? null,
      heroMessages,
      heroPoints:
        name === 'SMB Cyber Security Appliance'
          ? SMB_CYBER_HERO_POINTS
          : product?.heroPoints ?? dirEntry?.heroPoints ?? deep?.heroPoints ?? rich?.f?.slice(0, 6).map(([title]) => title) ?? [],
      offerSection: dirEntry?.offerSection ?? null,
      featureSpotlight: dirEntry?.featureSpotlight ?? null,
      featureDetail: dirEntry?.featureDetail ?? null,
      frameworkSection: dirEntry?.frameworkSection ?? null,
      advancedSection: dirEntry?.advancedSection ?? null,
      poweredBy: product?.poweredBy ?? null,
      poweredMark: product?.poweredMark ?? null,
      activeProtection: product?.activeProtection ?? null,
      platforms: product?.platforms ?? [],
      edr: EDR_PRODUCTS.includes(name)
        ? { timeline: EDR_TIMELINE, compare: EDR_COMPARE }
        : null,
    };
  }
}

/** Same regex ladder the original used to choose a hero illustration. */
function sceneKey(name: string, cat: Category): string {
  const n = name.toLowerCase();
  if (/tally/.test(n)) return 'tally';
  if (/backup|acronis|dropsuite|dr /.test(n)) return 'backup';
  if (/gpu/.test(n)) return 'gpu';
  if (/dpdpa|vapt|security|soc|edr|mdr|siem|pki|firewall/.test(n)) return 'security';
  if (/ssl|certificate|dmarc|signing|vmc|digicert|sectigo|trust/.test(n)) return 'trust';
  if (/domain|hosting|website|wordpress|seo|email|marketing/.test(n)) return 'web';
  return cat === 'Security' ? 'security' : cat === 'Digital Trust' ? 'trust' : cat === 'Web Presence' ? 'web' : 'cloud';
}
