'use strict';

module.exports = {

    build_dir: 'build',
    compile_dir: 'dist',

    meta: {
        title: 'Friends With Benefits',
        description: 'Becoming a Valuable Member of the Sass Community',
        viewport: 'width=device-width, initial-scale=1, user-scalable=no, minimal-ui'
    },

    app_files: {
        main: ['slide.js'],
        js: ['src/js/**/*.js'],
        html: ['src/*.html', 'src/slides/**/*.html'],
        styles: ['src/sass/**/*']
    },

    vendor_files: {
        js: [
            'bower_components/zepto/zepto.js',
            'vendor/prism/prism.js'
        ],
        css: [
            'bower_components/sanitize-css/dist/sanitize.css',
            'vendor/prism/prism.css',
        ]
    }
};
