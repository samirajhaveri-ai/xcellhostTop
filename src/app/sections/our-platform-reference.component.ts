import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  OUR_PLATFORM_REFERENCE_HTML,
  OUR_PLATFORM_REFERENCE_STYLES,
} from '../data/our-platform-reference.data';

@Component({
  selector: 'xh-our-platform-reference',
  standalone: true,
  template: '<div class="our-platform-reference" [innerHTML]="content"></div>',
  styles: `
    :host { display: block; }
    .our-platform-reference { display: block; overflow: hidden; }
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurPlatformReferenceComponent implements AfterViewInit {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  readonly content: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(`
    <style>
      ${OUR_PLATFORM_REFERENCE_STYLES}
      .rv { opacity: 1 !important; transform: none !important; }
      .ft-head { margin-top: 72px !important; }
      @media (max-width: 700px) {
        .ft-head { margin-top: 48px !important; }
      }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: .01ms !important;
          animation-iteration-count: 1 !important;
        }
      }
    </style>
    ${OUR_PLATFORM_REFERENCE_HTML}
  `);

  ngAfterViewInit(): void {
    const root = this.host.nativeElement.shadowRoot;
    const tabList = root?.querySelector<HTMLElement>('#ftTabs');
    const panelList = root?.querySelector<HTMLElement>('#ftPanels');
    if (!tabList || !panelList) return;

    const tabs = Array.from(tabList.querySelectorAll<HTMLButtonElement>('.ft-tab'));
    const panels = Array.from(panelList.querySelectorAll<HTMLElement>('.ft-panel'));

    tabList.setAttribute('role', 'tablist');
    tabList.setAttribute('aria-label', 'Cloud console views');

    const activate = (index: number, focus = false): void => {
      tabs.forEach((tab, tabIndex) => {
        const active = tabIndex === index;
        tab.classList.toggle('active', active);
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-selected', String(active));
        tab.setAttribute('tabindex', active ? '0' : '-1');
        if (focus && active) tab.focus();
      });
      panels.forEach((panel, panelIndex) => {
        const active = panelIndex === index;
        panel.classList.toggle('active', active);
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-hidden', String(!active));
      });
    };

    const onClick = (event: Event): void => {
      const button = (event.target as Element | null)?.closest<HTMLButtonElement>('.ft-tab');
      if (!button) return;
      const index = tabs.indexOf(button);
      if (index >= 0) activate(index);
    };

    const onKeydown = (event: KeyboardEvent): void => {
      const button = (event.target as Element | null)?.closest<HTMLButtonElement>('.ft-tab');
      const current = button ? tabs.indexOf(button) : -1;
      if (current < 0) return;

      let next = current;
      if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (current + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;

      event.preventDefault();
      activate(next, true);
    };

    activate(Math.max(0, tabs.findIndex((tab) => tab.classList.contains('active'))));
    tabList.addEventListener('click', onClick);
    tabList.addEventListener('keydown', onKeydown);
    this.destroyRef.onDestroy(() => {
      tabList.removeEventListener('click', onClick);
      tabList.removeEventListener('keydown', onKeydown);
    });
  }
}
