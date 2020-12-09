### gulp-jsminer (javascript 压缩)

```
    const jsminer = require('gulp-jsminer');

    gulp.task('default', () => {
        gulp.src('assets/js/**/*')
            .pipe(jsminer({ toplevel: true }))
            .pipe(gulp.dest('dist'));
    });
```

## options

see [terser](https://github.com/terser/terser#command-line-options) options

### Listen

ISC
