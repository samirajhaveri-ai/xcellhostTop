import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { CRON_FIELDS, CRON_PRESETS, CronOutput, cronJob, cronRuns, parseCron } from '../core/cron-generator';

@Component({
  selector:'xh-cron-generator-page',standalone:true,imports:[RouterLink],
  templateUrl:'./cron-generator.page.html',styleUrls:['./dns-lookup.page.css','./cron-generator.page.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class CronGeneratorPage {
  private readonly document = inject(DOCUMENT);
  private revision = 0;
  readonly fields = CRON_FIELDS;
  readonly presets = CRON_PRESETS;
  readonly tab = signal<'presets'|'advanced'>('presets');
  readonly expression = signal('* * * * *');
  readonly fieldValues = signal(['*','*','*','*','*']);
  readonly command = signal('');
  readonly output = signal<CronOutput>('standard');
  readonly logPath = signal('/var/log/cron-job.log');
  readonly escapePercent = signal(true);
  readonly zone = signal('UTC');
  readonly localZone = signal('');
  readonly now = signal<number|null>(null);
  readonly notice = signal('');
  readonly fallback = signal('');
  readonly zones = ['UTC','Asia/Kolkata','Asia/Singapore','Asia/Dubai','Europe/London','Europe/Berlin','America/New_York','America/Los_Angeles','Australia/Sydney'];
  readonly hints = [['*','*/5','*/15','0','0,30'],['*','*/2','9','9-17','0,12'],['*','1','15','1,15','*/2'],['*','JAN','JAN-MAR','1,4,7,10'],['*','MON-FRI','SUN','0,6']];
  readonly parsed = computed(() => { try { return {value:parseCron(this.expression()),error:''}; } catch(error) { return {value:null,error:error instanceof Error?error.message:'Invalid cron expression.'}; } });
  readonly job = computed(() => {
    if (!this.command().trim() || !this.parsed().value) return {value:'',error:''};
    try { return {value:cronJob(this.expression(),this.command(),this.output(),this.logPath(),this.escapePercent()),error:''}; }
    catch(error) { return {value:'',error:error instanceof Error?error.message:'Invalid command settings.'}; }
  });
  readonly preview = computed(() => {
    const parsed=this.parsed().value,now=this.now();
    if (!parsed || now===null) return {value:null,error:''};
    try { return {value:cronRuns(parsed,this.zone(),new Date(now)),error:''}; }
    catch(error) { return {value:null,error:error instanceof Error?error.message:'Unable to calculate run times.'}; }
  });
  readonly anchor = computed(() => { const now=this.now();return now===null?'':new Date(now).toISOString(); });
  readonly activePreset = computed(() => this.presets.find(item=>item.expression===this.parsed().value?.expression)?.expression||'');
  readonly related = [
    {id:'ssh-config',icon:'terminal',title:'SSH Config Builder',text:'Build connection settings for your hosts.'},
    {id:'robots-generator',icon:'smart_toy',title:'Robots.txt Generator',text:'Build or test crawler access rules.'},
    {id:'epoch-converter',icon:'schedule',title:'Epoch Converter',text:'Convert timestamps and UTC date values.'},
    {id:'uuid-generator',icon:'fingerprint',title:'UUID Generator',text:'Create identifiers for jobs and events.'},
  ];
  readonly features = [
    {icon:'dashboard_customize',title:'Five-field visual builder',text:'Edit minute, hour, day, month and weekday with range hints.'},
    {icon:'bolt',title:'Twelve quick presets',text:'Start from minute, daily, weekday, monthly and quarterly schedules.'},
    {icon:'event_upcoming',title:'Time-zone preview',text:'Review up to five upcoming occurrences in a named time zone.'},
    {icon:'terminal',title:'Command and output controls',text:'Build a user-crontab entry with optional output redirection.'},
  ];
  readonly questions = [
    {q:'Which cron syntax does this page support?',a:'Use five time fields in Unix order: minute, hour, day of month, month and day of week. Numbers, lists, ascending ranges and positive steps are supported, with three-letter month and weekday names. Common aliases such as @daily expand to five fields. Seconds, years, Quartz/AWS syntax and L, W, #, ? or H extensions are not supported. @reboot cannot be previewed as a calendar schedule.'},
    {q:'What time zone does the preview use?',a:'The zone you enter applies to the preview only. It does not change your server or add a time-zone directive to the copied entry. Configure the real scheduler to the intended zone; some cron implementations support CRON_TZ. The dates here are parser estimates. Daylight-saving policies can differ between schedulers, so verify critical jobs against your actual daemon.'},
    {q:'How are day of month and day of week combined?',a:'With one day field set to a plain *, the other controls the matching days. When both contain explicit values, either can match, rather than both being required. This tool rejects stepped wildcard day fields combined with another restricted day field to avoid differing scheduler interpretations; use a plain * in one day field for that case.'},
    {q:'Does */35 mean a constant 35-minute interval?',a:'No. In the minute field it selects minute 0 and minute 35 of each hour. The gap then alternates between 35 and 25 minutes. A step operates within its field, rather than defining a continuous elapsed-time interval. Check the actual upcoming dates before using a schedule.'},
    {q:'Does this tool install or execute a cron job?',a:'It creates text and previews dates in your browser. It does not run your command, connect to a server or install a schedule. Use your server’s supported process to add the generated entry. The output is for a user crontab; a system crontab may also require a username field.'},
    {q:'What do the output settings change?',a:'Standard output leaves the command unchanged. Discard sends stdout and stderr to /dev/null. Append and overwrite direct both streams to a quoted file path, grouping the command so the redirection applies to the whole command list. Your server still needs the correct permissions and directories. Schedule validation does not validate shell syntax or command availability.'},
    {q:'Why escape percent signs?',a:'Cron treats an unescaped % specially, even inside shell quotes. With this option enabled, unescaped percent signs in the generated command are prefixed with a backslash; existing escaped percent signs are preserved. Disable it if you intentionally use cron’s percent-based standard-input behavior.'},
    {q:'What does the download contain?',a:'The TXT file contains the complete generated user-crontab entry and a final newline. It includes the current output redirection and percent handling, but no server configuration or preview-zone directive. A non-empty command and a valid schedule are required. Commands are not saved in browser storage or sent by the tool’s generation code.'},
  ];
  constructor() {
    inject(SeoService).set('Cron Generator - Visual Crontab Builder & Run Preview | XcellHost Tools','Build five-field cron expressions with presets, validation, command output settings and upcoming execution times in a preview time zone. Copy or download your crontab entry.','/tools/cron-generator');
    afterNextRender(()=>{this.localZone.set(Intl.DateTimeFormat().resolvedOptions().timeZone||'UTC');this.refresh();});
    inject(DestroyRef).onDestroy(()=>{this.revision++;this.fallback.set('');});
  }
  private changed():void {this.revision++;this.notice.set('');this.fallback.set('');}
  private setExpression(value:string):void {
    this.changed();this.expression.set(value);
    const tokens=value.trim().split(/\s+/);
    if(tokens.length===5)this.fieldValues.set(tokens);
    else {try{this.fieldValues.set(parseCron(value).tokens);}catch{/* Keep the last builder fields while a raw expression is incomplete. */}}
  }
  editExpression(event:Event):void {this.setExpression((event.target as HTMLInputElement).value);}
  preset(value:string):void {this.setExpression(value);}
  editField(index:number,event:Event):void {const values=[...this.fieldValues()];values[index]=(event.target as HTMLInputElement).value;this.changed();this.fieldValues.set(values);this.expression.set(values.join(' '));}
  fieldHint(index:number,value:string):void {const values=[...this.fieldValues()];values[index]=value;this.changed();this.fieldValues.set(values);this.expression.set(values.join(' '));}
  edit(field:'command'|'logPath'|'zone',event:Event):void {this.changed();this[field].set((event.target as HTMLInputElement).value);}
  editOutput(event:Event):void {this.changed();this.output.set((event.target as HTMLSelectElement).value as CronOutput);}
  togglePercent(event:Event):void {this.changed();this.escapePercent.set((event.target as HTMLInputElement).checked);}
  refresh():void {this.now.set(Date.now());}
  useLocalZone():void {this.changed();this.zone.set(this.localZone()||'UTC');}
  formatDate(iso:string):string {try{return new Intl.DateTimeFormat('en-GB',{timeZone:this.zone(),weekday:'short',day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23',timeZoneName:'shortOffset'}).format(new Date(iso));}catch{return iso;}}
  reset():void {this.setExpression('* * * * *');this.command.set('');this.output.set('standard');this.logPath.set('/var/log/cron-job.log');this.escapePercent.set(true);this.zone.set('UTC');this.tab.set('presets');this.refresh();}
  async copy(kind:'expression'|'job'):Promise<void> {
    const value=kind==='expression'?this.parsed().value?.expression:this.job().value;if(!value)return;
    const revision=this.revision;
    try{await navigator.clipboard.writeText(value);if(revision===this.revision){this.fallback.set('');this.notice.set(kind==='expression'?'Cron expression copied.':'Crontab entry copied.');}}
    catch{if(revision!==this.revision)return;this.fallback.set(value);this.notice.set('Clipboard unavailable. Select and copy the text below.');setTimeout(()=>{if(revision===this.revision)this.document.querySelector<HTMLTextAreaElement>('#cron-copy-fallback')?.select();},0);}
  }
  download():void {const value=this.job().value;if(!value)return;const url=URL.createObjectURL(new Blob([value+'\n'],{type:'text/plain;charset=utf-8'}));const link=this.document.createElement('a');link.href=url;link.download='crontab-entry.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);this.notice.set('Crontab entry download started.');}
}
