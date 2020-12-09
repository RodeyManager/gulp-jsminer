### gulp-jsminer (javascript 压缩)

```javascript
const jsminer = require('gulp-jsminer');

gulp.task('default', () => {
  gulp
    .src('assets/js/**/*')
    .pipe(jsminer({ toplevel: true }))
    .pipe(gulp.dest('dist'));
});
```

```javascript
// 转换ES6+后进行压缩
const babel = require('gulp-babel');
const jsminer = require('gulp-jsminer');

gulp.task('default', () => {
  gulp
    .src('assets/js/**/*')
    .pipe(babel())
    .pipe(jsminer())
    .pipe(gulp.dest('dist'));
});
```

## options

see [terser](https://github.com/terser/terser#command-line-options) options

### Listen

ISC
