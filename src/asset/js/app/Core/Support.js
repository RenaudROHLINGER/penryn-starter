import S from '@ariiiman/s'

class Support {

    constructor () {
        if (S.Snif.isIEolderThan11 || S.Snif.isSafariOlderThan8) {
            S.Dom.html.className = 'old-browser'
        }

        const bClass = S.Snif.isMobile ? 'mobile' : 'desktop'
        S.Dom.body.className = 'is-' + bClass
    }

}

export default Support
