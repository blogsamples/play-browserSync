var gulp        = require('gulp');
var less        = require('gulp-less');
var browserSync = require('browser-sync');

// Registering a 'less' task that just compile our LESS files to CSS
gulp.task('less', function() {
  return gulp.src('./resources/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./public/stylesheets'));
});

// Let's watch our LESS files and compile them at each modification
gulp.task('watch', function () {
  gulp.watch(['./resources/less/*.less'], ['less']);
});

//
gulp.task('serve', function () {
  browserSync({
    // By default, Play is listening on port 9000
    proxy: 'localhost:9000',
    // We will set BrowserSync on the port 9001
    port: 9001,
    // Reload all assets
    // Important: you need to specify the path on your source code
    // not the path on the url
    files: ['public/stylesheets/*.css', 'public/javascripts/*.js', 'app/views/*.html'],
    open: false
  });
});

// Creating the default gulp task
gulp.task('default', ['less', 'watch', 'serve']);
