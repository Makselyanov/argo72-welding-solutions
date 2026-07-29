<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(array $payload, int $status): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE);
    exit;
}

function request_uuid(): string
{
    $bytes = random_bytes(16);
    $bytes[6] = chr((ord($bytes[6]) & 0x0f) | 0x40);
    $bytes[8] = chr((ord($bytes[8]) & 0x3f) | 0x80);
    $hex = bin2hex($bytes);

    return substr($hex, 0, 8).'-'.substr($hex, 8, 4).'-'.substr($hex, 12, 4)
        .'-'.substr($hex, 16, 4).'-'.substr($hex, 20);
}

function rate_limit_ok(string $key, int $limit = 10, int $windowSeconds = 600): bool
{
    $path = sys_get_temp_dir().DIRECTORY_SEPARATOR.'svrq-argon-'.hash('sha256', $key).'.json';
    $handle = @fopen($path, 'c+');
    if ($handle === false || ! flock($handle, LOCK_EX)) {
        return false;
    }

    $now = time();
    $raw = stream_get_contents($handle);
    $events = is_string($raw) ? json_decode($raw, true) : [];
    $events = is_array($events)
        ? array_values(array_filter($events, fn ($timestamp) => is_int($timestamp) && $timestamp > $now - $windowSeconds))
        : [];
    $allowed = count($events) < $limit;
    if ($allowed) {
        $events[] = $now;
    }

    rewind($handle);
    ftruncate($handle, 0);
    fwrite($handle, json_encode($events));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);

    return $allowed;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(['ok' => false, 'message' => 'Method not allowed.'], 405);
}

$configPath = dirname(__DIR__, 2).DIRECTORY_SEPARATOR.'.svrq-pilot.php';
if (! is_file($configPath)) {
    respond(['ok' => false, 'message' => 'CRM channel is not active yet.'], 503);
}

$config = require $configPath;
if (! is_array($config)) {
    respond(['ok' => false, 'message' => 'CRM channel is not configured.'], 503);
}

foreach ([
    'endpoint',
    'key_id',
    'secret',
    'site_host',
    'consent_version',
    'policy_version',
    'consent_text_id',
] as $required) {
    if (trim((string) ($config[$required] ?? '')) === '') {
        respond(['ok' => false, 'message' => 'CRM channel is not configured.'], 503);
    }
}

$originHost = strtolower((string) parse_url((string) ($_SERVER['HTTP_ORIGIN'] ?? ''), PHP_URL_HOST));
if ($originHost !== strtolower((string) $config['site_host'])) {
    respond(['ok' => false, 'message' => 'Origin is not allowed.'], 403);
}

$remoteAddress = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
if (! rate_limit_ok($remoteAddress)) {
    respond(['ok' => false, 'message' => 'Too many requests.'], 429);
}

$raw = file_get_contents('php://input');
if (! is_string($raw) || $raw === '' || strlen($raw) > 65536) {
    respond(['ok' => false, 'message' => 'Invalid request body.'], 422);
}

try {
    $input = json_decode($raw, true, 32, JSON_THROW_ON_ERROR);
} catch (JsonException) {
    respond(['ok' => false, 'message' => 'Invalid JSON.'], 422);
}
if (! is_array($input) || ($input['privacy_accepted'] ?? false) !== true) {
    respond(['ok' => false, 'message' => 'Consent is required.'], 422);
}

$allowedFields = [
    'method',
    'metal',
    'thickness_group',
    'seam_length_m',
    'urgency',
    'extras',
    'callout_mode',
    'distance_km',
    'hours',
    'area_m2',
    'seam_type',
    'position',
    'joint_count',
    'client_name',
    'client_phone',
    'client_email',
    'client_comment',
];
$payload = array_intersect_key($input, array_flip($allowedFields));
$payload['privacy_accepted'] = true;
$payload['consent_version'] = (string) $config['consent_version'];
$payload['policy_version'] = (string) $config['policy_version'];
$payload['consent_text_id'] = (string) $config['consent_text_id'];
$payload['consented_at'] = gmdate(DATE_ATOM);
$payload['source_page'] = filter_var(
    (string) ($_SERVER['HTTP_REFERER'] ?? ''),
    FILTER_VALIDATE_URL
) ?: 'https://'.(string) $config['site_host'].'/';

$body = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR);
$timestamp = (string) time();
$requestId = request_uuid();
$canonical = implode("\n", [
    (string) $config['key_id'],
    $timestamp,
    $requestId,
    hash('sha256', $body),
]);
$signature = hash_hmac('sha256', $canonical, (string) $config['secret']);

if (! function_exists('curl_init')) {
    respond(['ok' => false, 'message' => 'CRM transport is unavailable.'], 503);
}

$curl = curl_init((string) $config['endpoint']);
curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $body,
    CURLOPT_HTTPHEADER => [
        'Accept: application/json',
        'Content-Type: application/json',
        'X-Site-Timestamp: '.$timestamp,
        'X-Site-Request-Id: '.$requestId,
        'X-Site-Signature: '.$signature,
    ],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 2,
    CURLOPT_TIMEOUT => 10,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_SSL_VERIFYHOST => 2,
]);
$responseBody = curl_exec($curl);
$status = (int) curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
$transportOk = $responseBody !== false;
curl_close($curl);

if (! $transportOk || $status < 200 || $status > 599 || ! is_string($responseBody)) {
    respond(['ok' => false, 'message' => 'CRM is temporarily unavailable.'], 502);
}

$response = json_decode($responseBody, true);
if (! is_array($response)) {
    respond(['ok' => false, 'message' => 'CRM returned an invalid response.'], 502);
}

respond($response, $status);
