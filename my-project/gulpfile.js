var gulp = require("gulp")
 var del = require("del")
var clean = require('gulp-clean');
var sass = require('gulp-sass')(require('sass'));

const paths = {
    styles: {
        src: "src/style/**/*.scss",
        dest: 'dest/css/'
    },
    scripts: {
        src: "src/scripts/**/*.js",
        dest: 'dest/js/'
    }

}

gulp.task("mytask",function () {
   return console.log("Hello");

})


// function hello(cb) {

//     console.log("hello");
//     cb();
// }
function clean() {
   return del(['dest']);
}



// function styles() {
//     return gulp.src(paths.styles.src)
//         .pipe(sass())
//         .pipe(gulp.dest(paths.styles.dest))
// }
// exports.hello=hello
// exports.default=hello;

exports.clean = clean;
exports.styles = styles;
