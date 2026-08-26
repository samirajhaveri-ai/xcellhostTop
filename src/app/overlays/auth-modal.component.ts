import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from './callback-topic.service';
import { EMAIL_VALIDATORS, PHONE_VALIDATORS, firstError } from './form.util';

type AuthTab = 'in' | 'up';

/**
 * The customer login / new-account modal (`#auth`).
 *
 * There is no authentication here and never was: the login tab is four links —
 * two straight to the hosted billing and support portals, two that hand over to
 * the callback modal with a subject. The signup tab captures anal.
//  */ 
//  * confirms in place; it has no webhook, exactly like the origi
@Component({
  selector: 'xh-auth-modal',
  standalone: true,
  host: { style: 'display:contents' },
  imports: [ReactiveFormsModule],
  templateUrl: './auth-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthModalComponent {
  readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    company: [''],
    email: ['', EMAIL_VALIDATORS],
    phone: ['', PHONE_VALIDATORS],
    gstin: [''],
  });

  readonly tab = signal<AuthTab>('in');
  readonly error = signal('');
  readonly submitted = signal(false);

  constructor() {
    effect(() => {
      // the original opened on the login tab every time
      if (this.overlay.isOpen('auth')) this.reset();
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
    this.overlay.close('auth');
  }

  select(tab: AuthTab): void {
    this.tab.set(tab);
  }

  /** The two portals with no hosted login route to a callback instead. */
  requestCallback(event: Event, topic: string): void {
    event.preventDefault();
    this.topics.ask(topic);
    this.overlay.close('auth');
    this.overlay.open('callback');
  }

  /**
   * No endpoint exists for signups, so this only validates and confirms — the
   * original posted to an empty webhook and showed a native `alert()`.
   */
  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set(
        firstError(Object.values(this.form.controls), 'Please fill name, email and phone.'),
      );
      return;
    }
    this.error.set('');
    this.submitted.set(true);
  }

  private reset(): void {
    this.tab.set('in');
    this.submitted.set(false);
    this.error.set('');
    this.form.reset();
  }
}
