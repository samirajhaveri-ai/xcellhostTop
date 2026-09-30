import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, output, signal } from '@angular/core';
const LAYERS = [
  [
    "net",
    "Network firewall",
    "Edge",
    "Blocks known-bad IPs and port scans using a global reputation feed and automatic greylisting — attackers never reach the web server."
  ],
  [
    "shield",
    "WebShield",
    "Traffic",
    "Challenges suspicious visitors and bad bots, and absorbs HTTP floods before they consume server resources."
  ],
  [
    "waf",
    "Web application firewall",
    "Requests",
    "ModSecurity rulesets tuned for WordPress, Joomla and popular CMSs block SQL injection, XSS and exploit payloads."
  ],
  [
    "ids",
    "Intrusion prevention",
    "Logins",
    "Watches server logs to stop brute-force attacks on SSH, FTP, mail and CMS admin panels."
  ],
  [
    "pd",
    "Proactive Defence",
    "Execution",
    "Monitors PHP scripts as they run and kills malicious behaviour — even from malware no scanner has seen before."
  ],
  [
    "mal",
    "Malware scanner & cleanup",
    "Files",
    "Real-time and scheduled scans find web shells, backdoors and infected files — and clean them automatically."
  ],
  [
    "kc",
    "KernelCare & HardenedPHP",
    "Core",
    "Rebootless kernel patching and security-patched legacy PHP versions close holes without downtime."
  ]
];
const ATTACKS = [
  [
    "sqli",
    "SQL injection",
    "code",
    "waf",
    "Malicious query pattern matched by the WAF — request blocked with a 403, logged in the Imunify360 dashboard."
  ],
  [
    "brute",
    "Brute-force login",
    "lock",
    "ids",
    "Repeated failed logins to wp-admin detected — attacker IP greylisted and then blacklisted."
  ],
  [
    "ddos",
    "Bot / DoS flood",
    "pulse",
    "shield",
    "WebShield challenges the flood — real visitors pass, bot traffic is dropped at the edge."
  ],
  [
    "scan",
    "Port scan from known attacker",
    "eye",
    "net",
    "Source IP is on the global reputation feed — connection dropped by the network firewall."
  ],
  [
    "zero",
    "Zero-day PHP exploit",
    "bolt",
    "pd",
    "Unknown script tried to spawn a shell — Proactive Defence killed the process before it ran."
  ],
  [
    "shell",
    "Uploaded web shell",
    "doc",
    "mal",
    "Real-time scanner flagged the uploaded file as a web shell — quarantined and cleaned automatically."
  ]
];
const PLANS = [
  {
    "key": "solo",
    "limit": 1,
    "price": "₹499",
    "name": "CloudLinux OS Solo + Imunify360"
  },
  {
    "key": "p30",
    "limit": 30,
    "price": "₹1,199",
    "name": "CloudLinux OS Shared Pro + Imunify360"
  },
  {
    "key": "p250",
    "limit": 250,
    "price": "₹1,399",
    "name": "CloudLinux OS Shared Pro + Imunify360"
  },
  {
    "key": "unl",
    "limit": 0,
    "price": "₹1,699",
    "name": "CloudLinux OS Shared Pro + Imunify360"
  }
];
@Component({selector:'xh-imunify360-content',standalone:true,templateUrl:'./imunify360-content.component.html',styleUrl:'./imunify360-content.component.css',changeDetection:ChangeDetectionStrategy.OnPush})
export class Imunify360ContentComponent {
  readonly planRequested = output<string>();
  readonly accounts = signal(30);
  readonly recommended = computed(() => PLANS.find(plan => plan.limit === 0 || this.accounts() <= plan.limit)!);
  readonly layerIndex = signal(0);
  readonly activeLayer = computed(() => LAYERS[this.layerIndex()]);
  readonly result = signal('');
  readonly running = signal(false);
  readonly hitLayer = signal('');
  readonly boltTop = signal(-6);
  private timers: ReturnType<typeof setTimeout>[] = [];
  constructor() { inject(DestroyRef).onDestroy(() => this.clearTimers()); }
  setAccounts(event: Event): void { this.accounts.set(Number((event.target as HTMLInputElement).value)); }
  requestPlan(event: Event): void { event.preventDefault(); this.planRequested.emit((event.currentTarget as HTMLElement).dataset['plan'] ?? 'Imunify360 consultation'); }
  private clearTimers(): void { this.timers.forEach(timer => clearTimeout(timer)); this.timers = []; }
  selectLayer(key: string): void { this.clearTimers(); this.running.set(false); this.hitLayer.set(''); this.result.set(''); this.layerIndex.set(LAYERS.findIndex(layer => layer[0] === key)); }
  simulate(key: string): void {
    const attack = ATTACKS.find(item => item[0] === key);
    if (!attack) return;
    this.clearTimers(); this.result.set(''); this.hitLayer.set(''); this.running.set(false); this.boltTop.set(-6);
    const index = LAYERS.findIndex(layer => layer[0] === attack[3]);
    const finish = () => { this.layerIndex.set(index); this.hitLayer.set(attack[3]); this.running.set(false); this.result.set(attack[4]); };
    if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { finish(); return; }
    this.running.set(true);
    this.timers.push(setTimeout(() => this.boltTop.set(index * 6 + 1.5), 30));
    this.timers.push(setTimeout(finish, 950));
  }
}
