import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'xh-geotrust-ev-flex-followup',
  standalone: true,
  templateUrl: './geotrust-ev-flex-followup.component.html',
  styleUrl: './geotrust-ev-flex-followup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeoTrustEvFlexFollowupComponent {
  readonly idPrefix = input('geotrust-ev');
  // Existing GeoTrust feedback keeps the customer's original product and wording.
  readonly reviews = [
    { initials: 'RS', name: 'Retail & Payments Team', product: 'E-commerce · EV SSL',
      quote: 'The EV certificate lifted checkout trust noticeably. XcellHost handled the whole business validation and installed it on our load balancer the same week.' },
    { initials: 'IT', name: 'IT Operations', product: 'SaaS · Wildcard SSL',
      quote: "One wildcard now covers all our subdomains and the automation renews it for us. We haven't had a single expiry incident since we moved to XcellHost." },
    { initials: 'FC', name: 'Finance Controller', product: 'NBFC · OV SSL',
      quote: 'Transparent INR pricing, a proper GST invoice and quick support. Renewals are now completely hands-off for our team.' },
  ];
  readonly faqs = input<readonly { question: string; answer: string }[]>([
    { question: 'What is GeoTrust TrueBusiness ID EV (FLEX)?',
      answer: "It's GeoTrust's Extended Validation SSL certificate with a flexible name list. One certificate carries your verified legal company identity and between 1 and 250 fully qualified domain names, which you can add to during the term." },
    { question: 'How is FLEX different from a multi-domain EV certificate?',
      answer: 'A classic multi-domain EV order usually starts as a three-name bundle. FLEX lets you start with one or two names and pay for exactly what you list, then add more names as your business grows.' },
    { question: 'Can I add a wildcard or an IP address?',
      answer: 'No. EV FLEX covers exact domain names only. Wildcards and IP addresses need a suitable DV or OV certificate alongside EV. XcellHost can help plan the right combination.' },
    { question: 'How quickly is an EV FLEX certificate issued?',
      answer: 'First-time EV usually takes 1–5 business days, depending on how quickly company records match and the verification call connects. Each domain must also pass a control check.' },
    { question: 'Do you install the certificate on my servers?',
      answer: 'XcellHost offers installation on cPanel, Plesk, IIS, Nginx, Apache, load balancers and other supported platforms. Add installation in the configurator. Server licences are unlimited for the names covered by your certificate.' },
    { question: 'Can I add domains after the certificate is issued?',
      answer: 'Yes, up to 250 in total. Each new name passes a domain-control check, and the certificate is reissued with the updated list. Your quotation confirms the cost of the additional names.' },
    { question: 'Do I get a GST invoice?',
      answer: 'Yes. XcellHost bills in Indian rupees and provides a GST invoice. The configurator shows certificate, SAN and installation costs, plus 18% GST and the payable total.' },
    { question: 'What happens when my certificate expires during the term?',
      answer: 'A multi-year purchase is a subscription. You receive fresh certificates through the purchased term, with free reissues. XcellHost can manage each reissue and installation, or help set up ACME automation.' },
  ]);
  readonly openQuestions = signal(new Set([0]));

  toggleFaq(index: number): void {
    this.openQuestions.update(current => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index); else next.add(index);
      return next;
    });
  }
}
