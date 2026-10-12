<?php
declare(strict_types=1);
require __DIR__ . '/../public/api/ai-support.php';
require __DIR__ . '/../public/api/ai-provider.php';
$configPath = __DIR__ . '/../xcellhost-ai-config.php';
$config = is_file($configPath) ? require $configPath : [];
$key = getenv('OPENAI_API_KEY') ?: ($config['apiKey'] ?? '');
$model = getenv('OPENAI_MODEL') ?: ($config['model'] ?? 'gpt-4.1-mini');
if (!$key) { echo json_encode(['configured' => false, 'error' => 'Missing private API key.']); exit(1); }
$corpus = require __DIR__ . '/../public/api/ai-knowledge.php';
$messages = [['role' => 'user', 'content' => 'Hi, what can XcellHost help me with?']];
$chunks = xh_retrieve($corpus, $messages);
$result = xh_call_provider($key, xh_payload($messages, $chunks, $corpus['snapshot'], $model));
$status = $result['providerStatus']; $errno = $result['errno'];
$answer = $result['ok'] ? xh_answer($result['response']) : '';
echo json_encode(['configured' => true, 'httpStatus' => $status, 'curlErrorNumber' => $errno,
    'providerCode' => $result['code'] ?? null, 'answer' => $answer], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . PHP_EOL;
exit($status >= 200 && $status < 300 && $answer !== '' ? 0 : 1);
