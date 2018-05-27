const config = require('../config/config.js')
const fs = require('fs')
const cssnano = require('cssnano')
const writeInternal = require('./writeInternal.js')
const consoleEnd = require('./consoleEnd.js')

module.exports = _ => {
    const css = fs.readFileSync(config.src + config.minify.root + config.minify.css, 'utf8')

    cssnano.process(css).then(result => {
        writeInternal({
            content: result.css,
            type: css,
            callback: callback
        })
    })

    function callback () {
        consoleEnd('CSS')
    }
}
