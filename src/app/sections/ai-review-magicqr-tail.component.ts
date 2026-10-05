import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, Output, computed, inject, signal } from '@angular/core';

export type MagicqrQuoteRequest = { event: Event; plan: string };

@Component({
  selector: 'xh-ai-review-magicqr-tail',
  standalone: true,
  templateUrl: './ai-review-magicqr-tail.component.html',
  styleUrl: './ai-review-magicqr-tail.component.css',
})
export class AiReviewMagicqrTailComponent implements AfterViewInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  @Output() readonly quoteRequested = new EventEmitter<MagicqrQuoteRequest>();

  readonly agencyName = signal('Your Agency');
  readonly brandColour = signal('#7C3AED');
  readonly colours = ['#7C3AED', '#1565D8', '#E11D48', '#059669', '#EA580C', '#0F172A'];
  readonly agencyDomain = computed(() => {
    const value = this.agencyName().toLowerCase().replace(/[^a-z0-9]+/g, '').slice(0, 18);
    return `app.${value || 'youragency'}.in`;
  });
  readonly logoLetter = computed(() => this.agencyName().trim().charAt(0).toUpperCase() || 'Y');

  readonly plans = [
    { eyebrow: 'Single business', title: 'Single business', note: 'For one shop, clinic, restaurant or office', features: ['All features of this tool', 'Setup and onboarding by XcellHost', '24×7 support in English & Hindi', 'INR billing with GST invoice'], popular: false },
    { eyebrow: 'Multi-location / growing', title: 'Multi-location / growing', note: 'For chains, franchises and teams', features: ['Everything in Single business', 'Multiple locations and users', 'Roles and permissions', 'Priority support'], popular: true },
    { eyebrow: 'Agencies — white-label', title: 'Agencies — white-label', note: 'Resell under your own brand', features: ['Your logo, colours and domain', 'Unlimited client workspaces', 'Agency dashboard for every client', 'Partner pricing from XcellHost'], popular: false },
  ];
  readonly suite = [
    { group: 'Local SEO', name: 'Google Business Profile Automation', href: '/google-business-profile-automation', icon: 'G' },
    { group: 'Social', name: 'Facebook Page Automation', href: '/facebook-page-automation', icon: 'f' },
    { group: 'Social', name: 'Instagram Automation', href: '/instagram-automation', icon: '◎' },
    { group: 'AI search', name: 'AEO + GEO Automation', href: '/aeo-geo-automation', icon: 'AI' },
    { group: 'Reputation', name: 'AI Review MagicQR', href: '/ai-review-magicqr', icon: '✓', current: true },
    { group: 'Digital card', name: 'Smart QR & NFC Automation', href: '/smart-qr-and-nfc-automation', icon: 'QR' },
    { group: 'Web', name: 'Instant Website + Bio Link', href: '/instant-website', icon: 'W' },
    { group: 'Hospitality', name: 'Digital Menu & Catalog Management', href: '/digital-menu-and-catalog-management', icon: 'M' },
    { group: 'Sales', name: 'Lead Generation & Pipeline CRM', href: '/lead-generation-and-pipeline-crm', icon: '↗' },
    { group: 'Content', name: 'WordPress Automation', href: '/wordpress-automation', icon: 'WP' },
    { group: 'Bookings', name: 'Appointment Scheduling', href: '/appointment-scheduling', icon: '◷' },
    { group: 'Finance', name: 'Billing Software', href: '/billing-software', icon: '₹' },
    { group: 'People', name: 'HRM + Attendance', href: '/hrm-attendance', icon: 'HR' },
  ];

  private observer?: IntersectionObserver;

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const nodes = this.host.nativeElement.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(node => node.classList.add('is-visible'));
      return;
    }
    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.observer?.unobserve(entry.target);
        }
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -45px' });
    nodes.forEach(node => this.observer?.observe(node));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  updateAgencyName(event: Event): void {
    this.agencyName.set((event.target as HTMLInputElement).value || 'Your Agency');
  }

  scrollToSection(event: Event, id: string): void {
    const target = this.document.getElementById(id);
    const view = this.document.defaultView;
    if (!target || !view) return;
    event.preventDefault();
    view.scrollTo({
      top: view.scrollY + target.getBoundingClientRect().top - 100,
      behavior: view.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }

  requestQuote(event: Event, plan: string): void {
    event.preventDefault();
    this.quoteRequested.emit({ event, plan: `AI Review MagicQR — ${plan}` });
  }
}
