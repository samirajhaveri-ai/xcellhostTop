import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

const REVIEWS = [
  ['Amit Verma', 'Network Engineer', 'Outstanding support and top-notch services. Thank you, XcellHost!', 'AV'],
  ['Neha Gupta', 'CTO', 'XcellHost has been a game-changer for our business. Excellent service!', 'NG'],
  ['Suresh Rao', 'Systems Administrator', 'Reliable, efficient, and customer-focused. XcellHost is fantastic!', 'SR'],
] as const;

@Component({
  selector: 'xh-testimonials',
  standalone: true,
  imports: [RevealDirective],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="testimonials" id="testimonials">
      <div class="wrap">
        <div class="testimonial-head" xhReveal>
          <h2>Real <span>♥</span> stories, real <strong>success!</strong></h2>
          <p>These are not just reviews; they are experiences, memories, and stories of people embarking on journeys just like yours.</p>
        </div>
        <div class="testimonial-grid">
          @for (review of reviews; track review[0]) {
            <article class="testimonial-card" xhReveal>
              <div class="testimonial-avatar">{{ review[3] }}</div>
              <div class="testimonial-quote">“</div>
              <h3>{{ review[0] }}</h3>
              <small>{{ review[1] }}</small>
              <div class="testimonial-stars" aria-label="5 out of 5 stars">★ ★ ★ ★ ★</div>
              <p>{{ review[2] }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsComponent {
  readonly reviews = REVIEWS;
}
