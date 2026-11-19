const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript');
const api={};new Function('exports',ts.transpileModule(fs.readFileSync('src/app/core/epoch-converter.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api);
const {EPOCH_MIN,EPOCH_MAX,parseEpoch,parseEpochDate,epochSeconds,epochDateInput,epochResult,epochReportText,epochReportCsv,epochZones}=api;
const settings=(changes={})=>({zone:'UTC',dateFormat:'iso',hour12:false,showMilliseconds:true,...changes});

test('seconds and milliseconds identify the same exact instant',()=>{
 assert.equal(parseEpoch('1735689600.123','seconds').milliseconds,1735689600123);
 assert.equal(parseEpoch('1735689600123','milliseconds').milliseconds,1735689600123);
 assert.equal(epochResult(1735689600123,settings()).iso,'2025-01-01T00:00:00.123Z');
});
test('auto detection documents its magnitude heuristic and supports explicit overrides',()=>{
 assert.equal(parseEpoch('1735689600').unit,'seconds');assert.equal(parseEpoch('1735689600123').unit,'milliseconds');
 assert.equal(parseEpoch('100000000000').unit,'milliseconds');assert.equal(parseEpoch('99999999999').unit,'seconds');
 assert.equal(parseEpoch('1000','milliseconds').milliseconds,1000);assert.equal(parseEpoch('1000').milliseconds,1000000);
 assert.match(parseEpoch('123').interpretation,/Auto-detected seconds/);
});
test('zero, negative values and subsecond times before the epoch are exact',()=>{
 for(const [seconds,ms] of [['0',0],['-0.001',-1],['-1.001',-1001],['-1.999',-1999],['1.23',1230],['+0001.010',1010]]){assert.equal(parseEpoch(seconds,'seconds').milliseconds,ms);assert.equal(parseEpoch(epochSeconds(ms),'seconds').milliseconds,ms);}
 assert.equal(epochSeconds(-1),'-0.001');assert.equal(epochSeconds(1230),'1.23');
});
test('invalid numbers and unsupported precision are rejected',()=>{
 for(const value of ['', ' ', 'NaN', 'Infinity', '1e9', '1,000','1.1234','0x123','1.','--1','1 2','123\n456'])assert.throws(()=>parseEpoch(value),/numeric|decimal/);
 assert.throws(()=>parseEpoch('1.1','milliseconds'),/whole number/);assert.throws(()=>parseEpoch('1','bad'),/Choose auto/);
});
test('year 0001 through 9999 boundaries retain exact milliseconds',()=>{
 assert.equal(epochResult(EPOCH_MIN,settings()).iso,'0001-01-01T00:00:00.000Z');
 assert.equal(epochResult(EPOCH_MAX,settings()).iso,'9999-12-31T23:59:59.999Z');
 assert.equal(parseEpoch(epochSeconds(EPOCH_MIN),'seconds').milliseconds,EPOCH_MIN);
 assert.equal(parseEpochDate('9999-12-31T23:59:59.999Z','UTC').milliseconds,EPOCH_MAX);
 for(const value of [EPOCH_MIN-1,EPOCH_MAX+1,Number.MAX_SAFE_INTEGER])assert.throws(()=>parseEpoch(String(value),'milliseconds'),/between/);
 assert.throws(()=>parseEpoch('9999999999999999','seconds'),/between/);
});
test('strict calendar parsing supports midnight, minutes, seconds and fractions',()=>{
 for(const value of ['2025-01-01','2025-01-01 00:00','2025-01-01T00:00:00Z'])assert.equal(parseEpochDate(value,'UTC').milliseconds,1735689600000);
 assert.equal(parseEpochDate('2025-01-01 00:00:00.1','UTC').milliseconds,1735689600100);
 assert.equal(parseEpochDate('0001-01-01','UTC').milliseconds,EPOCH_MIN);
 assert.equal(parseEpochDate('0099-01-01','UTC').milliseconds,Date.parse('0099-01-01T00:00:00Z'));
});
test('nonexistent calendar dates and out-of-range time fields are not normalized',()=>{
 for(const value of ['2025-02-29','2024-02-30','2025-04-31','2025-00-01','2025-13-01','2025-01-00','0000-01-01','2025-01-01 24:00','2025-01-01 00:60','2025-01-01 00:00:60'])assert.throws(()=>parseEpochDate(value,'UTC'),/invalid/);
 assert.equal(parseEpochDate('2024-02-29','UTC').milliseconds,Date.parse('2024-02-29T00:00:00Z'));
});
test('ambiguous free-form dates, exponent fields and excess fractions are rejected',()=>{
 for(const value of ['01/02/2025','Jan 1 2025','2025-1-1','2025-01-01Z','2025-01-01T00:00:00.1234Z','2025-01-01\n00:00','2025-01-01T1:00','<script>'])assert.throws(()=>parseEpochDate(value,'UTC'),/Use YYYY/);
});
test('explicit ISO offsets override the input zone and preserve milliseconds',()=>{
 for(const value of ['2025-01-01T05:30:00.123+05:30','2025-01-01T05:30:00.123+0530','2024-12-31T20:00:00.123-04:00','2025-01-01t00:00:00.123z']){const parsed=parseEpochDate(value,'America/New_York');assert.equal(parsed.milliseconds,1735689600123);assert.match(parsed.interpretation,/ignored/);}
 assert.throws(()=>parseEpochDate('2025-01-01T00:00:00+24:00','UTC'),/offset/);assert.throws(()=>parseEpochDate('2025-01-01T00:00:00+05:60','UTC'),/offset/);
});
test('offset-free dates use the selected input time zone',()=>{
 assert.equal(parseEpochDate('2025-01-01 05:30:00.123','Asia/Kolkata').milliseconds,1735689600123);
 assert.equal(parseEpochDate('2024-12-31 19:00','America/New_York').milliseconds,1735689600000);
 assert.equal(parseEpochDate('2025-01-01 13:00','Pacific/Auckland').milliseconds,1735689600000);
});
test('DST spring-forward gaps are rejected rather than silently changed',()=>{
 assert.throws(()=>parseEpochDate('2025-03-09 02:30','America/New_York'),/does not exist/);
 assert.throws(()=>parseEpochDate('2025-03-30 01:30','Europe/London'),/does not exist/);
 assert.throws(()=>parseEpochDate('2025-10-05 02:15','Australia/Lord_Howe'),/does not exist/);
});
test('repeated DST times require an explicit earlier/later decision',()=>{
 assert.throws(()=>parseEpochDate('2025-11-02 01:30','America/New_York'),/occurs twice/);
 const early=parseEpochDate('2025-11-02 01:30:00.001','America/New_York','earlier'),late=parseEpochDate('2025-11-02 01:30:00.001','America/New_York','later');
 assert.equal(late.milliseconds-early.milliseconds,3600000);assert.equal(early.ambiguous,true);assert.match(late.interpretation,/later/);
 assert.equal(epochResult(early.milliseconds,settings()).iso,'2025-11-02T05:30:00.001Z');assert.equal(epochResult(late.milliseconds,settings()).iso,'2025-11-02T06:30:00.001Z');
});
test('half-hour repeats and a completely skipped calendar date are handled',()=>{
 const early=parseEpochDate('2025-04-06 01:45','Australia/Lord_Howe','earlier'),late=parseEpochDate('2025-04-06 01:45','Australia/Lord_Howe','later');assert.equal(late.milliseconds-early.milliseconds,1800000);
 assert.throws(()=>parseEpochDate('2011-12-30 12:00','Pacific/Apia'),/does not exist/);
});
test('time zone output changes the calendar display without changing the instant',()=>{
 const utc=epochResult(0,settings()),india=epochResult(0,settings({zone:'Asia/Kolkata'})),west=epochResult(0,settings({zone:'America/New_York'}));
 assert.equal(india.formatted,'1970-01-01 05:30:00.000');assert.equal(india.offset,'UTC+05:30');assert.equal(west.formatted,'1969-12-31 19:00:00.000');assert.equal(west.weekday,'Wednesday');assert.equal(india.seconds,utc.seconds);assert.equal(west.iso,utc.iso);
});
test('offsets are calculated for the instant rather than the current season',()=>{
 assert.equal(epochResult(Date.parse('2025-01-01T12:00:00Z'),settings({zone:'America/New_York'})).offset,'UTC-05:00');
 assert.equal(epochResult(Date.parse('2025-07-01T12:00:00Z'),settings({zone:'America/New_York'})).offset,'UTC-04:00');
 assert.equal(epochResult(0,settings({zone:'Asia/Kathmandu'})).offset,'UTC+05:30');assert.equal(epochResult(1735689600000,settings({zone:'Asia/Kathmandu'})).offset,'UTC+05:45');
});
test('four date formats and 12-hour midnight/noon respect display settings',()=>{
 const ms=Date.parse('2025-07-06T00:06:07.008Z');
 assert.equal(epochResult(ms,settings({dateFormat:'dmy',hour12:true})).formatted,'06/07/2025 12:06:07.008 AM');
 assert.equal(epochResult(ms,settings({dateFormat:'mdy',showMilliseconds:false})).formatted,'07/06/2025 00:06:07');
 assert.equal(epochResult(ms+43200000,settings({dateFormat:'long',hour12:true})).formatted,'06 Jul 2025 12:06:07.008 PM');
 assert.equal(epochResult(ms,settings({showMilliseconds:false})).iso,'2025-07-06T00:06:07.008Z');
});
test('date input formatting handles midnight, early years and negative milliseconds',()=>{
 assert.equal(epochDateInput(-1,'UTC'),'1969-12-31 23:59:59.999');assert.equal(epochDateInput(EPOCH_MIN,'UTC'),'0001-01-01 00:00:00.000');
 assert.equal(parseEpochDate(epochDateInput(1735689600123,'Asia/Kolkata'),'Asia/Kolkata').milliseconds,1735689600123);
});
test('out-of-range displayed years and invalid settings give helpful errors',()=>{
 assert.throws(()=>epochResult(EPOCH_MIN,settings({zone:'America/New_York'})),/outside years/);assert.throws(()=>epochDateInput(EPOCH_MAX,'Pacific/Auckland'),/outside years/);
 assert.throws(()=>epochResult(0,settings({zone:'invalid/zone'})),/valid IANA/);assert.throws(()=>parseEpochDate('2025-01-01','invalid'),/valid IANA/);
 assert.throws(()=>epochResult(0,settings({dateFormat:'wrong'})),/supported date format/);assert.throws(()=>parseEpochDate('2025-01-01','UTC','wrong'),/repeated/);
});
test('report text and CSV preserve numeric precision, exact UTC and escaped metadata',()=>{
 const result=epochResult(-1,settings()),interpretation='Explicit "test", with comma';const text=epochReportText(result,interpretation),csv=epochReportCsv(result,interpretation);
 assert.match(text,/Unix seconds: -0.001/);assert.match(text,/1969-12-31T23:59:59.999Z/);assert.match(csv,/"Unix milliseconds","-1"/);assert.match(csv,/"Input interpretation","Explicit ""test"", with comma"\r\n$/);assert.equal(csv.split('\r\n').length,11);
});
test('IANA zone list contains UTC, India and seasonal zones without duplicates',()=>{
 const zones=epochZones();for(const zone of ['UTC','Asia/Kolkata','America/New_York','Australia/Sydney'])assert(zones.includes(zone));assert.equal(new Set(zones).size,zones.length);
});
test('dedicated route precedes the generic tool page and related routes exist',()=>{
 const routes=fs.readFileSync('src/app/app.routes.ts','utf8'),data=fs.readFileSync('src/app/data/tools.data.ts','utf8');assert(routes.indexOf("path: 'tools/epoch-converter'")<routes.indexOf("path: 'tools/:tool'"));for(const id of ['epoch-converter','cron-generator','uuid-generator','url-encode','json-formatter'])assert(data.includes("tool('"+id+"'"));
});
test('conversion logic performs no fetches, navigation or storage writes',()=>{
 const source=fs.readFileSync('src/app/core/epoch-converter.ts','utf8');assert(!/\b(fetch|XMLHttpRequest|localStorage|sessionStorage|window|document)\b/.test(source));
});
