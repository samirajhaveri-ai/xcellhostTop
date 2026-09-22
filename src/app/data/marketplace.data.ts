import { DIRECTORY } from './directory.data';
import { MEGA_MENU } from './nav.data';

export const MARKETPLACE_CATEGORIES = [
  { id: 'experiences', name: 'Experiences', shortName: 'Experiences', icon: 'cloud', art: 'cloud', theme: 'experiences', color: '#934611', description: 'Cloud infrastructure and solutions built around your business' },
  { id: 'ai', name: 'AI Marketplace', shortName: 'AI Marketplace', icon: 'auto_awesome', art: 'neurology', theme: 'ai', color: '#982d58', description: 'AI tools, intelligent applications and automation' },
  { id: 'managed', name: 'Managed Services', shortName: 'Managed Services', icon: 'support_agent', art: 'headset_mic', theme: 'managed', color: '#856615', description: 'Cloud operations, security, backup and expert support' },
  { id: 'licenses', name: 'Software License', shortName: 'Software License', icon: 'apps', art: 'verified_user', theme: 'licenses', color: '#19685f', description: 'Productivity, business software and digital trust' },
  { id: 'professional', name: 'Professional Services', shortName: 'Professional Services', icon: 'person', art: 'extension', theme: 'professional', color: '#704191', description: 'Consulting, assessments, training and implementation' },
  { id: 'accelerators', name: 'Accelerators', shortName: 'Accelerators', icon: 'rocket_launch', art: 'rocket_launch', theme: 'accelerators', color: '#4d6926', description: 'Migration, DevOps and tools that speed up delivery' },
  { id: 'alliances', name: 'Alliances', shortName: 'Alliances', icon: 'groups', art: 'handshake', theme: 'alliances', color: '#395f77', description: 'Explore our technology partners and their solutions' },
] as const;
export type MarketplaceCategoryId = typeof MARKETPLACE_CATEGORIES[number]['id'];
export type MarketplaceSort = 'featured' | 'az' | 'za';
export interface MarketplaceListing {
  name: string; description: string; link: string; category: MarketplaceCategoryId;
  categoryName: string; group: string; icon: string; color: string; featured: boolean;
}
const FEATURED = ['performance-cloud', 'tally-on-cloud', 'microsoft-365', 'cloud-backup', 'gpu-servers', 'advanced-endpoint-security-edr', 'google-workspace', 'ai-chat-bot', 'bare-metal-servers', 'tsplus-remote-access', 'cloud-drive', 'cloud-migration'];

/** Classify by the service offered, not by incidental words in its description. */
export function classifyMarketplaceListing(name: string, group: string, source: string, link: string): MarketplaceCategoryId {
  const title = name.toLowerCase();
  const family = group.toLowerCase();
  if (link.startsWith('/vendor-partners/') || /by vendor|partner ecosystem/.test(family)) return 'alliances';
  if (source === 'AI' || /^(ai |acronis genai)/.test(title)) return 'ai';
  if (/migration|devops|automation|orchestration|kubernetes|accelerator/.test(title)) return 'accelerators';
  if (/consult|training|assessment|audit|vapt|implementation|penetration|readiness|advisory/.test(title) || /consulting|training|risk assessment/.test(family)) return 'professional';
  if (/managed|monitoring|backup|disaster recovery|\bsoc\b|\bmdr\b|\brmm\b/.test(title) || source === 'Data Protection') return 'managed';
  if (/^(microsoft 365|google workspace|zoho|tsplus|microsoft office|microsoft power|business e-mail)/.test(title)) return 'licenses';
  if (source === 'Productivity' || source === 'Marketplace' || source === 'Digital Trust' || source === 'Web Presence') return 'licenses';
  if (source === 'Security') return 'managed';
  return 'experiences';
}

/** Reuse real catalogue content and explicit menu destinations. */
export function buildMarketplaceListings(toSlug: (value: string) => string): MarketplaceListing[] {
  const listings = new Map<string, MarketplaceListing>();
  const descriptions = new Map(DIRECTORY.map(entry => [toSlug(entry.name), entry.desc]));
  const add = (name: string, description: string | null, group: string, source: string, href?: string) => {
    if (!name.trim() || name === 'No Data') return;
    let link = href || '/' + toSlug(name);
    if (link === '/bare-metal-server') link = '/bare-metal-servers';
    if (!link.startsWith('/') || link.startsWith('//') || link.startsWith('/under-construction') || link === '/explore-marketplace') return;
    const category = classifyMarketplaceListing(name, group, source, link);
    const meta = MARKETPLACE_CATEGORIES.find(item => item.id === category)!;
    const existing = listings.get(link);
    // Editorial shortcuts can point to a product under a different label.
    // Keep its product name and description on the marketplace card.
    if (href && existing) return;
    listings.set(link, {
      name: name.trim(), link, category, categoryName: meta.name, group, icon: meta.icon, color: meta.color,
      description: descriptions.get(toSlug(name)) || description || existing?.description || `Explore ${name.trim()} with deployment guidance and support from XcellHost.`,
      featured: FEATURED.includes(link.slice(1)),
    });
  };
  for (const entry of DIRECTORY) add(entry.name, entry.desc, entry.group, entry.cat);
  for (const label of ['Cloud', 'Web Presence', 'Solutions', 'Security', 'Digital Trust', 'Productivity', 'Data Protection', 'Marketplace', 'AI']) {
    const menu = MEGA_MENU.find(item => item.label === label);
    for (const tab of menu?.tabs ?? []) for (const group of tab.groups) {
      for (const item of group.items) add(item.title, item.desc, tab.label, label, item.href);
    }
  }
  return [...listings.values()].sort((a, b) => {
    const rankA = FEATURED.indexOf(a.link.slice(1));
    const rankB = FEATURED.indexOf(b.link.slice(1));
    return (rankA < 0 ? 999 : rankA) - (rankB < 0 ? 999 : rankB) || a.name.localeCompare(b.name);
  });
}

export function filterMarketplaceListings<T extends MarketplaceListing>(listings: readonly T[], query: string, category: MarketplaceCategoryId | 'all', sort: MarketplaceSort): T[] {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const matches = listings.filter(listing => {
    const content = `${listing.name} ${listing.description} ${listing.group} ${listing.categoryName}`.toLowerCase();
    return (category === 'all' || listing.category === category) && terms.every(term => content.includes(term));
  });
  if (sort !== 'featured') matches.sort((a, b) => sort === 'az' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
  return matches;
}
