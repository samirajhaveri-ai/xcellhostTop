/* Pricing data, calculations and interactions copied from the supplied ram-intensive-compute.html. */

(function(){var RM=matchMedia("(prefers-reduced-motion: reduce)").matches,$=function(i){return document.getElementById(i)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
function inr(n){return "₹"+Math.round(n).toLocaleString("en-IN")}
function inr2(n){return "₹"+(n<10?n.toFixed(2):Math.round(n).toLocaleString("en-IN"))}
var D={"add": {"backup": 2.0, "ip": 200, "lb": 2000, "managed": 1499, "snapshot": 6.2, "vpn": 1000}, "hero": [{"bw": "Bundled", "code": "a.mem1.8g", "hl": 1.62, "hw": 2.16, "lin": 1180, "nvme": 30, "ram": 8, "vcpu": 1, "win": 1580}, {"bw": "Bundled", "code": "a.mem1.16g", "hl": 2.84, "hw": 3.94, "lin": 2076, "nvme": 30, "ram": 16, "vcpu": 2, "win": 2876}, {"bw": "Bundled", "code": "a.mem1.32g", "hl": 5.34, "hw": 7.53, "lin": 3899, "nvme": 30, "ram": 32, "vcpu": 4, "win": 5499}, {"bw": "Bundled", "code": "a.mem1.64g", "hl": 10.28, "hw": 14.67, "lin": 7506, "nvme": 30, "ram": 64, "vcpu": 8, "win": 10706}], "pop": "a.mem1.16g", "st": [{"k": "eco", "n": "Eco NVMe", "p": 4.5}, {"k": "std", "n": "Standard NVMe", "p": 6.2}, {"k": "pro", "n": "Pro NVMe", "p": 8.0}], "tabs": [{"def": 1, "n": "Starter", "note": "Dedicated vCPU, 1 vCPU : 8 GB RAM, 30 GB NVMe boot disk.", "plans": [{"bw": "Bundled", "code": "a.mem1.8g", "hl": 1.62, "hw": 2.16, "lin": 1180, "nvme": 30, "ram": 8, "vcpu": 1, "win": 1580}, {"bw": "Bundled", "code": "a.mem1.16g", "hl": 2.84, "hw": 3.94, "lin": 2076, "nvme": 30, "ram": 16, "vcpu": 2, "win": 2876}, {"bw": "Bundled", "code": "a.mem.24g", "hl": 4.08, "hw": 5.73, "lin": 2982, "nvme": 30, "ram": 24, "vcpu": 3, "win": 4182}], "s": "1\u20133 vCPU"}, {"def": 1, "n": "Growth", "note": "Dedicated vCPU, 1 vCPU : 8 GB RAM, 30 GB NVMe boot disk.", "plans": [{"bw": "Bundled", "code": "a.mem1.32g", "hl": 5.34, "hw": 7.53, "lin": 3899, "nvme": 30, "ram": 32, "vcpu": 4, "win": 5499}, {"bw": "Bundled", "code": "a.mem1.48g", "hl": 7.9, "hw": 11.18, "lin": 5764, "nvme": 30, "ram": 48, "vcpu": 6, "win": 8164}, {"bw": "Bundled", "code": "a.mem1.64g", "hl": 10.28, "hw": 14.67, "lin": 7506, "nvme": 30, "ram": 64, "vcpu": 8, "win": 10706}], "s": "4\u20138 vCPU"}, {"def": 0, "n": "Business", "note": "Dedicated vCPU, 1 vCPU : 8 GB RAM, 30 GB NVMe boot disk.", "plans": [{"bw": "Bundled", "code": "a.mem1.96g", "hl": 15.93, "hw": 22.5, "lin": 11628, "nvme": 30, "ram": 96, "vcpu": 12, "win": 16428}, {"bw": "Bundled", "code": "a.mem1.128g", "hl": 20.16, "hw": 28.93, "lin": 14722, "nvme": 30, "ram": 128, "vcpu": 16, "win": 21122}, {"bw": "Bundled", "code": "a.mem1.192g", "hl": 31.46, "hw": 44.61, "lin": 22967, "nvme": 30, "ram": 192, "vcpu": 24, "win": 32567}], "s": "12\u201324 vCPU"}, {"def": 0, "n": "Enterprise", "note": "Dedicated vCPU, 1 vCPU : 8 GB RAM, 30 GB NVMe boot disk.", "plans": [{"bw": "Bundled", "code": "a.mem1.256g", "hl": 43.89, "hw": 61.42, "lin": 32090, "nvme": 30, "ram": 256, "vcpu": 32, "win": 44838}, {"bw": "Bundled", "code": "a.mem1.384g", "hl": 72.88, "hw": 99.18, "lin": 53201, "nvme": 30, "ram": 384, "vcpu": 48, "win": 72401}, {"bw": "Bundled", "code": "a.mem1.512g", "hl": 109.11, "hw": 144.18, "lin": 79652, "nvme": 30, "ram": 512, "vcpu": 64, "win": 105252}], "s": "32\u201364 vCPU"}]},CK="\u003csvg class=\"xg-ico\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"\u003e\u003cpath d=\"m5 12 5 5 9-10\"/\u003e\u003c/svg\u003e";
/* pricing */
var T=D.tabs,A=D.add,S={t:0,o:"lin",b:"monthly",i:1,st:"std"},SP={};D.st.forEach(function(x){SP[x.k]=x});
function rows(){return T[S.t].plans}
function mon(p){return S.o==="win"?p.win:p.lin}
function hrl(p){return S.o==="win"?p.hw:p.hl}
function eff(p){return S.b==="annual"?Math.round(mon(p)*88)/100:mon(p)}
function inrd(n){return "₹"+(Math.round(n*100)%100?n.toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2}):Math.round(n).toLocaleString("en-IN"))}
function draw(){var hr=S.b==="hourly",an=S.b==="annual",h="";
 $$("#tB button").forEach(function(x){var on=+x.dataset.t===S.t;x.setAttribute("aria-selected",on);x.tabIndex=on?0:-1});$("pB").setAttribute("aria-labelledby","tb"+S.t);
 rows().forEach(function(p,k){var v=hr?"₹"+hrl(p).toFixed(2):inrd(eff(p));
  h+='<button type="button" class="pk" role="radio" data-k="'+k+'" aria-checked="'+(k===S.i)+'">'+(p.code===D.pop?'<span class="pop">Most popular</span>':'')+'<code>'+p.code+'</code><div class="hd">'+p.vcpu+' vCPU <span>· '+p.ram+' GB</span></div>'+
   '<div class="mx">'+p.nvme+' GB NVMe · dedicated vCPU</div><ul><li>'+CK+'<span>Dedicated vCPU</span></li><li>'+CK+'<span>'+p.nvme+' GB NVMe boot disk</span></li><li>'+CK+'<span>'+p.bw+' bandwidth</span></li><li>'+CK+'<span>1 dedicated IPv4</span></li></ul>'+
   '<div class="pz"><b>'+v+'</b><span>'+(hr?"/hour":"/month")+'</span>'+(an?'<s>'+inr(mon(p))+'</s>':'')+'</div><span class="sel">'+(k===S.i?"✓ Selected":"Select plan")+'</span></button>'});
 $("pB").innerHTML=h;$$("#pB .pk").forEach(function(c){c.addEventListener("click",function(){S.i=+c.dataset.k;draw();if(innerWidth<1100)$("qBox").scrollIntoView({behavior:RM?"auto":"smooth",block:"nearest"})})});
 $("pN").textContent=T[S.t].note+(an?" Annual price shown per month, billed yearly (12% off).":hr?" Billed per hour of use.":"")+(S.o==="win"?" Windows Server licence included.":"");
 quote()}
function quote(){var p=rows()[S.i]||rows()[0],base=S.b==="hourly"?hrl(p)*730:eff(p),st=+$("qS").value,
  add=st*SP[S.st].p+($("qBk").checked?(p.nvme+st)*A.backup:0)+($("qIp").checked?A.ip:0)+($("qLb").checked?A.lb:0)+($("qM").checked?A.managed:0);
 $("qSv").textContent=st+" GB · "+inrd(st*SP[S.st].p);$("qN").textContent=p.code+" · "+p.vcpu+" vCPU / "+p.ram+" GB"+(S.o==="win"?" · Windows":" · Linux");$("qP").textContent=inrd(base);
 $("qAr").hidden=!add;$("qA").textContent=inrd(add);var sub=base+add;$("qSub").textContent=inrd(sub);$("qG").textContent=inrd(sub*.18);$("qT").textContent=inr(sub*1.18);
 $("qNote").textContent=S.b==="hourly"?"Instance at ₹"+hrl(p).toFixed(2)+"/hr — shown for a full month (730 hrs)":S.b==="annual"?"Annual billing — 12% off the instance, billed yearly":"Billed monthly, cancel anytime"}
function seg(id,fn){$$("#"+id+" button").forEach(function(b){b.addEventListener("click",function(){$$("#"+id+" button").forEach(function(x){x.setAttribute("aria-pressed",x===b)});fn(b);draw()})})}
seg("sO",function(b){S.o=b.dataset.v});seg("sB",function(b){S.b=b.dataset.v});seg("qT2",function(b){S.st=b.dataset.v});
$$("#tB button").forEach(function(x){x.addEventListener("click",function(){S.t=+x.dataset.t;S.i=T[S.t].def;draw();x.scrollIntoView({block:"nearest",inline:"nearest"})});
 x.addEventListener("keydown",function(e){var n=e.key==="ArrowRight"?1:e.key==="ArrowLeft"?-1:0;if(!n)return;e.preventDefault();var t=(S.t+n+T.length)%T.length;S.t=t;S.i=T[t].def;draw();$("tb"+t).focus()})});
["qS","qBk","qIp","qLb","qM"].forEach(function(i){$(i).addEventListener("input",quote);$(i).addEventListener("change",quote)});
draw();
$("qGo").addEventListener("click",function(event){event.preventDefault();var p=rows()[S.i];
 var plan=p.code+" ("+p.vcpu+" vCPU/"+p.ram+" GB) — "+(S.o==="win"?"Windows":"Linux")+" — "+S.b+" — +"+$("qS").value+" GB "+SP[S.st].n+($("qBk").checked?" + backup":"")+($("qIp").checked?" + IPv4":"")+($("qLb").checked?" + load balancer":"")+($("qM").checked?" + managed":"")+" — "+$("qT").textContent+"/mo incl. GST";
 window.parent.postMessage({type:"memory-optimized-plan",plan:plan},window.location.origin);
});
var io=!RM&&"IntersectionObserver" in window?new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add("is-in");io.unobserve(entry.target)}})},{threshold:.1}):null;
document.querySelectorAll(".rv").forEach(function(el){io?io.observe(el):el.classList.add("is-in")});
})();
