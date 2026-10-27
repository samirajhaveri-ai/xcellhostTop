import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';
@Component({selector:'xh-digicert-ssl-detail-page',standalone:true,imports:[ImportedInteractiveContentComponent,InsightsSectionComponent],template:`<xh-imported-interactive-content source="ssl-detail" [sslSlug]="slug" /><xh-insights-section [pageSlug]="slug" />`})
export class DigicertSslDetailPage {readonly slug=inject(ActivatedRoute).snapshot.data['sslSlug'] as string;}
