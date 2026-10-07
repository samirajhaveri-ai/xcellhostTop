import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';

import { OverlayService } from './core/overlay.service';
import { DocRequestService } from './core/doc-request.service';
import { CallbackTopicService } from './overlays/callback-topic.service';
import {
  BackToTopComponent,
  CallbackModalComponent,
  CartDrawerComponent,
  ChatbotComponent,
  DocModalComponent,
  PartnerModalComponent,
  SearchDialogComponent,
  TrialModalComponent,
  WhatsappFabComponent,
} from './overlays';
import {
  ContactOptionsComponent,
  FooterComponent,
  HeaderComponent,
  IntroSplashComponent,
  PromoBarComponent,
  UtilityBarComponent,
} from './layout';

/**
 * The application shell: the chrome that never changes (intro splash, utility
 * bar, promo strip, header, footer) wrapped around the routed page, plus the
 * global overlay hosts.
 *
 * Escape is bound here once. `OverlayService` keeps the layer stack, so closing
 * the top one is correct even when a modal sits over a drawer.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IntroSplashComponent,
    UtilityBarComponent,
    PromoBarComponent,
    HeaderComponent,
    ContactOptionsComponent,
    FooterComponent,
    CartDrawerComponent,
    ChatbotComponent,
    SearchDialogComponent,
    CallbackModalComponent,
    TrialModalComponent,
    PartnerModalComponent,
    DocModalComponent,
    WhatsappFabComponent,
    BackToTopComponent,
  ],
  templateUrl: './app.html',
  host: {
    style: 'display:contents',
    '(document:keydown.escape)': 'onEscape()',
    '(window:scroll)': 'updateScrollProgress()',
    '(window:resize)': 'updateScrollProgress()',
    '(window:message)': 'onHeroMessage($event)',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly scrollProgress = signal(0);
  private readonly overlay = inject(OverlayService);
  private readonly docs = inject(DocRequestService);
  private readonly topics = inject(CallbackTopicService);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  readonly isPortalLogin = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
      map(() => /^\/(?:signup|(?:customer|partner|vendor|employee)-login)(?:[/?#]|$)/.test(this.router.url)),
    ),
    { initialValue: false },
  );

  constructor() {
    const captureClick = (event: Event): void => this.onDocumentClick(event as MouseEvent);
    this.document.addEventListener('click', captureClick, true);
    this.destroyRef.onDestroy(() => this.document.removeEventListener('click', captureClick, true));
  }

  updateScrollProgress(): void {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(
      documentHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / documentHeight) * 100)) : 0,
    );
  }

  onEscape(): void {
    this.overlay.closeTop();
  }

  /** Same-origin standalone hero documents hand their gated CTAs back to Angular. */
  onHeroMessage(event: MessageEvent<unknown>): void {
    const currentWindow = this.document.defaultView;
    if (!currentWindow || event.origin !== currentWindow.location.origin) return;

    const sourceFrame = Array.from(
      this.document.querySelectorAll<HTMLIFrameElement>('iframe.supplied-smb-hero-frame'),
    ).find((frame) => frame.contentWindow === event.source);
    if (!sourceFrame) return;

    const message = event.data as { type?: unknown; action?: unknown } | null;
    if (message?.type !== 'xcellhost:hero-action' || message.action !== 'infosheet') return;

    const product = sourceFrame.title.replace(/\s+interactive overview$/i, '').trim();
    this.docs.ask('infosheet', product || this.document.title);
    this.overlay.open('doc');
  }

  /** Future pages only need a CTA labelled "Let's Talk" or "Talk to Sales". */
  onDocumentClick(event: MouseEvent): void {
    if (event.defaultPrevented || event.button !== 0) return;

    const target = event.target as Element | null;
    const cta = target?.closest<HTMLElement>('a, button');
    if (!cta || cta.hasAttribute('disabled') || cta.dataset['ctaHandled'] === 'true') return;

    const label = (cta.textContent ?? '').replace(/\s+/g, ' ').trim();
    if (/\binfosheet\b/i.test(label)) {
      if (this.overlay.isOpen('doc')) return;
      event.preventDefault();
      event.stopPropagation();
      this.docs.ask('infosheet', this.infosheetProductName(cta));
      this.overlay.open('doc');
      return;
    }

    if (/^(?:start(?: your)?(?: \d+-day)?|ask for|\d+ day's)?\s*free trial(?:\s*→)?$/i.test(label)) {
      event.preventDefault();
      event.stopPropagation();
      this.overlay.open('trial');
      return;
    }

    if (!/^(let'?s talk|talk to sales|talk to us)$/i.test(label)) return;

    event.preventDefault();
    event.stopPropagation();
    this.topics.ask(cta.dataset['cbtopic']?.trim() || '');
    this.overlay.open('callback');
  }

  private infosheetProductName(cta: HTMLElement): string {
    const explicitName = cta.dataset['product']?.trim();
    if (explicitName) return explicitName;

    const localHeading = cta.closest('section')?.querySelector('h1');
    const pageHeading = document.querySelector('main h1, #ppTitle, h1');
    return (localHeading?.textContent || pageHeading?.textContent || document.title)
      .replace(/\s+/g, ' ')
      .trim();
  }
}
