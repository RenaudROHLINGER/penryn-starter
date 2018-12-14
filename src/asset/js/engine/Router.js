/*

CLASS
─────

Class "_tb"     →    targetBlank W3C compatible (target blank)
Class "_tbs"    →    targetBlank W3C compatible except for safari (target blank safari)
Class "_ost"    →    open link in same tab without prevent default (open same tab)

PENRYN
──────

is404
path
target
outroIsOn
done
xhr

*/

import S from '@ariiiman/s'
import Xhr from './Xhr.js'
import EventDelegation from './EventDelegation.js'

class Router {

    constructor (o) {
        // Parameters
        this.p = Penryn

        // Outro is on : paralyse outro method during animations
        this.p.outroIsOn = false

        // 404
        this.p.is404 = !document.querySelector('meta[name=description]')

        this.p.path = {new: S.Win.path}

        // On popstate
        Xhr.onPopstate()

        // Controller + EventDelegation
        this.p404Controller = o.p404
        this.MainController = o.main

        const Controller = this.getController()

        // Event delegation
        S.BM(this, ['getController'])
        new EventDelegation(this.getController)

        // Preload
        Controller.preload()
    }

    getController () {
        return this.p.is404 ? this.p404Controller : this.MainController
    }

}

export default Router
