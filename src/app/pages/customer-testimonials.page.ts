import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Location } from '@angular/common';
import { CatalogService, slugify } from '../core/catalog.service';
import { ProductPageService } from '../core/product-page.service';
import { SeoService } from '../core/seo.service';
import { MEGA_MENU } from '../data/nav.data';
import { DirectoryEntry } from '../data/models';

interface TestimonialPage {
  id: string;
  title: string;
  group: string;
  tabId: string;
  link: string | null;
  entry?: DirectoryEntry;
}

@Component({
  selector: 'xh-customer-testimonials-page',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customer-testimonials.page.html',
  styleUrl: './customer-testimonials.page.css',
})
export class CustomerTestimonialsPage {
  private readonly catalog = inject(CatalogService);
  private readonly products = inject(ProductPageService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);
  private readonly rememberedTabs = new Map<string, string>();
  private readonly rememberedPages = new Map<string, string>();
  private readonly reviewCache = new Map<string, ReturnType<ProductPageService['build']>['reviews']>();

  readonly menus = MEGA_MENU.filter(menu => menu.label !== 'Company').map(menu => {
    const pages = new Map<string, TestimonialPage>();
    for (const tab of menu.tabs) {
      for (const group of tab.groups) {
        for (const item of group.items) {
          if (item.title === 'No Data' || !item.title.trim()) continue;
          const directoryEntry = this.catalog.findInDirectory(item.title);
          const entry = this.catalog.entryBySlug(item.href?.replace(/^\//, '') ?? '')
            ?? this.catalog.entryBySlug(slugify(directoryEntry?.name ?? item.title));
          const id = slugify(item.title);
          const tabId = slugify(tab.label);
          const key = tabId + '/' + id;
          if (pages.has(key)) continue;
          pages.set(key, {
            tabId,
            id, title: item.title, group: group.heading || tab.label,
            entry: menu.label === 'Company' || menu.label === 'Insights' ? undefined : entry,
            link: item.href ?? (entry ? '/' + slugify(entry.name) : null),
          });
        }
      }
    }
    return { id: slugify(menu.label), label: menu.label,
      tabs: menu.tabs.map(tab => ({ id: slugify(tab.label), label: tab.label })),
      pages: [...pages.values()] };
  });
  readonly selectedMenuId = signal(this.menus[0]?.id ?? '');
  readonly expandedMenuId = signal(this.menus[0]?.id ?? '');
  readonly selectedTabId = signal(this.menus[0]?.tabs[0]?.id ?? '');
  readonly expandedTabId = signal(this.menus[0]?.tabs[0]?.id ?? '');
  readonly selectedPageId = signal(this.menus[0]?.pages[0]?.id ?? '');
  readonly query = signal('');
  readonly stars = [1, 2, 3, 4, 5];
  readonly activeMenu = computed(() => this.menus.find(menu => menu.id === this.selectedMenuId()));
  readonly activeTab = computed(() => this.activeMenu()?.tabs.find(tab => tab.id === this.selectedTabId()));
  readonly selectionKey = computed(() => `${this.selectedMenuId()}/${this.selectedTabId()}/${this.selectedPageId()}`);
  readonly activePage = computed(() => this.activeMenu()?.pages.find(page => page.tabId === this.selectedTabId() && page.id === this.selectedPageId()));
  readonly visibleGroups = computed(() => {
    const query = this.query().trim().toLowerCase();
    const groups = new Map<string, TestimonialPage[]>();
    for (const page of this.activeMenu()?.pages ?? []) {
      if (page.tabId !== this.selectedTabId()) continue;
      if (query && !`${page.title} ${page.group}`.toLowerCase().includes(query)) continue;
      if (!groups.has(page.group)) groups.set(page.group, []);
      groups.get(page.group)!.push(page);
    }
    return [...groups].map(([title, pages]) => ({ title, pages }));
  });
  readonly reviews = computed(() => {
    const entry = this.activePage()?.entry;
    if (!entry) return [];
    const key = entry.cat + '/' + entry.name;
    if (!this.reviewCache.has(key)) {
      this.reviewCache.set(key, this.products.build({ name: entry.name, cat: entry.cat, tag: entry.desc }).reviews);
    }
    return this.reviewCache.get(key)!;
  });

  constructor() {
    inject(SeoService).set('Customer Testimonials | XcellHost',
      'Explore customer testimonials by XcellHost service, from cloud hosting and productivity to security and digital trust.', '/customer-testimonials');
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe(params => {
      this.applySelection(params.get('category'), params.get('tab'), params.get('page'));
    });
  }

  selectMenu(menuId: string): void {
    if (menuId === this.selectedMenuId()) {
      this.expandedMenuId.set(this.expandedMenuId() === menuId ? '' : menuId);
      return;
    }
    const menu = this.menus.find(item => item.id === menuId);
    if (!menu) return;
    const tabId = this.rememberedTabs.get(menuId) ?? menu.tabs[0]?.id ?? '';
    this.selectPage(this.rememberedPages.get(menuId + '/' + tabId) ?? '', menuId, tabId);
  }

  selectTab(tabId: string): void {
    if (tabId === this.selectedTabId()) {
      this.expandedTabId.set(this.expandedTabId() === tabId ? '' : tabId);
      return;
    }
    this.selectPage(this.rememberedPages.get(this.selectedMenuId() + '/' + tabId) ?? '', this.selectedMenuId(), tabId);
  }

  selectPage(pageId: string, menuId = this.selectedMenuId(), tabId = this.selectedTabId()): void {
    if (pageId === this.selectedPageId() && menuId === this.selectedMenuId() && tabId === this.selectedTabId()) return;
    this.applySelection(menuId, tabId, pageId);
    const url = this.router.createUrlTree(['/customer-testimonials'], {
      queryParams: { category: this.selectedMenuId(), tab: this.selectedTabId(), page: this.selectedPageId() || null },
    });
    // Keep shareable selections and browser history without triggering the site's
    // scroll-to-top behavior for router navigations.
    this.location.go(this.router.serializeUrl(url));
  }

  private applySelection(menuId: string | null, tabId: string | null, pageId: string | null): void {
    const menu = this.menus.find(item => item.id === menuId) ?? this.menus[0];
    if (!menu) return;
    const requestedPage = menu.pages.find(item => item.id === pageId);
    const tab = menu.tabs.find(item => item.id === tabId)
      ?? menu.tabs.find(item => item.id === requestedPage?.tabId) ?? menu.tabs[0];
    const page = menu.pages.find(item => item.tabId === tab?.id && item.id === pageId)
      ?? menu.pages.find(item => item.tabId === tab?.id);
    if (menu.id !== this.selectedMenuId() || tab?.id !== this.selectedTabId()) this.query.set('');
    this.selectedMenuId.set(menu.id);
    this.expandedMenuId.set(menu.id);
    this.selectedTabId.set(tab?.id ?? '');
    this.expandedTabId.set(tab?.id ?? '');
    this.selectedPageId.set(page?.id ?? '');
    this.rememberedTabs.set(menu.id, tab?.id ?? '');
    this.rememberedPages.set(menu.id + '/' + tab?.id, page?.id ?? '');
  }
}
