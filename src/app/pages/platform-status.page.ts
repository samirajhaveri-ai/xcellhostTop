import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-platform-status-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './platform-status.page.html',
  styleUrl: './platform-status.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlatformStatusPage {
  readonly services = [
    { name: 'Cloud Infrastructure', description: 'Virtual servers, compute and storage' },
    { name: 'Network & Connectivity', description: 'Data center connectivity and network services' },
    { name: 'Backup & Disaster Recovery', description: 'Cloud backups and workload recovery' },
    { name: 'Security Services', description: 'Managed protection and security services' },
    { name: 'Business Applications', description: 'Hosted desktops, email and business applications' },
    { name: 'Customer Portals', description: 'Cloud management, billing and support access' },
  ];

  constructor() {
    inject(SeoService).set(
      'Platform Status | XcellHost',
      'XcellHost platform status, service availability, maintenance information and support.',
      '/company/platform-status',
    );
  }
}
