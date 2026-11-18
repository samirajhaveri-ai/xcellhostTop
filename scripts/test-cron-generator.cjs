const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),ts=require('typescript');
const api={};new Function('exports','require',ts.transpileModule(fs.readFileSync('src/app/core/cron-generator.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText)(api,require);
const {CRON_PRESETS,parseCron,cronRuns,cronJob,escapeCronPercent}=api;
const runs=(expression,after='2026-01-01T00:00:00Z',zone='UTC',count=5)=>cronRuns(parseCron(expression),zone,new Date(after),count);

test('all twelve presets are valid and return five increasing future occurrences',()=>{
 assert.equal(CRON_PRESETS.length,12);for(const preset of CRON_PRESETS){const report=runs(preset.expression);assert.equal(report.times.length,5,preset.name);assert(report.times.every((value,index)=>new Date(value).getTime()>new Date(index?report.times[index-1]:report.after).getTime()));assert.equal(parseCron(preset.expression).description,preset.description);}
});
test('five-minute steps produce exact upcoming minute boundaries after the reference instant',()=>{
 assert.deepEqual(runs('*/5 * * * *','2026-01-01T00:03:17Z').times,['2026-01-01T00:05:00.000Z','2026-01-01T00:10:00.000Z','2026-01-01T00:15:00.000Z','2026-01-01T00:20:00.000Z','2026-01-01T00:25:00.000Z']);
});
test('minute steps reset within each hour rather than creating an elapsed interval',()=>{
 assert.deepEqual(runs('*/35 * * * *').times.slice(0,3),['2026-01-01T00:35:00.000Z','2026-01-01T01:00:00.000Z','2026-01-01T01:35:00.000Z']);assert.equal(parseCron('*/35 * * * *').rows[0].values,'0, 35');
});
test('restricted day-of-month and weekday fields use OR matching',()=>{
 assert.deepEqual(runs('30 4 1,15 * FRI').times,['2026-01-01T04:30:00.000Z','2026-01-02T04:30:00.000Z','2026-01-09T04:30:00.000Z','2026-01-15T04:30:00.000Z','2026-01-16T04:30:00.000Z']);assert.equal(parseCron('30 4 1,15 * FRI').dayOr,true);
});
test('a plain wildcard in one day field leaves the other day field in control',()=>{
 assert.deepEqual(runs('0 0 15 * *').times.slice(0,2),['2026-01-15T00:00:00.000Z','2026-02-15T00:00:00.000Z']);assert.deepEqual(runs('0 0 * * MON').times.slice(0,2),['2026-01-05T00:00:00.000Z','2026-01-12T00:00:00.000Z']);assert.equal(parseCron('0 0 * * MON').dayOr,false);
});
test('February 31 with a restricted weekday still matches via the day OR rule',()=>{
 assert.deepEqual(runs('0 0 31 FEB MON').times.slice(0,4),['2026-02-02T00:00:00.000Z','2026-02-09T00:00:00.000Z','2026-02-16T00:00:00.000Z','2026-02-23T00:00:00.000Z']);
});
test('impossible calendar dates return no fabricated runs and rare dates respect the bounded preview',()=>{
 assert.throws(()=>runs('0 0 31 FEB *'),/cannot form a calendar date/);
 const leap=runs('0 0 29 FEB *','2025-01-01T00:00:00Z');assert.deepEqual(leap.times,['2028-02-29T00:00:00.000Z','2032-02-29T00:00:00.000Z']);assert(leap.note.includes('eight years'));
});
test('named ranges, numeric lists and Sunday 0/7 use the expected values',()=>{
 assert.equal(parseCron('15 9-17 * JAN-MAR MON-FRI').rows[3].values,'Jan, Feb, Mar');assert.equal(parseCron('15 9-17 * JAN-MAR MON-FRI').rows[4].values,'Mon, Tue, Wed, Thu, Fri');assert.deepEqual(runs('0 0 * * 0').times,runs('0 0 * * 7').times);
});
test('aliases expand to five fields without accepting reboot or seconds syntax',()=>{
 assert.equal(parseCron('@daily').expression,'0 0 * * *');assert.equal(parseCron('@annually').expression,'0 0 1 1 *');assert.equal(parseCron('@MIDNIGHT').expression,'0 0 * * *');assert.throws(()=>parseCron('@reboot'),/daemon restart/);assert.throws(()=>parseCron('0 * * * * *'),/five fields/);
});
test('time-zone preview changes the UTC instants while leaving the cron expression unchanged',()=>{
 assert.equal(runs('0 9 * * *').times[0],'2026-01-01T09:00:00.000Z');assert.equal(runs('0 9 * * *','2026-01-01T00:00:00Z','Asia/Kolkata').times[0],'2026-01-01T03:30:00.000Z');
});
test('named-zone daily schedules follow the DST offset change in New York',()=>{
 assert.deepEqual(runs('0 9 * * *','2026-03-07T00:00:00Z','America/New_York',3).times,['2026-03-07T14:00:00.000Z','2026-03-08T13:00:00.000Z','2026-03-09T13:00:00.000Z']);
});
test('invalid schedules and unsupported extensions are rejected explicitly',()=>{
 for(const expression of ['', '* * * *','60 * * * *','* 24 * * *','* * 0 * *','* * * 13 *','* * * * 8','*/0 * * * *','0 17-9 * * *','0 0 L * *','0 0 * * MON#2','0 0 ? * *','H * * * *','*,1 * * * *','* * */2 * MON','a'.repeat(513),'* * * * *\necho bad'])assert.throws(()=>parseCron(expression),expression);
 assert.doesNotThrow(()=>parseCron('0 0 */2 * *'));
});
test('invalid time zones, reference dates and preview counts fail clearly',()=>{
 const parsed=parseCron('* * * * *');assert.throws(()=>cronRuns(parsed,'Unknown/Place',new Date()),/time zone/);assert.throws(()=>cronRuns(parsed,'UTC',new Date('bad')),/valid preview start/);for(const count of [0,21,1.5,NaN])assert.throws(()=>cronRuns(parsed,'UTC',new Date(),count),/between 1 and 20/);
});
test('standard cron entries retain the command and normalize the schedule',()=>{
 assert.equal(cronJob(' 0   9 * * MON-FRI ','/usr/local/bin/backup.sh','standard','',true),'0 9 * * MON-FRI /usr/local/bin/backup.sh');assert.equal(cronJob('@daily','echo hello','standard','',true),'0 0 * * * echo hello');
});
test('redirection groups a full command list and shell-quotes the log path',()=>{
 assert.equal(cronJob('* * * * *','echo first; echo second','append',"/tmp/job's output.log",true),"* * * * * ( echo first; echo second ) >> '/tmp/job'\\''s output.log' 2>&1");assert.equal(cronJob('* * * * *','echo ok','overwrite','/tmp/job.log',true),"* * * * * ( echo ok ) > '/tmp/job.log' 2>&1");assert.equal(cronJob('* * * * *','echo ok','discard','',true),'* * * * * ( echo ok ) >/dev/null 2>&1');
});
test('percent escaping preserves existing escapes and respects even/odd backslash runs',()=>{
 assert.equal(escapeCronPercent('date +%F'),'date +\\%F');assert.equal(escapeCronPercent('date +\\%F'),'date +\\%F');assert.equal(escapeCronPercent('\\\\%'),'\\\\\\%');assert.equal(cronJob('* * * * *','date +%F','standard','',false),'* * * * * date +%F');assert(cronJob('* * * * *','date +%F','append','/tmp/100%.log',true).includes("'/tmp/100\\%.log'"));
});
test('commands and log paths reject new entries and control characters',()=>{
 for(const command of ['', '  ','echo hi\n* * * * * other','echo\x00bad','a'.repeat(4097)])assert.throws(()=>cronJob('* * * * *',command,'standard','',true),/shell command/);for(const path of ['', '/tmp/a\nother','x'.repeat(1025)])assert.throws(()=>cronJob('* * * * *','echo ok','append',path,true),/log file path/);assert.throws(()=>cronJob('* * * * *','echo ok','unknown','',true),/output/);
});
test('dedicated route precedes the generic tool page and command generation stays local',()=>{
 const routes=fs.readFileSync('src/app/app.routes.ts','utf8'),page=fs.readFileSync('src/app/pages/cron-generator.page.ts','utf8');assert(routes.indexOf("path: 'tools/cron-generator'")<routes.indexOf("path: 'tools/:tool'"));assert(!/fetch\(|localStorage|sessionStorage|exec\(|eval\(/.test(page));assert.match(page,/new Blob\(\[value\+'\\n'\]/);
});
