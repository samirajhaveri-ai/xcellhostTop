import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

type Risk = 'owned' | 'external' | 'third';

interface SecuritySolution {
  name: string;
  description: string;
  risk: Risk;
  riskLabel: string;
  tags: string[];
  price: string;
  slug: string;
  icon: string;
}

@Component({
  selector: 'xh-autonomous-threat-management-content',
  standalone: true,
  templateUrl: './autonomous-threat-management-content.component.html',
  styleUrl: './autonomous-threat-management-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutonomousThreatManagementContentComponent {
  readonly activeRisk = signal<'all' | Risk>('all');

  readonly solutions: SecuritySolution[] = [
    { name: 'Attack Surface Management', description: 'Discover, monitor and secure your entire external attack surface with AI-powered continuous discovery.', risk: 'owned', riskLabel: 'Owned Risk', tags: ['Asset discovery', 'Vulnerability monitoring'], price: '₹49,999', slug: 'attack-surface-management', icon: '⌕' },
    { name: 'DMARC+', description: 'Complete email authentication with DMARC, SPF and DKIM management to prevent spoofing.', risk: 'owned', riskLabel: 'Owned Risk', tags: ['Email authentication', 'Domain protection'], price: '₹14,999', slug: 'dmarc-plus', icon: '✉' },
    { name: 'Human Risk Management', description: 'Realistic AI phishing simulations and security awareness training to build a human firewall.', risk: 'owned', riskLabel: 'Owned Risk', tags: ['Phishing simulation', 'Security training'], price: '₹24,999', slug: 'human-risk-management', icon: '♙' },
    { name: 'Autonomous SOC', description: 'AI-powered autonomous security operations centre with zero-playbook investigation and 24×7 coverage.', risk: 'owned', riskLabel: 'Owned Risk', tags: ['Zero-playbook investigation', '24×7 coverage'], price: '₹1,99,999', slug: 'autonomous-soc', icon: '▦' },
    { name: 'Brand Intelligence', description: 'AI-powered brand risk intelligence across 26+ channels. Stop phishing, fake accounts, deepfakes and domain abuse.', risk: 'external', riskLabel: 'External Risk', tags: ['Deepfake detection', 'Phishing prevention'], price: '₹59,999', slug: 'brand-intelligence', icon: '◉' },
    { name: 'Takedown', description: 'AI-powered takedown of phishing sites, fraudulent domains, fake apps and brand impersonation.', risk: 'external', riskLabel: 'External Risk', tags: ['Domain takedown', 'Phishing removal'], price: '₹39,999', slug: 'takedown', icon: '⌁' },
    { name: 'Dark Web Monitoring', description: 'Monitor dark web forums, marketplaces and channels for leaked credentials, stolen data and planned attacks.', risk: 'external', riskLabel: 'External Risk', tags: ['Credential monitoring', 'Data-leak detection'], price: '₹29,999', slug: 'dark-web-monitoring', icon: '⌁' },
    { name: 'Business Email Protection', description: 'Advanced protection against phishing, BEC, account takeover and email-based threats using AI.', risk: 'external', riskLabel: 'External Risk', tags: ['Phishing detection', 'BEC prevention'], price: '₹34,999', slug: 'business-email-protection', icon: '✉' },
    { name: 'Third Party Risk Monitoring', description: 'Continuously monitor and assess security risks from third-party vendors and partners with automated risk scoring.', risk: 'third', riskLabel: '3rd Party', tags: ['Supply-chain security', 'Risk scoring'], price: '₹79,999', slug: 'third-party-risk-monitoring', icon: '∞' },
    { name: 'Vendor Risk Monitoring', description: 'Continuously track vendor security posture and compliance with automated risk scoring and breach alerts.', risk: 'third', riskLabel: '3rd Party', tags: ['Vendor assessment', 'Compliance tracking'], price: '₹49,999', slug: 'vendor-risk-monitoring', icon: '▤' },
    { name: 'Fraud Protection', description: 'Detect and prevent fraud with AI-powered monitoring across payment systems, accounts and transactions.', risk: 'third', riskLabel: '3rd Party', tags: ['Transaction monitoring', 'Account protection'], price: '₹99,999', slug: 'fraud-protection', icon: '◇' },
  ];

  readonly filteredSolutions = computed(() => {
    const risk = this.activeRisk();
    return risk === 'all' ? this.solutions : this.solutions.filter((solution) => solution.risk === risk);
  });

  readonly riskPillars = [
    { kicker: 'Protect what you own', title: 'Infrastructure risk', body: 'Your domains, servers, cloud, email and endpoints, watched and defended continuously.', items: ['Attack Surface Management', 'DMARC+', 'Autonomous SOC'], icon: '▦' },
    { kicker: 'Monitor external threats', title: 'Brand risk', body: 'Impersonation, leaks and fraud that use your name, found and removed.', items: ['Brand Intelligence', 'Dark Web Monitoring', 'Takedown'], icon: '◉' },
    { kicker: 'Secure your relationships', title: 'Third-party risk', body: 'The vendors and partners inside your business, rated and governed.', items: ['Third Party Risk Monitoring', 'Vendor Risk Monitoring'], icon: '∞' },
    { kicker: 'Strengthen your people', title: 'Human risk', body: 'Simulations and training that turn staff into your strongest control.', items: ['Human Risk Management'], icon: '♙' },
  ];

  readonly steps = [
    { number: '01', title: 'Discover', body: 'Agents map your assets, brands, vendors and people: the full surface an attacker sees.', icon: '⌕' },
    { number: '02', title: 'Analyse', body: 'Every signal is investigated and scored on real risk, not just flagged.', icon: '▦' },
    { number: '03', title: 'Act', body: 'Fix guidance, containment, takedowns and training go out automatically within your guardrails.', icon: 'ϟ' },
    { number: '04', title: 'Report', body: 'Leadership, auditors and regulators get live dashboards and dated evidence.', icon: '↗' },
  ];

  readonly outcomes = [
    ['Security coverage', 'Point tools with gaps between them', 'One platform across infrastructure, brand, vendors and people'],
    ['Alert handling', 'Manual, business hours', 'Autonomous agents 24×7, analysts on call'],
    ['Time to neutralise a threat', 'Days to weeks', 'Minutes to hours'],
    ['Evidence for audits and boards', 'Assembled by hand', 'Live dashboards and exports'],
    ['Cost model', 'Six vendors, six invoices', 'One annual plan per solution, one GST invoice'],
  ];

  readonly partnerReasons = [
    ['27 years of trust', 'Serving Indian businesses since 1999 — ISO 27001 and ISO 20000-1 certified, Microsoft Gold Partner.', '★'],
    ['24×7 SOC in Mumbai', 'Real analysts validate critical findings, pick up the phone and stay on until the issue is closed.', '◉'],
    ['Transparent INR pricing', 'Annual plans, GST invoice, no hidden per-scan or per-alert charges.', '₹'],
    ['We fix, not just find', 'Cloud, security and managed services under one roof means faster closure on your infrastructure.', '∞'],
  ];

  setRisk(risk: 'all' | Risk): void {
    this.activeRisk.set(risk);
  }
}
