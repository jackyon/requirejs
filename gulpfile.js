'use strict';

var gulp = require('gulp'),
	// autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync');

gulp.task('html', function () {
	gulp.src('./app/*.html')
});

gulp.task('css', function () {
	gulp.src('./app/css/*.css')
		// .pipe(autoprefixer({
  //           browsers: ['last 2 versions'],
  //           cascade: false
  //       }))
  //       .pipe(gulp.dest('app/css/'))
});

gulp.task('js', function () {
	gulp.src('./app/js/*.js')
});

gulp.task('html-watch', ['html'], browserSync.reload);
gulp.task('css-watch', ['css'], browserSync.reload);
gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('watch', function () {
	browserSync({
		server: {
			baseDir: 'app/'
		}
		// proxy: "yourlocal.dev"
	})
	gulp.watch(['./app/*.html'], ['html-watch']);
	gulp.watch(['./app/css/*.css'], ['css-watch']);
	gulp.watch(['./app/js/*.js'], ['js-watch']);
});
 
gulp.task('default', ['watch']);