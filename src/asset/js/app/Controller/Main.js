import Preloader from '../Bundle/Transition/Preloader.js'
import Transition from '../Bundle/Transition/Transition.js'

class Main {

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

export default new Main()
