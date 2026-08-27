import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-acronis-backup-cloud-sla-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './acronis-backup-cloud-sla.page.html',
  styleUrl: './acronis-advanced-edr-sla.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
})
export class AcronisBackupCloudSlaPage {
  private readonly document = inject(DOCUMENT);
  private readonly seo = inject(SeoService);

  readonly pageTopics = [
    ['purpose', '1. Purpose'], ['service-description', '2. Service Description'],
    ['service-availability', '3. Service Availability'], ['support-hours', '4. Support Hours'],
    ['incident-priority-matrix', '5. Incident Priority Matrix'], ['backup-policy', '6. Backup Policy'],
    ['backup-retention', '7. Backup Retention'], ['recovery-objectives', '8. Recovery Objectives'],
    ['security-standards', '9. Security Standards'], ['backup-monitoring', '10. Backup Monitoring'],
    ['restore-services', '11. Restore Services'], ['customer-responsibilities', '12. Customer Responsibilities'],
    ['xcellhost-responsibilities', '13. XcellHost Responsibilities'],
    ['disaster-recovery-support', '14. Disaster Recovery Support'], ['service-exclusions', '15. Service Exclusions'],
    ['maintenance-policy', '16. Maintenance Policy'], ['restore-request-targets', '17. Restore Request Targets'],
    ['service-credits', '18. Service Credits'], ['contact-information', '19. Contact Information'],
    ['sla-review', '20. SLA Review'], ['sla-summary', 'SLA Summary'],
  ] as const;

  readonly serviceFeatures = [
    'Cloud Backup for Physical & Virtual Servers', 'Workstation & Laptop Backup', 'Microsoft 365 Backup',
    'Google Workspace Backup (Optional)', 'VMware & Hyper-V Backup', 'File & Folder Backup',
    'Image-Based Backup', 'Bare Metal Recovery', 'Incremental & Differential Backups', 'Cloud Storage',
    'AES-256 Encryption', 'Backup Monitoring', 'Backup Verification', 'Restore Assistance',
    '24×7 Infrastructure Monitoring',
  ];
  readonly availability = [
    ['Backup Management Portal', '99.9% Monthly Uptime'], ['Backup Infrastructure', '99.9%'],
    ['Cloud Storage Availability', '99.9%'], ['Management Console', '99.9%'],
  ];
  readonly supportCases = [
    'Backup Service Failure', 'Critical Restore Requests', 'Backup Infrastructure Outage',
    'Cloud Storage Inaccessibility', 'Security Incidents', 'Ransomware Recovery Assistance',
  ];
  readonly incidentPriorities = [
    ['P1 – Critical', 'Backup service unavailable or failed restore during business-critical incident', '15 Minutes', '2 Hours'],
    ['P2 – High', 'Scheduled backups failing for multiple systems', '30 Minutes', '4 Hours'],
    ['P3 – Medium', 'Single device backup issue, restore assistance, configuration issue', '2 Hours', '8 Business Hours'],
    ['P4 – Low', 'General inquiries, backup policy changes, user guidance', '4 Business Hours', '2 Business Days'],
  ];
  readonly backupPolicy = [
    ['Incremental Backup', 'Daily'], ['Differential Backup', 'Optional'], ['Full Backup', 'Weekly'], ['Manual Backup', 'On Demand'],
  ];
  readonly retention = [
    ['Daily', '30 Days'], ['Weekly', '12 Weeks'], ['Monthly', '12 Months'], ['Yearly', 'Optional (Customer Selected)'],
  ];
  readonly recoveryObjectives = [
    ['Recovery Time Objective (RTO)', '4 Hours (subject to data size and connectivity)'],
    ['Recovery Point Objective (RPO)', 'As per configured backup schedule (minimum 24 hours for daily backups)'],
  ];
  readonly securityStandards = [
    'AES-256 Data Encryption', 'TLS Encryption for Data in Transit', 'Zero-Knowledge Encryption (Optional)',
    'Multi-Factor Authentication (MFA)', 'Immutable Backup Storage (where supported)',
    'Anti-Ransomware Protection', 'Malware Scanning', 'Secure Cloud Storage',
    'Role-Based Access Control (RBAC)', 'Audit Logging', 'Continuous Security Monitoring',
  ];
  readonly monitoring = [
    'Backup Job Status', 'Failed Backup Alerts', 'Storage Utilization', 'Backup Agent Health',
    'Device Connectivity', 'Backup Success Rate', 'Restore Readiness',
  ];
  readonly restoreServices = [
    'Single File Recovery', 'Folder Recovery', 'Entire System Recovery', 'Bare Metal Recovery',
    'Virtual Machine Recovery', 'Microsoft 365 Mailbox Recovery', 'OneDrive Recovery',
    'SharePoint Recovery', 'Microsoft Teams Data Recovery', 'Database Recovery (where applicable)',
  ];
  readonly customerResponsibilities = [
    'Maintain valid software licenses where required.',
    'Ensure protected devices remain online during scheduled backup windows.',
    'Provide sufficient storage capacity if using customer-owned storage.',
    'Maintain network connectivity for successful backups.', 'Periodically validate restored data.',
    'Inform XcellHost of infrastructure changes that may impact backup operations.',
    'Protect user credentials and administrative access.',
  ];
  readonly xcellhostResponsibilities = [
    'Configure backup policies.', 'Monitor backup jobs.', 'Investigate failed backups.',
    'Provide restore assistance.', 'Maintain backup infrastructure.', 'Secure cloud storage.',
    'Apply security updates.', 'Provide technical support.', 'Assist during disaster recovery events.',
  ];
  readonly disasterRecovery = [
    'Backup verification', 'Restore planning', 'Priority recovery of critical systems',
    'Virtual machine restoration', 'Bare metal recovery', 'Microsoft 365 data recovery', 'Recovery progress updates',
  ];
  readonly exclusions = [
    'Customer-side internet outages', 'Hardware failures on customer-owned devices',
    'Corrupted or unsupported source data', 'Backup failures caused by powered-off devices',
    'Third-party software defects', 'Data loss occurring before the last successful backup',
    'Unauthorized changes to backup policies by the customer', 'Force majeure events',
  ];
  readonly maintenance = [
    'Backup Platform Updates', 'Security Patches', 'Storage Maintenance', 'Cloud Infrastructure Upgrades',
    'Backup Agent Updates', 'Performance Optimization',
  ];
  readonly restoreTargets = [
    ['Single File Restore', 'Within 2 Hours'], ['Folder Restore', 'Within 4 Hours'],
    ['Microsoft 365 Mailbox Restore', 'Within 4 Hours'], ['Server Restore', 'Within 8 Hours'],
    ['Bare Metal Recovery', 'Within 24 Hours'], ['Large-Scale Disaster Recovery', 'As per agreed recovery plan'],
  ];
  readonly serviceCredits = [
    ['99.9% or above', 'None'], ['99.0% – 99.89%', '5% of Monthly Service Fee'],
    ['95.0% – 98.99%', '10% of Monthly Service Fee'], ['Below 95.0%', '20% of Monthly Service Fee'],
  ];
  readonly summary = [
    ['Service Availability', '99.9%'], ['Critical Response Time', '15 Minutes'],
    ['Critical Resolution Target', '2 Hours'], ['Backup Monitoring', '24×7'],
    ['Daily Incremental Backup', 'Included'], ['Weekly Full Backup', 'Included'], ['Encryption', 'AES-256'],
    ['Recovery Time Objective (RTO)', '4 Hours*'], ['Recovery Point Objective (RPO)', 'As Configured'],
    ['Scheduled Maintenance Notice', '48 Hours'], ['Emergency Support', '24×7'],
    ['Standard Support', 'Monday–Saturday, 9:00 AM–7:00 PM IST'],
  ];

  constructor() {
    this.seo.set(
      'Acronis Backup Cloud SLA — XcellHost',
      'Availability, backup policy, retention and recovery commitments for Acronis Backup Cloud.',
      '/acronis-backup-cloud-sla/',
    );
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const section = this.document.getElementById(sectionId);
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const location = this.document.defaultView?.location;
    if (location) this.document.defaultView?.history.replaceState(null, '', `${location.pathname}${location.search}#${sectionId}`);
  }
}
