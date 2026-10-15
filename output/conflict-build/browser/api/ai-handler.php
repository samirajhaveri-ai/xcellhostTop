<?php
declare(strict_types=1);
require_once __DIR__ . '/ai-support.php';
require_once __DIR__ . '/ai-provider.php';

/** Secrets are loaded only on the server, outside the public document root. */
function xh_ai_config(?string $privateRoot = null): array {
    $privateRoot ??= dirname(__DIR__, 2);
    $configPath = $privateRoot . '/xcellhost-ai-config.php';
    $config = is_file($configPath) ? require $configPath : [];
    if (!is_array($config)) $config = [];
    $key = trim((string)(getenv('OPENAI_API_KEY') ?: ($config['apiKey'] ?? '')));
    $envPath = $privateRoot . '/server/.env';
    if ($key === '' && is_file($envPath)) {
        $contents = (string)file_get_contents($envPath);
        if (preg_match('/^\s*OPENAI_API_KEY\s*=\s*([^\r\n]*)/m', $contents, $match)) {
            $key = trim(trim($match[1]), "\"'");
        }
    }
    return ['apiKey' => $key, 'model' => trim((string)(getenv('OPENAI_MODEL') ?: ($config['model'] ?? 'gpt-5.4-mini')))];
}

/** Testable request handler; the provider is replaced only by tests. */
function xh_ai_handle(array $body, array $config, ?callable $transport = null): array {
    try { $messages = xh_validate_messages($body); }
    catch (InvalidArgumentException $error) {
        return ['status' => 400, 'body' => ['error' => $error->getMessage(), 'code' => 'invalid_request']];
    }
    if (empty($config['apiKey'])) {
        return ['status' => 503, 'body' => ['error' => 'XcellGenie is being set up. Please contact our team for help.', 'code' => 'not_configured']];
    }
    $corpus = require __DIR__ . '/ai-knowledge.php';
    $chunks = xh_retrieve($corpus, $messages);
    $payload = xh_payload($messages, $chunks, $corpus['snapshot'], $config['model']);
    $result = xh_call_provider($config['apiKey'], $payload, $transport);
    if (!$result['ok']) {
        return ['status' => $result['status'], 'body' => ['error' => $result['error'], 'code' => $result['code']]];
    }
    $response = $result['response'];
    $answer = xh_answer($response);
    if ($answer === '' || ($response['status'] ?? '') !== 'completed') {
        return ['status' => 502, 'body' => ['error' => 'XcellGenie could not complete that answer. Please retry.', 'code' => 'empty_answer']];
    }
    $sources = [];
    foreach ($chunks as $chunk) {
        $url = $chunk['url'];
        if (!preg_match('#^/(?!/)[a-zA-Z0-9/_.-]*$#', $url) || isset($sources[$url])) continue;
        $sources[$url] = ['title' => $chunk['title'], 'url' => $url];
        if (count($sources) === 6) break;
    }
    return ['status' => 200, 'body' => ['answer' => mb_substr($answer, 0, 10000), 'sources' => array_values($sources)]];
}
