import { ChangeDetectionStrategy, Component } from '@angular/core';

/** DigiCert certificates with quantity-based annual totals and detail-page links. */
@Component({
  selector: 'xh-digicert-content',
  standalone: true,
  templateUrl: './digicert-content.component.html',
  styleUrl: './digicert-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigicertContentComponent {
  readonly certificates = [
  {
    "name": "Standard SSL",
    "href": "/digicert-standard-ssl",
    "validation": "OV",
    "range": "Basic",
    "covers": "1 domain (+www)",
    "warranty": "$1M",
    "price": "₹12,999",
    "order": "https://wa.me/918657032540?text=Hi%2C%20I%20would%20like%20to%20order%20DigiCert%20SSL%20Certificates%20%E2%80%94%20Standard%20SSL.",
    "quantity": 1
  },
  {
    "name": "Extended Validation SSL",
    "href": "/digicert-ev-ssl",
    "validation": "EV",
    "range": "Basic",
    "covers": "1 domain",
    "warranty": "$1M",
    "price": "₹19,299",
    "order": "https://wa.me/918657032540?text=Hi%2C%20I%20would%20like%20to%20order%20DigiCert%20SSL%20Certificates%20%E2%80%94%20Extended%20Validation%20SSL.",
    "quantity": 1
  },
  {
    "name": "Multi-Domain SSL",
    "href": "/digicert-multi-domain-ssl",
    "validation": "OV",
    "range": "Basic",
    "covers": "Multiple domains",
    "warranty": "$1M",
    "price": "₹38,799",
    "order": "https://wa.me/918657032540?text=Hi%2C%20I%20would%20like%20to%20order%20DigiCert%20SSL%20Certificates%20%E2%80%94%20Multi-Domain%20SSL.",
    "quantity": 1
  },
  {
    "name": "EV Multi-Domain SSL",
    "href": "/digicert-ev-multi-domain-ssl",
    "validation": "EV",
    "range": "Basic",
    "covers": "Multiple domains",
    "warranty": "$1M",
    "price": "₹35,799",
    "order": "https://wa.me/918657032540?text=Hi%2C%20I%20would%20like%20to%20order%20DigiCert%20SSL%20Certificates%20%E2%80%94%20EV%20Multi-Domain%20SSL.",
    "quantity": 1
  },
  {
    "name": "Wildcard SSL",
    "href": "/digicert-wildcard-ssl",
    "validation": "OV",
    "range": "Basic",
    "covers": "Domain + all subdomains",
    "warranty": "$1M",
    "price": "₹41,099",
    "order": "https://wa.me/918657032540?text=Hi%2C%20I%20would%20like%20to%20order%20DigiCert%20SSL%20Certificates%20%E2%80%94%20Wildcard%20SSL.",
    "quantity": 1
  },
  {
    "name": "Secure Site SSL",
    "href": null,
    "validation": "OV",
    "range": "Secure Site",
    "covers": "1 domain (+www)",
    "warranty": "$1.75M",
    "price": "₹21,399",
    "order": "https://wa.me/918657032540?text=Hi%2C%20I%20would%20like%20to%20order%20DigiCert%20SSL%20Certificates%20%E2%80%94%20Secure%20Site%20SSL.",
    "quantity": 1
  },
  {
    "name": "Secure Site EV SSL",
    "href": "/digicert-secure-site-ev-ssl",
    "validation": "EV",
    "range": "Secure Site",
    "covers": "1 domain",
    "warranty": "$1.75M",
    "price": "₹49,299",
    "order": "https://wa.me/918657032540?text=Hi%2C%20I%20would%20like%20to%20order%20DigiCert%20SSL%20Certificates%20%E2%80%94%20Secure%20Site%20EV%20SSL.",
    "quantity": 1
  },
  {
    "name": "Secure Site Multi-Domain",
    "href": "/digicert-secure-site-multi-domain-ssl",
    "validation": "OV",
    "range": "Secure Site",
    "covers": "Multiple domains",
    "warranty": "$1.75M",
    "price": "₹69,699",
    "order": "https://wa.me/918657032540?text=Hi%2C%20I%20would%20like%20to%20order%20DigiCert%20SSL%20Certificates%20%E2%80%94%20Secure%20Site%20Multi-Domain.",
    "quantity": 1
  },
  {
    "name": "Secure Site Wildcard",
    "href": "/digicert-secure-site-wildcard-ssl",
    "validation": "OV",
    "range": "Secure Site",
    "covers": "Domain + all subdomains",
    "warranty": "$1.75M",
    "price": "₹1,01,699",
    "order": "https://wa.me/918657032540?text=Hi%2C%20I%20would%20like%20to%20order%20DigiCert%20SSL%20Certificates%20%E2%80%94%20Secure%20Site%20Wildcard.",
    "quantity": 1
  },
  {
    "name": "Secure Site Pro SSL",
    "href": "/digicert-secure-site-pro-ssl",
    "validation": "OV",
    "range": "Pro",
    "covers": "1 domain + scanning",
    "warranty": "$2M",
    "price": "₹53,199",
    "order": "https://wa.me/918657032540?text=Hi%2C%20I%20would%20like%20to%20order%20DigiCert%20SSL%20Certificates%20%E2%80%94%20Secure%20Site%20Pro%20SSL.",
    "quantity": 1
  },
  {
    "name": "Secure Site Pro EV SSL",
    "href": "/digicert-secure-site-pro-ev-ssl",
    "validation": "EV",
    "range": "Pro",
    "covers": "1 domain + scanning",
    "warranty": "$2M",
    "price": "₹76,099",
    "order": "https://wa.me/918657032540?text=Hi%2C%20I%20would%20like%20to%20order%20DigiCert%20SSL%20Certificates%20%E2%80%94%20Secure%20Site%20Pro%20EV%20SSL.",
    "quantity": 1
  }
];
  totalPrice(certificate: (typeof this.certificates)[number]): string {
    const unitPrice = Number(certificate.price.replace(/[^0-9]/g, ''));
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(unitPrice * certificate.quantity);
  }
  changeQuantity(certificate: (typeof this.certificates)[number], delta: number): void { certificate.quantity = Math.max(1, Math.min(999, certificate.quantity + delta)); }
  setQuantity(certificate: (typeof this.certificates)[number], event: Event): void { const input = event.target as HTMLInputElement; certificate.quantity = Math.max(1, Math.min(999, Math.round(Number(input.value) || 1))); input.value = String(certificate.quantity); }
  orderLink(certificate: (typeof this.certificates)[number]): string { const url = new URL(certificate.order); if (certificate.quantity > 1) url.searchParams.set('text', (url.searchParams.get('text') || '') + ' Quantity: ' + certificate.quantity + '.'); return url.toString(); }
}
