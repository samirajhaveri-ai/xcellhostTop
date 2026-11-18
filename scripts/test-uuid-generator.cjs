const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript');
const api={};new Function('exports',ts.transpileModule(fs.readFileSync('src/app/core/uuid-generator.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api);
const {UuidGenerator,encodeTimeUuid,encodeUuid7,formatUuid,uuidDetails,uuidCsv}=api;
const milliseconds=1645557742000,ticks=138648505420000000n,node=Uint8Array.from(Buffer.from('9f6bdeced846','hex'));
const plain={uppercase:false,withoutHyphens:false};

test('RFC 9562 v1 and v6 vectors have their specified byte layout',()=>{
 assert.equal(encodeTimeUuid(1,ticks,0x33c8,node),'c232ab00-9414-11ec-b3c8-9f6bdeced846');
 assert.equal(encodeTimeUuid(6,ticks,0x33c8,node),'1ec9414c-232a-6b00-b3c8-9f6bdeced846');
 for(const version of [1,6]){const d=uuidDetails(encodeTimeUuid(version,ticks,0x33c8,node));assert.equal(d.timestamp,'2022-02-22T19:22:22.000Z');assert.equal(d.clockSequence,0x33c8);assert.equal(d.node,'9f:6b:de:ce:d8:46');}
});
test('RFC 9562 v4 vector sets only the version and variant bits',()=>{
 const generator=new UuidGenerator({random:()=>Uint8Array.from(Buffer.from('919108f752d133205bacf847db4148a8','hex')),now:()=>milliseconds});
 assert.equal(generator.generate(4,1).uuids[0],'919108f7-52d1-4320-9bac-f847db4148a8');
});
test('RFC 9562 v7 vector packs its timestamp and random fields correctly',()=>{
 const id=encodeUuid7(milliseconds,(0xcc3n<<62n)|0x18c4dc0c0c07398fn);
 assert.equal(id,'017f22e2-79b0-7cc3-98c4-dc0c0c07398f');assert.equal(uuidDetails(id).timestamp,'2022-02-22T19:22:22.000Z');
});
test('each version creates 100 distinct identifiers with the right version and variant',()=>{
 for(const version of [1,4,6,7]){const batch=new UuidGenerator().generate(version,100);assert.equal(batch.uuids.length,100);assert.equal(new Set(batch.uuids).size,100);for(const uuid of batch.uuids){assert.match(uuid,new RegExp('^[a-f\\d]{8}-[a-f\\d]{4}-'+version+'[a-f\\d]{3}-[89ab][a-f\\d]{3}-[a-f\\d]{12}$'));assert.equal(uuidDetails(uuid).bits,128);}}
});
test('v7 increments safely across same-millisecond batches and clock rollback',()=>{
 let clock=milliseconds,calls=0;const g=new UuidGenerator({now:()=>clock,random:size=>{calls++;return new Uint8Array(size);}});
 const first=g.generate(7,100).uuids,second=g.generate(7,100).uuids;clock-=10000;const third=g.generate(7,2).uuids;
 const values=[...first,...second,...third];assert.equal(calls,1);assert.equal(new Set(values).size,202);assert.deepEqual(values,[...values].sort());assert.equal(uuidDetails(third[0]).timestamp,new Date(milliseconds).toISOString());clock=milliseconds+1;g.generate(7,1);assert.equal(calls,2);
});
test('v7 refuses counter wraparound and recovers after the timestamp advances',()=>{
 let clock=milliseconds;const g=new UuidGenerator({now:()=>clock,random:size=>new Uint8Array(size).fill(255)});
 g.generate(7,1);assert.throws(()=>g.generate(7,1),/counter is exhausted/);clock++;assert.equal(g.generate(7,1).uuids.length,1);
});
test('failed entropy cannot leave a v7 generator initialized without a random seed',()=>{
 let broken=true,calls=0;const g=new UuidGenerator({now:()=>milliseconds,random:size=>{calls++;if(broken)throw Error('Random unavailable');return new Uint8Array(size).fill(17);}});
 assert.throws(()=>g.generate(7,1),/Random unavailable/);broken=false;g.generate(7,1);assert.equal(calls,2);
});
test('v1 initializes node and clock sequence together, preserves its random node and handles rollback',()=>{
 let clock=milliseconds,fail=true,requests=[];const g=new UuidGenerator({now:()=>clock,random:size=>{requests.push(size);if(size===2&&fail)throw Error('Sequence entropy unavailable');return new Uint8Array(size).fill(18);}});
 assert.throws(()=>g.generate(1,1),/Sequence entropy/);fail=false;const first=g.generate(1,2).uuids;assert.deepEqual(requests,[6,2,6,2]);assert.equal(uuidDetails(first[0]).node,'13:12:12:12:12:12');assert.equal(uuidDetails(first[1]).node,uuidDetails(first[0]).node);clock--;const later=g.generate(1,1).uuids[0];assert.equal(uuidDetails(later).clockSequence,uuidDetails(first[0]).clockSequence+1);assert(!first.includes(later));
});
test('v6 refreshes random clock and node fields for every UUID and remains ordered',()=>{
 let requests=[],draw=0,clock=milliseconds;const g=new UuidGenerator({now:()=>clock,random:size=>{requests.push(size);return new Uint8Array(size).fill(++draw);}});
 const values=g.generate(6,3).uuids;clock--;values.push(...g.generate(6,2).uuids);assert.deepEqual(requests,[6,2,6,2,6,2,6,2,6,2]);assert.equal(new Set(values.map(v=>uuidDetails(v).node)).size,5);assert.deepEqual(values,[...values].sort());for(const v of values)assert.equal(parseInt(uuidDetails(v).node.slice(0,2),16)&1,1);
});
test('formatting changes presentation while preserving all 128 bits',()=>{
 const id='017f22e2-79b0-7cc3-98c4-dc0c0c07398f';for(const uppercase of [true,false])for(const withoutHyphens of [true,false]){const formatted=formatUuid(id,{uppercase,withoutHyphens});assert.equal(formatted.length,withoutHyphens?32:36);assert.equal(formatted.replaceAll('-','').toLowerCase(),id.replaceAll('-',''));assert.equal(formatted,uppercase?formatted.toUpperCase():formatted.toLowerCase());}
});
test('CSV preserves selected presentation and records row numbers and version',()=>{
 const batch=new UuidGenerator().generate(4,3),csv=uuidCsv(batch,{uppercase:true,withoutHyphens:true});const rows=csv.trim().split('\r\n');assert.equal(rows[0],'Index,Version,UUID');assert.equal(rows.length,4);assert.equal(rows[1],'1,4,'+batch.uuids[0].replaceAll('-','').toUpperCase());
});
test('invalid quantities and versions fail before requesting randomness',()=>{
 let calls=0;const g=new UuidGenerator({random:()=>{calls++;throw Error('Should not run');}});for(const count of [0,-1,101,1.5,NaN,Infinity,'5',null])assert.throws(()=>g.generate(4,count),/whole quantity/);for(const version of [0,2,3,5,8,'4',null])assert.throws(()=>g.generate(version,1),/Choose UUID version/);assert.equal(calls,0);
});
test('broken random providers and repeated v4 draws cannot silently return an invalid or duplicate batch',()=>{
 for(const value of [null,[],new Uint8Array(15),new Uint8Array(17)])assert.throws(()=>new UuidGenerator({random:()=>value}).generate(4,1),/invalid byte sequence/);
 assert.throws(()=>new UuidGenerator({random:size=>new Uint8Array(size)}).generate(4,2),/Repeated random identifiers/);
 assert.throws(()=>new UuidGenerator({random:()=>{throw Error('Unavailable');}}).generate(4,1),/Unavailable/);
});
test('invalid clock and overflowing time fields fail explicitly',()=>{
 for(const now of [-1,NaN,Infinity,2**48,1.1])assert.throws(()=>new UuidGenerator({now:()=>now}).generate(7,1),/clock/);
 assert.throws(()=>encodeUuid7(0,1n<<74n));assert.throws(()=>encodeUuid7(-1,0n));assert.throws(()=>encodeTimeUuid(1,1n<<60n,0,node));assert.throws(()=>encodeTimeUuid(1,0n,16384,node));assert.throws(()=>encodeTimeUuid(6,0n,0,new Uint8Array(5)));
});
test('UUID inspection rejects unsupported layouts and handles the Gregorian epoch',()=>{
 for(const id of ['not-a-uuid','017f22e2-79b0-8cc3-98c4-dc0c0c07398f','017f22e2-79b0-7cc3-18c4-dc0c0c07398f'])assert.throws(()=>uuidDetails(id));
 assert.equal(uuidDetails(encodeTimeUuid(1,0n,0,node)).timestamp,'1582-10-15T00:00:00.000Z');assert.equal(uuidDetails(encodeTimeUuid(6,122192927999999999n,0,node)).timestamp,'1969-12-31T23:59:59.999Z');
});
test('dedicated lazy route precedes the generic tool route and catalog names the supported versions',()=>{
 const routes=fs.readFileSync('src/app/app.routes.ts','utf8');assert(routes.indexOf("path: 'tools/uuid-generator'")<routes.indexOf("path: 'tools/:tool'"));assert.match(fs.readFileSync('src/app/data/tools.data.ts','utf8'),/tool\('uuid-generator'.*v1, v4, v6 and v7/);
});
