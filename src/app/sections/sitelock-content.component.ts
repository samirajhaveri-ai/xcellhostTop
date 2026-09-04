import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

interface SiteLockPlan {
  name: string;
  price: string;
  annual: string;
  intro?: string;
  tone: 'basic' | 'pro' | 'business';
  features: readonly string[];
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
  private readonly topics = inject(CallbackTopicService);

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
    },
    {
      name: 'Pro',
      price: '1,093.34',
      annual: '13,120.10',
      intro: 'All Basic Features, Plus:',
      tone: 'pro',
      features: ['5GB Website Backup', 'Repair Existing Malware Infection', 'Block Malicious DDoS Traffic', 'CDN Acceleration'],
    },
    {
      name: 'Business',
      price: '1,530.84',
      annual: '18,370.10',
      intro: 'All Pro Features, Plus:',
      tone: 'business',
      features: ['10GB Website Backup', 'CMS Vulnerability Detection & Patching', 'Database Protection', 'Advanced CDN Acceleration'],
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

  configurePlan(plan: string, event: Event): void {
    event.preventDefault();
    this.topics.ask(`SiteLock ${plan} plan`);
    this.overlay.open('callback');
  }
}
