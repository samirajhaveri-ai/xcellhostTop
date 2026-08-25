import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { OverlayService } from '../core/overlay.service';
import { RevealDirective } from '../shared/reveal.directive';

interface ContactOption {
  readonly icon: string;
  readonly iconAlt: string;
  readonly title: string;
  readonly detail: string;
  readonly description: string;
  readonly action: string;
  readonly href?: string;
  readonly external?: boolean;
}

const CONTACT_OPTIONS: readonly ContactOption[] = [
  {
    icon: 'assets/images/contact-mail.webp',
    iconAlt: 'Email',
    title: 'Message Us',
    detail: 'sales@xcellhost.cloud',
    description: "We're available 24/7 to answer any questions you have. Get in touch",
    action: 'Email us',
    href: 'mailto:sales@xcellhost.cloud',
  },
  {
    icon: 'assets/images/contact-call.webp',
    iconAlt: 'Phone',
    title: 'Call Us',
    detail: '+91 22 6711 1555',
    description: 'Our sales team are available and would love to speak with you',
    action: 'Call sales',
    href: 'tel:+912267111555',
  },
  {
    icon: 'assets/images/contact-whatsapp.webp',
    iconAlt: 'WhatsApp',
    title: 'WhatsApp Us',
    detail: '+91 86570 32540',
    description: "Send us a WhatsApp message and we'd love to chat.",
    action: 'WhatsApp us',
    href: 'https://wa.me/918657032540',
    external: true,
  },
  {
    icon: 'assets/images/contact-live-chat.webp',
    iconAlt: 'Live chat',
    title: 'Live Chat',
    detail: 'Sales Team',
    description: 'The fastest way to chat with our sales team and get guidance.',
    action: 'Chat with us',
  },
];

/** Global pre-footer contact choices based on the XcellHost homepage section. */
@Component({
  selector: 'xh-contact-options',
  standalone: true,
  imports: [RevealDirective],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="contact-options" aria-labelledby="contact-options-title">
      <div class="wrap">
        <header class="contact-heading" xhReveal>
          <h2 id="contact-options-title">Have any questions?</h2>
          <p>
            Talk to our friendly experts today. We're always happy to hear from you with any
            questions about our packages or services.
          </p>
        </header>

        <div class="contact-grid">
          @for (option of options; track option.title) {
            <article class="contact-option" xhReveal>
              <img
                class="contact-icon"
                [src]="option.icon"
                [alt]="option.iconAlt"
                width="64"
                height="64"
                loading="lazy"
                decoding="async"
              />
              <h3>{{ option.title }}</h3>
              <strong>{{ option.detail }}</strong>
              <p>{{ option.description }}</p>

              @if (option.href) {
                <a
                  class="contact-action"
                  [href]="option.href"
                  [attr.target]="option.external ? '_blank' : null"
                  [attr.rel]="option.external ? 'noopener' : null"
                >
                  {{ option.action }}
                </a>
              } @else {
                <button class="contact-action" type="button" (click)="openChat()">
                  {{ option.action }}
                </button>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .contact-options {
      padding: 30px 0 34px;
      border-top: 1px solid var(--line);
      background: #f7f9fc;
    }

    .contact-heading {
      margin-bottom: 42px;
    }

    .contact-heading h2 {
      margin-bottom: 8px;
      color: var(--navy);
      font-size: clamp(28px, 3vw, 36px);
      font-weight: 600;
    }

    .contact-heading p {
      color: var(--ink);
      font-size: 15.5px;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 34px;
    }

    .contact-option {
      display: flex;
      min-width: 0;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .contact-icon {
      display: block;
      width: 52px;
      height: 52px;
      margin-bottom: 10px;
      object-fit: contain;
    }

    .contact-option h3 {
      margin-bottom: 2px;
      color: var(--navy);
      font: 600 22px/1.2 var(--disp);
    }

    .contact-option strong {
      min-height: 25px;
      color: var(--ink);
      font-size: 15px;
      font-weight: 600;
    }

    .contact-option p {
      width: 100%;
      max-width: 230px;
      min-height: 54px;
      margin: 4px auto 12px;
      color: var(--ink);
      font-size: 14px;
      line-height: 1.45;
    }

    .contact-action {
      display: inline-flex;
      min-width: 118px;
      min-height: 42px;
      align-items: center;
      justify-content: center;
      padding: 9px 20px;
      border: 2px solid var(--navy);
      border-radius: 99px;
      background: transparent;
      color: var(--navy);
      cursor: pointer;
      font: 600 13px/1 var(--body);
      letter-spacing: 0.09em;
      text-transform: uppercase;
      transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
    }

    .contact-action:hover,
    .contact-action:focus-visible {
      border-color: var(--blue);
      background: var(--blue);
      color: #fff;
      transform: translateY(-2px);
      outline: none;
    }

    @media (max-width: 900px) {
      .contact-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 42px 24px;
      }
    }

    @media (max-width: 560px) {
      .contact-options {
        padding: 42px 0;
      }

      .contact-heading {
        margin-bottom: 34px;
        text-align: center;
      }

      .contact-grid {
        grid-template-columns: 1fr;
      }

      .contact-option p,
      .contact-option strong {
        min-height: auto;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .contact-action {
        transition: none;
      }
    }
  `,
})
export class ContactOptionsComponent {
  private readonly overlays = inject(OverlayService);
  readonly options = CONTACT_OPTIONS;

  openChat(): void {
    this.overlays.open('chat');
  }
}
