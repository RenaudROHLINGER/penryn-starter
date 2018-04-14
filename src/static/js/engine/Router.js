/*

CLASS
─────

Class "_tb"     →    targetBlank W3C compatible (target blank)
Class "_tbs"    →    targetBlank W3C compatible except for safari (target blank safari)
Class "_ost"    →    open link in same tab without prevent default (open same tab)

PENRYN
──────

path
target
outroEnable
outroArgs
done
xhr

*/

import S from '@ariiiman/s'
import Xhr from './Xhr.js'
import EventDelegation from './EventDelegation.js'

class Router {

    constructor () {
        // Parameters
        this.routes = []
        this.p = window.Penryn

        // Bind
        S.BM(this, ['getInstance'])

        // Outro is on : paralyse outro method during animations
        this.p.outroIsOn = false

        // On popstate
        Xhr.onPopstate()

        // Instantiating event delegation
        this.eventDelegation = new EventDelegation(this.getInstance)
    }

    init (path, controller) {
        this.route = {
            path: this.slashTrim(path),
            controller: controller,
            params: [],
            instance: {},
            args: ''
        }
        this.routes.push(this.route)

        // Instantiating
        const Controller = this.route.controller
        this.route.instance.controller = new Controller()

        return this
    }

    with (param, regex) {
        this.route.params[param] = regex

        return this
    }

    error (errorController) {
        // Instantiating
        const ErrorController = errorController
        this.error.controller = new ErrorController()
    }

    run () {
        // Event delegation
        this.eventDelegation.run()

        // Preload
        const path = S.Win.path
        this.p.path = {new: path}
        const instance = this.getInstance(path)

        instance.controller.preload()
    }

    getInstance (url) {
        this.url = this.slashTrim(url)
        const routesL = this.routes.length

        // Page controller
        for (let i = 0; i < routesL; i++) {
            if (this.match(this.routes[i])) {
                return {
                    controller: this.routes[i].instance.controller
                }
            }
        }

        // Error
        return {
            controller: this.error.controller
        }
    }

    match (route) {
        if (route.path === this.url) {
            return true
        }

        let path = route.path.replace(/:([\w]+)/g, (total, part1) => {
            return '(' + route.params[part1] + ')'
        })
        path = path.replace(/\//g, '\\/')
        const regex = new RegExp(path)
        const matches = this.url.match(regex)

        if (matches !== null) {
            if (matches.length > 1) {
                matches.shift()
                route.args = matches
                return true
            }
        }

        return false
    }

    slashTrim (string) {
        return string.replace(/^\/|\/$/g, '')
    }

}

export default Router
