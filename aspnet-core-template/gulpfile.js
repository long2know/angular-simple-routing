/// <binding AfterBuild='default' Clean='clean' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

gulp.task('default', function () {
    // place code for your default task here
});

var paths = {
    webroot: "wwwroot/",
    npmSrc: "./node_modules/",
    npmLibs: "wwwroot/lib/npmlibs/",
    scripts: ['scripts/**/*.js', 'scripts/**/*.ts', 'scripts/**/*.map']
};

gulp.task('clean', function () {
    return del([paths.webroot + '/scripts/**/*']);
});

gulp.task("lib", function () {
    gulp.src(paths.npmSrc + '/core-js/**/*.js')
        .pipe(gulp.dest(paths.npmLibs + '/core-js/'));

    gulp.src(paths.npmSrc + '/systemjs/dist/**/*.*', { base: paths.npmSrc + '/systemjs/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/systemjs/'));

    gulp.src('./node_modules/reflect-metadata/**/*.js')
        .pipe(gulp.dest(paths.npmLibs + '/reflect-metadata'));

    gulp.src(paths.npmSrc + '/@angular/**', { base: paths.npmSrc + '/@angular/' })
         .pipe(gulp.dest(paths.npmLibs + '/@angular/'));

    gulp.src(paths.npmSrc + '/zone.js/**/*.js', { base: paths.npmSrc + '/zone.js/' })
         .pipe(gulp.dest(paths.npmLibs + '/zone.js/'));

    gulp.src(paths.npmSrc + '/es6-shim/es6-sh*', { base: paths.npmSrc + '/es6-shim/' })
         .pipe(gulp.dest(paths.npmLibs + '/es6-shim/'));

    gulp.src(paths.npmSrc + '/es6-promise/dist/**/*.*', { base: paths.npmSrc + '/es6-promise/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/es6-promise/'));

    gulp.src(paths.npmSrc + '/rxjs/**', { base: paths.npmSrc + '/rxjs/' })
         .pipe(gulp.dest(paths.npmLibs + '/rxjs/'));
});

gulp.task('copy', function () {
    gulp.src('./Client/**/*.js')
        .pipe(gulp.dest(paths.webroot + '/scripts'));
});

gulp.task('default', ['lib', 'copy'], function () {
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'))
});

//gulp.task('watch', function () {
//    gulp.watch('./Client/**/*.*', ['copy']);
//});
