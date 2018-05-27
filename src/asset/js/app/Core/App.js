import S from '@ariiiman/s'
import Support from './Support.js'
import Router from '../../engine/Router.js'
import Debug from '../Controller/Debug.js'
import P404 from '../Controller/P404.js'
import Main from '../Controller/Main.js'

class App {

    constructor () {
        new Support()

        S.TopWhenRefresh()

        new Router({
            'debug': Debug,
            'p404': P404,
            'main': Main
        })
    }

}

export default App
