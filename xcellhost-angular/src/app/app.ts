import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { OverlayService } from './core/overlay.service';
import {
  AuthModalComponent,
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
  ],
  templateUrl: './app.html',
  host: {
    style: 'display:contents',
    '(document:keydown.escape)': 'onEscape()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly overlay = inject(OverlayService);

  onEscape(): void {
    this.overlay.closeTop();
  }
}
