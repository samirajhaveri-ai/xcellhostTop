import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-reseller-program-content',
  standalone: true,
  templateUrl: './reseller-program-content.component.html',
  styleUrls: ['./vmc-content.component.css', './reseller-program-content.component.css', './reseller-program-spacing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResellerProgramContentComponent implements OnDestroy {
  @ViewChild('additionalContentFrame')
  private additionalContentFrame?: ElementRef<HTMLIFrameElement>;

  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private additionalContentObserver?: ResizeObserver;

  apply(): void {
    this.topics.ask('XcellHost Cloud Channel Partner Program application');
    this.overlay.open('callback');
  }

  onAdditionalContentLoad(): void {
    const iframe = this.additionalContentFrame?.nativeElement;
    const contentDocument = iframe?.contentDocument;

    if (!iframe || !contentDocument) return;

    const resize = (): void => {
      const height = Math.max(
        contentDocument.documentElement.scrollHeight,
        contentDocument.body?.scrollHeight ?? 0,
      );
      iframe.style.height = `${height}px`;
    };

    resize();

    if (typeof ResizeObserver !== 'undefined') {
      this.additionalContentObserver?.disconnect();
      this.additionalContentObserver = new ResizeObserver(resize);
      this.additionalContentObserver.observe(contentDocument.documentElement);
      if (contentDocument.body) this.additionalContentObserver.observe(contentDocument.body);
    }

    contentDocument.fonts?.ready.then(resize);
  }

  ngOnDestroy(): void {
    this.additionalContentObserver?.disconnect();
  }
}
