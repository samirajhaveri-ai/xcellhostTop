import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { SLA_DOCUMENTS } from '../data/sla-documents.data';

@Component({selector:'xh-whatsapp-marketing-service-sla-page',standalone:true,imports:[RouterLink],templateUrl:'./whatsapp-marketing-service-sla.page.html',styleUrl:'./acronis-advanced-edr-sla.page.css',changeDetection:ChangeDetectionStrategy.OnPush,host:{style:'display: contents'}})
export class WhatsappMarketingServiceSlaPage {
  private readonly document=inject(DOCUMENT); private readonly seo=inject(SeoService);
  readonly page=SLA_DOCUMENTS['whatsappMarketing'];
  constructor(){this.seo.set(this.page.title+' — XcellHost',this.page.tagline,'/whatsapp-marketing-service-sla/');}
  scrollToSection(id:string,event:Event):void{event.preventDefault();const section=this.document.getElementById(id);if(!section)return;section.scrollIntoView({behavior:'smooth',block:'start'});const location=this.document.defaultView?.location;if(location)this.document.defaultView?.history.replaceState(null,'',`${location.pathname}${location.search}#${id}`);}
}
