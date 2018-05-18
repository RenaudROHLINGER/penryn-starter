import S from '@ariiiman/s'
import Xhr from './Xhr.js'

class EventDelegation {

    constructor (getInstance) {
        // Opts
        this.getInstance = getInstance

        // Parameters
        this.p = window.Penryn
        this.xhr = S.G.id('xhr')

        // Bind
        S.BM(this, ['eventDelegation', 'done', 'xhrCallback'])
    }

    run () {
        S.L(S.Dom.body, 'add', 'click', this.eventDelegation)
    }

    eventDelegation (event) {
        const w = window
        let target = event.target
        let targetIsATag = false
        let targetIsASubmit = false

        while (target) {
            if (target.tagName === 'A') {
                targetIsATag = true
                break
            } else if ((target.tagName === 'INPUT' || target.tagName === 'BUTTON') && target.type === 'submit') {
                targetIsASubmit = true
                break
            }
            target = target.parentNode
        }

        if (targetIsATag) {
            const targetHref = target.dataset.href === undefined ? target.href : target.dataset.href

            if (target.classList.contains('_tb')) {
                prD()
                w.open(targetHref)
            } else if (target.classList.contains('_tbs')) {
                prD()

                if (this.isTouch && this.isSafari) {
                    w.location.href = targetHref
                } else {
                    w.open(targetHref)
                }
            } else {
                const hrefBeginByHash = targetHref.charAt(targetHref.length - 1) === '#'
                const hrefIsMailto = targetHref.substring(0, 6) === 'mailto'

                if (hrefBeginByHash) {
                    prD()
                } else if (!hrefIsMailto && !target.classList.contains('_ost') && targetHref !== '' && target.getAttribute('target') !== '_blank') {
                    prD()

                    if (this.p.outroIsOn) {
                        this.path = {
                            old: S.Win.path,
                            new: targetHref.replace(/^.*\/\/[^/]+/, '')
                        }

                        if (this.path.old !== this.path.new) {
                            this.p.outroIsOn = false

                            this.target = target
                            this.xhrReq()
                        }
                    }
                } else if (hrefIsMailto) {
                    prD()
                    const myWindow = w.open(targetHref)
                    setTimeout(_ => {
                        myWindow.close()
                    }, 300)
                }
            }
        } else if (targetIsASubmit) {
            prD()
        }

        function prD () {
            event.preventDefault()
        }
    }

    xhrReq () {
        const oldInstance = this.getInstance(this.path.old)

        this.p.done = this.done
        this.p.target = this.target
        this.p.path = this.path

        // Old outro
        oldInstance.controller.outro()
    }

    done () {
        Xhr.controller(this.path.new, this.xhrCallback)
    }

    xhrCallback (response) {
        const newInstance = this.getInstance(this.path.new)

        this.p.xhr = {
            insertNew: _ => {
                this.xhr.insertAdjacentHTML('beforeend', response)
            },
            removeOld: _ => {
                const oldXhrContent = this.xhr.children[0]
                oldXhrContent.parentNode.removeChild(oldXhrContent)
            }
        }
        this.p.outroIsOn = true

        // New intro
        newInstance.controller.intro()
    }

}

export default EventDelegation
