import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'xh-vortex-seg-content',
  standalone: true,
  templateUrl: './vortex-seg-content.component.html',
  styleUrls: ['./scrutiny-dlp-content.component.css', './scrutiny-edr-content.component.css'],
  styles: [`
    :host .dlp-content{gap:42px;padding-bottom:40px}
    :host .dlp-content>section:nth-last-child(2){padding-top:18px;scroll-margin-top:120px}
    :host .dlp-content>section:nth-last-child(2) h2{margin-bottom:22px;font-size:clamp(30px,3.1vw,42px)}
    :host .dlp-faq{gap:12px;margin-top:0}
    :host .dlp-faq article{border-color:#cbdcf2;border-radius:14px;transition:border-color .2s,box-shadow .2s}
    :host .dlp-faq article:hover{border-color:#83ade4;box-shadow:0 7px 20px rgba(18,67,128,.08)}
    :host .dlp-faq button{align-items:center;min-height:58px;padding:16px 18px;font-size:15px}
    :host .dlp-faq button span{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:#edf4ff;color:var(--blue);transition:transform .2s,background .2s}
    :host .dlp-faq article.open button span{transform:rotate(45deg);background:var(--blue);color:#fff}
    :host .dlp-faq article.open p{padding:0 58px 18px 18px}
    :host .dlp-contact{display:grid;grid-template-columns:minmax(0,1fr) auto;min-height:0;padding:34px 36px;gap:28px;margin-top:0}
    :host .dlp-contact h2{max-width:760px;margin:8px 0 12px;font-size:clamp(30px,3vw,42px);line-height:1.12}
    :host .dlp-contact p{margin:0;max-width:760px}
    :host .dlp-contact>div:last-child{display:grid;align-content:center;gap:10px;min-width:205px}
    :host .dlp-contact .btn{justify-content:center;width:100%}
    @media(max-width:760px){:host .dlp-content{gap:34px}:host .dlp-content>section:nth-last-child(2){padding-top:8px}:host .dlp-contact{grid-template-columns:1fr;padding:26px 20px}:host .dlp-contact>div:last-child{display:flex;min-width:0}:host .dlp-contact .btn{width:auto;flex:1 1 170px}:host .dlp-faq article.open p{padding-right:18px}}
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VortexSegContentComponent {
  readonly capabilities=[['Anti-Phishing','Detect phishing, credential harvesting, malicious URLs and social-engineering threats before delivery.'],['Anti-Spoofing','Prevent spoofing, impersonation and display-name fraud with identity and content verification.'],['Anti-Malware','Multi-engine antivirus and dynamic sandboxing block malware, ransomware and zero-day payloads.'],['Email DLP','Stop sensitive data leaks through content inspection, policy enforcement and classification.'],['OCR Attachment Scanning','Extract text from documents and images to detect hidden sensitive information.'],['SPF, DKIM & DMARC','Validate authenticity while strengthening domain reputation and deliverability.'],['Secure Web Messaging','Send encrypted messages and documents through a branded, password-controlled portal.'],['Archival & Retention','Search, legal hold and retention-policy management for archived email.'],['Compliance & Audit','Immutable logs and reports for SOC 2, ISO and industry requirements.']];
  readonly faqs=[['Do we have to move our mailboxes?','No. Vortex SEG sits in front of your existing platform through MX, API, journaling, transport rules or SMTP relay. Microsoft 365, Google Workspace, Zoho, Zimbra, Exchange and generic SMTP are supported.'],['How disruptive is the cutover?','A single-domain cutover is usually measured in days. We begin in monitor mode, tune legitimate-mail handling, then enforce. SPF, DKIM and DMARC alignment can be completed in the same window.'],['Does the AI send our email to a third party?','Only if you choose a cloud LLM. Local and private options such as Ollama and DeepSeek allow classification and context analysis to remain inside your environment.'],['What happens to an uncertain message?','It is quarantined with a reviewer workflow rather than silently dropped. Sensitive outbound mail can instead be redirected to secure web messaging.'],['Can it archive mail for retention?','Yes. Search, legal hold and retention-policy management are included; the configuration is matched to your sector and required retention period.'],['How does it work with the rest of the platform?','Verdicts, evidence and metadata feed Vortex SOC so email, endpoint and identity activity appear on one incident timeline.']];
  toggleFaq(event:Event):void{(event.currentTarget as HTMLElement).parentElement?.classList.toggle('open');}
}
