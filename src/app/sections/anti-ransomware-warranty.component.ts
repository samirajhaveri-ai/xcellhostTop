import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'xh-anti-ransomware-warranty',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="warranty-spotlight"
      [class.warranty-spotlight-full]="fullWidth()"
      aria-labelledby="warrantySpotlightTitle"
    >
      <img src="/assets/images/anti-ransomware-warranty.svg"
        alt="Acronis anti-ransomware warranty: guaranteed data recovery"
        width="940" height="540" loading="lazy" />
      <div class="warranty-copy">
        <span class="warranty-label">Spotlight</span>
        <h2 id="warrantySpotlightTitle">Anti-ransomware recovery warranty</h2>
        <p>Eligible endpoint disk, volume and file backups are automatically covered at the
          recovery-point level when they meet the program requirements. The anti-ransomware
          warranty provides reimbursement of up to $1 million if data cannot be recovered from
          a compliant recovery point. Qualification requires Acronis-hosted cloud storage,
          two-factor authentication, immutable storage in Compliance mode and validation by
          checksum, screenshot or heartbeat.</p>
        @if (showLearnMore()) {
          <a class="warranty-link" routerLink="/anti-ransomware-warranty">
            Learn more <span aria-hidden="true">&#8594;</span>
          </a>
        }
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .warranty-spotlight { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
      align-items: center; gap: clamp(24px, 5vw, 56px); margin: 48px 0; }
    .warranty-spotlight-full { box-sizing: border-box; width: 100vw;
      grid-template-columns: minmax(300px, .82fr) minmax(0, 1fr);
      gap: clamp(36px, 7vw, 100px); margin: 0 calc(50% - 50vw) 54px;
      padding: 32px max(24px, calc((100vw - 1192px) / 2)); background: #f0f3fb; }
    img { display: block; width: 100%; height: auto; border-radius: 4px; }
    .warranty-label { display: inline-block; padding: 4px 11px; border: 2px solid #b8d4ff;
      border-radius: 999px; background: #eaf2fc; color: #002957;
      font: 700 11px/1.2 var(--body, sans-serif); letter-spacing: 1px; text-transform: uppercase; }
    h2 { margin: 12px 0 10px; color: #002957;
      font: 600 clamp(28px, 3vw, 30px)/1.2 var(--disp, sans-serif); letter-spacing: -.6px; }
    p { margin: 0; color: #294b70; font: 400 16px/1.55 var(--body, sans-serif); }
    .warranty-link { display: inline-flex; align-items: center; gap: 12px; margin-top: 36px;
      padding: 14px 17px; border: 1px solid #1261ff; border-radius: 4px; color: #1261ff;
      background: white; font: 600 16px/1.3 var(--body, sans-serif); text-decoration: none; }
    .warranty-link:hover { background: #edf4ff; }
    .warranty-link:focus-visible { outline: 3px solid #93bdf5; outline-offset: 3px; }
    @media (max-width: 760px) {
      .warranty-spotlight { grid-template-columns: 1fr; gap: 24px; margin: 32px 0; }
      .warranty-spotlight-full { grid-template-columns: 1fr; margin: 0 calc(50% - 50vw) 40px;
        padding: 32px 24px; }
      img { max-width: 520px; margin-inline: auto; }
      h2 { margin-bottom: 10px; }
      .warranty-link { margin-top: 15px; }
    }
  `],
})
export class AntiRansomwareWarrantyComponent {
  readonly showLearnMore = input(true);
  readonly fullWidth = input(false);
}
