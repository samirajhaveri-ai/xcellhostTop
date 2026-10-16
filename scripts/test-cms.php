<?php
declare(strict_types=1);
require __DIR__ . '/../public/api/cms-handler.php';
function check_cms(bool $ok, string $message): void {
    if (!$ok) throw new RuntimeException($message);
    echo 'PASS: ' . $message . PHP_EOL;
}
$called = 0;
$transport = function (string $url) use (&$called): array {
    $called++;
    check_cms(str_starts_with($url, 'https://admin.xcellhost.cloud/api/blogs?'), 'uses fixed HTTPS Strapi origin');
    parse_str(parse_url($url, PHP_URL_QUERY), $params);
    check_cms($params['pagination'] === ['page' => '2', 'pageSize' => '100'], 'preserves pagination with a bounded page size');
    check_cms(!isset($params['status']) && !isset($params['filters']), 'does not forward draft or filter overrides');
    return ['status' => 200, 'body' => '{"data":[{"slug":"cloud-story"}],"meta":{"pagination":{"page":2,"pageCount":2}}}'];
};
$reply = xh_cms_handle('GET', ['collection' => 'blogs', 'pagination' => ['page' => '2'], 'status' => 'draft', 'filters' => ['secret' => 'x']], $transport);
check_cms($reply['status'] === 200 && $reply['body']['data'][0]['slug'] === 'cloud-story', 'returns public articles and pagination');
foreach (['https://evil.example', '../admin', 'users', ['blogs']] as $collection) {
    check_cms(xh_cms_handle('GET', ['collection' => $collection], $transport)['status'] === 400, 'rejects unapproved upstream paths');
}
check_cms(xh_cms_handle('POST', ['collection' => 'blogs'], $transport)['status'] === 405 && $called === 1, 'rejects writes before transport');
check_cms(xh_cms_handle('GET', ['collection' => 'blogs', 'pagination' => ['page' => '-1']], $transport)['status'] === 400, 'rejects invalid pagination');
foreach ([403, 404, 429, 500] as $status) {
    $reply = xh_cms_handle('GET', ['collection' => 'case-studies'], fn() => ['status' => $status, 'body' => 'private upstream error']);
    check_cms($reply['status'] === ($status === 500 ? 502 : $status), 'retains actionable upstream status ' . $status);
    check_cms(!str_contains(json_encode($reply), 'private upstream'), 'hides upstream error details');
}
check_cms(xh_cms_handle('GET', ['collection' => 'blogs'], fn() => ['status' => 200, 'body' => '<html>SPA fallback</html>'])['status'] === 502, 'rejects HTML responses');
check_cms(xh_cms_handle('GET', ['collection' => 'blogs'], function () { throw new RuntimeException('TLS failed'); })['status'] === 502, 'reports connection errors without returning an empty success');

if (($argv[1] ?? '') === '--live') {
    foreach (['blogs', 'case-studies', 'use-cases'] as $collection) {
        $reply = xh_cms_handle('GET', ['collection' => $collection]);
        echo json_encode(['collection' => $collection, 'status' => $reply['status'], 'count' => count($reply['body']['data'] ?? []), 'error' => $reply['body']['error'] ?? null]) . PHP_EOL;
    }
}