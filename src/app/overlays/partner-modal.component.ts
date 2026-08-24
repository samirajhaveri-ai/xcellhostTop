import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { EMAIL_VALIDATORS, PHONE_VALIDATORS, firstError } from './form.util';

const SUBMIT_LABEL = 'Submit Partner Application';

/** The `#pnType` dropdown, in the original order. */
export const PARTNER_TYPES: string[] = [
  'Reseller / MSP',
  'MSSP (Security Services)',
  'System Integrator',
  'Referral / Affiliate',
  'Distributor',
  'Other',
];

/**
 * The partner-programme application (`#partner`): a seven-field form that
 * becomes a confirmation panel with the reference number.
 *
 * Opened by anything that calls `OverlayService.open('partner')` — the footer
 * "Become a Partner" link in this build.
 */
@Component({
  selector: 'xh-partner-modal',
  standalone: true,
  host: { style: 'display:contents' },
  imports: [ReactiveFormsModule],
  templateUrl: './partner-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerModalComponent {
  readonly overlay = inject(OverlayService);
  private readonly leads = inject(LeadService);
  private readonly fb = inject(FormBuilder);

  readonly types = PARTNER_TYPES;

  readonly form = this.fb.nonNullable.group({
    company: ['', Validators.required],
    contact: ['', Validators.required],
    email: ['', EMAIL_VALIDATORS],
    phone: ['', PHONE_VALIDATORS],
    city: [''],
    type: [PARTNER_TYPES[0]],
    products: [''],
  });

  readonly error = signal('');
  readonly busy = signal(false);
  readonly done = signal(false);
  readonly reference = signal('');

  readonly submitLabel = computed(() => (this.busy() ? 'Submitting…' : SUBMIT_LABEL));

  constructor() {
    effect(() => {
      if (this.overlay.isOpen('partner')) this.reset();
    });
  }

  /**
   * The `.trial` layer sits above `.tr-back` in the stacking order, so the
   * backdrop never receives the click itself. Close only when the press
   * landed on the layer rather than inside the card.
   */
  onBackdrop(ev: Event): void {
    if (ev.target === ev.currentTarget) this.close();
  }

  close(): void {
    this.overlay.close('partner');
  }

  async submit(): Promise<void> {
    if (this.busy()) return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set(
        firstError(Object.values(this.form.controls), 'Please fill all required fields.'),
      );
      return;
    }

    this.error.set('');
    this.busy.set(true);

    const v = this.form.getRawValue();
    const result = await this.leads.submit('partner', {
      partner: {
        company: v.company,
        contact: v.contact,
        email: v.email,
        phone: v.phone,
        city: v.city,
        partner_type: v.type,
        products: v.products,
      },
      zoho: { action: 'create_partner_lead' },
    });

    this.busy.set(false);

    if (!result.ok && !result.skipped) {
      this.error.set('Connection issue — please WhatsApp us instead.');
      return;
    }

    this.reference.set(result.ref);
    this.done.set(true);
  }

  private reset(): void {
    this.done.set(false);
    this.busy.set(false);
    this.error.set('');
    this.form.reset();
  }
}
