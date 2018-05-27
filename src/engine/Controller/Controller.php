<?php

namespace Engine\Controller;

use \stdClass;
use \App\Config\Head;

class Controller {

    private $content;
    private $viewName;
    private $callArgs;
    protected $head;
    protected $data;

    public function __construct ($callArgs) {
        $this->callArgs = $callArgs;
        $this->data = new stdClass;
    }

    public function render ($viewName) {
        // Head
        $this->head += Head::data();

        // Head url
        $urlPath = $_SERVER['REQUEST_URI'] === '/' ? '' : $_SERVER['REQUEST_URI'];
        $this->head['url'] = $this->head['urlBase'] . $urlPath;

        // Head robots
        if ($_SERVER['SERVER_NAME'] === $this->head['serverName'] && $this->head['allow-robots']) {
            $this->head['robots'] = 'all';
        } else {
            $this->head['robots'] = 'noindex, nofollow';
        }

        // Content
        $this->content = $this->getContent(ROOT . 'app/View/page/' . $viewName . '.php');
        if (isset($_GET['xhr'])) {
            $xhrController['title'] = $this->head['title'];
            $xhrController['view'] = $this->content;
            print json_encode(array('xhrController' => $xhrController));
        } else {
            echo $this->getContent(ROOT . 'app/View/base/main.php');
        }
    }

    public function renderError () {
        header('HTTP/1.1 404 Not Found', 404, TRUE);
        echo $this->getContent(ROOT . 'app/View/base/p404.php');
    }

    public function renderDebug () {
        echo $this->getContent(ROOT . 'app/View/base/debug.php');
    }

    private function getContent ($fileName) {
        ob_start();
        require $fileName;
        return ob_get_clean();
    }

}
