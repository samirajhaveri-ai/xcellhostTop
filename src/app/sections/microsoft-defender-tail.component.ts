import { ChangeDetectionStrategy, Component } from '@angular/core';

const controls = [
  { name: 'Attack prevention', platform: 'Next-gen antivirus and attack surface rules', service: 'Policy rollout and tuning' },
  { name: 'Endpoint detection', platform: 'Behaviour-based EDR alerts and device isolation', service: 'Incident review and escalation' },
  { name: 'Vulnerability management', platform: 'Software inventory and security recommendations', service: 'Prioritised remediation guidance' },
  { name: 'Investigation', platform: 'Automated investigation and remediation', service: 'Follow-up on incidents that need people' },
  { name: 'Audit evidence', platform: 'Incident history and security reports', service: 'Review-ready handover and reporting' },
  { name: 'Server coverage', platform: 'Available with a separate server add-on', service: 'Licence and deployment planning' },
];

const assurances = [
  { icon: '◷', title: '24×7 monitoring', description: 'Alerts stay visible after the initial rollout.', number: '01' },
  { icon: '▣', title: 'Guided deployment', description: 'A plan for licences, devices and security policies.', number: '02' },
  { icon: '✦', title: 'Policy tuning', description: 'Rules are tested around the apps your team uses.', number: '03' },
  { icon: '₹', title: 'Clear INR quotes', description: 'Licences and managed services are shown separately.', number: '04' },
  { icon: '↗', title: 'Response support', description: 'Help investigating and acting on important incidents.', number: '05' },
  { icon: '✓', title: 'Evidence together', description: 'Security activity and next steps in one place.', number: '06' },
];

const priorities = [
  { initials: 'IT', title: 'Clear device visibility', description: 'See which devices are protected, where alerts need attention and what action was taken.' },
  { initials: 'OP', title: 'Less work for small teams', description: 'Automated investigation helps reduce repetitive triage, with people available for escalations.' },
  { initials: 'MG', title: 'Useful reporting', description: 'Keep incident history and security recommendations ready for management reviews.' },
];

const questions = [
  { question: 'How many devices can one licence protect?', answer: 'Microsoft Defender for Business supports up to five client devices per licensed user, for organisations with up to 300 users.' },
  { question: 'Can you migrate us from another antivirus?', answer: 'Yes. XcellHost can plan a phased rollout, test policies and help remove or reconfigure the previous antivirus where required.' },
  { question: 'Which devices are supported?', answer: 'Microsoft lists Windows, macOS, iOS and Android client device support. The exact onboarding steps depend on the platform and your management setup.' },
  { question: 'Are servers included?', answer: 'Server protection requires a separate Defender for Business servers add-on. Ask us for the current INR licence and deployment quote.' },
  { question: 'Is Defender included in Business Premium?', answer: 'Yes. Microsoft 365 Business Premium includes Defender for Business; it also includes additional email, identity and device-management capabilities.' },
  { question: 'Does standalone Defender protect email?', answer: 'The standalone plan focuses on endpoint security. Microsoft 365 Business Premium includes Defender for Office 365 Plan 1 for additional email protection.' },
  { question: 'What happens when an alert appears?', answer: 'Defender can investigate and remediate many threats automatically. XcellHost can review escalations and coordinate the next response steps under your managed service.' },
  { question: 'Can we get an annual quote with GST?', answer: 'Yes. We can prepare an INR quote showing licence costs, server add-ons where needed, managed service fees and applicable GST.' },
];

@Component({
  selector: 'xh-microsoft-defender-tail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="security-section" aria-labelledby="defender-security-title">
      <h2 class="section-label" id="defender-security-title">Security &amp; compliance — Microsoft Defender</h2>
      <p class="section-intro">Security works best when tools and response are planned together. Microsoft Defender provides the endpoint controls; XcellHost helps configure them, respond to incidents and keep the evidence organised.</p>
      <div class="security-table-wrap"><table><thead><tr><th scope="col">Control</th><th scope="col">Microsoft Defender</th><th scope="col">XcellHost service</th></tr></thead><tbody>@for (control of controls; track control.name) { <tr><th scope="row">{{ control.name }}</th><td>{{ control.platform }}</td><td>{{ control.service }}</td></tr> }</tbody></table></div>
      <p class="table-note">Features depend on your Microsoft licence and the managed service you choose. Server coverage requires a separate add-on.</p>
    </section>

    <section class="assurance-section" aria-labelledby="defender-assurance-title">
      <h2 class="section-label" id="defender-assurance-title">Why XcellHost for Defender</h2>
      <div class="assurance-grid">@for (item of assurances; track item.title) { <article><span class="assurance-icon">{{ item.icon }}</span><div><h3>{{ item.title }}</h3><p>{{ item.description }}</p></div><small>{{ item.number }}</small></article> }</div>
    </section>

    <section class="priorities-section" aria-labelledby="defender-priorities-title">
      <h2 class="section-label" id="defender-priorities-title">What teams need from endpoint protection</h2>
      <div class="priority-grid">@for (item of priorities; track item.title) { <article><span class="priority-avatar">{{ item.initials }}</span><h3>{{ item.title }}</h3><p>{{ item.description }}</p></article> }</div>
    </section>

    <section class="faq-section" id="defender-faq" aria-labelledby="defender-faq-title">
      <h2 class="section-label" id="defender-faq-title">Frequently asked questions</h2>
      <div class="faq-grid">@for (item of questions; track item.question; let i = $index) { <details [attr.open]="i === 0 ? '' : null"><summary>{{ item.question }}<span aria-hidden="true">+</span></summary><p>{{ item.answer }}</p></details> }</div>
      <p class="faq-source">Licence and device limits: <a href="https://www.microsoft.com/en-in/security/business/endpoint-security/microsoft-defender-business" target="_blank" rel="noopener noreferrer">Microsoft Defender for Business</a>.</p>
    </section>
  `,
  styles: [`
    :host{display:block;padding:0 0 50px;color:#071f43;font-family:"IBM Plex Sans",Arial,sans-serif}*{box-sizing:border-box}.section-label{margin:0 0 15px;color:#075bea;font:700 12px/1.4 "IBM Plex Mono",monospace;letter-spacing:.13em;text-transform:uppercase}.section-intro{max-width:1010px;margin:0 0 16px;color:#526789;font-size:14px;line-height:1.65}.security-section,.assurance-section,.priorities-section{margin-bottom:50px}.security-table-wrap{overflow-x:auto}.security-table-wrap table{width:100%;min-width:660px;border-collapse:collapse;font-size:12px}.security-table-wrap th,.security-table-wrap td{padding:11px 12px;border-bottom:1px dashed #d5e3f7;text-align:left;line-height:1.45}.security-table-wrap thead th{color:#1260d8;font:700 10px "IBM Plex Mono",monospace;text-transform:uppercase}.security-table-wrap tbody th{width:24%;font-weight:700}.security-table-wrap tbody td:nth-child(2){width:39%;color:#1260d8}.table-note{margin:10px 0 0;color:#7184a0;font-size:10px;line-height:1.45}
    .assurance-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;padding:16px;border-radius:13px;background:linear-gradient(125deg,#0d2a59,#06499c);color:#fff}.assurance-grid article{display:grid;grid-template-columns:39px minmax(0,1fr) 22px;align-items:center;gap:10px;min-width:0;min-height:86px;padding:11px;border-right:1px solid rgba(255,255,255,.16);border-bottom:1px solid rgba(255,255,255,.16)}.assurance-grid article:nth-child(3n){border-right:0}.assurance-grid article:nth-last-child(-n+3){border-bottom:0}.assurance-icon{display:grid;place-items:center;width:35px;height:35px;border:1px solid rgba(144,194,255,.5);border-radius:50%;color:#9ecbff;font-size:18px}.assurance-grid h3{margin:0 0 4px;color:#fff;font-size:13px}.assurance-grid p{margin:0;color:#c9d9f2;font-size:10px;line-height:1.45}.assurance-grid small{align-self:end;color:rgba(255,255,255,.2);font-size:20px;font-weight:800}
    .priority-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.priority-grid article{min-height:184px;padding:20px;border:1px solid #d5e3f8;border-radius:14px;background:#fff;box-shadow:0 10px 20px rgba(14,46,90,.05);text-align:center}.priority-avatar{display:grid;place-items:center;width:38px;height:38px;margin:0 auto 11px;border-radius:50%;background:#4a4cde;color:#fff;font-weight:800}.priority-grid h3{margin:0 0 7px;font-size:15px}.priority-grid p{max-width:350px;margin:0 auto;color:#526789;font-size:12px;line-height:1.6}
    .faq-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-items:start;gap:10px}.faq-grid details{min-width:0;border:1px solid #d5e3f8;border-radius:9px;background:#fff}.faq-grid details[open]{border-color:#1565d8;box-shadow:0 7px 17px rgba(21,101,216,.08)}.faq-grid summary{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:49px;padding:12px 14px;cursor:pointer;list-style:none;color:#142f55;font-size:12px;font-weight:700}.faq-grid summary::-webkit-details-marker{display:none}.faq-grid summary span{display:grid;place-items:center;flex:none;width:19px;height:19px;border-radius:50%;background:#e9f1ff;color:#1565d8;font-size:14px}.faq-grid details[open] summary span{background:#1565d8;color:#fff;transform:rotate(45deg)}.faq-grid p{margin:0;padding:0 14px 14px;color:#526789;font-size:12px;line-height:1.6}.faq-source{margin:11px 0 0;color:#7184a0;font-size:10px}.faq-source a{color:#1260d8}
    @media(max-width:850px){.assurance-grid,.priority-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.assurance-grid article:nth-child(3n){border-right:1px solid rgba(255,255,255,.16)}.assurance-grid article:nth-child(2n){border-right:0}.assurance-grid article:nth-last-child(-n+3){border-bottom:1px solid rgba(255,255,255,.16)}.assurance-grid article:nth-last-child(-n+2){border-bottom:0}}
    @media(max-width:600px){.assurance-grid,.priority-grid,.faq-grid{grid-template-columns:1fr}.assurance-grid article,.assurance-grid article:nth-child(3n){border-right:0;border-bottom:1px solid rgba(255,255,255,.16)}.assurance-grid article:last-child{border-bottom:0}.security-section,.assurance-section,.priorities-section{margin-bottom:38px}}
  `],
})
export class MicrosoftDefenderTailComponent {
  readonly controls = controls;
  readonly assurances = assurances;
  readonly priorities = priorities;
  readonly questions = questions;
}
