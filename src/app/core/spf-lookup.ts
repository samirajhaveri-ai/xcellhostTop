import { DnsHostResult, DnsLookupReport, DnsResolverId, lookupDns, normalizeDnsDomain } from './dns-lookup';
import { readTxtValue } from './txt-lookup';
import { parsePtrAddress } from './ptr-lookup';
import { dnsCsv } from './dns-report-export';

export interface SpfCheck { label: string; detail: string; state: 'PASS' | 'REVIEW' | 'INFO' | 'FAIL'; }
export interface SpfTerm {
  raw: string; name: string; kind: 'mechanism' | 'modifier'; qualifier: string; value: string;
  dns: boolean; active: boolean; valid: boolean; dynamic: boolean; note: string;
}
export interface SpfPolicy { record: string; terms: SpfTerm[]; errors: string[]; warnings: string[]; dnsTerms: number; all: string | null; }
export interface SpfRecord { owner: string; value: string; raw: string; ttl: number; chunks: number; }
export interface SpfNode {
  id: number; domain: string; owner: string; depth: number; from: number | null; via: string;
  state: 'POLICY' | 'NONE' | 'MULTIPLE' | 'INVALID' | 'ERROR' | 'CYCLE' | 'DEFERRED' | 'LIMIT' | 'SKIPPED';
  records: SpfRecord[]; policy: SpfPolicy | null; note: string; hostIndex: number | null;
}
export interface SpfLookupReport extends DnsLookupReport {
  nodes: SpfNode[]; expand: boolean; queryCount: number; potentialDnsTerms: number; expansionComplete: boolean; limits: string[];
}
export const SPF_LIMITS = { queries: 20, nodes: 40, depth: 8, recordLength: 16384, terms: 200, timeoutMs: 30000 } as const;
const dnsTerms = new Set(['a', 'mx', 'ptr', 'exists', 'include', 'redirect']);
const descriptions: Record<string, string> = {
  all: 'Always matches when reached; the qualifier supplies the default result.',
  include: 'Evaluate the referenced SPF policy; only its pass result matches this mechanism.',
  a: 'Compare the sender IP with A or AAAA addresses for the target name.',
  mx: 'Compare the sender IP with addresses of the target name\'s MX hosts.',
  ptr: 'Reverse and forward DNS matching; publishing ptr is discouraged by RFC 7208.',
  ip4: 'Match a literal IPv4 network without a DNS lookup.', ip6: 'Match a literal IPv6 network without a DNS lookup.',
  exists: 'An A-record existence test at the expanded domain; no sender evaluation is performed here.',
  redirect: 'Use the target policy only if no mechanism matches; ignored when all is present.',
  exp: 'Explanation text for a fail result; not fetched here and not part of the ten-term limit.',
};
function staticDomain(value: string): string | null {
  const name = value.toLowerCase().replace(/\.$/, '');
  if (name.length > 253 || !name.includes('.') || !/^[a-z0-9_.-]+$/.test(name) || !name.split('.').every(label => /^[a-z0-9_](?:[a-z0-9_-]{0,61}[a-z0-9_])?$/.test(label))) return null;
  const top = name.split('.').at(-1)!;
  return /^(?:[a-z0-9]*[a-z][a-z0-9]*|[a-z0-9]+-[a-z0-9-]*[a-z0-9])$/.test(top) ? name : null;
}
function macroString(value: string): boolean {
  for (let at = 0; at < value.length; at++) {
    const code = value.charCodeAt(at); if (code < 33 || code > 126) return false;
    if (value[at] !== '%') continue;
    const macro = /^(?:%%|%_|%-|%\{[slodipvh]\d*r?[.\-+,/_=]*\})/i.exec(value.slice(at));
    if (!macro) return false; at += macro[0].length - 1;
  }
  return true;
}
function domainSpec(value: string): boolean {
  if (!value || !macroString(value)) return false;
  if (!value.includes('%')) return !!staticDomain(value);
  return /(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.?|%\{[a-zA-Z][^}]*\}|%%|%_|%-)$/i.test(value);
}
function network(value: string, family: 4 | 6): boolean {
  const parts = value.split('/');
  if (parts.length > 2 || /[\[\]\s%]/.test(parts[0]) || (parts[1] !== undefined && (!/^(?:0|[1-9]\d{0,2})$/.test(parts[1]) || Number(parts[1]) > (family === 4 ? 32 : 128)))) return false;
  try { return parsePtrAddress(parts[0]).family === family; } catch { return false; }
}
/** Static SPF grammar checks and term interpretation, not check_host() evaluation. */
export function parseSpfPolicy(record: string): SpfPolicy {
  const policy: SpfPolicy = { record, terms: [], errors: [], warnings: [], dnsTerms: 0, all: null };
  if (record.length > SPF_LIMITS.recordLength) { policy.errors.push('Policy exceeds this tool\'s 16 KiB analysis limit.'); return policy; }
  if (!/^v=spf1(?: |$)/i.test(record)) { policy.errors.push('The version must be v=spf1 followed by an ASCII space or the end of the record.'); return policy; }
  if (/[^\x20-\x7e]/.test(record)) { policy.errors.push('SPF terms must use printable ASCII with spaces between terms.'); return policy; }
  const tokens = record.slice(6).trim().split(/ +/).filter(Boolean);
  if (tokens.length > SPF_LIMITS.terms) { policy.errors.push('Policy exceeds this tool\'s 200-term analysis limit.'); return policy; }
  let seenAll = false; const modifiers = new Set<string>();
  for (const raw of tokens) {
    const modifier = /^([a-z][a-z\d_.-]*)=(.*)$/i.exec(raw);
    let name: string, value = '', qualifier = '+', valid = true, dynamic = false;
    if (modifier) {
      name = modifier[1].toLowerCase(); value = modifier[2]; qualifier = '';
      if (name === 'redirect' || name === 'exp') {
        if (modifiers.has(name)) { valid = false; policy.errors.push('The ' + name + ' modifier appears more than once.'); }
        modifiers.add(name); valid = domainSpec(value) && valid;
      } else {
        // Unknown modifiers are ignored by SPF; their value is not a mechanism.
        valid = /^[\x21-\x7e]*$/.test(value); policy.warnings.push('Unknown modifier ' + name + ' is ignored by SPF.');
      }
    } else {
      const term = /^([+~?\-]?)([a-z][a-z\d]*)(.*)$/i.exec(raw);
      if (!term) { name = 'unknown'; valid = false; }
      else {
        qualifier = term[1] || '+'; name = term[2].toLowerCase(); const rest = term[3];
        if (name === 'all') valid = rest === '';
        else if (name === 'ip4' || name === 'ip6') { value = rest.slice(1); valid = rest.startsWith(':') && network(value, name === 'ip4' ? 4 : 6); }
        else if (name === 'include' || name === 'exists') { value = rest.slice(1); valid = rest.startsWith(':') && domainSpec(value); }
        else if (name === 'ptr') { value = rest ? rest.slice(1) : ''; valid = !rest || rest.startsWith(':') && domainSpec(value); }
        else if (name === 'a' || name === 'mx') {
          let split = -1, inMacro = false;
          for (let index = 0; index < rest.length; index++) { if (rest[index] === '{' && rest[index - 1] === '%') inMacro = true; if (rest[index] === '}') inMacro = false; if (rest[index] === '/' && !inMacro) { split = index; break; } }
          const domain = split < 0 ? rest : rest.slice(0, split), cidr = split < 0 ? '' : rest.slice(split);
          value = domain ? domain.slice(1) : '';
          const lengths = /^(?:\/(0|[1-9]\d?))?(?:\/\/(0|[1-9]\d{0,2}))?$/.exec(cidr);
          valid = (!domain || domain.startsWith(':') && domainSpec(value)) && !!lengths && (!lengths[1] || Number(lengths[1]) <= 32) && (!lengths[2] || Number(lengths[2]) <= 128);
        } else valid = false;
      }
    }
    if (!valid) policy.errors.push('Unsupported or malformed term: ' + raw);
    dynamic = value.includes('%');
    const term: SpfTerm = { raw, name, value, qualifier, kind: modifier ? 'modifier' : 'mechanism', dns: modifier ? name === 'redirect' : dnsTerms.has(name), active: !seenAll || !!modifier, valid, dynamic, note: modifier && name !== 'redirect' && name !== 'exp' ? 'Unknown modifier; ignored by SPF.' : descriptions[name] || 'Unknown mechanism.' };
    if (!modifier && seenAll) term.note = 'Ignored: a preceding all mechanism always matches.';
    policy.terms.push(term);
    if (!modifier && name === 'all' && valid && !seenAll) { seenAll = true; policy.all = qualifier + 'all'; }
  }
  for (const term of policy.terms) if (term.name === 'redirect' && seenAll) { term.active = false; term.note = 'Ignored because the policy contains an all mechanism.'; }
  policy.dnsTerms = policy.terms.filter(term => term.valid && term.active && term.dns).length;
  if (policy.terms.some(term => term.name === 'ptr' && term.kind === 'mechanism')) policy.warnings.push('The ptr mechanism is discouraged by RFC 7208.');
  if (policy.all === '+all') policy.warnings.push('+all matches every sender when reached.');
  if (!policy.all && !policy.terms.some(term => term.name === 'redirect')) policy.warnings.push('Without an all mechanism or redirect, a no-match evaluation defaults to neutral.');
  if (policy.terms.some(term => !term.active)) policy.warnings.push('Some terms are ignored because the policy contains all.');
  return policy;
}
function policyRecords(host: DnsHostResult, domain: string): { owner: string; records: SpfRecord[]; note: string; badAlias: boolean } {
  let owner = domain; const seen = new Set<string>();
  for (let count = 0; count < 13; count++) {
    if (seen.has(owner)) return { owner, records: [], note: 'CNAME loop in the resolver answer.', badAlias: true };
    seen.add(owner);
    const aliases = host.records.filter(record => record.type === 'CNAME' && record.name.toLowerCase() === owner);
    if (!aliases.length) break;
    const targets = [...new Set(aliases.map(alias => alias.value.toLowerCase().replace(/\.$/, '')))];
    if (targets.length !== 1 || !staticDomain(targets[0]) || host.records.some(record => record.type === 'TXT' && record.name.toLowerCase() === owner) || count === 12) return { owner, records: [], note: 'Ambiguous, malformed or overlong CNAME answer.', badAlias: true };
    owner = targets[0];
  }
  const records: SpfRecord[] = [], seenRaw = new Set<string>();
  const returned = host.records.filter(record => record.type === 'TXT' && record.name.toLowerCase() === owner);
  let unreadable = Math.max(0, returned.length - 200);
  for (const record of returned.slice(0, 200)) {
    if (typeof record.value !== 'string' || record.value.length > SPF_LIMITS.recordLength * 2) { unreadable++; continue; }
    const parsed = readTxtValue(record.value);
    if (!parsed.parsed) { unreadable++; continue; }
    if (!/^v=spf1(?: |$)/i.test(parsed.value) || seenRaw.has(record.value)) continue;
    seenRaw.add(record.value); records.push({ owner, value: parsed.value, raw: record.value, ttl: record.ttl, chunks: parsed.chunks.length });
  }
  return { owner, records, note: unreadable ? unreadable + ' TXT value(s) could not be safely read; inspect the raw answer.' : '', badAlias: false };
}
export async function lookupSpf(input: string, resolver: DnsResolverId, expand = true, signal?: AbortSignal, progress?: (message: string) => void): Promise<SpfLookupReport> {
  signal?.throwIfAborted(); const domain = normalizeDnsDomain(input), start = performance.now();
  const deadline = AbortSignal.timeout(SPF_LIMITS.timeoutMs), combined = signal ? AbortSignal.any([signal, deadline]) : deadline;
  const cache = new Map<string, number>(), hosts: DnsHostResult[] = [], nodes: SpfNode[] = [], limits = new Set<string>();
  let resolverName = '', stopped = false;
  const visit = async (name: string, depth: number, from: number | null, via: string, path: string[]): Promise<void> => {
    signal?.throwIfAborted();
    if (nodes.length >= SPF_LIMITS.nodes) { limits.add('The 40-node dependency expansion limit was reached.'); stopped = true; return; }
    const node: SpfNode = { id: nodes.length, domain: name, owner: name, depth, from, via, state: 'POLICY', records: [], policy: null, note: '', hostIndex: null }; nodes.push(node);
    if (path.includes(name)) { node.state = 'CYCLE'; node.note = 'Dependency cycle: ' + [...path, name].join(' -> '); return; }
    if (depth > SPF_LIMITS.depth || deadline.aborted) { node.state = 'LIMIT'; node.note = deadline.aborted ? 'The 30-second snapshot deadline was reached.' : 'The eight-level expansion limit was reached.'; limits.add(node.note); return; }
    let index = cache.get(name);
    if (index === undefined) {
      if (hosts.length === SPF_LIMITS.queries) { node.state = 'LIMIT'; node.note = 'The 20-query snapshot limit was reached.'; limits.add(node.note); return; }
      progress?.('Reading SPF TXT policy at ' + name + ' (' + (hosts.length + 1) + ' DNS queries)');
      try { const query = await lookupDns(name, 'TXT', resolver, false, combined); signal?.throwIfAborted(); resolverName = query.resolver; index = hosts.length; cache.set(name, index); hosts.push(query.hosts[0]); }
      catch (error) {
        signal?.throwIfAborted(); if (!deadline.aborted) throw error;
        node.state = 'LIMIT'; node.note = 'The 30-second snapshot deadline was reached.'; limits.add(node.note);
        node.hostIndex = hosts.length; hosts.push({ name, status: 'ERROR', records: [], authenticated: false, error: node.note }); return;
      }
    }
    node.hostIndex = index; const host = hosts[index];
    if (host.status === 'ERROR') { node.state = 'ERROR'; node.note = host.error || 'Resolver request failed.'; return; }
    const selected = policyRecords(host, name); node.owner = selected.owner; node.records = selected.records; node.note = selected.note;
    if (selected.badAlias) { node.state = 'ERROR'; return; }
    if (!node.records.length) { node.state = node.note ? 'ERROR' : 'NONE'; node.note ||= host.status === 'NXDOMAIN' ? 'NXDOMAIN: this exact name was not found.' : 'No v=spf1 TXT policy was returned for this name.'; return; }
    if (node.records.length > 1) { node.state = 'MULTIPLE'; node.note = 'Multiple SPF records cause permerror when this policy is evaluated.'; return; }
    node.policy = parseSpfPolicy(node.records[0].value);
    if (node.policy.errors.length) { node.state = 'INVALID'; return; }
    const links = node.policy.terms.filter(term => term.valid && term.active && (term.name === 'include' && term.kind === 'mechanism' || term.name === 'redirect' && term.kind === 'modifier'));
    for (const term of links) {
      if (stopped) break;
      const target = term.value.replace(/%\{d\}/gi, name), concrete = target.includes('%') ? null : staticDomain(target);
      if (!expand || !concrete) {
        if (nodes.length >= SPF_LIMITS.nodes) { limits.add('The 40-node dependency expansion limit was reached.'); stopped = true; break; }
        nodes.push({ id: nodes.length, domain: term.value, owner: '', depth: depth + 1, from: node.id, via: term.raw, state: !expand ? 'SKIPPED' : 'DEFERRED', records: [], policy: null, hostIndex: null, note: !expand ? 'Dependency expansion is switched off.' : 'Macro target is outside this tool\'s static expansion. Use a sender-aware evaluator; no literal macro query was sent.' });
      } else await visit(concrete, depth + 1, node.id, term.raw, [...path, name]);
    }
  };
  await visit(domain, 0, null, 'root', []); signal?.throwIfAborted();
  const potentialDnsTerms = nodes.reduce((sum, node) => sum + (node.state === 'POLICY' ? node.policy?.dnsTerms || 0 : 0), 0);
  return { domain, type: 'TXT', resolver: resolverName || (resolver === 'cloudflare' ? 'Cloudflare' : 'Google Public DNS'), checkedAt: new Date().toISOString(), durationMs: Math.round(performance.now() - start), hosts, nodes, expand, queryCount: hosts.length, potentialDnsTerms, expansionComplete: !limits.size && nodes.every(node => node.state === 'POLICY' && !node.note), limits: [...limits] };
}
export function spfAnalysis(report: SpfLookupReport) {
  const root = report.nodes[0], problems = report.nodes.filter(node => ['MULTIPLE', 'INVALID', 'CYCLE'].includes(node.state));
  const incomplete = report.nodes.filter(node => ['ERROR', 'NONE', 'DEFERRED', 'LIMIT', 'SKIPPED'].includes(node.state) || node.state === 'POLICY' && !!node.note);
  const warnings = report.nodes.flatMap(node => (node.policy?.warnings || []).map(value => node.domain + ': ' + value));
  const diagnostics: SpfCheck[] = [
    { label: 'Root SPF record', detail: root.state === 'POLICY' || root.state === 'INVALID' ? 'One SPF TXT policy selected at ' + root.owner + '.' : root.note, state: root.state === 'POLICY' ? 'PASS' : root.state === 'NONE' ? 'REVIEW' : 'FAIL' },
    { label: 'Static syntax checks', detail: problems.length ? problems.map(node => node.domain + ': ' + (node.policy?.errors.join(' | ') || node.note)).join(' | ') : root.policy ? 'No syntax errors detected by this parser in the expanded policies. This is not a full check_host() evaluation.' : 'No single policy available to parse.', state: problems.length ? 'FAIL' : root.policy ? 'PASS' : 'INFO' },
    { label: 'Potential DNS terms', detail: report.potentialDnsTerms + ' active DNS-querying terms counted across the expanded policies. This static total is not an exact per-message lookup count; earlier matches can stop evaluation.', state: report.potentialDnsTerms > 10 ? 'REVIEW' : 'INFO' },
    { label: 'Dependency coverage', detail: incomplete.length || report.limits.length ? incomplete.length + ' dependencies or policies unresolved, skipped or missing. ' + report.limits.join(' ') : 'Static include / redirect dependencies expanded within the snapshot limits.', state: incomplete.length || report.limits.length ? 'REVIEW' : 'PASS' },
    { label: 'Default policy', detail: !root.policy ? 'No single parsed policy is available to describe a default.' : root.policy.all === '+all' ? '+all can authorize every sender when reached.' : root.policy.all ? root.policy.all + ' supplies the result when its all mechanism is reached. Receiver handling depends on local policy.' : root.policy.terms.some(term => term.name === 'redirect') ? 'See the active redirect target, unless all causes it to be ignored.' : 'No explicit all or redirect; a no-match evaluation defaults to neutral.', state: root.policy?.all === '+all' ? 'REVIEW' : 'INFO' },
    { label: 'Evaluation scope', detail: 'No sender IP, MAIL FROM or HELO was evaluated. Address expansion, MX/ptr sub-limits, void-lookup limits, exp text, DMARC alignment and delivery outcomes are not tested.', state: 'INFO' },
  ];
  const tips = [
    root.state === 'MULTIPLE' ? 'Publish one combined SPF record for this exact name; multiple v=spf1 records cause permerror.' : root.state === 'NONE' ? 'Confirm the exact envelope-sender domain. SPF is not inherited from a parent domain.' : problems.length ? 'Review malformed terms, duplicate modifiers or dependency cycles before editing the policy.' : report.potentialDnsTerms > 10 ? 'Review the potential DNS-term cost with a sender-aware SPF evaluator. More than ten evaluated DNS-querying terms causes permerror; a static sum alone does not prove that every sender exceeds the limit.' : 'Compare the authorized services with your actual sending platforms before changing the policy.',
    'Review unresolved dependencies and macros with real sending IPs and envelope identities. The snapshot sends TXT queries only, not A/MX/PTR evaluation queries.',
    'SPF authenticates an envelope identity, not the visible From header. Review DKIM and DMARC alignment separately, and allow cached TTLs to expire after changes.',
  ];
  const badge = root.state === 'NONE' ? 'NO SPF RETURNED' : root.state === 'ERROR' || root.state === 'LIMIT' ? 'LOOKUP INCOMPLETE' : problems.length ? 'POLICY ISSUES' : incomplete.length || report.limits.length ? 'REVIEW DEPENDENCIES' : warnings.length || report.potentialDnsTerms > 10 ? 'REVIEW POLICY' : 'POLICY SNAPSHOT';
  return { diagnostics, tips, warnings, badge, summary: 'SPF TXT snapshot with bounded static dependency analysis. No sender authentication result was calculated.' };
}
export function spfReportCsv(report: SpfLookupReport): string {
  const rows: (string | number)[][] = [['Root domain', 'Dependency domain', 'Parent node', 'Via', 'State', 'Record owner', 'SPF policy', 'Term', 'Meaning', 'Qualifier', 'Active', 'DNS-querying term', 'TTL seconds', 'Detail', 'Resolver', 'Checked at UTC']];
  for (const node of report.nodes) {
    if (!node.policy?.terms.length) for (const record of node.records.length ? node.records : [null]) rows.push([report.domain, node.domain, node.from ?? '', node.via, node.state, node.owner, record?.value || '', '', '', '', '', '', record?.ttl ?? '', node.note || node.policy?.errors.join(' | ') || '', report.resolver, report.checkedAt]);
    else for (const term of node.policy.terms) rows.push([report.domain, node.domain, node.from ?? '', node.via, node.state, node.owner, node.policy.record, term.raw, term.note, term.qualifier, term.active ? 'yes' : 'no', term.dns ? 'yes' : 'no', node.records[0]?.ttl ?? '', node.policy.errors.join(' | '), report.resolver, report.checkedAt]);
  }
  return dnsCsv(rows);
}
