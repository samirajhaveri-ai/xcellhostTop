<?php
declare(strict_types=1);

function xh_robots_public_ip(string $ip): bool {
    if (!filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) return false;
    $packed = inet_pton($ip);
    if ($packed === false) return false;
    if (strlen($packed) === 16) {
        // Only global unicast; exclude transition and documentation allocations.
        $hex = bin2hex($packed);
        return (ord($packed[0]) & 0xe0) === 0x20 && !str_starts_with($hex, '2002') && !str_starts_with($hex, '20010db8') && !str_starts_with($hex, '200100');
    }
    $n = unpack('N', $packed)[1];
    foreach (['0.0.0.0/8','10.0.0.0/8','100.64.0.0/10','127.0.0.0/8','169.254.0.0/16','172.16.0.0/12','192.0.0.0/24','192.0.2.0/24','192.88.99.0/24','192.168.0.0/16','198.18.0.0/15','198.51.100.0/24','203.0.113.0/24','224.0.0.0/4','240.0.0.0/4'] as $cidr) {
        [$base,$bits] = explode('/', $cidr); $mask = (0xffffffff << (32 - (int)$bits)) & 0xffffffff;
        if (($n & $mask) === (unpack('N', inet_pton($base))[1] & $mask)) return false;
    }
    return true;
}

function xh_robots_url(string $input): array {
    if (strlen($input) > 2048 || preg_match('/[\x00-\x20\x7f\\\\]/', $input)) throw new InvalidArgumentException('Use an HTTP(S) public website URL without spaces or backslashes.');
    $parts = parse_url($input);
    if (!is_array($parts) || !in_array(strtolower($parts['scheme'] ?? ''), ['http','https'], true) || isset($parts['user']) || isset($parts['pass'])) throw new InvalidArgumentException('Use HTTP(S) without credentials.');
    $host = strtolower($parts['host'] ?? ''); $scheme = strtolower($parts['scheme']); $port = $parts['port'] ?? ($scheme === 'https' ? 443 : 80);
    if (!in_array($port, [80,443], true) || !str_contains($host, '.') || filter_var($host, FILTER_VALIDATE_IP) || !preg_match('/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/', $host) || preg_match('/\.(?:localhost|local|internal|test|invalid)$/', $host)) throw new InvalidArgumentException('Use a public DNS hostname on port 80 or 443.');
    $origin = $scheme . '://' . $host . (($scheme === 'https' && $port === 443) || ($scheme === 'http' && $port === 80) ? '' : ':' . $port);
    return ['host'=>$host,'scheme'=>$scheme,'port'=>$port,'origin'=>$origin,'url'=>$origin . ($parts['path'] ?? '/') . (isset($parts['query']) ? '?' . $parts['query'] : '')];
}

function xh_robots_resolve(string $host): array {
    $records = @dns_get_record($host, DNS_A | DNS_AAAA); $ips = [];
    foreach ($records ?: [] as $record) { $ip = $record['ip'] ?? $record['ipv6'] ?? null; if ($ip !== null) $ips[] = $ip; }
    return array_values(array_unique($ips));
}

function xh_robots_redirect(string $base, string $location): string {
    if ($location === '' || strlen($location) > 2048 || preg_match('/[\x00-\x20\x7f\\\\]/', $location)) throw new RuntimeException('The site returned an unsupported redirect URL.');
    $p = xh_robots_url($base);
    if (preg_match('/^[a-z][a-z0-9+.-]*:/i', $location)) return $location;
    if (str_starts_with($location, '//')) return $p['scheme'] . ':' . $location;
    if ($location[0] === '#') throw new RuntimeException('The site returned a fragment-only redirect.');
    if ($location[0] === '?') return $p['origin'] . (parse_url($base, PHP_URL_PATH) ?: '/') . $location;
    if ($location[0] !== '/') $location = substr((string)parse_url($base, PHP_URL_PATH), 0, strrpos((string)parse_url($base, PHP_URL_PATH), '/') + 1) . $location;
    $parts = explode('?', $location, 2); $out = [];
    foreach (explode('/', $parts[0]) as $segment) { if ($segment === '..') array_pop($out); elseif ($segment !== '.') $out[] = $segment; }
    return $p['origin'] . '/' . ltrim(implode('/', $out), '/') . (isset($parts[1]) ? '?' . $parts[1] : '');
}

function xh_robots_curl(array $target, string $ip, int $limit, float $deadline, string $userAgent='XcellHostRobotsTester/1.0'): array {
    if (!function_exists('curl_init')) throw new RuntimeException('The server needs the PHP cURL extension to fetch robots.txt.');
    $remaining = max(1, (int)ceil(($deadline - microtime(true)) * 1000));
    $body = ''; $headers = []; $headerBytes = 0; $truncated = false;
    $curl = curl_init($target['url']);
    curl_setopt_array($curl, [CURLOPT_FOLLOWLOCATION=>false, CURLOPT_PROTOCOLS=>CURLPROTO_HTTP | CURLPROTO_HTTPS,
        CURLOPT_PROXY=>'', CURLOPT_SSL_VERIFYPEER=>true, CURLOPT_SSL_VERIFYHOST=>2,
        CURLOPT_CONNECTTIMEOUT_MS=>min(4000,$remaining), CURLOPT_TIMEOUT_MS=>min(7000,$remaining),
        CURLOPT_USERAGENT=>$userAgent, CURLOPT_HTTPHEADER=>['Accept: text/html, text/plain, application/xml, text/xml;q=0.8, */*;q=0.1'],
        CURLOPT_ENCODING=>'', CURLOPT_RESOLVE=>[$target['host'] . ':' . $target['port'] . ':' . (str_contains($ip,':') ? '['.$ip.']' : $ip)],
        CURLOPT_HEADERFUNCTION=>static function($handle, string $line) use (&$headers,&$headerBytes): int {
            $headerBytes += strlen($line); if ($headerBytes > 32768) return 0;
            if (str_contains($line,':')) { [$key,$value]=explode(':',$line,2); $headers[strtolower(trim($key))]=trim($value); } return strlen($line);
        },
        CURLOPT_WRITEFUNCTION=>static function($handle, string $chunk) use (&$body,&$truncated,$limit): int {
            $room = $limit - strlen($body); $body .= substr($chunk,0,max(0,$room));
            if (strlen($chunk) > $room) { $truncated=true; return 0; } return strlen($chunk);
        },
    ]);
    $ok = curl_exec($curl); $status = (int)curl_getinfo($curl, CURLINFO_RESPONSE_CODE); $error = curl_errno($curl); curl_close($curl);
    if ($ok === false && !($truncated && $error === CURLE_WRITE_ERROR)) throw new RuntimeException('The public site could not be fetched (network, TLS or response limit).');
    if ($status < 100) throw new RuntimeException('The public site did not return an HTTP response.');
    return ['status'=>$status,'headers'=>$headers,'text'=>$body,'truncated'=>$truncated];
}

function xh_robots_fetch(string $url, int $limit, float $deadline, ?callable $resolve=null, ?callable $transport=null): array {
    $resolve ??= 'xh_robots_resolve'; $transport ??= 'xh_robots_curl'; $redirects=[]; $seen=[];
    for ($hop=0; $hop<=5; $hop++) {
        if (microtime(true) >= $deadline) throw new RuntimeException('The fetch deadline was reached.');
        $target=xh_robots_url($url); if (isset($seen[$target['url']])) throw new RuntimeException('The site returned a redirect loop.'); $seen[$target['url']]=true;
        $ips=$resolve($target['host']); if (!$ips) throw new RuntimeException('The public hostname did not resolve.');
        foreach ($ips as $ip) if (!xh_robots_public_ip($ip)) throw new InvalidArgumentException('The hostname resolves to a private, local or reserved network.');
        $reply=$transport($target,$ips[0],$limit,$deadline);
        if (in_array($reply['status'],[301,302,303,307,308],true)) {
            if ($hop===5) throw new RuntimeException('The site exceeded five redirects.');
            $redirects[]=['url'=>$target['url'],'status'=>$reply['status']]; $url=xh_robots_redirect($target['url'],$reply['headers']['location'] ?? ''); continue;
        }
        return [...$reply,'finalUrl'=>$target['url'],'redirects'=>$redirects];
    }
    throw new RuntimeException('The site exceeded the redirect limit.');
}

function xh_robots_inspect_request(array $input, ?callable $resolve=null, ?callable $transport=null): array {
    if (!is_string($input['url'] ?? null) || !is_bool($input['checkSitemaps'] ?? false)) throw new InvalidArgumentException('Provide a website URL and a sitemap-check setting.');
    $origin=xh_robots_url($input['url']); $url=$origin['origin'].'/robots.txt'; $deadline=microtime(true)+22;
    $reply=xh_robots_fetch($url,512000,$deadline,$resolve,$transport); $sitemaps=[];
    if (($input['checkSitemaps'] ?? false) && $reply['status']>=200 && $reply['status']<300) {
        preg_match_all('/^\s*sitemap\s*:\s*([^#\r\n]+?)[ \t]*(?:#.*)?$/mi',$reply['text'],$matches);
        foreach (array_slice(array_unique(array_map('trim',$matches[1] ?? [])),0,5) as $sitemap) {
            try {
                $probe=xh_robots_fetch($sitemap,32768,$deadline,$resolve,$transport);
                $sitemaps[]=['url'=>$sitemap,'finalUrl'=>$probe['finalUrl'],'status'=>$probe['status'],'xmlPrefix'=>(bool)preg_match('/<(?:[a-z0-9_-]+:)?(?:urlset|sitemapindex)(?:\s|>)/i',substr($probe['text'],0,8192))];
            } catch (Throwable $error) { $sitemaps[]=['url'=>$sitemap,'error'=>$error instanceof InvalidArgumentException ? 'Unsupported or non-public sitemap URL.' : 'Sitemap probe unavailable or timed out.']; }
        }
    }
    return ['url'=>$url,'finalUrl'=>$reply['finalUrl'],'status'=>$reply['status'],'contentType'=>$reply['headers']['content-type'] ?? '', 'text'=>$reply['text'],'truncated'=>$reply['truncated'],'checkedAt'=>gmdate('c'),'redirects'=>$reply['redirects'],'sitemaps'=>$sitemaps];
}
