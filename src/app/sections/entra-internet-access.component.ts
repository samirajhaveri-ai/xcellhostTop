import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewEncapsulation, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { INTERNET_CONTENT, INTERNET_HERO } from './entra-internet-access.data';
import { initializeInternetAccess } from './entra-internet-access.interactions';

@Component({
  selector: 'xh-entra-internet-access',
  standalone: true,
  template: '<div class="internet-shell" [class.hero-art]="hero()" [innerHTML]="hero() ? heroMarkup : contentMarkup"></div>',
  styleUrl: './entra-internet-access.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntraInternetAccessComponent implements AfterViewInit, OnDestroy {
  readonly hero = input(false);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly cart = inject(CartService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  // These are local, reviewed HTML constants with inline event handlers removed.
  readonly heroMarkup = this.sanitizer.bypassSecurityTrustHtml(INTERNET_HERO);
  readonly contentMarkup = this.sanitizer.bypassSecurityTrustHtml(INTERNET_CONTENT);
  private cleanup?: () => void;

  ngAfterViewInit(): void {
    const root = this.host.nativeElement.shadowRoot;
    if (!root || typeof window === 'undefined') return;
    this.cleanup = initializeInternetAccess(root, this.hero(), topic => {
      this.topics.ask(topic);
      this.overlay.open('callback');
    }, (line: { name: string; price: number; qty: number; sub: string }) => {
      this.cart.add(line.name, new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(line.price) + ' excl. GST', line.qty);
      this.cart.open();
    });
  }

  ngOnDestroy(): void { this.cleanup?.(); }
}
