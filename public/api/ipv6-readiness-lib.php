<?php
declare(strict_types=1);
require_once __DIR__.'/robots-fetch-lib.php';

function xh_v6_domain(string $value): string {
    $value=strtolower(rtrim(trim($value),'.'));
    if (strlen($value)>253 || str_contains($value,'/') || str_contains($value,':') || str_contains($value,'@')) throw new InvalidArgumentException('Enter a public DNS domain name.');
    return xh_robots_url('https://'.$value.'/')['host'];
}

function xh_v6_dns(string $name,int $type,float $deadline): array {
    $empty=['name'=>$name,'type'=>$type,'status'=>'ERROR','records'=>[]];
    try {
        if (microtime(true)>=$deadline) throw new RuntimeException('The shared check deadline was reached.');
        $url='https://dns.google/resolve?name='.rawurlencode($name).'&type='.$type.'&edns_client_subnet=0.0.0.0%2F0';
        $target=['host'=>'dns.google','scheme'=>'https','port'=>443,'url'=>$url];
        $r=xh_robots_curl($target,'8.8.8.8',65536,min($deadline,microtime(true)+3),'XcellHostIPv6Check/1.0');
        if ($r['status']!==200 || $r['truncated']) throw new RuntimeException('The DNS service response was unavailable or exceeded its limit.');
        $data=json_decode($r['text'],true,12,JSON_THROW_ON_ERROR);
        if (!is_array($data) || !isset($data['Status']) || !in_array($data['Status'],[0,3],true)) throw new RuntimeException('The DNS resolver did not return a successful or NXDOMAIN response.');
        $records=[];
        foreach (array_slice($data['Status']===3?[]:($data['Answer']??[]),0,100) as $row) {
            if (!is_array($row) || !in_array($row['type']??0,[$type,5],true) || !is_string($row['data']??null)) continue;
            $records[]=['name'=>substr((string)($row['name']??$name),0,254),'type'=>$row['type'],'ttl'=>(int)($row['TTL']??0),'data'=>substr($row['data'],0,2048)];
        }
        return [...$empty,'status'=>$data['Status']===3?'NXDOMAIN':'NOERROR','records'=>$records];
    } catch (Throwable $e) {return [...$empty,'error'=>$e instanceof RuntimeException?$e->getMessage():'The DNS response could not be read.'];}
}

function xh_v6_address(array $dns,int $family): ?string {
    foreach ($dns['records'] as $record) {
        $ip=$record['data'];
        if ($record['type']!==($family===6?28:1) || !filter_var($ip,FILTER_VALIDATE_IP,$family===6?FILTER_FLAG_IPV6:FILTER_FLAG_IPV4)) continue;
        if (xh_robots_public_ip($ip)) return $ip;
    }
    return null;
}

function xh_v6_unknown(string $detail,?string $address=null): array {return ['state'=>'UNKNOWN','detail'=>$detail,'address'=>$address];}

function xh_v6_capability(float $deadline): array {
    foreach (['2001:4860:4860::8888','2606:4700:4700::1111'] as $ip) {
        if (microtime(true)>=$deadline) break;
        $socket=@stream_socket_client('tcp://['.$ip.']:443',$errno,$error,min(1.2,max(.01,$deadline-microtime(true))));
        if ($socket!==false) {fclose($socket);return ['available'=>true,'detail'=>'The testing server established a direct IPv6 TCP connection to a public baseline endpoint.'];}
    }
    return ['available'=>false,'detail'=>'The testing server could not establish an IPv6 baseline connection. Target IPv6 transport checks are unverified; this does not establish a failure of the domain.'];
}

function xh_v6_http(string $host,string $ip,int $family,bool $secure,float $deadline): array {
    $port=$secure?443:80;$scheme=$secure?'https':'http';$start=microtime(true);
    if (!xh_robots_public_ip($ip) || !filter_var($ip,FILTER_VALIDATE_IP,$family===6?FILTER_FLAG_IPV6:FILTER_FLAG_IPV4)) throw new InvalidArgumentException('Only public addresses in the selected family can be probed.');
    xh_v6_domain($host);
    if (microtime(true)>=$deadline) return xh_v6_unknown('The shared deadline was reached.',$ip);
    $headers=[];$bytes=0;$headerBytes=0;$bodyLimit=false;$limit=32768;
    $curl=curl_init($scheme.'://'.$host.'/');$timeout=max(1,(int)ceil(min(4.0,$deadline-microtime(true))*1000));
    curl_setopt_array($curl,[CURLOPT_FOLLOWLOCATION=>false,CURLOPT_PROTOCOLS=>CURLPROTO_HTTP|CURLPROTO_HTTPS,CURLOPT_PROXY=>'',CURLOPT_IPRESOLVE=>$family===6?CURL_IPRESOLVE_V6:CURL_IPRESOLVE_V4,
        CURLOPT_CONNECTTIMEOUT_MS=>min(2000,$timeout),CURLOPT_TIMEOUT_MS=>$timeout,CURLOPT_SSL_VERIFYPEER=>true,CURLOPT_SSL_VERIFYHOST=>2,CURLOPT_USERAGENT=>'XcellHostIPv6Check/1.0',
        CURLOPT_RESOLVE=>[$host.':'.$port.':'.($family===6?'['.$ip.']':$ip)],CURLOPT_HTTPHEADER=>['Accept: text/html, */*;q=0.1'],
        CURLOPT_HEADERFUNCTION=>static function($h,string $line)use(&$headers,&$headerBytes):int{$headerBytes+=strlen($line);if($headerBytes>32768)return 0;if(str_contains($line,':')){[$key,$value]=explode(':',$line,2);$headers[strtolower(trim($key))]=substr(trim($value),0,2048);}return strlen($line);},
        CURLOPT_WRITEFUNCTION=>static function($h,string $chunk)use(&$bytes,&$bodyLimit,$limit):int{$bytes+=strlen($chunk);if($bytes>$limit){$bodyLimit=true;return 0;}return strlen($chunk);},
    ]);
    $ok=curl_exec($curl);$code=curl_errno($curl);$status=(int)curl_getinfo($curl,CURLINFO_RESPONSE_CODE);$peer=(string)curl_getinfo($curl,CURLINFO_PRIMARY_IP);curl_close($curl);
    $valid=$ok!==false||($bodyLimit&&$code===CURLE_WRITE_ERROR);
    if ($valid && (@inet_pton($peer)!==inet_pton($ip))) return xh_v6_unknown('The connection did not confirm the pinned address.',$ip);
    $detail=$valid?'HTTP '.$status.' returned over IPv'.$family.'.'.($status>=300&&$status<400?' Redirect destination not followed.':''):
        ($code===CURLE_PEER_FAILED_VERIFICATION?'TLS certificate validation failed on this runner.':($code===CURLE_OPERATION_TIMEDOUT?'The request timed out from this runner.':'The connection or TLS handshake could not complete from this runner.'));
    return ['state'=>$valid&&$status>=200&&$status<400?'PASS':'FAIL','detail'=>$detail,'address'=>$ip,'status'=>$status,'location'=>$headers['location']??'','durationMs'=>(int)round((microtime(true)-$start)*1000),
        'tls'=>$secure?($valid&&$status>0?'PASS':($code===CURLE_PEER_FAILED_VERIFICATION?'FAIL':'UNKNOWN')):'INFO'];
}

function xh_v6_dns_question(string $zone,int $id): string {
    xh_v6_domain($zone);$wire='';foreach(explode('.',$zone) as $label)$wire.=chr(strlen($label)).$label;
    return pack('nnnnnn',$id,0,1,0,0,0).$wire."\0".pack('nn',6,1);
}
function xh_v6_wire_name(string $packet,int &$offset): string {
    $at=$offset;$end=null;$labels=[];$seen=[];
    for($step=0;$step<128;$step++){
        if($at>=strlen($packet)||isset($seen[$at]))throw new RuntimeException('Malformed DNS name.');$seen[$at]=true;$length=ord($packet[$at]);
        if(($length&0xc0)===0xc0){if($at+1>=strlen($packet))throw new RuntimeException('Truncated DNS pointer.');$end??=$at+2;$at=(($length&0x3f)<<8)|ord($packet[$at+1]);continue;}
        if($length>63)throw new RuntimeException('Unsupported DNS label.');$at++;if($length===0){$offset=$end??$at;return implode('.',$labels);}
        if($at+$length>strlen($packet))throw new RuntimeException('Truncated DNS label.');$labels[]=substr($packet,$at,$length);$at+=$length;
    }
    throw new RuntimeException('DNS name exceeds parser bounds.');
}
function xh_v6_dns_reply(string $reply,string $question): array {
    if (strlen($reply)<12 || substr($reply,0,2)!==substr($question,0,2) || substr($reply,12,strlen($question)-12)!==substr($question,12)) return xh_v6_unknown('An identifiable response to the SOA question was not received.');
    $header=unpack('nid/nflags/nqd/nan/nns/nar',substr($reply,0,12));$flags=$header['flags'];
    if (!($flags&0x8000) || ($flags&0x7800)!==0 || $header['qd']!==1) return xh_v6_unknown('The packet was not the expected DNS response.');
    if ($flags&0x0200) return xh_v6_unknown('The UDP answer was truncated; DNS-over-TCP was not tested.');
    $rcode=$flags&15;
    if ($rcode!==0) return ['state'=>'FAIL','detail'=>'The IPv6 nameserver returned DNS response code '.$rcode.' for the zone SOA question.'];
    if (!($flags&0x0400) || $header['an']<1) return ['state'=>'FAIL','detail'=>'The IPv6 response did not carry an authoritative answer for the zone SOA question.'];
    try{
        $qOffset=12;$zone=xh_v6_wire_name($question,$qOffset);$offset=strlen($question);
        for($i=0;$i<min($header['an'],64);$i++){
            $owner=xh_v6_wire_name($reply,$offset);if($offset+10>strlen($reply))throw new RuntimeException('Truncated answer.');
            $rr=unpack('ntype/nclass/Nttl/nlength',substr($reply,$offset,10));$offset+=10;$end=$offset+$rr['length'];if($end>strlen($reply))throw new RuntimeException('Truncated record.');
            if($rr['type']===6&&$rr['class']===1&&strtolower($owner)===strtolower($zone)){
                $rdata=$offset;xh_v6_wire_name($reply,$rdata);xh_v6_wire_name($reply,$rdata);
                if($rdata+20!==$end)throw new RuntimeException('Malformed SOA data.');
                return ['state'=>'PASS','detail'=>'An authoritative SOA response was received directly over IPv6 UDP/53.'];
            }
            $offset=$end;
        }
        return xh_v6_unknown('The response did not contain a supported SOA answer for this zone.');
    }catch(Throwable $e){return xh_v6_unknown('The DNS response was malformed or exceeded the supported parser bounds.');}
}

function xh_v6_socket_probe(string $kind,string $host,string $ip,string $zone,float $deadline): array {
    if (!xh_robots_public_ip($ip) || !filter_var($ip,FILTER_VALIDATE_IP,FILTER_FLAG_IPV6)) throw new InvalidArgumentException('Use a public IPv6 probe address.');
    xh_v6_domain($host);
    if (microtime(true)>=$deadline) return xh_v6_unknown('The shared deadline was reached.',$ip);
    $timeout=min(1.5,max(.01,$deadline-microtime(true)));$port=$kind==='dns'?53:25;$transport=$kind==='dns'?'udp':'tcp';$start=microtime(true);
    $socket=@stream_socket_client($transport.'://['.$ip.']:'.$port,$errno,$error,$timeout);
    if (!$socket) return xh_v6_unknown('The IPv6 port '.$port.' connection could not be verified. Runner egress policy or the target may be responsible.',$ip);
    $timeout=min(1.5,max(.01,$deadline-microtime(true)));stream_set_timeout($socket,(int)$timeout,(int)(($timeout-floor($timeout))*1000000));
    if ($kind==='dns') {
        $question=xh_v6_dns_question($zone,random_int(0,65535));$written=@fwrite($socket,$question);$reply=$written===strlen($question)?@fread($socket,4096):false;
        $result=is_string($reply)&&$reply!==''?xh_v6_dns_reply($reply,$question):xh_v6_unknown('No IPv6 UDP/53 answer was received; DNS-over-TCP was not tested.');
    } else {
        // Read the initial greeting only. No EHLO, authentication or email is sent.
        $line=@fgets($socket,512);$line=is_string($line)?trim(preg_replace('/[\x00-\x1f\x7f]/',' ',$line)):'';
        $result=$line===''?xh_v6_unknown('No SMTP greeting was received within the read limit.'):['state'=>preg_match('/^220(?:[ -]|$)/',$line)?'PASS':'FAIL','detail'=>'Initial SMTP greeting: '.$line,'greeting'=>$line];
    }
    fclose($socket);return [...$result,'address'=>$ip,'durationMs'=>(int)round((microtime(true)-$start)*1000)];
}

function xh_v6_probe(string $kind,string $host,string $ip,string $zone,float $deadline): array {
    return match($kind){'https4'=>xh_v6_http($host,$ip,4,true,$deadline),'https6'=>xh_v6_http($host,$ip,6,true,$deadline),'http6'=>xh_v6_http($host,$ip,6,false,$deadline),default=>xh_v6_socket_probe($kind,$host,$ip,$zone,$deadline)};
}

function xh_v6_inspect(array $input,?callable $dnsProvider=null,?callable $probe=null,?callable $capability=null): array {
    if (!is_string($input['domain']??null) || !is_bool($input['includeMail']??true)) throw new InvalidArgumentException('Provide a public domain and a mail-check setting.');
    $domain=xh_v6_domain($input['domain']);$start=microtime(true);$deadline=$start+30;$dnsProvider??='xh_v6_dns';$probe??='xh_v6_probe';$capability??='xh_v6_capability';$cache=[];
    $dns=static function(string $name,int $type)use(&$cache,$dnsProvider,$deadline):array{$key=$type.':'.$name;if(!isset($cache[$key]))$cache[$key]=$dnsProvider($name,$type,$deadline);return $cache[$key];};
    $a=$dns($domain,1);$aaaa=$dns($domain,28);$ns=$dns($domain,2);$mx=($input['includeMail']??true)?$dns($domain,15):null;$zone=$domain;
    for($i=0;$i<3&&$ns['status']==='NOERROR'&&!array_filter($ns['records'],fn($r)=>$r['type']===2);$i++) {
        $labels=explode('.',$zone);if(count($labels)<=2)break;array_shift($labels);$zone=implode('.',$labels);$ns=$dns($zone,2);
    }
    $runner=$capability($deadline);$v4=xh_v6_address($a,4);$v6=xh_v6_address($aaaa,6);
    $notChecked='The runner’s IPv6 baseline could not be established; target connectivity is unverified.';
    $initial=static fn($r)=>xh_v6_unknown($r);
    $ipv4=$v4?$probe('https4',$domain,$v4,$zone,$deadline):$initial($a['status']==='ERROR'?'The IPv4 DNS lookup failed.':'No permitted public IPv4 address was returned.');
    $ipv6=!$v6?$initial($aaaa['status']==='ERROR'?'The IPv6 DNS lookup failed.':'No permitted public IPv6 address was returned.'):($runner['available']?$probe('https6',$domain,$v6,$zone,$deadline):$initial($notChecked));
    $http6=!$v6?$initial('No public IPv6 address to test.'):($runner['available']?$probe('http6',$domain,$v6,$zone,$deadline):$initial($notChecked));
    $parity=isset($ipv4['status'],$ipv6['status'])&&$ipv4['status']>0&&$ipv6['status']>0?['state'=>$ipv4['status']===$ipv6['status']&&($ipv4['location']??'')===($ipv6['location']??'')?'PASS':'FAIL','detail'=>'Initial HTTPS status and Location headers '.($ipv4['status']===$ipv6['status']&&($ipv4['location']??'')===($ipv6['location']??'')?'match.':'differ.').' Bodies, redirects and application behavior are not compared.']:$initial('Both HTTPS responses are required for the status/header comparison.');
    $tls=['state'=>$ipv6['tls']??'UNKNOWN','detail'=>($ipv6['tls']??'UNKNOWN')==='PASS'?'Certificate chain and hostname verification succeeded on the pinned IPv6 HTTPS connection.':(($ipv6['tls']??'UNKNOWN')==='FAIL'?'Certificate validation failed on this runner.':'No validated IPv6 TLS session was confirmed.')];
    $nameservers=[];$nsNames=[];
    foreach($ns['records'] as $r)if($r['type']===2)$nsNames[]=strtolower(rtrim($r['data'],'.'));
    foreach(array_slice(array_unique($nsNames),0,3) as $host) {
        try {xh_v6_domain($host);$answer=$dns($host,28);$ip=xh_v6_address($answer,6);$result=$ip?($runner['available']?$probe('dns',$host,$ip,$zone,$deadline):$initial($notChecked)):$initial($answer['status']==='ERROR'?'Nameserver address lookup failed.':'No permitted public IPv6 address was returned.');$nameservers[]=['host'=>$host,'dns'=>$answer,'address'=>$ip,'probe'=>$result];}
        catch(Throwable $e){$nameservers[]=['host'=>$host,'dns'=>null,'address'=>null,'probe'=>$initial('Unsupported nameserver hostname; not queried.')];}
    }
    $mail=['mode'=>$mx===null?'disabled':'unknown','hosts'=>[],'publishedCount'=>0];
    if($mx!==null&&$mx['status']==='NOERROR'){
        $targets=[];$nullMx=false;$invalidMx=false;
        foreach($mx['records'] as $r)if($r['type']===15){if(preg_match('/^(\d+)\s+(.+)$/',trim($r['data']),$match)){$host=strtolower(rtrim($match[2],'.'));if($match[2]==='.'){$nullMx=true;if((int)$match[1]!==0)$invalidMx=true;}else$targets[]=['host'=>$host,'priority'=>(int)$match[1]];}else$invalidMx=true;}
        $uniqueTargets=[];foreach($targets as$target){$key=$target['host'];if(!isset($uniqueTargets[$key])||$target['priority']<$uniqueTargets[$key]['priority'])$uniqueTargets[$key]=$target;}$targets=array_values($uniqueTargets);
        $mail['mode']=$nullMx?(!$targets&&!$invalidMx?'null':'invalid'):($invalidMx?'invalid':($targets?'explicit':'implicit'));
        if($mail['mode']==='implicit')$targets=[['host'=>$domain,'priority'=>0]];
        $mail['publishedCount']=count($targets);usort($targets,fn($a,$b)=>$a['priority']<=>$b['priority']);
        if(!in_array($mail['mode'],['null','invalid'],true))foreach(array_slice($targets,0,2)as$target){$host=$target['host'];
            try{xh_v6_domain($host);$answer=$dns($host,28);$ip=xh_v6_address($answer,6);$result=$ip?($runner['available']?$probe('smtp',$host,$ip,$zone,$deadline):$initial($notChecked)):$initial($answer['status']==='ERROR'?'Mail-host address lookup failed.':'No permitted public IPv6 address was returned.');$reverse=$initial('No public IPv6 address to reverse-resolve.');
                if($ip){$reverseName=implode('.',str_split(strrev(bin2hex(inet_pton($ip))))).'.ip6.arpa';$ptr=$dns($reverseName,12);$ptrHost=null;foreach($ptr['records']as$r)if($r['type']===12){$ptrHost=strtolower(rtrim($r['data'],'.'));break;}
                    $reverse=$ptr['status']==='ERROR'?$initial('The reverse DNS lookup failed.'):['state'=>'FAIL','detail'=>'No PTR hostname was returned.'];
                    if($ptrHost){try{xh_v6_domain($ptrHost);$forward=$dns($ptrHost,28);$match=false;foreach($forward['records']as$r)if($r['type']===28&&@inet_pton($r['data'])===inet_pton($ip))$match=true;$reverse=['state'=>$forward['status']==='ERROR'?'UNKNOWN':($match?'PASS':'FAIL'),'detail'=>$ptrHost.($forward['status']==='ERROR'?' could not be forward-checked.':($match?' resolves back to the original IPv6 address.':' did not return the original IPv6 address.')),'hostname'=>$ptrHost];}catch(Throwable $e){$reverse=$initial('The PTR target was not a supported hostname.');}}
                }
                $mail['hosts'][]=[...$target,'dns'=>$answer,'address'=>$ip,'probe'=>$result,'reverse'=>$reverse];
            }catch(Throwable $e){$mail['hosts'][]=[...$target,'dns'=>null,'address'=>null,'probe'=>$initial('Unsupported mail-host name; not queried.'),'reverse'=>$initial('Not checked.')];}
        }
    }
    return ['domain'=>$domain,'checkedAt'=>gmdate('c'),'durationMs'=>(int)round((microtime(true)-$start)*1000),'runner'=>$runner,'dns'=>['a'=>$a,'aaaa'=>$aaaa,'ns'=>$ns,'mx'=>$mx,'zone'=>$zone],'website'=>['ipv4'=>$ipv4,'ipv6'=>$ipv6,'http6'=>$http6,'parity'=>$parity,'tls'=>$tls], 'nameservers'=>$nameservers,'nameserverCount'=>count(array_unique($nsNames)),'mail'=>$mail,'queryCount'=>count($cache),
        'limits'=>['nameservers'=>3,'mailHosts'=>2,'addressesPerHost'=>1,'deadlineSeconds'=>30,'redirectsFollowed'=>0],
        'notes'=>['Requests originate from this testing server, not your browser network.','Only the first permitted public address per host is probed; other addresses may behave differently.','Website probes test the root path on fixed ports 80 and 443 without following redirects. Status/header parity is not full content parity.','DNS checks use IPv6 UDP/53 SOA queries; TCP DNS and DNSSEC validation are not tested.','SMTP checks read one greeting on port 25. No commands, authentication, TLS negotiation or email are sent. Runner policy can block port 25.','Limits and the shared deadline can leave checks unverified. This snapshot is not a whole-domain certification.']];
}
