import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface BareMetalPlan {
  processor: string; cores: string; memory: string; storage: string; bandwidth: string; oldPrice: string; price: string;
}

interface Panel {
  label: string; title: string; description: string; points: readonly string[];
  metrics: readonly { label: string; value: string }[];
}

@Component({
  selector: 'xh-bare-metal-content', standalone: true, imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bare-metal-content.component.html', styleUrl: './bare-metal-content.component.css',
})
export class BareMetalContentComponent {
  readonly heroOnly = input(false);
  readonly selectedFamily = signal<'ryzen' | 'intel' | 'epyc' | 'legacy'>('ryzen');
  readonly selectedPanel = signal(0);

  readonly plans: Record<string, readonly BareMetalPlan[]> = {
    ryzen: [
      { processor: 'AMD Ryzen 9700X', cores: '8 / 16', memory: '64 GB DDR5', storage: '2 × 960 GB M.2 NVMe', bandwidth: '10 TB / 1 Gbps', oldPrice: '₹21,199', price: '₹18,399' },
      { processor: 'AMD Ryzen 9950X', cores: '16 / 32', memory: '128 GB DDR5', storage: '2 × 1.92 TB M.2 NVMe', bandwidth: '10 TB / 1 Gbps', oldPrice: '₹30,499', price: '₹26,499' },
    ],
    intel: [
      { processor: 'Intel Xeon Gold 6244', cores: '8 / 16', memory: '64 GB', storage: '2 × 960 GB NVMe', bandwidth: '10 TB / 1 Gbps', oldPrice: '₹28,499', price: '₹24,799' },
      { processor: 'Dual Xeon Gold 6244', cores: '16 / 32', memory: '128 GB', storage: '2 × 960 GB NVMe', bandwidth: '10 TB / 1 Gbps', oldPrice: '₹34,699', price: '₹30,199' },
      { processor: 'Intel Xeon Gold 6254', cores: '18 / 36', memory: '128 GB', storage: '2 × 960 GB U.2 NVMe', bandwidth: '10 TB / 1 Gbps', oldPrice: '₹30,499', price: '₹26,499' },
      { processor: 'Dual Xeon Gold 6254', cores: '36 / 72', memory: '256 GB', storage: '2 × 1.92 TB U.2 NVMe', bandwidth: '10 TB / 1 Gbps', oldPrice: '₹46,899', price: '₹40,799' },
    ],
    epyc: [
      { processor: 'AMD EPYC 9124', cores: '16 / 32', memory: '128 GB DDR5', storage: '2 × 960 GB U.3 NVMe', bandwidth: '25 TB / 1 Gbps', oldPrice: '₹60,599', price: '₹52,699' },
      { processor: 'Dual AMD EPYC 9124', cores: '32 / 64', memory: '256 GB DDR5', storage: '2 × 1.92 TB U.3 NVMe', bandwidth: '25 TB / 1 Gbps', oldPrice: '₹88,199', price: '₹76,699' },
      { processor: 'AMD EPYC 9554', cores: '64 / 128', memory: '128 GB DDR5', storage: '2 × 1.92 TB U.3 NVMe', bandwidth: '25 TB / 1 Gbps', oldPrice: '₹70,999', price: '₹61,699' },
      { processor: 'Dual AMD EPYC 9554', cores: '128 / 256', memory: '256 GB DDR5', storage: '2 × 3.84 TB U.3 NVMe', bandwidth: '25 TB / 1 Gbps', oldPrice: '₹1,08,099', price: '₹93,999' },
    ],
    legacy: [
      { processor: 'Intel Xeon E5-2667v4', cores: '8 cores', memory: '32 GB', storage: '2 × 480 GB SSD', bandwidth: '10 TB / 1 Gbps', oldPrice: '₹18,899', price: '₹16,399' },
      { processor: 'Dual Xeon E5-2667v4', cores: '16 cores', memory: '64 GB', storage: '2 × 480 GB SSD', bandwidth: '10 TB / 1 Gbps', oldPrice: '₹20,399', price: '₹17,699' },
      { processor: 'Intel Xeon E5-2680v4', cores: '14 cores', memory: '128 GB', storage: '2 × 480 GB SSD', bandwidth: '10 TB / 1 Gbps', oldPrice: '₹23,199', price: '₹20,199' },
      { processor: 'Dual Xeon E5-2680v4', cores: '28 cores', memory: '256 GB', storage: '2 × 960 GB SSD', bandwidth: '10 TB / 1 Gbps', oldPrice: '₹39,799', price: '₹34,599' },
    ],
  };

  readonly panels: readonly Panel[] = [
    { label: 'Overview', title: 'Your server at a glance', description: 'See specifications, status, resource use and networking, then control power and console access from one dashboard.', points: ['Live status and resource usage', 'Power, reboot and console', 'Full specification and network details', 'Manage from anywhere'], metrics: [{ label: 'CPU', value: '16 cores · 22% load' }, { label: 'Storage', value: '2 × 1 TB NVMe · RAID 1' }, { label: 'Status', value: 'Online · 99.99%' }] },
    { label: 'Reinstall OS', title: 'Reinstall in a click', description: 'Rebuild with a fresh operating system and optional control panel whenever you need it.', points: ['Popular Linux and Windows images', 'Optional control panels', 'One-click reinstall', 'Ready in minutes'], metrics: [{ label: 'Linux', value: 'Ubuntu · AlmaLinux' }, { label: 'Windows', value: 'Windows Server' }, { label: 'Panel', value: 'cPanel · Plesk' }] },
    { label: 'Monitoring', title: 'Monitoring and graphs', description: 'Track CPU, memory, disk and bandwidth over time, with clear history and notifications.', points: ['CPU, memory, disk and network graphs', 'Usage history', 'Alerts and notifications', 'Bandwidth tracking'], metrics: [{ label: 'CPU / RAM', value: 'Within limits' }, { label: 'Bandwidth', value: 'Tracked' }, { label: 'Alerts', value: 'Configured' }] },
    { label: 'Security', title: 'Security and access', description: 'Manage firewall rules, DDoS protection, SSH keys, passwords and rescue access.', points: ['Firewall and DDoS controls', 'SSH key management', 'Root password reset', 'Rescue console access'], metrics: [{ label: 'DDoS', value: 'Protection active' }, { label: 'Firewall', value: 'Rules applied' }, { label: 'Access', value: 'SSH keys secured' }] },
    { label: 'Backups', title: 'Backups and snapshots', description: 'Take snapshots before changes, schedule backups and restore when required.', points: ['On-demand snapshots', 'Scheduled automated backups', 'One-click restore', 'Disaster-recovery options'], metrics: [{ label: 'Snapshot', value: 'Created just now' }, { label: 'Daily backup', value: 'Scheduled' }, { label: 'Restore', value: 'One click' }] },
  ];
}
