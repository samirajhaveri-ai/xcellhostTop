import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { CatalogService, slugify } from '../core/catalog.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { CATEGORY_COMPARE_WHY } from '../data/category.data';
import { DirectoryEntry } from '../data/models';
import { PRODUCT_COMPARISONS } from '../data/product-comparisons.data';
import { CATEGORY_FEATURES } from '../data/services.data';
import { CallbackTopicService } from '../overlays/callback-topic.service';

interface DetailProduct {
  entry: DirectoryEntry;
  displayName: string;
  slug: string;
  price: string;
  features: string[];
  strengths: string[];
  considerations: string[];
}

interface ComparisonRow {
  feature: string;
  left: string;
  right: string;
}

@Component({
  selector: 'xh-product-comparison-detail-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-comparison-detail.page.html',
  styleUrl: './product-comparison-detail.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComparisonDetailPage {
  private readonly catalog = inject(CatalogService);
  private readonly route = inject(ActivatedRoute);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  readonly comparisonSlug = this.route.snapshot.paramMap.get('comparison') ?? '';
  readonly definition = PRODUCT_COMPARISONS.find(item =>
    `${slugify(item.left)}-vs-${slugify(item.right)}` === this.comparisonSlug
  ) ?? PRODUCT_COMPARISONS[0];
  readonly left = this.resolveProduct(this.definition.left, this.definition.leftLabel);
  readonly right = this.resolveProduct(this.definition.right, this.definition.rightLabel);
  readonly title = `${this.left.displayName} vs ${this.right.displayName}`;
  readonly rows: readonly ComparisonRow[] = [
    { feature: 'Primary purpose', left: this.left.entry.desc, right: this.right.entry.desc },
    { feature: 'Service family', left: this.left.entry.group, right: this.right.entry.group },
    { feature: 'Starting price', left: this.left.price, right: this.right.price },
    ...Array.from({ length: Math.max(this.left.features.length, this.right.features.length) }, (_, index) => ({
      feature: `Key capability ${index + 1}`,
      left: this.left.features[index] ?? 'Scoped to requirement',
      right: this.right.features[index] ?? 'Scoped to requirement',
    })),
    { feature: 'Support model', left: '24×7 support in English and Hindi', right: '24×7 support in English and Hindi' },
    { feature: 'Commercial model', left: 'INR billing with GST invoice', right: 'INR billing with GST invoice' },
  ];

  constructor() {
    inject(SeoService).set(
      `${this.title} | Product Comparison | XcellHost`,
      `${this.definition.summary} Compare capabilities, pricing, strengths and planning considerations.`,
      `/compare-products/${this.comparisonSlug}/`,
    );
  }

  requestConsultation(): void {
    this.topics.ask(`Product comparison: ${this.title}`);
    this.overlay.open('callback');
  }

  private resolveProduct(name: string, displayName?: string): DetailProduct {
    const entry = this.catalog.findInDirectory(name) ?? this.catalog.entryBySlug(slugify(name)) ?? {
      name,
      desc: 'Solution details are confirmed during consultation.',
      cat: 'Solutions' as const,
      group: 'Solutions',
    };
    const rich = this.catalog.rich(entry.name);
    const features = (rich?.f ?? CATEGORY_FEATURES[entry.cat] ?? CATEGORY_FEATURES['Cloud'])
      .slice(0, 4)
      .map(feature => feature[0]);
    const categoryStrengths = CATEGORY_COMPARE_WHY[entry.cat] ?? CATEGORY_COMPARE_WHY['Cloud'];
    return {
      entry,
      displayName: displayName ?? entry.name,
      slug: slugify(entry.name),
      price: rich?.price || this.priceFrom(entry.desc),
      features,
      strengths: features.length ? features.slice(0, 4) : categoryStrengths.slice(0, 4),
      considerations: [
        `Confirm ${entry.group.toLowerCase()} scope, integrations and migration requirements.`,
        'Final sizing and commercial terms follow a solution assessment.',
      ],
    };
  }

  private priceFrom(description: string): string {
    return /from\s*(₹[\d,]+[^\s—]*)/i.exec(description)?.[1] ?? 'Custom quote';
  }
}
