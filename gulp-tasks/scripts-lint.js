var jshint = require('gulp-jshint')
	stylish = require('jshint-stylish');

module.exports = function (config, paths, gulp, plugins) {
	return function () {
		gulp.src(paths.scripts.lint)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
	};
};