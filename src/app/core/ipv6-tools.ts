export type Ipv6State='PASS'|'FAIL'|'UNKNOWN'|'INFO';
export interface Ipv6Probe {state:Ipv6State;detail:string;address?:string|null;status?:number;location?:string;durationMs?:number;tls?:Ipv6State;greeting?:string;hostname?:string;}
export interface Ipv6Dns {name:string;type:number;status:'NOERROR'|'NXDOMAIN'|'ERROR';records:{name:string;type:number;ttl:number;data:string}[];error?:string;}
export interface Ipv6Host {host:string;dns:Ipv6Dns|null;address:string|null;probe:Ipv6Probe;priority?:number;reverse?:Ipv6Probe;}
export interface Ipv6ReadinessReport {
  domain:string;checkedAt:string;durationMs:number;runner:{available:boolean;detail:string};
  dns:{a:Ipv6Dns;aaaa:Ipv6Dns;ns:Ipv6Dns;mx:Ipv6Dns|null;zone:string};
  website:{ipv4:Ipv6Probe;ipv6:Ipv6Probe;http6:Ipv6Probe;parity:Ipv6Probe;tls:Ipv6Probe};
  nameservers:Ipv6Host[];nameserverCount:number;mail:{mode:'disabled'|'unknown'|'null'|'invalid'|'explicit'|'implicit';hosts:Ipv6Host[];publishedCount:number};
  queryCount:number;limits:{nameservers:number;mailHosts:number;addressesPerHost:number;deadlineSeconds:number;redirectsFollowed:number};notes:string[];
}
export interface Ipv6AddressReport {expanded:string;compressed:string;groups:string[];hex:string;decimal:string;binary:string[];reverseName:string;kind:string;embeddedIpv4:string|null;}

export function normalizeIpv6Domain(input:string):string {
  if(typeof input!=='string'||input.length>2048||/[\s\x00-\x1f\\]/.test(input.trim()))throw new Error('Use a public domain, HTTP(S) URL or simple email address without spaces.');
  let value=input.trim();
  if(!value)throw new Error('Enter a public domain name to test.');
  if(!value.includes('://')&&value.includes('@')){const m=value.match(/^[^@\s]+@([^@\s]+)$/);if(!m)throw new Error('Enter a domain, website URL or simple email address.');value=m[1];}
  let url:URL;try{url=new URL(value.includes('://')?value:'https://'+value);}catch{throw new Error('Enter a domain such as example.com.');}
  const host=url.hostname.toLowerCase().replace(/\.$/,'');
  if(!['http:','https:'].includes(url.protocol)||url.username||url.password||url.port||host.length>253||/^[\d.]+$/.test(host)||!/^(?:[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?\.)+[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?$/i.test(host)||/\.(?:local|localhost|internal|test|invalid)$/.test(host))throw new Error('Use a public DNS hostname without credentials or a custom port. IP literals are not domain tests.');
  return host;
}

export function expandIpv6(input:string):Ipv6AddressReport {
  if(typeof input!=='string'||input.length>100||/[\x00-\x20\x7f/%]/.test(input.trim()))throw new Error('Use one IPv6 address without a prefix, scope ID, port or spaces.');
  let value=input.trim();
  if(value.startsWith('[')&&value.endsWith(']'))value=value.slice(1,-1);
  if(!value||!value.includes(':'))throw new Error('Enter an IPv6 address, such as 2001:db8::1.');
  if(value.includes('.')){
    const colon=value.lastIndexOf(':'),tail=value.slice(colon+1);
    if(!/^(?:0|[1-9]\d{0,2})(?:\.(?:0|[1-9]\d{0,2})){3}$/.test(tail)||tail.split('.').some(v=>Number(v)>255))throw new Error('The embedded IPv4 tail must contain four valid decimal octets.');
    const octets=tail.split('.').map(Number);value=value.slice(0,colon+1)+(octets[0]*256+octets[1]).toString(16)+':'+(octets[2]*256+octets[3]).toString(16);
  }
  const halves=value.split('::');if(halves.length>2)throw new Error('An IPv6 address can contain at most one :: compression marker.');
  const left=halves[0]?halves[0].split(':'):[],right=halves[1]?halves[1].split(':'):[],missing=8-left.length-right.length;
  if((halves.length===1&&missing!==0)||(halves.length===2&&missing<1)||[...left,...right].some(v=>!/^[a-f\d]{1,4}$/i.test(v)))throw new Error('Use eight hexadecimal groups, or one :: marker replacing one or more zero groups.');
  const groups=[...left,...Array(halves.length===2?missing:0).fill('0'),...right].map(v=>Number.parseInt(v,16).toString(16).padStart(4,'0'));
  let best=-1,bestLength=1;
  for(let i=0;i<8;){if(groups[i]!=='0000'){i++;continue;}let end=i;while(end<8&&groups[end]==='0000')end++;if(end-i>bestLength){best=i;bestLength=end-i;}i=end;}
  const short=groups.map(v=>Number.parseInt(v,16).toString(16));
  const compressed=best<0?short.join(':'):short.slice(0,best).join(':')+'::'+short.slice(best+bestLength).join(':');
  const hex=groups.join(''),number=BigInt('0x'+hex),first=Number.parseInt(groups[0],16);
  const embeddedIpv4=hex.startsWith('00000000000000000000ffff')?[Number.parseInt(hex.slice(24,26),16),Number.parseInt(hex.slice(26,28),16),Number.parseInt(hex.slice(28,30),16),Number.parseInt(hex.slice(30,32),16)].join('.'):null;
  const kind=number===0n?'Unspecified':number===1n?'Loopback':embeddedIpv4?'IPv4-mapped':hex.startsWith('20010db8')?'Documentation':(first&0xfe00)===0xfc00?'Unique local':(first&0xffc0)===0xfe80?'Link-local':(first&0xff00)===0xff00?'Multicast':(first&0xe000)===0x2000?'Global-unicast prefix':'Other / special-use';
  return {expanded:groups.join(':'),compressed,groups,hex,decimal:number.toString(),binary:groups.map(v=>Number.parseInt(v,16).toString(2).padStart(16,'0')),reverseName:hex.split('').reverse().join('.')+'.ip6.arpa',kind,embeddedIpv4};
}

export function ipv6Checks(report:Ipv6ReadinessReport):{title:string;state:Ipv6State;detail:string;fix:string;icon:string}[]{
  const addresses=report.dns.aaaa.records.filter(r=>r.type===28),ns=report.nameservers,mail=report.mail;
  const aggregate=(rows:Ipv6Host[]):Ipv6State=>!rows.length?'UNKNOWN':rows.some(r=>r.probe.state==='FAIL')?'FAIL':rows.some(r=>r.probe.state==='UNKNOWN')?'UNKNOWN':'PASS';
  const nsState=aggregate(ns),mailState=mail.mode==='null'||mail.mode==='disabled'?'INFO':mail.mode==='invalid'?'FAIL':aggregate(mail.hosts);
  return [
    {title:'Website AAAA records',state:report.dns.aaaa.status==='ERROR'?'UNKNOWN':addresses.length?'PASS':'FAIL',detail:report.dns.aaaa.status==='ERROR'?'The DNS lookup failed; publication is unverified.':addresses.length+' IPv6 address record(s) returned. This alone does not prove connectivity.',fix:'Publish the intended public IPv6 address in an AAAA record, then test its listener and firewall.',icon:'dns'},
    {title:'Website over IPv6',state:report.website.ipv6.state,detail:report.website.ipv6.detail,fix:'Review the IPv6 web listener, route and TCP/443 firewall. Results are from this runner only.',icon:'language'},
    {title:'IPv6 TLS certificate',state:report.website.tls.state,detail:report.website.tls.detail,fix:'Serve a valid certificate for the domain on the IPv6 HTTPS listener. Check the runner’s trust store too.',icon:'verified_user'},
    {title:'IPv4 / IPv6 response parity',state:report.website.parity.state,detail:report.website.parity.detail,fix:'Compare initial status and redirect headers for both listeners. Review content and redirected URLs separately.',icon:'compare_arrows'},
    {title:'Authoritative DNS over IPv6',state:nsState,detail:ns.length?ns.filter(h=>h.probe.state==='PASS').length+' of '+ns.length+' sampled nameserver(s) returned an authoritative IPv6 SOA response. '+report.nameserverCount+' nameserver(s) published.':'No nameserver endpoint could be sampled.',fix:'Provide public AAAA addresses for authoritative DNS and permit IPv6 UDP/53. This tool does not test TCP/53.',icon:'account_tree'},
    {title:'Mail greeting over IPv6',state:mailState,detail:mail.mode==='null'?'Null MX explicitly declares no receiving mail service.':mail.mode==='disabled'?'Mail checks were switched off.':mail.mode==='invalid'?'The MX answer has malformed or conflicting Null MX data; no mail endpoints were probed.':mail.hosts.length?mail.hosts.filter(h=>h.probe.state==='PASS').length+' of '+mail.hosts.length+' sampled mail host(s) returned an initial 220 greeting.':'No mail endpoint could be sampled.',fix:'If receiving mail over IPv6, review the MX host’s AAAA record, IPv6 SMTP listener and PTR/forward DNS. Runner egress policy can block port 25.',icon:'mail'},
  ];
}

export function ipv6ReportText(report:Ipv6ReadinessReport):string {
  return 'XcellHost | IPv6 Readiness Snapshot\n'+report.domain+'\n'+report.checkedAt+'\n\nRunner: '+report.runner.detail+'\n\n'+ipv6Checks(report).map(c=>c.title+' ['+c.state+']\n'+c.detail).join('\n\n')+'\n\n'+report.notes.join('\n')+'\n';
}
