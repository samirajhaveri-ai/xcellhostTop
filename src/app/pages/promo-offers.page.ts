import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CatalogService, slugify } from '../core/catalog.service';
import { MEGA_MENU } from '../data/nav.data';
import { ProductPageService } from '../core/product-page.service';
import { SeoService } from '../core/seo.service';

interface PromoProduct { name:string;description:string;pill:string|null;link:string;icon:string;pricingOffer:string }
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
  private readonly productPages=inject(ProductPageService);
  private readonly route=inject(ActivatedRoute);
  readonly highlightedProduct=signal('');
  readonly activeTab=signal(0);
  readonly categories:PromoCategory[]=MEGA_MENU.filter(menu=>['Web Presence','Cloud','Productivity','Data Protection','Digital Trust','Security','AI'].includes(menu.label)).map(menu=>{
    const seen=new Set<string>(); const products:PromoProduct[]=[];
    for(const tab of menu.tabs) for(const group of tab.groups) for(const item of group.items){
      const name=item.title.trim(); if(!name||name==='No Data'||seen.has(name.toLowerCase())) continue; seen.add(name.toLowerCase());
      const entry=this.catalog.findInDirectory(name); products.push({name,description:item.desc??entry?.desc??`Explore ${name} features, plans and solutions.`,pill:item.pill,link:item.href??`/${slugify(entry?.name??name)}`,icon:this.productIcon(name),pricingOffer:this.pricingOffer(entry?.name??name)});
    }
    const isPopular=(product:PromoProduct)=>POPULAR_PRODUCT_NAMES.has(product.name.toLowerCase())||/top seller|best seller|popular|high demand/i.test(product.pill??'');
    const popular=products.sort((a,b)=>Number(isPopular(b))-Number(isPopular(a)));
    return {label:menu.label,products:popular};
  }).filter(category=>category.products.length>0);
  readonly activeCategory=computed(()=>this.categories[this.activeTab()]??this.categories[0]);
  constructor(){
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe(params=>{
      const product=params.get('product') ?? '';
      this.highlightedProduct.set(product);
      const index=this.categories.findIndex(category=>category.products.some(item=>item.link.replace(/^\/+|\/+$/g,'')===product));
      if(index>=0) this.activeTab.set(index);
    });
    this.seo.set('Promos & Offers - XcellHost','Browse XcellHost cloud, security, productivity and digital trust products and open their dedicated product pages.','/promotion-and-offers/');}
  selectTab(index:number):void{this.activeTab.set(index)}
  private pricingOffer(name:string):string {
    if (['Tally on Cloud','Cloud Drive','Cloud Backup','SMB Cloud Desktop'].includes(name)) {
      return 'Save 5% on 3 months, 7.5% on 6 months and 10% on annual billing.';
    }
    if (name === 'SMB Cyber Security Appliance') {
      return 'Licence savings: 10% for 2 years, 15% for 3 years and 20% for 5 years.';
    }
    const plans=this.productPages.build({name}).plans.filter(plan=>!plan.quoteOnly && /[0-9]/.test(plan.amount));
    if (!plans.length) return 'Request product-specific pricing for your requirements.';
    const plan=plans.find(item=>item.hot)??plans[0];
    return `${plan.amount}${plan.unit} ? ${plan.term}${plan.tag ? ' ? '+plan.tag : ''}`;
  }
  private productIcon(name:string):string{return name.split(/\s+/).filter(word=>/^[a-z0-9]/i.test(word)).slice(0,2).map(word=>word[0].toUpperCase()).join('')}
}
