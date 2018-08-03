module.exports = {
    src: 'src/',
    dest: 'dist/',
    compiler: {
        css: {
            entry: 'asset/css/main.css',
            dest: 'public/css/app.css',
            autoprefixer: ['last 2 versions']
        },
        js: {
            entry: 'asset/js/main.js',
            dest: 'public/js/app.js',
            eslint: 'build/node/common/config/.eslintrc'
        }
    },
    minify: {
        root: 'public/',
        css: 'css/app.css',
        js: 'js/app.js',
        html: {
            view: 'app/View/',
            folder: ['base', 'common', 'page']
        }
    },
    copy: [
        'app/Bundle',
        'app/Config',
        'app/Controller',
        'app/Core',
        'app/Lib',
        'app/Model',
        'engine',
        'public/fav',
        'public/font',
        'public/media',
        'public/og',
        'public/.htaccess',
        'public/.htpasswd',
        'public/index.php',
        'public/robots.txt',
        'public/sitemap.xml'
    ],
    localOnlyImgs: 'public/media/img/_local-only',
    internal: [
        'app/View/base/main.php',
        'app/View/base/p404.php',
        'app/View/base/debug.php'
    ],
    additionalScript: []
}
