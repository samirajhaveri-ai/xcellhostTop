import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-acronis-mdr-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="soc-console">
      <header class="console-head">
        <span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <b>XcellHost SOC · live shift</b>
        <span class="monitoring"><i></i> Monitoring</span>
      </header>
      <div class="shift-clock"><b>02:47:10</b><span>IST · SATURDAY · ANALYST: R. IYER</span></div>
      <div class="incident-list">
        <div class="incident-row alert"><span class="state">!</span><p>Alert: suspicious remote-access tool <em>RECEPTION-PC</em></p><small>HIGH</small></div>
        <div class="incident-row active"><span class="state">◆</span><p>Analyst verdict: malicious</p><small>02:49</small></div>
        <div class="incident-row resolved"><span class="state">✓</span><p>Device isolated automatically</p><small>02:49</small></div>
        <div class="incident-row resolved"><span class="state">✓</span><p>Encrypted files rolled back from backup</p><small>03:02</small></div>
        <div class="incident-row resolved"><span class="state">✓</span><p>Vulnerable tool patched on 14 devices</p><small>03:21</small></div>
        <div class="incident-row resolved"><span class="state">✓</span><p>Client notified · report filed</p><small>03:26</small></div>
      </div>
      <div class="console-footer"><span><i></i> 1,284 endpoints watched</span><b>0 open incidents</b></div>
    </div>
    <div class="console-tags">
      <span class="acronis-brand"><small>Powered by</small><svg viewBox="0 0 28 28" aria-hidden="true"><rect x="9.5" y="2.5" width="15.5" height="15.5" rx="2" fill="#4d78b2"/><rect x="3" y="9" width="16" height="16" rx="2" fill="#244879"/><path d="M6.6 20.6 11 11.3l4.4 9.3M8.5 17.6h5" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><b>Acronis</b></span>
      <span class="always-live"><i></i> 24×7×365</span>
    </div>
  `,
  styles: [`
    :host{display:flex;flex-direction:column;justify-content:center;width:100%;max-width:440px;padding:8px 4px;color:#dce7f8;font-family:"IBM Plex Mono",monospace}
    .soc-console{position:relative;width:100%;padding:13px;border:1px solid rgba(127,178,255,.34);border-radius:14px;background:linear-gradient(155deg,rgba(16,40,79,.98),rgba(4,18,42,.99));box-shadow:0 22px 52px rgba(0,0,0,.4),inset 0 1px rgba(255,255,255,.04);animation:console-float 7s ease-in-out infinite}
    .console-head{display:flex;align-items:center;gap:8px;padding-bottom:9px;border-bottom:1px solid rgba(127,178,255,.17);font-size:10px}.console-head>b{flex:1;min-width:0;overflow:hidden;color:#fff;font-size:10.5px;text-overflow:ellipsis;white-space:nowrap}
    .window-dots{display:flex;gap:5px}.window-dots i{width:9px;height:9px;border-radius:50%;background:#ff5f57}.window-dots i:nth-child(2){background:#febc2e}.window-dots i:nth-child(3){background:#28c840}
    .monitoring{display:flex;align-items:center;gap:5px;color:#7be0a4;font-size:8px;white-space:nowrap}.monitoring i,.always-live i,.console-footer i{display:inline-block;width:7px;height:7px;border-radius:50%;background:#2ecc71;box-shadow:0 0 0 4px rgba(46,204,113,.1);animation:live-pulse 1.6s ease-in-out infinite}
    .shift-clock{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:10px 1px 8px}.shift-clock b{color:#fff;font-family:"Sora",sans-serif;font-size:24px;letter-spacing:.02em}.shift-clock span{color:#8fa9d3;font-size:7.5px;text-align:right}
    .incident-list{display:grid;gap:5px}.incident-row{display:grid;grid-template-columns:20px minmax(0,1fr) auto;align-items:center;gap:7px;min-height:30px;padding:5px 8px;border:1px solid rgba(127,178,255,.13);border-radius:8px;background:rgba(255,255,255,.015);font-size:8.5px;transition:.3s}.incident-row .state{display:grid;place-items:center;width:18px;height:18px;border-radius:5px;color:#9cc8ff;background:#12305e;font-style:normal;font-weight:700}.incident-row p{min-width:0;overflow:hidden;color:#dce7f8;text-overflow:ellipsis;white-space:nowrap}.incident-row p em{color:#8fa9d3;font-style:normal}.incident-row small{color:#8fa9d3;font-size:7.5px}.incident-row.alert{border-color:rgba(239,68,68,.35);background:rgba(239,68,68,.06)}.incident-row.alert .state{color:#ffb4b4;background:#5b1a1c}.incident-row.alert small{color:#ff9c9c}.incident-row.active{border-color:rgba(245,165,36,.32)}.incident-row.active .state{color:#ffd08a;background:#5a3b0c}.incident-row.resolved{border-color:rgba(46,204,113,.22);background:rgba(46,204,113,.035)}.incident-row.resolved .state{color:#7be0a4;background:#0f3d24}.incident-row.resolved small{color:#7be0a4}
    .console-footer{display:flex;justify-content:space-between;gap:12px;margin-top:9px;color:#7be0a4;font-size:8px}.console-footer span{display:flex;align-items:center;gap:6px}.console-footer b{color:#9cc8ff;font-weight:600}
    .console-tags{display:flex;align-items:center;justify-content:space-between;width:100%;padding:10px 7px 0}.acronis-brand{display:flex;align-items:center;gap:7px}.acronis-brand small{color:#9fb0cc;font-family:"IBM Plex Sans",sans-serif;font-size:9px}.acronis-brand svg{width:23px;height:23px}.acronis-brand b{color:#fff;font-family:"IBM Plex Sans",sans-serif;font-size:19px}.always-live{display:flex;align-items:center;gap:7px;padding:5px 10px;border:1px solid rgba(127,178,255,.25);border-radius:999px;background:rgba(8,31,68,.58);color:#cfe0f7;font-size:8px;letter-spacing:.04em}
    @keyframes console-float{0%,100%{transform:translateY(0) rotateX(1deg) rotateY(-1deg)}50%{transform:translateY(-8px) rotateX(0) rotateY(1deg)}}@keyframes live-pulse{50%{opacity:.35;box-shadow:0 0 0 7px rgba(46,204,113,0)}}
    @media(max-width:560px){:host{padding:8px 0}.soc-console{padding:11px}.shift-clock b{font-size:21px}.shift-clock span{font-size:7px}.incident-row{font-size:8px}.acronis-brand small{display:none}}@media(prefers-reduced-motion:reduce){.soc-console,.monitoring i,.always-live i,.console-footer i{animation:none}}
  `],
})
export class AcronisMdrHeroComponent {}
