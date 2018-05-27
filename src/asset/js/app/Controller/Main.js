import Loader from '../Bundle/Transition/Loader.js'
import Transition from '../Bundle/Transition/Transition.js'

class Main {

    preload () {
        Loader.run()
    }

    intro () {
        Transition.intro()
    }

    outro () {
        Transition.outro()
    }

}

export default new Main()
