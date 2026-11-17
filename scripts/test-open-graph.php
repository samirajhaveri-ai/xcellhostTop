<?php
declare(strict_types=1);
require_once __DIR__.'/../public/api/open-graph-lib.php';
$checks=0;
function check(bool $ok,string $message):void {global $checks;if(!$ok)throw new RuntimeException($message);$checks++;}
function rejects(callable $run,string $message):void {try{$run();}catch(Throwable $e){check(true,$message);return;}throw new RuntimeException('Expected rejection: '.$message);}
$html='<!doctype html><html><head><base href="/assets/"><title>A &amp; B — café</title><meta name="description" content="A &quot;summary&quot;"><meta property="og:title" content="First title"><meta property="og:title" content="Second title"><meta property="og:image" content="photo.png"><meta name="twitter:card" content="summary_large_image"><meta property="twitter:title" content="X title"><meta charset="utf-8"><link REL="alternate canonical" href="/page"></head><body><meta property="og:title" content="Body is ignored"><script>window.location="http://localhost";</script></body></html>';
$r=xh_og_extract($html,'https://example.com/page');$tags=$r['tags'];
check($r['baseUrl']==='https://example.com/assets/','HTML base resolved');
check($tags[0]['value']==='A & B — café','Entities and UTF-8 preserved');
check(count(array_filter($tags,fn($t)=>$t['key']==='og:title'))===2,'Duplicates retained, body excluded');
check(count(array_filter($tags,fn($t)=>$t['key']==='canonical'))===1,'Canonical rel token');
check(count(array_filter($tags,fn($t)=>$t['source']==='twitter'))===2,'Twitter name and property forms');
check($tags[1]['value']==='A "summary"','Attribute decoding');
check(xh_og_resolve('../photo.png','https://example.com/assets/a')==='https://example.com/photo.png','Relative URL');
foreach(['javascript:alert(1)','data:image/png,bad','http://127.0.0.1/x','file:///etc/passwd','http://user:pw@example.com'] as $url)rejects(fn()=>xh_og_resolve($url,'https://example.com/'),'Unsafe resource URL');
$r=xh_og_extract('<html><head><title>test</title>'.str_repeat('<meta property="og:title" content="x">',510).'</head></html>','https://example.com');check(count($r['tags'])===500,'Tag count bound');check(count($r['warnings'])>0,'Tag truncation explicit');
$r=xh_og_extract('<head><meta property="og:title" content="'.str_repeat('x',9000).'"></head>','https://example.com');check(strlen($r['tags'][0]['value'])===8192,'Tag value bound');
rejects(fn()=>xh_og_extract(str_repeat('x',1048577),'https://example.com'),'HTML size bound');
$calls=[];$public=fn($host)=>['8.8.8.8'];$png=base64_decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=');
$transport=function($target,$ip,$limit,$deadline)use(&$calls,$html,$png){$calls[]=$target['url'];check($ip==='8.8.8.8','Public IP pinned');$image=str_ends_with($target['url'],'photo.png');return ['status'=>200,'headers'=>['content-type'=>$image?'image/png':'text/html; charset=utf-8'],'text'=>$image?$png:$html,'truncated'=>false];};
$r=xh_og_inspect(['url'=>'https://example.com/page?x=1','fetchImages'=>false],$public,$transport);check($calls===['https://example.com/page?x=1'],'Exact page fetched; images opt-out');check(count($r['images'])===0,'No image request when disabled');
$calls=[];$r=xh_og_inspect(['url'=>'https://example.com/page','fetchImages'=>true],$public,$transport);check(count($calls)===2,'Page plus declared image');check($r['images'][0]['width']===1,'Image dimensions measured');check(str_starts_with($r['images'][0]['dataUrl'],'data:image/png;base64,'),'Bounded raster data returned');
rejects(fn()=>xh_og_inspect(['url'=>'https://example.com'],fn($h)=>['8.8.8.8','127.0.0.1'],$transport),'Mixed private DNS rejected');
$redirect=fn($target,$ip,$limit,$deadline)=>['status'=>302,'headers'=>['location'=>'https://private.example/a'],'text'=>'','truncated'=>false];rejects(fn()=>xh_og_inspect(['url'=>'https://example.com'],fn($h)=>$h==='private.example'?['10.0.0.1']:['8.8.8.8'],$redirect),'Redirect DNS revalidated');
$nonHtml=fn($t,$ip,$limit,$deadline)=>['status'=>200,'headers'=>['content-type'=>'application/json'],'text'=>'{}','truncated'=>false];rejects(fn()=>xh_og_inspect(['url'=>'https://example.com'],$public,$nonHtml),'Non-HTML rejected');
$svg=fn($t,$ip,$limit,$deadline)=>['status'=>200,'headers'=>['content-type'=>'image/svg+xml'],'text'=>'<svg onload="alert(1)"></svg>','truncated'=>false];check(isset(xh_og_image('https://example.com/image.svg',microtime(true)+2,$public,$svg)['error']),'SVG not rendered');
$huge=fn($t,$ip,$limit,$deadline)=>['status'=>200,'headers'=>['content-type'=>'image/png'],'text'=>$png,'truncated'=>true];check(isset(xh_og_image('https://example.com/a.png',microtime(true)+2,$public,$huge)['error']),'Truncated image not rendered');
$blocked=fn($t,$ip,$limit,$deadline)=>['status'=>403,'headers'=>['content-type'=>'text/html'],'text'=>$html,'truncated'=>false];$r=xh_og_inspect(['url'=>'https://example.com','fetchImages'=>true],$public,$blocked);check($r['status']===403 && count($r['images'])===0,'Error response retained without fetching its images');
rejects(fn()=>xh_og_inspect(['url'=>[]],$public,$transport),'Invalid request');
echo "PASS $checks Open Graph fetch checks\n";
