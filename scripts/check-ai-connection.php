<?php
declare(strict_types=1);
require __DIR__ . '/../public/api/ai-support.php';
$configPath = __DIR__ . '/../xcellhost-ai-config.php';
$config = is_file($configPath) ? require $configPath : [];
$key = getenv('OPENAI_API_KEY') ?: ($config['apiKey'] ?? '');
$model = getenv('OPENAI_MODEL') ?: ($config['model'] ?? 'gpt-4.1-mini');
if (!$key) { echo json_encode(['configured' => false, 'error' => 'Missing private API key.']); exit(1); }
$corpus = require __DIR__ . '/../public/api/ai-knowledge.php';
$messages = [['role' => 'user', 'content' => 'Hi, what can XcellHost help me with?']];
$chunks = xh_retrieve($corpus, $messages);
$curl = curl_init('https://api.openai.com/v1/responses');
curl_setopt_array($curl, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Authorization: Bearer ' . trim($key)],
    CURLOPT_POSTFIELDS => json_encode(xh_payload($messages, $chunks, $corpus['snapshot'], $model)),
    CURLOPT_CONNECTTIMEOUT => 8, CURLOPT_TIMEOUT => 35,
    CURLOPT_SSL_VERIFYPEER => true, CURLOPT_SSL_VERIFYHOST => 2]);
$raw = curl_exec($curl); $status = curl_getinfo($curl, CURLINFO_HTTP_CODE); $errno = curl_errno($curl);
$response = is_string($raw) ? json_decode($raw, true) : [];
$answer = is_array($response) ? xh_answer($response) : '';
echo json_encode(['configured' => true, 'httpStatus' => $status, 'curlErrorNumber' => $errno,
    'providerCode' => $response['error']['code'] ?? null, 'answer' => $answer], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . PHP_EOL;
exit($status >= 200 && $status < 300 && $answer !== '' ? 0 : 1);
