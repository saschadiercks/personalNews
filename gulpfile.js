/* #### Setting #### */
const gulp = require("gulp");
require("require-dir")("./_tasks");

/* ################# */
/* ##### Tasks ##### */
/* ################# */
// --- set environment ----
gulp.task("production", gulp.series("set-prod-node-env"));
gulp.task("development", gulp.series("set-dev-node-env"));

// --- group tasks ----
gulp.task("clean", gulp.series("clean:build"));
gulp.task("copy", gulp.series("copy:images", "copy:fonts"));
gulp.task("lint", gulp.series("lint:css"));
gulp.task("scripts", gulp.series("scripts:build"));
gulp.task("styles", gulp.series("lint:css", "compile:css"));
gulp.task("optimize", gulp.series("imagemin", "purge:css"));

// --- run tasks ----
gulp.task("dev", gulp.series("development", "scripts", "compile:css"));
gulp.task("serve", gulp.series("dev", "vagrant:up", "react:up"));

// WARNING: due to optimization of css, images and JS, this will take several minutes!
// but on the plus side you'll get a fully optimized site (SDI 2020)
// gulp.task(
// 	"build",
// 	gulp.series("production", "compile:css", "scripts", "copy", "optimize")
// );
