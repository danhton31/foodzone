<?php
// Khởi tạo chung. Không in HTML trước khi xử lý và chuyển hướng.
require_once __DIR__ . '/app/database.php';
require_once __DIR__ . '/app/helpers.php';
require_once __DIR__ . '/app/auth.php';
require_once __DIR__ . '/app/media.php';
date_default_timezone_set('Asia/Ho_Chi_Minh');
if (session_status() === PHP_SESSION_NONE && PHP_SAPI !== 'cli') {
    session_start([
        'cookie_httponly' => true,
        'cookie_samesite' => 'Lax',
        'cookie_secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
    ]);
}
$conn = $conn ?? database();
