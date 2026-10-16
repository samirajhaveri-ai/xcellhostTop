
(function(){
  /* ---- icons (blue line + orange accent, like the reference tabs) ---- */
  var B='#0066FF',O='#FF8A00';
  function svg(p,sz){return '<svg viewBox="0 0 32 32" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"'+(sz?' width="'+sz+'" height="'+sz+'"':'')+'>'+p+'</svg>';}
  var I={
    mail:'<path d="M5 13l11-8 11 8v13H5z" stroke="'+B+'"/><path d="M5 13l11 8 11-8" stroke="'+B+'"/><circle cx="16" cy="12" r="3.2" stroke="'+O+'"/>',
    teams:'<circle cx="16" cy="11" r="3.5" stroke="'+B+'"/><circle cx="8" cy="13" r="2.7" stroke="'+O+'"/><circle cx="24" cy="13" r="2.7" stroke="'+O+'"/><path d="M10 25c0-4 2.7-6.5 6-6.5s6 2.5 6 6.5M3.5 24c0-3 2-5 4.5-5M28.5 24c0-3-2-5-4.5-5" stroke="'+B+'"/>',
    chat:'<path d="M27 15.5c0 5.2-4.9 9.5-11 9.5-1.6 0-3.2-.3-4.6-.8L6 26l1.6-4.6C5.9 19.7 5 17.7 5 15.5 5 10.3 9.9 6 16 6s11 4.3 11 9.5z" stroke="'+O+'"/><circle cx="11.5" cy="15.5" r=".9" fill="'+B+'" stroke="'+B+'"/><circle cx="16" cy="15.5" r=".9" fill="'+B+'" stroke="'+B+'"/><circle cx="20.5" cy="15.5" r=".9" fill="'+B+'" stroke="'+B+'"/>',
    meet:'<circle cx="11" cy="10" r="3" stroke="'+B+'"/><circle cx="21" cy="10" r="3" stroke="'+O+'"/><path d="M5 22c0-3.6 2.7-6 6-6s6 2.4 6 6M15 22c0-3.6 2.7-6 6-6s6 2.4 6 6" stroke="'+B+'"/><path d="M8 26h16" stroke="'+O+'"/>',
    webinar:'<rect x="4" y="5" width="24" height="15" rx="2" stroke="'+O+'"/><circle cx="16" cy="11" r="2.6" stroke="'+B+'"/><path d="M11.5 18c.6-2 2.4-3.2 4.5-3.2s3.9 1.2 4.5 3.2" stroke="'+B+'"/><circle cx="8" cy="25" r="1.8" stroke="'+B+'"/><circle cx="16" cy="25" r="1.8" stroke="'+B+'"/><circle cx="24" cy="25" r="1.8" stroke="'+B+'"/>',
    drive:'<path d="M9 22h-.5A5.5 5.5 0 0 1 8 11a8 8 0 0 1 15.5 1.5A5 5 0 0 1 23 22h-1" stroke="'+B+'"/><path d="M16 15v11M13 18l3-3 3 3" stroke="'+O+'"/>',
    cal:'<rect x="5" y="7" width="22" height="20" rx="2.5" stroke="'+B+'"/><path d="M5 13h22M11 4v5M21 4v5" stroke="'+B+'"/><path d="M10 18h.01M14 18h.01M18 18h.01M22 18h.01M10 22h.01M14 22h.01M18 22h.01" stroke="'+O+'" stroke-width="2.4"/>',
    contacts:'<rect x="7" y="4" width="19" height="24" rx="2.5" stroke="'+B+'"/><path d="M4.5 9h4M4.5 16h4M4.5 23h4" stroke="'+B+'"/><path d="M19.5 18.5c-.6.6-1.6.6-2.6-.1a10 10 0 0 1-2.3-2.3c-.7-1-.7-2-.1-2.6l.7-.7 1.6 1.6-.6.8c.4.7 1 1.3 1.7 1.7l.8-.6 1.6 1.6z" stroke="'+O+'"/>',
    doc:'<rect x="6" y="4" width="20" height="24" rx="2" stroke="'+B+'"/><path d="M10 10h12" stroke="'+O+'" stroke-width="2.2"/><path d="M10 15h12M10 19h12M10 23h8" stroke="'+B+'"/>',
    sheet:'<rect x="5" y="5" width="22" height="22" rx="1.5" stroke="'+B+'"/><path d="M5 11h22M5 17h22M5 22h22M12 5v22M19 5v22" stroke="'+B+'"/><path d="M5 11h22" stroke="'+O+'" stroke-width="2.2"/>',
    pres:'<rect x="4" y="5" width="24" height="17" rx="1.5" stroke="'+B+'"/><rect x="8" y="9" width="7" height="9" stroke="'+O+'"/><path d="M18 10h6M18 14h6M18 18h4M16 22v5M11 27h10" stroke="'+B+'"/>'
  };
  var ck='<svg viewBox="0 0 12 12" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 6.3l2.2 2.2 4.8-5"/></svg>';
  function sm(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';}
  var S={
    home:sm('<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>'),
    inbox:sm('<path d="M3 13l3-8h12l3 8v6H3zM3 13h5l1 3h6l1-3h5"/>'),
    star:sm('<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>'),
    send:sm('<path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/>'),
    file:sm('<path d="M14 3H6v18h12V7z M14 3v4h4"/>'),
    trash:sm('<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>'),
    clock:sm('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    bell:sm('<path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4z M10 20a2 2 0 0 0 4 0"/>'),
    users:sm('<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4.5a3 3 0 0 1 0 6M21 20c0-2.6-1.6-4.8-4-5.6"/>'),
    cloud:sm('<path d="M7 18a4.5 4.5 0 0 1-.5-9 6 6 0 0 1 11.6 1.2A4 4 0 0 1 18 18z"/>'),
    plus:sm('<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>'),
    hash:sm('<path d="M5 9h14M5 15h14M10 4L8 20M16 4l-2 16"/>'),
    tag:sm('<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.2"/>'),
    sparkle:sm('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>'),
    lock:sm('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
    sync:sm('<path d="M20 11a8 8 0 0 0-14-4.5L4 9M4 4v5h5M4 13a8 8 0 0 0 14 4.5l2-2.5M20 20v-5h-5"/>'),
    mic:'<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    cam:'<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 11l5-3v8l-5-3"/></svg>',
    scr:'<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M12 14V8M9 11l3-3 3 3M8 21h8"/></svg>',
    end:'<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"><path d="M3 14c5-5 13-5 18 0l-2.5 2.5-3-1.5v-3a12 12 0 0 0-7 0v3l-3 1.5z"/></svg>',
    play:'<svg viewBox="0 0 24 24" width="10" height="10" fill="#fff"><path d="M8 5v14l11-7z"/></svg>',
    snd:'<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  /* ---- shared app shell ---- */
  var order=['mail','teams','chat','meet','webinar','drive','cal','contacts','doc','sheet','pres'];
  var railLbl={mail:'Mail',teams:'Teams',chat:'Chat',meet:'Meet',webinar:'Webinar',drive:'Drive',cal:'Calendar',contacts:'Contacts',doc:'Docs',sheet:'Sheets',pres:'Slides'};
  function shell(key,side,content){
    var rail='<div class="rail"><div class="logo">X<b>.</b></div>'+order.map(function(k){
      return '<a class="'+(k===key?'on':'')+'">'+svg(I[k],18)+railLbl[k]+'</a>';}).join('')+'</div>';
    return '<div class="mock">'+rail+'<div class="mainA"><div class="topbar"><div class="brand"><span class="dot">X</span><span><b>XcellWorkspace</b></span></div>'+
      '<div class="search">'+sm('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>').replace('<svg','<svg width="12" height="12"')+' Search '+railLbl[key].toLowerCase()+'…</div><div class="av">RS</div></div>'+
      '<div class="body"'+(side?'':' style="grid-template-columns:1fr"')+'>'+(side?'<div class="side">'+side+'</div>':'')+'<div class="content">'+content+'</div></div></div></div>';
  }
  function it(ic,t,on,c){return '<div class="it'+(on?' on':'')+'">'+S[ic]+t+(c?'<span class="c">'+c+'</span>':'')+'</div>';}

  /* ---- per-app mocks (all names, data and times are sample) ---- */
  var M={};
  M.mail=function(){return shell('mail',
    '<div class="new">'+S.plus+'Compose</div>'+it('inbox','Inbox',1,'12')+it('star','Starred')+it('send','Sent')+it('file','Drafts')+
    '<div class="lab">Shared labels</div>'+it('tag','Finance')+it('tag','Sales — West')+'<div class="lab">Inboxes</div>'+it('inbox','sales@')+it('inbox','support@'),
    '<div class="h">Inbox</div><div class="stag">'+
    '<div class="mail-row unread"><span class="av-s c1">PA</span><div class="t"><b>Priya Agarwal <span class="lbl s">Sales — West</span></b><span>Renewal proposal for 120 Microsoft 365 seats — please review pricing…</span></div><span class="tm">10:42</span></div>'+
    '<div class="mail-row unread"><span class="av-s c2">AK</span><div class="t"><b>Accounts Team <span class="lbl f">Finance</span></b><span>Invoice XH-2026-1184 with GST attached as PDF</span></div><span class="tm">10:15</span></div>'+
    '<div class="mail-row"><span class="av-s c4">NM</span><div class="t"><b>NOC Mumbai</b><span>Maintenance window confirmed for Sunday, 02:00–04:00 IST</span></div><span class="tm">09:58</span></div>'+
    '<div class="mail-row"><span class="av-s c5">VR</span><div class="t"><b>Vikram Rao</b><span>Fwd: Tally on Cloud onboarding checklist (email attached)</span></div><span class="tm">Yesterday</span></div>'+
    '<div class="ai"><div class="k">'+S.sparkle+'AI summary · Priya Agarwal</div><span class="aitext caret"></span>'+
    '<div class="btns"><span>Reply: Approve</span><span>Reply: Ask for call</span><span>Co-draft with team</span></div></div>'+
    '</div>');};
  M.teams=function(){return shell('teams',
    '<div class="new">'+S.plus+'New team</div><div class="lab">Your teams</div>'+it('hash','sales-west',1,'5')+it('hash','noc-ops')+it('hash','marketing')+it('hash','product-launch')+
    '<div class="lab">In this team</div>'+it('file','Files')+it('star','Media')+it('send','Links'),
    '<div class="h" style="display:flex;align-items:center;gap:8px"># sales-west <span class="huddle" style="margin-left:auto">● Instant meeting</span></div><div class="stag">'+
    '<div class="post"><span class="av-s c1">RS</span><div class="bd"><div class="nm">Rizwan S. <span>9:30 AM · pinned</span></div><p>Q4 target: close 40 new Tally on Cloud accounts. Updates in this thread, please.</p>'+
    '<div class="att"><span>📄 Q4-plan.pdf</span><span>📊 pipeline.xlsx</span><span class="w">⚡ Create workflow from thread</span></div></div></div>'+
    '<div class="post"><span class="av-s c2">MG</span><div class="bd"><div class="nm">Manisha G. <span>10:05 AM</span></div><p>Two demos booked for Thursday — added to the team calendar.</p></div></div>'+
    '<div class="post"><span class="av-s c4">AY</span><div class="bd"><div class="nm">Amit Y. <span>10:21 AM</span></div><p>Shared the updated pricing deck in Files 👍</p><div class="att"><span>🖼 pricing-deck.pptx</span></div></div></div>'+
    '</div><div class="toast"><b>Workflow</b> "Q4 follow-ups" created · 6 tasks</div>');};
  M.chat=function(){return shell('chat',
    '<div class="new">'+S.plus+'New chat</div><div class="lab">Direct messages</div>'+
    '<div class="it on"><span class="av-s c2" style="width:18px;height:18px;flex-basis:18px;font-size:8px">PA</span>Priya A.<span class="c">2</span></div>'+
    '<div class="it"><span class="av-s c4" style="width:18px;height:18px;flex-basis:18px;font-size:8px">NM</span>NOC Mumbai</div>'+
    '<div class="it"><span class="av-s c5" style="width:18px;height:18px;flex-basis:18px;font-size:8px">VR</span>Vikram R.</div>'+
    '<div class="lab">Spaces</div>'+it('hash','support-desk')+it('hash','lunch-club'),
    '<div class="h" style="display:flex;align-items:center;gap:8px">Priya Agarwal <span class="lock">'+S.lock.replace('<svg','<svg width="11" height="11"')+' Encrypted</span><span class="huddle pulse" style="margin-left:auto">🎧 Huddle</span></div>'+
    '<div class="chatbox"></div><div class="chat-in">Message Priya… 😊 GIF<span class="snd">'+S.snd+'</span></div>');};
  M.meet=function(){var t=[['RS','c1','Rizwan'],['PA','c2','Priya',1],['NM','c4','NOC Mumbai'],['VR','c5','Vikram'],['MG','c6','Manisha'],['AY','c3','Amit']];
    var g=['#1b2a55','#2a2147','#123a3a','#2b2f4f','#3a2228','#1f2e44'];
    return shell('meet','','<div class="meet" style="margin:-14px -16px;height:calc(100% + 28px);position:relative"><div class="rec"><i></i>REC 00:24:18 · HD</div><div class="mgrid" style="margin-top:22px">'+
    t.map(function(x,i){return '<div class="tile'+(x[3]?' spk':'')+'" style="background:'+g[i]+'"><span class="big '+x[1]+'">'+x[0]+'</span><span class="nm">'+x[2]+'</span></div>';}).join('')+
    '</div><div class="ctrl"><span>'+S.mic+'</span><span>'+S.cam+'</span><span>'+S.scr+'</span><span style="font-size:13px">✋</span><span style="font-size:13px">🎨</span><span class="end">'+S.end+'</span></div>'+
    '<div class="poll"><b>📊 Poll: Go-live date?</b><div class="bar" style="--w:64%"><i></i><span>1 Nov — 64%</span></div><div class="bar o" style="--w:28%"><i></i><span>8 Nov — 28%</span></div><div class="bar" style="--w:8%"><i></i><span>15 Nov — 8%</span></div></div></div>');};
  M.webinar=function(){return shell('webinar','','<div class="web"><div class="stage"><span class="cnt">👥 <span class="att-n">0</span> / 1,000 attending</span><div class="rec" style="background:rgba(22,163,127,.2)"><i style="background:#16a37f"></i>LIVE · Encrypted</div>'+
    '<div class="slideS"><h4>Cloud Security for Indian SMBs</h4><div class="ln" style="width:90%"></div><div class="ln" style="width:70%"></div><div class="ln" style="width:80%"></div>'+
    '<div style="display:flex;gap:6px;margin-top:auto"><div class="bar" style="--w:78%;flex:1"><i></i></div><div class="bar o" style="--w:52%;flex:1"><i></i></div></div></div>'+
    '<div class="pip"><span class="av-s c2">SJ</span></div></div>'+
    '<div class="qa"><b style="font-size:11px">Q&amp;A · Polls</b><div class="q"><b>Neha · Pune</b>Is data stored in India? <span class="up">▲ 24</span></div>'+
    '<div class="q"><b>Arjun · Delhi</b>Can we get the recording? <span class="up">▲ 17</span></div>'+
    '<div class="q"><b>Live poll</b><div class="bar" style="--w:71%;margin-top:4px"><i></i><span>Yes 71%</span></div><div class="bar o" style="--w:29%"><i></i><span>No 29%</span></div></div>'+
    '<div class="q" style="background:var(--soft)"><b>Scheduled</b>Next session · 24 Oct, 11:00 IST</div></div></div>');};
  M.drive=function(){return shell('drive',
    '<div class="new">'+S.plus+'New</div>'+it('home','Home',1)+it('file','My Drive')+it('bell','Activity')+it('users','Shared drives')+it('send','Shared with me')+it('clock','Recent')+it('star','Starred')+it('trash','Trash')+it('cloud','Storage')+
    '<div class="stor"><i style="width:0" data-w="38%"></i></div><div style="font-size:9.5px;color:#98a0b3;margin:4px 8px">190 GB of 500 GB used</div>',
    '<div class="h">Welcome to Drive</div><div class="chips"><span class="chip">Type ▾</span><span class="chip">People ▾</span><span class="chip">Modified ▾</span><span class="chip">Location ▾</span></div>'+
    '<div class="files stag">'+
    '<div class="fcard"><div class="thumb th1"><div class="lg">Xcell<em>Host</em></div><div class="bld"></div></div><div class="fname">XcellHost Company Profile 2026<span>⋮</span></div><div class="fmeta">Just now</div></div>'+
    '<div class="fcard"><div class="thumb th2"><div class="tx">Cloud, Security &amp; AI Solutions for Indian Business</div><div class="coin">₹</div></div><div class="fname">Solutions brochure.pdf<span>⋮</span></div><div class="fmeta">1m ago</div></div>'+
    '<div class="fcard"><div class="thumb th3"><div class="tx"><b>Tally on Cloud</b><br>Access Tally anywhere, securely</div></div><div class="fname">Tally on Cloud deck<span>⋮</span></div><div class="fmeta">Shared by Rizwan · 2h ago</div></div>'+
    '<div class="fcard"><div class="thumb th4"><div class="scr">'+Array(12).join('<i></i>').split('<i></i>').map(function(_,i){return '<i style="background:'+['#2d4aa0','#a0522d','#3d8b6e','#6b4aa0','#a03d5e','#2d7aa0'][i%6]+'"></i>';}).join('')+'</div></div><div class="fname">Workspace Meet — product sheet<span>⋮</span></div><div class="fmeta">Yesterday</div></div>'+
    '</div><div class="upl">⬆ Uploading <b>Q3-board-pack.pdf</b> · encrypted<div class="pb"><i></i></div></div>');};
  M.cal=function(){var days=['Mon 19','Tue 20','Wed 21','Thu 22','Fri 23'];
    var html='<div class="cal"><div class="hd"></div>'+days.map(function(d,i){return '<div class="hd'+(i===2?' td':'')+'">'+d+'</div>';}).join('');
    ['9','10','11','12','1','2','3'].forEach(function(h){html+='<div class="tm">'+h+'</div>'+'<div class="cell"></div>'.repeat(5);});
    function ev(c,col,top,hgt,t,s,mt,dl){return '<div class="ev '+c+'" style="left:calc(34px + (100% - 34px)/5*'+col+' + 3px);width:calc((100% - 34px)/5 - 6px);top:'+top+'px;height:'+hgt+'px;animation-delay:'+dl+'s"><b>'+t+'</b>'+s+(mt?'<br><span class="mt">🎥 Meet link</span>':'')+'</div>';}
    html+=ev('',0,34,60,'Sales stand-up','9:30–10:30',1,.2)+ev('o',1,80,42,'Client demo','10:30',1,.35)+ev('t',2,34,30,'✓ Task: GST filing','Due 9:30',0,.5)+
      ev('',2,126,70,'Board review','11:30–1:00',1,.65)+ev('o',3,172,46,'Booked: Neha','via booking page',0,.8)+ev('t',4,80,30,'✓ Task: Renewals','',0,.95)+'<div class="nowl"></div></div>';
    return shell('cal','<div class="new">'+S.plus+'Create</div><div style="font-size:11px;font-weight:600;margin:2px 4px">October 2026</div><div class="mini">'+
      'MTWTFSS'.split('').map(function(d){return '<span style="color:#98a0b3">'+d+'</span>';}).join('')+
      Array.from({length:28},function(_,i){var n=i+5;return '<span'+(n===21?' class="on"':'')+'>'+(n>31?n-31:n)+'</span>';}).join('')+'</div>'+
      it('clock','My calendar',1)+it('star','Tasks')+it('users','Team calendar')+'<div class="book">📅 <b>Your booking page</b><br>xcellhost.cloud/book/rs <span style="opacity:.6">(sample)</span></div>'+
      '<div class="lab">Sharing</div><div class="it">'+S.lock+'Private · 2 people</div>',
      '<div class="h" style="display:flex;align-items:center;gap:8px">This week<span class="chips" style="margin:0 0 0 auto"><span class="chip on">Calendar</span><span class="chip">Tasks</span></span></div>'+html);};
  M.contacts=function(){return shell('contacts',
    '<div class="new">'+S.plus+'New contact</div>'+it('users','All contacts',1,'248')+it('clock','Frequent')+it('trash','Trash')+'<div class="lab">Labels</div>'+it('tag','Clients')+it('tag','Vendors')+it('tag','Partners')+
    '<div class="lab">Tools</div>'+it('sync','Import / export'),
    '<div class="h" style="display:flex;align-items:center">Contacts<span class="sync">'+S.sync+'Synced to 3 devices</span></div>'+
    '<div class="merge">🔁 <span><b>2 duplicates found</b><br><span style="color:#7a4100">Priya Agarwal · Priya A.</span></span><span class="bt">Merge &amp; fix</span></div><div class="stag">'+
    '<div class="ct"><span class="av-s c2">PA</span><div class="t"><b>Priya Agarwal</b><span>priya@example.in · +91 98xxx xx210</span></div><span class="tag tg1">Clients</span></div>'+
    '<div class="ct"><span class="av-s c4">NM</span><div class="t"><b>NOC Mumbai</b><span>noc@example.in · +91 22 xxxx xx55</span></div><span class="tag tg3">Partners</span></div>'+
    '<div class="ct"><span class="av-s c5">VR</span><div class="t"><b>Vikram Rao</b><span>vikram@example.in · Bengaluru</span></div><span class="tag tg2">Vendors</span></div>'+
    '<div class="ct"><span class="av-s c1">SK</span><div class="t"><b>Sneha Kulkarni</b><span>sneha@example.in · Pune</span></div><span class="tag tg1">Clients</span></div>'+
    '<div class="ct"><span class="av-s c6">AD</span><div class="t"><b>Arjun Desai</b><span>arjun@example.in · Delhi</span></div><span class="tag tg1">Clients</span></div>'+
    '</div>');};
  M.doc=function(){return shell('doc','','<div class="tbar"><span>File</span><span>Edit</span><span>Insert</span><span class="sep"></span><span class="on"><b>B</b></span><span><i>I</i></span><span><u>U</u></span><span class="sep"></span><span>H1</span><span>🖼</span><span>📊</span><span>🔗</span>'+
    '<div class="collab"><span class="av-s c1">RS</span><span class="av-s c2">PA</span><span class="av-s c4">AY</span></div></div>'+
    '<div class="paper"><span class="ver">🕘 Version 14 · restore</span><h3>Proposal: Managed Cloud for Acme Ltd.</h3><div class="meta">Template: Business proposal · edited by 3 people</div>'+
    '<p class="dtext caret"></p><div class="ln" style="width:96%"></div><div class="ln" style="width:88%"></div><div class="ln" style="width:92%"></div>'+
    '<div style="display:flex;gap:10px;margin:10px 0"><div style="flex:1;height:58px;border-radius:6px;background:linear-gradient(135deg,#dbe8ff,#fff1e0)"></div><div style="flex:1;height:58px;border-radius:6px;border:1px solid var(--line);display:flex;align-items:flex-end;gap:4px;padding:6px">'+
    '<i style="flex:1;background:#0066FF;height:40%;border-radius:2px"></i><i style="flex:1;background:#FF8A00;height:75%;border-radius:2px"></i><i style="flex:1;background:#0066FF;height:55%;border-radius:2px"></i><i style="flex:1;background:#FF8A00;height:90%;border-radius:2px"></i></div></div>'+
    '<div class="ln" style="width:80%"></div><div class="ln" style="width:60%"></div>'+
    '<span class="cur" style="background:#FF8A00;left:62%;top:210px">Priya</span><span class="cur" style="background:#16a37f;left:30%;top:268px;animation-delay:-3s">Amit</span></div>');};
  M.sheet=function(){var rows=[['Region','Q1','Q2','Q3'],['Mumbai','12.4','14.1','16.8'],['Pune','6.2','7.0','8.3'],['Delhi NCR','9.8','10.5','12.2'],['Bengaluru','8.1','9.4','11.0'],['Chennai','4.6','5.2','6.1'],['Total','41.1','46.2','54.4']];
    var h='<div class="sheet"><div class="hc"></div><div class="hc">A</div><div class="hc">B</div><div class="hc">C</div><div class="hc">D</div>';
    rows.forEach(function(r,i){h+='<div class="hc">'+(i+1)+'</div>'+r.map(function(c,j){return '<div class="'+(j?'n ':'')+(i===6?'tot':'')+(i===0?' hc':'')+'"'+(i===0?' style="color:#26304a"':'')+'>'+c+'</div>';}).join('');});
    h+='<div class="sel"></div></div>';
    return shell('sheet','','<div class="tbar"><span>File</span><span>Data</span><span>Insert</span><span class="sep"></span><span>₹</span><span>%</span><span>Σ</span><span class="on">📊 Chart</span><span>⇅ Sort</span><span>⬇ Export .xlsx</span>'+
    '<div class="collab"><span class="av-s c2">MG</span><span class="av-s c1">RS</span></div></div><div class="fx"><b>fx</b><span class="fxt">=SUM(B2:B6)</span><span style="margin-left:auto;font-family:Inter;color:#98a0b3;font-size:10px">🕘 Version history</span></div>'+h+
    '<div class="chart"><i style="--h:42%"></i><i style="--h:58%"></i><i style="--h:70%"></i><i style="--h:48%"></i><i style="--h:64%"></i><i style="--h:86%"></i><span style="font-size:9px;color:#98a0b3;align-self:flex-start;white-space:nowrap">Revenue ₹ lakh (sample)</span></div>');};
  M.pres=function(){return shell('pres','','<div class="deck"><div class="thumbs">'+
    [1,2,3,4].map(function(n){return '<div class="tn'+(n===2?' on':'')+'"><small>'+n+'</small><i class="k"></i><i></i><i style="width:70%"></i></div>';}).join('')+
    '</div><div><div class="tbar"><span>Templates</span><span>Insert</span><span>🎬 Video</span><span class="on">✨ Animate</span><span>Transition</span>'+
    '<div class="collab"><span class="av-s c4">AY</span><span class="av-s c2">PA</span></div></div>'+
    '<div class="slide"><h3>Growth with <b>XcellHost Cloud</b></h3><p>Template: Corporate · edited live in the browser</p>'+
    '<div class="bars"><i style="--h:35%"></i><i style="--h:52%;animation-delay:.15s"></i><i style="--h:68%;animation-delay:.3s"></i><i style="--h:92%;animation-delay:.45s"></i></div>'+
    '<div class="vid"><span>'+S.play+'</span></div><span class="cur" style="background:#16a37f;left:52%;top:46%">Amit</span></div>'+
    '<div class="share"><span class="bt">Share</span><span class="fol"><span class="av-s c2" style="width:16px;height:16px;font-size:7px;flex-basis:16px">PA</span>Following Priya</span><span style="color:var(--muted)">Exports to .pptx / .pdf</span></div></div></div>');};

  /* ---- content (XcellHost wording) ---- */
  var APPS=[
    {k:'mail',label:'Email Inbox',title:'Email Inbox',sub:'Make more of your inbox',b:['Unlimited email inboxes','Co-draft emails with your team','AI summaries and replies','Manage multiple inboxes','Send emails as attachments','Share labels with colleagues']},
    {k:'teams',label:'Teams',title:'Teams',sub:'See what’s happening across your teams',b:['Create workflows from threads','Instant meetings with your team','Files, media and links in one place','Order posts the way you need','Built for your work, passions and ideas','Teams that grow with you']},
    {k:'chat',label:'Chat',title:'Chat',sub:'Stay connected and get more done',b:['Simple to manage conversations','Express yourself with emoji & GIFs','Huddle with your team instantly','Industry-standard security','Real-time message protection','Secure chat data']},
    {k:'meet',label:'Meet',title:'Meet',sub:'Video conferencing made easy for business',b:['Record and save sessions','Rich, collaborative meetings','Polls, Q&A and reactions','Join from the app or the web','Collaborate on an HD whiteboard','Encrypted meetings']},
    {k:'webinar',label:'Webinar',title:'Webinar',sub:'A complete engagement platform',b:['End-to-end encryption','Host up to 1,000 attendees','Streamlined event scheduling','Granular participant control','Real-time interactive polls','Seamless screen sharing']},
    {k:'drive',label:'Drive',title:'Drive',sub:'Store, create and share in an instant',b:['Enterprise ready','Encrypted file sharing','Share, comment and collaborate','Streamlined file collaboration','No more file silos','Storage that grows with you']},
    {k:'cal',label:'Calendar',title:'Calendar',sub:'Organise, collaborate and be productive',b:['Schedule events with an easy interface','Your own appointment booking page','Track tasks right from the calendar','Add Meet links to any event','Switch easily between tasks and calendar','Share or restrict your calendar']},
    {k:'contacts',label:'Contacts',title:'Contacts',sub:'Your digital address book',b:['Merge and fix duplicate contacts','Works across every Workspace app','Label your contact groups','Real-time sync across devices','Easy import and export','Recover contacts from Trash']},
    {k:'doc',label:'Document',title:'Document',sub:'Create content together',b:['Professional, styled documents','Templates for quick drafting','Rich content: images, tables, charts','Decide together with your team','Work from wherever you are','Full control over every version']},
    {k:'sheet',label:'Spreadsheet',title:'Spreadsheet',sub:'Collaborative spreadsheets for data pros',b:['Trackers, tables and advanced data','Templates for quick analysis','Decide together with your team','Track changes with version history','Import and export from other apps','Analyse data with formulas']},
    {k:'pres',label:'Presentation',title:'Presentation',sub:'Create impactful presentations together',b:['Templates for consistent decks','Create in the browser, from anywhere','Add video and animation to slides','Simple sharing controls','Follow your collaborators live','Compatible with other applications']}
  ];

  /* ---- render & behaviour ---- */
  var root=document.getElementById('workspace-apps'),tabs=root.querySelector('.xw-tabs'),panel=root.querySelector('.xw-panel'),
      h2=panel.querySelector('h2'),sub=panel.querySelector('.sub'),ul=panel.querySelector('ul'),mw=panel.querySelector('.mockwrap');
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var DUR=7000,cur=5,timer=null,loops=[];
  tabs.innerHTML=APPS.map(function(a,i){return '<button class="xw-tab" role="tab" id="xwt-'+a.k+'" aria-selected="false" tabindex="-1" data-i="'+i+'">'+svg(I[a.k])+a.label+'<span class="prog"></span></button>';}).join('');
  root.style.setProperty('--dur',DUR+'ms');
  var btns=[].slice.call(tabs.children);

  function clearLoops(){loops.forEach(function(f){clearInterval(f);clearTimeout(f);});loops=[];}
  function typeInto(el,text,speed,again){
    if(!el)return; var i=0; el.textContent='';
    if(reduce){el.textContent=text;return;}
    var t=setInterval(function(){el.textContent=text.slice(0,++i);if(i>=text.length){clearInterval(t);
      if(again)loops.push(setTimeout(function(){typeInto(el,text,speed,again);},2600));}},speed); loops.push(t);
  }
  function live(k){
    var c=mw;
    if(k==='mail')typeInto(c.querySelector('.aitext'),'Priya wants approval on the renewal for 120 seats before Friday; asks if annual billing can start 1 Nov.',22,true);
    if(k==='doc')typeInto(c.querySelector('.dtext'),'XcellHost will migrate Acme’s workloads to a managed private cloud in Mumbai, with 24×7 monitoring and daily backups.',28,true);
    if(k==='drive'){var s=c.querySelector('.stor i');if(s)s.style.width=s.dataset.w;}
    if(k==='webinar'){var n=c.querySelector('.att-n'),v=0;if(n){if(reduce){n.textContent='842';}else{var t=setInterval(function(){v=Math.min(842,v+23);n.textContent=v.toLocaleString('en-IN');if(v>=842)clearInterval(t);},30);loops.push(t);}}}
    if(k==='sheet'){var sh=c.querySelector('.sheet'),sel=c.querySelector('.sel'),fx=c.querySelector('.fxt');
      var cells=[[6,1,'=SUM(B2:B6)'],[6,2,'=SUM(C2:C6)'],[6,3,'=SUM(D2:D6)'],[1,3,'16.8'],[3,3,'=C4*1.16']],j=0;
      function mv(){var cs=sh.children,cols=5,p=cells[j%cells.length],el=cs[(p[0]+1)*cols+p[1]+1];if(!el)return;
        sel.style.left=el.offsetLeft+'px';sel.style.top=el.offsetTop+'px';sel.style.width=el.offsetWidth+'px';sel.style.height=el.offsetHeight+'px';fx.textContent=p[2];j++;}
      mv(); if(!reduce)loops.push(setInterval(mv,1500));}
    if(k==='chat'){var box=c.querySelector('.chatbox'),msgs=[['l','Hi! Can we get the Workspace demo this week?'],['r','Sure — Thursday 11:00 IST works? I’ll send a Meet link.'],['l','Perfect. Also need 500 GB Drive per user.'],['r','Done ✅ Sharing the proposal now.']],m=0;
      function add(){if(m>=msgs.length){loops.push(setTimeout(function(){box.innerHTML='';m=0;add();},3200));return;}
        var tp=document.createElement('div');tp.className='bub '+msgs[m][0];tp.innerHTML='<span class="typing"><i></i><i></i><i></i></span>';box.appendChild(tp);
        loops.push(setTimeout(function(){tp.textContent=msgs[m][1];if(m===3){var r=document.createElement('span');r.className='react';r.textContent='👍 2';tp.appendChild(r);}
          tp.style.animation='fadeUp .3s ease';m++;loops.push(setTimeout(add,900));},reduce?0:900));}
      if(reduce){msgs.forEach(function(x){var d=document.createElement('div');d.className='bub '+x[0];d.textContent=x[1];box.appendChild(d);});}else add();}
  }
  function show(i,user){
    cur=(i+APPS.length)%APPS.length; var a=APPS[cur];
    btns.forEach(function(b,j){var on=j===cur;b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;});
    panel.setAttribute('aria-labelledby','xwt-'+a.k);
    clearLoops(); panel.classList.remove('in'); void panel.offsetWidth;
    h2.textContent=a.title; sub.textContent=a.sub;
    ul.innerHTML=a.b.map(function(t){return '<li><i>'+ck+'</i>'+t+'</li>';}).join('');
    mw.innerHTML=M[a.k](); panel.classList.add('in'); live(a.k);
    if(user){root.classList.add('manual');stop();}
    else if(!root.classList.contains('manual')){ /* restart progress bar */ var p=btns[cur].querySelector('.prog');p.replaceWith(p.cloneNode());}
    if(tabs.scrollWidth>tabs.clientWidth){var bt=btns[cur];tabs.scrollTo({left:bt.offsetLeft-(tabs.clientWidth-bt.offsetWidth)/2,behavior:reduce?'auto':'smooth'});}
  }
  function start(){stop();if(reduce||root.classList.contains('manual'))return;timer=setInterval(function(){show(cur+1);},DUR);}
  function stop(){clearInterval(timer);timer=null;}

  tabs.addEventListener('click',function(e){var b=e.target.closest('.xw-tab');if(b)show(+b.dataset.i,true);});
  tabs.addEventListener('keydown',function(e){var d={ArrowRight:1,ArrowLeft:-1}[e.key];if(e.key==='Home')d=-cur;if(e.key==='End')d=APPS.length-1-cur;
    if(d!==undefined){e.preventDefault();show(cur+d,true);btns[cur].focus();}});
  root.addEventListener('mouseenter',function(){root.classList.add('paused');stop();});
  root.addEventListener('mouseleave',function(){root.classList.remove('paused');if(!root.classList.contains('manual')){show(cur);start();}});
  if('IntersectionObserver' in window){new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){if(!root.classList.contains('paused'))start();}else stop();});},{threshold:.25}).observe(root);}
  else start();

  if(reduce)root.classList.add('manual');
  show(cur); /* opens on Drive, as in the reference */
})();
