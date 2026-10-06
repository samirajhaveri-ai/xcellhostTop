import { Faq } from './models';

export const ACRONIS_EDR_FAQS: Faq[] = [
  [
    'How much does managed EDR cost per endpoint in India?',
    'Acronis Advanced Endpoint Security (EDR) starts at ₹999 per user per year, excluding GST. The published one-, two- and three-year plans currently use the same annual per-user rate; confirm endpoint quantities and any managed-service scope before ordering.',
  ],
  [
    'Which operating systems does Acronis EDR support?',
    'Acronis EDR supports Windows, macOS and selected Linux workloads. Feature depth and supported versions differ by operating system, so XcellHost validates every device type and OS version during scoping before rollout.',
  ],
  [
    'How long does EDR deployment take?',
    'A representative pilot can usually begin once tenant access, endpoint inventory and policies are approved. Estate-wide timing depends on device count, software-distribution tools, network access and change windows; XcellHost confirms a deployment plan during onboarding.',
  ],
  [
    'Does EDR replace antivirus?',
    'It can replace a standalone antivirus when the selected protection plan enables Acronis anti-malware and endpoint-protection controls. EDR adds continuous telemetry, investigation and response; XcellHost checks coexistence and removes conflicting endpoint agents safely.',
  ],
  [
    'Can Acronis EDR roll back ransomware changes?',
    'On supported workloads and configurations, Acronis can stop malicious activity and use local cache or integrated backup data for recovery. Rollback and remediation capabilities vary by operating system, licence and backup configuration, so they are verified during solution design.',
  ],
  [
    'Who monitors and responds to EDR alerts?',
    'XcellHost can provide managed monitoring and incident assistance, with 24×7 emergency support for active security incidents. The published SLA targets a 15-minute response for P1 incidents and two hours for initial containment; customer cooperation and environment access remain required.',
  ],
  [
    'Does managed EDR help with CERT-In reporting and DPDPA readiness?',
    'EDR telemetry, alert timelines and incident evidence can help an organisation assess and document an incident. This supports, but does not itself guarantee, compliance with CERT-In reporting or DPDPA security and breach-notification duties; the customer remains responsible for legal assessment and reporting.',
  ],
  [
    'Is Acronis endpoint protection independently tested?',
    'Yes. AV-TEST publishes independent business endpoint-protection results for Acronis Cyber Protect. Buyers should review the current tested version, operating system and individual protection, performance and usability scores before treating a result as applicable to their deployment.',
  ],
];

export const SCRUTINY_EDR_FAQS: Faq[] = [
  [
    'How is Scrutiny EDR priced?',
    'Scrutiny EDR is quoted for the number and type of protected endpoints, deployment model and monitoring scope. XcellHost provides INR billing with GST and separates licence, implementation and managed-service requirements in the proposal.',
  ],
  [
    'Which operating systems does Scrutiny EDR support?',
    'Scrutiny EDR is designed for Windows, macOS and Linux endpoints. Supported versions and response controls can differ by platform, so XcellHost validates the exact operating-system inventory before a pilot or production rollout.',
  ],
  [
    'How long does Scrutiny EDR deployment take?',
    'Deployment starts with a representative pilot, policy tuning and alert validation. The full timeline depends on endpoint count, network reachability, software-distribution tooling and change windows; XcellHost confirms milestones after discovery.',
  ],
  [
    'Does Scrutiny EDR replace antivirus?',
    'EDR and antivirus solve different layers of the problem. Scrutiny adds continuous endpoint visibility, behavioural detection, investigation and response. Whether an existing antivirus remains, is integrated or is replaced is decided during compatibility and policy review.',
  ],
  [
    'Can Scrutiny EDR recover files after ransomware?',
    'Scrutiny can detect ransomware behaviour and provide containment and remediation actions. File or system recovery depends on the affected platform and a separate, tested backup strategy; EDR should not be treated as a substitute for backup.',
  ],
  [
    'Who monitors Scrutiny EDR alerts?',
    'Your security team can operate the platform, or XcellHost can provide managed 24×7 monitoring, triage, incident coordination and reporting from its Mumbai SOC. Responsibilities and response targets are documented in the selected service agreement.',
  ],
  [
    'Does Scrutiny EDR help with CERT-In reporting and DPDPA readiness?',
    'Endpoint timelines, audit trails and incident evidence can support investigation and reporting workflows. They do not automatically make an organisation compliant; the customer remains responsible for deciding whether an event is reportable and for meeting applicable legal duties.',
  ],
  [
    'Can we test Scrutiny EDR before a full rollout?',
    'Yes. XcellHost can scope a representative pilot to validate agent compatibility, detections, response permissions, alert routing and operational ownership before broad deployment.',
  ],
];
