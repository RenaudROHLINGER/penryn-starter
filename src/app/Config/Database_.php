<?php

namespace App\Config;

class Database {

    public static function config () {
        $config['host'] = 'localhost';
        $config['dbname'] = '___base_name___';
        $config['user'] = 'root';
        $config['pw'] = 'root';

        return $config;
    }

}
