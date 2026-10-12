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
    'Cloud Infrastructure',
    'Productivity & Business Apps',
    'Cybersecurity',
    'Digital Trust',
    'Managed Cloud Operations',
  ];
  readonly activeCategory = signal<ComparisonCategory | typeof this.allCategory>(this.allCategory);
  readonly comparisons = PRODUCT_COMPARISONS.flatMap(definition => {
    const leftProduct = this.catalog.findInDirectory(definition.left);
    const rightProduct = this.catalog.findInDirectory(definition.right);
    if (!leftProduct || !rightProduct) return [];
    return [{
      ...definition,
      leftProduct,
      rightProduct,
      query: `${slugify(leftProduct.name)},${slugify(rightProduct.name)}`,
      detailSlug: `${slugify(leftProduct.name)}-vs-${slugify(rightProduct.name)}`,
    } satisfies ComparisonCard];
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

}
