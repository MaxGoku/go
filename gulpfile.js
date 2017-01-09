/**
 * Created by ЮђПе on 2017/1/6.
 */

var gulp = require('gulp');
var ug = require('gulp-uglify');
gulp.task('ys', function () {
    gulp.src("./js/go.js").pipe(ug()).pipe(gulp.dest("./js/gomin.js"));
});