import { ChangeDetectionStrategy, Component, computed, output, signal } from '@angular/core';

interface AdaPlan {
  code: string;
  name: string;
  audience: string;
  gpus: number;
  vcpu: number;
  memory: number;
  storage: number;
  monthly: number;
  hourly: number;
  tone: 'blue' | 'purple' | 'green' | 'orange';
}

interface BillingTerm {
  label: string;
  badge: string;
  discount: number;
}

@Component({
  selector: 'xh-rtx-6000-ada-pricing',
  standalone: true,
  templateUrl: './rtx-6000-ada-pricing.component.html',
  styleUrls: ['./rtx-8000-pricing.component.css', './rtx-pro-6000-pricing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Rtx6000AdaPricingComponent {
  readonly quoteRequested = output<string>();

  readonly terms: BillingTerm[] = [
    { label: 'Monthly', badge: 'No Savings', discount: 0 },
    { label: '3 Months', badge: 'Save 5%', discount: 0.05 },
    { label: '6 Months', badge: 'Save 7.5%', discount: 0.075 },
    { label: '1 Year', badge: 'Save 10%', discount: 0.1 },
  ];

  readonly plans: AdaPlan[] = [
    { code: 'XG.ADA6K.1-16', name: 'GPU Cloud Lite', audience: 'For single users & PoC · 1 GPU', gpus: 1, vcpu: 16, memory: 64, storage: 500, monthly: 59900, hourly: 103, tone: 'blue' },
    { code: 'XG.ADA6K.1-24', name: 'GPU Cloud Standard', audience: 'For single users & PoC · 1 GPU', gpus: 1, vcpu: 24, memory: 128, storage: 1000, monthly: 77500, hourly: 133, tone: 'purple' },
    { code: 'XG.ADA6K.2-32', name: 'GPU Cloud Duo', audience: 'For teams & multi-GPU · 2 GPUs', gpus: 2, vcpu: 32, memory: 192, storage: 2000, monthly: 136500, hourly: 234, tone: 'green' },
    { code: 'XG.ADA6K.4-64', name: 'GPU Cloud Quad', audience: 'For training & render farms · 4 GPUs', gpus: 4, vcpu: 64, memory: 384, storage: 4000, monthly: 265000, hourly: 454, tone: 'orange' },
  ];

  readonly selectedTerm = signal(this.terms[0]);
  readonly selectedPlanIndex = signal(0);
  readonly hoursPerDay = signal(8);
  readonly daysPerMonth = signal(22);

  readonly selectedPlan = computed(() => this.plans[this.selectedPlanIndex()]);
  readonly payAsYouGo = computed(() => this.selectedPlan().hourly * this.hoursPerDay() * this.daysPerMonth());
  readonly monthlyPlan = computed(() => this.selectedPlan().monthly);
  readonly yearlyPlan = computed(() => Math.round(this.selectedPlan().monthly * 0.9));
  readonly recommendation = computed(() => {
    const hourly = this.payAsYouGo();
    const monthly = this.monthlyPlan();
    if (hourly < monthly) return `Go hourly — you'd save ${this.inr(monthly - hourly)} a month versus the monthly plan.`;
    return `Take a 1-year plan — you'd save ${this.inr(hourly - this.yearlyPlan())} a month versus hourly billing.`;
  });

  inr(value: number): string {
    return `₹${Math.round(value).toLocaleString('en-IN')}`;
  }

  discountedMonthly(plan: AdaPlan): number {
    return plan.monthly * (1 - this.selectedTerm().discount);
  }

  billingLabel(): string {
    return this.selectedTerm().discount ? `${this.selectedTerm().label} term, billed monthly` : 'Monthly billing';
  }

  selectPlan(event: Event): void {
    this.selectedPlanIndex.set(Number((event.target as HTMLSelectElement).value));
  }

  changeHours(event: Event): void {
    this.hoursPerDay.set(Number((event.target as HTMLInputElement).value));
  }

  changeDays(event: Event): void {
    this.daysPerMonth.set(Number((event.target as HTMLInputElement).value));
  }

  requestPlan(plan: AdaPlan): void {
    this.quoteRequested.emit(`${plan.name} (${plan.code}), ${this.selectedTerm().label} billing, ${this.inr(this.discountedMonthly(plan))}/month + GST`);
  }
}
