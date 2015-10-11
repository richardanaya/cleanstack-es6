var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config').sass;

gulp.task('sass', function() {
  gulp.src(config.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dest));
});
