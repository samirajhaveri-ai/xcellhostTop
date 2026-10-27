import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

/** Global newsletter banner displayed immediately above the site footer. */
@Component({
  selector: 'xh-contact-options',
  standalone: true,
  imports: [ReactiveFormsModule],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="newsletter" [class.newsletter-sidebar]="sidebar()" [attr.aria-labelledby]="idPrefix() + '-title'">
      <div class="wrap newsletter-inner">
        <div class="newsletter-copy">
          <p class="newsletter-label">
            <svg class="newsletter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
              <path d="M4 3h14v16a2 2 0 0 0 4 0V7h-4M4 3v16a2 2 0 0 0 2 2h14" />
              <path d="M8 7h6M8 11h6M8 15h2M13 15h1" />
            </svg>
            XcellHost Newsletter
          </p>
          <h2 [id]="idPrefix() + '-title'">
            Get the latest updates on Blog Posts, Industry News, Products, and Guidance on Cloud,
            Cyber Security, AI &amp; Digital Transformation.
          </h2>
        </div>

        <form #newsletterForm class="newsletter-form" [formGroup]="form" (ngSubmit)="submit(newsletterForm)"
          action="https://forms.zohopublic.in/xcellhostcloudservicespvtltd1/form/NewsletterSubscriptionForm/formperma/ZFO74kn3xfRonRDRy3zFBSIcG82fsKdLTBd2toT0wPM/htmlRecords/submit"
          method="POST" enctype="multipart/form-data" accept-charset="UTF-8" [target]="idPrefix() + '-response'" [attr.aria-busy]="sending()" novalidate>
          <input type="hidden" name="zf_referrer_name" />
          <input type="hidden" name="zf_redirect_url" value="" />
          <input type="hidden" name="zc_gad" />
          <label class="sr-only" [for]="idPrefix() + '-email'">Email address</label>
          <input
            [id]="idPrefix() + '-email'"
            type="email"
            name="Email"
            maxlength="255"
            required
            formControlName="email"
            [readOnly]="sending()"
            autocomplete="email"
            placeholder="Enter your email"
            [attr.aria-invalid]="emailInvalid()"
            [attr.aria-describedby]="idPrefix() + '-message'"
          />
          <button type="submit" [disabled]="sending()">{{ sending() ? 'Sending...' : 'Subscribe' }}</button>
        </form>

        <p
          [id]="idPrefix() + '-message'"
          class="form-message"
          [class.success]="done()"
          [class.error]="message() && !sending() && !done()"
          role="status"
          aria-live="polite"
        >
          {{ message() }}
        </p>
        @if (!sidebar()) {
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
        }
      </div>
      <!-- A static name registers the browsing context before the form targets it.
           Binding iframe.name later can leave window.name empty in Chrome. -->
      @if (sidebar()) {
        <iframe #newsletterResponse name="sidebar-newsletter-response" title="Newsletter submission response" hidden
          sandbox="allow-forms allow-scripts allow-same-origin" (load)="checkSubmission(newsletterResponse)"></iframe>
      } @else {
        <iframe #newsletterResponse name="newsletter-response" title="Newsletter submission response" hidden
          sandbox="allow-forms allow-scripts allow-same-origin" (load)="checkSubmission(newsletterResponse)"></iframe>
      }
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
      align-items: stretch;
      width: min(850px, 100%);
      max-width: none;
      margin-inline: auto;
      padding: 25px;
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
      font: 600 13px / 1.5 var(--body);
      letter-spacing: 0;
      padding: 10px;
    }

    .newsletter-form {
      position: relative;
      z-index: 1;
      display: grid;
      min-height: 32px;
      grid-template-columns: minmax(0, 1fr) 124px;
      gap: 8px;
      align-items: center;
    }

    .newsletter-form input {
      min-width: 0;
      min-height: 42px;
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
      min-height: 30px;
      padding:  10px;
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
      color: var(--slate);
      font-size: 13px;
      line-height: 1.5;
    }

    .form-message.error { color: #b91c1c; }
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
    .newsletter-sidebar { padding: 0; background: none; color: var(--ink); overflow: visible; }
    .newsletter-sidebar .newsletter-inner {
      width: 100%; margin: 0; padding: 18px; gap: 12px; border-radius: 16px;
      box-shadow: 0 12px 30px rgba(5, 38, 84, .05);
    }
    .newsletter-sidebar .newsletter-label { font-size: 16px; text-align: left; justify-content: flex-start; }
    .newsletter-sidebar .newsletter-icon { width: 22px; height: 22px; }
    .newsletter-sidebar .newsletter-copy h2 { padding: 0; font-size: 12px; font-weight: 400; line-height: 1.7; text-align: left; }
    .newsletter-sidebar .newsletter-form { grid-template-columns: minmax(0, 1fr); width: 100%; }
    .newsletter-sidebar .newsletter-form input { width: 100%; padding: 10px 12px; font-size: 13px; }
    .newsletter-sidebar .newsletter-form button { width: 100%; min-height: 42px; font-size: 13px; }
    .newsletter-sidebar .form-message { min-height: 0; font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
    .newsletter-sidebar .form-message:empty { display: none; }
  `,
})
export class ContactOptionsComponent {
  readonly sidebar = input(false);
  readonly idPrefix = computed(() => this.sidebar() ? 'sidebar-newsletter' : 'newsletter');
  private readonly fb = inject(FormBuilder);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private confirmationUrl = '';
  private submittedEmail = '';
  private readonly subscriptionStorageKey = 'xcellhost.newsletter.confirmed-emails.v1';
  private readonly confirmedEmails = new Set<string>();
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

    const email = this.form.controls.email.value.toLowerCase();
    if (this.hasSubscribed(email)) {
      this.message.set('This email address is already subscribed.');
      return;
    }
    this.submittedEmail = email;

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
    this.rememberSubscription(this.submittedEmail);
    this.submittedEmail = '';
    this.done.set(true);
    this.message.set('Thank you for subscribing!');
    this.form.reset();
  }

  // Only Zoho-confirmed submissions belong in this browser's cache. Zoho's
  // Email field must also enforce No Duplicates for records across devices.
  private readConfirmedEmails(): string[] {
    try {
      const stored: unknown = JSON.parse(
        this.document.defaultView?.localStorage.getItem(this.subscriptionStorageKey) ?? '[]',
      );
      return Array.isArray(stored)
        ? stored.filter((email): email is string => typeof email === 'string')
        : [];
    } catch {
      // Storage may be blocked, full or contain invalid data.
      return [];
    }
  }

  private hasSubscribed(email: string): boolean {
    return this.confirmedEmails.has(email) || this.readConfirmedEmails().includes(email);
  }

  private rememberSubscription(email: string): void {
    if (!email) return;
    this.confirmedEmails.add(email);
    try {
      const emails = new Set([...this.readConfirmedEmails(), ...this.confirmedEmails]);
      this.document.defaultView?.localStorage.setItem(
        this.subscriptionStorageKey, JSON.stringify([...emails]),
      );
    } catch {
      // The in-memory cache still prevents repeats during this component's lifetime.
    }
  }
}
