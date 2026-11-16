import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SshToolsNavigationComponent } from './ssh-tools-navigation.component';
import { SeoService } from '../core/seo.service';
import { SSH_CONFIG_HOST_LIMIT, SshConfigHost, buildSshConfig, newSshConfigHost } from '../core/ssh-config';
interface HostEditor { id: number; value: SshConfigHost; }
@Component({
  selector: 'xh-ssh-config-page', standalone: true, imports: [RouterLink, SshToolsNavigationComponent],
  templateUrl: './ssh-config.page.html', styleUrls: ['./dns-lookup.page.css', './ssh-config.page.css', './ssh-tools.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SshConfigPage {
  private readonly document = inject(DOCUMENT);
  private nextId = 2;
  readonly limit = SSH_CONFIG_HOST_LIMIT;
  readonly hosts = signal<HostEditor[]>([{ id: 1, value: newSshConfigHost() }]);
  readonly active = signal(1);
  readonly showIssue = signal(false);
  readonly notice = signal('');
  readonly copied = signal(false);
  readonly fallback = signal(false);
  readonly validation = computed(() => { try { return { result: buildSshConfig(this.hosts().map(host => host.value)), error: '' }; } catch (error) { return { result: null, error: (error as Error).message }; } });
  readonly result = computed(() => this.validation().result);
  readonly related = [
    { id: 'ssh-key-generator', icon: 'key', title: 'SSH Key Generator', text: 'Generate Ed25519, ECDSA or RSA key pairs locally.' },
    { id: 'ssh-fingerprint', icon: 'fingerprint', title: 'SSH Key Fingerprint', text: 'Calculate and compare public-key fingerprints.' },
    { id: 'pem-formatter', icon: 'data_object', title: 'PEM Formatter', text: 'Normalize PEM text without changing its encoded object.' },
    { id: 'password-generator', icon: 'password', title: 'Password Generator', text: 'Create random passwords on this device.' },
  ];
  readonly questions = [
    { q: 'Where should I save the generated file?', a: 'The usual per-user location is ~/.ssh/config on Unix-like systems and C:/Users/<you>/.ssh/config for Windows OpenSSH. The download is named config, without a .txt extension. Review and merge it with any existing configuration before saving. On Unix-like systems, mode 600 on the file and 700 on the .ssh directory restrict access to your user; use appropriate user-only permissions on Windows.' },
    { q: 'How do multiple Host blocks and patterns interact?', a: 'The builder preserves the order you choose. Host accepts aliases and * / ? patterns, with ! exclusions. OpenSSH usually takes the first value it finds for a setting, so specific hosts should precede broad defaults. IdentityFile and forwarding directives may accumulate. Blocks that match the same target can interact; adding a block does not automatically isolate it from other matches.' },
    { q: 'What is the difference between ProxyJump and ProxyCommand?', a: 'ProxyJump lists one or more jump hosts, such as bastion or deploy@bastion:2222. ProxyCommand is a shell command that supplies a connection, such as ssh -W %h:%p bastion. Choose one mode: the builder emits only the selected directive. ProxyCommand is not executed here, but your SSH client will run it when that configuration is used. Review shell quoting and expansion before installing it.' },
    { q: 'How do local, remote and dynamic forwards work?', a: 'LocalForward listens on your client and reaches a destination from the SSH server. RemoteForward requests a listener on the SSH server and reaches a destination from your client. DynamicForward starts a client-side SOCKS listener. Enter one TCP rule per line. Listener availability and permissions depend on the client, server, GatewayPorts rules and firewalls; the builder does not open or test ports.' },
    { q: 'Which host-key checking mode should I use?', a: 'Ask prompts before saving a new host key and rejects changed keys. Yes requires a previously trusted key. Accept-new stores new keys automatically and rejects changed ones. No weakens changed-key protection. Choose a policy that matches your trust process, and independently verify a new fingerprint when required.' },
    { q: 'What do keepalives and agent forwarding change?', a: 'Keepalives emit ServerAliveInterval and ServerAliveCountMax. They can help detect an unresponsive connection, but do not guarantee that every network or session stays connected. ForwardAgent allows remote processes to request signatures from your loaded agent while the connection exists. Leave it off unless you need it and trust that host.' },
    { q: 'Does the builder need my private key or connect to my server?', a: 'No. IdentityFile is only a path on your SSH client; never paste key contents. The builder assembles text locally without uploading host settings, saving them to browser storage, running commands or opening SSH sessions. Copy and Download are explicit actions. Clear removes the current form; it does not delete downloaded files or the clipboard.' },
    { q: 'How can I check the file before connecting?', a: 'Use ssh -G -F path/to/config your-alias to ask OpenSSH to print the effective configuration. This builder never runs that command for you. With existing files, review Include, Match exec, proxies and hostname canonicalization before using them. A successful parse does not prove that the host resolves, the key exists, authentication succeeds or a forward can bind. Use ssh -v your-alias for a connection only when you intend to access that server.' },
  ];
  constructor() { inject(SeoService).set('SSH Config Builder - Hosts, Proxies & Tunnels | XcellHost', 'Build SSH client configuration locally with multiple hosts, identity paths, keepalives, ProxyJump, ProxyCommand and TCP forwards. Preview, copy and download your config.', '/tools/ssh-config'); }
  private changed(): void { this.showIssue.set(true); this.notice.set(''); this.copied.set(false); this.fallback.set(false); }
  edit(id: number, field: keyof SshConfigHost, event: Event): void {
    const input = event.target as HTMLInputElement, value = input.type === 'checkbox' ? input.checked : input.value;
    this.hosts.update(hosts => hosts.map(host => host.id === id ? { ...host, value: { ...host.value, [field]: value } } : host)); this.changed();
  }
  add(): void {
    if (this.hosts().length >= this.limit) return;
    const id = this.nextId++; this.hosts.update(hosts => [...hosts, { id, value: newSshConfigHost('server-' + id) }]); this.active.set(id); this.changed();
  }
  duplicate(id: number): void {
    if (this.hosts().length >= this.limit) return;
    const source = this.hosts().find(host => host.id === id); if (!source) return;
    const next = this.nextId++; this.hosts.update(hosts => [...hosts, { id: next, value: { ...source.value, alias: 'server-' + next } }]); this.active.set(next); this.changed();
  }
  remove(id: number): void {
    if (this.hosts().length === 1) return;
    const remaining = this.hosts().filter(host => host.id !== id); this.hosts.set(remaining); if (this.active() === id) this.active.set(remaining[0].id); this.changed();
  }
  move(id: number, direction: number): void {
    const hosts = [...this.hosts()], index = hosts.findIndex(host => host.id === id), next = index + direction;
    if (index < 0 || next < 0 || next >= hosts.length) return; [hosts[index], hosts[next]] = [hosts[next], hosts[index]]; this.hosts.set(hosts); this.changed();
  }
  sample(): void {
    const bastion = { ...newSshConfigHost('bastion'), hostname: 'bastion.example.com', user: 'deploy', identityFile: '~/.ssh/id_ed25519', keepAlive: true };
    const app = { ...newSshConfigHost('app'), hostname: '10.0.0.20', user: 'ubuntu', identityFile: '~/.ssh/app_key', proxyMode: 'jump' as const, proxyJump: 'bastion', localForward: '127.0.0.1:8080 localhost:80' };
    this.hosts.set([{ id: this.nextId++, value: bastion }, { id: this.nextId++, value: app }]); this.active.set(this.hosts()[0].id); this.changed(); this.notice.set('Example hosts loaded. Replace the sample addresses and paths before use.');
  }
  generate(event?: Event): void { event?.preventDefault(); this.showIssue.set(true); this.notice.set(this.result() ? 'Configuration ready. Review it before merging into your SSH config.' : 'Complete the highlighted configuration issue to generate the file.'); if (this.result()) this.document.querySelector('#ssh-config-output')?.scrollIntoView({ behavior: 'auto', block: 'start' }); }
  clear(): void { const id = this.nextId++; this.hosts.set([{ id, value: newSshConfigHost() }]); this.active.set(id); this.showIssue.set(false); this.notice.set('Hosts and generated output cleared from this page.'); this.copied.set(false); this.fallback.set(false); }
  async copy(): Promise<void> {
    const result = this.result(); if (!result) return;
    try { await navigator.clipboard.writeText(result.config); if (this.result() === result) { this.copied.set(true); this.notice.set('SSH config copied to your clipboard.'); this.fallback.set(false); setTimeout(() => this.copied.set(false), 2500); } }
    catch { if (this.result() === result) { this.fallback.set(true); this.notice.set('Clipboard access is unavailable. Select and copy the configuration below.'); setTimeout(() => this.document.querySelector<HTMLTextAreaElement>('#ssh-config-manual')?.select(), 0); } }
  }
  download(): void {
    const result = this.result(); if (!result) return;
    try { const url = URL.createObjectURL(new Blob([result.config], { type: 'application/octet-stream' })), link = this.document.createElement('a'); link.href = url; link.download = 'config'; this.document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000); this.notice.set('Download started: config. Review and merge with your existing file.'); }
    catch { this.notice.set('Download unavailable. Use Copy or select the configuration manually.'); }
  }
}
