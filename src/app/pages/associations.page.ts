import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { SeoService } from '../core/seo.service';

interface Association {
  name: string;
  image: string;
}

interface LinkedAssociation extends Association {
  website: string;
}

type AssociationTab = 'it-trade' | 'country' | 'industry' | 'business-network' | 'affiliate';

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

  readonly activeTab = signal<AssociationTab>('it-trade');
  readonly tabs: readonly { id: AssociationTab; label: string }[] = [
    { id: 'it-trade', label: 'IT Trade Associations' },
    { id: 'industry', label: 'Industry Associations' },
    { id: 'country', label: 'Country Associations' },
    { id: 'business-network', label: 'Business Network' },
    { id: 'affiliate', label: 'Affiliate Network' },
  ];

  readonly countryAssociations: readonly Association[] = [
    { name: 'Indo-German Chamber of Commerce', image: '/assets/images/associations/country/indo-german-chamber.png' },
    { name: 'Indo-French Chamber of Commerce', image: '/assets/images/associations/country/indo-french-chamber.jpg' },
    { name: 'Indo-American Chamber of Commerce', image: '/assets/images/associations/country/indo-american-chamber.png' },
    { name: 'Indo-African Chamber of Commerce & Industry', image: '/assets/images/associations/country/indo-african-chamber.jpg' },
    { name: 'Asian-African Chamber of Commerce & Industry', image: '/assets/images/associations/industry-asian-african-chamber.png' },
  ];

  readonly itTradeAssociations: readonly LinkedAssociation[] = [
    { name: 'ASIRT', image: '/assets/images/associations/trade/asirt.jpg', website: 'https://asirt.in/' },
    { name: 'TAIT', image: '/assets/images/associations/trade/tait.png', website: 'https://tait.in/' },
    { name: 'ISODA', image: '/assets/images/associations/trade/isoda.png', website: 'https://isoda.in/' },
    { name: 'PCAIT', image: '/assets/images/associations/trade/pcait.png', website: 'https://www.pcait.in/' },
    { name: 'GESIA', image: '/assets/images/associations/trade/gesia.png', website: 'https://gesia.org/' },
    { name: 'COMPASS', image: '/assets/images/associations/trade/compass.jpg', website: 'https://www.compassindia.com/' },
    { name: 'CMDA', image: '/assets/images/associations/industry-cmda.png', website: 'https://cmdapune.org/' },
  ];
  readonly industryAssociations: readonly Association[] = [
    {
      name: 'Mahratta Chamber of Commerce, Industries and Agriculture (MCCIA)',
      image: '/assets/images/associations/industry-mccia.png',
    },
    {
      name: 'SME Chamber of India',
      image: '/assets/images/associations/industry-sme-chamber-india.png',
    },
    
  ];

  readonly businessNetworkAssociations: readonly Association[] = [
    {
      name: 'TiE Mumbai',
      image: '/assets/images/associations/business-tie-mumbai.jpg',
    },
    {
      name: 'India Business Group',
      image: '/assets/images/associations/business-india-business-group.jpg',
    },
    {
      name: 'Tajurba',
      image: '/assets/images/associations/business-tajurba.jpg',
    },
    {
      name: 'Business Leadership League (BLL)',
      image: '/assets/images/associations/business-leadership-league.jpg',
    },
  ];

  readonly affiliateAssociations: readonly Association[] = [
    {
      name: 'Industry Association Member',
      image: '/assets/images/associations/industry-association-member.avif',
    },
    {
      name: 'The Institute of Company Secretaries of India (ICSI)',
      image: '/assets/images/associations/affiliate-icsi.png',
    },
  ];

  constructor() {
    this.seo.set(
      'Associations | XcellHost',
      'Explore the IT trade, country, industry and affiliate associations connected with XcellHost.',
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
