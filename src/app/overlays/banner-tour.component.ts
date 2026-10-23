import { Component, ElementRef, ViewChild, effect, inject } from '@angular/core';
import { BannerActionsService } from '../core/banner-actions.service';

@Component({
  selector:'xh-banner-tour',standalone:true,
  template:`
    @if (tour.overlay.isOpen('bannerScreenshotTour')) {
      <div class="banner-tour-backdrop" (click)="onBackdrop($event)">
        <section #dialog class="banner-tour-dialog" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="bannerTourTitle" (keydown)="onKey($event)">
          <header><h2 id="bannerTourTitle">{{tour.title()}} — Screenshot Tour</h2><button type="button" aria-label="Close screenshot tour" (click)="tour.close()">×</button></header>
          @if(tour.loading()) { <p role="status">Loading screenshots…</p> }
          @else if(tour.slides()[tour.index()]; as slide) {
            <figure><img [src]="slide.image" [alt]="slide.title"><figcaption>{{slide.title}}</figcaption></figure>
            @if(tour.slides().length>1){<nav aria-label="Screenshot navigation"><button type="button" (click)="tour.move(-1)">← Previous</button><span>{{tour.index()+1}} / {{tour.slides().length}}</span><button type="button" (click)="tour.move(1)">Next →</button></nav>}
          } @else { <p>A screenshot set is being prepared for this page.</p><button type="button" (click)="tour.requestTour()">Request A Guided Tour</button> }
        </section>
      </div>
    }
  `,
  styles:[`
    .banner-tour-backdrop{position:fixed;inset:0;z-index:12000;background:#00142ac9;display:flex;align-items:center;justify-content:center;padding:20px}
    .banner-tour-dialog{width:min(1100px,100%);max-height:calc(100dvh - 40px);overflow:auto;background:#fff;color:#041e42;border-radius:18px;box-shadow:0 25px 80px #0005;padding:20px}
    header{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:16px}h2{font:700 20px/1.4 Sora,Arial,sans-serif;margin:0}button{font:600 14px/1.4 Arial,sans-serif;border:1px solid #cedcf0;border-radius:8px;background:#f4f7fc;color:#041e42;padding:9px 14px;cursor:pointer}button:focus-visible{outline:2px solid #0664ff;outline-offset:2px}header button{font-size:24px;flex:none}
    figure{margin:0}figure img{display:block;width:100%;max-height:65dvh;object-fit:contain;background:#eef3fb}figcaption{text-align:center;padding:12px}nav{display:flex;align-items:center;justify-content:space-between;gap:12px}
    @media(max-width:600px){.banner-tour-backdrop{padding:10px}.banner-tour-dialog{padding:14px;max-height:calc(100dvh - 20px)}h2{font-size:16px}}
  `],
})
export class BannerTourComponent {
  readonly tour = inject(BannerActionsService);
  @ViewChild('dialog') dialog?: ElementRef<HTMLElement>;
  constructor(){effect(()=>{if(this.tour.overlay.isOpen('bannerScreenshotTour'))setTimeout(()=>this.dialog?.nativeElement.focus());});}
  onBackdrop(event:MouseEvent):void{if(event.target===event.currentTarget)this.tour.close();}
  onKey(event:KeyboardEvent):void{
    if(event.key==='Escape'){event.stopPropagation();this.tour.close();}
    if(event.key==='ArrowRight')this.tour.move(1);
    if(event.key==='ArrowLeft')this.tour.move(-1);
    if(event.key!=='Tab')return;
    const items=Array.from(this.dialog!.nativeElement.querySelectorAll<HTMLButtonElement>('button'));
    const current=this.dialog!.nativeElement.ownerDocument.activeElement;
    const first=items[0],last=items.at(-1);
    if(event.shiftKey&&(current===first||current===this.dialog!.nativeElement)){event.preventDefault();last?.focus();}
    else if(!event.shiftKey&&current===last){event.preventDefault();first?.focus();}
  }
}
