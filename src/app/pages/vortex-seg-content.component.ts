import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'xh-vortex-seg-content',
  standalone: true,
  templateUrl: './vortex-seg-content.component.html',
  styleUrl: './vortex-seg-content.component.css',
  styles: [`
    :host .seg-content{gap:36px;margin-bottom:36px}
    :host .seg-content>section{margin:0}
    :host .seg-content>section>.pp-sec{margin-top:0}
    @media(max-width:700px){:host .seg-content{gap:30px;margin-bottom:30px}}
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VortexSegContentComponent {
  readonly capabilities=[['Anti-Phishing','Detect phishing, credential harvesting, malicious URLs and social-engineering threats before delivery.'],['Anti-Spoofing','Prevent spoofing, impersonation and display-name fraud with identity and content verification.'],['Anti-Malware','Multi-engine antivirus and dynamic sandboxing block malware, ransomware and zero-day payloads.'],['Email DLP','Stop sensitive data leaks through content inspection, policy enforcement and classification.'],['OCR Attachment Scanning','Extract text from documents and images to detect hidden sensitive information.'],['SPF, DKIM & DMARC','Validate authenticity while strengthening domain reputation and deliverability.'],['Secure Web Messaging','Send encrypted messages and documents through a branded, password-controlled portal.'],['Archival & Retention','Search, legal hold and retention-policy management for archived email.'],['Compliance & Audit','Immutable logs and reports for SOC 2, ISO and industry requirements.']];
  readonly faqs=[['Do we have to move our mailboxes?','No. Vortex SEG sits in front of your existing platform through MX, API, journaling, transport rules or SMTP relay. Microsoft 365, Google Workspace, Zoho, Zimbra, Exchange and generic SMTP are supported.'],['How disruptive is the cutover?','A single-domain cutover is usually measured in days. We begin in monitor mode, tune legitimate-mail handling, then enforce. SPF, DKIM and DMARC alignment can be completed in the same window.'],['Does the AI send our email to a third party?','Only if you choose a cloud LLM. Local and private options such as Ollama and DeepSeek allow classification and context analysis to remain inside your environment.'],['What happens to an uncertain message?','It is quarantined with a reviewer workflow rather than silently dropped. Sensitive outbound mail can instead be redirected to secure web messaging.'],['Can it archive mail for retention?','Yes. Search, legal hold and retention-policy management are included; the configuration is matched to your sector and required retention period.'],['How does it work with the rest of the platform?','Verdicts, evidence and metadata feed Vortex SOC so email, endpoint and identity activity appear on one incident timeline.']];
  toggleFaq(event:Event):void{(event.currentTarget as HTMLElement).parentElement?.classList.toggle('open');}
}
