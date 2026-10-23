import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

const PAGES = {
  'acronis-cyber-intelligence': {
    title: 'Acronis Cyber Intelligence',
    description: 'Explore Acronis analytics, dashboards and client reporting with deployment, licensing and support from XcellHost.',
  },
  'acronis-cyber-frame': {
    title: 'Acronis Cyber Frame',
    description: 'Explore Acronis HCI and IaaS, deployment options, workload sizing and migration support from XcellHost.',
  },
  'acronis-workflow-automation': {
    title: 'Acronis Workflow Automation',
    description: 'Explore Acronis no-code workflows, automation templates and savings estimates with onboarding and support from XcellHost.',
  },
} as const;

@Component({
  selector: 'xh-acronis-solutions-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `@if (source(); as slug) {
    <xh-imported-interactive-content [source]="slug" />
    <xh-insights-section [pageSlug]="slug" />
  }`,
})
export class AcronisSolutionsPage {
  private readonly seo = inject(SeoService);
  readonly source = toSignal(inject(ActivatedRoute).data.pipe(
    map(data => data['source'] as keyof typeof PAGES),
    tap(slug => this.seo.set(PAGES[slug].title + ' | XcellHost', PAGES[slug].description, '/' + slug)),
  ));
}
