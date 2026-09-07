import { ChangeDetectionStrategy, Component } from '@angular/core';

const TRUSTED_CLIENTS = [
  { name: 'Danway', className: 'trusted-logo-danway' },
  { name: 'BMB', className: 'trusted-logo-bmb' },
  { name: 'Maramer', className: 'trusted-logo-maramer' },
  { name: 'MSE', className: 'trusted-logo-mse' },
  { name: 'PGI GROUP', className: 'trusted-logo-pgi' },
  { name: 'ZMi / ADNOC', className: 'trusted-logo-zmi' },
  { name: 'Nakheel', className: 'trusted-logo-nakheel' },
  { name: 'Emicool', className: 'trusted-logo-emicool' },
  { name: 'Sumitomo', className: 'trusted-logo-sumitomo' },
  { name: 'Buhaleeba', className: 'trusted-logo-buhaleeba' },
  { name: 'Charisma', className: 'trusted-logo-charisma' },
  { name: 'Danube', className: 'trusted-logo-danube' },
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
                <span class="trusted-logo" [class]="client.className">{{ client.name }}</span>
              }
              @for (client of clients; track 'duplicate-' + $index) {
                <span class="trusted-logo" [class]="client.className" aria-hidden="true">{{ client.name }}</span>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TrustedByComponent {
  readonly clients = TRUSTED_CLIENTS;
}
