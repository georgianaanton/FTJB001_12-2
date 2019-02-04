var gulp = require("gulp");
var clean = require("gulp-clean");
var inject = require("gulp-inject");
var webserver = require("gulp-webserver");

// prod mode
var htmlclean = require('gulp-htmlclean');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// setup forder structure
/* 
// pre-process, un-minified
src 
// where you will be running server
tmp
// production files, process, minified
dist
 */

const paths = {
    src: "./src/**/*",
    srcHTML: "./src/**/*.html",
    srcCSS: "./src/**/*.css",
    srcJS: "./src/**/*.js",

    tmp: './tmp',
    tmpIndex: './tmp/index.html',
    tmpCss: './tmp/css/**/*.css',
    tmpJs: './tmp/**/*.js',

    dist: 'dist',
    distIndex: 'dist/index.html',
    distCSS: 'dist/**/*.css',
    distJS: 'dist/**/*.js'
}

// setup html task
gulp.task('html', function(){
    return gulp.src(paths.srcHTML)
    .pipe(gulp.dest(paths.tmp))
})

// setup css task
gulp.task('css', function(){
    return gulp.src(paths.srcCSS)
    .pipe(gulp.dest(paths.tmp))
})

// setup js task
gulp.task('js', function(){
    return gulp.src(paths.srcJS)
    .pipe(gulp.dest(paths.tmp))
})

// gulp.task('copy', ['html', 'css', 'js']);

gulp.task('clean-tmp', function(){
    
        return gulp.src(paths.tmp, {read: false}) // makes it faster
        .pipe(clean())
    
})

gulp.task('copy', ['html', 'css', 'js']);


// inject files into index.html

gulp.task('inject', ['copy'], function(){
    var css = gulp.src(paths.tmpCss);
    var js = gulp.src(paths.tmpJs);

    return gulp.src(paths.tmpIndex)
        .pipe(inject(css, {relative: true}))
        .pipe(inject(js, {relative: true}))
        .pipe(gulp.dest(paths.tmp));
})

// serve the development 
gulp.task('serve', ['inject'], function(){
    return gulp.src(paths.tmp)
        .pipe(webserver({
            port: 8080,
            livereload: true
        }))
});

// watch for changes

gulp.task('watch', ['serve'], function(){
    gulp.watch(paths.src, ['inject'])
})


function runTasksSequential(tasks) {
    if (!tasks || tasks.length <= 0) return;

    const task = tasks[0];
    gulp.start(task, () => {
        console.log(`${task} finished`);
        runTasksSequential(tasks.slice(1));
    });
}

gulp.task('default', function (cb) {
    runTasksSequential([
        'clean-tmp',
        'watch'
    ]);
    cb();
});


gulp.task('html:dist', function(){
    return gulp.src(paths.srcHTML)
        // .pipe(htmlclean())
        .pipe(gulp.dest(paths.dist));
})

gulp.task('css:dist', function(){
    return gulp.src(paths.srcCSS)
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.dist));
})

gulp.task('js:dist', function(){
    return gulp.src(paths.srcJS)
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist));
})

gulp.task("copy:dist", ['html:dist', 'css:dist', 'js:dist'])

gulp.task('inject:dist', function(){
    var css = gulp.src(paths.distCSS);
    var js = gulp.src(paths.distJS);

    return gulp.src(paths.distIndex)
        .pipe(inject(css, {relative: true}))
        .pipe(inject(js, {relative: true}))
        .pipe(htmlclean())
        .pipe(gulp.dest(paths.dist));
})

gulp.task('clean-dist', function(){
    
    return gulp.src(paths.dist, {read: false}) // makes it faster
    .pipe(clean())

})

gulp.task('build', function(done){
    runTasksSequential([
        'clean-dist',
        'copy:dist',
        'inject:dist'
    ]);
    done();
});

