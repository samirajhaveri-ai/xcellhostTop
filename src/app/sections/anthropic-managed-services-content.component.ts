import { Component, ElementRef, OnDestroy, ViewChild, output } from '@angular/core';

@Component({
  selector: 'xh-anthropic-managed-services-content',
  standalone: true,
  template: `<iframe
    #frame
    src="/anthropic-managed-services-content.html"
    title="Anthropic managed services products, governance controls and support tiers"
    scrolling="no"
    (load)="onLoad()"
  ></iframe>`,
  styles: [':host{display:block;width:100%}iframe{display:block;width:100%;height:3400px;border:0;background:transparent}'],
})
export class AnthropicManagedServicesContentComponent implements OnDestroy {
  readonly sessionRequested = output<{ event: Event; requirement: string }>();
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private observer?: ResizeObserver;
  private frameDocument?: Document;
  private clickListener?: (event: MouseEvent) => void;

  onLoad(): void {
    this.cleanup();
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
    this.frameDocument = document;
    this.clickListener = (event) => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href="#lead"]');
      if (!anchor || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey ||
          event.shiftKey || event.altKey) return;
      event.preventDefault();
      const plan = anchor.dataset['plan'] || 'Managed services';
      this.sessionRequested.emit({ event, requirement: `${plan} — request a working session` });
    };
    document.addEventListener('click', this.clickListener);
  }

  private cleanup(): void {
    this.observer?.disconnect();
    if (this.frameDocument && this.clickListener) this.frameDocument.removeEventListener('click', this.clickListener);
    this.frameDocument = undefined;
    this.clickListener = undefined;
  }

  ngOnDestroy(): void { this.cleanup(); }
}
