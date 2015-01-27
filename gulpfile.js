var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var deploy      = require('gulp-gh-pages');

var paths = {
  scripts: ['./src/js/**/*.js'],
  style: ['./src/css/**/*.css'],
  html: ['./src/index.html'],
  dist: './dist/'
};

// Copy html files
gulp.task('html', function() {
  return gulp.src(paths.scripts.concat(paths.html))
    .pipe(gulp.dest(paths.dist))
    .pipe(reload({stream:true}));
});

// Copy css files
gulp.task('style', function() {
  return gulp.src(paths.style)
    .pipe(gulp.dest('./dist/css/'))
    .pipe(reload({stream:true}));
});

// Local server
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./dist"
    }
  });
});

// Default task will launch the local server and watch files
gulp.task('default', ['browser-sync'], function() {

  gulp.watch(paths.html, ['html', browserSync.reload]);
  gulp.watch(paths.sytle, ['style', browserSync.reload]);
});

// Push build to gh-pages
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});
