import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, NgZone, ViewEncapsulation, afterNextRender, inject } from '@angular/core';

interface ContainerTiming { o: number; d: number[]; }
interface RaceRow { el: HTMLElement; cells: HTMLElement[]; st: HTMLElement; last: string; }

/** Dedicated-node rollout and shared-host comparison from the supplied CaaS design. */
@Component({
  selector: 'xh-container-service-hero',
  standalone: true,
  templateUrl: './container-service-hero.component.html',
  styleUrl: './container-service-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ContainerServiceHeroComponent {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);
  private readonly zone = inject(NgZone);

  constructor() {
    afterNextRender(() => this.zone.runOutsideAngular(() => this.startAnimation()));
  }

  private startAnimation(): void {
    const root = this.host.nativeElement.shadowRoot!;
    const $ = (selector: string, scope: ParentNode = root): HTMLElement => scope.querySelector<HTMLElement>(selector)!;
    const $$ = (selector: string, scope: ParentNode = root): HTMLElement[] => Array.from(scope.querySelectorAll<HTMLElement>(selector));
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced = motion.matches;
    var BASE=[
      {n:'pay-7f9c',o:0,  d:[1.15,.35,.70,.90]},
      {n:'pay-2b81',o:.12,d:[1.30,.30,.75,.95]},
      {n:'pay-c41e',o:.25,d:[1.05,.40,.85,1.10]},
      {n:'pay-9a07',o:.35,d:[1.40,.35,.80,.95]}
    ];
    var LBL=['pulling','creating','starting','probing'];
    function rowHtml(id: string,name: string,cls?: string){return '<div class="rrow'+(cls||'')+'" id="'+id+'"><span class="nm">'+name+'</span><span class="cells"><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span></span><span class="st">queued</span></div>';}
    $('#rRows').innerHTML=BASE.map(function(c,i){return rowHtml('rr'+i,c.n);}).join('');
    $('#rShared').innerHTML=rowHtml('rsh','pay-7f9c',' shr');
    var rows=BASE.map(function(c,i){var r=$('#rr'+i);return {el:r,cells:$$('.cells i',r),st:$('.st',r),last:''};});
    var shr={el:$('#rsh'),cells:$$('#rsh .cells i'),st:$('#rsh .st')};
    var tEl=$('#rT'),watch=$('#rWatch'),badge=$('#rBadge'),body=$('#rBody'),steal=$('#rSteal');
    var gLat=$('#gLat'),gIops=$('#gIops'),gRdy=$('#gRdy'),vLat=$('#vLat'),vIops=$('#vIops'),vRdy=$('#vRdy');
    let C: ContainerTiming[],T=0,t=0,sh=0,stall=false,stallT=0,phase='run',holdT=0,gaugeT=0,ready=-1;

    function setup(){
      C=BASE.map(function(c){var k=.93+Math.random()*.12;return {o:c.o,d:c.d.map(function(x){return x*k;})};});
      T=Math.max.apply(null,C.map(function(c){return c.o+c.d.reduce(function(a,b){return a+b;},0);}));
      t=0;sh=0;stall=false;stallT=.5;phase='run';holdT=0;gaugeT=0;ready=-1;
      watch.classList.remove('done');badge.classList.remove('on');body.classList.remove('fade');
      vLat.textContent='—';vIops.textContent='—';gLat.style.strokeDashoffset='100';gIops.style.strokeDashoffset='100';
      rows.forEach(function(r){r.el.className='rrow';r.last='';});
    }
    function paintRow(r: RaceRow,c: ContainerTiming,tt: number){
      var loc=tt-c.o,acc=0,label='queued',stage=-1;
      for(var j=0;j<4;j++){
        var f=Math.max(0,Math.min(1,(loc-acc)/c.d[j]));
        r.cells[j].style.transform='scaleX('+f.toFixed(3)+')';
        if(loc>acc&&f<1&&stage<0){stage=j;label=LBL[j];}
        acc+=c.d[j];
      }
      var ok=loc>=acc;
      if(ok)label=(c.o+acc).toFixed(2)+' s';
      var cls='rrow'+(ok?' ok':(loc>0?' run':''));
      if(r.last!==cls+label){r.el.className=cls;r.st.textContent=label;r.last=cls+label;}
      return ok;
    }
    function paintShared(){
      for(var j=0;j<4;j++)shr.cells[j].style.transform='scaleX('+Math.max(0,Math.min(1,sh-j)).toFixed(3)+')';
      shr.el.classList.toggle('stall',stall);
      shr.st.textContent=t.toFixed(1)+' s…';
    }
    function setGauges(){
      var lat=.42+Math.random()*.34,io=29.6+Math.random()*1.6;
      vLat.textContent=lat.toFixed(2)+' ms';gLat.style.strokeDashoffset=(100-lat*100).toFixed(1);
      vIops.textContent=io.toFixed(1)+'K';gIops.style.strokeDashoffset=(100-io/32*100).toFixed(1);
      steal.textContent='noisy neighbour · CPU steal '+Math.round(18+Math.random()*14)+'%';
    }
    function frame(dt: number){
      t+=dt;
      // shared host: slow, stalls at random (noisy neighbour)
      stallT-=dt;if(stallT<=0){stall=!stall;stallT=stall?.5+Math.random()*.9:.35+Math.random()*.6;}
      sh=Math.min(3.6,sh+dt*(stall?.03:.36));
      var done=0,tt=Math.min(t,T+.001);
      rows.forEach(function(r,i){if(paintRow(r,C[i],tt))done++;});
      if(done!==ready){ready=done;vRdy.textContent=done+'/4';gRdy.style.strokeDashoffset=String(100-done*25);}
      paintShared();
      if(phase==='run'){
        tEl.textContent=Math.min(t,T).toFixed(2);
        if(done===4){phase='hold';tEl.textContent=T.toFixed(2);$('#rBadgeT').textContent=T.toFixed(2);watch.classList.add('done');badge.classList.add('on');setGauges();}
      }else if(phase==='hold'){
        holdT+=dt;gaugeT+=dt;
        if(gaugeT>.9){gaugeT=0;setGauges();}
        if(holdT>5.2&&!body.classList.contains('fade')){body.classList.add('fade');badge.classList.remove('on');}
        if(holdT>5.8)setup();
      }
    }

    let visible = false, raf = 0, last: number | null = null;
    const canAnimate = () => visible && !document.hidden && !reduced;
    const loop = (timestamp: number) => {
      raf = 0;
      if (!canAnimate()) { last = null; return; }
      if (last !== null) frame(Math.min(.05, (timestamp - last) / 1000));
      last = timestamp;
      raf = requestAnimationFrame(loop);
    };
    const syncPlayback = () => {
      if (canAnimate()) {
        if (!raf) { last = null; raf = requestAnimationFrame(loop); }
      } else {
        cancelAnimationFrame(raf); raf = 0; last = null;
      }
    };
    const syncMotion = (event?: MediaQueryListEvent) => {
      reduced = event?.matches ?? motion.matches;
      setup();
      if (reduced) { t=T+.001; sh=1.7; stall=false; frame(0); }
      syncPlayback();
    };
    const observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting; syncPlayback();
    }, { threshold: .05 });
    observer.observe($('#race'));
    motion.addEventListener('change', syncMotion);
    document.addEventListener('visibilitychange', syncPlayback);
    syncMotion();
    this.destroyRef.onDestroy(() => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      motion.removeEventListener('change', syncMotion);
      document.removeEventListener('visibilitychange', syncPlayback);
    });
  }
}
