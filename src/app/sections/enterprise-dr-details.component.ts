import { Component, OnDestroy, computed, output, signal } from '@angular/core';

interface RecoveryStep {
  time: string;
  action: string;
}

interface RecoveryScenario {
  icon: string;
  name: string;
  steps: RecoveryStep[];
}

interface DrUseCase {
  name: string;
  description: string;
  benefits: string[];
}

@Component({
  selector: 'xh-enterprise-dr-details',
  standalone: true,
  templateUrl: './enterprise-dr-details.component.html',
  styleUrl: './enterprise-dr-details.component.css',
})
export class EnterpriseDrDetailsComponent implements OnDestroy {
  readonly quoteRequested = output<Event>();

  readonly revenueAtRisk = signal(200_000);
  readonly unavailableStaff = signal(100);
  readonly staffHourlyCost = signal(600);
  readonly incidentsPerYear = signal(2);
  readonly outageHours = signal(24);
  readonly protectedDataGb = signal(2_000);

  readonly costPerHour = computed(
    () => this.revenueAtRisk() + this.unavailableStaff() * this.staffHourlyCost(),
  );
  readonly yearlyCostWithoutDr = computed(
    () => this.costPerHour() * this.outageHours() * this.incidentsPerYear(),
  );
  readonly yearlyCostWithDr = computed(
    () => this.costPerHour() * (5 / 60) * this.incidentsPerYear(),
  );
  readonly monthlyReplicaStorage = computed(() => this.protectedDataGb() * 6.2);
  readonly yearlySavings = computed(() =>
    Math.max(0, this.yearlyCostWithoutDr() - this.yearlyCostWithDr()),
  );

  readonly scenarios: RecoveryScenario[] = [
    {
      icon: 'shield',
      name: 'Ransomware attack',
      steps: [
        { time: '0 min', action: 'Suspicious encryption detected; affected hosts isolated' },
        { time: '5 min', action: 'Last clean immutable snapshot identified' },
        { time: '15 min', action: 'Clean replicas booted in an isolated network' },
        { time: '30 min', action: 'Users switched to clean servers; forensics begin on the primary' },
      ],
    },
    {
      icon: 'power',
      name: 'Data-centre power or network outage',
      steps: [
        { time: '0 min', action: 'Primary site unreachable; NOC confirms outage' },
        { time: '3 min', action: 'Failover approved by your nominated contact' },
        { time: '10 min', action: 'DR servers boot in runbook order; IPs and DNS are re-mapped' },
        { time: '15 min', action: 'Applications live from the DR site' },
      ],
    },
    {
      icon: 'alert',
      name: 'Flood, fire or natural disaster',
      steps: [
        { time: '0 min', action: 'Primary site declared lost' },
        { time: '5 min', action: 'Full-site recovery plan triggered' },
        { time: '20 min', action: 'Database, application and web tiers online at the DR site' },
        { time: 'Days later', action: 'Primary rebuilt; planned failback with no data loss' },
      ],
    },
    {
      icon: 'users',
      name: 'Human error or bad deployment',
      steps: [
        { time: '0 min', action: 'Table dropped or configuration pushed by mistake' },
        { time: '2 min', action: 'Point-in-time copy selected from before the change' },
        { time: '10 min', action: 'Affected VM or files restored side-by-side' },
        { time: '15 min', action: 'Service verified and switched back' },
      ],
    },
    {
      icon: 'server',
      name: 'Hardware or storage failure',
      steps: [
        { time: '0 min', action: 'Disk array or host fails' },
        { time: '1 min', action: 'HA restarts VMs on healthy hosts' },
        { time: '5 min', action: 'If the pool is lost, DR failover starts' },
        { time: '15 min', action: 'Workloads running on the DR site' },
      ],
    },
    {
      icon: 'cloud',
      name: "Another cloud's region goes down",
      steps: [
        { time: '0 min', action: 'AWS or Azure region degraded' },
        { time: '5 min', action: 'Cross-cloud replicas in India activated' },
        { time: '20 min', action: 'Apps running on XcellHost; DNS updated' },
        { time: 'Later', action: 'Fail back when the hyperscaler recovers, or stay' },
      ],
    },
  ];

  readonly selectedScenarioIndex = signal(0);
  readonly selectedScenario = computed(() => this.scenarios[this.selectedScenarioIndex()]);
  readonly visibleSteps = signal(this.scenarios[0].steps.length);
  readonly selectedUseCaseIndex = signal(0);
  readonly useCases: DrUseCase[] = [
    {
      name: 'Ransomware recovery',
      description: 'Isolate compromised systems, spin up clean replicas and get back to work.',
      benefits: ['Immutable snapshots', 'Isolated clean-room recovery', 'Malware scan before switch-back'],
    },
    {
      name: 'Regulated industries',
      description: 'Meet BFSI, healthcare and government continuity requirements with full audit trails.',
      benefits: ['RBI / SEBI / IRDAI BCP evidence', 'Drill reports for auditors', 'Data stays in India'],
    },
    {
      name: 'Multi-site DR',
      description: 'Protect on-premise and cloud workloads across locations with one orchestration layer.',
      benefits: ['On-prem to cloud', 'Cloud to cloud', 'Central runbooks'],
    },
    {
      name: 'Branch & factory protection',
      description: 'Extend DR to remote offices and plants with central visibility.',
      benefits: ['Branch server replication', 'Central recovery console', 'Low-bandwidth friendly'],
    },
    {
      name: 'Critical app failover',
      description: 'Keep ERP, Tally, SAP B1, core banking and customer apps running.',
      benefits: ['Application-consistent copies', 'Boot-order runbooks', 'DNS and IP re-mapping'],
    },
    {
      name: 'Test & dev from replicas',
      description: 'Use non-production copies of replicas to test upgrades and failovers without touching production.',
      benefits: ['Isolated test bubbles', 'Scheduled DR drills', 'Zero impact on production'],
    },
  ];
  private animationTimers: ReturnType<typeof setTimeout>[] = [];

  setRange(target: 'revenue' | 'staff' | 'staffCost' | 'incidents' | 'hours' | 'data', event: Event): void {
    const value = (event.target as HTMLInputElement).valueAsNumber;
    const targets = {
      revenue: this.revenueAtRisk,
      staff: this.unavailableStaff,
      staffCost: this.staffHourlyCost,
      incidents: this.incidentsPerYear,
      hours: this.outageHours,
      data: this.protectedDataGb,
    };
    targets[target].set(value);
  }

  chooseScenario(index: number): void {
    this.clearAnimationTimers();
    this.selectedScenarioIndex.set(index);
    this.visibleSteps.set(0);

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.visibleSteps.set(this.scenarios[index].steps.length);
      return;
    }

    this.scenarios[index].steps.forEach((_, stepIndex) => {
      this.animationTimers.push(
        setTimeout(() => this.visibleSteps.set(stepIndex + 1), 90 + stepIndex * 150),
      );
    });
  }

  formatInr(value: number): string {
    if (value >= 10_000_000) return `₹${(value / 10_000_000).toFixed(2)} Cr`;
    if (value >= 100_000) return `₹${(value / 100_000).toFixed(1)} L`;
    return `₹${Math.round(value).toLocaleString('en-IN')}`;
  }

  formatInteger(value: number): string {
    return Math.round(value).toLocaleString('en-IN');
  }

  formatData(value: number): string {
    return value >= 1_000 ? `${(value / 1_000).toFixed(value % 1_000 === 0 ? 0 : 1)} TB` : `${value} GB`;
  }

  ngOnDestroy(): void {
    this.clearAnimationTimers();
  }

  private clearAnimationTimers(): void {
    this.animationTimers.forEach(clearTimeout);
    this.animationTimers = [];
  }
}
