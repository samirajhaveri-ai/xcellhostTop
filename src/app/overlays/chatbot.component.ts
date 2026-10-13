import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, Injector, afterNextRender, effect, inject, signal, viewChild } from '@angular/core';
import { ChatService } from '../core/chat.service';
import { GENIE_STARTERS, formatAiText } from '../core/chat-api.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from './callback-topic.service';
@Component({
  selector: 'xh-chatbot', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
  templateUrl: './chatbot.component.html', styleUrl: './chatbot.component.css',
})
export class ChatbotComponent {
  readonly chat = inject(ChatService);
  readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly injector = inject(Injector);
  readonly draft = signal('');
  readonly starters = GENIE_STARTERS;
  readonly formatText = formatAiText;
  private readonly body = viewChild<ElementRef<HTMLElement>>('botBody');
  private readonly input = viewChild<ElementRef<HTMLTextAreaElement>>('botInput');
  private readonly launcher = viewChild<ElementRef<HTMLButtonElement>>('launcher');
  private wasOpen = false;
  private focusTimer?: ReturnType<typeof setTimeout>;
  constructor() {
    effect(() => {
      const open = this.overlay.isOpen('chat');
      if (this.focusTimer) clearTimeout(this.focusTimer);
      if (open) this.focusTimer = setTimeout(() => this.input()?.nativeElement.focus(), 330);
      else if (this.wasOpen) this.launcher()?.nativeElement.focus();
      this.wasOpen = open;
    });
    effect(() => {
      this.chat.messages(); this.chat.busy(); this.chat.error();
      afterNextRender(() => {
        const body = this.body()?.nativeElement;
        if (body) body.scrollTop = body.scrollHeight;
      }, { injector: this.injector });
    });
    inject(DestroyRef).onDestroy(() => { clearTimeout(this.focusTimer); this.chat.reset(); });
  }
  toggle(): void { if (this.overlay.isOpen('chat')) this.close(); else this.overlay.open('chat'); }
  close(): void { this.overlay.close('chat'); }
  clear(): void { this.chat.reset(); this.draft.set(''); this.input()?.nativeElement.focus(); }
  onInput(event: Event): void { this.draft.set((event.target as HTMLTextAreaElement).value); }
  onKey(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) { event.preventDefault(); this.send(); }
  }
  onEscape(event: Event): void { event.stopPropagation(); this.close(); }
  send(): void {
    if (!this.draft().trim() || this.chat.busy()) return;
    const text = this.draft(); this.draft.set('');
    void this.chat.send(text).then(() => { if (this.overlay.isOpen('chat')) this.input()?.nativeElement.focus(); });
  }
  ask(text: string): void { if (!this.chat.busy()) void this.chat.send(text); }
  openCallback(): void { this.topics.ask('XcellGenie specialist consultation'); this.overlay.open('callback'); }
}
