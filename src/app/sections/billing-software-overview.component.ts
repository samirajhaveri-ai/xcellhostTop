import { AfterViewInit, Component, ElementRef, OnDestroy, computed, signal } from '@angular/core';

type InvoiceItem = { name: string; qty: number; rate: number; gst: number };
type Industry = { name: string; icon: string; description: string; points: string[] };

@Component({
  selector: 'xh-billing-software-overview',
  standalone: true,
  templateUrl: './billing-software-overview.component.html',
  styleUrl: './billing-software-overview.component.css',
})
export class BillingSoftwareOverviewComponent implements AfterViewInit, OnDestroy {
  readonly interstate = signal(false);
  readonly activeIndustry = signal(0);
  readonly items = signal<InvoiceItem[]>([
    { name: 'Website maintenance (AMC)', qty: 1, rate: 12000, gst: 18 },
    { name: 'Google Ads management', qty: 1, rate: 8000, gst: 18 },
    { name: 'Printed standees', qty: 10, rate: 250, gst: 12 },
  ]);
  readonly subtotal = computed(() => this.items().reduce((sum, item) => sum + item.qty * item.rate, 0));
  readonly taxes = computed(() => {
    const grouped = new Map<number, number>();
    for (const item of this.items()) {
      grouped.set(item.gst, (grouped.get(item.gst) ?? 0) + (item.qty * item.rate * item.gst) / 100);
    }
    return [...grouped.entries()].filter(([rate]) => rate > 0).map(([rate, value]) => ({ rate, value }));
  });
  readonly totalTax = computed(() => this.taxes().reduce((sum, row) => sum + row.value, 0));
  readonly grandTotal = computed(() => this.subtotal() + this.totalTax());

  readonly features = [
    { icon: 'invoice', title: 'Invoice in seconds', body: 'GST-compliant invoices with logo, HSN/SAC, CGST/SGST or IGST and terms.' },
    { icon: 'wallet', title: 'UPI & card pay links', body: 'Every invoice carries a payment link; payments reconcile automatically.' },
    { icon: 'clock', title: 'Recurring billing', body: 'Subscriptions and retainers are billed automatically on schedule.' },
    { icon: 'message', title: 'WhatsApp & email delivery', body: 'Send invoices and reminders where customers read them.' },
    { icon: 'chart', title: 'Sales & GST reports', body: 'Revenue, outstanding and GST summaries ready for filing.' },
    { icon: 'stock', title: 'Inventory', body: 'Stock levels update automatically as you bill.' },
    { icon: 'user', title: 'Customer ledger', body: "Every customer's invoices, payments and balance in one view." },
    { icon: 'quote', title: 'Quotes & estimates', body: 'Convert an approved quote to an invoice in one click.' },
  ];
  readonly industries: Industry[] = [
    { name: 'Restaurants & cafés', icon: '☕', description: 'Catering and bulk-order invoices.', points: ['GST invoices', 'UPI collection', 'Daily sales report'] },
    { name: 'Home services', icon: '⌂', description: 'Invoice on the spot after the job.', points: ['Mobile invoicing', 'Pay link on WhatsApp', 'AMC recurring bills'] },
    { name: 'Agencies & consultants', icon: '↗', description: 'Monthly retainers on autopilot.', points: ['Recurring invoices', 'Payment reminders', 'Outstanding report'] },
    { name: 'Retail', icon: '▤', description: 'Billing with stock tracking.', points: ['Item master', 'Stock updates', 'GST summary'] },
  ];

  private observer?: IntersectionObserver;
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  scrollToDemo(): void {
    this.scrollToSection('billing-demo');
  }

  scrollToSection(id: string): void {
    this.host.nativeElement.querySelector(`#${id}`)?.scrollIntoView({
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'start',
    });
  }

  ngAfterViewInit(): void {
    const nodes = this.host.nativeElement.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(node => node.classList.add('is-visible'));
      return;
    }
    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.observer?.unobserve(entry.target);
        }
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -45px' });
    nodes.forEach(node => this.observer?.observe(node));
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }

  updateItem(index: number, key: keyof InvoiceItem, event: Event): void {
    const input = event.target as HTMLInputElement | HTMLSelectElement;
    this.items.update(items => items.map((item, i) => i === index
      ? { ...item, [key]: key === 'name' ? input.value : Math.max(0, Number(input.value) || 0) }
      : item));
  }

  addItem(): void {
    this.items.update(items => [...items, { name: 'New item', qty: 1, rate: 1000, gst: 18 }]);
  }

  money(value: number): string {
    return `₹${value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
}
