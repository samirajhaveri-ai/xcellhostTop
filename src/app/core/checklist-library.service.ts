import { Injectable, inject } from '@angular/core';
import { map, shareReplay } from 'rxjs';
import { BlogApiService } from './blog-api.service';
import { mergeChecklistResources } from './checklist-resources';

@Injectable({ providedIn: 'root' })
export class ChecklistLibraryService {
  readonly resources$ = inject(BlogApiService).documents$.pipe(map(mergeChecklistResources), shareReplay({ bufferSize: 1, refCount: true }));
}
