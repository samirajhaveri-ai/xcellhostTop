import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogService, slugify } from '../core/catalog.service';
import { SeoService } from '../core/seo.service';
import { MEGA_MENU } from '../data/nav.data';

interface PromoProduct { name:string;description:string;pill:string|null;link:string;icon:string }
interface PromoCategory { label:string;products:PromoProduct[] }

const POPULAR_PRODUCT_NAMES = new Set([
  'tally on cloud','cloud backup','cloud drive','advanced endpoint security (edr)','microsoft 365 smb','smb cyber security appliance','windows hosting','linux hosting','wordpress hosting','whatsapp for business',
  'performance cloud','private cloud','managed aws','managed azure','managed google cloud (gcp)','managed kubernetes','cloud sase',
  'microsoft 365','google workspace','business email','microsoft teams','zoho workplace','cloud desktop','azure virtual desktop',
  'microsoft 365 backup','google workspace backup','acronis cyber protect cloud','cloud disaster recovery','website backup','file cloud','backup cloud',
  'digicert ssl certificates','sectigo ssl certificates','code signing certificates','enterprise dmarc','email signature','verified mark certificates (vmc)',
  'autonomous threat management','scrutiny edr','scrutiny dlp','managed detection & response (mdr)','extended detection & response (xdr)','vapt','web application firewall (waf)','waap',
  'ai chat bot','ai receptionist','agentic ai','ai app builder','ai website builder','ai security assessment','ai security platform','acronis genai protection',
]);

@Component({selector:'xh-promo-offers-page',standalone:true,imports:[RouterLink],templateUrl:'./promo-offers.page.html',styleUrl:'./promo-offers.page.css',host:{style:'display:contents'},changeDetection:ChangeDetectionStrategy.OnPush})
export class PromoOffersPage {
  private readonly seo=inject(SeoService); private readonly catalog=inject(CatalogService);
  readonly activeTab=signal(0);
  readonly categories:PromoCategory[]=MEGA_MENU.filter(menu=>['Web Presence','Cloud','Productivity','Data Protection','Digital Trust','Security','AI'].includes(menu.label)).map(menu=>{
    const seen=new Set<string>(); const products:PromoProduct[]=[];
    for(const tab of menu.tabs) for(const group of tab.groups) for(const item of group.items){
      const name=item.title.trim(); if(!name||name==='No Data'||seen.has(name.toLowerCase())) continue; seen.add(name.toLowerCase());
      const entry=this.catalog.findInDirectory(name); products.push({name,description:item.desc??entry?.desc??`Explore ${name} features, plans and solutions.`,pill:item.pill,link:item.href??`/${slugify(entry?.name??name)}`,icon:this.productIcon(name)});
    }
    const popular=products.filter(product=>POPULAR_PRODUCT_NAMES.has(product.name.toLowerCase())||/top seller|best seller|popular|high demand/i.test(product.pill??'')).slice(0,10);
    return {label:menu.label,products:popular};
  }).filter(category=>category.products.length>0);
  readonly activeCategory=computed(()=>this.categories[this.activeTab()]??this.categories[0]);
  constructor(){this.seo.set('Promos & Offers - XcellHost','Browse XcellHost cloud, security, productivity and digital trust products and open their dedicated product pages.','/promotion-and-offers/');}
  selectTab(index:number):void{this.activeTab.set(index)}
  private productIcon(name:string):string{return name.split(/\s+/).filter(word=>/^[a-z0-9]/i.test(word)).slice(0,2).map(word=>word[0].toUpperCase()).join('')}
}
