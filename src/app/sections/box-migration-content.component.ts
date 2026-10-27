import { Component, ElementRef, Input, OnDestroy, ViewChild, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'xh-box-migration-content',
  standalone: true,
  host: { '[class.box-hero]': 'hero' },
  template: `<iframe #frame [src]="hero ? heroUrl : contentUrl" [title]="hero ? 'Box Migration overview' : 'Box Migration workloads and estimator'" scrolling="no" (load)="onLoad()"></iframe>`,
  styles: [`:host{display:block}iframe{display:block;width:100%;min-height:720px;border:0}:host(.box-hero) iframe{min-height:0}`],
})
export class BoxMigrationContentComponent implements OnDestroy {
  @Input() hero = false;
  private readonly sanitizer = inject(DomSanitizer);
  readonly heroUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/box-migration-hero.html');
  readonly contentUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/box-migration-content.html');
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
    const resize = () => { frame.style.height = `${Math.ceil(main.getBoundingClientRect().height) + (this.hero ? 0 : 8)}px`; };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(main);
    doc.fonts.ready.then(resize);
    resize();
    this.document = doc;
    this.clickListener = (event) => {
      const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const href = anchor?.getAttribute('href');
      if (href === '#lead') {
        event.preventDefault();
        window.document.querySelector('#ppage .pp-cta')?.scrollIntoView({behavior: 'smooth', block: 'center'});
        return;
      }
      const contentFrame = this.hero
        ? window.document.querySelector<HTMLIFrameElement>('iframe[src="/box-migration-content.html"]')
        : frame;
      const target = href && href.length > 1 ? contentFrame?.contentDocument?.getElementById(href.slice(1)) : null;
      if (!target) return;
      event.preventDefault();
      window.scrollTo({ top: window.scrollY + contentFrame!.getBoundingClientRect().top + target.getBoundingClientRect().top - 148, behavior: 'smooth' });
    };
    doc.addEventListener('click', this.clickListener);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.document && this.clickListener) this.document.removeEventListener('click', this.clickListener);
  }
}
