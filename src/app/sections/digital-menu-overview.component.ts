import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, computed, inject, output, signal } from '@angular/core';

type MenuCategory = 'Coffee' | 'Food' | 'Desserts';
type MenuItem = { id: number; category: MenuCategory; name: string; price: number; special: boolean; vegetarian: boolean; soldOut: boolean };

/** Content and demo adapted from the supplied digital-menu-and-catalog-management.html. */
@Component({
  selector: 'xh-digital-menu-overview',
  standalone: true,
  templateUrl: './digital-menu-overview.component.html',
  styleUrl: './digital-menu-overview.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigitalMenuOverviewComponent implements AfterViewInit, OnDestroy {
  readonly quoteRequested = output<{ event: MouseEvent; plan: string }>();
  readonly categories: MenuCategory[] = ['Coffee', 'Food', 'Desserts'];
  readonly activeCategory = signal<MenuCategory>('Coffee');
  readonly activeIndustry = signal(0);
  readonly items = signal<MenuItem[]>([
    { id: 0, category: 'Coffee', name: 'Cappuccino', price: 159, special: false, vegetarian: true, soldOut: false },
    { id: 1, category: 'Coffee', name: 'Cold brew', price: 189, special: true, vegetarian: true, soldOut: false },
    { id: 2, category: 'Coffee', name: 'Hazelnut latte', price: 219, special: false, vegetarian: true, soldOut: false },
    { id: 3, category: 'Food', name: 'Masala omelette', price: 179, special: false, vegetarian: false, soldOut: false },
    { id: 4, category: 'Food', name: 'Paneer tikka sandwich', price: 229, special: true, vegetarian: true, soldOut: false },
    { id: 5, category: 'Desserts', name: 'Chocolate brownie', price: 149, special: false, vegetarian: true, soldOut: false },
    { id: 6, category: 'Desserts', name: 'Tiramisu', price: 249, special: false, vegetarian: true, soldOut: false },
  ]);
  readonly visibleItems = computed(() => this.items()
    .filter(item => item.category === this.activeCategory())
    .sort((a, b) => Number(b.special) - Number(a.special)));
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private observer?: IntersectionObserver;

  updatePrice(id: number, event: Event): void {
    const value = (event.target as HTMLInputElement).valueAsNumber;
    const price = Number.isFinite(value) ? Math.max(0, value) : 0;
    this.items.update(items => items.map(item => item.id === id ? { ...item, price } : item));
  }

  setSoldOut(id: number, event: Event): void {
    const soldOut = (event.target as HTMLInputElement).checked;
    this.items.update(items => items.map(item => item.id === id ? { ...item, soldOut } : item));
  }

  toggleSpecial(id: number): void {
    this.items.update(items => items.map(item => item.id === id ? { ...item, special: !item.special } : item));
  }

  requestQuote(event: MouseEvent, plan: string): void {
    event.preventDefault();
    this.quoteRequested.emit({ event, plan: `Digital Menu & Catalog Management — ${plan}` });
  }

  onIndustryKey(event: KeyboardEvent, current: number): void {
    let next: number;
    if (event.key === 'ArrowRight') next = (current + 1) % 4;
    else if (event.key === 'ArrowLeft') next = (current + 3) % 4;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = 3;
    else return;
    event.preventDefault();
    this.activeIndustry.set(next);
    this.host.querySelectorAll<HTMLButtonElement>('[data-tabs="ind"] button')[next]?.focus();
  }

  ngAfterViewInit(): void {
    const nodes = this.host.querySelectorAll<HTMLElement>('.rv, .ox-tl');
    if (typeof IntersectionObserver === 'undefined' || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(node => node.classList.add('is-in'));
      return;
    }
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          this.observer?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    nodes.forEach(node => this.observer?.observe(node));
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}
