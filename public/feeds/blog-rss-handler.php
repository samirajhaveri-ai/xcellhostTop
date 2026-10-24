<?php
declare(strict_types=1);
require_once __DIR__ . '/../api/cms-handler.php';

function xh_rss_text(string $value): string {
    $value = html_entity_decode(strip_tags($value), ENT_QUOTES | ENT_HTML5, 'UTF-8');
    // XML 1.0 does not permit these control characters, even when escaped.
    return preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F]/', '', $value) ?? '';
}

function xh_rss_escape(string $value): string {
    return htmlspecialchars($value, ENT_XML1 | ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function xh_blog_rss_xml(array $records): string {
    $site = 'https://xcellhost.cloud';
    $items = [];
    foreach ($records as $record) {
        if (!is_array($record)) continue;
        $post = $record['attributes'] ?? $record;
        if (!is_array($post)) continue;
        $title = trim((string) ($post['title'] ?? ''));
        $slug = trim((string) ($post['slug'] ?? ''));
        $published = $post['publishedAt'] ?? null;
        if ($title === '' || $slug === '' || !is_string($published) || $published === '') continue;
        try {
            $date = new DateTimeImmutable($published, new DateTimeZone('UTC'));
        } catch (Exception $error) { continue; }
        if ($date->getTimestamp() > time()) continue;
        $url = $site . '/insights/' . rawurlencode($slug);
        $description = xh_rss_text((string) ($post['description'] ?? $post['content'] ?? ''));
        if (function_exists('mb_substr')) $description = mb_substr($description, 0, 1000, 'UTF-8');
        else $description = substr($description, 0, 1000);
        $items[$url] = [
            'title' => xh_rss_text($title), 'url' => $url, 'description' => $description,
            'date' => $date->getTimestamp(), 'category' => xh_rss_text((string) ($post['category'] ?? '')),
        ];
    }
    usort($items, static function (array $a, array $b): int { return $b['date'] <=> $a['date']; });
    $items = array_slice($items, 0, 50);
    $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
    $xml .= '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>';
    $xml .= '<title>XcellHost Blog</title><link>' . $site . '/insights</link>';
    $xml .= '<description>Cloud, cybersecurity, AI and digital transformation insights from XcellHost.</description>';
    $xml .= '<language>en-in</language><ttl>30</ttl>';
    $xml .= '<atom:link href="' . $site . '/feeds/blog.php" rel="self" type="application/rss+xml" />';
    if ($items) $xml .= '<lastBuildDate>' . gmdate(DATE_RSS, $items[0]['date']) . '</lastBuildDate>';
    foreach ($items as $item) {
        $url = xh_rss_escape($item['url']);
        $xml .= '<item><title>' . xh_rss_escape($item['title']) . '</title><link>' . $url . '</link>';
        $xml .= '<guid isPermaLink="true">' . $url . '</guid><pubDate>' . gmdate(DATE_RSS, $item['date']) . '</pubDate>';
        $xml .= '<description>' . xh_rss_escape($item['description']) . '</description>';
        if ($item['category'] !== '') $xml .= '<category>' . xh_rss_escape($item['category']) . '</category>';
        $xml .= '</item>';
    }
    return $xml . '</channel></rss>';
}

function xh_blog_rss_handle(string $method, ?callable $transport = null): array {
    if (!in_array($method, ['GET', 'HEAD'], true)) {
        return ['status' => 405, 'body' => '<error>Only GET and HEAD are supported.</error>'];
    }
    $response = xh_cms_handle('GET', ['collection' => 'blogs'], $transport);
    if ($response['status'] !== 200) {
        return ['status' => 503, 'body' => '<error>The blog feed is temporarily unavailable. Please retry shortly.</error>'];
    }
    return ['status' => 200, 'body' => xh_blog_rss_xml($response['body']['data'])];
}
