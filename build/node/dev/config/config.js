module.exports = {
    js: {
        entry: 'src/asset/js/main.js',
        dest: 'src/public/js/app.js',
        watch: [
            './src/asset/js/app/**/*.js',
            './src/asset/js/engine/**/*.js',
            './src/asset/js/lib/**/*.js',
            './src/asset/js/main.js'
        ],
        eslint: 'build/node/common/config/.eslintrc'
    },
    css: {
        entry: 'src/asset/css/main.css',
        dest: 'src/public/css/app.css',
        watch: [
            './src/asset/css/main.css',
            './src/asset/css/app/**/*.css',
            './src/asset/css/lib/**/*.css'
        ],
        autoprefixer: ['last 2 versions']
    },
    php: {
        watch: [
            './src/app/**/*.php',
            './src/engine/**/*.php'
        ]
    }
}
