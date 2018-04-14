/*

CONTROLLER
──────────

Xhr.controller(pageName, myCallback, args);

function myCallback(response, args) {

    // Insert HTML
    app.insertAdjacentHTML('beforeend', response);

}

ONPOPSTATE
──────────

Xhr.onPopstate()

*/

import S from 'skylake'

class Xhr {

    static controller (page, callback, args) {
        const path = 'index.php?url=' + page + '&xhr=true'
        const xhr = new XMLHttpRequest()

        xhr.open('GET', path, true)

        xhr.onreadystatechange = _ => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const xhrC = JSON.parse(xhr.responseText).xhrController

                S.G.tag('title')[0].textContent = xhrC.title

                getHistoryUpdate()
                callback(xhrC.view, args)
            }
        }
        xhr.send(null)

        // Browser history update
        function getHistoryUpdate () {
            const pageUrl = page === 'home' ? '/' : page

            history.pushState({key: 'value'}, 'titre', pageUrl)
        }
    }

    static onPopstate () {
        const d = document
        const w = window

        let blockPopstateEvent = d.readyState !== 'complete'

        S.L(w, 'add', 'load', load)
        S.L(w, 'add', 'popstate', popstate)

        function load () {
            setTimeout(_ => {
                blockPopstateEvent = false
            }, 0)
        }

        function popstate (e) {
            if (blockPopstateEvent && d.readyState === 'complete') {
                e.preventDefault()
                e.stopImmediatePropagation()
            }
        }

        w.onpopstate = e => {
            /* state is null when change url without change page → story stream social wall for example */
            if (e.state !== null) {
                w.location.href = S.Win.path
            }
        }
    }

}

export default Xhr
