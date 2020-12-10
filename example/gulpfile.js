/**
 * Created by Rodey on 2015/11/5.
 */

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  babel = require('gulp-babel'),
  ts = require('gulp-typescript'),
  jsminer = require('../index');

gulp.task('default', function () {
  gulp.src('assets/js/*').pipe(babel()).pipe(jsminer()).pipe(gulp.dest('dist'));
});

gulp.task('concat', function () {
  gulp
    .src('assets/js/*.js')
    .pipe(babel())
    .pipe(concat('min.js'))
    // options https://github.com/terser/terser#command-line-options
    .pipe(jsminer())
    .pipe(gulp.dest('dist'));
});

gulp.task('ts', function () {
  gulp.src('assets/js/*.ts').pipe(ts()).pipe(jsminer()).pipe(gulp.dest('dist'));
});
