import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, expand, map, Observable, of, reduce, shareReplay, switchMap, timer } from 'rxjs';

import { environment } from '../../environments/environment';
import { CASE_STUDIES, CaseStudy } from '../data/case-studies.data';

interface RawCaseStudy {
  readonly id?: number | string;
  readonly documentId?: string;
  readonly slug?: string;
  readonly mainCategory?: string | null;
  readonly subCategory?: string | null;
  readonly category?: string | null;
  readonly customer?: string;
  readonly headline?: string;
  readonly quote?: string;
  readonly quoteBy?: string;
  readonly industry?: string;
  readonly profile?: string;
  readonly metric?: string;
  readonly metricLabel?: string;
  readonly summary?: string;
  readonly challenge?: string;
  readonly solution?: string;
  readonly impact?: unknown;
  readonly services?: unknown;
}

interface StrapiCaseStudyResponse {
  readonly data: readonly RawCaseStudy[];
  readonly meta?: { readonly pagination: { readonly page: number; readonly pageCount: number } };
}

@Injectable({ providedIn: 'root' })
export class CaseStudiesApiService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = `${environment.strapiUrl.replace(/\/$/, '')}/api/case-studies`;

  readonly studies$: Observable<readonly CaseStudy[]> = timer(0, 30_000).pipe(
    switchMap(() => this.list().pipe(catchError(() => of(CASE_STUDIES)))),
    map((studies) => studies.length ? studies : CASE_STUDIES),
    shareReplay({ bufferSize: 1, refCount: true }),
  );

  private list(): Observable<readonly CaseStudy[]> {
    return this.listPage(1).pipe(
      expand((response) => {
        const pagination = response.meta?.pagination;
        return pagination && pagination.page < pagination.pageCount
          ? this.listPage(pagination.page + 1)
          : EMPTY;
      }),
      reduce(
        (studies, response) => studies.concat(response.data.map((study) => this.normalise(study))),
        [] as CaseStudy[],
      ),
    );
  }

  private listPage(page: number): Observable<StrapiCaseStudyResponse> {
    const params = new HttpParams()
      .set('sort[0]', 'publishedAt:desc')
      .set('populate', '*')
      .set('pagination[page]', page)
      .set('pagination[pageSize]', '100');
    return this.http.get<StrapiCaseStudyResponse>(this.endpoint, { params });
  }

  private normalise(study: RawCaseStudy): CaseStudy {
    const industry = study.industry?.trim() || 'Business';
    return {
      id: study.slug?.trim() || study.documentId || String(study.id ?? ''),
      documentId: study.documentId,
      mainCategory: study.mainCategory?.trim() || this.parentCategory(study.category || industry),
      subCategory: study.subCategory?.trim() || study.category?.trim() || industry,
      customer: study.customer?.trim(),
      headline: study.headline?.trim(),
      quote: study.quote?.trim(),
      quoteBy: study.quoteBy?.trim(),
      industry,
      profile: study.profile?.trim() || 'Customer',
      metric: study.metric?.trim() || 'Measurable impact',
      metricLabel: study.metricLabel?.trim() || 'A practical customer outcome',
      summary: study.summary?.trim() || '',
      challenge: study.challenge?.trim() || '',
      solution: study.solution?.trim() || '',
      impact: this.stringList(study.impact),
      services: this.stringList(study.services),
    };
  }

  private stringList(value: unknown): readonly string[] {
    if (Array.isArray(value)) {
      return value.map((item) => {
        if (typeof item === 'string') return item.trim();
        if (item && typeof item === 'object') {
          const entry = item as Record<string, unknown>;
          return String(entry['text'] ?? entry['value'] ?? entry['label'] ?? '').trim();
        }
        return '';
      }).filter(Boolean);
    }
    if (typeof value === 'string') return value.split(/\r?\n|,/).map((item) => item.trim()).filter(Boolean);
    return [];
  }

  private parentCategory(value: string): string {
    const category = value.toLowerCase();
    if (/dpdpa|privacy|compliance|bfsi|governance/.test(category)) return 'Data Protection & Compliance';
    if (/security|soc|cyber|edr|threat/.test(category)) return 'Cybersecurity';
    if (/email|domain|certificate|trust/.test(category)) return 'Digital Trust';
    if (/cloud|backup|desktop|server|manufactur|professional/.test(category)) return 'Cloud & Infrastructure';
    return 'Business Transformation';
  }
}
