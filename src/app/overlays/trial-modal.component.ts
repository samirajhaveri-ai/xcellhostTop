import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { EMAIL_VALIDATORS, PHONE_VALIDATORS, ZOHO_ORG_ID, firstError } from './form.util';

const SUBMIT_LABEL = 'Activate My Free Trial';
const DEFAULT_PRODUCT = 'General trial request';

/**
 * The free-trial gate (`#trial`): a five-field request form that becomes a
 * confirmation panel naming the product and the reference number.
 *
 * Opened by anything that calls `OverlayService.open('trial')`.
 */
@Component({
  selector: 'xh-trial-modal',
  standalone: true,
  host: { style: 'display:contents' },
  imports: [ReactiveFormsModule],
  templateUrl: './trial-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrialModalComponent {
  readonly overlay = inject(OverlayService);
  private readonly leads = inject(LeadService);
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    product: [''],
    name: ['', Validators.required],
    email: ['', EMAIL_VALIDATORS],
    phone: ['', PHONE_VALIDATORS],
    company: [''],
  });

  readonly error = signal('');
  readonly busy = signal(false);
  readonly done = signal(false);
  readonly reference = signal('');
  /** The product named on the confirmation panel (`#trDoneProd`). */
  readonly product = signal(DEFAULT_PRODUCT);

  readonly submitLabel = computed(() => (this.busy() ? 'Setting up your trial…' : SUBMIT_LABEL));

  constructor() {
    effect(() => {
      if (this.overlay.isOpen('trial')) this.reset();
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
    this.overlay.close('trial');
  }

  async submit(): Promise<void> {
    if (this.busy()) return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set(
        firstError(Object.values(this.form.controls), 'Please fill name, email and phone.'),
      );
      return;
    }

    this.error.set('');
    this.busy.set(true);

    const v = this.form.getRawValue();
    const product = v.product.trim() || DEFAULT_PRODUCT;
    const result = await this.leads.submit('trial', {
      product,
      customer: { name: v.name, email: v.email, phone: v.phone, company: v.company },
      delivery: ['email', 'whatsapp'],
      zoho: { org_id: ZOHO_ORG_ID, action: 'create_trial_lead' },
    });

    this.busy.set(false);

    if (!result.ok && !result.skipped) {
      this.error.set('Connection issue — please WhatsApp us instead.');
      return;
    }

    this.product.set(product);
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
