import { ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'xh-nvidia-a30-source',
  standalone: true,
  template: `
    <iframe
      #frame
      src="/nvidia-a30-content.html"
      [title]="view === 'hero' ? 'NVIDIA A30 cloud GPU introduction' : 'NVIDIA A30 cloud GPU details'"
      scrolling="no"
      (load)="onLoad()"
    ></iframe>
  `,
  styles: [`
    :host { display: block; width: 100%; overflow: hidden; }
    iframe { display: block; width: 100%; min-height: 520px; border: 0; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NvidiaA30SourceComponent implements OnDestroy {
  @Input() view: 'hero' | 'overview' | 'details' = 'details';
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private observer?: ResizeObserver;

  onLoad(): void {
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    if (!frame || !document) return;

    if (this.view !== 'hero') {
      document.querySelectorAll<HTMLElement>('.nav, .pp-hero, .pp-trust').forEach((element) => {
        element.style.display = 'none';
      });

      const answer = document.getElementById('answer');
      const overview = answer?.previousElementSibling as HTMLElement | null;
      if (this.view === 'overview') {
        document.querySelectorAll<HTMLElement>('.foot').forEach((element) => {
          element.style.display = 'none';
        });
        const container = answer?.parentElement;
        container?.querySelectorAll<HTMLElement>(':scope > *').forEach((element) => {
          element.style.display = element === overview || element === answer ? '' : 'none';
        });
      } else {
        if (overview) overview.style.display = 'none';
        if (answer) answer.style.display = 'none';
      }
    } else {
      let sibling = document.querySelector('.pp-trust')?.nextElementSibling as HTMLElement | null;
      while (sibling) {
        sibling.style.display = 'none';
        sibling = sibling.nextElementSibling as HTMLElement | null;
      }
    }

    const resize = (): void => {
      frame.style.height = `${Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight ?? 0)}px`;
    };

    resize();
    this.observer?.disconnect();
    if (typeof ResizeObserver !== 'undefined') {
      this.observer = new ResizeObserver(resize);
      this.observer.observe(document.documentElement);
      if (document.body) this.observer.observe(document.body);
    }
    document.fonts?.ready.then(resize);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
