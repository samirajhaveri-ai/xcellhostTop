export interface SshConfigHost {
  alias: string; hostname: string; user: string; port: string;
  keepAlive: boolean; aliveInterval: string; aliveCount: string;
  identityFile: string; identitiesOnly: boolean; hostKeyChecking: 'ask' | 'yes' | 'accept-new' | 'no';
  knownHostsFile: string; forwardAgent: boolean; compression: boolean;
  proxyMode: 'none' | 'jump' | 'command'; proxyJump: string; proxyCommand: string;
  localForward: string; remoteForward: string; dynamicForward: string;
}
export interface SshConfigResult { config: string; hostCount: number; forwardingCount: number; warnings: string[]; aliases: string[]; }
export const SSH_CONFIG_HOST_LIMIT = 20;
export function newSshConfigHost(alias = 'my-server'): SshConfigHost {
  return { alias, hostname: '', user: '', port: '22', keepAlive: false, aliveInterval: '60', aliveCount: '3', identityFile: '', identitiesOnly: true, hostKeyChecking: 'ask', knownHostsFile: '', forwardAgent: false, compression: false, proxyMode: 'none', proxyJump: '', proxyCommand: '', localForward: '', remoteForward: '', dynamicForward: '' };
}
const CONTROL = /[\x00-\x1f\x7f-\x9f\u2028\u2029\u202a-\u202e\u2066-\u2069]/u;
function single(value: string, label: string, limit = 1024): string {
  if (typeof value !== 'string' || value.length > limit || CONTROL.test(value)) throw new Error(label + ' must be one line up to ' + limit + ' characters without control characters.');
  return value.trim();
}
function number(value: string, label: string, min: number, max: number): string {
  const cleaned = single(value, label, 10);
  if (!/^\d+$/.test(cleaned) || Number(cleaned) < min || Number(cleaned) > max) throw new Error(label + ' must be a whole number from ' + min + ' to ' + max + '.');
  return String(Number(cleaned));
}
function name(value: string, label: string): string {
  let raw = single(value, label, 253);
  if (raw.startsWith('[') && raw.endsWith(']')) raw = raw.slice(1, -1);
  if (raw.includes(':')) {
    try { if (!/^[0-9a-f:.]+$/i.test(raw) || !raw.includes(':')) throw new Error(); const url = new URL('http://[' + raw + ']/'); return url.hostname.slice(1, -1); }
    catch { throw new Error(label + ' needs a bare hostname, IPv4 address or unscoped IPv6 address.'); }
  }
  if (/^[\d.]+$/.test(raw) && raw.includes('.')) {
    const parts = raw.split('.'); if (parts.length !== 4 || parts.some(p => !/^(0|[1-9]\d{0,2})$/.test(p) || Number(p) > 255)) throw new Error(label + ' contains an invalid IPv4 address.'); return raw;
  }
  const domain = raw.endsWith('.') ? raw.slice(0, -1) : raw;
  if (!domain || domain.split('.').some(label => !/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(label))) throw new Error(label + ' needs a hostname or IP address without a URL, port, credentials or spaces.');
  return raw.toLowerCase();
}
function user(value: string): string {
  const cleaned = single(value, 'Username', 128);
  if (cleaned && !/^[A-Za-z0-9_][A-Za-z0-9_.@+\\-]*[$]?$/.test(cleaned)) throw new Error('Use a username without spaces, quotes, shell operators or SSH tokens.'); return cleaned;
}
function tokens(value: string, allowed: string, label: string): void {
  for (let index = 0; index < value.length; index++) if (value[index] === '%') { if (!value[index + 1] || !allowed.includes(value[++index])) throw new Error(label + ' contains an unsupported SSH % token.'); }
}
function quote(value: string): string { return '"' + value.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"'; }
function pathValue(value: string, label: string): string {
  const cleaned = single(value, label);
  if (!cleaned) return '';
  if (/["'`]/.test(cleaned)) throw new Error(label + ' does not support quote or backtick characters.');
  tokens(cleaned, '%CdhijkLlnpru', label);
  // OpenSSH on Windows accepts forward slashes; they avoid backslash escapes in config.
  return quote(cleaned.replace(/\\/g, '/'));
}
function patterns(value: string): string[] {
  const cleaned = single(value, 'Host alias', 512), parts = cleaned.split(/ +/);
  if (!cleaned || parts.length > 10 || parts.some(p => !/^!?[A-Za-z0-9*?][A-Za-z0-9._*?-]*$/.test(p) || p.length > 253) || parts.every(p => p.startsWith('!'))) throw new Error('Use 1–10 host aliases or * / ? patterns separated by spaces, with at least one positive pattern.');
  if (new Set(parts.map(p => p.toLowerCase())).size !== parts.length) throw new Error('Remove repeated aliases or patterns within the Host line.'); return parts;
}
function jump(value: string): { text: string; names: string[] } {
  const raw = single(value, 'ProxyJump', 1024), entries = raw.split(',');
  if (!raw || entries.length > 5) throw new Error('Enter 1–5 jump hosts as [user@]host[:port], separated by commas.');
  const names: string[] = [];
  const normalized = entries.map(entry => {
    const match = /^(?:([A-Za-z0-9_][A-Za-z0-9_.+-]*)@)?(\[[0-9a-f:.]+\]|[^:@\s,]+)(?::(\d+))?$/i.exec(entry.trim());
    if (!match) throw new Error('Use ProxyJump entries like bastion, user@bastion:2222 or user@[2001:db8::1]:22.');
    const host = name(match[2], 'Jump hostname'); if (host === 'none') throw new Error('Select No proxy to disable ProxyJump.'); names.push(host.toLowerCase());
    return (match[1] ? user(match[1]) + '@' : '') + (host.includes(':') ? '[' + host + ']' : host) + (match[3] ? ':' + number(match[3], 'Jump port', 1, 65535) : '');
  });
  return { text: normalized.join(','), names };
}
function command(value: string): string {
  const raw = single(value, 'ProxyCommand', 2048);
  if (!raw || raw.includes('#')) throw new Error('Use a one-line ProxyCommand without # comments, or select No proxy.');
  tokens(raw, '%hnpr', 'ProxyCommand');
  let quote = '', escaped = false;
  for (const c of raw) {
    if (escaped) { escaped = false; continue; }
    if (c === '\\' && quote !== "'") { escaped = true; continue; }
    if (quote) { if (c === quote) quote = ''; } else if (c === '"' || c === "'") quote = c;
  }
  if (quote || escaped) throw new Error('Balance ProxyCommand quotes and avoid a trailing backslash.'); return raw;
}
interface Listener { text: string; bind: string; }
function listener(value: string, allowZero: boolean): Listener {
  const match = /^(?:(\[[0-9a-f:.]+\]|[^:\s]+):)?(\d+)$/i.exec(value);
  if (!match) throw new Error('Use forwarding listeners like 8080, 127.0.0.1:8080 or [::1]:8080.');
  const port = number(match[2], 'Forwarding listen port', allowZero ? 0 : 1, 65535), bind = match[1] ? match[1] === '*' ? '*' : name(match[1], 'Forwarding bind address') : '';
  return { text: bind ? (bind.includes(':') ? '[' + bind + ']' : bind) + ':' + port : port, bind };
}
function forwards(value: string, type: 'local' | 'remote' | 'dynamic'): { lines: string[]; publicBind: boolean } {
  if (typeof value !== 'string' || value.length > 4096) throw new Error('Use forwarding entries up to 4,096 characters.');
  const rows = value.replace(/\r\n?/g, '\n').split('\n').map(row => row.trim()).filter(Boolean);
  if (rows.length > 10) throw new Error('Use at most 10 ' + type + ' forwarding entries.');
  let publicBind = false;
  const lines = rows.map(row => {
    if (CONTROL.test(row)) throw new Error('Forwarding entries cannot contain control characters.');
    const parts = row.split(/ +/); if (parts.length !== (type === 'dynamic' ? 1 : 2)) throw new Error(type === 'dynamic' ? 'Use one [bind_address:]port per dynamic-forwarding line.' : 'Use [bind_address:]listen_port destination_host:port per forwarding line. TCP forwards only.');
    const listen = listener(parts[0], type === 'remote'); publicBind ||= ['*','0.0.0.0','::'].includes(listen.bind);
    if (type === 'dynamic') return listen.text;
    const target = /^(\[[0-9a-f:.]+\]|[^:\s]+):(\d+)$/i.exec(parts[1]); if (!target) throw new Error('A forwarding destination needs host:port; wrap IPv6 addresses in brackets.');
    const host = name(target[1], 'Forwarding destination'), port = number(target[2], 'Forwarding destination port', 1, 65535);
    return listen.text + ' ' + (host.includes(':') ? '[' + host + ']' : host) + ':' + port;
  });
  if (new Set(lines).size !== lines.length) throw new Error('Remove repeated ' + type + ' forwarding entries.'); return { lines, publicBind };
}

/** Writes config text only. No filesystem access, DNS, SSH sessions or command execution. */
export function buildSshConfig(hosts: readonly SshConfigHost[]): SshConfigResult {
  if (!Array.isArray(hosts) || hosts.length < 1 || hosts.length > SSH_CONFIG_HOST_LIMIT) throw new Error('Build a configuration with 1–20 Host blocks.');
  const warnings: string[] = [], aliases: string[] = [], seen = new Set<string>(), links: string[][] = [], groups: string[][] = [];
  let forwardingCount = 0;
  const blocks = hosts.map((input, index) => {
    try {
      const hostPatterns = patterns(input.alias); groups.push(hostPatterns);
      for (const pattern of hostPatterns.filter(p => !p.startsWith('!'))) { if (seen.has(pattern.toLowerCase())) throw new Error('This alias or pattern also appears in another Host block.'); seen.add(pattern.toLowerCase()); }
      for (const field of ['keepAlive','identitiesOnly','forwardAgent','compression'] as const) if (typeof input[field] !== 'boolean') throw new Error('Choose valid checkbox settings.');
      if (!['ask','yes','accept-new','no'].includes(input.hostKeyChecking)) throw new Error('Choose an available host-key checking policy.');
      if (!['none','jump','command'].includes(input.proxyMode)) throw new Error('Choose No proxy, ProxyJump or ProxyCommand.');
      const hasPatterns = hostPatterns.some(p => /[*?!]/.test(p));
      const hostname = single(input.hostname, 'Hostname', 253); if (!hostname && !hasPatterns) throw new Error('Enter the hostname or IP address for this alias.');
      const username = user(input.user), port = number(input.port, 'SSH port', 1, 65535);
      const rows = ['Host ' + hostPatterns.join(' ')]; aliases.push(hostPatterns.join(' '));
      if (hostname) rows.push('    HostName ' + name(hostname, 'Hostname'));
      if (username) rows.push('    User ' + quote(username));
      rows.push('    Port ' + port);
      const identity = pathValue(input.identityFile, 'Identity file'); if (identity) rows.push('    IdentityFile ' + identity, '    IdentitiesOnly ' + (input.identitiesOnly ? 'yes' : 'no'));
      rows.push('    StrictHostKeyChecking ' + input.hostKeyChecking);
      const knownHosts = single(input.knownHostsFile, 'Known hosts file');
      if (knownHosts) rows.push('    UserKnownHostsFile ' + (knownHosts === 'none' ? 'none' : pathValue(knownHosts, 'Known hosts file')));
      rows.push('    ForwardAgent ' + (input.forwardAgent ? 'yes' : 'no'), '    Compression ' + (input.compression ? 'yes' : 'no'));
      if (input.keepAlive) rows.push('    ServerAliveInterval ' + number(input.aliveInterval, 'Keepalive interval', 1, 86400), '    ServerAliveCountMax ' + number(input.aliveCount, 'Keepalive count', 1, 100));
      let jumpNames: string[] = [];
      if (input.proxyMode === 'jump') { const proxy = jump(input.proxyJump); jumpNames = proxy.names; rows.push('    ProxyJump ' + proxy.text); }
      else if (input.proxyMode === 'command') { rows.push('    ProxyCommand ' + command(input.proxyCommand)); warnings.push('Host ' + (index + 1) + ': ProxyCommand will run through your shell when this config is used. Review it before installing; this builder does not execute it.'); }
      links.push(jumpNames);
      for (const [field, type, directive] of [['localForward','local','LocalForward'],['remoteForward','remote','RemoteForward'],['dynamicForward','dynamic','DynamicForward']] as const) {
        const rules = forwards(input[field], type); forwardingCount += rules.lines.length; rows.push(...rules.lines.map(line => '    ' + directive + ' ' + line));
        if (rules.publicBind) warnings.push('Host ' + (index + 1) + ': ' + directive + ' requests an all-interface listener. Accessibility also depends on the SSH client/server GatewayPorts policy and firewalls.');
      }
      if (input.hostKeyChecking === 'no') warnings.push('Host ' + (index + 1) + ': StrictHostKeyChecking no weakens changed-host-key protection. Prefer ask, yes or accept-new where appropriate.');
      if (knownHosts === 'none' || /^(?:\/dev\/null|nul)$/i.test(knownHosts)) warnings.push('Host ' + (index + 1) + ': the user known-hosts file is disabled or discarded; system host records may still apply.');
      if (input.forwardAgent) warnings.push('Host ' + (index + 1) + ': agent forwarding lets processes on the remote host request signatures from your loaded agent. Enable it only when needed on a trusted host.');
      if (hasPatterns) warnings.push('Host ' + (index + 1) + ': patterns may overlap other blocks. OpenSSH usually uses the first value found; place specific hosts before broad defaults. Forwarding and identity directives may accumulate.');
      return rows.join('\n');
    } catch (error) { throw new Error('Host ' + (index + 1) + ': ' + (error instanceof Error ? error.message : 'Check this host’s fields.')); }
  });
  const owners = new Map<string, number>(); groups.forEach((group, index) => group.filter(alias => !/[*?!]/.test(alias)).forEach(alias => owners.set(alias.toLowerCase(), index)));
  const visiting = new Set<number>(), visited = new Set<number>();
  function visit(index: number): void {
    if (visiting.has(index)) throw new Error('ProxyJump has a cycle through a configured host alias. Remove the circular jump.');
    if (visited.has(index)) return; visiting.add(index);
    for (const name of links[index]) { const next = owners.get(name); if (next !== undefined) visit(next); }
    visiting.delete(index); visited.add(index);
  }
  hosts.forEach((_, index) => visit(index));
  return { config: '# SSH client configuration — generated locally by XcellHost\n# Review and merge with your existing ~/.ssh/config; no connection has been tested.\n\n' + blocks.join('\n\n') + '\n', hostCount: hosts.length, forwardingCount, warnings, aliases };
}
