var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');

var paths = {
  scripts: ['./src/js/**/*.js'],
  style: ['./src/css/**/*.css'],
  html: ['./src/index.html'],
  dist: './dist/'
};

gulp.task('default', ['html', 'styles']);

// Copy html files
gulp.task('html', function() {
  return gulp.src(paths.scripts.concat(paths.html))
    .pipe(gulp.dest(paths.dist));
});

// Copy css files
gulp.task('styles', function() {
  return gulp.src(paths.style)
    .pipe(gulp.dest('./dist/css/'))
});

// Push build to gh-pages
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});
