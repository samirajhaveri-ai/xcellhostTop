import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-vortex-soc-content',
  standalone: true,
  templateUrl: './vortex-soc-content.component.html',
  styleUrl: './vortex-soc-content.component.css',
  styles: [`
    :host .soc-content { gap: 22px; margin-bottom: 22px; }
    :host .soc-content > section > .pp-sec { margin-bottom: 10px; }
    :host .soc-content .pp-ov { line-height: 1.65; }
    :host .soc-feature-grid { margin-top: 14px; gap: 13px; }
    :host .soc-cap-grid, :host .soc-flow { margin-top: 13px; }
    :host .soc-tags, :host .soc-deploy { margin-top: 12px; }
    :host .soc-note { margin-top: 12px; }
    @media (max-width: 700px) { :host .soc-content { gap: 20px; margin-bottom: 20px; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VortexSocContentComponent {
  readonly overview = [
    { icon: 'SIEM', title: 'One data lake, not five consoles', subtitle: 'Every source lands in the same schema', points: ['Endpoint, cloud, network, identity and application telemetry', 'Hot, warm and archive retention', 'Fast search and correlation at scale', 'One query language across every source'] },
    { icon: 'RULE', title: 'Detection you can shape', subtitle: 'A rule library plus a practical builder', points: ['Field, threshold, sequence, anomaly and indicator rules', 'Risk scores, severity and tags', 'MITRE ATT&CK mapping', 'Custom rules without a services engagement'] },
    { icon: 'SOAR', title: 'Response that runs itself', subtitle: 'SOAR is built in', points: ['Drag-and-drop playbooks', 'Automated triage, enrichment and closure', 'Endpoint, network, AD, cloud, email and ITSM actions', 'Human approval gates when required'] },
    { icon: 'LOCAL', title: 'Air-gapped capable', subtitle: 'For environments that cannot touch the internet', points: ['100% on-premise deployment', 'Private cloud inside your tenancy', 'Hybrid across sites and clouds', 'Controlled offline updates'] },
  ];
  readonly capabilities = [
    ['Unified Data Lake SIEM', 'Collect endpoint, cloud, network, application and identity telemetry with tiered retention.'], ['Detection Engineering', 'Build field, threshold, sequence, anomaly and indicator rules with risk and MITRE mapping.'], ['SOAR Playbooks', 'Automate triage, enrichment, assignment, action and closure with approval gates.'], ['UEBA Analytics', 'Baseline user, host and service behaviour, compare peers and score entity risk.'], ['Threat Hunting', 'Search and pivot across endpoint, cloud, network and identity timelines.'], ['Case Management', 'Keep owners, comments, evidence, response history and SLA tracking together.'], ['Cloud Security (CSPM)', 'Continuously check cloud configuration, IAM, networks and storage.'], ['Cloud Native Vulnerability Management', 'Prioritise risks in containers, images, packages, Kubernetes and workloads.'], ['Network Analytics (NBAD)', 'Detect beaconing, lateral movement and exfiltration from traffic metadata.'], ['Endpoint Response Bridge', 'Correlate endpoint alerts and isolate hosts, kill processes, recover files and scan.'], ['Threat Intelligence', 'Enrich IP, domain, hash, URL, certificate and email indicators.'], ['Application Visibility (APM)', 'Correlate traces, logs, metrics and errors with security events.'], ['Dashboards & Reporting', 'Deliver analyst, executive, compliance, SLA, risk and trend views.'], ['Automation Connectors', 'Connect 800+ endpoint, firewall, IAM, cloud, email and ITSM technologies.'], ['Data Governance', 'Apply classification, retention, immutable storage, RBAC and audit logs.'],
  ];
  readonly workflow = [['Alert triage', 'Prioritise by severity, risk and asset criticality'], ['Investigate', 'Correlate activity across every signal source'], ['Respond', 'Run playbooks and containment actions'], ['Document', 'Attach evidence, notes, status and SLA'], ['Close & learn', 'Review the incident and tune rules and playbooks']];
  readonly mitre = ['Initial Access', 'Execution', 'Persistence', 'Privilege Escalation', 'Defense Evasion', 'Credential Access', 'Discovery', 'Lateral Movement', 'Collection', 'Command & Control', 'Exfiltration', 'Impact'];
}
