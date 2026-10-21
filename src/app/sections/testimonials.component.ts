import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../shared/reveal.directive';
import { MEGA_MENU } from '../data/nav.data';
import { CatalogService } from '../core/catalog.service';
import { ProductPageService } from '../core/product-page.service';
import { menuItemLink } from '../core/menu-link';
import { MICROSOFT_365_SMB_REVIEWS, DPDPA_SMB_REVIEWS } from '../data/smb-page-testimonials.data';

@Component({
  selector: 'xh-testimonials',
  standalone: true,
  imports: [RevealDirective, RouterLink],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="testimonials" id="testimonials">
      <div class="wrap">
        <div class="testimonial-head" xhReveal>
          <h2>Real <span>♥</span> stories, real <strong>success!</strong></h2>
          <p>These are not just reviews; they are experiences, memories, and stories of people embarking on journeys just like yours.</p>
        </div>
      </div>
      <div class="testimonial-carousel">
      <button class="testimonial-chevron previous" type="button" aria-label="Previous testimonial"
        aria-controls="home-testimonial-carousel" (click)="moveCarousel(track, viewport, -1)">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6" /></svg>
      </button>
      <div #viewport id="home-testimonial-carousel" class="testimonial-viewport" tabindex="0"
        role="region" aria-label="Customer testimonials. Hover or focus to pause scrolling."
        aria-roledescription="carousel">
        <div #track class="testimonial-track" [style.animation-duration.s]="reviews.length * 9">
          @for (copy of [0, 1]; track copy) {
            <div class="testimonial-group" [attr.aria-hidden]="copy === 1 ? 'true' : null"
              [attr.inert]="copy === 1 ? '' : null">
              @for (review of reviews; track review.id) {
                <article class="testimonial-card">
                  <div class="testimonial-top">
                    @if (review.stars > 0) {
                    <div class="testimonial-stars" [attr.aria-label]="review.stars + ' out of 5 stars'">
                      @for (star of starSlots; track star) {
                        <span aria-hidden="true">{{ star < review.stars ? '★' : '☆' }}</span>
                      }
                    </div>
                    }
                    <span class="review-quote-mark" aria-hidden="true">&ldquo;</span>
                  </div>
                  <p class="review-text">{{ review.quote }}</p>
                  <div class="review-author">
                    <div class="testimonial-avatar" aria-hidden="true">{{ review.initials }}</div>
                    <div><h3>{{ review.name }}</h3><small>{{ review.role }}</small></div>
                  </div>
                  <a class="review-product" [routerLink]="review.href">{{ review.product }} &rarr;</a>
                </article>
              }
            </div>
          }
        </div>
      </div>
      <button class="testimonial-chevron next" type="button" aria-label="Next testimonial"
        aria-controls="home-testimonial-carousel" (click)="moveCarousel(track, viewport, 1)">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>
      </button>
      </div>
      <div class="wrap">
        <div class="testimonial-cta">
          <a class="btn btn-ghost" routerLink="/customer-stories">View More <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .testimonial-carousel { position: relative; }
    .testimonial-chevron { position: absolute; top: 50%; z-index: 2; display: grid; place-items: center;
      width: 44px; height: 44px; padding: 10px; border: 1px solid #d6e3f2; border-radius: 50%;
      background: #fff; color: var(--blue); cursor: pointer; transform: translateY(-50%);
      box-shadow: 0 4px 16px rgba(7,31,69,.14); }
    .testimonial-chevron.previous { left: 12px; }
    .testimonial-chevron.next { right: 12px; }
    .testimonial-chevron:hover { background: #edf4ff; border-color: var(--blue); }
    .testimonial-chevron svg { width: 22px; height: 22px; fill: none; stroke: currentColor;
      stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    .testimonial-viewport { overflow: hidden; padding: 8px 0 20px; }
    .testimonial-track { display: flex; width: max-content; animation: testimonial-scroll linear infinite; }
    .testimonial-group { display: flex; align-items: stretch; gap: 20px; padding-right: 20px; }
    .testimonial-card { display: flex; flex-direction: column; flex: 0 0 340px; width: 340px;
      padding: 24px; text-align: left; }
    .testimonial-top { display: flex; align-items: center; justify-content: space-between; }
    .testimonial-stars { margin: 0; display: flex; gap: 2px; letter-spacing: 0; }
    .review-quote-mark { color: #d9e6fc; font: 700 40px/1 Georgia, serif; }
    .testimonial-card .review-text { margin: 14px 0 22px; flex: 1; font-size: 14px; line-height: 1.7; }
    .review-author { display: flex; align-items: center; gap: 12px; }
    .testimonial-avatar { flex: 0 0 42px; width: 42px; height: 42px; margin: 0; font-size: 14px; }
    .testimonial-card h3 { font-size: 14px; }
    .testimonial-card small { font-size: 11px; line-height: 1.5; }
    .review-product { margin-top: 18px; color: var(--blue); font-size: 12px; font-weight: 600; }
    .testimonial-carousel:hover .testimonial-track, .testimonial-carousel:focus-within .testimonial-track {
      animation-play-state: paused; }
    button:focus-visible, a:focus-visible, .testimonial-viewport:focus-visible {
      outline: 3px solid #93bdf5; outline-offset: 3px; }
    @keyframes testimonial-scroll { to { transform: translateX(-50%); } }
    @media(max-width: 600px) { .testimonial-card { flex-basis: 290px; width: 290px; padding: 20px; } }
    @media(prefers-reduced-motion: reduce) {
      .testimonial-track { animation: none; }
      .testimonial-group[aria-hidden="true"] { display: none; }
      .testimonial-viewport { overflow-x: auto; }
    }
    .testimonial-cta { margin-top: 28px; text-align: center; }
    .testimonial-cta .btn { display: inline-flex; align-items: center; gap: 8px; }
  `,
})
export class TestimonialsComponent {
  readonly starSlots = [0, 1, 2, 3, 4];
  private readonly catalog = inject(CatalogService);
  private readonly products = inject(ProductPageService);
  readonly reviews = this.collectReviews();

  moveCarousel(track: HTMLElement, viewport: HTMLElement, direction: number): void {
    const animation = track.getAnimations()[0];
    if (animation && typeof animation.currentTime === 'number') {
      const duration = this.reviews.length * 9000;
      const next = animation.currentTime + direction * 9000;
      animation.currentTime = ((next % duration) + duration) % duration;
      return;
    }
    // With reduced motion, move the static row without reintroducing animation.
    const card = track.querySelector<HTMLElement>('.testimonial-card');
    const step = (card?.getBoundingClientRect().width ?? 340) + 20;
    const last = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const next = viewport.scrollLeft + direction * step;
    viewport.scrollTo({ left: next < 0 ? last : next > last ? 0 : next, behavior: 'instant' });
  }

  private collectReviews() {
    const menu = MEGA_MENU.find(top => top.label === 'Web Presence');
    const items = menu?.tabs.find(tab => tab.label === 'SMB Cloud')?.groups.flatMap(group => group.items) ?? [];
    return items.flatMap(item => {
      const href = menuItemLink(item.title, 'Web Presence', this.catalog, item.href);
      const entry = this.catalog.entryBySlug(href.slice(1));
      const reviews = item.title === 'Microsoft 365 SMB' ? MICROSOFT_365_SMB_REVIEWS
        : item.title === 'DPDPA For SMB' ? DPDPA_SMB_REVIEWS
        : this.products.build({ name: entry?.name ?? item.title, cat: entry?.cat }).reviews;
      return reviews.map((review, index) => ({ ...review, product: item.title, href,
        id: href + ':' + index }));
    });
  }
}
