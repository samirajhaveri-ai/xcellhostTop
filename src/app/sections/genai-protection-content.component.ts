import { QuantityInputDirective } from '../core/quantity-input.directive';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';

import { OverlayService } from '../core/overlay.service';

type GenaiPlan = 'enforce';
const GENAI_PLANS: Record<GenaiPlan, { name: string; price: number; max: number }> = {
  enforce: { name: 'Enforce', price: 599, max: 100 },
};

interface ConsoleView {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: readonly string[];
  metric: string;
  metricLabel: string;
}

@Component({
  selector: 'xh-genai-protection-content',
  standalone: true,
  imports: [QuantityInputDirective],
  templateUrl: './genai-protection-content.component.html',
  styleUrl: './genai-protection-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenaiProtectionContentComponent {
  private readonly overlay = inject(OverlayService);
  readonly quantities = signal<Record<GenaiPlan, number>>({ enforce: 1 });

  quantity(plan: GenaiPlan): number {
    return this.quantities()[plan];
  }

  maxQuantity(plan: GenaiPlan): number {
    return GENAI_PLANS[plan].max;
  }

  changeQuantity(plan: GenaiPlan, delta: number): void {
    this.quantities.update(values => ({
      ...values,
      [plan]: Math.max(1, Math.min(this.maxQuantity(plan), values[plan] + delta)),
    }));
  }

  total(plan: GenaiPlan): string {
    return new Intl.NumberFormat('en-IN').format(GENAI_PLANS[plan].price * this.quantity(plan));
  }

  readonly heroOnly = input(false);
  readonly activeConsoleView = signal('reports');

  readonly consoleViews: readonly ConsoleView[] = [
    {
      id: 'overview',
      label: 'Overview',
      eyebrow: 'GENAI · Overview',
      title: 'See GenAI risk at a glance',
      description: 'A single view of discovered AI applications, active users, policy events and risk across your organisation.',
      bullets: ['Live usage summary', 'Risk by application', 'Policy status across users'],
      metric: '60+',
      metricLabel: 'GenAI tools visible',
    },
    {
      id: 'discover',
      label: 'Discover',
      eyebrow: 'GENAI · Discover',
      title: 'Bring Shadow AI into the open',
      description: 'See the browser-based AI services people actually use and identify unsanctioned tools before risk spreads.',
      bullets: ['Application discovery', 'User and device context', 'Risk trends over time'],
      metric: '100%',
      metricLabel: 'browser visibility',
    },
    {
      id: 'data',
      label: 'Data Protection',
      eyebrow: 'GENAI · Data protection',
      title: 'Stop sensitive data before it leaves',
      description: 'Inspect prompts and prevent PII, PHI, credentials and confidential information from reaching public AI tools.',
      bullets: ['Sensitive-content inspection', 'Policy-based blocking', 'Actionable event evidence'],
      metric: 'PII · PHI',
      metricLabel: 'protected in prompts',
    },
    {
      id: 'prompts',
      label: 'Prompt Protection',
      eyebrow: 'GENAI · Prompt protection',
      title: 'Detect manipulation and abuse',
      description: 'Identify prompt injection and abusive techniques designed to manipulate AI behaviour or introduce harmful content.',
      bullets: ['Prompt-injection detection', 'Abusive-prompt blocking', 'Consistent policy enforcement'],
      metric: '24×7',
      metricLabel: 'policy enforcement',
    },
    {
      id: 'reports',
      label: 'Reports',
      eyebrow: 'GENAI · Reports',
      title: 'Prove it, don’t just claim it',
      description: 'Every event—usage, risky domains, blocked data and prompts—is logged and turned into clear reports for clients, auditors and leadership.',
      bullets: ['Event log with category & risk', 'Usage & risk reports', 'Evidence for audits', 'Great for MSP client reviews'],
      metric: '2,455',
      metricLabel: 'events blocked this month',
    },
  ];

  selectConsoleView(id: string): void {
    this.activeConsoleView.set(id);
  }

  currentConsoleView(): ConsoleView {
    return this.consoleViews.find((view) => view.id === this.activeConsoleView()) ?? this.consoleViews[0];
  }

  configurePlan(plan?: GenaiPlan): void {
    if (plan) {
      const count = this.quantity(plan);
      window.location.assign(`/acronis-genai-checkout?quantity=${count}`);
      return;
    }
    this.overlay.open('callback');
  }
}
