import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from './callback-topic.service';
import { PHONE_VALIDATORS, firstError } from './form.util';

const SUBMIT_LABEL = '📞 Request My Callback';
const NOW = 'Right now';

/** The four `.cb-slot` chips: what the visitor sees, and what the payload says. */
export const CALLBACK_SLOTS: { value: string; label: string }[] = [
  { value: NOW, label: '⚡ Right now' },
  { value: 'Morning (9 AM–12 PM)', label: '🌅 Morning' },
  { value: 'Afternoon (12–4 PM)', label: '☀️ Afternoon' },
  { value: 'Evening (4–8 PM)', label: '🌆 Evening' },
];

/**
 * The callback request (`#callback`) and the fixed `.cb-tab` side tab that
 * opens it: contact fields, a topic, four time-slot chips, and a confirmation
 * panel repeating the number and the chosen slot.
 *
 * The subject is supplied through `CallbackTopicService.ask()` before the layer
 * is opened; opening without one leaves the topic blank, as the original did.
 */
@Component({
  selector: 'xh-callback-modal',
  standalone: true,
  host: { style: 'display:contents' },
  imports: [ReactiveFormsModule],
  templateUrl: './callback-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallbackModalComponent {
  readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly leads = inject(LeadService);
  private readonly fb = inject(FormBuilder);

  readonly slots = CALLBACK_SLOTS;

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    phone: ['', PHONE_VALIDATORS],
    email: [''],
    company: [''],
    topic: [''],
  });

  readonly slot = signal(NOW);
  readonly error = signal('');
  readonly busy = signal(false);
  readonly done = signal(false);
  readonly reference = signal('');

  /** Repeated back on the confirmation panel (`#cbDonePhone`, `#cbDoneWhen`). */
  readonly confirmedPhone = signal('');
  readonly confirmedWhen = signal('');

  readonly submitLabel = computed(() => (this.busy() ? 'Requesting…' : SUBMIT_LABEL));

  constructor() {
    effect(() => {
      const open = this.overlay.isOpen('callback');
      untracked(() => {
        if (open) this.reset();
        else this.topics.clear();
      });
    });
  }

  open(): void {
    this.overlay.open('callback');
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
    this.overlay.close('callback');
  }

  pick(value: string): void {
    this.slot.set(value);
  }

  async submit(): Promise<void> {
    if (this.busy()) return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set(
        firstError(Object.values(this.form.controls), 'Please enter your name and phone number.'),
      );
      return;
    }

    this.error.set('');
    this.busy.set(true);

    const v = this.form.getRawValue();
    const slot = this.slot();
    const result = await this.leads.submit('callback', {
      customer: { name: v.name, phone: v.phone, email: v.email, company: v.company },
      topic: v.topic.trim() || 'General enquiry',
      preferred_time: slot,
      delivery: ['whatsapp', 'email'],
      zoho: { action: 'create_callback_lead_and_task' },
    });

    this.busy.set(false);

    if (!result.ok && !result.skipped) {
      this.error.set('Connection issue — please use WhatsApp instead.');
      return;
    }

    this.confirmedPhone.set(v.phone);
    this.confirmedWhen.set(
      slot === NOW
        ? 'as soon as possible — usually within 30 minutes.'
        : `during your chosen slot: ${slot}.`,
    );
    this.reference.set(result.ref);
    this.done.set(true);
  }

  private reset(): void {
    this.done.set(false);
    this.busy.set(false);
    this.error.set('');
    this.slot.set(NOW);
    this.form.reset({ topic: this.topics.topic() });
  }
}
