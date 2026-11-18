export type UuidVersion = 1 | 4 | 6 | 7;
export const UUID_VERSIONS = [
  {id:4,name:'Version 4 · Random',description:'Random identifiers using the browser’s cryptographic random source.'},
  {id:7,name:'Version 7 · Unix time ordered',description:'A millisecond timestamp with a randomly seeded counter for page-local ordering.'},
  {id:1,name:'Version 1 · Time based',description:'Gregorian timestamp, clock sequence and a random node identifier.'},
  {id:6,name:'Version 6 · Reordered time',description:'A reordered Gregorian timestamp with random clock-sequence and node fields.'},
] as const;
export interface UuidFormatting { uppercase:boolean; withoutHyphens:boolean; }
export interface UuidBatch { version:UuidVersion; generatedAt:string; uuids:string[]; }
export interface UuidDetails { version:UuidVersion; variant:string; bits:number; timestamp:string|null; node:string|null; clockSequence:number|null; }
interface UuidDependencies { random?:(size:number)=>Uint8Array; now?:()=>number; }
const GREGORIAN_OFFSET=122192928000000000n;
const MASK_60=(1n<<60n)-1n, MASK_62=(1n<<62n)-1n, MASK_74=(1n<<74n)-1n;
const MAX_UNIX_MS=2**48-1;
const canonical=(hex:string)=>[hex.slice(0,8),hex.slice(8,12),hex.slice(12,16),hex.slice(16,20),hex.slice(20)].join('-').toLowerCase();
const bytesNumber=(bytes:Uint8Array)=>bytes.reduce((value,byte)=>(value<<8n)|BigInt(byte),0n);
const hex=(value:bigint,length:number)=>value.toString(16).padStart(length,'0');

export function encodeTimeUuid(version:1|6,timestamp:bigint,clockSequence:number,node:Uint8Array):string {
  if(![1,6].includes(version)||timestamp<0n||timestamp>MASK_60||!Number.isInteger(clockSequence)||clockSequence<0||clockSequence>16383||!(node instanceof Uint8Array)||node.length!==6)throw new Error('Invalid time-based UUID fields.');
  const time=version===1?hex(timestamp&0xffffffffn,8)+hex((timestamp>>32n)&0xffffn,4)+'1'+hex(timestamp>>48n,3):hex(timestamp>>12n,12)+'6'+hex(timestamp&0xfffn,3);
  return canonical(time+hex(BigInt(clockSequence|0x8000),4)+hex(bytesNumber(node),12));
}
export function encodeUuid7(milliseconds:number,random74:bigint):string {
  if(!Number.isSafeInteger(milliseconds)||milliseconds<0||milliseconds>MAX_UNIX_MS||random74<0n||random74>MASK_74)throw new Error('UUID v7 fields are outside their supported range.');
  const value=(BigInt(milliseconds)<<80n)|(7n<<76n)|((random74>>62n)<<64n)|(2n<<62n)|(random74&MASK_62);
  return canonical(hex(value,32));
}
export function formatUuid(uuid:string,format:UuidFormatting):string {
  if(!/^[a-f\d]{8}-[a-f\d]{4}-[1467][a-f\d]{3}-[89ab][a-f\d]{3}-[a-f\d]{12}$/i.test(uuid)||typeof format.uppercase!=='boolean'||typeof format.withoutHyphens!=='boolean')throw new Error('Use a supported UUID and valid formatting options.');
  const value=format.withoutHyphens?uuid.replace(/-/g,''):uuid;
  return format.uppercase?value.toUpperCase():value.toLowerCase();
}
export function uuidDetails(uuid:string):UuidDetails {
  const normalized=formatUuid(uuid,{uppercase:false,withoutHyphens:true}),version=Number(normalized[12]) as UuidVersion;
  let timestamp:string|null=null;
  if(version===7)timestamp=new Date(Number(BigInt('0x'+normalized.slice(0,12)))).toISOString();
  if(version===1||version===6){
    const ticks=BigInt('0x'+(version===1?normalized.slice(13,16)+normalized.slice(8,12)+normalized.slice(0,8):normalized.slice(0,12)+normalized.slice(13,16)))-GREGORIAN_OFFSET;
    timestamp=new Date(Number(ticks>=0n?ticks/10000n:(ticks-9999n)/10000n)).toISOString();
  }
  return {version,variant:'RFC 9562 / RFC 4122 (10xx)',bits:128,timestamp,node:version===1||version===6?normalized.slice(20).match(/../g)!.join(':'):null,clockSequence:version===1||version===6?Number.parseInt(normalized.slice(16,20),16)&0x3fff:null};
}

/** State is confined to one page instance; no identifiers or generator state are persisted. */
export class UuidGenerator {
  private readonly randomSource:(size:number)=>Uint8Array;
  private readonly clock:()=>number;
  private node:Uint8Array|null=null;
  private sequence=0;
  private lastClockMs=-1;
  private lastTicks=-1n;
  private lastV7Ms=-1;
  private lastV7Random=0n;
  constructor(dependencies:UuidDependencies={}){
    this.randomSource=dependencies.random||((size)=>{
      if(!globalThis.crypto?.getRandomValues)throw new Error('Secure browser randomness is unavailable. Use a current browser and try again.');
      return globalThis.crypto.getRandomValues(new Uint8Array(size));
    });
    this.clock=dependencies.now||(()=>Date.now());
  }
  private random(size:number):Uint8Array{
    const bytes=this.randomSource(size);if(!(bytes instanceof Uint8Array)||bytes.length!==size)throw new Error('The random source returned an invalid byte sequence.');return bytes.slice();
  }
  private now():number{const value=this.clock();if(!Number.isSafeInteger(value)||value<0||value>MAX_UNIX_MS)throw new Error('The browser clock is outside the supported timestamp range.');return value;}
  private timeTicks(now:number):bigint{
    let ticks=BigInt(now)*10000n+GREGORIAN_OFFSET;if(ticks<=this.lastTicks)ticks=this.lastTicks+1n;
    if(ticks>MASK_60)throw new Error('The time-based UUID timestamp range has been exhausted.');this.lastTicks=ticks;return ticks;
  }
  private one(version:UuidVersion):string{
    if(version===4){const bytes=this.random(16);bytes[6]=(bytes[6]&15)|0x40;bytes[8]=(bytes[8]&63)|0x80;return canonical(Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join(''));}
    const now=this.now();
    if(version===7){
      if(now>this.lastV7Ms){const random=bytesNumber(this.random(10))&MASK_74;this.lastV7Ms=now;this.lastV7Random=random;}
      else{if(this.lastV7Random===MASK_74)throw new Error('The UUID v7 counter is exhausted for this timestamp. Wait for the clock to advance and try again.');this.lastV7Random++;}
      return encodeUuid7(this.lastV7Ms,this.lastV7Random);
    }
    const ticks=this.timeTicks(now);
    if(version===6){const node=this.random(6);node[0]|=1;const sequence=Number(bytesNumber(this.random(2)))&0x3fff;return encodeTimeUuid(6,ticks,sequence,node);}
    if(!this.node){const node=this.random(6),sequence=Number(bytesNumber(this.random(2)))&0x3fff;node[0]|=1;this.node=node;this.sequence=sequence;}
    if(now<this.lastClockMs)this.sequence=(this.sequence+1)&0x3fff;this.lastClockMs=now;
    return encodeTimeUuid(1,ticks,this.sequence,this.node);
  }
  generate(version:UuidVersion,count:number):UuidBatch{
    if(!UUID_VERSIONS.some(v=>v.id===version))throw new Error('Choose UUID version 1, 4, 6 or 7.');
    if(!Number.isInteger(count)||count<1||count>100)throw new Error('Choose a whole quantity from 1 to 100.');
    const generatedAt=new Date(this.now()).toISOString(),uuids:string[]=[],seen=new Set<string>();
    for(let attempts=0;uuids.length<count&&attempts<count*8+16;attempts++){const value=this.one(version);if(!seen.has(value)){seen.add(value);uuids.push(value);}}
    if(uuids.length!==count)throw new Error('Repeated random identifiers prevented a complete batch. Try again with a working secure random source.');
    return {version,generatedAt,uuids};
  }
}

export function uuidCsv(batch:UuidBatch,format:UuidFormatting):string{return 'Index,Version,UUID\r\n'+batch.uuids.map((value,index)=>[index+1,batch.version,formatUuid(value,format)].join(',')).join('\r\n')+'\r\n';}
