<?php
declare(strict_types=1);

/** Keep the retry budget below the local proxy's 40-second timeout. */
function xh_provider_request(string $key, array $payload): array {
    $curl = curl_init('https://api.openai.com/v1/responses');
    curl_setopt_array($curl, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Authorization: Bearer ' . trim($key)],
        CURLOPT_POSTFIELDS => json_encode($payload, JSON_THROW_ON_ERROR),
        CURLOPT_CONNECTTIMEOUT => 6, CURLOPT_TIMEOUT => 16,
        CURLOPT_SSL_VERIFYPEER => true, CURLOPT_SSL_VERIFYHOST => 2]);
    try {
        $raw = curl_exec($curl);
        return ['raw' => $raw, 'status' => (int)curl_getinfo($curl, CURLINFO_HTTP_CODE), 'errno' => curl_errno($curl)];
    } finally { curl_close($curl); }
}

/** Only transport metadata is retained; provider error text may contain secrets. */
function xh_call_provider(string $key, array $payload, ?callable $transport = null, ?callable $pause = null): array {
    $transport ??= 'xh_provider_request';
    $pause ??= fn() => usleep(300000);
    for ($attempt = 1; $attempt <= 2; $attempt++) {
        $result = $transport($key, $payload);
        $status = $result['status']; $errno = $result['errno'];
        $body = is_string($result['raw']) ? json_decode($result['raw'], true) : null;
        if ($errno === 0 && $status >= 200 && $status < 300 && is_array($body)) {
            return ['ok' => true, 'response' => $body, 'providerStatus' => $status, 'errno' => 0];
        }
        $providerCode = is_array($body) ? ($body['error']['code'] ?? '') : '';
        $transient = in_array($errno, [6, 7, 28, 52, 55, 56], true)
            || in_array($status, [500, 502, 503, 504], true)
            || ($status === 429 && !in_array($providerCode, ['insufficient_quota', 'billing_hard_limit_reached'], true));
        if ($transient && $attempt === 1) { $pause(); continue; }
        if ($status === 401 || $status === 403) {
            $code = 'provider_auth'; $httpStatus = 503;
            $error = 'The assistant needs its connection settings updated. Please contact our team.';
        } elseif ($status === 429 && in_array($providerCode, ['insufficient_quota', 'billing_hard_limit_reached'], true)) {
            $code = 'provider_quota'; $httpStatus = 503;
            $error = 'AI answers are temporarily unavailable. Please contact our team or try again later.';
        } elseif ($status === 429) {
            $code = 'provider_busy'; $httpStatus = 429;
            $error = 'The assistant is busy. Please try again in a moment.';
        } else {
            $code = $errno ? 'provider_network' : 'provider_unavailable'; $httpStatus = 502;
            $error = 'Unable to reach the assistant right now. Please try again shortly.';
        }
        return ['ok' => false, 'status' => $httpStatus, 'error' => $error, 'code' => $code,
            'providerStatus' => $status, 'errno' => $errno];
    }
    throw new RuntimeException('Provider retry budget exhausted');
}
