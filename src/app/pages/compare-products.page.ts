import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CatalogService, slugify } from '../core/catalog.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { DirectoryEntry } from '../data/models';
import { CallbackTopicService } from '../overlays/callback-topic.service';

type ComparisonCategory =
  | 'Cloud Infrastructure'
  | 'Productivity & Business Apps'
  | 'Cybersecurity'
  | 'Digital Trust'
  | 'Managed Cloud Operations';

interface ComparisonDefinition {
  category: ComparisonCategory;
  left: string;
  right: string;
  summary: string;
  eyebrow: string;
}

interface ComparisonCard extends ComparisonDefinition {
  leftProduct: DirectoryEntry;
  rightProduct: DirectoryEntry;
  query: string;
}

const COMPARISONS: readonly ComparisonDefinition[] = [
  { category: 'Cloud Infrastructure', left: 'Performance Cloud', right: 'Bare Metal Server', eyebrow: 'Flexible compute', summary: 'Compare elastic cloud capacity with dedicated physical hardware for demanding production workloads.' },
  { category: 'Cloud Infrastructure', left: 'Dedicated Private Cloud', right: 'Hybrid Cloud', eyebrow: 'Deployment model', summary: 'Choose between a fully private environment and an architecture that connects private and public resources.' },
  { category: 'Cloud Infrastructure', left: 'Cloud Backup', right: 'Cloud Object Storage', eyebrow: 'Data protection', summary: 'Understand when you need managed recovery workflows versus scalable object-based storage.' },
  { category: 'Cloud Infrastructure', left: 'Cloud Drive', right: 'Cloud Backup', eyebrow: 'Files & recovery', summary: 'Separate everyday file access and collaboration from protected backup copies built for recovery.' },
  { category: 'Productivity & Business Apps', left: 'Google Workspace', right: 'Managed Microsoft 365', eyebrow: 'Productivity suites', summary: 'Compare collaboration ecosystems, administration models and the support your team receives.' },
  { category: 'Productivity & Business Apps', left: 'SMB Cloud Desktop', right: 'Azure Virtual Desktop', eyebrow: 'Cloud desktops', summary: 'Compare a straightforward managed desktop service with Microsoft Azure-based virtual desktops.' },
  { category: 'Productivity & Business Apps', left: 'Tally on Cloud', right: 'MARG on Cloud', eyebrow: 'Business applications', summary: 'Find the right hosted accounting or ERP workspace for your users, branches and access needs.' },
  { category: 'Cybersecurity', left: 'Advanced Endpoint Security (EDR)', right: 'SentinelOne', eyebrow: 'Endpoint protection', summary: 'Compare managed endpoint detection and response options across prevention, visibility and response.' },
  { category: 'Cybersecurity', left: 'Cloud SIEM-as-a-Service', right: 'Cloud Security Log Monitoring', eyebrow: 'Security operations', summary: 'Decide whether your environment needs full SIEM capabilities or focused managed log monitoring.' },
  { category: 'Cybersecurity', left: 'Vortex SEG', right: 'Advanced Email Security', eyebrow: 'Email security', summary: 'Compare secure email gateway controls with layered protection for modern business email.' },
  { category: 'Cybersecurity', left: 'DPDPA Platform & Consulting', right: 'Managed GRC', eyebrow: 'Compliance', summary: 'Compare India privacy readiness with a broader managed governance, risk and compliance program.' },
  { category: 'Digital Trust', left: 'DigiCert', right: 'Sectigo', eyebrow: 'Certificate authorities', summary: 'Compare certificate portfolios, validation options and managed lifecycle support.' },
  { category: 'Digital Trust', left: 'GeoTrust', right: 'Thawte', eyebrow: 'SSL/TLS', summary: 'Review trusted SSL certificate options for websites, applications and customer-facing services.' },
  { category: 'Managed Cloud Operations', left: 'Managed AWS', right: 'Managed Multi-Cloud', eyebrow: 'Cloud management', summary: 'Compare dedicated AWS operations with a unified operating model across multiple cloud platforms.' },
  { category: 'Managed Cloud Operations', left: 'Managed DevOps', right: 'Cloud DevOps Services', eyebrow: 'DevOps delivery', summary: 'Compare ongoing managed DevOps with project-led cloud automation and delivery services.' },
];

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
  readonly comparisons = COMPARISONS.flatMap(definition => {
    const leftProduct = this.catalog.findInDirectory(definition.left);
    const rightProduct = this.catalog.findInDirectory(definition.right);
    if (!leftProduct || !rightProduct) return [];
    return [{
      ...definition,
      leftProduct,
      rightProduct,
      query: `${slugify(leftProduct.name)},${slugify(rightProduct.name)}`,
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
