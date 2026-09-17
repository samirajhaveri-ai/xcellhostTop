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
          <p class="newsletter-label">
            <svg class="newsletter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
              <path d="M4 3h14v16a2 2 0 0 0 4 0V7h-4M4 3v16a2 2 0 0 0 2 2h14" />
              <path d="M8 7h6M8 11h6M8 15h2M13 15h1" />
            </svg>
            Xcellhost Newsletter
          </p>
          <h2 id="newsletter-title">
            Get the latest updates on Blog Posts, Industry News, Products, and Guidance on Cloud,
            Cyber Security, AI &amp; Digital Transformation.
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
      background: linear-gradient(to bottom, var(--ice) 0 50%, #3b63e8 50% 100%);
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
      border: 1px solid var(--line);
      border-radius: 12px;
      background: linear-gradient(135deg, var(--blue-soft) 0%, #dcecff 62%, #fff0de 100%);
      box-shadow: 0 12px 28px rgba(4, 30, 66, 0.18);
    }

    .newsletter-copy {
      position: relative;
      z-index: 1;
      min-width: 0;
    }

    .newsletter-label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin: 0 0 10px;
      color: var(--navy);
      text-align: center;
      font: 800 17px / 1.35 var(--disp);
    }

    .newsletter-icon {
      color: var(--orange);
      width: 25px;
      height: 25px;
      flex-shrink: 0;
    }

    .newsletter-copy h2 {
      max-width: 1120px;
      margin: 0 auto;
      color: var(--ink);
      text-align: center;
      font: 600 15px / 1.5 var(--body);
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
      border: 1px solid var(--line);
      border-radius: 8px;
      outline: 0;
      background: var(--white);
      color: var(--ink);
      font: 500 15px var(--body);
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .newsletter-form input:focus {
      border-color: #7fb2ff;
      box-shadow: 0 0 0 3px rgba(127, 178, 255, 0.25);
    }

    .newsletter-form input::placeholder {
      color: var(--slate);
      opacity: 1;
    }

    .newsletter-form button {
      min-width: 0;
      min-height: 50px;
      padding: 13px 22px;
      border: 0; 
      border-radius: 8px;
      background: var(--blue);
      box-shadow: none;
      color: #fff;
      cursor: pointer;
      font: 700 15px var(--body);
      transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
    }

    .newsletter-form button:hover:not(:disabled),
    .newsletter-form button:focus-visible {
      background: #0e4cab;
      box-shadow: 0 8px 20px rgba(21, 101, 216, 0.3);
      transform: translateY(-2px);
    }

    .newsletter-form button:focus-visible {
      outline: 2px solid var(--navy);
      outline-offset: 3px;
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
      color: #b91c1c;
      font-size: 13px;
    }

    .form-message:empty {
      display: none;
    }

    .form-message.success {
      color: #166534;
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

      .newsletter-label {
        font-size: 16px;
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
  readonly buttonLabel = computed(() => (this.busy() ? 'Subscribing…' : 'Subscribe '));

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
