<?php
// Fixed public channel only: this endpoint never accepts arbitrary upstream URLs.
declare(strict_types=1);

function youtubeItems(array $node, array &$items): void {
    $video = $node['videoRenderer'] ?? null;
    $card = $node['lockupViewModel'] ?? null;
    $id = $video['videoId'] ?? (($card['contentType'] ?? '') === 'LOCKUP_CONTENT_TYPE_VIDEO' ? ($card['contentId'] ?? '') : '');
    if (preg_match('/^[A-Za-z0-9_-]{11}$/', $id)) {
        $title = $video['title']['runs'][0]['text'] ?? $card['metadata']['lockupMetadataViewModel']['title']['content'] ?? '';
        if ($title !== '') {
            $items[$id] = [
                'title' => $title, 'guid' => 'yt:video:' . $id,
                'link' => 'https://www.youtube.com/watch?v=' . $id,
                'thumbnail' => 'https://i.ytimg.com/vi/' . $id . '/hqdefault.jpg',
                'author' => 'XcellHost Cloud Services',
                // Channel cards expose relative ages, not exact publication dates.
                'pubDate' => '', 'description' => '', 'content' => '',
            ];
        }
        return;
    }
    foreach ($node as $child) {
        if (is_array($child)) youtubeItems($child, $items);
    }
}

function youtubeFeed(string $html): array {
    if (!preg_match('/var ytInitialData = (.*?);<\/script>/s', $html, $match)) {
        throw new RuntimeException('Channel data unavailable');
    }
    $data = json_decode($match[1], true, 512, JSON_THROW_ON_ERROR);
    if (($data['metadata']['channelMetadataRenderer']['externalId'] ?? '') !== 'UCChA2em9-NJFlof3MuOe8Qg') {
        throw new RuntimeException('Unexpected channel');
    }
    $items = [];
    // Only the selected channel tab; do not include recommendations elsewhere.
    foreach ($data['contents']['twoColumnBrowseResultsRenderer']['tabs'] ?? [] as $tab) {
        if ($tab['tabRenderer']['selected'] ?? false) youtubeItems($tab['tabRenderer']['content'] ?? [], $items);
    }
    if (!$items) throw new RuntimeException('No channel uploads returned');
    return ['status' => 'ok', 'updatedAt' => gmdate('c'), 'items' => array_values($items)];
}

// CLI fixture mode also exercises the exact production parser for verification.
if (PHP_SAPI === 'cli' && isset($argv[1])) {
    echo json_encode(youtubeFeed(file_get_contents($argv[1])), JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    exit;
}

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: public, max-age=300');
$cache = sys_get_temp_dir() . '/xcellhost-youtube-v1.json';
$saved = is_file($cache) ? json_decode((string) file_get_contents($cache), true) : null;
if ($saved && time() - filemtime($cache) < 900) {
    echo json_encode($saved);
    exit;
}
try {
    $curl = curl_init('https://www.youtube.com/@XcellHostCloudServices/videos?hl=en');
    curl_setopt_array($curl, [CURLOPT_RETURNTRANSFER => true, CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_CONNECTTIMEOUT => 5, CURLOPT_TIMEOUT => 15,
        CURLOPT_USERAGENT => 'Mozilla/5.0', CURLOPT_HTTPHEADER => ['Accept-Language: en-US,en;q=0.9']]);
    $html = curl_exec($curl);
    $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);
    if (!$html || $status !== 200) throw new RuntimeException('YouTube unavailable');
    $feed = youtubeFeed($html);
    @file_put_contents($cache, json_encode($feed), LOCK_EX);
    echo json_encode($feed);
} catch (Throwable $error) {
    // Preserve the last successful upload list through temporary upstream outages.
    $fallback = $saved ?: json_decode((string) @file_get_contents(__DIR__ . '/youtube-snapshot.json'), true);
    if ($fallback && !empty($fallback['items'])) {
        $fallback['stale'] = true;
        echo json_encode($fallback);
    } else {
        http_response_code(503);
        echo json_encode(['status' => 'error', 'items' => []]);
    }
}
