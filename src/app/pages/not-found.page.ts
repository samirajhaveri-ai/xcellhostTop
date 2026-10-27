import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { NotFoundStarsDirective } from './not-found-stars.directive';

@Component({
  selector: 'xh-not-found-page',
  standalone: true,
  imports: [RouterLink, NotFoundStarsDirective],
  templateUrl: './not-found.page.html',
  styleUrl: './not-found.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly servicesOpen = signal(false);

  toggleServices(): void { this.servicesOpen.update(open => !open); }

  @HostListener('document:click')
  closeServices(): void { this.servicesOpen.set(false); }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (!this.servicesOpen()) return;
    this.closeServices();
    this.element.nativeElement.querySelector<HTMLButtonElement>('#nfDd')?.focus();
  }

  constructor() {
    inject(SeoService).set(
      '404 - Page Not Found | XcellHost',
      'We could not find this page. Return to the XcellHost homepage or contact our team for help.',
      inject(Router).url.split(/[?#]/, 1)[0],
    );
  }
}
