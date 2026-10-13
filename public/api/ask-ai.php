<?php
declare(strict_types=1);
// Compatibility with existing PHP hosting and /api/ai-assistant development clients.
// All credentials, retrieval, limits and OpenAI calls belong to the private Node service.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
function xh_reply(int $status, array $body): never {
    http_response_code($status);
    $output = PHP_SAPI === 'cli' && getenv('XCELLHOST_AI_PROXY') === '1'
        ? ['status' => $status, 'body' => $body] : $body;
    echo json_encode($output, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}
if (($_SERVER['REQUEST_METHOD'] ?? getenv('REQUEST_METHOD')) !== 'POST') {
    header('Allow: POST'); xh_reply(405, ['error' => 'Please send a question using POST.']);
}
$origin = $_SERVER['HTTP_ORIGIN'] ?? getenv('HTTP_ORIGIN') ?: '';
$host = $_SERVER['HTTP_HOST'] ?? getenv('HTTP_HOST') ?: '';
if ($origin) {
    $originHost = parse_url($origin, PHP_URL_HOST);
    $port = parse_url($origin, PHP_URL_PORT);
    if (!$originHost || strcasecmp($originHost . ($port ? ':' . $port : ''), $host) !== 0) {
        xh_reply(403, ['error' => 'Please use XcellGenie on the XcellHost website.']);
    }
}
$contentType = $_SERVER['CONTENT_TYPE'] ?? getenv('CONTENT_TYPE') ?: '';
if (stripos($contentType, 'application/json') !== 0) xh_reply(415, ['error' => 'Please send a JSON question.']);
$input = file_get_contents(PHP_SAPI === 'cli' ? 'php://stdin' : 'php://input', false, null, 0, 40961);
if ($input === false || strlen($input) > 40960) xh_reply(413, ['error' => 'Your conversation is too long. Please clear the chat.']);
if (!function_exists('curl_init')) xh_reply(503, ['error' => 'XcellGenie is temporarily unavailable. Please contact our team.']);
$headers = ['Content-Type: application/json'];
if ($origin) $headers[] = 'Origin: ' . $origin;
$ip = $_SERVER['REMOTE_ADDR'] ?? getenv('REMOTE_ADDR') ?: '';
if (filter_var($ip, FILTER_VALIDATE_IP)) $headers[] = 'X-Forwarded-For: ' . $ip;
$curl = curl_init('http://127.0.0.1:3001/api/ai/chat');
curl_setopt_array($curl, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => $headers, CURLOPT_POSTFIELDS => $input,
    CURLOPT_CONNECTTIMEOUT => 3, CURLOPT_TIMEOUT => 48]);
$raw = curl_exec($curl);
$status = (int)curl_getinfo($curl, CURLINFO_HTTP_CODE);
$retry = $status === 429;
curl_close($curl);
$body = is_string($raw) ? json_decode($raw, true) : null;
if (!$body || $status < 200 || $status > 599) xh_reply(503, ['error' => 'XcellGenie is temporarily unavailable. Please retry or contact our team.']);
if ($retry) header('Retry-After: 600');
xh_reply($status, $body);
