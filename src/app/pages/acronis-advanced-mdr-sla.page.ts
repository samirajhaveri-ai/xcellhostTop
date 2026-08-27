import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-acronis-advanced-mdr-sla-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './acronis-advanced-mdr-sla.page.html',
  styleUrl: './acronis-advanced-edr-sla.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
})
export class AcronisAdvancedMdrSlaPage {
  private readonly document = inject(DOCUMENT);
  private readonly seo = inject(SeoService);

  readonly pageTopics = [
    ['purpose', '1. Purpose'], ['service-scope', '2. Service Scope'],
    ['service-availability', '3. Service Availability'], ['support-hours', '4. Support Hours'],
    ['incident-priority-matrix', '5. Incident Priority Matrix'],
    ['managed-detection-services', '6. Managed Detection Services'], ['threat-hunting', '7. Threat Hunting'],
    ['incident-response', '8. Incident Response'], ['security-features', '9. Security Features'],
    ['monitoring', '10. Monitoring'], ['performance-targets', '11. Performance Targets'],
    ['maintenance-window', '12. Maintenance Window'], ['customer-responsibilities', '13. Customer Responsibilities'],
    ['xcellhost-responsibilities', '14. XcellHost Responsibilities'], ['reporting', '15. Reporting'],
    ['service-exclusions', '16. Service Exclusions'], ['service-credits', '17. Service Credits'],
    ['escalation-matrix', '18. Escalation Matrix'], ['optional-services', '19. Optional Services'],
    ['contact-information', '20. Contact Information'], ['sla-summary', '21. SLA Summary'],
    ['disclaimer', '22. Disclaimer'],
  ] as const;

  readonly serviceScope = [
    '24×7 Security Monitoring', 'Managed Detection & Response', 'Security Operations Center (SOC)',
    'Endpoint Detection & Response (EDR)', 'AI-Powered Threat Detection', 'Threat Intelligence',
    'Threat Hunting', 'Incident Investigation', 'Malware Analysis', 'Ransomware Detection',
    'Attack Chain Analysis', 'Automated Response', 'Human-led Security Analysis',
    'Incident Containment Guidance', 'Security Reporting', 'Compliance Reporting',
  ];
  readonly availability = [
    ['MDR Security Platform', '99.9%'], ['Security Monitoring', '24×7×365'], ['SOC Operations', '24×7×365'],
    ['Threat Detection Engine', '99.9%'], ['Incident Response Platform', '99.9%'], ['Management Console', '99.9%'],
  ];
  readonly emergencySupport = [
    'Active Ransomware', 'Malware Infection', 'Critical Security Incident', 'Data Exfiltration',
    'Endpoint Compromise', 'Account Compromise', 'Zero-Day Attack', 'Business Critical Security Events',
  ];
  readonly incidentPriorities = [
    ['P1 – Critical', 'Active ransomware, major compromise', '15 Minutes', '2 Hours'],
    ['P2 – High', 'Confirmed malware, suspicious activity', '30 Minutes', '4 Hours'],
    ['P3 – Medium', 'Security alerts requiring investigation', '2 Hours', '8 Business Hours'],
    ['P4 – Low', 'Reports, recommendations, policy updates', '4 Business Hours', '2 Business Days'],
  ];
  readonly managedDetection = [
    'Endpoint Activity', 'Malware Detection', 'Ransomware Protection', 'Behavioral Analytics',
    'Process Monitoring', 'File Integrity Monitoring', 'Privilege Escalation Detection',
    'Credential Theft Detection', 'Lateral Movement Detection', 'Suspicious PowerShell Activity',
    'Registry Changes', 'Network Connections', 'Command & Control Communication',
    'Application Exploits', 'Zero-Day Indicators',
  ];
  readonly threatHunting = [
    'Proactive Threat Hunting', 'IOC Matching', 'MITRE ATT&CK Mapping', 'Threat Intelligence Correlation',
    'User Behavior Analysis', 'Endpoint Investigation', 'Memory Analysis', 'Malware Classification',
    'Security Log Correlation',
  ];
  readonly incidentResponse = [
    'Investigate the Incident', 'Analyze Attack Scope', 'Isolate Compromised Endpoint',
    'Kill Malicious Processes', 'Quarantine Malware', 'Block Malicious Indicators',
    'Recommend Security Policies', 'Assist with Recovery', 'Generate Incident Reports', 'Coordinate Escalation',
  ];
  readonly securityFeatures = [
    'AI-Based Threat Detection', 'Behavioral Analysis', 'Anti-Ransomware', 'Machine Learning Detection',
    'Threat Intelligence', 'IOC Detection', 'Endpoint Isolation', 'Automated Investigation',
    'Security Analytics', 'Attack Visualization', 'Incident Timeline', 'Root Cause Analysis',
    'Vulnerability Assessment (where licensed)',
  ];
  readonly monitoring = [
    'Endpoints', 'Servers', 'Workstations', 'Security Alerts', 'User Activity', 'Login Events',
    'Malware Events', 'Network Activity', 'Endpoint Health', 'Threat Intelligence Updates',
  ];
  readonly performanceTargets = [
    ['Threat Detection', 'Real-Time'], ['Critical Alert Response', '≤15 Minutes'],
    ['High Alert Response', '≤30 Minutes'], ['Incident Analysis', '≤1 Hour'],
    ['Initial Containment', '≤2 Hours'], ['Malware Investigation', '≤4 Hours'],
    ['Threat Intelligence Updates', 'Continuous'],
  ];
  readonly maintenance = [
    'Detection Engine Updates', 'Security Patch Updates', 'Threat Intelligence Updates',
    'SOC Platform Updates', 'Performance Optimization', 'Policy Review',
  ];
  readonly customerResponsibilities = [
    'Install and maintain MDR agents.', 'Keep supported operating systems updated.',
    'Maintain internet connectivity.', 'Protect administrator credentials.',
    'Authorize emergency response actions where applicable.', 'Maintain valid subscriptions.',
    'Report suspicious activities promptly.', 'Cooperate during investigations.',
  ];
  readonly xcellhostResponsibilities = [
    'Monitor security events 24×7.', 'Investigate security alerts.', 'Perform threat hunting.',
    'Analyze malware.', 'Provide incident reports.', 'Recommend remediation.', 'Escalate critical threats.',
    'Maintain security policies.', 'Coordinate with Acronis support when required.',
  ];
  readonly reports = [
    'Security Incidents', 'Threat Summary', 'Ransomware Events', 'Malware Detections', 'SOC Activities',
    'Endpoint Health', 'Security Recommendations', 'Threat Intelligence Summary', 'Executive Dashboard',
  ];
  readonly exclusions = [
    'Unsupported Operating Systems', 'Devices without MDR Agents', 'Customer Network Failures',
    'Third-Party Software Issues', 'Customer Negligence', 'Physical Device Theft',
    'Force Majeure Events', 'Customer-Disabled Security Controls',
  ];
  readonly serviceCredits = [
    ['99.9% or Above', 'No Credit'], ['99.0% – 99.89%', '5% of Monthly Service Fee'],
    ['95.0% – 98.99%', '10% of Monthly Service Fee'], ['Below 95.0%', '20% of Monthly Service Fee'],
  ];
  readonly creditRules = ['Apply only to MDR service fees.', 'Exclude third-party licensing.', 'Must be claimed within 30 days.'];
  readonly escalation = [
    ['Level 1', 'Security Service Desk', 'Initial Alert Review'], ['Level 2', 'SOC Analyst', 'Threat Investigation'],
    ['Level 3', 'Senior SOC Engineer', 'Advanced Incident Response'],
    ['Level 4', 'Security Operations Manager', 'Critical Security Escalation'],
    ['Level 5', 'Service Delivery Manager', 'SLA Governance & Customer Communication'],
  ];
  readonly optionalServices = [
    'Acronis Advanced EDR', 'XDR Integration', 'Vulnerability Assessment', 'Security Awareness Training',
    'Email Security', 'Microsoft 365 Protection', 'Backup & Disaster Recovery', 'SIEM Integration',
    'Compliance Reporting', 'Threat Intelligence Feeds', 'Dark Web Monitoring', 'Security Risk Assessments',
  ];
  readonly summary = [
    ['MDR Platform Availability', '99.9%'], ['SOC Monitoring', '24×7×365'], ['Critical Response', '15 Minutes'],
    ['Initial Containment', '2 Hours'], ['Threat Hunting', 'Included'], ['Threat Intelligence', 'Continuous'],
    ['Incident Investigation', 'Included'], ['Executive Reporting', 'Monthly'],
    ['Standard Support', 'Monday–Saturday (9:00 AM–7:00 PM IST)'],
    ['Emergency Support', '24×7×365'], ['Planned Maintenance Notice', '48 Hours'],
  ];

  constructor() {
    this.seo.set(
      'Acronis Advanced MDR SLA — XcellHost',
      'Service commitments, SOC monitoring standards and incident response targets for Acronis Advanced MDR.',
      '/acronis-advanced-mdr-sla/',
    );
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const section = this.document.getElementById(sectionId);
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const location = this.document.defaultView?.location;
    if (location) {
      this.document.defaultView?.history.replaceState(null, '', `${location.pathname}${location.search}#${sectionId}`);
    }
  }
}
