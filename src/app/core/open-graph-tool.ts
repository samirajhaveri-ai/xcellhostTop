import { robotsOrigin } from './robots-tool';

export interface SocialTag { key: string; value: string; source: 'og' | 'twitter' | 'seo'; }
export interface SocialImage { url: string; finalUrl?: string; status?: number; width?: number; height?: number; mime?: string; dataUrl?: string; error?: string; }
export interface SocialSnapshot {
  requestedUrl: string; finalUrl: string; baseUrl: string; status: number; contentType: string;
  bytes: number; truncated: boolean; checkedAt: string; redirects: {url: string; status: number}[];
  tags: SocialTag[]; images: SocialImage[]; warnings: string[];
}
export interface SocialCheck { key: string; label: string; pass: boolean; required: boolean; value: string; }
export interface SocialPreview { title: string; description: string; image: string; url: string; site: string; card: string; imageAlt: string; }
export interface SocialAnalysis { checks: SocialCheck[]; passed: number; score: number; warnings: string[]; og: SocialPreview; twitter: SocialPreview; search: SocialPreview; }
export interface SocialFields { title: string; description: string; url: string; image: string; imageAlt: string; type: string; site: string; locale: string; card: string; }

export function socialPageUrl(value: string): string {
  const url=robotsOrigin(value.trim());
  if (!/^(?:[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?\.)+[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?$/i.test(url.hostname)) throw new Error('Enter a public page URL with a valid DNS hostname.');
  return url.href;
}
export function socialResource(value: string, base: string): string {
  if (!value.trim() || /[\x00-\x20\x7f\\]/.test(value.trim())) return '';
  try { return socialPageUrl(new URL(value.trim(),base).href); } catch { return ''; }
}
export function firstSocialTag(tags: SocialTag[], key: string): string {
  return tags.find(tag=>tag.key===key)?.value || '';
}
export function analyzeSocial(snapshot: SocialSnapshot): SocialAnalysis {
  const get=(key:string)=>firstSocialTag(snapshot.tags,key),resource=(value:string)=>socialResource(value,snapshot.baseUrl);
  const ogImage=get('og:image') || get('og:image:url');
  const og:SocialPreview={title:get('og:title')||get('title'),description:get('og:description')||get('description'),image:resource(ogImage),url:resource(get('og:url'))||snapshot.finalUrl,site:get('og:site_name')||new URL(snapshot.finalUrl).hostname,card:'summary_large_image',imageAlt:get('og:image:alt')};
  const twitter:SocialPreview={...og,title:get('twitter:title')||og.title,description:get('twitter:description')||og.description,image:resource(get('twitter:image')||get('twitter:image:src'))||og.image,imageAlt:get('twitter:image:alt')||og.imageAlt,card:get('twitter:card')||'unspecified'};
  const search:SocialPreview={...og,title:get('title'),description:get('description'),url:resource(get('canonical'))||snapshot.finalUrl,image:''};
  const keys=[['og:title','OG title',true],['og:type','OG type',true],['og:image','OG image',true],['og:url','OG URL',true],['og:description','OG description',false],['og:site_name','Site name',false],['twitter:card','X card type',false],['title','HTML title',false],['description','Meta description',false],['canonical','Canonical URL',false]] as const;
  const checks=keys.map(([key,label,required])=>{const value=key==='og:image'?ogImage:get(key);return {key,label,required,value,pass:!!value && (['og:image','og:url','canonical'].includes(key)?!!resource(value):key==='twitter:card'?['summary','summary_large_image','player','app'].includes(value):true)};});
  const warnings=[...snapshot.warnings];
  if(snapshot.status<200||snapshot.status>=300) warnings.push('HTTP '+snapshot.status+': these tags came from an error or non-success response, not a confirmed shareable page.');
  if(snapshot.truncated) warnings.push('Only the first 1 MiB of HTML was captured. Metadata and checks may be incomplete.');
  const repeatable=new Set(['og:image','og:image:url','og:image:secure_url','og:image:width','og:image:height','og:image:type','og:image:alt','og:video','og:audio','og:locale:alternate']);
  const counts=new Map<string,number>();for(const tag of snapshot.tags) counts.set(tag.key,(counts.get(tag.key)||0)+1);
  for(const [key,count]of counts) if(count>1&&!repeatable.has(key)) warnings.push(key+' appears '+count+' times. This preview uses the first value; remove accidental conflicts.');
  for(const key of ['og:url','og:image','twitter:image','canonical']) if(get(key)&&!resource(get(key))) warnings.push(key+' is not a supported public HTTP(S) URL. It is excluded from the preview.');
  for(const key of ['og:url','og:image','twitter:image']) if(get(key)&&resource(get(key))&&!/^https?:\/\//i.test(get(key))) warnings.push(key+' is relative. An absolute URL is more portable across consumers.');
  if(og.image.startsWith('http:')) warnings.push('The main preview image uses HTTP. Prefer a publicly accessible HTTPS image.');
  const canonical=resource(get('canonical')),ogUrl=resource(get('og:url'));
  if(canonical&&ogUrl&&canonical!==ogUrl) warnings.push('The canonical URL and og:url differ. Confirm that both identify the intended page.');
  if(get('twitter:card')&& !['summary','summary_large_image'].includes(get('twitter:card'))) warnings.push('This tool approximates link cards only; app and player cards need additional platform-specific metadata.');
  if(/(?:^|[,\s])(?:noindex|none)(?:$|[,\s])/i.test(get('robots')+' '+get('googlebot'))) warnings.push('A robots meta directive requests no indexing. The search preview is illustrative and does not indicate index eligibility.');
  if(get('og:image')&&!get('og:image:alt')) warnings.push('Add og:image:alt to describe the preview image for accessibility.');
  const passed=checks.filter(check=>check.pass).length;
  return {checks,passed,score:Math.round(passed/checks.length*100),warnings:[...new Set(warnings)],og,twitter,search};
}
export function escapeSocialHtml(value:string):string {
  return value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
export function generateSocial(fields: SocialFields): string {
  for(const value of Object.values(fields)) if(value.length>4000 || /[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(value)) throw new Error('Keep each field under 4,000 characters without control characters.');
  if(!fields.title.trim()) throw new Error('Add a page title to generate the metadata.');
  if(!fields.url.trim() || !fields.image.trim()) throw new Error('Add the public page URL and preview image URL.');
  const url=socialPageUrl(fields.url),image=socialPageUrl(fields.image);
  if(!['website','article','profile'].includes(fields.type)) throw new Error('Choose a supported page type.');
  if(!['summary','summary_large_image'].includes(fields.card)) throw new Error('Choose a summary card layout.');
  if(fields.locale && !/^[a-z]{2}_[A-Z]{2}$/.test(fields.locale)) throw new Error('Use a locale such as en_US or en_IN.');
  const e=escapeSocialHtml,meta=(key:string,value:string,property=true)=>'<meta '+(property?'property':'name')+'="'+key+'" content="'+e(value.trim())+'">';
  const lines=['<!-- Place these tags in the document <head>. Replace existing duplicates. -->','<title>'+e(fields.title.trim())+'</title>'];
  if(fields.description.trim())lines.push(meta('description',fields.description,false));
  lines.push('<link rel="canonical" href="'+e(url)+'">','',meta('og:type',fields.type),meta('og:title',fields.title),meta('og:url',url),meta('og:image',image));
  if(fields.description.trim())lines.push(meta('og:description',fields.description));
  if(fields.imageAlt.trim())lines.push(meta('og:image:alt',fields.imageAlt));
  if(fields.site.trim())lines.push(meta('og:site_name',fields.site));
  if(fields.locale)lines.push(meta('og:locale',fields.locale));
  lines.push('',meta('twitter:card',fields.card,false),meta('twitter:title',fields.title,false),meta('twitter:image',image,false));
  if(fields.description.trim())lines.push(meta('twitter:description',fields.description,false));
  if(fields.imageAlt.trim())lines.push(meta('twitter:image:alt',fields.imageAlt,false));
  return lines.join('\n')+'\n';
}
export function socialExample():SocialSnapshot {
  const values:Record<string,string>={title:'Build your next idea with XcellHost',description:'Cloud infrastructure, security and managed services for your growing business.','og:title':'A stronger foundation for your next idea','og:type':'website','og:url':'https://example.com/launch','og:image':'https://example.com/social-preview.png','og:image:alt':'A cloud platform illustration','og:description':'Bring your team, applications and data together on a platform designed to grow with you.','og:site_name':'Example Cloud','twitter:card':'summary_large_image','twitter:title':'Your next idea starts here','canonical':'https://example.com/launch'};
  return {requestedUrl:'https://example.com/launch',finalUrl:'https://example.com/launch',baseUrl:'https://example.com/launch',status:200,contentType:'text/html',bytes:0,truncated:false,checkedAt:new Date().toISOString(),redirects:[],images:[],warnings:['Illustrative sample metadata. No website or image was fetched.'],tags:Object.entries(values).map(([key,value])=>({key,value,source:key.startsWith('og:')?'og':key.startsWith('twitter:')?'twitter':'seo'}))};
}
