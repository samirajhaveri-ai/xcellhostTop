import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { DirectoryComponent } from '../sections/directory.component';

@Component({
  selector: 'xh-explore-marketplace-page',
  standalone: true,
  imports: [RouterLink, DirectoryComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <section class="marketplace-hero" aria-labelledby="marketplace-title">
        <div class="wrap">
          <a class="marketplace-home" routerLink="/">Home / Marketplace</a>
          <span class="marketplace-eyebrow">XCELLHOST MARKETPLACE</span>
          <h1 id="marketplace-title">Explore your next <em>cloud solution.</em></h1>
          <p>Discover cloud services, AI, security and software for your business. Browse the catalogue, compare your options and explore the services that fit your team.</p>
          <div class="marketplace-actions">
            <a class="btn btn-primary" href="#marketplace-catalogue">Browse services <span aria-hidden="true">&rarr;</span></a>
            <a class="marketplace-offers" routerLink="/promotion-and-offers">View promotions &amp; offers</a>
          </div>
        </div>
      </section>
      <div id="marketplace-catalogue"><xh-directory /></div>
      <section class="marketplace-help wrap" aria-labelledby="marketplace-help-title">
        <div><h2 id="marketplace-help-title">Need help choosing?</h2><p>Tell us what you want to achieve. Our team will help you find the right services.</p></div>
        <a class="btn btn-primary" routerLink="/contact">Talk to our team</a>
      </section>
    </main>
  `,
  styles: [`
    :host{display:block}
    .marketplace-hero{padding:56px 0 64px;background:linear-gradient(120deg,#fff0df,#f4e8f7 55%,#ddf5f3);color:#102342}
    .marketplace-home{display:inline-block;color:#435a73;font-size:13px;text-decoration:none;margin-bottom:28px}
    .marketplace-eyebrow{display:block;font:700 11px var(--mono);letter-spacing:.15em;color:#1565d8}
    h1{max-width:800px;margin:18px 0;font:800 clamp(34px,4.8vw,58px)/1.12 var(--disp);letter-spacing:-.04em}
    h1 em{font-style:normal;color:#1565d8}
    .marketplace-hero p{max-width:720px!important;font-size:17px;line-height:1.7;color:#465c73}
    .marketplace-actions{display:flex;align-items:center;gap:24px;flex-wrap:wrap;margin-top:28px}
    .marketplace-offers{font-weight:700;color:#164e95;text-underline-offset:5px}
    #marketplace-catalogue{scroll-margin-top:110px}
    .marketplace-help{display:flex;justify-content:space-between;align-items:center;gap:24px;margin:24px auto 60px;padding:32px;border:1px solid #dce5f1;border-radius:20px;background:#f4f7fc}
    .marketplace-help h2{font-size:26px;color:#102342;margin:0 0 8px}
    .marketplace-help p{color:#526982;line-height:1.6;margin:0}
    .marketplace-help .btn{flex-shrink:0}
    @media(max-width:700px){.marketplace-hero{padding:32px 0 40px}.marketplace-hero p{font-size:15px}.marketplace-help{flex-direction:column;align-items:flex-start;padding:24px}.marketplace-actions{gap:18px}}
  `],
})
export class ExploreMarketplacePage {
  constructor() {
    inject(SeoService).set('Explore Marketplace | XcellHost', 'Browse XcellHost cloud, security, AI and software services. Explore solutions and offers for your business.', '/explore-marketplace');
  }
}
