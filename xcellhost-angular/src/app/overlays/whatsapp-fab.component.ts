import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LeadService } from '../core/lead.service';

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
  `,
})
export class WhatsappFabComponent {
  private readonly leads = inject(LeadService);

  /** The original markup's default message, verbatim. */
  readonly href = this.leads.whatsappLink("Hi XcellHost, I'd like to talk to your team.");
}
