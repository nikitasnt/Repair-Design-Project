const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// const cssmin = require('gulp-cssmin');
// const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

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

// // минификация файла style.css
// function minCss(done) {
//   src('./css/**/*.css')
//       .pipe(cssmin())
//       .pipe(rename({suffix: '.min'}))
//       .pipe(dest('./css'));
//       done();
// };

// минификация css и перенос в dist
function buildCSS(done) {
  src('css/**/**.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist/css/'));
  done();
}

// минификация js и перенос в dist
function buildJS(done) {
  src('js/*.js')
    .pipe(minify({
      ext:{
        min:'.js'
    },
      ignoreFiles: ['.min.js'],
      noSource: true
    }))
    .pipe(dest('dist/js/'));
  done();
}

// минификация html и перенос в dist
function html(done) {
  src('**.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/'));
  done();
}

// перенос php в dist
function php(done) {
  src('**.php')
    .pipe(dest('dist/'));
  src('phpmailer/**/**')
    .pipe(dest('dist/phpmailer/'));
  done();
}

// перенос шрифтов в dist
function fonts(done) {
  src('fonts/**/**')
    .pipe(dest('dist/fonts/'));
  done();
}

function imagemin(done) {
  src('img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({key: 'QF4PzXdtRCzzvHrFqSt7tX1sDTwt6LQs'}))
    .pipe(dest('dist/img/'));
  src('img/**/*.{svg,ico}')
    .pipe(dest('dist/img/'));
  done();
}



exports.serve = bs;
// exports.minCss = minCss;
exports.build = series(buildCSS, buildJS, html, php, fonts, imagemin);
exports.buildHCJ = series(buildCSS, buildJS, html);
exports.buildhtml = series(html);
exports.buildc = series(buildCSS);

// "gulp serve" - прописывать в терминал для запуска сервера
// "gulp build" - для создания папки dist с готовым сайтом с минификацией и сжатием картинок