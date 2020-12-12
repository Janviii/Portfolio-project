const {src, dest, series, parallel} = require('gulp');
const del = require('del');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');

//clean Task
function cleanTask() {
    return del('dest');
}


//html Task
function htmlTask() {
    return src('src/*.html')
    .pipe(dest('dist'))
}

//css Task
function stylesTask() {
    return src('src/styles/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(concat('all.css'))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css'))
}

//js Task
function scriptsTask() {
    return src('src/scripts/*.js')
    .pipe(dest('dist/js'))
}

//images Task
function imagesTask() {
    return src('src/images')
    .pipe(imagemin())
    .pipe(dest('dist/images'))
}

exports.default = series(
    cleanTask,
    parallel(htmlTask, stylesTask, scriptsTask, imagesTask)
);