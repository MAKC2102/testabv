<?php

use App\Controller\TestController;
use Psr\Container\ContainerInterface;
use Slim\App;
$settings = require '../config/settings.php';
$app = new App($settings);
$container = $app->getContainer();
require_once 'router.php';
$container['db'] = function ($c){ //Подключаем БД
    $db = new PDO('mysql:testabv.sn9.ru/;port=3306;dbname=testabv', 'testabv', 'U8MVXz1A');
    $db->exec('SET NAMES utf8');
    return $db;
};
$container['TestController'] = function ($c) { //Подключаем контроллер
    $db = $c->get('db');
    return new \App\Controller\TestController($db);
};
$container['notFoundHandler'] = function ($c) { // Переадресация на нужную страницу
    return function ($request, $response) {
        return $response->withRedirect('/start.html');
    };
};