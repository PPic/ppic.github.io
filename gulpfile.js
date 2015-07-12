var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('default', ['scss']);

gulp.task('scss', function(done) {
    gulp.src('./scss/*')
        .pipe(sass())
        .pipe(concat('stylesheet.css'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./stylesheets'))
        .on('end', done);
});