import { ChangeDetectionStrategy, Component } from '@angular/core';

const TRUSTED_CLIENTS: readonly { name: string; className: string; src: string }[] = [
  { name: 'Sushil Finance', className: 'trusted-logo-image', src: '/assets/images/trusted-clients/sushil-finance.png' },
  { name: 'Nilkamal', className: 'trusted-logo-image', src: '/assets/images/trusted-clients/nilkamal.png' },
  { name: 'Abhijeet', className: 'trusted-logo-image', src: '/assets/images/trusted-clients/abhijeet.webp' },
  { name: 'Invara Essae Digitronics', className: 'trusted-logo-image', src: '/assets/images/trusted-clients/invara-essae.png' },
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
                  <img [src]="client.src" [alt]="client.name" width="140" height="56" loading="lazy" />
                </span>
              }
              @for (client of clients; track 'duplicate-' + $index) {
                <span class="trusted-logo" [class]="client.className" aria-hidden="true">
                  <img [src]="client.src" alt="" width="140" height="56" loading="lazy" />
                </span>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .trusted-logo-image { width: 140px; height: 56px; justify-content: center; opacity: 1; }
    .trusted-logo-image img { display: block; width: 140px; height: 56px; object-fit: contain; }
  `,
})
export class TrustedByComponent {
  readonly clients = TRUSTED_CLIENTS;
}
