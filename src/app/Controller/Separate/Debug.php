<?php

namespace App\Controller\Separate;

use \Engine\Controller\Controller;

class Debug extends Controller {

    public function show () {

        /*------------------------------------
            HEAD
        ------------------------------------*/

        $this->head['title'] = 'Debug';

        /*------------------------------------
            RENDER DEBUG
        ------------------------------------*/

        $this->renderDebug();
    }

}
