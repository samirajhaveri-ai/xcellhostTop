export type EpochUnit = 'auto' | 'seconds' | 'milliseconds';
export type RepeatedTime = 'reject' | 'earlier' | 'later';
export type EpochDateFormat = 'iso' | 'dmy' | 'mdy' | 'long';
export interface EpochInstant {
  milliseconds: number;
  interpretation: string;
  unit: 'seconds' | 'milliseconds' | 'date';
  ambiguous: boolean;
}
export interface EpochDisplay {
  zone: string;
  dateFormat: EpochDateFormat;
  hour12: boolean;
  showMilliseconds: boolean;
}
export interface EpochRow { label: string; value: string; }
export interface EpochResult {
  seconds: string;
  milliseconds: string;
  iso: string;
  formatted: string;
  offset: string;
  weekday: string;
  rows: EpochRow[];
}
interface Calendar { year: number; month: number; day: number; hour: number; minute: number; second: number; ms: number; }
export const EPOCH_MIN = -62135596800000;
export const EPOCH_MAX = 253402300799999;
const formatters = new Map<string, Intl.DateTimeFormat>();
const pad = (value: number, length = 2): string => String(value).padStart(length, '0');

function inRange(ms: number): number {
  if (!Number.isSafeInteger(ms) || ms < EPOCH_MIN || ms > EPOCH_MAX) throw new Error('Use an instant between 0001-01-01 and 9999-12-31 UTC, with millisecond precision.');
  return ms;
}
function utc(c: Calendar): number {
  const date = new Date(0);
  date.setUTCFullYear(c.year, c.month - 1, c.day);
  date.setUTCHours(c.hour, c.minute, c.second, c.ms);
  return date.getTime();
}
function formatter(zone: string): Intl.DateTimeFormat {
  let value = formatters.get(zone);
  if (!value) {
    try { value = new Intl.DateTimeFormat('en-US-u-ca-gregory-nu-latn', { timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23', era: 'short' }); }
    catch { throw new Error('Choose a valid IANA time zone, such as UTC, Asia/Kolkata or America/New_York.'); }
    if (formatters.size >= 64) formatters.clear();
    formatters.set(zone, value);
  }
  return value;
}
function calendar(ms: number, zone: string): Calendar {
  const parts = Object.fromEntries(formatter(zone).formatToParts(ms).map(part => [part.type, part.value]));
  return { year: parts['era'] === 'BC' ? 1 - Number(parts['year']) : Number(parts['year']), month: Number(parts['month']), day: Number(parts['day']), hour: Number(parts['hour']), minute: Number(parts['minute']), second: Number(parts['second']), ms: ((ms % 1000) + 1000) % 1000 };
}
function offsetAt(ms: number, zone: string): number { return utc(calendar(ms, zone)) - ms; }
export function epochSeconds(ms: number): string {
  inRange(ms);
  const value = BigInt(ms), absolute = value < 0n ? -value : value;
  const fraction = absolute % 1000n;
  return (value < 0n ? '-' : '') + String(absolute / 1000n) + (fraction ? '.' + String(fraction).padStart(3, '0').replace(/0+$/, '') : '');
}
export function parseEpoch(input: string, unit: EpochUnit = 'auto'): EpochInstant {
  if (!['auto', 'seconds', 'milliseconds'].includes(unit)) throw new Error('Choose auto, seconds or milliseconds.');
  if (typeof input !== 'string' || input.length > 80) throw new Error('Enter one numeric Unix timestamp.');
  const text = input.trim();
  if (!/^[+-]?\d{1,16}(?:\.\d{1,3})?$/.test(text)) throw new Error('Enter a numeric timestamp. Seconds allow up to 3 decimal places; exponent notation and commas are not supported.');
  const absolute = text.replace(/^[+-]/, ''), [whole, fraction = ''] = absolute.split('.');
  const detected = unit === 'auto' ? (fraction || BigInt(whole) < 100000000000n ? 'seconds' : 'milliseconds') : unit;
  if (detected === 'milliseconds' && text.includes('.')) throw new Error('Milliseconds must be a whole number. Choose seconds to use a decimal timestamp.');
  let ms = detected === 'seconds' ? BigInt(whole) * 1000n + BigInt(fraction.padEnd(3, '0')) : BigInt(whole);
  if (text.startsWith('-')) ms = -ms;
  return { milliseconds: inRange(Number(ms)), interpretation: (unit === 'auto' ? 'Auto-detected ' : 'Input in ') + detected + '.', unit: detected, ambiguous: false };
}
export function parseEpochDate(input: string, zone: string, repeated: RepeatedTime = 'reject'): EpochInstant {
  formatter(zone);
  if (!['reject', 'earlier', 'later'].includes(repeated)) throw new Error('Choose how repeated local times should be handled.');
  if (typeof input !== 'string' || input.length > 100) throw new Error('Enter a calendar date or ISO 8601 date-time.');
  const match = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,3}))?)?(Z|[+-]\d{2}:?\d{2})?)?$/i.exec(input.trim());
  if (!match) throw new Error('Use YYYY-MM-DD HH:mm:ss, with optional .SSS, or ISO 8601 with Z / ±HH:mm. A date alone means midnight.');
  const c: Calendar = { year: Number(match[1]), month: Number(match[2]), day: Number(match[3]), hour: Number(match[4] || 0), minute: Number(match[5] || 0), second: Number(match[6] || 0), ms: Number((match[7] || '').padEnd(3, '0')) };
  const wall = utc(c), checked = new Date(wall);
  if (c.year < 1 || c.year > 9999 || c.month < 1 || c.month > 12 || c.day < 1 || checked.getUTCFullYear() !== c.year || checked.getUTCMonth() + 1 !== c.month || checked.getUTCDate() !== c.day || c.hour > 23 || c.minute > 59 || c.second > 59) throw new Error('This calendar date or time is invalid. Check month lengths, leap years and the 00–23 hour range. Leap seconds are not supported.');
  const suffix = match[8];
  if (suffix) {
    let offset = 0;
    if (suffix.toUpperCase() !== 'Z') {
      const digits = suffix.slice(1).replace(':', ''), hours = Number(digits.slice(0, 2)), minutes = Number(digits.slice(2));
      if (hours > 23 || minutes > 59) throw new Error('The explicit UTC offset must be between -23:59 and +23:59.');
      offset = (hours * 60 + minutes) * 60000 * (suffix[0] === '-' ? -1 : 1);
    }
    return { milliseconds: inRange(wall - offset), unit: 'date', ambiguous: false, interpretation: 'Explicit offset ' + suffix.toUpperCase() + ' used; the input time-zone selection was ignored.' };
  }
  // Collect the offsets around this wall time, then verify each possible instant.
  // Verification rejects DST gaps and detects repeated times instead of silently normalizing them.
  const offsets = new Set<number>();
  for (let hours = -36; hours <= 36; hours += 3) offsets.add(offsetAt(wall + hours * 3600000, zone));
  const candidates = [...offsets].map(offset => wall - offset).filter(ms => utc(calendar(ms, zone)) === wall).sort((a, b) => a - b);
  if (!candidates.length) throw new Error('This local time does not exist in ' + zone + ' because the clocks moved forward. Choose a time outside the gap or enter an explicit UTC offset.');
  if (candidates.length > 1 && repeated === 'reject') throw new Error('This local time occurs twice in ' + zone + '. Choose the earlier or later occurrence below, or include an explicit UTC offset.');
  const ambiguous = candidates.length > 1;
  return { milliseconds: inRange(repeated === 'later' ? candidates[candidates.length - 1] : candidates[0]), unit: 'date', ambiguous, interpretation: 'Interpreted in ' + zone + (ambiguous ? '; ' + repeated + ' occurrence selected.' : '.') };
}
export function epochDateInput(ms: number, zone: string): string {
  const c = calendar(inRange(ms), zone);
  if (c.year < 1 || c.year > 9999) throw new Error('The date in this time zone falls outside years 0001–9999.');
  return `${pad(c.year, 4)}-${pad(c.month)}-${pad(c.day)} ${pad(c.hour)}:${pad(c.minute)}:${pad(c.second)}.${pad(c.ms, 3)}`;
}
export function epochResult(ms: number, display: EpochDisplay): EpochResult {
  inRange(ms);
  if (!['iso', 'dmy', 'mdy', 'long'].includes(display.dateFormat)) throw new Error('Choose a supported date format.');
  const c = calendar(ms, display.zone);
  if (c.year < 1 || c.year > 9999) throw new Error('The date in this time zone falls outside years 0001–9999. Choose another time zone.');
  const date = new Date(ms), month = new Intl.DateTimeFormat('en-GB', { timeZone: display.zone, month: 'short' }).format(ms);
  const dates = { iso: `${pad(c.year, 4)}-${pad(c.month)}-${pad(c.day)}`, dmy: `${pad(c.day)}/${pad(c.month)}/${pad(c.year, 4)}`, mdy: `${pad(c.month)}/${pad(c.day)}/${pad(c.year, 4)}`, long: `${pad(c.day)} ${month} ${pad(c.year, 4)}` };
  const time = `${pad(display.hour12 ? c.hour % 12 || 12 : c.hour)}:${pad(c.minute)}:${pad(c.second)}${display.showMilliseconds ? '.' + pad(c.ms, 3) : ''}${display.hour12 ? c.hour < 12 ? ' AM' : ' PM' : ''}`;
  const offset = offsetAt(ms, display.zone), totalSeconds = Math.abs(offset) / 1000;
  const offsetText = 'UTC' + (offset < 0 ? '-' : '+') + pad(Math.floor(totalSeconds / 3600)) + ':' + pad(Math.floor(totalSeconds % 3600 / 60)) + (totalSeconds % 60 ? ':' + pad(totalSeconds % 60) : '');
  const formatted = dates[display.dateFormat] + ' ' + time, seconds = epochSeconds(ms), iso = date.toISOString();
  const weekday = new Intl.DateTimeFormat('en-GB', { timeZone: display.zone, weekday: 'long' }).format(ms);
  const rows = [ { label: 'Unix seconds', value: seconds }, { label: 'Unix milliseconds', value: String(ms) }, { label: 'Formatted date / time', value: formatted }, { label: 'Output time zone', value: display.zone }, { label: 'UTC offset at this instant', value: offsetText }, { label: 'ISO 8601 (UTC)', value: iso }, { label: 'UTC date', value: date.toUTCString() }, { label: 'Weekday in output time zone', value: weekday } ];
  return { seconds, milliseconds: String(ms), iso, formatted, offset: offsetText, weekday, rows };
}
export function epochReportText(result: EpochResult, interpretation: string): string {
  return ['XcellHost | Epoch Converter', ...result.rows.map(row => row.label + ': ' + row.value), 'Input interpretation: ' + interpretation].join('\n');
}
export function epochReportCsv(result: EpochResult, interpretation: string): string {
  const quote = (value: string): string => '"' + value.replace(/"/g, '""') + '"';
  return [['Field', 'Value'], ...result.rows.map(row => [row.label, row.value]), ['Input interpretation', interpretation]].map(row => row.map(quote).join(',')).join('\r\n') + '\r\n';
}
export function epochZones(): string[] {
  const common = ['UTC', 'Asia/Kolkata', 'Asia/Singapore', 'Asia/Dubai', 'Asia/Tokyo', 'Europe/London', 'Europe/Berlin', 'America/New_York', 'America/Chicago', 'America/Los_Angeles', 'Australia/Sydney', 'Pacific/Auckland'];
  try { const supported = (Intl as typeof Intl & { supportedValuesOf?: (key: string) => string[] }).supportedValuesOf?.('timeZone') || []; return [...new Set([...common, ...supported])].sort(); }
  catch { return common; }
}
