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
            Stay ahead with
            <span>infrastructure insights</span>
          </h2>
          <p>
            Receive expert hosting strategies, cloud trends, and product updates trusted by
            5,000+ businesses.
          </p>
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
      padding: 58px 0;
      overflow: hidden;
      background:
        radial-gradient(circle at 82% 20%, rgba(21, 101, 216, 0.5), transparent 32%),
        linear-gradient(105deg, var(--navy), var(--navy-2));
      color: #fff;
    }

    .newsletter-inner {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(420px, 520px);
      gap: 30px 72px;
      align-items: center;
    }

    .newsletter-copy {
      position: relative;
      z-index: 1;
    }

    .newsletter-copy h2 {
      max-width: 550px;
      margin: 0 0 14px;
      color: #fff;
      font: 700 clamp(28px, 3vw, 40px) / 1.12 var(--disp);
      letter-spacing: -0.025em;
    }

    .newsletter-copy h2 span {
      display: block;
      color: #7fb2ff;
    }

    .newsletter-copy p {
      max-width: 620px;
      margin: 0;
      color: #c7d5ec;
      font-size: 16px;
      line-height: 1.6;
    }

    .newsletter-form {
      position: relative;
      z-index: 1;
      display: grid;
      min-height: 52px;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 10px;
      align-items: center;
    }

    .newsletter-form input {
      min-width: 0;
      min-height: 52px;
      padding: 0 18px;
      border: 1px solid rgba(255, 255, 255, 0.34);
      border-radius: 8px;
      outline: 0;
      background: #fff;
      color: var(--ink);
      font: 500 15px var(--body);
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .newsletter-form input:focus {
      border-color: #7fb2ff;
      box-shadow: 0 0 0 3px rgba(127, 178, 255, 0.25);
    }

    .newsletter-form input::placeholder {
      color: #7c8798;
      opacity: 1;
    }

    .newsletter-form button {
      min-width: 164px;
      min-height: 52px;
      padding: 13px 22px;
      border: 0;
      border-radius: 8px;
      background: var(--orange);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
      color: #fff;
      cursor: pointer;
      font: 700 15px var(--body);
      transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
    }

    .newsletter-form button:hover:not(:disabled),
    .newsletter-form button:focus-visible {
      background: #e97a08;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
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
      bottom: -25px;
      margin: 0;
      color: #ffb4b4;
      font-size: 13px;
    }

    .form-message:empty {
      display: none;
    }

    .form-message.success {
      color: #86f1c0;
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
        gap: 34px;
      }

      .newsletter-form {
        width: 100%;
        max-width: 620px;
      }

      .form-message {
        right: auto;
        bottom: -26px;
        left: 24px;
      }
    }

    @media (max-width: 600px) {
      .newsletter {
        padding: 44px 0 54px;
      }

      .newsletter-copy h2 {
        font-size: 31px;
      }

      .newsletter-copy p {
        font-size: 15px;
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
        bottom: -32px;
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
