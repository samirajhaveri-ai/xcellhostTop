export interface InspectedQuery { index: number; key: string; value: string; }
export interface InspectedSegment { index: number; encoded: string; decoded: string; }
export interface InspectedUrl {
  normalized: string;
  scheme: string;
  origin: string;
  host: string;
  hostname: string;
  hostKind: string;
  port: string;
  effectivePort: number;
  pathname: string;
  decodedPath: string;
  requestTarget: string;
  query: string;
  hasQuery: boolean;
  parameters: InspectedQuery[];
  duplicateKeys: string[];
  fragment: string;
  decodedFragment: string;
  hasFragment: boolean;
  segments: InspectedSegment[];
  hasCredentials: boolean;
  notes: string[];
}

export function inspectWebUrl(input: string): InspectedUrl {
  if (typeof input !== 'string' || input.length > 8192 || /[\x00-\x1f\x7f]/.test(input)) {
    throw new Error('Use a single URL up to 8,192 characters, without control characters.');
  }
  const value = input.trim();
  if (!/^https?:\/\//i.test(value)) throw new Error('Include http:// or https://, for example https://example.com/path?key=value.');
  let url: URL;
  try { url = new URL(value); } catch { throw new Error('Enter a valid HTTP(S) URL with a hostname and a valid port.'); }
  if (!url.hostname || /\\/.test(value)) throw new Error('Use a hostname and forward slashes. Backslashes are not supported.');
  const notes: string[] = [];
  const hasCredentials = !!(url.username || url.password);
  if (hasCredentials) {
    url.username = ''; url.password = '';
    notes.push('Embedded username/password values were omitted from the normalized URL and reports. Query and fragment values remain visible.');
  }
  const decode = (encoded: string, label: string, recordNote = true): string => {
    try { return decodeURIComponent(encoded); }
    catch { if (recordNote) notes.push(label+' contains an incomplete escape or invalid UTF-8 sequence; the encoded value is retained.'); return encoded; }
  };
  const parameters = Array.from(url.searchParams,([key,value],i)=>({index:i+1,key,value}));
  const counts = new Map<string,number>();
  parameters.forEach(param=>counts.set(param.key,(counts.get(param.key)||0)+1));
  const duplicateKeys = [...counts].filter(([,count])=>count>1).map(([key])=>key);
  const query = url.search.slice(1), fragment = url.hash.slice(1);
  if (query) { try { decodeURIComponent(query.replace(/\+/g,' ')); } catch { notes.push('The query has malformed encoding. Query values use the URLSearchParams decoding model, which may retain escapes or insert replacement characters.'); } }
  const decodedPath = decode(url.pathname,'The path'), decodedFragment = decode(fragment,'The fragment');
  const segments = url.pathname==='/'?[]:url.pathname.slice(1).split('/').map((encoded,i)=>({index:i+1,encoded,decoded:decode(encoded,'',false)}));
  const hostKind = url.hostname.startsWith('[')?'IPv6 literal':/^(?:\d+\.){3}\d+$/.test(url.hostname)?'IPv4 literal':url.hostname==='localhost'?'Local hostname':'Hostname';
  if (url.hostname.includes('xn--')) notes.push('The hostname uses its ASCII IDN representation (Punycode).');
  if (url.href!==value && !hasCredentials) notes.push('The normalized URL follows browser URL rules, including hostname case, default ports, encoding and dot-segment resolution.');
  return {normalized:url.href,scheme:url.protocol.slice(0,-1),origin:url.origin,host:url.host,hostname:url.hostname,hostKind,port:url.port,effectivePort:url.port?Number(url.port):url.protocol==='https:'?443:80,pathname:url.pathname,decodedPath,requestTarget:url.pathname+url.search,query,hasQuery:url.href.split('#',1)[0].includes('?'),parameters,duplicateKeys,fragment,decodedFragment,hasFragment:url.href.includes('#'),segments,hasCredentials,notes:[...new Set(notes)]};
}

export function inspectedUrlRows(report: InspectedUrl): {label:string;value:string}[] {
  return [
    [report.hasCredentials?'Normalized URL (user info omitted)':'Normalized URL',report.normalized],
    ['Scheme',report.scheme],['Origin',report.origin],['Host',report.host],['Hostname',report.hostname],['Host format',report.hostKind],
    ['Explicit port (normalized)',report.port||'Default; not present in the normalized URL'],['Effective port',String(report.effectivePort)],
    ['Encoded path',report.pathname],['Decoded path',report.decodedPath],['HTTP request target',report.requestTarget],
    ['Raw query',report.query||(report.hasQuery?'Empty query string':'No query')],['Encoded fragment',report.fragment||(report.hasFragment?'Empty fragment':'No fragment')],
    ['Decoded fragment',report.decodedFragment||(report.hasFragment?'Empty fragment':'No fragment')],['Embedded user info',report.hasCredentials?'Present; omitted from this report':'None'],
  ].map(([label,value])=>({label,value}));
}

export function inspectedUrlText(report: InspectedUrl): string {
  return 'XcellHost | URL Inspector\n\n'+inspectedUrlRows(report).map(row=>row.label+': '+row.value).join('\n')+
    '\n\nQuery parameters (decoded, source order)\n'+(report.parameters.map(param=>param.index+'. '+JSON.stringify(param.key)+' = '+JSON.stringify(param.value)).join('\n')||'None')+
    '\n\nNotes\n'+(report.notes.join('\n')||'Parsed locally; the destination was not requested.')+'\n';
}
