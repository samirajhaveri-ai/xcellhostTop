export const URL_INPUT_LIMIT = 1024 * 1024;
export const URL_BATCH_LIMIT = 1000;
export interface UrlConversionSettings { action:'encode'|'decode'; mode:'component'|'uri'; batch:boolean; plusAsSpace:boolean; }
export interface UrlConversionRow { line:number; input:string; output:string|null; error:string; }
export interface UrlConversionReport { settings:UrlConversionSettings; rows:UrlConversionRow[]; output:string; successes:number; failures:number; inputBytes:number; outputBytes:number; }
export const URL_ENCODING_REFERENCE = [
  [' ','Space'],['!','Exclamation'],['"','Double quote'],['#','Fragment marker'],['$','Dollar'],['%','Percent'],['&','Parameter separator'],["'",'Single quote'],['+','Literal plus'],[',','Comma'],['/','Path separator'],[':','Scheme separator'],['=','Value separator'],['?','Query marker'],['@','At sign'],['[','Opening bracket'],[']','Closing bracket'],
].map(([character,label])=>({character,label,component:encodeURIComponent(character),uri:encodeURI(character)}));

export function convertUrl(input:string,settings:UrlConversionSettings):UrlConversionReport {
  if(typeof input!=='string'||input.length>URL_INPUT_LIMIT)throw new Error('Use up to 1 MiB of UTF-8 input text.');
  const inputBytes=new TextEncoder().encode(input).length;
  if(inputBytes>URL_INPUT_LIMIT)throw new Error('Use up to 1 MiB of UTF-8 input text.');
  if(!['encode','decode'].includes(settings.action)||!['component','uri'].includes(settings.mode)||typeof settings.batch!=='boolean'||typeof settings.plusAsSpace!=='boolean')throw new Error('Choose valid conversion, encoding mode and batch options.');
  const entries=settings.batch?input.split(/\r\n|\n|\r/):[input];
  if(entries.length>URL_BATCH_LIMIT)throw new Error('Process up to 1,000 lines per batch, including blank lines.');
  const rows=entries.map((entry,index):UrlConversionRow=>{
    if(/[\uD800-\uDFFF]/u.test(entry))return {line:index+1,input:entry,output:null,error:'Incomplete Unicode character. Correct the input before converting.'};
    try{
      const value=settings.action==='decode'&&settings.mode==='component'&&settings.plusAsSpace?entry.replaceAll('+',' '):entry;
      const output=settings.action==='encode'?(settings.mode==='component'?encodeURIComponent(value):encodeURI(value)):(settings.mode==='component'?decodeURIComponent(value):decodeURI(value));
      return {line:index+1,input:entry,output,error:''};
    }catch{return {line:index+1,input:entry,output:null,error:settings.action==='encode'?'Incomplete Unicode character. Correct the input before encoding.':'Malformed percent escape or invalid UTF-8 sequence. Check each %XX group.'};}
  });
  const successful=rows.filter(row=>row.output!==null),output=successful.map(row=>row.output!).join('\n');
  return {settings:{...settings},rows,output,successes:successful.length,failures:rows.length-successful.length,inputBytes,outputBytes:new TextEncoder().encode(output).length};
}
export function urlReportJson(report:UrlConversionReport):string {
  return JSON.stringify({action:report.settings.action,mode:report.settings.mode,batch:report.settings.batch,plusAsSpace:report.settings.plusAsSpace,successes:report.successes,failures:report.failures,rows:report.rows},null,2);
}
