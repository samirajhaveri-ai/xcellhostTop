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

function xh_auth_zoho_config(): array {
    static $config = null;
    if (is_array($config)) return $config;
    $configPath = dirname(__DIR__, 2) . '/xcellhost-zoho-config.php';
    $loaded = is_file($configPath) ? require $configPath : [];
    $config = is_array($loaded) ? $loaded : [];
    return $config;
}

function xh_auth_zoho_value(string $name, bool $required = true): string {
    $environment = trim((string) getenv($name));
    $config = xh_auth_zoho_config();
    $value = $environment !== '' ? $environment : trim((string) ($config[$name] ?? ''));
    if ($required && $value === '') throw new RuntimeException('Zoho Billing is not configured.');
    return $value;
}

function xh_auth_zoho_http(string $url, string $method = 'GET', array $headers = [], array $form = []): array {
    $curl = curl_init($url);
    if ($curl === false) throw new RuntimeException('Zoho Billing is unavailable.');
    curl_setopt_array($curl, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 8,
        CURLOPT_TIMEOUT => 20,
        CURLOPT_CUSTOMREQUEST => $method,
        CURLOPT_HTTPHEADER => $headers,
    ]);
    if ($form !== []) curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($form));
    $body = curl_exec($curl);
    $status = (int) curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
    $error = curl_error($curl);
    curl_close($curl);
    if (!is_string($body) || $error !== '') throw new RuntimeException('Zoho Billing is unavailable.');
    $json = json_decode($body, true);
    return ['status' => $status, 'json' => is_array($json) ? $json : []];
}

function xh_auth_zoho_access(): array {
    $apiBase = rtrim(xh_auth_zoho_value('XCELLHOST_ZOHO_API_BASE', false), '/');
    $staticToken = xh_auth_zoho_value('XCELLHOST_ZOHO_ACCESS_TOKEN', false);
    if ($staticToken !== '') return [$staticToken, $apiBase ?: 'https://www.zohoapis.in/billing/v1'];
    $response = xh_auth_zoho_http('https://accounts.zoho.in/oauth/v2/token', 'POST', [
        'Content-Type: application/x-www-form-urlencoded',
    ], [
        'refresh_token' => xh_auth_zoho_value('XCELLHOST_ZOHO_REFRESH_TOKEN'),
        'client_id' => xh_auth_zoho_value('XCELLHOST_ZOHO_CLIENT_ID'),
        'client_secret' => xh_auth_zoho_value('XCELLHOST_ZOHO_CLIENT_SECRET'),
        'grant_type' => 'refresh_token',
    ]);
    $token = (string) ($response['json']['access_token'] ?? '');
    if ($response['status'] !== 200 || $token === '') throw new RuntimeException('Zoho OAuth is unavailable.');
    $domain = rtrim((string) ($response['json']['api_domain'] ?? 'https://www.zohoapis.in'), '/');
    return [$token, $apiBase ?: $domain . '/billing/v1'];
}

function xh_auth_zoho_get(string $apiBase, string $path, string $token, string $organisationId): array {
    return xh_auth_zoho_http($apiBase . $path, 'GET', [
        'Accept: application/json',
        'Authorization: Zoho-oauthtoken ' . $token,
        'X-com-zoho-subscriptions-organizationid: ' . $organisationId,
    ]);
}

function xh_auth_zoho_customer_for_email(string $email): ?array {
    [$token, $apiBase] = xh_auth_zoho_access();
    $organisationId = xh_auth_zoho_value('XCELLHOST_ZOHO_ORGANIZATION_ID');
    $customerId = '';
    for ($page = 1; $page <= 50; $page++) {
        $response = xh_auth_zoho_get(
            $apiBase,
            '/customers?filter_by=Status.All&per_page=200&page=' . $page,
            $token,
            $organisationId,
        );
        if ($response['status'] !== 200) throw new RuntimeException('Zoho customers could not be loaded.');
        $customers = is_array($response['json']['customers'] ?? null) ? $response['json']['customers'] : [];
        foreach ($customers as $candidate) {
            if (!is_array($candidate)) continue;
            $candidateEmail = strtolower(trim((string) ($candidate['email'] ?? '')));
            if ($candidateEmail !== '' && hash_equals($email, $candidateEmail)) {
                $customerId = (string) ($candidate['customer_id'] ?? '');
                break 2;
            }
        }
        $pageContext = is_array($response['json']['page_context'] ?? null) ? $response['json']['page_context'] : [];
        if (empty($pageContext['has_more_page'])) break;
    }
    if (!preg_match('/^[0-9]{5,30}$/', $customerId)) return null;
    $response = xh_auth_zoho_get($apiBase, '/customers/' . rawurlencode($customerId), $token, $organisationId);
    $customer = $response['json']['customer'] ?? null;
    if ($response['status'] !== 200 || !is_array($customer)) return null;
    $billing = is_array($customer['billing_address'] ?? null) ? $customer['billing_address'] : [];
    return [
        'customerId' => (string) ($customer['customer_id'] ?? $customerId),
        'firstName' => (string) ($customer['first_name'] ?? ''),
        'lastName' => (string) ($customer['last_name'] ?? ''),
        'email' => (string) ($customer['email'] ?? $email),
        'mobile' => (string) ($customer['mobile'] ?? $customer['phone'] ?? ''),
        'company' => (string) ($customer['company_name'] ?? $customer['display_name'] ?? ''),
        'street' => (string) ($billing['street'] ?? $billing['address'] ?? ''),
        'address2' => (string) ($billing['street2'] ?? $billing['address2'] ?? ''),
        'city' => (string) ($billing['city'] ?? ''),
        'state' => (string) ($billing['state'] ?? ''),
        'postalCode' => (string) ($billing['zip'] ?? $billing['postal_code'] ?? ''),
        'country' => (string) ($billing['country'] ?? 'India'),
        'gstin' => (string) ($customer['gst_no'] ?? $customer['tax_reg_no'] ?? ''),
    ];
}

function xh_auth_request_customer_otp(string $email): void {
    $ip = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
    if (!xh_auth_rate_limit('otp-request:' . $ip)) {
        header('Retry-After: 900');
        xh_auth_reply(429, ['message' => 'Too many verification requests. Please try again later.']);
    }
    $customer = xh_auth_zoho_customer_for_email($email);
    if ($customer === null) {
        usleep(300000);
        xh_auth_reply(202, ['message' => 'If this email belongs to an existing customer, a verification code has been sent.']);
    }
    $code = (string) random_int(100000, 999999);
    $handle = xh_auth_open_store('xcellhost-zoho-customer-otp.json');
    if (!flock($handle, LOCK_EX)) throw new RuntimeException('Verification service is busy.');
    try {
        $records = xh_auth_read_json($handle);
        $now = time();
        foreach ($records as $key => $record) {
            if (!is_array($record) || (int) ($record['expiresAt'] ?? 0) < $now) unset($records[$key]);
        }
        $key = hash('sha256', $email);
        $lastSent = (int) ($records[$key]['sentAt'] ?? 0);
        if ($lastSent > $now - 60) {
            xh_auth_reply(429, ['message' => 'Please wait one minute before requesting another code.']);
        }
        $records[$key] = [
            'email' => $email,
            'codeHash' => password_hash($code, PASSWORD_DEFAULT),
            'customerId' => (string) ($customer['customerId'] ?? ''),
            'sentAt' => $now,
            'expiresAt' => $now + 600,
            'attempts' => 0,
        ];
        xh_auth_write_json($handle, $records);
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }
    $from = xh_auth_zoho_value('XCELLHOST_AUTH_FROM_EMAIL', false) ?: 'no-reply@xcellhost.cloud';
    $subject = 'Your XcellHost checkout verification code';
    $message = "Your XcellHost verification code is: {$code}\n\nThis code expires in 10 minutes. If you did not request it, you can ignore this email.";
    $headers = "From: XcellHost <{$from}>\r\nContent-Type: text/plain; charset=UTF-8\r\n";
    if (!mail($email, $subject, $message, $headers)) {
        throw new RuntimeException('Verification email could not be sent.');
    }
    xh_auth_reply(202, ['message' => 'If this email belongs to an existing customer, a verification code has been sent.']);
}

function xh_auth_verify_customer_otp(string $email, string $code): array {
    if (!preg_match('/^[0-9]{6}$/', $code)) {
        xh_auth_reply(400, ['message' => 'Enter the 6-digit verification code.']);
    }
    $handle = xh_auth_open_store('xcellhost-zoho-customer-otp.json');
    if (!flock($handle, LOCK_EX)) throw new RuntimeException('Verification service is busy.');
    try {
        $records = xh_auth_read_json($handle);
        $key = hash('sha256', $email);
        $record = is_array($records[$key] ?? null) ? $records[$key] : null;
        if ($record === null || (int) ($record['expiresAt'] ?? 0) < time()) {
            unset($records[$key]);
            xh_auth_write_json($handle, $records);
            xh_auth_reply(401, ['message' => 'This verification code has expired. Request a new one.']);
        }
        $attempts = (int) ($record['attempts'] ?? 0);
        if ($attempts >= 5) {
            unset($records[$key]);
            xh_auth_write_json($handle, $records);
            xh_auth_reply(429, ['message' => 'Too many incorrect codes. Request a new one.']);
        }
        if (!is_string($record['codeHash'] ?? null) || !password_verify($code, $record['codeHash'])) {
            $record['attempts'] = $attempts + 1;
            $records[$key] = $record;
            xh_auth_write_json($handle, $records);
            xh_auth_reply(401, ['message' => 'The verification code is incorrect.']);
        }
        unset($records[$key]);
        xh_auth_write_json($handle, $records);
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }
    $customer = xh_auth_zoho_customer_for_email($email);
    if ($customer === null) throw new RuntimeException('The customer record is no longer available.');
    xh_auth_start_session(false);
    $_SESSION['customerEmail'] = $email;
    $_SESSION['authenticatedAt'] = time();
    $_SESSION['zohoCustomerId'] = (string) ($customer['customerId'] ?? '');
    return $customer;
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

    if ($action === 'zoho-request-otp') {
        xh_auth_request_customer_otp($email);
    }

    if ($action === 'zoho-verify-otp') {
        $code = xh_auth_text($body['code'] ?? '', 6);
        xh_auth_reply(200, [
            'message' => 'Customer verified.',
            'zohoCustomer' => xh_auth_verify_customer_otp($email, $code),
        ]);
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
