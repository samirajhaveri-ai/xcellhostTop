import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { SeoService } from '../core/seo.service';
import { IDENTITY_SECURITY_PAGES, IdentitySecuritySource } from '../data/identity-security-pages.data';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-identity-security-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `@if (source(); as slug) {
    <xh-imported-interactive-content [source]="slug" />
    <xh-insights-section [pageSlug]="slug" />
  }`,
})
export class IdentitySecurityPage {
  private readonly seo = inject(SeoService);
  readonly source = toSignal(inject(ActivatedRoute).data.pipe(
    map(data => data['source'] as IdentitySecuritySource),
    tap(slug => this.seo.set(IDENTITY_SECURITY_PAGES[slug].title + ' | XcellHost', IDENTITY_SECURITY_PAGES[slug].description, '/' + slug)),
  ));
}
