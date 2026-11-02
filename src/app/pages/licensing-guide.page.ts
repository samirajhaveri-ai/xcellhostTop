import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

type GuideSlug = 'acronis-licensing-guide' | 'microsoft-csp-licensing-guide' | 'microsoft-365-licensing-guide';

@Component({
  selector: 'xh-licensing-guide-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent, RouterLink],
  templateUrl: './licensing-guide.page.html',
  styleUrl: './licensing-guide.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LicensingGuidePage {
  private readonly route = inject(ActivatedRoute);
  readonly slug = this.route.snapshot.routeConfig!.path as GuideSlug;
  readonly product = this.slug.startsWith('acronis-') ? 'Acronis' : this.slug.startsWith('microsoft-csp-') ? 'Microsoft CSP' : 'Microsoft 365';
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  request(review = false): void {
    this.topics.ask(this.product + (review ? ' licensing — licence review / right-sizing' : ' licensing advice'));
    this.overlay.open('callback');
  }

  constructor() {
    inject(SeoService).set(
      this.route.snapshot.title || 'Licensing Guide | XcellHost',
      this.route.snapshot.data['searchDescription'],
      '/' + this.slug,
    );
  }
}
