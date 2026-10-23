import { Component, Input } from '@angular/core';
import { CUSTOMER_TESTIMONIALS } from '../data/customer-testimonials.data';

@Component({
  selector: 'xh-customer-testimonials',
  standalone: true,
  styleUrl: '../../../public/assets/styles/customer-testimonials.css',
  template: `
    @if (reviews.length) {
      <section class="xh-customer-testimonials" [attr.id]="sectionId" aria-label="Customer testimonials">
        <div class="xh-testimonial-wrap">
          <h2>What Customers Say</h2>
          <div class="xh-testimonial-grid">
            @for (review of reviews; track $index) {
              <article class="xh-testimonial-card">
                <div class="xh-quote-badge" aria-hidden="true">”</div>
                <div class="xh-testimonial-avatar" aria-hidden="true">{{ initials(review.name) }}</div>
                <h3 class="xh-testimonial-name">{{ review.name }}</h3>
                <div class="xh-testimonial-role">{{ review.role }}</div>
                @if (review.rating !== undefined) {
                  <div class="xh-testimonial-stars" role="img" [attr.aria-label]="review.rating + ' out of 5 stars'">
                    @for (star of stars; track star) { <span [class.off]="star > review.rating">★</span> }
                  </div>
                }
                <blockquote>{{ review.quote }}</blockquote>
              </article>
            }
          </div>
        </div>
      </section>
    }
  `,
})
export class CustomerTestimonialsComponent {
  @Input({ required: true }) pageSlug = '';
  @Input() sectionId: string | null = null;
  readonly stars = [1, 2, 3, 4, 5];
  get reviews() { return CUSTOMER_TESTIMONIALS[this.pageSlug] ?? []; }
  initials(name: string): string {
    return name.trim().split(/\s+/).map(part => part[0]).slice(0, 2).join('').toUpperCase();
  }
}
