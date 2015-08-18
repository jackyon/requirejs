'use strict';

var gulp = require('gulp'),
	connect = require('gulp-connect'),
	autoprefixer = require('gulp-autoprefixer');
 
gulp.task('connect', function() {
	connect.server({
		root: 'app',
		port: 9998,
		livereload: true
	});
});

gulp.task('html', function () {
	gulp.src('./app/**/*.html')
    	.pipe(connect.reload());
});

gulp.task('css', function () {
	gulp.src('./app/css/**/*.css')
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css/'))
    	.pipe(connect.reload());
});

gulp.task('js', function () {
	gulp.src('./app/js/**/*.js')
    	.pipe(connect.reload());
});
 
gulp.task('watch', function () {
	gulp.watch(['./app/**/*.html'], ['html']);
	gulp.watch(['./app/css/**/*.css'], ['css']);
	gulp.watch(['./app/js/**/*.js'], ['js']);
});
 
gulp.task('default', ['connect', 'watch']);