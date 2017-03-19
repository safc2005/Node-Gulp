var gulp = require('gulp'),
    uglify = require('gulp-uglify');

// scripts tasks
// uglify
gulp.task('scripts', function () {
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/js'));
});

// scripts tasks
// console log example
gulp.task('consolelog', function () {
  console.log('example string test');
});

// watch task - watches js - and run scripts task on each save
gulp.task('watch', function () {
  gulp.watch('js/*.js', ['scripts']);
});


// deafult task init all above tasks
gulp.task('default', ['scripts', 'consolelog', 'watch']);


/*
STEPHEN NOTES:

npm install -g gulp // installs gulp globally
npm install --save-dev gulp // installs into local project
npm install --save-dev gulp-uglify // installs gulp uglify

*/
