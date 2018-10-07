'use strict';

var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
// var fileinclude = require('gulp-file-include');
// var del = require('del');
var gulp = require('gulp');

// gulp.task('clean', function(){
//   return del('tmp/');
// })

// gulp.task('fileinclude', function() {
// 	gulp.src(['./src/*.html','!./src/include/**/*.html'])
// 		.pipe(fileinclude({
// 			prefix: '@@',
// 			basepath: '@file'
// 		}))
// 		.pipe(gulp.dest("./tmp/"));
// });

gulp.task('sass', function () {
	return gulp.src('./src/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(gulp.dest('./src/css/'))
		.pipe(browserSync.reload({
			stream: true
		}))
		.pipe(livereload({start: true}))
});

// gulp.task('js', function(){
// 	return gulp.src('./app/scripts/**/*.js')
// 		.pipe(gulp.dest('./app/scripts/'))
// 		.pipe(browserSync.reload({
// 			stream: true
// 		}))
// 		.pipe(livereload({start: true}))
// });



//host//
gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'src'
		},
    notify: false
	})
});

// gulp.task('minify:css', ()=> {
// 	return gulp.src('app/styles/**/*.css')
// 		.pipe(sourcemaps.init())
// 		.pipe(cleanCSS({compatibility: 'ie8'}))
// 		.pipe(rename({
// 	      suffix: '.min'
// 	    }))
// 		.pipe(sourcemaps.write(''))
// 		.pipe(gulp.dest('app/'));
// });

gulp.task('sass:watch', ['browserSync', 'sass'],function () {
	livereload.listen();
	gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./src/js/**/*.js', browserSync.reload);
	gulp.watch('./src/**/*.html', browserSync.reload);
	gulp.watch('./src/', browserSync.reload);
});
