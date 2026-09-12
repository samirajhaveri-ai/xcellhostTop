import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'xh-waap-content',
  standalone: true,
  templateUrl: './waap-content.component.html',
  styleUrl: './waap-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaapContentComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  selectStep(index: number): void {
    this.host.nativeElement.querySelectorAll<HTMLElement>('[data-s3]').forEach(element => {
      const active = element.dataset['s3'] === String(index);
      element.classList.toggle('on', active);
      if (element.tagName === 'BUTTON') element.setAttribute('aria-pressed', String(active));
    });
  }
}
