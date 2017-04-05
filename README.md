### gulp-jsminer (javascript压缩)

```
    const gulpJsminer = require('gulp-jsminer');
    
    gulp.task('default', () => {
        gulp.src('assets/js/**/*')
            .pipe(gulpJsminer())
            .pipe(gulp.dest('dist')); 
    });

```
## options
see [ugligy-js](https://www.npmjs.com/package/uglify-js) options

### Listen
ISC