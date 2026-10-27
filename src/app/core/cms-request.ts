import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, timeout } from 'rxjs';
import { environment } from '../../environments/environment';

/** Production uses PHP on the website origin; local development uses Angular's proxy. */
export function cmsRequest<T>(http: HttpClient, collection: string, params: HttpParams): Observable<T> {
  const endpoint = environment.strapiApiUrl;
  return http.get<T>(endpoint || `${environment.strapiUrl}/api/${collection}`, {
    params: endpoint ? params.set('collection', collection) : params,
  }).pipe(timeout(20_000));
}
