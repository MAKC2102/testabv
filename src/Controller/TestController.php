<?php

namespace App\Controller;

use Slim\Http\Request;
use Slim\Http\Response;

class TestController
{
    /**
     * @var \PDO
     */
    private $db;
    public function __construct($db)
    {
        $this->db = $db;
    }
    public function createTest(Request $request, Response $response) //Обработка данных и запись в БД
    {
        $test = $request->getParsedBody();
        $this->db->query("INSERT INTO testtable (name, email) VALUES ('{$test['name']}', '{$test['email']}')");
        return $response->withJson("{$test['name']} {$test['email']}", 201, JSON_UNESCAPED_UNICODE);
    }
}