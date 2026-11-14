import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-nigeria-ndpa-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: '<xh-imported-interactive-content source="nigeria-ndpa" />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NigeriaNdpaPage {
  constructor() {
    inject(SeoService).set('Nigeria Data Protection Act (NDPA) | XcellHost', 'Explore Nigeria NDPA compliance, NDPC tiers, readiness, breach response, cross-border transfers and compliance services from XcellHost.', '/cybersecurity-frameworks/nigeria-data-protection-act-ndpa');
  }
}
