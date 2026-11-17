<?php
declare(strict_types=1);
require_once __DIR__.'/robots-fetch-lib.php';

function xh_og_resolve(string $value, string $base): string {
    $value=trim($value);
    if ($value==='') throw new InvalidArgumentException('An empty resource URL was supplied.');
    // Fragments do not change the resource requested by HTTP.
    $value=explode('#',$value,2)[0];
    if ($value==='') return xh_robots_url($base)['url'];
    return xh_robots_url(xh_robots_redirect($base,$value))['url'];
}

function xh_og_extract(string $html, string $finalUrl, string $contentType='text/html'): array {
    if (strlen($html)>1048576) throw new InvalidArgumentException('HTML exceeds the 1 MiB capture limit.');
    if (!class_exists('DOMDocument')) throw new RuntimeException('The fetch service needs the PHP DOM extension.');
    $warnings=[];
    if (!preg_match('//u',$html)) {
        preg_match('/charset\s*=\s*["\x27]?([a-z0-9_-]+)/i',$contentType.' '.substr($html,0,2048),$charset);
        $encoding=$charset[1] ?? 'Windows-1252';
        if (!function_exists('mb_convert_encoding')) throw new RuntimeException('This page is not UTF-8; the server needs mbstring to decode it.');
        try {$html=mb_convert_encoding($html,'UTF-8',$encoding);} catch (ValueError $e) {throw new RuntimeException('The page uses an unsupported character encoding.');}
        $warnings[]='The response was converted from '.$encoding.' to UTF-8 for analysis.';
    }
    $previous=libxml_use_internal_errors(true);
    $dom=new DOMDocument();
    try {
        // No script execution, DTD loading, entity substitution, or network access.
        $ok=$dom->loadHTML('<?xml encoding="UTF-8">'.$html,LIBXML_NONET | LIBXML_NOERROR | LIBXML_NOWARNING | LIBXML_COMPACT);
        if (!$ok) throw new RuntimeException('The response could not be parsed as HTML.');
    } finally {libxml_clear_errors();libxml_use_internal_errors($previous);}
    $xpath=new DOMXPath($dom); $tags=[]; $baseUrl=$finalUrl; $limited=false;
    $add=static function(string $key,string $value,string $source)use(&$tags,&$limited):void{
        if (count($tags)>=500) {$limited=true;return;}
        if (strlen($value)>8192) {$value=function_exists('mb_strcut')?mb_strcut($value,0,8192,'UTF-8'):substr($value,0,8192);$limited=true;}
        $tags[]=['key'=>$key,'value'=>trim($value),'source'=>$source];
    };
    $base=$xpath->query('//head/base[@href]')->item(0);
    if ($base instanceof DOMElement) {try {$baseUrl=xh_og_resolve($base->getAttribute('href'),$finalUrl);}catch(Throwable $e){$warnings[]='The HTML base URL was unsupported; relative metadata uses the final response URL.';}}
    foreach ($xpath->query('//head/title') as $node) $add('title',$node->textContent,'seo');
    foreach ($xpath->query('//head/meta') as $node) {
        if (!$node instanceof DOMElement) continue;
        $property=strtolower(trim($node->getAttribute('property')));$name=strtolower(trim($node->getAttribute('name')));
        if (str_starts_with($property,'og:')) $add($property,$node->getAttribute('content'),'og');
        elseif (str_starts_with($name,'og:')) $add($name,$node->getAttribute('content'),'og');
        elseif (str_starts_with($name,'twitter:')) $add($name,$node->getAttribute('content'),'twitter');
        elseif (str_starts_with($property,'twitter:')) $add($property,$node->getAttribute('content'),'twitter');
        elseif (in_array($name,['description','robots','googlebot','viewport','author','theme-color'],true)) $add($name,$node->getAttribute('content'),'seo');
        elseif ($node->hasAttribute('charset')) $add('charset',$node->getAttribute('charset'),'seo');
    }
    foreach ($xpath->query('//head/link[@rel]') as $node) {
        if ($node instanceof DOMElement && in_array('canonical',preg_split('/\s+/',strtolower(trim($node->getAttribute('rel')))),true)) $add('canonical',$node->getAttribute('href'),'seo');
    }
    if ($limited) $warnings[]='Metadata was limited to 500 tags and 8 KiB per value; review the original source for remaining content.';
    return ['tags'=>$tags,'baseUrl'=>$baseUrl,'warnings'=>$warnings];
}

function xh_og_image(string $url,float $deadline,?callable $resolve=null,?callable $transport=null): array {
    try {
        $reply=xh_robots_fetch($url,1572864,$deadline,$resolve,$transport);
        $result=['url'=>$url,'finalUrl'=>$reply['finalUrl'],'status'=>$reply['status']];
        if ($reply['status']!==200 || $reply['truncated']) return [...$result,'error'=>$reply['truncated']?'Image exceeds the 1.5 MiB preview limit.':'Image did not return HTTP 200.'];
        $size=@getimagesizefromstring($reply['text']); $mime=$size['mime'] ?? '';
        if (!$size || !in_array($mime,['image/jpeg','image/png','image/gif','image/webp','image/avif'],true) || $size[0]<1 || $size[1]<1 || $size[0]>12000 || $size[1]>12000 || $size[0]*$size[1]>40000000) return [...$result,'error'=>'A supported, bounded raster image could not be confirmed. SVG is not rendered.'];
        return [...$result,'width'=>$size[0],'height'=>$size[1],'mime'=>$mime,'dataUrl'=>'data:'.$mime.';base64,'.base64_encode($reply['text'])];
    } catch (Throwable $e) {return ['url'=>$url,'error'=>$e instanceof InvalidArgumentException?'Unsupported or non-public image URL.':'Image preview was unavailable or timed out.'];}
}

function xh_og_inspect(array $input,?callable $resolve=null,?callable $transport=null): array {
    if (!is_string($input['url'] ?? null) || !is_bool($input['fetchImages'] ?? false)) throw new InvalidArgumentException('Provide a page URL and an image-preview setting.');
    $target=xh_robots_url($input['url']);$deadline=microtime(true)+22;
    $transport ??= static fn($target,$ip,$limit,$deadline)=>xh_robots_curl($target,$ip,$limit,$deadline,'XcellHostLinkPreview/1.0');
    $reply=xh_robots_fetch($target['url'],1048576,$deadline,$resolve,$transport);
    $type=$reply['headers']['content-type'] ?? '';
    if ($type!=='' && !preg_match('~^(?:text/html|application/xhtml\+xml)(?:;|$)~i',$type)) throw new RuntimeException('The page did not return an HTML content type.');
    if ($type==='' && !preg_match('/<(?:!doctype|html|head|meta|title)(?:\s|>)/i',substr($reply['text'],0,4096))) throw new RuntimeException('An HTML document could not be confirmed.');
    $data=xh_og_extract($reply['text'],$reply['finalUrl'],$type);$images=[];
    if (($input['fetchImages'] ?? false) && $reply['status']>=200 && $reply['status']<300) {
        $first=[];foreach ($data['tags'] as $tag) if (!array_key_exists($tag['key'],$first)) $first[$tag['key']]=$tag['value'];
        foreach (array_unique([$first['og:image'] ?? $first['og:image:url'] ?? '',$first['twitter:image'] ?? $first['twitter:image:src'] ?? '']) as $raw) {
            if ($raw==='') continue;
            try {$url=xh_og_resolve($raw,$data['baseUrl']);$images[]=xh_og_image($url,$deadline,$resolve,$transport);}catch(Throwable $e){$images[]=['url'=>$raw,'error'=>'Unsupported image URL.'];}
        }
    }
    return [...$data,'requestedUrl'=>$target['url'],'finalUrl'=>$reply['finalUrl'],'status'=>$reply['status'],'contentType'=>$type,'bytes'=>strlen($reply['text']),'truncated'=>$reply['truncated'],'checkedAt'=>gmdate('c'),'redirects'=>$reply['redirects'],'images'=>$images];
}
