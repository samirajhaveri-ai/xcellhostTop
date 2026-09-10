import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation, inject, signal } from '@angular/core';
import { LeadService } from '../core/lead.service';

@Component({
  selector: 'xh-email-signature-content',
  standalone: true,
  templateUrl: './email-signature-content.component.html',
  styleUrl: './email-signature-shared.css',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailSignatureContentComponent {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly leads = inject(LeadService);
  readonly activeTab = signal(0);

  readonly submitting = signal(false);
  readonly status = signal('');
  readonly videoPreviews = [
    { title: 'Product tour', caption: 'How XcellHost designs, deploys and manages your company email signatures' },
    { title: 'Design a signature', caption: 'Design a branded signature with the visual signature designer' },
    { title: 'Run a banner campaign', caption: 'Create and schedule a banner campaign across your company' },
  ];

  scrollToContact(event: Event): void {
    event.preventDefault();
    this.host.nativeElement.shadowRoot?.getElementById('email-signature-contact')?.scrollIntoView({ behavior: 'smooth' });
  }


  async submitCallback(event: Event): Promise<void> {
    event.preventDefault();
    if (this.submitting()) return;
    const form = event.target as HTMLFormElement;
    if (!form.reportValidity()) return;
    const payload = Object.fromEntries(new FormData(form).entries());
    this.submitting.set(true);
    this.status.set('Sending your request…');
    const result = await this.leads.submit('callback', { ...payload, product: 'Email Signature' });
    this.submitting.set(false);
    if (!result.ok) {
      this.status.set('Your request could not be sent. Please try again or contact us by phone, email or WhatsApp.');
    } else if (result.skipped) {
      this.status.set('Please send the prepared email to complete your callback request.');
      window.location.href = this.leads.mailtoLink('Email Signature consultation', Object.entries(payload).map(([key, value]) => `${key}: ${value}`).join('\n'));
    } else {
      this.status.set('Thank you — your callback request has been received.');
      form.reset();
    }
  }
}
