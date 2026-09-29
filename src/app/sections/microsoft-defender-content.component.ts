import { ChangeDetectionStrategy, Component, EventEmitter, Output, signal } from '@angular/core';

type Threat = { name: string; layers: string[]; explanation: string };
type Capability = { key: string; tab: string; eyebrow: string; title: string; description: string; tags: string[]; consoleTitle: string; consoleLines: string[] };

const threats: Threat[] = [
  { name: 'Ransomware', layers: ['asr', 'ngav', 'edr', 'air'], explanation: 'Attack surface reduction blocks common entry points; next-gen antivirus catches new variants by behaviour; EDR isolates affected devices; automated investigation cleans up the incident.' },
  { name: 'Phishing & email compromise', layers: ['ngav', 'edr', 'air'], explanation: 'Defender examines suspicious files and behaviour after a phishing click, then investigates and remediates affected devices. Email protection requires a separate eligible licence.' },
  { name: 'Credential theft', layers: ['asr', 'edr', 'air'], explanation: 'Attack surface reduction helps block credential-stealing techniques, while EDR detects suspicious access and automated investigation follows the evidence.' },
  { name: 'Unpatched software', layers: ['tvm', 'edr'], explanation: 'Vulnerability management identifies exposed software and recommends the patches that matter most; EDR watches for attempts to exploit it.' },
  { name: 'Fileless & living-off-the-land', layers: ['asr', 'ngav', 'edr', 'air'], explanation: 'Behaviour monitoring and attack surface rules detect misuse of legitimate tools; EDR shows the attack timeline and automated investigation responds.' },
];

const layers = [
  { key: 'asr', name: 'Attack surface reduction' },
  { key: 'ngav', name: 'Next-gen antivirus' },
  { key: 'edr', name: 'EDR' },
  { key: 'air', name: 'Auto investigation' },
  { key: 'tvm', name: 'Vulnerability management' },
];

const capabilities: Capability[] = [
  { key: 'edr', tab: 'EDR', eyebrow: 'AI-powered · real-time', title: 'Endpoint detection & response', description: 'EDR records process execution, registry changes, network connections and file activity on devices, so suspicious behaviour can be investigated with an attack timeline.', tags: ['Behavioural analysis', 'Attack timeline', 'Process tree', 'Network activity', 'Device isolation'], consoleTitle: 'Suspicious PowerShell execution', consoleLines: ['Device: LAPTOP-RAVI · User: ravi@yourcompany.in', 'winword.exe  →  powershell.exe  →  cmd.exe', '✓ Device isolated automatically', '✓ Malicious process terminated', '✓ Recommendation: rotate affected credentials'] },
  { key: 'ngav', tab: 'Next-gen AV', eyebrow: 'Cloud-delivered · ML', title: 'Next-generation antivirus', description: 'Cloud-delivered protection uses machine learning and behaviour monitoring to block new malware without waiting for a signature update.', tags: ['Cloud protection', 'Behaviour monitoring', 'Block at first sight', 'Tamper protection'], consoleTitle: 'Real-time protection', consoleLines: ['Invoice_Sept.pdf.exe · Blocked at first sight', 'setup_tally_crack.zip · Quarantined', 'GST_Return.xlsx · Clean', '✓ Protection active across managed devices'] },
  { key: 'asr', tab: 'Attack surface reduction', eyebrow: 'Prevent · harden', title: 'Attack surface reduction', description: 'ASR rules block techniques attackers rely on, including Office macros launching scripts and credential theft. XcellHost tunes the rules around your business apps.', tags: ['Office & macro rules', 'Credential protection', 'Controlled folder access', 'Device control'], consoleTitle: 'Attack surface reduction rules', consoleLines: ['Block Office apps creating child processes · 41', 'Block credential stealing from LSASS · 12', 'Block executable content from email · 27', '✓ Rules monitored and tuned'] },
  { key: 'tvm', tab: 'Vulnerability management', eyebrow: 'Continuous · risk-based', title: 'Threat & vulnerability management', description: 'Discover software, versions and missing patches across devices, prioritised by real exposure so your team can fix the most important weaknesses first.', tags: ['Software inventory', 'Missing patches', 'Risk-based priorities', 'Remediation tracking'], consoleTitle: 'Top security recommendations', consoleLines: ['Update Google Chrome · 12 devices', 'Update Adobe Reader · 7 devices', 'Enable BitLocker · 5 devices', '✓ Exposure score tracked over time'] },
  { key: 'air', tab: 'Auto investigation', eyebrow: 'Automated · at scale', title: 'Automated investigation & remediation', description: 'Defender examines related files, processes and devices when an alert fires, then automatically resolves supported threats so small teams are not buried in alerts.', tags: ['Automatic triage', 'Evidence collection', 'Auto remediation', 'Action centre'], consoleTitle: 'Automated investigation #1187', consoleLines: ['Alert triaged: ransomware behaviour', '14 related files and 3 processes examined', '2 other devices checked · clean', '✓ Malicious files quarantined', '✓ Remediation complete'] },
];

const plans = [
  { name: 'Microsoft Defender for Business', label: 'Endpoint protection for SMBs', price: '₹250', unit: '/user/month', note: 'Paid yearly · GST extra · ₹3,000 per user a year', featured: true, features: ['Protect Windows, macOS, iOS and Android devices', 'Next-generation antivirus', 'AI-powered endpoint detection and response (EDR)', 'Automated investigation and remediation', 'Vulnerability management', 'Up to 300 users, 5 devices per user'] },
  { name: 'Microsoft 365 Business Premium', label: 'Best value · security + productivity', price: '₹1,830', unit: '/user/month', note: 'Paid yearly · GST extra · ₹21,960 per user a year', featured: false, features: ['Everything in Defender for Business, plus:', 'Defender for Office 365 Plan 1', 'Microsoft Intune Plan 1 · device management', 'Microsoft Entra ID Plan 1 · Conditional Access & MFA', 'Office apps, Teams and 1 TB cloud storage', 'Microsoft Purview information protection'] },
  { name: 'Defender for Business Servers', label: 'Add-on for your servers', price: 'Get a quote', unit: '', note: 'Server add-on · confirm INR price and GST', featured: false, features: ['Endpoint protection for Windows and Linux servers', 'Same console and EDR as user devices', 'Requires Defender for Business or Business Premium'] },
];

@Component({
  selector: 'xh-microsoft-defender-content',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="defender-overview" id="overview" aria-labelledby="defender-overview-title">
      <h2 class="section-label" id="defender-overview-title">Overview</h2>
      <p class="overview-copy">Most small businesses still rely on signature antivirus — software that recognises threats it has seen before. Today's attacks use new ransomware variants, stolen credentials and legitimate admin tools, which signatures miss. Defender for Business watches behaviour instead, and acts on it automatically. XcellHost handles the part that trips most teams up: licences, onboarding every device, tuning attack surface reduction rules to your applications, and responding when Defender raises an incident — any hour, in Hindi or English.</p>

      <div class="quick-answer">
        <div>
          <span class="eyebrow">Quick answer · updated September 2026</span>
          <h3>What is Microsoft Defender for Business?</h3>
          <p>Microsoft Defender for Business is Microsoft's endpoint security for organisations with up to 300 users. It combines next-generation antivirus, endpoint detection and response (EDR), attack surface reduction, vulnerability management, and automated investigation and remediation across Windows, macOS, iOS and Android devices. In India, Microsoft lists it at ₹250 per user per month on an annual commitment, excluding GST. Each user licence covers up to five devices, and it is also included in Microsoft 365 Business Premium.</p>
        </div>
        <div>
          <span class="eyebrow">Key takeaways</span>
          <ul class="takeaways">
            <li>Behaviour-based EDR catches what signature antivirus misses</li>
            <li>Attack surface reduction closes common ransomware entry points</li>
            <li>Many alerts are investigated and fixed automatically</li>
            <li>₹250/user/month for up to five devices, or included in Business Premium</li>
            <li>XcellHost deploys and monitors your protection 24×7</li>
          </ul>
          <div class="best-for"><span>Best for:</span><b>SMBs up to 300 users</b><b>CA, legal & finance firms</b><b>Manufacturing & distribution</b><b>Healthcare & clinics</b></div>
        </div>
      </div>
    </section>

    <section class="content-section" id="layers" aria-labelledby="defender-threats-title">
      <h2 class="section-heading" id="defender-threats-title">The threats Indian SMBs face — <em>and which layer stops each</em></h2>
      <p class="section-intro">Ransomware, phishing and credential theft target small businesses as well as large ones. Pick an attack to see how Defender's layers respond.</p>
      <div class="threat-layout">
        <div class="threat-choices" role="group" aria-label="Choose a threat">
          @for (threat of threats; track threat.name; let i = $index) {
            <button type="button" [class.selected]="selectedThreat() === i" [attr.aria-pressed]="selectedThreat() === i" (click)="selectedThreat.set(i)"><span class="warning-mark">!</span>{{ threat.name }}</button>
          }
          <button type="button" class="assessment-button" (click)="quoteRequested.emit('Free security assessment')">Get a free security assessment →</button>
        </div>
        <div class="layer-panel" aria-live="polite">
          <div class="layer-list">
            @for (layer of layers; track layer.key) {
              <div [class.enabled]="threats[selectedThreat()].layers.includes(layer.key)"><span class="layer-icon">{{ threats[selectedThreat()].layers.includes(layer.key) ? '✓' : '◇' }}</span><strong>{{ layer.name }}</strong><small>{{ threats[selectedThreat()].layers.includes(layer.key) ? '✓ STOPS IT' : '—' }}</small></div>
            }
          </div>
          <p>{{ threats[selectedThreat()].explanation }}</p>
        </div>
      </div>
    </section>

    <section class="content-section" id="capabilities" aria-labelledby="defender-capabilities-title">
      <h2 class="section-heading" id="defender-capabilities-title">What Defender does <em>that antivirus cannot</em></h2>
      <p class="section-intro">Traditional antivirus recognises known threats by signature. Defender adds behavioural analysis to catch new attacks, fileless malware and misuse of legitimate tools.</p>
      <div class="capability-tabs" role="tablist" aria-label="Defender capabilities">
        @for (capability of capabilities; track capability.key; let i = $index) {
          <button type="button" role="tab" [class.selected]="selectedCapability() === i" [attr.aria-selected]="selectedCapability() === i" (click)="selectedCapability.set(i)">{{ capability.tab }}</button>
        }
      </div>
      <div class="capability-card" role="tabpanel">
        <div class="capability-copy">
          <span class="eyebrow orange">{{ capabilities[selectedCapability()].eyebrow }}</span>
          <h3>{{ capabilities[selectedCapability()].title }}</h3>
          <p>{{ capabilities[selectedCapability()].description }}</p>
          <div class="capability-tags">@for (tag of capabilities[selectedCapability()].tags; track tag) { <span>{{ tag }}</span> }</div>
          <button type="button" class="blue-button" (click)="quoteRequested.emit(capabilities[selectedCapability()].title)">Deploy {{ capabilities[selectedCapability()].tab }} for my business →</button>
        </div>
        <div class="console-preview">
          <div class="preview-head"><b>⚠ {{ capabilities[selectedCapability()].consoleTitle }}</b><span>HIGH</span></div>
          @for (line of capabilities[selectedCapability()].consoleLines; track line) { <div class="preview-line" [class.success]="line.startsWith('✓')">{{ line }}</div> }
        </div>
      </div>
    </section>

    <section class="content-section pricing-section" id="ppPlans" aria-labelledby="defender-pricing-title">
      <div class="pricing-heading"><span>Microsoft India list prices · annual commitment</span><h2 id="defender-pricing-title">Defender for Business <em>pricing</em></h2><p>Buy it on its own, or get it inside Microsoft 365 Business Premium. XcellHost deployment and 24×7 monitoring are quoted separately.</p></div>
      <div class="pricing-grid">
        @for (plan of plans; track plan.name) {
          <article class="pricing-card" [class.featured]="plan.featured">
            @if (plan.featured) { <span class="ribbon">Most chosen by SMBs</span> }
            <span class="eyebrow">{{ plan.label }}</span>
            <h3>{{ plan.name }}</h3>
            <div class="price">{{ plan.price }}<small>{{ plan.unit }}</small></div>
            <p class="price-note">{{ plan.note }}</p>
            <button type="button" [class.orange-button]="plan.featured" [class.blue-button]="!plan.featured" (click)="quoteRequested.emit(plan.name)">Get protected →</button>
            <ul>@for (feature of plan.features; track feature) { <li>{{ feature }}</li> }</ul>
          </article>
        }
      </div>
      <p class="pricing-source">Indicative Microsoft list prices, excluding GST. Confirm your final licence and managed service quote with XcellHost. <a href="https://www.microsoft.com/en-in/security/business/endpoint-security/microsoft-defender-business" target="_blank" rel="noopener noreferrer">Microsoft pricing</a></p>
    </section>
  `,
  styles: [`
    :host{display:block;color:#071f43;font-family:"IBM Plex Sans",Arial,sans-serif;padding:1px 0 56px}
    *{box-sizing:border-box}button{font:inherit;cursor:pointer}.defender-overview{padding-top:2px}.section-label{margin:0 0 16px;color:#075bea;font:700 14px/1.3 "IBM Plex Mono",monospace;letter-spacing:.16em;text-transform:uppercase}.overview-copy{max-width:1120px;margin:0;color:#233d62;font-size:16px;line-height:1.75}.quick-answer{display:grid;grid-template-columns:1.15fr .85fr;gap:28px;margin-top:25px;padding:26px 30px;border:1px solid #d5e3f8;border-left:4px solid #1565d8;border-radius:12px;background:#fff;box-shadow:0 12px 28px rgba(14,46,90,.06)}.eyebrow{display:block;color:#0860dc;font:700 10px/1.4 "IBM Plex Mono",monospace;letter-spacing:.12em;text-transform:uppercase}.quick-answer h3{margin:8px 0 10px;font-size:22px;line-height:1.25}.quick-answer p{margin:0;color:#526789;font-size:14px;line-height:1.7}.takeaways{display:grid;gap:10px;margin:10px 0 14px;padding:0;list-style:none}.takeaways li{position:relative;padding-left:20px;color:#273e5f;font-size:13px;line-height:1.45}.takeaways li::before,.pricing-card li::before{content:'✓';position:absolute;left:0;color:#16a34a;font-weight:700}.best-for{display:flex;align-items:center;flex-wrap:wrap;gap:6px;font-size:11px}.best-for span{font-weight:700;color:#526789}.best-for b{padding:4px 9px;border-radius:99px;background:#e9f1ff;color:#0958c9;font-weight:600}
    .content-section{margin-top:58px}.section-heading{margin:0 0 12px;text-align:center;font-size:clamp(24px,2.5vw,34px);line-height:1.2;letter-spacing:-.025em}.section-heading em,.pricing-heading em{color:#1260d8;font-style:normal}.section-intro{max-width:850px;margin:0 0 19px;color:#667b99;font-size:14px;line-height:1.6}.threat-layout{display:grid;grid-template-columns:minmax(230px,.8fr) minmax(0,1.2fr);align-items:stretch;gap:20px}.threat-choices{display:grid;align-content:start;gap:7px}.threat-choices>button:not(.assessment-button){display:flex;align-items:center;gap:10px;min-height:44px;padding:7px 11px;border:1px solid #d6e3f6;border-radius:9px;background:#fff;color:#142e52;text-align:left;font-size:13px;font-weight:650}.threat-choices>button.selected{border-color:#1565d8;background:#eaf2ff}.warning-mark{display:grid;place-items:center;flex:none;width:24px;height:24px;border-radius:50%;background:#fee2e2;color:#dc2626;font-weight:800}.assessment-button,.orange-button{border:0;border-radius:8px;background:linear-gradient(110deg,#ff9632,#ff7900);color:#fff;font-weight:700}.assessment-button{min-height:43px;padding:9px 14px}.layer-panel{padding:22px;border-radius:14px;background:linear-gradient(145deg,#102a52,#06172e);color:#dce7f8}.layer-list{display:grid;gap:7px}.layer-list>div{display:grid;grid-template-columns:30px minmax(0,1fr) auto;align-items:center;gap:10px;min-height:42px;padding:7px 9px;border:1px solid rgba(127,178,255,.18);border-radius:8px;opacity:.58}.layer-list>div.enabled{opacity:1;border-color:rgba(46,204,113,.55);background:rgba(46,204,113,.11)}.layer-icon{display:grid;place-items:center;width:27px;height:27px;border-radius:7px;background:#174173;color:#9cc8ff}.enabled .layer-icon{background:#16a34a;color:#fff}.layer-list strong{font-size:13px}.layer-list small{color:#7be0a4;font:700 10px "IBM Plex Mono",monospace;white-space:nowrap}.layer-panel p{margin:15px 0 0;font-size:13px;line-height:1.6}
    .capability-tabs{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:7px;margin:0 0 12px}.capability-tabs button{min-height:40px;padding:7px 5px;border:1px solid #d5e3f7;border-radius:8px;background:#fff;color:#173659;font-size:12px;font-weight:700}.capability-tabs button.selected{border-color:#1565d8;background:#1565d8;color:#fff}.capability-card{display:grid;grid-template-columns:1fr 1fr;gap:24px;padding:25px;border:1px solid #d5e3f7;border-radius:15px;background:#fff;box-shadow:0 12px 28px rgba(14,46,90,.06)}.capability-copy{display:flex;flex-direction:column;align-items:flex-start}.eyebrow.orange{color:#ef7e12}.capability-copy h3{margin:8px 0 9px;font-size:23px;line-height:1.25}.capability-copy p{margin:0;color:#526789;font-size:14px;line-height:1.65}.capability-tags{display:flex;flex-wrap:wrap;gap:7px;margin:14px 0 18px}.capability-tags span{padding:4px 8px;border:1px solid #d5e3f7;border-radius:99px;background:#f7faff;color:#1762c6;font-size:11px}.blue-button{border:0;border-radius:8px;background:linear-gradient(110deg,#2176e9,#1253bf);color:#fff;font-weight:700}.capability-copy .blue-button{margin-top:auto;padding:10px 15px;font-size:12px}.console-preview{display:flex;flex-direction:column;justify-content:center;gap:8px;min-height:230px;padding:19px;border:1px solid rgba(127,178,255,.2);border-radius:12px;background:linear-gradient(145deg,#0e2a52,#06162e);color:#dce7f8;font:600 11px/1.5 "IBM Plex Mono",monospace}.preview-head{display:flex;justify-content:space-between;gap:12px;margin-bottom:4px;color:#fff}.preview-head span{color:#ffb4b4}.preview-line{padding:6px 8px;border:1px solid rgba(127,178,255,.15);border-radius:5px}.preview-line.success{color:#7be0a4;border-color:rgba(46,204,113,.25)}
    .pricing-heading{max-width:780px;margin:0 auto 29px;text-align:center}.pricing-heading>span{color:#1461d5;font:700 10px "IBM Plex Mono",monospace;letter-spacing:.13em;text-transform:uppercase}.pricing-heading h2{margin:9px 0 8px;font-size:clamp(27px,3vw,38px);letter-spacing:-.03em}.pricing-heading p{margin:0;color:#667b99;font-size:14px;line-height:1.6}.pricing-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));align-items:start;gap:18px}.pricing-card{position:relative;display:flex;flex-direction:column;min-width:0;padding:23px;border:1px solid #d5e3f7;border-radius:16px;background:#fff;box-shadow:0 10px 24px rgba(14,46,90,.045)}.pricing-card.featured{border-color:#1565d8;box-shadow:0 16px 35px rgba(21,101,216,.12)}.ribbon{position:absolute;top:-13px;left:20px;padding:4px 10px;border-radius:6px;background:#ff8615;color:#fff;font-size:10px;font-weight:700}.pricing-card h3{margin:7px 0 0;font-size:18px;line-height:1.3}.price{margin:13px 0 3px;font-size:31px;font-weight:800;letter-spacing:-.035em}.price small{margin-left:3px;color:#526789;font-size:12px;font-weight:500;letter-spacing:0}.price-note{min-height:33px;margin:0 0 13px;color:#667b99;font-size:11px;line-height:1.4}.pricing-card button{width:100%;min-height:39px;padding:9px 12px;font-size:12px}.pricing-card ul{display:grid;gap:10px;margin:16px 0 0;padding:0;list-style:none}.pricing-card li{position:relative;padding-left:19px;font-size:12px;line-height:1.5}.pricing-source{margin:15px 0 0;color:#667b99;font-size:11px;line-height:1.5}.pricing-source a{color:#1260d8;text-decoration:underline}
    @media(max-width:900px){.quick-answer,.threat-layout,.capability-card{grid-template-columns:1fr}.pricing-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.capability-tabs{grid-template-columns:repeat(3,minmax(0,1fr))}.content-section{margin-top:48px}}
    @media(max-width:600px){:host{padding-bottom:40px}.quick-answer{padding:20px;gap:19px}.pricing-grid{grid-template-columns:1fr}.capability-tabs{grid-template-columns:repeat(2,minmax(0,1fr))}.section-heading{text-align:left}.section-intro{font-size:13px}.layer-panel{padding:16px}.capability-card{padding:18px}.pricing-card{padding:20px}}
  `],
})
export class MicrosoftDefenderContentComponent {
  @Output() readonly quoteRequested = new EventEmitter<string>();
  readonly threats = threats;
  readonly layers = layers;
  readonly capabilities = capabilities;
  readonly plans = plans;
  readonly selectedThreat = signal(0);
  readonly selectedCapability = signal(0);
}
