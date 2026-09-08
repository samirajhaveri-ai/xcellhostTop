import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-scrutiny-edr-content',
  standalone: true,
  templateUrl: './scrutiny-edr-content.component.html',
  styleUrls: ['./scrutiny-edr-content.component.css'],
  styles: [`
    :host .edr-comparison{margin:28px 0;padding:42px 34px;border:1px solid #dce7f7;border-radius:22px;background:linear-gradient(120deg,#e9eeff 0%,#f5f8ff 58%,#edf7ff 100%);color:var(--navy)}
    :host .edr-comparison-heading{max-width:720px;margin:0 auto 30px;text-align:center}
    :host .edr-comparison-heading>span{display:inline-block;padding:6px 14px;border:1px solid #1f4d86;border-radius:99px;background:#102a4d;color:#1b83ff;font:800 11px var(--mono);letter-spacing:.08em;text-transform:uppercase}
    :host .edr-comparison-heading h2{margin:15px 0 10px;color:var(--navy);font-size:32px;line-height:1.2}:host .edr-comparison-heading p{margin:0;color:var(--slate);line-height:1.65}
    :host .edr-comparison-table{overflow:hidden;border:1px solid #34435a;border-radius:18px;background:#18253a}
    :host .edr-comparison table{width:100%;border-collapse:collapse;text-align:left}:host .edr-comparison th,:host .edr-comparison td{padding:17px 20px;border-right:1px solid #334258;border-bottom:1px solid #334258;vertical-align:top;font-size:13px;line-height:1.55}
    :host .edr-comparison tr>*:last-child{border-right:0}:host .edr-comparison tbody tr:last-child>*{border-bottom:0}
    :host .edr-comparison thead th{background:#1a2d48;color:#fff;font:800 11px var(--mono);letter-spacing:.04em;text-transform:uppercase}:host .edr-comparison thead th:first-child,:host .edr-comparison tbody th{background:#29364c}
    :host .edr-comparison thead th:nth-child(2){color:#1682ff}:host .edr-comparison tbody th{width:17%;color:#fff}:host .edr-comparison tbody td:nth-child(2){width:42%;background:#1c2e49;color:#fff;font-weight:700}:host .edr-comparison tbody td:nth-child(3){color:#9fbddd}
    @media(max-width:800px){:host .edr-comparison{padding:30px 18px}:host .edr-comparison-heading h2{font-size:25px}:host .edr-comparison-table{overflow-x:auto}:host .edr-comparison table{min-width:780px}}
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrutinyEdrContentComponent {
  readonly comparison = [
    { criteria: 'Platform Breadth', scrutiny: 'EPP, EDR, endpoint response, NG-SIEM context, UEBA, SOAR and ITDR-ready telemetry in one platform.', specialized: 'Typically strong EDR/XDR coverage with broader functions delivered through added modules or ecosystem integrations.' },
    { criteria: 'Integrated NG-SIEM Context', scrutiny: 'Native SIEM + UEBA + SOAR correlation for endpoint, identity, cloud and network events.', specialized: 'Often relies on a separate SIEM, data platform or partner integration for full operations context.' },
    { criteria: 'Threat Hunting Analytics', scrutiny: 'Process timelines, behaviour analytics, MITRE context, entity risk and reusable hunting queries.', specialized: 'Advanced hunting is available, but depth may depend on package, retention or managed-service tier.' },
    { criteria: 'Response Actions', scrutiny: 'Host isolation, release, process control, remote scan, file retrieval, memory capture and response audit trail.', specialized: 'Core response actions are common; deeper forensic or orchestration workflows may require extra capability tiers.' },
    { criteria: 'Policy Governance', scrutiny: 'Protection policies, trusted applications, event filters, blocklists, device control and isolation exceptions.', specialized: 'Policy and exclusion management is standard, with governance depth varying by deployment model.' },
    { criteria: 'Deployment Flexibility', scrutiny: 'On-premise, cloud, hybrid, private deployment and air-gapped support.', specialized: 'Most leading endpoint platforms are optimized for cloud-native operating models.' },
    { criteria: 'Add-on Dependency', scrutiny: 'Designed as an all-in-one platform with minimal add-ons for SOC correlation and response.', specialized: 'Broader SOC, managed hunting, identity, cloud and orchestration capabilities are often packaged separately.' },
  ];
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
