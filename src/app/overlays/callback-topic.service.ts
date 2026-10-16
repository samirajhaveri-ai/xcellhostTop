import { Injectable, signal } from '@angular/core';

export interface CallbackPrefill {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  help: string;
  details?: string;
  phone?: string;
}

/**
 * What the callback modal should open pre-filled with.
 *
 * The original resolved the topic at click time by sniffing which overlay page
 * happened to carry `.open`, or by reading `[data-cbtopic]` off the element
 * that was clicked. Neither survives a routed port, so the caller states the
 * subject explicitly — the same split `DocRequestService` uses for the
 * document gate: record the request, then open the `callback` layer.
 */
@Injectable({ providedIn: 'root' })
export class CallbackTopicService {
  private readonly _topic = signal('');
  private readonly _prefill = signal<CallbackPrefill | undefined>(undefined);

  readonly topic = this._topic.asReadonly();
  readonly prefill = this._prefill.asReadonly();

  /** Record the subject the visitor wants to be called about. */
  ask(topic: string, prefill?: CallbackPrefill): void {
    this._topic.set(topic);
    this._prefill.set(prefill);
  }

  /** Dropped when the modal closes, so the next opening starts blank. */
  clear(): void {
    this._topic.set('');
    this._prefill.set(undefined);
  }
}
