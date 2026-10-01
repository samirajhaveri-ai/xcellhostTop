import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

// Import content and assets only; never execute scripts from the reference file.
const referencePath = process.argv[2];
if (!referencePath) throw new Error('Usage: node scripts/import-windows-servers.mjs <reference.html>');
const original = fs.readFileSync(referencePath, 'utf8');
const assetDirectory = 'src/assets/images/windows-servers';
fs.mkdirSync(assetDirectory, { recursive: true });
const source = original.replace(/data:image\/(svg\+xml|png|jpeg|webp);base64,([A-Za-z0-9+/=]+)/g, (_, mime, data) => {
  const buffer = Buffer.from(data, 'base64');
  const extension = { 'svg+xml': 'svg', png: 'png', jpeg: 'jpg', webp: 'webp' }[mime];
  const name = crypto.createHash('sha256').update(buffer).digest('hex').slice(0, 12) + '.' + extension;
  fs.writeFileSync(path.join(assetDirectory, name), buffer);
  return '/assets/images/windows-servers/' + name;
});
const data = JSON.parse(source.match(/var D=(\{[^\n]+?\}),\$=/)[1]);
fs.writeFileSync('src/app/sections/windows-servers-plans.data.ts',
  '// Pricing and configuration data imported from the supplied Windows Servers reference.\n' +
  'export const WINDOWS_SERVER_DATA = ' + JSON.stringify(data, null, 2) + ' as const;\n');

const between = (start, end) => {
  const first = source.indexOf(start);
  const last = source.indexOf(end, first);
  if (first < 0 || last < 0) throw new Error('Missing content boundary: ' + start);
  return source.slice(first, last);
};
const linuxTemplate = fs.readFileSync('src/app/sections/linux-servers-content.component.html', 'utf8');
let pricing = linuxTemplate.slice(linuxTemplate.indexOf('<section class="bx"'), linuxTemplate.indexOf(' <h2 class="h2s">What you'));
// The reference's own reasons section follows pricing, so exclude the Linux reasons cards.
pricing = pricing.slice(0, pricing.indexOf(' <h2 class="h2s">Why XcellHost') > -1 ? pricing.indexOf(' <h2 class="h2s">Why XcellHost') : pricing.length);
pricing = pricing.replaceAll('Linux', 'Windows').replaceAll('linux', 'windows')
  .replaceAll('money(p.inr)', 'money(planPrice(p))')
  .replaceAll('money(p.strike)', 'money(p.strike + licence(p))')
  .replace('Monthly {{ currency()', 'Monthly incl. Windows {{ currency()')
  .replace('full root access', 'administrator access');
pricing = pricing.replace('@if (panel() > 0)', '@if (panel() > 0 || windowsOs[os()][1] === "quote")')
  .replace('Control panel licence quoted separately.', 'Datacenter, CALs, SQL Server and control panel licences are quoted separately.');
const first = between(' <div class="pp-answer', ' <section class="bx"');
let details = between(' <h2 class="h2s">Why XcellHost', ' <h2 class="pp-sec" id="faq">');
details = details.replace(/data-dp="(\d)"(?: hidden)?/g, (_, index) => `[hidden]="dc() !== ${index}"`);
let tab = 0;
details = details.replace(/(<button role="tab" type="button") aria-selected="(?:true|false)"/g,
  (_, opening) => `${opening} (click)="dc.set(${tab})" [attr.aria-selected]="dc() === ${tab++}"`);
let check = 0;
details = details.replace(/<input type="checkbox">/g, () =>
  `<input type="checkbox" [checked]="checklist()[${check}]" (change)="setCheck(${check++}, $any($event.target).checked)">`)
  .replace('<i id="osBar"></i>', '<i [style.width.%]="checkedCount() / 8 * 100"></i>')
  .replace('<b id="osPct">0 / 8</b>', '<b aria-live="polite">{{ checkedCount() }} / 8</b>');
const glass = between('  <div class="glass" aria-label="Illustrative server status">', '\n </div>\n</section>')
  .replace('<div class="os-dep" id="osDep"></div>',
    '<div class="os-dep"><div><span>Server 2025 · Mumbai DC-1</span><em>Online</em></div><div><span>Server 2022 · Pune DC-3</span><em>Online</em></div><div><span>Server 2019 · Mumbai DC-2</span><em>Online</em></div></div>');
const powered = between('   <div class="os-pw">', '\n  </div>\n  <div class="glass"');
const heroCopy = between('   <div class="crumb">', '   <div class="os-pw">')
  .replace('class="crumb"', 'class="windows-crumb"')
  .replace('class="sub"', 'class="windows-sub"')
  .replace(/<div class="hero-ctas">.*?<\/div>/, '<ng-content select="[windowsHeroActions]" />')
  .replace(/<svg class="xg-ico".*?<\/svg>/g, '');
let template = `@if (heroCopyOnly()) {\n<div class="windows-copy">\n${heroCopy}\n</div>\n} @else if (heroOnly()) {\n<div class="windows-hero-art">\n${glass}\n${powered}\n</div>\n} @else {\n${first}${pricing}${details}\n}\n`;
template = template.replace(/\brv\b/g, '').replaceAll('bare-metal-pricing.html', '/bare-metal-servers')
  .replaceAll('bare-metal.html', '/bare-metal-servers');
fs.writeFileSync('src/app/sections/windows-servers-content.component.html', template);

let component = fs.readFileSync('src/app/sections/linux-servers-content.component.ts', 'utf8')
  .replaceAll('LINUX_SERVER_DATA', 'WINDOWS_SERVER_DATA').replaceAll('Linux', 'Windows').replaceAll('linux', 'windows')
  .replace('this.data.os.filter(o => o[1] === 0)', 'this.data.os.filter(o => o[1] === "win" || o[1] === "quote")')
  .replace('readonly os = signal(0)', 'readonly os = signal(this.windowsOs.findIndex(o => o[0] === this.data.os[this.data.defOs][0]))')
  .replace('this.os.set(0)', 'this.os.set(this.windowsOs.findIndex(o => o[0] === this.data.os[this.data.defOs][0]))')
  .replace('a.inr - b.inr', 'this.planPrice(a) - this.planPrice(b)')
  .replace('b.inr - a.inr', 'this.planPrice(b) - this.planPrice(a)')
  .replace('  readonly panel = signal(0);', '  readonly panel = signal(0);\n  readonly checklist = signal<boolean[]>(Array(8).fill(false));\n  readonly checkedCount = computed(() => this.checklist().filter(Boolean).length);')
  .replace('    + this.ips()', '    + (this.selectedPlan() && this.windowsOs[this.os()][1] === "win" ? this.licence(this.selectedPlan()!) : 0)\n    + this.ips()')
  .replace('  money(amount: number)', `  setCheck(index: number, checked: boolean): void {
    this.checklist.update(values => values.map((value, i) => i === index ? checked : value));
  }

  licence(plan: WindowsPlan): number {
    return Math.ceil(Math.max(16, plan.cores, plan.sockets * 8) / 2) * this.data.add.win_per_2c;
  }

  planPrice(plan: WindowsPlan): number { return plan.inr + this.licence(plan); }

  money(amount: number)`)
  .replace("const suffix = this.panel() > 0 ? '/month + GST; panel licence quoted separately' : '/month + GST';",
    "const quoted = this.panel() > 0 || this.windowsOs[this.os()][1] === 'quote';\n    const suffix = quoted ? '/month + GST; additional licences quoted separately' : '/month + GST';");
fs.writeFileSync('src/app/sections/windows-servers-content.component.ts', component);
let css = fs.readFileSync('src/app/sections/linux-servers-content.component.css', 'utf8').replaceAll('linux', 'windows');
const extra = source.slice(source.indexOf('.os-lic{'), source.indexOf('</style>', source.indexOf('.os-lic{')));
css += '\n' + extra + '\n:host{--acc:#0EA5E9}\n.windows-hero-art{width:100%;max-width:520px;margin:auto}\n';
css += '.windows-hero-art .os-pw{display:grid;grid-template-columns:44px minmax(0,1fr) auto;align-items:center}\n' +
  '.windows-hero-art .os-pw .mini{grid-column:3;grid-row:1;margin-left:0;flex-wrap:nowrap}\n';
fs.writeFileSync('src/app/sections/windows-servers-content.component.css', css);
console.log(`Imported ${data.plans.length} plans and requested Windows Servers sections.`);
