<?php
declare(strict_types=1);

ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const XCELLHOST_TALLY_WEBTAB_ID = '1818279000018410001';

function xh_webtab_reply(int $status, array $body): never {
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function xh_webtab_env(string $name, bool $required = true): string {
    $value = trim((string) getenv($name));
    if ($required && $value === '') throw new RuntimeException($name . ' is not configured.');
    return $value;
}

function xh_webtab_b64url_decode(string $value): string {
    if ($value === '' || preg_match('/[^A-Za-z0-9_-]/', $value)) {
        throw new InvalidArgumentException('Invalid token encoding.');
    }
    $padding = (4 - strlen($value) % 4) % 4;
    $decoded = base64_decode(strtr($value, '-_', '+/') . str_repeat('=', $padding), true);
    if ($decoded === false) throw new InvalidArgumentException('Invalid token encoding.');
    return $decoded;
}

function xh_webtab_claim_text(array $claims, string $key): string {
    $value = $claims[$key] ?? '';
    return is_string($value) || is_int($value) ? trim((string) $value) : '';
}

function xh_webtab_secret_for(string $tabId): string {
    $configured = xh_webtab_env('XCELLHOST_ZOHO_WEBTAB_SECRETS', false);
    if ($configured !== '') {
        $secrets = json_decode($configured, true);
        $secret = is_array($secrets) ? ($secrets[$tabId] ?? null) : null;
        if (!is_string($secret) || strlen($secret) < 32) {
            throw new InvalidArgumentException('Unapproved web tab.');
        }
        return $secret;
    }
    $expectedTabId = xh_webtab_env('XCELLHOST_ZOHO_WEBTAB_ID', false) ?: XCELLHOST_TALLY_WEBTAB_ID;
    if (!hash_equals($expectedTabId, $tabId)) throw new InvalidArgumentException('Invalid web tab.');
    return xh_webtab_env('XCELLHOST_ZOHO_WEBTAB_SECRET');
}

function xh_webtab_validate_jwt(string $token): array {
    $parts = explode('.', $token);
    if (count($parts) !== 3) throw new InvalidArgumentException('Invalid token.');
    [$encodedHeader, $encodedClaims, $encodedSignature] = $parts;

    $header = json_decode(xh_webtab_b64url_decode($encodedHeader), true);
    $claims = json_decode(xh_webtab_b64url_decode($encodedClaims), true);
    if (!is_array($header) || !is_array($claims) || ($header['alg'] ?? '') !== 'HS256') {
        throw new InvalidArgumentException('Invalid token.');
    }

    $tabId = xh_webtab_claim_text($claims, 'tab_id');
    if ($tabId === '') throw new InvalidArgumentException('Invalid token claims.');
    $secret = xh_webtab_secret_for($tabId);
    $actualSignature = xh_webtab_b64url_decode($encodedSignature);
    $expectedSignature = hash_hmac('sha256', $encodedHeader . '.' . $encodedClaims, $secret, true);
    if (!hash_equals($expectedSignature, $actualSignature)) throw new InvalidArgumentException('Invalid token.');

    $now = time();
    $expiresAt = filter_var($claims['exp'] ?? null, FILTER_VALIDATE_INT);
    $issuedAt = filter_var($claims['iat'] ?? null, FILTER_VALIDATE_INT);
    if ($expiresAt === false || $issuedAt === false || $expiresAt <= $now || $issuedAt > $now + 60) {
        throw new InvalidArgumentException('Expired token.');
    }

    $organisationId = xh_webtab_claim_text($claims, 'organisation_id');
    if ($organisationId === '') $organisationId = xh_webtab_claim_text($claims, 'organization_id');
    $userId = xh_webtab_claim_text($claims, 'user_id');
    if ($organisationId === '' || $userId === '' || $tabId === '' ||
        xh_webtab_claim_text($claims, 'token_type') !== 'access') {
        throw new InvalidArgumentException('Invalid token claims.');
    }
    $expectedOrganisationId = xh_webtab_env('XCELLHOST_ZOHO_ORGANIZATION_ID');
    if (!hash_equals($expectedOrganisationId, $organisationId)) throw new InvalidArgumentException('Invalid organisation.');
    return ['organisation_id' => $organisationId, 'user_id' => $userId];
}

function xh_webtab_http(string $url, string $method = 'GET', array $headers = [], array $form = []): array {
    if (!function_exists('curl_init')) throw new RuntimeException('The server HTTP client is unavailable.');
    $handle = curl_init($url);
    if ($handle === false) throw new RuntimeException('The server HTTP client is unavailable.');
    curl_setopt_array($handle, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => false,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_CUSTOMREQUEST => $method,
        CURLOPT_HTTPHEADER => $headers,
    ]);
    if ($form !== []) curl_setopt($handle, CURLOPT_POSTFIELDS, http_build_query($form));
    $body = curl_exec($handle);
    $status = (int) curl_getinfo($handle, CURLINFO_RESPONSE_CODE);
    $error = curl_error($handle);
    curl_close($handle);
    if (!is_string($body) || $error !== '') throw new RuntimeException('Zoho Billing is temporarily unavailable.');
    $json = json_decode($body, true);
    return ['status' => $status, 'json' => is_array($json) ? $json : []];
}

function xh_webtab_access_token(): array {
    $staticToken = xh_webtab_env('XCELLHOST_ZOHO_ACCESS_TOKEN', false);
    $configuredApiBase = rtrim(xh_webtab_env('XCELLHOST_ZOHO_API_BASE', false), '/');
    if ($staticToken !== '') return [$staticToken, $configuredApiBase ?: 'https://www.zohoapis.in/billing/v1'];

    $response = xh_webtab_http('https://accounts.zoho.in/oauth/v2/token', 'POST', [
        'Content-Type: application/x-www-form-urlencoded',
    ], [
        'refresh_token' => xh_webtab_env('XCELLHOST_ZOHO_REFRESH_TOKEN'),
        'client_id' => xh_webtab_env('XCELLHOST_ZOHO_CLIENT_ID'),
        'client_secret' => xh_webtab_env('XCELLHOST_ZOHO_CLIENT_SECRET'),
        'grant_type' => 'refresh_token',
    ]);
    $token = trim((string) ($response['json']['access_token'] ?? ''));
    if ($response['status'] !== 200 || $token === '') throw new RuntimeException('Zoho OAuth is unavailable.');
    $apiDomain = rtrim((string) ($response['json']['api_domain'] ?? 'https://www.zohoapis.in'), '/');
    return [$token, $configuredApiBase ?: $apiDomain . '/billing/v1'];
}

function xh_webtab_api_get(string $apiBase, string $path, string $accessToken, string $organisationId): array {
    return xh_webtab_http($apiBase . $path, 'GET', [
        'Accept: application/json',
        'Authorization: Zoho-oauthtoken ' . $accessToken,
        'X-com-zoho-subscriptions-organizationid: ' . $organisationId,
    ]);
}

function xh_webtab_customer(string $customerId, string $verifiedUserId, string $organisationId): array {
    [$accessToken, $apiBase] = xh_webtab_access_token();
    $response = xh_webtab_api_get(
        $apiBase,
        '/customers/' . rawurlencode($customerId),
        $accessToken,
        $organisationId,
    );
    $customer = $response['json']['customer'] ?? null;
    if ($response['status'] !== 200 || !is_array($customer)) {
        throw new RuntimeException('The signed-in customer record could not be loaded.');
    }
    $recordCustomerId = (string) ($customer['customer_id'] ?? '');
    $relatedIds = [$recordCustomerId, (string) ($customer['primary_contactperson_id'] ?? '')];
    $contactPersons = $customer['contactpersons'] ?? $customer['contact_persons'] ?? [];
    if (is_array($contactPersons)) {
        foreach ($contactPersons as $contact) {
            if (is_array($contact)) $relatedIds[] = (string) ($contact['contactperson_id'] ?? '');
        }
    }
    $belongsToCustomer = in_array($verifiedUserId, $relatedIds, true);
    if (!$belongsToCustomer && $recordCustomerId !== '') {
        $contactResponse = xh_webtab_api_get(
            $apiBase,
            '/customers/' . rawurlencode($recordCustomerId) . '/contactpersons/' . rawurlencode($verifiedUserId),
            $accessToken,
            $organisationId,
        );
        $contact = $contactResponse['json']['contact_person'] ?? null;
        $belongsToCustomer = $contactResponse['status'] === 200 && is_array($contact) &&
            hash_equals($recordCustomerId, (string) ($contact['customer_id'] ?? $recordCustomerId));
    }
    if (!$belongsToCustomer) throw new InvalidArgumentException('Customer does not match the signed-in user.');

    $billing = is_array($customer['billing_address'] ?? null) ? $customer['billing_address'] : [];
    return [
        'customerId' => (string) ($customer['customer_id'] ?? $customerId),
        'firstName' => (string) ($customer['first_name'] ?? ''),
        'lastName' => (string) ($customer['last_name'] ?? ''),
        'email' => (string) ($customer['email'] ?? ''),
        'mobile' => (string) ($customer['mobile'] ?? $customer['phone'] ?? ''),
        'company' => (string) ($customer['company_name'] ?? $customer['display_name'] ?? ''),
        'street' => (string) ($billing['street'] ?? ''),
        'address2' => (string) ($billing['address'] ?? ''),
        'city' => (string) ($billing['city'] ?? ''),
        'state' => (string) ($billing['state'] ?? ''),
        'postalCode' => (string) ($billing['zip'] ?? ''),
        'country' => (string) ($billing['country'] ?? 'India'),
        'gstin' => (string) ($customer['gst_no'] ?? $customer['tax_reg_no'] ?? ''),
    ];
}

try {
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        header('Allow: POST');
        xh_webtab_reply(405, ['message' => 'Use POST.']);
    }
    if (stripos((string) ($_SERVER['CONTENT_TYPE'] ?? ''), 'application/json') !== 0) {
        xh_webtab_reply(415, ['message' => 'Send JSON.']);
    }
    $raw = file_get_contents('php://input', false, null, 0, 16385);
    if (!is_string($raw) || strlen($raw) > 16384) xh_webtab_reply(413, ['message' => 'Request too large.']);
    $body = json_decode($raw, true);
    $jwt = is_array($body) && is_string($body['jwt_token'] ?? null) ? trim($body['jwt_token']) : '';
    if ($jwt === '' || strlen($jwt) > 8192) xh_webtab_reply(400, ['message' => 'JWT is required.']);

    $identity = xh_webtab_validate_jwt($jwt);
    $requestedCustomerId = is_array($body) && is_string($body['customer_id'] ?? null)
        ? trim($body['customer_id']) : '';
    $customerId = $requestedCustomerId !== '' ? $requestedCustomerId : $identity['user_id'];
    if (!preg_match('/^[0-9]{5,30}$/', $customerId)) throw new InvalidArgumentException('Invalid customer.');
    xh_webtab_reply(200, [
        'authenticated' => true,
        'customer' => xh_webtab_customer($customerId, $identity['user_id'], $identity['organisation_id']),
    ]);
} catch (InvalidArgumentException $error) {
    xh_webtab_reply(401, ['message' => 'Your Zoho Billing session could not be verified.']);
} catch (Throwable $error) {
    error_log('XcellHost Zoho Web Tab session unavailable: ' . get_class($error));
    xh_webtab_reply(503, ['message' => 'Saved billing details are temporarily unavailable.']);
}
