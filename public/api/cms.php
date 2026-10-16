<?php
declare(strict_types=1);
require_once __DIR__ . '/cms-handler.php';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
$response = xh_cms_handle($_SERVER['REQUEST_METHOD'] ?? 'GET', $_GET);
if ($response['status'] === 405) header('Allow: GET');
http_response_code($response['status']);
echo json_encode($response['body'], JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_SUBSTITUTE);
