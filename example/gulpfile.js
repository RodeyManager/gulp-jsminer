/**
 * Created by Rodey on 2015/11/5.
 */

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jsminer = require('../index');

var basePath = process.cwd();
console.log(basePath);

gulp.task('default', function() {
    gulp
        .src('assets/js/*')
        .pipe(jsminer())
        .pipe(gulp.dest('dist'));
});

gulp.task('concat', function() {
    gulp
        .src('assets/js/*.js')
        .pipe(concat('min.js'))
        // options https://www.npmjs.com/package/uglify-js#minify-options
        .pipe(jsminer({ toplevel: true }))
        .pipe(gulp.dest('dist'));
});
