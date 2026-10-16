<?php
declare(strict_types=1);

/** Public, read-only Strapi requests. Never forward cookies, tokens or arbitrary URLs. */
function xh_cms_url(array $query): string {
    $collections = ['blogs', 'case-studies', 'use-cases', 'data-sheets', 'cheat-sheets', 'whitepapers', 'guides', 'ebooks', 'checklists'];
    $collection = $query['collection'] ?? '';
    if (!is_string($collection) || !in_array($collection, $collections, true)) {
        throw new InvalidArgumentException('Unknown content collection');
    }
    $page = $query['pagination']['page'] ?? '1';
    if (!is_scalar($page) || !ctype_digit((string) $page) || (int) $page < 1 || (int) $page > 10000) {
        throw new InvalidArgumentException('Invalid page');
    }
    // Build parameters ourselves: clients cannot request drafts, filters or private fields.
    $params = [
        'sort' => $collection === 'case-studies' ? ['publishedAt:desc'] : ['date:desc', 'time:desc'],
        'populate' => $collection === 'case-studies' ? '*' : 'coverImage',
        'pagination' => ['page' => (int) $page, 'pageSize' => 100],
    ];
    return 'https://admin.xcellhost.cloud/api/' . $collection . '?' . http_build_query($params, '', '&', PHP_QUERY_RFC3986);
}

function xh_cms_fetch(string $url): array {
    if (!function_exists('curl_init')) throw new RuntimeException('PHP cURL is required');
    $curl = curl_init($url);
    curl_setopt_array($curl, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => false,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_SSL_VERIFYHOST => 2,
        CURLOPT_PROTOCOLS => CURLPROTO_HTTPS,
        CURLOPT_HTTPHEADER => ['Accept: application/json'],
    ]);
    $body = curl_exec($curl);
    $status = (int) curl_getinfo($curl, CURLINFO_HTTP_CODE);
    $failed = curl_errno($curl) !== 0;
    curl_close($curl);
    if ($failed || !is_string($body)) throw new RuntimeException('CMS connection failed');
    return ['status' => $status, 'body' => $body];
}

function xh_cms_handle(string $method, array $query, ?callable $transport = null): array {
    if ($method !== 'GET') return ['status' => 405, 'body' => ['error' => 'Only GET is supported']];
    try {
        $url = xh_cms_url($query);
    } catch (InvalidArgumentException $error) {
        return ['status' => 400, 'body' => ['error' => $error->getMessage()]];
    }
    try {
        $response = ($transport ?? 'xh_cms_fetch')($url);
        if ($response['status'] !== 200) {
            $status = in_array($response['status'], [401, 403, 404, 429], true) ? $response['status'] : 502;
            return ['status' => $status, 'body' => ['error' => 'CMS content unavailable']];
        }
        $data = json_decode($response['body'], true, 512, JSON_THROW_ON_ERROR);
        if (!is_array($data) || !isset($data['data']) || !is_array($data['data'])) {
            throw new RuntimeException('Unexpected CMS response');
        }
        return ['status' => 200, 'body' => $data];
    } catch (Throwable $error) {
        return ['status' => 502, 'body' => ['error' => 'CMS connection unavailable. Please retry shortly.']];
    }
}
