import { Injectable, computed, signal } from '@angular/core';
import { DIRECTORY, DIRECTORY_CATEGORIES } from '../data/directory.data';
import { SERVICES_RICH, MENU_CATEGORY_MAP } from '../data/services.data';
import { MEGA_MENU } from '../data/nav.data';
import { DEEP_CONTENT } from '../data/products.data';
import { Category, DirectoryEntry, ServiceRich } from '../data/models';

/** Turns a service name into the URL slug used by the router. */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[().,/]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * The catalogue: every service the site knows about, plus the lookup rules
 * that the original site scattered across six inline scripts.
 */
@Injectable({ providedIn: 'root' })
export class CatalogService {
  readonly categories = DIRECTORY_CATEGORIES;
  readonly entries: DirectoryEntry[] = DIRECTORY;

  /** alias -> canonical key, built once from the `alias` arrays in services.data.ts */
  private readonly aliasMap: Record<string, string> = (() => {
    const m: Record<string, string> = {};
    for (const key of Object.keys(SERVICES_RICH)) {
      const a = SERVICES_RICH[key].alias;
      if (a) for (const alt of a) m[alt.toLowerCase().trim()] = key;
    }
    return m;
  })();

  /**
   * slug -> service, for routing.
   *
   * The directory is the primary source, but the mega menu lists ~80 services
   * that never made it into the directory (individual code-signing certificates,
   * the TSplus range, the data-analytics set, and so on). The original site still
   * opened a page for those, filling it from the category defaults, so they are
   * indexed here too — otherwise every one of those menu links would dead-end.
   */
  private readonly bySlug: Record<string, DirectoryEntry> = (() => {
    const m: Record<string, DirectoryEntry> = {};
    for (const e of DIRECTORY) {
      const s = slugify(e.name);
      if (!m[s]) m[s] = e;
    }
    for (const top of MEGA_MENU) {
      if (top.label === 'Insights' || top.label === 'Company') continue;
      const cat = MENU_CATEGORY_MAP[top.label] ?? (top.label as Category);
      for (const tab of top.tabs) {
        for (const group of tab.groups) {
          for (const item of group.items) {
            const s = slugify(item.title);
            if (!s || m[s]) continue;
            m[s] = { name: item.title, desc: item.desc ?? '', cat, group: tab.label };
          }
        }
      }
    }
    return m;
  })();

  /** Every routable service slug — directory plus menu-only entries. */
  get slugs(): string[] {
    return Object.keys(this.bySlug);
  }

  /** Services grouped for the directory section. */
  readonly grouped = computed(() => {
    const out: { cat: Category; count: string; sub: string; groups: { name: string; items: DirectoryEntry[] }[] }[] = [];
    for (const c of DIRECTORY_CATEGORIES) {
      const items = DIRECTORY.filter((d) => d.cat === c.name);
      const groups: { name: string; items: DirectoryEntry[] }[] = [];
      for (const it of items) {
        let g = groups.find((x) => x.name === it.group);
        if (!g) groups.push((g = { name: it.group, items: [] }));
        g.items.push(it);
      }
      out.push({ cat: c.name as Category, count: c.count, sub: c.sub, groups });
    }
    return out;
  });

  /** Resolve a display name to its rich record, following aliases. */
  rich(name: string): ServiceRich | undefined {
    const key = name.toLowerCase().trim();
    return SERVICES_RICH[key] ?? SERVICES_RICH[this.aliasMap[key]];
  }

  /** True when a service has hand-written deep content. */
  isCore(name: string): boolean {
    return Object.prototype.hasOwnProperty.call(DEEP_CONTENT, name);
  }

  entryBySlug(slug: string): DirectoryEntry | undefined {
    return this.bySlug[slug];
  }

  /** Prefix match, the same rule the original `findInDirectory` used. */
  findInDirectory(name: string): DirectoryEntry | undefined {
    const n = name.toLowerCase().split(' (')[0];
    return (
      DIRECTORY.find((d) => d.name.toLowerCase() === name.toLowerCase()) ??
      DIRECTORY.find((d) => d.name.toLowerCase().indexOf(n) === 0)
    );
  }

  /** Category for a top-level menu label. */
  categoryForMenu(label: string): Category {
    return MENU_CATEGORY_MAP[label] ?? (label as Category);
  }

  /** Free-text search across the catalogue, used by the search dialog and chatbot. */
  search(q: string, limit = 12): DirectoryEntry[] {
    const s = q.toLowerCase().trim();
    if (!s) return [];
    const starts: DirectoryEntry[] = [];
    const contains: DirectoryEntry[] = [];
    for (const e of DIRECTORY) {
      const n = e.name.toLowerCase();
      if (n.startsWith(s)) starts.push(e);
      else if (n.includes(s) || e.desc.toLowerCase().includes(s)) contains.push(e);
      if (starts.length >= limit) break;
    }
    return [...starts, ...contains].slice(0, limit);
  }
}
