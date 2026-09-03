import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { ProductPage } from './product.page';

@Component({
  selector: 'xh-cloud-mdm-page',
  standalone: true,
  imports: [ProductPage, RouterLink],
  templateUrl: './cloud-mdm.page.html',
  styleUrl: './cloud-mdm.page.css',
  host: { class: 'cloud-mdm-page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloudMdmPage {
  readonly billingCycle = signal<'annual' | 'monthly'>('annual');

  private readonly seo = inject(SeoService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  constructor() {
    this.seo.set(
      'Cloud MDM & Unified Endpoint Management India | XcellHost',
      'Manage and secure Windows, macOS, iOS, Android and Linux endpoints with zero-touch enrolment, compliance automation and Zero Trust.',
      '/cloud-mdm/',
    );
  }

  requestCallback(): void {
    this.topics.ask('Cloud MDM & Unified Endpoint Management');
    this.overlay.open('callback');
  }

  setBillingCycle(cycle: 'annual' | 'monthly'): void {
    this.billingCycle.set(cycle);
  }

  toggleFaq(event: Event): void {
    const button = event.currentTarget as HTMLElement;
    const item = button.closest<HTMLElement>('.faq2');
    if (!item) return;
    const answer = item.querySelector<HTMLElement>('.faq2-a');
    const isOpen = item.classList.toggle('open');
    if (answer) answer.style.maxHeight = isOpen ? answer.scrollHeight + 'px' : '0';
  }
}
