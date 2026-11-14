import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-eccouncil-services-page', standalone: true,
  imports: [RouterLink, ImportedInteractiveContentComponent, InsightsSectionComponent],
  templateUrl: './eccouncil-services.page.html',
  styles: [':host{display:block}.ec-closing{padding:24px 0 48px}.ec-actions{display:flex;gap:12px;flex-wrap:wrap}.ec-actions .btn-ghost{background:transparent;border-color:#ffffff66;color:white}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EccouncilServicesPage {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  constructor() {
    inject(SeoService).set('EC-Council Programs & Training | XcellHost', 'Explore EC-Council certifications, role-based training paths, readiness tools and team training quotations from XcellHost.', '/vendor-partners/eccouncil');
  }
  request(): void {
    this.topics.ask('EC-Council Programs', { firstName: '', lastName: '', company: '', email: '', help: 'Request a CallBack', details: 'EC-Council courses, certification vouchers and team training enquiry' });
    this.overlay.open('callback');
  }
}
