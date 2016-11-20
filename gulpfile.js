var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var exec = require('child_process').exec;



gulp.task('jshint', function () {
	gulp.src([
		'test/*.js',
		'examples/*.js'
	])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter("default"));
});

gulp.task ( 'jade', function() {
	 gulp.src('views/**/*.jade')
		.pipe(plugins.livereload({start: true}));
}) ;

gulp.task( "default", ["jshint", "mocha"], function() {
	
});



gulp.task ( "mocha", function() {
	gulp.src('test/*.js', {read: false})
		.pipe(plugins.mocha()) ;
}) ;