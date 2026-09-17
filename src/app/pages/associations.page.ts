import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { SeoService } from '../core/seo.service';

interface Association {
  name: string;
  image: string;
}

type AssociationTab = 'country' | 'trade';

@Component({
  selector: 'xh-associations-page',
  standalone: true,
  templateUrl: './associations.page.html',
  styleUrl: './associations.page.css',
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssociationsPage {
  private readonly seo = inject(SeoService);

  readonly activeTab = signal<AssociationTab>('country');
  readonly tabs: readonly { id: AssociationTab; label: string }[] = [
    { id: 'country', label: 'Country Associated' },
    { id: 'trade', label: 'Trade Associate' },
  ];

  readonly countryAssociations: readonly Association[] = [
    { name: 'Indo-African Chamber of Commerce & Industry', image: '/assets/images/associations/country/indo-african-chamber.jpg' },
    { name: 'Indo-American Chamber of Commerce', image: '/assets/images/associations/country/indo-american-chamber.png' },
    { name: 'Indo-French Chamber of Commerce', image: '/assets/images/associations/country/indo-french-chamber.jpg' },
    { name: 'Indo-German Chamber of Commerce', image: '/assets/images/associations/country/indo-german-chamber.png' },
  ];

  readonly tradeAssociations: readonly Association[] = [
    { name: 'COMPASS', image: '/assets/images/associations/trade/compass.jpg' },
    { name: 'GESIA', image: '/assets/images/associations/trade/gesia.png' },
    { name: 'PCAIT', image: '/assets/images/associations/trade/pcait.png' },
    { name: 'ISODA', image: '/assets/images/associations/trade/isoda.png' },
    { name: 'TAIT', image: '/assets/images/associations/trade/tait.png' },
    { name: 'ASIRT', image: '/assets/images/associations/trade/asirt.jpg' },
  ];

  constructor() {
    this.seo.set(
      'Associations | XcellHost',
      'Explore the country chambers and trade associations connected with XcellHost.',
      '/associations/',
    );
  }

  selectTab(tab: AssociationTab): void {
    this.activeTab.set(tab);
  }

  onTabKeydown(event: KeyboardEvent, index: number): void {
    let nextIndex = index;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') nextIndex = (index + 1) % this.tabs.length;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') nextIndex = (index + this.tabs.length - 1) % this.tabs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = this.tabs.length - 1;
    else return;

    event.preventDefault();
    this.activeTab.set(this.tabs[nextIndex].id);
    const tabList = (event.currentTarget as HTMLElement).parentElement;
    tabList?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex]?.focus();
  }
}
