import { ChangeDetectionStrategy, Component, ElementRef, computed, input, output, signal, viewChild } from '@angular/core';

export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  region?: string;
  flag?: string;
}

@Component({
  selector: 'xh-language-picker',
  standalone: true,
  templateUrl: './language-picker.component.html',
  styleUrl: './language-picker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'notranslate', translate: 'no' },
})
export class LanguagePickerComponent {
  readonly options = input<readonly LanguageOption[]>([]);
  readonly selected = input('en');
  readonly status = input<'loading' | 'ready' | 'error'>('ready');
  readonly selectLanguage = output<string>();
  readonly retry = output<void>();
  readonly query = signal('');
  readonly opened = signal(false);
  readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  readonly trigger = viewChild.required<ElementRef<HTMLButtonElement>>('trigger');
  readonly current = computed(() => this.options().find(item => item.code === this.selected()));
  readonly filtered = computed(() => {
    const query = this.query().trim().toLocaleLowerCase();
    return this.options().filter(item => `${item.name} ${item.nativeName} ${item.region ?? ''}`.toLocaleLowerCase().includes(query));
  });

  open(): void {
    this.query.set('');
    this.dialog().nativeElement.showModal();
    this.opened.set(true);
  }

  close(): void { this.dialog().nativeElement.close(); }

  onClose(): void {
    this.opened.set(false);
    this.trigger().nativeElement.focus();
  }

  backdrop(event: MouseEvent): void {
    if (event.target !== this.dialog().nativeElement) return;
    const rect = this.dialog().nativeElement.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) this.close();
  }

  choose(code: string): void {
    this.selectLanguage.emit(code);
    this.close();
  }
}
