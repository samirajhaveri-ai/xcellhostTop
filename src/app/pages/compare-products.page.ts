import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CatalogService, slugify } from '../core/catalog.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { DirectoryEntry } from '../data/models';
import { ComparisonCategory, PRODUCT_COMPARISONS, ProductComparisonDefinition } from '../data/product-comparisons.data';
import { CallbackTopicService } from '../overlays/callback-topic.service';

interface ComparisonCard extends ProductComparisonDefinition {
  leftProduct: DirectoryEntry;
  rightProduct: DirectoryEntry;
  leftDisplayName: string;
  rightDisplayName: string;
  query: string;
  detailSlug: string;
}

@Component({
  selector: 'xh-compare-products-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './compare-products.page.html',
  styleUrl: './compare-products.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompareProductsPage {
  private readonly catalog = inject(CatalogService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  readonly allCategory = 'All Comparisons';
  readonly categories: readonly (ComparisonCategory | typeof this.allCategory)[] = [
    this.allCategory,
    'TSplus Comparisons',
    'Cloud Infrastructure',
    'Productivity & Business Apps',
    'Cybersecurity',
    'Digital Trust',
    'Managed Cloud Operations',
  ];
  readonly activeCategory = signal<ComparisonCategory | typeof this.allCategory>(this.allCategory);
  readonly comparisons = PRODUCT_COMPARISONS.map(definition => {
    const leftProduct = this.resolveComparisonProduct(definition.left);
    const rightProduct = this.resolveComparisonProduct(definition.right);
    return {
      ...definition,
      leftProduct,
      rightProduct,
      leftDisplayName: definition.leftLabel ?? leftProduct.name,
      rightDisplayName: definition.rightLabel ?? rightProduct.name,
      query: `${slugify(leftProduct.name)},${slugify(rightProduct.name)}`,
      detailSlug: `${slugify(definition.left)}-vs-${slugify(definition.right)}`,
    } satisfies ComparisonCard;
  });
  readonly visibleComparisons = computed(() => {
    const category = this.activeCategory();
    return category === this.allCategory
      ? this.comparisons
      : this.comparisons.filter(comparison => comparison.category === category);
  });
  readonly catalogueCount = this.catalog.entries.length;

  constructor() {
    inject(SeoService).set(
      'Product Comparisons | Cloud, Security & Digital Trust | XcellHost',
      'Compare XcellHost cloud, cybersecurity, productivity, digital trust and managed service options side by side.',
      '/compare-products/',
    );
  }

  selectCategory(category: ComparisonCategory | typeof this.allCategory): void {
    this.activeCategory.set(category);
  }

  requestRecommendation(): void {
    this.topics.ask('Product comparison recommendation');
    this.overlay.open('callback');
  }

  private resolveComparisonProduct(name: string): DirectoryEntry {
    return this.catalog.findInDirectory(name) ?? this.catalog.entryBySlug(slugify(name)) ?? {
      name,
      desc: 'Remote access solution evaluated in this side-by-side comparison.',
      cat: 'Solutions',
      group: 'Remote access software',
    };
  }

}
