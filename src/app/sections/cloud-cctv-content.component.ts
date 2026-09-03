import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-cloud-cctv-content',
  standalone: true,
  templateUrl: './cloud-cctv-content.component.html',
  styleUrl: './cloud-cctv-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloudCctvContentComponent {
  readonly reasons = [
    ['◉', 'AI-Powered Analytics', 'Detect people, vehicles, faces, motion and suspicious activity.'],
    ['▣', 'Remote Monitoring', 'Access live and recorded footage from anywhere, on any device.'],
    ['☁', 'Secure Cloud Storage', 'Encrypted video storage in Indian Tier-4 datacenters.'],
    ['♢', 'Instant Alerts', 'Real-time alerts on motion, intrusion, loitering and more.'],
    ['⌗', 'Scalable & Reliable', 'Scale from a single camera to enterprise-wide deployments.'],
    ['₹', 'Cost Effective', 'No hardware maintenance, lower TCO and flexible subscriptions.'],
  ];

  readonly features = [
    ['Live View & Playback', 'Watch live or play back recordings instantly.'],
    ['Smart AI Detection', 'Motion, line crossing, intrusion, people counting and more.'],
    ['Multi-Site Management', 'Manage every site and camera from a single dashboard.'],
    ['Role-Based Access', 'Secure access control with user roles and permissions.'],
    ['Edge & Cloud Recording', 'Record on edge devices or in the cloud, fully encrypted.'],
  ];

  readonly benefits = [
    ['Better Security', 'AI-powered monitoring reduces risk and prevents incidents.'],
    ['Operational Efficiency', 'Remotely monitor and manage every location from one place.'],
    ['Data Protection', 'Encrypted storage keeps your video evidence safe and admissible.'],
    ['Business Continuity', 'High-availability cloud keeps surveillance running uninterrupted.'],
  ];

  readonly plans = [
    { name: 'Starter', sub: 'Perfect for small businesses', price: '999', unit: '/ Camera / Month', popular: false, features: ['Live View & Playback', '7 Days Cloud Storage', 'AI Motion Detection', 'Instant Alerts'] },
    { name: 'Business', sub: 'Ideal for growing businesses', price: '1,499', unit: '/ Camera / Month', popular: true, features: ['All Starter Features', '30 Days Cloud Storage', 'AI Advanced Analytics', 'Multi-Site Management', 'Priority Support'] },
    { name: 'Enterprise', sub: 'For large & multi-location businesses', price: 'Custom', unit: '/ Tailored Plan', popular: false, features: ['All Business Features', 'Extended Retention', 'Custom AI Integrations', 'Dedicated Account Manager', '24/7 Premium Support'] },
  ];

  readonly integrations = ['Acronis Cyber Protect', 'Microsoft 365', 'Entra ID', 'VMware', 'Microsoft Azure', 'AWS', 'Google Cloud', 'Zabbix'];
}
