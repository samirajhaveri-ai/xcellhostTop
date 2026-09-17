import { ChangeDetectionStrategy, Component } from '@angular/core';

const TRUSTED_CLIENTS: readonly { name: string; className: string; src: string }[] = [
  { name: 'Canara HSBC Life Insurance', className: 'trusted-logo-image', src: '/assets/images/trusted-clients/canara-hsbc.png' },
  { name: 'Blue Star Infotech', className: 'trusted-logo-image', src: '/assets/images/trusted-clients/blue-star-infotech.webp' },
  { name: 'IIFL Finance', className: 'trusted-logo-image trusted-logo-iifl', src: '/assets/images/trusted-clients/iifl-finance.png' },
  { name: 'Danone', className: 'trusted-logo-image', src: '/assets/images/trusted-clients/danone-2013.png' },
  { name: 'K Raheja Corp', className: 'trusted-logo-image trusted-logo-raheja', src: '/assets/images/trusted-clients/k-raheja.png' },
  { name: 'PIBM', className: 'trusted-logo-image trusted-logo-pibm', src: '/assets/images/trusted-clients/pibm.png' },
  { name: 'Sushil Finance', className: 'trusted-logo-image', src: '/assets/images/trusted-clients/sushil-finance.png' },
  { name: 'Nilkamal', className: 'trusted-logo-image', src: '/assets/images/trusted-clients/nilkamal.png' },
  { name: 'Abhijeet', className: 'trusted-logo-image', src: '/assets/images/trusted-clients/abhijeet.webp' },
  { name: 'Invara Essae Digitronics', className: 'trusted-logo-image trusted-logo-invara', src: '/assets/images/trusted-clients/invara-essae.png' },
  { name: 'HRH', className: 'trusted-logo-image', src: '/assets/images/trusted-clients/hrh.png' },
  { name: 'SBI Mutual Fund', className: 'trusted-logo-image', src: '/assets/images/trusted-clients/sbi-mutual-fund.png' },
  { name: 'All India Football Federation', className: 'trusted-logo-image', src: '/assets/images/trusted-clients/aiff.webp' },
] as const;

/** Client proof strip placed immediately below the homepage case studies. */
@Component({
  selector: 'xh-trusted-by',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="trusted-by" aria-label="Trusted by our clients">
      <div class="wrap">
        <div class="trusted-by-panel">
          <span class="trusted-by-label">Trusted by</span>
          <div class="trusted-by-viewport">
            <div class="trusted-by-track">
              @for (client of clients; track $index) {
                <span class="trusted-logo" [class]="client.className">
                  <img [src]="client.src" [alt]="client.name" width="160" height="64" loading="lazy" />
                </span>
              }
              @for (client of clients; track 'duplicate-' + $index) {
                <span class="trusted-logo" [class]="client.className" aria-hidden="true">
                  <img [src]="client.src" alt="" width="160" height="64" loading="lazy" />
                </span>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .trusted-logo-image { display: flex; flex: 0 0 160px; width: 160px; height: 64px; align-items: center; justify-content: center; opacity: 1; }
    .trusted-logo-image img { display: block; width: 160px; min-width: 160px; max-width: 160px; height: 64px; min-height: 64px; max-height: 64px; object-fit: contain; object-position: center; }
    .trusted-logo-iifl img { transform: scale(1.6); }
    .trusted-logo-raheja img, .trusted-logo-pibm img { transform: scale(1.3); }
    .trusted-logo-invara img { transform: scale(.9); }
  `,
})
export class TrustedByComponent {
  readonly clients = TRUSTED_CLIENTS;
}
