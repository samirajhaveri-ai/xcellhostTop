import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

import { SeoService } from '../core/seo.service';
import { SIMPLE_PAGES } from '../data/site.data';

/**
 * `/about`, `/contact` and `/pricing` — the original `#spage` shell. The route's
 * `data.key` picks the entry in `SIMPLE_PAGES`; its `h` field is a block of our
 * own pre-built HTML, so it is injected with `bypassSecurityTrustHtml`.
 */
@Component({
  selector: 'xh-simple-page',
  standalone: true,
  imports: [],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (page(); as p) {
      <div class="ppage as-page" id="spage">
        <div class="pp-hero">
          <span class="orb orb-1"></span>
          <div class="wrap">
            <div class="pp-crumb" id="sCrumb">{{ p.c }}</div>
            <h1 id="sTitle">{{ p.t }}</h1>
            <p class="pp-tagline" id="sTag">{{ p.g }}</p>
          </div>
        </div>
        <div class="pp-body"><div class="wrap" id="sBody" [innerHTML]="body()"></div></div>
      </div>
    }
  `,
})
export class SimplePage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly sanitizer = inject(DomSanitizer);

  private readonly key = toSignal(
    this.route.data.pipe(map((d) => (typeof d['key'] === 'string' ? d['key'] : ''))),
    { initialValue: '' }
  );

  /** `null` if a route ever points at a key that no longer exists. */
  readonly page = computed(() => SIMPLE_PAGES[this.key()] ?? null);

  readonly body = computed<SafeHtml>(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.page()?.h ?? '')
  );

  constructor() {
    effect(() => {
      const p = this.page();
      if (!p) {
        void this.router.navigate(['/']);
        return;
      }
      /* canonical must be the route, not the data file's legacy `u` slug —
         `u` says "about-us" where the route is "/about" */
      this.seo.set(`${p.t} — XcellHost`, p.g, `/${this.key()}/`);
    });
  }
}
