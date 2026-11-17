<?php
declare(strict_types=1);
require_once __DIR__.'/../public/api/robots-fetch-lib.php';
$checks=0;
function check(bool $condition,string $message): void {global $checks;if(!$condition)throw new RuntimeException($message);$checks++;}
function rejects(callable $run,string $message): void {try{$run();}catch(Throwable $error){check(true,$message);return;}throw new RuntimeException('Expected rejection: '.$message);}
foreach(['127.0.0.1','10.0.0.1','100.64.1.2','169.254.169.254','172.16.1.2','192.168.1.2','192.0.2.1','198.18.0.1','203.0.113.1','224.0.0.1','::1','::ffff:127.0.0.1','fc00::1','fe80::1','2001:db8::1','2002:7f00:1::1','64:ff9b::7f00:1'] as $ip)check(!xh_robots_public_ip($ip),'Public IP guard '.$ip);
foreach(['8.8.8.8','1.1.1.1','2606:4700:4700::1111','2001:4860:4860::8888']as $ip)check(xh_robots_public_ip($ip),'Public address '.$ip);
foreach(['http://localhost/robots.txt','http://127.0.0.1/','http://[::1]/','http://2130706433/','https://example.local/','file:///etc/passwd','https://user:pass@example.com/','https://example.com:8080/','https://example.com\\@localhost/']as $url)rejects(fn()=>xh_robots_url($url),'URL guard');
check(xh_robots_url('https://example.com/path')['origin']==='https://example.com','URL origin');
check(xh_robots_redirect('https://example.com/a/robots','../robots.txt')==='https://example.com/robots.txt','relative redirect');
check(xh_robots_redirect('https://example.com/a/robots','../../../robots.txt')==='https://example.com/robots.txt','parent path redirect');
$public=fn($host)=>['8.8.8.8'];$calls=[];
$transport=function($target,$ip,$limit,$deadline)use(&$calls){$calls[]=$target['url'];check($ip==='8.8.8.8','Pinned transport address');return ['status'=>200,'headers'=>['content-type'=>'text/plain'],'text'=>"User-agent: *\nDisallow: /private/\nSitemap: https://example.com/sitemap.xml\n",'truncated'=>false];};
$r=xh_robots_inspect_request(['url'=>'https://example.com/supplied/path','checkSitemaps'=>false],$public,$transport);check($calls===['https://example.com/robots.txt'],'Only robots root fetched');check($r['status']===200,'HTTP result');
rejects(fn()=>xh_robots_fetch('https://example.com/',100,microtime(true)+2,fn($h)=>['8.8.8.8','127.0.0.1'],$transport),'Mixed public/private DNS');
rejects(fn()=>xh_robots_fetch('https://example.com/',100,microtime(true)+2,fn($h)=>[],$transport),'No DNS answer');
$redirect=function($target,$ip,$limit,$deadline){return ['status'=>302,'headers'=>['location'=>'http://private.example/robots.txt'],'text'=>'','truncated'=>false];};
rejects(fn()=>xh_robots_fetch('https://example.com/',100,microtime(true)+2,fn($host)=>$host==='private.example'?['10.0.0.1']:['8.8.8.8'],$redirect),'Redirect revalidates DNS');
rejects(fn()=>xh_robots_fetch('https://example.com/',100,microtime(true)+2,$public,$redirect),'Redirect loop');
$calls=[];
$withMaps=function($target,$ip,$limit,$deadline)use(&$calls){$calls[]=$target['url'];$body=str_ends_with($target['url'],'robots.txt')?implode("\n",array_map(fn($i)=>'Sitemap: https://example.com/map'.$i.'.xml',range(1,8))):'<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';return ['status'=>200,'headers'=>['content-type'=>'text/plain'],'text'=>$body,'truncated'=>false];};
$r=xh_robots_inspect_request(['url'=>'https://example.com','checkSitemaps'=>true],$public,$withMaps);check(count($r['sitemaps'])===5,'Sitemap probes bounded');check(count($calls)===6,'Robots plus five probes');check($r['sitemaps'][0]['xmlPrefix']===true,'XML prefix metadata');
rejects(fn()=>xh_robots_inspect_request(['url'=>[]],$public,$transport),'Invalid request type');rejects(fn()=>xh_robots_fetch('https://example.com/',100,microtime(true)-1,$public,$transport),'Deadline');
echo "PASS $checks robots fetch checks\n";
