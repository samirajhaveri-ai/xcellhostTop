import { MEGA_MENU } from './nav.data';

export interface InsightProductTaxonomy {
  readonly name: string;
  readonly slug: string;
}

export interface InsightSubmenuTaxonomy {
  readonly name: string;
  readonly products: readonly InsightProductTaxonomy[];
}

export interface InsightMenuTaxonomy {
  readonly name: string;
  readonly submenus: readonly InsightSubmenuTaxonomy[];
}

export interface InsightTaxonomySource {
  readonly category?: string | null;
  readonly mainCategory?: string | null;
  readonly subCategory?: string | null;
  readonly product?: string | null;
  readonly relatedPages?: string | null;
}

export interface InsightPlacement {
  readonly mainCategory: string;
  readonly subCategory: string;
  readonly product: string;
}

const NON_PRODUCT_MENUS = new Set(['Insights', 'Company']);

/** Uses the same URL convention as product routes without importing CatalogService. */
export function insightTaxonomyKey(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[().,/]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Blog navigation mirrors the product mega-menu automatically. Updating nav.data.ts
 * therefore updates the Insights categories, submenus and products as well.
 */
export const INSIGHTS_MENU_TAXONOMY: readonly InsightMenuTaxonomy[] = MEGA_MENU
  .filter((menu) => !NON_PRODUCT_MENUS.has(menu.label))
  .map((menu) => {
    const submenuMap = new Map<string, InsightProductTaxonomy[]>();
    for (const tab of menu.tabs) {
      for (const group of tab.groups) {
        const submenuName = tab.label.trim() || group.heading?.trim() || 'Other';
        const products = submenuMap.get(submenuName) ?? [];
        for (const item of group.items) {
          const name = item.title.trim();
          if (!name || products.some((product) => product.name === name)) continue;
          products.push({ name, slug: insightTaxonomyKey(name) });
        }
        submenuMap.set(submenuName, products);
      }
    }
    return {
      name: menu.label,
      submenus: [...submenuMap].map(([name, products]) => ({ name, products })),
    };
  });

const allPlacements = INSIGHTS_MENU_TAXONOMY.flatMap((menu) =>
  menu.submenus.flatMap((submenu) =>
    submenu.products.map((product): InsightPlacement & { readonly slug: string } => ({
      mainCategory: menu.name,
      subCategory: submenu.name,
      product: product.name,
      slug: product.slug,
    }))
  )
);

/** Resolves old and new Strapi records into the site's menu taxonomy. */
export function resolveInsightPlacement(source: InsightTaxonomySource): InsightPlacement {
  const explicitMain = source.mainCategory?.trim() ?? '';
  const explicitSub = source.subCategory?.trim() ?? '';
  const explicitProduct = source.product?.trim() ?? '';
  const relatedSlugs = (source.relatedPages ?? '')
    .split(',')
    .map(insightTaxonomyKey)
    .filter(Boolean);

  const scoped = allPlacements.find((placement) =>
    (!explicitMain || insightTaxonomyKey(placement.mainCategory) === insightTaxonomyKey(explicitMain)) &&
    (!explicitSub || insightTaxonomyKey(placement.subCategory) === insightTaxonomyKey(explicitSub)) &&
    (!explicitProduct || insightTaxonomyKey(placement.product) === insightTaxonomyKey(explicitProduct))
  );
  const related = allPlacements.find((placement) => relatedSlugs.includes(placement.slug));
  const categoryMatch = allPlacements.find((placement) =>
    placement.slug === insightTaxonomyKey(source.category ?? '')
  );
  const match = (explicitProduct && scoped) || related || categoryMatch ||
    (explicitMain || explicitSub ? scoped : undefined);

  if (match) return match;
  const menuMatch = INSIGHTS_MENU_TAXONOMY.find((menu) =>
    insightTaxonomyKey(menu.name) === insightTaxonomyKey(explicitMain || source.category || '')
  );
  if (menuMatch) {
    return {
      mainCategory: menuMatch.name,
      subCategory: 'General',
      product: explicitProduct || 'General',
    };
  }
  return {
    mainCategory: explicitMain || 'Other Insights',
    subCategory: explicitSub || explicitMain || 'General',
    product: explicitProduct || source.category?.trim() || 'General',
  };
}
