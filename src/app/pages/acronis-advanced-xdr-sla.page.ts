import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-acronis-advanced-xdr-sla-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './acronis-advanced-xdr-sla.page.html',
  styleUrl: './acronis-advanced-edr-sla.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
})
export class AcronisAdvancedXdrSlaPage {
  private readonly document = inject(DOCUMENT);
  private readonly seo = inject(SeoService);

  readonly pageTopics = [
    ['purpose', '1. Purpose'], ['service-scope', '2. Service Scope'],
    ['service-availability', '3. Service Availability'], ['support-hours', '4. Support Hours'],
    ['incident-priority-matrix', '5. Incident Priority Matrix'], ['xdr-detection-coverage', '6. XDR Detection Coverage'],
    ['xdr-capabilities', '7. XDR Capabilities'], ['threat-hunting', '8. Threat Hunting'],
    ['incident-response', '9. Incident Response'], ['monitoring-services', '10. Monitoring Services'],
    ['performance-targets', '11. Performance Targets'], ['maintenance-window', '12. Maintenance Window'],
    ['customer-responsibilities', '13. Customer Responsibilities'],
    ['xcellhost-responsibilities', '14. XcellHost Responsibilities'], ['security-features', '15. Security Features'],
    ['reporting', '16. Reporting'], ['service-exclusions', '17. Service Exclusions'],
    ['service-credits', '18. Service Credits'], ['escalation-matrix', '19. Escalation Matrix'],
    ['optional-value-added-services', '20. Optional Value-Added Services'],
    ['contact-information', '21. Contact Information'], ['sla-summary', '22. SLA Summary'],
    ['disclaimer', '23. Disclaimer'],
  ] as const;

  readonly serviceScope = [
    'Extended Detection & Response (XDR)', 'Endpoint Detection & Response (EDR)', 'AI-Powered Threat Detection',
    'Cross-Domain Threat Correlation', 'Security Analytics', 'Security Operations Dashboard',
    'Threat Intelligence Integration', 'Identity Threat Detection', 'Email Threat Detection',
    'Network Detection & Response (NDR)', 'Cloud Workload Visibility', 'User & Entity Behavior Analytics (UEBA)',
    'Automated Investigation', 'Incident Timeline', 'Root Cause Analysis', 'Threat Hunting',
    'Compliance Reporting', 'Executive Security Dashboards',
  ];
  readonly availability = [
    ['XDR Security Platform', '99.9%'], ['Threat Detection Engine', '99.9%'], ['Management Console', '99.9%'],
    ['Incident Response Platform', '99.9%'], ['Threat Intelligence Updates', 'Continuous'],
    ['SOC Monitoring', '24×7×365'], ['Monitoring & Alerting', '24×7×365'],
  ];
  readonly emergencySupport = [
    'Active Cyber Attack', 'Ransomware Incident', 'Data Exfiltration', 'Privilege Escalation',
    'Identity Compromise', 'Malware Infection', 'Critical Security Incident', 'Zero-Day Threat',
    'Business-Critical Security Events',
  ];
  readonly incidentPriorities = [
    ['P1 – Critical', 'Active breach, ransomware, critical business impact', '15 Minutes', '2 Hours'],
    ['P2 – High', 'Confirmed malware, privilege escalation, widespread compromise', '30 Minutes', '4 Hours'],
    ['P3 – Medium', 'Suspicious activity requiring investigation', '2 Hours', '8 Business Hours'],
    ['P4 – Low', 'Reports, policy updates, information requests', '4 Business Hours', '2 Business Days'],
  ];
  readonly detectionCoverage = [
    { title: 'Endpoint Security', items: ['Windows', 'Linux', 'macOS', 'Servers', 'Virtual Machines'] },
    { title: 'Email Security', items: ['Microsoft 365', 'Exchange Online', 'Email Threat Detection', 'Phishing Detection'] },
    { title: 'Identity Security', items: ['Microsoft Entra ID', 'Active Directory', 'Identity Protection', 'Privileged Account Monitoring'] },
    { title: 'Network Security', items: ['Network Traffic Analysis', 'DNS Monitoring', 'Lateral Movement Detection', 'Command & Control Detection'] },
    { title: 'Cloud Security', items: ['Microsoft 365', 'Azure', 'Cloud Workloads', 'SaaS Applications'] },
  ];
  readonly capabilities = [
    'AI-Based Threat Detection', 'Cross-Domain Correlation', 'MITRE ATT&CK Mapping',
    'User & Entity Behavior Analytics (UEBA)', 'Network Detection & Response (NDR)',
    'Endpoint Detection & Response (EDR)', 'Email Threat Detection', 'Identity Threat Detection',
    'Attack Chain Visualization', 'Automated Investigation', 'Root Cause Analysis', 'Malware Analysis',
    'Forensic Investigation', 'IOC Correlation', 'Threat Intelligence Integration', 'Compliance Reporting',
  ];
  readonly threatHunting = [
    'Proactive Threat Hunting', 'IOC Matching', 'Threat Intelligence Correlation', 'Behavioral Analytics',
    'Endpoint Investigation', 'User Activity Analysis', 'Cloud Activity Analysis', 'Email Investigation',
    'Network Traffic Analysis', 'Malware Classification', 'Security Event Correlation', 'MITRE ATT&CK Analysis',
  ];
  readonly incidentResponse = [
    'Incident Investigation', 'Threat Validation', 'Attack Scope Analysis', 'Endpoint Isolation',
    'Process Termination', 'Malware Quarantine', 'IOC Blocking', 'Threat Containment',
    'Security Policy Recommendations', 'Recovery Assistance', 'Executive Incident Reporting',
  ];
  readonly monitoring = [
    'Endpoints', 'Servers', 'Email', 'Identity Services', 'Microsoft 365', 'Azure Workloads',
    'Network Activity', 'Security Alerts', 'User Behaviour', 'Threat Intelligence', 'Login Events',
    'File Activity', 'Cloud Applications',
  ];
  readonly performanceTargets = [
    ['Threat Detection', 'Real-Time'], ['Threat Intelligence Updates', 'Continuous'],
    ['Critical Alert Response', '≤15 Minutes'], ['High Priority Alert Response', '≤30 Minutes'],
    ['Initial Investigation', '≤1 Hour'], ['Initial Containment', '≤2 Hours'],
    ['Malware Investigation', '≤4 Hours'], ['Executive Reporting', 'Monthly'],
  ];
  readonly maintenance = [
    'Platform Updates', 'Detection Engine Updates', 'Threat Intelligence Updates', 'Security Content Updates',
    'Policy Optimization', 'Performance Improvements', 'Security Rule Updates', 'Platform Health Review',
  ];
  readonly customerResponsibilities = [
    'Deploy and maintain XDR agents.', 'Keep supported operating systems updated.', 'Maintain internet connectivity.',
    'Protect administrator credentials.', 'Provide required administrative permissions.', 'Maintain valid subscriptions.',
    'Report security incidents immediately.', 'Follow cybersecurity best practices.',
    'Cooperate during investigations.', 'Approve response actions when required.',
  ];
  readonly xcellhostResponsibilities = [
    'Provide 24×7 security monitoring.', 'Investigate security alerts.', 'Correlate security events.',
    'Perform threat hunting.', 'Analyze malware.', 'Recommend remediation actions.', 'Escalate critical incidents.',
    'Deliver monthly reports.', 'Maintain platform health.', 'Coordinate with Acronis Support when required.',
  ];
  readonly securityFeatures = [
    'AI Threat Detection', 'Threat Intelligence', 'Behavioral Analytics', 'Endpoint Isolation',
    'Automated Investigation', 'Security Dashboards', 'Compliance Reports', 'Attack Timeline',
    'IOC Detection', 'Root Cause Analysis', 'MITRE ATT&CK Mapping', 'Cloud Security Visibility',
    'Email Protection', 'Identity Protection',
  ];
  readonly reports = [
    'Executive Security Dashboard', 'Threat Summary', 'Critical Incidents', 'Malware Analysis',
    'Endpoint Health', 'Security Events', 'Threat Hunting Activities', 'Compliance Status',
    'Security Recommendations', 'User Activity Summary',
  ];
  readonly exclusions = [
    'Unsupported Operating Systems', 'Customer Internet Failures', 'Devices without XDR Agents',
    'Customer-Owned Security Tools', 'Unsupported Third-Party Applications', 'Customer Configuration Errors',
    'Physical Device Theft', 'Customer Negligence', 'Customer-Disabled Security Controls', 'Force Majeure Events',
  ];
  readonly serviceCredits = [
    ['99.9% or Above', 'No Credit'], ['99.0% – 99.89%', '5% of Monthly Service Fee'],
    ['95.0% – 98.99%', '10% of Monthly Service Fee'], ['Below 95.0%', '20% of Monthly Service Fee'],
  ];
  readonly creditRules = [
    'Apply only to the XDR managed service fee.', 'Exclude Acronis licensing charges.',
    'Are issued as invoice credits.', 'Must be claimed within 30 days of the affected billing period.',
  ];
  readonly escalation = [
    ['Level 1', 'Security Service Desk', 'Initial Alert Review'], ['Level 2', 'SOC Analyst', 'Threat Investigation'],
    ['Level 3', 'Senior Security Engineer', 'Advanced Threat Response'],
    ['Level 4', 'Security Operations Manager', 'Critical Security Escalation'],
    ['Level 5', 'Service Delivery Manager', 'SLA Governance & Customer Communication'],
  ];
  readonly optionalServices = [
    'Acronis Advanced MDR', 'Acronis Advanced EDR', 'Vulnerability Assessment', 'Security Awareness Training',
    'Email Security', 'Microsoft 365 Protection', 'Backup & Disaster Recovery', 'SIEM Integration',
    'SOC-as-a-Service', 'Compliance Reporting', 'Dark Web Monitoring', 'Threat Intelligence Feeds',
    'Managed Firewall', 'Microsoft Sentinel Integration', 'Incident Response Retainer',
  ];
  readonly summary = [
    ['XDR Platform Availability', '99.9%'], ['SOC Monitoring', '24×7×365'],
    ['Critical Response Time', '15 Minutes'], ['Initial Containment', '2 Hours'],
    ['Threat Detection', 'Real-Time'], ['Threat Hunting', 'Included'], ['Threat Intelligence', 'Continuous'],
    ['Executive Reporting', 'Monthly'], ['Standard Support', 'Monday–Saturday (9:00 AM–7:00 PM IST)'],
    ['Emergency Support', '24×7×365'], ['Maintenance Notice', '48 Hours'],
  ];

  constructor() {
    this.seo.set(
      'Acronis Advanced XDR SLA — XcellHost',
      'Availability, monitoring and incident response commitments for Acronis Advanced XDR.',
      '/acronis-advanced-xdr-sla/',
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
