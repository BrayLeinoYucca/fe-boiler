var sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	sassLint = require('gulp-sass-lint');

module.exports = function (config, paths, gulp, plugins) {
	return function () {
		gulp.src(paths.sass.src)
		.pipe(sassLint({
			rules: {
				'no-warn': 0,
				'no-ids': 1,
				'indentation': 0,
				'no-css-comments': 0,
				'property-sort-order': 0,
				'mixins-before-declarations': 0,
				'empty-line-between-blocks': 0,
				'no-mergeable-selectors': 0
			},
		}))
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError())
		.pipe(plumber({
			handleError: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(autoprefixer(config.autoprefixer))
		.pipe(gulp.dest(paths.sass.dist))
	};
};
