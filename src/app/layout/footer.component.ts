import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogService, slugify } from '../core/catalog.service';
import { OverlayService } from '../core/overlay.service';
import { SITE } from '../data/site.data';

/** The service names the footer's "Catalog" column links to, in order. */
const CATALOG_LINKS = [
  { name: 'SMB Catalog', href: 'https://flipbooks.officeinfra.com/books/SMB-Cloud-Services/' },
  { name: 'SMB Cyber Security', href: 'https://flipbooks.officeinfra.com/books/Cyber-Security-Platform-DXew/' },
  { name: 'Acronis Cyber Protect Cloud', href: 'https://flipbooks.officeinfra.com/books/Acronis-Cyber-Protect-Cloud-compressed/' },
  { name: 'Managed Cloud Service', href: 'https://flipbooks.officeinfra.com/books/tnuv/' },
  { name: 'Managed Cloud Security', href: 'https://flipbooks.officeinfra.com/books/ycah/' },
  { name: 'Microsoft 365', href: 'https://flipbooks.officeinfra.com/books/Microsoft-365-Platfrom/' },
  { name: 'Bare Metal Server', href: 'https://flipbooks.officeinfra.com/books/Bare-Metal-Server-1lHl/' },
  { name: 'GPU Server', href: 'https://flipbooks.officeinfra.com/books/GPU-as-a-Service-p4pW/' },
  { name: 'Performance Cloud', href: 'https://flipbooks.officeinfra.com/books/guzk/' },
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
})
export class FooterComponent {
  private readonly catalog = inject(CatalogService);
  private readonly overlay = inject(OverlayService);

  readonly site = SITE;
  readonly year = new Date().getFullYear();

  /** Resolved once so the slugs match the directory the service pages use. */
  readonly catalogLinks = CATALOG_LINKS;

  openPartner(): void {
    this.overlay.open('partner');
  }
}
