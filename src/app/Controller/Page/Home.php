<?php

namespace App\Controller\Page;

use \Engine\Controller\Controller;

class Home extends Controller {

    public function show () {

        /*------------------------------------
            MESSAGE
        ------------------------------------*/

        $this->data->msg = 'Home';

        /*------------------------------------
            HEAD
        ------------------------------------*/

        // SEO
        $this->head['title'] = 'Website — Home';
        $this->head['description'] = '';
        $this->head['opengraph'] = '/og/1200-630.png';

        // Robots
        $this->head['allow-robots'] = true;

        /*------------------------------------
            RENDER
        ------------------------------------*/

        $this->render('home');
    }

}
