/**
 * Shared types for every data file in this folder.
 *
 * EDIT THIS FILE to change site content — no other file needs touching.
 */

export type Category = 'Cloud' | 'Security' | 'Digital Trust' | 'Web Presence' | 'Solutions';

/** [icon, title, body] */
export type IconItem = [string, string, string];
/** [title, body] */
export type Pair = [string, string];
/** [question, answer] */
export type Faq = [string, string];
/** [kicker, readTime, title, excerpt, slug] */
export type BlogCard = [string, string, string, string, string];

export interface DirectoryEntry {
  name: string;
  desc: string;
  cat: Category;
  group: string;
  /** Optional illustration displayed on the right side of the product hero. */
  heroImage?: string;
  /** Optional messages typed one-by-one beneath the product tagline. */
  heroMessages?: string[];
  heroPoints?: string[];
  offerSection?: {
    title: string;
    subtitle: string;
    lead: string;
    priceImage: string;
    offersImage: string;
  };
  featureSpotlight?: { title: string; body: string; image: string };
  featureDetail?: { title: string; bullets: string[]; image: string };
  frameworkSection?: {
    title: string;
    subtitle: string;
    image: string;
    secondaryImage?: string;
    tertiaryImage?: string;
  };
  advancedSection?: {
    title: string;
    tagline: string;
    body: string;
    image: string;
    secondaryImage?: string;
    tertiaryImage?: string;
  };
  benefitGrid?: { title: string; body?: string; icon?: string; image?: string }[];
  faqs?: Faq[];
}

export interface ServiceRich {
  price: string;
  /** overview paragraph */
  ov: string;
  /** features */
  f: Pair[];
  /** FAQs */
  q: Faq[];
  alias?: string[];
  /** optional explicit video sources */
  v?: string[];
}

export interface DeepContent {
  /** honest "not right for you if" copy */
  not_for: string;
  /** optional product-specific selling points shown in the hero */
  heroPoints?: string[];
  uses: IconItem[];
  /** [intro paragraph, spec rows] */
  sec: [string, Pair[]];
  faq: Faq[];
}

export interface ProductPricing {
  title: string;
  sub: string;
  /** [plan, monthly, yearly] */
  rows: [string, string, string][];
}

export interface RichProduct {
  brandLine: string;
  eyebrow: string;
  tagline: string;
  highlight: string;
  poweredBy: string;
  poweredMark?: string;
  heroImage: string;
  heroPoints: string[];
  /**
   * Legacy field, not read by the site. Video sources come from
   * `PRODUCT_VIDEOS` in products.data.ts — edit them there.
   */
  videos: string[];
  /** the two tab labels above the player */
  videoLabels: string[];
  useCases: string[];
  packages: [string, string][];
  /** optional image for each package, in the same order as `packages` */
  packageImages?: string[];
  activeProtection: { title: string; body: string };
  platforms: string[];
  pricing: ProductPricing;
  /** [initials, name, role, stars, quote] */
  reviews: [string, string, string, string, string][];
  faqs: Faq[];
  blogs: BlogCard[];
}

export type BlogBlock =
  | ['p', string]
  | ['h', string]
  | ['ul', string[]]
  /** the optional third element is a link label */
  | ['cta', string]
  | ['cta', string, string];

export interface BlogPost {
  cat: string;
  read: string;
  date: string;
  title: string;
  sub: string;
  body: BlogBlock[];
}

export interface DpdpaModule {
  t: string;
  tier: string;
  sec: string;
  slug: string;
  tag: string;
  prob: string;
  caps: Pair[];
  steps: Pair[];
  /** [icon, label] */
  evi: Pair[];
  faq: Faq[];
  /** [title, rows, meterLabel, meterPct] */
  vis: [string, [string, string, string][], string, number];
}

export interface MenuItem {
  title: string;
  pill: string | null;
  desc: string | null;
  /** Optional explicit destination for editorial or external menu entries. */
  href?: string;
}
export interface MenuFeatureCard {
  label: string;
  title: string;
  body: string;
  image: string;
  link: string;
  imagePosition?: string;
  fresh?: boolean;
}
export interface MenuGroup {
  heading: string | null;
  items: MenuItem[];
}
export interface MenuTab {
  g: string;
  label: string;
  on: boolean;
  groups: MenuGroup[];
  featureCards?: MenuFeatureCard[];
}
export interface MenuTop {
  label: string;
  noDrop: boolean;
  feature: unknown;
  tabs: MenuTab[];
}
