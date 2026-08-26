import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, inject } from '@angular/core';
import lottie, { AnimationItem } from 'lottie-web';

/** Renders a localized Lottie JSON asset without depending on the reference site at runtime. */
@Directive({ selector: '[xhLottie]', standalone: true })
export class LottieDirective implements AfterViewInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private animation: AnimationItem | null = null;

  @Input({ required: true }) xhLottie = '';

  ngAfterViewInit(): void {
    this.animation = lottie.loadAnimation({
      container: this.host.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: this.xhLottie,
    });
  }

  ngOnDestroy(): void {
    this.animation?.destroy();
  }
}
