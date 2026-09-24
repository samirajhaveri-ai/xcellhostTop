import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, output } from '@angular/core';

export interface H100PlanSelection {
  code: string;
  price: string;
  term: string;
}

@Component({
  selector: 'xh-nvidia-h100-content',
  standalone: true,
  template: '<iframe #frame src="/nvidia-h100-content.html" title="NVIDIA H100 plans and technical details" scrolling="no" (load)="onLoad()"></iframe>',
  styles: [`
    :host { display: block; width: 100vw; margin-left: calc(50% - 50vw); overflow: hidden; }
    iframe { display: block; width: 100%; min-height: 900px; border: 0; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NvidiaH100ContentComponent implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  readonly planSelected = output<H100PlanSelection>();
  private observer?: ResizeObserver;

  onLoad(): void {
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    if (!frame || !document) return;

    const resize = (): void => {
      frame.style.height = `${Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)}px`;
    };
    resize();
    this.observer?.disconnect();
    if (typeof ResizeObserver !== 'undefined') {
      this.observer = new ResizeObserver(resize);
      this.observer.observe(document.documentElement);
      this.observer.observe(document.body);
    }
    document.fonts?.ready.then(resize);

    document.addEventListener('click', (event) => {
      const target = event.target as Element;
      const planLink = target.closest<HTMLAnchorElement>('a[data-plan]');
      if (planLink) {
        event.preventDefault();
        const plan = planLink.closest('.plan');
        this.planSelected.emit({
          code: planLink.dataset['plan'] ?? 'H100',
          price: plan?.querySelector('.amt')?.textContent?.trim() ?? 'Custom quote',
          term: document.querySelector('#xgTerm .is-on')?.textContent?.replace(/No Savings|Save [\d.]+%/g, '').trim() ?? 'Monthly',
        });
        return;
      }
      const anchor = target.closest<HTMLAnchorElement>('a[href^="/"]');
      if (anchor && anchor.origin === window.location.origin) {
        event.preventDefault();
        window.location.assign(anchor.href);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
