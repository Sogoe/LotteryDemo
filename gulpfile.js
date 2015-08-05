/**
 * Created by Mrlan on 2015/8/4.
 */
var gulp = require("gulp");
var less = require("gulp-less");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task("less", function() {
    gulp.src("./less/main.less")
        .pipe(less())
        .pipe(rename("main.css"))
        .pipe(gulp.dest("./build/css"));
});

//不做压缩
gulp.task("images", function() {
    gulp.src("./images/*.png")
        .pipe(gulp.dest("./build/images"));
});

gulp.task("js", function() {
    gulp.src("./js/*.js")
        .pipe(uglify())
        .pipe(concat("app.min.js"))
        .pipe(gulp.dest("./build/"));
});

gulp.task("watch", function() {
    gulp.watch("./less/*.less", ["less"]);
    gulp.watch("./js/*.js", ["js"]);
});

gulp.task("default", ["less", "images", "js", "watch"]);
gulp.task("build", ["less", "images", "js"]);