import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, NgZone, ViewEncapsulation, afterNextRender, inject } from '@angular/core';

interface Layer { n: string; d: string; s: string; bad?: number; fixN?: string; fixD?: string; }

/** The supplied registry demo, scoped to this instance and its render lifecycle. */
@Component({
  selector: 'xh-container-registry-hero',
  standalone: true,
  templateUrl: './container-registry-hero.component.html',
  styleUrl: './container-registry-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ContainerRegistryHeroComponent {
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
    let reduce = motion.matches;
    let raf = 0;
    this.destroyRef.onDestroy(() => cancelAnimationFrame(raf));
  var LAYERS: Layer[]=[
    {n:'base · debian-slim',d:'sha256:a41c…e07',s:'29 MB'},
    {n:'os packages · openssl',d:'sha256:7be2…19d',s:'6 MB',bad:1,fixN:'os packages · openssl (patched)',fixD:'sha256:c58d…a2f'},
    {n:'runtime · node 22',d:'sha256:3f9a…6c1',s:'48 MB'},
    {n:'deps · node_modules',d:'sha256:91e0…d4b',s:'64 MB'},
    {n:'app · /srv/api',d:'sha256:e2b7…0f8',s:'18 MB'}
  ];
  var PH=['Pushing','Scanning','Signing','Replicating','Pulling'];
  var reg=$('#reg');
  if(reg){
    var ul=$('#rgLayers'),trk=$('#rgTrk'),ph=$('#rgPh'),log=$('#rgLog'),beam=$('#rgBeam'),seal=$('#rgSeal'),pods=$$('.rg-k8s .pods i',reg),podT=$('#rgPods');
    ul.innerHTML=LAYERS.map(function(l,i){return i;}).reverse().map(function(i){var l=LAYERS[i];return '<li id="rl'+i+'"><div class="nm"><b>'+l.n+'</b><small>'+l.d+' · '+l.s+'</small></div><span class="tag">waiting</span></li>';}).join('');
    function sl(i: number){return $('#sl'+i);} function row(i: number){return $('#rl'+i);}
    function tag(i: number,t: string,c?: string){var g=$('.tag',row(i));g.textContent=t;g.className='tag'+(c?' '+c:'');}
    function phase(p: number,label?: string,cls?: string){var lis=$$('li',trk);lis.forEach(function(li,j){li.classList.toggle('dn',j<p);li.classList.toggle('on',j===p);});trk.style.setProperty('--t',String(Math.min(p,4)/4));ph.textContent=label||PH[p]||'';ph.className='rg-ph'+(cls?' '+cls:'');}
    function say(h: string){log.innerHTML=h;}
    function setBeam(i: number){beam.style.transform='translateY('+((4-i)*20)+'px)';}
    function rr(i: number,st: number,txt: string){var r=$('#rr'+i);r.classList.toggle('on',st>0);r.classList.toggle('fin',st>1);$('em',r).textContent=txt;}
    function reset(){
      LAYERS.forEach(function(l,i){var s=sl(i);s.setAttribute('class','sl');var r=row(i);r.className='';$('b',r).textContent=l.n;$('small',r).textContent=l.d+' · '+l.s;tag(i,'waiting');});
      beam.classList.remove('on');setBeam(4);seal.classList.remove('on');
      rr(1,0,'—');rr(2,0,'—');pods.forEach(function(p){p.className='';});podT.textContent='0/3 running';
      phase(0);say('<em>$</em> <span class="w">docker push</span> registry.xcellhost.cloud/payments/api:2.4.1');
    }
    var EV: Array<[number, () => void]>=[];
    LAYERS.forEach(function(l,i){EV.push([500+i*480,function(){sl(i).classList.add('in');row(i).classList.add('in');tag(i,'pushed');say('<em>push</em> layer '+(i+1)+'/5 '+l.d+' <em>· '+l.s+'</em>');}]);});
    EV.push([3100,function(){phase(1);beam.classList.add('on');say('<em>scanner</em> checking 5 layers against CVE feeds…');}]);
    [4,3,2,1,0].forEach(function(i,k){
      EV.push([3200+k*520,function(){setBeam(i);sl(i).classList.add('scan');row(i).classList.add('scan');tag(i,'scanning');}]);
      EV.push([3200+k*520+430,function(){sl(i).classList.remove('scan');row(i).classList.remove('scan');
        if(LAYERS[i].bad){sl(i).classList.add('bad');row(i).classList.add('bad');tag(i,'CVE · High','bad');phase(1,'1 High CVE','warn');say('<span class="r">✗ High-severity CVE in openssl · layer 2/5</span>');}
        else{sl(i).classList.add('ok');tag(i,'clean','ok');}}]);
    });
    EV.push([6000,function(){beam.classList.remove('on');tag(1,'blocked','blk');phase(1,'Blocked by policy','warn');say('<em>policy prod:</em> <span class="r">deploy blocked — severity ≥ High</span>');}]);
    EV.push([7500,function(){var s=sl(1),r=row(1),l=LAYERS[1];s.setAttribute('class','sl in ok');void s.getBoundingClientRect();s.classList.add('fix');r.className='in';$('b',r).textContent=l.fixN!;$('small',r).textContent=l.fixD!+' · '+l.s;tag(1,'patched','ok');phase(1,'Rescan clean','ok');say('✓ rebuilt on patched base <em>· rescan: 0 Critical, 0 High</em>');}]);
    EV.push([9000,function(){phase(2);seal.classList.add('on');say('✓ signed <em>sha256:9c1e…4b7a</em> · signature verified');}]);
    EV.push([10400,function(){phase(3);rr(1,1,'syncing');say('<em>replicating</em> to Delhi NCR and Singapore…');}]);
    EV.push([10800,function(){rr(2,1,'syncing');}]);
    EV.push([11800,function(){rr(1,2,'synced');}]);
    EV.push([12300,function(){rr(2,2,'synced');say('✓ replicated to 2 regions <em>· digests match</em>');}]);
    pods.forEach(function(p,i){
      EV.push([13200+i*520,function(){if(i===0){phase(4);say('<em>kubelet</em> pulling payments/api:2.4.1 from the nearest replica…');}p.className='pull';}]);
      EV.push([13200+i*520+420,function(){p.className='on';podT.textContent=(i+1)+'/3 running';}]);
    });
    EV.push([15200,function(){phase(5,'Running in prod','ok');say('✓ 3/3 pods running <em>· signed image, verified on pull</em>');}]);
    EV.sort(function(a,b){return a[0]-b[0];});
    var LOOP=18800,clock=0,idx=0,vis=false,last=0;
    const motionChanged = () => {
      reduce = motion.matches;
      if (reduce) { EV.forEach(e => e[1]()); }
      else { clock=0;idx=0;reset(); }
    };
    motion.addEventListener('change', motionChanged);
    this.destroyRef.onDestroy(() => motion.removeEventListener('change', motionChanged));
    reset();
    if(reduce){EV.forEach(function(e){e[1]();});}
    {
      const observer = new IntersectionObserver(entries => { vis = entries[0].isIntersecting; });
      observer.observe(reg);
      this.destroyRef.onDestroy(() => observer.disconnect());
      (function loop(ts: number){
        var dt=last?Math.min(ts-last,100):0;last=ts;
        if(vis&&!document.hidden&&!reduce){clock+=dt;
          while(idx<EV.length&&clock>=EV[idx][0]){EV[idx][1]();idx++;}
          if(clock>=LOOP){clock=0;idx=0;reset();}
        }
        raf = requestAnimationFrame(loop);
      })(0);
    }
  }


  }
}
