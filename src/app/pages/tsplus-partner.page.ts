import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { InsightsSectionComponent } from '../sections/insights-section.component';
import { TsplusPartnerHeroComponent } from '../sections/tsplus-partner-hero.component';

@Component({
  selector: 'xh-tsplus-partner-page',
  standalone: true,
  imports: [RouterLink, InsightsSectionComponent, TsplusPartnerHeroComponent],
  templateUrl: './tsplus-partner.page.html',
  styleUrl: './tsplus-partner.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TsplusPartnerPage {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  constructor() {
    inject(SeoService).set(
      'TSplus Remote Access & Support Solutions | XcellHost',
      'Explore TSplus Remote Access, Advanced Security, Remote Support and Server Monitoring with managed deployment and 24x7 support from XcellHost.',
      '/vendor-partners/tsplus/',
    );
  }

  requestConsultation(): void {
    this.topics.ask('TSplus solutions consultation');
    this.overlay.open('callback');
  }
}
