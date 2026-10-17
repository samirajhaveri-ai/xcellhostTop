import { TestBed } from '@angular/core/testing';
import type { DocSearchInstance, DocSearchProps } from '@docsearch/js';
import { AlgoliaSearchComponent, DOCSEARCH_LOADER } from './algolia-search.component';

describe('Algolia search lifecycle', () => {
  function setup() {
    let options!: DocSearchProps;
    const instance = {
      isReady: true, isOpen: false,
      open: jasmine.createSpy('open'), close: jasmine.createSpy('close'),
      openAskAi: jasmine.createSpy('openAskAi'), destroy: jasmine.createSpy('destroy'),
    } satisfies DocSearchInstance;
    const create = jasmine.createSpy('docsearch').and.callFake((value: DocSearchProps) => {
      options = value;
      queueMicrotask(() => options.onReady?.());
      return instance;
    });
    const loader = jasmine.createSpy('load').and.resolveTo({ default: create });
    TestBed.configureTestingModule({ imports: [AlgoliaSearchComponent], providers: [{ provide: DOCSEARCH_LOADER, useValue: loader }] });
    const fixture = TestBed.createComponent(AlgoliaSearchComponent);
    return { fixture, instance, create, loader, options: () => options };
  }

  it('loads only when opened, connects the supplied index and agent, and cleans up between openings', async () => {
    const { fixture, instance, create, loader, options } = setup();
    fixture.detectChanges();
    expect(loader).not.toHaveBeenCalled();
    fixture.componentRef.setInput('active', true);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(options().indices).toEqual([{ name: 'xcellhostknowlegdebase search', searchParameters: { attributesToRetrieve: ['*'] } }]);
    expect(options().askAi).toEqual({ agentId: 'd3eb7873-e31f-4418-9b42-9bcaebe2e8f4' });
    expect(instance.open).toHaveBeenCalled();
    fixture.componentRef.setInput('active', false);
    fixture.detectChanges();
    expect(instance.destroy).toHaveBeenCalled();
    fixture.componentRef.setInput('active', true);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(create).toHaveBeenCalledTimes(2);
    fixture.destroy();
    expect(instance.destroy).toHaveBeenCalled();
  });

  it('preserves the overlay when switching to website search, even for delayed close callbacks', async () => {
    const { fixture, options } = setup();
    const closed = jasmine.createSpy('closed');
    const website = jasmine.createSpy('website');
    fixture.componentInstance.closed.subscribe(closed);
    fixture.componentInstance.websiteSearch.subscribe(website);
    fixture.componentRef.setInput('active', true);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.componentInstance.useWebsiteSearch();
    options().onClose?.();
    expect(website).toHaveBeenCalled();
    expect(closed).not.toHaveBeenCalled();
    fixture.destroy();
  });

  it('does not open a widget that finishes loading after dismissal', async () => {
    const { fixture, instance } = setup();
    fixture.componentRef.setInput('active', true);
    fixture.detectChanges();
    fixture.componentRef.setInput('active', false);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(instance.open).not.toHaveBeenCalled();
    fixture.destroy();
  });

  it('offers retry and website search when the lazy chunk fails', async () => {
    const { fixture, loader } = setup();
    loader.and.rejectWith(new Error('offline'));
    fixture.componentRef.setInput('active', true);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Search could not load');
    expect(fixture.nativeElement.textContent).toContain('Search website instead');
    fixture.componentInstance.retry();
    await fixture.whenStable();
    expect(loader).toHaveBeenCalledTimes(2);
    fixture.destroy();
  });
});
