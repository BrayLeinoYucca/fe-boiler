var concat = require('gulp-concat');

module.exports = function (config, paths, gulp, plugins) {
	return function () {
		gulp.src(paths.scripts.src)
		.pipe(concat('js.min.js'))
		.pipe(gulp.dest(paths.scripts.dist))
	};
};
