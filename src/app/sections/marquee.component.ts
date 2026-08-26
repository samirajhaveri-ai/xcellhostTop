import { ChangeDetectionStrategy, Component } from '@angular/core';

/** One tile in the vendor marquee. */
interface Brand {
  readonly name: string;
  /** rendered as a pill instead of plain text */
  readonly feat?: boolean;
  /** the Microsoft four-square logo instead of a letter mark */
  readonly ms?: boolean;
  readonly mark?: string;
  readonly bg?: string;
  readonly fg?: string;
}

const BRANDS: readonly Brand[] = [
  { name: 'Acronis', feat: true, mark: 'A', bg: '#143BEB', fg: '#fff' },
  { name: 'Microsoft 365', feat: true, ms: true },
  { name: 'DP0 Genie', feat: true, mark: '⚖', bg: '#7C3AED', fg: '#fff' },
  { name: 'Microsoft Azure', ms: true },
  { name: 'Amazon Web Services', mark: 'aws', bg: '#232F3E', fg: '#FF9900' },
  { name: 'Google Cloud', mark: 'G', bg: '#fff', fg: '#4285F4' },
  { name: 'IBM Multicloud', mark: 'IBM', bg: '#0F62FE', fg: '#fff' },
  { name: 'Red Hat', mark: 'RH', bg: '#EE0000', fg: '#fff' },
  // { name: '', mark: 'D', bg: '#00B5E2', fg: '#fff' },
  { name: 'DigiCert', mark: 'D', bg: '#0174C3', fg: '#fff' },
  { name: 'Sectigo', mark: 'S', bg: '#16A34A', fg: '#fff' },
  { name: 'TSplus', mark: 'TS', bg: '#0D6EFD', fg: '#fff' },
  { name: 'Kaspersky', mark: 'K', bg: '#006D5C', fg: '#fff' },
  { name: 'SentinelOne', mark: 'S1', bg: '#6B4EFF', fg: '#fff' },
];

/**
 * The scrolling vendor-partner strip. The track is rendered twice — the CSS
 * animation translates it by -50%, so the second copy is what makes the
 * scroll look endless.
 */
@Component({
  selector: 'xh-marquee',
  standalone: true,
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="marquee" aria-label="Vendor partners">
      <div class="lab">Powered by world-class vendor partnerships</div>
      <div class="track">
        @for (pass of passes; track pass) {
          @for (b of brands; track b.name) {
            <span [class.feat]="b.feat"
              >@if (b.ms) {<span class="blg"
                ><svg viewBox="0 0 21 21" width="13" height="13">
                  <rect width="10" height="10" fill="#F25022" />
                  <rect x="11" width="10" height="10" fill="#7FBA00" />
                  <rect y="11" width="10" height="10" fill="#00A4EF" />
                  <rect x="11" y="11" width="10" height="10" fill="#FFB900" /></svg
              ></span>} @else {<span class="blg" [style.background]="b.bg" [style.color]="b.fg">{{ b.mark }}</span>}{{ b.name }}</span
            >
          }
        }
      </div>
    </div>
  `,
})
export class MarqueeComponent {
  readonly brands = BRANDS;
  /** the track is duplicated for the infinite scroll */
  readonly passes = [0, 1];
}
