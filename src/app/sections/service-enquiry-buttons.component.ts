import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-service-enquiry-buttons',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display:contents' },
  template: `
    <a class="btn btn-ghost" href="#" (click)="enquire($event, 'Free Consultation')">Free Consultation</a>
    <a class="btn btn-ghost" href="#" (click)="enquire($event, 'Free Demo')">Free Demo</a>
    <a class="btn btn-ghost" href="#" (click)="trial($event)">Free Trial</a>
  `,
  styles: `
    a { display:inline-flex; align-items:center; justify-content:center; padding:10px 20px;
      border:1.5px solid rgba(255,255,255,.4); border-radius:8px; background:transparent;
      color:#fff; font:600 14px/1.6 var(--body, sans-serif); text-decoration:none; white-space:nowrap; }
    a:hover { background:rgba(255,255,255,.1); border-color:#fff; }
    a:focus-visible { outline:2px solid #fff; outline-offset:3px; }
  `,
})
export class ServiceEnquiryButtonsComponent {
  readonly product = input('');
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  enquire(event: Event, request: string): void {
    event.preventDefault();
    this.topics.ask(this.product() ? `${this.product()} - ${request}` : request);
    this.overlay.open('callback');
  }

  trial(event: Event): void {
    event.preventDefault();
    this.overlay.open('trial');
  }
}
