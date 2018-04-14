import S from '@ariiiman/s'

class Support {

    static init () {
        if (S.Snif.isIEolderThan11 || S.Snif.isSafariOlderThan8) {
            S.Dom.html.className = 'old-browser'
        }

        if (S.Snif.isMobile) {
            S.Dom.body.className = 'is-mobile'
        }
    }

}

export default Support
