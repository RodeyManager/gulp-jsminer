/**
 * Created by Rodey on 2015/11/5.
 */

var gulp        = require('gulp'),
    concat        = require('gulp-concat'),
    jsminer     = require('../index');

var basePath = process.cwd();
console.log(basePath);


gulp.task('default', function(){

    gulp.src('assets/js/*')
        .pipe(jsminer())
        .pipe(gulp.dest('dist'));
});

gulp.task('concat', function(){

    gulp.src('assets/js/*.js')
        .pipe(concat('min.js'))
        .pipe(jsminer())
        .pipe(gulp.dest('dist'));
});