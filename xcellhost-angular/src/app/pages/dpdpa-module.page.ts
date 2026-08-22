import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { CartService } from '../core/cart.service';
import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { DPDPA_MODULES, DPDPA_ORDER } from '../data/dpdpa.data';
import { DpdpaModule } from '../data/models';
import { CallbackTopicService } from '../overlays/callback-topic.service';

/** How many other modules the "related" row offers. */
const RELATED_COUNT = 3;

const ADD_LABEL = '🛒 Add to Cart';
const ADDED_LABEL = '✓ Added to cart';

/** Strip the inline markup a data field carries, for titles and meta text. */
function plain(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ');
}

/**
 * `/securesetu-dpdpa/:slug` — one SecureSetu module. Everything on the page
 * (problem, capabilities, steps, evidence, FAQs and the live-metrics visual)
 * comes from that module's record in `dpdpa.data.ts`.
 */
@Component({
  selector: 'xh-dpdpa-module-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dpdpa-module.page.html',
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DpdpaModulePage {
  private readonly topics = inject(CallbackTopicService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly cart = inject(CartService);
  private readonly overlay = inject(OverlayService);
  private readonly leads = inject(LeadService);
  private readonly seo = inject(SeoService);

  readonly slug = toSignal(this.route.paramMap.pipe(map((p) => p.get('slug') ?? '')), {
    initialValue: '',
  });

  /** `null` for an unknown slug — the effect below sends those back to SecureSetu. */
  readonly module = computed<DpdpaModule | null>(
    () => DPDPA_ORDER.map((k) => DPDPA_MODULES[k]).find((m) => m.slug === this.slug()) ?? null
  );

  readonly related = computed<DpdpaModule[]>(() =>
    DPDPA_ORDER.map((k) => DPDPA_MODULES[k])
      .filter((m) => m.slug !== this.slug())
      .slice(0, RELATED_COUNT)
  );

  /** Plain-text module name, used in the CTA, cart line, WhatsApp text and title. */
  readonly name = computed(() => plain(this.module()?.t ?? 'SecureSetu'));

  readonly ctaTitle = computed(() => `Ready to close this gap with ${this.name()}?`);

  readonly waHref = computed(() =>
    this.leads.whatsappLink(
      `Hi XcellHost, I would like to know more about SecureSetu — ${this.name()}.`
    )
  );

  /** `#mAtc` flips to a confirmation for a moment after a click, as it always did. */
  readonly atcLabel = signal(ADD_LABEL);

  /** resets the "added" label; cleared on destroy so it cannot fire after navigation */
  private atcTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      if (this.atcTimer) clearTimeout(this.atcTimer);
    });

    effect(() => {
      const m = this.module();
      if (!m) {
        void this.router.navigate(['/securesetu-dpdpa']);
        return;
      }
      this.atcLabel.set(ADD_LABEL);
      this.seo.set(
        `${this.name()} — SecureSetu DPDPA | XcellHost`,
        plain(m.tag),
        `/securesetu-dpdpa/${m.slug}/`
      );
    });
  }

  addToCart(ev: Event): void {
    ev.preventDefault();
    const m = this.module();
    if (!m) return;
    this.cart.add(`SecureSetu — ${this.name()}`, m.tier);
    this.atcLabel.set(ADDED_LABEL);
    if (this.atcTimer) clearTimeout(this.atcTimer);
    this.atcTimer = setTimeout(() => this.atcLabel.set(ADD_LABEL), 1400);
  }

  openCallback(ev: Event): void {
    ev.preventDefault();
    this.topics.ask('SecureSetu — ' + (this.module()?.t ?? ''));
    this.overlay.open('callback');
  }
}
