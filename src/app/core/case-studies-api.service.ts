import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, expand, map, Observable, of, reduce, shareReplay, switchMap, timer } from 'rxjs';

import { environment } from '../../environments/environment';
import { CASE_STUDIES, CaseStudy } from '../data/case-studies.data';

interface RawCaseStudy {
  readonly id?: number | string;
  readonly documentId?: string;
  readonly publishedAt?: string;
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
  readonly relatedPages?: unknown;
  readonly coverImage?: RawCaseStudyImage | { readonly data?: RawCaseStudyImage | null } | null;
}

interface RawCaseStudyImage {
  readonly url?: string;
  readonly alternativeText?: string | null;
  readonly attributes?: {
    readonly url?: string;
    readonly alternativeText?: string | null;
  };
}

interface StrapiCaseStudyResponse {
  readonly data: readonly RawCaseStudy[];
  readonly meta?: { readonly pagination: { readonly page: number; readonly pageCount: number } };
}

interface RawBlogCaseStudy {
  readonly id?: number;
  readonly documentId?: string;
  readonly title?: string;
  readonly slug?: string;
  readonly description?: string;
  readonly content?: string;
  readonly author?: string;
  readonly category?: string;
  readonly relatedPages?: string | null;
  readonly publishedAt?: string;
  readonly coverImage?: RawCaseStudy['coverImage'];
}

interface StrapiBlogResponse {
  readonly data: readonly RawBlogCaseStudy[];
  readonly meta?: { readonly pagination: { readonly page: number; readonly pageCount: number } };
}

@Injectable({ providedIn: 'root' })
export class CaseStudiesApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.strapiUrl.replace(/\/$/, '');
  private readonly endpoint = `${this.baseUrl}/api/case-studies`;

  readonly studies$: Observable<readonly CaseStudy[]> = timer(0, 30_000).pipe(
    switchMap(() => this.list().pipe(
      catchError(() => this.listBlogCaseStudies().pipe(catchError(() => of([])))),
    )),
    map((studies) => {
      const remoteIds = new Set(studies.map((study) => study.id));
      return [...studies, ...CASE_STUDIES.filter((study) => !remoteIds.has(study.id))];
    }),
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
    const coverImage = this.coverImage(study.coverImage);
    return {
      id: study.slug?.trim() || study.documentId || String(study.id ?? ''),
      documentId: study.documentId,
      publishedAt: study.publishedAt,
      coverImageUrl: coverImage.url,
      coverImageAlt: coverImage.alt,
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
      relatedPages: this.stringList(study.relatedPages),
    };
  }

  /** Beginner-friendly fallback: case studies can be authored in the existing Blog collection. */
  private listBlogCaseStudies(): Observable<readonly CaseStudy[]> {
    return this.listBlogPage(1).pipe(
      expand((response) => {
        const pagination = response.meta?.pagination;
        return pagination && pagination.page < pagination.pageCount
          ? this.listBlogPage(pagination.page + 1)
          : EMPTY;
      }),
      reduce(
        (studies, response) => studies.concat(
          response.data
            .filter((entry) => /^case\s*stud(?:y|ies)$/i.test(entry.category?.trim() ?? ''))
            .map((entry) => this.normaliseBlogCaseStudy(entry))
            .filter((entry) => Boolean(entry.id)),
        ),
        [] as CaseStudy[],
      ),
    );
  }

  private listBlogPage(page: number): Observable<StrapiBlogResponse> {
    const params = new HttpParams()
      .set('sort[0]', 'date:desc')
      .set('sort[1]', 'time:desc')
      .set('populate', 'coverImage')
      .set('pagination[page]', page)
      .set('pagination[pageSize]', '100');
    return this.http.get<StrapiBlogResponse>(`${this.baseUrl}/api/blogs`, { params });
  }

  private normaliseBlogCaseStudy(entry: RawBlogCaseStudy): CaseStudy {
    const content = entry.content ?? '';
    const industry = this.metadata(content, 'Industry') || 'Business';
    const headline = entry.title?.trim() || 'Customer story';
    const results = this.sectionList(content, 'Results');
    const services = this.stringList(this.metadata(content, 'Services'));
    const coverImage = this.coverImage(entry.coverImage);
    return {
      id: entry.slug?.trim() || entry.documentId || String(entry.id ?? ''),
      documentId: entry.documentId,
      publishedAt: entry.publishedAt,
      coverImageUrl: coverImage.url,
      coverImageAlt: coverImage.alt,
      mainCategory: this.metadata(content, 'Main Category') || this.parentCategory(industry),
      subCategory: this.metadata(content, 'Subcategory') || industry,
      customer: entry.author?.trim() || 'XcellHost customer',
      headline,
      quote: this.section(content, 'Quote'),
      quoteBy: this.metadata(content, 'Quote By') || entry.author?.trim(),
      industry,
      profile: this.metadata(content, 'Profile') || 'Customer',
      metric: this.metadata(content, 'Metric') || 'Customer story',
      metricLabel: this.metadata(content, 'Outcome') || headline,
      summary: entry.description?.trim() || headline,
      challenge: this.section(content, 'Challenge') || entry.description?.trim() || '',
      solution: this.section(content, 'Solution') || '',
      impact: results.length ? results : ['Read the complete customer outcome'],
      services,
      relatedPages: this.stringList(entry.relatedPages),
    };
  }

  private coverImage(value: RawCaseStudy['coverImage']): { url: string | null; alt: string | null } {
    let image: RawCaseStudyImage | null | undefined;
    if (!value) image = value;
    else if ('data' in value) image = value.data;
    else image = value as RawCaseStudyImage;
    const url = image?.url ?? image?.attributes?.url;
    const alt = image?.alternativeText ?? image?.attributes?.alternativeText ?? null;
    if (!url?.trim()) return { url: null, alt };
    return {
      url: url.startsWith('http') ? url : `${this.baseUrl}${url}`,
      alt,
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

  private metadata(content: string, label: string): string {
    const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return content.match(new RegExp(`^\\s*(?:\\*\\*)?${escaped}(?:\\*\\*)?\\s*:\\s*(.+)$`, 'im'))?.[1]?.trim() ?? '';
  }

  private section(content: string, heading: string): string {
    const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const match = content.match(new RegExp(`^#{1,6}\\s*(?:The\\s+)?${escaped}\\s*$([\\s\\S]*?)(?=^#{1,6}\\s|(?![\\s\\S]))`, 'im'));
    return (match?.[1] ?? '')
      .replace(/^\s*[-*]\s+/gm, '')
      .replace(/\*\*/g, '')
      .trim();
  }

  private sectionList(content: string, heading: string): readonly string[] {
    const section = this.section(content, heading);
    return section.split(/\r?\n/).map((item) => item.replace(/^\s*[-*]\s+/, '').trim()).filter(Boolean);
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
