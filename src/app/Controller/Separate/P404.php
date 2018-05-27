<?php

namespace App\Controller\Separate;

use \Engine\Controller\Controller;

class P404 extends Controller {

    public function show () {

        /*------------------------------------
            HEAD
        ------------------------------------*/

        $this->head['title'] = '404 Error — Not Found';

        /*------------------------------------
            RENDER ERROR
        ------------------------------------*/

        $this->renderError();
    }

}
