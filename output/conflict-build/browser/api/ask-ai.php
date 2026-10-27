<?php
declare(strict_types=1);
ini_set('display_errors', '0');
// Runs on PHP hosting and through Angular's local PHP proxy; no Node daemon needed.
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
try {
    require_once __DIR__ . '/ai-handler.php';
    $method = $_SERVER['REQUEST_METHOD'] ?? getenv('REQUEST_METHOD') ?: 'GET';
    $origin = $_SERVER['HTTP_ORIGIN'] ?? getenv('HTTP_ORIGIN') ?: '';
    $host = $_SERVER['HTTP_HOST'] ?? getenv('HTTP_HOST') ?: '';
    if ($origin) {
        $originHost = parse_url($origin, PHP_URL_HOST);
        $port = parse_url($origin, PHP_URL_PORT);
        if (!$originHost || strcasecmp($originHost . ($port ? ':' . $port : ''), $host) !== 0) {
            xh_reply(403, ['error' => 'Please use XcellGenie on the XcellHost website.', 'code' => 'origin_denied']);
        }
    }
    $config = xh_ai_config();
    if ($method === 'GET') {
        $ready = $config['apiKey'] !== '' && function_exists('curl_init') && function_exists('mb_substr') && is_file(__DIR__ . '/ai-knowledge.php');
        xh_reply($ready ? 200 : 503, ['status' => $ready ? 'ready' : 'setup_required']);
    }
    if ($method !== 'POST') { header('Allow: GET, POST'); xh_reply(405, ['error' => 'Please send a question using POST.']); }
    $type = $_SERVER['CONTENT_TYPE'] ?? getenv('CONTENT_TYPE') ?: '';
    if (stripos($type, 'application/json') !== 0) xh_reply(415, ['error' => 'Please send a JSON question.']);
    $raw = file_get_contents(PHP_SAPI === 'cli' ? 'php://stdin' : 'php://input', false, null, 0, 40961);
    if ($raw === false || strlen($raw) > 40960) xh_reply(413, ['error' => 'Your conversation is too long. Please clear the chat.']);
    $body = json_decode($raw, true);
    if (!is_array($body)) xh_reply(400, ['error' => 'Please send a valid JSON question.']);
    try { xh_validate_messages($body); }
    catch (InvalidArgumentException $error) { xh_reply(400, ['error' => $error->getMessage()]); }
    if (!function_exists('curl_init') || !function_exists('mb_substr')) xh_reply(503, ['error' => 'XcellGenie is temporarily unavailable. Please contact our team.', 'code' => 'runtime_unavailable']);
    if ($config['apiKey'] !== '') {
        $ip = $_SERVER['REMOTE_ADDR'] ?? getenv('REMOTE_ADDR') ?: 'local';
        if (!xh_take_rate_limit($ip)) { header('Retry-After: 3600'); xh_reply(429, ['error' => 'You have reached the chat limit. Please try again later.']); }
    }
    $reply = xh_ai_handle($body, $config);
    xh_reply($reply['status'], $reply['body']);
} catch (Throwable $error) {
    // Do not echo provider bodies, configuration paths, transcripts, or secrets.
    xh_reply(503, ['error' => 'XcellGenie is temporarily unavailable. Please retry or contact our team.', 'code' => 'unavailable']);
}
