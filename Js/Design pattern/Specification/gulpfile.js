var gulp = require('gulp'),
    babel = require('gulp-babel'),
    mocha = require('gulp-mocha'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    istanbul = require('gulp-istanbul'),
    plumber = require('gulp-plumber'),
    del = require('del'),
    isparta = require('isparta');


require('babel-core/register');


gulp.task('default', ['conf'], function() {
    return gulp.src('src/**/*.js')
        .pipe(plumber())
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('conf', ['clean'], function() {
    return gulp.src('./src/conf/*')
        .pipe(gulp.dest('dist/conf'));
});

gulp.task('clean', function() {
    return del([
        'dist/**/*'
    ]);
});


/* Unit test task */
gulp.task('pre-test', function() {
    return gulp.src(['src/app/**/*.js'])
        .pipe(plumber())
        .pipe(istanbul({
            instrumenter: isparta.Instrumenter,
            includeUntested: true
        }))
        .pipe(istanbul.hookRequire())
})

gulp.task('test:unit', ['pre-test'], function() {
    return gulp.src(['src/test/**/*.spec.js'])
        .pipe(plumber())
        .pipe(mocha({
            reporter: 'spec'
        }))
        .pipe(istanbul.writeReports({}))
})

gulp.task('watch', function() {
    watch('src/**/*.js', function() {
        gulp.start('test');
    });
});
