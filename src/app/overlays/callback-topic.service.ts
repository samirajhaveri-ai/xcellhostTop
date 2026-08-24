import { Injectable, signal } from '@angular/core';

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

  readonly topic = this._topic.asReadonly();

  /** Record the subject the visitor wants to be called about. */
  ask(topic: string): void {
    this._topic.set(topic);
  }

  /** Dropped when the modal closes, so the next opening starts blank. */
  clear(): void {
    this._topic.set('');
  }
}
