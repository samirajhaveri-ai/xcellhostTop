<?php
declare(strict_types=1);
require_once __DIR__ . '/../public/feeds/blog-rss-handler.php';

function rss_check(bool $ok, string $message): void {
    if (!$ok) throw new RuntimeException($message);
}
$records = [
    ['title' => 'Older post', 'slug' => 'older', 'publishedAt' => '2024-01-01T12:00:00Z'],
    ['title' => 'Cloud & security <tips>', 'slug' => 'newest', 'description' => '<p>Safe & useful</p>' . "\x01", 'publishedAt' => '2024-02-01T12:00:00Z', 'category' => 'Cloud & AI'],
    ['attributes' => ['title' => 'Unicode ₹ café', 'slug' => 'unicode', 'publishedAt' => '2024-01-10T12:00:00Z']],
    ['title' => 'Draft', 'slug' => 'draft', 'publishedAt' => null],
    ['title' => 'Scheduled', 'slug' => 'scheduled', 'publishedAt' => '2999-01-01T00:00:00Z'],
    ['title' => 'Broken date', 'slug' => 'broken', 'publishedAt' => 'not a date'],
    ['title' => 'No slug', 'publishedAt' => '2024-01-01T00:00:00Z'],
];
$calls = [];
$transport = static function (string $url) use ($records, &$calls): array {
    $calls[] = $url;
    return ['status' => 200, 'body' => json_encode(['data' => $records])];
};
$response = xh_blog_rss_handle('GET', $transport);
rss_check($response['status'] === 200, 'Feed must succeed');
$xml = simplexml_load_string($response['body']);
rss_check($xml !== false && (string) $xml['version'] === '2.0', 'Valid RSS 2.0 XML');
rss_check(count($xml->channel->item) === 3, 'Only published posts with valid URLs and dates');
rss_check((string) $xml->channel->item[0]->link === 'https://xcellhost.cloud/insights/newest', 'Newest first with absolute article links');
rss_check((string) $xml->channel->item[0]->description === 'Safe & useful', 'Escape markup, entities and XML control characters');
rss_check((string) $xml->channel->item[1]->title === 'Unicode ₹ café', 'Retain Unicode');
rss_check((string) $xml->channel->item[0]->guid === (string) $xml->channel->item[0]->link, 'Stable article GUID');
rss_check(strtotime((string) $xml->channel->item[0]->pubDate) !== false, 'Reader-compatible publication date');
rss_check(strpos($calls[0], 'https://admin.xcellhost.cloud/api/blogs?') === 0, 'Fixed published CMS source');
rss_check(xh_blog_rss_handle('HEAD', $transport)['status'] === 200, 'HEAD supported');
rss_check(xh_blog_rss_handle('POST', $transport)['status'] === 405, 'Read-only feed');
rss_check(count($calls) === 2, 'Invalid methods must not contact the CMS');
$failure = xh_blog_rss_handle('GET', static function (): array { return ['status' => 500, 'body' => 'unavailable']; });
rss_check($failure['status'] === 503, 'Upstream failures do not publish an empty successful feed');
$many = [];
for ($i = 0; $i < 60; $i++) $many[] = ['title' => 'Post ' . $i, 'slug' => 'post-' . $i, 'publishedAt' => '2024-01-01T12:00:00Z'];
$limited = simplexml_load_string(xh_blog_rss_xml($many));
rss_check(count($limited->channel->item) === 50, 'Limit feed size');
rss_check(count(simplexml_load_string(xh_blog_rss_xml([$records[0], $records[0]]))->channel->item) === 1, 'No duplicate posts');
echo "Blog RSS checks passed (15 assertions).\n";
