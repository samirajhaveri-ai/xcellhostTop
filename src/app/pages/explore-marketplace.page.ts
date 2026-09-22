import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SeoService } from '../core/seo.service';
import { CURATED_MARKETPLACE_LISTINGS, LISTING_CATEGORIES } from '../data/marketplace-listings.data';
import { filterMarketplaceListings, MARKETPLACE_CATEGORIES, MarketplaceCategoryId, MarketplaceSort } from '../data/marketplace.data';

@Component({
  selector: 'xh-explore-marketplace-page',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './explore-marketplace.page.html',
  styleUrl: './explore-marketplace.page.css',
})
export class ExploreMarketplacePage {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  readonly listings = CURATED_MARKETPLACE_LISTINGS;
  readonly listingCategories = LISTING_CATEGORIES;
  readonly query = signal('');
  readonly selectedCategory = signal<MarketplaceCategoryId | 'all'>('all');
  readonly sort = signal<MarketplaceSort>('featured');
  readonly limit = signal(18);
  readonly popularSearches = ['GPU Compute', 'Microsoft 365', 'Disaster Recovery', 'Managed SOC'];
  readonly categories = MARKETPLACE_CATEGORIES.map((category, index) => ({
    ...category,
    tabLabel: category.id === 'licenses' ? 'Licenses' : category.name,
    tabIcon: ['work', 'auto_awesome', 'build', 'key', 'person', 'bolt', 'groups'][index],
    tabColor: ['#1681ef', '#8757e5', '#16a05b', '#ed8500', '#377de8', '#06a7ae', '#6b63dc'][index],
    count: this.listings.filter(listing => listing.category === category.id).length,
  }));
  readonly filteredListings = computed(() => filterMarketplaceListings(this.listings, this.query(), this.selectedCategory(), this.sort()));
  readonly visibleListings = computed(() => this.filteredListings().slice(0, this.limit()));
  readonly activeCategory = computed(() => this.categories.find(category => category.id === this.selectedCategory()));

  constructor() {
    inject(ActivatedRoute).queryParamMap.pipe(takeUntilDestroyed()).subscribe(params => {
      const category = params.get('category');
      this.selectedCategory.set(this.listingCategories.find(item => item.id === category)?.id ?? 'all');
      this.limit.set(18);
    });
    inject(SeoService).set('XcellHost Cloud Marketplace', 'Discover XcellHost cloud infrastructure, security, productivity, data protection, AI and software services.', '/explore-marketplace');
  }
  updateQuery(value: string): void { this.query.set(value); this.limit.set(18); }
  selectCategory(category: MarketplaceCategoryId | 'all', scroll = false): void {
    if (category === 'alliances') {
      void this.router.navigate(['/company/vendor-partners']);
      return;
    }
    if (category === 'professional' || category === 'accelerators') {
      void this.router.navigate(['/contact'], { queryParams: { service: category === 'professional' ? 'Professional Services' : 'Accelerators' } });
      return;
    }
    this.selectedCategory.set(category); this.query.set(''); this.limit.set(18);
    if (scroll) this.scrollToListings();
  }
  searchFor(value: string): void { this.selectedCategory.set('all'); this.updateQuery(value); this.scrollToListings(); }
  updateSort(value: string): void {
    if (value === 'featured' || value === 'az' || value === 'za') this.sort.set(value);
    this.limit.set(18);
  }
  resetFilters(): void { this.query.set(''); this.selectedCategory.set('all'); this.limit.set(18); }
  scrollToListings(event?: Event): void {
    event?.preventDefault();
    const reduced = this.document.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.document.getElementById('marketplace-catalogue')?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' });
  }
}
