import { Injectable, computed, signal } from '@angular/core';

export type DocKind = 'infosheet' | 'presentation';

export interface DocRequest {
  kind: DocKind;
  /** product the visitor was looking at when they asked for the document */
  product: string;
}

/**
 * The hand-off between "something asked for a document" and the document gate
 * modal, which lives in its own component.
 *
 * The original site called a global `__openDoc(type, product)` that both stored
 * the request and opened the modal. Here the two halves are split: the caller
 * records the request with `ask()` and opens the `doc` layer through
 * `OverlayService`, and the modal reads `request()` to render its copy.
 */
@Injectable({ providedIn: 'root' })
export class DocRequestService {
  private readonly _request = signal<DocRequest>({ kind: 'infosheet', product: '' });

  readonly request = this._request.asReadonly();
  readonly kind = computed(() => this._request().kind);
  readonly product = computed(() => this._request().product);

  /** Record which document was asked for, and for which product. */
  ask(kind: DocKind, product: string): void {
    this._request.set({ kind, product });
  }
}
