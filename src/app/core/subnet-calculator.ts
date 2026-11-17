const IPV4_SIZE = 2 ** 32;

export interface SubnetCategory {
  name: string;
  block: string;
  private: boolean;
  note: string;
}
export interface SubnetReport {
  input: string;
  address: string;
  prefix: number;
  cidr: string;
  network: string;
  lastAddress: string;
  broadcast: string | null;
  mask: string;
  wildcard: string;
  firstHost: string;
  lastHost: string;
  total: number;
  usable: number;
  hostBits: number;
  networkBits: number;
  inputPosition: string;
  hostOffset: number;
  legacyClass: string;
  category: SubnetCategory;
  allPrivate: boolean;
  mode: 'subnet' | 'point-to-point' | 'host-route';
  note: string;
  binary: { label: string; value: string; octets: string[] }[];
}

export function parseSubnetAddress(value: string): number {
  if (!/^(?:0|[1-9]\d{0,2})(?:\.(?:0|[1-9]\d{0,2})){3}$/.test(value)) {
    throw new Error('Use four decimal IPv4 octets without leading zeros, such as 192.168.1.10.');
  }
  const parts = value.split('.').map(Number);
  if (parts.some(part => part > 255)) throw new Error('Each IPv4 octet must be between 0 and 255.');
  return parts.reduce((number, part) => number * 256 + part, 0);
}

export function subnetAddressText(value: number): string {
  if (!Number.isInteger(value) || value < 0 || value >= IPV4_SIZE) throw new Error('IPv4 value is outside the 32-bit range.');
  return [24, 16, 8, 0].map(shift => Math.floor(value / 2 ** shift) % 256).join('.');
}

function inside(value: number, base: string, prefix: number): boolean {
  const size = 2 ** (32 - prefix), start = parseSubnetAddress(base);
  return value >= start && value < start + size;
}

export function subnetCategory(value: number): SubnetCategory {
  if (value === 0) return {name:'Unspecified address',block:'0.0.0.0/32',private:false,note:'This host on this network; not an ordinary assignable unicast address.'};
  if (value === IPV4_SIZE - 1) return {name:'Limited broadcast',block:'255.255.255.255/32',private:false,note:'The IPv4 limited-broadcast address is not an ordinary host address.'};
  for (const [base, prefix] of [['10.0.0.0',8],['172.16.0.0',12],['192.168.0.0',16]] as const) {
    if (inside(value,base,prefix)) return {name:'Private-use (RFC 1918)',block:base+'/'+prefix,private:true,note:'Private-use space. It is not globally reachable on the public Internet.'};
  }
  const ranges = [
    ['0.0.0.0',8,'This network','Special-purpose source-address space.'],
    ['100.64.0.0',10,'Shared address space (CGNAT)','Shared service-provider space; this is distinct from RFC 1918 private-use space.'],
    ['127.0.0.0',8,'Loopback','Local host loopback space.'],
    ['169.254.0.0',16,'Link-local','Used on the local link; not an ordinary routed subnet allocation.'],
    ['192.0.0.0',24,'IETF protocol assignments','Special-purpose allocations with more-specific exceptions; consult the IANA registry.'],
    ['192.0.2.0',24,'Documentation (TEST-NET-1)','Reserved for examples and documentation.'],
    ['192.88.99.0',24,'Former 6to4 relay space','Deprecated allocation with a more-specific assignment; consult the IANA registry.'],
    ['198.18.0.0',15,'Benchmark testing','Reserved for benchmarking network devices.'],
    ['198.51.100.0',24,'Documentation (TEST-NET-2)','Reserved for examples and documentation.'],
    ['203.0.113.0',24,'Documentation (TEST-NET-3)','Reserved for examples and documentation.'],
    ['224.0.0.0',4,'Multicast','Multicast group addresses are not ordinary unicast host allocations.'],
    ['240.0.0.0',4,'Reserved address space','Reserved IPv4 space; not an ordinary unicast host allocation.'],
  ] as const;
  for (const [base,prefix,name,note] of ranges) {
    if (inside(value,base,prefix)) return {name,block:base+'/'+prefix,private:false,note};
  }
  return {name:'Other IPv4 space',block:'No common category matched',private:false,note:'Not in the common ranges listed by this calculator. Allocation, more-specific special uses and actual reachability are not checked.'};
}

export function calculateSubnet(value: string): SubnetReport {
  if (typeof value !== 'string' || value.length > 64 || /[\x00-\x1f\x7f]/.test(value)) throw new Error('Enter one IPv4 address and CIDR prefix, such as 192.168.1.10/24.');
  const input = value.trim(), parts = input.split('/');
  if (parts.length !== 2 || !/^(?:0|[1-9]\d?)$/.test(parts[1])) throw new Error('Add a CIDR prefix from /0 to /32, for example 192.168.1.10/24.');
  const ip = parseSubnetAddress(parts[0]), prefix = Number(parts[1]);
  if (prefix > 32) throw new Error('IPv4 CIDR prefixes must be between /0 and /32.');
  const total = 2 ** (32-prefix), network = Math.floor(ip/total)*total, last = network+total-1;
  const mask = IPV4_SIZE-total, wildcard = total-1, firstHost = network+(prefix<31?1:0), lastHost = last-(prefix<31?1:0);
  const mode = prefix===32?'host-route':prefix===31?'point-to-point':'subnet';
  const address = subnetAddressText(ip), category = subnetCategory(ip), hostOffset = ip-network;
  const firstOctet = Math.floor(ip/2**24);
  const legacyClass = firstOctet<128?'A':firstOctet<192?'B':firstOctet<224?'C':firstOctet<240?'D (multicast)':'E (reserved)';
  const inputPosition = mode==='host-route'?'Single host route':mode==='point-to-point'?'Point-to-point endpoint':ip===network?'Network address':ip===last?'Directed broadcast address':'Host address';
  let allPrivate = false;
  if (category.private) { const [base,prefixText] = category.block.split('/'); const start = parseSubnetAddress(base); allPrivate = network>=start&&last<start+2**(32-Number(prefixText)); }
  const note = mode==='point-to-point'?'Both addresses are endpoint slots under RFC 3021 point-to-point semantics. There is no directed-broadcast slot.':mode==='host-route'?'A /32 identifies one address as a host route. It has no separate network or broadcast slot.':'The first and last addresses are conventional network and directed-broadcast slots. Special-purpose addresses and provider reservations can reduce assignable hosts.';
  const binary = [['Input address',ip],['Subnet mask',mask],['Network address',network],['Last address',last],['Wildcard mask',wildcard]].map(([label,number])=>{
    const octets = subnetAddressText(number as number).split('.').map(octet=>Number(octet).toString(2).padStart(8,'0'));
    return {label:label as string,value:octets.join('.'),octets};
  });
  return {input:address+'/'+prefix,address,prefix,cidr:subnetAddressText(network)+'/'+prefix,network:subnetAddressText(network),lastAddress:subnetAddressText(last),broadcast:prefix<31?subnetAddressText(last):null,mask:subnetAddressText(mask),wildcard:subnetAddressText(wildcard),firstHost:subnetAddressText(firstHost),lastHost:subnetAddressText(lastHost),total,usable:prefix<31?total-2:total,hostBits:32-prefix,networkBits:prefix,inputPosition,hostOffset,legacyClass,category,allPrivate,mode,note,binary};
}

export function subnetRows(report: SubnetReport): {label:string;value:string}[] {
  return [
    ['Input IPv4 / CIDR',report.input],['Network / CIDR',report.cidr],['Subnet mask',report.mask],['Wildcard mask',report.wildcard],
    ['Network address',report.network],['Last address in range',report.lastAddress],['Broadcast address',report.broadcast||'Not used for /31 and /32'],
    ['First host slot',report.firstHost],['Last host slot',report.lastHost],['Total addresses',String(report.total)],['Usable host slots',String(report.usable)],
    ['Network bits',String(report.networkBits)],['Host bits',String(report.hostBits)],['Input position',report.inputPosition],['Input address category',report.category.name],['Category block',report.category.block],['Entire subnet in RFC 1918 space',report.allPrivate?'Yes':'No'],['Historical class',report.legacyClass],['Subnet interpretation',report.note],
    ...report.binary.map(row=>[row.label+' (binary)',row.value]),
  ].map(([label,value])=>({label,value}));
}

export function subnetReportText(report: SubnetReport): string {
  return 'XcellHost | IPv4 Subnet Calculator\n\n'+subnetRows(report).map(row=>row.label+': '+row.value).join('\n')+'\n';
}
export function subnetReportCsv(report: SubnetReport): string {
  const quote=(value:string)=>'"'+value.replace(/"/g,'""')+'"';
  return 'Field,Value\r\n'+subnetRows(report).map(row=>quote(row.label)+','+quote(row.value)).join('\r\n')+'\r\n';
}
