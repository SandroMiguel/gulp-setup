const autoprefixer = require('autoprefixer')
const babel = require('gulp-babel')
const cssnano = require('cssnano')
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

const path = {
  srcFolder: 'src',
  destFolder: 'public',
  nodeModulesFolder: 'node_modules',
  get src() {
    return {
      scssFiles: [path.srcFolder, 'css', '*.scss'].join('/'),
      jsFiles: [path.srcFolder, 'js', '*.js'].join('/'),
      cssMinFiles: [path.nodeModulesFolder, 'cecilia-css', 'dist', '*.min.css'].join('/'),
    }
  },
  get dest() {
    return {
      cssFolder: [path.destFolder, 'css'].join('/'),
      css: {
        vendorFolder: [path.destFolder, 'css', 'vendor'].join('/'),
      },
      jsFolder: [path.destFolder, 'js'].join('/'),
    }
  },
}

/**
 * Style tasks.
 *
 * @example gulp.watch(path.src.scssFiles, style)
 */
function style() {
  return gulp
    .src(path.src.scssFiles)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(rename({suffix: '.min'}))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(path.dest.cssFolder))
}

/**
 * Copy minified CSS to public folder.
 *
 * @example const build = gulp.series(. . ., copyMinifiedCss, . . .)
 */
function copyMinifiedCss() {
  return gulp.src(path.src.cssMinFiles)
    .pipe(gulp.dest(path.dest.css.vendorFolder))
}

/**
 * JavaScript tasks.
 *
 * @example gulp.watch(path.src.jsFiles, javascript)
 */
function javascript() {
  return gulp
    .src(path.src.jsFiles)
    .pipe(sourcemaps.init())
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(path.dest.jsFolder))
}

/**
 * Cache Bust.
 *
 * @example const build = gulp.series(. . . , cacheBust, . . .)
 */
function cacheBust() {
  const cbString = new Date().getTime()
  return gulp.src([[path.destFolder, 'index.php'].join('/')])
    .pipe(replace(/cb=\d+/g, `cb=${cbString}`))
    .pipe(gulp.dest(path.destFolder))
}

/**
 * Watch task.
 *
 * @example const build = gulp.series(. . ., watch)
 */
function watch() {
  gulp.watch(path.src.scssFiles, style)
  gulp.watch(path.src.jsFiles, javascript)
}

/**
 * Build.
 */
const build = gulp.series(
  gulp.parallel(style, javascript),
  copyMinifiedCss,
  cacheBust,
  watch,
)

exports.watch = watch
exports.style = style
exports.javascript = javascript
exports.copyMinifiedCss = copyMinifiedCss
exports.cacheBust = cacheBust
exports.default = build
