import { provideHttpClient, HttpClient, HttpParams } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { cmsRequest } from './cms-request';

describe('CMS production requests', () => {
  it('uses the website PHP endpoint while preserving collection and pagination', () => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    const previous = environment.strapiApiUrl;
    const http = TestBed.inject(HttpTestingController);
    try {
      environment.strapiApiUrl = '/api/cms.php';
      cmsRequest(TestBed.inject(HttpClient), 'blogs', new HttpParams().set('pagination[page]', 2))
        .subscribe();
      const request = http.expectOne(req => req.url === '/api/cms.php');
      expect(request.request.params.get('collection')).toBe('blogs');
      expect(request.request.params.get('pagination[page]')).toBe('2');
      request.flush({ data: [] });
      http.verify();
    } finally {
      environment.strapiApiUrl = previous;
    }
  });
});
