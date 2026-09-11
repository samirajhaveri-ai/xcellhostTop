import { TestBed } from '@angular/core/testing';

import { SeoService } from '../core/seo.service';
import { PartnerMatrixPage } from './partner-matrix.page';

describe('Partner Matrix', () => {
  let page: PartnerMatrixPage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: SeoService, useValue: { set: () => {} } }],
    });
    page = TestBed.runInInjectionContext(() => new PartnerMatrixPage());
  });

  it('publishes only the 11 visible workbook contacts', () => {
    expect(page.contactCount).toBe(11);
    expect(page.visibleCount()).toBe(11);
  });

  it('filters contacts by team', () => {
    page.selectTeam('support');
    expect(page.visibleTeams().length).toBe(1);
    expect(page.visibleTeams()[0].name).toBe('Partner Support');
    expect(page.visibleCount()).toBe(1);
  });

  it('searches across role, city and purpose', () => {
    page.search({ target: { value: 'billing' } } as unknown as Event);
    expect(page.visibleCount()).toBe(1);
    expect(page.visibleTeams()[0].contacts[0].name).toBe('Mr. Abhishek Pandey');
  });
});
