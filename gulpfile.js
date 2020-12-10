const {src, dest, series, parallel} = require('gulp');

//html Task
function htmlTask() {
    return src('src/*.html')
    .pipe(dest('dist'))
}

//css Task
function stylesTask() {
    return src('src/styles/*.css')
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
    .pipe(dest('dist/images'))
}

exports.default = series(htmlTask, stylesTask, scriptsTask, imagesTask);