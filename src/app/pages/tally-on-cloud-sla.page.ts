import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { SLA_DOCUMENTS } from '../data/sla-documents.data';

@Component({selector:'xh-tally-on-cloud-sla-page',standalone:true,imports:[RouterLink],templateUrl:'./tally-on-cloud-sla.page.html',styleUrl:'./acronis-advanced-edr-sla.page.css',changeDetection:ChangeDetectionStrategy.OnPush,host:{style:'display: contents'}})
export class TallyOnCloudSlaPage {
  private readonly document=inject(DOCUMENT); private readonly seo=inject(SeoService);
  readonly page=SLA_DOCUMENTS['tallyCloud'];
  constructor(){this.seo.set(this.page.title+' — XcellHost',this.page.tagline,'/tally-on-cloud-sla/');}
  scrollToSection(id:string,event:Event):void{event.preventDefault();const section=this.document.getElementById(id);if(!section)return;section.scrollIntoView({behavior:'smooth',block:'start'});const location=this.document.defaultView?.location;if(location)this.document.defaultView?.history.replaceState(null,'',`${location.pathname}${location.search}#${id}`);}
}
