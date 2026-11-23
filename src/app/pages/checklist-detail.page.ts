import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ChecklistLibraryService } from '../core/checklist-library.service';
import { ChecklistRequest, validateChecklistRequest } from '../core/checklist-resources';
import { LeadService } from '../core/lead.service';
import { SeoService } from '../core/seo.service';
import { CHECKLISTS, checklistCount } from '../data/checklists.data';

const emptyRequest = (): ChecklistRequest => ({ fullName: '', email: '', phone: '', company: '', consent: false });
@Component({ selector: 'xh-checklist-detail-page', standalone: true, imports: [RouterLink], templateUrl: './checklist-detail.page.html', styleUrls: ['./checklists.page.css','./checklist-detail.page.css'], changeDetection: ChangeDetectionStrategy.OnPush })
export class ChecklistDetailPage {
  private readonly document = inject(DOCUMENT);
  private readonly leads = inject(LeadService);
  private readonly seo = inject(SeoService);
  private revision = 0;
  readonly resources = toSignal(inject(ChecklistLibraryService).resources$, { initialValue: [...CHECKLISTS] });
  readonly slug = signal('');
  readonly resource = computed(() => this.resources().find(item => item.slug === this.slug()) || null);
  readonly related = computed(() => this.resources().filter(item => item.slug !== this.slug()).slice(0,3));
  readonly values = signal<ChecklistRequest>(emptyRequest());
  readonly errors = signal<Partial<Record<keyof ChecklistRequest,string>>>({});
  readonly busy = signal(false);
  readonly error = signal('');
  readonly ready = signal(false);
  readonly downloadUrl = signal('');
  readonly filename = computed(() => this.slug() + '.pdf');
  readonly count = checklistCount;
  constructor() {
    inject(ActivatedRoute).paramMap.pipe(takeUntilDestroyed()).subscribe(params => { this.reset(); this.slug.set(params.get('slug') || ''); });
    effect(() => { const resource = this.resource(); this.seo.set(resource ? resource.title + ' | XcellHost' : 'Checklist | XcellHost', resource?.description || 'Explore and download XcellHost checklists.', '/checklists/' + this.slug(), resource?.cover); });
    inject(DestroyRef).onDestroy(() => this.reset());
  }
  private reset(): void { this.revision++; const url = this.downloadUrl(); if (url) URL.revokeObjectURL(url); this.downloadUrl.set(''); this.ready.set(false); this.busy.set(false); this.error.set(''); this.values.set(emptyRequest()); this.errors.set({}); }
  edit(field: Exclude<keyof ChecklistRequest,'consent'>, event: Event): void { this.values.update(values => ({ ...values, [field]: (event.target as HTMLInputElement).value })); this.errors.update(errors => ({ ...errors, [field]: undefined })); this.error.set(''); }
  consent(event: Event): void { this.values.update(values => ({ ...values, consent: (event.target as HTMLInputElement).checked })); this.errors.update(errors => ({ ...errors, consent: undefined })); }
  async prepare(event: Event): Promise<void> {
    event.preventDefault(); if (this.busy()) return;
    const errors = validateChecklistRequest(this.values()); this.errors.set(errors);
    if (Object.keys(errors).length) { const first = Object.keys(errors)[0]; this.document.getElementById('checklist-' + first)?.focus(); return; }
    const resource = this.resource(); if (!resource) return; const revision = this.revision;
    this.busy.set(true); this.error.set('');
    try {
      const { checklistPdf } = await import('../core/checklist-pdf'); if (revision !== this.revision) return;
      const bytes = checklistPdf(resource), values = this.values();
      const result = await this.leads.submit('doc', { product: resource.title, resource: resource.slug, format: 'checklist-pdf', name: values.fullName.trim(), email: values.email.trim(), phone: values.phone.trim(), company: values.company.trim(), consent: values.consent });
      if (revision !== this.revision) return;
      if (!result.ok) throw new Error('We could not process the request. Please try again.');
      const url = URL.createObjectURL(new Blob([new Uint8Array(bytes).buffer], { type: 'application/pdf' })); this.downloadUrl.set(url); this.ready.set(true); this.values.set(emptyRequest());
      const link = this.document.createElement('a'); link.href = url; link.download = resource.slug + '.pdf'; link.click();
      setTimeout(() => { if (revision === this.revision) this.document.getElementById('checklist-download-ready')?.focus(); }, 0);
    } catch (error) { if (revision === this.revision) this.error.set(error instanceof Error ? error.message : 'The PDF could not be prepared. Please try again.'); }
    finally { if (revision === this.revision) this.busy.set(false); }
  }
  date(value: string): string { const date = new Date(value + 'T00:00:00Z'); return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date); }
}
