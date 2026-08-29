import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** One tile in the vendor marquee. */
interface Brand {
  readonly name: string;
  readonly slug: string;
  /** rendered as a pill instead of plain text */
  readonly feat?: boolean;
  /** the Microsoft four-square logo instead of a letter mark */
  readonly ms?: boolean;
  readonly mark?: string;
  readonly bg?: string;
  readonly fg?: string;
}

const BRANDS: readonly Brand[] = [
  { name: 'Acronis', slug: 'acronis', feat: true, mark: 'A', bg: '#143BEB', fg: '#fff' },
  { name: 'Microsoft 365', slug: 'microsoft-365', feat: true, ms: true },
  { name: 'DPOGenie 365', slug: 'dpo-genie', feat: true, mark: 'DP', bg: '#7C3AED', fg: '#fff' },
  { name: 'Microsoft Azure', slug: 'microsoft-azure', ms: true },
  { name: 'Amazon Web Services', slug: 'amazon-web-services', mark: 'aws', bg: '#232F3E', fg: '#FF9900' },
  { name: 'Google Cloud', slug: 'google-cloud', mark: 'G', bg: '#fff', fg: '#4285F4' },
  { name: 'IBM Multicloud', slug: 'ibm-multicloud', mark: 'IBM', bg: '#0F62FE', fg: '#fff' },
  { name: 'Red Hat', slug: 'red-hat', mark: 'RH', bg: '#EE0000', fg: '#fff' },
  { name: 'DigiCert', slug: 'digicert', mark: 'D', bg: '#0174C3', fg: '#fff' },
  { name: 'Sectigo', slug: 'sectigo', mark: 'S', bg: '#16A34A', fg: '#fff' },
  { name: 'TSplus', slug: 'tsplus', mark: 'TS', bg: '#0D6EFD', fg: '#fff' },
  { name: 'Kaspersky', slug: 'kaspersky', mark: 'K', bg: '#006D5C', fg: '#fff' },
  { name: 'SentinelOne', slug: 'sentinelone', mark: 'S1', bg: '#6B4EFF', fg: '#fff' },
  { name: 'Fortinet', slug: 'fortinet', mark: 'F', bg: '#EE3124', fg: '#fff' },
  { name: 'HPE', slug: 'hpe', mark: 'H', bg: '#01A982', fg: '#fff' },
  { name: 'Dell', slug: 'dell', mark: 'D', bg: '#0672CB', fg: '#fff' },
  { name: 'Cybird', slug: 'cybird', mark: 'C', bg: '#5B3CC4', fg: '#fff' },
];

/**
 * The scrolling vendor-partner strip. The track is rendered twice — the CSS
 * animation translates it by -50%, so the second copy is what makes the
 * scroll look endless.
 */
@Component({
  selector: 'xh-marquee',
  standalone: true,
  imports: [RouterLink],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="marquee" aria-label="Vendor partners">
      <div class="lab">Powered by world-class vendor partnerships</div>
      <div class="track">
        @for (pass of passes; track pass) {
          @for (b of brands; track b.name) {
            <a
              [routerLink]="['/vendor-partners', b.slug]"
              [class.feat]="b.feat"
              [attr.aria-label]="'Learn more about ' + b.name"
              >@if (b.ms) {<span class="blg"
                ><svg viewBox="0 0 21 21" width="13" height="13" aria-hidden="true">
                  <rect width="10" height="10" fill="#F25022" />
                  <rect x="11" width="10" height="10" fill="#7FBA00" />
                  <rect y="11" width="10" height="10" fill="#00A4EF" />
                  <rect x="11" y="11" width="10" height="10" fill="#FFB900" /></svg
              ></span>} @else {<span class="blg" [style.background]="b.bg" [style.color]="b.fg">{{ b.mark }}</span>}{{ b.name }}</a
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
