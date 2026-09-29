import { ChangeDetectionStrategy, Component, EventEmitter, Output, computed, signal } from '@angular/core';

const rollout = [
  { time: 'Hour 0–4', title: '1. Licence & tenant setup', description: 'Activate Defender licences, configure the security portal and admin roles, and connect a SIEM if needed.' },
  { time: 'Hour 4–24', title: '2. Device onboarding', description: 'Enrol Windows, macOS, iOS and Android devices through the method that fits your environment.' },
  { time: 'Hour 24–48', title: '3. Policy & ASR tuning', description: 'Configure antivirus, EDR and attack surface rules. Test rules in audit mode before enforcing them.' },
  { time: 'Day 2–30', title: '4. Go live + 30-day care', description: 'Monitor protection, tune false positives and hand over a security posture report.' },
];

const reasons = [
  { icon: '⚡', title: 'Complex setup — done for you', description: 'We handle policies, ASR tuning, Intune integration and onboarding every device.' },
  { icon: '▣', title: 'India-specific compliance', description: 'We configure audit logging and prepare reports for your security and compliance reviews.' },
  { icon: '₹', title: 'INR billing with GST', description: 'One invoice in rupees for licences and services, with the applicable GST details.' },
  { icon: '◷', title: '24×7 India support in Hindi & English', description: 'Our team investigates incidents and helps you take action when an alert matters.' },
];

const comparisons = [
  { capability: 'Endpoint detection & response (EDR)', defender: '✓', windows: '—', traditional: 'Often a paid add-on' },
  { capability: 'Automated investigation & remediation', defender: '✓ AI-powered', windows: '—', traditional: 'Varies' },
  { capability: 'Attack surface reduction rules', defender: '✓ Centrally managed', windows: 'Configured per PC', traditional: 'Varies' },
  { capability: 'Threat & vulnerability management', defender: '✓ Continuous', windows: '—', traditional: 'Periodic scans, if any' },
  { capability: 'Windows, macOS, iOS & Android', defender: '✓ All four', windows: 'Windows only', traditional: 'Varies by product' },
  { capability: 'Microsoft 365 integration', defender: '✓ Native', windows: 'Partial', traditional: 'Plug-ins' },
  { capability: 'Central security dashboard', defender: '✓ Defender portal', windows: '—', traditional: 'Vendor console' },
  { capability: 'Compliance documentation', defender: '✓ With XcellHost', windows: '—', traditional: 'Varies by provider' },
  { capability: 'INR billing with GST invoice', defender: '✓ With XcellHost', windows: 'Included in Windows', traditional: 'Varies' },
];

const companionServices = [
  { name: 'Microsoft Defender (all products)', description: 'Endpoint, identity, email, SaaS and cloud protection.', href: 'https://www.microsoft.com/en-in/security/business/microsoft-defender', external: true },
  { name: 'Cyber Resilience', description: 'Ransomware recovery for data, endpoints and SaaS.', href: '/cyber-resilience' },
  { name: 'Microsoft 365 Backup', description: 'Point-in-time backup for Microsoft 365 data.', href: '/microsoft-365-backup' },
  { name: 'M365 Security Posture', description: 'Baselines and drift alerts for Microsoft 365 settings.', href: '/microsoft-security-posture-management' },
  { name: 'Entra ID Backup', description: 'Restore users, groups and Conditional Access.', href: '/entra-id-backup' },
  { name: 'Defender for Individuals', description: 'Family device security with Microsoft 365 plans.', href: 'https://www.microsoft.com/en-in/microsoft-365/microsoft-defender-for-individuals', external: true },
];

const resources = [
  { category: 'Guide', title: 'What is Microsoft Defender for Business? A complete guide for Indian SMBs' },
  { category: 'Checklist', title: 'Replacing your antivirus with Defender: a step-by-step plan' },
  { category: 'Blog', title: 'Top benefits of Defender for Business for small teams' },
  { category: 'Report', title: 'DPDP Act: what your endpoint security must log and report' },
];

@Component({
  selector: 'xh-microsoft-defender-followup',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="estimate" aria-labelledby="defender-estimate-title">
      <div class="estimate-controls">
        <h2 class="visually-hidden" id="defender-estimate-title">Estimate your Defender licence cost</h2>
        <span class="eyebrow">Plan</span>
        <div class="plan-options" role="group" aria-label="Choose a Defender plan">
          <button type="button" [class.selected]="selectedPlan() === 'mdb'" [attr.aria-pressed]="selectedPlan() === 'mdb'" (click)="selectedPlan.set('mdb')">Defender for Business<small>₹250/user</small></button>
          <button type="button" [class.selected]="selectedPlan() === 'bp'" [attr.aria-pressed]="selectedPlan() === 'bp'" (click)="selectedPlan.set('bp')">Business Premium<small>₹1,830/user · includes Microsoft 365</small></button>
        </div>
        <label class="range-field" for="defender-users"><span>Users <output>{{ users() }}</output></span><input id="defender-users" type="range" min="1" max="300" [value]="users()" (input)="users.set(+$any($event.target).value)" /></label>
        <label class="range-field" for="defender-servers"><span>Servers <output>{{ servers() }}</output></span><input id="defender-servers" type="range" min="0" max="30" [value]="servers()" (input)="servers.set(+$any($event.target).value)" /></label>
        <label class="range-field" for="defender-antivirus"><span>Current antivirus cost per device per year <output>{{ currency(antivirusYearly()) }}</output></span><input id="defender-antivirus" type="range" min="0" max="3000" step="50" [value]="antivirusYearly()" (input)="antivirusYearly.set(+$any($event.target).value)" /></label>
        <p class="range-help">Choose your user count and plan to estimate Microsoft licence costs. Server add-ons and XcellHost services are quoted separately.</p>
      </div>
      <div class="estimate-summary" aria-live="polite">
        <span class="eyebrow">Your estimate</span>
        <div class="estimate-line"><span>{{ selectedPlan() === 'mdb' ? 'Defender for Business' : 'Business Premium' }} × {{ users() }} users</span><b>{{ currency(monthlyLicences()) }}</b></div>
        @if (servers() > 0) { <div class="estimate-line"><span>Defender for Business Servers × {{ servers() }}</span><b>Quote separately</b></div> }
        <div class="estimate-line"><span>Devices covered, up to 5 per user</span><b>{{ users() * 5 }}</b></div>
        <div class="estimate-total"><span>Monthly licence list price<br><small>Paid yearly · excludes server add-ons</small></span><strong>{{ currency(monthlyLicences()) }}</strong></div>
        <div class="estimate-year">{{ currency(monthlyLicences() * 12) }} a year · GST extra</div>
        <p class="estimate-note">@if (selectedPlan() === 'mdb') { Your current antivirus is about {{ currency(currentAntivirusMonthly()) }} a month for one device per user. Defender also adds EDR, attack surface reduction and automated investigation. } @else { Business Premium adds email protection, Intune, Entra ID and Microsoft 365 apps. Compare it with what you pay for Microsoft 365 today. }</p>
        <button type="button" class="orange-button" (click)="quoteRequested.emit('Estimate: ' + users() + ' users, ' + servers() + ' servers, ' + (selectedPlan() === 'mdb' ? 'Defender for Business' : 'Business Premium'))">Get my quote →</button>
        <small>Indicative Microsoft India list prices; GST and managed services extra.</small>
      </div>
    </section>

    <section class="lower-section" id="how" aria-labelledby="defender-rollout-title">
      <h2 class="center-title" id="defender-rollout-title">Protected <em>in 48 hours</em></h2>
      <p class="section-intro">Defender setup can be heavy going for smaller teams. XcellHost handles licences, policies, device onboarding and ASR tuning. Timings below show a typical SMB rollout.</p>
      <ol class="rollout-grid">@for (step of rollout; track step.title) { <li><span class="step-icon">{{ $index + 1 }}</span><span class="step-time">{{ step.time }}</span><h3>{{ step.title }}</h3><p>{{ step.description }}</p></li> }</ol>
    </section>

    <section class="lower-section" aria-labelledby="defender-why-title">
      <h2 class="center-title" id="defender-why-title">Why businesses choose <em>XcellHost</em> for Defender</h2>
      <div class="why-grid">@for (reason of reasons; track reason.title) { <article><span class="why-icon">{{ reason.icon }}</span><h3>{{ reason.title }}</h3><p>{{ reason.description }}</p></article> }</div>
    </section>

    <section class="data-band" aria-labelledby="defender-india-title">
      <h2 id="defender-india-title">Data stays in India. Evidence stays on file.</h2>
      <p>We select Microsoft's India data location where offered, configure audit logging and incident workflows, and prepare documentation for your security team and auditors.</p>
      <div class="data-stats"><div><b>48 h</b><span>typical SMB deployment</span></div><div><b>30 days</b><span>post-go-live tuning</span></div><div><b>300</b><span>users · 5 devices each</span></div><div><b>24×7</b><span>XcellHost support</span></div></div>
    </section>

    <section class="lower-section" aria-labelledby="defender-compare-title">
      <h2 class="center-title" id="defender-compare-title">Defender for Business <em>vs alternatives</em></h2>
      <div class="comparison-scroll"><table><thead><tr><th scope="col">Capability</th><th scope="col" class="featured-col">Defender for Business</th><th scope="col">Built-in Windows antivirus</th><th scope="col">Traditional signature antivirus</th></tr></thead><tbody>@for (row of comparisons; track row.capability) { <tr><th scope="row">{{ row.capability }}</th><td class="featured-col">{{ row.defender }}</td><td>{{ row.windows }}</td><td>{{ row.traditional }}</td></tr> }</tbody></table></div>
      <p class="table-note">General comparison; features of individual antivirus products vary by vendor and edition.</p>
    </section>

    <section class="lower-section" id="cases" aria-labelledby="defender-case-title">
      <h2 class="section-label" id="defender-case-title">Case study</h2>
      <article class="case-card">
        <header><span class="case-avatar">CA</span><div><h3>Ransomware stopped on one PC before it reached the file server</h3><small>Chartered accountancy firm · Professional services · Pune <span class="case-tag">Illustrative case study</span></small></div></header>
        <div class="case-columns"><div><h4>Challenge</h4><p>35 staff shared a file server with client records and relied on traditional antivirus. A staff member opened a fraudulent “GST notice” attachment during filing season.</p></div><div><h4>What we did</h4><p>In this illustrative scenario, ASR blocked the script, EDR flagged suspicious behaviour and isolated the PC, and the response team reviewed the incident.</p></div><div class="case-results"><div><b>1</b><span>PC affected</span></div><div><b>10 min</b><span>illustrative SOC response</span></div><div><b>₹0</b><span>illustrative ransom loss</span></div></div></div>
      </article>
    </section>

    <section class="lower-section" aria-labelledby="defender-alongside-title">
      <h2 class="center-title" id="defender-alongside-title">Works best <em>alongside</em></h2>
      <div class="companion-grid">@for (service of companionServices; track service.name) { <a [href]="service.href" [attr.target]="service.external ? '_blank' : null" [attr.rel]="service.external ? 'noopener noreferrer' : null"><span class="companion-icon">◇</span><span><strong>{{ service.name }}</strong><small>{{ service.description }}</small></span></a> }</div>
    </section>

    <section class="lower-section" aria-labelledby="defender-resources-title">
      <h2 class="section-label" id="defender-resources-title">Microsoft Defender resources</h2>
      <div class="resources-grid">@for (resource of resources; track resource.title) { <button type="button" (click)="quoteRequested.emit('Resource request: ' + resource.title)"><span>{{ resource.category }}</span><strong>{{ resource.title }}</strong><small>Request a copy →</small></button> }</div>
    </section>
  `,
  styles: [`
    :host{display:block;color:#071f43;font-family:"IBM Plex Sans",Arial,sans-serif}*{box-sizing:border-box}button{font:inherit;cursor:pointer}.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.eyebrow,.section-label{color:#075bea;font:700 11px/1.4 "IBM Plex Mono",monospace;letter-spacing:.13em;text-transform:uppercase}.section-label{margin:0 0 18px;font-size:14px}.orange-button{border:0;border-radius:8px;background:linear-gradient(110deg,#ff9632,#ff7900);color:#fff;font-weight:700}
    .estimate{display:grid;grid-template-columns:1.15fr .85fr;gap:24px;align-items:stretch;margin:28px 0 58px;padding:26px;border:1px solid #d5e3f8;border-radius:14px;background:#fff;box-shadow:0 12px 28px rgba(14,46,90,.06)}.estimate-controls{min-width:0}.plan-options{display:flex;gap:8px;margin:10px 0 20px}.plan-options button{min-width:0;padding:10px 13px;border:1px solid #d5e3f8;border-radius:8px;background:#fff;color:#12345d;text-align:left;font-size:12px;font-weight:700}.plan-options button.selected{border-color:#1565d8;background:#eaf2ff}.plan-options small{display:block;margin-top:3px;color:#667b99;font-size:10px;font-weight:500}.range-field{display:block;margin:0 0 17px}.range-field>span{display:flex;justify-content:space-between;gap:10px;color:#18345a;font-size:12px;font-weight:700}.range-field output{color:#1260d8}.range-field input{display:block;width:100%;margin-top:8px;accent-color:#1565d8}.range-help{max-width:540px;margin:2px 0 0;color:#7184a0;font-size:11px;line-height:1.55}.estimate-summary{display:flex;flex-direction:column;min-width:0;padding:23px;border-radius:12px;background:linear-gradient(145deg,#102a52,#06172e);color:#e5efff}.estimate-summary .eyebrow{color:#9cc8ff;margin-bottom:13px}.estimate-line{display:flex;justify-content:space-between;gap:14px;padding:7px 0;border-bottom:1px dashed rgba(170,199,237,.18);font-size:11px}.estimate-line b{color:#fff;text-align:right;white-space:nowrap}.estimate-total{display:flex;justify-content:space-between;align-items:center;gap:15px;margin-top:18px}.estimate-total span{font-size:13px;font-weight:700}.estimate-total small{color:#9db3d2;font-size:10px;font-weight:400}.estimate-total strong{font-size:29px;white-space:nowrap}.estimate-year{margin:4px 0 10px;color:#7be0a4;font-size:11px;font-weight:700}.estimate-note{margin:0 0 13px;color:#ffce86;font-size:11px;line-height:1.55}.estimate-summary .orange-button{min-height:38px;margin-top:auto}.estimate-summary>small{margin-top:8px;color:#8fa9d3;font-size:9px}
    .lower-section{margin:0 0 56px}.center-title{margin:0 0 13px;text-align:center;font-size:clamp(24px,2.3vw,32px);line-height:1.22;letter-spacing:-.025em}.center-title em{color:#1260d8;font-style:normal}.section-intro{max-width:870px;margin:0 0 22px;color:#667b99;font-size:14px;line-height:1.55}.rollout-grid,.why-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;padding:0;list-style:none}.rollout-grid li,.why-grid article{position:relative;min-width:0;padding:19px;border:1px solid #d5e3f8;border-radius:13px;background:#fff;box-shadow:0 7px 17px rgba(14,46,90,.035)}.rollout-grid li{border-top:2px solid #ff8c1a}.step-icon{display:grid;place-items:center;width:34px;height:34px;margin-bottom:12px;border-radius:9px;background:#e9f1ff;color:#1260d8;font-weight:800}.step-time{position:absolute;top:20px;right:17px;color:#ff8615;font:700 10px "IBM Plex Mono",monospace}.rollout-grid h3,.why-grid h3{margin:0 0 7px;font-size:14px;line-height:1.4}.rollout-grid p,.why-grid p{margin:0;color:#667b99;font-size:12px;line-height:1.55}.why-icon{display:grid;place-items:center;width:36px;height:36px;margin-bottom:12px;border-radius:9px;background:#ff8c1a;color:#fff;font-size:17px;font-weight:700}
    .data-band{min-height:215px;margin:0 0 56px;padding:30px 34px;border-radius:14px;background:linear-gradient(90deg,rgba(3,23,52,.98),rgba(3,23,52,.8) 55%,rgba(3,23,52,.25)),url('/assets/images/microsoft-defender-data-security.jpg') center/cover;color:#fff}.data-band h2{max-width:560px;margin:0 0 9px;color:#fff;font-size:27px;line-height:1.2}.data-band p{max-width:610px;margin:0;color:#fff;font-size:13px;line-height:1.55}.data-stats{display:flex;flex-wrap:wrap;gap:26px;margin-top:19px}.data-stats div{display:flex;flex-direction:column;gap:3px}.data-stats b{color:#ffb45c;font-size:21px}.data-stats span{font-size:10px}
    .comparison-scroll{overflow-x:auto;border:1px solid #d5e3f8;border-radius:12px}.comparison-scroll table{width:100%;min-width:740px;border-collapse:collapse;font-size:12px}.comparison-scroll th,.comparison-scroll td{padding:11px 12px;border-bottom:1px solid #d5e3f8;text-align:left;line-height:1.4}.comparison-scroll thead th{background:#eff5ff;color:#17345a;font-weight:700}.comparison-scroll thead .featured-col{background:#1565d8;color:#fff}.comparison-scroll tbody th{width:32%;font-weight:700}.comparison-scroll tbody .featured-col{background:#f3f8ff;color:#087640;font-weight:700}.comparison-scroll tr:last-child th,.comparison-scroll tr:last-child td{border-bottom:0}.table-note{margin:9px 0 0;color:#7184a0;font-size:10px}
    .case-card{padding:22px;border:1px solid #d5e3f8;border-radius:14px;background:#fff;box-shadow:0 8px 20px rgba(14,46,90,.05)}.case-card header{display:flex;align-items:center;gap:12px;margin-bottom:18px}.case-avatar{display:grid;place-items:center;flex:none;width:39px;height:39px;border-radius:50%;background:#1565d8;color:#fff;font-weight:800}.case-card h3{margin:0 0 4px;font-size:17px}.case-card header small{color:#667b99;font-size:11px}.case-tag{display:inline-block;margin-left:5px;padding:2px 6px;border:1px dashed #b5c9e4;border-radius:4px;color:#557193}.case-columns{display:grid;grid-template-columns:1fr 1fr 190px;gap:22px}.case-columns h4{margin:0 0 6px;color:#1260d8;font:700 10px "IBM Plex Mono",monospace;letter-spacing:.1em;text-transform:uppercase}.case-columns p{margin:0;color:#526789;font-size:12px;line-height:1.6}.case-results{display:grid;gap:10px;padding:14px;border:1px solid #d5e3f8;border-radius:9px;background:#f3f8ff}.case-results div{display:flex;flex-direction:column}.case-results b{color:#1260d8;font-size:22px}.case-results span{color:#526789;font-size:10px}
    .companion-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.companion-grid a{display:flex;gap:10px;align-items:center;min-width:0;padding:12px;border:1px solid #d5e3f8;border-radius:10px;color:inherit;text-decoration:none}.companion-grid a:hover{border-color:#1565d8;box-shadow:0 8px 18px rgba(21,101,216,.08)}.companion-icon{display:grid;place-items:center;flex:none;width:31px;height:31px;border-radius:7px;background:#0c2955;color:#fff;font-size:19px}.companion-grid strong{display:block;font-size:12px}.companion-grid small{display:block;margin-top:3px;color:#667b99;font-size:10px;line-height:1.35}.resources-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.resources-grid button{display:flex;flex-direction:column;gap:8px;min-height:120px;padding:15px;border:1px solid #d5e3f8;border-radius:10px;background:#fff;text-align:left}.resources-grid button:hover{border-color:#1565d8}.resources-grid span{color:#ff8615;font:700 10px "IBM Plex Mono",monospace;text-transform:uppercase}.resources-grid strong{font-size:12px;line-height:1.45}.resources-grid small{margin-top:auto;color:#1260d8;font-size:11px}
    @media(max-width:960px){.estimate{grid-template-columns:1fr}.rollout-grid,.why-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.case-columns{grid-template-columns:1fr 1fr}.case-results{grid-column:1/-1;grid-template-columns:repeat(3,1fr)}.companion-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.resources-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:600px){.estimate{padding:17px}.plan-options{flex-direction:column}.estimate-summary{padding:18px}.estimate-total strong{font-size:24px}.rollout-grid,.why-grid,.companion-grid,.resources-grid,.case-columns{grid-template-columns:1fr}.case-results{grid-column:auto}.data-band{padding:23px;background-position:65% center}.data-band h2{font-size:23px}.data-stats{gap:15px}.data-stats div{width:calc(50% - 8px)}.center-title{text-align:left}.lower-section{margin-bottom:44px}}
  `],
})
export class MicrosoftDefenderFollowupComponent {
  @Output() readonly quoteRequested = new EventEmitter<string>();
  readonly rollout = rollout;
  readonly reasons = reasons;
  readonly comparisons = comparisons;
  readonly companionServices = companionServices;
  readonly resources = resources;
  readonly selectedPlan = signal<'mdb' | 'bp'>('mdb');
  readonly users = signal(35);
  readonly servers = signal(2);
  readonly antivirusYearly = signal(900);
  readonly monthlyLicences = computed(() => this.users() * (this.selectedPlan() === 'mdb' ? 250 : 1830));
  readonly currentAntivirusMonthly = computed(() => Math.round(this.users() * this.antivirusYearly() / 12));
  currency(value: number): string { return '₹' + value.toLocaleString('en-IN'); }
}
