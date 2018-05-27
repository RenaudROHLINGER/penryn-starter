<?php

namespace App\Controller\Page;

use \Engine\Controller\Controller;

class About extends Controller {

    public function show () {

        /*------------------------------------
            HEAD
        ------------------------------------*/

        // SEO
        $this->head['title'] = 'Website — About';
        $this->head['description'] = '';
        $this->head['opengraph'] = '/og/1200-630.png';

        // Robots
        $this->head['allow-robots'] = true;

        /*------------------------------------
            RENDER
        ------------------------------------*/

        $this->render('about');
    }

}
