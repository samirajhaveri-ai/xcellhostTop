import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type Experience = 'st' | 'fr' | 'ex';

@Component({
  selector: 'xh-careers-overview-sections',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './careers-overview-sections.component.html',
  styleUrl: './careers-overview-sections.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareersOverviewSectionsComponent {
  readonly values = [
    { icon: 'trending_up', title: 'Fast growth', body: 'We are a lean team, so ownership comes early. Engineers who show they can run a shift, a migration or a customer get the next responsibility quickly.', note: 'Visible progress, early ownership' },
    { icon: 'target', title: 'Real-world challenges', body: 'NOC and SOC incidents, data-centre and cloud migrations, Tally on Cloud, Microsoft 365 tenants, SSL and PKI — production systems for real Indian businesses, not lab exercises.', note: 'Production, not practice' },
    { icon: 'menu_book', title: 'Continuous learning', body: 'Learn on the job from certified engineers, with support for certifications such as Microsoft, AWS and CEH / CompTIA tracks when they fit your role.', note: 'Support for certifications' },
    { icon: 'group', title: 'Collaborative culture', body: 'NOC, SOC, cloud, sales and support sit close together. Problems get solved across desks, hand-overs are written down, and questions are welcome.', note: 'One team across shifts' },
    { icon: 'lightbulb', title: 'Innovation', body: 'We use AI and automation to cut repetitive work — scripted checks, faster triage, smarter reports — and we want people who will find the next thing to automate.', note: 'AI & automation' },
  ] as const;

  readonly moments = [
    { art: 'learn', icon: 'developer_board', title: 'Learning sessions', body: 'Engineers teach engineers — a tricky ticket, a new Microsoft feature, a migration post-mortem.' },
    { art: 'celebrate', icon: 'redeem', title: 'Celebrations', body: 'Birthdays, go-lives and work anniversaries — a cake in the pantry beats a calendar reminder.' },
    { art: 'recognition', icon: 'star', title: 'Recognition', body: 'The engineer who stayed calm on a P1, the person who wrote the runbook — good work gets named.' },
    { art: 'festival', icon: 'light_mode', title: 'Festival celebrations', body: 'Diwali lights, Ganesh Chaturthi in Mumbai, colours at Holi — celebrated together, with the NOC rota planned so everyone gets a turn.' },
    { art: 'work', icon: 'apartment', title: 'Work environment', body: 'A Mumbai office built around operations — the NOC wall, space for focused work, and colleagues a desk away when you need a second opinion.' },
  ] as const;

  readonly teams = [
    { key: 'noc', icon: 'monitor_heart', label: '24×7 operations', title: 'NOC', body: 'Keep customer servers, networks and backups healthy around the clock.', work: ['Monitor alerts on the NOC wall', 'First response & escalation', 'Backups, patching, shift hand-overs'], skills: ['Linux', 'Windows Server', 'Networking', 'Monitoring'] },
    { key: 'soc', icon: 'shield', label: 'Security monitoring', title: 'SOC', body: 'Watch for threats, triage alerts and help customers respond to incidents.', work: ['Alert triage & investigation', 'Phishing and endpoint cases', 'Incident notes & reports'], skills: ['SIEM', 'EDR', 'Log analysis', 'CEH / CompTIA'] },
    { key: 'cloud', icon: 'cloud', label: 'Build & automate', title: 'Cloud & DevOps', body: 'Design, migrate and automate workloads across our cloud, Azure and AWS.', work: ['Migrations & landing zones', 'Tally on Cloud, VDI, VPS', 'Scripts, CI/CD, containers'], skills: ['Azure', 'AWS', 'Linux', 'Scripting'] },
    { key: 'm365', icon: 'desktop_windows', label: 'Modern workplace', title: 'Microsoft 365 & Modern Workplace', body: 'Set up and run Microsoft 365, Entra ID, Intune and Windows 365 for customers.', work: ['Tenant setup & mail migration', 'Identity, MFA, Conditional Access', 'Device management'], skills: ['M365', 'Entra ID', 'Intune', 'Exchange'] },
    { key: 'trust', icon: 'workspace_premium', label: 'SSL · PKI', title: 'Digital Trust', body: 'Issue, install and automate SSL, code-signing and PKI for Indian businesses.', work: ['Certificate validation & issuance', 'Installation on servers & apps', 'Renewals and automation'], skills: ['TLS / SSL', 'PKI', 'DNS', 'Web servers'] },
    { key: 'sales', icon: 'target', label: 'Grow the business', title: 'Sales & Partnerships', body: 'Help customers and channel partners choose the right cloud and security services.', work: ['Discovery calls & proposals', 'Partner onboarding', 'Pre-sales demos with engineers'], skills: ['Communication', 'CRM', 'Cloud basics', 'Follow-through'] },
    { key: 'mkt', icon: 'monitoring', label: 'Tell the story', title: 'Marketing & Content', body: 'Explain cloud and security clearly — web pages, videos, social and campaigns.', work: ['Product pages & blogs', 'Design, motion & video', 'Campaigns & analytics'], skills: ['Writing', 'Design', 'SEO', 'Social'] },
    { key: 'cs', icon: 'headset_mic', label: 'Keep customers happy', title: 'Customer Success & Support', body: 'Be the voice customers trust — onboarding, tickets, renewals and follow-ups.', work: ['Ticket ownership end to end', 'Onboarding & account reviews', 'Renewals and feedback'], skills: ['Empathy', 'Ticketing', 'Writing', 'Clear writing'] },
    { key: 'fin', icon: 'currency_rupee', label: 'Run the company', title: 'Finance & Admin', body: 'Billing, GST, collections, vendors and the office that keeps everyone working.', work: ['Invoicing & GST filings', 'Collections & vendor payments', 'Office & asset admin'], skills: ['Tally', 'GST', 'Excel', 'Accuracy'] },
  ] as const;

  readonly daySteps = [
    { time: '08:00', label: 'Morning', title: 'NOC hand-over', body: 'The night shift walks the day shift through open tickets, alerts to watch and anything a customer is waiting on. Nothing gets lost between shifts.', note: 'Shift notes · watch-list', rail: 'Hand-over' },
    { time: '10:00', label: 'Project', title: 'Cloud migration', body: 'A migration team checks the runbook, customer dependencies and rollback plan before moving the next production workload.', note: 'Runbook · change window', rail: 'Migration' },
    { time: '12:30', label: 'Security', title: 'Alert triage', body: 'SOC analysts sort signal from noise, investigate the timeline and write down the evidence for a clean customer update.', note: 'Investigate · document', rail: 'Triage' },
    { time: '15:00', label: 'Learning', title: 'Knowledge session', body: 'An engineer shares a tricky ticket, a new platform feature or a migration lesson with the wider team.', note: 'Demo · questions', rail: 'Learning' },
    { time: '17:30', label: 'Team', title: 'Celebrate the win', body: 'A successful go-live, a certification or an excellent customer outcome gets recognised by the people who made it happen.', note: 'Recognition · team', rail: 'Celebrate' },
    { time: '20:00', label: 'Evening', title: 'Wrap and hand-over', body: 'Completed work is recorded, open items are assigned and the next shift gets a clear picture of what matters.', note: 'Close · hand over', rail: 'Wrap' },
  ] as const;
  readonly activeDay = signal(0);

  readonly interests = [
    { key: 'linux', icon: 'terminal', label: 'Linux & servers' }, { key: 'net', icon: 'lan', label: 'Networking' },
    { key: 'secmon', icon: 'shield', label: 'Watching for threats' }, { key: 'hack', icon: 'bug_report', label: 'Ethical hacking' },
    { key: 'cloud', icon: 'cloud', label: 'Azure / AWS' }, { key: 'auto', icon: 'code', label: 'Scripting & automation' },
    { key: 'm365', icon: 'desktop_windows', label: 'Microsoft 365' }, { key: 'pki', icon: 'lock', label: 'Certificates & SSL' },
    { key: 'help', icon: 'headset_mic', label: 'Helping customers' }, { key: 'sell', icon: 'target', label: 'Selling & partnerships' },
    { key: 'write', icon: 'edit', label: 'Writing & design' }, { key: 'num', icon: 'currency_rupee', label: 'Numbers & accounts' },
  ] as const;
  readonly selectedInterests = signal<ReadonlySet<string>>(new Set(['linux', 'secmon']));
  readonly experience = signal<Experience>('fr');

  private readonly weights: Record<string, Partial<Record<string, number>>> = {
    linux: { noc: 3, cloud: 3, soc: 1, trust: 1 }, net: { noc: 3, soc: 2, cloud: 2, trust: 1 }, secmon: { soc: 3, noc: 2, trust: 1 }, hack: { soc: 3, trust: 1, cloud: 1 },
    cloud: { cloud: 3, m365: 1, noc: 1, sales: 1 }, auto: { cloud: 3, noc: 2, soc: 1 }, m365: { m365: 3, cs: 1, noc: 1, sales: 1 }, pki: { trust: 3, cloud: 1, soc: 1 },
    help: { cs: 3, noc: 1, m365: 1, sales: 1 }, sell: { sales: 3, cs: 1, mkt: 1 }, write: { mkt: 3, sales: 1, cs: 1 }, num: { fin: 3, sales: 1 },
  };
  private readonly roles: Record<string, Record<Experience, string>> = {
    noc: { st: 'Intern — Any', fr: 'NOC Engineer (L1/L2)', ex: 'NOC Engineer (L2/L3)' }, soc: { st: 'Intern — Any', fr: 'SOC Analyst', ex: 'SOC Analyst' },
    cloud: { st: 'Intern — Any', fr: 'Cloud Engineer', ex: 'DevOps Engineer' }, m365: { st: 'Intern — Any', fr: 'Microsoft 365 Administrator', ex: 'Microsoft 365 Administrator' },
    trust: { st: 'Intern — Any', fr: 'System Administrator (Windows/Linux)', ex: 'Pre-sales Engineer' }, sales: { st: 'Intern — Any', fr: 'Inside Sales', ex: 'Business Development Executive' },
    mkt: { st: 'Intern — Any', fr: 'Content Writer', ex: 'Digital Marketing Executive' }, cs: { st: 'Intern — Any', fr: 'Inside Sales', ex: 'Pre-sales Engineer' },
    fin: { st: 'Intern — Any', fr: 'Accounts Executive', ex: 'Accounts Executive' },
  };

  readonly rankedTeams = computed(() => {
    const selected = [...this.selectedInterests()];
    return this.teams.map((team, originalIndex) => ({
      ...team,
      originalIndex,
      score: selected.length ? Math.round(selected.reduce((sum, key) => sum + (this.weights[key]?.[team.key] ?? 0), 0) / (3 * selected.length) * 100) : 0,
    })).sort((a, b) => b.score - a.score || a.originalIndex - b.originalIndex);
  });
  readonly bestTeam = computed(() => this.rankedTeams()[0]);
  readonly suggestedRole = computed(() => this.roles[this.bestTeam().key][this.experience()]);

  readonly hiringSteps = [
    { icon: 'description', title: 'Application review', body: 'A person — not a keyword filter — reads your CV against open and upcoming roles.', note: 'We reply to every applicant' },
    { icon: 'terminal', title: 'Assessment', body: 'A short practical check suited to the role: a scenario, a troubleshooting task or a writing sample.', note: 'Typically done remotely' },
    { icon: 'chat_bubble', title: 'Interview', body: 'Meet the people you would work with. Ask us anything — shifts, learning, growth.', note: 'In person in Mumbai or online' },
    { icon: 'badge', title: 'Offer & onboarding', body: 'A clear written offer, then a first week with a buddy, access set up and a learning plan.', note: 'Buddy from day one' },
  ] as const;
  readonly perks = [
    { icon: 'currency_rupee', title: 'Competitive salary', body: 'Pay benchmarked to the role and your experience, reviewed as you grow.' },
    { icon: 'menu_book', title: 'Learning & development', body: 'On-the-job training, internal sessions and support for role-relevant certifications.' },
    { icon: 'home', title: 'Flexible environment', body: 'Hybrid where the role allows it; planned shift rotas for 24×7 teams.' },
    { icon: 'emoji_events', title: 'Recognition & rewards', body: 'Good work is noticed and named — by your manager and the wider team.' },
    { icon: 'trending_up', title: 'Career growth', body: 'Clear next steps — for example L1 to L2 to lead — and room to move across teams.' },
    { icon: 'calendar_month', title: 'Team outings & events', body: 'Festival celebrations, team lunches and the occasional day out together.' },
  ] as const;
  readonly flippedPerks = signal<ReadonlySet<number>>(new Set());

  toggleInterest(key: string): void {
    const next = new Set(this.selectedInterests());
    next.has(key) ? next.delete(key) : next.add(key);
    this.selectedInterests.set(next);
  }

  resetMatcher(): void { this.selectedInterests.set(new Set()); }

  togglePerk(index: number): void {
    const next = new Set(this.flippedPerks());
    next.has(index) ? next.delete(index) : next.add(index);
    this.flippedPerks.set(next);
  }
}
