var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var stylus = require('gulp-stylus');
//var exec = require('child_process').exec;
var minify = require('gulp-minify');
var jsDir = 'js/*.js';
var cssDir = 'css/*.styl';

gulp.task('js', function () {
    return gulp.src(jsDir)
        /*.pipe(minify({
            ext: {
                src: '-debug.js',
                min: '.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('js/dist'))*/
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('css', function () {
    return gulp.src(cssDir)
        .pipe(stylus())
        .pipe(gulp.dest('css/dist'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch(cssDir, ['css']);
    gulp.watch(jsDir, ['js']);
});

gulp.task('runserver', ['watch'], function () {
    var proc = exec('python manage.py runserver')
});
