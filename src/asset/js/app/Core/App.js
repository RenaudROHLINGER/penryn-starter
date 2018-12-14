import S from '@ariiiman/s'
import Support from './Support.js'
import Router from '../../engine/Router.js'
import P404 from '../Controller/P404.js'
import Main from '../Controller/Main.js'

class App {

    constructor () {
        new Support()

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
        }

        S.TopWhenRefresh()

        new Router({
            'p404': P404,
            'main': Main
        })
    }

}

export default App
