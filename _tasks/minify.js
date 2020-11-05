/* #### Setting #### */
const config = require("./_config.json");
const gulp = require("gulp");
const htmlmin = require("gulp-html-minifier");

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task("htmlmin", () => {
  return gulp
    .src(config.dist + "/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true, ignorePath: "/assets" }))
    .pipe(gulp.dest(config.dist));
});
