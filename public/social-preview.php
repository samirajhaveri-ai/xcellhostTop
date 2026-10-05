<?php
declare(strict_types=1);

$indexPath = __DIR__ . '/index.html';
$manifestPath = __DIR__ . '/assets/social-previews.json';

if (!is_file($indexPath)) {
    http_response_code(500);
    exit('Website build is incomplete.');
}

$html = (string) file_get_contents($indexPath);
$manifest = is_file($manifestPath)
    ? json_decode((string) file_get_contents($manifestPath), true)
    : [];
$requestPath = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$routeKey = '/' . trim(rawurldecode($requestPath), '/');
if ($routeKey === '/') {
    $routeKey = '/';
}
$preview = $manifest['routes'][$routeKey] ?? $manifest['default'] ?? [
    'title' => 'XcellHost Cloud Services',
    'description' => 'Managed cloud and cybersecurity services from XcellHost.',
    'image' => 'https://xcellhost.top/assets/images/xcellhost-logo.png',
];

$escape = static fn(string $value): string => htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$title = $escape((string) $preview['title']);
$description = $escape((string) $preview['description']);
$image = $escape((string) $preview['image']);
$canonical = $escape('https://xcellhost.top' . ($routeKey === '/' ? '/' : $routeKey . '/'));

$html = preg_replace('/<title>.*?<\/title>/is', '<title>' . $title . '</title>', $html, 1) ?? $html;
foreach (['description', 'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'] as $name) {
    $quoted = preg_quote($name, '/');
    $html = preg_replace('/<meta\b(?=[^>]*\bname=["\']' . $quoted . '["\'])[^>]*>\s*/i', '', $html) ?? $html;
}
foreach (['og:type', 'og:site_name', 'og:title', 'og:description', 'og:url', 'og:image', 'og:image:secure_url', 'og:image:width', 'og:image:height', 'og:image:alt'] as $property) {
    $quoted = preg_quote($property, '/');
    $html = preg_replace('/<meta\b(?=[^>]*\bproperty=["\']' . $quoted . '["\'])[^>]*>\s*/i', '', $html) ?? $html;
}
$html = preg_replace('/<link\b(?=[^>]*\brel=["\']canonical["\'])[^>]*>\s*/i', '', $html) ?? $html;

$meta = <<<HTML
  <meta name="description" content="{$description}">
  <link rel="canonical" href="{$canonical}">
  <meta property="og:type" content="product">
  <meta property="og:site_name" content="XcellHost">
  <meta property="og:title" content="{$title}">
  <meta property="og:description" content="{$description}">
  <meta property="og:url" content="{$canonical}">
  <meta property="og:image" content="{$image}">
  <meta property="og:image:secure_url" content="{$image}">
  <meta property="og:image:alt" content="{$title}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{$title}">
  <meta name="twitter:description" content="{$description}">
  <meta name="twitter:image" content="{$image}">
HTML;

$html = preg_replace('/<\/head>/i', $meta . "\n</head>", $html, 1) ?? $html;
header('Content-Type: text/html; charset=UTF-8');
header('Cache-Control: no-cache, no-store, must-revalidate');
echo $html;
