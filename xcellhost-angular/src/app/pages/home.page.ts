import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SeoService } from '../core/seo.service';
import {
  CasesComponent,
  CtaBandComponent,
  DirectoryComponent,
  FlagshipComponent,
  HeroComponent,
  IndustriesComponent,
  InsightsSectionComponent,
  MarqueeComponent,
  QuoteComponent,
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
    WhyComponent,
    IndustriesComponent,
    CasesComponent,
    InsightsSectionComponent,
    QuoteComponent,
    CtaBandComponent,
  ],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <xh-hero />
    <xh-trust-bar />
    <xh-marquee />
    <xh-flagship />
    <xh-directory />
    <xh-why />
    <xh-industries />
    <xh-cases />
    <xh-insights-section />
    <xh-quote />
    <xh-cta-band />
  `,
})
export class HomePage {
  constructor() {
    inject(SeoService).set(TITLE, DESCRIPTION, '/');
  }
}
