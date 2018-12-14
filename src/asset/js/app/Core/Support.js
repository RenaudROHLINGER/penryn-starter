import S from '@ariiiman/s'

class Support {

    constructor () {
        const glSupport = this.glTest()

        if (S.Snif.isIEolderThan11 || S.Snif.isSafariOlderThan8) {
            S.Dom.html.className = 'old-browser'
        } else if (glSupport === false) {
            S.Dom.html.className = 'no-gl'
        }

        this.p = Penryn
        this.p.isMobile = S.Snif.isMobile
        const bClass = this.p.isMobile ? 'mobile' : 'desktop'
        S.Dom.body.className = 'is-' + bClass
    }

    glTest () {
        try {
            const c = document.createElement('canvas')
            return !!window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl'))
        } catch (e) {
            return false
        }
    }

}

export default Support
