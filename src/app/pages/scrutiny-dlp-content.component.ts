import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-scrutiny-dlp-content',
  standalone: true,
  templateUrl: './scrutiny-dlp-content.component.html',
  styleUrl: './scrutiny-dlp-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrutinyDlpContentComponent {
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
