var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');

var paths = {
  scripts: ['./src/js/**/*.js'],
  html: ['./src/index.html'],
  dist: './dist/'
};

gulp.task('default', function(){
  gulp.src(paths.scripts.concat(paths.html))
    .pipe(gulp.dest(paths.dist));
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});
