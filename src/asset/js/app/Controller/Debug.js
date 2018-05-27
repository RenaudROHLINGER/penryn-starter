import S from '@ariiiman/s'
import GPU from '../Bundle/GL/GPU/GPU.js'

class Debug {

    preload () {
        this.n = navigator
        this.ua = this.n.userAgent
        const info = S.G.tag('ul', S.G.id('debug'))[0].children
        const space = ': '
        const canvas = S.G.id('gl')
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') // Edge + IE
        const gpu = GPU.run(gl)
        const browser = this.getBrowser()

        // OBJET
        const obj = {
            'OS': this.getOS(),
            'Browser Name': browser.name,
            'Browser Version': browser.version,
            'CPU cores': this.n.hardwareConcurrency,
            'GPU': gpu.renderer,
            'DPP': gpu.dpp
        }

        // DOM
        let i = 0
        for (var key in obj) {
            info[i++].textContent = key + space + obj[key]
        }
    }

    getBrowser () {
        var ua = this.ua
        var tem
        var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || []
            return {name: 'IE', version: (tem[1] || '')}
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/)
            if (tem != null) {
                return {
                    name: tem[1].replace('OPR', 'Opera'),
                    version: tem[2]
                }
            }
        }
        M = M[2] ? [M[1], M[2]] : [this.n.appName, this.n.appVersion, '-?']
        if ((tem = ua.match(/version\/(\d+)/i)) != null) {
            M.splice(1, 1, tem[1])
        }
        return {
            name: M[0],
            version: M[1]
        }
    }

    getOS () {
        var ua = this.ua
        var platform = this.n.platform
        var macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
        var windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
        var iosPlatforms = ['iPhone', 'iPad', 'iPod']
        var os
        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'Mac OS'
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS'
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows'
        } else if (/Android/.test(ua)) {
            os = 'Android'
        } else if (!os && /Linux/.test(platform)) {
            os = 'Linux'
        }
        return os
    }

}

export default new Debug()
