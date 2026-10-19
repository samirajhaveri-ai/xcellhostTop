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
  leftLogo?: string;
  rightLogo?: string;
  query: string;
  detailSlug: string;
}

const XCELLHOST_LOGO = '/assets/images/xcellhost-logo.png';
const COMPARISON_PRODUCT_LOGOS: Readonly<Record<string, string>> = {
  'TSplus Remote Access': '/assets/images/remote-access-logo-with-icon.svg',
  Citrix: '/assets/images/comparison-logos/citrix.png',
  AnyDesk: '/assets/images/vendor-partners/33-anydesk.png',
  RDS: '/assets/images/cloud-backup-platforms/microsoft-windows.svg',
  TeamViewer: '/assets/images/vendor-partners/13-teamviewer.png',
  LogMeIn: '/assets/images/comparison-logos/logmein.png',
  'Zoho Assist': '/assets/images/comparison-logos/zoho-assist.png',
  'Advanced Endpoint Security (EDR)': '/assets/images/acronis-edr-logo.png',
  'Microsoft Defender': '/assets/images/vendor-partners/45-microsoft-defender-for-endpoint.png',
  'All Fortinet Products': '/assets/images/vendor-partners/64-fortinet.png',
  'All PaloAlto Products': '/assets/images/vendor-partners/05-palo-alto-networks-1.png',
  GeoTrust: '/assets/images/geotrust.svg',
  DigiCert: '/assets/images/digicert.svg',
  'Performance Cloud': XCELLHOST_LOGO,
  'Bare Metal Server': XCELLHOST_LOGO,
  'Dedicated Private Cloud': XCELLHOST_LOGO,
  'Hybrid Cloud': XCELLHOST_LOGO,
  'Cloud Backup': XCELLHOST_LOGO,
  'Cloud Object Storage': XCELLHOST_LOGO,
  'Cloud Drive': XCELLHOST_LOGO,
  'Google Workspace': '/assets/images/cloud-backup-platforms/google-workspace.svg',
  'Managed Microsoft 365': '/assets/images/vendor-partners/02-microsoft-partner.png',
  'SMB Cloud Desktop': XCELLHOST_LOGO,
  'Azure Virtual Desktop': '/assets/images/vendor-partners/02-microsoft-partner.png',
  'Tally on Cloud': '/assets/images/tally-prime-7-logo.png',
  'MARG on Cloud': XCELLHOST_LOGO,
  'Cloud SIEM-as-a-Service': XCELLHOST_LOGO,
  'Cloud Security Log Monitoring': XCELLHOST_LOGO,
  'Vortex SEG': '/assets/images/vortex-seg-logo.svg',
  'Advanced Email Security': XCELLHOST_LOGO,
  'DPDPA Platform & Consulting': XCELLHOST_LOGO,
  'Managed GRC': XCELLHOST_LOGO,
  Sectigo: '/assets/images/sectigo.svg',
  'Managed AWS': '/assets/images/platforms/aws.svg',
  'Managed Multi-Cloud': XCELLHOST_LOGO,
  'Managed DevOps': '/assets/images/cloud-devops-xcellhost-logo.png',
  'Cloud DevOps Services': '/assets/images/cloud-devops-xcellhost-logo.png',
};

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
      leftLogo: COMPARISON_PRODUCT_LOGOS[definition.left],
      rightLogo: COMPARISON_PRODUCT_LOGOS[definition.right],
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
