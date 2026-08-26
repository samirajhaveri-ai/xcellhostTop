import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SeoService } from '../core/seo.service';
import {
  CasesComponent,
  DirectoryComponent,
  FlagshipComponent,
  GlobalLocationsMapComponent,
  HeroComponent,
  HostCredibilityComponent,
  IndustriesComponent,
  InsightsSectionComponent,
  MarqueeComponent,
  SatisfactionGuaranteeComponent,
  TrustBarComponent,
  WhyComponent,
} from '../sections';

/** The original `<title>` and meta description, kept byte-for-byte. */
const TITLE = 'Managed Cloud & Cybersecurity Services India | XcellHost';
const DESCRIPTION =
  'XcellHost — Mumbai-based managed cloud & cybersecurity provider since 1999. Tally on Cloud, ' +
  'Acronis Backup, DPDPA compliance & 24/7 SOC. ISO 27001 certified.';

/**
 * The routed homepage: every section stacked in the order the original
 * document had them, between the header and the footer of the app shell.
 */
@Component({
  selector: 'xh-home-page',
  standalone: true,
  imports: [
    HeroComponent,
    TrustBarComponent,
    MarqueeComponent,
    FlagshipComponent,
    DirectoryComponent,
    HostCredibilityComponent,
    WhyComponent,
    IndustriesComponent,
    CasesComponent,
    InsightsSectionComponent,
    GlobalLocationsMapComponent,
    SatisfactionGuaranteeComponent,
  ],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <xh-hero />
    <xh-trust-bar />
    <xh-marquee />
    <xh-flagship />
    <xh-directory />
    <xh-host-credibility />
    <xh-why />
    <xh-industries />
    <xh-cases />
    <xh-insights-section />
    <xh-global-locations-map />
    <xh-satisfaction-guarantee />
  `,
})
export class HomePage {
  constructor() {
    inject(SeoService).set(TITLE, DESCRIPTION, '/');
  }
}
