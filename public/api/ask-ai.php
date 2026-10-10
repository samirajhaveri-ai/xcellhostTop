<?php
declare(strict_types=1);
require_once __DIR__ . '/ai-support.php';
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function xh_reply(int $status, array $body): never {
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}
if (($_SERVER['REQUEST_METHOD'] ?? getenv('REQUEST_METHOD')) !== 'POST') {
    header('Allow: POST'); xh_reply(405, ['error' => 'Please send a question.']);
}
$origin = $_SERVER['HTTP_ORIGIN'] ?? getenv('HTTP_ORIGIN') ?: '';
$host = $_SERVER['HTTP_HOST'] ?? getenv('HTTP_HOST') ?: '';
if ($origin) {
    $originHost = parse_url($origin, PHP_URL_HOST);
    $port = parse_url($origin, PHP_URL_PORT);
    $originAuthority = $originHost . ($port ? ':' . $port : '');
    if (!$originHost || strcasecmp($originAuthority, $host) !== 0) xh_reply(403, ['error' => 'Please use the assistant on the XcellHost website.']);
}
$contentType = $_SERVER['CONTENT_TYPE'] ?? getenv('CONTENT_TYPE') ?: '';
if (stripos($contentType, 'application/json') !== 0) xh_reply(415, ['error' => 'Please send a valid question.']);
$input = file_get_contents(PHP_SAPI === 'cli' ? 'php://stdin' : 'php://input', false, null, 0, 65537);
if ($input === false || strlen($input) > 65536) xh_reply(413, ['error' => 'Your conversation is too long. Start a new chat.']);
try {
    $body = json_decode($input, true, 32, JSON_THROW_ON_ERROR);
    if (!is_array($body)) throw new InvalidArgumentException('Invalid request.');
    $messages = xh_validate_messages($body);
} catch (Throwable $error) { xh_reply(400, ['error' => 'Please send a valid question of up to 2,000 characters.']); }

// This optional file belongs outside the public document root. Never package it.
$configPath = dirname(__DIR__, 2) . '/xcellhost-ai-config.php';
$config = is_file($configPath) ? require $configPath : [];
$key = getenv('OPENAI_API_KEY') ?: ($config['apiKey'] ?? '');
$model = getenv('OPENAI_MODEL') ?: ($config['model'] ?? 'gpt-4.1-mini');
if (!is_string($key) || trim($key) === '') xh_reply(503, ['error' => 'Our AI assistant is not available yet. Please try again later or contact our team.']);
if (!function_exists('curl_init')) xh_reply(503, ['error' => 'The assistant is temporarily unavailable. Please try again later.']);
try {
    $ip = $_SERVER['REMOTE_ADDR'] ?? getenv('REMOTE_ADDR') ?: 'local';
    if (!xh_take_rate_limit($ip)) { header('Retry-After: 3600'); xh_reply(429, ['error' => 'The question limit has been reached. Please try again later.']); }
    $corpus = require __DIR__ . '/ai-knowledge.php';
    $chunks = xh_retrieve($corpus, $messages);
    $payload = xh_payload($messages, $chunks, $corpus['snapshot'], $model);
    $curl = curl_init('https://api.openai.com/v1/responses');
    curl_setopt_array($curl, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Authorization: Bearer ' . trim($key)],
        CURLOPT_POSTFIELDS => json_encode($payload), CURLOPT_CONNECTTIMEOUT => 8, CURLOPT_TIMEOUT => 35,
        CURLOPT_SSL_VERIFYPEER => true, CURLOPT_SSL_VERIFYHOST => 2]);
    $raw = curl_exec($curl); $status = curl_getinfo($curl, CURLINFO_HTTP_CODE); curl_close($curl);
    if (!is_string($raw) || $status < 200 || $status >= 300) xh_reply(502, ['error' => 'The assistant could not connect. Please try again shortly.']);
    $response = json_decode($raw, true, 64, JSON_THROW_ON_ERROR);
    $answer = xh_answer($response);
    if (!$answer) xh_reply(502, ['error' => 'The assistant could not answer. Please try again.']);
    $sources = [];
    foreach ($chunks as $chunk) $sources[$chunk['url']] = ['title' => $chunk['title'], 'url' => $chunk['url']];
    xh_reply(200, ['answer' => $answer, 'sources' => array_slice(array_values($sources), 0, 6)]);
} catch (Throwable $error) {
    // Provider errors, credentials and source excerpts must never reach the browser.
    xh_reply(503, ['error' => 'The assistant is temporarily unavailable. Please try again later.']);
}
