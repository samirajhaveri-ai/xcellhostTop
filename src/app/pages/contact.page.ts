import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-contact-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.css',
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {
  private readonly fb = inject(FormBuilder);
  private readonly leads = inject(LeadService);
  private readonly overlay = inject(OverlayService);
  private readonly seo = inject(SeoService);
  private readonly doc = inject(DOCUMENT);

  readonly enquiryOptions = [
    'Customer',
    'Partner',
    'Vendor',
    'Schedule 1:1 Demo',
    'Ask for Free Trial',
    'Request a Callback',
  ];

  readonly form = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    countryCode: ['+91', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9\s()+-]{7,18}$/)]],
    company: ['', Validators.required],
    enquiryType: ['Customer', Validators.required],
    captcha: ['', [Validators.required, Validators.pattern(/^9$/)]],
    consent: [false, Validators.requiredTrue],
  });

  readonly busy = signal(false);
  readonly done = signal(false);
  readonly error = signal('');
  readonly reference = signal('');

  constructor() {
    this.seo.set(
      'Contact XcellHost — Cloud & Security Experts',
      'Talk to XcellHost about cloud, cybersecurity, support, partnerships and free trials.',
      '/contact/',
    );
  }

  openCallback(): void {
    this.overlay.open('callback');
  }

  async submit(): Promise<void> {
    if (this.busy()) return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set('Please complete all required fields, solve the captcha and accept the privacy terms.');
      return;
    }

    this.error.set('');
    this.busy.set(true);
    const value = this.form.getRawValue();
    const fullName = `${value.firstName} ${value.lastName}`.trim();
    const phone = `${value.countryCode} ${value.phone}`.trim();
    const result = await this.leads.submit('callback', {
      customer: { name: fullName, email: value.email, phone, company: value.company },
      topic: value.enquiryType,
      source_page: 'contact',
      consent: value.consent,
    });
    this.busy.set(false);

    if (!result.ok && !result.skipped) {
      this.error.set('We could not send your message. Please call or WhatsApp us instead.');
      return;
    }

    this.reference.set(result.ref);
    this.done.set(true);

    if (result.skipped) {
      const href = this.leads.mailtoLink(
        `Website enquiry: ${value.enquiryType}`,
        `Name: ${fullName}\nCompany: ${value.company}\nEmail: ${value.email}\nPhone: ${phone}\nEnquiry: ${value.enquiryType}\nReference: ${result.ref}`,
      );
      this.doc.defaultView?.open(href, '_self');
    }
  }
}
