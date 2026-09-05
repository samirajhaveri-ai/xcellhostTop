import { Injectable, inject } from '@angular/core';
import { CatalogService } from './catalog.service';
import {
  CATEGORY_BENEFITS, CATEGORY_BLOG, CATEGORY_FAQ_BASE, CATEGORY_FAQ_EXTRA,
  CATEGORY_MOCK, CATEGORY_STEPS,
  CATEGORY_WHY,
} from '../data/category.data';
import {
  SEC_EXTRA, SEC_OPENERS, SEC_OVERRIDE, SEC_POOL, SecuritySection,
  USE_FRAMES, USE_ICONS, USE_OVERRIDE, USE_POOL,
} from '../data/usecases.data';
import { CATEGORY_FAQS, CATEGORY_FEATURES, FEATURE_ICONS } from '../data/services.data';
import {
  DEEP_CONTENT,
  PRODUCT_BRAND_LINES,
  PRODUCT_INFOSHEETS,
  PRODUCT_VIDEOS,
  RICH_PRODUCTS,
  SERVICE_INDEX_URL,
} from '../data/products.data';
import { EDR_COMPARE, EDR_PRODUCTS, EDR_TIMELINE, HERO_SCENES } from '../data/site.data';
import { BlogCard, Category, Faq, IconItem, Pair, RichProduct } from '../data/models';
import { buildContextualProductReviews } from '../data/product-reviews.data';
import {
  CATEGORY_HERO_IMAGES,
  PRODUCT_HERO_IMAGES,
  VISIBLE_PRODUCT_HERO_IMAGE_PATHS,
} from '../data/product-hero-images.generated';

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

export interface ProductHeroBrand {
  name: string;
  subtitle: string | null;
  kind: 'vendor' | 'xcell' | 'tally';
  logoImage: string;
}

/** Everything the product page template needs. Nothing is computed in the view. */
export interface ProductView {
  name: string;
  /** Xcell product-family wordmark shown before the product name in the hero. */
  brandSuffix: string;
  crumb: string;
  cat: Category;
  tagline: string;
  heroHighlight: string | null;
  chips: { label: string; kind: 'badge' | 'price' | 'plain' }[];
  overview: string;
  features: { icon: string; title: string; body: string; svg?: boolean }[];
  benefits: { icon: string; title: string; body: string }[];
  benefitGrid: { title: string; body?: string; icon?: string; image?: string }[];
  uses: { icon: string; title: string; body: string; svg?: boolean }[];
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
  /** Logo-style provider mark displayed below every right-side hero illustration. */
  heroBrand: ProductHeroBrand;
  activeProtection: { title: string; body: string } | null;
  platforms: string[];
  edr: { timeline: [string, string][]; compare: { cols: string[]; rows: string[][] } } | null;
}

const BENEFIT_ICON_PATHS: Record<Category, readonly string[]> = {
  Cloud: [
    'M12 2v20M17 6.5h-7.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H7',
    'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3c2.4 2.5 3.7 5.5 3.7 9S14.4 18.5 12 21c-2.4-2.5-3.7-5.5-3.7-9S9.6 5.5 12 3Z',
    'M20 7h-5V2M4 17h5v5M5.8 9a7 7 0 0 1 11.7-3.5L20 7M4 17l2.5 1.5A7 7 0 0 0 18.2 15',
    'M3 18 9 12l4 4 8-9M15 7h6v6',
  ],
  Security: [
    'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10ZM8.5 12l2.2 2.2 4.8-5',
    'M12 3l2.1 2.6 3.3-.1.7 3.2 2.7 1.9-1.5 3 1.1 3.1-3 1.5-.4 3.3-3.3-.1L12 22l-2.1-2.6-3.3.1-.7-3.2-2.7-1.9 1.5-3-1.1-3.1 3-1.5.4-3.3 3.3.1L12 3ZM8.5 12l2.2 2.2 4.8-5',
    'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM17 11l2 2 4-4',
    'M22 12h-4M6 12H2M12 2v4M12 18v4M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8M18.4 18.4l-2.8-2.8M8.4 8.4 5.6 5.6M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  ],
  'Digital Trust': [
    'M4 19V9M10 19V5M16 19v-7M22 19V3M2 19h22',
    'M20 7h-5V2M4 17h5v5M5.8 9a7 7 0 0 1 11.7-3.5L20 7M4 17l2.5 1.5A7 7 0 0 0 18.2 15',
    'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10ZM8.5 12l2.2 2.2 4.8-5',
    'M12 3v18M5 7h14M6 7l-3 6h6L6 7ZM18 7l-3 6h6l-3-6ZM8 21h8',
  ],
  'Web Presence': [
    'M12 3l1.8 4.7L19 9.5l-4.1 3.2.1 5.3-3-1.8L9 18l.1-5.3L5 9.5l5.2-1.8L12 3Z',
    'M11 19a8 8 0 1 1 5.7-2.3L22 22M8 11h6M11 8v6',
    'm13 2-9 12h7l-1 8 10-13h-7V2Z',
    'M8.5 12.5 11 15l4.5-5M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z',
  ],
  Solutions: [
    'M22 12h-4l-2 7L8 5l-2 7H2M12 2v3M12 19v3',
    'M5 17 19 3M12 3h7v7M19 14v5H5V5h5',
    'M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0M19 8h4M21 6v4',
    'M3 18 9 12l4 4 8-9M15 7h6v6',
  ],
};

const EDR_USE_CASE_ICON_PATHS: readonly string[] = [
  'M4 3h11l5 5v13H4V3ZM15 3v5h5M8 12h8M8 16h6',
  'M12 21a9 9 0 1 0-9-9M12 17a5 5 0 1 0-5-5M12 13a1 1 0 1 0-1-1M12 12l6-6',
  'M15.5 7.5a4.5 4.5 0 1 1-8.5 2L2 14.5V19h4v-2h3v-3h2.5l1-1',
  'M5 3h14v6H5V3ZM5 15h14v6H5v-6ZM8 6h.01M8 18h.01M12 6h4M12 18h4',
  'M3 5h18v12H3V5ZM8 21h8M12 17v4M16 9a5 5 0 0 0-8 0M14 11a2.5 2.5 0 0 0-4 0',
  'M8 18h8M9 3h6l1 3a7 7 0 0 1 3 6v3H5v-3a7 7 0 0 1 3-6l1-3ZM3 18h18M12 8v4M12 15h.01',
  'M20 7h-5V2M4 17h5v5M5.8 9a7 7 0 0 1 11.7-3.5L20 7M4 17l2.5 1.5A7 7 0 0 0 18.2 15',
  'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
];

const WHY_ICON_PATHS: readonly string[] = [
  'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM9 14l-2 7 5-2 5 2-2-7M9 8.5l2 2 4-4',
  'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10ZM8 9h8M8 13h8M10 17h4',
  'M4 17h11M12 14l3 3-3 3M20 7H9M12 4 9 7l3 3',
  'M3 12h4l2-5 4 10 2-5h6M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z',
  'M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2ZM20 14h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2ZM17 20c0 1-2 2-5 2',
  'M8 12l3 3 5-6M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM4.9 19.1 3 21M19.1 19.1 21 21',
];

const CLOUD_BACKUP_WHY: readonly [string, string][] = [
  ['Reliable Data Protection', 'Protect servers, endpoints, applications, and critical workloads from data loss.'],
  ['Automated Backups', 'Schedule regular backups automatically and reduce manual backup efforts.'],
  ['Ransomware Protection', 'Safeguard critical data from ransomware, accidental deletion, and hardware failure.'],
  ['Flexible Retention', 'Maintain recoverable backup copies with configurable retention policies.'],
  ['Fast Data Recovery', 'Restore critical data and workloads quickly to minimize downtime.'],
  ['Secure & Scalable Backup', 'Protect growing data volumes with secure and scalable cloud backup.'],
];

const CLOUD_BACKUP_FEATURES: readonly [string, string][] = [
  ['Full Image Backup', 'Back up complete systems for dependable disaster recovery.'],
  ['File & Folder Backup', 'Protect individual files and folders with granular recovery options.'],
  ['Cloud Backup', 'Store secure off-site copies of critical business data.'],
  ['End-to-End Encryption', 'Keep backup data protected in transit and at rest.'],
  ['Ransomware Protection', 'Safeguard recoverable copies from ransomware and accidental deletion.'],
  ['Bare-Metal Recovery', 'Restore an entire system to new or recovered hardware quickly.'],
];

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

const EDR_TOP_FEATURES_MODERN: ProductView['features'] = [
  { svg: true, icon: 'M9.5 4.5A3.5 3.5 0 0 0 6 8v.4A3.2 3.2 0 0 0 4 11.5 3.5 3.5 0 0 0 7.5 15H9m5.5-10.5A3.5 3.5 0 0 1 18 8v.4a3.2 3.2 0 0 1 2 3.1 3.5 3.5 0 0 1-3.5 3.5H15M12 3v18m-3-9h6m-5 5h4', title: 'Behavior-based threat detection', body: 'Detects unknown threats using behavioral analysis' },
  { svg: true, icon: 'M7 10V7a5 5 0 0 1 10 0v3m-11 0h12v10H6V10Zm6 4v2m7-9v4h-4', title: 'Anti-ransomware with rollback', body: 'Restores affected files instantly after attack' },
  { svg: true, icon: 'm13 2-9 12h7l-1 8 10-13h-7V2Z', title: 'Exploit prevention', body: 'Blocks zero-day and fileless attacks' },
  { svg: true, icon: 'M3 12h18M12 3a15 15 0 0 1 0 18m0-18a15 15 0 0 0 0 18M5 7h14M5 17h14', title: 'URL filtering & web protection', body: 'Prevents access to malicious websites' },
  { svg: true, icon: 'M8 3h8v7H8V3Zm4 7v4m-5 7h10v-7H7v7Zm2-18V1m6 2V1', title: 'Device control', body: 'Controls USB and removable media usage' },
  { svg: true, icon: 'M12 21a9 9 0 1 0-9-9m9 5a5 5 0 1 0-5-5m5 1a1 1 0 1 0-1-1m1 0 8-8m-4 0h4v4', title: 'Real-time threat intelligence feed', body: 'Constant updates on emerging threats' },
  { svg: true, icon: 'M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', title: 'Continuous endpoint monitoring', body: 'Tracks all activities on endpoints' },
  { svg: true, icon: 'M8 3h8l1 3h2v15H5V6h2l1-3Zm1 0v4h6V3M8 11h8M8 15h8', title: 'Forensic data collection', body: 'Captures detailed attack evidence' },
  { svg: true, icon: 'M7 3h10v3H7V3ZM5 6h14v15H5V6Zm4 4h6M9 14h6M9 18h4', title: 'Event monitoring & logging', body: 'Deep visibility into system events' },
  { svg: true, icon: 'M8 7h8a4 4 0 0 1 0 8h-3M16 17H8a4 4 0 0 1 0-8h3M9 12h6', title: 'Automated event correlation', body: 'Links related events into one incident view' },
  { svg: true, icon: 'M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z', title: 'AI-based attack analysis', body: 'Guided interpretation simplifies investigation' },
  { svg: true, icon: 'M4 5l5-2 6 2 5-2v16l-5 2-6-2-5 2V5Zm5-2v16m6-14v16M7 14l3-3 3 2 4-5', title: 'MITRE ATT&CK mapping & visualization', body: 'Visual attack chain tracking' },
  { svg: true, icon: 'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4M12 4V2', title: 'Prioritized incident alerts', body: 'Reduces alert fatigue with smart prioritization' },
  { svg: true, icon: 'M11 19a8 8 0 1 1 5.7-2.3L22 22M8 11h6M11 8v6', title: 'Threat hunting capabilities', body: 'IoC search to find indicators of compromise' },
  { svg: true, icon: 'm13 2-9 12h7l-1 8 10-13h-7V2Z', title: 'Single-click response actions', body: 'Fast containment and mitigation' },
  { svg: true, icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10ZM8 8l8 8M16 8l-8 8', title: 'Endpoint isolation & quarantine', body: 'Stops lateral movement instantly' },
  { svg: true, icon: 'M9 7H4v-5M4 7a9 9 0 1 1-1 8M8 12l3 3 5-6', title: 'Attack-specific rollback & remediation', body: 'Reverts malicious changes' },
  { svg: true, icon: 'M3 4h18v13H3V4Zm5 17h8M12 17v4M8 9h8M8 12h5', title: 'Full system reimaging & recovery', body: 'Restores compromised systems completely' },
  { svg: true, icon: 'M6 18a4 4 0 0 1 0-8 6 6 0 0 1 11.5-1.5A4.5 4.5 0 1 1 18 18H6Zm6-6v8m-3-3 3 3 3-3', title: 'Integrated backup & disaster recovery', body: 'Ensures rapid business recovery and data resilience' },
  { svg: true, icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10ZM8 12h8M12 8v8', title: 'Unified cyber protection platform', body: 'Combines backup, security, and EDR in one solution' },
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

const CLOUD_DRIVE_WHY: Pair[] = [
  ['Managed by XcellHost cloud experts', ''],
  ['24×7 monitoring and support', ''],
  ['Secure access from anywhere', ''],
  ['Business-focused storage solution', ''],
  ['No hardware investment required', ''],
  ['Easy migration from existing file servers', ''],
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

const CLOUD_DISASTER_RECOVERY_SMB_BENEFITS: IconItem[] = [
  ['⚙️', 'All-in-One Flexibility', ''],
  ['✅', 'Guaranteed Flexible RTO', ''],
  ['🗄️', 'AnyData Engine', ''],
  ['🖥️', 'Single Pane of Glass', ''],
  ['👆', 'Push-Button Recovery', ''],
  ['🤝', 'White Glove Support', ''],
  ['🔄', 'Automated Testing', ''],
  ['🌐', 'Broad Choice of Recovery Options', ''],
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
      name === 'Scrutiny EDR'
        ? 'Detect. Investigate. Respond. Recover.'
        : name === 'Advanced Endpoint Security (EDR)'
        ? 'Monitors endpoints continuously'
        : name === 'Tally on Cloud'
          ? 'Run Tally On Cloud 24/7 - Safety & Data Security Guranteed !!!'
          : name === 'SMB Cyber Security Appliance'
            ? 'Allow organizations to manage complex defenses through a unified interface.'
            : product?.tagline || tag || `${name} from XcellHost`;
    const heroHighlight =
      name === 'Scrutiny EDR'
        ? 'Behavioural endpoint detection with rapid remote response across Windows, macOS and Linux'
        : name === 'Advanced Endpoint Security (EDR)'
        ? 'Quickly experience the power of Acronis EDR and see how easy it is to analyze attacks'
        : name === 'Tally on Cloud'
          ? 'Your Business runs on Tally, Make your Tally run on our Cloud'
          : name === 'SMB Cyber Security Appliance'
            ? 'Next-Generation Cyber Security for SMB Infrastructure.'
            : name === 'Remote Monitoring & Mgmt (RMM)'
              ? null
              : product?.highlight || rich?.f?.[0]?.[1] || tag || null;
    const heroMessages =
      name === 'Scrutiny EDR'
        ? ['Self-learning behavioural analytics', 'Real-time isolation', 'MITRE ATT&CK mapped investigations', '24×7 managed security']
        : name === 'Advanced Endpoint Security (EDR)'
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
      name === 'SMB Cyber Security Appliance'
        ? 'The XcellSecure SMB Cyber Security Appliance is an affordable, cloud-managed security gateway designed for businesses with up to 50 users. It combines secure business Wi-Fi, advanced firewall protection, and web & DNS security in one platform. Application controls and bandwidth management help businesses maintain secure and efficient network usage. Get real-time visibility into network activity with centralized cloud management. Automatic security updates help keep your environment protected against evolving threats. Enjoy enterprise-grade security without the cost and complexity of a traditional security stack.'
        : name === 'Advanced Endpoint Security (EDR)'
        ? 'XcellHost Advanced Endpoint Security (EDR) helps organizations identify, protect, detect, respond to, and recover from endpoint threats. It provides continuous security monitoring to detect suspicious activity and potential threats. Endpoints are protected with advanced security capabilities designed to reduce cyber risks. Delivered from secure Indian Tier-4 datacenters, the solution provides reliable and centralized protection. Your environment is monitored 24×7 by experienced security professionals. Get direct assistance from real engineers whenever you need support.'
        : name === 'Remote Monitoring & Mgmt (RMM)'
        ? 'Acronis RMM software helps customers deliver better IT management with powerful tools for monitoring, managing, and supporting devices remotely. It enables IT teams to monitor device performance, identify issues, and provide efficient remote support. Deploy high-performance remote desktop capabilities for fast and reliable remote access. Provide secure remote assistance at no additional cost, helping teams resolve IT issues quickly and efficiently. With centralized management and proactive monitoring, businesses can improve productivity, minimize downtime, and maintain a more reliable IT environment.'
        : rich?.ov ||
          `${name} from XcellHost. ${tag} Delivered from Indian Tier-4 datacenters, ` +
            `monitored around the clock, and backed by engineers who answer the phone.`;

    const featSrc: readonly Pair[] = name.toLowerCase().startsWith('cloud backup')
      ? CLOUD_BACKUP_FEATURES
      : rich?.f ?? CATEGORY_FEATURES[cat] ?? CATEGORY_FEATURES['Cloud'];
    const features =
      name === 'Advanced Endpoint Security (EDR)'
        ? EDR_TOP_FEATURES_MODERN.map((feature) => ({ ...feature }))
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
    const useCases = uses.map((useCase, index) => ({
      icon:
        name === 'Advanced Endpoint Security (EDR)'
          ? EDR_USE_CASE_ICON_PATHS[index % EDR_USE_CASE_ICON_PATHS.length]
          : useCase[0],
      title: useCase[1],
      body: useCase[2],
      svg: name === 'Advanced Endpoint Security (EDR)',
    }));

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
    const referenceHeroImage = PRODUCT_HERO_IMAGES[name];
    const visibleReferenceHeroImage =
      referenceHeroImage && VISIBLE_PRODUCT_HERO_IMAGE_PATHS.has(referenceHeroImage)
        ? referenceHeroImage
        : null;

    /* -------- reviews -------- */
    const reviews = product
      ? product.reviews.map((r) => ({
          initials: r[0], name: r[1], role: r[2], stars: parseFloat(r[3]) || 5, quote: r[4],
        }))
      : buildContextualProductReviews(
          name,
          cat,
          features.map((feature) => feature.title),
        );

    const rawBenefits =
      name === 'Tally on Cloud'
        ? TALLY_WHY_CHOOSE
        : name === 'SMB Cyber Security Appliance'
          ? SMB_CYBER_BENEFITS
          : name === 'Cloud Disaster Recovery SMB'
            ? CLOUD_DISASTER_RECOVERY_SMB_BENEFITS
            : CATEGORY_BENEFITS[cat] ?? [];
    const benefitIcons = BENEFIT_ICON_PATHS[cat];
    const benefits = rawBenefits.map((benefit, index) => ({
      icon: benefitIcons[index % benefitIcons.length],
      title: benefit[1],
      body: benefit[2],
    }));
    const brandSuffix = resolveBrandSuffix(
      name,
      cat,
      dirEntry?.group ?? req.crumb ?? '',
      PRODUCT_BRAND_LINES[name] ?? product?.brandLine
    );

    const whySource = name.toLowerCase().startsWith('cloud backup')
      ? CLOUD_BACKUP_WHY
      : name === 'Cloud Drive'
        ? CLOUD_DRIVE_WHY
        : (CATEGORY_WHY[cat] ?? []);

    return {
      name,
      brandSuffix,
      crumb: 'Home › ' + (req.crumb || (dirEntry ? `${dirEntry.cat} › ${dirEntry.group}` : 'Services')),
      cat,
      tagline: heroTagline,
      heroHighlight,
      chips,
      overview,
      features,
      benefits,
      benefitGrid: dirEntry?.benefitGrid ?? [],
      uses: useCases,
      security,
      honest: deep?.not_for ?? null,
      steps: CATEGORY_STEPS[cat] ?? [],
      mock: CATEGORY_MOCK[cat] ?? [],
      why: whySource.map((w, i) => ({
        icon: WHY_ICON_PATHS[i % WHY_ICON_PATHS.length], title: w[0], body: w[1],
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
      heroImage:
        product?.heroImage ??
        dirEntry?.heroImage ??
        visibleReferenceHeroImage ??
        CATEGORY_HERO_IMAGES[cat] ??
        null,
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
      heroBrand: resolveHeroBrand(name, brandSuffix, product?.poweredBy, product?.poweredMark),
      activeProtection: product?.activeProtection ?? null,
      platforms: product?.platforms ?? [],
      edr: EDR_PRODUCTS.includes(name)
        ? { timeline: EDR_TIMELINE, compare: EDR_COMPARE }
        : null,
    };
  }
}

/** External product vendors used by the reference catalogue; Xcell is the universal fallback. */
function resolveHeroBrand(
  name: string,
  brandSuffix: string,
  poweredBy?: string,
  poweredMark?: string
): ProductHeroBrand {
  if (name === 'Cloud Disaster Recovery SMB') {
    return {
      name: 'Acronis Disaster Recovery', subtitle: null, kind: 'vendor',
      logoImage: '/assets/images/acronis-disaster-recovery.png',
    };
  }

  if (name === 'Acronis GenAI Protected') {
    return {
      name: 'Acronis GenAI Protection', subtitle: null, kind: 'vendor',
      logoImage: '/assets/images/acronis-genai-protection.png',
    };
  }

  if (name === 'Remote Monitoring & Mgmt (RMM)') {
    return {
      name: 'Acronis Remote Monitoring & Management', subtitle: null, kind: 'vendor',
      logoImage: '/assets/images/acronis-rmm-protection.png',
    };
  }

  if (poweredMark === 'tally' || /tally/i.test(name)) {
    return {
      name: 'Tally on Cloud', subtitle: null, kind: 'tally',
      logoImage: '/assets/images/product-intros/reference-708cd01d9929.png',
    };
  }

  if (/cloud drive/i.test(name)) {
    return {
      name: 'XcellDrive', subtitle: null, kind: 'vendor',
      logoImage: '/assets/images/product-intros/reference-54ea5391cf7f.png',
    };
  }

  if (/SMB Cloud Desktop/i.test(name)) {
    return {
      name: 'XcellDesktop', subtitle: null, kind: 'vendor',
      logoImage: '/assets/images/xcell-desktop-powered-by.png',
    };
  }
  if (/Advanced Endpoint Security (EDR)/i.test(name)) {
    return {
      name: 'XcellSecure', subtitle: null, kind: 'vendor',
      logoImage: '/assets/images/EDR.png',
    };
  }

  if (/^SMB Cyber Security Appliance$/i.test(name)) {
    return {
      name: 'Cybird', subtitle: null, kind: 'vendor',
      logoImage: '/assets/images/cybird-powered-by.png',
    };
  }

  if (/^GeoTrust$/i.test(name)) {
    return {
      name: 'GeoTrust', subtitle: 'Secured by DigiCert', kind: 'vendor',
      logoImage: '/assets/images/geotrust-secured.png',
    };
  }

  if (poweredBy) {
    const [vendor, ...rest] = poweredBy.trim().split(/\s+/);
    return {
      name: vendor,
      subtitle: rest.join(' ') || name,
      kind: 'vendor',
      logoImage: vendor.toLowerCase() === 'acronis'
        ? '/assets/images/product-brands-acronis.png'
        : '/assets/images/xcellhost-logo.png',
    };
  }

  const vendorMatchers: readonly [RegExp, string, string?][] = [
    [/acronis|cloud backup|cloud disaster|advanced endpoint security|remote monitoring\s*&\s*mgmt/i, 'Acronis', 'Cyber Protect Cloud'],
    [/sentinelone/i, 'SentinelOne'],
    [/microsoft|azure|entra|intune|copilot|windows/i, 'Microsoft'],
    [/google|gcp/i, 'Google'],
    [/amazon web services|\baws\b/i, 'AWS'],
    [/oracle/i, 'Oracle'],
    [/digicert/i, 'DigiCert'],
    [/geotrust/i, 'GeoTrust'],
    [/sectigo|comodo/i, 'Sectigo'],
    [/rapidssl/i, 'RapidSSL'],
    [/thawte/i, 'Thawte'],
    [/emudhra/i, 'eMudhra'],
    [/globalsign/i, 'GlobalSign'],
    [/entrust/i, 'Entrust'],
    [/sitelock/i, 'SiteLock'],
    [/cpanel/i, 'cPanel'],
    [/plesk/i, 'Plesk'],
    [/wordpress/i, 'WordPress'],
    [/kaspersky/i, 'Kaspersky'],
    [/sophos/i, 'Sophos'],
    [/fortinet/i, 'Fortinet'],
    [/cisco/i, 'Cisco'],
    [/veeam/i, 'Veeam'],
    [/vmware/i, 'VMware'],
    [/nutanix/i, 'Nutanix'],
    [/citrix/i, 'Citrix'],
    [/tsplus/i, 'TSplus'],
    [/zoho/i, 'Zoho'],
    [/whatsapp/i, 'WhatsApp'],
  ];
  const match = vendorMatchers.find(([pattern]) => pattern.test(name));

  if (match) {
    return {
      name: match[1],
      subtitle: match[2] ?? name,
      kind: 'vendor',
      logoImage: match[1] === 'Acronis'
        ? '/assets/images/product-brands-acronis.png'
        : '/assets/images/xcellhost-logo.png',
    };
  }

  return {
    name: `Xcell${brandSuffix}`,
    subtitle: name,
    kind: 'xcell',
    logoImage: '/assets/images/xcellhost-logo.png',
  };
}

/** Product-family names follow the wordmarks used on the reference XcellHost site. */
function resolveBrandSuffix(
  name: string,
  cat: Category,
  group: string,
  brandLine?: string
): string {
  const explicitBrand = brandLine?.split('|')[0].trim().replace(/^Xcell\s*/i, '');
  if (explicitBrand) return explicitBrand;

  const product = name.toLowerCase();
  const family = group.toLowerCase();

  if (product.includes('tally')) return 'Tally';
  if (product === 'cloud drive') return 'Drive';
  if (product.includes('desktop') || product.includes('vdi')) return 'Desktop';
  if (product.includes('co-location') || product.includes('colocation')) return 'Colo';
  if (product === 'business e-mail' || product === 'business email') return 'BizMail';
  if (product.includes('entra id') || family.includes('identity')) return 'Identity';
  if (product === 'cloud management portal') return 'Managed';
  if (family.includes('data protect') || product.includes('backup')) return 'Backup';
  if (family.includes('consulting') || family.includes('compliance') || cat === 'Solutions') {
    return 'Consult';
  }
  if (cat === 'Cloud') return 'Cloud';
  return 'Secure';
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
