const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

// автообновляемый сервер
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

// компилятор sass и scss
function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
};

// минификация файла style.css
function minCss(done) {
  src('./css/**/*.css')
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(dest('./css'));
      done();
};

exports.serve = bs;
exports.minCss = minCss;

// "gulp serve" - прописывать в терминал для запуска