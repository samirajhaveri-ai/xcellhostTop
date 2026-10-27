import { Component, Input, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'xh-nvidia-vera-rubin-content',
  standalone: true,
  template: `@if (hero) { <iframe #frame src="/nvidia-vera-rubin-hero.html" title="Illustrative NVIDIA Vera Rubin Rack" scrolling="no" (load)="onLoad()"></iframe> } @else { <iframe #frame src="/nvidia-vera-rubin-content.html" [title]="view === 'overview' ? 'NVIDIA Vera Rubin overview' : 'NVIDIA Vera Rubin features'" scrolling="no" (load)="onLoad()"></iframe> }`,
  styles: [`:host{display:block}iframe{display:block;width:100%;min-height:0;border:0}`],
})
export class VeraRubinContentComponent implements OnDestroy {
  @Input() hero = false;
  @Input() view: 'overview' | 'details' = 'details';
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private observer?: ResizeObserver;
  private document?: Document;
  private clickListener?: (event: MouseEvent) => void;

  onLoad(): void {
    this.ngOnDestroy();
    const frame = this.frame?.nativeElement;
    const doc = frame?.contentDocument;
    const main = doc?.querySelector('main');
    if (!frame || !doc || !main) return;

    if (!this.hero) {
      const answer = main.querySelector<HTMLElement>('#answer');
      if (this.view === 'overview') {
        main.querySelectorAll<HTMLElement>(':scope > *').forEach((element) => {
          element.style.display = element === answer ? '' : 'none';
        });
      } else if (answer) {
        answer.style.display = 'none';
      }
    }

    const resize = () => { frame.style.height = `${Math.ceil(main.getBoundingClientRect().height) + 8}px`; };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(main);
    doc.fonts.ready.then(resize);
    resize();
    this.document = doc;
    this.clickListener = (event) => {
      const pageLink = (event.target as Element).closest<HTMLAnchorElement>('a[href^="/"]');
      if (pageLink) pageLink.target = '_top';
      const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const href = anchor?.getAttribute('href');
      if (href === '#lead') {
        event.preventDefault();
        window.document.querySelector('#ppage .pp-cta')?.scrollIntoView({behavior: 'smooth', block: 'center'});
        return;
      }
      const target = href && href.length > 1 ? doc.getElementById(href.slice(1)) : null;
      if (!target) return;
      event.preventDefault();
      window.scrollTo({ top: window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top - 24, behavior: 'smooth' });
    };
    doc.addEventListener('click', this.clickListener);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.document && this.clickListener) this.document.removeEventListener('click', this.clickListener);
  }
}
