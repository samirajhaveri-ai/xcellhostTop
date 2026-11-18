import { CronExpressionParser } from 'cron-parser/dist/CronExpressionParser.js';
import { CronExpression } from 'cron-parser/dist/CronExpression.js';
import { CronFieldCollection } from 'cron-parser/dist/CronFieldCollection.js';
import { CronDayOfMonth } from 'cron-parser/dist/fields/CronDayOfMonth.js';

export const CRON_FIELDS = [
  { name: 'Minute', range: '0–59', example: '*/15', key: 'minute' },
  { name: 'Hour', range: '0–23', example: '9', key: 'hour' },
  { name: 'Day of month', range: '1–31', example: '1,15', key: 'dayOfMonth' },
  { name: 'Month', range: '1–12 or JAN–DEC', example: '*', key: 'month' },
  { name: 'Day of week', range: '0–7 or SUN–SAT', example: 'MON-FRI', key: 'dayOfWeek' },
] as const;
export const CRON_PRESETS = [
  { name: 'Every minute', expression: '* * * * *', description: 'Every minute.' },
  { name: 'Every 5 minutes', expression: '*/5 * * * *', description: 'At minutes 0, 5, 10 and so on through 55 of every hour.' },
  { name: 'Every hour', expression: '0 * * * *', description: 'At minute 0 of every hour.' },
  { name: 'Daily midnight', expression: '0 0 * * *', description: 'At 00:00 every day.' },
  { name: 'Daily 9 AM', expression: '0 9 * * *', description: 'At 09:00 every day.' },
  { name: 'Weekdays 9 AM', expression: '0 9 * * 1-5', description: 'At 09:00, Monday through Friday.' },
  { name: 'Weekly Sunday', expression: '0 0 * * 0', description: 'At 00:00 every Sunday.' },
  { name: 'Monthly 1st', expression: '0 0 1 * *', description: 'At 00:00 on day 1 of each month.' },
  { name: 'Twice daily', expression: '0 0,12 * * *', description: 'At 00:00 and 12:00 every day.' },
  { name: 'Every 15 minutes', expression: '*/15 * * * *', description: 'At minutes 0, 15, 30 and 45 of every hour.' },
  { name: 'Business hours', expression: '0 9-17 * * 1-5', description: 'At minute 0 of hours 09 through 17, Monday through Friday.' },
  { name: 'Quarterly', expression: '0 0 1 1,4,7,10 *', description: 'At 00:00 on the first day of January, April, July and October.' },
] as const;
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const ALIASES: Record<string,string> = { '@hourly':'0 * * * *', '@daily':'0 0 * * *', '@midnight':'0 0 * * *', '@weekly':'0 0 * * 0', '@monthly':'0 0 1 * *', '@yearly':'0 0 1 1 *', '@annually':'0 0 1 1 *' };
export interface ParsedCron { expression: string; tokens: string[]; fields: import('cron-parser').CronFieldCollection; description: string; rows: {name:string;token:string;range:string;values:string}[]; dayOr: boolean; }

export function parseCron(input: string): ParsedCron {
  if (typeof input !== 'string' || input.length > 512 || /[\r\n\x00]/.test(input)) throw new Error('Enter one cron expression, up to 512 characters, on a single line.');
  let expression = input.trim().replace(/\s+/g,' ');
  if (expression.toLowerCase() === '@reboot') throw new Error('@reboot depends on a daemon restart and cannot be previewed as a calendar schedule.');
  expression = ALIASES[expression.toLowerCase()] || expression;
  const tokens = expression.split(' ');
  if (!expression || tokens.length !== 5) throw new Error('Use five fields: minute, hour, day of month, month, day of week. Seconds, years and commands do not belong in this field.');
  tokens.forEach((token,index) => {
    if (token.length > 128 || !token.split(',').every(part => /^(?:\*|(?:\d+|[a-z]{3})(?:-(?:\d+|[a-z]{3}))?)(?:\/[1-9]\d*)?$/i.test(part))) throw new Error(CRON_FIELDS[index].name+': use values, lists, ascending ranges or positive steps. Extensions such as ?, L, W, # and H are not supported.');
    if (token.includes(',') && token.includes('*')) throw new Error(CRON_FIELDS[index].name+': use a wildcard by itself, or use an explicit list of values/ranges.');
  });
  if (tokens[2] !== '*' && tokens[4] !== '*' && (tokens[2].includes('*') || tokens[4].includes('*'))) throw new Error('Stepped day wildcards combined with another restricted day field are not supported. Use a plain * in one of the two day fields.');
  const fixed = { currentDate: new Date('2024-01-01T00:00:00Z'), tz: 'UTC' };
  // Validate the day number independently of the selected month: 31 February with
  // a restricted weekday can still match via the Unix day-of-month/day-of-week OR rule.
  let fields: import('cron-parser').CronFieldCollection;
  try {
    const base = CronExpressionParser.parse([tokens[0],tokens[1],'*',tokens[3],tokens[4]].join(' '),fixed);
    const dom = CronExpressionParser.parse('0 0 '+tokens[2]+' * *',fixed).fields.dayOfMonth;
    fields = CronFieldCollection.from(base.fields,{dayOfMonth:new CronDayOfMonth(dom.values,{rawValue:tokens[2]})});
  } catch (error) { const message=error instanceof Error?error.message:'Invalid cron fields.';throw new Error(message.includes('explicit day of month')?'These day-of-month and month values cannot form a calendar date.':message); }
  const dayOr = tokens[2] !== '*' && tokens[4] !== '*';
  const rows = CRON_FIELDS.map((field,index) => {
    const values = fields[field.key].values.map(value => field.key === 'month' ? MONTHS[Number(value)-1] : field.key === 'dayOfWeek' ? DAYS[Number(value)%7] : String(value));
    return {name:field.name,token:tokens[index],range:field.range,values:tokens[index] === '*' ? 'Every value' : [...new Set(values)].join(', ')};
  });
  const normalized = tokens.join(' '), preset = CRON_PRESETS.find(item => item.expression === normalized);
  let description = preset?.description || '';
  if (!description) {
    const minutes = fields.minute.values, hours = fields.hour.values;
    const time = minutes.length === 1 && hours.length === 1 ? 'At '+String(hours[0]).padStart(2,'0')+':'+String(minutes[0]).padStart(2,'0') : tokens[0] === '*' && tokens[1] === '*' ? 'Every minute' : 'At minute values '+rows[0].values+' during '+(tokens[1] === '*' ? 'every hour' : 'hour values '+rows[1].values);
    const calendar = tokens[2] === '*' && tokens[4] === '*' ? 'every day' : tokens[2] === '*' ? 'on '+rows[4].values : tokens[4] === '*' ? 'on day-of-month values '+rows[2].values : 'when the day of month is '+rows[2].values+' OR the weekday is '+rows[4].values;
    description = time+', '+calendar+(tokens[3] === '*' ? '' : ', in '+rows[3].values)+'.';
  }
  return {expression:normalized,tokens,fields,description,rows,dayOr};
}

export function cronRuns(parsed: ParsedCron, zone: string, after: Date, count = 5) {
  if (!(after instanceof Date) || !Number.isFinite(after.getTime())) throw new Error('Use a valid preview start date.');
  if (!Number.isInteger(count) || count < 1 || count > 20) throw new Error('Preview between 1 and 20 runs.');
  if (typeof zone !== 'string' || zone.length > 100 || !zone.trim()) throw new Error('Enter an IANA time zone, such as UTC or Asia/Kolkata.');
  try { new Intl.DateTimeFormat('en',{timeZone:zone}).format(after); } catch { throw new Error('Unknown preview time zone. Use a supported IANA name, such as UTC or Asia/Kolkata.'); }
  const end = new Date(after); end.setUTCFullYear(end.getUTCFullYear()+8);
  const times: string[] = [];
  const iterator = CronExpression.fieldsToExpression(parsed.fields,{currentDate:after,endDate:end,tz:zone,expression:parsed.expression});
  for (let i=0;i<count;i++) {
    try { times.push(iterator.next().toDate().toISOString()); }
    catch { break; }
  }
  return { times, after:after.toISOString(), until:end.toISOString(), zone, note:times.length < count ? 'Found '+times.length+' matching occurrence'+(times.length === 1 ? '' : 's')+' within the next eight years. Some month/day combinations never occur.' : '' };
}

export type CronOutput = 'standard' | 'discard' | 'append' | 'overwrite';
export function escapeCronPercent(value: string): string {
  let result = '', slashes = 0;
  for (const character of value) { if (character === '%' && slashes%2 === 0) result += '\\'; result += character; slashes = character === '\\' ? slashes+1 : 0; }
  return result;
}
export function cronJob(expression: string, command: string, output: CronOutput, logPath: string, escapePercent: boolean): string {
  const parsed = parseCron(expression);
  if (typeof command !== 'string' || !command.trim() || command.length > 4096 || /[\x00-\x1f\x7f]/.test(command)) throw new Error('Enter a shell command on one line, up to 4096 characters, without control characters.');
  if (!['standard','discard','append','overwrite'].includes(output) || typeof escapePercent !== 'boolean') throw new Error('Choose valid output and percent-escaping options.');
  let shell = command.trim();
  if (output === 'discard') shell = '( '+shell+' ) >/dev/null 2>&1';
  if (output === 'append' || output === 'overwrite') {
    if (typeof logPath !== 'string' || !logPath.trim() || logPath.length > 1024 || /[\x00-\x1f\x7f]/.test(logPath)) throw new Error('Enter a log file path on one line, up to 1024 characters.');
    const quoted = "'"+logPath.replaceAll("'","'\\''")+"'";
    shell = '( '+shell+' ) '+(output === 'append' ? '>> ' : '> ')+quoted+' 2>&1';
  }
  return parsed.expression+' '+(escapePercent ? escapeCronPercent(shell) : shell);
}
