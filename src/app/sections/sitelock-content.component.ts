import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';

import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';

interface SiteLockTerm {
  years: number;
  pricePerYear: number;
}

interface SiteLockPlan {
  name: string;
  price: string;
  annual: string;
  intro?: string;
  tone: 'basic' | 'pro' | 'business';
  features: readonly string[];
  terms: readonly SiteLockTerm[];
}

@Component({
  selector: 'xh-sitelock-content',
  standalone: true,
  templateUrl: './sitelock-content.component.html',
  styleUrl: './sitelock-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteLockContentComponent {
  private readonly overlay = inject(OverlayService);
  private readonly cart = inject(CartService);

  readonly activePlan = signal<SiteLockPlan | null>(null);
  readonly selectedTermIndex = signal(2);
  readonly websiteCount = signal(1);
  readonly selectedTerm = computed(() => {
    const plan = this.activePlan();
    return plan?.terms[this.selectedTermIndex()] ?? null;
  });
  readonly configuredTotal = computed(() => {
    const term = this.selectedTerm();
    return term ? term.pricePerYear * term.years * this.websiteCount() : 0;
  });

  readonly protectionLevels = [
    {
      name: 'Find',
      title: 'Detect threats',
      description: 'Daily scanning finds malware, vulnerabilities and blacklisting before they hurt your business.',
      icon: '⌕',
      tone: 'find',
      features: ['Daily malware & file scan', 'Vulnerability detection', 'Blacklist monitoring'],
    },
    {
      name: 'Fix',
      title: 'Remove automatically',
      description: 'SMART automatic malware removal cleans infected files without you lifting a finger.',
      icon: '✓',
      tone: 'fix',
      features: ['Automatic malware removal', 'SMART file-level clean-up', 'Blacklist removal help'],
    },
    {
      name: 'Prevent',
      title: 'Block attacks',
      description: 'The web application firewall and CDN stop bad traffic and speed up the good—before it reaches your site.',
      icon: '▣',
      tone: 'prevent',
      features: ['Web application firewall', 'DDoS protection + CDN', 'SiteLock Trust Seal'],
    },
  ] as const;

  readonly plans: readonly SiteLockPlan[] = [
    {
      name: 'Basic',
      price: '655.84',
      annual: '7,870.10',
      tone: 'basic',
      features: ['2GB Website Backup', 'Malware Detection', 'Malware Removal'],
      terms: [
        { years: 1, pricePerYear: 7870.10 },
        { years: 2, pricePerYear: 7083.09 },
        { years: 3, pricePerYear: 6296.08 },
      ],
    },
    {
      name: 'Pro',
      price: '1,093.34',
      annual: '13,120.10',
      intro: 'All Basic Features, Plus:',
      tone: 'pro',
      features: ['5GB Website Backup', 'Repair Existing Malware Infection', 'Block Malicious DDoS Traffic', 'CDN Acceleration'],
      terms: [
        { years: 1, pricePerYear: 13120.10 },
        { years: 2, pricePerYear: 11808.09 },
        { years: 3, pricePerYear: 10496.08 },
      ],
    },
    {
      name: 'Business',
      price: '1,530.84',
      annual: '18,370.10',
      intro: 'All Pro Features, Plus:',
      tone: 'business',
      features: ['10GB Website Backup', 'CMS Vulnerability Detection & Patching', 'Database Protection', 'Advanced CDN Acceleration'],
      terms: [
        { years: 1, pricePerYear: 18370.10 },
        { years: 2, pricePerYear: 16533.09 },
        { years: 3, pricePerYear: 14696.08 },
      ],
    },
  ];

  readonly comparison = [
    ['Website Backup', '2GB', '5GB', '10GB'],
    ['Malware Detection', '✓', '✓', '✓'],
    ['Malware Removal', '✓', '✓', '✓'],
    ['Repair Existing Malware Infection', '—', '✓', '✓'],
    ['Block Malicious DDoS Traffic', '—', '✓', '✓'],
    ['CDN Acceleration', '—', 'Standard', 'Advanced'],
    ['CMS Vulnerability Detection & Patching', '—', '—', '✓'],
    ['Database Protection', '—', '—', '✓'],
  ] as const;

  readonly addOns = [
    ['▦', 'Additional websites', 'Protect multiple sites under one account—add them right in the configurator.'],
    ['▣', 'Advanced WAF + CDN', 'Upgrade to the full web application firewall with global CDN acceleration.'],
    ['◇', 'SiteLock Trust Seal', 'Display the verified SiteLock seal to boost visitor confidence and conversions.'],
    ['↗', 'Priority response', 'Priority malware clean-up and faster SLAs, managed by our 24×7 SOC.'],
  ] as const;

  readonly features = [
    ['⌕', 'Daily malware scanning', 'Automated daily scans for malware, spam and suspicious file changes.', 'blue'],
    ['✓', 'Automatic removal', 'SMART technology finds and removes malware from your files automatically.', 'orange'],
    ['▣', 'Web application firewall', 'Cloud WAF blocks SQL injection, XSS, bad bots and OWASP Top 10 attacks.', 'green'],
    ['↻', 'CDN acceleration', 'Global content delivery network speeds up your site while it defends it.', 'blue'],
    ['●', 'Blacklist monitoring', 'Alerts if search engines or security vendors blacklist your domain—and helps clear it.', 'orange'],
    ['◇', 'SiteLock Trust Seal', 'The verified seal reassures visitors and can lift conversions at checkout.', 'green'],
  ] as const;

  readonly useCases = [
    ['🛒', 'E-commerce', 'Protect checkout & customer data'],
    ['🧩', 'WordPress & CMS', 'Guard plugins from known exploits'],
    ['🏥', 'Healthcare', 'Keep patient portals malware-free'],
    ['☁', 'SaaS & Web Apps', 'WAF against OWASP Top 10'],
    ['🏫', 'Government & Education', 'Protect public-facing sites'],
    ['📱', 'Startups & SMBs', 'Affordable set-and-forget security'],
    ['📰', 'Blogs & Media', 'Stop defacement & spam injection'],
    ['📦', 'Agencies', 'Protect many client sites at once'],
  ] as const;

  constructor() {
    effect(() => {
      const configuratorIsLayered = this.overlay.stack().includes('sitelockConfigurator');
      if (!configuratorIsLayered && this.activePlan()) this.activePlan.set(null);
    });
  }

  configurePlan(plan: SiteLockPlan, event: Event): void {
    event.preventDefault();
    this.selectedTermIndex.set(2);
    this.websiteCount.set(1);
    this.activePlan.set(plan);
    this.overlay.open('sitelockConfigurator');
  }

  closeConfigurator(): void {
    this.activePlan.set(null);
    this.overlay.close('sitelockConfigurator');
  }

  closeFromBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.closeConfigurator();
  }

  selectTerm(index: number): void {
    this.selectedTermIndex.set(index);
  }

  changeWebsiteCount(amount: number): void {
    this.websiteCount.update((count) => Math.max(1, Math.min(99, count + amount)));
  }

  updateWebsiteCount(event: Event): void {
    const input = event.target as HTMLInputElement;
    const count = Number.parseInt(input.value, 10);
    this.websiteCount.set(Number.isFinite(count) ? Math.max(1, Math.min(99, count)) : 1);
    input.value = String(this.websiteCount());
  }

  listPrice(plan: SiteLockPlan, term: SiteLockTerm): number {
    return plan.terms[0].pricePerYear * term.years;
  }

  savings(plan: SiteLockPlan, term: SiteLockTerm): number {
    return this.listPrice(plan, term) - term.pricePerYear * term.years;
  }

  discount(plan: SiteLockPlan, term: SiteLockTerm): number {
    const list = this.listPrice(plan, term);
    return list ? Math.round((this.savings(plan, term) / list) * 100) : 0;
  }

  formatInr(value: number): string {
    return Math.round(value).toLocaleString('en-IN');
  }

  addConfiguredToCart(): void {
    const plan = this.activePlan();
    const term = this.selectedTerm();
    if (!plan || !term) return;

    const yearsLabel = `${term.years} Year${term.years > 1 ? 's' : ''}`;
    const lineName = `SiteLock ${plan.name} — ${yearsLabel}`;
    const previousQuantity = this.cart.lines().find((line) => line.name === lineName)?.qty ?? 0;
    const termTotal = term.pricePerYear * term.years;

    this.cart.add(
      lineName,
      `₹${this.formatInr(termTotal)} / website for ${yearsLabel.toLowerCase()} + GST`,
    );
    this.cart.setQty(lineName, previousQuantity + this.websiteCount());
    this.closeConfigurator();
    this.cart.open();
  }
}
