import { signal } from '@angular/core';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { BlogApiService, CmsBlogPost } from '../core/blog-api.service';
import { CaseStudiesApiService } from '../core/case-studies-api.service';
import { OverlayService } from '../core/overlay.service';
import { SearchDialogComponent } from './search-dialog.component';

describe('Search dialog live results', () => {
  it('opens on website search by default', () => {
    TestBed.configureTestingModule({
      imports: [SearchDialogComponent],
      providers: [
        provideRouter([]),
        { provide: BlogApiService, useValue: { posts$: of([]), useCases$: of([]), postsStatus: signal('ready') } },
        { provide: CaseStudiesApiService, useValue: { studies$: of([]) } },
      ],
    });
    const fixture = TestBed.createComponent(SearchDialogComponent);
    TestBed.inject(OverlayService).open('search');
    fixture.detectChanges();

    expect(fixture.componentInstance.websiteSearch()).toBeTrue();
    expect(fixture.nativeElement.querySelector('.srch.open')).not.toBeNull();
    fixture.destroy();
  });

  for (const dismissal of ['close button', 'Escape handler', 'backdrop'] as const) {
    it(`hides immediately through the ${dismissal}`, () => {
      TestBed.configureTestingModule({
        imports: [SearchDialogComponent],
        providers: [
          provideRouter([]),
          { provide: BlogApiService, useValue: { posts$: of([]), useCases$: of([]), postsStatus: signal('ready') } },
          { provide: CaseStudiesApiService, useValue: { studies$: of([]) } },
        ],
      });
      const fixture = TestBed.createComponent(SearchDialogComponent);
      const overlay = TestBed.inject(OverlayService);
      fixture.detectChanges();
      fixture.componentInstance.websiteSearch.set(true);
      overlay.open('search');
      fixture.detectChanges();
      const panel = fixture.nativeElement.querySelector('.srch') as HTMLElement;
      const box = fixture.nativeElement.querySelector('.srch-box') as HTMLElement;

      box.click();
      expect(overlay.isOpen('search')).toBeTrue();
      if (dismissal === 'close button') {
        (panel.querySelector('.srch-x') as HTMLButtonElement).click();
      } else if (dismissal === 'backdrop') {
        panel.click();
      } else {
        // App.onEscape delegates to this shared stack handler.
        overlay.closeTop();
      }
      fixture.detectChanges();

      expect(overlay.isOpen('search')).toBeFalse();
      expect(getComputedStyle(panel).transitionDuration).toBe('0s');
      expect(getComputedStyle(panel).opacity).toBe('0');
      expect(getComputedStyle(panel).visibility).toBe('hidden');
      expect(getComputedStyle(box).transitionDuration).toBe('0s');
      expect(panel.hasAttribute('inert')).toBeTrue();
      expect(document.body.classList.contains('xh-locked')).toBeFalse();
      fixture.destroy();
    });
  }

  it('updates an open search and its source counts when content is published, edited, or removed', fakeAsync(() => {
    const posts = new BehaviorSubject<readonly CmsBlogPost[]>([]);
    TestBed.configureTestingModule({
      imports: [SearchDialogComponent],
      providers: [
        provideRouter([]),
        { provide: BlogApiService, useValue: { posts$: posts, useCases$: of([]), postsStatus: signal('ready') } },
        { provide: CaseStudiesApiService, useValue: { studies$: of([]) } },
      ],
    });
    const fixture = TestBed.createComponent(SearchDialogComponent);
    fixture.detectChanges();
    fixture.componentInstance.websiteSearch.set(true);
    TestBed.inject(OverlayService).open('search');
    fixture.detectChanges();
    const panel = fixture.nativeElement.querySelector('.srch') as HTMLElement;
    const box = fixture.nativeElement.querySelector('.srch-box') as HTMLElement;
    // No animation or focus timeout should stand between opening and typing.
    expect(getComputedStyle(panel).opacity).toBe('1');
    expect(getComputedStyle(panel).transitionDuration).toBe('0s');
    expect(getComputedStyle(box).transform).toBe('none');
    expect(getComputedStyle(box).transitionDuration).toBe('0s');
    expect(document.activeElement).toBe(fixture.nativeElement.querySelector('#srchI'));
    tick(150);
    const dialog = fixture.componentInstance;
    dialog.setQuery('Pulsar discovery');
    tick(120);
    fixture.detectChanges();
    expect(dialog.results()).toEqual([]);
    posts.next([{
      title: 'Pulsar discovery guide', slug: 'pulsar-discovery', content: 'New published content',
      description: 'Read the newest discovery.', category: 'Cloud', author: 'XcellHost',
      publishedAt: '2026-10-16T08:00:00Z',
    } as CmsBlogPost]);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.sr-link').getAttribute('href')).toBe('/insights/pulsar-discovery');
    expect(dialog.sourceOptions().find(source => source.value === 'Blog')?.count).toBe(1);
    dialog.toggleFilter('source', 'Blog');
    fixture.detectChanges();
    expect(dialog.results()[0].name).toBe('Pulsar discovery guide');
    posts.next([{ ...posts.value[0], title: 'Pulsar discovery updated', slug: 'pulsar-discovery-updated' }]);
    fixture.detectChanges();
    expect(dialog.results()[0].url).toBe('/insights/pulsar-discovery-updated');
    posts.next([]);
    fixture.detectChanges();
    expect(dialog.results()).toEqual([]);
    expect(fixture.nativeElement.textContent).toContain('No matching results');
    fixture.destroy();
  }));
});
