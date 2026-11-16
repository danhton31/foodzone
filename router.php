<?php
// php -S 127.0.0.1:8877 router.php — chỉ phục vụ trang và tài nguyên công khai.
$path = rawurldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?: '/');
if ($path === '/') {
    require __DIR__ . '/index.php';
    return true;
}
$allowed =
    preg_match('~^/(home|admins|authentication)/[a-zA-Z][a-zA-Z0-9_-]*\.php$~', $path) ||
    $path === '/index.php' ||
    preg_match('~^/assets/(?:dist|dist/files)/[a-zA-Z0-9_.-]+\.(?:css|js|woff2?|ttf|svg)$~', $path);
$blocked = in_array(
    basename($path),
    [
        'config.php',
        'ui.php',
        'header.php',
        'footer.php',
        'admin_header.php',
        'admin_footer.php',
        'account-header.php',
        'account-footer.php',
    ],
    true,
);
if (!$allowed || $blocked) {
    http_response_code(404);
    echo 'Không tìm thấy trang.';
    return true;
}
return false;
