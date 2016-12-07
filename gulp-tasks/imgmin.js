var imagemin = require('gulp-imagemin'),
logger = require('gulp-logger');

module.exports = function (config, paths, gulp, plugins) {
	return function () {
		gulp.src(paths.images.src)
		.pipe(logger({
			before: 'Starting image compression...',
			after: 'Image compression complete complete!',
			showChange: true
		}))
		.pipe(imagemin(config.images))
		.pipe(gulp.dest(paths.images.dist));
	};
};