var gulp = require('gulp'),
	inlinesource = require('gulp-inline-source'),
	inject = require('gulp-inject'),
	removeHtmlComments = require('gulp-remove-html-comments');


module.exports = function (config, paths, gulp, plugins) {
	return function () {
		gulp.src('./amp/src/*.html')
		.pipe(inject(gulp.src(['./css/amp.css']), {
			starttag: '<!-- inject:amp:css -->',
			transform: function(filepath, file) {
				return file.contents.toString();
			}
		}))
		.pipe(removeHtmlComments())
        .pipe(gulp.dest('./amp'));
	};
};