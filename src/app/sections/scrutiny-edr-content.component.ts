import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-scrutiny-edr-content',
  standalone: true,
  templateUrl: './scrutiny-edr-content.component.html',
  styleUrls: ['./scrutiny-edr-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrutinyEdrContentComponent {
  readonly capabilities = [
    { icon: '⌁', title: 'Behavioural detection', body: 'Self-learning analytics identify suspicious behaviour beyond signatures.' },
    { icon: '✓', title: 'Real-time monitoring', body: 'See processes, files, registry and network connections continuously.' },
    { icon: '⌕', title: 'Threat investigation', body: 'Use timelines, process trees and MITRE ATT&CK mapping.' },
    { icon: '◎', title: 'Threat hunting', body: 'Proactively search for threats across the endpoint estate.' },
    { icon: '▶', title: 'Response actions', body: 'Isolate hosts, kill processes, quarantine files and remediate remotely.' },
    { icon: '▣', title: 'Forensics & evidence', body: 'Collect evidence for incident response, insurers and audits.' },
    { icon: '▣', title: 'Ransomware protection', body: 'Stop ransomware behaviour before encryption damage spreads.' },
    { icon: '↗', title: 'Lateral movement detection', body: 'Identify unauthorised movement before critical systems are reached.' },
  ];
  readonly flow = [
    { title: 'Collect', body: 'The agent gathers endpoint telemetry in real time.' },
    { title: 'Detect', body: 'Behavioural analysis identifies threats.' },
    { title: 'Investigate', body: 'Analysts review context and forensics.' },
    { title: 'Respond', body: 'Contain and eliminate the threat.' },
    { title: 'Recover', body: 'Restore operations and improve defences.' },
  ];
  readonly reasons = [
    { number: '01', title: 'Security expertise', body: 'Get deployment, tuning and response guidance from an experienced security team.' },
    { number: '02', title: 'Managed 24×7 cover', body: 'Our Mumbai SOC can monitor alerts and work incidents around the clock.' },
    { number: '03', title: 'One accountable vendor', body: 'Licensing, implementation, support and reporting stay under one contract.' },
    { number: '04', title: 'Right-sized deployment', body: 'Start with a representative pilot and scale across your estate with confidence.' },
    { number: '05', title: 'Compliance-ready operations', body: 'Use audit trails, reporting and certified service-management processes.' },
    { number: '06', title: 'Local support', body: 'Receive GST-compliant INR billing and direct help from XcellHost engineers.' },
  ];
}
