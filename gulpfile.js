var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	plugins = require('gulp-load-plugins')();

var paths = {
	scripts: {
		src: ['./js/src/vendors/*.js', './js/src/components/*.js', './js/src/*.js'],
		dist: './js/dist',
		lint: ['./js/src/components/*.js', './js/src/*.js'],
	},
	sass: {
		src: './scss/**/*.scss',
		dist: './css'
	},
	css: {
		src: './css/style.css',
		tmp: './tmp',
	},
	images: {
		src: './img/src/**/*.{jpg,jpeg,png,gif,svg,PNG}',
		dist: './img/'
	}
};

var config = {
	autoprefixer: {
		browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
	},
	images: {
		options: {
	      optimizationLevel: 3,
	      progessive: true,
	      interlaced: true
	    }
	}
}

// gulp.task('scripts:build', function() {
// 	return gulp.src(paths.scripts.src)
// 		.pipe(concat('js.min.js'))
// 		.pipe(uglify())
// 		.pipe(gulp.dest(paths.scripts.dist))
// });


function getTask(task) {
    return require('./gulp-tasks/' + task)(config, paths, gulp, plugins);
}

gulp.task('scripts-dev', getTask('scripts-dev'));
gulp.task('scripts-lint', getTask('scripts-lint'));
gulp.task('sass-dev', getTask('sass-dev'));
gulp.task('sass-build', getTask('sass-build'));
gulp.task('imgmin', getTask('imgmin'));


gulp.task('watch', function () {
	gulp.watch(paths.sass.src, ['sass-dev']);
	gulp.watch(paths.scripts.src, ['scripts-dev', 'scripts-lint']);
});

gulp.task('build', ['sass-build', 'imgmin']);
