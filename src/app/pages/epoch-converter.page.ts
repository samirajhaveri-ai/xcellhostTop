import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { EpochDateFormat, EpochDisplay, EpochInstant, EpochUnit, RepeatedTime, epochDateInput, epochReportCsv, epochReportText, epochResult, epochSeconds, epochZones, parseEpoch, parseEpochDate } from '../core/epoch-converter';

@Component({
  selector: 'xh-epoch-converter-page', standalone: true, imports: [RouterLink],
  templateUrl: './epoch-converter.page.html', styleUrls: ['./dns-lookup.page.css', './epoch-converter.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpochConverterPage {
  private readonly document = inject(DOCUMENT);
  private revision = 0;
  readonly timestamp = signal('');
  readonly date = signal('');
  readonly unit = signal<EpochUnit>('auto');
  readonly inputZone = signal('UTC');
  readonly zone = signal('UTC');
  readonly localZone = signal('UTC');
  readonly zones = signal(epochZones());
  readonly dateFormat = signal<EpochDateFormat>('iso');
  readonly hour12 = signal(false);
  readonly showMilliseconds = signal(true);
  readonly repeated = signal<RepeatedTime>('reject');
  readonly now = signal<number | null>(null);
  readonly instant = signal<EpochInstant | null>(null);
  readonly source = signal<'timestamp' | 'date'>('timestamp');
  readonly error = signal('');
  readonly notice = signal('');
  readonly fallback = signal('');
  readonly details = signal(false);
  readonly display = computed<EpochDisplay>(() => ({ zone: this.zone(), dateFormat: this.dateFormat(), hour12: this.hour12(), showMilliseconds: this.showMilliseconds() }));
  readonly result = computed(() => {
    const instant = this.instant();
    if (!instant) return { value: null, error: '' };
    try { return { value: epochResult(instant.milliseconds, this.display()), error: '' }; }
    catch (error) { return { value: null, error: error instanceof Error ? error.message : 'Unable to format this date.' }; }
  });
  readonly clock = computed(() => {
    const now = this.now();
    if (now === null) return null;
    return epochResult(now, this.display());
  });
  readonly related = [
    { id: 'cron-generator', icon: 'event_repeat', title: 'Crontab Generator', text: 'Build schedules and preview upcoming runs.' },
    { id: 'uuid-generator', icon: 'fingerprint', title: 'UUID Generator', text: 'Create identifiers for events and records.' },
    { id: 'url-encode', icon: 'link', title: 'URL Encoder / Decoder', text: 'Encode date values for query parameters.' },
    { id: 'json-formatter', icon: 'data_object', title: 'JSON Formatter', text: 'Inspect dates in API responses and logs.' },
  ];
  readonly features = [
    { icon: 'swap_horiz', title: 'Convert both ways', text: 'Turn Unix seconds or milliseconds into dates, or parse a date into both timestamp units.' },
    { icon: 'public', title: 'Time-zone aware', text: 'Choose input and output time zones independently. Review the UTC offset for the converted instant.' },
    { icon: 'tune', title: 'Flexible formatting', text: 'Choose four date layouts, 12- or 24-hour time, and optional milliseconds.' },
    { icon: 'schedule', title: 'Live Unix clock', text: 'See the current time and capture a fixed instant without changing a result as the clock ticks.' },
  ];
  readonly questions = [
    { q: 'What is a Unix or epoch timestamp?', a: 'A Unix timestamp counts seconds from 1970-01-01 00:00:00 UTC. Millisecond timestamps count the same interval in units one thousand times smaller. Negative values represent instants before the epoch. Unix time does not count leap seconds.' },
    { q: 'How does automatic unit detection work?', a: 'Decimal input is treated as seconds. For whole numbers, an absolute value below 100,000,000,000 is treated as seconds; larger values are treated as milliseconds. This is a convenience heuristic and can misidentify early millisecond values or far-future seconds. Choose an explicit unit whenever you know it.' },
    { q: 'Which date input formats can I use?', a: 'Use YYYY-MM-DD for midnight, YYYY-MM-DD HH:mm or HH:mm:ss with an optional .SSS fraction, or ISO 8601 with T and Z or an offset such as +05:30. Years 0001–9999 are supported. Dates such as 31 February, 24:00 and leap-second values are rejected instead of silently adjusted.' },
    { q: 'Which time zone is used for a date without an offset?', a: 'The Input time zone selection is used. It starts as your browser time zone when available. A date ending in Z or an explicit offset already identifies its instant, so that offset takes precedence. The separate Output time zone changes the date display without changing the timestamp.' },
    { q: 'What happens when daylight-saving time changes?', a: 'A time skipped by a forward clock change is rejected. A time that occurs twice during a backward change asks you to choose the earlier or later occurrence. You can also provide an explicit offset to identify the instant. Time-zone rules come from your browser’s time-zone database.' },
    { q: 'How much precision is preserved?', a: 'Results preserve milliseconds. Seconds can contain up to three decimal places; milliseconds must be whole numbers. Hiding milliseconds only changes the formatted display, while the ISO result, timestamp values and exports retain the full instant.' },
    { q: 'Why is my local date different from the UTC date?', a: 'A timestamp represents one instant worldwide. Calendar dates and clock times depend on the time zone. For example, 1970-01-01 00:00 UTC is 05:30 in Asia/Kolkata. The offset shown in the result belongs to that instant and can change seasonally.' },
    { q: 'Do results change with the live clock, and can I export them?', a: 'Converted results are fixed until you edit their input or convert again. The live clock updates separately every second. Use Reset to now to capture a new instant. Copy individual values or all results, or download a CSV. Conversion runs in your browser without uploading the entered values or storing them locally.' },
  ];
  constructor() {
    inject(SeoService).set('Epoch Converter - Unix Timestamp & Time Zone Tools | XcellHost', 'Convert Unix seconds and milliseconds to dates and back. Choose time zones and formats, view a live clock and copy or export CSV results.', '/tools/epoch-converter');
    let timer: ReturnType<typeof setInterval> | undefined;
    afterNextRender(() => {
      const local = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
      this.localZone.set(local);
      this.zones.update(zones => [...new Set([...zones, local])].sort());
      this.inputZone.set(local); this.zone.set(local);
      this.now.set(Date.now()); this.resetNow();
      timer = setInterval(() => this.now.set(Date.now()), 1000);
    });
    inject(DestroyRef).onDestroy(() => { if (timer) clearInterval(timer); this.revision++; this.fallback.set(''); });
  }
  private changed(): void { this.revision++; this.notice.set(''); this.fallback.set(''); }
  private invalidate(): void { this.changed(); this.instant.set(null); this.error.set(''); }
  edit(field: 'timestamp' | 'date', event: Event): void { this.invalidate(); this[field].set((event.target as HTMLInputElement).value); }
  setUnit(event: Event): void { this.invalidate(); this.unit.set((event.target as HTMLSelectElement).value as EpochUnit); }
  setInputZone(event: Event): void { this.invalidate(); this.inputZone.set((event.target as HTMLSelectElement).value); }
  setRepeated(event: Event): void { this.invalidate(); this.repeated.set((event.target as HTMLSelectElement).value as RepeatedTime); }
  setZone(event: Event): void { this.changed(); this.zone.set((event.target as HTMLSelectElement).value); }
  useLocal(): void { this.changed(); this.zone.set(this.localZone()); }
  setFormat(event: Event): void { this.changed(); this.dateFormat.set((event.target as HTMLSelectElement).value as EpochDateFormat); }
  setHours(event: Event): void { this.changed(); this.hour12.set((event.target as HTMLSelectElement).value === '12'); }
  toggleMilliseconds(event: Event): void { this.changed(); this.showMilliseconds.set((event.target as HTMLInputElement).checked); }
  convert(source: 'timestamp' | 'date', event?: Event): void {
    event?.preventDefault(); this.invalidate(); this.source.set(source);
    try {
      const instant = source === 'timestamp' ? parseEpoch(this.timestamp(), this.unit()) : parseEpochDate(this.date(), this.inputZone(), this.repeated());
      this.instant.set(instant); this.notice.set('Conversion complete.');
    } catch (error) { this.error.set(error instanceof Error ? error.message : 'Unable to convert this value.'); }
  }
  resetNow(): void {
    this.invalidate(); const now = Date.now(); this.now.set(now);
    this.timestamp.set(this.unit() === 'milliseconds' ? String(now) : epochSeconds(now));
    this.date.set(epochDateInput(now, this.inputZone())); this.source.set('timestamp');
    this.instant.set({ milliseconds: now, unit: 'milliseconds', ambiguous: false, interpretation: 'Current time captured as a fixed instant.' });
    this.notice.set('Current time captured.');
  }
  example(source: 'timestamp' | 'date'): void {
    this.invalidate();
    if (source === 'timestamp') { this.timestamp.set(this.unit() === 'milliseconds' ? '1735689600123' : '1735689600.123'); }
    else { this.date.set('2025-01-01T00:00:00.123Z'); }
    this.convert(source);
  }
  clear(): void { this.invalidate(); this.timestamp.set(''); this.date.set(''); this.details.set(false); }
  toggleDetails(): void { this.details.update(value => !value); }
  async copy(kind: 'all' | 'seconds' | 'milliseconds' | 'iso' | 'formatted' | 'clock'): Promise<void> {
    const result = kind === 'clock' ? this.clock() : this.result().value;
    if (!result) return;
    const value = kind === 'all' ? epochReportText(result, this.instant()?.interpretation || '') : kind === 'clock' ? result.seconds.split('.')[0] : result[kind];
    const revision = this.revision;
    try { await navigator.clipboard.writeText(value); if (revision === this.revision) { this.fallback.set(''); this.notice.set(kind === 'clock' ? 'Current Unix seconds copied.' : 'Result copied.'); } }
    catch { if (revision !== this.revision) return; this.fallback.set(value); this.notice.set('Clipboard unavailable. Select and copy the text below.'); setTimeout(() => { if (revision === this.revision) this.document.querySelector<HTMLTextAreaElement>('#epoch-copy-fallback')?.select(); }, 0); }
  }
  download(): void {
    const result = this.result().value, instant = this.instant(); if (!result || !instant) return;
    const url = URL.createObjectURL(new Blob(['\uFEFF' + epochReportCsv(result, instant.interpretation)], { type: 'text/csv;charset=utf-8' }));
    const link = this.document.createElement('a'); link.href = url; link.download = 'xcellhost-epoch-conversion.csv'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000); this.notice.set('CSV download started.');
  }
}
