import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TOOL_CATEGORIES } from '../data/tools.data';

@Component({
  selector: 'xh-tools-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tools-menu.component.html',
  styleUrl: './tools-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolsMenuComponent {
  @ViewChild('panel') panel!: ElementRef<HTMLDivElement>;
  @ViewChild('trigger') trigger!: ElementRef<HTMLButtonElement>;
  readonly categories = TOOL_CATEGORIES;
  readonly opened = signal(false);
  readonly selected = signal('dns');
  readonly query = signal('');
  readonly active = computed(() => this.categories.find(c => c.id === this.selected())!);
  readonly groups = computed(() => {
    const query = this.query().trim().toLowerCase();
    const groups = new Map<string, { name: string; tools: typeof TOOL_CATEGORIES[number]['tools'] }>();
    for (const category of query ? this.categories : [this.active()]) for (const tool of category.tools) {
      if (query && !`${tool.name} ${tool.description} ${category.name}`.toLowerCase().includes(query)) continue;
      const key = query ? category.name : tool.group;
      if (!groups.has(key)) groups.set(key, { name: key, tools: [] });
      groups.get(key)!.tools.push(tool);
    }
    return [...groups.values()];
  });

  toggle(): void {
    if (this.opened()) { this.close(); return; }
    this.query.set('');
    const panel = this.panel.nativeElement;
    panel.showPopover();
    const rect = this.trigger.nativeElement.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;
    const width = Math.min(960, viewportWidth - 24);
    const top = Math.max(12, Math.min(rect.bottom + 10, window.innerHeight - 260));
    panel.style.width = `${width}px`;
    panel.style.left = `${Math.max(12, Math.min(rect.left, viewportWidth - width - 12))}px`;
    panel.style.top = `${top}px`;
    panel.style.maxHeight = `${Math.min(650, window.innerHeight - top - 12)}px`;
    this.opened.set(true);
  }
  close(): void { this.panel.nativeElement.hidePopover(); this.opened.set(false); }
  @HostListener('window:resize') onResize(): void { if (this.opened()) this.close(); }
  @HostListener('document:keydown.escape', ['$event']) onEscape(event: Event): void {
    if (!this.opened()) return;
    event.preventDefault(); this.close(); this.trigger.nativeElement.focus();
  }
  syncOpen(): void { this.opened.set(this.panel.nativeElement.matches(':popover-open')); }
  choose(id: string): void { this.selected.set(id); this.query.set(''); }
  search(event: Event): void { this.query.set((event.target as HTMLInputElement).value); }
}
