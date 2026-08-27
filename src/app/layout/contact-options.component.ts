import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { LeadService } from '../core/lead.service';

/** Global newsletter banner displayed immediately above the site footer. */
@Component({
  selector: 'xh-contact-options',
  standalone: true,
  imports: [ReactiveFormsModule],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="newsletter" aria-labelledby="newsletter-title">
      <div class="wrap newsletter-inner">
        <div class="newsletter-copy">
          <h2 id="newsletter-title">
            Get the latest updates on new features, tutorials, and cloud hosting tips.
          </h2>
        </div>

        <form class="newsletter-form" [formGroup]="form" (ngSubmit)="submit()" novalidate>
          <label class="sr-only" for="newsletter-email">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            formControlName="email"
            autocomplete="email"
            placeholder="Enter your email"
            [attr.aria-invalid]="emailInvalid()"
            aria-describedby="newsletter-message"
          />
          <button type="submit" [disabled]="busy()">{{ buttonLabel() }}</button>
        </form>

        <p
          id="newsletter-message"
          class="form-message"
          [class.success]="done()"
          role="status"
          aria-live="polite"
        >
          {{ message() }}
        </p>
      </div>
    </section>
  `,
  styles: `
    .newsletter {
      position: relative;
      padding: 0 24px;
      overflow: hidden;
      background: linear-gradient(to bottom, #f4f8f7 0 50%, #3b63e8 50% 100%);
      color: #fff;
    }

    .newsletter-inner {
      position: relative;
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
      align-items: stretch;
      width: min(850px, 100%);
      max-width: none;
      margin-inline: auto;
      padding: 32px;
      border-radius: 6px;
      background: #32456d;
      box-shadow: 0 18px 38px rgba(105, 165, 255, 0.22);
    }

    .newsletter-copy {
      position: relative;
      z-index: 1;
    }

    .newsletter-copy h2 {
      max-width: 1120px;
      margin: 0 auto;
      color: #fff;
      text-align: center;
      font: 800 clamp(19px, 1.45vw, 1px) / 1.28 var(--disp);
      letter-spacing: 0;
    }

    .newsletter-form {
      position: relative;
      z-index: 1;
      display: grid;
      min-height: 52px;
      grid-template-columns: minmax(0, 1fr) 124px;
      gap: 8px;
      align-items: center;
    }

    .newsletter-form input {
      min-width: 0;
      min-height: 52px;
      padding: 0 18px;
      border: 1px solid #344257;
      border-radius: 8px;
      outline: 0;
      background: #e9eaeb;
      
      font: 500 15px var(--body);
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .newsletter-form input:focus {
      border-color: #7fb2ff;
      box-shadow: 0 0 0 3px rgba(127, 178, 255, 0.25);
    }

    .newsletter-form input::placeholder {
      color: #212d3f;
      opacity: 1;
    }

    .newsletter-form button {
      min-width: 0;
      min-height: 50px;
      padding: 13px 22px;
      border: 0; 
      border-radius: 8px;
      background: #3b63e8;
      box-shadow: none;
      color: #fff;
      cursor: pointer;
      font: 700 15px var(--body);
      transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
    }

    .newsletter-form button:hover:not(:disabled),
    .newsletter-form button:focus-visible {
      background: #3b63e8;
      box-shadow: 0 10px 24px rgba(8, 122, 98, 0.25);
      transform: translateY(-2px);
      outline: none;
    }

    .newsletter-form button:disabled {
      cursor: wait;
      opacity: 0.7;
    }

    .form-message {
      position: absolute;
      right: 24px;
      bottom: 10px;
      margin: 0;
      color: #fca5a5;
      font-size: 13px;
    }

    .form-message:empty {
      display: none;
    }

    .form-message.success {
      color: #86efac;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    @media (max-width: 960px) {
      .newsletter-inner {
        grid-template-columns: 1fr;
        gap: 14px;
      }

      .newsletter-form {
        width: 100%;
      }

      .form-message {
        right: auto;
        bottom: 10px;
        left: 24px;
      }
    }

    @media (max-width: 600px) {
      .newsletter {
        padding: 0 16px;
      }

      .newsletter-inner {
        padding: 24px 18px 42px;
      }

      .newsletter-copy h2 {
        font-size: 18px;
      }

      .newsletter-form {
        grid-template-columns: 1fr;
      }

      .newsletter-form input {
        width: 100%;
      }

      .newsletter-form button {
        width: 100%;
      }

      .form-message {
        bottom: 14px;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .newsletter-form button {
        transition: none;
      }
    }
  `,
})
export class ContactOptionsComponent {
  private readonly fb = inject(FormBuilder);
  private readonly leads = inject(LeadService);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  readonly busy = signal(false);
  readonly done = signal(false);
  readonly message = signal('');
  readonly buttonLabel = computed(() => (this.busy() ? 'Subscribing…' : 'Subscribe Now'));

  emailInvalid(): boolean {
    return this.form.controls.email.invalid && this.form.controls.email.touched;
  }

  async submit(): Promise<void> {
    if (this.busy()) return;
    if (this.form.invalid) {
      this.form.controls.email.markAsTouched();
      this.done.set(false);
      this.message.set('Please enter a valid email address.');
      return;
    }

    this.busy.set(true);
    this.message.set('');
    const email = this.form.controls.email.value.trim();
    const result = await this.leads.submit('newsletter', { email });
    this.busy.set(false);

    if (!result.ok && !result.skipped) {
      this.done.set(false);
      this.message.set('We could not subscribe you right now. Please try again.');
      return;
    }

    if (result.skipped) {
      window.location.href = this.leads.mailtoLink(
        'XcellHost newsletter subscription',
        `Please subscribe ${email} to the XcellHost newsletter.`,
      );
    }

    this.form.reset();
    this.done.set(true);
    this.message.set(
      result.skipped
        ? 'Your email app is ready to complete the subscription.'
        : 'Thank you — you are subscribed!',
    );
  }
}
