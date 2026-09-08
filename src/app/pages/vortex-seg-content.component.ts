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
    :host{display:block;min-width:0;width:100%}.seg-content,.seg-content>section{min-width:0;width:100%}.seg-feature-grid,.seg-cap-grid,.seg-panes,.seg-flow{min-width:0;width:100%}
    .seg-comparison{min-width:0;margin-inline:0;padding:62px 40px;border-radius:24px;background:radial-gradient(circle at 12% 16%,rgba(82,118,255,.14),transparent 28%),linear-gradient(180deg,#f7faff,#eef5ff)}
    .seg-kicker{width:max-content;margin:0 auto 15px;padding:7px 18px;border:1px solid #b9d6ff;border-radius:999px;background:#e3efff;color:#075fd1;font:800 11px var(--mono);letter-spacing:.08em;text-transform:uppercase}
    .seg-comparison h2{max-width:780px;margin:0 auto;color:#071f48;font-size:clamp(28px,3.2vw,42px);line-height:1.1;text-align:center}
    .seg-comparison-intro{max-width:680px;margin:16px auto 34px;color:#526b8e;font-size:16px;line-height:1.65;text-align:center}
    .seg-table-wrap{overflow:auto;border:1px solid #cfdef2;border-radius:20px;background:#fff;box-shadow:0 22px 55px -38px rgba(4,30,66,.65)}
    .seg-comparison table{width:100%;min-width:800px;border-collapse:collapse}
    .seg-comparison th,.seg-comparison td{padding:19px 22px;border-bottom:1px solid #dfe8f5;text-align:left;vertical-align:top}
    .seg-comparison thead th{background:#f8fbff;color:#26415f;font:800 11px var(--mono);letter-spacing:.06em;text-transform:uppercase}
    .seg-comparison thead th:nth-child(2){background:#eaf3ff;color:#075fd1}
    .seg-comparison tbody th{width:18%;color:#071f48;font-size:14px}
    .seg-comparison tbody td{color:#496587;font-size:14px;line-height:1.5}
    .seg-comparison tbody td:nth-child(2){width:33%;border-inline:1px solid #b8d3f6;background:linear-gradient(90deg,#f1f7ff,#f8fbff);color:#082957;font-weight:700}
    .seg-comparison tbody tr:last-child>*{border-bottom:0}
    .seg-feature-grid article{border-color:#d9e7fb!important;background:linear-gradient(145deg,#fff 40%,#f1f7ff)!important;box-shadow:0 14px 35px -28px #075fd1;transition:transform .25s ease,box-shadow .25s ease}
    .seg-feature-grid article:nth-child(2){background:linear-gradient(145deg,#fff 40%,#effbf6)!important}.seg-feature-grid article:nth-child(3){background:linear-gradient(145deg,#fff 40%,#f5f0ff)!important}.seg-feature-grid article:nth-child(4){background:linear-gradient(145deg,#fff 40%,#edf9ff)!important}
    .seg-feature-grid article:hover,.seg-cap-grid article:hover{transform:translateY(-4px);box-shadow:0 18px 38px -25px rgba(5,58,130,.55)}
    .seg-feature-grid i,.seg-cap-grid>article>span{background:linear-gradient(135deg,#6546d7,#176de0)!important;color:#fff!important;box-shadow:0 8px 18px -8px #4229a6}
    .seg-cap-grid article{position:relative;overflow:hidden;border-color:#d9e6f7!important;box-shadow:0 12px 30px -29px #0b438d;transition:transform .25s ease,box-shadow .25s ease}.seg-cap-grid article::after{content:'';position:absolute;right:-20px;bottom:-25px;width:75px;height:75px;border-radius:50%;background:rgba(36,116,226,.07)}.seg-cap-grid article:nth-child(3n+2)>span{background:linear-gradient(135deg,#0a9b86,#16bd7f)!important}.seg-cap-grid article:nth-child(3n)>span{background:linear-gradient(135deg,#7951d8,#a23dd1)!important}
    .seg-panes article{border-color:#dbe5f2!important;box-shadow:0 15px 34px -30px #092b57}.seg-panes h3{background:linear-gradient(110deg,#0b326d,#1475df)!important}.seg-panes .green h3{background:linear-gradient(110deg,#0a7655,#18ad78)!important}.seg-panes .purple h3{background:linear-gradient(110deg,#4d2b9e,#8251dc)!important}
    .seg-flow article{border-color:#d7e5f7!important;background:linear-gradient(180deg,#fff,#f2f7ff)}.seg-flow article:nth-child(3){border-color:#93bfff!important;background:linear-gradient(150deg,#0c4da2,#176de0);box-shadow:0 16px 30px -20px #075fd1}.seg-flow article:nth-child(3) :is(i,b,span){color:#fff}.seg-flow article:nth-child(3) i{background:rgba(255,255,255,.18)}
    .seg-tags span{border-color:#c4dafa!important;background:linear-gradient(180deg,#fff,#edf5ff)}.seg-tags span:nth-child(3n+2){border-color:#cce9dc!important;background:#effbf6}.seg-tags span:nth-child(3n){border-color:#dccdf5!important;background:#f6f1ff}.seg-note{background:linear-gradient(90deg,#f2effb,#f7faff)!important}
    @media(max-width:700px){.seg-comparison{padding:44px 18px}.seg-comparison-intro{font-size:14px}}
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VortexSegContentComponent {
  readonly comparison = [
    ['Platform overview', 'Unified gateway with native data control, DLP and compliance', 'Mature email security platforms often require multiple modules for gateway, DLP, archival and advanced controls'],
    ['Local LLM support', 'Supports local or private LLM paths for content analysis', 'Most secure email gateways focus on cloud-based analysis and provider-managed intelligence'],
    ['M365 & Google Workspace', 'Full API, MX, journaling and routing support', 'Strong cloud-suite integrations are common across established enterprise gateways'],
    ['DLP & OCR scanning', 'Built-in DLP with OCR in attachments and images', 'DLP is common; OCR and advanced content inspection may sit in higher tiers or add-on packs'],
    ['Licensing & TCO', 'Predictable pricing with most features included', 'Feature-rich suites can involve separate licensing for advanced protection, DLP, archival or add-on services'],
    ['Deployment flexibility', 'On-premises, virtual container or private cloud', 'Many gateways favour cloud-native delivery with sensors, connectors or hybrid mailflow options'],
  ];
  readonly capabilities=[['Anti-Phishing','Detect phishing, credential harvesting, malicious URLs and social-engineering threats before delivery.'],['Anti-Spoofing','Prevent spoofing, impersonation and display-name fraud with identity and content verification.'],['Anti-Malware','Multi-engine antivirus and dynamic sandboxing block malware, ransomware and zero-day payloads.'],['Email DLP','Stop sensitive data leaks through content inspection, policy enforcement and classification.'],['OCR Attachment Scanning','Extract text from documents and images to detect hidden sensitive information.'],['SPF, DKIM & DMARC','Validate authenticity while strengthening domain reputation and deliverability.'],['Secure Web Messaging','Send encrypted messages and documents through a branded, password-controlled portal.'],['Archival & Retention','Search, legal hold and retention-policy management for archived email.'],['Compliance & Audit','Immutable logs and reports for SOC 2, ISO and industry requirements.']];
  readonly faqs=[['Do we have to move our mailboxes?','No. Vortex SEG sits in front of your existing platform through MX, API, journaling, transport rules or SMTP relay. Microsoft 365, Google Workspace, Zoho, Zimbra, Exchange and generic SMTP are supported.'],['How disruptive is the cutover?','A single-domain cutover is usually measured in days. We begin in monitor mode, tune legitimate-mail handling, then enforce. SPF, DKIM and DMARC alignment can be completed in the same window.'],['Does the AI send our email to a third party?','Only if you choose a cloud LLM. Local and private options such as Ollama and DeepSeek allow classification and context analysis to remain inside your environment.'],['What happens to an uncertain message?','It is quarantined with a reviewer workflow rather than silently dropped. Sensitive outbound mail can instead be redirected to secure web messaging.'],['Can it archive mail for retention?','Yes. Search, legal hold and retention-policy management are included; the configuration is matched to your sector and required retention period.'],['How does it work with the rest of the platform?','Verdicts, evidence and metadata feed Vortex SOC so email, endpoint and identity activity appear on one incident timeline.']];
  toggleFaq(event:Event):void{(event.currentTarget as HTMLElement).parentElement?.classList.toggle('open');}
}
