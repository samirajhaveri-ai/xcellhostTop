import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { OverlayService } from './core/overlay.service';
import { CallbackTopicService } from './overlays/callback-topic.service';
import {
  AuthModalComponent,
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
    AuthModalComponent,
    PartnerModalComponent,
    DocModalComponent,
    WhatsappFabComponent,
    BackToTopComponent,
  ],
  templateUrl: './app.html',
  host: {
    style: 'display:contents',
    '(document:keydown.escape)': 'onEscape()',
    '(document:click)': 'onDocumentClick($event)',
    '(window:scroll)': 'updateScrollProgress()',
    '(window:resize)': 'updateScrollProgress()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly scrollProgress = signal(0);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  updateScrollProgress(): void {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(
      documentHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / documentHeight) * 100)) : 0,
    );
  }

  onEscape(): void {
    this.overlay.closeTop();
  }

  /** Future pages only need a CTA labelled "Let's Talk" or "Talk to Sales". */
  onDocumentClick(event: MouseEvent): void {
    if (event.defaultPrevented || event.button !== 0) return;

    const target = event.target as Element | null;
    const cta = target?.closest<HTMLElement>('a, button');
    if (!cta || cta.hasAttribute('disabled')) return;

    const label = (cta.textContent ?? '').replace(/\s+/g, ' ').trim();
    if (!/^(let'?s talk|talk to sales|talk to us)$/i.test(label)) return;

    event.preventDefault();
    this.topics.ask(cta.dataset['cbtopic']?.trim() || '');
    this.overlay.open('callback');
  }
}
