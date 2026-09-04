import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CartLine, CartService } from '../core/cart.service';
import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { EMAIL_VALIDATORS, PHONE_VALIDATORS, ZOHO_ORG_ID, firstError } from './form.util';

const SUBMIT_LABEL = 'Place Order — Get Zoho Payment Link';

/**
 * The quote cart: the floating `.cart-fab` with its count badge, and the
 * right-hand `.cart` drawer holding the three checkout steps — line items,
 * the customer-details form, and the confirmation panel.
 *
 * The drawer stays in the DOM and is revealed with `.open` so it keeps the
 * original slide-in transition; `CartService.isOpen` is the source of truth and
 * is mirrored onto `OverlayService` purely so the body scroll lock is shared
 * with the modals stacked above it.
 */
@Component({
  selector: 'xh-cart-drawer',
  standalone: true,
  host: { style: 'display:contents' },
  imports: [ReactiveFormsModule],
  templateUrl: './cart-drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartDrawerComponent {
  readonly cart = inject(CartService);
  private readonly overlay = inject(OverlayService);
  private readonly leads = inject(LeadService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly siteLockCheckoutUrl =
    'https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-WP-SL-BAS';

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    company: [''],
    email: ['', EMAIL_VALIDATORS],
    phone: ['', PHONE_VALIDATORS],
    gstin: [''],
  });

  readonly error = signal('');
  readonly busy = signal(false);
  readonly done = signal(false);
  readonly reference = signal('');

  /** Drives the `.pop` keyframe on the FAB; cleared by its own `animationend`. */
  readonly popping = signal(false);

  readonly submitLabel = computed(() =>
    this.busy() ? 'Creating your Zoho estimate…' : SUBMIT_LABEL,
  );

  /** The quick-quote handoff, rebuilt whenever a line changes. */
  readonly whatsapp = computed(() => this.leads.whatsappLink(this.cart.summary()));

  private lastCount = this.cart.count();

  constructor() {
    // one owner for the scroll lock, so a modal opened over the drawer behaves.
    // The write must be untracked: OverlayService.open/close read the layer
    // stack, so tracking them would make this effect re-run when Escape pops
    // 'cart' and immediately push it back, leaving the page locked.
    effect(() => {
      const open = this.cart.isOpen();
      untracked(() => (open ? this.overlay.open('cart') : this.overlay.close('cart')));
    });

    // Escape goes through OverlayService.closeTop() — mirror that back
    effect(() => {
      const layered = this.overlay.stack().includes('cart');
      if (!layered && untracked(() => this.cart.isOpen())) this.cart.close();
    });

    // a closed drawer always reopens on step 1 with an empty form
    effect(() => {
      if (!this.cart.isOpen()) untracked(() => this.reset());
    });

    // the original flew a dot to the FAB and re-triggered `.pop` on landing;
    // here the count itself is the trigger, so there is no timing to chain
    effect(() => {
      const n = this.cart.count();
      const grew = n > this.lastCount;
      this.lastCount = n;
      if (grew) this.popping.set(true);
    });
  }

  open(): void {
    this.cart.open();
  }

  close(): void {
    this.cart.close();
  }

  toCheckout(): void {
    this.cart.toCheckout();
  }

  isSiteLockPage(): boolean {
    return this.router.url.split(/[?#]/, 1)[0].replace(/\/$/, '') === '/web-security-sitelock';
  }

  back(): void {
    this.cart.backToCart();
  }

  dec(line: CartLine): void {
    this.cart.setQty(line.name, line.qty - 1);
  }

  inc(line: CartLine): void {
    this.cart.setQty(line.name, line.qty + 1);
  }

  remove(line: CartLine): void {
    this.cart.remove(line.name);
  }

  /** "Done" on the confirmation panel closed the drawer in the original too. */
  finish(): void {
    this.done.set(false);
    this.cart.close();
  }

  async submit(): Promise<void> {
    if (this.busy()) return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set(
        firstError(Object.values(this.form.controls), 'Please fill name, email and phone.'),
      );
      return;
    }

    this.error.set('');
    this.busy.set(true);

    const v = this.form.getRawValue();
    const result = await this.leads.submit('checkout', {
      customer: {
        name: v.name,
        company: v.company,
        email: v.email,
        phone: v.phone,
        gstin: v.gstin,
      },
      items: this.cart
        .lines()
        .map((l) => ({ name: l.name, qty: l.qty, price_note: l.price || 'quote' })),
      zoho: { org_id: ZOHO_ORG_ID, action: 'create_estimate_and_send_payment_link' },
      delivery: ['email', 'whatsapp'],
    });

    this.busy.set(false);

    // no webhook configured is still a success — the original showed the panel
    if (!result.ok && !result.skipped) {
      this.error.set('Connection issue — please use WhatsApp quote instead.');
      return;
    }

    this.reference.set(result.ref);
    this.done.set(true);
    this.cart.clear();
  }

  private reset(): void {
    this.done.set(false);
    this.busy.set(false);
    this.error.set('');
    this.form.reset();
  }
}
