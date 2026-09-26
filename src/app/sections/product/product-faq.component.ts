import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core';
import { Faq } from '../../data/models';

/**
 * The `.faq2` accordion from `__wireFaq2()` in `script_26`: one panel open at a
 * time, the first one open to begin with. The original toggled classes on the
 * DOM; here a single signal holds the open index.
 */
@Component({
  selector: 'xh-product-faq',
  standalone: true,
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @for (f of faqs(); track f[0]; let i = $index) {
      <div class="faq2" [class.open]="open() === i" [attr.data-q]="f[0]" [style.order]="i * 2 + orderOffset()">
        <button
          type="button"
          class="faq2-q"
          [attr.aria-expanded]="open() === i"
          [attr.aria-controls]="idPrefix() + i"
          (click)="toggle(i)"
        >
          {{ f[0] }}<span class="faq2-ic">+</span>
        </button>
        <div class="faq2-a" [id]="idPrefix() + i">
          <p>{{ f[1] }}</p>
        </div>
      </div>
    }
  `,
})
export class ProductFaqComponent {
  readonly faqs = input.required<Faq[]>();
  readonly initialOpen = input(0);
  readonly idPrefix = input('ppFaqA');
  readonly orderOffset = input(1);

  /** index of the open panel, or -1 when they are all closed */
  readonly open = signal(0);

  constructor() {
    effect(() => {
      this.faqs();
      this.open.set(this.initialOpen());
    });
  }

  toggle(i: number): void {
    this.open.update((o) => (o === i ? -1 : i));
  }
}
