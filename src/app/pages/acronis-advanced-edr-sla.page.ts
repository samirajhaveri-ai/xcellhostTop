import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-acronis-advanced-edr-sla-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './acronis-advanced-edr-sla.page.html',
  styleUrl: './acronis-advanced-edr-sla.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
})
export class AcronisAdvancedEdrSlaPage {
  private readonly document = inject(DOCUMENT);
  private readonly seo = inject(SeoService);

  readonly pageTopics = [
    ['purpose', '1. Purpose'],
    ['service-description', '2. Service Description'],
    ['service-availability', '3. Service Availability'],
    ['support-hours', '4. Support Hours'],
    ['incident-priority-matrix', '5. Incident Priority Matrix'],
    ['threat-monitoring-detection', '6. Threat Monitoring & Detection'],
    ['incident-response', '7. Incident Response'],
    ['security-features', '8. Security Features'],
    ['performance-commitment', '9. Performance Commitment'],
    ['customer-responsibilities', '10. Customer Responsibilities'],
    ['xcellhost-responsibilities', '11. XcellHost Responsibilities'],
    ['service-exclusions', '12. Service Exclusions'],
    ['security-maintenance', '13. Security Maintenance'],
    ['reporting', '14. Reporting'],
    ['escalation-matrix', '15. Escalation Matrix'],
    ['service-credits', '16. Service Credits'],
    ['contact-information', '17. Contact Information'],
    ['sla-review', '18. SLA Review'],
    ['sla-summary', 'SLA Summary'],
  ] as const;

  readonly serviceFeatures = [
    'AI-Powered Endpoint Detection & Response (EDR)',
    'Next-Generation Antivirus (NGAV)',
    'Anti-Ransomware Protection',
    'Behavioral Threat Detection',
    'Real-Time Threat Monitoring',
    'Malware & Zero-Day Threat Protection',
    'Attack Chain Analysis',
    'Automated Incident Response',
    'Threat Hunting',
    'Endpoint Isolation',
    'Security Event Logging',
    'Centralized Management Console',
    'Security Alerts & Notifications',
    'Policy Management',
    'Regular Threat Intelligence Updates',
  ];

  readonly availability = [
    ['Security Management Console', '99.9% Monthly Uptime'],
    ['Threat Detection Services', '99.9%'],
    ['Endpoint Protection Platform', '99.9%'],
    ['Security Policy Management', '99.9%'],
  ];

  readonly incidentPriorities = [
    ['P1 – Critical', 'Active ransomware, widespread malware outbreak, or multiple endpoints compromised', '15 Minutes', '2 Hours (Initial Containment)'],
    ['P2 – High', 'Confirmed malware, suspicious activity, or an EDR alert requiring investigation', '30 Minutes', '4 Hours'],
    ['P3 – Medium', 'Policy issues, agent installation problems, or isolated endpoint issues', '2 Hours', '8 Business Hours'],
    ['P4 – Low', 'General guidance, reporting requests, or configuration assistance', '4 Business Hours', '2 Business Days'],
  ];

  readonly monitoring = [
    'Malware activity', 'Ransomware behavior', 'Suspicious processes', 'Unauthorized file changes',
    'Credential theft attempts', 'PowerShell & script-based attacks', 'Privilege escalation',
    'Lateral movement', 'Network-based threats', 'Zero-day attack indicators',
  ];

  readonly incidentResponse = [
    'Threat investigation', 'Endpoint isolation', 'Malware containment', 'Policy adjustment',
    'Threat remediation guidance', 'Restore assistance (where integrated with Acronis Backup)',
    'Security reporting', 'Post-incident review',
  ];

  readonly securityFeatures = [
    'AI-Based Threat Detection', 'Next-Generation Antivirus (NGAV)', 'Endpoint Detection & Response (EDR)',
    'Anti-Ransomware Protection', 'Behavioral Analysis', 'Attack Chain Visualization',
    'Real-Time Threat Intelligence', 'Automated Response Actions', 'Endpoint Isolation',
    'Device Health Monitoring', 'Centralized Security Dashboard', 'Security Audit Logs',
  ];

  readonly performance = [
    'Continuous endpoint monitoring', 'Real-time threat detection', 'Low resource consumption',
    'Rapid policy deployment', 'Automated alert generation', 'Centralized visibility across protected endpoints',
  ];

  readonly customerResponsibilities = [
    'Install and maintain Acronis EDR agents on protected devices.',
    'Keep operating systems and applications updated.',
    'Follow recommended security practices.',
    'Report suspicious activity promptly.',
    'Maintain valid software licenses.',
    'Ensure endpoint connectivity to the management platform.',
    'Protect administrator credentials.',
  ];

  readonly xcellhostResponsibilities = [
    'Configure the Acronis EDR platform.', 'Monitor platform health.',
    'Assist in investigating security incidents.', 'Provide guidance for threat containment and recovery.',
    'Maintain security policies (where managed).', 'Apply platform updates.', 'Provide technical support.',
    'Escalate critical incidents to Acronis where required.',
  ];

  readonly exclusions = [
    'Customer failure to install or maintain endpoint agents', 'Unsupported operating systems',
    'Security incidents caused by intentional customer actions', 'Third-party software vulnerabilities',
    'Customer network outages', 'Physical theft of devices', 'Unsupported or end-of-life systems',
    'Force majeure events',
  ];

  readonly maintenance = [
    'Threat Intelligence Updates', 'Detection Engine Updates', 'Agent Updates',
    'Security Policy Optimization', 'Platform Enhancements', 'Bug Fixes',
  ];

  readonly reports = [
    'Threat Detection Reports', 'Malware Activity Reports', 'Endpoint Health Reports',
    'Security Compliance Reports', 'Incident Reports', 'Executive Security Dashboard', 'Threat Trend Analysis',
  ];

  readonly escalation = [
    { level: 'Level 1', team: 'Security Service Desk', actions: ['Alert verification', 'Initial troubleshooting', 'Ticket creation'] },
    { level: 'Level 2', team: 'Security Operations Team', actions: ['Threat investigation', 'Malware analysis', 'Policy tuning', 'Incident coordination'] },
    { level: 'Level 3', team: 'Security Engineering Team', actions: ['Advanced threat analysis', 'Platform escalation', 'Critical incident management', 'Vendor coordination'] },
  ];

  readonly serviceCredits = [
    ['99.9% or above', 'None'], ['99.0% – 99.89%', '5% of Monthly Service Fee'],
    ['95.0% – 98.99%', '10% of Monthly Service Fee'], ['Below 95.0%', '20% of Monthly Service Fee'],
  ];

  readonly summary = [
    ['Management Console Availability', '99.9%'], ['Critical Incident Response', '15 Minutes'],
    ['Initial Critical Containment Target', '2 Hours'], ['Standard Support', 'Monday–Saturday, 9:00 AM–7:00 PM IST'],
    ['Emergency Security Support', '24×7'], ['Threat Monitoring', 'Continuous'], ['Security Updates', 'Included'],
    ['Threat Intelligence Updates', 'Included'], ['Endpoint Isolation', 'Included'],
    ['Ransomware Protection', 'Included'], ['AI-Based Threat Detection', 'Included'],
    ['Scheduled Maintenance Notice', '48 Hours'],
  ];

  constructor() {
    this.seo.set(
      'Acronis Advanced EDR SLA — XcellHost',
      'Service commitments, incident response targets, availability and support standards for Acronis Advanced EDR.',
      '/acronis-advanced-edr-sla/'
    );
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const section = this.document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const location = this.document.defaultView?.location;
    if (location) {
      this.document.defaultView?.history.replaceState(
        null,
        '',
        `${location.pathname}${location.search}#${sectionId}`,
      );
    }
  }
}
