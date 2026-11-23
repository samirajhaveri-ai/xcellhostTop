import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { ChecklistLibraryService } from '../core/checklist-library.service';
import { CHECKLISTS, checklistCount } from '../data/checklists.data';

@Component({ selector: 'xh-checklists-page', standalone: true, imports: [RouterLink], templateUrl: './checklists.page.html', styleUrl: './checklists.page.css', changeDetection: ChangeDetectionStrategy.OnPush })
export class ChecklistsPage {
  readonly resources = toSignal(inject(ChecklistLibraryService).resources$, { initialValue: [...CHECKLISTS] });
  readonly query = signal('');
  readonly topic = signal('All topics');
  readonly page = signal(1);
  readonly pageSize = 6;
  readonly count = checklistCount;
  readonly topics = computed(() => ['All topics', ...new Set(this.resources().map(resource => resource.topic))]);
  readonly filtered = computed(() => { const terms = this.query().toLowerCase().trim().split(/\s+/).filter(Boolean); return this.resources().filter(resource => (this.topic() === 'All topics' || this.topic() === resource.topic) && terms.every(term => (resource.title + ' ' + resource.description + ' ' + resource.topic).toLowerCase().includes(term))); });
  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize)));
  readonly currentPage = computed(() => Math.min(this.page(), this.totalPages()));
  readonly visible = computed(() => this.filtered().slice((this.currentPage() - 1) * this.pageSize, this.currentPage() * this.pageSize));
  readonly pages = computed(() => Array.from({ length: this.totalPages() }, (_, index) => index + 1));
  constructor() { inject(SeoService).set('Checklists - Practical Technology Review Resources | XcellHost', 'Explore XcellHost checklists for resilience, cloud foundations and analytics readiness. Read the review steps and download a PDF workbook for your team.', '/resources/checklists'); }
  search(event: Event): void { this.query.set((event.target as HTMLInputElement).value); this.page.set(1); }
  filter(event: Event): void { this.topic.set((event.target as HTMLSelectElement).value); this.page.set(1); }
  clearFilters(): void { this.query.set(''); this.topic.set('All topics'); this.page.set(1); }
  goToPage(page: number, results: HTMLElement): void { this.page.set(Math.max(1, Math.min(this.totalPages(), page))); results.focus({ preventScroll: true }); results.scrollIntoView({ block: 'start' }); }
  date(value: string): string { const date = new Date(value + 'T00:00:00Z'); return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date); }
}
