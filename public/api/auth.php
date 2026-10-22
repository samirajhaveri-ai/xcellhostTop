<?php
declare(strict_types=1);

ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function xh_auth_reply(int $status, array $body): never {
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function xh_auth_private_dir(): string {
    $configured = trim((string) getenv('XCELLHOST_AUTH_STORAGE_DIR'));
    if ($configured !== '') return rtrim($configured, DIRECTORY_SEPARATOR);

    $documentRoot = realpath((string) ($_SERVER['DOCUMENT_ROOT'] ?? ''));
    if ($documentRoot === false) {
        throw new RuntimeException('Authentication storage is not configured.');
    }
    return dirname($documentRoot) . DIRECTORY_SEPARATOR . 'private';
}

function xh_auth_open_store(string $name) {
    $directory = xh_auth_private_dir();
    if (!is_dir($directory) && !mkdir($directory, 0700, true) && !is_dir($directory)) {
        throw new RuntimeException('Authentication storage is unavailable.');
    }
    $path = $directory . DIRECTORY_SEPARATOR . $name;
    $handle = fopen($path, 'c+');
    if ($handle === false) throw new RuntimeException('Authentication storage is unavailable.');
    @chmod($path, 0600);
    return $handle;
}

function xh_auth_read_json($handle): array {
    rewind($handle);
    $raw = stream_get_contents($handle);
    if ($raw === false || trim($raw) === '') return [];
    $value = json_decode($raw, true);
    return is_array($value) ? $value : [];
}

function xh_auth_write_json($handle, array $value): void {
    $encoded = json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    if ($encoded === false) throw new RuntimeException('Unable to save account.');
    rewind($handle);
    if (!ftruncate($handle, 0) || fwrite($handle, $encoded) === false || !fflush($handle)) {
        throw new RuntimeException('Unable to save account.');
    }
}

function xh_auth_text(mixed $value, int $maximum): string {
    $text = trim(is_string($value) ? $value : '');
    $text = preg_replace('/[\x00-\x1F\x7F]/u', '', $text) ?? '';
    return strlen($text) <= $maximum ? $text : '';
}

function xh_auth_body(): array {
    $contentType = (string) ($_SERVER['CONTENT_TYPE'] ?? '');
    if (stripos($contentType, 'application/json') !== 0) {
        xh_auth_reply(415, ['message' => 'Please send JSON account details.']);
    }
    $raw = file_get_contents('php://input', false, null, 0, 16385);
    if ($raw === false || strlen($raw) > 16384) {
        xh_auth_reply(413, ['message' => 'The account request is too large.']);
    }
    $body = json_decode($raw, true);
    if (!is_array($body)) xh_auth_reply(400, ['message' => 'Invalid account request.']);
    return $body;
}

function xh_auth_check_origin(): void {
    $origin = (string) ($_SERVER['HTTP_ORIGIN'] ?? '');
    $host = (string) ($_SERVER['HTTP_HOST'] ?? '');
    if ($origin === '' || $host === '') return;
    $originHost = parse_url($origin, PHP_URL_HOST);
    $originPort = parse_url($origin, PHP_URL_PORT);
    $originAuthority = $originHost ? $originHost . ($originPort ? ':' . $originPort : '') : '';
    if ($originAuthority === '' || strcasecmp($originAuthority, $host) !== 0) {
        xh_auth_reply(403, ['message' => 'Please sign in on the XcellHost website.']);
    }
}

function xh_auth_rate_limit(string $ip): bool {
    $handle = xh_auth_open_store('xcellhost-auth-rate-limits.json');
    if (!flock($handle, LOCK_EX)) { fclose($handle); return false; }
    try {
        $now = time();
        $cutoff = $now - 900;
        $limits = xh_auth_read_json($handle);
        foreach ($limits as $key => $attempts) {
            if (!is_array($attempts)) { unset($limits[$key]); continue; }
            $limits[$key] = array_values(array_filter($attempts, fn($time) => is_int($time) && $time >= $cutoff));
            if ($limits[$key] === []) unset($limits[$key]);
        }
        $key = hash('sha256', $ip);
        $attempts = $limits[$key] ?? [];
        if (count($attempts) >= 10) return false;
        $attempts[] = $now;
        $limits[$key] = $attempts;
        xh_auth_write_json($handle, $limits);
        return true;
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }
}

function xh_auth_start_session(bool $remember): void {
    if (session_status() === PHP_SESSION_ACTIVE) return;
    $secure = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ||
        (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');
    session_set_cookie_params([
        'lifetime' => $remember ? 2592000 : 0,
        'path' => '/',
        'secure' => $secure,
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    session_start();
    session_regenerate_id(true);
}

try {
    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
        header('Allow: POST');
        xh_auth_reply(405, ['message' => 'Please submit the account form.']);
    }
    xh_auth_check_origin();
    $body = xh_auth_body();
    $action = strtolower((string) ($_GET['action'] ?? ''));
    $email = strtolower(xh_auth_text($body['email'] ?? '', 100));
    $password = is_string($body['password'] ?? null) ? $body['password'] : '';
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        xh_auth_reply(400, ['message' => 'Enter a valid email address.']);
    }

    if ($action === 'signup') {
        if (strlen($password) < 8 || strlen($password) > 128 ||
            !preg_match('/[A-Z]/', $password) || !preg_match('/\d/', $password)) {
            xh_auth_reply(400, ['message' => 'Use 8–128 characters with an uppercase letter and number.']);
        }
        $firstName = xh_auth_text($body['firstName'] ?? '', 40);
        $lastName = xh_auth_text($body['lastName'] ?? '', 80);
        $company = xh_auth_text($body['company'] ?? '', 200);
        $mobile = xh_auth_text($body['mobile'] ?? '', 30);
        $city = xh_auth_text($body['city'] ?? '', 100);
        if ($firstName === '' || $lastName === '' || $company === '' || $mobile === '') {
            xh_auth_reply(400, ['message' => 'Complete all required account fields.']);
        }

        $handle = xh_auth_open_store('xcellhost-auth-users.json');
        if (!flock($handle, LOCK_EX)) throw new RuntimeException('Authentication storage is busy.');
        try {
            $users = xh_auth_read_json($handle);
            if (isset($users[$email])) {
                xh_auth_reply(409, ['message' => 'An account already exists for this email. Please sign in.']);
            }
            $users[$email] = [
                'email' => $email,
                'passwordHash' => password_hash($password, PASSWORD_DEFAULT),
                'firstName' => $firstName,
                'lastName' => $lastName,
                'company' => $company,
                'mobile' => $mobile,
                'city' => $city,
                'createdAt' => gmdate('c'),
            ];
            xh_auth_write_json($handle, $users);
        } finally {
            flock($handle, LOCK_UN);
            fclose($handle);
        }
        xh_auth_reply(201, ['message' => 'Account created.']);
    }

    if ($action === 'signin') {
        $loginType = strtolower(xh_auth_text($body['loginType'] ?? 'customer', 20));
        if ($loginType !== '' && $loginType !== 'customer') {
            xh_auth_reply(403, ['message' => 'Use your organisation’s assigned portal credentials for this login.']);
        }
        $ip = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
        if (!xh_auth_rate_limit($ip)) {
            header('Retry-After: 900');
            xh_auth_reply(429, ['message' => 'Too many sign-in attempts. Please try again in 15 minutes.']);
        }
        $handle = xh_auth_open_store('xcellhost-auth-users.json');
        if (!flock($handle, LOCK_SH)) throw new RuntimeException('Authentication storage is busy.');
        try {
            $users = xh_auth_read_json($handle);
            $user = is_array($users[$email] ?? null) ? $users[$email] : null;
        } finally {
            flock($handle, LOCK_UN);
            fclose($handle);
        }
        if (!$user || !is_string($user['passwordHash'] ?? null) || !password_verify($password, $user['passwordHash'])) {
            usleep(250000);
            xh_auth_reply(401, ['message' => 'Invalid email or password.']);
        }
        xh_auth_start_session((bool) ($body['remember'] ?? false));
        $_SESSION['customerEmail'] = $email;
        $_SESSION['authenticatedAt'] = time();
        xh_auth_reply(200, [
            'message' => 'Signed in.',
            'redirectUrl' => '/',
            'customer' => [
                'email' => $email,
                'firstName' => (string) ($user['firstName'] ?? ''),
                'lastName' => (string) ($user['lastName'] ?? ''),
                'company' => (string) ($user['company'] ?? ''),
                'mobile' => (string) ($user['mobile'] ?? ''),
                'city' => (string) ($user['city'] ?? ''),
            ],
        ]);
    }

    xh_auth_reply(404, ['message' => 'Unknown authentication action.']);
} catch (Throwable $error) {
    error_log('XcellHost auth unavailable: ' . get_class($error));
    xh_auth_reply(503, ['message' => 'Account service is temporarily unavailable. Please contact support.']);
}
