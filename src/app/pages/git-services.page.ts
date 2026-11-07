import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-git-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: `<xh-imported-interactive-content [source]="source" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GitServicesPage {
  private readonly route = inject(ActivatedRoute);
  readonly source: 'github-services' | 'gitlab-services' = this.route.snapshot.data['gitSource'];

  constructor() {
    inject(SeoService).set(
      this.route.snapshot.title || 'Developer Services | XcellHost',
      this.route.snapshot.data['description'],
      '/' + this.source,
    );
  }
}
