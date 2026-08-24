import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { DocRequestService } from '../core/doc-request.service';
import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { DOC_META } from '../data/site.data';
import { EMAIL_VALIDATORS, PHONE_VALIDATORS, firstError } from './form.util';

const DONE_TITLE = 'On its way! ✓';
const DONE_SUB =
  'Check your email & WhatsApp in a moment. Our team can also walk you through it.';

/**
 * The infosheet / presentation download gate (`#docModal`).
 *
 * `DocRequestService` says which document was asked for and for which product;
 * `DOC_META` supplies the emoji, badge, heading and button copy for that kind.
 */
@Component({
  selector: 'xh-doc-modal',
  standalone: true,
  host: { style: 'display:contents' },
  imports: [ReactiveFormsModule],
  templateUrl: './doc-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocModalComponent {
  readonly overlay = inject(OverlayService);
  private readonly docs = inject(DocRequestService);
  private readonly leads = inject(LeadService);
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', EMAIL_VALIDATORS],
    phone: ['', PHONE_VALIDATORS],
  });

  readonly error = signal('');
  readonly busy = signal(false);
  readonly done = signal(false);
  readonly reference = signal('');

  readonly meta = computed(() => DOC_META[this.docs.kind()] ?? DOC_META['infosheet']);

  readonly title = computed(() => {
    if (this.done()) return DONE_TITLE;
    const product = this.docs.product();
    return this.meta().title + (product ? ' — ' + product : '');
  });

  readonly sub = computed(() => (this.done() ? DONE_SUB : this.meta().sub));

  readonly submitLabel = computed(() => (this.busy() ? 'Sending…' : this.meta().cta));

  constructor() {
    effect(() => {
      // the original never reset this modal, so a second visit was unusable
      if (this.overlay.isOpen('doc')) this.reset();
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
    this.overlay.close('doc');
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
    const result = await this.leads.submit('doc', {
      doc: this.docs.kind(),
      product: this.docs.product(),
      customer: { name: v.name, email: v.email, phone: v.phone },
      delivery: ['email', 'whatsapp'],
      zoho: { action: 'create_lead_and_send_document' },
    });

    this.busy.set(false);

    if (!result.ok && !result.skipped) {
      this.error.set('Connection issue — please WhatsApp us.');
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
