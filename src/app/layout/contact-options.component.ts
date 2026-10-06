import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
            XcellHost Newsletter
          </p>
          <h2 id="newsletter-title">
            Get the latest updates on Blog Posts, Industry News, Products, and Guidance on Cloud,
            Cyber Security, AI &amp; Digital Transformation.
          </h2>
        </div>

        <form #newsletterForm class="newsletter-form" [formGroup]="form" (ngSubmit)="submit(newsletterForm)"
          action="https://forms.zohopublic.in/xcellhostcloudservicespvtltd1/form/NewsletterSubscriptionForm/formperma/ZFO74kn3xfRonRDRy3zFBSIcG82fsKdLTBd2toT0wPM/htmlRecords/submit"
          method="POST" enctype="multipart/form-data" accept-charset="UTF-8" target="newsletter-response" [attr.aria-busy]="sending()" novalidate>
          <input type="hidden" name="zf_referrer_name" />
          <input type="hidden" name="zf_redirect_url" value="" />
          <input type="hidden" name="zc_gad" />
          <label class="sr-only" for="newsletter-email">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            name="Email"
            maxlength="255"
            required
            formControlName="email"
            autocomplete="email"
            placeholder="Enter your email"
            [attr.aria-invalid]="emailInvalid()"
            aria-describedby="newsletter-message"
          />
          <button type="submit" [disabled]="sending()">{{ sending() ? 'Sending...' : 'Subscribe' }}</button>
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
        <nav class="newsletter-socials" aria-label="Follow XcellHost updates">
          <a class="newsletter-social newsletter-whatsapp"
            href="https://www.whatsapp.com/channel/0029Vais2U4ICVffW7i82V1z"
            target="_blank" rel="noopener noreferrer"
            aria-label="Join WhatsApp Channel (opens in a new tab)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
              <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
              <path d="m8.5 7.5 1.4 2.7-1 1c.8 1.7 2.1 3 3.9 3.8l1-1 2.7 1.4c-.3 1.5-1.3 2-2.6 1.6-3.5-1-6.2-3.7-7.2-7.2-.4-1.3.2-2.1 1.8-2.3Z" />
            </svg>
            Join WhatsApp Channel
          </a>
          <a class="newsletter-social newsletter-linkedin"
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7210900253737185280"
            target="_blank" rel="noopener noreferrer"
            aria-label="Subscribe to LinkedIn Newsletter (opens in a new tab)">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96C2 21.32 2.69 22 3.55 22h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.8-1.52 2.99 0 3.57 1.97 3.57 4.53v5.24Z" />
            </svg>
            Subscribe to LinkedIn Newsletter
          </a>
        </nav>
      </div>
      <iframe #newsletterResponse name="newsletter-response" title="Newsletter submission response" hidden
        (load)="checkSubmission(newsletterResponse)"></iframe>
    </section>
  `,
  styles: `
    .newsletter {
      position: relative;
      padding: 0 24px;
      overflow: hidden;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0 50%, #3b63e8 50% 100%);
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
      margin: 0;
      min-height: 20px;
      color: #b91c1c;
      font-size: 13px;
      line-height: 20px;
    }

    .form-message.success {
      color: #166534;
    }

    .newsletter-socials {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
    }

    .newsletter-social {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-height: 48px;
      padding: 12px 16px;
      border-radius: 8px;
      color: #fff;
      text-align: center;
      text-decoration: none;
      font: 700 14px / 1.4 var(--body);
      transition: background-color 0.2s ease;
    }

    .newsletter-social svg { width: 22px; height: 22px; flex-shrink: 0; }
    .newsletter-whatsapp { background: #128c4a; }
    .newsletter-whatsapp:hover { background: #0d703b; }
    .newsletter-linkedin { background: #0a66c2; }
    .newsletter-linkedin:hover { background: #084f96; }
    .newsletter-social:focus-visible { outline: 3px solid var(--navy); outline-offset: 3px; }

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

    }

    @media (max-width: 600px) {
      .newsletter {
        padding: 0 16px;
      }

      .newsletter-inner {
        padding: 24px 18px;
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

      .newsletter-socials { grid-template-columns: 1fr; }
    }
    @media (prefers-reduced-motion: reduce) {
      .newsletter-form button,
      .newsletter-social {
        transition: none;
      }
    }
  `,
})
export class ContactOptionsComponent {
  private readonly fb = inject(FormBuilder);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private confirmationUrl = '';
  private submissionTimer?: ReturnType<typeof setTimeout>;

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
  });

  readonly done = signal(false);
  readonly message = signal('');
  readonly sending = signal(false);

  constructor() {
    this.destroyRef.onDestroy(() => clearTimeout(this.submissionTimer));
  }

  emailInvalid(): boolean {
    return this.form.controls.email.invalid && this.form.controls.email.touched;
  }

  submit(formElement: HTMLFormElement): void {
    if (this.sending()) return;
    this.done.set(false);
    this.form.controls.email.setValue(this.form.controls.email.value.trim());
    if (this.form.invalid) {
      this.form.controls.email.markAsTouched();
      this.done.set(false);
      this.message.set('Please enter a valid email address.');
      return;
    }

    const referrer = formElement.elements.namedItem('zf_referrer_name') as HTMLInputElement;
    const adClick = formElement.elements.namedItem('zc_gad') as HTMLInputElement;
    const redirect = formElement.elements.namedItem('zf_redirect_url') as HTMLInputElement;
    referrer.value = this.document.location.href;
    adClick.value = new URL(this.document.location.href).searchParams.get('gclid') ?? '';
    const callback = new URL('newsletter-subscription-success.html', this.document.baseURI);
    callback.searchParams.set('submission', `${Date.now()}-${Math.random().toString(36).slice(2)}`);
    this.confirmationUrl = callback.href;
    redirect.value = this.confirmationUrl;

    // Zoho redirects only the hidden frame after accepting the submission.
    // A generic cross-origin frame load must never count as success.
    this.sending.set(true);
    this.message.set('Submitting your subscription...');
    this.submissionTimer = setTimeout(() => {
      this.sending.set(false);
      this.confirmationUrl = '';
      this.message.set('We could not confirm your subscription. Please try again later.');
    }, 30000);
    try {
      formElement.submit();
    } catch {
      clearTimeout(this.submissionTimer);
      this.sending.set(false);
      this.confirmationUrl = '';
      this.message.set('We could not send your subscription. Please try again.');
    }
  }

  checkSubmission(frame: HTMLIFrameElement): void {
    if (!this.sending() || !this.confirmationUrl) return;
    try {
      if (frame.contentWindow?.location.href !== this.confirmationUrl) return;
    } catch {
      // Zoho's loading, validation and error pages are on another origin.
      return;
    }
    clearTimeout(this.submissionTimer);
    this.confirmationUrl = '';
    this.sending.set(false);
    this.done.set(true);
    this.message.set('Thank you for subscribing!');
    this.form.reset();
  }
}
