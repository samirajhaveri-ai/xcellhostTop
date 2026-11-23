import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProductDatasheet } from '../data/product-datasheets.data';

@Component({
  selector: 'xh-datasheet-card',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="datasheet-card">
      <div class="datasheet-cover" aria-hidden="true">
        <div class="datasheet-cover-copy">
          <img class="datasheet-logo" src="/assets/images/xcellhost-logo.png" alt="" loading="lazy" />
          <span>{{ sheet().productName }}</span>
        </div>
        <img class="datasheet-preview" [src]="sheet().coverUrl" alt="" loading="lazy" />
      </div>
      <div class="datasheet-body">
        <span class="datasheet-format">PDF datasheet</span>
        <h3>{{ sheet().productName }}</h3>
        <p>{{ sheet().description }}</p>
        <a class="datasheet-link" [routerLink]="['/datasheets', sheet().slug]"
          [attr.aria-label]="'Read more about ' + sheet().productName">
          Read more
        </a>
      </div>
    </article>
  `,
  styles: `
    :host { display: block; min-width: 0; }
    .datasheet-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid #e4ebf4;
      border-radius: 16px;
      background: #f5f7fa;
      text-align: left;
    }
    .datasheet-cover {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 34%;
      align-items: center;
      gap: 16px;
      aspect-ratio: 16 / 9;
      padding: 16px 22px;
      background: radial-gradient(ellipse at 100% 0%, #bddaf3 0%, transparent 55%),
        linear-gradient(135deg, #f4f9ff, #e2edf9);
    }
    .datasheet-cover-copy { display: grid; justify-items: start; gap: 14px; }
    .datasheet-cover-copy span {
      color: #123454;
      font: 750 clamp(17px, 4vw, 23px)/1.15 var(--body, sans-serif);
      overflow-wrap: anywhere;
    }
    .datasheet-cover-copy::after { content: ''; width: 22px; height: 2px; background: #ef8515; }
    .datasheet-logo { display: block; width: 78px; height: auto; }
    .datasheet-preview {
      display: block;
      width: 100%;
      max-height: 150px;
      object-fit: contain;
      filter: drop-shadow(0 6px 8px #19365b40);
      transform: rotate(6deg);
    }
    .datasheet-body { display: flex; flex: 1; flex-direction: column; align-items: flex-start; padding: 20px 22px 23px; }
    .datasheet-format {
      color: #46637f;
      font: 600 11px/1.5 var(--mono, monospace);
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    .datasheet-body h3 { margin: 8px 0 10px; color: #123454; font: 750 22px/1.25 var(--body, sans-serif); }
    .datasheet-body p { margin: 0 0 20px; color: #4f6882; font-size: 14px; line-height: 1.65; }
    .datasheet-link { margin-top: auto; color: #1565d8; font-weight: 750; text-decoration: none; }
    .datasheet-link:hover { text-decoration: underline; }
    .datasheet-link:focus-visible { outline: 2px solid #1565d8; outline-offset: 3px; }
  `,
})
export class DatasheetCardComponent {
  readonly sheet = input.required<ProductDatasheet>();
}
