<?php
declare(strict_types=1);
require_once __DIR__.'/robots-fetch-lib.php';
ini_set('display_errors','0');
header('Content-Type: application/json; charset=utf-8'); header('Cache-Control: no-store'); header('X-Content-Type-Options: nosniff');
$cli=PHP_SAPI==='cli';
try {
    if (!$cli && ($_SERVER['REQUEST_METHOD'] ?? '')!=='POST') { http_response_code(405); header('Allow: POST'); throw new InvalidArgumentException('Submit a POST request.'); }
    $raw=file_get_contents($cli ? 'php://stdin' : 'php://input',false,null,0,4097);
    if ($raw===false || strlen($raw)>4096) throw new InvalidArgumentException('The request is too large.');
    $input=json_decode($raw,true,8,JSON_THROW_ON_ERROR); if (!is_array($input)) throw new InvalidArgumentException('Use a JSON request object.');
    if (!$cli) {
        $key=hash('sha256',(string)($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
        $store=@fopen(sys_get_temp_dir().'/xh-robots-'.$key.'.rate','c+');
        if ($store && flock($store,LOCK_EX)) { $data=json_decode(stream_get_contents($store) ?: '{}',true) ?: []; $now=time(); $data=($data['start'] ?? 0)>$now-60 ? $data : ['start'=>$now,'count'=>0]; $data['count']++; ftruncate($store,0); rewind($store); fwrite($store,json_encode($data)); flock($store,LOCK_UN); fclose($store); if ($data['count']>12) { http_response_code(429); throw new RuntimeException('Too many checks. Please wait a minute.'); } }
    }
    echo json_encode(xh_robots_inspect_request($input),JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_SUBSTITUTE | JSON_THROW_ON_ERROR);
} catch (Throwable $error) {
    if (http_response_code()===false || http_response_code()<400) http_response_code($error instanceof InvalidArgumentException || $error instanceof JsonException ? 400 : 502);
    echo json_encode(['error'=>$error instanceof InvalidArgumentException || $error instanceof RuntimeException ? $error->getMessage() : 'The robots.txt check could not complete.'],JSON_INVALID_UTF8_SUBSTITUTE);
}
