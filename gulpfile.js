const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

// CSS minify
gulp.task('minify-css', () => {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
  .pipe(gulp.dest('dist'));
});