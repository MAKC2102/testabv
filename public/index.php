<?php
ini_set('display_errors', '1');
require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../src/app.php';
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Headers: authorization, content-type');
$app->run();