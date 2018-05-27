<?php

namespace Engine\Router;

use \App\Core\RedirectTo;

class Router {

    private $url;
    private $routes = [];
    private $debugControllerFunc;
    private $p404ControllerFunc;

    public function __construct () {
        $this->url = isset($_GET['url']) ? $_GET['url'] : '';
    }

    public function get ($path, $controller) {
        return $this->add($path, $controller, 'GET');
    }

    public function post ($path, $controller) {
        return $this->add($path, $controller, 'POST');
    }

    public function debug ($debugControllerFunc) {
        $this->debugControllerFunc = $debugControllerFunc;
    }

    public function p404 ($p404ControllerFunc) {
        $this->p404ControllerFunc = $p404ControllerFunc;
    }

    public function add ($path, $controller, $method) {
        $route = new Route($path, $controller);
        $this->routes[$method][] = $route;
        return $route;
    }

    public function run () {
        // Get & Post
        foreach ($this->routes[$_SERVER['REQUEST_METHOD']] as $route) {
            if ($route->match($this->url)) {
                return $route->getController();
            }
        }

        // Debug
        if ($this->url === 'debug') {
            $controller = 'App\\Controller\\Separate\\Debug';
            $controller = new $controller(false);
            return call_user_func([$controller, $this->debugControllerFunc]);
        // Page 404
        } else {
            $controller = 'App\\Controller\\Separate\\P404';
            $controller = new $controller(false);
            return call_user_func([$controller, $this->p404ControllerFunc]);
        }
    }

}
