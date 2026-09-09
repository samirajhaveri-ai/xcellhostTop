import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';

/**
 * The floating WhatsApp button (`.wa-fab`) — a plain link straight into the
 * sales team's WhatsApp with the original default message pre-filled.
 *
 * The inline SVG is carried over verbatim; only the `href` is now built by
 * `LeadService.whatsappLink()` so the number lives in `site.data.ts` alone.
 */
@Component({
  selector: 'xh-whatsapp-fab',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
  template: `
    <nav class="contact-actions" aria-label="Contact XcellHost">
      <a class="contact-action call-action" href="tel:+912267111555" aria-label="Call +91 22 6711 1555" title="Call +91 22 6711 1555">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.7l-1.3 1.3a16 16 0 0 0 4.8 4.8l1.3-1.3a2 2 0 0 1 1.7-.6l2.8.5a2 2 0 0 1 2.7 3Z"/></svg>
        <span class="contact-tip">Call +91 22 6711 1555</span>
      </a>
      <button class="contact-action demo-action" type="button" (click)="overlay.open('callback')" aria-label="Book a demo" title="Book a demo">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18m-13 5 3 3 5-5"/></svg>
        <span class="contact-tip">Book a Demo</span>
      </button>
    <a
      class="wa-fab"
      id="waFab"
      [href]="href"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="27" height="27" fill="currentColor" aria-hidden="true">
        <path
          d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 00-8.6 15.05L2 22l5.07-1.33A10 10 0 1012 2zm0 18.2a8.17 8.17 0 01-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31A8.2 8.2 0 1112 20.2z"
        />
      </svg>
      <span class="fab-tip">Chat with our team on WhatsApp</span>
    </a>
    </nav>
  `,
  styles: `
    .contact-actions{position:fixed;left:max(22px,env(safe-area-inset-left));bottom:calc(22px + env(safe-area-inset-bottom));z-index:120;display:flex;flex-direction:column;gap:12px}
    .contact-action,.contact-actions .wa-fab{position:relative;inset:auto;display:flex;align-items:center;justify-content:center;width:56px;height:56px;flex:none;border:0;border-radius:50%;color:#fff;cursor:pointer;box-shadow:0 6px 20px #041e4226;transition:transform .2s}
    .call-action{background:#1565d8}.demo-action{background:#ea7800}
    .contact-action svg{width:32px;height:32px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
    .contact-actions .wa-fab svg{width:34px;height:34px}
    .contact-action:hover{transform:scale(1.06)}
    .contact-action:focus-visible,.contact-actions .wa-fab:focus-visible{outline:3px solid #041e42;outline-offset:4px}
    .contact-tip{position:absolute;left:calc(100% + 12px);padding:8px 12px;border-radius:8px;background:#041e42;color:#fff;font:600 12px/1.4 sans-serif;white-space:nowrap;opacity:0;pointer-events:none}
    .contact-action:hover .contact-tip,.contact-action:focus-visible .contact-tip{opacity:1}
    @media(max-width:600px),(max-height:500px){
      .contact-actions{left:max(14px,env(safe-area-inset-left));bottom:calc(14px + env(safe-area-inset-bottom));gap:8px}
      .contact-action,.contact-actions .wa-fab{width:46px;height:46px}
      .contact-action svg{width:28px;height:28px}
      .contact-actions .wa-fab svg{width:30px;height:30px}
    }
    @media(hover:none){.contact-tip{display:none}}
    @media(prefers-reduced-motion:reduce){.contact-action{transition:none}}
  `,
})
export class WhatsappFabComponent {
  private readonly leads = inject(LeadService);
  readonly overlay = inject(OverlayService);

  /** The original markup's default message, verbatim. */
  readonly href = this.leads.whatsappLink("Hi XcellHost, I'd like to talk to your team.");
}
