<?php

namespace App\Config;

class Constant {

    public static function init () {
        $root = explode('/', $_SERVER['DOCUMENT_ROOT']);
        array_pop($root);
        define('ROOT', implode('/', $root) . '/');
    }

}
