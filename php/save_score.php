<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$username = $_POST['username'] ?? '';
$level = $_POST['level'] ?? 0;
$secret_key = $_POST['secret_key'] ?? '';

if ($secret_key !== "chiave_segreta_123") {
    echo json_encode(["status" => "error", "message" => "Chiave errata"]);
    exit;
}

$file = 'scores.json';
$current_data = [];

if (file_exists($file)) {
    $current_data = json_decode(file_get_contents($file), true) ?? [];
}

$found = false;
foreach ($current_data as &$user) {
    if ($user['username'] === $username) {
        if ($level > $user['level']) {
            $user['level'] = (int)$level;
            $user['last_updated'] = date("Y-m-d H:i:s");
        }
        $found = true;
        break;
    }
}

if (!$found) {
    $current_data[] = [
        "username" => $username,
        "level" => (int)$level,
        "last_updated" => date("Y-m-d H:i:s")
    ];
}

if (file_put_contents($file, json_encode($current_data, JSON_PRETTY_PRINT))) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error"]);
}
?>