import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'xh-anthropic-managed-services-hero',
  standalone: true,
  template: `<iframe
    #frame
    src="/anthropic-managed-services-hero.html"
    title="Illustrative governed request path for Anthropic managed services"
    scrolling="no"
    (load)="onLoad()"
  ></iframe>`,
  styles: [':host{display:block;width:100%}iframe{display:block;width:100%;height:580px;border:0;background:transparent}'],
})
export class AnthropicManagedServicesHeroComponent implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private observer?: ResizeObserver;

  onLoad(): void {
    this.observer?.disconnect();
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    const main = document?.querySelector('main');
    if (!frame || !document || !main) return;
    const resize = () => {
      frame.style.height = `${Math.ceil(main.getBoundingClientRect().height)}px`;
    };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(main);
    void document.fonts.ready.then(resize);
    resize();
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}
