import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'xh-nvidia-a100-assurance',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nvidia-a100-assurance.component.html',
  styleUrl: './nvidia-a100-assurance.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NvidiaA100AssuranceComponent {
  readonly activePreview = signal<'intro' | 'use-cases'>('intro');
  readonly controls = [
    { name: 'Data residency', value: 'Indian data centre hosting' },
    { name: 'Network perimeter', value: 'Virtual firewall and anti-DDoS options' },
    { name: 'Workload isolation', value: 'MIG instances for compatible workloads' },
    { name: 'Recovery', value: 'Snapshot and backup options' },
    { name: 'Operations', value: '24×7 NOC and SOC monitoring' },
    { name: 'Service processes', value: 'ISO 27001 and ISO 20000-1 certified' },
  ];
  readonly reasons = [
    { title: 'Since 1999', body: 'Decades running production cloud infrastructure for Indian businesses.' },
    { title: 'Tier-4 Indian DCs', body: 'Run A100 workloads in India, with local infrastructure and support.' },
    { title: 'Migration help', body: 'Plan the move of your models, data and applications with GPU specialists.' },
    { title: '99.95% uptime SLA', body: 'A service commitment backed by around-the-clock operations monitoring.' },
    { title: '24×7 real engineers', body: 'Reach people who can help with GPU setup, availability and workload issues.' },
    { title: 'One partner', body: 'GPU cloud, security options and support under one roof, billed in INR.' },
  ];
  readonly referenceTypes = [
    { initials: 'AI', title: 'AI training teams', body: 'Ask how teams size A100 memory and scale model training in an Indian cloud environment.' },
    { initials: 'ML', title: 'ML platform teams', body: 'Discuss inference deployment, GPU capacity planning and day-to-day operations.' },
    { initials: 'IT', title: 'IT operations teams', body: 'Learn how teams approach managed GPU hosting, support and workload migration.' },
  ];
}
