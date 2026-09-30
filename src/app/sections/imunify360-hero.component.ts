import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';

const EVENTS = [
  ['WAF', 'SQL injection blocked · /wp-login.php'],
  ['IDS', 'Brute force · 185.x.x.x greylisted'],
  ['PD', 'Malicious PHP process killed'],
  ['MAL', 'Web shell quarantined · uploads/'],
  ['FW', 'Port scan dropped · known attacker'],
  ['BOT', 'Bad bot challenged by WebShield'],
];

@Component({
  selector: 'xh-imunify360-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `  <div class="rad" aria-label="Illustrative Imunify360 activity">
   <div class="rad-h"><span>IMUNIFY360 · web-01.mumbai</span><b>● PROTECTED</b></div>
   <div class="rad-g">
    <div class="scope" aria-hidden="true"><i style="left:18%;top:30%;animation-delay:0.0s"></i><i style="left:70%;top:22%;animation-delay:0.5s"></i><i style="left:76%;top:64%;animation-delay:1.0s"></i><i style="left:28%;top:74%;animation-delay:1.5s"></i><i style="left:52%;top:12%;animation-delay:2.0s"></i><i style="left:12%;top:52%;animation-delay:2.5s"></i><span class="core"><svg class="xg-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg></span></div>
    <div class="rad-k"><div><b>{{ blocked().toLocaleString("en-IN") }}</b><small>attacks blocked today</small></div><div><b>{{ blacklisted() }}</b><small>IPs blacklisted</small></div><div><b>{{ cleaned() }}</b><small>malware files cleaned</small></div><div><b>0</b><small>sites infected</small></div></div>
   </div>
   <ul class="feed" aria-label="Simulated security activity">@for (event of feed(); track event.id) {<li><b>{{ event.type }}</b><span>{{ event.text }}</span><time>{{ event.time }}</time></li>}</ul>
  </div>`,
  styles: [`
    :host{display:block;width:100%;max-width:550px;min-width:0;color:#fff;font-family:var(--body,"IBM Plex Sans",sans-serif)}
    *,*::before,*::after{box-sizing:border-box}
    .xg-ico{fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
    .rad{background:rgba(9,24,52,.85);backdrop-filter:blur(10px);border:1px solid rgba(156,200,255,.22);border-radius:20px;padding:18px;box-shadow:0 30px 70px rgba(0,0,0,.4)}
.rad-h{display:flex;justify-content:space-between;font:700 11.5px var(--mono);letter-spacing:.1em;color:#9CC8FF;margin-bottom:10px}.rad-h b{color:#4ADE80}
.rad-g{display:grid;grid-template-columns:170px 1fr;gap:16px;align-items:center}
.scope{position:relative;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,rgba(74,222,128,.12) 0 30%,transparent 31%),radial-gradient(circle,transparent 0 48%,rgba(74,222,128,.25) 49% 50%,transparent 51%),radial-gradient(circle,transparent 0 73%,rgba(74,222,128,.25) 74% 75%,transparent 76%),#06162F;border:1px solid rgba(74,222,128,.35);overflow:hidden}
.scope:before{content:"";position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,rgba(74,222,128,.45),transparent 25%);animation:sw 3s linear infinite}
@keyframes sw{to{transform:rotate(360deg)}}
.scope i{position:absolute;width:8px;height:8px;border-radius:50%;background:#F87171;box-shadow:0 0 10px #F87171;animation:bl 3s ease-out infinite}
@keyframes bl{0%{opacity:0;transform:scale(.4)}20%{opacity:1;transform:scale(1.3)}70%{opacity:1;transform:scale(1)}100%{opacity:0}}
.scope .core{position:absolute;inset:39%;border-radius:50%;background:#16A34A;display:grid;place-items:center;box-shadow:0 0 22px rgba(74,222,128,.6)}.scope .core svg{width:60%;height:60%;color:#fff}
.rad-k{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.rad-k div{background:rgba(255,255,255,.06);border-radius:12px;padding:10px 12px}.rad-k b{display:block;font:800 22px var(--disp)}.rad-k small{font-size:11.5px;color:#9FB8D8}
.feed{list-style:none;height:120px;overflow:hidden;margin-top:12px}
.feed li{display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center;font-size:12.5px;padding:7px 10px;border-radius:10px;background:rgba(255,255,255,.04);margin-bottom:5px;animation:fi .45s ease}
.feed li b{font:700 10px var(--mono);padding:2px 7px;border-radius:5px;background:rgba(248,113,113,.18);color:#FCA5A5}.feed li time{font:500 11px var(--mono);color:#7F9BC4}
@keyframes fi{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}

    .rad{position:relative;width:100%}
    .rad-h{gap:12px;flex-wrap:wrap;line-height:1.5}
    .rad-h b{white-space:nowrap}
    .rad-g{grid-template-columns:minmax(115px,170px) minmax(0,1fr)}
    .rad-k div{min-width:0}.rad-k small{display:block;line-height:1.45;margin-top:4px}
    .feed{padding:0;margin-bottom:0}.feed li{min-height:34px}.feed li span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    @media(max-width:1100px) and (min-width:901px){.rad{padding:14px}.rad-g{grid-template-columns:120px minmax(0,1fr);gap:10px}.rad-k div{padding:8px}.rad-k b{font-size:20px}.rad-k small{font-size:10px}.feed li{font-size:11px;gap:6px}}
    @media(max-width:480px){.rad-g{grid-template-columns:1fr}.scope{width:155px;margin:auto}.rad-h{font-size:10px}.rad-k small{font-size:11px}.feed li{font-size:11px;gap:6px;padding:7px}.feed li b{padding:2px 4px}}
    @media(prefers-reduced-motion:reduce){.scope::before,.scope i,.feed li{animation:none}.scope i{opacity:1}}
  `],
})
export class Imunify360HeroComponent {
  private readonly destroyRef = inject(DestroyRef);
  readonly blocked = signal(4821);
  readonly blacklisted = signal(137);
  readonly cleaned = signal(12);
  readonly feed = signal<{id:number;type:string;text:string;time:string}[]>([]);
  private eventId = 0;

  constructor() {
    this.pushEvent(5);
    this.pushEvent(0);
    this.pushEvent(1);
    if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const started = performance.now();
    let frame = 0;
    const count = (now: number) => {
      const progress = Math.min(1, (now - started) / 1600);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.blocked.set(Math.round(4821 * eased));
      this.blacklisted.set(Math.round(137 * eased));
      this.cleaned.set(Math.round(12 * eased));
      if (progress < 1) frame = window.requestAnimationFrame(count);
    };
    frame = window.requestAnimationFrame(count);
    const counter = window.setInterval(() => this.blocked.update(value => value + Math.floor(Math.random() * 3)), 1800);
    const feedTimer = window.setInterval(() => this.pushEvent(this.eventId % EVENTS.length), 2400);
    this.destroyRef.onDestroy(() => {
      window.cancelAnimationFrame(frame);
      window.clearInterval(counter);
      window.clearInterval(feedTimer);
    });
  }

  private pushEvent(index: number): void {
    const [type, text] = EVENTS[index];
    const now = new Date();
    const time = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
    const event = {id: this.eventId++, type, text, time};
    this.feed.update(events => [event, ...events].slice(0, 4));
  }
}
