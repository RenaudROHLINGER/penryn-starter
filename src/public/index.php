<?php

/*

error_reporting(E_ALL);
ini_set('display_errors', 1);

var_dump(realpath(dirname(getcwd())));
exit();

echo '<pre>';
phpinfo();
echo '</pre>';
exit();

*/

$root = explode('/', $_SERVER['DOCUMENT_ROOT']);
array_pop($root);

require implode('/', $root) . '/app/Core/Constant.php';
\App\Core\Constant::init();

require ROOT . 'app/Core/App.php';
\App\Core\App::init();
