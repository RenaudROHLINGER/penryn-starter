import Preloader from '../Bundle/Transition/Preloader.js'
import Transition from '../Bundle/Transition/Transition.js'

class P404 {

    preload () {
        Preloader.run()
    }

    intro () {
        Transition.intro()
    }

    outro () {
        Transition.outro()
    }

}

export default new P404()
