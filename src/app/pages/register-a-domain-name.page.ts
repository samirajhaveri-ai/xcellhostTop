import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-register-a-domain-name-page', standalone: true,
  imports: [RouterLink, ImportedInteractiveContentComponent, InsightsSectionComponent],
  templateUrl: './register-a-domain-name.page.html',
  styles: [':host{display:block}.ec-closing{padding:24px 0 48px}.ec-actions{display:flex;gap:12px;flex-wrap:wrap}.ec-actions .btn-ghost{background:transparent;border-color:#ffffff66;color:white}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DomainRegistrationPage {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  constructor() {
    inject(SeoService).set('Register A Domain Name | XcellHost', 'Compare domain extensions, registration and renewal prices, and request domain registration or transfer assistance from XcellHost.', '/register-a-domain-name');
  }
  request(): void {
    this.topics.ask('Register A Domain Name', { firstName: '', lastName: '', company: '', email: '', help: 'Request a CallBack', details: 'Domain registration, renewals and transfer enquiry' });
    this.overlay.open('callback');
  }
}
