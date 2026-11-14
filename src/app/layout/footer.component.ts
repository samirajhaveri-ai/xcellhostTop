import { DOCUMENT } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogService, slugify } from '../core/catalog.service';
import { OverlayService } from '../core/overlay.service';
import { SITE } from '../data/site.data';

/** The service names the footer's "Catalog" column links to, in order. */
const CATALOG_LINKS = [
  { name: 'SMB Catalog', href: 'https://flipbooks.officeinfra.com/books/SMB-Cloud-Services/' },
  { name: 'SMB Cyber Security', href: 'https://flipbooks.officeinfra.com/books/Cyber-Security-Platform-DXew/' },
  { name: 'Acronis Cyber Protect Cloud', href: 'https://flipbooks.officeinfra.com/books/Acronis-Cyber-Protect-Cloud-kxeF/' },
  { name: 'Managed Cloud Service', href: 'https://flipbooks.officeinfra.com/books/tnuv/' },
  { name: 'Managed Cloud Security', href: 'https://flipbooks.officeinfra.com/books/ycah/' },
  { name: 'Microsoft 365', href: 'https://flipbooks.officeinfra.com/books/Microsoft-365-Platfrom/' },
  // { name: 'Bare Metal Server', href: 'https://flipbooks.officeinfra.com/books/Bare-Metal-Server-1lHl/' },
  // { name: 'GPU Server', href: 'https://flipbooks.officeinfra.com/books/GPU-as-a-Service-p4pW/' },
  // { name: 'Performance Cloud', href: 'https://flipbooks.officeinfra.com/books/guzk/' },
  { name: 'CloudBaba Performance Cloud', href: 'https://flipbooks.officeinfra.com/books/guzk/' },
  { name: 'BFSI Cloud', href: 'https://flipbooks.officeinfra.com/books/gith/' },
  { name: 'DPDPA Platform', href: 'https://flipbooks.officeinfra.com/books/svfi/' },
  { name: 'Digital Authenticity Verification', href: 'https://flipbooks.officeinfra.com/books/Digital-Authenticity-Verification-MlhG/' },
  { name: 'Video Surveillance as a Service', href: 'https://flipbooks.officeinfra.com/books/uygx/' },
];
/**
 * The site footer: about blurb and socials, the About/Catalog columns, the
 * ebook / legal / quick-link rows, certifications, payment options and the
 * partner call-to-action.
 */
@Component({
  selector: 'xh-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private readonly catalog = inject(CatalogService);
  private readonly overlay = inject(OverlayService);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  readonly site = SITE;
  readonly year = new Date().getFullYear();
  readonly videoStarted = signal(false);
  readonly digicertLoaded = signal(false);

  /** Resolved once so the slugs match the directory the service pages use. */
  readonly catalogLinks = CATALOG_LINKS;

  constructor() {
    afterNextRender(() => {
      const window = this.document.defaultView as (Window & {
        __dcid?: Array<{ cid: string; tag: string }>;
      }) | null;
      // DigiCert's loader only initializes on HTTPS. Keep the local badge on HTTP previews.
      if (!window || window.location.protocol !== 'https:') return;

      const container = this.document.getElementById('DigiCertClickID_C0bhhaNw');
      if (!container) return;
      const observer = new MutationObserver(() => {
        const image = container.querySelector('img');
        if (!image) return;
        const showLiveSeal = () => {
          if (image.naturalWidth > 0) {
            this.digicertLoaded.set(true);
            observer.disconnect();
          }
        };
        if (image.complete) showLiveSeal();
        else image.addEventListener('load', showLiveSeal, { once: true });
      });
      observer.observe(container, { childList: true, subtree: true });
      this.destroyRef.onDestroy(() => observer.disconnect());

      const seals = window.__dcid = window.__dcid || [];
      if (!seals.some(seal => seal.cid === 'DigiCertClickID_C0bhhaNw')) {
        seals.push({ cid: 'DigiCertClickID_C0bhhaNw', tag: 'C0bhhaNw' });
      }

      if (!this.document.getElementById('digicert-seal-script')) {
        const script = this.document.createElement('script');
        script.id = 'digicert-seal-script';
        script.async = true;
        script.src = 'https://seal.digicert.com/seals/cascade/seal.min.js';
        this.document.body.appendChild(script);
      }
    });
  }

  openSiteLock(event: MouseEvent): void {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const window = this.document.defaultView;
    if (!window) return;
    event.preventDefault();
    window.open(
      'https://www.sitelock.com/verify.php?site=www.xcellhost.cloud',
      'SiteLock',
      'width=600,height=600,left=160,top=170,noopener,noreferrer',
    );
  }

  openPartner(): void {
    this.overlay.open('partner');
  }
}
