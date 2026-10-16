import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-zoho-sign-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './zoho-sign.page.html',
  styleUrl: './zoho-sign.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZohoSignPage {
  readonly features = [
    { title: 'Sign from anywhere', text: 'Send documents for electronic signatures and let recipients sign online.' },
    { title: 'Reusable templates', text: 'Prepare templates for repeat documents such as offer letters, agreements and onboarding forms.' },
    { title: 'Signing workflows', text: 'Choose recipients, assign their roles and set sequential or parallel signing orders.' },
    { title: 'Audit trails', text: 'Keep a record of the signing process alongside your completed documents.' },
  ];

  constructor() {
    inject(SeoService).set(
      'Zoho Sign | Digital Signatures | XcellHost',
      'Explore Zoho Sign for online document signing, reusable templates, signing workflows and audit trails. Contact XcellHost to discuss your requirements.',
      '/zoho-sign',
    );
  }
}
