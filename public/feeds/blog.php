<?php
declare(strict_types=1);
require_once __DIR__ . '/blog-rss-handler.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$response = xh_blog_rss_handle($method);
http_response_code($response['status']);
header('Content-Type: application/rss+xml; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Access-Control-Allow-Origin: *');
header('Cache-Control: ' . ($response['status'] === 200 ? 'public, max-age=300' : 'no-store'));
if ($response['status'] === 405) header('Allow: GET, HEAD');
if ($response['status'] === 503) header('Retry-After: 300');
if ($method !== 'HEAD') echo $response['body'];
if (PHP_SAPI === 'cli' && $response['status'] !== 200) exit(1);
