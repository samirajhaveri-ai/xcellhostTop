import { ChangeDetectionStrategy, Component, OnDestroy, computed, output, signal } from '@angular/core';

interface N8nPlan {
  name: string;
  code: string;
  cpu: string;
  vcpu: number;
  ram: number;
  storage: number;
  bandwidth: string;
  setup: string;
  goodFor: string;
  monthly: number;
  tone: string;
}

interface N8nTerm {
  label: string;
  saving: string;
  discount: number;
}

interface WorkflowTemplate {
  title: string;
  nodes: { icon: string; label: string }[];
  result: string;
}

interface TeamExample {
  name: string;
  image: string;
  headline: string;
  points: string[];
  steps: string[];
}

export interface N8nPlanSelection {
  name: string;
  price: number;
  term: string;
  os: string;
  management: string;
}

@Component({
  selector: 'xh-n8n-vps-content',
  standalone: true,
  templateUrl: './n8n-vps-content.component.html',
  styleUrl: './n8n-vps-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class N8nVpsContentComponent implements OnDestroy {
  readonly planSelected = output<N8nPlanSelection>();
  readonly consultationRequested = output<void>();
  readonly os = signal<'Linux' | 'Windows'>('Linux');
  readonly management = signal<'Self-managed' | 'Managed n8n'>('Self-managed');
  readonly term = signal(0);
  readonly workflowIndex = signal(0);
  readonly workflowStep = signal(-1);
  readonly workflowMessage = signal('Ready — press Execute');
  readonly teamIndex = signal(0);
  readonly workflowBusy = signal(false);
  readonly activeWorkflows = signal(15);
  readonly executionSlider = signal(40);
  readonly usesAi = signal(false);
  readonly parallelRuns = signal(false);
  private workflowTimers: ReturnType<typeof setTimeout>[] = [];

  readonly workflows: WorkflowTemplate[] = [
    { title: 'Lead → CRM → WhatsApp', nodes: [{ icon: 'link', label: 'Webhook' }, { icon: 'smart_toy', label: 'AI: score lead' }, { icon: 'balance', label: 'IF score > 70' }, { icon: 'groups', label: 'Zoho CRM' }, { icon: 'chat_bubble', label: 'WhatsApp' }], result: 'Lead created in CRM and welcomed on WhatsApp in 3 s' },
    { title: 'Overdue invoice reminders', nodes: [{ icon: 'schedule', label: 'Every day 9 AM' }, { icon: 'currency_rupee', label: 'Fetch unpaid invoices' }, { icon: 'balance', label: 'IF > 15 days' }, { icon: 'description', label: 'Generate reminder' }, { icon: 'chat_bubble', label: 'Email + WhatsApp' }], result: '12 reminders sent · ₹4.8 lakh chased' },
    { title: 'AI support triage', nodes: [{ icon: 'chat_bubble', label: 'New ticket' }, { icon: 'smart_toy', label: 'AI: classify & draft' }, { icon: 'balance', label: 'Switch: priority' }, { icon: 'support_agent', label: 'Assign agent' }, { icon: 'warning', label: 'Alert if P1' }], result: 'Ticket classified P2 · reply drafted · assigned' },
    { title: 'Website uptime watch', nodes: [{ icon: 'schedule', label: 'Every 1 min' }, { icon: 'language', label: 'HTTP check' }, { icon: 'balance', label: 'IF status ≠ 200' }, { icon: 'description', label: 'Open ticket' }, { icon: 'call', label: 'Call on-call' }], result: 'All 6 sites healthy · 214 ms average' },
  ];

  readonly teams: TeamExample[] = [
    { name: 'Developers', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1000&q=72', headline: "Build the integrations off-the-shelf tools can't.", points: ['Sync private APIs and internal databases', 'Run custom JavaScript or Python in Code nodes', 'Trigger and report on CI/CD pipelines', 'Expose workflows as internal APIs via webhooks'], steps: ['Git push webhook', 'Run tests', 'IF passed', 'Deploy + Slack'] },
    { name: 'SMBs', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=72', headline: 'Take the repetitive admin out of sales and operations.', points: ['Capture website and WhatsApp leads into your CRM', 'Sync sales, stock and invoices between systems', 'Send personalised onboarding sequences', 'Chase overdue payments automatically'], steps: ['Website form', 'Enrich lead', 'Create in Zoho CRM', 'WhatsApp welcome'] },
    { name: 'Agencies & marketers', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=72', headline: 'Run more clients without more headcount.', points: ['Plan and publish content across channels', 'Build lead-nurturing sequences', 'Combine ad and analytics data into client reports', 'Alert account managers on campaign changes'], steps: ['Schedule', 'Pull GA4 + Ads', 'AI summary', 'Email client report'] },
    { name: 'Tech & operations teams', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=72', headline: "Automate the tickets that shouldn't need a human.", points: ['Monitor website and system health', 'Create and remove user accounts on joiner/leaver', 'Route and triage support tickets', 'Escalate incidents to the on-call engineer'], steps: ['Uptime check', 'IF down', 'Create ticket', 'Call on-call'] },
  ];

  readonly dailyExecutions = computed(() => {
    const position = this.executionSlider();
    return position === 0 ? 0 : Math.round(Math.pow(10, 1 + position / 25) / 10) * 10;
  });

  readonly recommendedPlanIndex = computed(() => {
    const workflows = this.activeWorkflows();
    const executions = this.dailyExecutions();
    const ai = this.usesAi();
    const parallel = this.parallelRuns();
    let index = 0;
    if (executions > 1000 || workflows > 20 || ai) index = 1;
    if (executions > 5000 || (ai && executions > 2000) || workflows > 80 || parallel) index = 2;
    if (executions > 25000 || (parallel && (executions > 10000 || ai)) || workflows > 180) index = 3;
    return index;
  });

  readonly recommendedPlan = computed(() => this.plans[this.recommendedPlanIndex()]);

  readonly recommendationReasons = computed(() => {
    const plan = this.recommendedPlan();
    const reasons = [`${this.activeWorkflows()} active workflows and ~${this.dailyExecutions().toLocaleString('en-IN')} executions a day`];
    if (this.usesAi()) reasons.push('Extra RAM headroom for AI agents and large payloads');
    reasons.push(plan.tone === 'queue' || plan.tone === 'scale' ? 'Queue mode spreads executions across workers' : 'Single n8n instance is plenty at this volume');
    if (this.recommendedPlanIndex() < this.plans.length - 1) reasons.push(`Resize to ${this.plans[this.recommendedPlanIndex() + 1].name} later without rebuilding`);
    return reasons;
  });

  readonly terms: N8nTerm[] = [
    { label: 'Monthly', saving: 'No Savings', discount: 0 },
    { label: '3 Months', saving: 'Save 5%', discount: 0.05 },
    { label: '6 Months', saving: 'Save 7.5%', discount: 0.075 },
    { label: '1 Year', saving: 'Save 12%', discount: 0.12 },
  ];

  readonly plans: N8nPlan[] = [
    { name: 'Starter', code: 'N8N-S', cpu: 'Shared', vcpu: 2, ram: 4, storage: 80, bandwidth: '3 TB / month', setup: 'n8n + SSL pre-installed', goodFor: 'Up to ~20 active workflows', monthly: 1299, tone: 'starter' },
    { name: 'Pro', code: 'N8N-P', cpu: 'Shared', vcpu: 4, ram: 8, storage: 160, bandwidth: '4 TB / month', setup: 'n8n + SSL pre-installed', goodFor: 'Busy teams', monthly: 2499, tone: 'pro' },
    { name: 'Queue', code: 'N8N-Q', cpu: 'Dedicated', vcpu: 4, ram: 16, storage: 200, bandwidth: '4 TB / month', setup: 'n8n + workers + Redis + Postgres', goodFor: 'Parallel runs & production volume', monthly: 3333, tone: 'queue' },
    { name: 'Scale', code: 'N8N-X', cpu: 'Dedicated', vcpu: 8, ram: 32, storage: 400, bandwidth: '5 TB / month', setup: 'n8n + workers + Redis + Postgres', goodFor: 'High-volume webhooks', monthly: 6398, tone: 'scale' },
  ];

  fullPrice(plan: N8nPlan): number {
    const windows = this.os() === 'Windows' ? 800 * Math.ceil(plan.vcpu / 2) : 0;
    const managed = this.management() === 'Managed n8n' ? 1499 : 0;
    return plan.monthly + windows + managed;
  }

  price(plan: N8nPlan): number {
    return Math.round(this.fullPrice(plan) * (1 - this.terms[this.term()].discount));
  }

  inr(amount: number): string {
    return `₹${amount.toLocaleString('en-IN')}`;
  }

  selectPlan(plan: N8nPlan): void {
    this.planSelected.emit({
      name: `${plan.name} (${plan.code})`,
      price: this.price(plan),
      term: this.terms[this.term()].label,
      os: this.os(),
      management: this.management(),
    });
  }

  selectWorkflow(index: number): void {
    this.clearWorkflowTimers();
    this.workflowIndex.set(index);
    this.workflowStep.set(-1);
    this.workflowMessage.set('Ready — press Execute');
    this.workflowBusy.set(false);
    this.runWorkflow();
  }

  runWorkflow(): void {
    this.clearWorkflowTimers();
    this.workflowBusy.set(true);
    this.workflowMessage.set('Executing…');
    const template = this.workflows[this.workflowIndex()];
    const reducedMotion = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = reducedMotion ? 0 : 520;
    template.nodes.forEach((_, index) => {
      this.workflowTimers.push(setTimeout(() => this.workflowStep.set(index), delay * index));
    });
    this.workflowTimers.push(setTimeout(() => {
      this.workflowStep.set(template.nodes.length);
      this.workflowMessage.set(`✓ ${template.result}`);
      this.workflowBusy.set(false);
    }, delay * template.nodes.length));
  }

  ngOnDestroy(): void {
    this.clearWorkflowTimers();
  }

  private clearWorkflowTimers(): void {
    this.workflowTimers.forEach(clearTimeout);
    this.workflowTimers = [];
  }
}
