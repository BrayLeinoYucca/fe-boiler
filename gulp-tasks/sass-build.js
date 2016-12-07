var cleanCSS = require('gulp-clean-css'),
	csscomb = require('gulp-csscomb'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');
module.exports = function (config, paths, gulp, plugins) {
	return function () {
		gulp.src(paths.sass.src)
		.pipe(sass())
		.pipe(autoprefixer(config.autoprefixer))
		.pipe(csscomb())
		.pipe(cleanCSS({debug: true}, function(details) {
			console.log('Original size of ' + details.name + ': ' + details.stats.originalSize + 'kb');
			console.log('Minified size of ' + details.name + ': ' + details.stats.minifiedSize + 'kb');
		}))
		.pipe(gulp.dest(paths.sass.dist))
	};
};