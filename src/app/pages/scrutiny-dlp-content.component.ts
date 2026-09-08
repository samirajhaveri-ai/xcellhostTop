import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-scrutiny-dlp-content',
  standalone: true,
  templateUrl: './scrutiny-dlp-content.component.html',
  styleUrl: './scrutiny-dlp-content.component.css',
  styles: [`
    :host{display:grid;gap:36px}
    :host .dlp-overview,:host .dlp-section,:host .dlp-platform{margin:0}
    :host .dlp-overview>.pp-sec,:host .dlp-section>.pp-sec,:host .dlp-platform>.pp-sec{margin-top:0}
    :host .dlp-kicker{display:inline-flex;margin-bottom:10px;padding:6px 11px;border-radius:99px;background:#e9f2ff;color:#1565d8;font:800 11px var(--mono);letter-spacing:.08em;text-transform:uppercase}
    :host .dlp-kicker.light{background:rgba(255,255,255,.14);color:#c9e5ff}
    :host .dlp-story-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:15px;margin-top:24px}
    :host .dlp-story-grid article{padding:22px;border:1px solid #d9e6f5;border-radius:16px;background:linear-gradient(145deg,#fff,#f6faff)}
    :host .dlp-story-grid article>span{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:#1668d7;color:#fff;font:800 11px var(--mono)}
    :host .dlp-story-grid h3{margin:15px 0 7px;color:var(--navy);font-size:16px}:host .dlp-story-grid p{margin:0;color:var(--slate);font-size:13px;line-height:1.6}
    :host .dlp-advanced{padding:32px;border-radius:20px;background:linear-gradient(120deg,#0e3977,#126bca);color:#fff}
    :host .dlp-advanced .pp-sec{color:#fff}:host .dlp-advanced-copy>p{max-width:800px;margin:10px 0 0;color:#d9ebff;line-height:1.7}
    :host .dlp-advanced-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:25px}
    :host .dlp-advanced-grid article{display:flex;gap:13px;padding:18px;border:1px solid rgba(255,255,255,.18);border-radius:14px;background:rgba(255,255,255,.1)}
    :host .dlp-advanced-grid article>span{display:grid;place-items:center;flex:0 0 36px;width:36px;height:36px;border-radius:10px;background:#fff;color:#1565d8;font:900 9px var(--mono)}
    :host .dlp-advanced-grid h3{margin:0 0 5px;color:#fff;font-size:15px}:host .dlp-advanced-grid p{margin:0;color:#dcecff;font-size:12px;line-height:1.55}
    :host .dlp-table-wrap{overflow:hidden;margin-top:23px;border:1px solid #d8e4f2;border-radius:17px;background:#fff;box-shadow:var(--shadow-s)}
    :host table{width:100%;border-collapse:collapse;text-align:left}:host th,:host td{padding:16px 18px;border-bottom:1px solid #e4ebf4;color:var(--slate);font-size:13px;line-height:1.5;vertical-align:top}
    :host thead th{background:#f1f6fc;color:#17375f;font:800 11px var(--mono);letter-spacing:.05em;text-transform:uppercase}:host tbody th{width:23%;color:var(--navy);font-size:14px}
    :host tbody td:nth-child(2){width:36%;background:#f3f8ff;color:#0c3e7a;font-weight:700}:host tr:last-child>*{border-bottom:0}
    @media(max-width:950px){:host .dlp-story-grid,:host .dlp-advanced-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:700px){:host .dlp-table-wrap{overflow-x:auto}:host table{min-width:720px}:host .dlp-advanced{padding:24px 19px}}
    @media(max-width:540px){:host .dlp-story-grid,:host .dlp-advanced-grid{grid-template-columns:1fr}}
    @media(max-width:700px){:host{gap:30px}}
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrutinyDlpContentComponent {
  readonly evidenceCoverage = [
    { title: 'Screen & video evidence', text: 'Capture screenshots, window changes, browser-tab switches and screen video around an incident.' },
    { title: 'Messaging & collaboration', text: 'Follow sensitive text and files across chat, collaboration tools, web messengers and desktop clients.' },
    { title: 'Activity feed & comparison', text: 'Compare activity across time periods and highlight deviations from normal department behaviour.' },
    { title: 'Contacts & liaison graphs', text: 'Map communication relationships across email, chat and calls to expose suspicious data movement.' },
    { title: 'Device & location context', text: 'Add external IP, country, device health, hardware changes and online status to every investigation.' },
    { title: 'Remote administration', text: 'Lock sessions, cancel pending transfers and take controlled response actions from the central console.' },
  ];
  readonly advancedControls = [
    { icon: 'CAM', title: 'Anti-photo protection', text: 'Detect a camera or phone lens and black out sensitive content before it can be photographed.' },
    { icon: 'ID', title: 'Hidden watermarking', text: 'Embed user-specific invisible marks in screenshots and exports so escaped content remains traceable.' },
    { icon: 'AI', title: 'GenAI upload protection', text: 'Inspect prompts, pasted text, screenshots and files before they reach public AI platforms.' },
    { icon: 'LLM', title: 'Private classification', text: 'Classify PII, contracts, finance, HR and source code using local or private LLM deployment paths.' },
    { icon: 'OFF', title: 'Encrypted offline buffer', text: 'Keep enforcing policy and preserve tamper-evident evidence until a remote endpoint reconnects.' },
    { icon: 'Q', title: 'Quarantine vault', text: 'Move risky files into encrypted quarantine with reviewer release controls and a complete audit history.' },
  ];
  readonly comparison = [
    { capability: 'Cross-platform endpoint DLP', scrutiny: 'Native policy coverage across Windows, macOS and Linux.', enterprise: 'Coverage parity can vary by operating system and module.' },
    { capability: 'Anti-photo protection', scrutiny: 'Built-in screen blackout when a camera is detected.', enterprise: 'Often unavailable natively or handled by adjacent controls.' },
    { capability: 'Hidden watermarking', scrutiny: 'User-specific invisible marks on screenshots and exports.', enterprise: 'Often limited to visible labels or separate classification tools.' },
    { capability: 'GenAI governance', scrutiny: 'Prompt, paste, file and browser-upload inspection with private classification.', enterprise: 'Frequently cloud-centred or focused mainly on SaaS controls.' },
    { capability: 'Offline evidence sync', scrutiny: 'Encrypted local storage and tamper-evident sync after reconnect.', enterprise: 'Disconnected evidence support varies in cloud-first platforms.' },
    { capability: 'Deployment model', scrutiny: 'Complete on-premise, private-cloud and hybrid options.', enterprise: 'Many platforms favour SaaS-first or hybrid deployment.' },
  ];
  readonly capabilities = [
    { title: 'Endpoint DLP', text: 'Control USB, print, clipboard, web and app uploads, RDP and screenshots.' },
    { title: 'Device Control', text: 'Allow, make read-only or block removable drives, SD cards and external disks.' },
    { title: 'Print Protection', text: 'Restrict print jobs by content, document category or user identity.' },
    { title: 'Clipboard Protection', text: 'Monitor and block sensitive copy and paste across apps and websites.' },
    { title: 'Web Upload Protection', text: 'Control uploads to personal email, cloud storage, SaaS and social platforms.' },
    { title: 'RDP Data Control', text: 'Block file transfer and clipboard mapping in Remote Desktop sessions.' },
    { title: 'Screenshot Protection', text: 'Block PrintScreen, snipping tools and screen recording.' },
    { title: 'Evidence Capture', text: 'Record screens, window changes, browser tabs and surrounding user activity.' },
    { title: 'Insider Risk Monitoring', text: 'Monitor user behaviour, apps, web activity and device context.' },
    { title: 'Email DLP', text: 'Scan inbound and outbound mail for sensitive data and policy violations.' },
    { title: 'Anti-Photo Protection', text: 'Black out sensitive documents when a camera points at the screen.' },
    { title: 'Hidden Watermarking', text: 'Trace leaked screenshots and exports to an individual user.' },
    { title: 'OCR Content Inspection', text: 'Find sensitive text inside images, scans and documents.' },
    { title: 'GenAI Upload Governance', text: 'Inspect prompts, files and pasted content before public AI upload.' },
    { title: 'DLP Quarantine Vault', text: 'Encrypt risky files and route them through a reviewer workflow.' },
  ];
  readonly faqs = [
    { q: 'Does this make us DPDP compliant?', a: 'It provides the control and evidence layer for discovery, classification, channel restriction and immutable audit trails. Consent, notice, grievance handling and other legal obligations still require process and legal guidance.' },
    { q: 'Will it disrupt how people work?', a: 'Deployment starts in monitor mode. Your team reviews what would have been blocked before enforcement begins with the highest-risk channels and document classes.' },
    { q: 'How does anti-photo protection work?', a: 'The agent detects a camera pointed at the screen and blacks out sensitive content. Hidden user-specific watermarking can also trace an escaped image.' },
    { q: 'What about staff pasting client data into ChatGPT?', a: 'GenAI governance inspects prompts, files and pasted content before upload to ChatGPT, Copilot, Gemini and other tools, then blocks, warns or logs according to policy.' },
    { q: 'Can it run without a cloud connection?', a: 'Yes. A fully on-premise local console and local or private LLM classification are supported. Offline endpoints keep enforcing policy and sync evidence later.' },
    { q: 'How do we prove an incident later?', a: 'Evidence capture records screens, windows, browser tabs and activity around an event. Quarantine workflows and immutable logs support reconstruction and audit.' },
  ];
  toggleFaq(event: Event): void {
    (event.currentTarget as HTMLElement).parentElement?.classList.toggle('open');
  }
}
