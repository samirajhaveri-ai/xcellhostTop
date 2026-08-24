import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  Injector,
  afterNextRender,
  computed,
  effect,
  inject,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ChatService } from '../core/chat.service';
import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from './callback-topic.service';
import { environment } from '../../environments/environment';

/** One rendered transcript bubble. */
interface Bubble {
  role: 'user' | 'bot';
  html: SafeHtml;
}

/**
 * The floating website assistant: the `.bot-fab` launcher and the `.bot`
 * panel it toggles.
 *
 * Every answer, chip and busy flag comes from `ChatService`; this component
 * only renders them, keeps the transcript scrolled to the newest message and
 * wires the two human hand-offs (WhatsApp, callback modal).
 *
 * Visibility is owned by `OverlayService` under the id `'chat'`, which the
 * service deliberately excludes from body-scroll locking — the page behind the
 * assistant stays scrollable, exactly as it did originally.
 */
@Component({
  selector: 'xh-chatbot',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
  templateUrl: './chatbot.component.html',
})
export class ChatbotComponent {
  readonly chat = inject(ChatService);
  readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly leads = inject(LeadService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly injector = inject(Injector);

  private readonly bodyRef = viewChild<ElementRef<HTMLElement>>('botBody');
  private readonly inputRef = viewChild<ElementRef<HTMLInputElement>>('botInput');

  /** What is currently typed in `#botInput`. */
  readonly draft = signal('');

  /** The fixed "Quick questions" row — the keys of `CHAT_QUICK`, title-cased. */
  readonly quick: { key: string; label: string }[] = this.chat.quickKeys.map((key) => ({
    key,
    label: key.charAt(0).toUpperCase() + key.slice(1),
  }));

  /**
   * Bot answers are HTML fragments from `chat.data.ts`; user text is escaped by
   * `ChatService` before it is stored. Both are ours, so trusting them is safe.
   */
  readonly bubbles = computed<Bubble[]>(() =>
    this.chat.messages().map((m) => ({
      role: m.role,
      html: this.sanitizer.bypassSecurityTrustHtml(m.html),
    }))
  );

  /** The quick-question row is only offered before the first real exchange. */
  readonly showQuick = computed(() => this.chat.messages().length <= 1);

  /**
   * Label the assistant honestly, as the original did: "AI" only when a chat
   * endpoint is actually configured, "guided" when it is answering from the
   * canned rules.
   */
  private readonly idleStatus = environment.chatEndpoint.trim()
    ? 'AI assistant · answers in seconds'
    : 'Guided assistant · 150+ services';

  readonly status = computed(() => (this.chat.busy() ? 'Typing…' : this.idleStatus));

  /** `#botEsc` carries the last eight turns across to WhatsApp, as the original did. */
  readonly escHref = computed(() => {
    const log = this.chat
      .messages()
      .slice(-8)
      .map((m) => (m.role === 'user' ? 'Customer: ' : 'Bot: ') + this.plain(m.html));
    return this.leads.whatsappLink(
      [
        'Hi XcellHost! I was chatting on your website.',
        '',
        ...log,
        '',
        'Please connect me with your sales team.',
      ].join('\n')
    );
  });

  private focusTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    /* greet on the first open, and put the caret in the input every time */
    effect(() => {
      if (!this.overlay.isOpen('chat')) return;
      untracked(() => this.chat.greet());
      /* `.bot` transitions `visibility`, so the input is not focusable yet in
         this task. Defer past the transition, as the original did. */
      if (this.focusTimer) clearTimeout(this.focusTimer);
      this.focusTimer = setTimeout(() => this.inputRef()?.nativeElement.focus(), 300);
    });

    inject(DestroyRef).onDestroy(() => {
      if (this.focusTimer) clearTimeout(this.focusTimer);
    });

    /* keep the transcript pinned to the newest message */
    effect(() => {
      this.chat.messages();
      this.chat.busy();
      afterNextRender(
        () => {
          const el = this.bodyRef()?.nativeElement;
          if (el) el.scrollTop = el.scrollHeight;
        },
        { injector: this.injector }
      );
    });
  }

  /* ------------------------------------------------------------- panel */

  toggle(): void {
    if (this.overlay.isOpen('chat')) this.overlay.close('chat');
    else this.overlay.open('chat');
  }

  close(): void {
    this.overlay.close('chat');
  }

  /* ---------------------------------------------------------- messaging */

  onInput(ev: Event): void {
    this.draft.set((ev.target as HTMLInputElement).value);
  }

  send(): void {
    const text = this.draft().trim();
    if (!text || this.chat.busy()) return;
    this.draft.set('');
    void this.chat.send(text);
  }

  /** A chip was tapped — send it as if the visitor had typed it. */
  sendText(text: string): void {
    if (this.chat.busy()) return;
    void this.chat.send(text);
  }

  askQuick(key: string): void {
    if (this.chat.busy()) return;
    this.chat.quick(key);
  }

  /* -------------------------------------------------------- escalation */

  openCallback(): void {
    this.topics.ask('Website assistant');
    this.overlay.open('callback');
  }

  /** Flatten a stored HTML fragment back to the plain text WhatsApp needs. */
  private plain(html: string): string {
    return html
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]+>/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/\s+/g, ' ')
      .trim();
  }
}
