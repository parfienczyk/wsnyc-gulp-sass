//
// Modules
// ======================================================
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

//
// Styles (SCSS + autoprefixer + minify)
// ======================================================
gulp.task('styles', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe($.sass())
        .pipe($.autoprefixer({browsers: ['last 10 version']}))
        .pipe($.csso())
        .pipe(gulp.dest('./dist/css/'));
});
