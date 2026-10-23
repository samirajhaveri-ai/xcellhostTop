import { Injectable, inject, signal } from '@angular/core';

import { OverlayService } from './overlay.service';

export type SearchLaunchMode = 'search' | 'ask-ai';

/** Coordinates which Algolia view should be shown when the shared search overlay opens. */
@Injectable({ providedIn: 'root' })
export class SearchLaunchService {
  private readonly overlay = inject(OverlayService);
  private readonly requestedMode = signal<SearchLaunchMode>('search');

  readonly mode = this.requestedMode.asReadonly();

  open(mode: SearchLaunchMode = 'search'): void {
    this.requestedMode.set(mode);
    this.overlay.open('search');
  }

  select(mode: SearchLaunchMode): void {
    this.requestedMode.set(mode);
  }

  reset(): void {
    this.requestedMode.set('search');
  }
}
