'use strict';

var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	browserSync = require('browser-sync');

gulp.task('html', function () {
	gulp.src('./app/*.html')
});

gulp.task('css', function () {
	gulp.src('./app/css/**/*.css')
});

gulp.task('js', function () {
	gulp.src('./app/js/**/*.js')
});

gulp.task('html-watch', ['html'], browserSync.reload);
gulp.task('css-watch', ['css'], browserSync.reload);
gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('sass-watch', function () {
  return sass('./app/sass')
    .on('error', sass.logError)
    .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function () {
	browserSync({
		server: {
			baseDir: 'app/'
		}
		// proxy: "yourlocal.dev"
	})
	gulp.watch(['./app/*.html'], ['html-watch']);
	gulp.watch(['./app/sass/**/*.scss'], ['sass-watch']);
	gulp.watch(['./app/css/**/*.css'], ['css-watch']);
	gulp.watch(['./app/js/**/*.js'], ['js-watch']);
});
 
gulp.task('default', ['watch']);