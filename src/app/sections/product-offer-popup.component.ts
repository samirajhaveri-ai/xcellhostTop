import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'xh-product-offer-popup',
  standalone: true,
  template: `
    @if (visible()) {
      <iframe
        #offerFrame
        class="product-offer-frame"
        [class.is-open]="active()"
        [src]="safePopupSrc()"
        [title]="popupTitle()"
        (load)="watchPopup()"
      ></iframe>
    }
  `,
  styles: [`
    :host { display: contents; }
    .product-offer-frame {
      position: fixed;
      inset: 0;
      z-index: 2147482999;
      width: 100%;
      height: 100dvh;
      border: 0;
      background: transparent;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
    .product-offer-frame.is-open {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductOfferPopupComponent implements OnDestroy {
  @ViewChild('offerFrame') private frame?: ElementRef<HTMLIFrameElement>;

  readonly popupSrc = input.required<string>();
  readonly popupTitle = input.required<string>();
  private readonly sanitizer = inject(DomSanitizer);
  readonly safePopupSrc = computed(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(this.popupSrc()),
  );
  readonly visible = signal(false);
  readonly active = signal(false);

  private modalObserver?: MutationObserver;
  private dismissTimer?: ReturnType<typeof setTimeout>;
  private activationTimer?: ReturnType<typeof setInterval>;
  private observedModal?: HTMLElement;

  constructor() {
    // Avoid loading the campaign asset during server prerendering and hydration.
    afterNextRender(() => {
      this.visible.set(true);
      // Do not wait for the iframe load event. The supplied files contain a
      // large inline image and an external analytics script, both of which can
      // delay load on a cold cache even though the popup DOM is already ready.
      this.activationTimer = setInterval(() => {
        if (this.activatePopup()) this.stopActivationPolling();
      }, 50);
    });
  }

  watchPopup(): void {
    this.activatePopup();
    this.stopActivationPolling();
  }

  private activatePopup(): boolean {
    const frameDocument = this.frame?.nativeElement.contentDocument;
    const modal = frameDocument?.getElementById('xh-credits');
    if (!frameDocument || !modal) return false;

    this.applyBareMetalInteractions(frameDocument);

    if (this.observedModal !== modal) {
      this.modalObserver?.disconnect();
      this.observedModal = modal;
      let hasOpened = !modal.hidden;
      this.modalObserver = new MutationObserver(() => {
        if (!modal.hidden) {
          hasOpened = true;
          this.active.set(true);
        } else if (hasOpened) {
          this.dismiss();
        }
      });
      this.modalObserver.observe(modal, { attributes: true, attributeFilter: ['hidden'] });
      modal.querySelector('.xh-close')?.addEventListener('click', () => this.dismiss(), { once: true });
      modal.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') this.dismiss();
      });
    }

    const popupWindow = this.frame?.nativeElement.contentWindow as
      | (Window & { openXcellCreditsPopup?: () => void })
      | null
      | undefined;
    if (popupWindow?.openXcellCreditsPopup) {
      popupWindow.openXcellCreditsPopup();
    } else {
      // The popup markup is available before its blocking third-party script
      // finishes. Reveal it now; the supplied form script can finish loading
      // independently without making the visitor refresh the page.
      modal.hidden = false;
      const frameBody = modal.ownerDocument.body;
      if (frameBody) frameBody.style.overflow = 'hidden';
    }
    this.active.set(true);

    if (!this.dismissTimer) {
      // The supplied popups close themselves after 60 seconds once displayed.
      this.dismissTimer = setTimeout(() => this.dismiss(), 90_000);
    }
    return true;
  }

  ngOnDestroy(): void {
    this.stopActivationPolling();
    this.modalObserver?.disconnect();
    if (this.dismissTimer) clearTimeout(this.dismissTimer);
  }

  private dismiss(): void {
    this.stopActivationPolling();
    this.modalObserver?.disconnect();
    this.modalObserver = undefined;
    this.observedModal = undefined;
    this.active.set(false);
    this.visible.set(false);
    if (this.dismissTimer) {
      clearTimeout(this.dismissTimer);
      this.dismissTimer = undefined;
    }
  }

  private stopActivationPolling(): void {
    if (this.activationTimer) {
      clearInterval(this.activationTimer);
      this.activationTimer = undefined;
    }
  }

  private applyBareMetalInteractions(document: Document): void {
    if (document.getElementById('xh-bare-metal-interactions')) return;

    const style = document.createElement('style');
    style.id = 'xh-bare-metal-interactions';
    style.textContent = `
      #xh-credits {
        background: radial-gradient(120% 90% at 50% 110%, rgba(31,86,214,.28), transparent 55%), rgba(4,11,30,.82) !important;
        backdrop-filter: blur(10px) !important;
        -webkit-backdrop-filter: blur(10px) !important;
        animation: xh-offer-fade .4s ease-out both;
      }
      #xh-credits .xh-card {
        border: 1px solid rgba(255,211,131,.22) !important;
        box-shadow: 0 40px 120px rgba(0,0,0,.65), 0 0 0 1px rgba(47,123,255,.18), 0 0 80px rgba(47,123,255,.18) !important;
        animation: xh-offer-rise .55s cubic-bezier(.2,.8,.2,1) both;
      }
      #xh-credits .xh-card::before {
        content: '';
        position: absolute;
        z-index: 4;
        top: 0;
        right: 0;
        left: 0;
        height: 2px;
        pointer-events: none;
        background: linear-gradient(90deg, transparent, #ffd38a 30%, #ffe9bf 50%, #ffd38a 70%, transparent);
      }
      #xh-credits .xh-close {
        width: 36px !important;
        height: 36px !important;
        display: grid !important;
        place-items: center;
        transition: background .2s, transform .2s !important;
      }
      #xh-credits .xh-close:hover {
        background: rgba(255,255,255,.18) !important;
        transform: rotate(90deg);
      }
      #xh-credits .xh-close:focus-visible,
      #xh-credits input[type='submit']:focus-visible {
        outline: 3px solid rgba(255,211,131,.6) !important;
        outline-offset: 2px;
      }
      #xh-credits input:not([type='hidden']):not([type='submit']) {
        transition: border-color .2s, box-shadow .2s, background .2s;
      }
      #xh-credits input:not([type='hidden']):not([type='submit']):hover {
        border-color: rgba(255,255,255,.28) !important;
      }
      #xh-credits input:not([type='hidden']):not([type='submit']):focus {
        outline: none !important;
        border-color: #ffd38a !important;
        background: rgba(255,255,255,.09) !important;
        box-shadow: 0 0 0 3px rgba(255,211,131,.22) !important;
      }
      #xh-credits input[type='submit'] {
        transition: transform .2s, box-shadow .2s, filter .2s !important;
      }
      #xh-credits input[type='submit']:hover {
        transform: translateY(-1px);
        box-shadow: 0 14px 32px rgba(31,95,232,.48), inset 0 1px 0 rgba(255,255,255,.25) !important;
        filter: brightness(1.06);
      }
      #xh-credits input[type='submit']:disabled {
        transform: none;
        filter: none;
      }
      @keyframes xh-offer-fade {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes xh-offer-rise {
        from { opacity: 0; transform: translateY(18px) scale(.965); }
        to { opacity: 1; transform: none; }
      }
      @media (prefers-reduced-motion: reduce) {
        #xh-credits,
        #xh-credits .xh-card { animation: none !important; }
        #xh-credits .xh-close:hover,
        #xh-credits input[type='submit']:hover { transform: none; }
      }
    `;
    (document.head ?? document.documentElement).appendChild(style);
  }
}
