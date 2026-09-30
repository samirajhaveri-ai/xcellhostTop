import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';

const incidents = [
  { level: 'H', text: 'Suspicious PowerShell on LAPTOP-RAVI', result: 'Isolated' },
  { level: 'M', text: 'Phishing link clicked · priya@', result: 'Blocked' },
  { level: 'H', text: 'Ransomware behaviour on FIN-PC-03', result: 'Stopped' },
  { level: 'L', text: 'Outdated Chrome on 4 devices', result: 'Patching' },
];

@Component({
  selector: 'xh-microsoft-defender-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="defender-console" aria-label="Illustrative Microsoft Defender for Business dashboard">
      <div class="console-head">
        <span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <b>Defender · yourcompany.in</b>
        <span class="active-alert"><i></i>1 active alert</span>
      </div>

      <div class="metrics">
        <div><small>PROTECTED DEVICES</small><b>48</b></div>
        <div><small>BLOCKED · 30 DAYS</small><b>{{ blocked() }}</b><em>+12 vs last month</em></div>
        <div><small>AUTO-REMEDIATED</small><b>{{ remediated() }}</b><em>{{ automaticPercent() }}% automatic</em></div>
      </div>

      <div class="platforms" aria-label="Protected devices by platform">
        <div><span>Windows</span><span class="bar"><i style="width:100%"></i></span><b>32</b></div>
        <div><span>macOS</span><span class="bar"><i style="width:25%"></i></span><b>8</b></div>
        <div><span>iOS</span><span class="bar"><i style="width:19%"></i></span><b>6</b></div>
        <div><span>Android</span><span class="bar"><i style="width:6%"></i></span><b>2</b></div>
      </div>

      <div class="incident-list">
        @for (incident of incidents; track incident.text; let i = $index) {
          <div class="incident" [class.active]="i === activeIncident()" [class.resolved]="i < activeIncident()">
            <span class="severity" [class.medium]="incident.level === 'M'" [class.low]="incident.level === 'L'">{{ incident.level }}</span>
            <span class="incident-text">{{ incident.text }}</span>
            <span class="result">{{ incident.result }}</span>
          </div>
        }
      </div>
      <div class="console-foot"><i></i> Incident: {{ incidents[activeIncident()].text }} → {{ incidents[activeIncident()].result.toLowerCase() }} automatically</div>
    </div>

    <div class="console-tags">
      <span>DEFENDER FOR BUSINESS</span>
      <span class="managed"><i></i>Managed from India</span>
    </div>
  `,
  styles: [`
    :host{display:block;box-sizing:border-box;min-width:0;width:100%;max-width:440px;color:#dce7f8;font-family:"IBM Plex Mono",monospace}
    .defender-console{position:relative;box-sizing:border-box;width:100%;min-width:0;padding:14px;border:1px solid rgba(127,178,255,.34);border-radius:15px;background:linear-gradient(155deg,rgba(16,40,79,.97),rgba(4,18,42,.99));box-shadow:0 24px 54px rgba(0,0,0,.42),inset 0 1px rgba(255,255,255,.04);animation:console-float 7s ease-in-out infinite;overflow:hidden}
    .defender-console::before{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(127,178,255,.07) 50%,transparent 70%);transform:translateX(-120%);animation:console-scan 9s ease-in-out infinite;pointer-events:none}
    .console-head{display:flex;align-items:center;gap:8px;padding-bottom:10px;margin-bottom:12px;border-bottom:1px solid rgba(127,178,255,.17);font-size:11px}.console-head>b{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#fff;font-size:11px}
    .window-dots{display:flex;gap:5px}.window-dots i{display:block;width:9px;height:9px;border-radius:50%;background:#ff5f57}.window-dots i:nth-child(2){background:#febc2e}.window-dots i:nth-child(3){background:#28c840}
    .active-alert{display:flex;align-items:center;gap:5px;color:#ffd08a;font-size:10px;white-space:nowrap}.active-alert i,.managed i,.console-foot i{display:inline-block;width:7px;height:7px;border-radius:50%;background:#2ecc71;box-shadow:0 0 0 4px rgba(46,204,113,.1);animation:live-pulse 1.7s ease-in-out infinite}
    .metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;margin-bottom:10px}.metrics>div{min-width:0;min-height:86px;padding:8px 9px;border:1px solid rgba(127,178,255,.16);border-radius:9px;background:rgba(21,101,216,.08)}.metrics small{display:block;min-height:27px;color:#8fa9d3;font-size:9px;line-height:1.35;letter-spacing:.03em;overflow-wrap:anywhere}.metrics b{display:block;color:#fff;font-family:"Sora",sans-serif;font-size:20px;line-height:1.15}.metrics em{display:block;margin-top:2px;color:#7be0a4;font-size:9px;font-style:normal}
    .platforms{display:grid;gap:5px;margin-bottom:11px}.platforms>div{display:grid;grid-template-columns:60px minmax(0,1fr) 22px;align-items:center;gap:7px;font-size:10px;color:#b8cbe8}.platforms .bar{height:6px;overflow:hidden;border-radius:99px;background:rgba(127,178,255,.14)}.platforms .bar i{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,#1565d8,#69b6ff);transform-origin:left;animation:bar-grow 1s ease-out both}.platforms>div:nth-child(2) .bar i{animation-delay:.12s}.platforms>div:nth-child(3) .bar i{animation-delay:.24s}.platforms>div:nth-child(4) .bar i{animation-delay:.36s}.platforms b{text-align:right;color:#fff}
    .incident-list{display:grid;gap:6px}.incident{display:grid;grid-template-columns:20px minmax(0,1fr) auto;align-items:center;gap:7px;min-height:34px;padding:6px 8px;border:1px solid rgba(127,178,255,.15);border-radius:8px;background:rgba(255,255,255,.012);font-size:10px;transition:background .35s,border-color .35s}.incident.active{border-color:rgba(245,165,36,.45);background:rgba(245,165,36,.09)}.incident.resolved{border-color:rgba(46,204,113,.38);background:rgba(46,204,113,.07)}.severity{display:grid;place-items:center;width:19px;height:19px;border-radius:5px;background:#5b1a1c;color:#ffb4b4;font-weight:700}.severity.medium{background:#5a3b0c;color:#ffd08a}.severity.low{background:#12305e;color:#9cc8ff}.incident-text{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.result{color:#9fb8d8;font-size:9px;white-space:nowrap}.console-foot{display:flex;align-items:baseline;gap:5px;min-height:27px;padding-top:11px;color:#7be0a4;font-size:9.5px;line-height:1.45}.console-foot i{flex:none}
    .console-tags{display:flex;justify-content:space-between;gap:8px;padding:10px 3px 0;font-size:10px;letter-spacing:.03em}.console-tags span{display:inline-flex;align-items:center;gap:7px;padding:5px 10px;border:1px solid rgba(127,178,255,.25);border-radius:99px;background:rgba(8,31,68,.6)}.console-tags .managed{white-space:nowrap}
    @keyframes console-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}@keyframes console-scan{0%,25%{transform:translateX(-120%)}55%,100%{transform:translateX(120%)}}@keyframes live-pulse{50%{opacity:.35;box-shadow:0 0 0 7px rgba(46,204,113,0)}}@keyframes bar-grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
    @media(max-width:500px){.defender-console{padding:11px}.metrics>div{padding:7px;min-height:80px}.metrics small{font-size:8px}.metrics b{font-size:18px}.metrics em{font-size:8px}.incident{font-size:9px}.result{font-size:8px}.console-tags{font-size:8px}}
    @media(prefers-reduced-motion:reduce){.defender-console,.defender-console::before,.active-alert i,.managed i,.console-foot i,.platforms .bar i{animation:none}}
  `],
})
export class MicrosoftDefenderHeroComponent {
  private readonly destroyRef = inject(DestroyRef);
  readonly incidents = incidents;
  readonly blocked = signal(321);
  readonly remediated = signal(320);
  readonly activeIncident = signal(1);
  readonly automaticPercent = () => (this.remediated() / this.blocked() * 100).toFixed(1);

  constructor() {
    if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      this.blocked.update(value => value + 1);
      this.remediated.update(value => value + 1);
      this.activeIncident.update(value => (value + 1) % incidents.length);
    }, 3500);
    this.destroyRef.onDestroy(() => window.clearInterval(timer));
  }
}
