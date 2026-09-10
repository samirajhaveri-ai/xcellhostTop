import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-cloud-login-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cloud-login.page.html',
  styleUrl: './cloud-login.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloudLoginPage {
  readonly regions = [
    { country: 'India', flag: 'in', centers: [{ code: 'IN01', url: 'https://in01-cloud.acronis.com' }] },
    { country: 'Singapore', flag: 'sg', centers: [{ code: 'SG', url: 'https://sg-cloud.acronis.com' }] },
    { country: 'Australia', flag: 'au', centers: [{ code: 'AU1', url: 'https://au1-cloud.acronis.com' }] },
    { country: 'France', flag: 'fr', centers: [{ code: 'EU', url: 'https://eu-cloud.acronis.com' }] },
    { country: 'United Kingdom', flag: 'gb', centers: [{ code: 'EU', url: 'https://eu-cloud.acronis.com' }] },
    { country: 'Germany', flag: 'de', centers: [{ code: 'EU2', url: 'https://eu2-cloud.acronis.com' }, { code: 'EU4', url: 'https://eu4-cloud.acronis.com' }] },
    { country: 'Switzerland', flag: 'ch', centers: [{ code: 'EU5', url: 'https://eu5-cloud.acronis.com' }] },
    { country: 'Japan', flag: 'jp', centers: [{ code: 'JP', url: 'https://jp-cloud.acronis.com' }] },
    { country: 'Russia', flag: 'ru', centers: [{ code: 'RU2', url: 'https://ru2-cloud.acronis.com' }] },
    { country: 'USA', flag: 'us', centers: [{ code: 'US2', url: 'https://us-cloud.acronis.com' }, { code: 'US3', url: 'https://us3-cloud.acronis.com' }, { code: 'US4', url: 'https://us4-cloud.acronis.com' }, { code: 'US5', url: 'https://us5-cloud.acronis.com' }] },
  ];

  constructor() {
    inject(SeoService).set('Acronis Cloud Login by Region | XcellHost',
      'Choose your regional Acronis Cyber Protect Cloud console. Find login links by country and data center, with support from XcellHost.', '/cloud-login/');
  }
}
