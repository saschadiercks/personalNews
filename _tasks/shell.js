/* #### Setting #### */
const config = require("./_config.json");
const gulp = require("gulp");
const shell = require("gulp-shell");

/* ################# */
/* ##### Tasks ##### */
/* ################# */
// change to react and run it
gulp.task(
	"react:up",
	gulp.series(shell.task("cd " + config.reactDir), shell.task("npm run start"))
);

// fire up vagrarnt
gulp.task("vagrant:up", shell.task("vagrant up"));
